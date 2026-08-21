import { FormEvent, useEffect, useMemo, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { getBytes, ref, uploadBytes } from "firebase/storage";
import {
  Bell,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  CloudUpload,
  Download,
  FileCheck2,
  FileText,
  LayoutDashboard,
  LoaderCircle,
  LogOut,
  Menu,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { auth, db, storage } from "@/firebase";
import { PortalAuth } from "@/components/portal/PortalAuth";
import {
  type ActivityRecord,
  type ClientRecord,
  type DocumentRecord,
  type InvoiceRecord,
  type ProjectRecord,
  type TaskRecord,
  accountFor,
  formatMoney,
  invoiceTotal,
  isPastDue,
  statusTone,
  timestampLabel,
} from "@/lib/crm";
import { downloadInvoicePdf, pdfBlob, stampSignature } from "@/lib/pdf";

type Tab = "Overview" | "Projects" | "Tasks" | "Documents" | "Invoices" | "Activity";
const tabs: { label: Tab; icon: typeof LayoutDashboard }[] = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: BriefcaseBusiness },
  { label: "Tasks", icon: ClipboardList },
  { label: "Documents", icon: FileCheck2 },
  { label: "Invoices", icon: CircleDollarSign },
  { label: "Activity", icon: Bell },
];

export default function ClientDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ClientRecord>();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [tasks, setTasks] = useState<TaskRecord[]>([]);
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [invoices, setInvoices] = useState<InvoiceRecord[]>([]);
  const [activities, setActivities] = useState<ActivityRecord[]>([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [signing, setSigning] = useState<DocumentRecord | null>(null);
  const [signatureName, setSignatureName] = useState("");
  const [consented, setConsented] = useState(false);
  const [declineReason, setDeclineReason] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [signBusy, setSignBusy] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadBusy, setUploadBusy] = useState(false);

  useEffect(() => onAuthStateChanged(auth, async (nextUser) => {
    setUser(nextUser);
    if (!nextUser) {
      setLoading(false);
      return;
    }
    try {
      const profileSnap = await getDoc(doc(db, "users", nextUser.uid));
      setProfile(profileSnap.exists() ? ({ id: profileSnap.id, ...profileSnap.data() } as ClientRecord) : { id: nextUser.uid, email: nextUser.email || "" });
    } catch {
      setError("We could not load your account profile.");
    } finally {
      setLoading(false);
    }
  }), []);

  useEffect(() => {
    if (user && profile) void loadPortal();
  }, [user, profile?.accountId]);

  async function loadPortal() {
    if (!user) return;
    setError("");
    const accountId = accountFor(profile, user.uid);
    try {
      const isLinkedAccount = Boolean(profile?.accountId);
      const [projectSnap, documentSnap, invoiceSnap] = await Promise.all([
        isLinkedAccount
          ? getDocs(query(collection(db, "projects"), where("accountId", "==", accountId), where("clientVisible", "==", true)))
          : getDocs(query(collection(db, "projects"), where("clientId", "==", accountId))),
        isLinkedAccount
          ? getDocs(query(collection(db, "documents"), where("accountId", "==", accountId), where("clientVisible", "==", true), where("recipientIds", "array-contains", user.uid)))
          : getDocs(query(collection(db, "documents"), where("ownerId", "==", accountId))),
        isLinkedAccount
          ? getDocs(query(collection(db, "invoices"), where("accountId", "==", accountId), where("clientVisible", "==", true)))
          : getDocs(query(collection(db, "invoices"), where("clientId", "==", accountId))),
      ]);
      const taskSnap = isLinkedAccount
        ? await getDocs(query(collection(db, "tasks"), where("accountId", "==", accountId), where("clientVisible", "==", true)))
        : null;
      const activitySnap = isLinkedAccount
        ? await getDocs(query(collection(db, "activities"), where("accountId", "==", accountId), where("clientVisible", "==", true)))
        : null;
      const loadedDocuments = documentSnap.docs.map((item) => ({ id: item.id, ...item.data() } as DocumentRecord));
      setProjects(projectSnap.docs.map((item) => ({ id: item.id, ...item.data() } as ProjectRecord)));
      setTasks(taskSnap ? taskSnap.docs.map((item) => ({ id: item.id, ...item.data() } as TaskRecord)) : []);
      setDocuments(loadedDocuments);
      setInvoices(invoiceSnap.docs.map((item) => ({ id: item.id, ...item.data() } as InvoiceRecord)));
      setActivities(activitySnap ? activitySnap.docs.map((item) => ({ id: item.id, ...item.data() } as ActivityRecord)).slice(-30).reverse() : []);
      const requestedDocumentId = new URLSearchParams(window.location.search).get("document");
      const requestedDocument = requestedDocumentId && loadedDocuments.find((record) => record.id === requestedDocumentId);
      if (requestedDocument && requestedDocument.needsSignature && requestedDocument.status !== "signed" && requestedDocument.status !== "declined") {
        window.history.replaceState({}, "", `${window.location.pathname}${window.location.hash}`);
        openSignature(requestedDocument);
      }
    } catch {
      setError("Your workspace could not be loaded. The team may still need to deploy the updated Firebase rules.");
    }
  }

  async function signDocument() {
    if (!user || !signing || !signatureName.trim() || !consented) return;
    if (!signing.storagePath || !isPdf(signing)) {
      setError("Only PDF documents can be signed in the portal. Ask your account team to send a PDF version.");
      return;
    }
    if (isDocumentExpired(signing)) {
      setError("This signature request has expired. Ask your account team to send an updated version.");
      return;
    }
    setSignBusy(true);
    try {
      const source = await getBytes(ref(storage, signing.storagePath));
      const bytes = await stampSignature(source, signatureName.trim(), signing.signatureField);
      const accountId = accountFor(profile, user.uid);
      const signedRef = ref(storage, `accounts/${accountId}/documents/${signing.id}/signed-${user.uid}.pdf`);
      const uploaded = await uploadBytes(signedRef, pdfBlob(bytes));
      await updateDoc(doc(db, "documents", signing.id), {
        status: "signed", signedAt: serverTimestamp(), signedBy: user.uid, signedByName: signatureName.trim(),
        signedStoragePath: uploaded.ref.fullPath,
      });
      await recordDocumentEvent(signing, "signed");
      setMessage("Your signed PDF has been saved. You can download it from Documents.");
      setSigning(null);
      setSignatureName("");
      setConsented(false);
      setDeclineReason("");
      await loadPortal();
    } catch {
      setError("We could not finalize the signed PDF. Please check your connection and try again.");
    } finally {
      setSignBusy(false);
    }
  }

  async function declineDocument() {
    if (!user || !signing || !declineReason.trim()) return;
    setSignBusy(true);
    try {
      await updateDoc(doc(db, "documents", signing.id), {
        status: "declined", declinedAt: serverTimestamp(), declinedBy: user.uid, declineReason: declineReason.trim(),
      });
      await recordDocumentEvent(signing, "declined");
      setSigning(null);
      setDeclineReason("");
      setMessage("Your request for changes was sent to the Virtuo team.");
      await loadPortal();
    } catch {
      setError("We could not record the request for changes. Please try again.");
    } finally {
      setSignBusy(false);
    }
  }

  async function recordDocumentEvent(record: DocumentRecord, eventType: "viewed" | "downloaded" | "signed" | "declined") {
    if (!user || !record.accountId) return;
    await addDoc(collection(db, "documentEvents"), {
      accountId: record.accountId, documentId: record.id, eventType, actorId: user.uid, createdAt: serverTimestamp(),
    });
  }

  function openSignature(record: DocumentRecord) {
    if (isDocumentExpired(record)) {
      setError("This signature request has expired. Ask your account team to send an updated version.");
      return;
    }
    void (async () => {
      try {
        const bytes = await getBytes(ref(storage, record.storagePath || ""));
        setPreviewUrl(URL.createObjectURL(new Blob([bytes], { type: "application/pdf" })));
        setSigning(record);
        await recordDocumentEvent(record, "viewed");
      } catch {
        setError("This document could not be opened. Please refresh or contact your account team.");
      }
    })();
  }

  async function downloadDocument(record: DocumentRecord) {
    const path = record.signedStoragePath || record.storagePath;
    if (!path) return;
    try {
      const bytes = await getBytes(ref(storage, path));
      const url = URL.createObjectURL(new Blob([bytes], { type: record.contentType || "application/octet-stream" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = record.signedStoragePath ? `signed-${record.name}` : record.name;
      anchor.click();
      URL.revokeObjectURL(url);
      await recordDocumentEvent(record, "downloaded");
    } catch {
      setError("The document could not be downloaded. Please refresh or contact your account team.");
    }
  }

  async function uploadClientFile(event: FormEvent) {
    event.preventDefault();
    if (!user || !uploadFile) return;
    if (uploadFile.size > 20 * 1024 * 1024) {
      setError("Documents must be smaller than 20 MB.");
      return;
    }
    setUploadBusy(true);
    try {
      const accountId = accountFor(profile, user.uid);
      const isLinkedAccount = Boolean(profile?.accountId);
      const recordRef = doc(collection(db, "documents"));
      const safeName = uploadFile.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const fileRef = ref(storage, isLinkedAccount ? `accounts/${accountId}/documents/${recordRef.id}/client-${safeName}` : `clients/${user.uid}/documents/${safeName}`);
      const uploaded = await uploadBytes(fileRef, uploadFile);
      await setDoc(recordRef, {
        ...(isLinkedAccount ? { accountId, recipientIds: [user.uid] } : {}), ownerId: user.uid, uploaderId: user.uid, name: uploadTitle.trim() || uploadFile.name, contentType: uploadFile.type,
        size: uploadFile.size, storagePath: uploaded.ref.fullPath, clientVisible: true, needsSignature: false,
        status: "draft", createdAt: serverTimestamp(),
      });
      if (isLinkedAccount) await addDoc(collection(db, "activities"), {
        accountId, type: "client_document_uploaded", message: "A client document was uploaded for the Virtuo team.",
        actorId: user.uid, clientVisible: true, createdAt: serverTimestamp(),
      });
      setUploadFile(null);
      setUploadTitle("");
      setShowUpload(false);
      setMessage("Your document was uploaded securely.");
      await loadPortal();
    } catch {
      setError("The document could not be uploaded. Please try again or contact your project team.");
    } finally {
      setUploadBusy(false);
    }
  }

  const outstanding = invoices.filter((invoice) => !["paid", "void"].includes((invoice.status || "").toLowerCase())).reduce((sum, invoice) => sum + invoiceTotal(invoice), 0);
  const pendingSignature = documents.find((record) => record.needsSignature && !record.signedAt && record.status !== "signed" && record.status !== "declined" && !isDocumentExpired(record));
  const openTasks = tasks.filter((task) => task.status !== "done");
  const accountName = profile?.name || profile?.email?.split("@")[0] || "Client";

  if (loading) return <Loading />;
  if (!user) return <PortalAuth />;

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#1a1a17]">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-stone-200 bg-[#1b211d] px-4 py-5 text-stone-200 transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-3"><Link href="/" className="font-serif text-2xl font-bold text-white">VIRTUO<span className="text-orange-400">.</span></Link><button className="lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close navigation"><X size={18} /></button></div>
        <div className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-stone-500">Client workspace</div>
        <nav className="mt-3 space-y-1">{tabs.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setTab(label); setSidebarOpen(false); }} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold ${tab === label ? "bg-[#d96b22] text-white" : "text-stone-300 hover:bg-white/8 hover:text-white"}`}><Icon size={17} />{label}{label === "Documents" && pendingSignature && <span className="ml-auto rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold text-orange-700">1</span>}</button>)}</nav>
        <div className="mt-auto rounded-xl border border-white/10 bg-white/5 p-3"><div className="truncate text-sm font-semibold text-white">{accountName}</div><div className="mt-1 truncate text-[11px] text-stone-400">{user.email}</div><button onClick={() => signOut(auth)} className="mt-3 flex items-center gap-2 text-xs font-bold text-orange-300"><LogOut size={14} />Sign out</button></div>
      </aside>
      {sidebarOpen && <button className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close navigation overlay" />}

      <main className="lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 bg-[#f6f5f1]/95 px-5 py-4 backdrop-blur sm:px-8"><div className="flex items-center gap-3"><button onClick={() => setSidebarOpen(true)} className="rounded-lg border border-stone-200 bg-white p-2 lg:hidden" aria-label="Open navigation"><Menu size={18} /></button><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Client portal</div><div className="mt-0.5 text-sm font-semibold text-stone-700">{tab}</div></div></div><div className="flex items-center gap-3"><button onClick={() => void loadPortal()} className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-600">Refresh</button>{["admin", "staff"].includes(profile?.role || "") && <Link href="/admin" className="rounded-lg bg-[#171714] px-3 py-2 text-xs font-bold text-white">Open internal CRM</Link>}<div className="hidden text-right sm:block"><div className="text-xs font-bold">{accountName}</div><div className="text-[11px] text-stone-500">Secure workspace</div></div></div></header>

        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:py-9">
          {error && <Banner tone="error" text={error} onDismiss={() => setError("")} />}
          {message && <Banner tone="success" text={message} onDismiss={() => setMessage("")} />}
          {tab === "Overview" && <PortalOverview projects={projects} openTasks={openTasks} documents={documents} outstanding={outstanding} pendingSignature={pendingSignature} onTab={setTab} onSign={openSignature} />}
          {tab === "Projects" && <Projects projects={projects} />}
          {tab === "Tasks" && <Tasks tasks={tasks} projects={projects} />}
          {tab === "Documents" && <Documents documents={documents} onSign={openSignature} onDownload={(record) => void downloadDocument(record)} onUpload={() => setShowUpload(true)} />}
          {tab === "Invoices" && <Invoices invoices={invoices} accountName={accountName} />}
          {tab === "Activity" && <Activity activities={activities} />}
        </div>
      </main>

      {signing && <SignatureModal document={signing} previewUrl={previewUrl} name={signatureName} setName={setSignatureName} consented={consented} setConsented={setConsented} declineReason={declineReason} setDeclineReason={setDeclineReason} busy={signBusy} onClose={() => { URL.revokeObjectURL(previewUrl); setPreviewUrl(""); setSigning(null); }} onSign={signDocument} onDecline={declineDocument} />}
      {showUpload && <UploadModal file={uploadFile} setFile={setUploadFile} title={uploadTitle} setTitle={setUploadTitle} busy={uploadBusy} onClose={() => setShowUpload(false)} onSubmit={uploadClientFile} />}
    </div>
  );
}

function PortalOverview({ projects, openTasks, documents, outstanding, pendingSignature, onTab, onSign }: { projects: ProjectRecord[]; openTasks: TaskRecord[]; documents: DocumentRecord[]; outstanding: number; pendingSignature?: DocumentRecord; onTab: (value: Tab) => void; onSign: (document: DocumentRecord) => void }) {
  return <div className="space-y-7"><Heading eyebrow="Your account" title="A calm view of the work ahead." detail="Projects, approvals, documents, and invoices shared by your Virtuo team." /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric icon={BriefcaseBusiness} label="Active projects" value={String(projects.length)} detail="Across your account" /><Metric icon={ClipboardList} label="Open tasks" value={String(openTasks.length)} detail={openTasks.some((task) => isPastDue(task.dueDate)) ? "Some need attention" : "Nothing overdue"} tone="orange" /><Metric icon={FileCheck2} label="Documents" value={String(documents.length)} detail={pendingSignature ? "A signature is waiting" : "All caught up"} tone={pendingSignature ? "orange" : "green"} /><Metric icon={CircleDollarSign} label="Balance due" value={formatMoney(outstanding)} detail="Open invoices only" tone="orange" /></div><div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]"><section className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><div><h2 className="font-serif text-2xl font-bold">Project pulse</h2><p className="mt-1 text-xs text-stone-500">Delivery shared with your team.</p></div><button onClick={() => onTab("Projects")} className="text-xs font-bold text-orange-700">View all</button></div><div className="mt-5 space-y-5">{projects.length ? projects.slice(0, 4).map((project) => <div key={project.id}><div className="flex justify-between gap-3"><div><strong className="text-sm">{project.name}</strong><p className="mt-1 text-xs text-stone-500">{project.type || "Project"} · {project.status || "In progress"}</p></div><span className="text-xs font-bold">{project.progress || 0}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-orange-500" style={{ width: `${project.progress || 0}%` }} /></div></div>) : <Empty label="Your projects will appear here once they are shared." />}</div></section><section className={`rounded-xl border p-5 ${pendingSignature ? "border-orange-200 bg-orange-50" : "border-emerald-200 bg-emerald-50"}`}>{pendingSignature ? <><FileCheck2 className="text-orange-700" size={22} /><div className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Action required</div><h2 className="mt-2 font-serif text-2xl font-bold">{pendingSignature.name}</h2><p className="mt-2 text-sm leading-6 text-stone-600">Review the PDF, confirm your consent, and sign securely in the portal.</p><button onClick={() => onSign(pendingSignature)} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-xs font-bold text-white"><Check size={15} />Review and sign</button></> : <><ShieldCheck className="text-emerald-700" size={22} /><h2 className="mt-5 font-serif text-2xl font-bold">You are up to date.</h2><p className="mt-2 text-sm leading-6 text-stone-600">New document requests, task updates, and invoices will appear here when your team shares them.</p></>}</section></div></div>;
}

function Projects({ projects }: { projects: ProjectRecord[] }) { return <div className="space-y-6"><Heading eyebrow="Delivery" title="Projects" detail="Progress, key dates, and the work currently being delivered for your account." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.length ? projects.map((project) => <article key={project.id} className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex justify-between"><Status status={project.status || "In progress"} /><span className="text-xs font-bold text-stone-500">{project.progress || 0}%</span></div><h2 className="mt-6 font-serif text-2xl font-bold">{project.name}</h2><p className="mt-1 text-sm text-stone-500">{project.type || "Project"}</p><div className="mt-7 h-2 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-orange-500" style={{ width: `${project.progress || 0}%` }} /></div><div className="mt-4 flex justify-between text-xs text-stone-500"><span>Next milestone</span><strong className="text-stone-800">{project.dueDate || project.due || "To be confirmed"}</strong></div></article>) : <Empty label="No projects have been shared with your account yet." />}</div></div>; }
function Tasks({ tasks, projects }: { tasks: TaskRecord[]; projects: ProjectRecord[] }) { return <div className="space-y-6"><Heading eyebrow="Your actions" title="Tasks" detail="The items your team has made visible to keep delivery moving." /><section className="overflow-hidden rounded-xl border border-stone-200 bg-white">{tasks.length ? tasks.map((task) => <div key={task.id} className="flex items-center gap-3 border-b border-stone-100 p-4 last:border-0"><div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${task.status === "done" ? "bg-emerald-100 text-emerald-700" : "bg-stone-100 text-stone-500"}`}><CheckCircle2 size={17} /></div><div className="min-w-0 flex-1"><strong className="text-sm">{task.title}</strong><p className="mt-1 text-xs text-stone-500">{projects.find((project) => project.id === task.projectId)?.name || "Account task"} · due {task.dueDate || "to be confirmed"}</p></div><Status status={task.status || "todo"} /></div>) : <Empty label="No client-visible tasks are open." />}</section></div>; }
function Documents({ documents, onSign, onDownload, onUpload }: { documents: DocumentRecord[]; onSign: (document: DocumentRecord) => void; onDownload: (document: DocumentRecord) => void; onUpload: () => void }) { return <div className="space-y-6"><Heading eyebrow="Secure files" title="Documents" detail="Download shared files, sign PDFs, and send a file back to your account team." action={<button onClick={onUpload} className="primary"><CloudUpload size={16} />Upload document</button>} /><section className="overflow-hidden rounded-xl border border-stone-200 bg-white">{documents.length ? documents.map((record) => <div key={record.id} className="flex flex-col gap-3 border-b border-stone-100 p-4 last:border-0 sm:flex-row sm:items-center"><div className="flex min-w-0 flex-1 items-center gap-3"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><FileText size={18} /></div><div className="min-w-0"><strong className="block truncate text-sm">{record.name}</strong><p className="mt-1 text-xs text-stone-500">{record.needsSignature ? "Signature request" : "Shared document"} · {isDocumentExpired(record) ? "Expired" : record.signedAt ? "Completed" : `Version ${record.version || 1}`}</p></div></div><div className="flex items-center gap-2"><Status status={isDocumentExpired(record) && record.status === "awaiting_signature" ? "expired" : record.status || "draft"} />{record.needsSignature && !record.signedAt && record.status !== "declined" && !isDocumentExpired(record) && <button onClick={() => onSign(record)} className="rounded-lg bg-orange-600 px-3 py-2 text-xs font-bold text-white">Review & sign</button>}<button onClick={() => onDownload(record)} className="rounded-lg border border-stone-200 p-2 text-stone-600" aria-label={`Download ${record.name}`}><Download size={16} /></button></div></div>) : <Empty label="No documents have been shared with your account yet." />}</section></div>; }
function Invoices({ invoices, accountName }: { invoices: InvoiceRecord[]; accountName: string }) { const open = invoices.filter((invoice) => !["paid", "void"].includes((invoice.status || "").toLowerCase())); return <div className="space-y-6"><Heading eyebrow="Billing" title="Invoices" detail="Review your invoice history, payment status, and downloadable invoice records." /><div className="grid gap-4 sm:grid-cols-3"><Metric icon={CircleDollarSign} label="Outstanding" value={formatMoney(open.reduce((sum, invoice) => sum + invoiceTotal(invoice), 0))} detail={`${open.length} open invoice(s)`} tone="orange" /><Metric icon={CheckCircle2} label="Paid" value={String(invoices.filter((invoice) => invoice.status === "paid").length)} detail="Marked as paid" tone="green" /><Metric icon={FileText} label="Total invoices" value={String(invoices.length)} detail="Available to your account" /></div><section className="overflow-hidden rounded-xl border border-stone-200 bg-white">{invoices.length ? invoices.map((invoice) => <div key={invoice.id} className="flex items-center gap-3 border-b border-stone-100 p-4 last:border-0"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600"><FileText size={17} /></div><div className="min-w-0 flex-1"><strong className="text-sm">{invoice.number || `INV-${invoice.id.slice(0, 6).toUpperCase()}`}</strong><p className="mt-1 text-xs text-stone-500">{invoice.description || "Professional services"} · due {invoice.dueDate || "on receipt"}</p></div><div className="text-right"><strong className="text-sm">{formatMoney(invoiceTotal(invoice), invoice.currency || "ZAR")}</strong><div className="mt-1"><Status status={invoice.status || "draft"} /></div></div><button onClick={() => downloadInvoicePdf(invoice, accountName)} className="rounded-lg border border-stone-200 p-2 text-stone-600" aria-label="Download invoice"><Download size={16} /></button></div>) : <Empty label="No invoices have been shared with your account yet." />}</section></div>; }
function Activity({ activities }: { activities: ActivityRecord[] }) { return <div className="space-y-6"><Heading eyebrow="Shared history" title="Activity" detail="A timeline of the project events, files, approvals, and billing updates visible to your account." /><section className="overflow-hidden rounded-xl border border-stone-200 bg-white">{activities.length ? activities.map((activity) => <div key={activity.id} className="flex gap-3 border-b border-stone-100 p-4 last:border-0"><div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><Bell size={15} /></div><div><p className="text-sm font-medium text-stone-700">{activity.message}</p><p className="mt-1 text-xs text-stone-400">{activity.type === "client_document_uploaded" ? "Client" : activity.actorName || "Virtuo team"} · {timestampLabel(activity.createdAt)}</p></div></div>) : <Empty label="Shared activity will appear here as your work progresses." />}</section></div>; }

function SignatureModal({ document, previewUrl, name, setName, consented, setConsented, declineReason, setDeclineReason, busy, onClose, onSign, onDecline }: { document: DocumentRecord; previewUrl: string; name: string; setName: (value: string) => void; consented: boolean; setConsented: (value: boolean) => void; declineReason: string; setDeclineReason: (value: string) => void; busy: boolean; onClose: () => void; onSign: () => void; onDecline: () => void }) { const canSign = isPdf(document); return <Modal title="Review and sign" onClose={onClose}><div className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50">{previewUrl && <iframe src={previewUrl} title={`Preview ${document.name}`} className="h-56 w-full bg-white" />}</div><div className="mt-4"><strong className="text-sm">{document.name}</strong><p className="mt-1 text-xs leading-5 text-stone-500">{canSign ? "Confirm your name and consent to place an electronic signature on this PDF. A completed copy will be saved to your account." : "This file is not a PDF. Please ask your account team to send a PDF version for in-platform signing."}</p></div>{canSign && <><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full legal name" className="mt-4 h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm outline-none focus:border-orange-500" /><label className="mt-3 flex gap-2 rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-900"><input className="mt-0.5" type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} />I agree to use an electronic signature for this document and understand the signed PDF will be recorded in this portal.</label><button disabled={!name.trim() || !consented || busy} onClick={onSign} className="primary mt-4 w-full justify-center disabled:opacity-50">{busy && <LoaderCircle className="animate-spin" size={16} />}{busy ? "Finalizing signed PDF…" : "Sign and save PDF"}</button><div className="mt-5 border-t border-stone-100 pt-4"><p className="text-xs font-bold text-stone-600">Need changes instead?</p><textarea value={declineReason} onChange={(event) => setDeclineReason(event.target.value)} placeholder="Tell the team what needs to change" className="mt-2 min-h-20 w-full rounded-lg border border-stone-200 p-3 text-sm outline-none focus:border-orange-500" /><button disabled={!declineReason.trim() || busy} onClick={onDecline} className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 text-xs font-bold text-stone-700 disabled:opacity-50">Request changes</button></div></>}</Modal>; }
function UploadModal({ file, setFile, title, setTitle, busy, onClose, onSubmit }: { file: File | null; setFile: (file: File | null) => void; title: string; setTitle: (value: string) => void; busy: boolean; onClose: () => void; onSubmit: (event: FormEvent) => void }) { return <Modal title="Upload a document" onClose={onClose}><form onSubmit={onSubmit}><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Document title (optional)" className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm outline-none focus:border-orange-500" /><label className="mt-3 block cursor-pointer rounded-lg border-2 border-dashed border-stone-200 bg-stone-50 p-7 text-center text-xs font-bold text-stone-600"><CloudUpload className="mx-auto mb-2 text-orange-600" size={22} />{file ? file.name : "Choose a PDF, DOCX, or XLSX (max 20 MB)"}<input className="sr-only" type="file" accept=".pdf,.docx,.xlsx" onChange={(event) => setFile(event.target.files?.[0] || null)} /></label><button disabled={!file || busy} className="primary mt-4 w-full justify-center disabled:opacity-50">{busy && <LoaderCircle className="animate-spin" size={16} />}{busy ? "Uploading…" : "Upload securely"}</button></form></Modal>; }
function Heading({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail: string; action?: React.ReactNode }) { return <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="text-[10px] font-bold uppercase tracking-[.2em] text-orange-700">{eyebrow}</div><h1 className="mt-2 font-serif text-4xl font-bold tracking-[-.045em] sm:text-5xl">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-stone-500">{detail}</p></div>{action}</div>; }
function Metric({ icon: Icon, label, value, detail, tone = "stone" }: { icon: typeof BriefcaseBusiness; label: string; value: string; detail: string; tone?: "stone" | "orange" | "green" }) { const styles = tone === "orange" ? "bg-orange-50 text-orange-700" : tone === "green" ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-600"; return <div className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-stone-500">{label}</span><span className={`flex size-9 items-center justify-center rounded-lg ${styles}`}><Icon size={17} /></span></div><div className="mt-5 font-serif text-3xl font-bold tracking-[-.04em]">{value}</div><p className="mt-1 text-xs text-stone-500">{detail}</p></div>; }
function Status({ status }: { status: string }) { const tone = statusTone(status); const styles = tone === "success" ? "bg-emerald-50 text-emerald-700 ring-emerald-200" : tone === "danger" ? "bg-red-50 text-red-700 ring-red-200" : tone === "warning" ? "bg-orange-50 text-orange-700 ring-orange-200" : "bg-stone-100 text-stone-600 ring-stone-200"; return <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-bold capitalize ring-1 ring-inset ${styles}`}>{status.replaceAll("_", " ")}</span>; }
function Banner({ tone, text, onDismiss }: { tone: "success" | "error"; text: string; onDismiss: () => void }) { return <div className={`mb-5 flex items-start justify-between gap-3 rounded-lg border p-3 text-xs font-semibold ${tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}><span>{text}</span><button onClick={onDismiss} aria-label="Dismiss message"><X size={15} /></button></div>; }
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"><div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-6"><div className="flex items-center justify-between"><h2 className="font-serif text-2xl font-bold">{title}</h2><button onClick={onClose} className="rounded-md p-1 text-stone-400 hover:bg-stone-100" aria-label="Close dialog"><X size={18} /></button></div><div className="mt-5">{children}</div></div></div>; }
function Empty({ label }: { label: string }) { return <div className="p-10 text-center text-sm leading-6 text-stone-500">{label}</div>; }
function Loading() { return <div className="flex min-h-screen items-center justify-center bg-[#f6f5f1] text-sm font-semibold text-stone-500"><LoaderCircle className="mr-2 animate-spin" size={17} />Loading your secure workspace…</div>; }
function isPdf(record: DocumentRecord) { return record.contentType === "application/pdf" || record.name.toLowerCase().endsWith(".pdf"); }
function isDocumentExpired(record: DocumentRecord) { return Boolean(record.expiresAt && typeof record.expiresAt === "object" && record.expiresAt !== null && "toDate" in record.expiresAt && typeof record.expiresAt.toDate === "function" && record.expiresAt.toDate() < new Date()); }