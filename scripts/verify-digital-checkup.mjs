import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, readFile } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const esbuild = createRequire(require.resolve('vite/package.json'))('esbuild');
await mkdir('tmp/checkup-tests', { recursive: true });
await esbuild.build({ entryPoints: ['src/lib/checkup.ts'], bundle: true, format: 'esm', platform: 'node', outfile: 'tmp/checkup-tests/model.mjs' });
const model = await import('../tmp/checkup-tests/model.mjs');
for (const organisation of ['business','school','university','association','professional','idea','unsure']) {
 for (const goal of ['presence','enquiries','applications','selling','automation','product','unsure']) {
  const answers={organisation,goal,website:'outdated',workflow:'mixed',followup:'manual',priority:'systems',timing:'approval'};
  const result=model.recommendCheckup(answers);
  assert.ok(result.title); assert.ok(result.scope.startsWith('Custom scope')); assert.ok(result.opportunities.length>=3);
  assert.ok(!/R\d|\d+\/100|losing customers|lost revenue/.test(JSON.stringify(result)));
  assert.ok(model.checkupBrief(answers).includes(result.title));
 }
}
for(const organisation of ['school','university','association']) assert.ok(model.recommendCheckup({organisation,goal:'presence',priority:'clear'}).scope.startsWith('Custom scope'));
const uncertain=model.recommendCheckup({});assert.equal(uncertain.clarify.length,7);assert.equal(uncertain.opportunities.length,0);assert.equal(uncertain.title,'A digital discovery session');
const strong=model.recommendCheckup({website:'current',workflow:'online',followup:'structured'});assert.equal(strong.strengths.length,3);assert.equal(strong.opportunities.length,0);
assert.ok(model.checkupQuestions({goal:'applications'})[3].title.includes('applications'));
assert.ok(model.checkupQuestions({goal:'selling'})[3].title.includes('orders'));

await esbuild.build({entryPoints:['src/components/DigitalCheckup.tsx'],bundle:true,format:'esm',platform:'node',jsx:'automatic',outfile:'tmp/checkup-tests/component.mjs',plugins:[{name:'harness',setup(build){
 build.onResolve({filter:/^(react|react\/jsx-runtime|wouter|lucide-react|@\/lib\/checkup-leads)$/},args=>({path:args.path,namespace:'harness'}));
 build.onLoad({filter:/.*/,namespace:'harness'},args=>({loader:'js',contents:args.path==='@/lib/checkup-leads'?'export async function createCheckupLead(contact,answers){globalThis.quizHarness.savedContact={contact,answers};if(globalThis.quizHarness.failSave)throw new Error("test failure");return {leadId: "abcdefghijklmnopqrst",token: "a".repeat(64)}};export async function updateCheckupLead(lead,answers,revision){globalThis.quizHarness.updates=(globalThis.quizHarness.updates??[]).concat([{answers,revision}]);if(globalThis.quizHarness.failSave)throw new Error("test failure");}':args.path==='react'?`
export function createContext(){return {Provider:'provider'}};export function useContext(){return globalThis.quizHarness.context}
export function useState(initial){const h=globalThis.quizHarness,i=h.cursor++;if(!(i in h.slots))h.slots[i]=initial;return[h.slots[i],v=>h.slots[i]=typeof v==='function'?v(h.slots[i]):v]}
export function useRef(initial){const h=globalThis.quizHarness,i=h.cursor++;return h.slots[i]??(h.slots[i]={current:initial})}
export function useEffect(fn,deps){const h=globalThis.quizHarness,i=h.cursor++,old=h.slots[i];if(!old||deps.some((d,j)=>d!==old.deps[j])){old?.cleanup?.();h.slots[i]={deps};h.effects.push(()=>h.slots[i].cleanup=fn())}}
`:args.path==='wouter'?'export const Link="a";':args.path==='lucide-react'?'export const X="icon",ArrowRight="icon";':`
export const Fragment='fragment';export function jsx(type,props){const h=globalThis.quizHarness;if(type==='provider')h.context=props.value;if(props?.ref)props.ref.current=type==='dialog'?h.dialog:h.heading;return {type,props}}export const jsxs=jsx;
`}));
}}]});
let now=0,id=0,timers=new Map();const storage=new Map();Date.now=()=>1800000000000+now;
globalThis.sessionStorage={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)};
globalThis.HTMLElement=class {isConnected=true;focus(){globalThis.quizHarness.restored++}matches(){return false}};
const opener=new globalThis.HTMLElement();
globalThis.document={activeElement:opener,body:{style:{overflow:''}},querySelector:()=>opener};
globalThis.window={setTimeout:(fn,delay=0)=>{timers.set(++id,{fn,due:now+delay});return id},clearTimeout:key=>timers.delete(key)};
async function fresh(scenario,elapsed=0){now=elapsed;timers=new Map();document.body.style.overflow='';globalThis.quizHarness={cursor:0,slots:[],effects:[],restored:0,heading:{focus(){}},dialog:{open:false,showModal(){this.open=true},close(){this.open=false},querySelector(){return globalThis.quizHarness.heading}}};return import(`../tmp/checkup-tests/component.mjs?scenario=${scenario}`)}
let component=await fresh('timing');
function render(){const h=globalThis.quizHarness;h.cursor=0;const tree=component.DigitalCheckupProvider({children:null});h.effects.splice(0).forEach(fn=>fn());return tree}
function nodes(node){if(!node||typeof node!=='object')return[];if(Array.isArray(node))return node.flatMap(nodes);if(typeof node.type==='function')return nodes(node.type(node.props));return[node,...nodes(node.props?.children)]}
function label(node){if(typeof node?.type==='function')return label(node.type(node.props));if(typeof node==='string')return node;if(Array.isArray(node))return node.map(label).join('');return node?.props?label(node.props.children):''}
function click(text){const node=nodes(render()).find(n=>n.type==='button'&&(label(n.props.children)===text||n.props['aria-label']===text));assert.ok(node,`Missing ${text}`);node.props.onClick();render()}
function advance(ms){const target=now+ms;for(const [key,timer]of [...timers])if(timer.due<=target){timers.delete(key);timer.fn()}now=target}
function invited(){return nodes(render()).some(n=>n.type==='aside')}
render();advance(4999);assert.equal(invited(),false);advance(1);assert.equal(invited(),true);assert.equal(quizHarness.restored,0);click('Just browsing, thanks');assert.equal(invited(),false);advance(10000);assert.equal(invited(),false);
component=await fresh('same-session');render();advance(5000);assert.equal(invited(),false);
storage.clear();component=await fresh('manual');render();const trigger=component.CheckupTrigger({});trigger.props.onClick();render();assert.equal(quizHarness.dialog.open,true);assert.equal(document.body.style.overflow,'hidden');advance(5000);assert.equal(invited(),false);
for(const choice of ['University or research institution','Manage applications or registrations online','We have a website that is up to date','Email or phone','We handle and track it manually','Connected systems, different users and approval workflows','Building a case for internal approval']){if(label(render()).includes('Who can we follow up with?'))click('Continue without sharing contact details');click(choice);}
let links=nodes(render()).filter(n=>n.type==='a');let wa=links.find(n=>n.props.href.startsWith('https://wa.me/'));let contact=links.find(n=>n.props.href.startsWith('/contact?'));
const draft=new URL(wa.props.href).searchParams.get('text');assert.ok(draft.includes('University or research institution'));assert.ok(draft.includes('Custom scope and proposal'));assert.equal(new URL(contact.props.href,'https://example.test').searchParams.get('brief'),draft);assert.ok(draft.length<=4000);contact.props.onClick();render();assert.equal(quizHarness.dialog.open,false);assert.equal(document.body.style.overflow,'');component.CheckupTrigger({}).props.onClick();render();assert.equal(quizHarness.dialog.open,true);
click('Back');assert.ok(label(render()).includes('Where are you in the decision process?'));click('Ready to discuss scope and a proposal');for(let i=0;i<6;i++)click('Back');click('Reduce manual work');for(const choice of ['We have a website that is up to date','WhatsApp messages','We handle and track it manually','Less administration and manual work','Planning for the next few months'])click(choice);assert.ok(label(render()).includes('Workflow discovery and targeted automation'));const revised=nodes(render()).find(n=>n.type==='a'&&n.props.href.startsWith('https://wa.me/'));assert.ok(!new URL(revised.props.href).searchParams.get('text').includes('Manage applications or registrations online'));click('Start again');assert.ok(label(render()).includes('What kind of organisation is this for?'));
for(let i=0;i<7;i++){if(label(render()).includes('Who can we follow up with?'))click('Continue without sharing contact details');click('Skip this question');}assert.ok(label(render()).includes('A digital discovery session'));
click('Close digital checkup');assert.equal(quizHarness.dialog.open,false);assert.equal(document.body.style.overflow,'');assert.ok(quizHarness.restored>0);
storage.clear();component=await fresh('cleanup');render();quizHarness.slots.forEach(slot=>slot?.cleanup?.());assert.equal(timers.size,0);
const chat=await readFile('src/components/layout/ChatBot.tsx','utf8');assert.ok(!chat.includes('5000'));const partners=await readFile('src/components/PartnersStrip.tsx','utf8');assert.ok(!partners.includes('Pause logos'));const home=await readFile('src/pages/Home.tsx','utf8');for(const name of ['PASA','WITS','DUT'])assert.ok(home.includes(name));
storage.clear();component=await fresh('visit-one');render();advance(2000);quizHarness.slots.forEach(slot=>slot?.cleanup?.());component=await fresh('visit-two',2000);render();advance(2999);assert.equal(invited(),false);advance(1);assert.equal(invited(),true);
storage.clear();component=await fresh('capture');render();component.CheckupTrigger({}).props.onClick();render();click('Business');click('Build or improve our online presence');
assert.ok(label(render()).includes('Who can we follow up with?'));
for(const [id,value] of [['checkup-name','Test Person'],['checkup-email','test@example.test'],['checkup-phone','+27820000000']]){const input=nodes(render()).find(n=>n.props?.id===id);input.props.onChange({target:{value}});}
const consent=nodes(render()).find(n=>n.type==='input'&&n.props.type==='checkbox');consent.props.onChange({target:{checked:true}});
let form=nodes(render()).find(n=>n.type==='form');quizHarness.failSave=true;await form.props.onSubmit({preventDefault(){}});assert.ok(label(render()).includes('We could not save your enquiry'));assert.ok(label(render()).includes('Who can we follow up with?'));
quizHarness.failSave=false;form=nodes(render()).find(n=>n.type==='form');const savingPromise=form.props.onSubmit({preventDefault(){}});assert.equal(nodes(render()).find(n=>n.props?.id==='checkup-name').props.disabled,true);await savingPromise;render();assert.equal(Object.keys(quizHarness.savedContact.answers).length,2);assert.equal(quizHarness.savedContact.contact.consent,true);assert.ok(label(render()).includes('What is your current website situation?'));
click('We do not have a website');await Promise.resolve();await Promise.resolve();await Promise.resolve();render();assert.ok(quizHarness.updates.some(update=>update.answers.website==='none'));
console.log('PASS: contact checkpoint, explicit consent, failure does not advance, two-answer capture and subsequent update; 49 recommendation paths, institutional scoping, uncertainty/strengths, conditional questions, 5-second welcome, dismissal/session/manual suppression, seven-question flow, back/restart/skip, exact WhatsApp/enquiry handoff, modal lifecycle/focus restoration and timer cleanup. Component harness; native browser focus trap/layout not tested.');
