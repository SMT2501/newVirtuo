import checkupPolicy from "../../../functions/checkup-policy.json";
import { useEffect, useState } from 'react';
import { collection, getDocs, limit, orderBy, query, Timestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { checkupQuestions, recommendCheckup } from '@/lib/checkup';
import type { CheckupAnswers } from '@/lib/checkup';
interface QuizLead { id: string; contact: {name: string; email: string; phone: string}; answers: CheckupAnswers; status: string; updatedAt?: Timestamp; expiresAt?: Timestamp }
export function QuizLeadsPanel() {
 const [leads,setLeads]=useState<QuizLead[]>([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(false);
 async function load() {
  setLoading(true);setError(false);
  try {
   const snapshot=await getDocs(query(collection(db,'checkupLeads'),orderBy('updatedAt','desc'),limit(100)));
   setLeads(snapshot.docs.map(item=>({id:item.id,...item.data()} as QuizLead)).filter(item=>item.expiresAt instanceof Timestamp && item.expiresAt.toMillis()>Date.now()));
  } catch {setError(true);} finally {setLoading(false);}
 }
 useEffect(()=>{void load();},[]);
 return <section>
  <div className="flex items-center justify-between gap-4 mb-5"><div><h1 className="font-serif text-3xl">Quiz enquiries</h1><p className="text-sm text-stone-600 mt-2">Latest 100 enquiry records. Unfinished quizzes include the answers saved before the visitor left. Records expire after {checkupPolicy.retentionDays} days.</p></div><button type="button" onClick={()=>void load()} className="min-h-11 rounded-lg border border-stone-300 px-4 bg-white">Refresh</button></div>
  {loading ? <p role="status">Loading enquiries...</p> : error ? <p role="alert">We could not load quiz enquiries. Verify your internal access and deployed Firestore rules, then try again.</p> : leads.length===0 ? <p>No unexpired quiz enquiries found.</p> : <div className="space-y-4">{leads.map(lead=><article key={lead.id} className="bg-white border border-stone-200 rounded-xl p-5">
   <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-lg font-semibold">{lead.contact.name}</h2><span className="text-sm font-medium">{lead.status==='completed'?'Completed':'Unfinished'}</span></div>
   <p className="text-sm mt-2">{lead.contact.email}{lead.contact.phone ? ` | ${lead.contact.phone}` : ''}</p>
   <p className="text-xs text-stone-500 mt-2">Last saved: {lead.updatedAt instanceof Timestamp ? lead.updatedAt.toDate().toLocaleString('en-ZA',{timeZone:'Africa/Johannesburg'}) : 'Pending timestamp'}</p>
   <p className="text-sm font-semibold mt-4">{recommendCheckup(lead.answers).title}</p>
   <dl className="mt-3 space-y-3 text-sm">{checkupQuestions(lead.answers).filter(q=>lead.answers[q.id]).map(q=><div key={q.id}><dt className="text-stone-500">{q.title}</dt><dd>{q.options.find(option=>option.value===lead.answers[q.id])?.label ?? 'Not sure'}</dd></div>)}</dl>
  </article>)}</div>}
 </section>;
}
