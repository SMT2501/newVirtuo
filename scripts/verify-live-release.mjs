import {writeFile,mkdir} from 'node:fs/promises';
const endpoint='https://us-central1-newvirtuo.cloudfunctions.net/saveCheckupLead';
async function call(data){const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data})});const json=await response.json();if(!response.ok||!json.result?.saved)throw new Error(`Verification failed: HTTP ${response.status}, ${json.error?.status??'unconfirmed response'}`);return json.result;}
const answers={organisation:'business',goal:'presence'};
const lead=await call({contact:{name:'DEPLOYMENT TEST - NOT A CUSTOMER',email:'deployment-check@example.invalid',phone:'',consent:true},answers,website:''});
if(!/^[a-zA-Z0-9]{20}$/.test(lead.leadId))throw new Error('Invalid verification record ID');
await mkdir('tmp',{recursive:true});await writeFile('tmp/quiz-release-lead-id.txt',lead.leadId);
await call({leadId:lead.leadId,token:lead.token,revision:1,answers:{...answers,website:'none',workflow:'email',followup:'manual',priority:'clear',timing:'exploring'}});
console.log('PASS: live callable stored a synthetic partial enquiry and accepted its completion update. Cleanup required for the labelled test record. No real contact details/messages.');
