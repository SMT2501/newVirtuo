import { FormEvent, useEffect, useState } from "react";
import { httpsCallable } from "firebase/functions";
import { signInAnonymously } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { getBytes, ref } from "firebase/storage";
import { Check, CheckCircle2, ClipboardList, Download, FileCheck2, FileText, LoaderCircle, LockKeyhole, ShieldCheck } from "lucide-react";
import { useRoute } from "wouter";
import { auth, db, functions, storage } from "@/firebase";
import { type ActivityRecord, type DocumentRecord, type ProjectRecord, type TaskRecord } from "@/lib/crm";

export default function ProjectShare() {
  const [, params] = useRoute("/project/:shareId");
  const shareId = params?.shareId || "";
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [project, setProject] = useState<ProjectRecord | null>(null);
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [tasks, setTasks] = useState<TaskRecord[]>([]);
  const [activities, setActivities] = useState<ActivityRecord[]>([]);
  const [signing, setSigning] = useState<DocumentRecord | null>(null);
  const [signatureName, setSignatureName] = useState("");
  const [consented, setConsented] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  async function loadProject(projectId: string) {
    const [projectSnap, taskSnap, documentSnap, activitySnap] = await Promise.all([
      getDoc(doc(db, "projects", projectId)),
      getDocs(query(collection(db, "tasks"), where("projectId", "==", projectId), where("clientVisible", "==", true))),
      getDocs(query(collection(db, "documents"), where("projectId", "==", projectId), where("clientVisible", "==", true))),
      getDocs(query(collection(db, "activities"), where("projectId", "==", projectId), where("clientVisible", "==", true))),
    ]);
    if (!projectSnap.exists()) throw new Error("This project is no longer available.");
    setProject({ id: projectSnap.id, ...projectSnap.data() } as ProjectRecord);
    setTasks(taskSnap.docs.map((item) => ({ id: item.id, ...item.data() } as TaskRecord)));
    setDocuments(documentSnap.docs.map((item) => ({ id: item.id, ...item.data() } as DocumentRecord)));
    setActivities(activitySnap.docs.map((item) => ({ id: item.id, ...item.data() } as ActivityRecord)));
  }

  async function unlock(event: FormEvent) {
    event.preventDefault();
    if (!shareId || pin.trim().length < 8) {
      setError("Enter the project PIN supplied by the Virtuo team.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      if (!auth.currentUser) await signInAnonymously(auth);
      const unlockProjectShare = httpsCallable<{ shareId: string; pin: string }, { projectId: string }>(functions, "unlockProjectShare");
      const result = await unlockProjectShare({ shareId, pin: pin.trim() });
      await loadProject(result.data.projectId);
      setPin("");
    } catch (cause) {
      const code = (cause as { code?: string }).code;
      setError(code === "functions/permission-denied" ? "The PIN is incorrect or project sharing has been disabled." : "This project could not be opened. Check the link and PIN, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function openSigning(record: DocumentRecord) {
    if (!record.storagePath) return;
    try {
      const bytes = await getBytes(ref(storage, record.storagePath));
      setPreviewUrl(URL.createObjectURL(new Blob([bytes], { type: "application/pdf" })));
      setSigning(record);
      await addDoc(collection(db, "documentEvents"), { accountId: record.accountId, documentId: record.id, eventType: "viewed", actorId: auth.currentUser?.uid, createdAt: serverTimestamp() });
    } catch {
      setError("This document is not available for preview.");
    }
  }

  async function signDocument() {
    if (!signing || !signatureName.trim() || !consented || !auth.currentUser || !signing.storagePath) return;
    setBusy(true);
    try {
      const signDocument = httpsCallable<{ documentId: string; signerName: string }, { signedPath: string }>(functions, "signDocument");
      await signDocument({ documentId: signing.id, signerName: signatureName.trim() });
      closeSigning();
      if (project) await loadProject(project.id);
    } catch {
      setError("We could not finalize the signed PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function downloadDocument(record: DocumentRecord) {
    const path = record.signedStoragePath || record.storagePath;
    if (!path) return;
    try {
      const bytes = await getBytes(ref(storage, path));
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = record.signedStoragePath ? `signed-${record.name}` : record.name;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("This document could not be downloaded.");
    }
  }

  function closeSigning() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl("");
    setSigning(null);
    setSignatureName("");
    setConsented(false);
  }

  if (!project) return <main className="flex min-h-screen items-center justify-center bg-[#f5f4f0] p-5 text-[#171714]"><section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-xl"><div className="flex size-11 items-center justify-center rounded-xl bg-orange-50 text-orange-700"><LockKeyhole size={22} /></div><div className="mt-6 text-[10px] font-bold uppercase tracking-[.2em] text-orange-700">Private project access</div><h1 className="mt-3 font-serif text-3xl font-bold">Open your project</h1><p className="mt-3 text-sm leading-6 text-stone-500">Enter the project PIN shared with you by the Virtuo team. You do not need to create an account.</p><form onSubmit={unlock} className="mt-7 space-y-3"><input autoFocus value={pin} onChange={(event) => setPin(event.target.value.toUpperCase())} placeholder="Project PIN" className="h-12 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 font-mono text-sm tracking-[.16em] outline-none focus:border-orange-500" /><button disabled={busy} className="flex h-12 w-full items-center justify-center rounded-lg bg-[#171714] text-sm font-bold text-white disabled:opacity-60">{busy && <LoaderCircle className="mr-2 animate-spin" size={16} />}{busy ? "Opening project…" : "View project"}</button>{error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-xs leading-5 text-red-800">{error}</p>}</form><p className="mt-6 text-xs leading-5 text-stone-400">This link is private. If you need the PIN, contact your Virtuo project team.</p></section></main>;

  return <main className="min-h-screen bg-[#f5f4f0] px-5 py-8 text-[#171714] sm:px-8"><div className="mx-auto max-w-5xl"><header className="flex items-center justify-between border-b border-stone-200 pb-6"><div><div className="font-serif text-2xl font-bold">VIRTUO<span className="text-orange-600">.</span></div><div className="mt-3 text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Shared project space</div></div><div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"><ShieldCheck size={14} />PIN protected</div></header>{error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-xs text-red-800">{error}</p>}<section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row"><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Project progress</div><h1 className="mt-3 font-serif text-4xl font-bold">{project.name}</h1><p className="mt-2 text-sm text-stone-500">{project.type || "Project"} · {project.status || "In progress"}</p></div><div className="rounded-xl bg-stone-50 px-5 py-4 text-center"><div className="text-3xl font-bold">{project.progress || 0}%</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.14em] text-stone-500">Complete</div></div></div><div className="mt-7 h-3 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-orange-500" style={{ width: `${Math.min(project.progress || 0, 100)}%` }} /></div><div className="mt-7 grid gap-5 md:grid-cols-2"><section><h2 className="font-serif text-2xl font-bold">Milestones</h2><div className="mt-4 space-y-3">{project.milestones?.length ? project.milestones.map((milestone, index) => <div key={`${milestone.title}-${index}`} className="rounded-lg bg-stone-50 p-3"><strong className="text-sm">{milestone.title}</strong><p className="mt-1 text-xs text-stone-500">{milestone.dueDate || "Date to be confirmed"} · {milestone.status || "In progress"}</p></div>) : <p className="text-sm text-stone-500">Milestones will be shared here as work progresses.</p>}</div></section><section><h2 className="font-serif text-2xl font-bold">Current tasks</h2><div className="mt-4 space-y-3">{tasks.length ? tasks.map((task) => <div key={task.id} className="flex gap-3 rounded-lg bg-stone-50 p-3"><CheckCircle2 className="shrink-0 text-orange-600" size={18} /><div><strong className="text-sm">{task.title}</strong><p className="mt-1 text-xs text-stone-500">{task.dueDate || "No due date shared"} · {task.status?.replace("_", " ") || "To do"}</p></div></div>) : <p className="text-sm text-stone-500">No tasks have been shared for this project.</p>}</div></section></div></section><section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><div className="flex items-center gap-3"><ClipboardList className="text-orange-600" size={22} /><div><h2 className="font-serif text-2xl font-bold">Project updates</h2><p className="mt-1 text-sm text-stone-500">Updates your team has chosen to share.</p></div></div><div className="mt-5 divide-y divide-stone-100">{activities.length ? activities.map((activity) => <div key={activity.id} className="py-3"><strong className="text-sm">{activity.message}</strong><p className="mt-1 text-xs text-stone-500">{activity.eventType?.replaceAll("_", " ") || "Project update"}</p></div>) : <p className="py-4 text-sm text-stone-500">No project updates have been shared yet.</p>}</div></section><section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><div className="flex items-center gap-3"><FileCheck2 className="text-orange-600" size={22} /><div><h2 className="font-serif text-2xl font-bold">Documents and approvals</h2><p className="mt-1 text-sm text-stone-500">Review shared files and complete signature requests.</p></div></div><div className="mt-5 divide-y divide-stone-100">{documents.length ? documents.map((record) => <div key={record.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center"><div className="flex min-w-0 flex-1 gap-3"><FileText className="shrink-0 text-orange-600" size={20} /><div><strong className="block text-sm">{record.name}</strong><p className="mt-1 text-xs text-stone-500">{record.needsSignature ? "Signature request" : "Shared document"} · {record.status?.replace("_", " ") || "Available"}</p></div></div><div className="flex gap-2">{record.needsSignature && record.status === "awaiting_signature" && <button onClick={() => void openSigning(record)} className="rounded-lg bg-orange-600 px-3 py-2 text-xs font-bold text-white">Review & sign</button>}<button onClick={() => void downloadDocument(record)} className="rounded-lg border border-stone-200 p-2 text-stone-600" aria-label={`Download ${record.name}`}><Download size={16} /></button></div></div>) : <p className="py-6 text-sm text-stone-500">No documents have been shared for this project yet.</p>}</div></section></div>{signing && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"><section className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-center justify-between"><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Electronic signature</div><h2 className="mt-1 font-serif text-2xl font-bold">{signing.name}</h2></div><button onClick={closeSigning} className="text-sm font-bold text-stone-500">Close</button></div>{previewUrl && <iframe src={previewUrl} title={`Preview ${signing.name}`} className="mt-5 h-72 w-full rounded-lg border border-stone-200 bg-white" />}<input value={signatureName} onChange={(event) => setSignatureName(event.target.value)} placeholder="Your full legal name" className="mt-5 h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm outline-none focus:border-orange-500" /><label className="mt-3 flex gap-2 rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-900"><input type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} />I agree to use an electronic signature for this document and understand the completed signed PDF will be recorded.</label><button disabled={!signatureName.trim() || !consented || busy} onClick={() => void signDocument()} className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#171714] py-3 text-sm font-bold text-white disabled:opacity-50">{busy && <LoaderCircle className="mr-2 animate-spin" size={16} />}<Check className="mr-2" size={16} />Sign and save PDF</button></section></div>}</main>;
}