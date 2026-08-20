import { FormEvent, useState } from "react";
import { LockKeyhole, Mail, Phone, ShieldCheck } from "lucide-react";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export function PortalAuth() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pin);
    } catch (error) {
      const errorCode = (error as { code?: string }).code;
      setMessage(errorCode === "auth/user-not-found"
        ? "This email has no Firebase login yet. Create it under Firebase Console > Authentication > Users, then sign in here."
        : "The email or PIN/password is incorrect. Use the reset link if you need a new password.");
    } finally {
      setBusy(false);
    }
  }

  async function requestReset() {
    if (!email.trim()) {
      setMessage("Enter your account email first.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setResetSent(true);
    } catch (error) {
      const errorCode = (error as { code?: string }).code;
      setMessage(errorCode === "auth/user-not-found"
        ? "No Firebase login exists for this email yet. Create the user in Firebase Authentication first."
        : "We could not send a reset email. Check the email address and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f4f0] px-5 py-10 text-[#171714]">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
        <section className="hidden bg-[#171714] p-10 text-white lg:block">
          <div className="font-serif text-2xl font-bold tracking-[-0.04em]">VIRTUO<span className="text-orange-500">.</span></div>
          <div className="mt-32 max-w-xs"><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">Client workspace</div><h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.04em]">Everything your project needs, in one calm place.</h1><p className="mt-5 text-sm leading-6 text-stone-400">Projects, documents, invoices and website intelligence shared securely with your team.</p></div>
          <div className="mt-28 flex items-center gap-2 text-xs text-stone-400"><ShieldCheck size={15} className="text-emerald-400" /> Protected by Firebase Authentication</div>
        </section>
        <section className="p-7 sm:p-10">
          <div className="lg:hidden font-serif text-2xl font-bold tracking-[-0.04em]">VIRTUO<span className="text-orange-600">.</span></div>
          <div className="mt-10 lg:mt-16"><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Welcome back</div><h2 className="mt-3 font-serif text-3xl font-bold tracking-[-0.04em]">Sign in to your portal</h2><p className="mt-2 text-sm text-stone-500">Use the email and PIN supplied by your Virtuo account administrator.</p></div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4"><label className="block"><span className="mb-2 block text-xs font-bold text-stone-600">Account email</span><span className="relative block"><Mail size={16} className="absolute left-3 top-3.5 text-stone-400" /><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 pl-10 pr-3 text-sm outline-none focus:border-orange-500" placeholder="you@company.com" /></span></label><label className="block"><span className="mb-2 block text-xs font-bold text-stone-600">PIN / password</span><span className="relative block"><LockKeyhole size={16} className="absolute left-3 top-3.5 text-stone-400" /><input required minLength={6} type="password" value={pin} onChange={(event) => setPin(event.target.value)} className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 pl-10 pr-3 text-sm outline-none focus:border-orange-500" placeholder="Enter your PIN" /></span></label>{message && <p role="alert" className="rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-800">{message}</p>}{resetSent && <p className="rounded-lg bg-emerald-50 p-3 text-xs leading-5 text-emerald-800">Reset email sent. Check your inbox and choose a new password.</p>}<button disabled={busy} className="h-11 w-full rounded-lg bg-[#171714] text-sm font-bold text-white hover:bg-stone-700 disabled:opacity-60">{busy ? "Checking..." : "Sign in securely"}</button></form>
          <button onClick={requestReset} disabled={busy} className="mt-5 flex w-full items-center justify-center gap-2 text-xs font-bold text-orange-700 hover:text-orange-800 disabled:opacity-60"><Phone size={14} /> Need a new PIN? Send a reset email</button>
          <p className="mt-10 text-center text-[11px] leading-5 text-stone-400">Your phone number can be kept on your client profile for support and identity verification. It is not displayed publicly.</p>
        </section>
      </div>
    </main>
  );
}
