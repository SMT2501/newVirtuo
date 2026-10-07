import type { CheckupAnswers } from './checkup';
import { firebaseConfig } from '@/config/firebase';
export interface CheckupContact { name: string; email: string; phone: string; consent: boolean }
export interface SavedCheckupLead { leadId: string; token: string }
async function callLead<T>(data: unknown): Promise<T> {
 const [{getApps,initializeApp},{getFunctions,httpsCallable}] = await Promise.all([import('firebase/app'),import('firebase/functions')]);
 const app = getApps().find(item=>item.name==='checkup-enquiries') ?? initializeApp(firebaseConfig,'checkup-enquiries');
 const call = httpsCallable<unknown,T>(getFunctions(app),'saveCheckupLead');
 return (await call(data)).data;
}
export async function createCheckupLead(contact: CheckupContact, answers: CheckupAnswers, website: string): Promise<SavedCheckupLead> {
 const result = await callLead<SavedCheckupLead & {saved: boolean}>({contact,answers,website});
 if (result.saved !== true || !/^[a-zA-Z0-9]{20}$/.test(result.leadId) || !/^[a-f0-9]{64}$/.test(result.token)) throw new Error('The enquiry could not be confirmed.');
 return {leadId: result.leadId, token: result.token};
}
export async function updateCheckupLead(lead: SavedCheckupLead, answers: CheckupAnswers, revision: number): Promise<void> {
 const result = await callLead<{saved: boolean}>({leadId: lead.leadId, token: lead.token, answers, revision});
 if (result.saved !== true) throw new Error('The latest answers could not be confirmed.');
}
