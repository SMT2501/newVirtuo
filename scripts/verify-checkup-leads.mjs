import assert from 'node:assert/strict';
import { makeCheckupLeadHandler, validateContact, validateAnswers, answerOptions, tokenMatches } from '../functions/checkup-leads.js';
function database() {
 const rows=new Map();let sequence=0;
 return {rows,collection(name){return {doc(id=String(++sequence).padStart(20,'0')){return {id,path:`${name}/${id}`}}}},async runTransaction(fn){const writes=[];const result=await fn({get:async ref=>({exists:rows.has(ref.path),data:()=>rows.get(ref.path)}),set:(ref,data)=>writes.push(()=>rows.set(ref.path,data)),create:(ref,data)=>writes.push(()=>{assert.ok(!rows.has(ref.path));rows.set(ref.path,data)}),update:(ref,data)=>writes.push(()=>rows.set(ref.path,{...rows.get(ref.path),...data}))});writes.forEach(write=>write());return result}};
}
const contact={name:'Test Person',email:'TEST@example.test',phone:'+27820000000',consent:true};
for(const invalid of [{...contact,consent:false},{...contact,name:''},{...contact,email:'invalid'},{...contact,name:'x'.repeat(101)},{...contact,phone:'abcdefg'},{...contact,role:'admin'}])assert.throws(()=>validateContact(invalid));
assert.equal(validateContact(contact).email,'test@example.test');
for(const invalid of [JSON.parse('{"__proto__":"x"}'),null,[],{unexpected:'x'},{website:'invented'},{goal:'x'.repeat(9000)}])assert.throws(()=>validateAnswers(invalid));
for(const [key,values]of Object.entries(answerOptions))for(const value of values)assert.equal(validateAnswers({[key]:value})[key],value);
const db=database();const save=makeCheckupLeadHandler(db,30);const request=data=>({data,rawRequest:{ip:'192.0.2.1'}});
await assert.rejects(save(request({contact:{...contact,consent:false},answers:{}})));assert.equal(db.rows.size,0);
await assert.rejects(save(request({contact,answers:{},website:'bot'})));assert.equal(db.rows.size,0);
const before=Date.now();const created=await save(request({contact,answers:{organisation:'university',goal:'applications'},website:''}));assert.equal(created.saved,true);assert.equal(created.token.length,64);
const record=()=>db.rows.get(`checkupLeads/${created.leadId}`);assert.equal(record().status,'in_progress');assert.equal(record().contact.email,'test@example.test');assert.ok(tokenMatches(created.token,record().tokenHash));assert.ok(!JSON.stringify([...db.rows.values()]).includes(created.token));assert.ok(!JSON.stringify([...db.rows.values()]).includes('192.0.2.1'));assert.ok(record().expiresAt.toMillis()>=before+30*86400000);
const full={organisation:'university',goal:'applications',website:'current',workflow:'email',followup:'manual',priority:'systems',timing:'approval'};
await assert.rejects(save(request({leadId:created.leadId,token:'b'.repeat(64),revision:1,answers:full})),{code:'permission-denied'});
const credentials={leadId:created.leadId,token:created.token};
await save(request({...credentials,revision:2,answers:full}));assert.equal(record().status,'completed');assert.equal(record().revision,2);
await save(request({...credentials,revision:1,answers:{goal:'presence'}}));assert.equal(record().status,'completed');
await save(request({...credentials,revision:3,answers:{organisation:'university',goal:'automation'}}));assert.equal(record().status,'in_progress');assert.equal(record().answers.website,undefined);
await assert.rejects(save(request({...credentials,revision:4,answers:full,contact})),{code:'invalid-argument'});
record().expiresAt={toMillis:()=>0};await assert.rejects(save(request({...credentials,revision:4,answers:full})),{code:'permission-denied'});
const throttled=database();const throttledSave=makeCheckupLeadHandler(throttled,30);for(let i=0;i<10;i++)await throttledSave(request({contact,answers:{}}));await assert.rejects(throttledSave(request({contact,answers:{}})),{code:'resource-exhausted'});
await assert.rejects(makeCheckupLeadHandler(database(),null)(request({contact,answers:{}})),{code:'failed-precondition'});
console.log('PASS: server contact/consent/enum/size/honeypot validation, partial creation, completion/correction, hashed capability ownership, stale revision protection, expiry, throttling and no raw token/IP storage. Transaction adapter tests only; deployed Firestore rules/TTL not tested.');
