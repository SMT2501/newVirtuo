import { FormEvent, useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ArrowLeft, BriefcaseBusiness, CloudUpload, FileText, LogOut, Receipt, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { auth, db, storage } from "@/firebase";
import { PortalAuth } from "@/components/portal/PortalAuth";

type Client = { id: string; name?: string; email?: string };
type Project = { id: string; name?: string; type?: string; status?: string; progress?: number; due?: string; clientId?: string };

export default function AdminProjects() {
  const [user, setUser] = useState<User | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState({ clientId: "", name: "", type: "", status: "In progress", progress: "0", due: "" });
  const [documentForm, setDocumentForm] = useState({ name: "", file: null as File | null });
  const [invoiceForm, setInvoiceForm] = useState({ number: "", amount: "", dueDate: "", description: "" });
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => onAuthStateChanged(auth, async (nextUser) => {
    setUser(nextUser);
    if (!nextUser) return setLoading(false);
    const profile = await getDoc(doc(db, "users", nextUser.uid));
    setAuthorized(profile.exists() && ["admin", "staff"].includes(profile.data().role));
    setLoading(false);
  }), []);

  useEffect(() => { if (authorized) void loadData(); }, [authorized]);

  async function loadData() {
    const [clientSnapshot, projectSnapshot] = await Promise.all([getDocs(collection(db, "users")), getDocs(collection(db, "projects"))]);
    setClients(clientSnapshot.docs.filter((item) => item.data().role === "client").map((item) => ({ id: item.id, ...item.data() } as Client)));
    setProjects(projectSnapshot.docs.map((item) => ({ id: item.id, ...item.data() } as Project)));
  }

  function selectProject(project: Project) {
    setSelectedProject(project);
    setProjectForm({ clientId: project.clientId || "", name: project.name || "", type: project.type || "", status: project.status || "In progress", progress: String(project.progress || 0), due: project.due || "" });
    setMessage("");
  }

  async function saveProject(event: FormEvent) {
    event.preventDefault();
    if (!user || !projectForm.clientId || !projectForm.name.trim()) return;
    setBusy(true);
    try {
      const data = { clientId: projectForm.clientId, name: projectForm.name.trim(), type: projectForm.type.trim(), status: projectForm.status, progress: Number(projectForm.progress), due: projectForm.due };
      if (selectedProject) await updateDoc(doc(db, "projects", selectedProject.id), data);
      else await addDoc(collection(db, "projects"), { ...data, color: "bg-orange-500", createdBy: user.uid, createdAt: serverTimestamp() });
      setSelectedProject(null);
      setProjectForm({ clientId: "", name: "", type: "", status: "In progress", progress: "0", due: "" });
      setMessage(selectedProject ? "Project updated." : "Project created and shared with the selected client.");
      await loadData();
    } catch { setMessage("Project could not be saved. Deploy the latest Firestore rules and try again."); }
    finally { setBusy(false); }
  }

  async function uploadProjectDocument() {
    if (!user || !selectedProject || !documentForm.file) return;
    setBusy(true);
    try {
      const safeName = documentForm.file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const fileRef = ref(storage, `clients/${selectedProject.clientId}/projects/${selectedProject.id}/${Date.now()}-${safeName}`);
      const uploaded = await uploadBytes(fileRef, documentForm.file);
      const downloadUrl = await getDownloadURL(uploaded.ref);
      await addDoc(collection(db, "documents"), { ownerId: selectedProject.clientId, clientId: selectedProject.clientId, projectId: selectedProject.id, name: documentForm.name.trim() || documentForm.file.name, type: "Project document", needsSignature: true, status: "Needs signature", uploadedBy: user.uid, storagePath: uploaded.ref.fullPath, downloadUrl, createdAt: serverTimestamp() });
      setDocumentForm({ name: "", file: null });
      setMessage("Project document uploaded and sent for signature.");
    } catch { setMessage("Document upload failed. Check Storage and Firestore rules."); }
    finally { setBusy(false); }
  }

  async function createProjectInvoice() {
    if (!user || !selectedProject || !invoiceForm.amount) return;
    setBusy(true);
    try {
      await addDoc(collection(db, "invoices"), { projectId: selectedProject.id, clientId: selectedProject.clientId, number: invoiceForm.number.trim(), amount: Number(invoiceForm.amount), dueDate: invoiceForm.dueDate, description: invoiceForm.description.trim(), status: "Open", createdBy: user.uid, createdAt: serverTimestamp() });
      setInvoiceForm({ number: "", amount: "", dueDate: "", description: "" });
      setMessage("Invoice added to this project.");
    } catch { setMessage("Invoice could not be saved. Deploy the latest Firestore rules and try again."); }
    finally { setBusy(false); }
  }

  if (loading) return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] text-sm text-stone-500">Checking internal access...</div>;
  if (!user) return <PortalAuth />;
  if (!authorized) return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] px-5"><div className="rounded-xl bg-white p-8 text-center"><ShieldAlert className="mx-auto text-orange-600" /><h1 className="mt-4 font-serif text-2xl font-bold">Internal access only</h1><button onClick={() => signOut(auth)} className="mt-5 rounded-lg bg-black px-4 py-2 text-sm font-bold text-white">Sign out</button></div></div>;

  return <div className="min-h-screen bg-[#f5f4f0] text-[#171714]"><header className="flex items-center justify-between border-b border-stone-200 bg-[#fbfaf7] px-5 py-5 sm:px-8"><div><div className="font-serif text-2xl font-bold">VIRTUO<span className="text-orange-600">.</span></div><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Project workspace</div></div><div className="flex items-center gap-4"><Link href="/admin" className="text-xs font-bold text-stone-500">Back to workspace</Link><button onClick={() => signOut(auth)} aria-label="Sign out"><LogOut size={16} /></button></div></header><main className="mx-auto max-w-6xl px-5 py-10"><Link href="/admin" className="inline-flex items-center gap-2 text-xs font-bold text-stone-500"><ArrowLeft size={14} /> Internal workspace</Link>{message && <p role="status" className="mt-4 rounded-lg bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">{message}</p>}<div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><Panel title={selectedProject ? "Update project" : "Add a project"}><form onSubmit={saveProject} className="space-y-3"><select required value={projectForm.clientId} onChange={(event) => setProjectForm({ ...projectForm, clientId: event.target.value })} className="input"><option value="">Choose a client</option>{clients.map((client) => <option key={client.id} value={client.id}>{client.name || client.email}</option>)}</select><input required value={projectForm.name} onChange={(event) => setProjectForm({ ...projectForm, name: event.target.value })} placeholder="Project name" className="input" /><select value={projectForm.type} onChange={(event) => setProjectForm({ ...projectForm, type: event.target.value })} className="input"><option value="">Choose project type</option><option>Web development</option><option>Emails</option><option>Hosting</option><option>Testing</option><option>Consultation</option><option>SEO</option><option>Other</option></select><select value={projectForm.status} onChange={(event) => setProjectForm({ ...projectForm, status: event.target.value })} className="input"><option>In progress</option><option>In design</option><option>In build</option><option>Review</option><option>Complete</option><option>On hold</option></select><div className="grid grid-cols-2 gap-3"><input type="number" min="0" max="100" value={projectForm.progress} onChange={(event) => setProjectForm({ ...projectForm, progress: event.target.value })} placeholder="Progress %" className="input" /><input value={projectForm.due} onChange={(event) => setProjectForm({ ...projectForm, due: event.target.value })} placeholder="Due date or milestone" className="input" /></div><button disabled={busy} className="h-11 w-full rounded-lg bg-black text-sm font-bold text-white disabled:opacity-50">{busy ? "Saving..." : selectedProject ? "Update project" : "Create project"}</button></form></Panel><section><h2 className="font-serif text-3xl font-bold">Projects ({projects.length})</h2><div className="mt-5 space-y-3">{projects.map((project) => <button key={project.id} onClick={() => selectProject(project)} className={`block w-full rounded-xl border bg-white p-5 text-left ${selectedProject?.id === project.id ? "border-orange-500" : "border-stone-200"}`}><div className="flex items-center justify-between"><span className="text-sm font-bold">{project.name}</span><span className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-semibold text-stone-600">{project.status || "Active"}</span></div><div className="mt-2 text-xs text-stone-500">{project.type || "Other"} · {project.progress || 0}% · {clients.find((client) => client.id === project.clientId)?.name || "Unassigned"}</div><div className="mt-3 h-1.5 rounded-full bg-stone-100"><div className="h-full rounded-full bg-orange-500" style={{ width: `${project.progress || 0}%` }} /></div></button>)}</div></section></div>{selectedProject && <div className="mt-6 grid gap-6 lg:grid-cols-2"><Panel title="Add project document"><p className="text-xs text-stone-500">Assigned to: {selectedProject.name}</p><input value={documentForm.name} onChange={(event) => setDocumentForm({ ...documentForm, name: event.target.value })} placeholder="Document name" className="input mt-4" /><label className="mt-3 block cursor-pointer rounded-lg border-2 border-dashed border-stone-200 bg-white p-6 text-center text-xs font-semibold"><CloudUpload className="mx-auto mb-2 text-orange-600" size={22} />{documentForm.file ? documentForm.file.name : "Choose a file"}<input type="file" accept=".pdf,.docx,.xlsx" onChange={(event) => setDocumentForm({ ...documentForm, file: event.target.files?.[0] || null })} className="sr-only" /></label><button disabled={busy || !documentForm.file} onClick={uploadProjectDocument} className="mt-3 h-11 w-full rounded-lg bg-black text-sm font-bold text-white disabled:opacity-50"><FileText className="mr-2 inline" size={16} />Upload for signature</button></Panel><Panel title="Add project invoice"><input value={invoiceForm.number} onChange={(event) => setInvoiceForm({ ...invoiceForm, number: event.target.value })} placeholder="Invoice number" className="input" /><input type="number" value={invoiceForm.amount} onChange={(event) => setInvoiceForm({ ...invoiceForm, amount: event.target.value })} placeholder="Amount (R)" className="input mt-3" /><input value={invoiceForm.dueDate} onChange={(event) => setInvoiceForm({ ...invoiceForm, dueDate: event.target.value })} placeholder="Due date" className="input mt-3" /><input value={invoiceForm.description} onChange={(event) => setInvoiceForm({ ...invoiceForm, description: event.target.value })} placeholder="Description" className="input mt-3" /><button disabled={busy || !invoiceForm.amount} onClick={createProjectInvoice} className="mt-3 h-11 w-full rounded-lg bg-black text-sm font-bold text-white disabled:opacity-50"><Receipt className="mr-2 inline" size={16} />Add invoice</button></Panel></div>}</main></div>;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <section className="rounded-xl border border-stone-200 bg-white p-6"><h2 className="font-serif text-2xl font-bold">{title}</h2><div className="mt-5">{children}</div></section>; }
