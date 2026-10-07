import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,readFile} from 'node:fs/promises';
const require=createRequire(import.meta.url);const esbuild=createRequire(require.resolve('vite/package.json'))('esbuild');
await mkdir('tmp/rotation-tests',{recursive:true});
await esbuild.build({entryPoints:['src/components/FeaturedProjectPreview.tsx'],bundle:true,platform:'node',format:'esm',jsx:'automatic',outfile:'tmp/rotation-tests/component.mjs',plugins:[{name:'harness',setup(build){
 build.onResolve({filter:/^(react|react\/jsx-runtime|lucide-react)$/},args=>({path:args.path,namespace:'harness'}));
 build.onLoad({filter:/.*/,namespace:'harness'},args=>({loader:'js',contents:args.path==='react'?`
export function useState(initial){const h=globalThis.rotationHarness,i=h.cursor++;if(!(i in h.slots))h.slots[i]=initial;return[h.slots[i],v=>h.slots[i]=typeof v==='function'?v(h.slots[i]):v]}
export function useRef(initial){const h=globalThis.rotationHarness,i=h.cursor++;return h.slots[i]??(h.slots[i]={current:initial})}
export function useCallback(fn,deps){const h=globalThis.rotationHarness,i=h.cursor++,old=h.slots[i];if(!old||deps.some((d,j)=>d!==old.deps[j]))h.slots[i]={fn,deps};return h.slots[i].fn}
export function useEffect(fn,deps){const h=globalThis.rotationHarness,i=h.cursor++,old=h.slots[i];if(!old||deps.some((d,j)=>d!==old.deps[j])){old?.cleanup?.();h.slots[i]={deps};h.effects.push(()=>h.slots[i].cleanup=fn())}}
`:args.path==='lucide-react'?'export const ArrowLeft="icon",ArrowUpRight="icon",Pause="icon",Play="icon",RotateCcw="icon";':`export function jsx(type,props){if(props?.ref)props.ref.current={};return {type,props}}export const jsxs=jsx;export const Fragment='fragment';`}));
}}]});
const {FeaturedProjectPreview,featuredProjects}=await import('../tmp/rotation-tests/component.mjs');
let now=0,id=0,timers=new Map();globalThis.rotationHarness={cursor:0,slots:[],effects:[]};const h=rotationHarness;
const media={matches:false,addEventListener:(type,fn)=>h.motionChanged=fn,removeEventListener(){}};
globalThis.window={matchMedia:()=>media,IntersectionObserver:true,setTimeout:(fn,delay)=>{timers.set(++id,{fn,due:now+delay});return id},clearTimeout:key=>timers.delete(key)};
globalThis.document={hidden:false,addEventListener:(type,fn)=>h.visibilityChanged=fn,removeEventListener(){}};
globalThis.IntersectionObserver=class {constructor(fn){h.intersection=fn}observe(){h.intersection([{isIntersecting:true}])}disconnect(){}};
function render(){h.cursor=0;const tree=FeaturedProjectPreview({titleId:'test-project-title'});h.effects.splice(0).forEach(fn=>fn());return tree}
function nodes(node){if(!node||typeof node!=='object')return[];if(Array.isArray(node))return node.flatMap(nodes);return[node,...nodes(node.props?.children)]}
function article(){const cards=nodes(render()).filter(n=>n.type==='article');assert.equal(cards.length,1);return cards[0]}
function title(){return nodes(article()).find(n=>n.type==='h2').props.children}
function advance(ms){const target=now+ms;while(true){const next=[...timers.entries()].filter(([,t])=>t.due<=target).sort((a,b)=>a[1].due-b[1].due)[0];if(!next)break;now=next[1].due;timers.delete(next[0]);next[1].fn();render()}now=target}
render();render();assert.equal(title(),'Umnini Community Trust');advance(4999);assert.equal(article().props['data-phase'],'idle');advance(1);assert.equal(article().props['data-phase'],'exit');assert.equal(title(),'Umnini Community Trust');advance(600);assert.equal(title(),'Campus Marketplace');assert.equal(article().props['data-phase'],'enter');advance(600);assert.equal(article().props['data-phase'],'idle');
advance(6200);assert.equal(title(),'MJP Security');advance(6200);assert.equal(title(),'Umnini Community Trust');
assert.equal(nodes(render()).filter(n=>n.type==='button').length,0);
let root=render();root.props.onMouseEnter();render();advance(10000);assert.equal(title(),'Umnini Community Trust');root.props.onMouseLeave();render();root=render();root.props.onFocusCapture();render();advance(10000);assert.equal(title(),'Umnini Community Trust');root.props.onBlurCapture({currentTarget:{contains:()=>false},relatedTarget:null});render();
h.intersection([{isIntersecting:false}]);render();advance(10000);assert.equal(title(),'Umnini Community Trust');h.intersection([{isIntersecting:true}]);render();document.hidden=true;h.visibilityChanged();render();advance(10000);assert.equal(title(),'Umnini Community Trust');document.hidden=false;h.visibilityChanged();render();
media.matches=true;h.motionChanged();render();advance(10000);assert.equal(title(),'Umnini Community Trust');assert.equal(article().props['data-phase'],'idle');
for(const project of featuredProjects){await readFile('public'+decodeURIComponent(project.image));assert.ok((await readFile('src/pages/Portfolio.tsx','utf8')).includes(project.anchor))}
const css=await readFile('src/index.css','utf8');assert.ok(css.includes('rotate(-18deg)'));assert.ok(css.includes('rotate(18deg)'));assert.ok(css.includes('prefers-reduced-motion'));
h.slots.forEach(slot=>slot?.cleanup?.());assert.equal(timers.size,0);
console.log('PASS: one card, five-second dwell, sequential counterclockwise phases, all three projects/wraparound, no buttons, hover/focus/offscreen/background pausing, reduced-motion autoplay suppression, asset/anchor references and cleanup. Harness only; visual browser arc not measured.');
