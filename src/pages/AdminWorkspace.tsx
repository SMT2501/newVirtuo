import { useEffect, useState } from "react";
import { addDoc, collection, getDoc, getDocs, serverTimestamp, doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { ArrowRight, BookOpen, CircleDollarSign, FilePlus2, FolderLock, LogOut, ShieldAlert, Users, X } from "lucide-react";
import { auth, createClientAuthAccount, db } from "@/firebase";
import { PortalAuth } from "@/components/portal/PortalAuth";

type Section = "Clients" | "Proposals" | "Funding" | "Documentation" | "Staff";
type RecordItem = { id: string; title?: string; name?: string; status?: string; description?: string; email?: string; phone?: string; role?: string; amount?: number };

const sections: { label: Section; icon: typeof BookOpen; collection: string }[] = [
  { label: "Clients", icon: Users, collection: "users" },
  { label: "Proposals", icon: FilePlus2, collection: "proposals" },
  { label: "Funding", icon: CircleDollarSign, collection: "funding" },
  { label: "Documentation", icon: BookOpen, collection: "internalDocuments" },
  { label: "Staff", icon: Users, collection: "staff" },
];

function AdminWorkspace() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [active, setActive] = useState<Section>("Proposals");
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientPin, setClientPin] = useState("");
  const [clientBusy, setClientBusy] = useState(false);

  useEffect(() => onAuthStateChanged(auth, async (nextUser) => {
    setUser(nextUser);
    if (!nextUser) {
      setLoading(false);
      return;
    }
    const profile = await getDoc(doc(db, "users", nextUser.uid));
    setAuthorized(profile.exists() && ["admin", "staff"].includes(profile.data().role));
    setLoading(false);
  }), []);

  useEffect(() => {
    if (authorized) void loadRecords(active);
  }, [active, authorized]);

  async function loadRecords(section: Section) {
    const source = sections.find((item) => item.label === section);
    if (!source) return;
    const snapshot = await getDocs(collection(db, source.collection));
    setRecords(snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as RecordItem)));
  }

  async function createRecord() {
    if (!title.trim() || !user) return;
    const source = sections.find((item) => item.label === active);
    if (!source) return;
    await addDoc(collection(db, source.collection), { title: title.trim(), description: description.trim(), createdBy: user.uid, createdAt: serverTimestamp() });
    setTitle("");
    setDescription("");
    setShowForm(false);
    setMessage("Record saved securely.");
    await loadRecords(active);
  }

  async function createClient() {
    if (!clientName.trim() || !clientEmail.trim() || clientPin.length < 6 || !user) return;
    setClientBusy(true);
    setMessage("");
    try {
      const client = await createClientAuthAccount(clientEmail.trim());
      await setDoc(doc(db, "users", client.uid), {
        name: clientName.trim(),
        email: clientEmail.trim(),
        phone: clientPhone.trim(),
        role: "client",
        createdBy: user.uid,
        createdAt: serverTimestamp(),
      });
      setClientName("");
      setClientEmail("");
      setClientPhone("");
      setClientPin("");
      setShowClientForm(false);
      setActive("Clients");
      setMessage("Client account created. Share the temporary PIN securely and ask them to reset it after signing in.");
      await loadRecords("Clients");
    } catch {
      setMessage("Client account could not be created. The email may already be registered or the PIN may be invalid.");
    } finally {
      setClientBusy(false);
    }
  }

  if (loading) return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] text-sm text-stone-500">Checking internal access...</div>;
  if (!user) return <PortalAuth />;
  if (!authorized) return <div className="flex min-h-screen items-center justify-center bg-[#f5f4f0] px-5"><div className="max-w-md rounded-xl border border-stone-200 bg-white p-8 text-center"><ShieldAlert className="mx-auto text-orange-600" size={30} /><h1 className="mt-4 font-serif text-2xl font-bold">Internal access only</h1><p className="mt-2 text-sm leading-6 text-stone-500">This account is not assigned an internal role. Add `role: admin` or `role: staff` to the user profile in Firestore, then try again.</p><button onClick={() => signOut(auth)} className="mt-6 rounded-lg bg-[#171714] px-4 py-3 text-sm font-bold text-white">Sign out</button></div></div>;

  return <div className="min-h-screen bg-[#f5f4f0] text-[#171714]"><header className="flex items-center justify-between border-b border-stone-200 bg-[#fbfaf7] px-5 py-5 sm:px-8"><div><div className="font-serif text-2xl font-bold tracking-[-0.04em]">VIRTUO<span className="text-orange-600">.</span></div><div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Internal workspace</div></div><button aria-label="Sign out" onClick={() => signOut(auth)} className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-bold text-stone-500 hover:bg-stone-100"><LogOut size={15} /> Sign out</button></header><main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Operations</div><h1 className="mt-2 font-serif text-4xl font-bold tracking-[-0.04em]">Company records</h1><p className="mt-2 text-sm text-stone-500">Private records for the Virtuo team. Client workspaces never see this area.</p></div><button onClick={() => setShowForm(true)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#171714] px-4 py-3 text-sm font-bold text-white"><FilePlus2 size={16} /> Add record</button></div><div className="mt-8 grid gap-3 sm:grid-cols-4">{sections.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setActive(label); setMessage(""); }} className={`flex items-center gap-3 rounded-lg border p-4 text-left text-sm font-bold ${active === label ? "border-[#171714] bg-[#171714] text-white" : "border-stone-200 bg-white text-stone-600"}`}><Icon size={17} />{label}</button>)}</div><section className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="flex items-center justify-between border-b border-stone-100 p-5"><div><h2 className="font-serif text-2xl font-bold">{active}</h2><p className="mt-1 text-xs text-stone-500">{records.length} saved records</p></div><FolderLock className="text-emerald-600" size={20} /></div>{message && <div className="border-b border-emerald-100 bg-emerald-50 px-5 py-3 text-xs font-semibold text-emerald-800">{message}</div>}{records.length ? <div className="divide-y divide-stone-100">{records.map((record) => <div key={record.id} className="flex items-center gap-4 p-5"><div className="flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600"><ArrowRight size={16} /></div><div><div className="text-sm font-bold">{record.title || record.name || "Untitled record"}</div><div className="mt-1 text-xs text-stone-500">{record.description || record.email || record.status || "No additional details"}</div></div></div>)}</div> : <div className="p-12 text-center text-sm text-stone-500">No {active.toLowerCase()} records yet. Add the first one to start your private workspace.</div>}</section></main>{showForm && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div className="w-full max-w-md rounded-xl bg-white p-6"><div className="flex items-center justify-between"><h2 className="font-serif text-2xl font-bold">New {active.toLowerCase().slice(0, -1)}</h2><button onClick={() => setShowForm(false)} aria-label="Close form"><X size={18} /></button></div><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Name or title" className="mt-5 h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm outline-none focus:border-orange-500" /><textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Short description" className="mt-3 min-h-24 w-full rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm outline-none focus:border-orange-500" /><button onClick={createRecord} disabled={!title.trim()} className="mt-4 w-full rounded-lg bg-[#171714] py-3 text-sm font-bold text-white disabled:opacity-50">Save record</button></div></div>}</div>;
}

export default AdminWorkspace;
