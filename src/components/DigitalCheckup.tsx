import checkupPolicy from "../../functions/checkup-policy.json";
import { createCheckupLead, updateCheckupLead } from "@/lib/checkup-leads";
import type { CheckupContact, SavedCheckupLead } from "@/lib/checkup-leads";
import type { FormEvent } from "react";
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { checkupBrief, checkupQuestions, recommendCheckup } from '@/lib/checkup';
import type { CheckupAnswers } from '@/lib/checkup';
import { enquiryHref, whatsappHref } from '@/config/sales';

const CheckupContext = createContext<(() => void) | null>(null);
const welcomeKey = 'virtuo-checkup-welcome-shown-v2';
const visitStartKey = 'virtuo-checkup-visit-start';
let welcomeShownInMemory = false;
function markWelcomeShown() {
  welcomeShownInMemory = true;
  try { sessionStorage.setItem(welcomeKey, 'yes'); } catch { /* The quiz also works without storage. */ }
}

export function CheckupTrigger({ children = 'Find my solution', className = '' }: { children?: ReactNode; className?: string }) {
  const open = useContext(CheckupContext);
  return <button type="button" onClick={() => open?.()} className={className} data-checkup-trigger aria-haspopup="dialog">{children}</button>;
}

const actionClass = 'min-h-11 px-5 py-3 rounded-xl border border-border text-sm font-medium hover:bg-secondary focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

function CheckupResults({ answers, onNavigate }: { answers: CheckupAnswers; onNavigate: () => void }) {
  const result = recommendCheckup(answers);
  const brief = checkupBrief(answers);
  return <div className="space-y-6">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your recommended starting point</p>
    <h2 id="checkup-title" tabIndex={-1} className="text-3xl md:text-4xl font-serif">{result.title}</h2>
    <p className="text-muted-foreground leading-relaxed">{result.reason}</p>
    <div className="bg-secondary/50 border border-border rounded-xl p-5"><h3 className="font-semibold mb-2">A proposal built around your scope</h3><p className="text-sm leading-relaxed text-muted-foreground">{result.scope}</p></div>
    {result.strengths.length > 0 && <section><h3 className="font-semibold mb-3">What you already have in place</h3><ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">{result.strengths.map(item => <li key={item}>{item}</li>)}</ul></section>}
    {result.opportunities.length > 0 && <section><h3 className="font-semibold mb-3">Opportunities to explore</h3><ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">{result.opportunities.map(item => <li key={item}>{item}</li>)}</ul><p className="text-xs text-muted-foreground mt-3">These are supporting options to discuss, not a requirement to buy everything.</p></section>}
    {result.clarify.length > 0 && <section><h3 className="font-semibold mb-3">We can clarify these together</h3><ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">{result.clarify.map(item => <li key={item}>{item}</li>)}</ul></section>}
    <details className="border border-border rounded-xl p-4"><summary className="min-h-11 flex items-center cursor-pointer font-medium text-sm">Review the answers we will share</summary><p className="mt-3 text-sm text-muted-foreground whitespace-pre-line">{brief}</p></details>
    <a href={whatsappHref(brief)} target="_blank" rel="noopener noreferrer" className="block min-h-11 rounded-xl bg-primary text-primary-foreground px-5 py-4 text-center font-semibold focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">Discuss my proposal on WhatsApp</a>
    <Link onClick={onNavigate} href={enquiryHref(brief)} className={`block text-center ${actionClass}`}>Prefer email? Request a scoped proposal</Link>
    <Link onClick={onNavigate} href="/pricing" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Explore our published packages</Link>
    <p className="text-xs text-muted-foreground leading-relaxed">This recommendation is based only on your answers, not a technical audit. No score or final price is assumed. WhatsApp opens a draft for you to review and send.</p>
  </div>;
}

export function DigitalCheckupProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'closed' | 'invite' | 'quiz'>('closed');
  const [answers, setAnswers] = useState<CheckupAnswers>({});
  const [step, setStep] = useState(0);
  const [contactDone, setContactDone] = useState(false);
  const [contact, setContact] = useState<CheckupContact>({name: '', email: '', phone: '', consent: false});
  const [honeypot, setHoneypot] = useState('');
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [contactSaving, setContactSaving] = useState(false);
  const leadRef = useRef<SavedCheckupLead | null>(null);
  const revisionRef = useRef(0);
  const queueRef = useRef<Promise<void>>(Promise.resolve());
  const pendingRef = useRef(0);
  const contactStep = step === 2 && !contactDone;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const questions = checkupQuestions(answers);
  const question = questions[step];
  const complete = step >= questions.length;

  function openQuiz() {
    markWelcomeShown();
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setMode('quiz');
  }
  function closeQuiz() {
    dialogRef.current?.close();
    setMode('closed');
    if (openerRef.current?.isConnected) openerRef.current.focus();
    else document.querySelector<HTMLElement>('[data-checkup-trigger]')?.focus();
  }
  function choose(value: string) {
    const next = { ...answers, [question.id]: value };
    questions.slice(step + 1).forEach(item => delete next[item.id]);
    setAnswers(next);
    persistAnswers(next);
    setStep(step + 1);
  }

  function persistAnswers(next: CheckupAnswers) {
    const lead = leadRef.current;
    if (!lead) return;
    const revision = ++revisionRef.current;
    pendingRef.current++;
    setSaveState('saving');
    queueRef.current = queueRef.current.catch(() => undefined).then(async () => {
      try {
        await updateCheckupLead(lead, next, revision);
        pendingRef.current--;
        setSaveState(pendingRef.current ? 'saving' : 'saved');
      } catch {
        pendingRef.current--;
        setSaveState('error');
      }
    });
  }
  async function saveContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contact.consent || contactSaving || leadRef.current) return;
    setContactSaving(true);
    setSaveState('saving');
    try {
      leadRef.current = await createCheckupLead(contact, answers, honeypot);
      setSaveState('saved');
      setContactDone(true);
    } catch {
      setSaveState('error');
    } finally {
      setContactSaving(false);
    }
  }

  useEffect(() => {
    let alreadyShown = welcomeShownInMemory;
    try { alreadyShown ||= sessionStorage.getItem(welcomeKey) === 'yes'; } catch { /* Memory fallback respects dismissal. */ }
    if (alreadyShown) return;
    let visitStart = Date.now();
    try {
      const stored = Number(sessionStorage.getItem(visitStartKey));
      if (stored > 0 && stored <= visitStart) visitStart = stored;
      else sessionStorage.setItem(visitStartKey, String(visitStart));
    } catch { /* Timing remains available without storage. */ }
    const timer = window.setTimeout(() => {
      if (welcomeShownInMemory) return;
      // Keep the invitation out of the way while someone is entering a form.
      if (document.activeElement?.matches('input, textarea, select, [contenteditable="true"]')) return;
      markWelcomeShown();
      setMode('invite');
    }, Math.max(0, 5000 - (Date.now() - visitStart)));
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mode !== 'quiz') return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== 'quiz') return;
    if (complete) dialogRef.current?.querySelector<HTMLElement>('#checkup-title')?.focus();
    else titleRef.current?.focus();
  }, [mode, step, complete, contactStep]);

  return <CheckupContext.Provider value={openQuiz}>
    {children}
    {mode === 'invite' && <aside role="region" aria-labelledby="checkup-welcome-title" className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[420px] max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-8rem)] overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-2xl">
      <button type="button" aria-label="Dismiss digital checkup invitation" onClick={() => setMode('closed')} className="absolute right-2 top-2 min-h-11 min-w-11 flex items-center justify-center rounded-full hover:bg-secondary focus-visible:outline-2 focus-visible:outline-accent"><X aria-hidden="true" className="w-5 h-5" /></button>
      <div aria-live="polite"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 pr-8">Welcome to Virtuo</p><h2 id="checkup-welcome-title" className="text-2xl font-serif mb-3 pr-5">What would you like to work better?</h2><p className="text-sm text-muted-foreground leading-relaxed mb-5">From your online presence to applications and connected workflows, let us help you find a useful starting point. Take a short digital checkup. You can choose whether to share your contact details along the way.</p></div>
      <button type="button" onClick={openQuiz} className="w-full min-h-11 bg-primary text-primary-foreground rounded-xl px-5 py-4 font-semibold focus-visible:outline-2 focus-visible:outline-accent">Find my solution</button>
      <button type="button" onClick={() => setMode('closed')} className="w-full min-h-11 mt-2 text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent">Just browsing, thanks</button>
    </aside>}
    <dialog ref={dialogRef} aria-labelledby="checkup-title" onCancel={event => { event.preventDefault(); closeQuiz(); }} className="checkup-dialog fixed inset-0 m-auto w-[720px] max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-border bg-background text-foreground p-0 shadow-2xl">
      <div className="sticky top-0 z-10 bg-background border-b border-border flex items-center justify-between gap-3 px-5 py-3"><p className="text-sm font-semibold">Virtuo digital checkup</p><button type="button" onClick={closeQuiz} aria-label="Close digital checkup" className="min-w-11 min-h-11 rounded-full hover:bg-secondary flex items-center justify-center focus-visible:outline-2 focus-visible:outline-accent"><X aria-hidden="true" className="w-5 h-5" /></button></div>
      <div className="p-5 md:p-8">
        {leadRef.current && <div role="status" className="mb-5 rounded-lg border border-border p-3 text-sm">
          {saveState === 'saving' ? 'Saving your latest answers...' : saveState === 'error' ? <><span>Your latest answers could not be saved. Your earlier saved enquiry is still available.</span><button type="button" className="min-h-11 ml-2 underline" onClick={() => persistAnswers(answers)}>Retry saving</button></> : 'Your enquiry and answers are saved for follow-up.'}
        </div>}
        {contactStep ? <>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Before we go further</p>
          <h2 ref={titleRef} id="checkup-title" tabIndex={-1} className="text-2xl md:text-3xl font-serif mb-3">Who can we follow up with?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">Share your details if you would like the team to discuss your needs, even if you do not finish. Submitting this step saves your details and answers to our enquiry database for {checkupPolicy.retentionDays} days.</p>
          <form onSubmit={saveContact} className="space-y-4">
            <div><label htmlFor="checkup-name" className="block text-sm font-medium mb-2">Name *</label><input disabled={contactSaving} id="checkup-name" name="name" autoComplete="name" required minLength={2} maxLength={100} value={contact.name} onChange={event => setContact({...contact,name:event.target.value})} className="w-full min-h-11 rounded-lg border border-border bg-background px-3 py-3 focus-visible:outline-2 focus-visible:outline-accent" /></div>
            <div><label htmlFor="checkup-email" className="block text-sm font-medium mb-2">Email *</label><input disabled={contactSaving} id="checkup-email" name="email" type="email" autoComplete="email" required maxLength={254} value={contact.email} onChange={event => setContact({...contact,email:event.target.value})} className="w-full min-h-11 rounded-lg border border-border bg-background px-3 py-3 focus-visible:outline-2 focus-visible:outline-accent" /></div>
            <div><label htmlFor="checkup-phone" className="block text-sm font-medium mb-2">Phone / WhatsApp (optional)</label><input disabled={contactSaving} id="checkup-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} value={contact.phone} onChange={event => setContact({...contact,phone:event.target.value})} className="w-full min-h-11 rounded-lg border border-border bg-background px-3 py-3 focus-visible:outline-2 focus-visible:outline-accent" /></div>
            <div className="hidden" aria-hidden="true"><label htmlFor="checkup-website">Leave this empty</label><input disabled={contactSaving} id="checkup-website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={event => setHoneypot(event.target.value)} /></div>
            <label className="flex gap-3 items-start min-h-11 text-sm leading-relaxed"><input disabled={contactSaving} type="checkbox" required checked={contact.consent} onChange={event => setContact({...contact,consent:event.target.checked})} className="mt-1 w-5 h-5 shrink-0" /><span>I agree that Virtuo may store these details and my quiz answers, including an unfinished quiz, and contact me about this enquiry. <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">Privacy notice</a>.</span></label>
            {saveState === 'error' && !leadRef.current && <p role="alert" className="text-sm text-red-600">We could not save your enquiry. Please try again, continue without sharing, or use our contact form.</p>}
            <button type="submit" disabled={contactSaving} className="w-full min-h-11 bg-primary text-primary-foreground rounded-xl px-5 py-4 font-semibold disabled:opacity-60">{contactSaving ? 'Saving enquiry...' : 'Save my details and continue'}</button>
          </form>
          <button type="button" disabled={contactSaving} onClick={() => {setContactDone(true);setSaveState('idle');}} className="min-h-11 mt-3 text-sm underline">Continue without sharing contact details</button>
        </> : complete ? <CheckupResults answers={answers} onNavigate={closeQuiz} /> : <>
          <div className="flex items-center justify-between gap-3 mb-3 text-xs text-muted-foreground"><span>Question {step + 1} of {questions.length}</span><span>Contact sharing is optional</span></div>
          <progress value={step} max={questions.length} aria-label="Digital checkup progress" className="w-full h-2 mb-6 accent-accent" />
          <h2 ref={titleRef} id="checkup-title" tabIndex={-1} className="text-2xl md:text-3xl font-serif mb-3">{question.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{question.hint}</p>
          <div className="grid gap-2">{question.options.map(option => <button type="button" key={option.value} onClick={() => choose(option.value)} className={`text-left flex items-center justify-between gap-3 ${actionClass} ${answers[question.id] === option.value ? 'border-accent bg-secondary' : ''}`}><span>{option.label}</span><ArrowRight aria-hidden="true" className="w-4 h-4 shrink-0" /></button>)}</div>
          <button type="button" onClick={() => choose('unsure')} className="min-h-11 mt-3 text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent">Skip this question</button>
        </>}
        <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-3">
          {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className={actionClass}>Back</button>}
          {step > 0 && <button type="button" disabled={pendingRef.current > 0 || contactSaving} onClick={() => { setAnswers({}); setStep(0); setContactDone(false); setContact({name:'',email:'',phone:'',consent:false}); leadRef.current=null; revisionRef.current=0; setSaveState('idle'); }} className={actionClass}>Start again</button>}
          {!complete && <p className="w-full text-xs text-muted-foreground leading-relaxed">If you submit the contact step, your answers are saved for follow-up. If you skip it, answers stay in this page's memory until you choose to share them.</p>}
        </div>
      </div>
    </dialog>
  </CheckupContext.Provider>;
}
