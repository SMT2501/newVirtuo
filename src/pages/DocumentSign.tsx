import { FormEvent, useEffect, useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { Check, Download, FileCheck2, FileText, LoaderCircle, LockKeyhole, ShieldCheck } from "lucide-react";
import { useRoute } from "wouter";
import { auth, db, documentSharePdfUrl, functions } from "@/firebase";
import { type DocumentRecord } from "@/lib/crm";

function isExpired(record: DocumentRecord) {
  return Boolean(record.expiresAt && typeof record.expiresAt === "object" && record.expiresAt !== null && "toDate" in record.expiresAt && typeof record.expiresAt.toDate === "function" && record.expiresAt.toDate() < new Date());
}

export default function DocumentSign() {
  const [, params] = useRoute("/sign/:shareId");
  const shareId = params?.shareId || "";
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [record, setRecord] = useState<DocumentRecord | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [signerName, setSignerName] = useState("");
  const [consented, setConsented] = useState(false);

  useEffect(() => () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  async function loadDocument(documentId: string) {
    const snapshot = await getDoc(doc(db, "documents", documentId));
    if (!snapshot.exists()) throw new Error("This document is no longer available.");
    setRecord({ id: snapshot.id, ...snapshot.data() } as DocumentRecord);
  }

  async function unlock(event: FormEvent) {
    event.preventDefault();
    if (!shareId || pin.trim().length < 8) {
      setError("Enter the document PIN supplied by the Virtuo team.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      if (!auth.currentUser) await signInAnonymously(auth);
      const unlockDocumentShare = httpsCallable<{ shareId: string; pin: string }, { documentId: string }>(functions, "unlockDocumentShare");
      const result = await unlockDocumentShare({ shareId, pin: pin.trim() });
      await loadDocument(result.data.documentId);
      setPin("");
    } catch (cause) {
      const code = (cause as { code?: string }).code;
      setError(code === "functions/permission-denied" ? "The PIN is incorrect or this signing link has been disabled." : "This document could not be opened. Check the link and PIN, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function openPreview() {
    if (!record?.storagePath) return;
    setBusy(true);
    setError("");
    try {
      const bytes = await getDocumentPdf(record.id, "source");
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(URL.createObjectURL(new Blob([bytes], { type: "application/pdf" })));
      void recordEvent("viewed");
    } catch {
      setError("This document is not available for preview. Your access may have expired.");
    } finally {
      setBusy(false);
    }
  }

  async function sign() {
    if (!record || !signerName.trim() || !consented || isExpired(record)) return;
    setBusy(true);
    setError("");
    try {
      const signDocument = httpsCallable<{ documentId: string; signerName: string }, { signedPath: string }>(functions, "signDocument");
      await signDocument({ documentId: record.id, signerName: signerName.trim() });
      await loadDocument(record.id);
      setMessage("Your signed PDF has been saved. You can download it below.");
      setConsented(false);
    } catch {
      setError("We could not finalize the signed PDF. Re-enter the PIN if your access has expired, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function downloadSigned() {
    if (!record?.signedStoragePath) return;
    setBusy(true);
    try {
      const bytes = await getDocumentPdf(record.id, "signed");
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `signed-${record.name}`;
      anchor.click();
      URL.revokeObjectURL(url);
      void recordEvent("downloaded");
    } catch {
      setError("The signed PDF could not be downloaded. Re-enter the PIN if your access has expired.");
    } finally {
      setBusy(false);
    }
  }

  async function getDocumentPdf(documentId: string, version: "source" | "signed") {
    const token = await auth.currentUser?.getIdToken();
    if (!token) throw new Error("Your signing session has expired.");
    const response = await fetch(`${documentSharePdfUrl}?documentId=${encodeURIComponent(documentId)}&version=${version}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("The PDF could not be retrieved.");
    return response.arrayBuffer();
  }

  async function recordEvent(eventType: "viewed" | "downloaded") {
    if (!record?.accountId || !auth.currentUser) return;
    try {
      await addDoc(collection(db, "documentEvents"), {
        accountId: record.accountId,
        documentId: record.id,
        eventType,
        actorId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
    } catch {
      // The signing and download flow remains available even if a legacy rules deployment has not yet added this audit event.
    }
  }

  if (!record) {
    return <main className="flex min-h-screen items-center justify-center bg-[#f5f4f0] p-5 text-[#171714]"><section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-xl"><div className="flex size-11 items-center justify-center rounded-xl bg-orange-50 text-orange-700"><LockKeyhole size={22} /></div><div className="mt-6 text-[10px] font-bold uppercase tracking-[.2em] text-orange-700">Private document signing</div><h1 className="mt-3 font-serif text-3xl font-bold">Review your document</h1><p className="mt-3 text-sm leading-6 text-stone-500">Enter the document PIN shared with you by the Virtuo team. You do not need to create an account.</p><form onSubmit={unlock} className="mt-7 space-y-3"><input autoFocus value={pin} onChange={(event) => setPin(event.target.value.toUpperCase())} placeholder="Document PIN" className="h-12 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 font-mono text-sm tracking-[.16em] outline-none focus:border-orange-500" /><button disabled={busy} className="flex h-12 w-full items-center justify-center rounded-lg bg-[#171714] text-sm font-bold text-white disabled:opacity-60">{busy && <LoaderCircle className="mr-2 animate-spin" size={16} />}{busy ? "Opening document…" : "Open document"}</button>{error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-xs leading-5 text-red-800">{error}</p>}</form><p className="mt-6 text-xs leading-5 text-stone-400">This link is private. If you need the PIN, contact your Virtuo project team.</p></section></main>;
  }

  const signed = record.status === "signed";
  const expired = isExpired(record);
  return <main className="min-h-screen bg-[#f5f4f0] px-5 py-8 text-[#171714] sm:px-8"><div className="mx-auto max-w-3xl"><header className="flex items-center justify-between border-b border-stone-200 pb-6"><div><div className="font-serif text-2xl font-bold">VIRTUO<span className="text-orange-600">.</span></div><div className="mt-3 text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Secure document signing</div></div><div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"><ShieldCheck size={14} />PIN protected</div></header>{error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-xs text-red-800">{error}</p>}{message && <p className="mt-5 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800">{message}</p>}<section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">{signed ? "Signed document" : expired ? "Expired request" : "Signature request"}</div><h1 className="mt-3 font-serif text-3xl font-bold">{record.name}</h1><p className="mt-2 text-sm leading-6 text-stone-500">{signed ? "This document has been signed and recorded." : expired ? "This signing request has expired. Contact the Virtuo team for an updated version." : "Review the PDF, then sign with your full legal name."}</p></div><FileCheck2 className={signed ? "text-emerald-600" : "text-orange-600"} size={32} /></div>{!previewUrl && <button onClick={() => void openPreview()} disabled={busy} className="secondary mt-6"><FileText size={16} />{busy ? "Loading preview…" : "Open PDF preview"}</button>}{previewUrl && <iframe src={previewUrl} title={`Preview ${record.name}`} className="mt-6 h-[460px] w-full rounded-lg border border-stone-200 bg-white" />}{signed ? <button onClick={() => void downloadSigned()} disabled={busy} className="primary mt-6"><Download size={16} />{busy ? "Preparing download…" : "Download signed PDF"}</button> : <div className="mt-6 border-t border-stone-100 pt-6"><label className="block text-xs font-bold text-stone-700">Full legal name<input value={signerName} onChange={(event) => setSignerName(event.target.value)} disabled={expired} placeholder="Your full legal name" className="mt-2 h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm font-normal outline-none focus:border-orange-500 disabled:opacity-60" /></label><label className="mt-4 flex gap-2 rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-900"><input type="checkbox" checked={consented} disabled={expired} onChange={(event) => setConsented(event.target.checked)} />I agree to use an electronic signature for this document and understand the completed signed PDF will be recorded.</label><button disabled={!previewUrl || !signerName.trim() || !consented || busy || expired} onClick={() => void sign()} className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#171714] py-3 text-sm font-bold text-white disabled:opacity-50">{busy && <LoaderCircle className="mr-2 animate-spin" size={16} />}<Check className="mr-2" size={16} />Sign and save PDF</button>{!previewUrl && !expired && <p className="mt-3 text-center text-xs text-stone-500">Open and review the PDF before signing.</p>}</div>}</section></div></main>;
}