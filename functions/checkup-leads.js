import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { HttpsError } from 'firebase-functions/v2/https';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { readFileSync } from 'node:fs';
const policy = JSON.parse(readFileSync(new URL('./checkup-policy.json', import.meta.url), 'utf8').replace(/^\uFEFF/, ''));
export const answerOptions = {
 organisation: ['business','school','university','association','professional','idea','unsure'],
 goal: ['presence','enquiries','applications','selling','automation','product','unsure'],
 website: ['current','outdated','none','unsure'],
 workflow: ['online','whatsapp','email','paper','mixed','unsure'],
 followup: ['structured','manual','missed','new','unsure'],
 priority: ['clear','conversion','efficiency','systems','unsure'],
 timing: ['ready','planning','approval','exploring','unsure'],
};
function invalid() { throw new HttpsError('invalid-argument','Please check the enquiry details and try again.'); }
export function validateAnswers(value) {
 if (!value || typeof value !== 'object' || Array.isArray(value)) invalid();
 const answers = {};
 for (const [key, answer] of Object.entries(value)) {
  if (!Object.hasOwn(answerOptions,key) || !answerOptions[key].includes(answer)) invalid();
  answers[key] = answer;
 }
 return answers;
}
export function validateContact(value) {
 if (!value || typeof value !== 'object' || Array.isArray(value) || value.consent !== true) invalid();
 if (Object.keys(value).some(key=>!['name','email','phone','consent'].includes(key))) invalid();
 if (value.phone !== undefined && typeof value.phone !== 'string') invalid();
 const name = typeof value.name === 'string' ? value.name.trim() : '';
 const email = typeof value.email === 'string' ? value.email.trim().toLowerCase() : '';
 const phone = typeof value.phone === 'string' ? value.phone.trim() : '';
 if (name.length < 2 || name.length > 100 || /[\r\n\x00-\x1f]/.test(name)) invalid();
 if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) invalid();
 if (phone && (!/^[+()0-9 .-]{7,30}$/.test(phone) || phone.replace(/\D/g,'').length < 7 || phone.replace(/\D/g,'').length > 15)) invalid();
 return {name,email,phone};
}
function hash(value) { return createHash('sha256').update(value).digest('hex'); }
export function tokenMatches(token, storedHash) {
 if (typeof token !== 'string' || !/^[a-f0-9]{64}$/.test(token) || typeof storedHash !== 'string' || !/^[a-f0-9]{64}$/.test(storedHash)) return false;
 return timingSafeEqual(Buffer.from(hash(token),'hex'),Buffer.from(storedHash,'hex'));
}
export function makeCheckupLeadHandler(db, retentionDays = policy.retentionDays) {
 return async request => {
  const data = request.data;
  if (!data || typeof data !== 'object' || Array.isArray(data) || JSON.stringify(data).length > 8000) invalid();
  if (Object.keys(data).some(key=>!['leadId','token','revision','answers','contact','website'].includes(key)) || (data.website ?? '') !== '') invalid();
  if (!Number.isInteger(retentionDays) || retentionDays < 1 || retentionDays > 365) throw new HttpsError('failed-precondition','Enquiry storage is not configured yet. Please use the contact form or WhatsApp.');
  const answers = validateAnswers(data.answers);
  if ('leadId' in data && typeof data.leadId !== 'string') invalid();
  const update = typeof data.leadId === 'string';
  if (update && 'contact' in data) invalid();
  if (!update && ('token' in data || 'revision' in data)) invalid();
  if (update && (!/^[a-zA-Z0-9]{20}$/.test(data.leadId) || !Number.isInteger(data.revision) || data.revision < 1 || data.revision > 10000)) invalid();
  const contact = update ? null : validateContact(data.contact);
  const now = Date.now();
  const token = update ? data.token : randomBytes(32).toString('hex');
  const lead = update ? db.collection('checkupLeads').doc(data.leadId) : db.collection('checkupLeads').doc();
  // Store only a rotating hash for abuse control, never a raw IP address.
  const hour = Math.floor(now / 3600000);
  const rate = db.collection('_checkupRateLimits').doc(hash(`${hour}:${request.rawRequest?.ip ?? 'unknown'}`));
  const status = Object.keys(answers).length === Object.keys(answerOptions).length ? 'completed' : 'in_progress';
  await db.runTransaction(async tx => {
   const rateSnap = await tx.get(rate);
   const counts = rateSnap.exists ? rateSnap.data() : {};
   const current = update ? await tx.get(lead) : null;
   if (update && (!current.exists || !tokenMatches(token,current.data().tokenHash) || current.data().expiresAt.toMillis() <= now)) throw new HttpsError('permission-denied','This enquiry session cannot be updated.');
   const countKey = update ? 'updates' : 'creates';
   if ((counts[countKey] ?? 0) >= (update ? 120 : 10)) throw new HttpsError('resource-exhausted','Too many requests. Please try again later or contact the team directly.');
   if (update && data.revision <= current.data().revision) return;
   tx.set(rate,{...counts,[countKey]:(counts[countKey] ?? 0)+1,expiresAt:Timestamp.fromMillis(now+86400000)});
   if (update) tx.update(lead,{answers,status,revision:data.revision,updatedAt:FieldValue.serverTimestamp()});
   else tx.create(lead,{contact,answers,status,revision:0,tokenHash:hash(token),consent:{version:policy.consentVersion,followUp:true,acceptedAt:FieldValue.serverTimestamp()},createdAt:FieldValue.serverTimestamp(),updatedAt:FieldValue.serverTimestamp(),expiresAt:Timestamp.fromMillis(now+retentionDays*86400000)});
  });
  return update ? {saved:true} : {saved:true,leadId:lead.id,token};
 };
}
