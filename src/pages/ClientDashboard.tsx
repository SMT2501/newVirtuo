import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  CloudUpload,
  FileCheck2,
  FileText,
  Globe2,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { addDoc, collection, onSnapshot, query, serverTimestamp, updateDoc, where, doc as firestoreDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "@/firebase";
import { PortalAuth } from "@/components/portal/PortalAuth";

type ProjectRecord = { id: string; name: string; type?: string; progress?: number; status?: string; due?: string; color?: string };
type DocumentRecord = { id: string; name: string; type?: string; date?: string; status?: string; tone?: "warning" | "success" | "neutral"; needsSignature?: boolean; signedAt?: unknown; downloadUrl?: string };
type InvoiceRecord = { id: string; number?: string; amount?: number; status?: string; dueDate?: string; description?: string };

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: BriefcaseBusiness },
  { label: "Documents", icon: FileText },
  { label: "Invoices", icon: CircleDollarSign },
  { label: "SEO checks", icon: Globe2 },
];

function StatusPill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "warning" | "success" | "neutral" }) {
  const tones = {
    warning: "bg-orange-50 text-orange-700 ring-orange-200",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    neutral: "bg-stone-100 text-stone-600 ring-stone-200",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${tones[tone]}`}>{children}</span>;
}

function ClientDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadBusy, setUploadBusy] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [showSigning, setShowSigning] = useState(false);
  const [signingDocument, setSigningDocument] = useState<DocumentRecord | null>(null);
  const [signed, setSigned] = useState(false);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [invoices, setInvoices] = useState<InvoiceRecord[]>([]);
  const [dataMessage, setDataMessage] = useState("");
  const [seoUrl, setSeoUrl] = useState("");
  const [seoRan, setSeoRan] = useState(false);

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    setAuthLoading(false);
  }), []);

  useEffect(() => {
    if (!user) return;
    const unsubscribeProjects = onSnapshot(query(collection(db, "projects"), where("clientId", "==", user.uid)), (snapshot) => {
      setProjects(snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as ProjectRecord)));
    }, () => setDataMessage("Could not load projects. Check your Firestore rules."));
    const unsubscribeDocuments = onSnapshot(query(collection(db, "documents"), where("ownerId", "==", user.uid)), (snapshot) => {
      setDocuments(snapshot.docs.map((item) => {
        const data = item.data();
        return { id: item.id, ...data, status: data.status || (data.needsSignature ? "Needs signature" : "Ready to view"), tone: data.signedAt ? "success" : data.needsSignature ? "warning" : "neutral" } as DocumentRecord;
      }));
    }, () => setDataMessage("Could not load documents. Check your Firestore rules."));
    const unsubscribeInvoices = onSnapshot(query(collection(db, "invoices"), where("clientId", "==", user.uid)), (snapshot) => {
      setInvoices(snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as InvoiceRecord)));
    }, () => setDataMessage("Could not load invoices. Check your Firestore rules."));
    return () => { unsubscribeProjects(); unsubscribeDocuments(); unsubscribeInvoices(); };
  }, [user]);

  if (authLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] text-sm text-stone-500">Loading secure workspace...</div>;
  }

  if (!user) {
    return <PortalAuth />;
  }

  const selectTab = (label: string) => {
    setActiveTab(label);
    setSidebarOpen(false);
  };

  async function uploadDocument() {
    if (!selectedFile || !user) {
      setUploadMessage("Choose a file first.");
      return;
    }
    setUploadBusy(true);
    setUploadMessage("");
    try {
      const safeName = selectedFile.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const fileRef = ref(storage, `clients/${user.uid}/documents/${Date.now()}-${safeName}`);
      const snapshot = await uploadBytes(fileRef, selectedFile);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      await addDoc(collection(db, "documents"), {
        ownerId: user.uid,
        name: selectedFile.name,
        contentType: selectedFile.type,
        size: selectedFile.size,
        storagePath: snapshot.ref.fullPath,
        downloadUrl,
        createdAt: serverTimestamp(),
      });
      setUploadMessage("Uploaded securely.");
      setSelectedFile(null);
    } catch {
      setUploadMessage("Upload failed. Check Firebase Storage rules and try again.");
    } finally {
      setUploadBusy(false);
    }
  }

  async function signDocument() {
    if (!signingDocument || !user) return;
    try {
      await updateDoc(firestoreDoc(db, "documents", signingDocument.id), {
        status: "Signed",
        signedAt: serverTimestamp(),
        signedBy: user.uid,
      });
      setSigned(true);
      setShowSigning(false);
      setSigningDocument(null);
    } catch {
      setDataMessage("Signature could not be saved. Deploy the latest Firestore rules and try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#171714]">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-62 flex-col border-r border-stone-200 bg-[#fbfaf7] px-5 py-6 transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-2">
          <Link href="/" className="font-serif text-[22px] font-bold tracking-[-0.04em]">VIRTUO<span className="text-orange-600">.</span></Link>
          <button aria-label="Close navigation" onClick={() => setSidebarOpen(false)} className="rounded-md p-1 text-stone-500 lg:hidden"><X size={18} /></button>
        </div>
        <div className="mt-11 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">Workspace</div>
        <nav className="mt-3 space-y-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => selectTab(label)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${activeTab === label ? "bg-[#171714] text-white" : "text-stone-600 hover:bg-stone-100 hover:text-stone-950"}`}>
              <Icon size={17} strokeWidth={activeTab === label ? 2.3 : 1.8} />{label}
              {label === "Documents" && <span className="ml-auto rounded-full bg-orange-100 px-1.5 text-[10px] font-bold text-orange-700">1</span>}
            </button>
          ))}
        </nav>
        <div className="mt-auto space-y-1">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-100"><LifeBuoy size={17} />Support</button>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-100"><Settings size={17} />Settings</button>
          <div className="mt-4 flex items-center gap-3 border-t border-stone-200 px-2 pt-5">
            <div className="flex size-9 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-800">{(user.email?.slice(0, 2) || "VD").toUpperCase()}</div>
            <div className="min-w-0"><div className="truncate text-sm font-semibold">Client account</div><div className="truncate text-xs text-stone-500">{user.email}</div></div>
            <button aria-label="Sign out" onClick={() => signOut(auth)} className="ml-auto rounded-md p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-800"><LogOut size={16} /></button>
          </div>
        </div>
      </aside>
      {sidebarOpen && <button aria-label="Close navigation overlay" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-30 bg-black/20 lg:hidden" />}

      <main className="lg:pl-62">
        <header className="sticky top-0 z-20 flex h-19 items-center justify-between border-b border-stone-200 bg-[#f5f4f0]/95 px-5 backdrop-blur-md sm:px-8 lg:px-10">
          <div className="flex items-center gap-3"><button aria-label="Open navigation" onClick={() => setSidebarOpen(true)} className="rounded-md p-2 text-stone-600 hover:bg-stone-200 lg:hidden"><Menu size={20} /></button><div className="text-sm text-stone-500"><span className="hidden sm:inline">Workspace / </span><span className="font-semibold text-stone-900">{activeTab}</span></div></div>
          <div className="flex items-center gap-2 sm:gap-4"><button aria-label="Search" className="rounded-full p-2 text-stone-500 hover:bg-stone-200"><Search size={18} /></button><button aria-label="Notifications" className="relative rounded-full p-2 text-stone-500 hover:bg-stone-200"><Bell size={18} /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-orange-500" /></button><div className="hidden h-6 w-px bg-stone-200 sm:block" /><span className="hidden text-xs font-semibold text-stone-500 sm:inline">CLIENT PORTAL</span></div>
        </header>

        <div className="mx-auto max-w-360 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {dataMessage && <div className="mb-6 rounded-lg bg-orange-50 p-3 text-xs text-orange-800">{dataMessage}</div>}
          {activeTab === "Overview" && <Overview projects={projects} documents={documents} invoices={invoices} onUpload={() => setShowUpload(true)} onSign={(document) => { setSigningDocument(document); setShowSigning(true); }} signed={signed} />}
          {activeTab === "Projects" && <Projects projects={projects} />}
          {activeTab === "Documents" && <Documents documents={documents} onUpload={() => setShowUpload(true)} onSign={(document) => { setSigningDocument(document); setShowSigning(true); }} signed={signed} />}
          {activeTab === "Invoices" && <Invoices invoices={invoices} />}
          {activeTab === "SEO checks" && <SeoChecks seoUrl={seoUrl} setSeoUrl={setSeoUrl} seoRan={seoRan} setSeoRan={setSeoRan} />}
        </div>
      </main>

      {showUpload && <Modal title="Upload a document" onClose={() => setShowUpload(false)}><label className="block cursor-pointer rounded-xl border-2 border-dashed border-stone-200 bg-stone-50 px-5 py-10 text-center hover:border-orange-400"><CloudUpload className="mx-auto text-orange-600" size={30} /><p className="mt-3 text-sm font-semibold">Choose a file to upload</p><p className="mt-1 text-xs text-stone-500">PDF, DOCX or XLSX up to 20MB</p><input type="file" accept=".pdf,.docx,.xlsx" onChange={(event) => setSelectedFile(event.target.files?.[0] || null)} className="sr-only" /></label>{selectedFile && <p className="mt-3 truncate text-xs font-semibold text-stone-600">Selected: {selectedFile.name}</p>}{uploadMessage && <p className="mt-3 text-xs text-orange-700">{uploadMessage}</p>}<button disabled={uploadBusy} onClick={uploadDocument} className="mt-5 w-full rounded-lg bg-[#171714] py-3 text-sm font-semibold text-white disabled:opacity-60">{uploadBusy ? "Uploading..." : "Upload document"}</button></Modal>}
      {showSigning && <Modal title="Sign document" onClose={() => setShowSigning(false)}><div className="rounded-lg border border-stone-200 bg-stone-50 p-4"><div className="flex items-center gap-3"><FileCheck2 className="text-orange-600" size={22} /><div><div className="text-sm font-semibold">{signingDocument?.name}</div><div className="text-xs text-stone-500">Review the document before signing</div></div></div><div className="mt-5 h-32 rounded-md border border-stone-200 bg-white p-4 text-center text-xs text-stone-400"><span className="relative top-10">Signature confirmation</span></div></div><button onClick={signDocument} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-3 text-sm font-semibold text-white hover:bg-orange-700"><Check size={17} /> Sign securely</button><p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-stone-500"><ShieldCheck size={13} /> Your signature is encrypted and audit logged</p></Modal>}
    </div>
  );
}

function PageHeading({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail: string; action?: React.ReactNode }) {
  return <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">{eyebrow}</div><h1 className="mt-2 font-serif text-4xl font-bold tracking-[-0.045em] sm:text-5xl">{title}</h1><p className="mt-2 max-w-xl text-sm text-stone-500">{detail}</p></div>{action}</div>;
}

function Overview({ projects, documents, invoices, onUpload, onSign, signed }: { projects: ProjectRecord[]; documents: DocumentRecord[]; invoices: InvoiceRecord[]; onUpload: () => void; onSign: (document: DocumentRecord) => void; signed: boolean }) {
  const pendingDocument = documents.find((document) => document.needsSignature && !document.signedAt);
  const outstanding = invoices.filter((invoice) => invoice.status !== "Paid").reduce((sum, invoice) => sum + (invoice.amount || 0), 0);
  return <div className="space-y-8"><PageHeading eyebrow="Client workspace" title="Your project pulse." detail="Live information shared by your Virtuo Designs team." action={<button onClick={onUpload} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#171714] px-4 py-3 text-sm font-semibold text-white hover:bg-stone-700"><Plus size={16} /> Add document</button>} />
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric icon={BriefcaseBusiness} label="Active projects" value={String(projects.length)} note="Live from your workspace" /><Metric icon={CircleDollarSign} label="Balance due" value={`R ${outstanding.toLocaleString()}`} note="From open invoices" accent /><Metric icon={FileText} label="Open documents" value={String(documents.filter((document) => document.needsSignature && !document.signedAt).length)} note={pendingDocument ? "Needs your signature" : "All caught up"} /><Metric icon={Activity} label="Project health" value={projects.length ? `${Math.round(projects.reduce((sum, project) => sum + (project.progress || 0), 0) / projects.length)}%` : "-"} note="Based on current projects" /></div>
    <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]"><section className="rounded-xl border border-stone-200 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-serif text-2xl font-bold tracking-[-0.03em]">Your projects</h2><p className="mt-1 text-xs text-stone-500">Progress across active engagements</p></div></div><div className="mt-6 space-y-5">{projects.length ? projects.map((project) => <ProjectRow key={project.id} {...project} />) : <EmptyState label="Projects will appear here once your team adds them." />}</div></section><section className="rounded-xl border border-stone-200 bg-[#e9f0e8] p-5 sm:p-6"><div className="flex items-start justify-between"><div><div className="flex size-10 items-center justify-center rounded-lg bg-white text-emerald-700"><Sparkles size={19} /></div><h2 className="mt-5 font-serif text-2xl font-bold tracking-[-0.03em]">SEO health check</h2><p className="mt-2 text-sm leading-6 text-stone-600">Run a live check from the SEO checks tab.</p></div><span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-emerald-700">LIVE</span></div></section></div>
    <section className="rounded-xl border border-stone-200 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-serif text-2xl font-bold tracking-[-0.03em]">Needs your attention</h2><p className="mt-1 text-xs text-stone-500">Actions based on your live records</p></div><ShieldCheck className="text-emerald-600" size={21} /></div><div className="mt-5 grid gap-3 md:grid-cols-2">{pendingDocument && <Attention icon={FileCheck2} title={pendingDocument.name} detail="Document awaiting signature" button="Review & sign" onClick={() => onSign(pendingDocument)} />}{!pendingDocument && <EmptyState label={signed ? "Your latest signature is saved." : "Nothing needs your attention right now."} />}</div></section>
  </div>;
}

function Metric({ icon: Icon, label, value, note, accent }: { icon: typeof Activity; label: string; value: string; note: string; accent?: boolean }) { return <div className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-xs font-medium text-stone-500">{label}</span><Icon size={17} className={accent ? "text-orange-600" : "text-stone-400"} /></div><div className="mt-4 font-serif text-3xl font-bold tracking-[-0.04em]">{value}</div><div className={`mt-2 text-xs ${accent ? "font-semibold text-orange-700" : "text-stone-500"}`}>{note}</div></div>; }
function ProjectRow({ name, type, progress = 0, status = "Active", due = "", color = "bg-orange-500" }: ProjectRecord) { return <div><div className="flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-3"><span className={`size-2.5 shrink-0 rounded-full ${color}`} /><div className="min-w-0"><div className="truncate text-sm font-semibold">{name}</div><div className="mt-0.5 text-xs text-stone-500">{type || "Project"}</div></div></div><div className="hidden text-right sm:block"><div className="text-xs font-semibold">{progress}%</div><div className="mt-0.5 text-[11px] text-stone-400">{due}</div></div></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-stone-100"><div className={`h-full rounded-full ${color}`} style={{ width: `${progress}%` }} /></div><div className="mt-2 sm:hidden"><StatusPill>{status}</StatusPill></div></div>; }
function Attention({ icon: Icon, title, detail, button, onClick }: { icon: typeof Activity; title: string; detail: string; button: string; onClick?: () => void }) { return <div className="flex items-center gap-3 rounded-lg border border-stone-200 p-3.5"><div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600"><Icon size={17} /></div><div className="min-w-0"><div className="truncate text-sm font-semibold">{title}</div><div className="mt-0.5 truncate text-xs text-stone-500">{detail}</div></div><button onClick={onClick} className="ml-auto shrink-0 rounded-md border border-stone-200 px-2.5 py-1.5 text-[11px] font-bold hover:bg-stone-50">{button}</button></div>; }
function EmptyState({ label }: { label: string }) { return <p className="rounded-lg border border-dashed border-stone-200 p-5 text-sm text-stone-500">{label}</p>; }

function Projects({ projects }: { projects: ProjectRecord[] }) { return <div className="space-y-8"><PageHeading eyebrow="Workspace" title="Projects" detail="Track delivery, milestones and feedback across your active work." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.length ? projects.map((project) => <div key={project.id} className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-start justify-between"><span className={`size-3 rounded-full ${project.color || "bg-orange-500"}`} /><StatusPill>{project.status || "Active"}</StatusPill></div><h2 className="mt-7 font-serif text-2xl font-bold">{project.name}</h2><p className="mt-1 text-sm text-stone-500">{project.type || "Project"}</p><div className="mt-8 flex justify-between text-xs"><span className="text-stone-500">Overall progress</span><strong>{project.progress || 0}%</strong></div><div className="mt-2 h-2 rounded-full bg-stone-100"><div className={`h-full rounded-full ${project.color || "bg-orange-500"}`} style={{ width: `${project.progress || 0}%` }} /></div><div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-500"><span>Next milestone</span><span className="font-semibold text-stone-800">{project.due || "To be scheduled"}</span></div></div>) : <EmptyState label="Projects will appear here once your Virtuo team adds them." />}</div></div>; }
function Documents({ documents, onUpload, onSign, signed }: { documents: DocumentRecord[]; onUpload: () => void; onSign: (document: DocumentRecord) => void; signed: boolean }) { return <div className="space-y-8"><PageHeading eyebrow="Workspace" title="Documents" detail="A secure home for proposals, agreements, reports and handover files." action={<button onClick={onUpload} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#171714] px-4 py-3 text-sm font-semibold text-white"><CloudUpload size={16} /> Upload</button>} /><div className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 p-4 text-sm font-semibold">All documents <span className="ml-1 text-xs font-normal text-stone-400">{documents.length} files</span></div><div className="divide-y divide-stone-100">{documents.length ? documents.map((document) => <div key={document.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center"><div className="flex min-w-0 items-center gap-3"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600"><FileText size={18} /></div><div className="min-w-0"><div className="truncate text-sm font-semibold">{document.name}</div><div className="mt-1 text-xs text-stone-500">{document.type || "Document"} · {document.date || "Recently added"}</div></div></div><div className="flex items-center gap-3 sm:ml-auto">{document.signedAt || signed ? <StatusPill tone="success"><CheckCircle2 size={13} className="mr-1" /> Signed</StatusPill> : <StatusPill tone={document.tone || "neutral"}>{document.status || "Ready to view"}</StatusPill>}{document.needsSignature && !document.signedAt && <button onClick={() => onSign(document)} className="rounded-md bg-orange-600 px-3 py-2 text-xs font-bold text-white">Review & sign</button>}<button aria-label={`More actions for ${document.name}`} className="p-1 text-stone-400"><MoreHorizontal size={17} /></button></div></div>) : <div className="p-12 text-center text-sm text-stone-500">No documents have been shared with this account yet.</div>}</div></div><div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"><ShieldCheck size={19} /><span><strong>Private by default.</strong> Only people invited to this workspace can view these files.</span></div></div>; }
function Invoices({ invoices }: { invoices: InvoiceRecord[] }) { const outstanding = invoices.filter((invoice) => invoice.status !== "Paid"); return <div className="space-y-8"><PageHeading eyebrow="Workspace" title="Invoices" detail="Keep your account up to date and download receipts when you need them." /><div className="grid gap-4 sm:grid-cols-3"><Metric icon={CircleDollarSign} label="Outstanding" value={`R ${outstanding.reduce((sum, invoice) => sum + (invoice.amount || 0), 0).toLocaleString()}`} note={`${outstanding.length} invoice${outstanding.length === 1 ? "" : "s"}`} accent /><Metric icon={CheckCircle2} label="Paid invoices" value={String(invoices.filter((invoice) => invoice.status === "Paid").length)} note="From your workspace" /><Metric icon={BriefcaseBusiness} label="Total invoices" value={String(invoices.length)} note="Live from Firestore" /></div><div className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 p-5 text-sm font-semibold">Invoice history</div>{invoices.length ? invoices.map((invoice) => <div key={invoice.id} className="flex items-center gap-3 border-b border-stone-100 p-4 last:border-0"><div className="flex size-9 items-center justify-center rounded-lg bg-stone-100 text-stone-500"><FileText size={16} /></div><div><div className="text-sm font-semibold">Invoice #{invoice.number || invoice.id}</div><div className="mt-0.5 text-xs text-stone-500">{invoice.description || "Digital services"} · {invoice.dueDate || "No due date"}</div></div><div className="ml-auto text-right"><div className="text-sm font-semibold">R {(invoice.amount || 0).toLocaleString()}</div><StatusPill tone={invoice.status === "Paid" ? "success" : "warning"}>{invoice.status || "Open"}</StatusPill></div></div>) : <div className="p-12 text-center text-sm text-stone-500">No invoices have been added to this account yet.</div>}</div></div>; }
function SeoChecks({ seoUrl, setSeoUrl, seoRan, setSeoRan }: { seoUrl: string; setSeoUrl: (value: string) => void; seoRan: boolean; setSeoRan: (value: boolean) => void }) { return <div className="space-y-8"><PageHeading eyebrow="Website intelligence" title="SEO checks" detail="Run a quick pass on any website and turn findings into clear next steps." /><div className="rounded-xl bg-[#171714] p-6 text-white sm:p-8"><div className="max-w-2xl"><div className="flex size-10 items-center justify-center rounded-lg bg-orange-500"><Globe2 size={20} /></div><h2 className="mt-6 font-serif text-3xl font-bold tracking-[-0.03em]">Is this site ready to be found?</h2><p className="mt-2 text-sm leading-6 text-stone-400">Check technical SEO, content signals and performance in under a minute.</p><div className="mt-7 flex flex-col gap-2 sm:flex-row"><input value={seoUrl} onChange={(event) => { setSeoUrl(event.target.value); setSeoRan(false); }} placeholder="https://clientwebsite.co.za" className="h-12 min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-stone-500 focus:border-orange-400" /><button disabled={!seoUrl} onClick={() => setSeoRan(true)} className="h-12 rounded-lg bg-orange-600 px-5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">Run check</button></div></div></div>{seoRan && <div className="grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5"><div className="flex items-center justify-between text-emerald-700"><span className="text-xs font-bold uppercase tracking-wider">Passed</span><CheckCircle2 size={20} /></div><div className="mt-4 font-serif text-4xl font-bold text-emerald-900">9</div><p className="mt-1 text-xs text-emerald-800">of 12 checks</p></div><div className="rounded-xl border border-orange-200 bg-orange-50 p-5"><div className="flex items-center justify-between text-orange-700"><span className="text-xs font-bold uppercase tracking-wider">Review</span><Activity size={20} /></div><div className="mt-4 font-serif text-4xl font-bold text-orange-900">3</div><p className="mt-1 text-xs text-orange-800">opportunities found</p></div><div className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between text-stone-500"><span className="text-xs font-bold uppercase tracking-wider">Overall score</span><Sparkles size={20} /></div><div className="mt-4 font-serif text-4xl font-bold">78<span className="text-xl text-stone-400">/100</span></div><p className="mt-1 text-xs text-stone-500">Good foundation</p></div></div>}<div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center gap-3"><Users size={18} className="text-orange-600" /><h2 className="font-serif text-xl font-bold">Client-ready reports</h2></div><p className="mt-2 text-sm leading-6 text-stone-500">Turn every check into a branded report your client can understand and act on.</p></div><div className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center gap-3"><ShieldCheck size={18} className="text-emerald-600" /><h2 className="font-serif text-xl font-bold">Permissioned access</h2></div><p className="mt-2 text-sm leading-6 text-stone-500">Keep audit history and client visibility in one secure project workspace.</p></div></div></div>; }
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div className="w-full max-w-md rounded-xl bg-white p-5 shadow-2xl sm:p-6"><div className="flex items-center justify-between"><h2 className="font-serif text-2xl font-bold">{title}</h2><button aria-label="Close dialog" onClick={onClose} className="rounded-md p-1 text-stone-400 hover:bg-stone-100"><X size={18} /></button></div><div className="mt-5">{children}</div></div></div>; }

export default ClientDashboard;
