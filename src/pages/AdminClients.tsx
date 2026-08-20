import { FormEvent, useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { CloudUpload, LogOut, ShieldAlert, UserPlus } from "lucide-react";
import { Link } from "wouter";
import { auth, createClientAuthAccount, db, storage } from "@/firebase";
import { PortalAuth } from "@/components/portal/PortalAuth";

type Client = { id: string; name?: string; email?: string; phone?: string };

export default function AdminClients() {
  const [user, setUser] = useState<User | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<Client[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", pin: "" });
  const [clientId, setClientId] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [documentName, setDocumentName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => onAuthStateChanged(auth, async (nextUser) => {
    setUser(nextUser);
    if (!nextUser) { setLoading(false); return; }
    const profile = await getDoc(doc(db, "users", nextUser.uid));
    setAuthorized(profile.exists() && profile.data().role === "admin");
    setLoading(false);
  }), []);

  useEffect(() => { if (authorized) void loadClients(); }, [authorized]);

  async function loadClients() {
    const snapshot = await getDocs(collection(db, "users"));
    setClients(snapshot.docs.filter((item) => item.data().role === "client").map((item) => ({ id: item.id, ...item.data() } as Client)));
  }

  async function createClient(event: FormEvent) {
    event.preventDefault();
    if (!user || form.pin.length < 6) return;
    setBusy(true);
    try {
      const client = await createClientAuthAccount(form.email.trim(), form.pin);
      await setDoc(doc(db, "users", client.uid), { name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), role: "client", createdBy: user.uid, createdAt: serverTimestamp() });
      setForm({ name: "", email: "", phone: "", pin: "" });
      setMessage("Client created. Share the temporary PIN privately.");
      await loadClients();
    } catch { setMessage("Client creation failed. Check that the email is unique and the PIN has at least 6 characters."); }
    finally { setBusy(false); }
  }

  async function uploadDocument() {
    if (!user || !clientId || !file) return;
    setBusy(true);
    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const fileRef = ref(storage, `clients/${clientId}/documents/${Date.now()}-${safeName}`);
      const uploaded = await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(uploaded.ref);
      await addDoc(collection(db, "documents"), { ownerId: clientId, name: documentName.trim() || file.name, type: "Client document", needsSignature: true, status: "Needs signature", uploadedBy: user.uid, storagePath: uploaded.ref.fullPath, downloadUrl, createdAt: serverTimestamp() });
      setFile(null); setDocumentName(""); setMessage("Document uploaded and assigned for signature.");
    } catch { setMessage("Upload failed. Deploy the latest Firebase rules and try again."); }
    finally { setBusy(false); }
  }

  if (loading) return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] text-sm text-stone-500">Checking internal access...</div>;
  if (!user) return <PortalAuth />;
  if (!authorized) return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] px-5"><div className="rounded-xl bg-white p-8 text-center"><ShieldAlert className="mx-auto text-orange-600" /><h1 className="mt-4 font-serif text-2xl font-bold">Admin access only</h1><p className="mt-2 text-sm text-stone-500">This account is not an admin.</p><button onClick={() => signOut(auth)} className="mt-5 rounded-lg bg-black px-4 py-2 text-sm font-bold text-white">Sign out</button></div></div>;

  return <div className="min-h-screen bg-[#f5f4f0] text-[#171714]"><header className="flex items-center justify-between border-b border-stone-200 bg-[#fbfaf7] px-5 py-5 sm:px-8"><div><div className="font-serif text-2xl font-bold">VIRTUO<span className="text-orange-600">.</span></div><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Client management</div></div><div className="flex items-center gap-4"><Link href="/admin" className="text-xs font-bold text-stone-500">Back to workspace</Link><button onClick={() => signOut(auth)} aria-label="Sign out"><LogOut size={16} /></button></div></header><main className="mx-auto max-w-6xl px-5 py-10"><Link href="/admin" className="text-xs font-bold text-stone-500">Internal workspace</Link>{message && <p role="status" className="mt-4 rounded-lg bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">{message}</p>}<div className="mt-6 grid gap-6 lg:grid-cols-2"><Panel title="Create a client"><form onSubmit={createClient} className="space-y-3">{(["name", "email", "phone", "pin"] as const).map((field) => <input key={field} required={field !== "phone"} type={field === "pin" ? "password" : field === "email" ? "email" : "text"} minLength={field === "pin" ? 6 : undefined} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} placeholder={field === "name" ? "Full name" : field === "email" ? "Email" : field === "phone" ? "Phone number" : "Temporary PIN / password"} className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm" />)}<button disabled={busy} className="h-11 w-full rounded-lg bg-black text-sm font-bold text-white disabled:opacity-50"><UserPlus className="mr-2 inline" size={16} />Create client account</button></form></Panel><Panel title="Send a document for signature"><select value={clientId} onChange={(event) => setClientId(event.target.value)} className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm"><option value="">Choose a client</option>{clients.map((client) => <option key={client.id} value={client.id}>{client.name || client.email}</option>)}</select><input value={documentName} onChange={(event) => setDocumentName(event.target.value)} placeholder="Document name (optional)" className="mt-3 h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm" /><label className="mt-3 block cursor-pointer rounded-lg border-2 border-dashed border-stone-200 bg-stone-50 p-6 text-center text-xs font-semibold"><CloudUpload className="mx-auto mb-2 text-orange-600" size={22} />{file ? file.name : "Choose PDF, DOCX or XLSX"}<input type="file" accept=".pdf,.docx,.xlsx" onChange={(event) => setFile(event.target.files?.[0] || null)} className="sr-only" /></label><button disabled={busy || !clientId || !file} onClick={uploadDocument} className="mt-3 h-11 w-full rounded-lg bg-black text-sm font-bold text-white disabled:opacity-50">{busy ? "Working..." : "Upload for signature"}</button></Panel></div><h2 className="mt-10 font-serif text-3xl font-bold">Clients ({clients.length})</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{clients.map((client) => <div key={client.id} className="rounded-xl border border-stone-200 bg-white p-4"><div className="text-sm font-bold">{client.name || "Unnamed client"}</div><div className="mt-1 text-xs text-stone-500">{client.email}{client.phone ? ` · ${client.phone}` : ""}</div></div>)}</div></main></div>;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <section className="rounded-xl border border-stone-200 bg-white p-6"><h2 className="font-serif text-2xl font-bold">{title}</h2><div className="mt-5">{children}</div></section>; }