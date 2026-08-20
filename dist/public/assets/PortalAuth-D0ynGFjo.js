var zg=Object.defineProperty;var Qg=(n,e,t)=>e in n?zg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var G=(n,e,t)=>Qg(n,typeof e!="symbol"?e+"":e,t);import{c as zB,r as vs,j as ue}from"./index-VEKbW8JN.js";import{M as Wg,P as $g}from"./phone-Bu7Wqbww.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=zB("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=zB("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=zB("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=()=>{};var Cl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},em=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],B=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,B=o?n[s+1]:0,u=s+2<n.length,c=u?n[s+2]:0,h=i>>2,C=(i&3)<<4|B>>4;let p=(B&15)<<2|c>>6,w=c&63;u||(w=64,o||(p=64)),r.push(t[h],t[C],t[p],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):em(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],B=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const C=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||B==null||c==null||C==null)throw new tm;const p=i<<2|B>>4;if(r.push(p),c!==64){const w=B<<4&240|c>>2;if(r.push(w),C!==64){const R=c<<6&192|C;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nm=function(n){const e=Pf(n);return Sf.encodeByteArray(e,!0)},po=function(n){return nm(n).replace(/\./g,"")},Of=function(n){try{return Sf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=()=>rm().__FIREBASE_DEFAULTS__,im=()=>{if(typeof process>"u"||typeof Cl>"u")return;const n=Cl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},om=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Of(n[1]);return e&&JSON.parse(e)},jo=()=>{try{return Zg()||sm()||im()||om()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nf=n=>{var e,t;return(t=(e=jo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ff=n=>{const e=Nf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lf=()=>{var n;return(n=jo())==null?void 0:n.config},kf=n=>{var e;return(e=jo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[po(JSON.stringify(t)),po(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Bm(){var e;const n=(e=jo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function um(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QB(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lm(){const n=Ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hm(){return!Bm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WB(){try{return typeof indexedDB=="object"}catch{return!1}}function $B(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Mf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="FirebaseError";class St extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fm,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cm(i,r):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new St(s,B,r)}}function Cm(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),B=e[o];r+=n.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return r}catch{return n}}function dm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(dl(i)&&dl(o)){if(!Vn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ns(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pm(n,e){const t=new gm(n,e);return t.subscribe.bind(t)}class gm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Qa),s.error===void 0&&(s.error=Qa),s.complete===void 0&&(s.complete=Qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=1e3,_m=2,Dm=4*60*60*1e3,wm=.5;function pl(n,e=Em,t=_m){const r=e*Math.pow(t,n),s=Math.round(wm*r*(Math.random()-.5)*2);return Math.min(Dm,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function YB(n){return(await fetch(n,{credentials:"include"})).ok}class bt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tm(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);r===B&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ym(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ym(n){return n===or?void 0:n}function Tm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Im(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Rm={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},vm=ae.INFO,bm={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Pm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=vm,this._logHandler=Pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Sm=(n,e)=>e.some(t=>n instanceof t);let gl,ml;function Om(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nm(){return ml||(ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gf=new WeakMap,gB=new WeakMap,Uf=new WeakMap,Wa=new WeakMap,XB=new WeakMap;function Fm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Nn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gf.set(t,n)}).catch(()=>{}),XB.set(e,n),e}function Lm(n){if(gB.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});gB.set(n,e)}let mB={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gB.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function km(n){mB=n(mB)}function xm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($a(this),e,...t);return Uf.set(r,e.sort?e.sort():[e]),Nn(r)}:Nm().includes(n)?function(...e){return n.apply($a(this),e),Nn(Gf.get(this))}:function(...e){return Nn(n.apply($a(this),e))}}function Vm(n){return typeof n=="function"?xm(n):(n instanceof IDBTransaction&&Lm(n),Sm(n,Om())?new Proxy(n,mB):n)}function Nn(n){if(n instanceof IDBRequest)return Fm(n);if(Wa.has(n))return Wa.get(n);const e=Vm(n);return e!==n&&(Wa.set(n,e),XB.set(e,n)),e}const $a=n=>XB.get(n);function Hf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),B=Nn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Nn(o.result),u.oldVersion,u.newVersion,Nn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const Mm=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],Ya=new Map;function El(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Gm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mm.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return Ya.set(e,i),i}km(n=>({...n,get:(e,t,r)=>El(e,t)||n.get(e,t,r),has:(e,t)=>!!El(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Hm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const EB="@firebase/app",_l="0.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Jo("@firebase/app"),jm="@firebase/app-compat",Jm="@firebase/analytics-compat",qm="@firebase/analytics",Km="@firebase/app-check-compat",zm="@firebase/app-check",Qm="@firebase/auth",Wm="@firebase/auth-compat",$m="@firebase/database",Ym="@firebase/data-connect",Xm="@firebase/database-compat",Zm="@firebase/functions",eE="@firebase/functions-compat",tE="@firebase/installations",nE="@firebase/installations-compat",rE="@firebase/messaging",sE="@firebase/messaging-compat",iE="@firebase/performance",oE="@firebase/performance-compat",aE="@firebase/remote-config",BE="@firebase/remote-config-compat",uE="@firebase/storage",cE="@firebase/storage-compat",lE="@firebase/firestore",hE="@firebase/ai",fE="@firebase/firestore-compat",CE="firebase",dE="12.17.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _B="[DEFAULT]",pE={[EB]:"fire-core",[jm]:"fire-core-compat",[qm]:"fire-analytics",[Jm]:"fire-analytics-compat",[zm]:"fire-app-check",[Km]:"fire-app-check-compat",[Qm]:"fire-auth",[Wm]:"fire-auth-compat",[$m]:"fire-rtdb",[Ym]:"fire-data-connect",[Xm]:"fire-rtdb-compat",[Zm]:"fire-fn",[eE]:"fire-fn-compat",[tE]:"fire-iid",[nE]:"fire-iid-compat",[rE]:"fire-fcm",[sE]:"fire-fcm-compat",[iE]:"fire-perf",[oE]:"fire-perf-compat",[aE]:"fire-rc",[BE]:"fire-rc-compat",[uE]:"fire-gcs",[cE]:"fire-gcs-compat",[lE]:"fire-fst",[fE]:"fire-fst-compat",[hE]:"fire-vertex","fire-js":"fire-js",[CE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map,gE=new Map,DB=new Map;function Dl(n,e){try{n.container.addComponent(e)}catch(t){un.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(DB.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;DB.set(e,n);for(const t of go.values())Dl(t,n);for(const t of gE.values())Dl(t,n);return!0}function $n(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Rr("app","Firebase",mE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=dE;function ZB(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:_B,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=Lf()),!t)throw en.create("no-options");const i=go.get(s);if(i)if(Vn(t,i.options)){if(Vn(r,i.config))return i;throw en.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw en.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Am(s);for(const u of DB.values())o.addComponent(u);const B=new EE(t,r,o);return go.set(s,B),B}function qo(n=_B){const e=go.get(n);if(!e&&n===_B&&Lf())return ZB();if(!e)throw en.create("no-app",{appName:n});return e}function lt(n,e,t){let r=pE[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(o.join(" "));return}Ft(new bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firebase-heartbeat-database",DE=1,Qs="firebase-heartbeat-store";let Xa=null;function jf(){return Xa||(Xa=Hf(_E,DE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),Xa}async function wE(n){try{const t=(await jf()).transaction(Qs),r=await t.objectStore(Qs).get(Jf(n));return await t.done,r}catch(e){if(e instanceof St)un.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(t.message)}}}async function wl(n,e){try{const r=(await jf()).transaction(Qs,"readwrite");await r.objectStore(Qs).put(e,Jf(n)),await r.done}catch(t){if(t instanceof St)un.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});un.warn(r.message)}}}function Jf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=1024,yE=30;class TE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new RE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Il();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>yE){const o=vE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Il(),{heartbeatsToSend:r,unsentEntries:s}=AE(this._heartbeatsCache.heartbeats),i=po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return un.warn(t),""}}}function Il(){return new Date().toISOString().substring(0,10)}function AE(n,e=IE){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class RE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WB()?$B().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yl(n){return po(JSON.stringify({version:2,heartbeats:n})).length}function vE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n){Ft(new bt("platform-logger",e=>new Um(e),"PRIVATE")),Ft(new bt("heartbeat",e=>new TE(e),"PRIVATE")),lt(EB,_l,n),lt(EB,_l,"esm2020"),lt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bE("");function qf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PE=qf,Kf=new Rr("auth","Firebase",qf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Jo("@firebase/auth");function zf(n,...e){mo.logLevel<=ae.WARN&&mo.warn(`Auth (${br}): ${n}`,...e)}function so(n,...e){mo.logLevel<=ae.ERROR&&mo.error(`Auth (${br}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,...e){throw eu(n,...e)}function qt(n,...e){return eu(n,...e)}function Qf(n,e,t){const r={...PE(),[e]:t};return new Rr("auth","Firebase",r).create(e,{appName:n.name})}function on(n){return Qf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kf.create(n,...e)}function ee(n,e,...t){if(!n)throw eu(e,...t)}function tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw so(e),new Error(e)}function cn(n,e){n||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wB(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function SE(){return Tl()==="http:"||Tl()==="https:"}function Tl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SE()||QB()||"connection"in navigator)?navigator.onLine:!0}function NE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,cn(t>e,"Short delay should be less than long delay!"),this.isMobile=am()||cm()}get(){return OE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n,e){cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kE=new Ci(3e4,6e4);function fn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Cn(n,e,t,r,s={}){return $f(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const B=fi({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...i};return um()||(c.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&vr(n.emulatorConfig.host)&&(c.credentials="include"),Wf.fetch()(await Yf(n,n.config.apiHost,t,B),c)})}async function $f(n,e,t){n._canInitEmulator=!1;const r={...FE,...e};try{const s=new VE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ji(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ji(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ji(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qf(n,h,c);Lt(n,h)}}catch(s){if(s instanceof St)throw s;Lt(n,"network-request-failed",{message:String(s)})}}async function di(n,e,t,r,s={}){const i=await Cn(n,e,t,r,s);return"mfaPendingCredential"in i&&Lt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?tu(n.config,s):`${n.config.apiScheme}://${s}`;return LE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function xE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),kE.get())})}}function Ji(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=qt(n,e,r);return s.customData._tokenResponse=t,s}function Al(n){return n!==void 0&&n.enterprise!==void 0}class ME{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GE(n,e){return Cn(n,"GET","/v2/recaptchaConfig",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(n,e){return Cn(n,"POST","/v1/accounts:delete",e)}async function Eo(n,e){return Cn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HE(n,e=!1){const t=De(n),r=await t.getIdToken(e),s=nu(r);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vs(Za(s.auth_time)),issuedAtTime:Vs(Za(s.iat)),expirationTime:Vs(Za(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Za(n){return Number(n)*1e3}function nu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const s=Of(t);return s?JSON.parse(s):(so("Failed to decode base64 JWT payload"),null)}catch(s){return so("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rl(n){const e=nu(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof St&&jE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(n){var C;const e=n.auth,t=await n.getIdToken(),r=await Ws(n,Eo(e,{idToken:t}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(C=s.providerUserInfo)!=null&&C.length?Xf(s.providerUserInfo):[],o=KE(n.providerData,i),B=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new IB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function qE(n){const e=De(n);await _o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(n,e){const t=await $f(n,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Yf(n,s,"/v1/token",`key=${i}`),B=await n._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:r};return n.emulatorConfig&&vr(n.emulatorConfig.host)&&(u.credentials="include"),Wf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QE(n,e){return Cn(n,"POST","/v2/accounts:revokeToken",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=Rl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await zE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Kr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new JE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return HE(this,e)}reload(){return qE(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await Ws(this,UE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:C,emailVerified:p,isAnonymous:w,providerData:R,stsTokenManager:L}=t;ee(C&&L,e,"internal-error");const M=Kr.fromJSON(this.name,L);ee(typeof C=="string",e,"internal-error"),Dn(r,e.name),Dn(s,e.name),ee(typeof p=="boolean",e,"internal-error"),ee(typeof w=="boolean",e,"internal-error"),Dn(i,e.name),Dn(o,e.name),Dn(B,e.name),Dn(u,e.name),Dn(c,e.name),Dn(h,e.name);const K=new Ot({uid:C,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:c,lastLoginAt:h});return R&&Array.isArray(R)&&(K.providerData=R.map(te=>({...te}))),u&&(K._redirectEventId=u),K}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kr;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _o(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new Kr;B.updateFromIdToken(r);const u=new Ot({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new IB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map;function nn(n){cn(n instanceof Function,"Expected a class definition");let e=vl.get(n);return e?(cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zf.type="NONE";const bl=Zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n,e,t){return`firebase:${n}:${e}:${t}`}class zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=io(this.userKey,s.apiKey,i),this.fullPersistenceKey=io("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Eo(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zr(nn(bl),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||nn(bl);const o=io(r,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let C;if(typeof h=="string"){const p=await Eo(e,{idToken:h}).catch(()=>{});if(!p)break;C=await Ot._fromGetAccountInfoResponse(e,p,h)}else C=Ot._fromJSON(e,h);c!==i&&(B=C),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zr(i,e,r):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iC(e))return"Blackberry";if(oC(e))return"Webos";if(tC(e))return"Safari";if((e.includes("chrome/")||nC(e))&&!e.includes("edge/"))return"Chrome";if(sC(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eC(n=Ye()){return/firefox\//i.test(n)}function tC(n=Ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nC(n=Ye()){return/crios\//i.test(n)}function rC(n=Ye()){return/iemobile/i.test(n)}function sC(n=Ye()){return/android/i.test(n)}function iC(n=Ye()){return/blackberry/i.test(n)}function oC(n=Ye()){return/webos/i.test(n)}function ru(n=Ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WE(n=Ye()){var e;return ru(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $E(){return lm()&&document.documentMode===10}function aC(n=Ye()){return ru(n)||sC(n)||oC(n)||iC(n)||/windows phone/i.test(n)||rC(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(n,e=[]){let t;switch(n){case"Browser":t=Pl(Ye());break;case"Worker":t=`${Pl(Ye())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(n,e={}){return Cn(n,"GET","/v2/passwordPolicy",fn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=6;class e_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ZE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sl(this),this.idTokenSubscription=new Sl(this),this.beforeStateQueue=new YE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Eo(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===B)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _o(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(on(this));const t=e?De(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XE(this),t=new e_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await QE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nn(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&zf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yn(n){return De(n)}class Sl{constructor(e){this.auth=e,this.observer=null,this.addObserver=pm(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n_(n){Ko=n}function uC(n){return Ko.loadJS(n)}function r_(){return Ko.recaptchaEnterpriseScript}function s_(){return Ko.gapiScript}function i_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class o_{constructor(){this.enterprise=new a_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class a_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="recaptcha-enterprise",cC="NO_RECAPTCHA",Ol="onFirebaseAuthREInstanceReady";class Tn{constructor(e){this.type=B_,this.auth=Yn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{GE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const c=new ME(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{B(u)})})}function s(i,o,B){const u=window.grecaptcha;Al(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(cC)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new o_().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async B=>{if(!t&&Al(window.grecaptcha)&&Tn.scriptInjectionDeferred)await Tn.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=r_();u.length!==0&&(u+=B+`&onload=${Ol}`),Tn.scriptInjectionDeferred=new xf,window[Ol]=()=>{var c;(c=Tn.scriptInjectionDeferred)==null||c.resolve()},uC(u).then(()=>{var c;return(c=Tn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(B,i,o)}).catch(c=>{o(c)})}}).catch(B=>{o(B)})})}}Tn.scriptInjectionDeferred=null;async function Nl(n,e,t,r=!1,s=!1){const i=new Tn(n);let o;if(s)o=cC;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const u=B.phoneEnrollmentInfo.phoneNumber,c=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const u=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return r?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function Do(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Nl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const B=await Nl(n,e,t,t==="getOobCode");return r(n,B)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n,e){const t=$n(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Vn(i,e??{}))return s;Lt(s,"already-initialized")}return t.initialize({options:e})}function c_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function l_(n,e,t){const r=Yn(n);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lC(e),{host:o,port:B}=h_(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Vn(c,r.config.emulator)&&Vn(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,vr(o)?YB(`${i}//${o}${u}`):f_()}function lC(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function h_(n){const e=lC(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fl(o)}}}function Fl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function f_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,t){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function C_(n,e){return Cn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(n,e){return di(n,"POST","/v1/accounts:signInWithPassword",fn(n,e))}async function p_(n,e){return Cn(n,"POST","/v1/accounts:sendOobCode",fn(n,e))}async function g_(n,e){return p_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e){return di(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}async function E_(n,e){return di(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends su{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new $s(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new $s(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,t,"signInWithPassword",d_);case"emailLink":return m_(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",C_);case"emailLink":return E_(e,{idToken:t,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(n,e){return di(n,"POST","/v1/accounts:signInWithIdp",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="http://localhost";class mr extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qr(e,t)}buildRequest(){const e={requestUri:__,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w_(n){const e=Os(Ns(n)).link,t=e?Os(Ns(e)).deep_link_id:null,r=Os(Ns(n)).deep_link_id;return(r?Os(Ns(r)).link:null)||r||t||e||n}class iu{constructor(e){const t=Os(Ns(e)),r=t.apiKey??null,s=t.oobCode??null,i=D_(t.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=w_(e);try{return new iu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,t){return $s._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=iu.parseLink(t);return ee(r,"argument-error"),$s._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends hC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends pi{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends pi{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends pi{constructor(){super("twitter.com")}static credential(e,t){return mr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bn.credential(t,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n,e){return di(n,"POST","/v1/accounts:signUp",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=Ll(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ll(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ll(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends St{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new wo(e,t,r,s)}}function fC(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(n,i,e,r):i})}async function y_(n,e,t=!1){const r=await Ws(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Er._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e,t=!1){const{auth:r}=n;if(Et(r.app))return Promise.reject(on(r));const s="reauthenticate";try{const i=await Ws(n,fC(r,s,e,n),t);ee(i.idToken,r,"internal-error");const o=nu(i.idToken);ee(o,r,"internal-error");const{sub:B}=o;return ee(n.uid===B,r,"user-mismatch"),Er._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(n,e,t=!1){if(Et(n.app))return Promise.reject(on(n));const r="signIn",s=await fC(n,r,e),i=await Er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function A_(n,e){return CC(Yn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(n){const e=Yn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function R_(n,e,t){const r=Yn(n);await Do(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",g_)}async function v_(n,e,t){if(Et(n.app))return Promise.reject(on(n));const r=Yn(n),o=await Do(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",I_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dC(n),u}),B=await Er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(B.user),B}function b_(n,e,t){return Et(n.app)?Promise.reject(on(n)):A_(De(n),rs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dC(n),r})}function P_(n,e,t,r){return De(n).onIdTokenChanged(e,t,r)}function S_(n,e,t){return De(n).beforeAuthStateChanged(e,t)}function Xb(n,e,t,r){return De(n).onAuthStateChanged(e,t,r)}function Zb(n){return De(n).signOut()}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=1e3,N_=10;class gC extends pC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$E()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,N_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},O_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gC.type="LOCAL";const F_=gC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC extends pC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mC.type="SESSION";const EC=mC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new zo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await L_(B);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=ou("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(C){const p=C;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(p.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function x_(n){Kt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function G_(){return _C()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="firebaseLocalStorageDb",U_=1,yo="firebaseLocalStorage",wC="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function H_(){const n=indexedDB.deleteDatabase(DC);return new gi(n).toPromise()}function IC(){const n=indexedDB.open(DC,U_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(yo,{keyPath:wC})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await H_(),e(await IC()))})})}async function kl(n,e,t){const r=Qo(n,!0).put({[wC]:e,value:t});return new gi(r).toPromise()}async function j_(n,e){const t=Qo(n,!1).get(e),r=await new gi(t).toPromise();return r===void 0?null:r.value}function xl(n,e){const t=Qo(n,!0).delete(e);return new gi(t).toPromise()}const J_=800,q_=3;class yC{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=IC(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isHiding||t++>q_)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return _C()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zo._getInstance(G_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new k_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await kl(e,Io,"1"),await xl(e,Io)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>j_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(s=>{const i=Qo(s,!1).getAll();return new gi(i).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isHiding||zf(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}yC.type="LOCAL";const K_=yC;new Ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e){return e?nn(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Q_(n){return CC(n.auth,new au(n),n.bypassAuthState)}function W_(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),T_(t,new au(n),n.bypassAuthState)}async function $_(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),y_(t,new au(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q_;case"linkViaPopup":case"linkViaRedirect":return $_;case"reauthViaPopup":case"reauthViaRedirect":return W_;default:Lt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Ci(2e3,1e4);class qr extends TC{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y_.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="pendingRedirect",oo=new Map;class Z_ extends TC{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oo.get(this.auth._key());if(!e){try{const r=await eD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oo.set(this.auth._key(),e)}return this.bypassAuthState||oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eD(n,e){const t=rD(e),r=nD(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function tD(n,e){oo.set(n._key(),e)}function nD(n){return nn(n._redirectPersistence)}function rD(n){return io(X_,n.config.apiKey,n.name)}async function sD(n,e,t=!1){if(Et(n.app))return Promise.reject(on(n));const r=Yn(n),s=z_(r,e),o=await new Z_(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=10*60*1e3;class oD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!AC(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(qt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vl(e))}saveEventToCache(e){this.cachedEventUids.add(Vl(e)),this.lastProcessedEventTime=Date.now()}}function Vl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function AC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(n,e={}){return Cn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cD=/^https?/;async function lD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await BD(n);for(const t of e)try{if(hD(t))return}catch{}Lt(n,"unauthorized-domain")}function hD(n){const e=wB(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!cD.test(t))return!1;if(uD.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=new Ci(3e4,6e4);function Ml(){const n=Kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CD(n){return new Promise((e,t)=>{var s,i,o;function r(){Ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ml(),t(qt(n,"network-request-failed"))},timeout:fD.get()})}if((i=(s=Kt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Kt().gapi)!=null&&o.load)r();else{const B=i_("iframefcb");return Kt()[B]=()=>{gapi.load?r():t(qt(n,"network-request-failed"))},uC(`${s_()}?onload=${B}`).catch(u=>t(u))}}).catch(e=>{throw ao=null,e})}let ao=null;function dD(n){return ao=ao||CD(n),ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=new Ci(5e3,15e3),gD="__/auth/iframe",mD="emulator/auth/iframe",ED={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_D=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DD(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tu(e,mD):`https://${n.config.authDomain}/${gD}`,r={apiKey:e.apiKey,appName:n.name,v:br},s=_D.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${fi(r).slice(1)}`}async function wD(n){const e=await dD(n),t=Kt().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:DD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ED,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qt(n,"network-request-failed"),B=Kt().setTimeout(()=>{i(o)},pD.get());function u(){Kt().clearTimeout(B),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yD=500,TD=600,AD="_blank",RD="http://localhost";class Gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vD(n,e,t,r=yD,s=TD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let B="";const u={...ID,width:r.toString(),height:s.toString(),top:i,left:o},c=Ye().toLowerCase();t&&(B=nC(c)?AD:t),eC(c)&&(e=e||RD,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[w,R])=>`${p}${w}=${R},`,"");if(WE(c)&&B!=="_self")return bD(e||"",B),new Gl(null);const C=window.open(e||"",B,h);ee(C,n,"popup-blocked");try{C.focus()}catch{}return new Gl(C)}function bD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="__/auth/handler",SD="emulator/auth/handler",OD=encodeURIComponent("fac");async function Ul(n,e,t,r,s,i){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:br,eventId:s};if(e instanceof hC){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",dm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,C]of Object.entries({}))o[h]=C}if(e instanceof pi){const h=e.getScopes().filter(C=>C!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const u=await n._getAppCheckToken(),c=u?`#${OD}=${encodeURIComponent(u)}`:"";return`${ND(n)}?${fi(B).slice(1)}${c}`}function ND({config:n}){return n.emulator?tu(n,SD):`https://${n.authDomain}/${PD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eB="webStorageSupport";class FD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EC,this._completeRedirectFn=sD,this._overrideRedirectResult=tD}async _openPopup(e,t,r,s){var o;cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ul(e,t,r,wB(),s);return vD(e,i,ou())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ul(e,t,r,wB(),s);return x_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await wD(e),r=new oD(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eB,{type:eB},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[eB];i!==void 0&&t(!!i),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return aC()||tC()||ru()}}const LD=FD;var Hl="@firebase/auth",jl="1.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VD(n){Ft(new bt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:B,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BC(n)},c=new t_(r,s,i,u);return c_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new bt("auth-internal",e=>{const t=Yn(e.getProvider("auth").getImmediate());return(r=>new kD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Hl,jl,xD(n)),lt(Hl,jl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=5*60,GD=kf("authIdTokenMaxAge")||MD;let Jl=null;const UD=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>GD)return;const s=t==null?void 0:t.token;Jl!==s&&(Jl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RC(n=qo()){const e=$n(n,"auth");if(e.isInitialized())return e.getImmediate();const t=u_(n,{popupRedirectResolver:LD,persistence:[K_,F_,EC]}),r=kf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UD(i.toString());S_(t,o,()=>o(t.currentUser)),P_(t,B=>o(B))}}const s=Nf("auth");return s&&l_(t,`http://${s}`),t}function HD(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}n_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",HD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VD("Browser");var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn,vC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(v,T,P){for(var _=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)_[ot-2]=arguments[ot];return E.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,D){D||(D=0);const v=Array(16);if(typeof E=="string")for(var T=0;T<16;++T)v[T]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(T=0;T<16;++T)v[T]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],T=A.g[2];let P=A.g[3],_;_=E+(P^D&(T^P))+v[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[1]+3905402710&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[2]+606105819&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[3]+3250441966&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+v[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[5]+1200080426&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[6]+2821735955&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[7]+4249261313&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+v[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[9]+2336552879&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[10]+4294925233&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[11]+2304563134&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(P^D&(T^P))+v[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=P+(T^E&(D^T))+v[13]+4254626195&4294967295,P=E+(_<<12&4294967295|_>>>20),_=T+(D^P&(E^D))+v[14]+2792965006&4294967295,T=P+(_<<17&4294967295|_>>>15),_=D+(E^T&(P^E))+v[15]+1236535329&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(T^P&(D^T))+v[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[6]+3225465664&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[11]+643717713&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[0]+3921069994&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+v[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[10]+38016083&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[15]+3634488961&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[4]+3889429448&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+v[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[14]+3275163606&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[3]+4107603335&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[8]+1163531501&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^P&(D^T))+v[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=P+(D^T&(E^D))+v[2]+4243563512&4294967295,P=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(P^E))+v[7]+1735328473&4294967295,T=P+(_<<14&4294967295|_>>>18),_=D+(P^E&(T^P))+v[12]+2368359562&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(D^T^P)+v[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[8]+2272392833&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[11]+1839030562&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[14]+4259657740&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+v[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[4]+1272893353&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[7]+4139469664&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[10]+3200236656&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+v[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[0]+3936430074&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[3]+3572445317&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[6]+76029189&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^P)+v[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=P+(E^D^T)+v[12]+3873151461&4294967295,P=E+(_<<11&4294967295|_>>>21),_=T+(P^E^D)+v[15]+530742520&4294967295,T=P+(_<<16&4294967295|_>>>16),_=D+(T^P^E)+v[2]+3299628645&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(T^(D|~P))+v[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[7]+1126891415&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[14]+2878612391&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[5]+4237533241&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+v[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[3]+2399980690&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[10]+4293915773&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[1]+2240044497&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+v[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[15]+4264355552&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[6]+2734768916&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[13]+1309151649&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~P))+v[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=P+(D^(E|~T))+v[11]+3174756917&4294967295,P=E+(_<<10&4294967295|_>>>22),_=T+(E^(P|~D))+v[2]+718787259&4294967295,T=P+(_<<15&4294967295|_>>>17),_=D+(P^(T|~E))+v[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,v=this.C;let T=this.h,P=0;for(;P<E;){if(T==0)for(;P<=D;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<E;)if(v[T++]=A.charCodeAt(P++),T==this.blockSize){s(this,v),T=0;break}}else for(;P<E;)if(v[T++]=A[P++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=E},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let v=0;v<32;v+=8)A[E++]=this.g[D]>>>v&255;return A};function i(A,E){var D=B;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let v=!0;for(let T=A.length-1;T>=0;T--){const P=A[T]|0;v&&P==E||(D[T]=P,v=!1)}this.g=D}var B={};function u(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return C;if(A<0)return M(c(-A));const E=[];let D=1;for(let v=0;A>=D;v++)E[v]=A/D|0,D*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return M(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=c(Math.pow(E,8));let v=C;for(let P=0;P<A.length;P+=8){var T=Math.min(8,A.length-P);const _=parseInt(A.substring(P,P+T),E);T<8?(T=c(Math.pow(E,T)),v=v.j(T).add(c(_))):(v=v.j(D),v=v.add(c(_)))}return v}var C=u(0),p=u(1),w=u(16777216);n=o.prototype,n.m=function(){if(L(this))return-M(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const v=this.i(D);A+=(v>=0?v:4294967296+v)*E,E*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(L(this))return"-"+M(this).toString(A);const E=c(Math.pow(A,6));var D=this;let v="";for(;;){const T=fe(D,E).g;D=K(D,T.j(E));let P=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=T,R(D))return P+v;for(;P.length<6;)P="0"+P;v=P+v}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function L(A){return A.h==-1}n.l=function(A){return A=K(this,A),L(A)?-1:R(A)?0:1};function M(A){const E=A.g.length,D=[];for(let v=0;v<E;v++)D[v]=~A.g[v];return new o(D,~A.h).add(p)}n.abs=function(){return L(this)?M(this):this},n.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let v=0;for(let T=0;T<=E;T++){let P=v+(this.i(T)&65535)+(A.i(T)&65535),_=(P>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);v=_>>>16,P&=65535,_&=65535,D[T]=_<<16|P}return new o(D,D[D.length-1]&-2147483648?-1:0)};function K(A,E){return A.add(M(E))}n.j=function(A){if(R(this)||R(A))return C;if(L(this))return L(A)?M(this).j(M(A)):M(M(this).j(A));if(L(A))return M(this.j(M(A)));if(this.l(w)<0&&A.l(w)<0)return c(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var v=0;v<2*E;v++)D[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<A.g.length;T++){const P=this.i(v)>>>16,_=this.i(v)&65535,ot=A.i(T)>>>16,er=A.i(T)&65535;D[2*v+2*T]+=_*er,te(D,2*v+2*T),D[2*v+2*T+1]+=P*er,te(D,2*v+2*T+1),D[2*v+2*T+1]+=_*ot,te(D,2*v+2*T+1),D[2*v+2*T+2]+=P*ot,te(D,2*v+2*T+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function te(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function Be(A,E){this.g=A,this.h=E}function fe(A,E){if(R(E))throw Error("division by zero");if(R(A))return new Be(C,C);if(L(A))return E=fe(M(A),E),new Be(M(E.g),M(E.h));if(L(E))return E=fe(A,M(E)),new Be(M(E.g),E.h);if(A.g.length>30){if(L(A)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var D=p,v=E;v.l(A)<=0;)D=Re(D),v=Re(v);var T=Ee(D,1),P=Ee(v,1);for(v=Ee(v,2),D=Ee(D,2);!R(v);){var _=P.add(v);_.l(A)<=0&&(T=T.add(D),P=_),v=Ee(v,1),D=Ee(D,1)}return E=K(A,T.j(E)),new Be(T,E)}for(T=C;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),v=Math.ceil(Math.log(D)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),P=c(D),_=P.j(E);L(_)||_.l(A)>0;)D-=v,P=c(D),_=P.j(E);R(P)&&(P=p),T=T.add(P),A=K(A,_)}return new Be(T,A)}n.B=function(A){return fe(this,A).h},n.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)&A.i(v);return new o(D,this.h&A.h)},n.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)|A.i(v);return new o(D,this.h|A.h)},n.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)^A.i(v);return new o(D,this.h^A.h)};function Re(A){const E=A.g.length+1,D=[];for(let v=0;v<E;v++)D[v]=A.i(v)<<1|A.i(v-1)>>>31;return new o(D,A.h)}function Ee(A,E){const D=E>>5;E%=32;const v=A.g.length-D,T=[];for(let P=0;P<v;P++)T[P]=E>0?A.i(P+D)>>>E|A.i(P+D+1)<<32-E:A.i(P+D);return new o(T,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,vC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Fn=o}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});var qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bC,Fs,PC,Bo,yB,SC,OC,NC;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qi=="object"&&qi];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,l){if(l)e:{var f=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var b=a[d];if(!(b in f))break e;f=f[b]}a=a[a.length-1],d=f[a],l=l(d),l!=d&&l!=null&&e(f,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var f=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&f.push([d,l[d]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,f){return a.call.apply(a.bind,arguments)}function c(a,l,f){return c=u,c.apply(null,arguments)}function h(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var d=f.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function C(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(d,b,S){for(var j=Array(arguments.length-2),se=2;se<arguments.length;se++)j[se-2]=arguments[se];return l.prototype[b].apply(d,j)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const l=a.length;if(l>0){const f=Array(l);for(let d=0;d<l;d++)f[d]=a[d];return f}return[]}function R(a,l){for(let d=1;d<arguments.length;d++){const b=arguments[d];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const S=b.length||0;a.length=f+S;for(let j=0;j<S;j++)a[f+j]=b[j]}else a.push(b)}}class L{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function K(){var a=A;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class te{constructor(){this.h=this.g=null}add(l,f){const d=Be.get();d.set(l,f),this.h?this.h.next=d:this.g=d,this.h=d}}var Be=new L(()=>new fe,a=>a.reset());class fe{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ee=!1,A=new te,E=()=>{const a=Promise.resolve(void 0);Re=()=>{a.then(D)}};function D(){for(var a;a=K();){try{a.h.call(a.g)}catch(f){M(f)}var l=Be;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Ee=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function ot(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}C(ot,T),ot.prototype.init=function(a,l){const f=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ot.Z.h.call(this)},ot.prototype.h=function(){ot.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var er="closure_listenable_"+(Math.random()*1e6|0),dg=0;function pg(a,l,f,d,b){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!d,this.ha=b,this.key=++dg,this.da=this.fa=!1}function bi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pi(a,l,f){for(const d in a)l.call(f,a[d],d,a)}function gg(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function fc(a){const l={};for(const f in a)l[f]=a[f];return l}const Cc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dc(a,l){let f,d;for(let b=1;b<arguments.length;b++){d=arguments[b];for(f in d)a[f]=d[f];for(let S=0;S<Cc.length;S++)f=Cc[S],Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}}function Si(a){this.src=a,this.g={},this.h=0}Si.prototype.add=function(a,l,f,d,b){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const j=Ta(a,l,d,b);return j>-1?(l=a[j],f||(l.fa=!1)):(l=new pg(l,this.src,S,!!d,b),l.fa=f,a.push(l)),l};function ya(a,l){const f=l.type;if(f in a.g){var d=a.g[f],b=Array.prototype.indexOf.call(d,l,void 0),S;(S=b>=0)&&Array.prototype.splice.call(d,b,1),S&&(bi(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ta(a,l,f,d){for(let b=0;b<a.length;++b){const S=a[b];if(!S.da&&S.listener==l&&S.capture==!!f&&S.ha==d)return b}return-1}var Aa="closure_lm_"+(Math.random()*1e6|0),Ra={};function pc(a,l,f,d,b){if(Array.isArray(l)){for(let S=0;S<l.length;S++)pc(a,l[S],f,d,b);return null}return f=Ec(f),a&&a[er]?a.J(l,f,B(d)?!!d.capture:!1,b):mg(a,l,f,!1,d,b)}function mg(a,l,f,d,b,S){if(!l)throw Error("Invalid event type");const j=B(b)?!!b.capture:!!b;let se=ba(a);if(se||(a[Aa]=se=new Si(a)),f=se.add(l,f,d,j,S),f.proxy)return f;if(d=Eg(),f.proxy=d,d.src=a,d.listener=f,a.addEventListener)P||(b=j),b===void 0&&(b=!1),a.addEventListener(l.toString(),d,b);else if(a.attachEvent)a.attachEvent(mc(l.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Eg(){function a(f){return l.call(a.src,a.listener,f)}const l=_g;return a}function gc(a,l,f,d,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)gc(a,l[S],f,d,b);else d=B(d)?!!d.capture:!!d,f=Ec(f),a&&a[er]?(a=a.i,S=String(l).toString(),S in a.g&&(l=a.g[S],f=Ta(l,f,d,b),f>-1&&(bi(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[S],a.h--)))):a&&(a=ba(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Ta(l,f,d,b)),(f=a>-1?l[a]:null)&&va(f))}function va(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[er])ya(l.i,a);else{var f=a.type,d=a.proxy;l.removeEventListener?l.removeEventListener(f,d,a.capture):l.detachEvent?l.detachEvent(mc(f),d):l.addListener&&l.removeListener&&l.removeListener(d),(f=ba(l))?(ya(f,a),f.h==0&&(f.src=null,l[Aa]=null)):bi(a)}}}function mc(a){return a in Ra?Ra[a]:Ra[a]="on"+a}function _g(a,l){if(a.da)a=!0;else{l=new ot(l,this);const f=a.listener,d=a.ha||a.src;a.fa&&va(a),a=f.call(d,l)}return a}function ba(a){return a=a[Aa],a instanceof Si?a:null}var Pa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ec(a){return typeof a=="function"?a:(a[Pa]||(a[Pa]=function(l){return a.handleEvent(l)}),a[Pa])}function ze(){v.call(this),this.i=new Si(this),this.M=this,this.G=null}C(ze,v),ze.prototype[er]=!0,ze.prototype.removeEventListener=function(a,l,f,d){gc(this,a,l,f,d)};function Ze(a,l){var f,d=a.G;if(d)for(f=[];d;d=d.G)f.push(d);if(a=a.M,d=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(d,a),dc(l,b)}b=!0;let S,j;if(f)for(j=f.length-1;j>=0;j--)S=l.g=f[j],b=Oi(S,d,!0,l)&&b;if(S=l.g=a,b=Oi(S,d,!0,l)&&b,b=Oi(S,d,!1,l)&&b,f)for(j=0;j<f.length;j++)S=l.g=f[j],b=Oi(S,d,!1,l)&&b}ze.prototype.N=function(){if(ze.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let d=0;d<f.length;d++)bi(f[d]);delete a.g[l],a.h--}}this.G=null},ze.prototype.J=function(a,l,f,d){return this.i.add(String(a),l,!1,f,d)},ze.prototype.K=function(a,l,f,d){return this.i.add(String(a),l,!0,f,d)};function Oi(a,l,f,d){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let S=0;S<l.length;++S){const j=l[S];if(j&&!j.da&&j.capture==f){const se=j.listener,Ge=j.ha||j.src;j.fa&&ya(a.i,j),b=se.call(Ge,d)!==!1&&b}}return b&&!d.defaultPrevented}function Dg(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function _c(a){a.g=Dg(()=>{a.g=null,a.i&&(a.i=!1,_c(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class wg extends v{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:_c(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){v.call(this),this.h=a,this.g={}}C(hs,v);var Dc=[];function wc(a){Pi(a.g,function(l,f){this.g.hasOwnProperty(f)&&va(l)},a),a.g={}}hs.prototype.N=function(){hs.Z.N.call(this),wc(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sa=o.JSON.stringify,Ig=o.JSON.parse,yg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ic(){}function yc(){}var fs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Oa(){T.call(this,"d")}C(Oa,T);function Na(){T.call(this,"c")}C(Na,T);var tr={},Tc=null;function Ni(){return Tc=Tc||new ze}tr.Ia="serverreachability";function Ac(a){T.call(this,tr.Ia,a)}C(Ac,T);function Cs(a){const l=Ni();Ze(l,new Ac(l))}tr.STAT_EVENT="statevent";function Rc(a,l){T.call(this,tr.STAT_EVENT,a),this.stat=l}C(Rc,T);function et(a){const l=Ni();Ze(l,new Rc(l,a))}tr.Ja="timingevent";function vc(a,l){T.call(this,tr.Ja,a),this.size=l}C(vc,T);function ds(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function ps(){this.g=!0}ps.prototype.ua=function(){this.g=!1};function Tg(a,l,f,d,b,S){a.info(function(){if(a.g)if(S){var j="",se=S.split("&");for(let pe=0;pe<se.length;pe++){var Ge=se[pe].split("=");if(Ge.length>1){const He=Ge[0];Ge=Ge[1];const Mt=He.split("_");j=Mt.length>=2&&Mt[1]=="type"?j+(He+"="+Ge+"&"):j+(He+"=redacted&")}}}else j=null;else j=S;return"XMLHTTP REQ ("+d+") [attempt "+b+"]: "+l+`
`+f+`
`+j})}function Ag(a,l,f,d,b,S,j){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+b+"]: "+l+`
`+f+`
`+S+" "+j})}function Fr(a,l,f,d){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+vg(a,f)+(d?" "+d:"")})}function Rg(a,l){a.info(function(){return"TIMEOUT: "+l})}ps.prototype.info=function(){};function vg(a,l){if(!a.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var f=S[a];if(!(f.length<2)){var d=f[1];if(Array.isArray(d)&&!(d.length<1)){var b=d[0];if(b!="noop"&&b!="stop"&&b!="close")for(let j=1;j<d.length;j++)d[j]=""}}}}return Sa(S)}catch{return l}}var Fi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Pc;function Fa(){}C(Fa,Ic),Fa.prototype.g=function(){return new XMLHttpRequest},Pc=new Fa;function gs(a){return encodeURIComponent(String(a))}function bg(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function dn(a,l,f,d){this.j=a,this.i=l,this.l=f,this.S=d||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sc}function Sc(){this.i=null,this.g="",this.h=!1}var Oc={},La={};function ka(a,l,f){a.M=1,a.A=ki(Vt(l)),a.u=f,a.R=!0,Nc(a,null)}function Nc(a,l){a.F=Date.now(),Li(a),a.B=Vt(a.A);var f=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),Kc(f.i,"t",d),a.C=0,f=a.j.L,a.h=new Sc,a.g=cl(a.j,f?l:null,!a.u),a.P>0&&(a.O=new wg(c(a.Y,a,a.g),a.P)),l=a.V,f=a.g,d=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Dc[0]=b.toString()),b=Dc);for(let S=0;S<b.length;S++){const j=pc(f,b[S],d||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=a.J?fc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Cs(),Tg(a.i,a.v,a.B,a.l,a.S,a.u)}dn.prototype.ba=function(a){a=a.target;const l=this.O;l&&mn(a)==3?l.j():this.Y(a)},dn.prototype.Y=function(a){try{if(a==this.g)e:{const se=mn(this.g),Ge=this.g.ya(),pe=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||Zc(this.g)))){this.K||se!=4||Ge==7||(Ge==8||pe<=0?Cs(3):Cs(2)),xa(this);var l=this.g.ca();this.X=l;var f=Pg(this);if(this.o=l==200,Ag(this.i,this.v,this.B,this.l,this.S,se,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,b=this.g;if((d=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var S=d;break t}}S=null}if(a=S)Fr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Va(this,a);else{this.o=!1,this.m=3,et(12),nr(this),ms(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<f.length;)if(He=Sg(this,f),He==La){se==4&&(this.m=4,et(14),a=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Oc){this.m=4,et(15),Fr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Fr(this.i,this.l,He,null),Va(this,He);if(Fc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||f.length!=0||this.h.h||(this.m=1,et(16),a=!1),this.o=this.o&&a,!a)Fr(this.i,this.l,f,"[Invalid Chunked Response]"),nr(this),ms(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ka(j),j.P=!0,et(11))}}else Fr(this.i,this.l,f,null),Va(this,f);se==4&&nr(this),this.o&&!this.K&&(se==4?ol(this.j,this):(this.o=!1,Li(this)))}else qg(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),nr(this),ms(this)}}}catch{}finally{}};function Pg(a){if(!Fc(a))return a.g.la();const l=Zc(a.g);if(l==="")return"";let f="";const d=l.length,b=mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return nr(a),ms(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<d;S++)a.h.h=!0,f+=a.h.i.decode(l[S],{stream:!(b&&S==d-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function Fc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Sg(a,l){var f=a.C,d=l.indexOf(`
`,f);return d==-1?La:(f=Number(l.substring(f,d)),isNaN(f)?Oc:(d+=1,d+f>l.length?La:(l=l.slice(d,d+f),a.C=d+f,l)))}dn.prototype.cancel=function(){this.K=!0,nr(this)};function Li(a){a.T=Date.now()+a.H,Lc(a,a.H)}function Lc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ds(c(a.aa,a),l)}function xa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}dn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Rg(this.i,this.B),this.M!=2&&(Cs(),et(17)),nr(this),this.m=2,ms(this)):Lc(this,this.T-a)};function ms(a){a.j.I==0||a.K||ol(a.j,a)}function nr(a){xa(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,wc(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Va(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||Ma(f.h,a))){if(!a.L&&Ma(f.h,a)&&f.I==3){try{var d=f.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var b=d;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ui(f),Mi(f);else break e;qa(f),et(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ds(c(f.Va,f),6e3));Vc(f.h)<=1&&f.ta&&(f.ta=void 0)}else sr(f,11)}else if((a.L||f.g==a)&&Ui(f),!_(l))for(b=f.Ba.g.parse(l),l=0;l<b.length;l++){let pe=b[l];const He=pe[0];if(!(He<=f.K))if(f.K=He,pe=pe[1],f.I==2)if(pe[0]=="c"){f.M=pe[1],f.ba=pe[2];const Mt=pe[3];Mt!=null&&(f.ka=Mt,f.j.info("VER="+f.ka));const ir=pe[4];ir!=null&&(f.za=ir,f.j.info("SVER="+f.za));const En=pe[5];En!=null&&typeof En=="number"&&En>0&&(d=1.5*En,f.O=d,f.j.info("backChannelRequestTimeoutMs_="+d)),d=f;const _n=a.g;if(_n){const ji=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var S=d.h;S.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ga(S,S.h),S.h=null))}if(d.G){const za=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(d.wa=za,we(d.J,d.G,za))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),d=f;var j=a;if(d.na=ul(d,d.L?d.ba:null,d.W),j.L){Mc(d.h,j);var se=j,Ge=d.O;Ge&&(se.H=Ge),se.D&&(xa(se),Li(se)),d.g=j}else sl(d);f.i.length>0&&Gi(f)}else pe[0]!="stop"&&pe[0]!="close"||sr(f,7);else f.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?sr(f,7):Ja(f):pe[0]!="noop"&&f.l&&f.l.qa(pe),f.A=0)}}Cs(4)}catch{}}var Og=class{constructor(a,l){this.g=a,this.map=l}};function kc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vc(a){return a.h?1:a.g?a.g.size:0}function Ma(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Ga(a,l){a.g?a.g.add(l):a.h=l}function Mc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}kc.prototype.cancel=function(){if(this.i=Gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return w(a.i)}var Uc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ng(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const d=a[f].indexOf("=");let b,S=null;d>=0?(b=a[f].substring(0,d),S=a[f].substring(d+1)):b=a[f],l(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function pn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof pn?(this.l=a.l,Es(this,a.j),this.o=a.o,this.g=a.g,_s(this,a.u),this.h=a.h,Ua(this,zc(a.i)),this.m=a.m):a&&(l=String(a).match(Uc))?(this.l=!1,Es(this,l[1]||"",!0),this.o=Ds(l[2]||""),this.g=Ds(l[3]||"",!0),_s(this,l[4]),this.h=Ds(l[5]||"",!0),Ua(this,l[6]||"",!0),this.m=Ds(l[7]||"")):(this.l=!1,this.i=new Is(null,this.l))}pn.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(ws(l,Hc,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ws(l,Hc,!0),"@"),a.push(gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ws(f,f.charAt(0)=="/"?kg:Lg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ws(f,Vg)),a.join("")},pn.prototype.resolve=function(a){const l=Vt(this);let f=!!a.j;f?Es(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var d=a.h;if(f)_s(l,a.u);else if(f=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var b=l.h.lastIndexOf("/");b!=-1&&(d=l.h.slice(0,b+1)+d)}if(b=d,b==".."||b==".")d="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){d=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let j=0;j<b.length;){const se=b[j++];se=="."?d&&j==b.length&&S.push(""):se==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),d&&j==b.length&&S.push("")):(S.push(se),d=!0)}d=S.join("/")}else d=b}return f?l.h=d:f=a.i.toString()!=="",f?Ua(l,zc(a.i)):f=!!a.m,f&&(l.m=a.m),l};function Vt(a){return new pn(a)}function Es(a,l,f){a.j=f?Ds(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function _s(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Ua(a,l,f){l instanceof Is?(a.i=l,Mg(a.i,a.l)):(f||(l=ws(l,xg)),a.i=new Is(l,a.l))}function we(a,l,f){a.i.set(l,f)}function ki(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ds(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ws(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,Fg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hc=/[#\/\?@]/g,Lg=/[#\?:]/g,kg=/[#\?]/g,xg=/[#\?@]/g,Vg=/#/g;function Is(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&Ng(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=Is.prototype,n.add=function(a,l){rr(this),this.i=null,a=Lr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function jc(a,l){rr(a),l=Lr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Jc(a,l){return rr(a),l=Lr(a,l),a.g.has(l)}n.forEach=function(a,l){rr(this),this.g.forEach(function(f,d){f.forEach(function(b){a.call(l,b,d,this)},this)},this)};function qc(a,l){rr(a);let f=[];if(typeof l=="string")Jc(a,l)&&(f=f.concat(a.g.get(Lr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}n.set=function(a,l){return rr(this),this.i=null,a=Lr(this,a),Jc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=qc(this,a),a.length>0?String(a[0]):l):l};function Kc(a,l,f){jc(a,l),f.length>0&&(a.i=null,a.g.set(Lr(a,l),w(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var f=l[d];const b=gs(f);f=qc(this,f);for(let S=0;S<f.length;S++){let j=b;f[S]!==""&&(j+="="+gs(f[S])),a.push(j)}}return this.i=a.join("&")};function zc(a){const l=new Is;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Lr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Mg(a,l){l&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(f,d){const b=d.toLowerCase();d!=b&&(jc(this,d),Kc(this,b,f))},a)),a.j=l}function Gg(a,l){const f=new ps;if(o.Image){const d=new Image;d.onload=h(gn,f,"TestLoadImage: loaded",!0,l,d),d.onerror=h(gn,f,"TestLoadImage: error",!1,l,d),d.onabort=h(gn,f,"TestLoadImage: abort",!1,l,d),d.ontimeout=h(gn,f,"TestLoadImage: timeout",!1,l,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else l(!1)}function Ug(a,l){const f=new ps,d=new AbortController,b=setTimeout(()=>{d.abort(),gn(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:d.signal}).then(S=>{clearTimeout(b),S.ok?gn(f,"TestPingServer: ok",!0,l):gn(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),gn(f,"TestPingServer: error",!1,l)})}function gn(a,l,f,d,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),d(f)}catch{}}function Hg(){this.g=new yg}function Ha(a){this.i=a.Sb||null,this.h=a.ab||!1}C(Ha,Ic),Ha.prototype.g=function(){return new xi(this.i,this.h)};function xi(a,l){ze.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(xi,ze),n=xi.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Ts(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?ys(this):Ts(this),this.readyState==3&&Qc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ys(this))},n.Na=function(a){this.g&&(this.response=a,ys(this))},n.ga=function(){this.g&&ys(this)};function ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ts(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wc(a){let l="";return Pi(a,function(f,d){l+=d,l+=":",l+=f,l+=`\r
`}),l}function ja(a,l,f){e:{for(d in f){var d=!1;break e}d=!0}d||(f=Wc(f),typeof a=="string"?f!=null&&gs(f):we(a,l,f))}function Pe(a){ze.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(Pe,ze);var jg=/^https?$/i,Jg=["POST","PUT"];n=Pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,f,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Pc.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){$c(this,S);return}if(a=f||"",f=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var b in d)f.set(b,d[b]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())f.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Jg,l,void 0)>=0)||d||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,j]of f)this.g.setRequestHeader(S,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){$c(this,S)}};function $c(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Yc(a),Vi(a)}function Yc(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ze(this,"complete"),Ze(this,"abort"),Vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),Pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Xc(this):this.Xa())},n.Xa=function(){Xc(this)};function Xc(a){if(a.h&&typeof i<"u"){if(a.v&&mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ze(a,"readystatechange"),mn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var d;if(d=S===0){let j=String(a.D).match(Uc)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),d=!jg.test(j?j.toLowerCase():"")}f=d}if(f)Ze(a,"complete"),Ze(a,"success");else{a.o=6;try{var b=mn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Yc(a)}}finally{Vi(a)}}}}function Vi(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||Ze(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return mn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Ig(l)}};function Zc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qg(a){const l={};a=(a.g&&mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(_(a[d]))continue;var f=bg(a[d]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=l[b]||[];l[b]=S,S.push(f)}gg(l,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function el(a){this.za=0,this.i=[],this.j=new ps,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,a),this.Za=As("retryDelaySeedMs",1e4,a),this.Ta=As("forwardChannelMaxRetries",2,a),this.va=As("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new kc(a&&a.concurrentRequestLimit),this.Ba=new Hg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=el.prototype,n.ka=8,n.I=1,n.connect=function(a,l,f,d){et(0),this.W=a,this.H=l||{},f&&d!==void 0&&(this.H.OSID=f,this.H.OAID=d),this.F=this.X,this.J=ul(this,null,this.W),Gi(this)};function Ja(a){if(tl(a),a.I==3){var l=a.V++,f=Vt(a.J);if(we(f,"SID",a.M),we(f,"RID",l),we(f,"TYPE","terminate"),Rs(a,f),l=new dn(a,a.j,l),l.M=2,l.A=ki(Vt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=cl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Li(l)}Bl(a)}function Mi(a){a.g&&(Ka(a),a.g.cancel(),a.g=null)}function tl(a){Mi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ui(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Gi(a){if(!xc(a.h)&&!a.m){a.m=!0;var l=a.Ea;Re||E(),Ee||(Re(),Ee=!0),A.add(l,a),a.D=0}}function Kg(a,l){return Vc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ds(c(a.Ea,a,l),al(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new dn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=fc(S),dc(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var d=this.i[f];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=rl(this,b,l),f=Vt(this.J),we(f,"RID",a),we(f,"CVER",22),this.G&&we(f,"X-HTTP-Session-Id",this.G),Rs(this,f),S&&(this.R?l="headers="+gs(Wc(S))+"&"+l:this.u&&ja(f,this.u,S)),Ga(this.h,b),this.Ra&&we(f,"TYPE","init"),this.S?(we(f,"$req",l),we(f,"SID","null"),b.U=!0,ka(b,f,null)):ka(b,f,l),this.I=2}}else this.I==3&&(a?nl(this,a):this.i.length==0||xc(this.h)||nl(this))};function nl(a,l){var f;l?f=l.l:f=a.V++;const d=Vt(a.J);we(d,"SID",a.M),we(d,"RID",f),we(d,"AID",a.K),Rs(a,d),a.u&&a.o&&ja(d,a.u,a.o),f=new dn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=rl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ga(a.h,f),ka(f,d,l)}function Rs(a,l){a.H&&Pi(a.H,function(f,d){we(l,d,f)}),a.l&&Pi({},function(f,d){we(l,d,f)})}function rl(a,l,f){f=Math.min(a.i.length,f);const d=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let se=-1;for(;;){const Ge=["count="+f];se==-1?f>0?(se=b[0].g,Ge.push("ofs="+se)):se=0:Ge.push("ofs="+se);let pe=!0;for(let He=0;He<f;He++){var S=b[He].g;const Mt=b[He].map;if(S-=se,S<0)se=Math.max(0,b[He].g-100),pe=!1;else try{S="req"+S+"_"||"";try{var j=Mt instanceof Map?Mt:Object.entries(Mt);for(const[ir,En]of j){let _n=En;B(En)&&(_n=Sa(En)),Ge.push(S+ir+"="+encodeURIComponent(_n))}}catch(ir){throw Ge.push(S+"type="+encodeURIComponent("_badmap")),ir}}catch{d&&d(Mt)}}if(pe){j=Ge.join("&");break e}}j=void 0}return a=a.i.splice(0,f),l.G=a,j}function sl(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Re||E(),Ee||(Re(),Ee=!0),A.add(l,a),a.A=0}}function qa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ds(c(a.Da,a),al(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,il(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ds(c(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),Mi(this),il(this))};function Ka(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function il(a){a.g=new dn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Vt(a.na);we(l,"RID","rpc"),we(l,"SID",a.M),we(l,"AID",a.K),we(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(l,"TO",a.ia),we(l,"TYPE","xmlhttp"),Rs(a,l),a.u&&a.o&&ja(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ki(Vt(l)),f.u=null,f.R=!0,Nc(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Mi(this),qa(this),et(19))};function Ui(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ol(a,l){var f=null;if(a.g==l){Ui(a),Ka(a),a.g=null;var d=2}else if(Ma(a.h,l))f=l.G,Mc(a.h,l),d=1;else return;if(a.I!=0){if(l.o)if(d==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;d=Ni(),Ze(d,new vc(d,f)),Gi(a)}else sl(a);else if(b=l.m,b==3||b==0&&l.X>0||!(d==1&&Kg(a,l)||d==2&&qa(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),b){case 1:sr(a,5);break;case 4:sr(a,10);break;case 3:sr(a,6);break;default:sr(a,2)}}}function al(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function sr(a,l){if(a.j.info("Error code "+l),l==2){var f=c(a.bb,a),d=a.Ua;const b=!d;d=new pn(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Es(d,"https"),ki(d),b?Gg(d.toString(),f):Ug(d.toString(),f)}else et(2);a.I=0,a.l&&a.l.pa(l),Bl(a),tl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Bl(a){if(a.I=0,a.ja=[],a.l){const l=Gc(a.h);(l.length!=0||a.i.length!=0)&&(R(a.ja,l),R(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function ul(a,l,f){var d=f instanceof pn?Vt(f):new pn(f);if(d.g!="")l&&(d.g=l+"."+d.g),_s(d,d.u);else{var b=o.location;d=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const S=new pn(null);d&&Es(S,d),l&&(S.g=l),b&&_s(S,b),f&&(S.h=f),d=S}return f=a.G,l=a.wa,f&&l&&we(d,f,l),we(d,"VER",a.ka),Rs(a,d),d}function cl(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Pe(new Ha({ab:f})):new Pe(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ll(){}n=ll.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Hi(){}Hi.prototype.g=function(a,l){return new pt(a,l)};function pt(a,l){ze.call(this),this.g=new el(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new kr(this)}C(pt,ze),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Ja(this.g)},pt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Sa(a),a=f);l.i.push(new Og(l.Ya++,a)),l.I==3&&Gi(l)},pt.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,pt.Z.N.call(this)};function hl(a){Oa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const f in l){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(hl,Oa);function fl(){Na.call(this),this.status=1}C(fl,Na);function kr(a){this.g=a}C(kr,ll),kr.prototype.ra=function(){Ze(this.g,"a")},kr.prototype.qa=function(a){Ze(this.g,new hl(a))},kr.prototype.pa=function(a){Ze(this.g,new fl)},kr.prototype.oa=function(){Ze(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,NC=function(){return new Hi},OC=function(){return Ni()},SC=tr,yB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,Bo=Fi,bc.COMPLETE="complete",PC=bc,yc.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",ze.prototype.listen=ze.prototype.J,Fs=yc,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,bC=Pe}).apply(typeof qi<"u"?qi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var ge,V=(ge=class{},G(ge,"FOLD_CASE",1),G(ge,"LITERAL",2),G(ge,"CLASS_NL",4),G(ge,"DOT_NL",8),G(ge,"ONE_LINE",16),G(ge,"NON_GREEDY",32),G(ge,"PERL_X",64),G(ge,"UNICODE_GROUPS",128),G(ge,"WAS_DOLLAR",256),G(ge,"LOOKBEHIND",512),G(ge,"MATCH_NL",ge.CLASS_NL|ge.DOT_NL),G(ge,"PERL",ge.CLASS_NL|ge.ONE_LINE|ge.PERL_X|ge.UNICODE_GROUPS),G(ge,"POSIX",0),G(ge,"UNANCHORED",0),G(ge,"ANCHOR_START",1),G(ge,"ANCHOR_BOTH",2),ge);const xr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Ys=128,TB=new Int32Array(Ys),AB=new Int32Array(Ys),Ki=65535;for(let n=0;n<Ys;n++)n>=97&&n<=122?TB[n]=n-32:TB[n]=n,n>=65&&n<=90?AB[n]=n+32:AB[n]=n;var pB,O=(pB=class{static toUpperCase(n){if(n<Ys)return TB[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>Ki?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>Ki?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<Ys)return AB[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>Ki?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>Ki?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}},G(pB,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),pB),g=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const FC=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)FC[e.charCodeAt(n)]=n;const LC=n=>{const e=[];let t=0,r=0;for(let s=0;s<n.length;s++){let i=FC[n.charCodeAt(s)];t|=(i&31)<<r,i&32?r+=5:(e.push(t),t=0,r=0)}return e},m=(n,e)=>{const t=LC(n),r=e?t.length/2:t.length/3,s=new Uint32Array(r*3);let i=0,o=0;for(let B=0;B<r;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},jD=n=>{const e=LC(n),t=new Map;let r=0;for(let s=0;s<e.length;s+=2){r+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(r,r+o)}return t};var zi=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},In,Bt=(In=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=jD("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},G(In,"_CASE_ORBIT",null),G(In,"_Print",null),G(In,"CATEGORIES",new zi({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),G(In,"SCRIPTS",new zi({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),G(In,"FOLD_CATEGORIES",new zi({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),G(In,"FOLD_SCRIPT",new zi({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),In),me,z=(me=class{static is32(e,t){let r=0,s=e.length;for(;r<s;){const i=r+Math.floor((s-r)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:r=i+1}return!1}static is(e,t){if(t<=me.MAX_LATIN1){for(let r=0;r<e.length;r++){if(t>e.getHi(r))continue;const s=e.getLo(r);if(t<s)return!1;const i=e.getStride(r);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&me.is32(e,t)}static isUpper(e){if(e<=me.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return me.is(Bt.Upper,e)}static isPrint(e){return e<=me.MAX_LATIN1?e>=32&&e<me.MAX_ASCII||e>=161&&e!==173:me.is(Bt.Print,e)}static simpleFold(e){if(Bt.CASE_ORBIT.has(e))return Bt.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=me.MAX_ASCII&&t<=me.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let r=me.simpleFold(e);r!==e;r=me.simpleFold(r))if(r===t)return!0;return!1}},G(me,"MAX_RUNE",1114111),G(me,"MAX_ASCII",127),G(me,"MAX_LATIN1",255),G(me,"MAX_BMP",65535),G(me,"MIN_FOLD",65),G(me,"MAX_FOLD",125251),G(me,"MIN_HIGH_SURROGATE",55296),G(me,"MAX_HIGH_SURROGATE",56319),G(me,"MIN_LOW_SURROGATE",56320),G(me,"MAX_LOW_SURROGATE",57343),G(me,"MIN_SUPPLEMENTARY_CODE_POINT",65536),me);const Bu=256,kC=new Uint8Array(Bu);for(let n=0;n<Bu;n++)kC[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let tB=null,nB=null;var ye,W=(ye=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(z.isPrint(e))ye.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){const t=String(e),r=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);r.push(i),s+=i>z.MAX_BMP?2:1}return r}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<Bu?kC[e]===1:!1}static emptyOpContext(e,t){let r=0;return e<0&&(r|=ye.EMPTY_BEGIN_TEXT|ye.EMPTY_BEGIN_LINE),e===10&&(r|=ye.EMPTY_BEGIN_LINE),t<0&&(r|=ye.EMPTY_END_TEXT|ye.EMPTY_END_LINE),t===10&&(r|=ye.EMPTY_END_LINE),ye.isWordRune(e)!==ye.isWordRune(t)?r|=ye.EMPTY_WORD_BOUNDARY:r|=ye.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>ye.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>z.MAX_BMP?2:1}static toArray(e){const t=e.length,r=new Array(t);for(let s=0;s<t;s++)r[s]=e[s];return r}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return tB||(tB=new TextEncoder),tB.encode(e);{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===z.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===z.MIN_LOW_SURROGATE?(i=z.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){nB||(nB=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return nB.decode(t)}else{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],B=e[r++],u=e[r++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-z.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(z.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(z.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[r++],B=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},G(ye,"METACHARACTERS","\\.+*?()|[]{}^$"),G(ye,"EMPTY_BEGIN_LINE",1),G(ye,"EMPTY_END_LINE",2),G(ye,"EMPTY_BEGIN_TEXT",4),G(ye,"EMPTY_END_TEXT",8),G(ye,"EMPTY_WORD_BOUNDARY",16),G(ye,"EMPTY_NO_WORD_BOUNDARY",32),G(ye,"EMPTY_ALL",-1),ye);const xC=(n=[],e=0)=>{const t=Object.create(null);for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)};var On,_r=(On=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===On.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===On.Encoding.UTF_16}},G(On,"Encoding",xC(["UTF_16","UTF_8"])),On),Kl=class extends _r{constructor(n=null){super(),this.bytes=n}getEncoding(){return _r.Encoding.UTF_8}asCharSequence(){return W.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},JD=class extends _r{constructor(n=null){super(),this.charSequence=n}getEncoding(){return _r.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return W.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},ur=class{static utf16(n){return new JD(n)}static utf8(n){return W.isByteArray(n)?new Kl(n):new Kl(W.stringToUtf8ByteArray(n))}},st=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},qD=class extends st{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const r=this.indexOf(this.bytes,t,this.start+e);return r!==-1&&r<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return st.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;return(r&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|r&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;if((r&192)!==128)return e<<3|1;const s=this.bytes[n+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(r&63)<<6|s&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let r=n-1;if(e=this.bytes[r--],e>=128){let s=n-4;for(s<this.start&&(s=this.start);r>=s&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),e=this.step(r-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return W.emptyOpContext(e,t)}indexOf(n,e,t=0){let r=e.length;if(r===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-r;const o=typeof n.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=n.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&n[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<r;c++)if(n[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(n){return n.prefixUTF8.length}},KD=class extends st{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return st.EOF();const e=this.charSequence.charCodeAt(n);if(e<z.MIN_HIGH_SURROGATE||e>z.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=z.MIN_LOW_SURROGATE&&t<=z.MAX_LOW_SURROGATE?(e-z.MIN_HIGH_SURROGATE)*1024+(t-z.MIN_LOW_SURROGATE)+z.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return W.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},Ie=class{static fromUTF8(n,e=0,t=n.length){return new qD(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new KD(n,e,t)}},mi=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},_e=class extends mi{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},zD=class extends mi{constructor(n){super(n),this.name="RE2JSCompileException"}},at=class extends mi{constructor(n){super(n),this.name="RE2JSGroupException"}},QD=class extends mi{constructor(n){super(n),this.name="RE2JSFlagsException"}},Ms=class extends mi{constructor(n){super(n),this.name="RE2JSInternalException"}},hr,zl=(hr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(r=>{const s=r.codePointAt(0);return s===O.CODES.get("\\")||s===O.CODES.get("$")?`\\${r}`:r}).join(""):e.indexOf("$")<0?e:e.split("").map(r=>r.codePointAt(0)===O.CODES.get("$")?"$$":r).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,this.numberOfInstructions=r.numberOfInstructions(),t instanceof _r?this.resetMatcherInput(t):W.isByteArray(t)?this.resetMatcherInput(ur.utf8(t)):this.resetMatcherInput(ur.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof _r||(W.isByteArray(e)?e=ur.utf8(e):e=ur.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new at(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new at(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new at(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}getNamedGroups(){if(!this.hasMatch)throw new at("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new at(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new at("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new at("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,V.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,V.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new at(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Ie.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Ie.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,V.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?W.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),r}appendReplacementInternalJava(e){let t="",r=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(r<i&&(t+=e.substring(r,i)),i++,i>=s)throw new at("character to be escaped is missing");r=i,i++;continue}if(o===O.CODES.get("$")){if(r<i&&(t+=e.substring(r,i)),i+1>=s)throw new at("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(O.CODES.get("0")<=B&&B<=O.CODES.get("9")){let u=B-O.CODES.get("0"),c=i+2;for(;c<s;c++){const C=e.codePointAt(c);if(C<O.CODES.get("0")||C>O.CODES.get("9")||u*10+C-O.CODES.get("0")>this.patternGroupCount)break;u=u*10+C-O.CODES.get("0")}if(u>this.patternGroupCount)throw new at(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=c,r=i}else if(B===O.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==O.CODES.get("}");)u++;if(u>=s)throw new at("named capture group is missing trailing '}'");const c=e.substring(i+2,u),h=this.group(c);h!==null&&(t+=h),i=u+1,r=i}else throw new at("Illegal group reference");continue}i++}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalJs(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(O.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,r=i+1;continue}else if(O.CODES.get("`")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(0,this.start(0)),i++,r=i+1;continue}else if(O.CODES.get("'")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,r=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let B=o-O.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||B*10+o-O.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-O.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,r=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),r=i,i--;continue}else if(o===O.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==O.CODES.get(">")&&e.codePointAt(B)!==O.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==O.CODES.get(">")){t+=e.substring(i-1,B+1),r=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;r=B+1,i=B;continue}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=hr.MAX_REPLACER_ARGS)throw new at("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,r){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,r);return s+=String(e(...B)),s}buildReplacerArgs(e,t,r){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(r),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},G(hr,"MAX_REPLACER_ARGS",65535),hr),ce,N=(ce=class{static isRuneOp(e){return ce.RUNE<=e&&e<=ce.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=W.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?z.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?z.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case ce.ALT:return`alt -> ${this.out}, ${this.arg}`;case ce.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case ce.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case ce.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case ce.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case ce.FAIL:return"fail";case ce.NOP:return`nop -> ${this.out}`;case ce.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case ce.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case ce.RUNE:return this.runes===null?"rune <null>":["rune ",ce.escapeRunes(this.runes),this.arg&V.FOLD_CASE?"/i":""," -> ",this.out].join("");case ce.RUNE1:return`rune1 ${ce.escapeRunes(this.runes)} -> ${this.out}`;case ce.RUNE_ANY:return`any -> ${this.out}`;case ce.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},G(ce,"ALT",1),G(ce,"ALT_MATCH",2),G(ce,"CAPTURE",3),G(ce,"EMPTY_WIDTH",4),G(ce,"FAIL",5),G(ce,"MATCH",6),G(ce,"NOP",7),G(ce,"RUNE",8),G(ce,"RUNE1",9),G(ce,"RUNE_ANY",10),G(ce,"RUNE_ANY_NOT_NL",11),G(ce,"LB_WRITE",12),G(ce,"LB_CHECK",13),ce),Ql=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},WD=class RB{static fromRE2(e){const t=new RB;return t.prog=e.prog,t.re2=e,t.q0=new Ql(t.prog.numInst()),t.q1=new Ql(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return RB.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?W.emptyInts():W.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,r){const s=this.re2.cond;if(s===W.EMPTY_ALL||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,C=c&7,p=-1,w=0;c!==st.EOF()&&(c=e.step(i+C),p=c>>3,w=c&7);let R;for(i===0?R=W.emptyOpContext(-1,h):R=e.context(i);;){if(B.isEmpty()){if(s&W.EMPTY_BEGIN_TEXT&&i!==0||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const K=e.index(this.re2,i);if(K<0)break;i+=K,c=e.step(i),h=c>>3,C=c&7,c=e.step(i+C),p=c>>3,w=c&7,R=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let K=0;K<this.prog.lbStarts.length;K++)this.add(B,this.prog.lbStarts[K],i,this.matchcap,0,R);!this.matched&&(i===0||r===V.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,R));const L=i+C;if(R=e.context(L),this.step(B,u,i,L,h,R,r,i===e.endPos()),C===0||this.ncap===0&&this.matched)break;i+=C,h=p,C=w,h!==-1&&(c=e.step(i+C),p=c>>3,w=c&7);const M=B;B=u,u=M}return u.clear(),this.matched}matchSet(e,t,r){const s=this.re2.cond;if(s===W.EMPTY_ALL)return[];if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,C=c&7,p=-1,w=0;c!==st.EOF()&&(c=e.step(i+C),p=c>>3,w=c&7);let R=i===0?W.emptyOpContext(-1,h):e.context(i);const L=new Set;for(;!(B.isEmpty()&&(s&W.EMPTY_BEGIN_TEXT&&i!==0||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let te=0;te<this.prog.lbStarts.length;te++)this.add(B,this.prog.lbStarts[te],i,this.matchcap,0,R);(i===0||r===V.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,R);const M=i+C;R=e.context(M);for(let te=0;te<B.size;te++){const Be=B.densePcs[te],fe=this.prog.inst[Be],Re=te*this.ncap;let Ee=!1;switch(fe.op){case N.MATCH:if(r===V.ANCHOR_BOTH&&i!==e.endPos())break;L.add(fe.arg);break;case N.RUNE:Ee=fe.matchRune(h);break;case N.RUNE1:Ee=h===fe.runes[0];break;case N.RUNE_ANY:Ee=!0;break;case N.RUNE_ANY_NOT_NL:Ee=h!==10;break;default:continue}Ee&&this.add(u,fe.out,M,B.denseCaps,Re,R)}if(B.clear(),C===0)break;i+=C,h=p,C=w,h!==-1&&(c=e.step(i+C),p=c>>3,w=c&7);const K=B;B=u,u=K}return u.clear(),Array.from(L).sort((M,K)=>M-K)}step(e,t,r,s,i,o,B,u){const c=this.re2.longest;for(let h=0;h<e.size;h++){const C=e.densePcs[h],p=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const w=this.prog.inst[C];let R=!1;switch(w.op){case N.MATCH:if(B===V.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<r)){e.denseCaps[p+1]=r;for(let L=0;L<this.ncap;L++)this.matchcap[L]=e.denseCaps[p+L]}c||(e.size=0),this.matched=!0;break;case N.RUNE:R=w.matchRune(i);break;case N.RUNE1:R=i===w.runes[0];break;case N.RUNE_ANY:R=!0;break;case N.RUNE_ANY_NOT_NL:R=i!==10;break;default:continue}R&&this.add(t,w.out,s,e.denseCaps,p,o)}e.clear()}add(e,t,r,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case N.FAIL:return;case N.ALT:case N.ALT_MATCH:this.add(e,u.out,r,s,i,o),t=u.arg;continue;case N.EMPTY_WIDTH:if(!(u.arg&~o)){t=u.out;continue}return;case N.NOP:t=u.out;continue;case N.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=r,this.add(e,u.out,r,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case N.LB_WRITE:this.lbTable[Math.abs(u.arg)]=r,t=u.out;continue;case N.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===r){t=u.out;continue}}else if(this.lbTable[-u.arg]!==r){t=u.out;continue}return;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new Ms("unhandled")}}}};const Wl=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},$D=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var YD=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(z.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(z.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Zt,XD=(Zt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Zt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,r=[...e];let s=!1;const i=[];for(;r.length>0;){const B=r.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case N.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case N.ALT:case N.ALT_MATCH:r.push(u.out),r.push(u.arg);break;case N.NOP:case N.CAPTURE:r.push(u.out);break;case N.EMPTY_WIDTH:case N.LB_WRITE:case N.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const r=t.pcs,s=Wl(r);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if($D(u.nfaStates,r))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Zt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new YD(r,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),r=e.length-t,s=e.slice(r),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=Wl(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,r){if(t<=z.MAX_LATIN1)if(r===V.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(r===V.UNANCHORED?0:z.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);N.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}r===V.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=z.MAX_LATIN1)r===V.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(r===V.UNANCHORED?0:z.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,r){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(r===V.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=r===V.UNANCHORED&&u<=z.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,r),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(r===V.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&r!==V.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,r){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(r===V.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(C=>o.add(C)):c.matchIDs.forEach(C=>o.add(C)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),h=c>>3,C=c&7;if(C===0)break;if(i=r===V.UNANCHORED&&h<=z.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,r),i===null)return null;if(i.lastSeen=++this.clock,u+=C,B(i,u),i.nfaStates.length===0&&r!==V.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}},G(Zt,"MAX_CACHE_CLEARS",5),G(Zt,"STATE_MEMORY_ESTIMATE",838),Zt);const ZD=32,ew=500,rB=256,tw=256*1024;var nw=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(rB),this.jobArg=new Uint8Array(rB),this.jobPos=new Int32Array(rB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const r=n.numInst()*(e+1)+ZD-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,r=t>>>5,s=1<<(t&31);return this.visited[r]&s?!1:(this.visited[r]|=s,!0)}push(n,e,t,r){if(n.prog.getInst(e).op!==N.FAIL&&(r||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,r,s){const i=n.longest;for(this.push(n,t,r,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const h=n.prog.getInst(o);switch(h.op){case N.FAIL:throw new Ms("unexpected InstFail");case N.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(n,o,u,!0),o=h.out;continue}case N.ALT_MATCH:{const C=n.prog.getInst(h.out);if(N.isRuneOp(C.op)){this.push(n,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const C=e.step(u);if(C===st.EOF()||!h.matchRune(C>>3))break;u+=C&7,o=h.out;continue}case N.RUNE1:{const C=e.step(u);if(C===st.EOF()||C>>3!==h.runes[0])break;u+=C&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const C=e.step(u);if(C===st.EOF()||C>>3===10)break;u+=C&7,o=h.out;continue}case N.RUNE_ANY:{const C=e.step(u);if(C===st.EOF())break;u+=C&7,o=h.out;continue}case N.CAPTURE:if(B){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case N.EMPTY_WIDTH:{const C=e.context(u);if(h.arg&~C)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(s===V.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const C=this.matchcap[1];if((C===-1||i&&u>0&&u>C)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new Ms("Backtracker cannot evaluate Lookbehind instructions");default:throw new Ms("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Qi=[];var Wi=class VC{static shouldBacktrack(e){return e.numInst()<=ew}static maxBitStateLen(e){return VC.shouldBacktrack(e)?Math.floor(tw/e.numInst()):0}static execute(e,t,r,s,i){const o=e.cond;if(o===W.EMPTY_ALL||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&r!==0||o&W.EMPTY_BEGIN_TEXT&&r!==0)return null;const B=Qi.length>0?Qi.pop():new nw,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if(o&W.EMPTY_BEGIN_TEXT||s===V.ANCHOR_START||s===V.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)&&(c=!0);else{let C=-1;for(;r<=u&&C!==0;r+=C){if(e.prefix.length>0){const w=t.index(e,r);if(w<0)break;r+=w}if(B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)){c=!0;break}const p=t.step(r);C=p===st.EOF()?0:p&7}}if(!c)return Qi.push(B),null;const h=i===0?[]:W.toArray(B.matchcap.subarray(0,i));return Qi.push(B),h}},$l=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const rw=(n,e,t,r)=>{const s=n.length,i=e.length;let o=0,B=0;const u=[],c=[];let h=!0,C=-1;const p=w=>{const R=w?n:e,L=w?o:B,M=w?t:r;return C>0&&R[L]<=u[C]?!1:(u.push(R[L],R[L+1]),w?o+=2:B+=2,C+=2,c.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=p(!0):o>=s||e[B]<n[o]?h=p(!1):h=p(!0),!h)return null;return{merged:u,next:c}};var sw=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],r=new N(t.op);r.out=t.out,r.arg=t.arg,r.runes=t.runes?t.runes.slice():[],r.next=null,this.inst[e]=r}}};const iw=n=>{const e=new sw(n);for(let t=0;t<e.inst.length;t++){const r=e.inst[t];if(r.op!==N.ALT&&r.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[r[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[r[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[r[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let u="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",c="out"),h&&(o[u]=r[s]),r[s]===o[u]&&(r[i]=o[c])}return e},ow=n=>{if(n.inst.length>=1e3)return null;const e=new $l(n.inst.length),t=new $l(n.inst.length),r=new Array(n.inst.length),s=new Array(n.inst.length).fill(!1),i=o=>{let B=!0;const u=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case N.ALT:case N.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],h=s[u.arg];if(c&&h)return!1;if(h){const R=u.out;u.out=u.arg,u.arg=R;const L=c;c=h,h=L}c&&(s[o]=!0,u.op=N.ALT_MATCH);const C=r[u.out]||[],p=r[u.arg]||[],w=rw(C,p,u.out,u.arg);if(!w)return!1;r[o]=w.merged,u.next=new Uint32Array(w.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(u.out),s[o]=s[u.out],r[o]=r[u.out]?r[u.out].slice():[],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break;case N.MATCH:case N.FAIL:s[o]=u.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){r[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&u.arg&V.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let C=z.simpleFold(h);C!==h;C=z.simpleFold(C))c.push(C,C);c.sort((C,p)=>C-p)}else for(let h=0;h<u.runes.length;h++)c.push(u.runes[h]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if(u.arg&V.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let C=z.simpleFold(h);C!==h;C=z.simpleFold(C))c.push(C,C);c.sort((C,p)=>C-p)}else c.push(u.runes[0],u.runes[0]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,z.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,9,11,z.MAX_RUNE],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)r[o]&&(n.inst[o].runes=r[o]);return n},aw=(n,e)=>{for(let t=0;t<e.inst.length;t++){const r=e.inst[t];switch(r.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:n.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=r.op,n.inst[t].runes=r.runes?r.runes.slice():[];break}}};var Yl=class MC{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||!(t.arg&W.EMPTY_BEGIN_TEXT))return null;let r=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){r=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&W.EMPTY_END_TEXT)===W.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&r)return null;break}}let s=iw(e);return s=ow(s),s!==null&&aw(s,e),s}static next(e,t){const r=e.matchRunePos(t);return r>=0?e.next[r]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,r,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(r),h=c>>3,C=c&7,p=st.EOF(),w=-1,R=0;c!==st.EOF()&&(p=t.step(r+C),p!==st.EOF()&&(w=p>>3,R=p&7));let L=r===0?W.emptyOpContext(-1,h):t.context(r),M=o.start,K;for(;;){switch(K=o.inst[M],M=K.out,K.op){case N.MATCH:return s===V.ANCHOR_BOTH&&r!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=r),i===0?[]:W.toArray(B));case N.RUNE:if(!K.matchRune(h))return null;break;case N.RUNE1:if(h!==K.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:M=MC.next(K,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if(K.arg&~L)return null;continue;case N.CAPTURE:K.arg<B.length&&(B[K.arg]=r);continue;default:throw new Ms("bad inst")}if(C===0)break;L=W.emptyOpContext(h,w),r+=C,h=w,C=R,h!==-1&&(p=t.step(r+C),p!==st.EOF()?(w=p>>3,R=p&7):(w=-1,R=0))}return u?i===0?[]:W.toArray(B):null}},Y,y=(Y=class{static isPseudoOp(e){return e>=Y.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Y(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Y.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Y.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Y.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Y.Op.EMPTY_MATCH:e+="(?:)";break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:case Y.Op.REPEAT:{const t=this.subs[0];switch(t.op>Y.Op.CAPTURE||t.op===Y.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Y.Op.STAR:e+="*";break;case Y.Op.PLUS:e+="+";break;case Y.Op.QUEST:e+="?";break;case Y.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&V.NON_GREEDY&&(e+="?");break}case Y.Op.CONCAT:for(let t of this.subs)t.op===Y.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Y.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case Y.Op.LITERAL:this.flags&V.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=W.escapeRune(t);this.flags&V.FOLD_CASE&&(e+=")");break;case Y.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Y.Op.ANY_CHAR:e+="(?s:.)";break;case Y.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Y.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Y.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Y.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Y.Op.BEGIN_TEXT:e+="\\A";break;case Y.Op.END_TEXT:this.flags&V.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case Y.Op.BEGIN_LINE:e+="^";break;case Y.Op.END_LINE:e+="$";break;case Y.Op.WORD_BOUNDARY:e+="\\b";break;case Y.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Y.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=Y.quoteIfHyphen(r),e+=W.escapeRune(r),r!==s&&(e+="-",e+=Y.quoteIfHyphen(s),e+=W.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=Y.quoteIfHyphen(r),e+=W.escapeRune(r),r!==s&&(e+="-",e+=Y.quoteIfHyphen(s),e+=W.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Y.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof Y)||this.op!==e.op)return!1;switch(this.op){case Y.Op.END_TEXT:if((this.flags&V.WAS_DOLLAR)!==(e.flags&V.WAS_DOLLAR))return!1;break;case Y.Op.LITERAL:case Y.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Y.Op.ALTERNATE:case Y.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.REPEAT:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.PLB:case Y.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},G(Y,"Op",xC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),Y),Xl=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let r=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[r]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[r][i]=this.next.length-1),r=this.next[r][i]}this.match[r]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const r=this.next[0][t];this.fail[r]=0,e.push(r)}for(;e.length>0;){const t=e.shift();for(const r in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],r)){const s=this.next[t][r];let i=this.fail[t];for(;i!==0&&!(r in this.next[i]);)i=this.fail[i];r in this.next[i]?this.fail[s]=this.next[i][r]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n.charCodeAt(s);for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}searchUTF8(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n[s];for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}},Jt,Ce=(Jt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Jt.Type.NONE:return!0;case Jt.Type.EXACT:return e.hasString(this,t);case Jt.Type.AND:for(let r=0;r<this.subs.length;r++)if(!this.subs[r].eval(e,t))return!1;return!0;case Jt.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let r=0;r<this.subs.length;r++)if(this.subs[r].eval(e,t))return!0;return!1;default:return!0}}},G(Jt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Jt),Bw=class Xt{static build(e){const t=Xt.fromRegexp(e);return Xt.simplify(t)}static fromRegexp(e){if(!e)return new Ce(Ce.Type.NONE);switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.NO_MATCH:case y.Op.EMPTY_MATCH:case y.Op.BEGIN_LINE:case y.Op.END_LINE:case y.Op.BEGIN_TEXT:case y.Op.END_TEXT:case y.Op.WORD_BOUNDARY:case y.Op.NO_WORD_BOUNDARY:case y.Op.CHAR_CLASS:case y.Op.ANY_CHAR_NOT_NL:case y.Op.ANY_CHAR:return new Ce(Ce.Type.NONE);case y.Op.LITERAL:{if(e.runes.length===0||e.flags&V.FOLD_CASE)return new Ce(Ce.Type.NONE);const t=new Ce(Ce.Type.EXACT);let r="";for(let s=0;s<e.runes.length;s++)r+=String.fromCodePoint(e.runes[s]);return t.str=r,t.bytes=W.stringToUtf8ByteArray(t.str),t}case y.Op.CAPTURE:case y.Op.PLUS:return Xt.fromRegexp(e.subs[0]);case y.Op.REPEAT:return e.min>=1?Xt.fromRegexp(e.subs[0]):new Ce(Ce.Type.NONE);case y.Op.CONCAT:{const t=new Ce(Ce.Type.AND);for(const r of e.subs)t.subs.push(Xt.fromRegexp(r));return t}case y.Op.ALTERNATE:{const t=new Ce(Ce.Type.OR);for(const r of e.subs)t.subs.push(Xt.fromRegexp(r));return t}default:return new Ce(Ce.Type.NONE)}}static simplify(e){if(e.type===Ce.Type.EXACT||e.type===Ce.Type.NONE)return e;if(e.type===Ce.Type.AND){const t=[];for(const r of e.subs){const s=Xt.simplify(r);if(s.type!==Ce.Type.NONE)if(s.type===Ce.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new Ce(Ce.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===Ce.Type.OR){const t=[];for(const o of e.subs){const B=Xt.simplify(o);if(B.type===Ce.Type.NONE)return new Ce(Ce.Type.NONE);if(B.type===Ce.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new Ce(Ce.Type.NONE);if(t.length===1)return t[0];const r=new Set,s=[];for(const o of t)o.type===Ce.Type.EXACT?r.has(o.str)||(r.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==Ce.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Xl(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new Xl(s.map(o=>o.bytes))),e}return e}},Rt=class{constructor(n=0,e=0){this.head=n,this.tail=e}},uw=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new N(n))}skipNop(n){let e=this.inst[n];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,n];for(;N.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&V.FOLD_CASE);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:n|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const r=this.inst[t>>1];t&1?(t=r.arg,r.arg=e):(t=r.out,r.out=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return n.tail&1?t.arg=e.head:t.out=e.head,new Rt(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},$i=class{constructor(n=0,e=new Rt,t=!1){this.i=n,this.out=e,this.nullable=t}},cw=class Vr{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,z.MAX_RUNE]}static ANY_RUNE(){return[0,z.MAX_RUNE]}static compileRegexp(e){const t=new Vr,r=t.compile(e);return t.prog.patch(r.out,t.newInst(N.MATCH).i),t.prog.start=r.i,t.prog}static compileSet(e){const t=new Vr;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog;let r=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),r.push(o.i)}let s=r[0];for(let i=1;i<r.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=r[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new uw,this.newInst(N.FAIL)}newInst(e){return this.prog.addInst(e),new $i(this.prog.numInst()-1,new Rt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new Rt(e.i<<1,e.i<<1),e}fail(){return new $i}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new Rt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new $i(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Rt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Rt(r.i<<1|1,r.i<<1|1)),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Rt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Rt(r.i<<1|1,r.i<<1|1)),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new $i(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Rt(t.i<<1,t.i<<1),t}rune(e,t){const r=this.newInst(N.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=V.FOLD_CASE,(e.length!==1||z.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=new Rt(r.i<<1,r.i<<1),!(t&V.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===z.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===z.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),r}lookBehind(e,t){const r=this.newInst(N.LB_WRITE);this.prog.getInst(r.i).arg=t;const s=this.rune(Vr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,r.i);const B=this.newInst(N.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new Rt(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case y.Op.NO_MATCH:return this.fail();case y.Op.EMPTY_MATCH:return this.nop();case y.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case y.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case y.Op.ANY_CHAR_NOT_NL:return this.rune(Vr.ANY_RUNE_NOT_NL(),0);case y.Op.ANY_CHAR:return this.rune(Vr.ANY_RUNE(),0);case y.Op.BEGIN_LINE:return this.empty(W.EMPTY_BEGIN_LINE);case y.Op.END_LINE:return this.empty(W.EMPTY_END_LINE);case y.Op.BEGIN_TEXT:return this.empty(W.EMPTY_BEGIN_TEXT);case y.Op.END_TEXT:return this.empty(W.EMPTY_END_TEXT);case y.Op.WORD_BOUNDARY:return this.empty(W.EMPTY_WORD_BOUNDARY);case y.Op.NO_WORD_BOUNDARY:return this.empty(W.EMPTY_NO_WORD_BOUNDARY);case y.Op.PLB:case y.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case y.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case y.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case y.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case y.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case y.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}case y.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}default:throw new zD("regexp: unhandled case in compile")}}},lw=class gt{static simplify(e){if(e===null)return null;switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:{const t=gt.simplify(e.subs[0]);if(t!==e.subs[0]){const r=y.fromRegexp(e);return r.runes=[],r.subs=[t],r}return e}case y.Op.CONCAT:case y.Op.ALTERNATE:{const t=[];let r=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=gt.simplify(i);if(o!==i&&(r=!0),e.op===y.Op.CONCAT){if(o.op===y.Op.NO_MATCH)return new y(y.Op.NO_MATCH);if(o.op===y.Op.EMPTY_MATCH){r=!0;continue}if(o.op===y.Op.CONCAT){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===y.Op.ALTERNATE){if(o.op===y.Op.NO_MATCH){r=!0;continue}if(o.op===y.Op.ALTERNATE){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(r){if(t.length===0)return new y(e.op===y.Op.CONCAT?y.Op.EMPTY_MATCH:y.Op.NO_MATCH);if(t.length===1)return t[0];const s=y.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case y.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new y(y.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?new y(y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE?new y(y.Op.ANY_CHAR_NOT_NL):e;case y.Op.STAR:case y.Op.PLUS:case y.Op.QUEST:{const t=gt.simplify(e.subs[0]);return gt.simplify1(e.op,e.flags,t,e)}case y.Op.REPEAT:{if(e.min===0&&e.max===0)return new y(y.Op.EMPTY_MATCH);const t=gt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return gt.simplify1(y.Op.STAR,e.flags,t,null);if(e.min===1)return gt.simplify1(y.Op.PLUS,e.flags,t,null);const s=new y(y.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(gt.simplify1(y.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),gt.simplify(s)}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=gt.simplify1(y.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new y(y.Op.CONCAT);o.subs=[t,s],s=gt.simplify1(y.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new y(y.Op.CONCAT);return s.subs=r.slice(0),gt.simplify(s)}return new y(y.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){if(r.op===y.Op.EMPTY_MATCH)return r;if(r.op===y.Op.NO_MATCH)return e===y.Op.PLUS?r:new y(y.Op.EMPTY_MATCH);if(e===r.op&&(t&V.NON_GREEDY)===(r.flags&V.NON_GREEDY))return r;if(s!==null&&s.op===e&&(s.flags&V.NON_GREEDY)===(t&V.NON_GREEDY)&&r===s.subs[0])return s;const i=new y(e);return i.flags=t,i.subs=[r],i}},he=class{constructor(n,e){this.sign=n,this.cls=e}};const Zl=[48,57],eh=[9,10,12,13,32,32],th=[48,57,65,90,95,95,97,122],nh=new Map([["\\d",new he(1,Zl)],["\\D",new he(-1,Zl)],["\\s",new he(1,eh)],["\\S",new he(-1,eh)],["\\w",new he(1,th)],["\\W",new he(-1,th)]]),rh=[48,57,65,90,97,122],sh=[65,90,97,122],ih=[0,127],oh=[9,9,32,32],ah=[0,31,127,127],Bh=[48,57],uh=[33,126],ch=[97,122],lh=[32,126],hh=[33,47,58,64,91,96,123,126],fh=[9,13,32,32],Ch=[65,90],dh=[48,57,65,90,95,95,97,122],ph=[48,57,65,70,97,102],gh=new Map([["[:alnum:]",new he(1,rh)],["[:^alnum:]",new he(-1,rh)],["[:alpha:]",new he(1,sh)],["[:^alpha:]",new he(-1,sh)],["[:ascii:]",new he(1,ih)],["[:^ascii:]",new he(-1,ih)],["[:blank:]",new he(1,oh)],["[:^blank:]",new he(-1,oh)],["[:cntrl:]",new he(1,ah)],["[:^cntrl:]",new he(-1,ah)],["[:digit:]",new he(1,Bh)],["[:^digit:]",new he(-1,Bh)],["[:graph:]",new he(1,uh)],["[:^graph:]",new he(-1,uh)],["[:lower:]",new he(1,ch)],["[:^lower:]",new he(-1,ch)],["[:print:]",new he(1,lh)],["[:^print:]",new he(-1,lh)],["[:punct:]",new he(1,hh)],["[:^punct:]",new he(-1,hh)],["[:space:]",new he(1,fh)],["[:^space:]",new he(-1,fh)],["[:upper:]",new he(1,Ch)],["[:^upper:]",new he(-1,Ch)],["[:word:]",new he(1,dh)],["[:^word:]",new he(-1,dh)],["[:xdigit:]",new he(1,ph)],["[:^xdigit:]",new he(-1,ph)]]);var wn=class yn{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=r;for(;B<=u;){for(;B<r&&yn.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&yn.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&yn.qsortIntPair(e,t,u),B<r&&yn.qsortIntPair(e,B,r)}constructor(e=W.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;yn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&V.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=z.MIN_FOLD&&t>=z.MAX_FOLD)return this.appendRange(e,t);if(t<z.MIN_FOLD||e>z.MAX_FOLD)return this.appendRange(e,t);e<z.MIN_FOLD&&(this.appendRange(e,z.MIN_FOLD-1),e=z.MIN_FOLD),t>z.MAX_FOLD&&(this.appendRange(z.MAX_FOLD+1,t),t=z.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=z.simpleFold(r);s!==r;s=z.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const r=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r=0;r<e.length;++r){const s=e.getLo(r),i=e.getHi(r),o=e.getStride(r);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new yn().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return yn.charClassToString(this.r,this.len)}},hw=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=W.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},U,fw=(U=class{static unicodeTable(e){return e==="Any"?{tab:U.ANY_TABLE,fold:U.ANY_TABLE,sign:1}:e==="Ascii"?{tab:U.ASCII_TABLE,fold:U.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Bt.CATEGORIES.get("Cn"),fold:Bt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Bt.CATEGORIES.get("LC"),fold:Bt.FOLD_CATEGORIES.get("LC"),sign:1}:Bt.CATEGORIES.has(e)?{tab:Bt.CATEGORIES.get(e),fold:Bt.FOLD_CATEGORIES.get(e),sign:1}:Bt.SCRIPTS.has(e)?{tab:Bt.SCRIPTS.get(e),fold:Bt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<z.MIN_FOLD||e>z.MAX_FOLD)return e;let t=e;const r=e;for(e=z.simpleFold(e);e!==r;e=z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===y.Op.EMPTY_MATCH)return null;if(e.op===y.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===y.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new y(y.Op.LITERAL);return r.flags=t,r.runes=W.stringToRunes(e),r}static parse(e,t){return new U(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=U.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=U.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new _e(U.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==O.CODES.get("_")&&!W.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===O.CODES.get("0")?-1:r.length>8?-2:parseInt(r,10)}static isCharClass(e){return e.op===y.Op.LITERAL&&e.runes.length===1||e.op===y.Op.CHAR_CLASS||e.op===y.Op.ANY_CHAR_NOT_NL||e.op===y.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case y.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case y.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case y.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case y.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case y.Op.ANY_CHAR:break;case y.Op.ANY_CHAR_NOT_NL:U.matchRune(t,O.CODES.get(`
`))&&(e.op=y.Op.ANY_CHAR);break;case y.Op.CHAR_CLASS:t.op===y.Op.LITERAL?e.runes=new wn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new wn(e.runes).appendClass(t.runes).toArray();break;case y.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=y.Op.CHAR_CLASS,e.runes=new wn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new _e(U.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let s=r-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)s=s*8+e.peek()-O.CODES.get("0"),e.skip(1);return s}case O.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===O.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===O.CODES.get("}"))break;const u=W.unhex(r);if(u<0||(B=B*16+u,B>z.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=W.unhex(r);if(!e.more())break;r=e.pop();const i=W.unhex(r);if(s<0||i<0)break;return s*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(r<=z.MAX_ASCII&&!W.isalnum(r))return r;break}throw new _e(U.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new _e(U.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?U.parseEscape(e):e.pop()}static concatRunes(e,t){for(let r=0;r<t.length;r++)e.push(t[r]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===y.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(U.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new y(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>U.MAX_RUNES)throw new _e(U.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===y.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(U.MAX_SIZE/this.repeats)?this.repeats=U.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(U.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>U.MAX_SIZE)throw new _e(U.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let r=0;switch(e.op){case y.Op.LITERAL:r=e.runes.length;break;case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:case y.Op.STAR:r=2+this.calcSize(e.subs[0]);break;case y.Op.PLUS:case y.Op.QUEST:r=1+this.calcSize(e.subs[0]);break;case y.Op.CONCAT:for(let s of e.subs)r=r+this.calcSize(s);break;case y.Op.ALTERNATE:for(let s of e.subs)r=r+this.calcSize(s);e.subs.length>1&&(r=r+e.subs.length-1);break;case y.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?r=2+s:r=1+e.min*s;break}r=e.max*s+(e.max-e.min);break}}return r=Math.max(1,r),this.size===null&&(this.size=new Map),this.size.set(e,r),r}checkHeight(e){if(!(this.numRegexp<U.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>U.MAX_HEIGHT)throw new _e(U.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let r=1;for(let s of e.subs){const i=this.calcHeight(s);r<1+i&&(r=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,r),r}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!y.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(this.numRunes+=e.runes.length,e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===y.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&z.simpleFold(e.runes[0])===e.runes[2]&&z.simpleFold(e.runes[2])===e.runes[0]||e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&z.simpleFold(e.runes[0])===e.runes[1]&&z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|V.FOLD_CASE))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|V.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==y.Op.LITERAL||i.op!==y.Op.LITERAL||(s.flags&V.FOLD_CASE)!==(i.flags&V.FOLD_CASE)?!1:(i.runes=U.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(y.Op.LITERAL);return r.flags=t,t&V.FOLD_CASE&&(e=U.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let B=this.flags;if(B&V.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=V.NON_GREEDY),o!==-1))throw new _e(U.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new _e(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(y.isPseudoOp(c.op))throw new _e(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=r,h.flags=B,h.subs=[c],this.stack[u-1]=h,this.checkLimits(h),e===y.Op.REPEAT&&(t>=2||r>=2)&&!this.repeatIsValid(h,1e3))throw new _e(U.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===y.Op.REPEAT){let r=e.max;if(r===0)return!0;if(r<0&&(r=e.min),r>t)return!1;r>0&&(t=Math.trunc(t/r))}for(let r of e.subs)if(!this.repeatIsValid(r,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(y.Op.EMPTY_MATCH)):this.push(this.collapse(e,y.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(y.Op.NO_MATCH)):this.push(this.collapse(e,y.Op.ALTERNATE))}cleanAlt(e){e.op===y.Op.CHAR_CLASS&&(e.runes=new wn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?(e.runes=[],e.op=y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE&&(e.runes=[],e.op=y.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let B of e)r+=B.op===t?B.subs.length:1;let s=new Array(r).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===y.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,B=0,u=0;for(let h=0;h<=r;h++){let C=null,p=0,w=0;if(h<r){let R=e[t+h];if(R.op===y.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===y.Op.LITERAL&&(C=R.runes,p=R.runes.length,w=R.flags&V.FOLD_CASE),w===B){let L=0;for(;L<o&&L<p&&i[L]===C[L];)L++;if(L>0){o=L;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const R=this.newRegexp(y.Op.LITERAL);R.flags=B,R.runes=i.slice(0,o);for(let K=u;K<h;K++)e[t+K]=this.removeLeadingString(e[t+K],o),this.checkLimits(e[t+K]);const L=this.collapse(e.slice(t+u,t+h),y.Op.ALTERNATE),M=this.newRegexp(y.Op.CONCAT);M.subs=[R,L],e[s++]=M}u=h,i=C,o=p,B=w}r=s,t=0,u=0,s=0;let c=null;for(let h=0;h<=r;h++){let C=null;if(!(h<r&&(C=U.leadingRegexp(e[t+h]),c!==null&&c.equals(C)&&(U.isCharClass(c)||c.op===y.Op.REPEAT&&c.min===c.max&&U.isCharClass(c.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const p=c;for(let L=u;L<h;L++){const M=L!==u;e[t+L]=this.removeLeadingRegexp(e[t+L],M),this.checkLimits(e[t+L])}const w=this.collapse(e.slice(t+u,t+h),y.Op.ALTERNATE),R=this.newRegexp(y.Op.CONCAT);R.subs=[p,w],e[s++]=R}u=h,c=C}}r=s,t=0,u=0,s=0;for(let h=0;h<=r;h++)if(!(h<r&&U.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let C=u;for(let w=u+1;w<h;w++){const R=e[t+C],L=e[t+w];(R.op<L.op||R.op===L.op&&(R.runes!==null?R.runes.length:0)<(L.runes!==null?L.runes.length:0))&&(C=w)}const p=e[t+u];e[t+u]=e[t+C],e[t+C]=p;for(let w=u+1;w<h;w++)U.mergeCharClass(e[t+u],e[t+w]),this.reuse(e[t+w]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<r&&(e[s++]=e[t+h]),u=h+1}r=s,t=0,u=0,s=0;for(let h=0;h<r;++h)h+1<r&&e[t+h].op===y.Op.EMPTY_MATCH&&e[t+h+1].op===y.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===y.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===y.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=y.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(y.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&V.LITERAL)return U.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new hw(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case O.CODES.get("("):if(this.flags&V.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&V.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(y.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case O.CODES.get("^"):this.flags&V.ONE_LINE?this.op(y.Op.BEGIN_TEXT):this.op(y.Op.BEGIN_LINE),s.skip(1);break;case O.CODES.get("$"):this.flags&V.ONE_LINE?this.op(y.Op.END_TEXT).flags|=V.WAS_DOLLAR:this.op(y.Op.END_LINE),s.skip(1);break;case O.CODES.get("."):this.flags&V.DOT_NL?this.op(y.Op.ANY_CHAR):this.op(y.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case O.CODES.get("["):this.parseClass(s);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case O.CODES.get("*"):o=y.Op.STAR;break;case O.CODES.get("+"):o=y.Op.PLUS;break;case O.CODES.get("?"):o=y.Op.QUEST;break}this.repeat(o,t,r,i,s,e);break}case O.CODES.get("{"):{i=s.pos();const o=U.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,r=(o&z.MAX_BMP)<<16>>16,this.repeat(y.Op.REPEAT,t,r,i,s,e);break}case O.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&V.PERL_X&&s.more())switch(s.pop()){case O.CODES.get("A"):this.op(y.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(y.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(y.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new _e(U.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let C=0;for(;C<c.length;){const p=c.codePointAt(C);this.literal(p),C+=W.charCount(p)}break e}case O.CODES.get("z"):this.op(y.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(y.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new wn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new wn;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(U.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new _e(U.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const B=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new _e(U.ERR_INVALID_NAMED_CAPTURE,r);const c=r.substring(B,u);if(e.skipString(c),e.skip(B+1),!U.isValidCaptureName(c))throw new _e(U.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const h=this.op(y.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new _e(U.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case O.CODES.get("i"):s|=V.FOLD_CASE,o=!0;break;case O.CODES.get("m"):s&=-17,o=!0;break;case O.CODES.get("s"):s|=V.DOT_NL,o=!0;break;case O.CODES.get("U"):s|=V.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===O.CODES.get(":")&&this.op(y.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new _e(U.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(y.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===y.Op.VERTICAL_BAR&&U.isCharClass(this.stack[e-1])&&U.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return U.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===y.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new _e(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==y.Op.LEFT_PAREN)throw new _e(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(U.hasCapture(e))throw new _e(U.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=y.Op.PLB:t.op=y.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=y.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&V.PERL_X)||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=nh.has(s)?nh.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&V.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=gh.has(i)?gh.get(i):null;if(o===null)throw new _e(U.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&V.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&V.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===O.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new _e(U.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=W.runeToString(i);else{const h=e.rest(),C=h.indexOf("}");if(C<0)throw e.rewindTo(r),new _e(U.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,C),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=U.unicodeTable(o);if(B===null)throw new _e(U.ERR_INVALID_CHAR_RANGE,e.from(r));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if(!(this.flags&V.FOLD_CASE)||c===null)t.appendTableWithSign(u,s);else{const h=new wn().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(y.Op.CHAR_CLASS);r.flags=this.flags;const s=new wn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&V.CLASS_NL||s.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&V.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new _e(U.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=U.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=U.parseClassChar(e,t),c<u)throw new _e(U.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&V.FOLD_CASE?s.appendFoldedRange(u,c):s.appendRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},G(U,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),G(U,"ERR_INVALID_CHAR_RANGE","invalid character class range"),G(U,"ERR_INVALID_ESCAPE","invalid escape sequence"),G(U,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),G(U,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),G(U,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),G(U,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),G(U,"ERR_MISSING_BRACKET","missing closing ]"),G(U,"ERR_MISSING_PAREN","missing closing )"),G(U,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),G(U,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),G(U,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),G(U,"ERR_UNEXPECTED_PAREN","unexpected )"),G(U,"ERR_NESTING_DEPTH","expression nests too deeply"),G(U,"ERR_LARGE","expression too large"),G(U,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),G(U,"MAX_HEIGHT",1e3),G(U,"MAX_SIZE",3355443),G(U,"MAX_RUNES",33554432),G(U,"ANY_TABLE",new g(new Uint32Array([0,z.MAX_RUNE,1]))),G(U,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),G(U,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),U),Cw=class ar{static initTest(e){const t=ar.compile(e),r=new ar(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r.prefilter=t.prefilter,r}static compile(e){return ar.compileImpl(e,V.PERL,!1)}static compilePOSIX(e){return ar.compileImpl(e,V.POSIX,!0)}static compileImpl(e,t,r){let s=fw.parse(e,t);const i=s.maxCap();s=lw.simplify(s);const o=Bw.build(s),B=cw.compileRegexp(s),u=new ar(e,B,i,r);u.prefilter=o.type===Ce.Type.NONE?null:o;const[c,h]=B.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=W.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return ar.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new XD(this.prog),this.onepass=Yl.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,r,s){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(r===V.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(r===V.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(r===V.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,r,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,r,s);if(this.prefilter!==null&&r===V.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Yl.execute(this,e,t,r,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Wi.maxBitStateLen(this.prog)?Wi.execute(this,e,t,r,s):this.doExecuteNFA(e,t,r,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,r);if(i!==null)return i?[]:null;if(e.endPos()<=Wi.maxBitStateLen(this.prog))return Wi.execute(this,e,t,r,s)}return this.doExecuteNFA(e,t,r,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,r,s){let i=this.get();i||(i=WD.fromRE2(this)),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Ie.fromUTF16(e),0,V.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof _r||(W.isByteArray(e)?e=ur.utf8(e):e=ur.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?Ie.fromUTF16(e.asCharSequence(),0,r):Ie.fromUTF8(e.asBytes(),0,r),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(Ie.fromUTF8(e),0,V.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const B=Ie.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,V.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],u>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,V.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===u&&(h=!1);const C=e.step(o);C<0?o=i+1:o+=C&7}else o=c[1];u=c[1],h&&(s.push(r(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(Ie.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Ie.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Ie.fromUTF16(e),0,V.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Ie.fromUTF16(e),0,V.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Ie.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Ie.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(Ie.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(Ie.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(Ie.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(Ie.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(Ie.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(Ie.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(Ie.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(Ie.fromUTF16(e),t);return r.length===0?null:r}},dw=class Mr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let r="",s=!1,i=e.length;i===0&&(r="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":r+="\\\\",B+=2;continue;case"c":if(B+2<i){let p=e[B+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let w=p%32;r+="\\x",r+=(w>>4).toString(16).toUpperCase(),r+=(w&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}r+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let p=B+3,w=!1,R=!1;for(;p<i;){const L=e[p];if(L==="}"){R=!0;break}if(!Mr.isHexadecimal(L))break;w=!0,p++}if(R&&w){r+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let p=!0;for(let w=0;w<4;w++)if(!Mr.isHexadecimal(e[B+2+w])){p=!1;break}if(p){r+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}r+="u",B+=2,s=!0;continue;case"x":{let p=!1;if(B+2<i&&e[B+2]==="{"){let w=B+3,R=!1,L=!1;for(;w<i;){const M=e[w];if(M==="}"){L=!0;break}if(!Mr.isHexadecimal(M))break;R=!0,w++}L&&R&&(p=!0)}else B+3<i&&Mr.isHexadecimal(e[B+2])&&Mr.isHexadecimal(e[B+3])&&(p=!0);p?(r+="\\x",B+=2):(r+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+c,B+=2;continue;default:{let p=e.codePointAt(B+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let w=W.charCount(p);r+=e.substring(B+1,B+1+w),B+=w+1,s=!0}else{r+="\\";let w=W.charCount(p);r+=e.substring(B+1,B+1+w),B+=w+1}continue}}}else if(c==="/"){r+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){r+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),C=W.charCount(h);r+=e.substring(B,B+C),B+=C}const u=s?r:e;return t.length>0?`(?${t})${u}`:u}},Fe,uu=(Fe=class{static quote(e){return W.quoteMeta(e)}static quoteReplacement(e,t=!1){return zl.quoteReplacement(e,t)}static translateRegExp(e){return dw.translate(e)}static compile(e,t=0){let r=e;if(t&Fe.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&Fe.DOTALL&&(r=`(?s)${r}`),t&Fe.MULTILINE&&(r=`(?m)${r}`),t&-544)throw new QD("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=V.PERL;t&Fe.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Fe.LOOKBEHINDS&&(s|=V.LOOKBEHIND);const i=new Fe(e,t);return i.re2Input=Cw.compileImpl(r,s,(t&Fe.LONGEST_MATCH)!==0),i}static matches(e,t){return Fe.compile(e).testExact(t)}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new Fe(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return W.isByteArray(e)&&(e=ur.utf8(e)),new zl(this,e)}test(e){return W.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=W.isByteArray(e)?Ie.fromUTF8(e):Ie.fromUTF16(e);return this.re2Input.executeEngine(t,0,V.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;return r}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0&&!(o===r.inputLength()&&o>0))&&s.push(r.substring(o,r.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;yield r}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},G(Fe,"CASE_INSENSITIVE",xr.CASE_INSENSITIVE),G(Fe,"DOTALL",xr.DOTALL),G(Fe,"MULTILINE",xr.MULTILINE),G(Fe,"DISABLE_UNICODE_GROUPS",xr.DISABLE_UNICODE_GROUPS),G(Fe,"LONGEST_MATCH",xr.LONGEST_MATCH),G(Fe,"LOOKBEHINDS",xr.LOOKBEHINDS),Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="12.17.0";function pw(n){ss=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Jo("@firebase/firestore");function Gr(){return Dr.logLevel}function q(n,...e){if(Dr.logLevel<=ae.DEBUG){const t=e.map(cu);Dr.debug(`Firestore (${ss}): ${n}`,...t)}}function ln(n,...e){if(Dr.logLevel<=ae.ERROR){const t=e.map(cu);Dr.error(`Firestore (${ss}): ${n}`,...t)}}function kt(n,...e){if(Dr.logLevel<=ae.WARN){const t=e.map(cu);Dr.warn(`Firestore (${ss}): ${n}`,...t)}}function cu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,GC(n,r,t)}function GC(n,e,t){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ln(r),new Error(r)}function Q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||GC(e,s,r)}function re(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function vB(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return sB(s)===sB(i)?oe(s,i):sB(s)?1:-1}return oe(n.length,e.length)}const mw=55296,Ew=57343;function sB(n){const e=n.charCodeAt(0);return e>=mw&&e<=Ew}function Yr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mh(this.data.getIterator())}getIteratorFrom(e){return new mh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class mh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends St{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="__name__";class Gt{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Gt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){const r=Gt.isNumericId(e),s=Gt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Gt.extractNumericId(e).compare(Gt.extractNumericId(t)):vB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fn.fromString(e.substring(4,e.length-2))}}class de extends Gt{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new de(t)}static emptyPath(){return new de([])}}const _w=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let It=class Ur extends Gt{construct(e,t,r){return new Ur(e,t,r)}static isValidIdentifier(e){return _w.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ur.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ut}static keyField(){return new Ur([Ut])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new J(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(r+=B,s++):(i(),s++)}if(i(),o)throw new J(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ur(t)}static emptyPath(){return new Ur([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new _t([])}unionWith(e){let t=new xe(It.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new _t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Xn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dw(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function UC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(de.fromString(e))}static fromName(e){return new $(de.fromString(e).popFirst(5))}static empty(){return new $(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n,e,t){if(!t)throw new J(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ww(n,e,t,r){if(e===!0&&r===!0)throw new J(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Eh(n){if(!$.isDocumentKey(n))throw new J(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _h(n){if($.isDocumentKey(n))throw new J(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ei(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wo(n);throw new J(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function _i(n,e){if(!Ei(n))throw new J(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=-62135596800,wh=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*wh);return new Te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Dh)throw new J(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wh}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_i(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:ke("string",Te._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jC("Invalid base64 string: "+i):i}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const Iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=Iw.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="server_timestamp",qC="__type__",KC="__previous_value__",zC="__local_write_time__";function $o(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[qC])==null?void 0:r.stringValue)===JC}function Di(n){const e=n.mapValue.fields[KC];return $o(e)?Di(e):e}function Xr(n){const e=Mn(n.mapValue.fields[zC].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,r,s,i,o,B,u,c,h,C,p,w){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=C,this._customHeaders=p,this.grpcFlowControlWindow=w}}const Ao="(default)";class Xs{constructor(e,t){this.projectId=e,this.database=t||Ao}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===Ao}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}function Tw(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new J(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=-1;function Yo(n){return n==null}function Zs(n){return n===0&&1/n==-1/0}function Aw(n){return typeof n=="number"&&Number.isInteger(n)&&!Zs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Rw(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="__type__",vw="__max__",Xi={mapValue:{}},WC="__vector__",ei="value",Zr={nullValue:"NULL_VALUE"},ft={booleanValue:!0},Je={booleanValue:!1};function Me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$o(n)?4:bw(n)?9007199254740991:Ro(n)?10:11:X(28295,{value:n})}function Pt(n,e,t){if(n===e)return!0;const r=Me(n);if(r!==Me(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xr(n).isEqual(Xr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Mn(i.timestampValue),u=Mn(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Gn(i.bytesValue).isEqual(Gn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ve(i.geoPointValue.latitude)===ve(o.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return ve(i.integerValue)===ve(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=ve(i.doubleValue),c=ve(o.doubleValue);else{if(!(B!=null&&B.t))return!1;u=ve(i.integerValue??i.doubleValue),c=ve(o.integerValue??o.doubleValue)}return u===c?!!(B!=null&&B.i)||Zs(u)===Zs(c):!!(B===void 0||B.o)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return Yr(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Pt(s,i,t));case 10:case 11:return function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(To(u)!==To(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Pt(u[h],c[h],B)))return!1;return!0}(n,e,t);default:return X(52216,{left:n})}}function ti(n,e){return(n.values||[]).find(t=>Pt(t,e))!==void 0}function Ct(n,e){if(n===e)return 0;const t=Me(n),r=Me(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(i,o){const B=ve(i.integerValue||i.doubleValue),u=ve(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1}(n,e);case 3:return Ih(n.timestampValue,e.timestampValue);case 4:return Ih(Xr(n),Xr(e));case 5:return vB(n.stringValue,e.stringValue);case 6:return function(i,o){const B=Gn(i),u=Gn(o);return B.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const h=oe(B[c],u[c]);if(h!==0)return h}return oe(B.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const B=oe(ve(i.latitude),ve(o.latitude));return B!==0?B:oe(ve(i.longitude),ve(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return yh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var p,w,R,L;const B=i.fields||{},u=o.fields||{},c=(p=B[ei])==null?void 0:p.arrayValue,h=(w=u[ei])==null?void 0:w.arrayValue,C=oe(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return C!==0?C:yh(c,h)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xi.mapValue&&o===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(o===Xi.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let C=0;C<u.length&&C<h.length;++C){const p=vB(u[C],h[C]);if(p!==0)return p;const w=Ct(B[u[C]],c[h[C]]);if(w!==0)return w}return oe(u.length,h.length)}(n.mapValue,e.mapValue);default:throw X(23264,{u:t})}}function Ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=Mn(n),r=Mn(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function yh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ct(t[s],r[s]);if(i!==void 0&&i!==0)return i}return oe(t.length,r.length)}function es(n){return bB(n)}function bB(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=bB(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bB(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function uo(n){switch(Me(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Di(n);return e?16+uo(e):16;case 5:return 2*n.stringValue.length;case 6:return Gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+uo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Xn(r.fields,(i,o)=>{s+=i.length+uo(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function Th(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ht(n){return!!n&&"integerValue"in n}function cr(n){return!!n&&"doubleValue"in n}function Un(n){return Ht(n)||cr(n)}function ts(n){return!!n&&"arrayValue"in n}function Dt(n){return!!n&&"nullValue"in n}function dt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fr(n){return!!n&&"mapValue"in n}function Ro(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[QC])==null?void 0:r.stringValue)===WC}function PB(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ei])==null?void 0:t.arrayValue}function Gs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Xn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gs(n.arrayValue.values[t]);return e}return{...n}}function bw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(t)}setAll(e){let t=It.emptyPath(),r={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=B.popLast()}o?r[B.lastSegment()]=Gs(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Xn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(Gs(this.value))}}function $C(n){const e=[];return Xn(n.fields,(t,r)=>{const s=new It([t]);if(fr(r)){const i=$C(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zs(e)?"-0":e}}function fu(n){return{integerValue:""+n}}function Cu(n,e,t){return Aw(e)?fu(e):Xo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this._=void 0}}function Pw(n,e,t){return n instanceof ni?function(s,i){const o={fields:{[qC]:{stringValue:JC},[zC]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$o(i)&&(i=Di(i)),i&&(o.fields[KC]=i),{mapValue:o}}(t,e):n instanceof ri?XC(n,e):n instanceof si?ZC(n,e):n instanceof ii?function(s,i){const o=YC(s,i),B=Po(o)+Po(s.l);return Ht(o)&&Ht(s.l)?fu(B):Xo(s.serializer,B)}(n,e):n instanceof vo?function(s,i){return Ah(s,i,Math.min)}(n,e):n instanceof bo?function(s,i){return Ah(s,i,Math.max)}(n,e):void 0}function Sw(n,e,t){return n instanceof ri?XC(n,e):n instanceof si?ZC(n,e):t}function YC(n,e){return n instanceof ii?Un(e)?e:{integerValue:0}:null}class ni extends Zo{}class ri extends Zo{constructor(e){super(),this.elements=e}}function XC(n,e){const t=ed(e);for(const r of n.elements)t.some(s=>Pt(s,r))||t.push(r);return{arrayValue:{values:t}}}class si extends Zo{constructor(e){super(),this.elements=e}}function ZC(n,e){let t=ed(e);for(const r of n.elements)t=t.filter(s=>!Pt(s,r));return{arrayValue:{values:t}}}class du extends Zo{constructor(e,t){super(),this.serializer=e,this.l=t}}class ii extends du{}class vo extends du{}class bo extends du{}function Ah(n,e,t){if(!Un(e))return n.l;const r=t(Po(e),Po(n.l));return Ht(e)&&Ht(n.l)?fu(r):Xo(n.serializer,r)}function Po(n){return ve(n.integerValue||n.doubleValue)}function ed(n){return ts(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t){this.field=e,this.transform=t}}function Nw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ri&&s instanceof ri||r instanceof si&&s instanceof si?Yr(r.elements,s.elements,Pt):r instanceof ii&&s instanceof ii||r instanceof vo&&s instanceof vo||r instanceof bo&&s instanceof bo?Pt(r.l,s.l):r instanceof ni&&s instanceof ni}(n.transform,e.transform)}class Fw{constructor(e,t){this.version=e,this.transformResults=t}}class Nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ea{}function td(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rd(n.key,Nt.none()):new wi(n.key,n.data,Nt.none());{const t=n.data,r=rt.empty();let s=new xe(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Zn(n.key,r,new _t(s.toArray()),Nt.none())}}function Lw(n,e,t){n instanceof wi?function(s,i,o){const B=s.value.clone(),u=vh(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(n,e,t):n instanceof Zn?function(s,i,o){if(!co(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=vh(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(nd(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Us(n,e,t,r){return n instanceof wi?function(i,o,B,u){if(!co(i.precondition,o))return B;const c=i.value.clone(),h=bh(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zn?function(i,o,B,u){if(!co(i.precondition,o))return B;const c=bh(i.fieldTransforms,u,o),h=o.data;return h.setAll(nd(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(C=>C.field))}(n,e,t,r):function(i,o,B){return co(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(n,e,t)}function kw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=YC(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function Rh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yr(r,s,(i,o)=>Nw(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wi extends ea{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zn extends ea{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function vh(n,e,t){const r=new Map;Q(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,B=e.data.field(i.field);r.set(i.field,Sw(o,B,t[s]))}return r}function bh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Pw(i,o,e))}return r}class rd extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xw extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.position=e,this.inclusive=t}}function Ph(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),t.key):r=Ct(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{}class Le extends sd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Mw(e,t,r):t==="array-contains"?new Hw(e,r):t==="in"?new jw(e,r):t==="not-in"?new Jw(e,r):t==="array-contains-any"?new qw(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gw(e,r):new Uw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ct(t,this.value)):t!==null&&Me(this.value)===Me(t)&&this.matchesComparison(Ct(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends sd{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new xt(e,t)}matches(e){return id(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function id(n){return n.op==="and"}function od(n){return Vw(n)&&id(n)}function Vw(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function SB(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+es(n.value);if(od(n))return n.filters.map(e=>SB(e)).join(",");{const e=n.filters.map(t=>SB(t)).join(",");return`${n.op}(${e})`}}function ad(n,e){return n instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Pt(r.value,s.value)}(n,e):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,B)=>i&&ad(o,s.filters[B]),!0):!1}(n,e):void X(19439)}function Bd(n){return n instanceof Le?function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`}(n):n instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Bd).join(" ,")+"}"}(n):"Filter"}class Mw extends Le{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gw extends Le{constructor(e,t){super(e,"in",t),this.keys=ud("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Uw extends Le{constructor(e,t){super(e,"not-in",t),this.keys=ud("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ud(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Hw extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ts(t)&&ti(t.arrayValue,this.value)}}class jw extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ti(this.value.arrayValue,t)}}class Jw extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ti(this.value.arrayValue,t)}}class qw extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ts(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ti(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Te(0,0))}static max(){return new ne(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,r,s,i,o,B){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new $e(e,0,ne.min(),ne.min(),ne.min(),rt.empty(),0)}static newFoundDocument(e,t,r,s){return new $e(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new $e(e,2,t,ne.min(),ne.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new $e(e,3,t,ne.min(),ne.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=-1;function zw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Te(t+1,0):new Te(t,r));return new Hn(s,$.empty(),e)}function Qw(n){return new Hn(n.readTime,n.key,oi)}class Hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Hn(ne.min(),$.empty(),oi)}static max(){return new Hn(ne.max(),$.empty(),oi)}}function Ww(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t=null,r=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Oh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new $w(n,e,t,r,s,i,o)}function cd(n){const e=re(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>SB(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>es(r)).join(",")),e.R=t}return e.R}function ld(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Sh(n.startAt,e.startAt)&&Sh(n.endAt,e.endAt)}function Br(n){return!!n.isCorePipeline}function hd(n){return!!n.path&&$.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t=null,r=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function Yw(n,e,t,r,s,i,o,B){return new Ii(n,e,t,r,s,i,o,B)}function ta(n){return new Ii(n)}function Nh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xw(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function fd(n){return n.collectionGroup!==null}function Hs(n){const e=re(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new xe(It.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(B=B.add(c.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new Oo(i,r))}),t.has(It.keyField().canonicalString())||e.I.push(new Oo(It.keyField(),r))}return e.I}function zt(n){const e=re(n);return e.A||(e.A=Zw(e,Hs(n))),e.A}function Zw(n,e){if(n.limitType==="F")return Oh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)});const t=n.endAt?new So(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new So(n.startAt.position,n.startAt.inclusive):null;return Oh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function OB(n,e){const t=n.filters.concat([e]);return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function NB(n,e,t){return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function eI(n,e){return ld(zt(n),zt(e))&&n.limitType===e.limitType}function js(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Bd(s)).join(", ")}]`),Yo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>es(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function na(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,B,u){const c=Ph(o,B,u);return o.inclusive?c<=0:c<0}(r.startAt,Hs(r),s)||r.endAt&&!function(o,B,u){const c=Ph(o,B,u);return o.inclusive?c>=0:c>0}(r.endAt,Hs(r),s))}(n,e)}function pu(n){return(e,t)=>{let r=!1;for(const s of Hs(n)){const i=tI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tI(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?Ct(u,c):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,le;function rI(n){switch(n){case k.OK:return X(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function Cd(n){if(n===void 0)return ln("GRPC error has no .code"),k.UNKNOWN;switch(n){case Ne.OK:return k.OK;case Ne.CANCELLED:return k.CANCELLED;case Ne.UNKNOWN:return k.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return k.INTERNAL;case Ne.UNAVAILABLE:return k.UNAVAILABLE;case Ne.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ne.NOT_FOUND:return k.NOT_FOUND;case Ne.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ne.ABORTED:return k.ABORTED;case Ne.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ne.DATA_LOSS:return k.DATA_LOSS;default:return X(39323,{code:n})}}(le=Ne||(Ne={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return UC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Ae($.comparator);function ct(){return sI}const dd=new Ae($.comparator);function Hr(...n){let e=dd;for(const t of n)e=e.insert(t.key,t);return e}function pd(n){let e=dd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pn(){return Js()}function gd(){return Js()}function Js(){return new Pr(n=>n.toString(),(n,e)=>n.isEqual(e))}const iI=new Ae($.comparator),oI=new xe($.comparator);function ie(...n){let e=oI;for(const t of n)e=e.add(t);return e}const aI=new xe(oe);function BI(){return aI}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new Fn([4294967295,4294967295],0);function Fh(n){const e=uI().encode(n),t=new vC;return t.update(e),new Uint8Array(t.digest())}function Lh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fn([t,r],0),new Fn([s,i],0)]}class gu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ls(`Invalid padding: ${t}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Fn.fromNumber(this.m)}v(e,t,r){let s=e.add(t.multiply(Fn.fromNumber(r)));return s.compare(cI)===1&&(s=new Fn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}S(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Fh(e),[r,s]=Lh(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);if(!this.S(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,s,t);return r.forEach(B=>o.insert(B)),o}insert(e){if(this.m===0)return;const t=Fh(e),[r,s]=Lh(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yi(ne.min(),s,new Ae(oe),ct(),ct(),ie())}}class Ti{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ti(r,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class md{constructor(e,t){this.targetId=e,this.O=t}}class Ed{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class kh{constructor(e){this.targetId=e,this.M=0,this.N=xh(),this.L=Ve.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=ie(),t=ie(),r=ie();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Ti(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=xh()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,Q(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const bs="WatchChangeAggregator";class lI{constructor(e){this.Z=e,this.X=new Map,this.ee=ct(),this.te=Zi(),this.ne=ct(),this.re=Zi(),this.ie=new Ae(oe)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:X(56790,{state:e.state})}else q(bs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){var t;return Br(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:hd(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const o=new $(Br(i)?de.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,$e.newNoDocument(o,ne.min()))}else Q(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Te(t);if(o!==r){const B=this.Pe(e),u=B?this.Re(B,e,o):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=Gn(r).toUint8Array()}catch(u){if(u instanceof jC)return kt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new gu(o,s,i)}catch(u){return kt(u instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.m===0?null:B}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Z.Ae(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,o)=>{const B=this.he(o);if(B){if(i.current&&this.le(B.target)){const u=Br(B.target)?de.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new $(u);this.fe(c).has(o)||this.me(o,c)||this.oe(o,c,$e.newNoDocument(c,e))}i.q&&(t.set(o,i.K()),i.W())}});let r=ie();this.re.forEach((i,o)=>{let B=!0;o.forEachWhile(u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(r=r.add(i))}),this.ee.forEach((i,o)=>o.setReadTime(e)),this.ne.forEach((i,o)=>o.setReadTime(e));const s=new yi(e,t,this.ie,this.ee,this.ne,r);return this.ee=ct(),this.te=Zi(),this.ne=ct(),this.re=Zi(),this.ie=new Ae(oe),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void q(bs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),Br(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(Br(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):q(bs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(q(bs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new kh(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new xe(oe),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new xe(oe),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||q(bs,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new kh(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Zi(){return new Ae($.comparator)}function xh(){return new Ae($.comparator)}const hI={asc:"ASCENDING",desc:"DESCENDING"},fI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CI={and:"AND",or:"OR"};class dI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function FB(n,e){return n.useProto3Json||Yo(e)?e:{value:e}}function No(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mu(n){const e=Mn(n);return new Te(e.seconds,e.nanos)}function _d(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ho(n,e){return No(n,e.toTimestamp())}function Qt(n){return Q(!!n,49232),ne.fromTimestamp(mu(n))}function Eu(n,e){return LB(n,e).canonicalString()}function LB(n,e){const t=function(s){return new de(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dd(n){const e=de.fromString(n);return Q(Ad(e),10190,{key:e.toString()}),e}function Fo(n,e){return Eu(n.databaseId,e.path)}function iB(n,e){const t=Dd(e);if(t.get(1)!==n.databaseId.projectId)throw new J(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Id(t))}function wd(n,e){return Eu(n.databaseId,e)}function pI(n){const e=Dd(n);return e.length===4?de.emptyPath():Id(e)}function kB(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Id(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vh(n,e,t){return{name:Fo(n,e),fields:t.value.mapValue.fields}}function gI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Ve.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ve.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(c){const h=c.code===void 0?k.UNKNOWN:Cd(c.code);return new J(h,c.message||"")}(o);t=new Ed(r,s,i,B||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=iB(n,r.document.name),i=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):ne.min(),B=new rt({mapValue:{fields:r.document.fields}}),u=$e.newFoundDocument(s,i,o,B),c=r.targetIds||[],h=r.removedTargetIds||[];t=new lo(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=iB(n,r.document),i=r.readTime?Qt(r.readTime):ne.min(),o=$e.newNoDocument(s,i),B=r.removedTargetIds||[];t=new lo([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=iB(n,r.document),i=r.removedTargetIds||[];t=new lo([],i,s,null)}else{if(!("filter"in e))return X(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nI(s,i),B=r.targetId;t=new md(B,o)}}return t}function mI(n,e){let t;if(e instanceof wi)t={update:Vh(n,e.key,e.value)};else if(e instanceof rd)t={delete:Fo(n,e.key)};else if(e instanceof Zn)t={update:Vh(n,e.key,e.data),updateMask:vI(e.fieldMask)};else{if(!(e instanceof xw))return X(16599,{we:e.type});t={verify:Fo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const B=o.transform;if(B instanceof ni)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof ii)return{fieldPath:o.field.canonicalString(),increment:B.l};if(B instanceof vo)return{fieldPath:o.field.canonicalString(),minimum:B.l};if(B instanceof bo)return{fieldPath:o.field.canonicalString(),maximum:B.l};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ho(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function EI(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?Qt(s.updateTime):Qt(i);return o.isEqual(ne.min())&&(o=Qt(i)),new Fw(o,s.transformResults||[])}(t,e))):[]}function _I(n,e){return{documents:[wd(n,e.path)]}}function DI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wd(n,s);const i=function(c){if(c.length!==0)return Td(xt.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:jr(p.field),direction:TI(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=FB(n,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{be:t,parent:s}}function wI(n){let e=pI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Q(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(C){const p=yd(C);return p instanceof xt&&od(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(C){return C.map(p=>function(R){return new Oo(Jr(R.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(t.orderBy));let B=null;t.limit&&(B=function(C){let p;return p=typeof C=="object"?C.value:C,Yo(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(C){const p=!!C.before,w=C.values||[];return new So(w,p)}(t.startAt));let c=null;return t.endAt&&(c=function(C){const p=!C.before,w=C.values||[];return new So(w,p)}(t.endAt)),Yw(e,s,o,i,B,"F",u,c)}function II(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yI(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function yd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jr(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(t.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return Le.create(Jr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(r=>yd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function TI(n){return hI[n]}function AI(n){return fI[n]}function RI(n){return CI[n]}function jr(n){return{fieldPath:n.canonicalString()}}function Jr(n){return It.fromServerFormat(n.fieldPath)}function Td(n){return n instanceof Le?function(t){if(t.op==="=="){if(dt(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NAN"}};if(Dt(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dt(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NOT_NAN"}};if(Dt(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(t.field),op:AI(t.op),value:t.value}}}(n):n instanceof xt?function(t){const r=t.getFilters().map(s=>Td(s));return r.length===1?r[0]:{compositeFilter:{op:RI(t.op),filters:r}}}(n):X(54877,{filter:n})}function vI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ad(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Rd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ai(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function vd(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){return new dI(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vt(Ve.fromBase64String(e))}catch(t){throw new J(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vt(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_i(e,vt._jsonSchema))return vt.fromBase64String(e.bytes)}}vt._jsonSchemaVersion="firestore/bytes/1.0",vt._jsonSchema={type:ke("string",vt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function bI(){return new sa(Ut)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wt._jsonSchemaVersion}}static fromJSON(e){if(_i(e,Wt._jsonSchema))return new Wt(e.latitude,e.longitude)}}Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:ke("string",Wt._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class SI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class OI{constructor(e){this.Se=e,this.currentUser=We.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new an;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new an,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},B=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.Se.onInit(u=>B(u)),setTimeout(()=>{if(!this.auth){const u=this.Se.getImmediate({optional:!0});u?B(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new an)}},0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{Fe:r}),new bd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Oe:e}),new We(e)}}class NI{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class FI{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new NI(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,Et(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){Q(this.xe===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Mh(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Mh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function Pd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="ConnectivityMonitor";class Uh{constructor(){this.We=()=>this.Qe(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.We),window.addEventListener("offline",this.Ge)}Qe(){q(Gh,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){q(Gh,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;function xB(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oB="RestConnection",xI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class VI{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===Ao?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const o=xB(),B=this.nt(e,t.toUriEncodedString());q(oB,`Sending RPC '${e}' ${o}:`,B,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(B),h=vr(c);return this.it(e,B,u,r,h).then(C=>(q(oB,`Received RPC '${e}' ${o}: `,C),C),C=>{throw kt(oB,`RPC '${e}' ${o} failed with error: `,C,"url: ",B,"request:",r),C})}st(e,t,r,s,i,o){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=xI[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection",Ps=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Wr extends VI{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Wr.gt){const e=OC();Ps(e,SC.STAT_EVENT,t=>{t.stat===yB.PROXY?q(Qe,"STAT_EVENT: detected buffering proxy"):t.stat===yB.NOPROXY&&q(Qe,"STAT_EVENT: detected no buffering proxy")}),Wr.gt=!0}}it(e,t,r,s,i){const o=xB();return new Promise((B,u)=>{const c=new bC;c.setWithCredentials(!0),c.listenOnce(PC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bo.NO_ERROR:const C=c.getResponseJson();q(Qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(C)),B(C);break;case Bo.TIMEOUT:q(Qe,`RPC '${e}' ${o} timed out`),u(new J(k.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const p=c.getStatus();if(q(Qe,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const L=function(K){const te=K.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(te)>=0?te:k.UNKNOWN}(R.status);u(new J(L,R.message))}else u(new J(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new J(k.UNAVAILABLE,"Connection failed."));break;default:X(9055,{yt:e,streamId:o,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{q(Qe,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(Qe,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,r,15)})}vt(e,t,r){const s=xB(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.rt(B.initMessageHeaders,t,r),B.encodeInitMessageHeaders=!0;const c=i.join("");q(Qe,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.St(h);let C=!1,p=!1;const w=new MI({_t:R=>{p?q(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(C||(q(Qe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),C=!0),q(Qe,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},ot:()=>h.close()});return Ps(h,Fs.EventType.OPEN,()=>{p||(q(Qe,`RPC '${e}' stream ${s} transport opened.`),w.Rt())}),Ps(h,Fs.EventType.CLOSE,()=>{p||(p=!0,q(Qe,`RPC '${e}' stream ${s} transport closed`),w.At(),this.Dt(h))}),Ps(h,Fs.EventType.ERROR,R=>{p||(p=!0,kt(Qe,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),w.At(new J(k.UNAVAILABLE,"The operation could not be completed")))}),Ps(h,Fs.EventType.MESSAGE,R=>{var L;if(!p){const M=R.data[0];Q(!!M,16349);const K=M,te=(K==null?void 0:K.error)||((L=K[0])==null?void 0:L.error);if(te){q(Qe,`RPC '${e}' stream ${s} received error:`,te);const Be=te.status;let fe=function(A){const E=Ne[A];if(E!==void 0)return Cd(E)}(Be),Re=te.message;Be==="NOT_FOUND"&&Re.includes("database")&&Re.includes("does not exist")&&Re.includes(this.databaseId.database)&&kt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),fe===void 0&&(fe=k.INTERNAL,Re="Unknown error status: "+Be+" with message "+te.message),p=!0,w.At(new J(fe,Re)),h.close()}else q(Qe,`RPC '${e}' stream ${s} received:`,M),w.Vt(M)}}),Wr.ft(),setTimeout(()=>{w.It()},0),w}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}St(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return NC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){return new Wr(n)}Wr.gt=!1;class Sd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="PersistentStream";class Od{constructor(e,t,r,s,i,o,B,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Wt=0,this.Qt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new Sd(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Qt===null&&(this.Qt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Qt&&(this.Qt.cancel(),this.Qt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Wt++,e!==4?this.jt.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ln(t.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.an(r,s)},r=>{e(()=>{const s=new J(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Wt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return q(Hh,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Wt===e?t():(q(Hh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UI extends Od{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}cn(e,t){return this.connection.vt("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=gI(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Qt(o.readTime):ne.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=kB(this.serializer),t.addTarget=function(i,o){let B;const u=o.target;if(B=Br(u)?{pipelineQuery:yI(i,u)}:hd(u)?{documents:_I(i,u)}:{query:DI(i,u).be},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=_d(i,o.resumeToken);const c=FB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){B.readTime=No(i,o.snapshotVersion.toTimestamp());const c=FB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B}(this.serializer,e);const r=II(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=kB(this.serializer),t.removeTarget=e,this.tn(t)}}class HI extends Od{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.vt("Write",e,t)}En(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=EI(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=kB(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>mI(this.serializer,r))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{}class JI extends jI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new J(k.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.tt(e,LB(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(k.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection.st(e,LB(t,r),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(k.UNKNOWN,o.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function qI(n,e,t,r){return new JI(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="ComponentProvider",jh=new Map;function zI(n,e,t,r,s){return new yw(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Pd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nd=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Nd,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}oa.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==QI)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(s=>s?x.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new x((r,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++B,B===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new x((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function $I(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function os(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="LruGarbageCollector",YI=1048576;function Kh([n,e],[t,r]){const s=oe(n,t);return s===0?oe(e,r):s}class XI{constructor(e){this.Jn=e,this.buffer=new xe(Kh),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Kh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){q(qh,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){os(t)?q(qh,"Ignoring IndexedDB error during garbage collection: ",t):await is(t)}await this.tr(3e5)})}}class ey{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(oa.yn);const r=new XI(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Jh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jh):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,o,B,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),s=this.params.maximumSequenceNumbersToCollect):s=C,o=Date.now(),this.nthSequenceNumber(e,s))).next(C=>(r=C,B=Date.now(),this.removeTargets(e,r,t))).next(C=>(i=C,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(C=>(c=Date.now(),Gr()<=ae.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${C} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:C})))}}function ty(n,e){return new ey(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="firestore.googleapis.com",zh=!0;class Qh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fd,this.ssl=zh}else this.host=e.host,this.ssl=e.ssl??zh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YI)throw new J(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(ww("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new J(k.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(r[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let aa=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PI;switch(r.type){case"firstParty":return new FI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=jh.get(t);r&&(q(KI,"Removing Datastore"),jh.delete(t),r.terminate())}(this),Promise.resolve()}};function ny(n,e,t,r={}){var c;n=yt(n,aa);const s=vr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},B=`${e}:${t}`;s&&YB(`https://${B}`),i.host!==Fd&&i.host!==B&&kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:r};if(!Vn(u,o)&&(n._setSettings(u),r.mockUserToken)){let h,C;if(typeof r.mockUserToken=="string")h=r.mockUserToken,C=We.MOCK_USER;else{h=Vf(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new We(p)}n._authCredentials=new SI(new bd(h,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(_i(t,be._jsonSchema))return new be(e,r||null,new $(de.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:ke("string",be._jsonSchemaVersion),referencePath:ke("string")};class Ln extends Sr{constructor(e,t,r){super(e,t,ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new $(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function n0(n,e,...t){if(n=De(n),HC("collection","path",e),n instanceof aa){const r=de.fromString(e,...t);return _h(r),new Ln(n,null,r)}{if(!(n instanceof be||n instanceof Ln))throw new J(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return _h(r),new Ln(n.firestore,null,r)}}function ry(n,e,...t){if(n=De(n),arguments.length===1&&(e=lu.newId()),HC("doc","path",e),n instanceof aa){const r=de.fromString(e,...t);return Eh(r),new be(n,null,new $(r))}{if(!(n instanceof be||n instanceof Ln))throw new J(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return Eh(r),new be(n.firestore,n instanceof Ln?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_i(e,ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ht(e.vectorValues);throw new J(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ht._jsonSchemaVersion="firestore/vectorValue/1.0",ht._jsonSchema={type:ke("string",ht._jsonSchemaVersion),vectorValues:ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=/^__.*__$/;class iy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new wi(e,this.data,t,this.fieldTransforms)}}class Ld{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:n})}}class _u{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new _u({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Lo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(kd(this.dataSource)&&sy.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class oy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ra(e)}createContext(e,t,r,s=!1){return new _u({dataSource:e,methodName:t,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ba(n){const e=n._freezeSettings(),t=ra(n._databaseId);return new oy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xd(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);wu("Data must be an object, but it was:",o,r);const B=Vd(r,o);let u,c;if(i.merge)u=new _t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const C of i.mergeFields){const p=wr(e,C,t);if(!o.contains(p))throw new J(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Ud(h,p)||h.push(p)}u=new _t(h),c=o.fieldTransforms.filter(C=>u.covers(C.field))}else u=null,c=o.fieldTransforms;return new iy(new rt(B),u,c)}class ua extends ia{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ua}}class Du extends ia{_toFieldTransform(e){return new Ow(e.path,new ni)}isEqual(e){return e instanceof Du}}function ay(n,e,t,r){const s=n.createContext(1,e,t);wu("Data must be an object, but it was:",s,r);const i=[],o=rt.empty();Xn(r,(u,c)=>{const h=Gd(e,u,t);c=De(c);const C=s.childContextForFieldPath(h);if(c instanceof ua)i.push(h);else{const p=jn(c,C);p!=null&&(i.push(h),o.set(h,p))}});const B=new _t(i);return new Ld(o,B,s.fieldTransforms)}function By(n,e,t,r,s,i){const o=n.createContext(1,e,t),B=[wr(e,r,t)],u=[s];if(i.length%2!=0)throw new J(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)B.push(wr(e,i[p])),u.push(i[p+1]);const c=[],h=rt.empty();for(let p=B.length-1;p>=0;--p)if(!Ud(c,B[p])){const w=B[p];let R=u[p];R=De(R);const L=o.childContextForFieldPath(w);if(R instanceof ua)c.push(w);else{const M=jn(R,L);M!=null&&(c.push(w),h.set(w,M))}}const C=new _t(c);return new Ld(h,C,o.fieldTransforms)}function uy(n,e,t,r=!1){return jn(t,n.createContext(r?4:3,e))}function jn(n,e,t){if(Md(n=De(n)))return wu("Unsupported field value:",e,n),Vd(n,e);if(n instanceof ia)return function(s,i){if(!kd(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const u of s){let c=jn(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Cu(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=Te.fromDate(s);return{timestampValue:No(i.serializer,B)}}if(s instanceof Te){const B=new Te(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:No(i.serializer,B)}}if(s instanceof Wt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vt)return{bytesValue:_d(i.serializer,s._byteString)};if(s instanceof be){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:Eu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ht)return function(u,c){const h=u instanceof ht?u.toArray():u;return{mapValue:{fields:{[QC]:{stringValue:WC},[ei]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw c.createError("VectorValues must only contain numeric values.");return Xo(c.serializer,p)})}}}}}}(s,i);if(Rd(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Wo(s)}`)}(n,e)}function Vd(n,e){const t={};return UC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xn(n,(r,s)=>{const i=jn(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof Wt||n instanceof vt||n instanceof be||n instanceof ia||n instanceof ht||Rd(n))}function wu(n,e,t){if(!Md(t)||!Ei(t)){const r=Wo(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function wr(n,e,t){if((e=De(e))instanceof sa)return e._internalPath;if(typeof e=="string")return Gd(n,e);throw Lo("Field path arguments must be of type string or ",n,!1,void 0,t)}const cy=new RegExp("[~\\*/\\[\\]]");function Gd(n,e,t){if(e.search(cy)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new sa(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new J(k.INVALID_ARGUMENT,B+n+u)}function Ud(n,e){return n.some(t=>t.isEqual(e))}function Hd(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=rt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&Ei(o)?B={mapValue:{fields:new Xe(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=jn(o,t)??void 0),B&&r.set(It.fromServerFormat(i.serverName),B)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Dw(r,(o,B)=>[It.fromServerFormat(B),o!==void 0?jn(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ei(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function r0(){return new Du("serverTimestamp")}function hy(n){return new ht(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n){let e;return n instanceof Or?n:(e=Ei(n)?gy(n):n instanceof Array?my(n):jd(n,void 0),e)}function aB(n){if(n instanceof Or)return n;if(n instanceof ht)return Bi(n);if(Array.isArray(n))return Bi(hy(n));throw new Error("Unsupported value: "+typeof n)}function Iu(n){return Rw(n)?fo(n):H(n)}class Or{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,H(e)],"add")}asBoolean(){if(this instanceof Jn)return this;if(this instanceof Bs)return new qd(this);if(this instanceof as)return new py(this);if(this instanceof F)return new Jd(this);throw new J("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,H(e)],"subtract")}multiply(e){return new F("multiply",[this,H(e)],"multiply")}divide(e){return new F("divide",[this,H(e)],"divide")}mod(e){return new F("mod",[this,H(e)],"mod")}equal(e){return new F("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>H(s));return new F("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ks(e.map(H),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ks(e.map(H),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ks(e.map(H),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ks(e.map(H),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(H(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(H(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(H(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Bi(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(H);return new F("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,H(e),H(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,H(e),H(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(H);return new F("concat",[this,...r],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,H(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,H(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new F("array_transform",[this,H(e),H(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,H(e)];return t!==void 0&&r.push(H(t)),new F("array_slice",r,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Bi(e)],"mapGet")}mapSet(e,t,...r){const s=[this,H(e),H(t),...r.map(H)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,H(e)],"get_field")}count(){return mt._create("count",[this],"count")}sum(){return mt._create("sum",[this],"sum")}average(){return mt._create("average",[this],"average")}minimum(){return mt._create("minimum",[this],"minimum")}maximum(){return mt._create("maximum",[this],"maximum")}first(){return mt._create("first",[this],"first")}last(){return mt._create("last",[this],"last")}arrayAgg(){return mt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return mt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return mt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new F("maximum",[this,...r.map(H)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new F("minimum",[this,...r.map(H)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,aB(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,aB(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,aB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,H(e),H(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,H(e),H(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,Iu(e),H(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,H(e)];return t&&r.push(H(t)),new F("timestamp_extract",r,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const r=H(e);return new F("substring",t===void 0?[this,r]:[this,r,H(t)],"substring")}arrayGet(e){return new F("array_get",[this,H(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,H(e)],"ifError");return e instanceof Jn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...t){const r=H(e),s=t.map(H);return new F("map_merge",[this,r,...s],"mapMerge")}pow(e){return new F("pow",[this,H(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,H(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,H(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,H(e),...t.map(H)],"coalesce")}join(e){return new F("join",[this,H(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,H(e)])}timestampTruncate(e,t){const r=[this,H(e)];return t&&r.push(H(t)),new F("timestamp_trunc",r)}ascending(){return Ey(this)}descending(){return _y(this)}as(e){return new Cy(this,e,"as")}}class mt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new mt(e,t);return s._methodName=r,s}as(e){return new fy(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class fy{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Cy{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ks extends Or{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class as extends Or{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function fo(n){return dy(n,"field")}function dy(n,e){return new as(typeof n=="string"?Ut===n?bI()._internalPath:wr("field",n):n._internalPath,e)}class Bs extends Or{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Bs(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,ly(this._protoValue)||(this._protoValue=jn(this.value,e))}}function Bi(n,e){return jd(n,"constant")}function jd(n,e){const t=new Bs(n,e);return typeof n=="boolean"?new qd(t):t}class F extends Or{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Xe({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Jn extends Or{get _methodName(){return this._expr._methodName}countIf(){return mt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=H(e),r=new F("if_error",[this,t],"ifError");return t instanceof Jn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Jd extends Jn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class qd extends Jn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class py extends Jn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function gy(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Bi(r)),t.push(H(s))}return new F("map",t,"map")}function my(n){return function(t,r){return new F("array",t.map(s=>H(s)),r)}(n,"array")}function Ey(n){return new Kd(Iu(n),"ascending","ascending")}function _y(n){return new Kd(Iu(n),"descending","descending")}class Kd{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:vd(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class zd extends At{get _name(){return"add_fields"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ai(e,this.fields)]}}_readUserData(e){super._readUserData(e),qn(this.fields,e)}}class Qd extends At{get _name(){return"aggregate"}get _optionsUtil(){return new Xe({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ai(e,this.accumulators),ai(e,this.groups)]}}_readUserData(e){super._readUserData(e),qn(this.groups,e),qn(this.accumulators,e)}}class Wd extends At{get _name(){return"distinct"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ai(e,this.groups)]}}_readUserData(e){super._readUserData(e),qn(this.groups,e)}}class ca extends At{get _name(){return"collection"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class la extends At{get _name(){return"collection_group"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class yu extends At{get _name(){return"database"}get _optionsUtil(){return new Xe({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Tu extends At{get _name(){return"documents"}get _optionsUtil(){return new Xe({})}constructor(e,t){if(super(t),!e||e.length===0)throw new J(k.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new J(k.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class ha extends At{get _name(){return"where"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),qn(this.condition,e)}}class Ir extends At{get _name(){return"limit"}get _optionsUtil(){return new Xe({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Cu(e,this.limit)]}}}class Wh extends At{get _name(){return"offset"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Cu(e,this.offset)]}}}class Dy extends At{get _name(){return"select"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ai(e,this.selections)]}}_readUserData(e){super._readUserData(e),qn(this.selections,e)}}class rn extends At{get _name(){return"sort"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),qn(this.orderings,e)}}class Au extends At{get _name(){return"replace_with"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),vd(Au.Pr)]}}_readUserData(e){super._readUserData(e),qn(this.map,e)}}Au.Pr="full_replace";function qn(n,e){return Hd(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return Hd(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Ar("where",e),t.push(new ha(e,{})),new qs(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Ir(e,{})),new qs(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new rn(this.Ar("sort",e.orderings),{})):r.push(new rn(this.Ar("sort",[e,...t]),{})),new qs(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class I{constructor(e,t){this.type=e,this.value=t}static dr(){return new I("ERROR",void 0)}static mr(){return new I("UNSET",void 0)}static pr(){return new I("NULL",Zr)}static newValue(e){return Dt(e)?new I("NULL",Zr):function(r){return!!r&&"booleanValue"in r}(e)?new I("BOOLEAN",e):Ht(e)?new I("INT",e):cr(e)?new I("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new I("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new I("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):ts(e)?new I("ARRAY",e):Ro(e)?new I("VECTOR",e):fr(e)?new I("MAP",e):new I("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function Ks(n){if(!n.gr())return n.value}function $d(n){return n instanceof Jn?n._expr:n}function Z(n){if((n=$d(n))instanceof as)return new wy(n);if(n instanceof Bs)return new Iy(n);if(n instanceof ks)return new yy(n);if(n instanceof F){if(n.name==="add")return new Ry(n);if(n.name==="subtract")return new vy(n);if(n.name==="multiply")return new by(n);if(n.name==="divide")return new Py(n);if(n.name==="mod")return new Sy(n);if(n.name==="and")return new Oy(n);if(n.name==="equal")return new Jy(n);if(n.name==="not_equal")return new qy(n);if(n.name==="less_than")return new Ky(n);if(n.name==="less_than_or_equal")return new zy(n);if(n.name==="greater_than")return new Qy(n);if(n.name==="greater_than_or_equal")return new Wy(n);if(n.name==="array_concat")return new $y(n);if(n.name==="array_reverse")return new Yy(n);if(n.name==="array_contains")return new Xy(n);if(n.name==="array_contains_all")return new Zy(n);if(n.name==="array_contains_any")return new eT(n);if(n.name==="array_length")return new tT(n);if(n.name==="array_element")return new nT(n);if(n.name==="equal_any")return new Yd(n);if(n.name==="not_equal_any")return new Fy(n);if(n.name==="is_nan")return new Ly(n);if(n.name==="is_not_nan")return new ky(n);if(n.name==="is_null")return new xy(n);if(n.name==="is_not_null")return new Vy(n);if(n.name==="is_error")return new My(n);if(n.name==="exists")return new Gy(n);if(n.name==="not")return new fa(n);if(n.name==="or")return new Ny(n);if(n.name==="xor")return new Ru(n);if(n.name==="conditional")return new Uy(n);if(n.name==="maximum")return new Hy(n);if(n.name==="minimum")return new jy(n);if(n.name==="reverse")return new rT(n);if(n.name==="replace_first")return new sT(n);if(n.name==="replace_all")return new iT(n);if(n.name==="char_length")return new oT(n);if(n.name==="byte_length")return new aT(n);if(n.name==="like")return new BT(n);if(n.name==="regex_contains")return new uT(n);if(n.name==="regex_match")return new cT(n);if(n.name==="string_contains")return new lT(n);if(n.name==="starts_with")return new hT(n);if(n.name==="ends_with")return new fT(n);if(n.name==="to_lower")return new CT(n);if(n.name==="to_upper")return new dT(n);if(n.name==="trim")return new pT(n);if(n.name==="string_concat")return new gT(n);if(n.name==="map_get")return new mT(n);if(n.name==="cosine_distance")return new ET(n);if(n.name==="dot_product")return new _T(n);if(n.name==="euclidean_distance")return new DT(n);if(n.name==="vector_length")return new wT(n);if(n.name==="unix_micros_to_timestamp")return new RT(n);if(n.name==="timestamp_to_unix_micros")return new PT(n);if(n.name==="unix_millis_to_timestamp")return new vT(n);if(n.name==="timestamp_to_unix_millis")return new ST(n);if(n.name==="unix_seconds_to_timestamp")return new bT(n);if(n.name==="timestamp_to_unix_seconds")return new OT(n);if(n.name==="timestamp_add")return new NT(n);if(n.name==="timestamp_subtract")return new FT(n)}throw new Error(`Unknown Expr : ${n}`)}class wy{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Ut)return I.newValue({referenceValue:Fo(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:ho(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:ho(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?$o(r)?I.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:ho(i.serializer,ne.fromTimestamp(Xr(o)))};if(i.serverTimestampBehavior==="previous"){const B=Di(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,r)):I.newValue(r):I.mr()}}class Iy{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class yy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>Z(s).evaluate(e,t));return r.some(s=>s.gr())?I.dr():I.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Ke(n){return cr(n)?Number(n.doubleValue):Number(n.integerValue)}function $t(n){return BigInt(n.integerValue)}const Ty=BigInt("0x7fffffffffffffff"),Ay=-BigInt("0x8000000000000000");class Ai{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const r=Z(this.expr.params[0]).evaluate(e,t),s=Z(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const o of this.expr.params.slice(2)){const B=Z(o).evaluate(e,t);i=this.wr(i,B)}return i}wr(e,t){if(e.gr()||t.gr())return I.dr();if(e.yr()||t.yr())return I.pr();const r=e.value,s=t.value;if(!cr(r)&&!Ht(r)||!cr(s)&&!Ht(s))return I.dr();if(cr(r)||cr(s)){const i=this.br(r,s);return i?I.newValue(i):I.dr()}if(Ht(r)&&Ht(s)){const i=this.vr(r,s);return i===void 0?I.dr():typeof i=="number"?I.newValue({doubleValue:i}):i<Ay||i>Ty?I.dr():I.newValue({integerValue:`${i}`})}return I.dr()}}function hn(n,e){return Me(n)!==Me(e)?"TYPE_MISMATCH":dt(n)||dt(e)?"NOT_EQ":Dt(n)&&Dt(e)?"EQ":Dt(n)||Dt(e)?"NULL":ts(n)&&ts(e)?function(r,s){var o,B,u;if(((o=r.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=r.values)==null?void 0:u.length)??0);c++){const h=r.values[c],C=s.values[c];switch(hn(h,C)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:X(44609,{Sr:h,Dr:C})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Ro(n)&&Ro(e)||fr(n)&&fr(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(To(i)!==To(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(hn(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Pt(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class Ry extends Ai{vr(e,t){return $t(e)+$t(t)}br(e,t){return{doubleValue:Ke(e)+Ke(t)}}}class vy extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){return $t(e)-$t(t)}br(e,t){return{doubleValue:Ke(e)-Ke(t)}}}class by extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){return $t(e)*$t(t)}br(e,t){return{doubleValue:Ke(e)*Ke(t)}}}class Py extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){const r=$t(t);if(r!==BigInt(0))return $t(e)/r}br(e,t){const r=Ke(t);return r===0?{doubleValue:Zs(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ke(e)/r}}}class Sy extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){const r=$t(t);if(r!==BigInt(0))return $t(e)%r}br(e,t){const r=Ke(t);if(r!==0)return{doubleValue:Ke(e)%r}}}class Oy{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return I.newValue(Je);break;case"NULL":s=!0;break;default:r=!0}}return r?I.dr():s?I.pr():I.newValue(ft)}}class fa{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,9634);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return I.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return I.pr();default:return I.dr()}}}class Ny{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return I.newValue(ft);break;case"NULL":s=!0;break;default:r=!0}}return r?I.dr():s?I.pr():I.newValue(Je)}}class Ru{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":r=Ru.xor(r,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return I.dr()}}return s?I.pr():I.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Yd{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,55094);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();for(const u of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(Dt(s.value)&&Dt(u)?"EQ":hn(s.value,u)){case"EQ":return I.newValue(ft);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44608,{value:s.value,candidate:u})}return r?I.pr():I.newValue(Je)}}class Fy{constructor(e){this.expr=e}evaluate(e,t){return new fa(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class Ly{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return I.newValue(Je);case"DOUBLE":return I.newValue({booleanValue:isNaN(Ke(r.value))});case"NULL":return I.pr();default:return I.dr()}}}class ky{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new fa(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class xy{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(ft);case"UNSET":case"ERROR":return I.dr();default:return I.newValue(Je)}}}class Vy{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new fa(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class My{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(ft):I.newValue(Je)}}class Gy{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.dr();case"UNSET":return I.newValue(Je);default:return I.newValue(ft)}}}class Uy{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===3,11706);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return I.dr()}}}class Hy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ct(i.value,s.value)>0?i:s}return s===void 0?I.pr():s}}class jy{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ct(i.value,s.value)<0?i:s}return s===void 0?I.pr():s}}class us{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return I.dr()}const s=Z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.dr()}return this.Cr(r,s)}}class Jy extends us{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return I.newValue(ft);if(e.yr()||t.yr()||dt(e.value)||dt(t.value)||Me(e.value)!==Me(t.value))return I.newValue(Je);switch(hn(e.value,t.value)){case"EQ":return I.newValue(ft);case"NOT_EQ":return I.newValue(Je);case"NULL":return I.pr();default:X(44615,{left:e,right:t})}}}class qy extends us{constructor(e){super(e),this.expr=e}Cr(e,t){switch(hn(e.value,t.value)){case"EQ":return I.newValue(Je);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(ft);case"NULL":return I.pr();default:X(44614,{left:e,right:t})}}}class Ky extends us{constructor(e){super(e),this.expr=e}Cr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?I.newValue(Je):I.newValue({booleanValue:Ct(e.value,t.value)<0})}}class zy extends us{constructor(e){super(e),this.expr=e}Cr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?I.newValue(Je):hn(e.value,t.value)==="EQ"?I.newValue(ft):I.newValue({booleanValue:Ct(e.value,t.value)<0})}}class Qy extends us{constructor(e){super(e),this.expr=e}Cr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?I.newValue(Je):I.newValue({booleanValue:Ct(e.value,t.value)>0})}}class Wy extends us{constructor(e){super(e),this.expr=e}Cr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?I.newValue(Je):hn(e.value,t.value)==="EQ"?I.newValue(ft):I.newValue({booleanValue:Ct(e.value,t.value)>0})}}class $y{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Yy{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,216);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return I.newValue({arrayValue:{values:[...i].reverse()}})}default:return I.dr()}}}class Xy{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new Yd(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Zy{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,C;Q(this.expr.params.length===2,1392);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((C=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of o){let w=!1;r=!1;for(const R of B){switch(Dt(p)&&Dt(R)?"EQ":hn(p,R)){case"EQ":w=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44613,{value:R,search:p})}if(w)break}if(!w)return I.newValue(Je)}return I.newValue(ft)}}class eT{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,C;Q(this.expr.params.length===2,2680);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((C=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of B)for(const w of o)switch(Dt(p)&&Dt(w)?"EQ":hn(p,w)){case"EQ":return I.newValue(ft);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(60403,{value:p,search:w})}return r?I.pr():I.newValue(Je)}}class tT{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;Q(this.expr.params.length===1,38605);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"ARRAY":return I.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return I.dr()}}}class nT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class rT{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,1508);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Ve.fromBase64String(o).toUint8Array();return B.reverse(),I.newValue({bytesValue:Ve.fromUint8Array(B).toBase64()})}return I.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(B,c=>c.segment).reverse();return I.newValue({stringValue:u.join("")})}default:return I.dr()}}}class sT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class iT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class oT{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"STRING":{const s=function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B}(r.value.stringValue);return s===void 0?I.dr():I.newValue({integerValue:s})}default:return I.dr()}}}class aT{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,8486);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?I.newValue({integerValue:Ve.fromBase64String(o).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(u){let c=0;for(let h=0;h<u.length;h++){const C=u.codePointAt(h);if(C===void 0)return;if(C>=55296&&C<=57343){if(!(C<=56319))return;{const p=u.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,h++}}else if(C<=127)c+=1;else if(C<=2047)c+=2;else if(C<=65535)c+=3;else{if(!(C<=1114111))return;c+=4,h++}}return c}((i=r.value)==null?void 0:i.stringValue);return o===void 0?I.dr():I.newValue({integerValue:o})}case"NULL":return I.pr();default:return I.dr()}}}class cs{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return I.dr()}return r?I.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class BT extends cs{Fr(e,t){try{const r=function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"}(t),s=uu.compile(r);return I.newValue({booleanValue:s.matches(e)})}catch(r){return kt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),I.dr()}}}class uT extends cs{Fr(e,t){try{const r=uu.compile(t);return I.newValue({booleanValue:r.test(e)})}catch{return kt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.dr()}}}class cT extends cs{Fr(e,t){try{return I.newValue({booleanValue:uu.compile(t).matches(e)})}catch{return kt(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.dr()}}}class lT extends cs{Fr(e,t){return I.newValue({booleanValue:e.includes(t)})}}class hT extends cs{Fr(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class fT extends cs{Fr(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class CT{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,29079);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return I.pr();default:return I.dr()}}}class dT{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,60487);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return I.pr();default:return I.dr()}}}class pT{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,28544);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return I.pr();default:return I.dr()}}}class gT{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>Z(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.dr()}return i?I.pr():I.newValue({stringValue:s})}}class mT{constructor(e){this.expr=e}evaluate(e,t){var o,B,u,c;Q(this.expr.params.length===2,4483);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return I.mr();case"MAP":break;default:return I.dr()}const s=Z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.dr();const i=(c=(B=(o=r.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?I.mr():I.newValue(i)}}class vu{constructor(e){this.expr=e}evaluate(e,t){var c,h;Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=PB(s.value),B=PB(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((h=B.values)==null?void 0:h.length))return I.dr();const u=this.Or(o,B);return u===void 0||isNaN(u)?I.dr():I.newValue({doubleValue:u})}}class ET extends vu{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,B=0;for(let c=0;c<r.length;c++){if(!Un(r[c])||!Un(s[c]))return;const h=Ke(r[c]),C=Ke(s[c]);i+=h*C,o+=h*h,B+=C*C}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class _T extends vu{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Un(r[o])||!Un(s[o]))return;i+=Ke(r[o])*Ke(s[o])}return i}}class DT extends vu{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Un(r[o])||!Un(s[o]))return;const B=Ke(r[o]),u=Ke(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class wT{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,39044);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=PB(r.value);return I.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return I.pr();default:return I.dr()}}}const ui=BigInt(-62135596800),ci=BigInt(253402300799),ko=BigInt(1e3),kn=BigInt(1e6),IT=ui*ko,yT=ci*ko+BigInt(999),TT=ui*kn,AT=ci*kn+BigInt(999999);function bu(n){return n>=TT&&n<=AT}function Xd(n){return n>=ui&&n<=ci}function li(n,e){const t=BigInt(n);return!(t<ui||t>ci)&&!(e<0||e>=1e9)&&(t!==ui||e===0)&&!(t===ci&&e>999999999)}function Zd(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Pu(n){return BigInt(n.seconds)*kn+BigInt(Math.trunc(n.nanoseconds/1e3))}class Su{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return I.pr();default:return I.dr()}}}class RT extends Su{toTimestamp(e){if(!bu(e))return I.dr();let t=Number(e/kn),r=Number(e%kn*BigInt(1e3));const s=Zd(t,r);return t=s.seconds,r=s.nanos,li(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.dr()}}class vT extends Su{toTimestamp(e){if(!function(o){return o>=IT&&o<=yT}(e))return I.dr();let t=Number(e/ko),r=Number(e%ko*BigInt(1e6));const s=Zd(t,r);return t=s.seconds,r=s.nanos,li(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.dr()}}class bT extends Su{toTimestamp(e){if(!Xd(e))return I.dr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class Ou{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return I.pr();default:return I.dr()}const s=mu(r.value.timestampValue);return li(s.seconds,s.nanoseconds)?this.Mr(s):I.dr()}}class PT extends Ou{Mr(e){const t=Pu(e);return bu(t)?I.newValue({integerValue:`${t.toString()}`}):I.dr()}}class ST extends Ou{Mr(e){const t=Pu(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:r.toString()}):I.newValue({integerValue:(r-BigInt(1)).toString()})}}class OT extends Ou{Mr(e){const t=BigInt(e.seconds);return Xd(t)?I.newValue({integerValue:t.toString()}):I.dr()}}class ep{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(te){switch(te){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return I.dr();break;case"NULL":r=!0;break;default:return I.dr()}const B=Z(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return I.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(o)))return I.dr()}catch(K){return kt(`Error during timestamp arithmetic: ${K}`),I.dr()}const h=mu(s.value.timestampValue);if(!li(h.seconds,h.nanoseconds))return I.dr();const C=Pu(h),p=this.Lr(C,c);if(!bu(p))return I.dr();const w=Number(p/kn),R=p%kn,L=Number((R<0?R+kn:R)*BigInt(1e3)),M=R<0?w-1:w;return li(M,L)?I.newValue({timestampValue:{seconds:M,nanos:L}}):I.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class NT extends ep{Lr(e,t){return e+t}}class FT extends ep{Lr(e,t){return e-t}}// Copyright 2024 Google LLC* @license
class nt{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ca(this)}getPipelineCollectionGroup(){return Nu(this)}getPipelineCollectionId(){return LT(this)}getPipelineDocuments(){return VB(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==Wd.name&&s._name!==Qd.name||(r="keyless"),s._name===Dy.name&&r==="exact"&&(r="augmented"),s._name===zd.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return xn(this)}}function xn(n){const e=n.stages[0];return e instanceof ca||e instanceof la||e instanceof yu||e instanceof Tu?e._name:"unknown"}function Ca(n){if(xn(n)==="collection")return n.stages[0].Er}function Nu(n){if(xn(n)==="collection_group")return n.stages[0].collectionId}function LT(n){switch(xn(n)){case"collection":return de.fromString(Ca(n)).lastSegment();case"collection_group":return Nu(n);default:return}}function VB(n){if(xn(n)==="documents")return n.stages[0].hr}function hi(n){if((n=$d(n))instanceof as)return`fld(${n.fieldName})`;if(n instanceof Bs)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof be?`ref(${t.path})`:t instanceof ht?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof F)return`fn(${n.name},[${n.params.map(hi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(hi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function kT(n){if(n instanceof zd)return`${n._name}(${to(n.fields)})`;if(n instanceof Qd){let e=`${n._name}(${to(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${to(n.groups)})`),e}if(n instanceof Wd)return`${n._name}(${to(n.groups)})`;if(n instanceof ca)return`${n._name}(${n.Er})`;if(n instanceof la)return`${n._name}(${n.collectionId})`;if(n instanceof yu)return`${n._name}()`;if(n instanceof Tu)return`${n._name}(${n.hr.sort()})`;if(n instanceof ha)return`${n._name}(${hi(n.condition)})`;if(n instanceof Ir)return`${n._name}(${n.limit})`;if(n instanceof rn)return`${n._name}(${function(t){return t.map(r=>`${hi(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function to(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${hi(t)}`).join(",")}`}function Bn(n){return n.stages.map(e=>kT(e)).join("|")}function tp(n,e){return Bn(n)===Bn(e)}function Ue(n){return n instanceof nt}function $h(n){return Ue(n)?Bn(n):js(n)}function np(n){return Ue(n)?Bn(n):function(t){return`${cd(zt(t))}|lt:${t.limitType}`}(n)}function da(n,e){return n instanceof nt&&e instanceof nt?tp(n,e):!(n instanceof nt&&!(e instanceof nt)||!(n instanceof nt)&&e instanceof nt)&&eI(n,e)}function rp(n){return Br(n)?Bn(n):cd(n)}function sp(n,e){return n instanceof nt&&e instanceof nt?tp(n,e):!(n instanceof nt&&!(e instanceof nt)||!(n instanceof nt)&&e instanceof nt)&&ld(n,e)}function xT(n,e){const t=function(s){let i=!1;const o=[];for(const B of s)if(B instanceof rn)if(i=!0,B.orderings.some(u=>u.expr instanceof as&&u.expr.fieldName===Ut))o.push(B);else{const u=B.orderings.map(c=>c);u.push(fo(Ut).ascending()),o.push(new rn(u,{}))}else B instanceof Ir&&(i||(o.push(new rn([fo(Ut).ascending()],{})),i=!0)),o.push(B);return i||o.push(new rn([fo(Ut).ascending()],{})),o}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new nt(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Lw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Us(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Us(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=td(o,B);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(t,r)=>Rh(t,r))&&Yr(this.baseMutations,e.baseMutations,(t,r)=>Rh(t,r))}}class Fu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Q(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return iI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fu(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="";function MT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Yh(e)),e=GT(n.get(t),e);return Yh(e)}function GT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ip:t+="";break;default:t+=i}}return t}function Yh(n){return n+ip+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r,s,i=ne.min(),o=ne.min(),B=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.qr=e}}function jT(n){const e=wI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?NB(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.Yi=new qT}addToCollectionParentIndex(e,t){return this.Yi.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Hn.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class qT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(de.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Kn(0)}static ws(){return new Kn(-1)}}// Copyright 2024 Google LLC* @license
function op(n,e){var r;let t=e;for(const s of n.stages)t=zT({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function pa(n,e){return op(n,[e]).length>0}function KT(n,e){return Ue(n)?pa(n,e):na(n,e)}function zT(n,e,t){if(e instanceof ca)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof ha)return function(s,i,o){return o.filter(B=>{const u=Ks(Z(i.condition).evaluate(s,B));return u!==void 0&&Pt(u,ft)})}(n,e,t);if(e instanceof la)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof yu)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof Tu)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Tr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Ir)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof rn)return function(s,i,o){const B=i.orderings.map(u=>({Os:Z(u.expr),direction:u.direction}));return[...o].sort((u,c)=>{for(const{Os:h,direction:C}of B){const p=Ks(h.evaluate(s,u)),w=Ks(h.evaluate(s,c)),R=Ct(p??Zr,w??Zr);if(R!==0)return C==="ascending"?R:-R}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function MB(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof rn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=Ks(Z(s.expr).evaluate({serializer:n.serializer},t)),o=Ks(Z(s.expr).evaluate({serializer:n.serializer},r)),B=Ct(i||Zr,o||Zr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function BB(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Ir)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.changes=new Pr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Us(r.mutation,s,_t.empty(),Te.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ie()){const s=Pn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Hr();return i.forEach((B,u)=>{o=o.insert(B,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ie()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,r,s){let i=ct();const o=Js(),B=function(){return Js()}();return t.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof Zn)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Us(h.mutation,c,h.mutation.getFieldMask(),Te.now())):o.set(c.key,_t.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>B.set(c,new WT(h,o.get(c)??null))),B))}recalculateAndSaveOverlays(e,t){const r=Js();let s=new Ae((o,B)=>o-B),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||_t.empty();h=B.applyToLocalView(c,h),r.set(u,h);const C=(s.get(B.batchId)||ie()).add(u);s=s.insert(B.batchId,C)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,h=u.value,C=gd();h.forEach(p=>{if(!i.has(p)){const w=td(t.get(p),r.get(p));w!==null&&C.set(p,w),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,C))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ue(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Xw(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(Pn());let B=oi,u=i;return o.next(c=>x.forEach(c,(h,C)=>(B<C.largestBatchId&&(B=C.largestBatchId),i.get(h)?x.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ie())).next(h=>({batchId:B,changes:pd(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Hr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,u=>{const c=function(C,p){return new Ii(p,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((C,p)=>{o=o.insert(C,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>na(t,B)))}getDocumentsMatchingPipeline(e,t,r,s){if(xn(t)==="collection_group"){const i=Nu(t);let o=Hr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,u=>{const c=function(C,p){const w=C.stages.map(R=>R instanceof la?new ca(p.canonicalString(),{}):R);return new nt(C.serializer,w)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(h=>{h.forEach((C,p)=>{o=o.insert(C,p)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,xn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let B=ie();for(const u of VB(t))B=B.add($.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new J("invalid-argument",`Invalid pipeline source to execute offline: ${Bn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>pa(t,B)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,$e.newInvalidDocument(B)))});let s=Hr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&Us(B.mutation,o,_t.empty(),Te.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(xn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,de.fromString(Ca(t)),r);case"collection_group":throw new J("invalid-argument",`Unexpected collection group pipeline: ${Bn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,VB(t).map(s=>$.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new J("invalid-argument",`Failed to get overlays for pipeline: ${Bn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.serializer=e,this.Ks=new Map,this.Ws=new Map}getBundleMetadata(e,t){return x.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:jT(s.bundledQuery),readTime:Qt(s.readTime)}}(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.overlays=new Ae($.comparator),this.Qs=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pn();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Pn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),x.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qs.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=Pn(),i=t.length+1,o=new $(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ae((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=Pn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=Pn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>B.set(c,h)),!(B.size()>=s)););return x.resolve(B)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qs.get(s.largestBatchId).delete(r.key);this.Qs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UT(t,r));let i=this.Qs.get(t);i===void 0&&(i=ie(),this.Qs.set(t,i)),this.Qs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.Gs=new xe(je.zs),this.js=new xe(je.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new je(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new je(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new $(new de([])),r=new je(t,e),s=new je(t,e+1),i=[];return this.js.forEachInRange([r,s],o=>{this.Ys(o),i.push(o.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new $(new de([])),r=new je(t,e),s=new je(t,e+1);let i=ie();return this.js.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new je(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return $.comparator(e.key,t.key)||oe(e.n_,t.n_)}static Hs(e,t){return oe(e.n_,t.n_)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Qr=1,this.r_=new xe(je.zs)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Qr;this.Qr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VT(i,t,r,s);this.mutationQueue.push(o);for(const B of s)this.r_=this.r_.add(new je(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?hu:this.Qr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],o=>{const B=this.i_(o.n_);i.push(B)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(oe);return t.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],B=>{r=r.add(B.n_)})}),x.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new je(new $(i),0);let B=new xe(oe);return this.r_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.n_)),!0)},o),x.resolve(this.__(B))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return x.forEach(t.mutations,s=>{const i=new je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new je(t,0),s=this.r_.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.a_=e,this.docs=function(){return new Ae($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$e.newInvalidDocument(s))}),x.resolve(r)}getAllEntries(e){let t=ct();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),x.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Ue(t)?(i=de.fromString(Ca(t)),o=h=>pa(t,h)):(i=t.path,o=h=>na(t,h));let B=ct();const u=new $(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:C}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||Ww(Qw(C),r)<=0||(s.has(C.key)||o(C))&&(B=B.insert(C.key,C.mutableCopy()))}return x.resolve(B)}getAllFromCollectionGroup(e,t,r,s){X(9500)}u_(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nA(this)}getSize(e){return x.resolve(this.size)}}class nA extends QT{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.persistence=e,this.c_=new Pr(t=>rp(t),sp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.l_=0,this.E_=new Lu,this.targetCount=0,this.h_=Kn.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),x.resolve()}Ss(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Kn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.Ss(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.Ss(t),x.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((o,B)=>{B.sequenceNumber<=t&&r.get(B.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.T_={},this.overlays={},this.P_=new oa(0),this.R_=!1,this.R_=!0,this.I_=new ZT,this.referenceDelegate=e(this),this.A_=new rA(this),this.indexManager=new JT,this.remoteDocumentCache=function(s){return new tA(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new HT(t),this.d_=new YT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new eA(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new sA(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return x.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class sA extends WI{constructor(e){super(),this.currentSequenceNumber=e}}class ku{constructor(e){this.persistence=e,this.g_=new Lu,this.y_=null}static w_(e){return new ku(e)}get b_(){if(this.y_)return this.y_;throw X(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),x.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.b_,r=>{const s=$.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}v_(e,t){return x.or([()=>x.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class xo{constructor(e,t){this.persistence=e,this.S_=new Pr(r=>MT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ty(this,t)}static w_(e,t){return new xo(e,t)}f_(){}m_(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return x.forEach(this.S_,(r,s)=>this.Fs(e,r,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,o=>this.Fs(e,o,t).next(B=>{B||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.S_.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.S_.set(t,e.currentSequenceNumber),x.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uo(e.data.value)),t}Fs(e,t,r){return x.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.S_.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(n,e){return $.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return hm()?8:$I(Ye())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.So(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new oA;return this.Do(e,t,o).next(B=>{if(i.result=B,this.po)return this.xo(e,t,o,B.size)})}).next(()=>i.result)}xo(e,t,r,s){return Ue(t)?x.resolve():r.documentReadCount<this.yo?(Gr()<=ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),x.resolve()):(Gr()<=ae.DEBUG&&q("QueryEngine","Query:",js(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(Gr()<=ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):x.resolve())}vo(e,t){if(Ue(t))return x.resolve(null);let r=t;if(Nh(r))return x.resolve(null);let s=zt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=NB(r,null,"F"),s=zt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=ie(...o);return this.bo.getDocuments(e,B).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Co(r,u);return this.Fo(r,h,B,c.readTime)?this.vo(e,NB(r,null,"F")):this.Oo(e,h,r,c)}))})))}So(e,t,r,s){return(Ue(t)?function(o){for(const B of o.stages){if(B instanceof Ir||B instanceof Wh)return!1;if(B instanceof ha){if(B.condition instanceof Jd&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof as&&B.condition._expr.params[0].fieldName===Ut)continue;return!1}}return!0}(t):Nh(t))||s.isEqual(ne.min())?x.resolve(null):this.bo.getDocuments(e,r).next(i=>{const o=this.Co(t,i);return this.Fo(t,o,r,s)?x.resolve(null):(Gr()<=ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$h(t)),this.Oo(e,o,t,zw(s,oi)).next(B=>B))})}Co(e,t){let r,s;return Ue(e)?(r=new xe(iA),s=i=>pa(e,i)):(r=new xe(pu(e)),s=i=>na(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Fo(e,t,r,s){if(Ue(e))return function(B){return B.stages.some(u=>u instanceof Ir||u instanceof Wh)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return Gr()<=ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",$h(t)),this.bo.getDocumentsMatchingQuery(e,t,Hn.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",BA=3e8;class uA{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new Ae(oe),this.Lo=new Pr(i=>rp(i),sp),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $T(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function cA(n,e,t,r){return new uA(n,e,t,r)}async function Bp(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],B=[];let u=ie();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({qo:c,removedBatchIds:o,addedBatchIds:B}))})})}function lA(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(B,u,c,h){const C=c.batch,p=C.keys();let w=x.resolve();return p.forEach(R=>{w=w.next(()=>h.getEntry(u,R)).next(L=>{const M=c.docVersions.get(R);Q(M!==null,48541),L.version.compareTo(M)<0&&(C.applyToRemoteDocument(L,c),L.isValidDocument()&&(L.setReadTime(c.commitVersion),h.addEntry(L)))})}),w.next(()=>B.mutationQueue.removeMutationBatch(u,C))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(B){let u=ie();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(u=u.add(B.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function up(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function hA(n,e){const t=re(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const B=[];e.targetChanges.forEach((h,C)=>{const p=s.get(C);if(!p)return;B.push(t.A_.removeMatchingKeys(i,h.removedDocuments,C).next(()=>t.A_.addMatchingKeys(i,h.addedDocuments,C)));let w=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(C)!==null?w=w.withResumeToken(Ve.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),s=s.insert(C,w),function(L,M,K){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=BA?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(p,w,h)&&B.push(t.A_.updateTargetData(i,w))});let u=ct(),c=ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(fA(i,o,e.documentUpdates).next(h=>{u=h.$o,c=h.Ko})),!r.isEqual(ne.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next(C=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));B.push(h)}return x.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.No=s,i))}function fA(n,e,t){let r=ie(),s=ie();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=ct();return t.forEach((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):q(Vu,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)}),{$o:o,Ko:s}})}function CA(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dA(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):t.A_.allocateTargetId(r).next(o=>(s=new sn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function GB(n,e,t){const r=re(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!os(o))throw o;q(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function Xh(n,e,t){const r=re(n);let s=ne.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const C=re(u),p=C.Lo.get(h);return p!==void 0?x.resolve(C.No.get(p)):C.A_.getTargetData(c,h)}(r,o,Ue(e)?e:zt(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(o,B.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(o,e,t?s:ne.min(),t?i:ie())).next(B=>(pA(r,B),{documents:B,Wo:i})))}function pA(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||ne.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(ln(t),this.Zo=!1):q("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="RemoteStore";class mA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Kn(1e3),this.ua=new Kn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(q(Yt,"Restarting streams for network reachability change."),await async function(u){const c=re(u);c.ca.add(4),await Ri(c),c.ha.set("Unknown"),c.ca.delete(4),await ga(c)}(this))})}),this.ha=new gA(r,s)}}async function ga(n){if(Nr(n))for(const e of n.la)await e(!0)}async function Ri(n){for(const e of n.la)await e(!1)}function UB(n,e){return n._a.get(e)||void 0}function cp(n,e){const t=re(n),r=UB(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(B,u){const c=UB(B,u);c!==void 0&&B.oa.delete(c);const h=function(p,w){return w%2!=0?p.ua.next():p.aa.next()}(B,u);return B._a.set(u,h),B.oa.set(h,u),h}(t,e.targetId);q(Yt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new sn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),Hu(t)?Uu(t):ls(t).Jt()&&Gu(t,i)}function Mu(n,e){const t=re(n),r=ls(t),s=UB(t,e);q(Yt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&lp(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Nr(t)&&t.ha.set("Unknown"))}function Gu(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void q(Yt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}ls(n).Tn(e)}function lp(n,e){n.Ta.H(e),ls(n).Pn(e)}function Uu(n){n.Ta=new lI({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ie()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),ls(n).start(),n.ha.Xo()}function Hu(n){return Nr(n)&&!ls(n).Ht()&&n.sa.size>0}function Nr(n){return re(n).ca.size===0}function hp(n){n.Ta=void 0}async function EA(n){n.ha.set("Online")}async function _A(n){n.sa.forEach((e,t)=>{Gu(n,e)})}async function DA(n,e){hp(n),Hu(n)?(n.ha.na(e),Uu(n)):n.ha.set("Unknown")}async function wA(n,e,t){if(n.ha.set("Online"),e instanceof Ed&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.sa.has(B)){const u=s.oa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(B)),s.sa.delete(B)}s.Ta.removeTarget(B)}}(n,e)}catch(r){q(Yt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vo(n,r)}else if(e instanceof lo?n.Ta.se(e):e instanceof md?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(ne.min()))try{const r=await up(n.localStore);t.compareTo(r)>=0&&await function(i,o){const B=i.Ta.de(o);B.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const C=i.sa.get(h);C&&i.sa.set(h,C.withResumeToken(c.resumeToken,o))}}),B.targetMismatches.forEach((c,h)=>{const C=i.sa.get(c);if(!C)return;i.sa.set(c,C.withResumeToken(Ve.EMPTY_BYTE_STRING,C.snapshotVersion)),lp(i,c);const p=new sn(C.target,c,h,C.sequenceNumber);Gu(i,p)});const u=function(h,C){const p=new Map;C.targetChanges.forEach((R,L)=>{const M=h.oa.get(L);M!==void 0&&p.set(M,R)});let w=new Ae(oe);return C.targetMismatches.forEach((R,L)=>{const M=h.oa.get(R);M!==void 0&&(w=w.insert(M,L))}),new yi(C.snapshotVersion,p,w,C.documentUpdates,C.augmentedDocumentUpdates,C.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){q(Yt,"Failed to raise snapshot:",r),await Vo(n,r)}}async function Vo(n,e,t){if(!os(e))throw e;n.ca.add(1),await Ri(n),n.ha.set("Offline"),t||(t=()=>up(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Yt,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await ga(n)})}function fp(n,e){return e().catch(t=>Vo(n,t,e))}async function ma(n){const e=re(n),t=zn(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:hu;for(;IA(e);)try{const s=await CA(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,yA(e,s)}catch(s){await Vo(e,s)}Cp(e)&&dp(e)}function IA(n){return Nr(n)&&n.ia.length<10}function yA(n,e){n.ia.push(e);const t=zn(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function Cp(n){return Nr(n)&&!zn(n).Ht()&&n.ia.length>0}function dp(n){zn(n).start()}async function TA(n){zn(n).dn()}async function AA(n){const e=zn(n);for(const t of n.ia)e.In(t.mutations)}async function RA(n,e,t){const r=n.ia.shift(),s=Fu.from(r,e,t);await fp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ma(n)}async function vA(n,e){e&&zn(n).Rn&&await async function(r,s){if(function(o){return rI(o)&&o!==k.ABORTED}(s.code)){const i=r.ia.shift();zn(r).Zt(),await fp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ma(r)}}(n,e),Cp(n)&&dp(n)}async function Zh(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),q(Yt,"RemoteStore received new credentials");const r=Nr(t);t.ca.add(3),await Ri(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await ga(t)}async function bA(n,e){const t=re(n);e?(t.ca.delete(2),await ga(t)):e||(t.ca.add(2),await Ri(t),t.ha.set("Unknown"))}function ls(n){return n.Pa||(n.Pa=function(t,r,s){const i=re(t);return i.mn(),new UI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:EA.bind(null,n),lt:_A.bind(null,n),ht:DA.bind(null,n),hn:wA.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),Hu(n)?Uu(n):n.ha.set("Unknown")):(await n.Pa.stop(),hp(n))})),n.Pa}function zn(n){return n.Ra||(n.Ra=function(t,r,s){const i=re(t);return i.mn(),new HI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:TA.bind(null,n),ht:vA.bind(null,n),An:AA.bind(null,n),Vn:RA.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await ma(n)):(await n.Ra.stop(),n.ia.length>0&&(q(Yt,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,B=new Ju(e,t,o,s,i);return B.start(r),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,e){if(ln("AsyncQueue",`${e}: ${n}`),os(n))return new J(k.UNAVAILABLE,`${e}: ${n}`);throw n}class ef{constructor(){this.activeTargetIds=BI()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PA{constructor(){this.du=new ef,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new ef,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function uB(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{static emptySet(e){return new Cr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Hr(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.mu=new Ae($.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):X(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ns{constructor(e,t,r,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new ns(e,t,Cr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.vu())}}class OA{constructor(){this.queries=nf(),this.onlineState="Unknown",this.Su=new Set}terminate(){(function(t,r){const s=re(t),i=s.queries;s.queries=nf(),i.forEach((o,B)=>{for(const u of B.wu)u.onError(r)})})(this,new J(k.ABORTED,"Firestore shutting down"))}}function nf(){return new Pr(n=>np(n),da)}async function Ku(n,e){const t=re(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.vu()&&(r=2):(i=new SA,r=e.vu()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=qu(o,`Initialization of query '${Ue(e.query)?Bn(e.query):js(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Qu(t)}async function zu(n,e){const t=re(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.vu()?0:1:!i.bu()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function NA(n,e){const t=re(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.wu)B.xu(s)&&(r=!0);o.yu=s}}r&&Qu(t)}function FA(n,e,t){const r=re(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function Qu(n){n.Su.forEach(e=>{e.next()})}var HB;(function(n){n.Default="default",n.Cache="cache"})(HB||(HB={}));class Wu{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}vu(){return this.options.source!==HB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.key=e}}class gp{constructor(e){this.key=e}}class LA{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=ie(),this.mutatedKeys=ie(),this.Hu=Ue(e)?MB(e):pu(e),this.Ju=new Cr(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new tf,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal((C,p)=>{const w=s.get(C),R=KT(this.query,p)?p:null,L=!!w&&this.mutatedKeys.has(w.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let K=!1;w&&R?w.data.isEqual(R.data)?L!==M&&(r.track({type:3,doc:R}),K=!0):this.tc(w,R)||(r.track({type:2,doc:R}),K=!0,(u&&this.Hu(R,u)>0||c&&this.Hu(R,c)<0)&&(B=!0)):!w&&R?(r.track({type:0,doc:R}),K=!0):w&&!R&&(r.track({type:1,doc:w}),K=!0,(u||c)&&(B=!0)),K&&(R?(o=o.add(R),i=M?i.add(C):i.delete(C)):(o=o.delete(C),i=i.delete(C)))});const h=this.nc(this.query);if(h)if(Ue(this.query)){const C=[];o.forEach(R=>C.push(R));const p=op(this.query,C);let w=new Cr(MB(this.query));for(const R of p)w=w.add(R);o.forEach(R=>{w.has(R.key)||(i=i.delete(R.key),r.track({type:1,doc:R}))}),o=w}else{const C=this.rc(this.query);for(;o.size>h;){const p=C==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}}return{Ju:o,Xu:r,Fo:B,mutatedKeys:i}}nc(e){var t;return Ue(e)?(t=BB(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(Ue(e)){const t=BB(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var r;if(Ue(e)){const s=(r=BB(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort((h,C)=>function(w,R){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{ye:M})}};return L(w)-L(R)}(h.type,C.type)||this.Hu(h.doc,C.doc)),this.sc(r),s=s??!1;const B=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,o.length!==0||c?{snapshot:new ns(this.query,e.Ju,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:B}:{oc:B}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new tf,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=ie(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new gp(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new pp(r))}),t}uc(e){this.Gu=e.Wo,this.ju=ie();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return ns.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const $u="SyncEngine";class kA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xA{constructor(e){this.key=e,this.lc=!1}}class VA{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new Pr(B=>np(B),da),this.Tc=new Map,this.Pc=new Set,this.Rc=new Ae($.comparator),this.Ic=new Map,this.Ac=new Lu,this.Vc={},this.dc=new Map,this.fc=Kn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function MA(n,e,t=!0){const r=Ip(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await mp(r,e,t,!0),s}async function GA(n,e){const t=Ip(n);await mp(t,e,!0,!1)}async function mp(n,e,t,r){const s=await dA(n.localStore,Ue(e)?e:zt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let B;return r&&(B=await UA(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&cp(n.remoteStore,s),B}async function UA(n,e,t,r,s){n.gc=(C,p,w)=>async function(L,M,K,te){let Be=M.view.Zu(K);Be.Fo&&(Be=await Xh(L.localStore,M.query,!1).then(({documents:A})=>M.view.Zu(A,Be)));const fe=te&&te.targetChanges.get(M.targetId),Re=te&&te.targetMismatches.get(M.targetId)!=null,Ee=M.view.applyChanges(Be,L.isPrimaryClient,fe,Re);return sf(L,M.targetId,Ee.oc),Ee.snapshot}(n,C,p,w);const i=await Xh(n.localStore,e,!0),o=new LA(e,i.Wo),B=o.Zu(i.documents),u=Ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=o.applyChanges(B,n.isPrimaryClient,u);sf(n,t,c.oc);const h=new kA(e,t,o);return n.hc.set(e,h),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),c.snapshot}async function HA(n,e,t){const r=re(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(o=>!da(o,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await GB(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Mu(r.remoteStore,s.targetId),jB(r,s.targetId)}).catch(is)):(jB(r,s.targetId),await GB(r.localStore,s.targetId,!0))}async function jA(n,e){const t=re(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Mu(t.remoteStore,r.targetId))}async function JA(n,e,t){const r=YA(n);try{const s=await function(o,B){const u=re(o),c=Te.now(),h=B.reduce((w,R)=>w.add(R.key),ie());let C,p;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=ct(),L=ie();return u.Uo.getEntries(w,h).next(M=>{R=M,R.forEach((K,te)=>{te.isValidDocument()||(L=L.add(K))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,R)).next(M=>{C=M;const K=[];for(const te of B){const Be=kw(te,C.get(te.key).overlayedDocument);Be!=null&&K.push(new Zn(te.key,Be,$C(Be.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,K,B)}).next(M=>{p=M;const K=M.applyToLocalDocumentSet(C,L);return u.documentOverlayCache.saveOverlays(w,M.batchId,K)})}).then(()=>({batchId:p.batchId,changes:pd(C)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,B,u){let c=o.Vc[o.currentUser.toKey()];c||(c=new Ae(oe)),c=c.insert(B,u),o.Vc[o.currentUser.toKey()]=c}(r,s.batchId,t),await vi(r,s.changes),await ma(r.remoteStore)}catch(s){const i=qu(s,"Failed to persist write");t.reject(i)}}async function Ep(n,e){const t=re(n);try{const r=await hA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ic.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?Q(o.lc,14607):s.removedDocuments.size>0&&(Q(o.lc,42227),o.lc=!1))}),await vi(t,r,e)}catch(r){await is(r)}}function rf(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,o)=>{const B=o.view.Du(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const u=re(o);u.onlineState=B;let c=!1;u.queries.forEach((h,C)=>{for(const p of C.wu)p.Du(B)&&(c=!0)}),c&&Qu(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qA(n,e,t){const r=re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let o=new Ae($.comparator);o=o.insert(i,$e.newNoDocument(i,ne.min()));const B=ie().add(i),u=new yi(ne.min(),new Map,new Ae(oe),o,ct(),B);await Ep(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),Yu(r)}else await GB(r.localStore,e,!1).then(()=>jB(r,e,t)).catch(is)}async function KA(n,e){const t=re(n),r=e.batch.batchId;try{const s=await lA(t.localStore,e);Dp(t,r,null),_p(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vi(t,s)}catch(s){await is(s)}}async function zA(n,e,t){const r=re(n);try{const s=await function(o,B){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,B).next(C=>(Q(C!==null,37113),h=C.keys(),u.mutationQueue.removeMutationBatch(c,C))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,B)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Dp(r,e,t),_p(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vi(r,s)}catch(s){await is(s)}}function _p(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function Dp(n,e,t){const r=re(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function jB(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||wp(n,r)})}function wp(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Mu(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),Yu(n))}function sf(n,e,t){for(const r of t)r instanceof pp?(n.Ac.addReference(r.key,e),QA(n,r)):r instanceof gp?(q($u,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||wp(n,r.key)):X(19791,{wc:r})}function QA(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(q($u,"New document in limbo: "+t),n.Pc.add(r),Yu(n))}function Yu(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new $(de.fromString(e)),r=n.fc.next();n.Ic.set(r,new xA(t)),n.Rc=n.Rc.insert(t,r),cp(n.remoteStore,new sn(zt(ta(t.path)),r,"TargetPurposeLimboResolution",oa.yn))}}async function vi(n,e,t){const r=re(n),s=[],i=[],o=[];r.hc.isEmpty()||(r.hc.forEach((B,u)=>{o.push(r.gc(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const C=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,C?"current":"not-current")}if(c){s.push(c);const C=xu.fo(u.targetId,c);i.push(C)}}))}),await Promise.all(o),r.Ec.hn(s),await async function(u,c){const h=re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>x.forEach(c,p=>x.forEach(p.Ao,w=>h.persistence.referenceDelegate.addReference(C,p.targetId,w)).next(()=>x.forEach(p.Vo,w=>h.persistence.referenceDelegate.removeReference(C,p.targetId,w)))))}catch(C){if(!os(C))throw C;q(Vu,"Failed to update sequence numbers: "+C)}for(const C of c){const p=C.targetId;if(!C.fromCache){const w=h.No.get(p),R=w.snapshotVersion,L=w.withLastLimboFreeSnapshotVersion(R);h.No=h.No.insert(p,L)}}}(r.localStore,i))}async function WA(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){q($u,"User change. New user:",e.toKey());const r=await Bp(t.localStore,e);t.currentUser=e,function(i,o){i.dc.forEach(B=>{B.forEach(u=>{u.reject(new J(k.CANCELLED,o))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vi(t,r.qo)}}function $A(n,e){const t=re(n),r=t.Ic.get(e);if(r&&r.lc)return ie().add(r.key);{let s=ie();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const B=t.hc.get(o);s=s.unionWith(B.view.Yu)}return s}}function Ip(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$A.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qA.bind(null,e),e.Ec.hn=NA.bind(null,e.eventManager),e.Ec.yc=FA.bind(null,e.eventManager),e}function YA(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zA.bind(null,e),e}class Mo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ra(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Sc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return cA(this.persistence,new aA,e.initialUser,this.serializer)}Sc(e){return new ap(ku.w_,this.serializer)}vc(e){return new PA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mo.provider={build:()=>new Mo};class XA extends Mo{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){Q(this.persistence.referenceDelegate instanceof xo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZI(r,e.asyncQueue,t)}Sc(e){const t=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new ap(r=>xo.w_(r,t),this.serializer)}}class JB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WA.bind(null,this.syncEngine),await bA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OA}()}createDatastore(e){const t=ra(e.databaseInfo.databaseId),r=GI(e.databaseInfo);return qI(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,B){return new mA(r,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>rf(this.syncEngine,t,0),function(){return Uh.Je()?new Uh:new kI}())}createSyncEngine(e,t){return function(s,i,o,B,u,c,h){const C=new VA(s,i,o,B,u,c);return h&&(C.mc=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=re(s);q(Yt,"RemoteStore shutting down."),i.ca.add(5),await Ri(i),i.Ea.shutdown(),i.ha.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}JB.provider={build:()=>new JB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="FirestoreClient";class ZA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=We.UNAUTHENTICATED,this.clientId=lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Qn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Qn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cB(n,e){n.asyncQueue.verifyOperationInProgress(),q(Qn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function of(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eR(n);q(Qn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Zh(e.remoteStore,s)),n._onlineComponents=e}async function eR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Qn,"Using user provided OfflineComponentProvider");try{await cB(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;kt("Error using user provided cache. Falling back to memory cache: "+t),await cB(n,new Mo)}}else q(Qn,"Using default OfflineComponentProvider"),await cB(n,new XA(void 0));return n._offlineComponents}async function yp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Qn,"Using user provided OnlineComponentProvider"),await of(n,n._uninitializedComponentsProvider._online)):(q(Qn,"Using default OnlineComponentProvider"),await of(n,new JB))),n._onlineComponents}function tR(n){return yp(n).then(e=>e.syncEngine)}async function Go(n){const e=await yp(n),t=e.eventManager;return t.onListen=MA.bind(null,e.syncEngine),t.onUnlisten=HA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jA.bind(null,e.syncEngine),t}function nR(n,e,t,r){const s=new ju(r),i=new Wu(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Ku(await Go(n),i)),()=>{s.Aa(),n.asyncQueue.enqueueAndForget(async()=>zu(await Go(n),i))}}function rR(n,e,t={}){const r=new an;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,B,u,c){const h=new ju({next:p=>{h.Aa(),o.enqueueAndForget(()=>zu(i,C));const w=p.docs.has(B);!w&&p.fromCache?c.reject(new J(k.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&p.fromCache&&u&&u.source==="server"?c.reject(new J(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),C=new Wu(ta(B.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Ku(i,C)}(await Go(n),n.asyncQueue,e,t,r)),r.promise}function sR(n,e,t={}){const r=new an;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,B,u,c){const h=new ju({next:p=>{h.Aa(),o.enqueueAndForget(()=>zu(i,C)),p.fromCache&&u.source==="server"?c.reject(new J(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),C=new Wu(B instanceof qs?xT(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Ku(i,C)}(await Go(n),n.asyncQueue,e,t,r)),r.promise}function iR(n,e){const t=new an;return n.asyncQueue.enqueueAndForget(async()=>JA(await tR(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="AsyncQueue";class Bf{constructor(e=Promise.resolve()){this.Wc=[],this.Qc=!1,this.Gc=[],this.zc=null,this.jc=!1,this.Hc=!1,this.Jc=[],this.jt=new Sd(this,"async_queue_retry"),this.Yc=()=>{const r=uB();r&&q(af,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Zc=e;const t=uB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.el(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=uB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const t=new an;return this.el(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wc.push(e),this.tl()))}async tl(){if(this.Wc.length!==0){try{await this.Wc[0](),this.Wc.shift(),this.jt.reset()}catch(e){if(!os(e))throw e;q(af,"Operation failed with retryable error: "+e)}this.Wc.length>0&&this.jt.Ut(()=>this.tl())}}el(e){const t=this.Zc.then(()=>(this.jc=!0,e().catch(r=>{throw this.zc=r,this.jc=!1,ln("INTERNAL UNHANDLED ERROR: ",uf(r)),r}).then(r=>(this.jc=!1,r))));return this.Zc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const s=Ju.createAndSchedule(this,e,t,r,i=>this.nl(i));return this.Gc.push(s),s}Xc(){this.zc&&X(47125,{rl:uf(this.zc)})}verifyOperationInProgress(){}async il(){let e;do e=this.Zc,await e;while(e!==this.Zc)}sl(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}_l(e){return this.il().then(()=>{this.Gc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.il()})}ol(e){this.Jc.push(e)}nl(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function uf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Wn extends aa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Bf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bf(e),this._firestoreClient=void 0,await e}}}function oR(n,e){const t=typeof n=="object"?n:qo(),r=typeof n=="string"?n:Ao,s=$n(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ff("firestore");i&&ny(s,...i)}return s}function Ea(n){if(n._terminated)throw new J(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aR(n),n._firestoreClient}function aR(n){var r,s,i,o;const e=n._freezeSettings(),t=zI(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ZA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{convertValue(e,t="none"){switch(Me(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Xn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ei].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ve(o.doubleValue));return new ht(t)}convertGeoPoint(e){return new Wt(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xr(e));default:return null}}convertTimestamp(e){const t=Mn(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=de.fromString(e);Q(Ad(r),9688,{name:e});const s=new Xs(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends BR{constructor(e){super(),this.firestore=e}convertBytes(e){return new vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}const lf="@firebase/firestore",hf="4.17.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tp=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(wr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},uR=class extends Tp{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zu{}class cR extends Zu{}function o0(n,e,...t){let r=[];e instanceof Zu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof ec).length,B=i.filter(u=>u instanceof _a).length;if(o>1||o>0&&B>0)throw new J(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class _a extends cR{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new _a(e,t,r)}_apply(e){const t=this._parse(e);return Rp(e._query,t),new Sr(e.firestore,e.converter,OB(e._query,t))}_parse(e){const t=Ba(e.firestore);return function(i,o,B,u,c,h,C){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new J(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Cf(C,h);const R=[];for(const L of C)R.push(ff(u,i,L));p={arrayValue:{values:R}}}else p=ff(u,i,C)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Cf(C,h),p=uy(B,o,C,h==="in"||h==="not-in");return Le.create(c,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function a0(n,e,t){const r=e,s=wr("where",n);return _a._create(s,r,t)}class ec extends Zu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ec(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:xt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const B=i.getFlattenedFilters();for(const u of B)Rp(o,u),o=OB(o,u)}(e._query,t),new Sr(e.firestore,e.converter,OB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ff(n,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new J(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fd(e)&&t.indexOf("/")!==-1)throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(de.fromString(t));if(!$.isDocumentKey(r))throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Th(n,new $(r))}if(t instanceof be)return Th(n,t._key);throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wo(t)}.`)}function Cf(n,e){if(!Array.isArray(n)||n.length===0)throw new J(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rp(n,e){const t=function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new J(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function vp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dr extends Tp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=dr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}dr._jsonSchemaVersion="firestore/documentSnapshot/1.0",dr._jsonSchema={type:ke("string",dr._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Co extends dr{data(e={}){return super.data(e)}}class pr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Co(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{Ue(s._snapshot.query)?MB(s._snapshot.query):pu(s.query._query);const u=new Co(s._firestore,s._userDataWriter,B.doc.key,B.doc,new xs(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const u=new Co(s._firestore,s._userDataWriter,B.doc.key,B.doc,new xs(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:lR(B.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr._jsonSchemaVersion="firestore/querySnapshot/1.0",pr._jsonSchema={type:ke("string",pr._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n){n=yt(n,be);const e=yt(n.firestore,Wn),t=Ea(e);return rR(t,n._key).then(r=>bp(e,n,r))}function u0(n){n=yt(n,Sr);const e=yt(n.firestore,Wn),t=Ea(e),r=new Xu(e);return Ap(n._query),sR(t,n._query).then(s=>new pr(e,r,n,s))}function c0(n,e,t){n=yt(n,be);const r=yt(n.firestore,Wn),s=vp(n.converter,e),i=Ba(r);return tc(r,[xd(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Nt.none())])}function l0(n,e,t,...r){n=yt(n,be);const s=yt(n.firestore,Wn),i=Ba(s);let o;return o=typeof(e=De(e))=="string"||e instanceof sa?By(i,"updateDoc",n._key,e,t,r):ay(i,"updateDoc",n._key,e),tc(s,[o.toMutation(n._key,Nt.exists(!0))])}function h0(n,e){const t=yt(n.firestore,Wn),r=ry(n),s=vp(n.converter,e),i=Ba(n.firestore);return tc(t,[xd(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function f0(n,...e){var c,h,C;n=De(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||cf(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(cf(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(C=p.complete)==null?void 0:C.bind(p)}let i,o,B;if(n instanceof be)o=yt(n.firestore,Wn),B=ta(n._key.path),i={next:p=>{e[r]&&e[r](bp(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=yt(n,Sr);o=yt(p.firestore,Wn),B=p._query;const w=new Xu(o);i={next:R=>{e[r]&&e[r](new pr(o,w,p,R))},error:e[r+1],complete:e[r+2]},Ap(n._query)}const u=Ea(o);return nR(u,B,s,i)}function tc(n,e){const t=Ea(n);return iR(t,e)}function bp(n,e,t){const r=t.docs.get(e._key),s=new Xu(n);return new dr(n,s,e._key,r,new xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){pw(br),Ft(new bt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),B=new Wn(new OI(r.getProvider("auth-internal")),new LI(o,r.getProvider("app-check-internal")),Tw(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),lt(lf,hf,e),lt(lf,hf,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebasestorage.googleapis.com",Sp="storageBucket",hR=2*60*1e3,fR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends St{constructor(e,t,r=0){super(lB(e),`Firebase Storage: ${t} (${lB(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lB(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function lB(n){return"storage/"+n}function nc(){const n="An unknown error occurred, please check the error payload for server response.";return new Oe(Se.UNKNOWN,n)}function CR(n){return new Oe(Se.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function dR(n){return new Oe(Se.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pR(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Se.UNAUTHENTICATED,n)}function gR(){return new Oe(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mR(n){return new Oe(Se.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ER(){return new Oe(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _R(){return new Oe(Se.CANCELED,"User canceled the upload/download.")}function DR(n){return new Oe(Se.INVALID_URL,"Invalid URL '"+n+"'.")}function wR(n){return new Oe(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function IR(){return new Oe(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sp+"' property when initializing the app?")}function yR(){return new Oe(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TR(){return new Oe(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function AR(n){return new Oe(Se.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qB(n){return new Oe(Se.INVALID_ARGUMENT,n)}function Op(){return new Oe(Se.APP_DELETED,"The Firebase app was deleted.")}function RR(n){return new Oe(Se.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(n,e){return new Oe(Se.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ss(n){throw new Oe(Se.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=wt.makeFromUrl(e,t)}catch{return new wt(e,"")}if(r.path==="")return r;throw wR(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const o="(/(.*))?$",B=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(fe){fe.path_=decodeURIComponent(fe.path)}const h="v[A-Za-z0-9_]+",C=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",w=new RegExp(`^https?://${C}/${h}/b/${s}/o${p}`,"i"),R={bucket:1,path:3},L=t===Pp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",K=new RegExp(`^https?://${L}/${s}/${M}`,"i"),Be=[{regex:B,indices:u,postModify:i},{regex:w,indices:R,postModify:c},{regex:K,indices:{bucket:1,path:2},postModify:c}];for(let fe=0;fe<Be.length;fe++){const Re=Be[fe],Ee=Re.regex.exec(e);if(Ee){const A=Ee[Re.indices.bucket];let E=Ee[Re.indices.path];E||(E=""),r=new wt(A,E),Re.postModify(r);break}}if(r==null)throw DR(e);return r}}class vR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n,e,t){let r=1,s=null,i=null,o=!1,B=0;function u(){return B===2}let c=!1;function h(...M){c||(c=!0,e.apply(null,M))}function C(M){s=setTimeout(()=>{s=null,n(w,u())},M)}function p(){i&&clearTimeout(i)}function w(M,...K){if(c){p();return}if(M){p(),h.call(null,M,...K);return}if(u()||o){p(),h.call(null,M,...K);return}r<64&&(r*=2);let Be;B===1?(B=2,Be=0):Be=(r+Math.random())*1e3,C(Be)}let R=!1;function L(M){R||(R=!0,p(),!c&&(s!==null?(M||(B=2),clearTimeout(s),C(0)):M||(B=1)))}return C(0),i=setTimeout(()=>{o=!0,L(!0)},t),L}function PR(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){return n!==void 0}function OR(n){return typeof n=="object"&&!Array.isArray(n)}function rc(n){return typeof n=="string"||n instanceof String}function df(n){return sc()&&n instanceof Blob}function sc(){return typeof Blob<"u"}function pf(n,e,t,r){if(r<e)throw qB(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw qB(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Np(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var gr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gr||(gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t,r,s,i,o,B,u,c,h,C,p=!0,w=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=B,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=C,this.retry=p,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,L)=>{this.resolve_=R,this.reject_=L,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new no(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=B=>{const u=B.loaded,c=B.lengthComputable?B.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const B=i.getErrorCode()===gr.NO_ERROR,u=i.getStatus();if(!B||NR(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===gr.ABORT;r(!1,new no(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new no(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,B=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(B,B.getResponse());SR(u)?i(u):i()}catch(u){o(u)}else if(B!==null){const u=nc();u.serverResponse=B.getErrorText(),this.errorCallback_?o(this.errorCallback_(B,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Op():_R();o(u)}else{const u=ER();o(u)}};this.canceled_?t(!1,new no(!1,null,!0)):this.backoffId_=bR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class no{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function LR(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function kR(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xR(n,e){e&&(n["X-Firebase-GMPID"]=e)}function VR(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function MR(n,e,t,r,s,i,o=!0,B=!1){const u=Np(n.urlParams),c=n.url+u,h=Object.assign({},n.headers);return xR(h,e),LR(h,t),kR(h,i),VR(h,r),new FR(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,B)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UR(...n){const e=GR();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(sc())return new Blob(n);throw new Oe(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HR(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n){if(typeof atob>"u")throw AR("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hB{constructor(e,t){this.data=e,this.contentType=t||null}}function JR(n,e){switch(n){case jt.RAW:return new hB(Fp(e));case jt.BASE64:case jt.BASE64URL:return new hB(Lp(n,e));case jt.DATA_URL:return new hB(KR(e),zR(e))}throw nc()}function Fp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qR(n){let e;try{e=decodeURIComponent(n)}catch{throw zs(jt.DATA_URL,"Malformed data URL.")}return Fp(e)}function Lp(n,e){switch(n){case jt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=jR(e)}catch(s){throw s.message.includes("polyfill")?s:zs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class kp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw zs(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=QR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KR(n){const e=new kp(n);return e.base64?Lp(jt.BASE64,e.rest):qR(e.rest)}function zR(n){return new kp(n).contentType}function QR(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){let r=0,s="";df(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(df(this.data_)){const r=this.data_,s=HR(r,e,t);return s===null?null:new Sn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Sn(r,!0)}}static getBlob(...e){if(sc()){const t=e.map(r=>r instanceof Sn?r.data_:r);return new Sn(UR.apply(null,t))}else{const t=e.map(o=>rc(o)?JR(jt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let B=0;B<o.length;B++)s[i++]=o[B]}),new Sn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n){let e;try{e=JSON.parse(n)}catch{return null}return OR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $R(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Vp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n,e){return e}class tt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||YR}}let ro=null;function XR(n){return!rc(n)||n.length<2?n:Vp(n)}function Mp(){if(ro)return ro;const n=[];n.push(new tt("bucket")),n.push(new tt("generation")),n.push(new tt("metageneration")),n.push(new tt("name","fullPath",!0));function e(i,o){return XR(o)}const t=new tt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new tt("size");return s.xform=r,n.push(s),n.push(new tt("timeCreated")),n.push(new tt("updated")),n.push(new tt("md5Hash",null,!0)),n.push(new tt("cacheControl",null,!0)),n.push(new tt("contentDisposition",null,!0)),n.push(new tt("contentEncoding",null,!0)),n.push(new tt("contentLanguage",null,!0)),n.push(new tt("contentType",null,!0)),n.push(new tt("metadata","customMetadata",!0)),ro=n,ro}function ZR(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function ev(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return ZR(r,n),r}function Gp(n,e,t){const r=xp(e);return r===null?null:ev(n,r,t)}function tv(n,e,t,r){const s=xp(e);if(s===null||!rc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=n.bucket,C=n.fullPath,p="/b/"+o(h)+"/o/"+o(C),w=ic(p,t,r),R=Np({alt:"media",token:c});return w+R})[0]}function nv(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Up{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){if(!n)throw nc()}function rv(n,e){function t(r,s){const i=Gp(n,s,e);return Hp(i!==null),i}return t}function sv(n,e){function t(r,s){const i=Gp(n,s,e);return Hp(i!==null),tv(i,s,n.host,n._protocol)}return t}function jp(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=gR():s=pR():t.getStatus()===402?s=dR(n.bucket):t.getStatus()===403?s=mR(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function iv(n){const e=jp(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=CR(n.path)),i.serverResponse=s.serverResponse,i}return t}function ov(n,e,t){const r=e.fullServerUrl(),s=ic(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,B=new Up(s,i,sv(n,t),o);return B.errorHandler=iv(e),B}function av(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Bv(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=av(null,e)),r}function uv(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function B(){let Be="";for(let fe=0;fe<2;fe++)Be=Be+Math.random().toString().slice(2);return Be}const u=B();o["Content-Type"]="multipart/related; boundary="+u;const c=Bv(e,r,s),h=nv(c,t),C="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",w=Sn.getBlob(C,r,p);if(w===null)throw yR();const R={name:c.fullPath},L=ic(i,n.host,n._protocol),M="POST",K=n.maxUploadRetryTime,te=new Up(L,M,rv(n,t),K);return te.urlParams=R,te.headers=o,te.body=w.uploadData(),te.errorHandler=jp(e),te}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Ss("cannot .send() more than once");if(vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lv extends cv{initXhr(){this.xhr_.responseType="text"}}function Jp(){return new lv}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this._service=e,t instanceof wt?this._location=t:this._location=wt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yr(e,t)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vp(this._location.path)}get storage(){return this._service}get parent(){const e=WR(this._location.path);if(e===null)return null;const t=new wt(this._location.bucket,e);return new yr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RR(e)}}function hv(n,e,t){n._throwIfRoot("uploadBytes");const r=uv(n.storage,n._location,Mp(),new Sn(e,!0),t);return n.storage.makeRequestWithTokens(r,Jp).then(s=>({metadata:s,ref:n}))}function fv(n){n._throwIfRoot("getDownloadURL");const e=ov(n.storage,n._location,Mp());return n.storage.makeRequestWithTokens(e,Jp).then(t=>{if(t===null)throw TR();return t})}function Cv(n,e){const t=$R(n._location.path,e),r=new wt(n._location.bucket,t);return new yr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){return/^[A-Za-z]+:\/\//.test(n)}function pv(n,e){return new yr(n,e)}function qp(n,e){if(n instanceof oc){const t=n;if(t._bucket==null)throw IR();const r=new yr(t,t._bucket);return e!=null?qp(r,e):r}else return e!==void 0?Cv(n,e):n}function gv(n,e){if(e&&dv(e)){if(n instanceof oc)return pv(n,e);throw qB("To use ref(service, url), the first argument must be a Storage instance.")}else return qp(n,e)}function gf(n,e){const t=e==null?void 0:e[Sp];return t==null?null:wt.makeFromBucketSpec(t,n)}function mv(n,e,t,r={}){n.host=`${e}:${t}`;const s=vr(e);s&&YB(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Vf(i,n.app.options.projectId))}class oc{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Pp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hR,this._maxUploadRetryTime=fR,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=gf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=gf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new vR(Op());{const o=MR(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const mf="@firebase/storage",Ef="0.14.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="storage";function C0(n,e,t){return n=De(n),hv(n,e,t)}function d0(n){return n=De(n),fv(n)}function p0(n,e){return n=De(n),gv(n,e)}function Ev(n=qo(),e){n=De(n);const r=$n(n,Kp).getImmediate({identifier:e}),s=Ff("storage");return s&&_v(r,...s),r}function _v(n,e,t,r={}){mv(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new oc(t,r,s,e,br)}function wv(){Ft(new bt(Kp,Dv,"PUBLIC").setMultipleInstances(!0)),lt(mf,Ef,""),lt(mf,Ef,"esm2020")}wv();var Iv="firebase",yv="12.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Iv,yv,"app");const zp="@firebase/installations",ac="0.6.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=1e4,Wp=`w:${ac}`,$p="FIS_v2",Tv="https://firebaseinstallations.googleapis.com/v1",Av=60*60*1e3,Rv="installations",vv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tr=new Rr(Rv,vv,bv);function Yp(n){return n instanceof St&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp({projectId:n}){return`${Tv}/projects/${n}/installations`}function Zp(n){return{token:n.token,requestStatus:2,expiresIn:Sv(n.expiresIn),creationTime:Date.now()}}async function eg(n,e){const r=(await e.json()).error;return Tr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tg({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Pv(n,{refreshToken:e}){const t=tg(n);return t.append("Authorization",Ov(e)),t}async function ng(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Sv(n){return Number(n.replace("s","000"))}function Ov(n){return`${$p} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Xp(n),s=tg(n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:$p,appId:n.appId,sdkVersion:Wp},B={method:"POST",headers:s,body:JSON.stringify(o)},u=await ng(()=>fetch(r,B));if(u.ok){const c=await u.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Zp(c.authToken)}}else throw await eg("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=/^[cdef][\w-]{21}$/,KB="";function kv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=xv(n);return Lv.test(t)?t:KB}catch{return KB}}function xv(n){return Fv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Map;function ig(n,e){const t=Da(n);og(t,e),Vv(t,e)}function og(n,e){const t=sg.get(n);if(t)for(const r of t)r(e)}function Vv(n,e){const t=Mv();t&&t.postMessage({key:n,fid:e}),Gv()}let lr=null;function Mv(){return!lr&&"BroadcastChannel"in self&&(lr=new BroadcastChannel("[Firebase] FID Change"),lr.onmessage=n=>{og(n.data.key,n.data.fid)}),lr}function Gv(){sg.size===0&&lr&&(lr.close(),lr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="firebase-installations-database",Hv=1,Ar="firebase-installations-store";let fB=null;function Bc(){return fB||(fB=Hf(Uv,Hv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ar)}}})),fB}async function Uo(n,e){const t=Da(n),s=(await Bc()).transaction(Ar,"readwrite"),i=s.objectStore(Ar),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&ig(n,e.fid),e}async function ag(n){const e=Da(n),r=(await Bc()).transaction(Ar,"readwrite");await r.objectStore(Ar).delete(e),await r.done}async function wa(n,e){const t=Da(n),s=(await Bc()).transaction(Ar,"readwrite"),i=s.objectStore(Ar),o=await i.get(t),B=e(o);return B===void 0?await i.delete(t):await i.put(B,t),await s.done,B&&(!o||o.fid!==B.fid)&&ig(n,B.fid),B}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(n){let e;const t=await wa(n.appConfig,r=>{const s=jv(r),i=Jv(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===KB?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function jv(n){const e=n||{fid:kv(),registrationStatus:0};return Bg(e)}function Jv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Tr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qv(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Kv(n)}:{installationEntry:e}}async function qv(n,e){try{const t=await Nv(n,e);return Uo(n.appConfig,t)}catch(t){throw Yp(t)&&t.customData.serverCode===409?await ag(n.appConfig):await Uo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Kv(n){let e=await _f(n.appConfig);for(;e.registrationStatus===1;)await rg(100),e=await _f(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await uc(n);return r||t}return e}function _f(n){return wa(n,e=>{if(!e)throw Tr.create("installation-not-found");return Bg(e)})}function Bg(n){return zv(n)?{fid:n.fid,registrationStatus:0}:n}function zv(n){return n.registrationStatus===1&&n.registrationTime+Qp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv({appConfig:n,heartbeatServiceProvider:e},t){const r=Wv(n,t),s=Pv(n,t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Wp,appId:n.appId}},B={method:"POST",headers:s,body:JSON.stringify(o)},u=await ng(()=>fetch(r,B));if(u.ok){const c=await u.json();return Zp(c)}else throw await eg("Generate Auth Token",u)}function Wv(n,{fid:e}){return`${Xp(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n,e=!1){let t;const r=await wa(n.appConfig,i=>{if(!ug(i))throw Tr.create("not-registered");const o=i.authToken;if(!e&&Xv(o))return i;if(o.requestStatus===1)return t=$v(n,e),i;{if(!navigator.onLine)throw Tr.create("app-offline");const B=eb(i);return t=Yv(n,B),B}});return t?await t:r.authToken}async function $v(n,e){let t=await Df(n.appConfig);for(;t.authToken.requestStatus===1;)await rg(100),t=await Df(n.appConfig);const r=t.authToken;return r.requestStatus===0?cc(n,e):r}function Df(n){return wa(n,e=>{if(!ug(e))throw Tr.create("not-registered");const t=e.authToken;return tb(t)?{...e,authToken:{requestStatus:0}}:e})}async function Yv(n,e){try{const t=await Qv(n,e),r={...e,authToken:t};return await Uo(n.appConfig,r),t}catch(t){if(Yp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ag(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Uo(n.appConfig,r)}throw t}}function ug(n){return n!==void 0&&n.registrationStatus===2}function Xv(n){return n.requestStatus===2&&!Zv(n)}function Zv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Av}function eb(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function tb(n){return n.requestStatus===1&&n.requestTime+Qp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(n){const e=n,{installationEntry:t,registrationPromise:r}=await uc(e);return r?r.catch(console.error):cc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(n,e=!1){const t=n;return await sb(t),(await cc(t,e)).token}async function sb(n){const{registrationPromise:e}=await uc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n){if(!n||!n.options)throw CB("App Configuration");if(!n.name)throw CB("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw CB(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function CB(n){return Tr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="installations",ob="installations-internal",ab=n=>{const e=n.getProvider("app").getImmediate(),t=ib(e),r=$n(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Bb=n=>{const e=n.getProvider("app").getImmediate(),t=$n(e,cg).getImmediate();return{getId:()=>nb(t),getToken:s=>rb(t,s)}};function ub(){Ft(new bt(cg,ab,"PUBLIC")),Ft(new bt(ob,Bb,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ub();lt(zp,ac);lt(zp,ac,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="analytics",cb="firebase_id",lb="origin",hb=60*1e3,fb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Jo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new Rr("analytics","Analytics",Cb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){if(!n.startsWith(lc)){const e=Tt.create("invalid-gtag-resource",{gtagURL:n});return it.warn(e.message),""}return n}function lg(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function pb(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function gb(n,e){const t=pb("firebase-js-sdk-policy",{createScriptURL:db}),r=document.createElement("script"),s=`${lc}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function mb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Eb(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await lg(t)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(B){it.error(B)}n("config",s,i)}async function _b(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const B=await lg(t);for(const u of o){const c=B.find(C=>C.measurementId===u),h=c&&e[c.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){it.error(i)}}function Db(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[B,u]=o;await _b(n,e,t,B,u)}else if(i==="config"){const[B,u]=o;await Eb(n,e,t,r,B,u)}else if(i==="consent"){const[B,u]=o;n("consent",B,u)}else if(i==="get"){const[B,u,c]=o;n("get",B,u,c)}else if(i==="set"){const[B]=o;n("set",B)}else n(i,...o)}catch(B){it.error(B)}}return s}function wb(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Db(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Ib(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(lc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=30,Tb=1e3;class Ab{constructor(e={},t=Tb){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hg=new Ab;function Rb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function vb(n){var o;const{appId:e,apiKey:t}=n,r={method:"GET",headers:Rb(t)},s=fb.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let B="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(B=u.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:B})}return i.json()}async function bb(n,e=hg,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Tt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},B=new Ob;return setTimeout(async()=>{B.abort()},hb),fg({appId:r,apiKey:s,measurementId:i},o,B,e)}async function fg(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=hg){var B;const{appId:i,measurementId:o}=n;try{await Pb(r,e)}catch(u){if(o)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await vb(n);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!Sb(c)){if(s.deleteThrottleMetadata(i),o)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const h=Number((B=c==null?void 0:c.customData)==null?void 0:B.httpStatus)===503?pl(t,s.intervalMillis,yb):pl(t,s.intervalMillis),C={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return s.setThrottleMetadata(i,C),it.debug(`Calling attemptFetch again in ${h} millis`),fg(n,C,r,s)}}function Pb(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Sb(n){if(!(n instanceof St)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ob{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Nb(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o={...r,send_to:i};n("event",t,o)}}async function Fb(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(){if(WB())try{await $B()}catch(n){return it.warn(Tt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return it.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kb(n,e,t,r,s,i,o){const B=bb(n);B.then(p=>{t[p.measurementId]=p.appId,n.options.measurementId&&p.measurementId!==n.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>it.error(p)),e.push(B);const u=Lb().then(p=>{if(p)return r.getId()}),[c,h]=await Promise.all([B,u]);Ib(i)||gb(i,c.measurementId),s("js",new Date);const C=(o==null?void 0:o.config)??{};return C[lb]="firebase",C.update=!0,h!=null&&(C[cb]=h),s("config",c.measurementId,C),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.app=e}_delete(){return delete $r[this.app.options.appId],Promise.resolve()}}let $r={},wf=[];const If={};let dB="dataLayer",Vb="gtag",yf,hc,Tf=!1;function Mb(){const n=[];if(QB()&&n.push("This is a browser extension environment."),Mf()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Tt.create("invalid-analytics-context",{errorInfo:e});it.warn(t.message)}}function Gb(n,e,t){Mb();const r=n.options.appId;if(!r)throw Tt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if($r[r]!=null)throw Tt.create("already-exists",{id:r});if(!Tf){mb(dB);const{wrappedGtag:i,gtagCore:o}=wb($r,wf,If,dB,Vb);hc=i,yf=o,Tf=!0}return $r[r]=kb(n,wf,If,e,yf,dB,t),new xb(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(n=qo()){n=De(n);const e=$n(n,Ho);return e.isInitialized()?e.getImmediate():Hb(n)}function Hb(n,e={}){const t=$n(n,Ho);if(t.isInitialized()){const s=t.getImmediate();if(Vn(e,t.getOptions()))return s;throw Tt.create("already-initialized")}return t.initialize({options:e})}async function jb(){if(QB()||!Mf()||!WB())return!1;try{return await $B()}catch{return!1}}function Jb(n,e,t){n=De(n),Fb(hc,$r[n.app.options.appId],e,t).catch(r=>it.error(r))}function qb(n,e,t,r){n=De(n),Nb(hc,$r[n.app.options.appId],e,t,r).catch(s=>it.error(s))}const Af="@firebase/analytics",Rf="0.10.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(){Ft(new bt(Ho,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Gb(r,s,t)},"PUBLIC")),Ft(new bt("analytics-internal",n,"PRIVATE")),lt(Af,Rf),lt(Af,Rf,"esm2020");function n(e){try{const t=e.getProvider(Ho).getImmediate();return{logEvent:(r,s,i)=>qb(t,r,s,i),setUserProperties:(r,s)=>Jb(t,r,s)}}catch(t){throw Tt.create("interop-component-reg-failed",{reason:t})}}}Kb();const Cg={apiKey:"AIzaSyCno6NZH9szwgG9LRX663COQznL9fBbX_M",authDomain:"newvirtuo.firebaseapp.com",projectId:"newvirtuo",storageBucket:"newvirtuo.firebasestorage.app",messagingSenderId:"948875716154",appId:"1:948875716154:web:05d0e376671ccdfef7f703",measurementId:"G-RKMWS7YT11"},Ia=ZB(Cg),zb=ZB(Cg,"client-provisioning"),vf=RC(Ia),g0=oR(Ia),m0=Ev(Ia),bf=RC(zb);jb().then(n=>n?Ub(Ia):null);async function E0(n,e){const t=await v_(bf,n,e);return await bf.signOut(),t.user}function _0(){const[n,e]=vs.useState(""),[t,r]=vs.useState(""),[s,i]=vs.useState(""),[o,B]=vs.useState(!1),[u,c]=vs.useState(!1);async function h(p){p.preventDefault(),c(!0),i("");try{await b_(vf,n.trim(),t)}catch(w){const R=w.code;i(R==="auth/user-not-found"?"This email has no Firebase login yet. Create it under Firebase Console > Authentication > Users, then sign in here.":"The email or PIN/password is incorrect. Use the reset link if you need a new password.")}finally{c(!1)}}async function C(){if(!n.trim()){i("Enter your account email first.");return}c(!0),i("");try{await R_(vf,n.trim()),B(!0)}catch(p){const w=p.code;i(w==="auth/user-not-found"?"No Firebase login exists for this email yet. Create the user in Firebase Authentication first.":"We could not send a reset email. Check the email address and try again.")}finally{c(!1)}}return ue.jsx("main",{className:"flex min-h-screen items-center justify-center bg-[#f5f4f0] px-5 py-10 text-[#171714]",children:ue.jsxs("div",{className:"grid w-full max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]",children:[ue.jsxs("section",{className:"hidden bg-[#171714] p-10 text-white lg:block",children:[ue.jsxs("div",{className:"font-serif text-2xl font-bold tracking-[-0.04em]",children:["VIRTUO",ue.jsx("span",{className:"text-orange-500",children:"."})]}),ue.jsxs("div",{className:"mt-32 max-w-xs",children:[ue.jsx("div",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400",children:"Client workspace"}),ue.jsx("h1",{className:"mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.04em]",children:"Everything your project needs, in one calm place."}),ue.jsx("p",{className:"mt-5 text-sm leading-6 text-stone-400",children:"Projects, documents, invoices and website intelligence shared securely with your team."})]}),ue.jsxs("div",{className:"mt-28 flex items-center gap-2 text-xs text-stone-400",children:[ue.jsx(Xg,{size:15,className:"text-emerald-400"})," Protected by Firebase Authentication"]})]}),ue.jsxs("section",{className:"p-7 sm:p-10",children:[ue.jsxs("div",{className:"lg:hidden font-serif text-2xl font-bold tracking-[-0.04em]",children:["VIRTUO",ue.jsx("span",{className:"text-orange-600",children:"."})]}),ue.jsxs("div",{className:"mt-10 lg:mt-16",children:[ue.jsx("div",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600",children:"Welcome back"}),ue.jsx("h2",{className:"mt-3 font-serif text-3xl font-bold tracking-[-0.04em]",children:"Sign in to your portal"}),ue.jsx("p",{className:"mt-2 text-sm text-stone-500",children:"Use the email and PIN supplied by your Virtuo account administrator."})]}),ue.jsxs("form",{onSubmit:h,className:"mt-8 space-y-4",children:[ue.jsxs("label",{className:"block",children:[ue.jsx("span",{className:"mb-2 block text-xs font-bold text-stone-600",children:"Account email"}),ue.jsxs("span",{className:"relative block",children:[ue.jsx(Wg,{size:16,className:"absolute left-3 top-3.5 text-stone-400"}),ue.jsx("input",{required:!0,type:"email",value:n,onChange:p=>e(p.target.value),className:"h-11 w-full rounded-lg border border-stone-200 bg-stone-50 pl-10 pr-3 text-sm outline-none focus:border-orange-500",placeholder:"you@company.com"})]})]}),ue.jsxs("label",{className:"block",children:[ue.jsx("span",{className:"mb-2 block text-xs font-bold text-stone-600",children:"PIN / password"}),ue.jsxs("span",{className:"relative block",children:[ue.jsx(Yg,{size:16,className:"absolute left-3 top-3.5 text-stone-400"}),ue.jsx("input",{required:!0,minLength:6,type:"password",value:t,onChange:p=>r(p.target.value),className:"h-11 w-full rounded-lg border border-stone-200 bg-stone-50 pl-10 pr-3 text-sm outline-none focus:border-orange-500",placeholder:"Enter your PIN"})]})]}),s&&ue.jsx("p",{role:"alert",className:"rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-800",children:s}),o&&ue.jsx("p",{className:"rounded-lg bg-emerald-50 p-3 text-xs leading-5 text-emerald-800",children:"Reset email sent. Check your inbox and choose a new password."}),ue.jsx("button",{disabled:u,className:"h-11 w-full rounded-lg bg-[#171714] text-sm font-bold text-white hover:bg-stone-700 disabled:opacity-60",children:u?"Checking...":"Sign in securely"})]}),ue.jsxs("button",{onClick:C,disabled:u,className:"mt-5 flex w-full items-center justify-center gap-2 text-xs font-bold text-orange-700 hover:text-orange-800 disabled:opacity-60",children:[ue.jsx($g,{size:14})," Need a new PIN? Send a reset email"]}),ue.jsx("p",{className:"mt-10 text-center text-[11px] leading-5 text-stone-400",children:"Your phone number can be kept on your client profile for support and identity verification. It is not displayed publicly."})]})]})})}export{Yb as L,_0 as P,Xg as S,f0 as a,m0 as b,n0 as c,g0 as d,h0 as e,r0 as f,d0 as g,l0 as h,ry as i,vf as j,u0 as k,B0 as l,E0 as m,c0 as n,Xb as o,o0 as q,p0 as r,Zb as s,C0 as u,a0 as w};
