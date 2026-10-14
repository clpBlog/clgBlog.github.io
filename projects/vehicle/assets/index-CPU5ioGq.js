(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* vue v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vf,Bt,xt,Ra,Pa,bl,fs,El,Nu,Ws,dr,ls,Iu;function Fn(n){let e=Object.create(null);for(let t of n.split(","))e[t]=1;return t=>t in e}let $e={},zs=[],Yt=()=>{},Lr=()=>!1,rr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||97>n.charCodeAt(2)),nc=n=>n.startsWith("onUpdate:"),Qe=Object.assign,$h=(n,e)=>{let t=n.indexOf(e);t>-1&&n.splice(t,1)},a_=Object.prototype.hasOwnProperty,ot=(n,e)=>a_.call(n,e),Le=Array.isArray,Ve=n=>typeof n=="function",Ge=n=>typeof n=="string",ln=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",ed=n=>(at(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),_t=Object.prototype.toString,ic=n=>Ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vi=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),o_=Fn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),sc=n=>{let e=Object.create(null);return t=>e[t]||(e[t]=n(t))},l_=/-\w/g,pt=sc(n=>n.replace(l_,e=>e.slice(1).toUpperCase())),c_=/\B([A-Z])/g,An=sc(n=>n.replace(c_,"-$1").toLowerCase()),ar=sc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Br=sc(n=>n?`on${ar(n)}`:""),Gt=(n,e)=>!Object.is(n,e),kr=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Um=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rc=n=>{let e=parseFloat(n);return isNaN(e)?n:e},zr=n=>{let e=Ge(n)?Number(n):NaN;return isNaN(e)?n:e},ac=()=>vf||(vf="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{}),u_=Fn("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");function ao(n){if(Le(n)){let e={};for(let t=0;t<n.length;t++){let i=n[t],s=Ge(i)?Om(i):ao(i);if(s)for(let r in s)e[r]=s[r]}return e}if(Ge(n)||at(n))return n}let h_=/;(?![^(]*\))/g,d_=/:([^]+)/,f_=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Om(n){let e={};return n.replace(f_,t=>t.startsWith("/*")?"":t).split(h_).forEach(t=>{if(t){let i=t.split(d_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function oo(n){let e="";if(Ge(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){let i=oo(n[t]);i&&(e+=i+" ")}else if(at(n))for(let t in n)n[t]&&(e+=t+" ");return e.trim()}function p_(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Ge(e)&&(n.class=oo(e)),t&&(n.style=ao(t)),n}let m_=Fn("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),g_=Fn("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),v_=Fn("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"),__=Fn("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"),x_=Fn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function y_(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=li(n[s],e[s],t);return i}function _f(n,e,t){if(n.size!==e.size)return!1;let i=Array.from(e),s=new Uint8Array(i.length);for(let r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&li(r,i[o],t)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function S_(n,e,t){let i,s,r,a,o=(i=n,_t.call(i)==="[object Map]"),l=(s=e,_t.call(s)==="[object Map]");if(o||l||(o=(r=n,_t.call(r)==="[object Set]"),l=(a=e,_t.call(a)==="[object Set]"),o||l))return!!o&&!!l&&_f(n,e,t);if(Object.keys(n).length!==Object.keys(e).length)return!1;for(let c in n){let u=n.hasOwnProperty(c),h=e.hasOwnProperty(c);if(u&&!h||!u&&h||!li(n[c],e[c],t))return!1}return String(n)===String(e)}function xf(n,e,t,i){t||(t=[new Map,new Map]);let[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);let a=i(n,e,t);return s.delete(n),r.delete(e),a}function li(n,e,t){let i,s;if(n===e)return!0;let r=(i=n,_t.call(i)==="[object Date]"),a=(s=e,_t.call(s)==="[object Date]");return r||a?!!r&&!!a&&n.getTime()===e.getTime():(r=ln(n),a=ln(e),r||a?n===e:(r=Le(n),a=Le(e),r||a?!!r&&!!a&&xf(n,e,t,y_):(r=at(n),a=at(e),r||a?!!r&&!!a&&xf(n,e,t,S_):String(n)===String(e))))}function oc(n,e){return n.findIndex(t=>li(t,e))}let Fm=n=>!!(n&&n.__v_isRef===!0),Bm=n=>Ge(n)?n:n==null?"":Le(n)||at(n)&&(n.toString===_t||!Ve(n.toString))?Fm(n)?Bm(n.value):JSON.stringify(n,km,2):String(n),km=(n,e)=>{let t;if(Fm(e))return km(n,e.value);if(t=e,_t.call(t)==="[object Map]")return{[`Map(${e.size})`]:[...e.entries()].reduce((i,[s,r],a)=>(i[Lc(s,a)+" =>"]=r,i),{})};{let i;if(i=e,_t.call(i)==="[object Set]")return{[`Set(${e.size})`]:[...e.values()].map(s=>Lc(s))};{if(ln(e))return Lc(e);let s;if(at(e)&&!Le(e)&&(s=e,_t.call(s)!=="[object Object]"))return String(e)}}return e},Lc=(n,e="")=>{var t;return ln(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};class td{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Bt&&(Bt.active?(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes){let i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes){let s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}let i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){let t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on==1&&(this.prevScope=Bt,Bt=this)}off(){if(this._on>0&&--this._on==0){if(Bt===this)Bt=this.prevScope;else{let e=Bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){let t,i;for(this._active=!1,t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function M_(n){return new td(n)}function zm(){return Bt}function b_(n,e=!1){Bt&&Bt.cleanups.push(n)}let Nc=new WeakSet;class Ga{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&(Bt.active?Bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,Nc.has(this)&&(Nc.delete(this),this.trigger()))}notify(){(!(2&this.flags)||32&this.flags)&&(8&this.flags||Vm(this))}run(){if(!(1&this.flags))return this.fn();this.flags|=2,yf(this),Hm(this);let e=xt,t=ai;xt=this,ai=!0;try{return this.fn()}finally{Gm(this),xt=e,ai=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)id(e);this.deps=this.depsTail=void 0,yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?Nc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uu(this)&&this.run()}get dirty(){return Uu(this)}}let lc=0;function Vm(n,e=!1){if(n.flags|=8,e){n.next=Pa,Pa=n;return}n.next=Ra,Ra=n}function nd(){let n;if(!(--lc>0)){if(Pa){let e=Pa;for(Pa=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}for(;Ra;){let e=Ra;for(Ra=void 0;e;){let t=e.next;if(e.next=void 0,e.flags&=-9,1&e.flags)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}}function Hm(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gm(n){let e,t=n.depsTail,i=t;for(;i;){let s=i.prevDep;i.version===-1?(i===t&&(t=s),id(i),function(r){let{prevDep:a,nextDep:o}=r;a&&(a.nextDep=o,r.prevDep=void 0),o&&(o.prevDep=a,r.nextDep=void 0)}(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Uu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wm(n){if(4&n.flags&&!(16&n.flags)||(n.flags&=-17,n.globalVersion===Wa)||(n.globalVersion=Wa,!n.isSSR&&128&n.flags&&(!n.deps&&!n._dirty||!Uu(n))))return;n.flags|=2;let e=n.dep,t=xt,i=ai;xt=n,ai=!0;try{Hm(n);let s=n.fn(n._value);(e.version===0||Gt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{xt=t,ai=i,Gm(n),n.flags&=-3}}function id(n,e=!1){let{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)id(r,!0)}e||--t.sc||!t.map||t.map.delete(t.key)}function E_(n,e){n.effect instanceof Ga&&(n=n.effect.fn);let t=new Ga(n);e&&Qe(t,e);try{t.run()}catch(s){throw t.stop(),s}let i=t.run.bind(t);return i.effect=t,i}function T_(n){n.effect.stop()}let ai=!0,Xm=[];function ji(){Xm.push(ai),ai=!1}function qi(){let n=Xm.pop();ai=n===void 0||n}function yf(n){let{cleanup:e}=n;if(n.cleanup=void 0,e){let t=xt;xt=void 0;try{e()}finally{xt=t}}}let Wa=0;class A_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!ai||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new A_(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,function i(s){if(s.dep.sc++,4&s.sub.flags){let r=s.dep.computed;if(r&&!s.dep.subs){r.flags|=20;for(let o=r.deps;o;o=o.nextDep)i(o)}let a=s.dep.subs;a!==s&&(s.prevSub=a,a&&(a.nextSub=s)),s.dep.subs=s}}(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,Wa++,this.notify(e)}notify(e){lc++;try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{nd()}}}let Tl=new WeakMap,Xs=Symbol(""),Ou=Symbol(""),Xa=Symbol("");function an(n,e,t){if(ai&&xt){let i=Tl.get(n);i||Tl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new cc),s.map=i,s.key=t),s.track()}}function Oi(n,e,t,i,s,r){let a=Tl.get(n);if(!a)return void Wa++;let o=l=>{l&&l.trigger()};if(lc++,e==="clear")a.forEach(o);else{let l=Le(n),c=l&&ic(t);if(l&&t==="length"){let u=Number(i);a.forEach((h,d)=>{(d==="length"||d===Xa||!ln(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Xa)),e){case"add":if(l)c&&o(a.get("length"));else{let h;o(a.get(Xs)),h=n,_t.call(h)==="[object Map]"&&o(a.get(Ou))}break;case"delete":if(!l){let h;o(a.get(Xs)),h=n,_t.call(h)==="[object Map]"&&o(a.get(Ou))}break;case"set":let u;u=n,_t.call(u)==="[object Map]"&&o(a.get(Xs))}}nd()}function fr(n){let e=tt(n);return e===n||(an(e,"iterate",Xa),wn(n))?e:ci(n)?_i(n)?e.map(t=>ps(Zn(t))):e.map(ps):e.map(Zn)}function uc(n){return an(n=tt(n),"iterate",Xa),n}function fi(n,e){return ci(n)?_i(n)?ps(Zn(e)):ps(e):Zn(e)}let w_={__proto__:null,[Symbol.iterator](){return Ic(this,Symbol.iterator,n=>fi(this,n))},concat(...n){return fr(this).concat(...n.map(e=>Le(e)?fr(e):e))},entries(){return Ic(this,"entries",n=>(n[1]=fi(this,n[1]),n))},every(n,e){return Ti(this,"every",n,e,void 0,arguments)},filter(n,e){return Ti(this,"filter",n,e,t=>t.map(i=>fi(this,i)),arguments)},find(n,e){return Ti(this,"find",n,e,t=>fi(this,t),arguments)},findIndex(n,e){return Ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ti(this,"findLast",n,e,t=>fi(this,t),arguments)},findLastIndex(n,e){return Ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return Uc(this,"includes",n)},indexOf(...n){return Uc(this,"indexOf",n)},join(n){return fr(this).join(n)},lastIndexOf(...n){return Uc(this,"lastIndexOf",n)},map(n,e){return Ti(this,"map",n,e,void 0,arguments)},pop(){return fa(this,"pop")},push(...n){return fa(this,"push",n)},reduce(n,...e){return Sf(this,"reduce",n,e)},reduceRight(n,...e){return Sf(this,"reduceRight",n,e)},shift(){return fa(this,"shift")},some(n,e){return Ti(this,"some",n,e,void 0,arguments)},splice(...n){return fa(this,"splice",n)},toReversed(){return fr(this).toReversed()},toSorted(n){return fr(this).toSorted(n)},toSpliced(...n){return fr(this).toSpliced(...n)},unshift(...n){return fa(this,"unshift",n)},values(){return Ic(this,"values",n=>fi(this,n))}};function Ic(n,e,t){let i=uc(n),s=i[e]();return i===n||wn(n)||(s._next=s.next,s.next=()=>{let r=s._next();return r.done||(r.value=t(r.value)),r}),s}let C_=Array.prototype;function Ti(n,e,t,i,s,r){let a=uc(n),o=a!==n&&!wn(n),l=a[e];if(l!==C_[e]){let h=l.apply(n,r);return o?Zn(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,fi(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));let u=l.call(a,c,i);return o&&s?s(u):u}function Sf(n,e,t,i){let s=uc(n),r=s!==n&&!wn(n),a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=fi(n,c)),t.call(this,c,fi(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));let l=s[e](a,...i);return o?fi(n,l):l}function Uc(n,e,t){let i=tt(n);an(i,"iterate",Xa);let s=i[e](...t);return(s===-1||s===!1)&&lo(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function fa(n,e,t=[]){ji(),lc++;let i=tt(n)[e].apply(n,t);return nd(),qi(),i}let R_=Fn("__proto__,__v_isRef,__isVue"),jm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ln));function P_(n){ln(n)||(n=String(n));let e=tt(this);return an(e,"has",n),e.hasOwnProperty(n)}class qm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;let s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?$m:Qm:r?Jm:Km).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;let a=Le(e);if(!s){let l;if(a&&(l=w_[t]))return l;if(t==="hasOwnProperty")return P_}let o=Reflect.get(e,t,Ot(e)?e:i);if((ln(t)?jm.has(t):R_(t))||(s||an(e,"get",t),r))return o;if(Ot(o)){let l=a&&ic(t)?o:o.value;return s&&at(l)?Al(l):l}return at(o)?s?Al(o):dc(o):o}}class Ym extends qm{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t],a=Le(e)&&ic(t);if(!this._isShallow){let c=ci(r);if(wn(i)||ci(i)||(r=tt(r),i=tt(i)),!a&&Ot(r)&&!Ot(i))return c||(r.value=i),!0}let o=a?Number(t)<e.length:ot(e,t),l=Reflect.set(e,t,i,Ot(e)?e:s);return e===tt(s)&&l&&(o?Gt(i,r)&&Oi(e,"set",t,i):Oi(e,"add",t,i)),l}deleteProperty(e,t){let i=ot(e,t);e[t];let s=Reflect.deleteProperty(e,t);return s&&i&&Oi(e,"delete",t,void 0),s}has(e,t){let i=Reflect.has(e,t);return ln(t)&&jm.has(t)||an(e,"has",t),i}ownKeys(e){return an(e,"iterate",Le(e)?"length":Xs),Reflect.ownKeys(e)}}class Zm extends qm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}let D_=new Ym,L_=new Zm,N_=new Ym(!0),I_=new Zm(!0),Oc=n=>n;function xo(n){return function(){return n!=="delete"&&(n==="clear"?void 0:this)}}function hc(n,e){let t,i=(Qe(t={get(s){let r=this.__v_raw,a=tt(r),o=tt(s);n||(Gt(s,o)&&an(a,"get",s),an(a,"get",o));let{has:l}=Reflect.getPrototypeOf(a),c=e?Oc:n?ps:Zn;return l.call(a,s)?c(r.get(s)):l.call(a,o)?c(r.get(o)):void(r!==a&&r.get(s))},get size(){let s=this.__v_raw;return n||an(tt(s),"iterate",Xs),s.size},has(s){let r=this.__v_raw,a=tt(r),o=tt(s);return n||(Gt(s,o)&&an(a,"has",s),an(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){let a=this,o=a.__v_raw,l=tt(o),c=e?Oc:n?ps:Zn;return n||an(l,"iterate",Xs),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}},n?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(s){let r=tt(this),a=Reflect.getPrototypeOf(r),o=tt(s),l=e||wn(s)||ci(s)?s:o;return a.has.call(r,l)||Gt(s,l)&&a.has.call(r,s)||Gt(o,l)&&a.has.call(r,o)||(r.add(l),Oi(r,"add",l,l)),this},set(s,r){e||wn(r)||ci(r)||(r=tt(r));let a=tt(this),{has:o,get:l}=Reflect.getPrototypeOf(a),c=o.call(a,s);c||(s=tt(s),c=o.call(a,s));let u=l.call(a,s);return a.set(s,r),c?Gt(r,u)&&Oi(a,"set",s,r):Oi(a,"add",s,r),this},delete(s){let r=tt(this),{has:a,get:o}=Reflect.getPrototypeOf(r),l=a.call(r,s);l||(s=tt(s),l=a.call(r,s)),o&&o.call(r,s);let c=r.delete(s);return l&&Oi(r,"delete",s,void 0),c},clear(){let s=tt(this),r=s.size!==0,a=s.clear();return r&&Oi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=function(...r){let a,o=this.__v_raw,l=tt(o),c=(a=l,_t.call(a)==="[object Map]"),u=s==="entries"||s===Symbol.iterator&&c,h=o[s](...r),d=e?Oc:n?ps:Zn;return n||an(l,"iterate",s==="keys"&&c?Ou:Xs),Qe(Object.create(h),{next(){let{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:u?[d(p[0]),d(p[1])]:d(p),done:g}}})}}),t);return(s,r,a)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(ot(i,r)&&r in s?i:s,r,a)}let U_={get:hc(!1,!1)},O_={get:hc(!1,!0)},F_={get:hc(!0,!1)},B_={get:hc(!0,!0)},Km=new WeakMap,Jm=new WeakMap,Qm=new WeakMap,$m=new WeakMap;function dc(n){return ci(n)?n:fc(n,!1,D_,U_,Km)}function eg(n){return fc(n,!1,N_,O_,Jm)}function Al(n){return fc(n,!0,L_,F_,Qm)}function k_(n){return fc(n,!0,I_,B_,$m)}function fc(n,e,t,i,s){let r;if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;let a=s.get(n);if(a)return a;let o=function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((r=n,_t.call(r)).slice(8,-1));if(o===0)return n;let l=new Proxy(n,o===2?i:t);return s.set(n,l),l}function _i(n){return ci(n)?_i(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function wn(n){return!!(n&&n.__v_isShallow)}function lo(n){return!!n&&!!n.__v_raw}function tt(n){let e=n&&n.__v_raw;return e?tt(e):n}function tg(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&Um(n,"__v_skip",!0),n}let Zn=n=>at(n)?dc(n):n,ps=n=>at(n)?Al(n):n;function Ot(n){return!!n&&n.__v_isRef===!0}function it(n){return ig(n,!1)}function ng(n){return ig(n,!0)}function ig(n,e){return Ot(n)?n:new z_(n,e)}class z_{constructor(e,t){this.dep=new cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Zn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,i=this.__v_isShallow||wn(e)||ci(e);Gt(e=i?e:tt(e),t)&&(this._rawValue=e,this._value=i?e:Zn(e),this.dep.trigger())}}function V_(n){n.dep&&n.dep.trigger()}function co(n){return Ot(n)?n.value:n}function H_(n){return Ve(n)?n():co(n)}let G_={get:(n,e,t)=>e==="__v_raw"?n:co(Reflect.get(n,e,t)),set:(n,e,t,i)=>{let s=n[e];return Ot(s)&&!Ot(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function sd(n){return _i(n)?n:new Proxy(n,G_)}class W_{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new cc,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function sg(n){return new W_(n)}function X_(n){let e=Le(n)?Array(n.length):{};for(let t in n)e[t]=new rg(n,t,void 0);return e}class rg{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=ln(t)?t:String(t),this._raw=tt(e);let s=!0,r=e;if(!Le(e)||ln(this._key)||!ic(this._key))do s=!lo(r)||wn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=co(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ot(this._raw[this._key])){let t=this._object[this._key];if(Ot(t)){t.value=e;return}}this._object[this._key]=e}get dep(){var e,t;let i;return e=this._raw,t=this._key,(i=Tl.get(e))&&i.get(t)}}class j_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function q_(n,e,t){return Ot(n)?n:Ve(n)?new j_(n):!at(n)||!(arguments.length>1)?it(n):new rg(n,e,t)}class Y_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(8&this.flags)&&xt!==this)return Vm(this,!0),!0}get value(){let e=this.dep.track();return Wm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}let Z_={GET:"get",HAS:"has",ITERATE:"iterate"},K_={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},yo={},wl=new WeakMap;function J_(){return ls}function ag(n,e=!1,t=ls){if(t){let i=wl.get(t);i||wl.set(t,i=[]),i.push(n)}}function Fi(n,e=1/0,t){if(e<=0||!at(n)||n.__v_skip||((t=t||new Map).get(n)||0)>=e)return n;if(t.set(n,e),e--,Ot(n))Fi(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)Fi(n[i],e,t);else{let i,s;if(i=n,_t.call(i)==="[object Set]"||(s=n,_t.call(s)==="[object Map]"))n.forEach(r=>{Fi(r,e,t)});else{let r;if(r=n,_t.call(r)==="[object Object]"){for(let a in n)Fi(n[a],e,t);for(let a of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,a)&&Fi(n[a],e,t)}}}return n}function Q_(n,e){}let $_={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"};function oa(n,e,t,i){try{return i?n(...i):n()}catch(s){or(s,e,t)}}function Un(n,e,t,i){if(Ve(n)){let s=oa(n,e,t,i);return s&&ed(s)&&s.catch(r=>{or(r,e,t)}),s}if(Le(n)){let s=[];for(let r=0;r<n.length;r++)s.push(Un(n[r],e,t,i));return s}}function or(n,e,t,i=!0){e&&e.vnode;let{errorHandler:s,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||$e;if(e){let a=e.parent,o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){let c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,l)===!1)return}a=a.parent}if(s){ji(),oa(s,null,10,[n,o,l]),qi();return}}(function(a,o=!0,l=!1){if(l)throw a;console.error(a)})(n,i,r)}let pn=[],hi=-1,Vr=[],cs=null,Pr=0,og=Promise.resolve(),dl=null;function pc(n){let e=dl||og;return n?e.then(this?n.bind(this):n):e}function rd(n){if(!(1&n.flags)){let e=Da(n),t=pn[pn.length-1];!t||!(2&n.flags)&&e>=Da(t)?pn.push(n):pn.splice(function(i){let s=hi+1,r=pn.length;for(;s<r;){let a=s+r>>>1,o=pn[a],l=Da(o);l<i||l===i&&2&o.flags?s=a+1:r=a}return s}(e),0,n),n.flags|=1,lg()}}function lg(){dl||(dl=og.then(function n(e){try{for(hi=0;hi<pn.length;hi++){let t=pn[hi];t&&!(8&t.flags)&&(4&t.flags&&(t.flags&=-2),oa(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;hi<pn.length;hi++){let t=pn[hi];t&&(t.flags&=-2)}hi=-1,pn.length=0,Cl(),dl=null,(pn.length||Vr.length)&&n()}}))}function ja(n){if(Le(n))for(let e=0;e<n.length;e++)Vr.push(n[e]);else cs&&n.id===-1?cs.splice(Pr+1,0,n):1&n.flags||(Vr.push(n),n.flags|=1);lg()}function Mf(n,e,t=hi+1){for(;t<pn.length;t++){let i=pn[t];if(i&&2&i.flags){if(n&&i.id!==n.uid)continue;pn.splice(t,1),t--,4&i.flags&&(i.flags&=-2),i(),4&i.flags||(i.flags&=-2)}}}function Cl(n){if(Vr.length){let e=[...new Set(Vr)].sort((t,i)=>Da(t)-Da(i));if(Vr.length=0,cs){for(let t=0;t<e.length;t++)cs.push(e[t]);return}for(cs=e,Pr=0;Pr<cs.length;Pr++){let t=cs[Pr];4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}cs=null,Pr=0}}let Da=n=>n.id==null?2&n.flags?-1:1/0:n.id,Kt=null,mc=null;function qa(n){let e=Kt;return Kt=n,mc=n&&n.type.__scopeId||null,e}function ex(n){mc=n}function tx(){mc=null}let nx=n=>ad;function ad(n,e=Kt,t){if(!e||n._n)return n;let i=(...s)=>{let r;i._d&&Ka(-1);let a=qa(e),o=Gi.length;try{r=n(...s)}finally{for(let l=Gi.length;l>o;l--)yc();qa(a),i._d&&Ka(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function ix(n,e){if(Kt===null)return n;let t=fo(Kt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=$e]=e[s];r&&(Ve(r)&&(r={mounted:r,updated:r}),r.deep&&Fi(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function di(n,e,t,i){let s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){let o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ji(),Un(l,t,8,[n.el,o,n,e]),qi())}}function cg(n,e){if(Zt){let t=Zt.provides,i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function La(n,e,t=!1){let i=_n();if(i||js){let s=js?js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function sx(){return!!(_n()||js)}let ug=Symbol.for("v-scx"),hg=()=>La(ug);function rx(n,e){return uo(n,null,e)}function ax(n,e){return uo(n,null,{flush:"post"})}function dg(n,e){return uo(n,null,{flush:"sync"})}function Hr(n,e,t){return uo(n,e,t)}function uo(n,e,t=$e){let i,{immediate:s,flush:r}=t,a=Qe({},t),o=e&&s||!e&&r!=="post";if(Ks){if(r==="sync"){let h=hg();i=h.__watcherHandles||(h.__watcherHandles=[])}else if(!o){let h=()=>{};return h.stop=Yt,h.resume=Yt,h.pause=Yt,h}}let l=Zt;a.call=(h,d,p)=>Un(h,l,d,p);let c=!1;r==="post"?a.scheduler=h=>{It(h,l&&l.suspense)}:r!=="sync"&&(c=!0,a.scheduler=(h,d)=>{d?h():rd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),c&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};let u=function(h,d,p=$e){let g,y,m,f,{immediate:x,deep:_,once:v,scheduler:A,augmentJob:T,call:E}=p,R=O=>_?O:wn(O)||_===!1||_===0?Fi(O,1):Fi(O),b=!1,M=!1;if(Ot(h)?(y=()=>h.value,b=wn(h)):_i(h)?(y=()=>R(h),b=!0):Le(h)?(M=!0,b=h.some(O=>_i(O)||wn(O)),y=()=>h.map(O=>Ot(O)?O.value:_i(O)?R(O):Ve(O)?E?E(O,2):O():void 0)):y=Ve(h)?d?E?()=>E(h,2):h:()=>{if(m){ji();try{m()}finally{qi()}}let O=ls;ls=g;try{return E?E(h,3,[f]):h(f)}finally{ls=O}}:Yt,d&&_){let O=y,W=_===!0?1/0:_;y=()=>Fi(O(),W)}let P=zm(),I=()=>{g.stop(),P&&P.active&&$h(P.effects,g)};if(v&&d){let O=d;d=(...W)=>{let Z=O(...W);return I(),Z}}let F=M?Array(h.length).fill(yo):yo,N=O=>{if(1&g.flags&&(g.dirty||O))if(d){let W=g.run();if(O||_||b||(M?W.some((Z,G)=>Gt(Z,F[G])):Gt(W,F))){m&&m();let Z=ls;ls=g;try{let G=[W,F===yo?void 0:M&&F[0]===yo?[]:F,f];F=W,E?E(d,3,G):d(...G)}finally{ls=Z}}}else g.run()};return T&&T(N),(g=new Ga(y)).scheduler=A?()=>A(N,!1):N,f=O=>ag(O,!1,g),m=g.onStop=()=>{let O=wl.get(g);if(O){if(E)E(O,4);else for(let W of O)W();wl.delete(g)}},d?x?N(!0):F=g.run():A?A(N.bind(null,!0),!0):g.run(),I.pause=g.pause.bind(g),I.resume=g.resume.bind(g),I.stop=I,I}(n,e,a);return Ks&&(i?i.push(u):o&&u()),u}function ox(n,e,t){let i,s=this.proxy,r=Ge(n)?n.includes(".")?fg(s,n):()=>s[n]:n.bind(s,s);Ve(e)?i=e:(i=e.handler,t=e);let a=ca(this),o=uo(r,i.bind(s),t);return a(),o}function fg(n,e){let t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}let as=new WeakMap,pg=Symbol("_vte"),Is=n=>n&&(n.disabled||n.disabled===""),bf=n=>"u">typeof SVGElement&&n instanceof SVGElement,Ef=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Fc=(n,e)=>{let t=n&&n.to;return Ge(t)?e?e(t):null:t};function So(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);let{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(a,e,t),!as.has(n)&&(!h||Is(u))&&16&l)for(let d=0;d<c.length;d++)s(c[d],e,t,2);h&&i(o,e,t)}let lx={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,a,o,l,c){let{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:g,createText:y,parentNode:m}}=c,f=Is(e.props),{dynamicChildren:x}=e,_=(T,E,R)=>{16&T.shapeFlag&&u(T.children,E,R,s,r,a,o,l)},v=(T=e)=>{let E=Is(T.props),R=T.target=Fc(T.props,g),b=Bc(R,T,y,p);R&&(a!=="svg"&&bf(R)?a="svg":a!=="mathml"&&Ef(R)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(R),E||(_(T,R,b),pa(T,!1)))},A=T=>{let E=()=>{if(as.get(T)===E){if(as.delete(T),Is(T.props)){let R=m(T.el)||t;_(T,R,T.anchor),pa(T,!0)}v(T)}};as.set(T,E),It(E,r)};if(n==null){let T,E=e.el=y(""),R=e.anchor=y("");if(p(E,t,i),p(R,t,i),(T=e.props)&&(T.defer||T.defer==="")||r&&r.pendingBranch)return void A(e);f&&(_(e,t,R),pa(e,!0)),v()}else{e.el=n.el;let T=e.anchor=n.anchor,E=as.get(n);if(E){E.flags|=8,as.delete(n),A(e);return}e.targetStart=n.targetStart;let R=e.target=n.target,b=e.targetAnchor=n.targetAnchor,M=Is(n.props),P=M?t:R,I=M?T:b;if(a==="svg"||bf(R)?a="svg":(a==="mathml"||Ef(R))&&(a="mathml"),x?(d(n.dynamicChildren,x,P,s,r,a,o),_d(n,e,!0)):l||h(n,e,P,I,s,r,a,o,!1),f)M?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):So(e,t,T,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){let F=Fc(e.props,g);F&&(e.target=F,So(e,F,null,c,0))}else M&&So(e,R,b,c,1);pa(e,f)}},remove(n,e,t,{um:i,o:{remove:s}},r){let{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=n,p=Is(d),g=r||!p,y=as.get(n);if(y&&(y.flags|=8,as.delete(n)),h&&(s(c),s(u)),r&&s(l),!y&&(p||h)&&16&a)for(let m=0;m<o.length;m++){let f=o[m];i(f,e,t,g,!!f.dynamicChildren)}},move:So,hydrate:function(n,e,t,i,s,r,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},h){function d(m,f){let x=f;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,m._lpa=e.targetAnchor&&a(e.targetAnchor);break}}x=a(x)}}function p(m,f){f.anchor=h(a(m),f,o(m),t,i,s,r)}let g=e.target=Fc(e.props,l),y=Is(e.props);if(g){let m=g._lpa||g.firstChild;16&e.shapeFlag&&(y?(p(n,e),d(g,m),e.targetAnchor||Bc(g,e,u,c,o(n)===g?n:null)):(e.anchor=a(n),d(g,m),e.targetAnchor||Bc(g,e,u,c),h(m&&a(m),e,g,t,i,s,r))),pa(e,y)}else y&&16&e.shapeFlag&&(p(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}};function pa(n,e){let t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Bc(n,e,t,i,s=null){let r=e.targetStart=t(""),a=e.targetAnchor=t("");return r[pg]=a,n&&(i(r,n,s),i(a,n,s)),a}let Xn=Symbol("_leaveCb"),ma=Symbol("_enterCb");function od(){let n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ys(()=>{n.isMounted=!0}),_c(()=>{n.isUnmounting=!0}),n}let Vn=[Function,Array],ld={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vn,onEnter:Vn,onAfterEnter:Vn,onEnterCancelled:Vn,onBeforeLeave:Vn,onLeave:Vn,onAfterLeave:Vn,onLeaveCancelled:Vn,onBeforeAppear:Vn,onAppear:Vn,onAfterAppear:Vn,onAppearCancelled:Vn},mg=n=>{let e=n.subTree;return e.component?mg(e.component):e};function gg(n){let e=n[0];if(n.length>1){for(let t of n)if(t.type!==Rt){e=t;break}}return e}let vg={name:"BaseTransition",props:ld,setup(n,{slots:e}){let t=_n(),i=od();return()=>{let s=e.default&&gc(e.default(),!0),r=s&&s.length?gg(s):t.subTree?Wg():void 0;if(!r)return;let a=tt(n),{mode:o}=a;if(i.isLeaving)return kc(r);let l=Rl(r);if(!l)return kc(r);let c=Zr(l,a,i,t,h=>c=h);l.type!==Rt&&Yi(l,c);let u=t.subTree&&Rl(t.subTree);if(u&&u.type!==Rt&&!ni(u,l)&&mg(t).type!==Rt){let h=Zr(u,a,i,t);if(Yi(u,h),o==="out-in"&&l.type!==Rt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,8&t.job.flags||t.update(),delete h.afterLeave,u=void 0},kc(r);o==="in-out"&&l.type!==Rt?h.delayLeave=(d,p,g)=>{_g(i,u)[String(u.key)]=u,d[Xn]=()=>{p(),d[Xn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function _g(n,e){let{leavingVNodes:t}=n,i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Zr(n,e,t,i,s){let{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:m,onAppear:f,onAfterAppear:x,onAppearCancelled:_}=e,v=String(n.key),A=_g(t,n),T=(b,M)=>{b&&Un(b,i,9,M)},E=(b,M)=>{let P=M[1];T(b,M),Le(b)?b.every(I=>I.length<=1)&&P():b.length<=1&&P()},R={mode:a,persisted:o,beforeEnter(b){let M=l;if(!t.isMounted)if(r)M=m||l;else return;b[Xn]&&b[Xn](!0);let P=A[v];P&&ni(n,P)&&P.el[Xn]&&P.el[Xn](),T(M,[b])},enter(b){if(A[v]===n)return;let M=c,P=u,I=h;if(!t.isMounted)if(r)M=f||c,P=x||u,I=_||h;else return;let F=!1;b[ma]=O=>{F||(F=!0,O?T(I,[b]):T(P,[b]),R.delayedLeave&&R.delayedLeave(),b[ma]=void 0)};let N=b[ma].bind(null,!1);M?E(M,[b,N]):N()},leave(b,M){let P=String(n.key);if(b[ma]&&b[ma](!0),t.isUnmounting)return M();T(d,[b]);let I=!1;b[Xn]=N=>{I||(I=!0,M(),N?T(y,[b]):T(g,[b]),b[Xn]=void 0,A[P]===n&&delete A[P])};let F=b[Xn].bind(null,!1);A[P]=n,p?E(p,[b,F]):F()},clone(b){let M=Zr(b,e,t,i,s);return s&&s(M),M}};return R}function kc(n){if(ho(n))return(n=yi(n)).children=null,n}function Rl(n){if(!ho(n))return n.type.__isTeleport&&n.children?gg(n.children):n;if(n.component)return n.component.subTree;let{shapeFlag:e,children:t}=n;if(t){if(16&e)return t[0];if(32&e&&Ve(t.default))return t.default()}}function Yi(n,e){if(6&n.shapeFlag&&n.component){n.transition=e;let t=n.component.subTree;Yi(t.type.__isTeleport&&Rl(t)||t,e)}else 128&n.shapeFlag?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function gc(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r],o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===qt?(128&a.patchFlag&&s++,i=i.concat(gc(a.children,e,o))):(e||a.type!==Rt)&&i.push(o!=null?yi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function cd(n,e){return Ve(n)?Qe({name:n.name},e,{setup:n}):n}function cx(){let n=_n();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function ud(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ux(n){let e=_n(),t=ng(null);return e&&Object.defineProperty(e.refs===$e?e.refs={}:e.refs,n,{enumerable:!0,get:()=>t.value,set:i=>t.value=i}),t}function Tf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}let Pl=new WeakMap;function Gr(n,e,t,i,s=!1){if(Le(n))return void n.forEach((y,m)=>Gr(y,e&&(Le(e)?e[m]:e),t,i,s));if(Hi(i)&&!s){512&i.shapeFlag&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(n,e,t,i.component.subTree);return}let r=4&i.shapeFlag?fo(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===$e?o.refs={}:o.refs,h=o.setupState,d=tt(h),p=h===$e?Lr:y=>!Tf(u,y)&&ot(d,y),g=(y,m)=>!(m&&Tf(u,m));if(c!=null&&c!==l&&(Af(e),Ge(c)?(u[c]=null,p(c)&&(h[c]=null)):Ot(c)&&(g(c,e.k)&&(c.value=null),e.k&&(u[e.k]=null))),Ve(l))oa(l,o,12,[a,u]);else{let y=Ge(l),m=Ot(l);if(y||m){let f=()=>{if(n.f){let x=y?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Le(x)&&$h(x,r);else if(Le(x))x.includes(r)||x.push(r);else if(y)u[l]=[r],p(l)&&(h[l]=u[l]);else{let _=[r];g(l,n.k)&&(l.value=_),n.k&&(u[n.k]=_)}}else y?(u[l]=a,p(l)&&(h[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){let x=()=>{f(),Pl.delete(n)};x.id=-1,Pl.set(n,x),It(x,t)}else Af(n),f()}}}function Af(n){let e=Pl.get(n);e&&(e.flags|=8,Pl.delete(n))}let wf=!1,pr=()=>{wf||(console.error("Hydration completed but contains mismatches."),wf=!0)},Mo=n=>{if(n.nodeType===1){if(n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject")return"svg";if(n.namespaceURI.includes("MathML"))return"mathml"}},Nr=n=>n.nodeType===8;function hx(n){let{mt:e,p:t,o:{patchProp:i,createText:s,nextSibling:r,parentNode:a,remove:o,insert:l,createComment:c}}=n,u=(x,_,v,A,T,E=!1)=>{E=E||!!_.dynamicChildren;let R=Nr(x)&&x.data==="[",b=()=>g(x,_,v,A,T,R),{type:M,ref:P,shapeFlag:I,patchFlag:F}=_,N=x.nodeType;_.el=x,F===-2&&(E=!1,_.dynamicChildren=null);let O=null;switch(M){case ms:N!==3?_.children===""?(l(_.el=s(""),a(x),x),O=x):O=b():(x.data!==_.children&&(pr(),x.data=_.children),O=r(x));break;case Rt:f(x)?(O=r(x),m(_.el=x.content.firstChild,x,v)):O=N!==8||R?b():r(x);break;case gs:if(R&&(N=(x=r(x)).nodeType),N===1||N===3){O=x;let W=!_.children.length;for(let Z=0;Z<_.staticCount;Z++)W&&(_.children+=O.nodeType===1?O.outerHTML:O.data),Z===_.staticCount-1&&(_.anchor=O),O=r(O);return R?r(O):O}b();break;case qt:O=R?p(x,_,v,A,T,E):b();break;default:if(1&I)O=N===1&&_.type.toLowerCase()===x.tagName.toLowerCase()||f(x)?h(x,_,v,A,T,E):b();else if(6&I){_.slotScopeIds=T;let W=a(x);if(O=R?y(x):Nr(x)&&x.data==="teleport start"?y(x,x.data,"teleport end"):r(x),e(_,W,null,v,A,Mo(W),E),(Hi(_)||_.component.asyncDep)&&!_.component.subTree){let Z;R?(Z=bt(gs)).anchor=O?O.previousSibling:W.lastChild:Z=x.nodeType===3?yd(""):bt(x.nodeType===8?Rt:"div"),Z.el=x,_.component.subTree=Z}}else 64&I?O=N!==8?b():_.type.hydrate(x,_,v,A,T,E,n,d):128&I&&(O=_.type.hydrate(x,_,v,A,Mo(a(x)),T,E,n,u))}return P!=null&&Gr(P,null,A,_),O},h=(x,_,v,A,T,E)=>{E=E||!!_.dynamicChildren;let{type:R,dynamicProps:b,props:M,patchFlag:P,shapeFlag:I,dirs:F,transition:N}=_,O=R==="input"||R==="option",W=!!b;if(O||W||P!==-1){let he;F&&di(_,null,v,"created");let de=!1;if(f(x)){de=kg(null,N)&&v&&v.vnode.props&&v.vnode.props.appear;let fe=x.content.firstChild;if(de){let Ae=fe.getAttribute("class");Ae&&(fe.$cls=Ae),N.beforeEnter(fe)}m(fe,x,v),_.el=x=fe}if(16&I&&!(M&&(M.innerHTML||M.textContent))){let fe=d(x.firstChild,_,x,v,A,T,E);for(fe&&!bo(x,1)&&pr();fe;){let Ae=fe;fe=fe.nextSibling,o(Ae)}}else if(8&I){let fe=_.children;fe[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(fe=fe.slice(1));let{textContent:Ae}=x;Ae!==fe&&Ae!==fe.replace(/\r\n|\r/g,`
`)&&(bo(x,0)||pr(),x.textContent=_.children)}if(M){if(O||W||!E||48&P){let fe=x.tagName.includes("-"),Ae=x.namespaceURI.includes("svg")?"svg":x.namespaceURI.includes("MathML")?"mathml":void 0;for(let se in M)if(O&&(se.endsWith("value")||se==="indeterminate")||rr(se)&&!Vi(se)||se[0]==="."||fe&&!Vi(se)||b&&b.includes(se)){var Z,G,ee;if(Z=x,G=se,ee=M[se],dx.has(G)&&Z.getAttribute(G)===(ee==null?null:`${ee}`))continue;i(x,se,null,M[se],Ae,v)}}else if(M.onClick)i(x,"onClick",null,M.onClick,void 0,v);else if(4&P&&_i(M.style))for(let fe in M.style)M.style[fe]}(he=M&&M.onVnodeBeforeMount)&&Mn(he,v,_),F&&di(_,null,v,"beforeMount"),((he=M&&M.onVnodeMounted)||F||de)&&zg(()=>{he&&Mn(he,v,_),de&&N.enter(x),F&&di(_,null,v,"mounted")},A)}return x.nextSibling},d=(x,_,v,A,T,E,R)=>{R=R||!!_.dynamicChildren;let b=_.children,M=b.length,P=!1;for(let I=0;I<M;I++){let F=R?b[I]:b[I]=En(b[I]),N=F.type===ms;x?(N&&!R&&I+1<M&&En(b[I+1]).type===ms&&(l(s(x.data.slice(F.children.length)),v,r(x)),x.data=F.children),x=u(x,F,A,T,E,R)):N&&!F.children?l(F.el=s(""),v):(!P&&(P=!0,bo(v,1)||pr()),t(null,F,v,null,A,T,Mo(v),E))}return x},p=(x,_,v,A,T,E)=>{let{slotScopeIds:R}=_;R&&(T=T?T.concat(R):R);let b=a(x),M=d(r(x),_,b,v,A,T,E);return M&&Nr(M)&&M.data==="]"?r(_.anchor=M):(pr(),l(_.anchor=c("]"),b,M),M)},g=(x,_,v,A,T,E)=>{var R,b,M;if(R=x,b=_,bo(R.parentElement,1)||(M=R).nodeType===1&&Fu(M.getAttribute(Dl),1)||function({props:F}){let N=F&&F[Dl];return typeof N=="string"&&Fu(N,1)}(b)||pr(),_.el=null,E){let F=y(x);for(;;){let N=r(x);if(N&&N!==F)o(N);else break}}let P=r(x),I=a(x);return o(x),t(null,_,I,P,v,A,Mo(I),T),v&&(v.vnode.el=_.el,xc(v,_.el)),P},y=(x,_="[",v="]")=>{let A=0;for(;x;)if((x=r(x))&&Nr(x)&&(x.data===_&&A++,x.data===v)){if(A===0)return r(x);A--}return x},m=(x,_,v)=>{let A=_.parentNode;A&&A.replaceChild(x,_);let T=v;for(;T;)T.vnode.el===_&&(T.vnode.el=T.subTree.el=x),T=T.parent},f=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[(x,_)=>{if(!_.hasChildNodes()){t(null,x,_),Cl(),_._vnode=x;return}u(_.firstChild,x,null,null,null),Cl(),_._vnode=x},u]}let dx=new Set(["src","srcset","href","poster"]),Dl="data-allow-mismatch",fx={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function bo(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(Dl);)n=n.parentElement;return Fu(n&&n.getAttribute(Dl),e)}function Fu(n,e){if(n==null)return!1;{if(n==="")return!0;let t=n.split(",");return!!(e===0&&t.includes("children"))||t.includes(fx[e])}}let px=ac().requestIdleCallback||(n=>setTimeout(n,1)),mx=ac().cancelIdleCallback||(n=>clearTimeout(n)),gx=(n=1e4)=>e=>{let t=px(e,{timeout:n});return()=>mx(t)},vx=n=>(e,t)=>{let i=new IntersectionObserver(s=>{for(let r of s)if(r.isIntersecting){i.disconnect(),e();break}},n);return t(s=>{if(s instanceof Element){if(function(r){let{top:a,left:o,bottom:l,right:c}=r.getBoundingClientRect(),{innerHeight:u,innerWidth:h}=window;return(a>0&&a<u||l>0&&l<u)&&(o>0&&o<h||c>0&&c<h)}(s))return e(),i.disconnect(),!1;i.observe(s)}}),()=>i.disconnect()},_x=n=>e=>{if(n){let t=matchMedia(n);if(!t.matches)return t.addEventListener("change",e,{once:!0}),()=>t.removeEventListener("change",e);e()}},xx=(n=[])=>(e,t)=>{Ge(n)&&(n=[n]);let i=!1,s=a=>{i||(i=!0,r(),e(),a.target.dispatchEvent(new a.constructor(a.type,a)))},r=()=>{t(a=>{for(let o of n)a.removeEventListener(o,s)})};return t(a=>{for(let o of n)a.addEventListener(o,s,{once:!0})}),r},Hi=n=>!!n.type.__asyncLoader;function yx(n){let e;Ve(n)&&(n={loader:n});let{loader:t,loadingComponent:i,errorComponent:s,delay:r=200,hydrate:a,timeout:o,suspensible:l=!0,onError:c}=n,u=null,h=0,d=()=>{let p;return u||(p=u=t().catch(g=>{if(g=g instanceof Error?g:Error(String(g)),c)return new Promise((y,m)=>{c(g,()=>y((h++,u=null,d())),()=>m(g),h+1)});throw g}).then(g=>p!==u&&u?u:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),e=g,g)))};return cd({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(p,g,y){let m=p.isConnected,f=!1;(g.bu||(g.bu=[])).push(()=>f=!0);let x=()=>{f||p.parentNode&&(!m||p.isConnected)&&y()},_=a?()=>{let v=a(x,A=>function(T,E){if(Nr(T)&&T.data==="["){let R=1,b=T.nextSibling;for(;b;){if(b.nodeType===1){if(E(b)===!1)break}else if(Nr(b))if(b.data==="]"){if(--R==0)break}else b.data==="["&&R++;b=b.nextSibling}}else E(T)}(p,A));v&&(g.bum||(g.bum=[])).push(v)}:x;e?_():d().then(()=>!g.isUnmounted&&_())},get __asyncResolved(){return e},setup(){let p,g,y=Zt;if(ud(y),e)return()=>Eo(e,y);let m=v=>{u=null,or(v,y,13,!s)};if(l&&y.suspense||Ks)return d().then(v=>()=>Eo(v,y)).catch(v=>(m(v),()=>s?bt(s,{error:v}):null));let f=it(!1),x=it(),_=it(!!r);return la(()=>{p!=null&&clearTimeout(p),g!=null&&clearTimeout(g)}),r&&(g=setTimeout(()=>{y.isUnmounted||(_.value=!1)},r)),o!=null&&(p=setTimeout(()=>{if(!y.isUnmounted&&!f.value&&!x.value){let v=Error(`Async component timed out after ${o}ms.`);m(v),x.value=v}},o)),d().then(()=>{!y.isUnmounted&&(f.value=!0,y.parent&&ho(y.parent.vnode)&&y.parent.update())}).catch(v=>{if(y.isUnmounted){u=null;return}m(v),x.value=v}),()=>f.value&&e?Eo(e,y):x.value&&s?bt(s,{error:x.value}):i&&!_.value?Eo(i,y):void 0}})}function Eo(n,e){let{ref:t,props:i,children:s,ce:r}=e.vnode,a=bt(n,i,s);return a.ref=t,a.ce=r,delete e.vnode.ce,a}let ho=n=>n.type.__isKeepAlive,Sx={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){let t=_n(),i=t.ctx;if(!i.renderer)return()=>{let x=e.default&&e.default();return x&&x.length===1?x[0]:x};let s=new Map,r=new Set,a=null,o=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=i,d=h("div");function p(x){zc(x),u(x,t,o,!0)}function g(x){s.forEach((_,v)=>{let A=qu(Hi(_)?_.type.__asyncResolved||{}:_.type);A&&!x(A)&&y(v)})}function y(x){let _=s.get(x);!_||a&&ni(_,a)?a&&zc(a):p(_),s.delete(x),r.delete(x)}i.activate=(x,_,v,A,T)=>{let E=x.component;c(x,_,v,0,o),l(E.vnode,x,_,v,E,o,A,x.slotScopeIds,T),It(()=>{E.isDeactivated=!1,E.a&&kr(E.a);let R=x.props&&x.props.onVnodeMounted;R&&Mn(R,E.parent,x)},o)},i.deactivate=x=>{let _=x.component;Ul(_.m),Ul(_.a),c(x,d,null,1,o),It(()=>{_.da&&kr(_.da);let v=x.props&&x.props.onVnodeUnmounted;v&&Mn(v,_.parent,x),_.isDeactivated=!0},o)},Hr(()=>[n.include,n.exclude],([x,_])=>{x&&g(v=>Ta(x,v)),_&&g(v=>!Ta(_,v))},{flush:"post",deep:!0});let m=null,f=()=>{m!=null&&(Ol(t.subTree.type)?It(()=>{let x=To(t.subTree);x.component&&s.set(m,x)},t.subTree.suspense):s.set(m,To(t.subTree)))};return Ys(f),vc(f),_c(()=>{s.forEach(x=>{let{subTree:_,suspense:v}=t,A=To(_);if(x.type===A.type&&x.key===A.key){zc(A);let T=A.component.da;T&&It(T,v);return}p(x)})}),()=>{if(m=null,!e.default)return a=null;let x=e.default(),_=x[0];if(x.length>1)return a=null,x;if(!Zi(_)||!(4&_.shapeFlag)&&!(128&_.shapeFlag))return a=null,_;let v=To(_);if(v.type===Rt)return a=null,v;let A=v.type,T=qu(Hi(v)?v.type.__asyncResolved||{}:A),{include:E,exclude:R,max:b}=n;if(E&&(!T||!Ta(E,T))||R&&T&&Ta(R,T))return v.shapeFlag&=-257,a=v,_;let M=v.key==null?A:v.key,P=s.get(M);return v.el&&(v=yi(v),128&_.shapeFlag&&(_.ssContent=v)),m=M,P?(v.el=P.el,v.component=P.component,v.transition&&Yi(v,v.transition),v.shapeFlag|=512,r.delete(M),r.add(M)):(r.add(M),b&&r.size>parseInt(b,10)&&y(r.values().next().value)),v.shapeFlag|=256,a=v,Ol(_.type)?_:v}}};function Ta(n,e){let t;return Le(n)?n.some(i=>Ta(i,e)):Ge(n)?n.split(",").includes(e):(t=n,_t.call(t)==="[object RegExp]"&&(n.lastIndex=0,n.test(e)))}function xg(n,e){Sg(n,"a",e)}function yg(n,e){Sg(n,"da",e)}function Sg(n,e,t=Zt){let i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ll(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ho(s.parent.vnode)&&function(r,a,o,l){let c=Ll(a,r,l,!0);la(()=>{$h(l[a],c)},o)}(i,e,t,s),s=s.parent}}function zc(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function To(n){return 128&n.shapeFlag?n.ssContent:n}function Ll(n,e,t=Zt,i=!1){if(t){let s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{ji();let o=ca(t),l=Un(e,t,n,a);return o(),qi(),l});return i?s.unshift(r):s.push(r),r}}let Ji=n=>(e,t=Zt)=>{Ks&&n!=="sp"||Ll(n,(...i)=>e(...i),t)},Mg=Ji("bm"),Ys=Ji("m"),hd=Ji("bu"),vc=Ji("u"),_c=Ji("bum"),la=Ji("um"),bg=Ji("sp"),Eg=Ji("rtg"),Tg=Ji("rtc");function Ag(n,e=Zt){Ll("ec",n,e)}let dd="components";function Mx(n,e){return fd(dd,n,!0,e)||n}let wg=Symbol.for("v-ndc");function bx(n){return Ge(n)?fd(dd,n,!1)||n:n||wg}function Ex(n){return fd("directives",n)}function fd(n,e,t=!0,i=!1){let s=Kt||Zt;if(s){let r=s.type;if(n===dd){let o=qu(r,!1);if(o&&(o===e||o===pt(e)||o===ar(pt(e))))return r}let a=Cf(s[n]||r[n],e)||Cf(s.appContext[n],e);return!a&&i?r:a}}function Cf(n,e){return n&&(n[e]||n[pt(e)]||n[ar(pt(e))])}function Tx(n,e,t,i){let s,r=t&&t[i],a=Le(n);if(a||Ge(n)){let o=a&&_i(n),l=!1,c=!1;o&&(l=!wn(n),c=ci(n),n=uc(n)),s=Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?ps(Zn(n[u])):Zn(n[u]):n[u],u,void 0,r&&r[u])}else if(typeof n=="number"){s=Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(at(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r&&r[l]));else{let o=Object.keys(n);s=Array(o.length);for(let l=0,c=o.length;l<c;l++){let u=o[l];s[l]=e(n[u],u,l,r&&r[l])}}else s=[];return t&&(t[i]=s),s}function Ax(n,e){for(let t=0;t<e.length;t++){let i=e[t];if(Le(i))for(let s=0;s<i.length;s++)n[i[s].name]=i[s].fn;else i&&(n[i.name]=i.key?(...s)=>{let r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return n}function wx(n,e,t,i,s,r){let a;if(t==null&&(t={}),Kt.ce||Kt.parent&&Hi(Kt.parent)&&Kt.parent.ce){let c=r!=null&&t.key==null?Qe({},t,{key:r}):t,u=Object.keys(c).length>0;return e!=="default"&&(c.name=e),Za(),Fl(qt,null,[bt("slot",c,i&&i())],u?-2:64)}let o=n[e];o&&o._c&&(o._d=!1);let l=Gi.length;Za();try{let c=o&&pd(o(t)),u=t.key||r||c&&c.key;a=Fl(qt,{key:(u&&!ln(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=Gi.length;u>l;u--)yc();throw c}finally{o&&o._c&&(o._d=!0)}return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),a}function pd(n){return n.some(e=>!Zi(e)||e.type!==Rt&&(e.type!==qt||!!pd(e.children)))?n:null}function Cx(n,e){let t={};for(let i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:Br(i)]=n[i];return t}let Bu=n=>n?qg(n)?fo(n):Bu(n.parent):null,Na=Qe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Bu(n.parent),$root:n=>Bu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vu(n),$forceUpdate:n=>n.f||(n.f=()=>{rd(n.update)}),$nextTick:n=>n.n||(n.n=pc.bind(n.proxy)),$watch:n=>ox.bind(n)}),Vc=(n,e)=>n!==$e&&!n.__isScriptSetup&&ot(n,e),ku={get({_:n},e){let t,i;if(e==="__v_skip")return!0;let{ctx:s,setupState:r,data:a,props:o,accessCache:l,type:c,appContext:u}=n;if(e[0]!=="$"){let d=l[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return a[e];case 4:return s[e];case 3:return o[e]}else{if(Vc(r,e))return l[e]=1,r[e];if(a!==$e&&ot(a,e))return l[e]=2,a[e];if(ot(o,e))return l[e]=3,o[e];if(s!==$e&&ot(s,e))return l[e]=4,s[e];zu&&(l[e]=0)}}let h=Na[e];return h?(e==="$attrs"&&an(n.attrs,"get",""),h(n)):(t=c.__cssModules)&&(t=t[e])?t:s!==$e&&ot(s,e)?(l[e]=4,s[e]):ot(i=u.config.globalProperties,e)?i[e]:void 0},set({_:n},e,t){let{data:i,setupState:s,ctx:r}=n;return Vc(s,e)?(s[e]=t,!0):i!==$e&&ot(i,e)?(i[e]=t,!0):!ot(n.props,e)&&!(e[0]==="$"&&e.slice(1)in n)&&(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==$e&&o[0]!=="$"&&ot(n,o)||Vc(e,o)||ot(r,o)||ot(i,o)||ot(Na,o)||ot(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},Rx=Qe({},ku,{get(n,e){if(e!==Symbol.unscopables)return ku.get(n,e,n)},has:(n,e)=>e[0]!=="_"&&!u_(e)});function Px(){return null}function Dx(){return null}function Lx(n){}function Nx(n){}function Ix(){return null}function Ux(){}function Ox(n,e){return null}function Fx(){return Cg().slots}function Bx(){return Cg().attrs}function Cg(n){let e=_n();return e.setupContext||(e.setupContext=Jg(e))}function Ya(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function kx(n,e){let t=Ya(n);for(let i in e){if(i.startsWith("__skip"))continue;let s=t[i];s?Le(s)||Ve(s)?s=t[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=t[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return t}function zx(n,e){return n&&e?Le(n)&&Le(e)?n.concat(e):Qe({},Ya(n),Ya(e)):n||e}function Vx(n,e){let t={};for(let i in n)e.includes(i)||Object.defineProperty(t,i,{enumerable:!0,get:()=>n[i]});return t}function Hx(n){let e=_n(),t=Ks,i=n();Ja(),t&&fs(!1);let s=()=>{ca(e),t&&fs(!0)},r=()=>{_n()!==e&&e.scope.off(),Ja(),t&&fs(!1)};return ed(i)&&(i=i.catch(a=>{throw s(),Promise.resolve().then(()=>Promise.resolve().then(r)),a})),[i,()=>{s(),Promise.resolve().then(r)}]}let zu=!0;function Rf(n,e,t){Un(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vu(n){let e,t=n.type,{mixins:i,extends:s}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=n.appContext,l=a.get(t);return l?e=l:r.length||i||s?(e={},r.length&&r.forEach(c=>Nl(e,c,o,!0)),Nl(e,t,o)):e=t,at(t)&&a.set(t,e),e}function Nl(n,e,t,i=!1){let{mixins:s,extends:r}=e;for(let a in r&&Nl(n,r,t,!0),s&&s.forEach(o=>Nl(n,o,t,!0)),e)if(!(i&&a==="expose")){let o=Gx[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}let Gx={data:Pf,props:Df,emits:Df,methods:ga,computed:ga,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:ga,directives:ga,watch:function(n,e){if(!n)return e;if(!e)return n;let t=Qe(Object.create(null),n);for(let i in e)t[i]=un(n[i],e[i]);return t},provide:Pf,inject:function(n,e){return ga(Hu(n),Hu(e))}};function Pf(n,e){return e?n?function(){return Qe(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Hu(n){if(Le(n)){let e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function ga(n,e){return n?Qe(Object.create(null),n,e):e}function Df(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:Qe(Object.create(null),Ya(n),Ya(e??{})):e}function Rg(){return{app:null,config:{isNativeTag:Lr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wx=0,js=null;function Xx(n,e,t=$e){let i=_n(),s=pt(e),r=An(e),a=Pg(n,s),o=sg((l,c)=>{let u,h,d=$e;return dg(()=>{let p=n[s];Gt(u,p)&&(u=p,c())}),{get:()=>(l(),t.get?t.get(u):u),set(p){let g=t.set?t.set(p):p;if(!Gt(g,u)&&!(d!==$e&&Gt(p,d)))return;let y=i.vnode.props,m=!!(y&&(e in y||s in y||r in y)&&(`onUpdate:${e}`in y||`onUpdate:${s}`in y||`onUpdate:${r}`in y));m||(u=p,c()),i.emit(`update:${e}`,g),Gt(p,d)&&(Gt(p,g)&&!Gt(g,h)||m&&d!==$e&&!Gt(g,u))&&c(),d=p,h=g}}});return o[Symbol.iterator]=()=>{let l=0;return{next:()=>l<2?{value:l++?a||$e:o,done:!1}:{done:!0}}},o}let Pg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pt(e)}Modifiers`]||n[`${An(e)}Modifiers`];function jx(n,e,...t){let i;if(n.isUnmounted)return;let s=n.vnode.props||$e,r=t,a=e.startsWith("update:"),o=a&&Pg(s,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ge(u)?u.trim():u)),o.number&&(r=r.map(rc)));let l=s[i=Br(e)]||s[i=Br(pt(e))];!l&&a&&(l=s[i=Br(An(e))]),l&&Un(l,n,6,r);let c=s[i+"Once"];if(c){if(n.emitted){if(n.emitted[i])return}else n.emitted={};n.emitted[i]=!0,Un(c,n,6,r)}}let qx=new WeakMap;function Il(n,e){return!!n&&!!rr(e)&&(ot(n,(e=(e=e.slice(2))==="Once"?e:e.replace(/Once$/,""))[0].toLowerCase()+e.slice(1))||ot(n,An(e))||ot(n,e))}function fl(n){let e,t,{type:i,vnode:s,proxy:r,withProxy:a,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,props:p,data:g,setupState:y,ctx:m,inheritAttrs:f}=n,x=qa(n);try{if(4&s.shapeFlag){let v=a||r;e=En(h.call(v,v,d,p,y,g,m)),t=c}else e=En(i.length>1?i(p,{attrs:c,slots:l,emit:u}):i(p,null)),t=i.props?c:Yx(c)}catch(v){Gi.length=0,or(v,n,1),e=bt(Rt)}let _=e;if(t&&f!==!1){let v=Object.keys(t),{shapeFlag:A}=_;v.length&&7&A&&(o&&v.some(nc)&&(t=Zx(t,o)),_=yi(_,t,!1,!0))}return s.dirs&&((_=yi(_,null,!1,!0)).dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&Yi(_.type.__isTeleport&&Rl(_)||_,s.transition),e=_,qa(x),e}let Yx=n=>{let e;for(let t in n)(t==="class"||t==="style"||rr(t))&&((e||(e={}))[t]=n[t]);return e},Zx=(n,e)=>{let t={};for(let i in n)nc(i)&&i.slice(9)in e||(t[i]=n[i]);return t};function Lf(n,e,t){let i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){let r=i[s];if(Dg(e,n,r)&&!Il(t,r))return!0}return!1}function Dg(n,e,t){let i=n[t],s=e[t];return t==="style"&&at(i)&&at(s)?!li(i,s):i!==s}function xc({vnode:n,parent:e,suspense:t},i){for(;e;){let s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}let Gu={},Lg=n=>Object.getPrototypeOf(n)===Gu;function Ng(n,e,t,i){let s,[r,a]=n.propsOptions,o=!1;if(e)for(let l in e){let c;if(Vi(l))continue;let u=e[l];r&&ot(r,c=pt(l))?a&&a.includes(c)?(s||(s={}))[c]=u:t[c]=u:Il(n.emitsOptions,l)||l in i&&u===i[l]||(i[l]=u,o=!0)}if(a){let l=tt(t),c=s||$e;for(let u=0;u<a.length;u++){let h=a[u];t[h]=Wu(r,l,h,c[h],n,!ot(c,h))}}return o}function Wu(n,e,t,i,s,r){let a=n[t];if(a!=null){let o=ot(a,"default");if(o&&i===void 0){let l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){let{propsDefaults:c}=s;if(t in c)i=c[t];else{let u=ca(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===An(t))&&(i=!0))}return i}let Kx=new WeakMap;function Nf(n){return!(n[0]==="$"||Vi(n))}let md=n=>n==="_"||n==="_ctx"||n==="$stable",gd=n=>Le(n)?n.map(En):[En(n)],Jx=(n,e,t)=>{if(e._n)return e;let i=ad((...s)=>gd(e(...s)),t);return i._c=!1,i},Ig=(n,e,t)=>{let i=n._ctx;for(let s in n){if(md(s))continue;let r=n[s];if(Ve(r))e[s]=Jx(s,r,i);else if(r!=null){let a=gd(r);e[s]=()=>a}}},Ug=(n,e)=>{let t=gd(e);n.slots.default=()=>t},Og=(n,e,t)=>{for(let i in e)(t||!md(i))&&(n[i]=e[i])},It=zg;function vd(n){return Bg(n)}function Fg(n){return Bg(n,hx)}function Bg(n,e){var t;let i,s;ac().__VUE__=!0;let{insert:r,remove:a,patchProp:o,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=Yt,insertStaticContent:m}=n,f=(U,L,B,w=null,K=null,z=null,J,H=null,te=!!L.dynamicChildren)=>{if(U===L)return;U&&!ni(U,L)&&(w=oe(U),fe(U,K,z,!0),U=null),L.patchFlag===-2&&(te=!1,L.dynamicChildren=null),L.dynamicChildren&&U&&U.dynamicChildren&&U.dynamicChildren.hasOnce&&(L.dynamicChildren===zs&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);let{type:X,ref:C,shapeFlag:S}=L;switch(X){case ms:x(U,L,B,w);break;case Rt:_(U,L,B,w);break;case gs:U==null&&v(L,B,w,J);break;case qt:I(U,L,B,w,K,z,J,H,te);break;default:1&S?A(U,L,B,w,K,z,J,H,te):6&S?F(U,L,B,w,K,z,J,H,te):(64&S||128&S)&&X.process(U,L,B,w,K,z,J,H,te,ve)}C!=null&&K?Gr(C,U&&U.ref,z,L||U,!L):C==null&&U&&U.ref!=null&&Gr(U.ref,null,z,U,!0)},x=(U,L,B,w)=>{if(U==null)r(L.el=c(L.children),B,w);else{let K=L.el=U.el;L.children!==U.children&&h(K,L.children)}},_=(U,L,B,w)=>{U==null?r(L.el=u(L.children||""),B,w):L.el=U.el},v=(U,L,B,w)=>{[U.el,U.anchor]=m(U.children,L,B,w,U.el,U.anchor)},A=(U,L,B,w,K,z,J,H,te)=>{if(L.type==="svg"?J="svg":L.type==="math"&&(J="mathml"),U==null)T(L,B,w,K,z,J,H,te);else{let X=U.el&&U.el._isVueCE?U.el:null;try{X&&X._beginPatch(),b(U,L,K,z,J,H,te)}finally{X&&X._endPatch()}}},T=(U,L,B,w,K,z,J,H)=>{let te,X,{props:C,shapeFlag:S,transition:k,dirs:Y}=U;if(te=U.el=l(U.type,z,C&&C.is,C),8&S?d(te,U.children):16&S&&R(U.children,te,null,w,K,Hc(U,z),J,H),Y&&di(U,null,w,"created"),E(te,U,U.scopeId,J,w),C){for(let ne in C)ne==="value"||Vi(ne)||o(te,ne,null,C[ne],z,w);"value"in C&&o(te,"value",null,C.value,z),(X=C.onVnodeBeforeMount)&&Mn(X,w,U)}Y&&di(U,null,w,"beforeMount");let re=kg(K,k);re&&k.beforeEnter(te),r(te,L,B),((X=C&&C.onVnodeMounted)||re||Y)&&It(()=>{X&&Mn(X,w,U),re&&k.enter(te),Y&&di(U,null,w,"mounted")},K)},E=(U,L,B,w,K)=>{if(B&&y(U,B),w)for(let z=0;z<w.length;z++)y(U,w[z]);if(K){let z=K.subTree;if(L===z||Ol(z.type)&&(z.ssContent===L||z.ssFallback===L)){let J=K.vnode;E(U,J,J.scopeId,J.slotScopeIds,K.parent)}}},R=(U,L,B,w,K,z,J,H,te=0)=>{for(let X=te;X<U.length;X++)f(null,U[X]=H?Ui(U[X]):En(U[X]),L,B,w,K,z,J,H)},b=(U,L,B,w,K,z,J)=>{let H,te=L.el=U.el,{patchFlag:X,dynamicChildren:C,dirs:S}=L;X|=16&U.patchFlag;let k=U.props||$e,Y=L.props||$e;if(B&&Ts(B,!1),(H=Y.onVnodeBeforeUpdate)&&Mn(H,B,L,U),S&&di(L,U,B,"beforeUpdate"),B&&Ts(B,!0),C&&(!U.dynamicChildren||U.dynamicChildren.length!==C.length)&&(X=0,J=!1,C=null),(k.innerHTML&&Y.innerHTML==null||k.textContent&&Y.textContent==null)&&d(te,""),C?M(U.dynamicChildren,C,te,B,w,Hc(L,K),z):J||G(U,L,te,null,B,w,Hc(L,K),z,!1),X>0){if(16&X)P(te,k,Y,B,K);else if(2&X&&k.class!==Y.class&&o(te,"class",null,Y.class,K),4&X&&o(te,"style",k.style,Y.style,K),8&X){let re=L.dynamicProps;for(let ne=0;ne<re.length;ne++){let Se=re[ne],V=k[Se],$=Y[Se];($!==V||Se==="value")&&o(te,Se,V,$,K,B)}}1&X&&U.children!==L.children&&d(te,L.children)}else J||C!=null||P(te,k,Y,B,K);((H=Y.onVnodeUpdated)||S)&&It(()=>{H&&Mn(H,B,L,U),S&&di(L,U,B,"updated")},w)},M=(U,L,B,w,K,z,J)=>{for(let H=0;H<L.length;H++){let te=U[H],X=L[H],C=te.el&&(te.type===qt||!ni(te,X)||198&te.shapeFlag)?p(te.el):B;f(te,X,C,null,w,K,z,J,!0)}},P=(U,L,B,w,K)=>{if(L!==B){if(L!==$e)for(let z in L)Vi(z)||z in B||o(U,z,L[z],null,K,w);for(let z in B){if(Vi(z))continue;let J=B[z],H=L[z];J!==H&&z!=="value"&&o(U,z,H,J,K,w)}"value"in B&&o(U,"value",L.value,B.value,K)}},I=(U,L,B,w,K,z,J,H,te)=>{let X=L.el=U?U.el:c(""),C=L.anchor=U?U.anchor:c(""),{patchFlag:S,dynamicChildren:k,slotScopeIds:Y}=L;Y&&(H=H?H.concat(Y):Y),U==null?(r(X,B,w),r(C,B,w),R(L.children||[],B,C,K,z,J,H,te)):S>0&&64&S&&k&&U.dynamicChildren&&U.dynamicChildren.length===k.length?(M(U.dynamicChildren,k,B,K,z,J,H),(L.key!=null||K&&L===K.subTree)&&_d(U,L,!0)):G(U,L,B,C,K,z,J,H,te)},F=(U,L,B,w,K,z,J,H,te)=>{L.slotScopeIds=H,U==null?512&L.shapeFlag?K.ctx.activate(L,B,w,J,te):N(L,B,w,K,z,J,te):O(U,L,te)},N=(U,L,B,w,K,z,J)=>{let H=U.component=jg(U,w,K);if(ho(U)&&(H.ctx.renderer=ve),Yg(H,!1,J),H.asyncDep){if(K&&K.registerDep(H,W,J),!U.el){let te=H.subTree=bt(Rt);_(null,te,L,B),U.placeholder=te.el}}else W(H,U,L,B,K,z,J)},O=(U,L,B)=>{let w=L.component=U.component;if(function(K,z,J){let{props:H,children:te,component:X}=K,{props:C,children:S,patchFlag:k}=z,Y=X.emitsOptions;if(z.dirs||z.transition)return!0;if(!J||!(k>=0))return(!!te||!!S)&&(!S||!S.$stable)||H!==C&&(H?!C||Lf(H,C,Y):!!C);if(1024&k)return!0;if(16&k)return H?Lf(H,C,Y):!!C;if(8&k){let re=z.dynamicProps;for(let ne=0;ne<re.length;ne++){let Se=re[ne];if(Dg(C,H,Se)&&!Il(Y,Se))return!0}}return!1}(U,L,B))if(w.asyncDep&&!w.asyncResolved){L.el=U.el,Z(w,L,B);return}else w.next=L,w.update();else L.el=U.el,w.vnode=L},W=(U,L,B,w,K,z,J)=>{U.scope.on();let H=U.effect=new Ga(()=>{if(U.isMounted){let C,{next:S,bu:k,u:Y,parent:re,vnode:ne}=U;{let me=function ae(xe){let be=xe.subTree.component;if(be)return be.asyncDep&&!be.asyncResolved?be:ae(be)}(U);if(me){S&&(S.el=ne.el,Z(U,S,J)),me.asyncDep.then(()=>{It(()=>{U.isUnmounted||te()},K)});return}}let Se=S;Ts(U,!1),S?(S.el=ne.el,Z(U,S,J)):S=ne,k&&kr(k),(C=S.props&&S.props.onVnodeBeforeUpdate)&&Mn(C,re,S,ne),Ts(U,!0);let V=fl(U),$=U.subTree;U.subTree=V,f($,V,p($.el),oe($),U,K,z),S.el=V.el,Se===null&&xc(U,V.el),Y&&It(Y,K),(C=S.props&&S.props.onVnodeUpdated)&&It(()=>Mn(C,re,S,ne),K)}else{let C,{el:S,props:k}=L,{bm:Y,m:re,parent:ne,root:Se,type:V}=U,$=Hi(L);if(Ts(U,!1),Y&&kr(Y),!$&&(C=k&&k.onVnodeBeforeMount)&&Mn(C,ne,L),Ts(U,!0),S&&s){let me=()=>{U.subTree=fl(U),s(S,U.subTree,U,K,null)};$&&V.__asyncHydrate?V.__asyncHydrate(S,U,me):me()}else{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(V,U.parent?U.parent.type:void 0);let me=U.subTree=fl(U);f(null,me,B,w,U,K,z),L.el=me.el}if(re&&It(re,K),!$&&(C=k&&k.onVnodeMounted)){let me=L;It(()=>Mn(C,ne,me),K)}(256&L.shapeFlag||ne&&Hi(ne.vnode)&&256&ne.vnode.shapeFlag)&&U.a&&It(U.a,K),U.isMounted=!0,L=B=w=null}});U.scope.off();let te=U.update=H.run.bind(H),X=U.job=H.runIfDirty.bind(H);X.i=U,X.id=U.uid,H.scheduler=()=>rd(X),Ts(U,!0),te()},Z=(U,L,B)=>{L.component=U;let w=U.vnode.props;U.vnode=L,U.next=null,function(K,z,J,H){let{props:te,attrs:X,vnode:{patchFlag:C}}=K,S=tt(te),[k]=K.propsOptions,Y=!1;if((H||C>0)&&!(16&C)){if(8&C){let re=K.vnode.dynamicProps;for(let ne=0;ne<re.length;ne++){let Se=re[ne];if(Il(K.emitsOptions,Se))continue;let V=z[Se];if(k)if(ot(X,Se))V!==X[Se]&&(X[Se]=V,Y=!0);else{let $=pt(Se);te[$]=Wu(k,S,$,V,K,!1)}else V!==X[Se]&&(X[Se]=V,Y=!0)}}}else{let re;for(let ne in Ng(K,z,te,X)&&(Y=!0),S)z&&(ot(z,ne)||(re=An(ne))!==ne&&ot(z,re))||(k?J&&(J[ne]!==void 0||J[re]!==void 0)&&(te[ne]=Wu(k,S,ne,void 0,K,!0)):delete te[ne]);if(X!==S)for(let ne in X)z&&ot(z,ne)||(delete X[ne],Y=!0)}Y&&Oi(K.attrs,"set","")}(U,L.props,w,B),((K,z,J)=>{let{vnode:H,slots:te}=K,X=!0,C=$e;if(32&H.shapeFlag){let S=z._;S?J&&S===1?X=!1:Og(te,z,J):(X=!z.$stable,Ig(z,te)),C=z}else z&&(Ug(K,z),C={default:1});if(X)for(let S in te)md(S)||C[S]!=null||delete te[S]})(U,L.children,B),ji(),Mf(U),qi()},G=(U,L,B,w,K,z,J,H,te=!1)=>{let X=U&&U.children,C=U?U.shapeFlag:0,S=L.children,{patchFlag:k,shapeFlag:Y}=L;if(k>0){if(128&k)return void he(X,S,B,w,K,z,J,H,te);if(256&k)return void ee(X,S,B,w,K,z,J,H,te)}8&Y?(16&C&&we(X,K,z),S!==X&&d(B,S)):16&C?16&Y?he(X,S,B,w,K,z,J,H,te):we(X,K,z,!0):(8&C&&d(B,""),16&Y&&R(S,B,w,K,z,J,H,te))},ee=(U,L,B,w,K,z,J,H,te)=>{let X;U=U||zs,L=L||zs;let C=U.length,S=L.length,k=Math.min(C,S);for(X=0;X<k;X++){let Y=L[X]=te?Ui(L[X]):En(L[X]);f(U[X],Y,B,null,K,z,J,H,te)}C>S?we(U,K,z,!0,!1,k):R(L,B,w,K,z,J,H,te,k)},he=(U,L,B,w,K,z,J,H,te)=>{let X=0,C=L.length,S=U.length-1,k=C-1;for(;X<=S&&X<=k;){let Y=U[X],re=L[X]=te?Ui(L[X]):En(L[X]);if(ni(Y,re))f(Y,re,B,null,K,z,J,H,te);else break;X++}for(;X<=S&&X<=k;){let Y=U[S],re=L[k]=te?Ui(L[k]):En(L[k]);if(ni(Y,re))f(Y,re,B,null,K,z,J,H,te);else break;S--,k--}if(X>S){if(X<=k){let Y=k+1,re=Y<C?L[Y].el:w;for(;X<=k;)f(null,L[X]=te?Ui(L[X]):En(L[X]),B,re,K,z,J,H,te),X++}}else if(X>k)for(;X<=S;)fe(U[X],K,z,!0),X++;else{let Y,re=X,ne=X,Se=new Map;for(X=ne;X<=k;X++){let Ee=L[X]=te?Ui(L[X]):En(L[X]);Ee.key!=null&&Se.set(Ee.key,X)}let V=0,$=k-ne+1,me=!1,ae=0,xe=Array($);for(X=0;X<$;X++)xe[X]=0;for(X=re;X<=S;X++){let Ee,ye=U[X];if(V>=$){fe(ye,K,z,!0);continue}if(ye.key!=null)Ee=Se.get(ye.key);else for(Y=ne;Y<=k;Y++)if(xe[Y-ne]===0&&ni(ye,L[Y])){Ee=Y;break}Ee===void 0?fe(ye,K,z,!0):(xe[Ee-ne]=X+1,Ee>=ae?ae=Ee:me=!0,f(ye,L[Ee],B,null,K,z,J,H,te),V++)}let be=me?function(Ee){let ye,Oe,Re,He,q,Ce=Ee.slice(),le=[0],_e=Ee.length;for(ye=0;ye<_e;ye++){let De=Ee[ye];if(De!==0){if(Ee[Oe=le[le.length-1]]<De){Ce[ye]=Oe,le.push(ye);continue}for(Re=0,He=le.length-1;Re<He;)Ee[le[q=Re+He>>1]]<De?Re=q+1:He=q;De<Ee[le[Re]]&&(Re>0&&(Ce[ye]=le[Re-1]),le[Re]=ye)}}for(Re=le.length,He=le[Re-1];Re-- >0;)le[Re]=He,He=Ce[He];return le}(xe):zs;for(Y=be.length-1,X=$-1;X>=0;X--){let Ee=ne+X,ye=L[Ee],Oe=L[Ee+1],Re=Ee+1<C?Oe.el||function He(q){if(q.placeholder)return q.placeholder;let Ce=q.component;return Ce?He(Ce.subTree):null}(Oe):w;xe[X]===0?f(null,ye,B,Re,K,z,J,H,te):me&&(Y<0||X!==be[Y]?de(ye,B,Re,2):Y--)}}},de=(U,L,B,w,K=null)=>{let{el:z,type:J,transition:H,children:te,shapeFlag:X}=U;if(6&X)return void de(U.component.subTree,L,B,w);if(128&X)return void U.suspense.move(L,B,w);if(64&X)return void J.move(U,L,B,ve);if(J===qt){r(z,L,B);for(let C=0;C<te.length;C++)de(te[C],L,B,w);r(U.anchor,L,B);return}if(J===gs)return void(({el:C,anchor:S},k,Y)=>{let re;for(;C&&C!==S;)re=g(C),r(C,k,Y),C=re;r(S,k,Y)})(U,L,B);if(w!==2&&1&X&&H)if(w===0)H.persisted&&!z[Xn]?r(z,L,B):(H.beforeEnter(z),r(z,L,B),It(()=>H.enter(z),K));else{let{leave:C,delayLeave:S,afterLeave:k}=H,Y=()=>{U.ctx.isUnmounted?a(z):r(z,L,B)},re=()=>{let ne=z._isLeaving||!!z[Xn];z._isLeaving&&z[Xn](!0),H.persisted&&!ne?Y():C(z,()=>{Y(),k&&k()})};S?S(z,Y,re):re()}else r(z,L,B)},fe=(U,L,B,w=!1,K=!1)=>{let z,{type:J,props:H,ref:te,children:X,dynamicChildren:C,shapeFlag:S,patchFlag:k,dirs:Y,cacheIndex:re,memo:ne}=U;if((k===-2||C&&C.hasOnce)&&(K=!1),te!=null&&(ji(),Gr(te,null,B,U,!0),qi()),re==null||U.ctx&&U.ctx!==L||(L.renderCache[re]=void 0),256&S)return void L.ctx.deactivate(U);let Se=1&S&&Y,V=!Hi(U);if(V&&(z=H&&H.onVnodeBeforeUnmount)&&Mn(z,L,U),6&S)ge(U.component,B,w);else{if(128&S)return void U.suspense.unmount(B,w);Se&&di(U,null,L,"beforeUnmount"),64&S?U.type.remove(U,L,B,ve,w):C&&!C.hasOnce&&(J!==qt||k>0&&64&k)?we(C,L,B,!1,!0):(J===qt&&384&k||!K&&16&S)&&we(X,L,B),w&&Ae(U)}let $=ne!=null&&re==null;(V&&(z=H&&H.onVnodeUnmounted)||Se||$)&&It(()=>{z&&Mn(z,L,U),Se&&di(U,null,L,"unmounted"),$&&(U.el=null)},B)},Ae=U=>{let{type:L,el:B,anchor:w,transition:K}=U;if(L===qt)return void se(B,w);if(L===gs){(({el:J,anchor:H})=>{let te;for(;J&&J!==H;)te=g(J),a(J),J=te;a(H)})(U),K&&!K.persisted&&K.afterLeave&&K.afterLeave();return}let z=()=>{a(B),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(1&U.shapeFlag&&K&&!K.persisted){let{leave:J,delayLeave:H}=K,te=()=>J(B,z);H?H(U.el,z,te):te()}else z()},se=(U,L)=>{let B;for(;U!==L;)B=g(U),a(U),U=B;a(L)},ge=(U,L,B)=>{let{bum:w,scope:K,job:z,subTree:J,um:H,m:te,a:X}=U;Ul(te),Ul(X),w&&kr(w),K.stop(),z?(z.flags|=8,fe(J,U,L,B)):U.vnode.el&&J&&(J.transition=U.vnode.transition,fe(J,U,L,B)),H&&It(H,L),It(()=>{U.isUnmounted=!0},L)},we=(U,L,B,w=!1,K=!1,z=0)=>{for(let J=z;J<U.length;J++)fe(U[J],L,B,w,K)},oe=U=>{if(6&U.shapeFlag)return oe(U.component.subTree);if(128&U.shapeFlag)return U.suspense.next();let L=g(U.anchor||U.el),B=L&&L[pg];return B?g(B):L},pe=!1,Ie=(U,L,B)=>{let w;U==null?L._vnode&&(fe(L._vnode,null,null,!0),w=L._vnode.component):f(L._vnode||null,U,L,null,null,null,B),L._vnode=U,pe||(pe=!0,Mf(w),Cl(),pe=!1)},ve={p:f,um:fe,m:de,r:Ae,mt:N,mc:R,pc:G,pbc:M,n:oe,o:n};return e&&([i,s]=e(ve)),{render:Ie,hydrate:i,createApp:(t=i,function(U,L=null){Ve(U)||(U=Qe({},U)),L==null||at(L)||(L=null);let B=Rg(),w=new WeakSet,K=[],z=!1,J=B.app={_uid:Wx++,_component:U,_props:L,_container:null,_context:B,_instance:null,version:ev,get config(){return B.config},set config(H){},use:(H,...te)=>(w.has(H)||(H&&Ve(H.install)?(w.add(H),H.install(J,...te)):Ve(H)&&(w.add(H),H(J,...te))),J),mixin:H=>(B.mixins.includes(H)||B.mixins.push(H),J),component:(H,te)=>te?(B.components[H]=te,J):B.components[H],directive:(H,te)=>te?(B.directives[H]=te,J):B.directives[H],mount(H,te,X){if(!z){let C=J._ceVNode||bt(U,L);return C.appContext=B,X===!0?X="svg":X===!1&&(X=void 0),te&&t?t(C,H):Ie(C,H,X),z=!0,J._container=H,H.__vue_app__=J,fo(C.component)}},onUnmount(H){K.push(H)},unmount(){z&&(Un(K,J._instance,16),Ie(null,J._container),delete J._container.__vue_app__)},provide:(H,te)=>(B.provides[H]=te,J),runWithContext(H){let te=js;js=J;try{return H()}finally{js=te}}};return J})}}function Hc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ts({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function kg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _d(n,e,t=!1){let i=n.children,s=e.children;if(Le(i)&&Le(s))for(let r=0;r<i.length;r++){let a=i[r],o=s[r];1&o.shapeFlag&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&((o=s[r]=Ui(s[r])).el=a.el),t||o.patchFlag===-2||_d(a,o)),o.type===ms&&(o.patchFlag===-1&&(o=s[r]=Ui(o)),o.el=a.el),o.type!==Rt||o.el||(o.el=a.el)}}function Ul(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}let Ol=n=>n.__isSuspense,Xu=0,Qx={name:"Suspense",__isSuspense:!0,process(n,e,t,i,s,r,a,o,l,c){if(n==null)(function(u,h,d,p,g,y,m,f,x){let{p:_,o:{createElement:v}}=x,A=v("div"),T=u.suspense=If(u,g,p,h,A,d,y,m,f,x);_(null,T.pendingBranch=u.ssContent,A,null,p,T,y,m),T.deps>0?(Ia(u,"onPending"),Ia(u,"onFallback"),_(null,u.ssFallback,h,d,p,null,y,m),Ir(T,u.ssFallback)):T.resolve(!1,!0)})(e,t,i,s,r,a,o,l,c);else{if(r&&r.deps>0&&!n.suspense.isInFallback&&!r.isHydrating){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}(function(u,h,d,p,g,y,m,f,{p:x,um:_,o:{createElement:v}}){let A=h.suspense=u.suspense;A.vnode=h,h.el=u.el;let T=h.ssContent,E=h.ssFallback,{activeBranch:R,pendingBranch:b,isInFallback:M,isHydrating:P}=A;if(b)A.pendingBranch=T,ni(b,T)?(A.deps++,x(b,T,P?d:A.hiddenContainer,null,g,A,y,m,f),A.deps--,A.deps<=0?A.resolve():!M||P||A.isFallbackMountPending||(x(R,E,d,p,g,null,y,m,f),Ir(A,E))):(A.pendingId=Xu++,P?(A.isHydrating=!1,A.activeBranch=b):_(b,g,A),A.deps=0,A.effects.length=0,A.hiddenContainer=v("div"),M?(x(null,T,A.hiddenContainer,null,g,A,y,m,f),A.deps<=0?A.resolve():A.isFallbackMountPending||(x(R,E,d,p,g,null,y,m,f),Ir(A,E))):R&&ni(R,T)?(x(R,T,d,p,g,A,y,m,f),A.resolve(!0)):(x(null,T,A.hiddenContainer,null,g,A,y,m,f),A.deps<=0&&A.resolve()));else if(R&&ni(R,T))x(R,T,d,p,g,A,y,m,f),Ir(A,T);else if(Ia(h,"onPending"),A.pendingBranch=T,512&T.shapeFlag?A.pendingId=T.component.suspenseId:A.pendingId=Xu++,x(null,T,A.hiddenContainer,null,g,A,y,m,f),A.deps<=0)A.resolve();else{let{timeout:I,pendingId:F}=A;I>0?setTimeout(()=>{A.pendingId===F&&A.fallback(E)},I):I===0&&A.fallback(E)}})(n,e,t,i,s,a,o,l,c)}},hydrate:function(n,e,t,i,s,r,a,o,l){let c=e.suspense=If(e,i,t,n.parentNode,document.createElement("div"),null,s,r,a,o,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,r,a);return c.deps===0&&c.resolve(!1,!0),u},normalize:function(n){let{shapeFlag:e,children:t}=n,i=32&e;n.ssContent=Uf(i?t.default:t),n.ssFallback=i?Uf(t.fallback):bt(Rt)}};function Ia(n,e){let t=n.props&&n.props[e];Ve(t)&&t()}function If(n,e,t,i,s,r,a,o,l,c,u=!1){var h;let d,p,{p:g,m:y,um:m,n:f,o:{parentNode:x,remove:_}}=c,v=(d=(h=n).props&&h.props.suspensible)!=null&&d!==!1;v&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);let A=n.props?zr(n.props.timeout):void 0,T=r,E={vnode:n,parent:e,parentComponent:t,namespace:a,container:i,hiddenContainer:s,deps:0,pendingId:Xu++,timeout:typeof A=="number"?A:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,b=!1){let{vnode:M,activeBranch:P,pendingBranch:I,pendingId:F,effects:N,parentComponent:O,container:W,isInFallback:Z}=E,G=!1;if(E.isHydrating)E.isHydrating=!1;else if(!R){G=P&&I.transition&&I.transition.mode==="out-in";let de=!1;G&&(P.transition.afterLeave=()=>{F===E.pendingId&&(y(I,W,r!==T||de?r:f(P),0),ja(N),Z&&M.ssFallback&&(M.ssFallback.el=null))}),P&&!E.isFallbackMountPending&&(x(P.el)===W&&(r=f(P),de=!0),m(P,O,E,!0),!G&&Z&&M.ssFallback&&It(()=>M.ssFallback.el=null,E)),G||y(I,W,r,0)}E.isFallbackMountPending=!1,Ir(E,I),E.pendingBranch=null,E.isInFallback=!1;let ee=E.parent,he=!1;for(;ee;){if(ee.pendingBranch){for(let de=0;de<N.length;de++)ee.effects.push(N[de]);he=!0;break}ee=ee.parent}he||G||ja(N),E.effects=[],v&&e&&e.pendingBranch&&p===e.pendingId&&(p=void 0,e.deps--,e.deps!==0||b||e.resolve()),Ia(M,"onResolve")},fallback(R){if(!E.pendingBranch)return;let{vnode:b,activeBranch:M,parentComponent:P,container:I,namespace:F}=E;Ia(b,"onFallback");let N=f(M),O=()=>{if(E.isFallbackMountPending=!1,!E.isInFallback)return;let Z=E.vnode.ssFallback;g(null,Z,I,N,P,null,F,o,l),Ir(E,Z)},W=R.transition&&R.transition.mode==="out-in";W&&(E.isFallbackMountPending=!0,M.transition.afterLeave=O),E.isInFallback=!0,m(M,P,null,!0),W||O()},move(R,b,M){E.activeBranch&&y(E.activeBranch,R,b,M),E.container=R},next:()=>E.activeBranch&&f(E.activeBranch),registerDep(R,b,M){let P=!!E.pendingBranch;P&&E.deps++;let I=R.vnode.el;R.asyncDep.catch(F=>{or(F,R,0)}).then(F=>{if(R.isUnmounted||E.isUnmounted||E.pendingId!==R.suspenseId)return;if(Ja(),I&&!R.scope.active){P&&--E.deps==0&&E.resolve();return}R.asyncResolved=!0;let{vnode:N}=R;ju(R,F,!1),I&&(N.el=I);let O=!I&&R.subTree.el;b(R,N,x(I||R.subTree.el),I?null:f(R.subTree),E,a,M),O&&(N.placeholder=null,_(O)),xc(R,N.el),P&&--E.deps==0&&E.resolve()})},unmount(R,b){E.isUnmounted=!0,E.activeBranch&&m(E.activeBranch,t,R,b),E.pendingBranch&&m(E.pendingBranch,t,R,b)}};return E}function Uf(n){let e;if(Ve(n)){let t=Zs&&n._c;t&&(n._d=!1,Za()),n=n(),t&&(n._d=!0,e=on,yc())}return Le(n)&&(n=function(t){let i;for(let s=0;s<t.length;s++){let r=t[s];if(!Zi(r))return;if(r.type!==Rt||r.children==="v-if"){if(i)return;i=r}}return i}(n)),n=En(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function zg(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):ja(n)}function Ir(n,e){n.activeBranch=e;let{vnode:t,parentComponent:i}=n,s=e.el;for(;!s&&e.component;)s=(e=e.component.subTree).el;t.el=s,i&&i.subTree===t&&(i.vnode.el=s,xc(i,s))}let qt=Symbol.for("v-fgt"),ms=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),gs=Symbol.for("v-stc"),Gi=[],on=null;function Za(n=!1){Gi.push(on=n?null:[])}function yc(){Gi.pop(),on=Gi[Gi.length-1]||null}let Zs=1;function Ka(n,e=!1){Zs+=n,n<0&&on&&e&&(on.hasOnce=!0)}function Vg(n){return n.dynamicChildren=Zs>0?on||zs:null,yc(),Zs>0&&on&&on.push(n),n}function $x(n,e,t,i,s,r){return Vg(xd(n,e,t,i,s,r,!0))}function Fl(n,e,t,i,s){return Vg(bt(n,e,t,i,s,!0))}function Zi(n){return!!n&&n.__v_isVNode===!0}function ni(n,e){return n.type===e.type&&n.key===e.key}function ey(n){}let Hg=({key:n})=>n??null,pl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ge(n)||Ot(n)||Ve(n)?{i:Kt,r:n,k:e,f:!!t}:n:null);function xd(n,e=null,t=null,i=0,s=null,r=+(n!==qt),a=!1,o=!1){let l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hg(e),ref:e&&pl(e),scopeId:mc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kt};return o?(Bl(l,t),128&r&&n.normalize(l)):t&&(l.shapeFlag|=Ge(t)?8:16),Zs>0&&!a&&on&&(l.patchFlag>0||6&r)&&l.patchFlag!==32&&on.push(l),l}let bt=function(n,e=null,t=null,i=0,s=null,r=!1){var a;if(n&&n!==wg||(n=Rt),Zi(n)){let l=yi(n,e,!0);return t&&Bl(l,t),Zs>0&&!r&&on&&(6&l.shapeFlag?on[on.indexOf(n)]=l:on.push(l)),l.patchFlag=-2,l}if(Ve(a=n)&&"__vccOpts"in a&&(n=n.__vccOpts),e){let{class:l,style:c}=e=Gg(e);l&&!Ge(l)&&(e.class=oo(l)),at(c)&&(lo(c)&&!Le(c)&&(c=Qe({},c)),e.style=ao(c))}let o=Ge(n)?1:Ol(n)?128:n.__isTeleport?64:at(n)?4:2*!!Ve(n);return xd(n,e,t,i,s,o,r,!0)};function Gg(n){return n?lo(n)||Lg(n)?Qe({},n):n:null}function yi(n,e,t=!1,i=!1){let{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Xg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hg(c),ref:e&&e.ref?t&&r?Le(r)?r.concat(pl(e)):[r,pl(e)]:pl(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qt?a===-1?16:16|a:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yi(n.ssContent),ssFallback:n.ssFallback&&yi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Yi(u,l.clone(u)),u}function yd(n=" ",e=0){return bt(ms,null,n,e)}function ty(n,e){let t=bt(gs,null,n);return t.staticCount=e,t}function Wg(n="",e=!1){return e?(Za(),Fl(Rt,null,n)):bt(Rt,null,n)}function En(n){return n==null||typeof n=="boolean"?bt(Rt):Le(n)?bt(qt,null,n.slice()):Zi(n)?Ui(n):bt(ms,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yi(n)}function Bl(n,e){let t=0,{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(65&i){let s=e.default;s&&(s._c&&(s._d=!1),Bl(n,s()),s._c&&(s._d=!0));return}else{t=32;let s=e._;s||Lg(e)?s===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024)):e._ctx=Kt}else if(Ve(e)){if(65&i)return void Bl(n,{default:e});e={default:e,_ctx:Kt},t=32}else e=String(e),64&i?(t=16,e=[yd(e)]):t=8;n.children=e,n.shapeFlag|=t}function Xg(...n){let e={};for(let t=0;t<n.length;t++){let i=n[t];for(let s in i)if(s==="class")e.class!==i.class&&(e.class=oo([e.class,i.class]));else if(s==="style")e.style=ao([e.style,i.style]);else if(rr(s)){let r=e[s],a=i[s];a&&r!==a&&!(Le(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a!=null||r!=null||nc(s)||(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Mn(n,e,t,i=null){Un(n,e,7,[t,i])}let ny=Rg(),iy=0;function jg(n,e,t){let i=n.type,s=(e?e.appContext:n.appContext)||ny,r={uid:iy++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:function a(o,l,c=!1){let u=c?Kx:l.propsCache,h=u.get(o);if(h)return h;let d=o.props,p={},g=[],y=!1;if(!Ve(o)){let f=x=>{y=!0;let[_,v]=a(x,l,!0);Qe(p,_),v&&g.push(...v)};!c&&l.mixins.length&&l.mixins.forEach(f),o.extends&&f(o.extends),o.mixins&&o.mixins.forEach(f)}if(!d&&!y)return at(o)&&u.set(o,zs),zs;if(Le(d))for(let f=0;f<d.length;f++){let x=pt(d[f]);Nf(x)&&(p[x]=$e)}else if(d)for(let f in d){let x=pt(f);if(Nf(x)){let _=d[f],v=p[x]=Le(_)||Ve(_)?{type:_}:Qe({},_),A=v.type,T=!1,E=!0;if(Le(A))for(let R=0;R<A.length;++R){let b=A[R],M=Ve(b)&&b.name;if(M==="Boolean"){T=!0;break}M==="String"&&(E=!1)}else T=Ve(A)&&A.name==="Boolean";v[0]=T,v[1]=E,(T||ot(v,"default"))&&g.push(x)}}let m=[p,g];return at(o)&&u.set(o,m),m}(i,s),emitsOptions:function a(o,l,c=!1){let u=c?qx:l.emitsCache,h=u.get(o);if(h!==void 0)return h;let d=o.emits,p={},g=!1;if(!Ve(o)){let y=m=>{let f=a(m,l,!0);f&&(g=!0,Qe(p,f))};!c&&l.mixins.length&&l.mixins.forEach(y),o.extends&&y(o.extends),o.mixins&&o.mixins.forEach(y)}return d||g?(Le(d)?d.forEach(y=>p[y]=null):Qe(p,d),at(o)&&u.set(o,p),p):(at(o)&&u.set(o,null),null)}(i,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:i.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=jx.bind(null,r),n.ce&&n.ce(r),r}let Zt=null,_n=()=>Zt||Kt;{let n=ac(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};bl=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),fs=e("__VUE_SSR_SETTERS__",t=>Ks=t)}let ca=n=>{let e=Zt;return bl(n),n.scope.on(),()=>{n.scope.off(),bl(e)}},Ja=()=>{Zt&&Zt.scope.off(),bl(null)};function qg(n){return 4&n.vnode.shapeFlag}let Ks=!1;function Yg(n,e=!1,t=!1){e&&fs(e);let{props:i,children:s}=n.vnode,r=qg(n);(function(c,u,h,d=!1){let p={},g=Object.create(Gu);for(let y in c.propsDefaults=Object.create(null),Ng(c,u,p,g),c.propsOptions[0])y in p||(p[y]=void 0);h?c.props=d?p:eg(p):c.type.props?c.props=p:c.props=g,c.attrs=g})(n,i,r,e);var a=t||e;let o=n.slots=Object.create(Gu);if(32&n.vnode.shapeFlag){let c=s._;c?(Og(o,s,a),a&&Um(o,"_",c,!0)):Ig(s,o)}else s&&Ug(n,s);let l=r?function(c,u){let h=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,ku);let{setup:d}=h;if(d){ji();let p=c.setupContext=d.length>1?Jg(c):null,g=ca(c),y=oa(d,c,0,[c.props,p]),m=ed(y);if(qi(),g(),(m||c.sp)&&!Hi(c)&&ud(c),m){if(y.then(Ja,Ja),u)return y.then(f=>{fs(!0);try{ju(c,f,u)}finally{fs(!1)}}).catch(f=>{or(f,c,0)});c.asyncDep=y}else ju(c,y,u)}else Kg(c,u)}(n,e):void 0;return e&&fs(!1),l}function ju(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=sd(e)),Kg(n,t)}function Zg(n){El=n,Nu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Rx))}}let sy=()=>!El;function Kg(n,e,t){let i=n.type;if(!n.render){if(!e&&El&&!i.render){let s=i.template||Vu(n).template;if(s){let{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Qe(Qe({isCustomElement:r,delimiters:o},a),l);i.render=El(s,c)}}n.render=i.render||Yt,Nu&&Nu(n)}{let s=ca(n);ji();try{(function(r){let a=Vu(r),o=r.proxy,l=r.ctx;zu=!1,a.beforeCreate&&Rf(a.beforeCreate,r,"bc");let{data:c,computed:u,methods:h,watch:d,provide:p,inject:g,created:y,beforeMount:m,mounted:f,beforeUpdate:x,updated:_,activated:v,deactivated:A,beforeUnmount:T,unmounted:E,render:R,renderTracked:b,renderTriggered:M,errorCaptured:P,serverPrefetch:I,expose:F,inheritAttrs:N,components:O,directives:W}=a;if(g&&function(G,ee){for(let he in Le(G)&&(G=Hu(G)),G){let de,fe=G[he];Ot(de=at(fe)?"default"in fe?La(fe.from||he,fe.default,!0):La(fe.from||he):La(fe))?Object.defineProperty(ee,he,{enumerable:!0,configurable:!0,get:()=>de.value,set:Ae=>de.value=Ae}):ee[he]=de}}(g,l),h)for(let G in h){let ee=h[G];Ve(ee)&&(l[G]=ee.bind(o))}if(c){let G=c.call(o,o);at(G)&&(r.data=dc(G))}if(zu=!0,u)for(let G in u){let ee=u[G],he=Ve(ee)?ee.bind(o,o):Ve(ee.get)?ee.get.bind(o,o):Yt,de=Wn({get:he,set:!Ve(ee)&&Ve(ee.set)?ee.set.bind(o):Yt});Object.defineProperty(l,G,{enumerable:!0,configurable:!0,get:()=>de.value,set:fe=>de.value=fe})}if(d)for(let G in d)(function ee(he,de,fe,Ae){let se=Ae.includes(".")?fg(fe,Ae):()=>fe[Ae];if(Ge(he)){let ge=de[he];Ve(ge)&&Hr(se,ge)}else if(Ve(he))Hr(se,he.bind(fe));else if(at(he))if(Le(he))he.forEach(ge=>ee(ge,de,fe,Ae));else{let ge=Ve(he.handler)?he.handler.bind(fe):de[he.handler];Ve(ge)&&Hr(se,ge,he)}})(d[G],l,o,G);if(p){let G=Ve(p)?p.call(o):p;Reflect.ownKeys(G).forEach(ee=>{cg(ee,G[ee])})}function Z(G,ee){Le(ee)?ee.forEach(he=>G(he.bind(o))):ee&&G(ee.bind(o))}if(y&&Rf(y,r,"c"),Z(Mg,m),Z(Ys,f),Z(hd,x),Z(vc,_),Z(xg,v),Z(yg,A),Z(Ag,P),Z(Tg,b),Z(Eg,M),Z(_c,T),Z(la,E),Z(bg,I),Le(F))if(F.length){let G=r.exposed||(r.exposed={});F.forEach(ee=>{Object.defineProperty(G,ee,{get:()=>o[ee],set:he=>o[ee]=he,enumerable:!0})})}else r.exposed||(r.exposed={});R&&r.render===Yt&&(r.render=R),N!=null&&(r.inheritAttrs=N),O&&(r.components=O),W&&(r.directives=W),I&&ud(r)})(n)}finally{qi(),s()}}}let ry={get:(n,e)=>(an(n,"get",""),n[e])};function Jg(n){return{attrs:new Proxy(n.attrs,ry),slots:n.slots,emit:n.emit,expose:e=>{n.exposed=e||{}}}}function fo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(sd(tg(n.exposed)),{get:(e,t)=>t in e?e[t]:t in Na?Na[t](n):void 0,has:(e,t)=>t in e||t in Na})):n.proxy}function qu(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}let Wn=(n,e)=>function(t,i=!1){let s,r;return Ve(t)?s=t:(s=t.get,r=t.set),new Y_(s,r,i)}(n,Ks);function Qg(n,e,t){try{Ka(-1);let i=arguments.length;return i!==2?(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Zi(t)&&(t=[t]),bt(n,e,t)):!at(e)||Le(e)?bt(n,null,e):Zi(e)?bt(n,null,[e]):bt(n,e)}finally{Ka(1)}}function ay(){}function oy(n,e,t,i){let s=t[i];if(s&&$g(s,n))return s;let r=e();return r.memo=n.slice(),r.cacheIndex=i,t[i]=r}function $g(n,e){let t=n.memo;if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(Gt(t[i],e[i]))return!1;return Zs>0&&on&&on.push(n),!0}let ev="3.5.43",ly=Yt,cy=null,uy,hy=Yt,dy={createComponentInstance:jg,setupComponent:Yg,renderComponentRoot:fl,setCurrentRenderingInstance:qa,isVNode:Zi,normalizeVNode:En,getComponentPublicInstance:fo,ensureValidVNode:pd,pushWarningContext:function(n){},popWarningContext:function(){}},fy=null,py=null,my=null,Of="u">typeof window&&window.trustedTypes;if(Of)try{Iu=Of.createPolicy("vue",{createHTML:n=>n})}catch{}let tv=Iu?n=>Iu.createHTML(n):n=>n,Ii="u">typeof document?document:null,Ff=Ii&&Ii.createElement("template"),nv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{let e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{let s=e==="svg"?Ii.createElementNS("http://www.w3.org/2000/svg",n):e==="mathml"?Ii.createElementNS("http://www.w3.org/1998/Math/MathML",n):t?Ii.createElement(n,{is:t}):Ii.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ii.createTextNode(n),createComment:n=>Ii.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ii.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){let a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),s!==r&&(s=s.nextSibling););else{Ff.innerHTML=tv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);let o=Ff.content;if(i==="svg"||i==="mathml"){let l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Qi="transition",va="animation",Kr=Symbol("_vtc"),iv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sv=Qe({},ld,iv),gy=((jc=(n,{slots:e})=>Qg(vg,rv(n),e)).displayName="Transition",jc.props=sv,jc),As=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Bf=n=>!!n&&(Le(n)?n.some(e=>e.length>1):n.length>1);function rv(n){let e={};for(let I in n)I in iv||(e[I]=n[I]);if(n.css===!1)return e;let{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=function(I){if(I==null)return null;{if(at(I))return[function(N){return zr(N)}(I.enter),function(N){return zr(N)}(I.leave)];let F=function(N){return zr(N)}(I);return[F,F]}}(s),y=g&&g[0],m=g&&g[1],{onBeforeEnter:f,onEnter:x,onEnterCancelled:_,onLeave:v,onLeaveCancelled:A,onBeforeAppear:T=f,onAppear:E=x,onAppearCancelled:R=_}=e,b=(I,F,N,O)=>{I._enterCancelled=O,os(I,F?u:o),os(I,F?c:a),N&&N()},M=(I,F)=>{I._isLeaving=!1,os(I,h),os(I,p),os(I,d),F&&F()},P=I=>(F,N)=>{let O=I?E:x,W=()=>b(F,I,N);As(O,[F,W]),kf(()=>{os(F,I?l:r),ui(F,I?u:o),Bf(O)||zf(F,i,y,W)})};return Qe(e,{onBeforeEnter(I){As(f,[I]),ui(I,r),ui(I,a)},onBeforeAppear(I){As(T,[I]),ui(I,l),ui(I,c)},onEnter:P(!1),onAppear:P(!0),onLeave(I,F){I._isLeaving=!0;let N=()=>M(I,F);ui(I,h),I._enterCancelled?(ui(I,d),Yu(I)):(Yu(I),ui(I,d)),kf(()=>{I._isLeaving&&(os(I,h),ui(I,p),Bf(v)||zf(I,i,m,N))}),As(v,[I,N])},onEnterCancelled(I){b(I,!1,void 0,!0),As(_,[I])},onAppearCancelled(I){b(I,!0,void 0,!0),As(R,[I])},onLeaveCancelled(I){M(I),As(A,[I])}})}function ui(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Kr]||(n[Kr]=new Set)).add(e)}function os(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));let t=n[Kr];t&&(t.delete(e),t.size||(n[Kr]=void 0))}function kf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let vy=0;function zf(n,e,t,i){let s=n._endId=++vy,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);let{type:a,timeout:o,propCount:l}=av(n,e);if(!a)return i();let c=a+"end",u=0,h=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,d)}function av(n,e){let t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Qi}Delay`),r=i(`${Qi}Duration`),a=Vf(s,r),o=i(`${va}Delay`),l=i(`${va}Duration`),c=Vf(o,l),u=null,h=0,d=0;e===Qi?a>0&&(u=Qi,h=a,d=r.length):e===va?c>0&&(u=va,h=c,d=l.length):d=(u=(h=Math.max(a,c))>0?a>c?Qi:va:null)?u===Qi?r.length:l.length:0;let p=u===Qi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Qi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Vf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Hf(t)+Hf(n[i])))}function Hf(n){return n==="auto"?0:1e3*Number(n.slice(0,-1).replace(",","."))}function Yu(n){return(n?n.ownerDocument:document).body.offsetHeight}let kl=Symbol("_vod"),Sd=Symbol("_vsh"),ov={name:"show",beforeMount(n,{value:e},{transition:t}){n[kl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):_a(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),_a(n,!0),i.enter(n)):i.leave(n,()=>{_a(n,!1)}):_a(n,e))},beforeUnmount(n,{value:e}){_a(n,e)}};function _a(n,e){n.style.display=e?n[kl]:"none",n[Sd]=!e}let lv=Symbol("");function _y(n){let e=_n();if(!e)return;let t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ao(r,s))},i=()=>{let s=n(e.proxy);e.ce?Ao(e.ce,s):function r(a,o){if(128&a.shapeFlag){let l=a.suspense;a=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{r(l.activeBranch,o)})}for(;a.component;)a=a.component.subTree;if(1&a.shapeFlag&&a.el)Ao(a.el,o);else if(a.type===qt)a.children.forEach(l=>r(l,o));else if(a.type===gs){let{el:l,anchor:c}=a;for(;l&&(Ao(l,o),l!==c);)l=l.nextSibling}}(e.subTree,s),t(s)};hd(()=>{ja(i)}),Ys(()=>{Hr(i,Yt,{flush:"post"});let s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),la(()=>s.disconnect())})}function Ao(n,e){if(n.nodeType===1){let i=n.style,s="";for(let r in e){var t;let a=(t=e[r])==null?"initial":typeof t=="string"?t===""?" ":t:String(t);i.setProperty(`--${r}`,a),s+=`--${r}: ${a};`}i[lv]=s}}let xy=/(?:^|;)\s*display\s*:/,wo=/\s*!important$/;function Aa(n,e,t){if(Le(t))t.forEach(i=>Aa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))wo.test(t)?n.setProperty(e,t.replace(wo,""),"important"):n.setProperty(e,t);else{let i=function(s,r){let a=Gc[r];if(a)return a;let o=pt(r);if(o!=="filter"&&o in s)return Gc[r]=o;o=ar(o);for(let l=0;l<Gf.length;l++){let c=Gf[l]+o;if(c in s)return Gc[r]=c}return r}(n,e);wo.test(t)?n.setProperty(An(i),t.replace(wo,""),"important"):n[i]=t}}let Gf=["Webkit","Moz","ms"],Gc={},Wf="http://www.w3.org/1999/xlink";function Xf(n,e,t,i,s,r=x_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wf,e.slice(6,e.length)):n.setAttributeNS(Wf,e,t):t==null||r&&!(t||t==="")?n.removeAttribute(e):n.setAttribute(e,r?"":ln(t)?String(t):t)}function jf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?tv(t):t);return}let r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){let l=r==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);l===c&&"_value"in n||(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){let l=typeof n[e];if(l==="boolean"){var o;t=!!(o=t)||o===""}else t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Bi(n,e,t,i){n.addEventListener(e,t,i)}let qf=Symbol("_vei"),yy=/(Once|Passive|Capture)$/,Sy=/^on:?(?:Once|Passive|Capture)$/,Wc=0,My=Promise.resolve(),Yf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&123>n.charCodeAt(2),cv=(n,e,t,i,s,r)=>{let a=s==="svg";if(e==="class"){var o;let l;o=i,(l=n[Kr])&&(o=(o?[o,...l]:[...l]).join(" ")),o==null?n.removeAttribute("class"):a?n.setAttribute("class",o):n.className=o}else e==="style"?function(l,c,u){let h=l.style,d=Ge(u),p=!1;if(u&&!d){if(c)if(Ge(c))for(let x of c.split(";")){let _=x.slice(0,x.indexOf(":")).trim();u[_]==null&&Aa(h,_,"")}else for(let x in c)u[x]==null&&Aa(h,x,"");for(let x in u){var g,y,m,f;x==="display"&&(p=!0);let _=u[x];_!=null?(g=l,y=x,m=!Ge(c)&&c?c[x]:void 0,f=_,g.tagName==="TEXTAREA"&&(y==="width"||y==="height")&&Ge(f)&&m===f||Aa(h,x,_)):Aa(h,x,"")}}else if(d){if(c!==u){let x=h[lv];x&&(u+=";"+x),h.cssText=u,p=xy.test(u)}}else c&&l.removeAttribute("style");kl in l&&(l[kl]=p?h.display:"",l[Sd]&&(h.display="none"))}(n,t,i):rr(e)?nc(e)||function(l,c,u,h=null){let d=l[qf]||(l[qf]={}),p=d[c];if(u&&p)p.value=u;else{let[m,f]=function(x){let _,v;for(;(v=x.match(yy))&&!Sy.test(x);)_||(_={}),x=x.slice(0,x.length-v[1].length),_[v[1].toLowerCase()]=!0;return[x[2]===":"?x.slice(3):An(x.slice(2)),_]}(c);if(u){var g,y;let x;Bi(l,m,d[c]=(g=u,y=h,(x=_=>{if(_._vts){if(_._vts<=x.attached)return}else _._vts=Date.now();let v=x.value;if(Le(v)){let A=_.stopImmediatePropagation;_.stopImmediatePropagation=()=>{A.call(_),_._stopped=!0};let T=v.slice(),E=[_];for(let R=0;R<T.length&&!_._stopped;R++){let b=T[R];b&&Un(b,y,5,E)}}else Un(v,y,5,[_])}).value=g,x.attached=Wc||(My.then(()=>Wc=0),Wc=Date.now()),x),f)}else p&&(l.removeEventListener(m,p,f),d[c]=void 0)}}(n,e,i,r):(e[0]==="."?(e=e.slice(1),0):e[0]==="^"?(e=e.slice(1),1):!function(l,c,u,h){if(h)return!!(c==="innerHTML"||c==="textContent"||c in l&&Yf(c)&&Ve(u));if(c==="spellcheck"||c==="draggable"||c==="translate"||c==="autocorrect"||c==="sandbox"&&l.tagName==="IFRAME"||c==="form"||c==="list"&&l.tagName==="INPUT"||c==="type"&&l.tagName==="TEXTAREA")return!1;if(c==="width"||c==="height"){let d=l.tagName;if(d==="IMG"||d==="VIDEO"||d==="CANVAS"||d==="SOURCE")return!1}return!(Yf(c)&&Ge(u))&&c in l}(n,e,i,a))?n._isVueCE&&(function(l,c){let u=l._def.props;if(!u)return!1;let h=pt(c);return Array.isArray(u)?u.some(d=>pt(d)===h):Object.keys(u).some(d=>pt(d)===h)}(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ge(i)))?jf(n,pt(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xf(n,e,i,a)):(jf(n,e,i),n.tagName.includes("-")||e!=="value"&&e!=="checked"&&e!=="selected"||Xf(n,e,i,a,r,e!=="value"))},Zf={};function uv(n,e,t){let i,s=cd(n,e);i=s,_t.call(i)==="[object Object]"&&(s=Qe({},s,e));class r extends Sc{constructor(o){super(s,o,t)}}return r.def=s,r}let by=(n,e)=>uv(n,e,Sv),Ey="u">typeof HTMLElement?HTMLElement:class{};class Sc extends Ey{constructor(e,t={},i=Hl){super(),this._def=e,this._props=t,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&i!==Hl?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow(Qe({},e.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._resolved||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.assignedSlot||e.parentNode||e.host);)if(e instanceof Sc){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{if(this._pendingResolve=void 0,this.isConnected)return this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,pc(()=>{!this._connected&&(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(e){for(let t of e)this._setAttr(t.attributeName)}_resolveDef(){if(this._pendingResolve)return this._pendingResolve;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});let e=(i,s=!1)=>{let r;this._resolved=!0,this._pendingResolve=void 0;let{props:a,styles:o}=i;if(a&&!Le(a))for(let l in a){let c=a[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=zr(this._props[l])),(r||(r=Object.create(null)))[pt(l)]=!0)}this._numberProps=r,this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},t=this._def.__asyncLoader;if(t)return this._pendingResolve=t().then(i=>{i.configureApp=this._def.configureApp,e(this._def=i,!0)}),this._pendingResolve;e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let t=this._instance&&this._instance.exposed;if(t)for(let i in t)ot(this,i)||Object.defineProperty(this,i,{get:()=>co(t[i])})}_resolveProps(e){let{props:t}=e,i=Le(t)?t:Object.keys(t||{});for(let s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(let s of i.map(pt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!this._patching)}})}_setAttr(e){if(e.startsWith("data-v-"))return;let t=this.hasAttribute(e),i=t?this.getAttribute(e):Zf,s=pt(e);t&&this._numberProps&&this._numberProps[s]&&(i=zr(i)),this._setProp(s,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,i=!0,s=!1){if(t!==this._props[e]&&(this._dirty=!0,t===Zf?delete this._props[e]:(this._props[e]=t,e==="key"&&this._app&&(this._app._ceVNode.key=t)),s&&this._instance&&this._update(),i)){let r=this._ob;r&&(this._processMutations(r.takeRecords()),r.disconnect()),t===!0?this.setAttribute(An(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(An(e),t+""):t||this.removeAttribute(An(e)),r&&r.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),yv(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let t=bt(this._def,Qe(e,this._props));return this._instance||(t.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;let s=(r,a)=>{let o;this.dispatchEvent(new CustomEvent(r,(o=a[0],_t.call(o)==="[object Object]"?Qe({detail:a},a[0]):{detail:a})))};i.emit=(r,...a)=>{s(r,a),An(r)!==r&&s(An(r),a)},this._setParent()}),t}_applyStyles(e,t,i){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}let s=this._nonce,r=this.shadowRoot,a=i?this._getStyleAnchor(i)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(r),o=null;for(let l=e.length-1;l>=0;l--){let c=document.createElement("style");s&&c.setAttribute("nonce",s),c.textContent=e[l],r.insertBefore(c,o||a),o=c,l===0&&(i||this._styleAnchors.set(this._def,c),t&&this._styleAnchors.set(t,c))}}_getStyleAnchor(e){if(!e)return null;let t=this._styleAnchors.get(e);return t&&t.parentNode===this.shadowRoot?t:(t&&this._styleAnchors.delete(e),null)}_getRootStyleInsertionAnchor(e){for(let t=0;t<e.childNodes.length;t++){let i=e.childNodes[t];if(!(i instanceof HTMLStyleElement))return i}return null}_parseSlots(){let e,t=this._slots={};for(;e=this.firstChild;){let i=e.nodeType===1&&e.getAttribute("slot")||"default";(t[i]||(t[i]=[])).push(e),this.removeChild(e)}}_renderSlots(){let e=this._getSlots(),t=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){let s=e[i],r=s.getAttribute("name")||"default",a=this._slots[r],o=s.parentNode;if(a)for(let l of a){if(t&&l.nodeType===1){let c,u=t+"-s",h=document.createTreeWalker(l,1);for(l.setAttribute(u,"");c=h.nextNode();)c.setAttribute(u,"")}o.insertBefore(l,s)}else for(;s.firstChild;)o.insertBefore(s.firstChild,s);o.removeChild(s)}}_getSlots(){let e=[this];this._teleportTargets&&e.push(...this._teleportTargets);let t=new Set;for(let i of e){let s=i.querySelectorAll("slot");for(let r=0;r<s.length;r++)t.add(s[r])}return Array.from(t)}_injectChildStyle(e,t){this._applyStyles(e.styles,e,t)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(e){}}function hv(n){let e=_n();return e&&e.ce||null}function Ty(){let n=hv();return n&&n.shadowRoot}function Ay(n="$style"){{let e=_n();if(!e)return $e;let t=e.type.__cssModules;return t&&t[n]||$e}}let dv=new WeakMap,fv=new WeakMap,zl=Symbol("_moveCb"),Kf=Symbol("_enterCb"),wy=(qc={name:"TransitionGroup",props:Qe({},sv,{tag:String,moveClass:String}),setup(n,{slots:e}){let t,i,s=_n(),r=od();return vc(()=>{if(!t.length)return;let a=n.moveClass||`${n.name||"v"}-move`;if(!function(l,c,u){let h=l.cloneNode(),d=l[Kr];d&&d.forEach(y=>{y.split(/\s+/).forEach(m=>m&&h.classList.remove(m))}),u.split(/\s+/).forEach(y=>y&&h.classList.add(y)),h.style.display="none";let p=c.nodeType===1?c:c.parentNode;p.appendChild(h);let{hasTransform:g}=av(h);return p.removeChild(h),g}(t[0].el,s.vnode.el,a)){t=[];return}t.forEach(Cy),t.forEach(Ry);let o=t.filter(Py);Yu(s.vnode.el),o.forEach(l=>{let c=l.el,u=c.style;ui(c,a),u.transform=u.webkitTransform=u.transitionDuration="";let h=c[zl]=d=>{(!d||d.target===c)&&(!d||d.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",h),c[zl]=null,os(c,a))};c.addEventListener("transitionend",h)}),t=[]}),()=>{let a=tt(n),o=rv(a),l=a.tag||qt;if(t=[],i)for(let c=0;c<i.length;c++){let u=i[c];u.el&&u.el instanceof Element&&!u.el[Sd]&&(t.push(u),Yi(u,Zr(u,o,r,s)),dv.set(u,pv(u.el)))}i=e.default?gc(e.default()):[];for(let c=0;c<i.length;c++){let u=i[c];u.key!=null&&Yi(u,Zr(u,o,r,s))}return bt(l,null,i)}}},delete qc.props.mode,qc);function Cy(n){let e=n.el;e[zl]&&e[zl](),e[Kf]&&e[Kf]()}function Ry(n){fv.set(n,pv(n.el))}function Py(n){let e=dv.get(n),t=fv.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){let r=n.el,a=r.style,o=r.getBoundingClientRect(),l=1,c=1;return r.offsetWidth&&(l=o.width/r.offsetWidth),r.offsetHeight&&(c=o.height/r.offsetHeight),Number.isFinite(l)&&l!==0||(l=1),Number.isFinite(c)&&c!==0||(c=1),.01>Math.abs(l-1)&&(l=1),.01>Math.abs(c-1)&&(c=1),a.transform=a.webkitTransform=`translate(${i/l}px,${s/c}px)`,a.transitionDuration="0s",n}}function pv(n){let e=n.getBoundingClientRect();return{left:e.left,top:e.top}}let _s=n=>{let e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>kr(e,t):e};function Dy(n){n.target.composing=!0}function Jf(n){let e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}let Nn=Symbol("_assign"),Co=Symbol("_initialValue");function Xc(n,e,t){return e&&(n=n.trim()),t&&(n=rc(n)),n}let Vl={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Co]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Co]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Nn]=_s(s);let r=i||s.props&&s.props.type==="number";Bi(n,e?"change":"input",a=>{a.target.composing||n[Nn](Xc(n.value,t,r))}),(t||r)&&Bi(n,"change",()=>{n.value=Xc(n.value,t,r)}),e||(Bi(n,"compositionstart",Dy),Bi(n,"compositionend",Jf),Bi(n,"change",Jf))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){let s=n[Co];delete n[Co],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Nn](Xc(n.value,t,i)):n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Nn]=_s(a),n.composing)return;let o=(r||n.type==="number")&&!/^0\d/.test(n.value)?rc(n.value):n.value,l=e??"";if(o===l)return;let c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Md={deep:!0,created(n,e,t){n[Nn]=_s(t),Bi(n,"change",()=>{let i=n._modelValue,s=Jr(n),r=n.checked,a=n[Nn];if(Le(i)){let o=oc(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){let c=[...i];c.splice(o,1),a(c)}}else{let o;if(o=i,_t.call(o)==="[object Set]"){let l=new Set(i);r?l.add(s):l.delete(s),a(l)}else a(gv(n,r))}})},mounted:Qf,beforeUpdate(n,e,t){n[Nn]=_s(t),Qf(n,e,t)}};function Qf(n,{value:e,oldValue:t},i){let s;if(n._modelValue=e,Le(e))s=oc(e,i.props.value)>-1;else{let r;if(r=e,_t.call(r)==="[object Set]")s=e.has(i.props.value);else{if(e===t)return;s=li(e,gv(n,!0))}}n.checked!==s&&(n.checked=s)}let bd={created(n,{value:e},t){n.checked=li(e,t.props.value),n[Nn]=_s(t),Bi(n,"change",()=>{n[Nn](Jr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[Nn]=_s(i),e!==t&&(n.checked=li(e,i.props.value))}},mv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Bi(n,"change",()=>{let s,r=Array.prototype.filter.call(n.options,c=>c.selected).map(c=>t?rc(Jr(c)):Jr(c)),a=n.multiple,o=a?(s=n._modelValue,_t.call(s)==="[object Set]"?new Set(r):r):r[0],l=n._pendingValue=[a,a?Le(o)?r.slice():r:o];try{n[Nn](o)}finally{pc(()=>{n._pendingValue===l&&(n._pendingValue=void 0)})}}),n[Nn]=_s(i)},mounted(n,{value:e}){$f(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Nn]=_s(t)},updated(n,{value:e}){let t=n._pendingValue;n._pendingValue=void 0,t&&t[0]===n.multiple&&function(i,s,r){let a;if(!r||Le(i))return li(i,s);if(a=i,_t.call(a)==="[object Set]"){if(i.size!==s.length)return!1;for(let o of s)if(!i.has(o))return!1;return!0}return!1}(e,t[1],t[0])||$f(n,e)}};function $f(n,e){let t,i=n.multiple,s=Le(e);if(!i||s||(t=e,_t.call(t)==="[object Set]")){for(let r=0,a=n.options.length;r<a;r++){let o=n.options[r],l=Jr(o);if(i)if(s){let c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=oc(e,l)>-1}else o.selected=e.has(l);else if(li(Jr(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}i||n.selectedIndex===-1||(n.selectedIndex=-1)}}function Jr(n){return"_value"in n?n._value:n.value}function gv(n,e){let t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}let vv={created(n,e,t){Ro(n,e,t,null,"created")},mounted(n,e,t){Ro(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Ro(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Ro(n,e,t,i,"updated")}};function _v(n,e){switch(n){case"SELECT":return mv;case"TEXTAREA":return Vl;default:switch(e){case"checkbox":return Md;case"radio":return bd;default:return Vl}}}function Ro(n,e,t,i,s){let r=_v(n.tagName,t.props&&t.props.type)[s];r&&r(n,e,t,i)}let Ly=["ctrl","shift","alt","meta"],Ny={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Ly.some(t=>n[`${t}Key`]&&!e.includes(t))},Iy=(n,e)=>{if(!n)return n;let t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){let o=Ny[e[a]];if(o&&o(s,e))return}return n(s,...r)})},Uy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oy=(n,e)=>{let t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;let r=An(s.key);if(e.some(a=>a===r||Uy[a]===r))return n(s)})},Ed=Qe({patchProp:cv},nv),ep=!1;function xv(){return Ws=ep?Ws:Fg(Ed),ep=!0,Ws}let yv=(...n)=>{(Ws||(Ws=vd(Ed))).render(...n)},Fy=(...n)=>{xv().hydrate(...n)},Hl=(...n)=>{let e=(Ws||(Ws=vd(Ed))).createApp(...n),{mount:t}=e;return e.mount=i=>{let s=bv(i);if(!s)return;let r=e._component;Ve(r)||r.render||r.template||(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");let a=t(s,!1,Mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e},Sv=(...n)=>{let e=xv().createApp(...n),{mount:t}=e;return e.mount=i=>{let s=bv(i);if(s)return t(s,!0,Mv(s))},e};function Mv(n){return n instanceof SVGElement?"svg":typeof MathMLElement=="function"&&n instanceof MathMLElement?"mathml":void 0}function bv(n){return Ge(n)?document.querySelector(n):n}let tp=!1,By=()=>{tp||(tp=!0,Vl.getSSRProps=({value:n})=>({value:n}),bd.getSSRProps=({value:n},e)=>{if(e.props&&li(e.props.value,n))return{checked:!0}},Md.getSSRProps=({value:n},e)=>{if(Le(n)){if(e.props&&oc(n,e.props.value)>-1)return{checked:!0}}else{let t;if(t=n,_t.call(t)==="[object Set]"){if(e.props&&n.has(e.props.value))return{checked:!0}}else if(n)return{checked:!0}}},vv.getSSRProps=(n,e)=>{if(typeof e.type!="string")return;let t=_v(e.type.toUpperCase(),e.props&&e.props.type);if(t.getSSRProps)return t.getSSRProps(n,e)},ov.getSSRProps=({value:n})=>{if(!n)return{style:{display:"none"}}})};var jc,qc,np,ky=Object.freeze({__proto__:null,BaseTransition:vg,BaseTransitionPropsValidators:ld,Comment:Rt,DeprecationTypes:my,EffectScope:td,ErrorCodes:$_,ErrorTypeStrings:cy,Fragment:qt,KeepAlive:Sx,ReactiveEffect:Ga,Static:gs,Suspense:Qx,Teleport:lx,Text:ms,TrackOpTypes:Z_,Transition:gy,TransitionGroup:wy,TriggerOpTypes:K_,VueElement:Sc,assertNumber:Q_,callWithAsyncErrorHandling:Un,callWithErrorHandling:oa,camelize:pt,capitalize:ar,cloneVNode:yi,compatUtils:py,computed:Wn,createApp:Hl,createBlock:Fl,createCommentVNode:Wg,createElementBlock:$x,createElementVNode:xd,createHydrationRenderer:Fg,createPropsRestProxy:Vx,createRenderer:vd,createSSRApp:Sv,createSlots:Ax,createStaticVNode:ty,createTextVNode:yd,createVNode:bt,customRef:sg,defineAsyncComponent:yx,defineComponent:cd,defineCustomElement:uv,defineEmits:Dx,defineExpose:Lx,defineModel:Ux,defineOptions:Nx,defineProps:Px,defineSSRCustomElement:by,defineSlots:Ix,devtools:uy,effect:E_,effectScope:M_,getCurrentInstance:_n,getCurrentScope:zm,getCurrentWatcher:J_,getTransitionRawChildren:gc,guardReactiveProps:Gg,h:Qg,handleError:or,hasInjectionContext:sx,hydrate:Fy,hydrateOnIdle:gx,hydrateOnInteraction:xx,hydrateOnMediaQuery:_x,hydrateOnVisible:vx,initCustomFormatter:ay,initDirectivesForSSR:By,inject:La,isMemoSame:$g,isProxy:lo,isReactive:_i,isReadonly:ci,isRef:Ot,isRuntimeOnly:sy,isShallow:wn,isVNode:Zi,markRaw:tg,mergeDefaults:kx,mergeModels:zx,mergeProps:Xg,nextTick:pc,nodeOps:nv,normalizeClass:oo,normalizeProps:p_,normalizeStyle:ao,onActivated:xg,onBeforeMount:Mg,onBeforeUnmount:_c,onBeforeUpdate:hd,onDeactivated:yg,onErrorCaptured:Ag,onMounted:Ys,onRenderTracked:Tg,onRenderTriggered:Eg,onScopeDispose:b_,onServerPrefetch:bg,onUnmounted:la,onUpdated:vc,onWatcherCleanup:ag,openBlock:Za,patchProp:cv,popScopeId:tx,provide:cg,proxyRefs:sd,pushScopeId:ex,queuePostFlushCb:ja,reactive:dc,readonly:Al,ref:it,registerRuntimeCompiler:Zg,render:yv,renderList:Tx,renderSlot:wx,resolveComponent:Mx,resolveDirective:Ex,resolveDynamicComponent:bx,resolveFilter:fy,resolveTransitionHooks:Zr,setBlockTracking:Ka,setDevtoolsHook:hy,setTransitionHooks:Yi,shallowReactive:eg,shallowReadonly:k_,shallowRef:ng,ssrContextKey:ug,ssrUtils:dy,stop:T_,toDisplayString:Bm,toHandlerKey:Br,toHandlers:Cx,toRaw:tt,toRef:q_,toRefs:X_,toValue:H_,transformVNodeArgs:ey,triggerRef:V_,unref:co,useAttrs:Bx,useCssModule:Ay,useCssVars:_y,useHost:hv,useId:cx,useModel:Xx,useSSRContext:hg,useShadowRoot:Ty,useSlots:Fx,useTemplateRef:ux,useTransitionState:od,vModelCheckbox:Md,vModelDynamic:vv,vModelRadio:bd,vModelSelect:mv,vModelText:Vl,vShow:ov,version:ev,warn:ly,watch:Hr,watchEffect:rx,watchPostEffect:ax,watchSyncEffect:dg,withAsyncContext:Hx,withCtx:ad,withDefaults:Ox,withDirectives:ix,withKeys:Oy,withMemo:oy,withModifiers:Iy,withScopeId:nx});let Qa=Symbol(""),Ua=Symbol(""),Td=Symbol(""),Gl=Symbol(""),Ev=Symbol(""),Js=Symbol(""),Qs=Symbol(""),$s=Symbol(""),xs=Symbol(""),ys=Symbol(""),po=Symbol(""),Ad=Symbol(""),Tv=Symbol(""),wd=Symbol(""),Zu=Symbol(""),Cd=Symbol(""),zy=Symbol(""),Rd=Symbol(""),Pd=Symbol(""),Av=Symbol(""),wv=Symbol(""),Mc=Symbol(""),Wl=Symbol(""),Dd=Symbol(""),Ld=Symbol(""),$a=Symbol(""),mo=Symbol(""),Nd=Symbol(""),Ku=Symbol(""),Vy=Symbol(""),Ju=Symbol(""),Xl=Symbol(""),Hy=Symbol(""),Gy=Symbol(""),Id=Symbol(""),Wy=Symbol(""),Xy=Symbol(""),Ud=Symbol(""),Cv=Symbol(""),Qr={[Qa]:"Fragment",[Ua]:"Teleport",[Td]:"Suspense",[Gl]:"KeepAlive",[Ev]:"BaseTransition",[Js]:"openBlock",[Qs]:"createBlock",[$s]:"createElementBlock",[xs]:"createVNode",[ys]:"createElementVNode",[po]:"createCommentVNode",[Ad]:"createTextVNode",[Tv]:"createStaticVNode",[wd]:"resolveComponent",[Zu]:"resolveDynamicComponent",[Cd]:"resolveDirective",[zy]:"resolveFilter",[Rd]:"withDirectives",[Pd]:"renderList",[Av]:"renderSlot",[wv]:"createSlots",[Mc]:"toDisplayString",[Wl]:"mergeProps",[Dd]:"normalizeClass",[Ld]:"normalizeStyle",[$a]:"normalizeProps",[mo]:"guardReactiveProps",[Nd]:"toHandlers",[Ku]:"camelize",[Vy]:"capitalize",[Ju]:"toHandlerKey",[Xl]:"setBlockTracking",[Hy]:"pushScopeId",[Gy]:"popScopeId",[Id]:"withCtx",[Wy]:"unref",[Xy]:"isRef",[Ud]:"withMemo",[Cv]:"isMemoSame"},On={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function eo(n,e,t,i,s,r,a,o=!1,l=!1,c=!1,u=On){var h,d,p,g;return n&&(o?(n.helper(Js),n.helper((h=n.inSSR,d=c,h||d?Qs:$s))):n.helper((p=n.inSSR,g=c,p||g?xs:ys)),a&&n.helper(Rd)),{type:13,tag:e,props:t,children:i,patchFlag:s,dynamicProps:r,directives:a,isBlock:o,disableTracking:l,isComponent:c,loc:u}}function qs(n,e=On){return{type:17,loc:e,elements:n}}function Yn(n,e=On){return{type:15,loc:e,properties:n}}function Ut(n,e){return{type:16,loc:On,key:Ge(n)?je(n,!0):n,value:e}}function je(n,e=!1,t=On,i=0){return{type:4,loc:t,content:n,isStatic:e,constType:e?3:i}}function oi(n,e=On){return{type:8,loc:e,children:n}}function kt(n,e=[],t=On){return{type:14,loc:t,callee:n,arguments:e}}function $r(n,e,t=!1,i=!1,s=On){return{type:18,params:n,returns:e,newline:t,isSlot:i,loc:s}}function Qu(n,e,t,i=!0){return{type:19,test:n,consequent:e,alternate:t,newline:i,loc:On}}function Od(n,{helper:e,removeHelper:t,inSSR:i}){if(!n.isBlock){var s,r;n.isBlock=!0,t((s=n.isComponent,i||s?xs:ys)),e(Js),e((r=n.isComponent,i||r?Qs:$s))}}let ip=new Uint8Array([123,123]),sp=new Uint8Array([125,125]);function rp(n){return n>=97&&n<=122||n>=65&&n<=90}function Ln(n){return n===32||n===10||n===9||n===12||n===13}function $i(n){return n===47||n===62||Ln(n)}function jl(n){let e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}let en={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};function $u(n){throw n}function Rv(n){}function ft(n,e,t,i){let s=SyntaxError(`https://vuejs.org/error-reference/#compiler-${n}`);return s.code=n,s.loc=e,s}let gn=n=>n.type===4&&n.isStatic;function Pv(n){switch(n){case"Teleport":case"teleport":return Ua;case"Suspense":case"suspense":return Td;case"KeepAlive":case"keep-alive":return Gl;case"BaseTransition":case"base-transition":return Ev}}let eh=/^$|^\d|[^\$\w\xA0-\uFFFF]/,Dv=/[A-Za-z_$\xA0-\uFFFF]/,jy=/[\.\?\w$\xA0-\uFFFF]/,qy=/\s+[.[]\s*|\s*[.[]\s+/g,Lv=n=>n.type===4?n.content:n.loc.source,Nv=n=>{let e=Lv(n).trim().replace(qy,o=>o.trim()),t=0,i=[],s=0,r=0,a=null;for(let o=0;o<e.length;o++){let l=e.charAt(o);switch(t){case 0:if(l==="[")i.push(t),t=1,s++;else if(l==="(")i.push(t),t=2,r++;else if(!(o===0?Dv:jy).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(t),t=3,a=l):l==="["?s++:l!=="]"||--s||(t=i.pop());break;case 2:if(l==="'"||l==='"'||l==="`")i.push(t),t=3,a=l;else if(l==="(")r++;else if(l===")"){if(o===e.length-1)return!1;--r||(t=i.pop())}break;case 3:l===a&&(t=i.pop(),a=null)}}return!s&&!r},Yy=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/;function jn(n,e,t=!1){for(let i=0;i<n.props.length;i++){let s=n.props[i];if(s.type===7&&(t||s.exp)&&(Ge(e)?s.name===e:e.test(s.name)))return s}}function bc(n,e,t=!1,i=!1){for(let s=0;s<n.props.length;s++){let r=n.props[s];if(r.type===6){if(t)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&Oa(r.arg,e))return r}}function Oa(n,e){return!!(n&&gn(n)&&n.content===e)}function Yc(n){return n.type===5||n.type===2}function ap(n){return n.type===7&&n.name==="pre"}function Zy(n){return n.type===7&&n.name==="slot"}function ql(n){return n.type===1&&n.tagType===3}function Yl(n){return n.type===1&&n.tagType===2}let Ky=new Set([$a,mo]);function th(n,e=[]){if(n&&!Ge(n)&&n.type===14){let t=n.callee;if(!Ge(t)&&Ky.has(t))return th(n.arguments[0],e.concat(n))}return[n,e]}function Zl(n,e,t){let i,s;if(n.type!==13&&function(o,l){var c,u,h;if(l.key.type!==4||l.key.content!=="key")return!1;let d=o.arguments[2];if(d&&!Ge(d)){let[p]=th(d);if(p&&!Ge(p)&&p.type===15&&Zc(l,p))return!0}return(c=o.arguments)[2]||(c[2]="{}"),(u=o.arguments)[3]||(u[3]="undefined"),(h=o.arguments)[4]||(h[4]="undefined"),o.arguments[5]=l.value,!0}(n,e))return;let r=n.type===13?n.props:n.arguments[2],a=[];if(r&&!Ge(r)&&r.type===14){let o=th(r);r=o[0],s=(a=o[1])[a.length-1]}if(r==null||Ge(r))i=Yn([e]);else if(r.type===14){let o=r.arguments[0];Ge(o)||o.type!==15?r.callee===Nd?i=kt(t.helper(Wl),[Yn([e]),r]):r.arguments.unshift(Yn([e])):Zc(e,o)||o.properties.unshift(e),i||(i=r)}else r.type===15?(Zc(e,r)||r.properties.unshift(e),i=r):(i=kt(t.helper(Wl),[Yn([e]),r]),s&&s.callee===mo&&(s=a[a.length-2]));n.type===13?s?s.arguments[0]=i:n.props=i:s?s.arguments[0]=i:n.arguments[2]=i}function Zc(n,e){let t=!1;if(n.key.type===4){let i=n.key.content;t=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return t}function nh(n,e){return`_${e}_${n.replace(/[^\w]/g,(t,i)=>t==="-"?"_":n.charCodeAt(i).toString())}`}let Jy=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function Iv(n){for(let e=0;e<n.length;e++)if(!Ln(n.charCodeAt(e)))return!1;return!0}function Fd(n){return n.type===2&&Iv(n.content)||n.type===12&&Fd(n.content)}function Uv(n){return n.type===3||Fd(n)}let Ov={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Lr,isPreTag:Lr,isIgnoreNewlineTag:Lr,isCustomElement:Lr,onError:$u,onWarn:Rv,comments:!1,prefixIdentifiers:!1},vt=Ov,Kl=null,Wi="",rn=null,ut=null,Dn="",Li=-1,Us=-1,Bd=0,Bs=!1,ih=null,Mt=[],Dt=new class{constructor(n,e){this.stack=n,this.cbs=e,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=ip,this.delimiterClose=sp,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=ip,this.delimiterClose=sp}getPos(n){let e=1,t=n+1,i=this.newlines.length,s=-1;if(i>100){let r=-1,a=i;for(;r+1<a;){let o=r+a>>>1;this.newlines[o]<n?r=o:a=o}s=r}else for(let r=i-1;r>=0;r--)if(n>this.newlines[r]){s=r;break}return s>=0&&(e=s+2,t=n-this.newlines[s]),{column:t,line:e,offset:n}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(n){n===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):this.inVPre||n!==this.delimiterOpen[0]||(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(n))}stateInterpolationOpen(n){if(n===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){let e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(n)):(this.state=1,this.stateText(n))}stateInterpolation(n){n===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(n))}stateInterpolationClose(n){n===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(n))}stateSpecialStartSequence(n){let e=this.sequenceIndex===this.currentSequence.length;if(e?$i(n):(32|n)===this.currentSequence[this.sequenceIndex]){if(!e)return void this.sequenceIndex++}else this.inRCDATA=!1;this.sequenceIndex=0,this.state=6,this.stateInTagName(n)}stateInRCDATA(n){if(this.sequenceIndex===this.currentSequence.length){if(n===62||Ln(n)){let e=this.index-this.currentSequence.length;if(this.sectionStart<e){let t=this.index;this.index=e,this.cbs.ontext(this.sectionStart,e),this.index=t}this.sectionStart=e+2,this.stateInClosingTagName(n),this.inRCDATA=!1;return}this.sequenceIndex=0}(32|n)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence!==en.TitleEnd&&(this.currentSequence!==en.TextareaEnd||this.inSFCRoot)?this.fastForwardTo(60)&&(this.sequenceIndex=1):this.inVPre||n!==this.delimiterOpen[0]||(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(n)):this.sequenceIndex=+(n===60)}stateCDATASequence(n){n===en.Cdata[this.sequenceIndex]?++this.sequenceIndex===en.Cdata.length&&(this.state=28,this.currentSequence=en.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(n))}fastForwardTo(n){for(;++this.index<this.buffer.length;){let e=this.buffer.charCodeAt(this.index);if(e===10&&this.newlines.push(this.index),e===n)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(n){n===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===en.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):n!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(n,e){this.enterRCDATA(n,e),this.state=31}enterRCDATA(n,e){this.inRCDATA=!0,this.currentSequence=n,this.sequenceIndex=e}stateBeforeTagName(n){n===33?(this.state=22,this.sectionStart=this.index+1):n===63?(this.state=24,this.sectionStart=this.index+1):rp(n)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:n===116?this.state=30:this.state=n===115?29:6):n===47?this.state=8:(this.state=1,this.stateText(n))}stateInTagName(n){$i(n)&&this.handleTagName(n)}stateInSFCRootTagName(n){if($i(n)){let e=this.buffer.slice(this.sectionStart,this.index);e!=="template"&&this.enterRCDATA(jl("</"+e),0),this.handleTagName(n)}}handleTagName(n){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(n)}stateBeforeClosingTagName(n){Ln(n)||(n===62?(this.state=1,this.sectionStart=this.index+1):(this.state=rp(n)?9:27,this.sectionStart=this.index))}stateInClosingTagName(n){(n===62||Ln(n))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(n))}stateAfterClosingTagName(n){n===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(n){n===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):n===47?this.state=7:n===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Ln(n)||this.handleAttrStart(n)}handleAttrStart(n){n===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):n===46||n===58||n===64||n===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(n){n===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):Ln(n)||(this.state=11,this.stateBeforeAttrName(n))}stateInAttrName(n){(n===61||$i(n))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(n))}stateInDirName(n){n===61||$i(n)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(n)):n===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):n===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(n){n===61||$i(n)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(n)):n===91?this.state=15:n===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(n){n===93?this.state=14:(n===61||$i(n))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(n))}stateInDirModifier(n){n===61||$i(n)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(n)):n===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(n){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(n)}stateAfterAttrName(n){n===61?this.state=18:n===47||n===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(n)):Ln(n)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(n))}stateBeforeAttrValue(n){n===34?(this.state=19,this.sectionStart=this.index+1):n===39?(this.state=20,this.sectionStart=this.index+1):Ln(n)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(n))}handleInAttrValue(n,e){(n===e||this.fastForwardTo(e))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(e===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(n){this.handleInAttrValue(n,34)}stateInAttrValueSingleQuotes(n){this.handleInAttrValue(n,39)}stateInAttrValueNoQuotes(n){Ln(n)||n===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(n)):(n===39||n===60||n===61||n===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(n){n===91?(this.state=26,this.sequenceIndex=0):this.state=n===45?25:23}stateInDeclaration(n){(n===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(n){(n===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(n){n===45?(this.state=28,this.currentSequence=en.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(n){(n===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(n){n===en.ScriptEnd[3]?this.startSpecial(en.ScriptEnd,4):n===en.StyleEnd[3]?this.startSpecial(en.StyleEnd,4):(this.state=6,this.stateInTagName(n))}stateBeforeSpecialT(n){n===en.TitleEnd[3]?this.startSpecial(en.TitleEnd,4):n===en.TextareaEnd[3]?this.startSpecial(en.TextareaEnd,4):(this.state=6,this.stateInTagName(n))}startEntity(){}stateInEntity(){}parse(n){for(this.buffer=n;this.index<this.buffer.length;){let e=this.buffer.charCodeAt(this.index);switch(e===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:this.stateText(e);break;case 2:this.stateInterpolationOpen(e);break;case 3:this.stateInterpolation(e);break;case 4:this.stateInterpolationClose(e);break;case 31:this.stateSpecialStartSequence(e);break;case 32:this.stateInRCDATA(e);break;case 26:this.stateCDATASequence(e);break;case 19:this.stateInAttrValueDoubleQuotes(e);break;case 12:this.stateInAttrName(e);break;case 13:this.stateInDirName(e);break;case 14:this.stateInDirArg(e);break;case 15:this.stateInDynamicDirArg(e);break;case 16:this.stateInDirModifier(e);break;case 28:this.stateInCommentLike(e);break;case 27:this.stateInSpecialComment(e);break;case 11:this.stateBeforeAttrName(e);break;case 6:this.stateInTagName(e);break;case 34:this.stateInSFCRootTagName(e);break;case 9:this.stateInClosingTagName(e);break;case 5:this.stateBeforeTagName(e);break;case 17:this.stateAfterAttrName(e);break;case 20:this.stateInAttrValueSingleQuotes(e);break;case 18:this.stateBeforeAttrValue(e);break;case 8:this.stateBeforeClosingTagName(e);break;case 10:this.stateAfterClosingTagName(e);break;case 29:this.stateBeforeSpecialS(e);break;case 30:this.stateBeforeSpecialT(e);break;case 21:this.stateInAttrValueNoQuotes(e);break;case 7:this.stateInSelfClosingTag(e);break;case 23:this.stateInDeclaration(e);break;case 22:this.stateBeforeDeclaration(e);break;case 25:this.stateBeforeComment(e);break;case 24:this.stateInProcessingInstruction(e);break;case 33:this.stateInEntity()}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let n=this.buffer.length;this.sectionStart>=n||(this.state===28?this.currentSequence===en.CdataEnd?this.cbs.oncdata(this.sectionStart,n):this.cbs.oncomment(this.sectionStart,n):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,n))}emitCodePoint(n,e){}}(Mt,{onerr:cp,ontext(n,e){Po(sn(n,e),n,e)},ontextentity(n,e,t){Po(n,e,t)},oninterpolation(n,e){if(Bs)return Po(sn(n,e),n,e);let t=n+Dt.delimiterOpen.length,i=e-Dt.delimiterClose.length;for(;Ln(Wi.charCodeAt(t));)t++;for(;Ln(Wi.charCodeAt(i-1));)i--;let s=sn(t,i);s.includes("&")&&(s=vt.decodeEntities(s,!1)),sh({type:5,content:Do(s,!1,Pt(t,i)),loc:Pt(n,e)})},onopentagname(n,e){let t=sn(n,e);rn={type:1,tag:t,ns:vt.getNamespace(t,Mt[0],vt.ns),tagType:0,props:[],children:[],loc:Pt(n-1,e),codegenNode:void 0}},onopentagend(n){lp(n)},onclosetag(n,e){let t=sn(n,e);if(!vt.isVoidTag(t)){let i=!1;for(let s=0;s<Mt.length;s++)if(Mt[s].tag.toLowerCase()===t.toLowerCase()){i=!0,s>0&&Mt[0].loc.start.offset;for(let r=0;r<=s;r++)ml(Mt.shift(),e,r<s);break}i||Fv(n,60)}},onselfclosingtag(n){let e=rn.tag;rn.isSelfClosing=!0,lp(n),Mt[0]&&Mt[0].tag===e&&ml(Mt.shift(),n)},onattribname(n,e){ut={type:6,name:sn(n,e),nameLoc:Pt(n,e),value:void 0,loc:Pt(n)}},ondirname(n,e){let t=sn(n,e),i=t==="."||t===":"?"bind":t==="@"?"on":t==="#"?"slot":t.slice(2);if(Bs||i==="")ut={type:6,name:t,nameLoc:Pt(n,e),value:void 0,loc:Pt(n)};else if(ut={type:7,name:i,rawName:t,exp:void 0,arg:void 0,modifiers:t==="."?[je("prop")]:[],loc:Pt(n)},i==="pre"){Bs=Dt.inVPre=!0,ih=rn;let s=rn.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=function(a){let o={type:6,name:a.rawName,nameLoc:Pt(a.loc.start.offset,a.loc.start.offset+a.rawName.length),value:void 0,loc:a.loc};if(a.exp){let l=a.exp.loc;l.end.offset<a.loc.end.offset&&(l.start.offset--,l.start.column--,l.end.offset++,l.end.column++),o.value={type:2,content:a.exp.content,loc:l}}return o}(s[r]))}},ondirarg(n,e){if(n===e)return;let t=sn(n,e);if(Bs&&!ap(ut))ut.name+=t,Vs(ut.nameLoc,e);else{let i=t[0]!=="[";ut.arg=Do(i?t:t.slice(1,-1),i,Pt(n,e),3*!!i)}},ondirmodifier(n,e){let t=sn(n,e);if(Bs&&!ap(ut))ut.name+="."+t,Vs(ut.nameLoc,e);else if(ut.name==="slot"){let i=ut.arg;i&&(i.content+="."+t,Vs(i.loc,e))}else{let i=je(t,!0,Pt(n,e));ut.modifiers.push(i)}},onattribdata(n,e){Dn+=sn(n,e),Li<0&&(Li=n),Us=e},onattribentity(n,e,t){Dn+=n,Li<0&&(Li=e),Us=t},onattribnameend(n){let e=sn(ut.loc.start.offset,n);ut.type===7&&(ut.rawName=e),rn.props.some(t=>(t.type===7?t.rawName:t.name)===e)},onattribend(n,e){rn&&ut&&(Vs(ut.loc,e),n!==0&&(Dn.includes("&")&&(Dn=vt.decodeEntities(Dn,!0)),ut.type===6?(ut.name==="class"&&(Dn=kv(Dn).trim()),ut.value={type:2,content:Dn,loc:n===1?Pt(Li,Us):Pt(Li-1,Us+1)},Dt.inSFCRoot&&rn.tag==="template"&&ut.name==="lang"&&Dn&&Dn!=="html"&&Dt.enterRCDATA(jl("</template"),0)):(ut.exp=Do(Dn,!1,Pt(Li,Us),0,0),ut.name==="for"&&(ut.forParseResult=function(t){let i=t.loc,s=t.content,r=s.match(Jy);if(!r)return;let[,a,o]=r,l=(p,g,y=!1)=>{let m=i.start.offset+g,f=m+p.length;return Do(p,!1,Pt(m,f),0,+!!y)},c={source:l(o.trim(),s.indexOf(o,a.length)),value:void 0,key:void 0,index:void 0,finalized:!1},u=a.trim().replace(Qy,"").trim(),h=a.indexOf(u),d=u.match(op);if(d){let p;u=u.replace(op,"").trim();let g=d[1].trim();if(g&&(p=s.indexOf(g,h+u.length),c.key=l(g,p,!0)),d[2]){let y=d[2].trim();y&&(c.index=l(y,s.indexOf(y,c.key?p+g.length:h+u.length),!0))}}return u&&(c.value=l(u,h,!0)),c}(ut.exp)))),(ut.type!==7||ut.name!=="pre")&&rn.props.push(ut)),Dn="",Li=Us=-1},oncomment(n,e){vt.comments&&sh({type:3,content:sn(n,e),loc:Pt(n-4,e+3)})},onend(){let n=Wi.length;for(let e=0;e<Mt.length;e++)ml(Mt[e],n-1),Mt[e].loc.start.offset},oncdata(n,e){(Mt[0]?Mt[0].ns:vt.ns)!==0&&Po(sn(n,e),n,e)},onprocessinginstruction(n){(Mt[0]?Mt[0].ns:vt.ns)===0&&cp(21,n-1)}}),op=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Qy=/^\(|\)$/g;function sn(n,e){return Wi.slice(n,e)}function lp(n){Dt.inSFCRoot&&(rn.innerLoc=Pt(n+1,n+1)),sh(rn);let{tag:e,ns:t}=rn;t===0&&vt.isPreTag(e)&&Bd++,vt.isVoidTag(e)?ml(rn,n):(Mt.unshift(rn),(t===1||t===2)&&(Dt.inXML=!0)),rn=null}function Po(n,e,t){{let r=Mt[0]&&Mt[0].tag;r!=="script"&&r!=="style"&&n.includes("&")&&(n=vt.decodeEntities(n,!1))}let i=Mt[0]||Kl,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=n,Vs(s.loc,t)):i.children.push({type:2,content:n,loc:Pt(e,t)})}function ml(n,e,t=!1){t?Vs(n.loc,Fv(e,60)):Vs(n.loc,function(a){let o=a;for(;Wi.charCodeAt(o)!==62&&o<Wi.length-1;)o++;return o}(e)+1),Dt.inSFCRoot&&(n.children.length?n.innerLoc.end=Qe({},n.children[n.children.length-1].loc.end):n.innerLoc.end=Qe({},n.innerLoc.start),n.innerLoc.source=sn(n.innerLoc.start.offset,n.innerLoc.end.offset));let{tag:i,ns:s,children:r}=n;if(!Bs&&(i==="slot"?n.tagType=2:function({tag:a,props:o}){if(a==="template"){for(let l=0;l<o.length;l++)if(o[l].type===7&&$y.has(o[l].name))return!0}return!1}(n)?n.tagType=3:function({tag:a,props:o}){var l;if(vt.isCustomElement(a))return!1;if(a==="component"||(l=a.charCodeAt(0))>64&&l<91||Pv(a)||vt.isBuiltInComponent&&vt.isBuiltInComponent(a)||vt.isNativeTag&&!vt.isNativeTag(a))return!0;for(let c=0;c<o.length;c++){let u=o[c];if(u.type===6&&u.name==="is"&&u.value&&u.value.content.startsWith("vue:"))return!0}return!1}(n)&&(n.tagType=1)),Dt.inRCDATA||(n.children=Bv(r)),s===0&&vt.isIgnoreNewlineTag(i)){let a=r[0];a&&a.type===2&&(a.content=a.content.replace(/^\r?\n/,""))}s===0&&vt.isPreTag(i)&&Bd--,ih===n&&(Bs=Dt.inVPre=!1,ih=null),Dt.inXML&&(Mt[0]?Mt[0].ns:vt.ns)===0&&(Dt.inXML=!1)}function Fv(n,e){let t=n;for(;Wi.charCodeAt(t)!==e&&t>=0;)t--;return t}let $y=new Set(["if","else","else-if","for","slot"]),eS=/\r\n/g;function Bv(n){let e=vt.whitespace!=="preserve",t=!1;for(let i=0;i<n.length;i++){let s=n[i];if(s.type===2)if(Bd)s.content=s.content.replace(eS,`
`);else if(Iv(s.content)){let r=n[i-1]&&n[i-1].type,a=n[i+1]&&n[i+1].type;!r||!a||e&&(r===3&&(a===3||a===1)||r===1&&(a===3||a===1&&function(o){for(let l=0;l<o.length;l++){let c=o.charCodeAt(l);if(c===10||c===13)return!0}return!1}(s.content)))?(t=!0,n[i]=null):s.content=" "}else e&&(s.content=kv(s.content))}return t?n.filter(Boolean):n}function kv(n){let e="",t=!1;for(let i=0;i<n.length;i++)Ln(n.charCodeAt(i))?t||(e+=" ",t=!0):(e+=n[i],t=!1);return e}function sh(n){(Mt[0]||Kl).children.push(n)}function Pt(n,e){return{start:Dt.getPos(n),end:e==null?e:Dt.getPos(e),source:e==null?e:sn(n,e)}}function Vs(n,e){n.end=Dt.getPos(e),n.source=sn(n.start.offset,e)}function Do(n,e=!1,t,i=0,s=0){return je(n,e,t,i)}function cp(n,e,t){vt.onError(ft(n,Pt(e,e)))}function up(n){let e=n.children.filter(t=>t.type!==3);return e.length!==1||e[0].type!==1||Yl(e[0])?null:e[0]}function In(n,e){let{constantCache:t}=e;switch(n.type){case 1:if(n.tagType!==0)return 0;let o=t.get(n);if(o!==void 0)return o;let l=n.codegenNode;if(l.type!==13||l.isBlock&&n.tag!=="svg"&&n.tag!=="foreignObject"&&n.tag!=="math")return 0;if(l.patchFlag!==void 0)return t.set(n,0),0;{let u=3,h=zv(n,e);if(h===0)return t.set(n,0),0;h<u&&(u=h);for(let d=0;d<n.children.length;d++){let p=In(n.children[d],e);if(p===0)return t.set(n,0),0;p<u&&(u=p)}if(u>1)for(let d=0;d<n.props.length;d++){let p=n.props[d];if(p.type===7&&p.name==="bind"&&p.exp){let g=In(p.exp,e);if(g===0)return t.set(n,0),0;g<u&&(u=g)}}if(l.isBlock){var i,s,r,a;for(let d=0;d<n.props.length;d++)if(n.props[d].type===7)return t.set(n,0),0;e.removeHelper(Js),e.removeHelper((i=e.inSSR,s=l.isComponent,i||s?Qs:$s)),l.isBlock=!1,e.helper((r=e.inSSR,a=l.isComponent,r||a?xs:ys))}return t.set(n,u),u}case 2:case 3:return 3;case 9:case 11:case 10:default:return 0;case 5:case 12:return In(n.content,e);case 4:return n.constType;case 8:let c=3;for(let u=0;u<n.children.length;u++){let h=n.children[u];if(Ge(h)||ln(h))continue;let d=In(h,e);if(d===0)return 0;d<c&&(c=d)}return c;case 20:return 2}}let tS=new Set([Dd,Ld,$a,mo]);function zv(n,e){let t=3,i=Vv(n);if(i&&i.type===15){let{properties:s}=i;for(let r=0;r<s.length;r++){let a,{key:o,value:l}=s[r],c=In(o,e);if(c===0)return c;if(c<t&&(t=c),(a=l.type===4?In(l,e):l.type===14?function u(h,d){if(h.type===14&&!Ge(h.callee)&&tS.has(h.callee)){let p=h.arguments[0];if(p.type===4)return In(p,d);if(p.type===14)return u(p,d)}return 0}(l,e):0)===0)return a;a<t&&(t=a)}}return t}function Vv(n){let e=n.codegenNode;if(e.type===13)return e.props}function Jl(n,e){e.currentNode=n;let{nodeTransforms:t}=e,i=[];for(let a=0;a<t.length;a++){let o=t[a](n,e);if(o&&(Le(o)?i.push(...o):i.push(o)),!e.currentNode)return;n=e.currentNode}switch(n.type){case 3:e.ssr||e.helper(po);break;case 5:e.ssr||e.helper(Mc);break;case 9:for(let l=0;l<n.branches.length;l++)Jl(n.branches[l],e);break;case 10:case 11:case 1:case 0:var s=n;let a=0,o=()=>{a--};for(;a<s.children.length;a++){let l=s.children[a];Ge(l)||(e.grandParent=e.parent,e.parent=s,e.childIndex=a,e.onNodeRemoved=o,Jl(l,e))}}e.currentNode=n;let r=i.length;for(;r--;)i[r]()}function Hv(n,e){let t=Ge(n)?i=>i===n:i=>n.test(i);return(i,s)=>{if(i.type===1){let{props:r}=i;if(i.tagType===3&&r.some(Zy))return;let a=[];for(let o=0;o<r.length;o++){let l=r[o];if(l.type===7&&t(l.name)){r.splice(o,1),o--;let c=e(i,l,s);c&&a.push(c)}}return a}}}let Lo="/*@__PURE__*/",hp=n=>`${Qr[n]}: _${Qr[n]}`;function dp(n,e,{helper:t,push:i,newline:s,isTS:r}){let a=t(e==="component"?wd:Cd);for(let o=0;o<n.length;o++){let l=n[o],c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${nh(l,e)} = ${a}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),o<n.length-1&&s()}}function rh(n,e){let t=n.length>3;e.push("["),t&&e.indent(),wa(n,e,t),t&&e.deindent(),e.push("]")}function wa(n,e,t=!1,i=!0){let{push:s,newline:r}=e;for(let a=0;a<n.length;a++){let o=n[a];Ge(o)?s(o,-3):Le(o)?rh(o,e):fn(o,e),a<n.length-1&&(t?(i&&s(","),r()):i&&s(", "))}}function fn(n,e){var t,i,s;if(Ge(n))return void e.push(n,-3);if(ln(n))return void e.push(e.helper(n));switch(n.type){case 1:case 9:case 11:case 12:fn(n.codegenNode,e);break;case 2:t=n,e.push(JSON.stringify(t.content),-3,t);break;case 4:fp(n,e);break;case 5:(function(r,a){let{push:o,helper:l,pure:c}=a;c&&o(Lo),o(`${l(Mc)}(`),fn(r.content,a),o(")")})(n,e);break;case 8:pp(n,e);break;case 3:(function(r,a){let{push:o,helper:l,pure:c}=a;c&&o(Lo),o(`${l(po)}(${JSON.stringify(r.content)})`,-3,r)})(n,e);break;case 13:(function(r,a){var o,l;let c,{push:u,helper:h,pure:d}=a,{tag:p,props:g,children:y,patchFlag:m,dynamicProps:f,directives:x,isBlock:_,disableTracking:v,isComponent:A}=r;m&&(c=String(m)),x&&u(h(Rd)+"("),_&&u(`(${h(Js)}(${v?"true":""}), `),d&&u(Lo),u(h(_?(o=a.inSSR,o||A?Qs:$s):(l=a.inSSR,l||A?xs:ys))+"(",-2,r),wa(function(T){let E=T.length;for(;E--&&T[E]==null;);return T.slice(0,E+1).map(R=>R||"null")}([p,g,y,c,f]),a),u(")"),_&&u(")"),x&&(u(", "),fn(x,a),u(")"))})(n,e);break;case 14:(function(r,a){let{push:o,helper:l,pure:c}=a,u=Ge(r.callee)?r.callee:l(r.callee);c&&o(Lo),o(u+"(",-2,r),wa(r.arguments,a),o(")")})(n,e);break;case 15:(function(r,a){let{push:o,indent:l,deindent:c,newline:u}=a,{properties:h}=r;if(!h.length)return o("{}",-2,r);let d=h.length>1;o(d?"{":"{ "),d&&l();for(let p=0;p<h.length;p++){let{key:g,value:y}=h[p];(function(m,f){let{push:x}=f;if(m.type===8)x("["),pp(m,f),x("]");else if(m.isStatic){let _;x((_=m.content,eh.test(_)?JSON.stringify(m.content):m.content),-2,m)}else x(`[${m.content}]`,-3,m)})(g,a),o(": "),fn(y,a),p<h.length-1&&(o(","),u())}d&&c(),o(d?"}":" }")})(n,e);break;case 17:i=n,s=e,rh(i.elements,s);break;case 18:(function(r,a){let{push:o,indent:l,deindent:c}=a,{params:u,returns:h,body:d,newline:p,isSlot:g}=r;g&&o(`_${Qr[Id]}(`),o("(",-2,r),Le(u)?wa(u,a):u&&fn(u,a),o(") => "),(p||d)&&(o("{"),l()),h?(p&&o("return "),Le(h)?rh(h,a):fn(h,a)):d&&fn(d,a),(p||d)&&(c(),o("}")),g&&o(")")})(n,e);break;case 19:(function(r,a){let{test:o,consequent:l,alternate:c,newline:u}=r,{push:h,indent:d,deindent:p,newline:g}=a;if(o.type===4){let m,f=(m=o.content,!!eh.test(m));f&&h("("),fp(o,a),f&&h(")")}else h("("),fn(o,a),h(")");u&&d(),a.indentLevel++,u||h(" "),h("? "),fn(l,a),a.indentLevel--,u&&g(),u||h(" "),h(": ");let y=c.type===19;!y&&a.indentLevel++,fn(c,a),!y&&a.indentLevel--,u&&p(!0)})(n,e);break;case 20:(function(r,a){let{push:o,helper:l,indent:c,deindent:u,newline:h}=a,{needPauseTracking:d,needArraySpread:p}=r;p&&o("[...("),o(`_cache[${r.index}] || (`),d&&(c(),o(`${l(Xl)}(-1`),r.inVOnce&&o(", true"),o("),"),h(),o("(")),o(`_cache[${r.index}] = `),fn(r.value,a),d&&(o(`).cacheIndex = ${r.index},`),h(),o(`${l(Xl)}(1),`),h(),o(`_cache[${r.index}]`),u()),o(")"),p&&o(")]")})(n,e);break;case 21:wa(n.body,e,!0,!1)}}function fp(n,e){let{content:t,isStatic:i}=n;e.push(i?JSON.stringify(t):t,-3,n)}function pp(n,e){for(let t=0;t<n.children.length;t++){let i=n.children[t];Ge(i)?e.push(i,-3):fn(i,e)}}let nS=Hv(/^(?:if|else|else-if)$/,(n,e,t)=>function(i,s,r,a){if(s.name!=="else"&&(!s.exp||!s.exp.content.trim())){let l=s.exp?s.exp.loc:i.loc;r.onError(ft(28,s.loc)),s.exp=je("true",!1,l)}if(s.name==="if"){var o;let l=mp(i,s),c={type:9,loc:Pt((o=i.loc).start.offset,o.end.offset),branches:[l]};if(r.replaceNode(c),a)return a(c,l,!0)}else{let l=r.parent.children,c=l.indexOf(i);for(;c-->=-1;){let u=l[c];if(u&&Uv(u)){r.removeNode(u);continue}if(u&&u.type===9){(s.name==="else-if"||s.name==="else")&&u.branches[u.branches.length-1].condition===void 0&&r.onError(ft(30,i.loc)),r.removeNode();let h=mp(i,s);u.branches.push(h);let d=a&&a(u,h,!1);Jl(h,r),d&&d(),r.currentNode=null}else r.onError(ft(30,i.loc));break}}}(n,e,t,(i,s,r)=>{let a=t.parent.children,o=a.indexOf(i),l=0;for(;o-->=0;){let c=a[o];c&&c.type===9&&(l+=c.branches.length)}return()=>{r?i.codegenNode=gp(s,l,t):function(c){for(;;)if(c.type===19){if(c.alternate.type!==19)return c;c=c.alternate}else c.type===20&&(c=c.value)}(i.codegenNode).alternate=gp(s,l+i.branches.length-1,t)}}));function mp(n,e){let t=n.tagType===3;return{type:10,loc:n.loc,condition:e.name==="else"?void 0:e.exp,children:t&&!jn(n,"for")?n.children:[n],userKey:bc(n,"key"),isTemplateIf:t}}function gp(n,e,t){return n.condition?Qu(n.condition,vp(n,e,t),kt(t.helper(po),['""',"true"])):vp(n,e,t)}function vp(n,e,t){let{helper:i}=t,s=Ut("key",je(`${e}`,!1,On,2)),{children:r}=n,a=r[0];if(r.length!==1||a.type!==1){if(r.length!==1||a.type!==11)return eo(t,i(Qa),Yn([s]),r,64,void 0,void 0,!0,!1,!1,n.loc);{let o=a.codegenNode;return Zl(o,s,t),o}}{let o=a.codegenNode,l=o.type===14&&o.callee===Ud?o.arguments[1].returns:o;return l.type===13&&Od(l,t),Zl(l,s,t),o}}let iS=Hv("for",(n,e,t)=>{let{helper:i,removeHelper:s}=t;return function(r,a,o,l){if(!a.exp)return void o.onError(ft(31,a.loc));let c=a.forParseResult;if(!c)return void o.onError(ft(32,a.loc));Gv(c);let{scopes:u}=o,{source:h,value:d,key:p,index:g}=c,y={type:11,loc:a.loc,source:h,valueAlias:d,keyAlias:p,objectIndexAlias:g,parseResult:c,children:ql(r)?r.children:[r]};o.replaceNode(y),u.vFor++;let m=l&&l(y);return()=>{u.vFor--,m&&m()}}(n,e,t,r=>{let a=kt(i(Pd),[r.source]),o=ql(n),l=jn(n,"memo"),c=bc(n,"key",!1,!0);c&&c.type;let u=c&&(c.type===6?c.value?je(c.value.content,!0):void 0:c.exp),h=u?Ut("key",u):null,d=r.source.type===4&&r.source.constType>0,p=d?64:c?128:256;return r.codegenNode=eo(t,i(Qa),void 0,a,p,void 0,void 0,!0,!d,!1,n.loc),()=>{var g,y,m,f,x,_,v,A,T;let E,{children:R}=r,b=R.length!==1||R[0].type!==1,M=Yl(n)?n:o&&n.children.length===1&&Yl(n.children[0])?n.children[0]:null;if(M)E=M.codegenNode,o&&h&&Zl(E,h,t);else if(b)E=eo(t,i(Qa),h?Yn([h]):void 0,n.children,64,void 0,void 0,!0,void 0,!1);else{E=R[0].codegenNode,o&&h&&Zl(E,h,t);let P=!d||E.isBlockRequired===!0;E.isBlock!==P&&(E.isBlock?(s(Js),s((y=t.inSSR,m=E.isComponent,y||m?Qs:$s))):s((f=t.inSSR,x=E.isComponent,f||x?xs:ys))),E.isBlock=P,E.isBlock?(i(Js),i((_=t.inSSR,v=E.isComponent,_||v?Qs:$s))):(i((A=t.inSSR,T=E.isComponent,A||T?xs:ys)),E.needsPatch&&(E.patchFlag=((g=E.patchFlag)!=null?g:0)|512))}if(l){let P=$r(ah(r.parseResult,[je("_cached")]));P.body={type:21,body:[oi(["const _memo = (",l.exp,")"]),oi(["if (_cached && _cached.el",...u?[" && _cached.key === ",u]:[],` && ${t.helperString(Cv)}(_cached, _memo)) return _cached`]),oi(["const _item = ",E]),je("_item.memo = _memo"),je("return _item")],loc:On},a.arguments.push(P,je("_cache"),je(String(t.cached.length))),t.cached.push(null)}else a.arguments.push($r(ah(r.parseResult),E,!0))}})});function Gv(n,e){n.finalized||(n.finalized=!0)}function ah({value:n,key:e,index:t},i=[]){var s=[n,e,t,...i];let r=s.length;for(;r--&&!s[r];);return s.slice(0,r+1).map((a,o)=>a||je("_".repeat(o+1),!1))}let _p=je("undefined",!1),sS=(n,e)=>{if(n.type===1&&(n.tagType===1||n.tagType===3)){let t=jn(n,"slot");if(t)return t.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}};function No(n,e,t){let i=[Ut("name",n),Ut("fn",e)];return t!=null&&i.push(Ut("key",je(String(t),!0))),Yn(i)}let Wv=new WeakMap,rS=(n,e)=>function(){let t,i,s,r,a;if((n=e.currentNode).type!==1||n.tagType!==0&&n.tagType!==1)return;let{tag:o,props:l}=n,c=n.tagType===1,u=c?function(f,x,_=!1){let{tag:v}=f,A=oh(v),T=bc(f,"is",!1,!0);if(T)if(A){let R;if(T.type===6?R=T.value&&je(T.value.content,!0):(R=T.exp)||(R=je("is",!1,T.arg.loc)),R)return kt(x.helper(Zu),[R])}else T.type===6&&T.value.content.startsWith("vue:")&&(v=T.value.content.slice(4));let E=Pv(v)||x.isBuiltInComponent(v);return E?(_||x.helper(E),E):(x.helper(wd),x.components.add(v),nh(v,"component"))}(n,e):`"${o}"`,h=at(u)&&u.callee===Zu,d=0,p=!1,g=!1,y=h||u===Ua||u===Td||!c&&(o==="svg"||o==="foreignObject"||o==="math");if(l.length>0){let f=Xv(n,e,void 0,c,h);t=f.props,d=f.patchFlag,r=f.dynamicPropNames,p=f.needsPatch,g=f.isBlockRequired;let x=f.directives;a=x&&x.length?qs(x.map(_=>function(v,A){let T=[],E=Wv.get(v);E?T.push(A.helperString(E)):(A.helper(Cd),A.directives.add(v.name),T.push(nh(v.name,"directive")));let{loc:R}=v;if(v.exp&&T.push(v.exp),v.arg&&(v.exp||T.push("void 0"),T.push(v.arg)),Object.keys(v.modifiers).length){v.arg||(v.exp||T.push("void 0"),T.push("void 0"));let b=je("true",!1,R);T.push(Yn(v.modifiers.map(M=>Ut(M,b)),R))}return qs(T,v.loc)}(_,e))):void 0,f.shouldUseBlock&&(y=!0)}if(n.children.length>0)if(u===Gl&&(y=!0,d|=1024),c&&u!==Ua&&u!==Gl){let{slots:f,hasDynamicSlots:x}=function(_,v,A=(T,E,R,b)=>$r(T,R,!1,!0,R.length?R[0].loc:b)){v.helper(Id);let{children:T,loc:E}=_,R=[],b=[],M=v.scopes.vSlot>0||v.scopes.vFor>0,P=jn(_,"slot",!0);if(P){let{arg:ee,exp:he}=P;ee&&!gn(ee)&&(M=!0),R.push(Ut(ee||je("default",!0),A(he,void 0,T,E)))}let I=!1,F=!1,N=[],O=new Set,W=0;for(let ee=0;ee<T.length;ee++){let he,de,fe,Ae,se=T[ee];if(!ql(se)||!(he=jn(se,"slot",!0))){se.type!==3&&N.push(se);continue}if(P){v.onError(ft(37,he.loc));break}I=!0;let{children:ge,loc:we}=se,{arg:oe=je("default",!0),exp:pe,loc:Ie}=he;gn(oe)?de=oe?oe.content:"default":M=!0;let ve=jn(se,"for"),U=A(pe,ve,ge,we);if(fe=jn(se,"if"))M=!0,b.push(Qu(fe.exp,No(oe,U,W++),_p));else if(Ae=jn(se,/^else(?:-if)?$/,!0)){let L,B=ee;for(;B--&&Uv(L=T[B]););if(L&&ql(L)&&jn(L,/^(?:else-)?if$/)){let w=b[b.length-1];for(;w.alternate.type===19;)w=w.alternate;w.alternate=Ae.exp?Qu(Ae.exp,No(oe,U,W++),_p):No(oe,U,W++)}else v.onError(ft(30,Ae.loc))}else if(ve){M=!0;let L=ve.forParseResult;L?(Gv(L),b.push(kt(v.helper(Pd),[L.source,$r(ah(L),No(oe,U),!0)]))):v.onError(ft(32,ve.loc))}else{if(de){if(O.has(de)){v.onError(ft(38,Ie));continue}O.add(de),de==="default"&&(F=!0)}R.push(Ut(oe,U))}}if(!P){let ee=(he,de)=>Ut("default",A(he,void 0,de,E));I?N.length&&!N.every(Fd)&&(F?v.onError(ft(39,N[0].loc)):R.push(ee(void 0,N))):R.push(ee(void 0,T))}let Z=M?2:function ee(he){for(let de=0;de<he.length;de++){let fe=he[de];switch(fe.type){case 1:if(fe.tagType===2||ee(fe.children))return!0;break;case 9:if(ee(fe.branches))return!0;break;case 10:case 11:if(ee(fe.children))return!0}}return!1}(_.children)?3:1,G=Yn(R.concat(Ut("_",je(Z+"",!1))),E);return b.length&&(G=kt(v.helper(wv),[G,qs(b)])),{slots:G,hasDynamicSlots:M}}(n,e);i=f,x&&(d|=1024)}else if(n.children.length===1&&u!==Ua){let f=n.children[0],x=f.type,_=x===5||x===8;_&&In(f,e)===0&&(d|=1),i=_||x===2?f:n.children}else i=n.children;r&&r.length&&(s=function(f){let x="[";for(let _=0,v=f.length;_<v;_++)x+=JSON.stringify(f[_]),_<v-1&&(x+=", ");return x+"]"}(r));let m=n.codegenNode=eo(e,u,t,i,d===0?void 0:d,s,a,!!y,!1,c,n.loc);(p=p&&(d===0||d===32))&&(m.needsPatch=!0),g&&(m.isBlockRequired=!0)};function Xv(n,e,t=n.props,i,s,r=!1){let a,{tag:o,loc:l,children:c}=n,u=[],h=[],d=[],p=c.length>0,g=!1,y=!1,m=0,f=!1,x=!1,_=!1,v=!1,A=!1,T=!1,E=[],R=I=>{u.length&&(h.push(Yn(xp(u),l)),u=[]),I&&h.push(I)},b=()=>{e.scopes.vFor>0&&u.push(Ut(je("ref_for",!0),je("true")))},M=({key:I,value:F})=>{if(gn(I)){let N=I.content,O=rr(N);O&&(!i||s)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!Vi(N)&&(v=!0),O&&Vi(N)&&(T=!0),N==="ref"&&(f=!0),O&&F.type===14&&(F=F.arguments[0]),F.type===20||(F.type===4||F.type===8)&&In(F,e)>0||(N==="class"?x=!0:N==="style"?_=!0:N==="ref"||N==="key"||E.includes(N)||E.push(N),i&&(N==="class"||N==="style")&&!E.includes(N)&&E.push(N))}else A=!0};for(let I=0;I<t.length;I++){let F=t[I];if(F.type===6){let{loc:N,name:O,nameLoc:W,value:Z}=F;if(O==="ref"&&(f=!0,b()),O==="is"&&(oh(o)||Z&&Z.content.startsWith("vue:")))continue;u.push(Ut(je(O,!0,W),je(Z?Z.content:"",!0,Z?Z.loc:N)))}else{let{name:N,arg:O,exp:W,loc:Z,modifiers:G}=F,ee=N==="bind",he=N==="on";if(N==="slot"){i||e.onError(ft(40,Z));continue}if(N==="once"||N==="memo"||N==="is"||ee&&Oa(O,"is")&&oh(o)||he&&r)continue;if(ee&&Oa(O,"key")&&(g=!0),he&&p&&O&&gn(O)&&pt(O.content)==="vue:beforeUpdate"&&(g=!0,y=!0),ee&&Oa(O,"ref")&&b(),!O&&(ee||he)){A=!0,W?ee?(b(),R(),h.push(W)):R({type:14,loc:Z,callee:e.helper(Nd),arguments:i?[W]:[W,"true"]}):e.onError(ft(ee?34:35,Z));continue}ee&&G.some(fe=>fe.content==="prop")&&(m|=32);let de=e.directiveTransforms[N];if(de){let{props:fe,needRuntime:Ae}=de(F,n,e);r||fe.forEach(M),he&&O&&!gn(O)?R(Yn(fe,l)):u.push(...fe),Ae&&(d.push(F),ln(Ae)&&Wv.set(F,Ae))}else!o_(N)&&(d.push(F),p&&(g=!0,y=!0))}}h.length?(R(),a=h.length>1?kt(e.helper(Wl),h,l):h[0]):u.length&&(a=Yn(xp(u),l)),A?m|=16:(x&&!i&&(m|=2),_&&!i&&(m|=4),E.length&&(m|=8),v&&(m|=32));let P=(m===0||m===32)&&(f||T||d.length>0);if(!g&&P&&(m|=512),!e.inSSR&&a)switch(a.type){case 15:let I=-1,F=-1,N=!1;for(let Z=0;Z<a.properties.length;Z++){let G=a.properties[Z].key;gn(G)?G.content==="class"?I=Z:G.content==="style"&&(F=Z):G.isHandlerKey||(N=!0)}let O=a.properties[I],W=a.properties[F];N?a=kt(e.helper($a),[a]):(O&&!gn(O.value)&&(O.value=kt(e.helper(Dd),[O.value])),W&&(_||W.value.type===4&&W.value.content.trim()[0]==="["||W.value.type===17)&&(W.value=kt(e.helper(Ld),[W.value])));break;case 14:break;default:a=kt(e.helper($a),[kt(e.helper(mo),[a])])}return{props:a,directives:d,patchFlag:m,dynamicPropNames:E,shouldUseBlock:g,needsPatch:P,isBlockRequired:y}}function xp(n){let e=new Map,t=[];for(let r=0;r<n.length;r++){var i,s;let a=n[r];if(a.key.type===8||!a.key.isStatic){t.push(a);continue}let o=a.key.content,l=e.get(o);l?(o==="style"||o==="class"||rr(o))&&(i=l,s=a,i.value.type===17?i.value.elements.push(s.value):i.value=qs([i.value,s.value],i.loc)):(e.set(o,a),t.push(a))}return t}function oh(n){return n==="component"||n==="Component"}let aS=(n,e)=>{if(Yl(n)){let{children:t,loc:i}=n,{slotName:s,slotProps:r}=function(l,c){let u,h='"default"',d=[];for(let p=0;p<l.props.length;p++){let g=l.props[p];if(g.type===6)g.value&&(g.name==="name"?h=JSON.stringify(g.value.content):(g.name=pt(g.name),d.push(g)));else if(g.name==="bind"&&Oa(g.arg,"name")){if(g.exp)h=g.exp;else if(g.arg&&g.arg.type===4){let y=pt(g.arg.content);h=g.exp=je(y,!1,g.arg.loc)}}else g.name==="bind"&&g.arg&&gn(g.arg)&&(g.arg.content=pt(g.arg.content)),d.push(g)}if(d.length>0){let{props:p,directives:g}=Xv(l,c,d,!1,!1);u=p,g.length&&c.onError(ft(36,g[0].loc))}return{slotName:h,slotProps:u}}(n,e),a=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"],o=2;r&&(a[2]=r,o=3),t.length&&(a[3]=$r([],t,!1,!1,i),o=4),e.scopeId&&!e.slotted&&(o=5),a.splice(o),n.codegenNode=kt(e.helper(Av),a,i)}},jv=(n,e,t,i)=>{let s,{loc:r,modifiers:a,arg:o}=n;if(!n.exp&&a.length,o.type===4)if(o.isStatic){let h=o.content;h.startsWith("vue:")&&(h=`vnode-${h.slice(4)}`),s=je(e.tagType!==0||h.startsWith("vnode")||!/[A-Z]/.test(h)?Br(pt(h)):`on:${h}`,!0,o.loc)}else s=oi([`${t.helperString(Ju)}(`,o,")"]);else(s=o).children.unshift(`${t.helperString(Ju)}(`),s.children.push(")");let l=n.exp;l&&!l.content.trim()&&(l=void 0);let c=t.cacheHandlers&&!l&&!t.inVOnce;if(l){let h,d=Nv(l),p=!(d||(h=l,Yy.test(Lv(h)))),g=l.content.includes(";");(p||c&&d)&&(l=oi([`${p?"$event":"(...args)"} => ${g?"{":"("}`,l,g?"}":")"]))}let u={props:[Ut(s,l||je("() => {}",!1,r))]};return i&&(u=i(u)),c&&(u.props[0].value=t.cache(u.props[0].value)),u.props.forEach(h=>h.key.isHandlerKey=!0),u},oS=(n,e,t)=>{let{modifiers:i}=n,s=n.arg,{exp:r}=n;return r&&r.type===4&&!r.content.trim()&&(r=void 0),s.type!==4?(s.children.unshift("("),s.children.push(') || ""')):s.isStatic||(s.content=s.content?`${s.content} || ""`:'""'),i.some(a=>a.content==="camel")&&(s.type===4?s.isStatic?s.content=pt(s.content):s.content=`${t.helperString(Ku)}(${s.content})`:(s.children.unshift(`${t.helperString(Ku)}(`),s.children.push(")"))),!t.inSSR&&(i.some(a=>a.content==="prop")&&yp(s,"."),i.some(a=>a.content==="attr")&&yp(s,"^")),{props:[Ut(s,r)]}},yp=(n,e)=>{n.type===4?n.isStatic?n.content=e+n.content:n.content=`\`${e}\${${n.content}}\``:(n.children.unshift(`'${e}' + (`),n.children.push(")"))},lS=(n,e)=>{if(n.type===0||n.type===1||n.type===11||n.type===10)return()=>{let t,i=n.children,s=!1;for(let r=0;r<i.length;r++){let a=i[r];if(Yc(a)){s=!0;for(let o=r+1;o<i.length;o++){let l=i[o];if(Yc(l))t||(t=i[r]=oi([a],a.loc)),t.children.push(" + ",l),i.splice(o,1),o--;else{t=void 0;break}}}}if(s&&(i.length!==1||n.type!==0&&(n.type!==1||n.tagType!==0||n.props.find(r=>r.type===7&&!e.directiveTransforms[r.name]))))for(let r=0;r<i.length;r++){let a=i[r];if(Yc(a)||a.type===8){let o=[];(a.type!==2||a.content!==" ")&&o.push(a),e.ssr||In(a,e)!==0||o.push("1"),i[r]={type:12,content:a,loc:a.loc,codegenNode:kt(e.helper(Ad),o)}}}}},Sp=new WeakSet,cS=(n,e)=>{if(n.type===1&&jn(n,"once",!0)&&!Sp.has(n)&&!e.inVOnce&&!e.inSSR)return Sp.add(n),e.inVOnce=!0,e.helper(Xl),()=>{e.inVOnce=!1;let t=e.currentNode;t.codegenNode&&(t.codegenNode=e.cache(t.codegenNode,!0,!0))}},qv=(n,e,t)=>{let i,{exp:s,arg:r}=n;if(!s)return t.onError(ft(41,n.loc)),Io();let a=s.loc.source.trim(),o=s.type===4?s.content:a,l=t.bindingMetadata[a];if(l==="props"||l==="props-aliased"||l==="literal-const"||l==="setup-const")return s.loc,Io();if(!o.trim()||!Nv(s))return t.onError(ft(42,s.loc)),Io();let c=r||je("modelValue",!0),u=r?gn(r)?`onUpdate:${pt(r.content)}`:oi(['"onUpdate:" + ',r]):"onUpdate:modelValue",h=t.isTS?"($event: any)":"$event";i=oi([`${h} => ((`,s,") = $event)"]);let d=[Ut(c,n.exp),Ut(u,i)];if(n.modifiers.length&&e.tagType===1){let p=n.modifiers.map(y=>y.content).map(y=>(eh.test(y)?JSON.stringify(y):y)+": true").join(", "),g=r?gn(r)?`${r.content}Modifiers`:oi([r,' + "Modifiers"']):"modelModifiers";d.push(Ut(g,je(`{ ${p} }`,!1,n.loc,2)))}return Io(d)};function Io(n=[]){return{props:n}}let Mp=new WeakSet,uS=(n,e)=>{if(n.type===1){let t=jn(n,"memo");if(!(!t||Mp.has(n))&&!e.inSSR)return Mp.add(n),()=>{let i=n.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(n.tagType!==1&&Od(i,e),n.codegenNode=kt(e.helper(Ud),[t.exp,$r(void 0,i),"_cache",String(e.cached.length)]),e.cached.push(null))}}},hS=(n,e)=>{if(n.type===1){for(let t of n.props)if(t.type===7&&t.name==="bind"&&(!t.exp||t.exp.type===4&&!t.exp.content.trim())&&t.arg){let i=t.arg;if(i.type===4&&i.isStatic){let s=pt(i.content);(Dv.test(s[0])||s[0]==="-")&&(t.exp=je(s,!1,i.loc))}else e.onError(ft(53,i.loc)),t.exp=je("",!0,i.loc)}}},Yv=Symbol(""),Zv=Symbol(""),Kv=Symbol(""),Jv=Symbol(""),lh=Symbol(""),Qv=Symbol(""),$v=Symbol(""),e0=Symbol(""),t0=Symbol(""),n0=Symbol("");Object.getOwnPropertySymbols(np={[Yv]:"vModelRadio",[Zv]:"vModelCheckbox",[Kv]:"vModelText",[Jv]:"vModelSelect",[lh]:"vModelDynamic",[Qv]:"withModifiers",[$v]:"withKeys",[e0]:"vShow",[t0]:"Transition",[n0]:"TransitionGroup"}).forEach(n=>{Qr[n]=np[n]});let dS={parseMode:"html",isVoidTag:__,isNativeTag:n=>m_(n)||g_(n)||v_(n),isPreTag:n=>n==="pre",isIgnoreNewlineTag:n=>n==="pre"||n==="textarea",decodeEntities:function(n,e=!1){return dr||(dr=document.createElement("div")),e?(dr.innerHTML=`<div foo="${n.replace(/"/g,"&quot;")}">`,dr.children[0].getAttribute("foo")):(dr.innerHTML=n,dr.textContent)},isBuiltInComponent:n=>n==="Transition"||n==="transition"?t0:n==="TransitionGroup"||n==="transition-group"?n0:void 0,getNamespace(n,e,t){let i=e?e.ns:t;if(e&&i===2)if(e.tag==="annotation-xml"){if(n==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&n!=="mglyph"&&n!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(n==="svg")return 1;if(n==="math")return 2}return i}},fS=Fn("passive,once,capture"),pS=Fn("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),mS=Fn("left,right"),bp=Fn("onkeyup,onkeydown,onkeypress"),Ep=(n,e)=>gn(n)&&n.content.toLowerCase()==="onclick"?je(e,!0):n.type!==4?oi(["(",n,`) === "onClick" ? "${e}" : (`,n,")"]):n,gS=(n,e)=>{n.type===1&&n.tagType===0&&(n.tag==="script"||n.tag==="style")&&e.removeNode()},vS=[n=>{n.type===1&&n.props.forEach((e,t)=>{let i,s;e.type===6&&e.name==="style"&&e.value&&(n.props[t]={type:7,name:"bind",arg:je("style",!0,e.loc),exp:(i=e.value.content,s=e.loc,je(JSON.stringify(Om(i)),!1,s,3)),modifiers:[],loc:e.loc})})}],_S={cloak:()=>({props:[]}),html:(n,e,t)=>{let{exp:i,loc:s}=n;return i||t.onError(ft(54,s)),e.children.length&&(t.onError(ft(55,s)),e.children.length=0),{props:[Ut(je("innerHTML",!0,s),i||je("",!0))]}},text:(n,e,t)=>{let{exp:i,loc:s}=n;return i||t.onError(ft(56,s)),e.children.length&&(t.onError(ft(57,s)),e.children.length=0),{props:[Ut(je("textContent",!0),i?In(i,t)>0?i:kt(t.helperString(Mc),[i],s):je("",!0))]}},model:(n,e,t)=>{let i=qv(n,e,t);if(!i.props.length||e.tagType===1)return i;n.arg&&t.onError(ft(59,n.arg.loc));let{tag:s}=e,r=t.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let a=Kv,o=!1;if(s==="input"||r){let l=bc(e,"type");if(l){if(l.type===7)a=lh;else if(l.value)switch(l.value.content){case"radio":a=Yv;break;case"checkbox":a=Zv;break;case"file":o=!0,t.onError(ft(60,n.loc))}}else e.props.some(c=>c.type===7&&c.name==="bind"&&(!c.arg||c.arg.type!==4||!c.arg.isStatic))&&(a=lh)}else s==="select"&&(a=Jv);o||(i.needRuntime=t.helper(a))}else t.onError(ft(58,n.loc));return i.props=i.props.filter(a=>a.key.type!==4||a.key.content!=="modelValue"),i},on:(n,e,t)=>jv(n,e,t,i=>{let{modifiers:s}=n;if(!s.length)return i;let{key:r,value:a}=i.props[0],{keyModifiers:o,nonKeyModifiers:l,eventOptionModifiers:c}=((u,h,d)=>{let p=[],g=[],y=[];for(let m=0;m<h.length;m++){let f=h[m].content;fS(f)?y.push(f):mS(f)?gn(u)?bp(u.content.toLowerCase())?p.push(f):g.push(f):(p.push(f),g.push(f)):pS(f)?g.push(f):p.push(f)}return{keyModifiers:p,nonKeyModifiers:g,eventOptionModifiers:y}})(r,s,n.loc);if(l.includes("right")&&(r=Ep(r,"onContextmenu")),l.includes("middle")&&(r=Ep(r,"onMouseup")),l.length&&(a=kt(t.helper(Qv),[a,JSON.stringify(l)])),o.length&&(!gn(r)||bp(r.content.toLowerCase()))&&(a=kt(t.helper($v),[a,JSON.stringify(o)])),c.length){let u=c.map(ar).join("");r=gn(r)?je(`${r.content}${u}`,!0):oi(["(",r,`) + "${u}"`])}return{props:[Ut(r,a)]}}),show:(n,e,t)=>{let{exp:i,loc:s}=n;return i||t.onError(ft(62,s)),{props:[],needRuntime:t.helper(e0)}}},Tp=Object.create(null);function xS(n,e){if(!Ge(n))if(n.nodeType)n=n.innerHTML;else return Yt;let t=n+JSON.stringify(e,(o,l)=>typeof l=="function"?l.toString():l),i=Tp[t];if(i)return i;if(n[0]==="#"){let o=document.querySelector(n);n=o?o.innerHTML:""}let s=Qe({hoistStatic:!0,onError:void 0,onWarn:Yt},e);!s.isCustomElement&&"u">typeof customElements&&(s.isCustomElement=o=>!!customElements.get(o));let{code:r}=function(o,l={}){return function(c,u={}){var h;let d,p=u.onError||$u,g=u.mode==="module";u.prefixIdentifiers===!0?p(ft(48)):g&&p(ft(49)),u.cacheHandlers&&p(ft(50)),u.scopeId&&!g&&p(ft(51));let y=Qe({},u,{prefixIdentifiers:!1}),m=Ge(c)?function(_,v){if(Dt.reset(),rn=null,ut=null,Dn="",Li=-1,Us=-1,Mt.length=0,Wi=_,vt=Qe({},Ov),v){let E;for(E in v)v[E]!=null&&(vt[E]=v[E])}Dt.mode=vt.parseMode==="html"?1:2*(vt.parseMode==="sfc"),Dt.inXML=vt.ns===1||vt.ns===2;let A=v&&v.delimiters;A&&(Dt.delimiterOpen=jl(A[0]),Dt.delimiterClose=jl(A[1]));let T=Kl=function(E,R=""){return{type:0,source:R,children:E,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:On}}([],_);return Dt.parse(Wi),T.loc=Pt(0,_.length),T.children=Bv(T.children),Kl=null,T}(c,y):c,[f,x]=[[hS,cS,nS,uS,iS,aS,rS,sS,lS],{on:jv,bind:oS,model:qv}];return d=function(_,{filename:v="",prefixIdentifiers:A=!1,hoistStatic:T=!1,hmr:E=!1,cacheHandlers:R=!1,nodeTransforms:b=[],directiveTransforms:M={},transformHoist:P=null,isBuiltInComponent:I=Yt,isCustomElement:F=Yt,expressionPlugins:N=[],scopeId:O=null,slotted:W=!0,ssr:Z=!1,inSSR:G=!1,ssrCssVars:ee="",bindingMetadata:he=$e,inline:de=!1,isTS:fe=!1,onError:Ae=$u,onWarn:se=Rv,compatConfig:ge}){let we=v.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),oe={filename:v,selfName:we&&ar(pt(we[1])),prefixIdentifiers:A,hoistStatic:T,hmr:E,cacheHandlers:R,nodeTransforms:b,directiveTransforms:M,transformHoist:P,isBuiltInComponent:I,isCustomElement:F,expressionPlugins:N,scopeId:O,slotted:W,ssr:Z,inSSR:G,ssrCssVars:ee,bindingMetadata:he,inline:de,isTS:fe,onError:Ae,onWarn:se,compatConfig:ge,root:_,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,vForMemoKeyedNodes:new WeakSet,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:_,childIndex:0,inVOnce:!1,helper(pe){let Ie=oe.helpers.get(pe)||0;return oe.helpers.set(pe,Ie+1),pe},removeHelper(pe){let Ie=oe.helpers.get(pe);if(Ie){let ve=Ie-1;ve?oe.helpers.set(pe,ve):oe.helpers.delete(pe)}},helperString:pe=>`_${Qr[oe.helper(pe)]}`,replaceNode(pe){oe.parent.children[oe.childIndex]=oe.currentNode=pe},removeNode(pe){let Ie=oe.parent.children,ve=pe?Ie.indexOf(pe):oe.currentNode?oe.childIndex:-1;pe&&pe!==oe.currentNode?oe.childIndex>ve&&(oe.childIndex--,oe.onNodeRemoved()):(oe.currentNode=null,oe.onNodeRemoved()),oe.parent.children.splice(ve,1)},onNodeRemoved:Yt,addIdentifiers(pe){},removeIdentifiers(pe){},hoist(pe){Ge(pe)&&(pe=je(pe)),oe.hoists.push(pe);let Ie=je(`_hoisted_${oe.hoists.length}`,!1,pe.loc,2);return Ie.hoisted=pe,Ie},cache(pe,Ie=!1,ve=!1){let U=function(L,B,w=!1,K=!1){return{type:20,index:L,value:B,needPauseTracking:w,inVOnce:K,needArraySpread:!1,loc:On}}(oe.cached.length,pe,Ie,ve);return oe.cached.push(U),U}};return oe}(m,h=Qe({},y,{nodeTransforms:[...f,...u.nodeTransforms||[]],directiveTransforms:Qe({},x,u.directiveTransforms||{})})),Jl(m,d),h.hoistStatic&&function _(v,A,T,E=!1,R=!1){let{children:b}=v,M=[];for(let N=0;N<b.length;N++){let O=b[N];if(O.type===1&&O.tagType===0){let W=E?0:In(O,T);if(W>0){if(W>=2){O.codegenNode.patchFlag=-1,M.push(O);continue}}else{let Z=O.codegenNode;if(Z.type===13){let G=Z.patchFlag;if((G===void 0||G===512||G===1)&&zv(O,T)>=2){let ee=Vv(O);ee&&(Z.props=T.hoist(ee))}Z.dynamicProps&&(Z.dynamicProps=T.hoist(Z.dynamicProps))}}}else if(O.type===12&&(E?0:In(O,T))>=2){O.codegenNode.type===14&&O.codegenNode.arguments.length>0&&O.codegenNode.arguments.push("-1"),M.push(O);continue}if(O.type===1){let W=O.tagType===1;W&&T.scopes.vSlot++,_(O,v,T,!1,R),W&&T.scopes.vSlot--}else if(O.type===11)_(O,v,T,O.children.length===1,!0);else if(O.type===9)for(let W=0;W<O.branches.length;W++)_(O.branches[W],v,T,O.branches[W].children.length===1,R)}let P=!1;if(M.length===b.length&&v.type===1){if(v.tagType===0&&v.codegenNode&&v.codegenNode.type===13&&Le(v.codegenNode.children))v.codegenNode.children=I(qs(v.codegenNode.children)),P=!0;else if(v.tagType===1&&v.codegenNode&&v.codegenNode.type===13&&v.codegenNode.children&&!Le(v.codegenNode.children)&&v.codegenNode.children.type===15){let N=F(v.codegenNode,"default");N&&(N.returns=I(qs(N.returns)),P=!0)}else if(v.tagType===3&&A&&A.type===1&&A.tagType===1&&A.codegenNode&&A.codegenNode.type===13&&A.codegenNode.children&&!Le(A.codegenNode.children)&&A.codegenNode.children.type===15){let N=jn(v,"slot",!0),O=N&&N.arg&&F(A.codegenNode,N.arg);O&&(O.returns=I(qs(O.returns)),P=!0)}}if(!P)for(let N of M)N.codegenNode=T.cache(N.codegenNode);function I(N){let O=T.cache(N);return O.needArraySpread=!0,O}function F(N,O){if(N.children&&!Le(N.children)&&N.children.type===15){let W=N.children.properties.find(Z=>Z.key===O||Z.key.content===O);return W&&W.value}}M.length&&T.transformHoist&&T.transformHoist(b,T,v)}(m,void 0,d,!!up(m)),h.ssr||function(_,v){let{helper:A}=v,{children:T}=_;if(T.length===1){let E=up(_);if(E&&E.codegenNode){let R=E.codegenNode;R.type===13&&Od(R,v),_.codegenNode=R}else _.codegenNode=T[0]}else T.length>1&&(_.codegenNode=eo(v,A(Qa),void 0,_.children,64,void 0,void 0,!0,void 0,!1))}(m,d),m.helpers=new Set([...d.helpers.keys()]),m.components=[...d.components],m.directives=[...d.directives],m.imports=d.imports,m.hoists=d.hoists,m.temps=d.temps,m.cached=d.cached,m.transformed=!0,function(_,v={}){let A=function(Z,{mode:G="function",prefixIdentifiers:ee=G==="module",sourceMap:he=!1,filename:de="template.vue.html",scopeId:fe=null,optimizeImports:Ae=!1,runtimeGlobalName:se="Vue",runtimeModuleName:ge="vue",ssrRuntimeModuleName:we="vue/server-renderer",ssr:oe=!1,isTS:pe=!1,inSSR:Ie=!1}){let ve={mode:G,prefixIdentifiers:ee,sourceMap:he,filename:de,scopeId:fe,optimizeImports:Ae,runtimeGlobalName:se,runtimeModuleName:ge,ssrRuntimeModuleName:we,ssr:oe,isTS:pe,inSSR:Ie,source:Z.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper:L=>`_${Qr[L]}`,push(L,B=-2,w){ve.code+=L},indent(){U(++ve.indentLevel)},deindent(L=!1){L?--ve.indentLevel:U(--ve.indentLevel)},newline(){U(ve.indentLevel)}};function U(L){ve.push(`
`+"  ".repeat(L),0)}return ve}(_,v);v.onContextCreated&&v.onContextCreated(A);let{mode:T,push:E,prefixIdentifiers:R,indent:b,deindent:M,newline:P,ssr:I}=A,F=Array.from(_.helpers),N=F.length>0,O=!R&&T!=="module";(function(Z,G){let{push:ee,newline:he,runtimeGlobalName:de}=G,fe=Array.from(Z.helpers);if(fe.length>0&&(ee(`const _Vue = ${de}
`,-1),Z.hoists.length)){let Ae=[xs,ys,po,Ad,Tv].filter(se=>fe.includes(se)).map(hp).join(", ");ee(`const { ${Ae} } = _Vue
`,-1)}(function(Ae,se){if(!Ae.length)return;se.pure=!0;let{push:ge,newline:we}=se;we();for(let oe=0;oe<Ae.length;oe++){let pe=Ae[oe];pe&&(ge(`const _hoisted_${oe+1} = `),fn(pe,se),we())}se.pure=!1})(Z.hoists,G),he(),ee("return ")})(_,A);let W=(I?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(E(`function ${I?"ssrRender":"render"}(${W}) {`),b(),O&&(E("with (_ctx) {"),b(),N&&(E(`const { ${F.map(hp).join(", ")} } = _Vue
`,-1),P())),_.components.length&&(dp(_.components,"component",A),(_.directives.length||_.temps>0)&&P()),_.directives.length&&(dp(_.directives,"directive",A),_.temps>0&&P()),_.temps>0){E("let ");for(let Z=0;Z<_.temps;Z++)E(`${Z>0?", ":""}_temp${Z}`)}return(_.components.length||_.directives.length||_.temps)&&(E(`
`,0),P()),I||E("return "),_.codegenNode?fn(_.codegenNode,A):E("null"),O&&(M(),E("}")),M(),E("}"),{ast:_,code:A.code,preamble:"",map:A.map?A.map.toJSON():void 0}}(m,y)}(o,Qe({},dS,l,{nodeTransforms:[gS,...vS,...l.nodeTransforms||[]],directiveTransforms:Qe({},_S,l.directiveTransforms||{}),transformHoist:null}))}(n,s),a=Function("Vue",r)(ky);return a._rc=!0,Tp[t]=a}Zg(xS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="174",Wr={ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yS=0,Ap=1,SS=2,i0=1,s0=2,Ni=3,Ss=0,vn=1,mi=2,mn=0,Xr=1,wp=2,Cp=3,Rp=4,r0=5,ki=100,MS=101,bS=102,ES=103,TS=104,ch=200,AS=201,wS=202,CS=203,uh=204,hh=205,a0=206,RS=207,o0=208,PS=209,DS=210,LS=211,NS=212,IS=213,US=214,dh=0,fh=1,ph=2,ea=3,mh=4,gh=5,vh=6,_h=7,l0=0,OS=1,FS=2,vs=0,c0=1,u0=2,h0=3,Ql=4,d0=5,f0=6,p0=7,m0=300,ta=301,na=302,xh=303,yh=304,Ec=306,ia=1e3,Hs=1001,Sh=1002,Jt=1003,BS=1004,Uo=1005,si=1006,Kc=1007,Gs=1008,Ki=1009,g0=1010,v0=1011,to=1012,zd=1013,er=1014,gi=1015,Si=1016,Vd=1017,Hd=1018,tr=1020,_0=35902,x0=1021,y0=1022,ri=1023,S0=1024,M0=1025,jr=1026,nr=1027,Gd=1028,Wd=1029,b0=1030,Xd=1031,jd=1033,gl=33776,vl=33777,_l=33778,xl=33779,Mh=35840,bh=35841,Eh=35842,Th=35843,Ah=36196,wh=37492,Ch=37496,Rh=37808,Ph=37809,Dh=37810,Lh=37811,Nh=37812,Ih=37813,Uh=37814,Oh=37815,Fh=37816,Bh=37817,kh=37818,zh=37819,Vh=37820,Hh=37821,yl=36492,Gh=36494,Wh=36495,E0=36283,Xh=36284,jh=36285,qh=36286,kS=3200,zS=3201,qd=0,VS=1,hs="",bn="srgb",sa="srgb-linear",$l="linear",dt="srgb",mr=7680,Pp=519,HS=512,GS=513,WS=514,T0=515,XS=516,jS=517,qS=518,YS=519,Dp=35044,Lp="300 es",zi=2e3,ec=2001;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Np=1234567;const Fa=Math.PI/180,no=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Yd(n,e){return(n%e+e)%e}function ZS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function KS(n,e,t){return n!==e?(t-n)/(e-n):0}function Ba(n,e,t){return(1-t)*n+t*e}function JS(n,e,t,i){return Ba(n,e,1-Math.exp(-t*i))}function QS(n,e=1){return e-Math.abs(Yd(n,e*2)-e)}function $S(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function eM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nM(n,e){return n+Math.random()*(e-n)}function iM(n){return n*(.5-Math.random())}function sM(n){n!==void 0&&(Np=n);let e=Np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(n){return n*Fa}function aM(n){return n*no}function oM(n){return(n&n-1)===0&&n!==0}function lM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uM(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zd={DEG2RAD:Fa,RAD2DEG:no,generateUUID:cr,clamp:Ze,euclideanModulo:Yd,mapLinear:ZS,inverseLerp:KS,lerp:Ba,damp:JS,pingpong:QS,smoothstep:$S,smootherstep:eM,randInt:tM,randFloat:nM,randFloatSpread:iM,seededRandom:sM,degToRad:rM,radToDeg:aM,isPowerOfTwo:oM,ceilPowerOfTwo:lM,floorPowerOfTwo:cM,setQuaternionFromProperEuler:uM,normalize:hn,denormalize:Dr};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],x=s[1],_=s[4],v=s[7],A=s[2],T=s[5],E=s[8];return r[0]=a*y+o*x+l*A,r[3]=a*m+o*_+l*T,r[6]=a*f+o*v+l*E,r[1]=c*y+u*x+h*A,r[4]=c*m+u*_+h*T,r[7]=c*f+u*v+h*E,r[2]=d*y+p*x+g*A,r[5]=d*m+p*_+g*T,r[8]=d*f+p*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new Ye;function A0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hM(){const n=tc("canvas");return n.style.display="block",n}const Ip={};function Os(n){n in Ip||(Ip[n]=!0,console.warn(n))}function dM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function fM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Up=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const n={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?$l:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sa]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:Up,fromXYZ:Op,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Up,fromXYZ:Op,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const st=mM();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gr;class gM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=tc("canvas")),gr.width=e.width,gr.height=e.height;const i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qc(s[a].image)):r.push(Qc(s[a]))}else r=Qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class Xt extends lr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Hs,s=Hs,r=si,a=Gs,o=ri,l=Ki,c=Xt.DEFAULT_ANISOTROPY,u=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=cr(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Hs:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Hs:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=m0;Xt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(p+1)/2,A=(f+1)/2,T=(u+d)/4,E=(h+y)/4,R=(g+m)/4;return _>v&&_>A?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=E/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=R/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=R/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends xM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class w0 extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*y,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,f*x);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const v=o*x;if(l=l*m+d*v,c=c*m+p*v,u=u*m+g*v,h=h*m+y*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new j,Fp=new ir;class go{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Fo.subVectors(this.max,xa),vr.subVectors(e.a,xa),_r.subVectors(e.b,xa),xr.subVectors(e.c,xa),es.subVectors(_r,vr),ts.subVectors(xr,_r),ws.subVectors(vr,xr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-ws.z,ws.y,es.z,0,-es.x,ts.z,0,-ts.x,ws.z,0,-ws.x,-es.y,es.x,0,-ts.y,ts.x,0,-ws.y,ws.x,0];return!eu(t,vr,_r,xr,Fo)||(t=[1,0,0,0,1,0,0,0,1],!eu(t,vr,_r,xr,Fo))?!1:(Bo.crossVectors(es,ts),t=[Bo.x,Bo.y,Bo.z],eu(t,vr,_r,xr,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new j,new j,new j,new j,new j,new j,new j,new j],$n=new j,Oo=new go,vr=new j,_r=new j,xr=new j,es=new j,ts=new j,ws=new j,xa=new j,Fo=new j,Bo=new j,Cs=new j;function eu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Cs.fromArray(n,r);const o=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=i.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const SM=new go,ya=new j,tu=new j;class Jd{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ya,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(tu)),this.expandByPoint(ya.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new j,nu=new j,ko=new j,ns=new j,iu=new j,zo=new j,su=new j;class C0{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nu.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(nu);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ko),o=ns.dot(this.direction),l=-ns.dot(ko),c=ns.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nu).addScaledVector(ko,d),p}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){iu.subVectors(t,e),zo.subVectors(i,e),su.crossVectors(iu,zo);let a=this.direction.dot(su),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);const l=o*this.direction.dot(zo.crossVectors(ns,zo));if(l<0)return null;const c=o*this.direction.dot(iu.cross(ns));if(c<0||l+c>a)return null;const u=-o*ns.dot(su);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,s,r,a,o,l,c,u,h,d,p,g,y,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,p,g,y,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,y=c*h;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,bM)}lookAt(e,t,i){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),is.crossVectors(i,Rn),is.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),is.crossVectors(i,Rn)),is.normalize(),Vo.crossVectors(Rn,is),s[0]=is.x,s[4]=Vo.x,s[8]=Rn.x,s[1]=is.y,s[5]=Vo.y,s[9]=Rn.y,s[2]=is.z,s[6]=Vo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],x=i[3],_=i[7],v=i[11],A=i[15],T=s[0],E=s[4],R=s[8],b=s[12],M=s[1],P=s[5],I=s[9],F=s[13],N=s[2],O=s[6],W=s[10],Z=s[14],G=s[3],ee=s[7],he=s[11],de=s[15];return r[0]=a*T+o*M+l*N+c*G,r[4]=a*E+o*P+l*O+c*ee,r[8]=a*R+o*I+l*W+c*he,r[12]=a*b+o*F+l*Z+c*de,r[1]=u*T+h*M+d*N+p*G,r[5]=u*E+h*P+d*O+p*ee,r[9]=u*R+h*I+d*W+p*he,r[13]=u*b+h*F+d*Z+p*de,r[2]=g*T+y*M+m*N+f*G,r[6]=g*E+y*P+m*O+f*ee,r[10]=g*R+y*I+m*W+f*he,r[14]=g*b+y*F+m*Z+f*de,r[3]=x*T+_*M+v*N+A*G,r[7]=x*E+_*P+v*O+A*ee,r[11]=x*R+_*I+v*W+A*he,r[15]=x*b+_*F+v*Z+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*p-i*l*p)+y*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],x=h*m*c-y*d*c+y*l*p-o*m*p-h*l*f+o*d*f,_=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,v=u*y*c-g*h*c+g*o*p-a*y*p-u*o*f+a*h*f,A=g*h*l-u*y*l-g*o*d+a*y*d+u*o*m-a*h*m,T=t*x+i*_+s*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=x*E,e[1]=(y*d*r-h*m*r-y*s*p+i*m*p+h*s*f-i*d*f)*E,e[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*f+i*l*f)*E,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*E,e[4]=_*E,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*E,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*E,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*E,e[8]=v*E,e[9]=(g*h*r-u*y*r-g*i*p+t*y*p+u*i*f-t*h*f)*E,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*f+t*o*f)*E,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*p-t*o*p)*E,e[12]=A*E,e[13]=(u*y*s-g*h*s+g*i*d-t*y*d-u*i*m+t*h*m)*E,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*m-t*o*m)*E,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,y=a*u,m=a*h,f=o*h,x=l*c,_=l*u,v=l*h,A=i.x,T=i.y,E=i.z;return s[0]=(1-(y+f))*A,s[1]=(p+v)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(m-x)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=yr.set(s[0],s[1],s[2]).length();const a=yr.set(s[4],s[5],s[6]).length(),o=yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);const c=1/r,u=1/a,h=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=zi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(o===zi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ec)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=zi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),d=(t+e)*c,p=(i+s)*u;let g,y;if(o===zi)g=(a+r)*h,y=-2*h;else if(o===ec)g=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new j,ei=new yt,MM=new j(0,0,0),bM=new j(1,1,1),is=new j,Vo=new j,Rn=new j,Bp=new yt,kp=new ir;class Mi{constructor(e=0,t=0,i=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const zp=new j,Sr=new ir,Ci=new yt,Ho=new j,Sa=new j,TM=new j,AM=new ir,Vp=new j(1,0,0),Hp=new j(0,1,0),Gp=new j(0,0,1),Wp={type:"added"},wM={type:"removed"},Mr={type:"childadded",child:null},ru={type:"childremoved",child:null};class Qt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new j,t=new Mi,i=new ir,s=new j(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ye}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Sa,Ho,this.up):Ci.lookAt(Ho,Sa,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wM),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Qt.DEFAULT_UP=new j(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new j,Ri=new j,au=new j,Pi=new j,br=new j,Er=new j,Xp=new j,ou=new j,lu=new j,cu=new j,uu=new gt,hu=new gt,du=new gt;class ii{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Ri.subVectors(i,t),au.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Ri),l=ti.dot(au),c=Ri.dot(Ri),u=Ri.dot(au),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return uu.setScalar(0),hu.setScalar(0),du.setScalar(0),uu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(uu,r.x),a.addScaledVector(hu,r.y),a.addScaledVector(du,r.z),a}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Ri.subVectors(e,t),ti.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;br.subVectors(s,i),Er.subVectors(r,i),ou.subVectors(e,i);const l=br.dot(ou),c=Er.dot(ou);if(l<=0&&c<=0)return t.copy(i);lu.subVectors(e,s);const u=br.dot(lu),h=Er.dot(lu);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(br,a);cu.subVectors(e,r);const p=br.dot(cu),g=Er.dot(cu);if(g>=0&&p<=g)return t.copy(r);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Er,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xp.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Xp,o);const f=1/(m+y+d);return a=y*f,o=d*f,t.copy(i).addScaledVector(br,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Go={h:0,s:0,l:0};function fu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Yd(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=fu(a,r,e+1/3),this.g=fu(a,r,e),this.b=fu(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=P0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return st.fromWorkingColorSpace(nn.copy(this),e),Math.round(Ze(nn.r*255,0,255))*65536+Math.round(Ze(nn.g*255,0,255))*256+Math.round(Ze(nn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=bn){st.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Go);const i=Ba(ss.h,Go.h,t),s=Ba(ss.s,Go.s,t),r=Ba(ss.l,Go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Je;Je.NAMES=P0;let CM=0;class ua extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Xr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=hh,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yr extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new j,Wo=new Me;let RM=0;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dp,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class D0 extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class L0 extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PM=0;const Hn=new yt,pu=new Qt,Tr=new j,Pn=new go,Ma=new go,Ht=new j;class Bn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?L0:D0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Pn.min,Ma.min),Pn.expandByPoint(Ht),Ht.addVectors(Pn.max,Ma.max),Pn.expandByPoint(Ht)):(Pn.expandByPoint(Ma.min),Pn.expandByPoint(Ma.max))}Pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Ht.add(Tr)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new j,l[R]=new j;const c=new j,u=new j,h=new j,d=new Me,p=new Me,g=new Me,y=new j,m=new j;function f(R,b,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[R].add(y),o[b].add(y),o[M].add(y),l[R].add(m),l[b].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,b=x.length;R<b;++R){const M=x[R],P=M.start,I=M.count;for(let F=P,N=P+I;F<N;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new j,v=new j,A=new j,T=new j;function E(R){A.fromBufferAttribute(s,R),T.copy(A);const b=o[R];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(T,b);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,b=x.length;R<b;++R){const M=x[R],P=M.start,I=M.count;for(let F=P,N=P+I;F<N;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new j,r=new j,a=new j,o=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new xi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jp=new yt,Rs=new C0,Xo=new Jd,qp=new j,jo=new j,qo=new j,Yo=new j,mu=new j,Zo=new j,Yp=new j,Ko=new j;class et extends Qt{constructor(e=new Bn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(mu.fromBufferAttribute(h,e),a?Zo.addScaledVector(mu,u):Zo.addScaledVector(mu.sub(t),u))}t.add(Zo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Xo.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Xo,qp)===null||Rs.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(jp.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(jp),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,A=_;v<A;v+=3){const T=o.getX(v),E=o.getX(v+1),R=o.getX(v+2);s=Jo(this,f,e,i,c,u,h,T,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Jo(this,a,e,i,c,u,h,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,A=_;v<A;v+=3){const T=v,E=v+1,R=v+2;s=Jo(this,f,e,i,c,u,h,T,E,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=m,_=m+1,v=m+2;s=Jo(this,a,e,i,c,u,h,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function DM(n,e,t,i,s,r,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ss,o),l===null)return null;Ko.copy(o),Ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:n}}function Jo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,jo),n.getVertexPosition(l,qo),n.getVertexPosition(c,Yo);const u=DM(n,e,t,i,jo,qo,Yo,Yp);if(u){const h=new j;ii.getBarycoord(Yp,jo,qo,Yo,h),s&&(u.uv=ii.getInterpolatedAttribute(s,o,l,c,h,new Me)),r&&(u.uv1=ii.getInterpolatedAttribute(r,o,l,c,h,new Me)),a&&(u.normal=ii.getInterpolatedAttribute(a,o,l,c,h,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};ii.getNormal(jo,qo,Yo,d.normal),u.face=d,u.barycoord=h}return u}class Ms extends Bn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(y,m,f,x,_,v,A,T,E,R,b){const M=v/E,P=A/R,I=v/2,F=A/2,N=T/2,O=E+1,W=R+1;let Z=0,G=0;const ee=new j;for(let he=0;he<W;he++){const de=he*P-F;for(let fe=0;fe<O;fe++){const Ae=fe*M-I;ee[y]=Ae*x,ee[m]=de*_,ee[f]=N,c.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[f]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(fe/E),h.push(1-he/R),Z+=1}}for(let he=0;he<R;he++)for(let de=0;de<E;de++){const fe=d+de+O*he,Ae=d+de+O*(he+1),se=d+(de+1)+O*(he+1),ge=d+(de+1)+O*he;l.push(fe,Ae,ge),l.push(Ae,se,ge),G+=6}o.addGroup(p,G,b),p+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=ra(n[t]);for(const s in i)e[s]=i[s]}return e}function LM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function N0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const vi={clone:ra,merge:dn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class I0 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new j,Zp=new Me,Kp=new Me;class Tn extends I0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Zp,Kp),t.subVectors(Kp,Zp)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,wr=1;class UM extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Ar,wr,e,t);s.layers=this.layers,this.add(s);const r=new Tn(Ar,wr,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Ar,wr,e,t);a.layers=this.layers,this.add(a);const o=new Tn(Ar,wr,e,t);o.layers=this.layers,this.add(o);const l=new Tn(Ar,wr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Ar,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class U0 extends Xt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ta,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OM extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new U0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:mn});r.uniforms.tEquirect.value=t;const a=new et(s,r),o=t.minFilter;return t.minFilter===Gs&&(t.minFilter=si),new UM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Et extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new Qd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class O0 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class BM extends Xt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Jt,u=Jt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new j,kM=new j,zM=new Ye;class us{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=vu.subVectors(i,t).cross(kM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zM.getNormalMatrix(e),s=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Jd,Qo=new j;class $d{constructor(e=new us,t=new us,i=new us,s=new us,r=new us,a=new us){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],x=s[13],_=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+a,d+u,m+g,v+x).normalize(),i[3].setComponents(l-a,d-u,m-g,v-x).normalize(),i[4].setComponents(l-o,d-h,m-y,v-_).normalize(),t===zi)i[5].setComponents(l+o,d+h,m+y,v+_).normalize();else if(t===ec)i[5].setComponents(o,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _u extends Xt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ef extends Xt{constructor(e,t,i,s,r,a,o,l,c,u=jr){if(u!==jr&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jr&&(i=er),i===void 0&&u===nr&&(i=tr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new j);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new j,s=[],r=[],a=[],o=new j,l=new yt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new j)}r[0]=new j,a[0]=new j;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tf extends bi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class VM extends tf{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nf(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const $o=new j,xu=new nf,yu=new nf,Su=new nf;class HM extends bi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new j){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$o),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),xu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,y,m),yu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,y,m),Su.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(xu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),yu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Su.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(xu.calc(l),yu.calc(l),Su.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new j().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jp(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function GM(n,e){const t=1-n;return t*t*e}function WM(n,e){return 2*(1-n)*n*e}function XM(n,e){return n*n*e}function ka(n,e,t,i){return GM(n,e)+WM(n,t)+XM(n,i)}function jM(n,e){const t=1-n;return t*t*t*e}function qM(n,e){const t=1-n;return 3*t*t*n*e}function YM(n,e){return 3*(1-n)*n*n*e}function ZM(n,e){return n*n*n*e}function za(n,e,t,i,s){return jM(n,e)+qM(n,t)+YM(n,i)+ZM(n,s)}class F0 extends bi{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(za(e,s.x,r.x,a.x,o.x),za(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KM extends bi{constructor(e=new j,t=new j,i=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new j){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(za(e,s.x,r.x,a.x,o.x),za(e,s.y,r.y,a.y,o.y),za(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B0 extends bi{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JM extends bi{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends bi{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ka(e,s.x,r.x,a.x),ka(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QM extends bi{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ka(e,s.x,r.x,a.x),ka(e,s.y,r.y,a.y),ka(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z0 extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Jp(o,l.x,c.x,u.x,h.x),Jp(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var Yh=Object.freeze({__proto__:null,ArcCurve:VM,CatmullRomCurve3:HM,CubicBezierCurve:F0,CubicBezierCurve3:KM,EllipseCurve:tf,LineCurve:B0,LineCurve3:JM,QuadraticBezierCurve:k0,QuadraticBezierCurve3:QM,SplineCurve:z0});class $M extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}}class Qp extends $M{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new B0(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new k0(this.currentPoint.clone(),new Me(e,t),new Me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new F0(this.currentPoint.clone(),new Me(e,t),new Me(i,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new z0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new tf(e,t,i,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tc extends Bn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const y=[],m=i/2;let f=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(p,2));function x(){const v=new j,A=new j;let T=0;const E=(t-e)/i;for(let R=0;R<=r;R++){const b=[],M=R/r,P=M*(t-e)+e;for(let I=0;I<=s;I++){const F=I/s,N=F*l+o,O=Math.sin(N),W=Math.cos(N);A.x=P*O,A.y=-M*i+m,A.z=P*W,h.push(A.x,A.y,A.z),v.set(O,E,W).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-M),b.push(g++)}y.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){const M=y[b][R],P=y[b+1][R],I=y[b+1][R+1],F=y[b][R+1];(e>0||b!==0)&&(u.push(M,P,F),T+=3),(t>0||b!==r-1)&&(u.push(P,I,F),T+=3)}c.addGroup(f,T,0),f+=T}function _(v){const A=g,T=new Me,E=new j;let R=0;const b=v===!0?e:t,M=v===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const N=I/s*l+o,O=Math.cos(N),W=Math.sin(N);E.x=b*W,E.y=m*M,E.z=b*O,h.push(E.x,E.y,E.z),d.push(0,M,0),T.x=O*.5+.5,T.y=W*.5*M+.5,p.push(T.x,T.y),g++}for(let I=0;I<s;I++){const F=A+I,N=P+I;v===!0?u.push(N,N+1,F):u.push(N+1,N,F),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class V0 extends Qp{constructor(e){super(e),this.uuid=cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Qp().fromJSON(s))}return this}}class eb{static triangulate(e,t,i=2){const s=t&&t.length,r=s?t[0]*i:e.length;let a=H0(e,0,r,i,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,u,h,d,p,g;if(s&&(a=rb(e,t,a,i)),e.length>80*i){l=u=e[0],c=h=e[1];for(let y=i;y<r;y+=i)d=e[y],p=e[y+1],d<l&&(l=d),p<c&&(c=p),d>u&&(u=d),p>h&&(h=p);g=Math.max(u-l,h-c),g=g!==0?32767/g:0}return io(a,o,i,l,c,g,0),o}}function H0(n,e,t,i,s){let r,a;if(s===gb(n,e,t,i)>0)for(r=e;r<t;r+=i)a=$p(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=$p(r,n[r],n[r+1],a);return a&&Ac(a,a.next)&&(ro(a),a=a.next),a}function sr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ac(t,t.next)||Tt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function io(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ub(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?nb(n,i,s,r):tb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),ro(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ib(sr(n),e,t),io(n,e,t,i,s,r,2)):a===2&&sb(n,e,t,i,s,r):io(sr(n),e,t,i,s,r,1);break}}}function tb(n){const e=n.prev,t=n,i=n.next;if(Tt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Or(s,o,r,l,a,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nb(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Tt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,y=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Zh(p,g,e,t,i),x=Zh(y,m,e,t,i);let _=n.prevZ,v=n.nextZ;for(;_&&_.z>=f&&v&&v.z<=x;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Or(o,u,l,h,c,d,_.x,_.y)&&Tt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Or(o,u,l,h,c,d,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Or(o,u,l,h,c,d,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Or(o,u,l,h,c,d,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ib(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ac(s,r)&&G0(s,i,i.next,r)&&so(s,r)&&so(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),ro(i),ro(i.next),i=n=r),i=i.next}while(i!==n);return sr(i)}function sb(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fb(a,o)){let l=W0(a,o);a=sr(a,a.next),l=sr(l,l.next),io(a,e,t,i,s,r,0),io(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function rb(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=H0(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(db(c));for(s.sort(ab),r=0;r<s.length;r++)t=ob(s[r],t);return t}function ab(n,e){return n.x-e.x}function ob(n,e){const t=lb(n,e);if(!t)return e;const i=W0(t,n);return sr(i,i.next),sr(t,t.next)}function lb(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Or(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),so(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&cb(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function cb(n,e){return Tt(n.prev,n,e.prev)<0&&Tt(e.next,n,n.next)<0}function ub(n,e,t,i){let s=n;do s.z===0&&(s.z=Zh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,hb(s)}function hb(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Zh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function db(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Or(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function fb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!pb(n,e)&&(so(n,e)&&so(e,n)&&mb(n,e)&&(Tt(n.prev,n,e.prev)||Tt(n,e.prev,e))||Ac(n,e)&&Tt(n.prev,n,n.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ac(n,e){return n.x===e.x&&n.y===e.y}function G0(n,e,t,i){const s=tl(Tt(n,e,t)),r=tl(Tt(n,e,i)),a=tl(Tt(t,i,n)),o=tl(Tt(t,i,e));return!!(s!==r&&a!==o||s===0&&el(n,t,e)||r===0&&el(n,i,e)||a===0&&el(t,n,i)||o===0&&el(t,e,i))}function el(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function tl(n){return n>0?1:n<0?-1:0}function pb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&G0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function so(n,e){return Tt(n.prev,n,n.next)<0?Tt(n,e,n.next)>=0&&Tt(n,n.prev,e)>=0:Tt(n,e,n.prev)<0||Tt(n,n.next,e)<0}function mb(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function W0(n,e){const t=new Kh(n.i,n.x,n.y),i=new Kh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $p(n,e,t,i){const s=new Kh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gb(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Va{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Va.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];em(e),tm(i,e);let a=e.length;t.forEach(em);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,tm(i,t[l]);const o=eb.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function em(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function tm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class sf extends Bn{constructor(e=new V0([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new At(s,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:vb;let _,v=!1,A,T,E,R;f&&(_=f.getSpacedPoints(u),v=!0,d=!1,A=f.computeFrenetFrames(u,!1),T=new j,E=new j,R=new j),d||(m=0,p=0,g=0,y=0);const b=o.extractPoints(c);let M=b.shape;const P=b.holes;if(!Va.isClockWise(M)){M=M.reverse();for(let L=0,B=P.length;L<B;L++){const w=P[L];Va.isClockWise(w)&&(P[L]=w.reverse())}}const F=Va.triangulateShape(M,P),N=M;for(let L=0,B=P.length;L<B;L++){const w=P[L];M=M.concat(w)}function O(L,B,w){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(B,w)}const W=M.length,Z=F.length;function G(L,B,w){let K,z,J;const H=L.x-B.x,te=L.y-B.y,X=w.x-L.x,C=w.y-L.y,S=H*H+te*te,k=H*C-te*X;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(S),re=Math.sqrt(X*X+C*C),ne=B.x-te/Y,Se=B.y+H/Y,V=w.x-C/re,$=w.y+X/re,me=((V-ne)*C-($-Se)*X)/(H*C-te*X);K=ne+H*me-L.x,z=Se+te*me-L.y;const ae=K*K+z*z;if(ae<=2)return new Me(K,z);J=Math.sqrt(ae/2)}else{let Y=!1;H>Number.EPSILON?X>Number.EPSILON&&(Y=!0):H<-Number.EPSILON?X<-Number.EPSILON&&(Y=!0):Math.sign(te)===Math.sign(C)&&(Y=!0),Y?(K=-te,z=H,J=Math.sqrt(S)):(K=H,z=te,J=Math.sqrt(S/2))}return new Me(K/J,z/J)}const ee=[];for(let L=0,B=N.length,w=B-1,K=L+1;L<B;L++,w++,K++)w===B&&(w=0),K===B&&(K=0),ee[L]=G(N[L],N[w],N[K]);const he=[];let de,fe=ee.concat();for(let L=0,B=P.length;L<B;L++){const w=P[L];de=[];for(let K=0,z=w.length,J=z-1,H=K+1;K<z;K++,J++,H++)J===z&&(J=0),H===z&&(H=0),de[K]=G(w[K],w[J],w[H]);he.push(de),fe=fe.concat(de)}for(let L=0;L<m;L++){const B=L/m,w=p*Math.cos(B*Math.PI/2),K=g*Math.sin(B*Math.PI/2)+y;for(let z=0,J=N.length;z<J;z++){const H=O(N[z],ee[z],K);oe(H.x,H.y,-w)}for(let z=0,J=P.length;z<J;z++){const H=P[z];de=he[z];for(let te=0,X=H.length;te<X;te++){const C=O(H[te],de[te],K);oe(C.x,C.y,-w)}}}const Ae=g+y;for(let L=0;L<W;L++){const B=d?O(M[L],fe[L],Ae):M[L];v?(E.copy(A.normals[0]).multiplyScalar(B.x),T.copy(A.binormals[0]).multiplyScalar(B.y),R.copy(_[0]).add(E).add(T),oe(R.x,R.y,R.z)):oe(B.x,B.y,0)}for(let L=1;L<=u;L++)for(let B=0;B<W;B++){const w=d?O(M[B],fe[B],Ae):M[B];v?(E.copy(A.normals[L]).multiplyScalar(w.x),T.copy(A.binormals[L]).multiplyScalar(w.y),R.copy(_[L]).add(E).add(T),oe(R.x,R.y,R.z)):oe(w.x,w.y,h/u*L)}for(let L=m-1;L>=0;L--){const B=L/m,w=p*Math.cos(B*Math.PI/2),K=g*Math.sin(B*Math.PI/2)+y;for(let z=0,J=N.length;z<J;z++){const H=O(N[z],ee[z],K);oe(H.x,H.y,h+w)}for(let z=0,J=P.length;z<J;z++){const H=P[z];de=he[z];for(let te=0,X=H.length;te<X;te++){const C=O(H[te],de[te],K);v?oe(C.x,C.y+_[u-1].y,_[u-1].x+w):oe(C.x,C.y,h+w)}}}se(),ge();function se(){const L=s.length/3;if(d){let B=0,w=W*B;for(let K=0;K<Z;K++){const z=F[K];pe(z[2]+w,z[1]+w,z[0]+w)}B=u+m*2,w=W*B;for(let K=0;K<Z;K++){const z=F[K];pe(z[0]+w,z[1]+w,z[2]+w)}}else{for(let B=0;B<Z;B++){const w=F[B];pe(w[2],w[1],w[0])}for(let B=0;B<Z;B++){const w=F[B];pe(w[0]+W*u,w[1]+W*u,w[2]+W*u)}}i.addGroup(L,s.length/3-L,0)}function ge(){const L=s.length/3;let B=0;we(N,B),B+=N.length;for(let w=0,K=P.length;w<K;w++){const z=P[w];we(z,B),B+=z.length}i.addGroup(L,s.length/3-L,1)}function we(L,B){let w=L.length;for(;--w>=0;){const K=w;let z=w-1;z<0&&(z=L.length-1);for(let J=0,H=u+m*2;J<H;J++){const te=W*J,X=W*(J+1),C=B+K+te,S=B+z+te,k=B+z+X,Y=B+K+X;Ie(C,S,k,Y)}}}function oe(L,B,w){l.push(L),l.push(B),l.push(w)}function pe(L,B,w){ve(L),ve(B),ve(w);const K=s.length/3,z=x.generateTopUV(i,s,K-3,K-2,K-1);U(z[0]),U(z[1]),U(z[2])}function Ie(L,B,w,K){ve(L),ve(B),ve(K),ve(B),ve(w),ve(K);const z=s.length/3,J=x.generateSideWallUV(i,s,z-6,z-3,z-2,z-1);U(J[0]),U(J[1]),U(J[3]),U(J[1]),U(J[2]),U(J[3])}function ve(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function U(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _b(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yh[s.type]().fromJSON(s)),new sf(i,e.options)}}const vb={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Me(r,a),new Me(o,l),new Me(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Me(a,1-l),new Me(c,1-h),new Me(d,1-g),new Me(y,1-f)]:[new Me(o,1-l),new Me(u,1-h),new Me(p,1-g),new Me(m,1-f)]}};function _b(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class aa extends Bn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){const x=f*d-a;for(let _=0;_<c;_++){const v=_*h-r;g.push(v,-x,0),y.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const _=x+c*f,v=x+c*(f+1),A=x+1+c*(f+1),T=x+1+c*f;p.push(_,v,T),p.push(v,A,T)}this.setIndex(p),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class rf extends Bn{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new j,g=new Me;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<s;y++){const m=y*(i+1);for(let f=0;f<i;f++){const x=f+m,_=x,v=x+i+1,A=x+i+2,T=x+1;o.push(_,v,T),o.push(v,A,T)}}this.setIndex(o),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ha extends Bn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new j,d=new j,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let v=0;f===0&&a===0?v=.5/t:f===i&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const T=A/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(T+v,1-_),x.push(c++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const _=u[f][x+1],v=u[f][x],A=u[f+1][x],T=u[f+1][x+1];(f!==0||a>0)&&p.push(_,v,T),(f!==i-1||l<Math.PI)&&p.push(v,A,T)}this.setIndex(p),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wc extends Bn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new j,h=new j,d=new j;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const y=g/s*r,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;a.push(y,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xb extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qn extends ua{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nl extends qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yb extends ua{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Sb extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mb extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class af extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bb extends af{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Mu=new yt,nm=new j,im=new j;class X0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(im),t.updateMatrixWorld(),Mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sm=new yt,ba=new j,bu=new j;class Eb extends X0{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),bu.copy(i.position),bu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bu),i.updateMatrixWorld(),s.makeTranslation(-ba.x,-ba.y,-ba.z),sm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm)}}class j0 extends af{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class of extends I0{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tb extends X0{constructor(){super(new of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Tb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ab extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class wb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rm(){return performance.now()}class am{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cb extends lr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function om(n,e,t,i){const s=Rb(i);switch(t){case x0:return n*e;case S0:return n*e;case M0:return n*e*2;case Gd:return n*e/s.components*s.byteLength;case Wd:return n*e/s.components*s.byteLength;case b0:return n*e*2/s.components*s.byteLength;case Xd:return n*e*2/s.components*s.byteLength;case y0:return n*e*3/s.components*s.byteLength;case ri:return n*e*4/s.components*s.byteLength;case jd:return n*e*4/s.components*s.byteLength;case gl:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _l:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:case Th:return Math.max(n,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(n,8)*Math.max(e,8)/2;case Ah:case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yl:case Gh:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case E0:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rb(n){switch(n){case Ki:case g0:return{byteLength:1,components:1};case to:case v0:case Si:return{byteLength:2,components:1};case Vd:case Hd:return{byteLength:2,components:4};case er:case zd:case gi:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Pb(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Db,alphahash_pars_fragment:Lb,alphamap_fragment:Nb,alphamap_pars_fragment:Ib,alphatest_fragment:Ub,alphatest_pars_fragment:Ob,aomap_fragment:Fb,aomap_pars_fragment:Bb,batching_pars_vertex:kb,batching_vertex:zb,begin_vertex:Vb,beginnormal_vertex:Hb,bsdfs:Gb,iridescence_fragment:Wb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:jb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Yb,clipping_planes_vertex:Zb,color_fragment:Kb,color_pars_fragment:Jb,color_pars_vertex:Qb,color_vertex:$b,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:a1,colorspace_fragment:o1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:u1,envmap_pars_fragment:h1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:b1,envmap_vertex:f1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:v1,gradientmap_pars_fragment:_1,lightmap_pars_fragment:x1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:S1,lights_pars_begin:M1,lights_toon_fragment:E1,lights_toon_pars_fragment:T1,lights_phong_fragment:A1,lights_phong_pars_fragment:w1,lights_physical_fragment:C1,lights_physical_pars_fragment:R1,lights_fragment_begin:P1,lights_fragment_maps:D1,lights_fragment_end:L1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:O1,map_fragment:F1,map_pars_fragment:B1,map_particle_fragment:k1,map_particle_pars_fragment:z1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:H1,morphinstance_vertex:G1,morphcolor_vertex:W1,morphnormal_vertex:X1,morphtarget_pars_vertex:j1,morphtarget_vertex:q1,normal_fragment_begin:Y1,normal_fragment_maps:Z1,normal_pars_fragment:K1,normal_pars_vertex:J1,normal_vertex:Q1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:sE,packing:rE,premultiplied_alpha_fragment:aE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:fE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:xE,specularmap_fragment:yE,specularmap_pars_fragment:SE,tonemapping_fragment:ME,tonemapping_pars_fragment:bE,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:wE,uv_vertex:CE,worldpos_vertex:RE,background_vert:PE,background_frag:DE,backgroundCube_vert:LE,backgroundCube_frag:NE,cube_vert:IE,cube_frag:UE,depth_vert:OE,depth_frag:FE,distanceRGBA_vert:BE,distanceRGBA_frag:kE,equirect_vert:zE,equirect_frag:VE,linedashed_vert:HE,linedashed_frag:GE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:jE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:ZE,meshnormal_vert:KE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:$E,meshphysical_vert:eT,meshphysical_frag:tT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:sT,points_frag:rT,shadow_vert:aT,shadow_frag:oT,sprite_vert:lT,sprite_frag:cT},Pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},pi={basic:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:dn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:dn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:dn([Pe.points,Pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:dn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:dn([Pe.common,Pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:dn([Pe.sprite,Pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:dn([Pe.common,Pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:dn([Pe.lights,Pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};pi.physical={uniforms:dn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const il={r:0,b:0,g:0},Ds=new Mi,uT=new yt;function hT(n,e,t,i,s,r,a){const o=new Je(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function y(_){let v=!1;const A=g(_);A===null?f(o,l):A&&A.isColor&&(f(A,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Ec)?(u===void 0&&(u=new et(new Ms(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ra(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ds.copy(v.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(Ds)),u.material.toneMapped=st.getTransfer(A.colorSpace)!==dt,(h!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new et(new aa(2,2),new Wt({name:"BackgroundMaterial",uniforms:ra(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(A.colorSpace)!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(il,N0(n)),i.buffers.color.setClear(il.r,il.g,il.b,v,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:y,addToRenderList:m,dispose:x}}function dT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,P,I,F,N){let O=!1;const W=h(F,I,P);r!==W&&(r=W,c(r.object)),O=p(M,F,I,N),O&&g(M,F,I,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,v(M,P,I,F),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,I){const F=I.wireframe===!0;let N=i[M.id];N===void 0&&(N={},i[M.id]=N);let O=N[P.id];O===void 0&&(O={},N[P.id]=O);let W=O[F];return W===void 0&&(W=d(l()),O[F]=W),W}function d(M){const P=[],I=[],F=[];for(let N=0;N<t;N++)P[N]=0,I[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,P,I,F){const N=r.attributes,O=P.attributes;let W=0;const Z=I.getAttributes();for(const G in Z)if(Z[G].location>=0){const he=N[G];let de=O[G];if(de===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),he===void 0||he.attribute!==de||de&&he.data!==de.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(M,P,I,F){const N={},O=P.attributes;let W=0;const Z=I.getAttributes();for(const G in Z)if(Z[G].location>=0){let he=O[G];he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const de={};de.attribute=he,he&&he.data&&(de.data=he.data),N[G]=de,W++}r.attributes=N,r.attributesNum=W,r.index=F}function y(){const M=r.newAttributes;for(let P=0,I=M.length;P<I;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const I=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;I[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),N[M]!==P&&(n.vertexAttribDivisor(M,P),N[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==M[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function _(M,P,I,F,N,O,W){W===!0?n.vertexAttribIPointer(M,P,I,N,O):n.vertexAttribPointer(M,P,I,F,N,O)}function v(M,P,I,F){y();const N=F.attributes,O=I.getAttributes(),W=P.defaultAttributeValues;for(const Z in O){const G=O[Z];if(G.location>=0){let ee=N[Z];if(ee===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const he=ee.normalized,de=ee.itemSize,fe=e.get(ee);if(fe===void 0)continue;const Ae=fe.buffer,se=fe.type,ge=fe.bytesPerElement,we=se===n.INT||se===n.UNSIGNED_INT||ee.gpuType===zd;if(ee.isInterleavedBufferAttribute){const oe=ee.data,pe=oe.stride,Ie=ee.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)f(G.location+ve,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<G.locationSize;ve++)m(G.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let ve=0;ve<G.locationSize;ve++)_(G.location+ve,de/G.locationSize,se,he,pe*ge,(Ie+de/G.locationSize*ve)*ge,we)}else{if(ee.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)f(G.location+oe,ee.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let oe=0;oe<G.locationSize;oe++)_(G.location+oe,de/G.locationSize,se,he,de*ge,de/G.locationSize*oe*ge,we)}}else if(W!==void 0){const he=W[Z];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}x()}function A(){R();for(const M in i){const P=i[M];for(const I in P){const F=P[I];for(const N in F)u(F[N].object),delete F[N];delete P[I]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const I in P){const F=P[I];for(const N in F)u(F[N].object),delete F[N];delete P[I]}delete i[M.id]}function E(M){for(const P in i){const I=i[P];if(I[M.id]===void 0)continue;const F=I[M.id];for(const N in F)u(F[N].object),delete F[N];delete I[M.id]}}function R(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function fT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==ri&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ki&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==gi&&!R)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function mT(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new us,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,_=x*4;let v=f.clippingState||null;l.value=v,v=u(g,d,_,p);for(let A=0;A!==_;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,v=p;_!==y;++_,v+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function gT(n){let e=new WeakMap;function t(a,o){return o===xh?a.mapping=ta:o===yh&&(a.mapping=na),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xh||o===yh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new OM(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fr=4,lm=[.125,.215,.35,.446,.526,.582],ks=20,Tu=new of,cm=new Je;let Au=null,wu=0,Cu=0,Ru=!1;const Fs=(1+Math.sqrt(5))/2,Cr=1/Fs,um=[new j(-Fs,Cr,0),new j(Fs,Cr,0),new j(-Cr,0,Fs),new j(Cr,0,Fs),new j(0,Fs,-Cr),new j(0,Fs,Cr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],vT=new j;class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=vT}=r;Au=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,wu,Cu),this._renderer.xr.enabled=Ru,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:Si,format:ri,colorSpace:sa,depthBuffer:!1},s=hm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_T(r)),this._blurMaterial=xT(r,e,t)}return s}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,s,r){const l=new Tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(cm),h.toneMapping=vs,h.autoClear=!1;const g=new Yr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),y=new et(new Ms,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(cm),m=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const v=this._cubeSize;sl(s,_*v,x>2?v:0,v,v),h.setRenderTarget(s),m&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ta||e.mapping===na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;sl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=um[(s-r-1)%um.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ks-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):ks;m>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const f=[];let x=0;for(let E=0;E<ks;++E){const R=E/y,b=Math.exp(-R*R/2);f.push(b),E===0?x+=b:E<m&&(x+=2*b)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const v=this._sizeLods[s],A=3*v*(s>_-Fr?s-_+Fr:0),T=4*(this._cubeSize-v);sl(t,A,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Tu)}}function _T(n){const e=[],t=[],i=[];let s=n;const r=n-Fr+1+lm.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Fr?l=lm[a-n+Fr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,f=1,x=new Float32Array(y*g*p),_=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,R=T>2?0:-1,b=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(b,y*g*T),_.set(d,m*g*T);const M=[T,T,T,T,T,T];v.set(M,f*g*T)}const A=new Bn;A.setAttribute("position",new xi(x,y)),A.setAttribute("uv",new xi(_,m)),A.setAttribute("faceIndex",new xi(v,f)),e.push(A),s>Fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hm(n,e,t){const i=new Kn(n,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xT(n,e,t){const i=new Float32Array(ks),s=new j(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function dm(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function fm(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yT(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xh||l===yh,u=l===ta||l===na;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jh(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Jh(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ST(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Os("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function MT(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let _=0,v=x.length;_<v;_+=3){const A=x[_+0],T=x[_+1],E=x[_+2];d.push(A,T,T,E,E,A)}}else if(g!==void 0){const x=g.array;y=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){const A=_+0,T=_+1,E=_+2;d.push(A,T,T,E,E,A)}}else return;const m=new(A0(d)?L0:D0)(d,1);m.version=y;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function bT(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*y[x];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ET(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function TT(n,e,t){const i=new WeakMap,s=new gt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*T*4*h),R=new w0(E,A,T,h);R.type=gi,R.needsUpdate=!0;const b=v*4;for(let P=0;P<h;P++){const I=f[P],F=x[P],N=_[P],O=A*T*4*P;for(let W=0;W<I.count;W++){const Z=W*b;g===!0&&(s.fromBufferAttribute(I,W),E[O+Z+0]=s.x,E[O+Z+1]=s.y,E[O+Z+2]=s.z,E[O+Z+3]=0),y===!0&&(s.fromBufferAttribute(F,W),E[O+Z+4]=s.x,E[O+Z+5]=s.y,E[O+Z+6]=s.z,E[O+Z+7]=0),m===!0&&(s.fromBufferAttribute(N,W),E[O+Z+8]=s.x,E[O+Z+9]=s.y,E[O+Z+10]=s.z,E[O+Z+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Me(A,T)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function AT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Y0=new Xt,pm=new ef(1,1),Z0=new w0,K0=new yM,J0=new U0,mm=[],gm=[],vm=new Float32Array(16),_m=new Float32Array(9),xm=new Float32Array(4);function ha(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=mm[s];if(r===void 0&&(r=new Float32Array(s),mm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cc(n,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function DT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),Vt(t,i)}}function LT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;_m.set(i),n.uniformMatrix3fv(this.addr,!1,_m),Vt(t,i)}}function NT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;vm.set(i),n.uniformMatrix4fv(this.addr,!1,vm),Vt(t,i)}}function IT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function OT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function BT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function zT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function HT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pm.compareFunction=T0,r=pm):r=Y0,t.setTexture2D(e||r,s)}function GT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||K0,s)}function WT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||J0,s)}function XT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Z0,s)}function jT(n){switch(n){case 5126:return wT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return DT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return OT;case 35669:case 35673:return FT;case 5125:return BT;case 36294:return kT;case 36295:return zT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}function qT(n,e){n.uniform1fv(this.addr,e)}function YT(n,e){const t=ha(e,this.size,2);n.uniform2fv(this.addr,t)}function ZT(n,e){const t=ha(e,this.size,3);n.uniform3fv(this.addr,t)}function KT(n,e){const t=ha(e,this.size,4);n.uniform4fv(this.addr,t)}function JT(n,e){const t=ha(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QT(n,e){const t=ha(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $T(n,e){const t=ha(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eA(n,e){n.uniform1iv(this.addr,e)}function tA(n,e){n.uniform2iv(this.addr,e)}function nA(n,e){n.uniform3iv(this.addr,e)}function iA(n,e){n.uniform4iv(this.addr,e)}function sA(n,e){n.uniform1uiv(this.addr,e)}function rA(n,e){n.uniform2uiv(this.addr,e)}function aA(n,e){n.uniform3uiv(this.addr,e)}function oA(n,e){n.uniform4uiv(this.addr,e)}function lA(n,e,t){const i=this.cache,s=e.length,r=Cc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Y0,r[a])}function cA(n,e,t){const i=this.cache,s=e.length,r=Cc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||K0,r[a])}function uA(n,e,t){const i=this.cache,s=e.length,r=Cc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||J0,r[a])}function hA(n,e,t){const i=this.cache,s=e.length,r=Cc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Z0,r[a])}function dA(n){switch(n){case 5126:return qT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return JT;case 35675:return QT;case 35676:return $T;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return sA;case 36294:return rA;case 36295:return aA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return hA}}class fA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jT(t.type)}}class pA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dA(t.type)}}class mA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function ym(n,e){n.seq.push(e),n.map[e.id]=e}function gA(n,e,t){const i=n.name,s=i.length;for(Pu.lastIndex=0;;){const r=Pu.exec(i),a=Pu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ym(t,c===void 0?new fA(o,n,e):new pA(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new mA(o),ym(t,h)),t=h}}}class Sl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);gA(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Sm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vA=37297;let _A=0;function xA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Mm=new Ye;function yA(n){st._getMatrix(Mm,st.workingColorSpace,n);const e=`mat3( ${Mm.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case $l:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xA(n.getShaderSource(e),a)}else return s}function SA(n,e){const t=yA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MA(n,e){let t;switch(e){case c0:t="Linear";break;case u0:t="Reinhard";break;case h0:t="Cineon";break;case Ql:t="ACESFilmic";break;case f0:t="AgX";break;case p0:t="Neutral";break;case d0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rl=new j;function bA(){st.getLuminanceCoefficients(rl);const n=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function TA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ca(n){return n!==""}function Em(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(n){return n.replace(wA,RA)}const CA=new Map;function RA(n,e){let t=Ke[e];if(t===void 0){const i=CA.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(n){return n.replace(PA,DA)}function DA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===s0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function UA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case l0:e="ENVMAP_BLENDING_MULTIPLY";break;case OS:e="ENVMAP_BLENDING_MIX";break;case FS:e="ENVMAP_BLENDING_ADD";break}return e}function OA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FA(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=LA(t),c=NA(t),u=IA(t),h=UA(t),d=OA(t),p=EA(t),g=TA(r),y=s.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),f.length>0&&(f+=`
`)):(m=[wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),f=[wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?Ke.tonemapping_pars_fragment:"",t.toneMapping!==vs?MA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,SA("linearToOutputTexel",t.outputColorSpace),bA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),a=Qh(a),a=Em(a,t),a=Tm(a,t),o=Qh(o),o=Em(o,t),o=Tm(o,t),a=Am(a),o=Am(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+a,v=x+f+o,A=Sm(s,s.VERTEX_SHADER,_),T=Sm(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(P){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(T).trim();let O=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,A,T);else{const Z=bm(s,A,"vertex"),G=bm(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Z+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||N==="")&&(W=!1);W&&(P.diagnostics={runnable:O,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(A),s.deleteShader(T),R=new Sl(s,y),b=AA(s,y)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,vA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}let BA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zA(e),t.set(e,i)),i}}class zA{constructor(e){this.id=BA++,this.code=e,this.usedTimes=0}}function VA(n,e,t,i,s,r,a){const o=new R0,l=new kA,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,I,F){const N=I.fog,O=F.geometry,W=b.isMeshStandardMaterial?I.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),G=Z&&Z.mapping===Ec?Z.image.height:null,ee=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const he=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,de=he!==void 0?he.length:0;let fe=0;O.morphAttributes.position!==void 0&&(fe=1),O.morphAttributes.normal!==void 0&&(fe=2),O.morphAttributes.color!==void 0&&(fe=3);let Ae,se,ge,we;if(ee){const ht=pi[ee];Ae=ht.vertexShader,se=ht.fragmentShader}else Ae=b.vertexShader,se=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);const oe=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,ve=F.isBatchedMesh===!0,U=!!b.map,L=!!b.matcap,B=!!Z,w=!!b.aoMap,K=!!b.lightMap,z=!!b.bumpMap,J=!!b.normalMap,H=!!b.displacementMap,te=!!b.emissiveMap,X=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,k=b.clearcoat>0,Y=b.dispersion>0,re=b.iridescence>0,ne=b.sheen>0,Se=b.transmission>0,V=S&&!!b.anisotropyMap,$=k&&!!b.clearcoatMap,me=k&&!!b.clearcoatNormalMap,ae=k&&!!b.clearcoatRoughnessMap,xe=re&&!!b.iridescenceMap,be=re&&!!b.iridescenceThicknessMap,Ee=ne&&!!b.sheenColorMap,ye=ne&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Re=!!b.specularColorMap,He=!!b.specularIntensityMap,q=Se&&!!b.transmissionMap,Ce=Se&&!!b.thicknessMap,le=!!b.gradientMap,_e=!!b.alphaMap,De=b.alphaTest>0,Ue=!!b.alphaHash,qe=!!b.extensions;let wt=vs;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(wt=n.toneMapping);const $t={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Ae,fragmentShader:se,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ve,batchingColor:ve&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:sa,alphaToCoverage:!!b.alphaToCoverage,map:U,matcap:L,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:K,bumpMap:z,normalMap:J,displacementMap:d&&H,emissiveMap:te,normalMapObjectSpace:J&&b.normalMapType===VS,normalMapTangentSpace:J&&b.normalMapType===qd,metalnessMap:X,roughnessMap:C,anisotropy:S,anisotropyMap:V,clearcoat:k,clearcoatMap:$,clearcoatNormalMap:me,clearcoatRoughnessMap:ae,dispersion:Y,iridescence:re,iridescenceMap:xe,iridescenceThicknessMap:be,sheen:ne,sheenColorMap:Ee,sheenRoughnessMap:ye,specularMap:Oe,specularColorMap:Re,specularIntensityMap:He,transmission:Se,transmissionMap:q,thicknessMap:Ce,gradientMap:le,opaque:b.transparent===!1&&b.blending===Xr&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:De,alphaHash:Ue,combine:b.combine,mapUv:U&&y(b.map.channel),aoMapUv:w&&y(b.aoMap.channel),lightMapUv:K&&y(b.lightMap.channel),bumpMapUv:z&&y(b.bumpMap.channel),normalMapUv:J&&y(b.normalMap.channel),displacementMapUv:H&&y(b.displacementMap.channel),emissiveMapUv:te&&y(b.emissiveMap.channel),metalnessMapUv:X&&y(b.metalnessMap.channel),roughnessMapUv:C&&y(b.roughnessMap.channel),anisotropyMapUv:V&&y(b.anisotropyMap.channel),clearcoatMapUv:$&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(b.sheenRoughnessMap.channel),specularMapUv:Oe&&y(b.specularMap.channel),specularColorMapUv:Re&&y(b.specularColorMap.channel),specularIntensityMapUv:He&&y(b.specularIntensityMap.channel),transmissionMapUv:q&&y(b.transmissionMap.channel),thicknessMapUv:Ce&&y(b.thicknessMap.channel),alphaMapUv:_e&&y(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(J||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(U||_e),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:U&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:te&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mi,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(M,b),_(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const M=g[b.type];let P;if(M){const I=pi[M];P=vi.clone(I.uniforms)}else P=b.uniforms;return P}function A(b,M){let P;for(let I=0,F=u.length;I<F;I++){const N=u[I];if(N.cacheKey===M){P=N,++P.usedTimes;break}}return P===void 0&&(P=new FA(n,M,b,r),u.push(P)),P}function T(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function E(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:R}}function HA(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function GA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function o(h,d,p,g,y,m){const f=a(h,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,y,m){const f=a(h,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||GA),i.length>1&&i.sort(d||Cm),s.length>1&&s.sort(d||Cm)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function WA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Rm,n.set(i,[a])):s>=r.length?(a=new Rm,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Je};break;case"SpotLight":t={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function jA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qA=0;function YA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZA(n){const e=new XA,t=jA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const s=new j,r=new yt,a=new yt;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,x=0,_=0,v=0,A=0,T=0,E=0;c.sort(YA);for(let b=0,M=c.length;b<M;b++){const P=c[b],I=P.color,F=P.intensity,N=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*F,h+=I.g*F,d+=I.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],F);E++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(I).multiplyScalar(F),W.distance=N,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[y]=W;const Z=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=O,v++}y++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(I).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,i.version=qA++)}function l(c,u){let h=0,d=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Pm(n){const e=new ZA(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function KA(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Pm(n),e.set(s,[o])):r>=a.length?(o=new Pm(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $A(n,e,t){let i=new $d;const s=new Me,r=new Me,a=new gt,o=new Sb({depthPacking:zS}),l=new Mb,c={},u=t.maxTextureSize,h={[Ss]:vn,[vn]:Ss,[mi]:mi},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:JA,fragmentShader:QA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let f=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(mn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=f!==Ni&&this.type===Ni,N=f===Ni&&this.type!==Ni;for(let O=0,W=T.length;O<W;O++){const Z=T[O],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||F===!0||N===!0){const de=this.type!==Ni?{minFilter:Jt,magFilter:Jt}:{};G.map!==null&&G.map.dispose(),G.map=new Kn(s.x,s.y,de),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const he=G.getViewportCount();for(let de=0;de<he;de++){const fe=G.getViewport(de);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),I.viewport(a),G.updateMatrices(Z,de),i=G.getFrustum(),v(E,R,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Ni&&x(G,R),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,P)};function x(T,E){const R=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,R,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,R,p,y,null)}function _(T,E,R,b){let M=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=M.uuid,F=E.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let O=N[F];O===void 0&&(O=M.clone(),N[F]=O,E.addEventListener("dispose",A)),M=O}if(M.visible=E.visible,M.wireframe=E.wireframe,b===Ni?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=R}return M}function v(T,E,R,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ni)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const F=e.update(T),N=T.material;if(Array.isArray(N)){const O=F.groups;for(let W=0,Z=O.length;W<Z;W++){const G=O[W],ee=N[G.materialIndex];if(ee&&ee.visible){const he=_(T,ee,b,M);T.onBeforeShadow(n,T,E,R,F,he,G),n.renderBufferDirect(R,null,F,he,T,G),T.onAfterShadow(n,T,E,R,F,he,G)}}}else if(N.visible){const O=_(T,N,b,M);T.onBeforeShadow(n,T,E,R,F,O,null),n.renderBufferDirect(R,null,F,O,T,null),T.onAfterShadow(n,T,E,R,F,O,null)}}const I=T.children;for(let F=0,N=I.length;F<N;F++)v(I[F],E,R,b,M)}function A(T){T.target.removeEventListener("dispose",A);for(const R in c){const b=c[R],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const ew={[dh]:fh,[ph]:vh,[mh]:_h,[ea]:gh,[fh]:dh,[vh]:ph,[_h]:mh,[gh]:ea};function tw(n,e){function t(){let q=!1;const Ce=new gt;let le=null;const _e=new gt(0,0,0,0);return{setMask:function(De){le!==De&&!q&&(n.colorMask(De,De,De,De),le=De)},setLocked:function(De){q=De},setClear:function(De,Ue,qe,wt,$t){$t===!0&&(De*=wt,Ue*=wt,qe*=wt),Ce.set(De,Ue,qe,wt),_e.equals(Ce)===!1&&(n.clearColor(De,Ue,qe,wt),_e.copy(Ce))},reset:function(){q=!1,le=null,_e.set(-1,0,0,0)}}}function i(){let q=!1,Ce=!1,le=null,_e=null,De=null;return{setReversed:function(Ue){if(Ce!==Ue){const qe=e.get("EXT_clip_control");Ce?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const wt=De;De=null,this.setClear(wt)}Ce=Ue},getReversed:function(){return Ce},setTest:function(Ue){Ue?oe(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(Ue){le!==Ue&&!q&&(n.depthMask(Ue),le=Ue)},setFunc:function(Ue){if(Ce&&(Ue=ew[Ue]),_e!==Ue){switch(Ue){case dh:n.depthFunc(n.NEVER);break;case fh:n.depthFunc(n.ALWAYS);break;case ph:n.depthFunc(n.LESS);break;case ea:n.depthFunc(n.LEQUAL);break;case mh:n.depthFunc(n.EQUAL);break;case gh:n.depthFunc(n.GEQUAL);break;case vh:n.depthFunc(n.GREATER);break;case _h:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Ue}},setLocked:function(Ue){q=Ue},setClear:function(Ue){De!==Ue&&(Ce&&(Ue=1-Ue),n.clearDepth(Ue),De=Ue)},reset:function(){q=!1,le=null,_e=null,De=null,Ce=!1}}}function s(){let q=!1,Ce=null,le=null,_e=null,De=null,Ue=null,qe=null,wt=null,$t=null;return{setTest:function(ht){q||(ht?oe(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ht){Ce!==ht&&!q&&(n.stencilMask(ht),Ce=ht)},setFunc:function(ht,Jn,Ei){(le!==ht||_e!==Jn||De!==Ei)&&(n.stencilFunc(ht,Jn,Ei),le=ht,_e=Jn,De=Ei)},setOp:function(ht,Jn,Ei){(Ue!==ht||qe!==Jn||wt!==Ei)&&(n.stencilOp(ht,Jn,Ei),Ue=ht,qe=Jn,wt=Ei)},setLocked:function(ht){q=ht},setClear:function(ht){$t!==ht&&(n.clearStencil(ht),$t=ht)},reset:function(){q=!1,Ce=null,le=null,_e=null,De=null,Ue=null,qe=null,wt=null,$t=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,x=null,_=null,v=null,A=null,T=null,E=new Je(0,0,0),R=0,b=!1,M=null,P=null,I=null,F=null,N=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Z>=2);let ee=null,he={};const de=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Ae=new gt().fromArray(de),se=new gt().fromArray(fe);function ge(q,Ce,le,_e){const De=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(q,Ue),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<le;qe++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Ue}const we={};we[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(ea),z(!1),J(Ap),oe(n.CULL_FACE),w(mn);function oe(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function pe(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Ie(q,Ce){return h[q]!==Ce?(n.bindFramebuffer(q,Ce),h[q]=Ce,q===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),q===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ve(q,Ce){let le=p,_e=!1;if(q){le=d.get(Ce),le===void 0&&(le=[],d.set(Ce,le));const De=q.textures;if(le.length!==De.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,qe=De.length;Ue<qe;Ue++)le[Ue]=n.COLOR_ATTACHMENT0+Ue;le.length=De.length,_e=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,_e=!0);_e&&n.drawBuffers(le)}function U(q){return g!==q?(n.useProgram(q),g=q,!0):!1}const L={[ki]:n.FUNC_ADD,[MS]:n.FUNC_SUBTRACT,[bS]:n.FUNC_REVERSE_SUBTRACT};L[ES]=n.MIN,L[TS]=n.MAX;const B={[ch]:n.ZERO,[AS]:n.ONE,[wS]:n.SRC_COLOR,[uh]:n.SRC_ALPHA,[DS]:n.SRC_ALPHA_SATURATE,[o0]:n.DST_COLOR,[a0]:n.DST_ALPHA,[CS]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[PS]:n.ONE_MINUS_DST_COLOR,[RS]:n.ONE_MINUS_DST_ALPHA,[LS]:n.CONSTANT_COLOR,[NS]:n.ONE_MINUS_CONSTANT_COLOR,[IS]:n.CONSTANT_ALPHA,[US]:n.ONE_MINUS_CONSTANT_ALPHA};function w(q,Ce,le,_e,De,Ue,qe,wt,$t,ht){if(q===mn){y===!0&&(pe(n.BLEND),y=!1);return}if(y===!1&&(oe(n.BLEND),y=!0),q!==r0){if(q!==m||ht!==b){if((f!==ki||v!==ki)&&(n.blendEquation(n.FUNC_ADD),f=ki,v=ki),ht)switch(q){case Xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wp:n.blendFunc(n.ONE,n.ONE);break;case Cp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,_=null,A=null,T=null,E.set(0,0,0),R=0,m=q,b=ht}return}De=De||Ce,Ue=Ue||le,qe=qe||_e,(Ce!==f||De!==v)&&(n.blendEquationSeparate(L[Ce],L[De]),f=Ce,v=De),(le!==x||_e!==_||Ue!==A||qe!==T)&&(n.blendFuncSeparate(B[le],B[_e],B[Ue],B[qe]),x=le,_=_e,A=Ue,T=qe),(wt.equals(E)===!1||$t!==R)&&(n.blendColor(wt.r,wt.g,wt.b,$t),E.copy(wt),R=$t),m=q,b=!1}function K(q,Ce){q.side===mi?pe(n.CULL_FACE):oe(n.CULL_FACE);let le=q.side===vn;Ce&&(le=!le),z(le),q.blending===Xr&&q.transparent===!1?w(mn):w(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const _e=q.stencilWrite;o.setTest(_e),_e&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),te(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(q){M!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),M=q)}function J(q){q!==yS?(oe(n.CULL_FACE),q!==P&&(q===Ap?n.cullFace(n.BACK):q===SS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),P=q}function H(q){q!==I&&(W&&n.lineWidth(q),I=q)}function te(q,Ce,le){q?(oe(n.POLYGON_OFFSET_FILL),(F!==Ce||N!==le)&&(n.polygonOffset(Ce,le),F=Ce,N=le)):pe(n.POLYGON_OFFSET_FILL)}function X(q){q?oe(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function C(q){q===void 0&&(q=n.TEXTURE0+O-1),ee!==q&&(n.activeTexture(q),ee=q)}function S(q,Ce,le){le===void 0&&(ee===null?le=n.TEXTURE0+O-1:le=ee);let _e=he[le];_e===void 0&&(_e={type:void 0,texture:void 0},he[le]=_e),(_e.type!==q||_e.texture!==Ce)&&(ee!==le&&(n.activeTexture(le),ee=le),n.bindTexture(q,Ce||we[q]),_e.type=q,_e.texture=Ce)}function k(){const q=he[ee];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Y(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ne(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(q){Ae.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Ae.copy(q))}function ye(q){se.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),se.copy(q))}function Oe(q,Ce){let le=c.get(Ce);le===void 0&&(le=new WeakMap,c.set(Ce,le));let _e=le.get(q);_e===void 0&&(_e=n.getUniformBlockIndex(Ce,q.name),le.set(q,_e))}function Re(q,Ce){const _e=c.get(Ce).get(q);l.get(Ce)!==_e&&(n.uniformBlockBinding(Ce,_e,q.__bindingPointIndex),l.set(Ce,_e))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,he={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,x=null,_=null,v=null,A=null,T=null,E=new Je(0,0,0),R=0,b=!1,M=null,P=null,I=null,F=null,N=null,Ae.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:pe,bindFramebuffer:Ie,drawBuffers:ve,useProgram:U,setBlending:w,setMaterial:K,setFlipSided:z,setCullFace:J,setLineWidth:H,setPolygonOffset:te,setScissorTest:X,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:xe,texImage3D:be,updateUBOMapping:Oe,uniformBlockBinding:Re,texStorage2D:me,texStorage3D:ae,texSubImage2D:ne,texSubImage3D:Se,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:Ee,viewport:ye,reset:He}}function nw(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):tc("canvas")}function y(C,S,k){let Y=1;const re=X(C);if((re.width>k||re.height>k)&&(Y=k/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(Y*re.width),Se=Math.floor(Y*re.height);h===void 0&&(h=g(ne,Se));const V=S?g(ne,Se):h;return V.width=ne,V.height=Se,V.getContext("2d").drawImage(C,0,0,ne,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+Se+")."),V}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,S,k,Y,re=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===n.RED&&(k===n.FLOAT&&(ne=n.R32F),k===n.HALF_FLOAT&&(ne=n.R16F),k===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ne=n.R8UI),k===n.UNSIGNED_SHORT&&(ne=n.R16UI),k===n.UNSIGNED_INT&&(ne=n.R32UI),k===n.BYTE&&(ne=n.R8I),k===n.SHORT&&(ne=n.R16I),k===n.INT&&(ne=n.R32I)),S===n.RG&&(k===n.FLOAT&&(ne=n.RG32F),k===n.HALF_FLOAT&&(ne=n.RG16F),k===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(ne=n.RG8UI),k===n.UNSIGNED_SHORT&&(ne=n.RG16UI),k===n.UNSIGNED_INT&&(ne=n.RG32UI),k===n.BYTE&&(ne=n.RG8I),k===n.SHORT&&(ne=n.RG16I),k===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),k===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),k===n.UNSIGNED_INT&&(ne=n.RGB32UI),k===n.BYTE&&(ne=n.RGB8I),k===n.SHORT&&(ne=n.RGB16I),k===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),k===n.UNSIGNED_INT&&(ne=n.RGBA32UI),k===n.BYTE&&(ne=n.RGBA8I),k===n.SHORT&&(ne=n.RGBA16I),k===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),S===n.RGBA){const Se=re?$l:st.getTransfer(Y);k===n.FLOAT&&(ne=n.RGBA32F),k===n.HALF_FLOAT&&(ne=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ne=Se===dt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(C,S){let k;return C?S===null||S===er||S===tr?k=n.DEPTH24_STENCIL8:S===gi?k=n.DEPTH32F_STENCIL8:S===to&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===er||S===tr?k=n.DEPTH_COMPONENT24:S===gi?k=n.DEPTH_COMPONENT32F:S===to&&(k=n.DEPTH_COMPONENT16),k}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==si?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&u.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),M(S)}function R(C){const S=i.get(C);if(S.__webglInit===void 0)return;const k=C.source,Y=d.get(k);if(Y){const re=Y[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(C),Object.keys(Y).length===0&&d.delete(k)}i.remove(C)}function b(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const k=C.source,Y=d.get(k);delete Y[S.__cacheKey],a.memory.textures--}function M(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let re=0;re<S.__webglFramebuffer[Y].length;re++)n.deleteFramebuffer(S.__webglFramebuffer[Y][re]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let Y=0,re=k.length;Y<re;Y++){const ne=i.get(k[Y]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(k[Y])}i.remove(C)}let P=0;function I(){P=0}function F(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){const k=i.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(k,C,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function W(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){se(k,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function Z(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){se(k,C,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function G(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ge(k,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const ee={[ia]:n.REPEAT,[Hs]:n.CLAMP_TO_EDGE,[Sh]:n.MIRRORED_REPEAT},he={[Jt]:n.NEAREST,[BS]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[si]:n.LINEAR,[Kc]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},de={[HS]:n.NEVER,[YS]:n.ALWAYS,[GS]:n.LESS,[T0]:n.LEQUAL,[WS]:n.EQUAL,[qS]:n.GEQUAL,[XS]:n.GREATER,[jS]:n.NOTEQUAL};function fe(C,S){if(S.type===gi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===si||S.magFilter===Kc||S.magFilter===Uo||S.magFilter===Gs||S.minFilter===si||S.minFilter===Kc||S.minFilter===Uo||S.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ee[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ee[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ee[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,he[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==Uo&&S.minFilter!==Gs||S.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ae(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const Y=S.source;let re=d.get(Y);re===void 0&&(re={},d.set(Y,re));const ne=N(S);if(ne!==C.__cacheKey){re[ne]===void 0&&(re[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),re[ne].usedTimes++;const Se=re[C.__cacheKey];Se!==void 0&&(re[C.__cacheKey].usedTimes--,Se.usedTimes===0&&b(S)),C.__cacheKey=ne,C.__webglTexture=re[ne].texture}return k}function se(C,S,k){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const re=Ae(C,S),ne=S.source;t.bindTexture(Y,C.__webglTexture,n.TEXTURE0+k);const Se=i.get(ne);if(ne.version!==Se.__version||re===!0){t.activeTexture(n.TEXTURE0+k);const V=st.getPrimaries(st.workingColorSpace),$=S.colorSpace===hs?null:st.getPrimaries(S.colorSpace),me=S.colorSpace===hs||V===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let ae=y(S.image,!1,s.maxTextureSize);ae=te(S,ae);const xe=r.convert(S.format,S.colorSpace),be=r.convert(S.type);let Ee=_(S.internalFormat,xe,be,S.colorSpace,S.isVideoTexture);fe(Y,S);let ye;const Oe=S.mipmaps,Re=S.isVideoTexture!==!0,He=Se.__version===void 0||re===!0,q=ne.dataReady,Ce=A(S,ae);if(S.isDepthTexture)Ee=v(S.format===nr,S.type),He&&(Re?t.texStorage2D(n.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ae.width,ae.height,0,xe,be,null));else if(S.isDataTexture)if(Oe.length>0){Re&&He&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Oe[0].width,Oe[0].height);for(let le=0,_e=Oe.length;le<_e;le++)ye=Oe[le],Re?q&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ye.width,ye.height,xe,be,ye.data):t.texImage2D(n.TEXTURE_2D,le,Ee,ye.width,ye.height,0,xe,be,ye.data);S.generateMipmaps=!1}else Re?(He&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,ae.width,ae.height),q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,xe,be,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,ae.width,ae.height,0,xe,be,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,Oe[0].width,Oe[0].height,ae.depth);for(let le=0,_e=Oe.length;le<_e;le++)if(ye=Oe[le],S.format!==ri)if(xe!==null)if(Re){if(q)if(S.layerUpdates.size>0){const De=om(ye.width,ye.height,S.format,S.type);for(const Ue of S.layerUpdates){const qe=ye.data.subarray(Ue*De/ye.data.BYTES_PER_ELEMENT,(Ue+1)*De/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Ue,ye.width,ye.height,1,xe,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,ae.depth,xe,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ee,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,ae.depth,xe,be,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ee,ye.width,ye.height,ae.depth,0,xe,be,ye.data)}else{Re&&He&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Oe[0].width,Oe[0].height);for(let le=0,_e=Oe.length;le<_e;le++)ye=Oe[le],S.format!==ri?xe!==null?Re?q&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?q&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ye.width,ye.height,xe,be,ye.data):t.texImage2D(n.TEXTURE_2D,le,Ee,ye.width,ye.height,0,xe,be,ye.data)}else if(S.isDataArrayTexture)if(Re){if(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,ae.width,ae.height,ae.depth),q)if(S.layerUpdates.size>0){const le=om(ae.width,ae.height,S.format,S.type);for(const _e of S.layerUpdates){const De=ae.data.subarray(_e*le/ae.data.BYTES_PER_ELEMENT,(_e+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,ae.width,ae.height,1,xe,be,De)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,be,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,xe,be,ae.data);else if(S.isData3DTexture)Re?(He&&t.texStorage3D(n.TEXTURE_3D,Ce,Ee,ae.width,ae.height,ae.depth),q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,be,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,xe,be,ae.data);else if(S.isFramebufferTexture){if(He)if(Re)t.texStorage2D(n.TEXTURE_2D,Ce,Ee,ae.width,ae.height);else{let le=ae.width,_e=ae.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,Ee,le,_e,0,xe,be,null),le>>=1,_e>>=1}}else if(Oe.length>0){if(Re&&He){const le=X(Oe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,le.width,le.height)}for(let le=0,_e=Oe.length;le<_e;le++)ye=Oe[le],Re?q&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,xe,be,ye):t.texImage2D(n.TEXTURE_2D,le,Ee,xe,be,ye);S.generateMipmaps=!1}else if(Re){if(He){const le=X(ae);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,le.width,le.height)}q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,be,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ee,xe,be,ae);m(S)&&f(Y),Se.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ge(C,S,k){if(S.image.length!==6)return;const Y=Ae(C,S),re=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const ne=i.get(re);if(re.version!==ne.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);const Se=st.getPrimaries(st.workingColorSpace),V=S.colorSpace===hs?null:st.getPrimaries(S.colorSpace),$=S.colorSpace===hs||Se===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let _e=0;_e<6;_e++)!me&&!ae?xe[_e]=y(S.image[_e],!0,s.maxCubemapSize):xe[_e]=ae?S.image[_e].image:S.image[_e],xe[_e]=te(S,xe[_e]);const be=xe[0],Ee=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),Oe=_(S.internalFormat,Ee,ye,S.colorSpace),Re=S.isVideoTexture!==!0,He=ne.__version===void 0||Y===!0,q=re.dataReady;let Ce=A(S,be);fe(n.TEXTURE_CUBE_MAP,S);let le;if(me){Re&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Oe,be.width,be.height);for(let _e=0;_e<6;_e++){le=xe[_e].mipmaps;for(let De=0;De<le.length;De++){const Ue=le[De];S.format!==ri?Ee!==null?Re?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Ue.width,Ue.height,Ee,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Oe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Ue.width,Ue.height,Ee,ye,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Oe,Ue.width,Ue.height,0,Ee,ye,Ue.data)}}}else{if(le=S.mipmaps,Re&&He){le.length>0&&Ce++;const _e=X(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Oe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ae){Re?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,xe[_e].width,xe[_e].height,Ee,ye,xe[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Oe,xe[_e].width,xe[_e].height,0,Ee,ye,xe[_e].data);for(let De=0;De<le.length;De++){const qe=le[De].image[_e].image;Re?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,qe.width,qe.height,Ee,ye,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Oe,qe.width,qe.height,0,Ee,ye,qe.data)}}else{Re?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee,ye,xe[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Oe,Ee,ye,xe[_e]);for(let De=0;De<le.length;De++){const Ue=le[De];Re?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,Ee,ye,Ue.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Oe,Ee,ye,Ue.image[_e])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),ne.__version=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function we(C,S,k,Y,re,ne){const Se=r.convert(k.format,k.colorSpace),V=r.convert(k.type),$=_(k.internalFormat,Se,V,k.colorSpace),me=i.get(S),ae=i.get(k);if(ae.__renderTarget=S,!me.__hasExternalTextures){const xe=Math.max(1,S.width>>ne),be=Math.max(1,S.height>>ne);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,$,xe,be,S.depth,0,Se,V,null):t.texImage2D(re,ne,$,xe,be,0,Se,V,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),J(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,re,ae.__webglTexture,0,z(S)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,re,ae.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(C,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,ne=v(S.stencilBuffer,re),Se=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=z(S);J(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,ne,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,C)}else{const Y=S.textures;for(let re=0;re<Y.length;re++){const ne=Y[re],Se=r.convert(ne.format,ne.colorSpace),V=r.convert(ne.type),$=_(ne.internalFormat,Se,V,ne.colorSpace),me=z(S);k&&J(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,$,S.width,S.height):J(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const re=Y.__webglTexture,ne=z(S);if(S.depthTexture.format===jr)J(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(S.depthTexture.format===nr)J(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const S=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=n.createRenderbuffer(),oe(S.__webglDepthbuffer[Y],C,!1);else{const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),oe(S.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,S,k){const Y=i.get(C);S!==void 0&&we(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ie(C)}function U(C){const S=C.texture,k=i.get(C),Y=i.get(S);C.addEventListener("dispose",E);const re=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Se=re.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,a.memory.textures++),ne){k.__webglFramebuffer=[];for(let V=0;V<6;V++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[V]=[];for(let $=0;$<S.mipmaps.length;$++)k.__webglFramebuffer[V][$]=n.createFramebuffer()}else k.__webglFramebuffer[V]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let V=0;V<S.mipmaps.length;V++)k.__webglFramebuffer[V]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Se)for(let V=0,$=re.length;V<$;V++){const me=i.get(re[V]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&J(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let V=0;V<re.length;V++){const $=re[V];k.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[V]);const me=r.convert($.format,$.colorSpace),ae=r.convert($.type),xe=_($.internalFormat,me,ae,$.colorSpace,C.isXRRenderTarget===!0),be=z(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,k.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(n.TEXTURE_CUBE_MAP,S);for(let V=0;V<6;V++)if(S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)we(k.__webglFramebuffer[V][$],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,$);else we(k.__webglFramebuffer[V],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let V=0,$=re.length;V<$;V++){const me=re[V],ae=i.get(me);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),fe(n.TEXTURE_2D,me),we(k.__webglFramebuffer,C,me,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),m(me)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let V=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(V,Y.__webglTexture),fe(V,S),S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)we(k.__webglFramebuffer[$],C,S,n.COLOR_ATTACHMENT0,V,$);else we(k.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,V,0);m(S)&&f(V),t.unbindTexture()}C.depthBuffer&&Ie(C)}function L(C){const S=C.textures;for(let k=0,Y=S.length;k<Y;k++){const re=S[k];if(m(re)){const ne=x(C),Se=i.get(re).__webglTexture;t.bindTexture(ne,Se),f(ne),t.unbindTexture()}}}const B=[],w=[];function K(C){if(C.samples>0){if(J(C)===!1){const S=C.textures,k=C.width,Y=C.height;let re=n.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(C),V=S.length>1;if(V)for(let $=0;$<S.length;$++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let $=0;$<S.length;$++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$]);const me=i.get(S[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,re,n.NEAREST),l===!0&&(B.length=0,w.length=0,B.push(n.COLOR_ATTACHMENT0+$),C.depthBuffer&&C.resolveDepthBuffer===!1&&(B.push(ne),w.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let $=0;$<S.length;$++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$]);const me=i.get(S[$]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function z(C){return Math.min(s.maxSamples,C.samples)}function J(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function te(C,S){const k=C.colorSpace,Y=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==sa&&k!==hs&&(st.getTransfer(k)===dt?(Y!==ri||re!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function X(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=ve,this.setupRenderTarget=U,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=we,this.useMultisampledRTT=J}function iw(n,e){function t(i,s=hs){let r;const a=st.getTransfer(s);if(i===Ki)return n.UNSIGNED_BYTE;if(i===Vd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===g0)return n.BYTE;if(i===v0)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===zd)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===x0)return n.ALPHA;if(i===y0)return n.RGB;if(i===ri)return n.RGBA;if(i===S0)return n.LUMINANCE;if(i===M0)return n.LUMINANCE_ALPHA;if(i===jr)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===Gd)return n.RED;if(i===Wd)return n.RED_INTEGER;if(i===b0)return n.RG;if(i===Xd)return n.RG_INTEGER;if(i===jd)return n.RGBA_INTEGER;if(i===gl||i===vl||i===_l||i===xl)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_l)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===bh||i===Eh||i===Th)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===wh||i===Ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ah||i===wh)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ch)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Oh||i===Fh||i===Bh||i===kh||i===zh||i===Vh||i===Hh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ph)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ih)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hh)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===Gh||i===Wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yl)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===E0||i===Xh||i===jh||i===qh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wt({vertexShader:sw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ow extends lr{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const y=new aw,m=t.getContextAttributes();let f=null,x=null;const _=[],v=[],A=new Me;let T=null;const E=new Tn;E.viewport=new gt;const R=new Tn;R.viewport=new gt;const b=[E,R],M=new Ab;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=_[se];return ge===void 0&&(ge=new gu,_[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=_[se];return ge===void 0&&(ge=new gu,_[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=_[se];return ge===void 0&&(ge=new gu,_[se]=ge),ge.getHandSpace()};function F(se){const ge=v.indexOf(se.inputSource);if(ge===-1)return;const we=_[ge];we!==void 0&&(we.update(se.inputSource,se.frame,c||a),we.dispatchEvent({type:se.type,data:se.inputSource}))}function N(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",O);for(let se=0;se<_.length;se++){const ge=v[se];ge!==null&&(v[se]=null,_[se].disconnect(ge))}P=null,I=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,x=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",N),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,oe=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=m.stencil?nr:jr,oe=m.stencil?tr:er);const Ie={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Kn(d.textureWidth,d.textureHeight,{format:ri,type:Ki,depthTexture:new ef(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Kn(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function O(se){for(let ge=0;ge<se.removed.length;ge++){const we=se.removed[ge],oe=v.indexOf(we);oe>=0&&(v[oe]=null,_[oe].disconnect(we))}for(let ge=0;ge<se.added.length;ge++){const we=se.added[ge];let oe=v.indexOf(we);if(oe===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=v.length){v.push(we),oe=Ie;break}else if(v[Ie]===null){v[Ie]=we,oe=Ie;break}if(oe===-1)break}const pe=_[oe];pe&&pe.connect(we)}}const W=new j,Z=new j;function G(se,ge,we){W.setFromMatrixPosition(ge.matrixWorld),Z.setFromMatrixPosition(we.matrixWorld);const oe=W.distanceTo(Z),pe=ge.projectionMatrix.elements,Ie=we.projectionMatrix.elements,ve=pe[14]/(pe[10]-1),U=pe[14]/(pe[10]+1),L=(pe[9]+1)/pe[5],B=(pe[9]-1)/pe[5],w=(pe[8]-1)/pe[0],K=(Ie[8]+1)/Ie[0],z=ve*w,J=ve*K,H=oe/(-w+K),te=H*-w;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(te),se.translateZ(H),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),pe[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const X=ve+H,C=U+H,S=z-te,k=J+(oe-te),Y=L*U/C*X,re=B*U/C*X;se.projectionMatrix.makePerspective(S,k,Y,re,X,C),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ee(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let ge=se.near,we=se.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(we=y.depthFar)),M.near=R.near=E.near=ge,M.far=R.far=E.far=we,(P!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,I=M.far),E.layers.mask=se.layers.mask|2,R.layers.mask=se.layers.mask|4,M.layers.mask=E.layers.mask|R.layers.mask;const oe=se.parent,pe=M.cameras;ee(M,oe);for(let Ie=0;Ie<pe.length;Ie++)ee(pe[Ie],oe);pe.length===2?G(M,E,R):M.projectionMatrix.copy(E.projectionMatrix),he(se,M,oe)};function he(se,ge,we){we===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=no*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let de=null;function fe(se,ge){if(u=ge.getViewerPose(c||a),g=ge,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let oe=!1;we.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let ve=0;ve<we.length;ve++){const U=we[ve];let L=null;if(p!==null)L=p.getViewport(U);else{const w=h.getViewSubImage(d,U);L=w.viewport,ve===0&&(e.setRenderTargetTextures(x,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(x))}let B=b[ve];B===void 0&&(B=new Tn,B.layers.enable(ve),B.viewport=new gt,b[ve]=B),B.matrix.fromArray(U.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(U.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(L.x,L.y,L.width,L.height),ve===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(B)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const ve=h.getDepthInformation(we[0]);ve&&ve.isValid&&ve.texture&&y.init(e,ve,s.renderState)}}for(let we=0;we<_.length;we++){const oe=v[we],pe=_[we];oe!==null&&pe!==void 0&&pe.update(oe,ge,c||a)}de&&de(se,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Ae=new q0;Ae.setAnimationLoop(fe),this.setAnimationLoop=function(se){de=se},this.dispose=function(){}}}const Ls=new Mi,lw=new yt;function cw(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,N0(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,Ls.copy(v),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),m.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(Ls)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uw(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const v=_.program;i.uniformBlockBinding(x,v)}function c(x,_){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(x,A);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function u(x){const _=h();x.__bindingPointIndex=_;const v=n.createBuffer(),A=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],v=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,E=v.length;T<E;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,M=R.length;b<M;b++){const P=R[b];if(p(P,T,b,A)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let O=0;O<F.length;O++){const W=F[O],Z=y(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+N,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,v,A){const T=x.value,E=_+"_"+v;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const R=A[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(x){const _=x.uniforms;let v=0;const A=16;for(let E=0,R=_.length;E<R;E++){const b=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,P=b.length;M<P;M++){const I=b[M],F=Array.isArray(I.value)?I.value:[I.value];for(let N=0,O=F.length;N<O;N++){const W=F[N],Z=y(W),G=v%A,ee=G%Z.boundary,he=G+ee;v+=ee,he!==0&&A-he<Z.storage&&(v+=A-he),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=Z.storage}}}const T=v%A;return T>0&&(v+=A-T),x.__size=v,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Dm{constructor(e={}){const{canvas:t=hM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=vs,this.toneMappingExposure=1;const v=this;let A=!1,T=0,E=0,R=null,b=-1,M=null;const P=new gt,I=new gt;let F=null;const N=new Je(0);let O=0,W=t.width,Z=t.height,G=1,ee=null,he=null;const de=new gt(0,0,W,Z),fe=new gt(0,0,W,Z);let Ae=!1;const se=new $d;let ge=!1,we=!1;this.transmissionResolutionScale=1;const oe=new yt,pe=new yt,Ie=new j,ve=new gt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function B(){return R===null?G:1}let w=i;function K(D,Q){return t.getContext(D,Q)}try{const D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),w===null){const Q="webgl2";if(w=K(Q,D),w===null)throw K(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let z,J,H,te,X,C,S,k,Y,re,ne,Se,V,$,me,ae,xe,be,Ee,ye,Oe,Re,He,q;function Ce(){z=new ST(w),z.init(),Re=new iw(w,z),J=new pT(w,z,e,Re),H=new tw(w,z),J.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),te=new ET(w),X=new HA,C=new nw(w,z,H,X,J,Re,te),S=new gT(v),k=new yT(v),Y=new Pb(w),He=new dT(w,Y),re=new MT(w,Y,te,He),ne=new AT(w,re,Y,te),Ee=new TT(w,J,C),ae=new mT(X),Se=new VA(v,S,k,z,J,He,ae),V=new cw(v,X),$=new WA,me=new KA(z),be=new hT(v,S,k,H,ne,p,l),xe=new $A(v,ne,J),q=new uw(w,te,J,H),ye=new fT(w,z,te),Oe=new bT(w,z,te),te.programs=Se.programs,v.capabilities=J,v.extensions=z,v.properties=X,v.renderLists=$,v.shadowMap=xe,v.state=H,v.info=te}Ce();const le=new ow(v,w);this.xr=le,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const D=z.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=z.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(D){D!==void 0&&(G=D,this.setSize(W,Z,!1))},this.getSize=function(D){return D.set(W,Z)},this.setSize=function(D,Q,ce=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=D,Z=Q,t.width=Math.floor(D*G),t.height=Math.floor(Q*G),ce===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(W*G,Z*G).floor()},this.setDrawingBufferSize=function(D,Q,ce){W=D,Z=Q,G=ce,t.width=Math.floor(D*ce),t.height=Math.floor(Q*ce),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(de)},this.setViewport=function(D,Q,ce,ue){D.isVector4?de.set(D.x,D.y,D.z,D.w):de.set(D,Q,ce,ue),H.viewport(P.copy(de).multiplyScalar(G).round())},this.getScissor=function(D){return D.copy(fe)},this.setScissor=function(D,Q,ce,ue){D.isVector4?fe.set(D.x,D.y,D.z,D.w):fe.set(D,Q,ce,ue),H.scissor(I.copy(fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(D){H.setScissorTest(Ae=D)},this.setOpaqueSort=function(D){ee=D},this.setTransparentSort=function(D){he=D},this.getClearColor=function(D){return D.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,ce=!0){let ue=0;if(D){let ie=!1;if(R!==null){const Te=R.texture.format;ie=Te===jd||Te===Xd||Te===Wd}if(ie){const Te=R.texture.type,Ne=Te===Ki||Te===er||Te===to||Te===tr||Te===Vd||Te===Hd,Fe=be.getClearColor(),Be=be.getClearAlpha(),We=Fe.r,Xe=Fe.g,ke=Fe.b;Ne?(g[0]=We,g[1]=Xe,g[2]=ke,g[3]=Be,w.clearBufferuiv(w.COLOR,0,g)):(y[0]=We,y[1]=Xe,y[2]=ke,y[3]=Be,w.clearBufferiv(w.COLOR,0,y))}else ue|=w.COLOR_BUFFER_BIT}Q&&(ue|=w.DEPTH_BUFFER_BIT),ce&&(ue|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),be.dispose(),$.dispose(),me.dispose(),X.dispose(),S.dispose(),k.dispose(),ne.dispose(),He.dispose(),q.dispose(),Se.dispose(),le.dispose(),le.removeEventListener("sessionstart",uf),le.removeEventListener("sessionend",hf),bs.stop()};function _e(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const D=te.autoReset,Q=xe.enabled,ce=xe.autoUpdate,ue=xe.needsUpdate,ie=xe.type;Ce(),te.autoReset=D,xe.enabled=Q,xe.autoUpdate=ce,xe.needsUpdate=ue,xe.type=ie}function Ue(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qe(D){const Q=D.target;Q.removeEventListener("dispose",qe),wt(Q)}function wt(D){$t(D),X.remove(D)}function $t(D){const Q=X.get(D).programs;Q!==void 0&&(Q.forEach(function(ce){Se.releaseProgram(ce)}),D.isShaderMaterial&&Se.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,ce,ue,ie,Te){Q===null&&(Q=U);const Ne=ie.isMesh&&ie.matrixWorld.determinant()<0,Fe=e_(D,Q,ce,ue,ie);H.setMaterial(ue,Ne);let Be=ce.index,We=1;if(ue.wireframe===!0){if(Be=re.getWireframeAttribute(ce),Be===void 0)return;We=2}const Xe=ce.drawRange,ke=ce.attributes.position;let nt=Xe.start*We,lt=(Xe.start+Xe.count)*We;Te!==null&&(nt=Math.max(nt,Te.start*We),lt=Math.min(lt,(Te.start+Te.count)*We)),Be!==null?(nt=Math.max(nt,0),lt=Math.min(lt,Be.count)):ke!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,ke.count));const Lt=lt-nt;if(Lt<0||Lt===1/0)return;He.setup(ie,ue,Fe,ce,Be);let Ct,rt=ye;if(Be!==null&&(Ct=Y.get(Be),rt=Oe,rt.setIndex(Ct)),ie.isMesh)ue.wireframe===!0?(H.setLineWidth(ue.wireframeLinewidth*B()),rt.setMode(w.LINES)):rt.setMode(w.TRIANGLES);else if(ie.isLine){let ze=ue.linewidth;ze===void 0&&(ze=1),H.setLineWidth(ze*B()),ie.isLineSegments?rt.setMode(w.LINES):ie.isLineLoop?rt.setMode(w.LINE_LOOP):rt.setMode(w.LINE_STRIP)}else ie.isPoints?rt.setMode(w.POINTS):ie.isSprite&&rt.setMode(w.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))rt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const ze=ie._multiDrawStarts,jt=ie._multiDrawCounts,ct=ie._multiDrawCount,Qn=Be?Y.get(Be).bytesPerElement:1,hr=X.get(ue).currentProgram.getUniforms();for(let Cn=0;Cn<ct;Cn++)hr.setValue(w,"_gl_DrawID",Cn),rt.render(ze[Cn]/Qn,jt[Cn])}else if(ie.isInstancedMesh)rt.renderInstances(nt,Lt,ie.count);else if(ce.isInstancedBufferGeometry){const ze=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,jt=Math.min(ce.instanceCount,ze);rt.renderInstances(nt,Lt,jt)}else rt.render(nt,Lt)};function ht(D,Q,ce){D.transparent===!0&&D.side===mi&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,_o(D,Q,ce),D.side=Ss,D.needsUpdate=!0,_o(D,Q,ce),D.side=mi):_o(D,Q,ce)}this.compile=function(D,Q,ce=null){ce===null&&(ce=D),f=me.get(ce),f.init(Q),_.push(f),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),D!==ce&&D.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),f.setupLights();const ue=new Set;return D.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Te=ie.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Fe=Te[Ne];ht(Fe,ce,ie),ue.add(Fe)}else ht(Te,ce,ie),ue.add(Te)}),f=_.pop(),ue},this.compileAsync=function(D,Q,ce=null){const ue=this.compile(D,Q,ce);return new Promise(ie=>{function Te(){if(ue.forEach(function(Ne){X.get(Ne).currentProgram.isReady()&&ue.delete(Ne)}),ue.size===0){ie(D);return}setTimeout(Te,10)}z.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Jn=null;function Ei(D){Jn&&Jn(D)}function uf(){bs.stop()}function hf(){bs.start()}const bs=new q0;bs.setAnimationLoop(Ei),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(D){Jn=D,le.setAnimationLoop(D),D===null?bs.stop():bs.start()},le.addEventListener("sessionstart",uf),le.addEventListener("sessionend",hf),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Q),Q=le.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Q,R),f=me.get(D,_.length),f.init(Q),_.push(f),pe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),se.setFromProjectionMatrix(pe),we=this.localClippingEnabled,ge=ae.init(this.clippingPlanes,we),m=$.get(D,x.length),m.init(),x.push(m),le.enabled===!0&&le.isPresenting===!0){const Te=v.xr.getDepthSensingMesh();Te!==null&&Pc(Te,Q,-1/0,v.sortObjects)}Pc(D,Q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,he),L=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,L&&be.addToRenderList(m,D),this.info.render.frame++,ge===!0&&ae.beginShadows();const ce=f.state.shadowsArray;xe.render(ce,D,Q),ge===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=m.opaque,ie=m.transmissive;if(f.setupLights(),Q.isArrayCamera){const Te=Q.cameras;if(ie.length>0)for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++){const Be=Te[Ne];ff(ue,ie,D,Be)}L&&be.render(D);for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++){const Be=Te[Ne];df(m,D,Be,Be.viewport)}}else ie.length>0&&ff(ue,ie,D,Q),L&&be.render(D),df(m,D,Q);R!==null&&E===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(v,D,Q),He.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(f=_[_.length-1],ge===!0&&ae.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Pc(D,Q,ce,ue){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||se.intersectsSprite(D)){ue&&ve.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pe);const Ne=ne.update(D),Fe=D.material;Fe.visible&&m.push(D,Ne,Fe,ce,ve.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||se.intersectsObject(D))){const Ne=ne.update(D),Fe=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ve.copy(D.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ve.copy(Ne.boundingSphere.center)),ve.applyMatrix4(D.matrixWorld).applyMatrix4(pe)),Array.isArray(Fe)){const Be=Ne.groups;for(let We=0,Xe=Be.length;We<Xe;We++){const ke=Be[We],nt=Fe[ke.materialIndex];nt&&nt.visible&&m.push(D,Ne,nt,ce,ve.z,ke)}}else Fe.visible&&m.push(D,Ne,Fe,ce,ve.z,null)}}const Te=D.children;for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++)Pc(Te[Ne],Q,ce,ue)}function df(D,Q,ce,ue){const ie=D.opaque,Te=D.transmissive,Ne=D.transparent;f.setupLightsView(ce),ge===!0&&ae.setGlobalState(v.clippingPlanes,ce),ue&&H.viewport(P.copy(ue)),ie.length>0&&vo(ie,Q,ce),Te.length>0&&vo(Te,Q,ce),Ne.length>0&&vo(Ne,Q,ce),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ff(D,Q,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ue.id]===void 0&&(f.state.transmissionRenderTarget[ue.id]=new Kn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Si:Ki,minFilter:Gs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const Te=f.state.transmissionRenderTarget[ue.id],Ne=ue.viewport||P;Te.setSize(Ne.z*v.transmissionResolutionScale,Ne.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget();v.setRenderTarget(Te),v.getClearColor(N),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),L&&be.render(ce);const Be=v.toneMapping;v.toneMapping=vs;const We=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),f.setupLightsView(ue),ge===!0&&ae.setGlobalState(v.clippingPlanes,ue),vo(D,ce,ue),C.updateMultisampleRenderTarget(Te),C.updateRenderTargetMipmap(Te),z.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ke=0,nt=Q.length;ke<nt;ke++){const lt=Q[ke],Lt=lt.object,Ct=lt.geometry,rt=lt.material,ze=lt.group;if(rt.side===mi&&Lt.layers.test(ue.layers)){const jt=rt.side;rt.side=vn,rt.needsUpdate=!0,pf(Lt,ce,ue,Ct,rt,ze),rt.side=jt,rt.needsUpdate=!0,Xe=!0}}Xe===!0&&(C.updateMultisampleRenderTarget(Te),C.updateRenderTargetMipmap(Te))}v.setRenderTarget(Fe),v.setClearColor(N,O),We!==void 0&&(ue.viewport=We),v.toneMapping=Be}function vo(D,Q,ce){const ue=Q.isScene===!0?Q.overrideMaterial:null;for(let ie=0,Te=D.length;ie<Te;ie++){const Ne=D[ie],Fe=Ne.object,Be=Ne.geometry,We=ue===null?Ne.material:ue,Xe=Ne.group;Fe.layers.test(ce.layers)&&pf(Fe,Q,ce,Be,We,Xe)}}function pf(D,Q,ce,ue,ie,Te){D.onBeforeRender(v,Q,ce,ue,ie,Te),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ie.onBeforeRender(v,Q,ce,ue,D,Te),ie.transparent===!0&&ie.side===mi&&ie.forceSinglePass===!1?(ie.side=vn,ie.needsUpdate=!0,v.renderBufferDirect(ce,Q,ue,ie,D,Te),ie.side=Ss,ie.needsUpdate=!0,v.renderBufferDirect(ce,Q,ue,ie,D,Te),ie.side=mi):v.renderBufferDirect(ce,Q,ue,ie,D,Te),D.onAfterRender(v,Q,ce,ue,ie,Te)}function _o(D,Q,ce){Q.isScene!==!0&&(Q=U);const ue=X.get(D),ie=f.state.lights,Te=f.state.shadowsArray,Ne=ie.state.version,Fe=Se.getParameters(D,ie.state,Te,Q,ce),Be=Se.getProgramCacheKey(Fe);let We=ue.programs;ue.environment=D.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(D.isMeshStandardMaterial?k:S).get(D.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,We===void 0&&(D.addEventListener("dispose",qe),We=new Map,ue.programs=We);let Xe=We.get(Be);if(Xe!==void 0){if(ue.currentProgram===Xe&&ue.lightsStateVersion===Ne)return gf(D,Fe),Xe}else Fe.uniforms=Se.getUniforms(D),D.onBeforeCompile(Fe,v),Xe=Se.acquireProgram(Fe,Be),We.set(Be,Xe),ue.uniforms=Fe.uniforms;const ke=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ke.clippingPlanes=ae.uniform),gf(D,Fe),ue.needsLights=n_(D),ue.lightsStateVersion=Ne,ue.needsLights&&(ke.ambientLightColor.value=ie.state.ambient,ke.lightProbe.value=ie.state.probe,ke.directionalLights.value=ie.state.directional,ke.directionalLightShadows.value=ie.state.directionalShadow,ke.spotLights.value=ie.state.spot,ke.spotLightShadows.value=ie.state.spotShadow,ke.rectAreaLights.value=ie.state.rectArea,ke.ltc_1.value=ie.state.rectAreaLTC1,ke.ltc_2.value=ie.state.rectAreaLTC2,ke.pointLights.value=ie.state.point,ke.pointLightShadows.value=ie.state.pointShadow,ke.hemisphereLights.value=ie.state.hemi,ke.directionalShadowMap.value=ie.state.directionalShadowMap,ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ke.spotShadowMap.value=ie.state.spotShadowMap,ke.spotLightMatrix.value=ie.state.spotLightMatrix,ke.spotLightMap.value=ie.state.spotLightMap,ke.pointShadowMap.value=ie.state.pointShadowMap,ke.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=Xe,ue.uniformsList=null,Xe}function mf(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=Sl.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function gf(D,Q){const ce=X.get(D);ce.outputColorSpace=Q.outputColorSpace,ce.batching=Q.batching,ce.batchingColor=Q.batchingColor,ce.instancing=Q.instancing,ce.instancingColor=Q.instancingColor,ce.instancingMorph=Q.instancingMorph,ce.skinning=Q.skinning,ce.morphTargets=Q.morphTargets,ce.morphNormals=Q.morphNormals,ce.morphColors=Q.morphColors,ce.morphTargetsCount=Q.morphTargetsCount,ce.numClippingPlanes=Q.numClippingPlanes,ce.numIntersection=Q.numClipIntersection,ce.vertexAlphas=Q.vertexAlphas,ce.vertexTangents=Q.vertexTangents,ce.toneMapping=Q.toneMapping}function e_(D,Q,ce,ue,ie){Q.isScene!==!0&&(Q=U),C.resetTextureUnits();const Te=Q.fog,Ne=ue.isMeshStandardMaterial?Q.environment:null,Fe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:sa,Be=(ue.isMeshStandardMaterial?k:S).get(ue.envMap||Ne),We=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Xe=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),ke=!!ce.morphAttributes.position,nt=!!ce.morphAttributes.normal,lt=!!ce.morphAttributes.color;let Lt=vs;ue.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const Ct=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rt=Ct!==void 0?Ct.length:0,ze=X.get(ue),jt=f.state.lights;if(ge===!0&&(we===!0||D!==M)){const cn=D===M&&ue.id===b;ae.setState(ue,D,cn)}let ct=!1;ue.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==jt.state.version||ze.outputColorSpace!==Fe||ie.isBatchedMesh&&ze.batching===!1||!ie.isBatchedMesh&&ze.batching===!0||ie.isBatchedMesh&&ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ze.instancing===!1||!ie.isInstancedMesh&&ze.instancing===!0||ie.isSkinnedMesh&&ze.skinning===!1||!ie.isSkinnedMesh&&ze.skinning===!0||ie.isInstancedMesh&&ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ze.instancingMorph===!1&&ie.morphTexture!==null||ze.envMap!==Be||ue.fog===!0&&ze.fog!==Te||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ae.numPlanes||ze.numIntersection!==ae.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Xe||ze.morphTargets!==ke||ze.morphNormals!==nt||ze.morphColors!==lt||ze.toneMapping!==Lt||ze.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,ze.__version=ue.version);let Qn=ze.currentProgram;ct===!0&&(Qn=_o(ue,Q,ie));let hr=!1,Cn=!1,da=!1;const St=Qn.getUniforms(),kn=ze.uniforms;if(H.useProgram(Qn.program)&&(hr=!0,Cn=!0,da=!0),ue.id!==b&&(b=ue.id,Cn=!0),hr||M!==D){H.buffers.depth.getReversed()?(oe.copy(D.projectionMatrix),fM(oe),pM(oe),St.setValue(w,"projectionMatrix",oe)):St.setValue(w,"projectionMatrix",D.projectionMatrix),St.setValue(w,"viewMatrix",D.matrixWorldInverse);const xn=St.map.cameraPosition;xn!==void 0&&xn.setValue(w,Ie.setFromMatrixPosition(D.matrixWorld)),J.logarithmicDepthBuffer&&St.setValue(w,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&St.setValue(w,"isOrthographic",D.isOrthographicCamera===!0),M!==D&&(M=D,Cn=!0,da=!0)}if(ie.isSkinnedMesh){St.setOptional(w,ie,"bindMatrix"),St.setOptional(w,ie,"bindMatrixInverse");const cn=ie.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),St.setValue(w,"boneTexture",cn.boneTexture,C))}ie.isBatchedMesh&&(St.setOptional(w,ie,"batchingTexture"),St.setValue(w,"batchingTexture",ie._matricesTexture,C),St.setOptional(w,ie,"batchingIdTexture"),St.setValue(w,"batchingIdTexture",ie._indirectTexture,C),St.setOptional(w,ie,"batchingColorTexture"),ie._colorsTexture!==null&&St.setValue(w,"batchingColorTexture",ie._colorsTexture,C));const zn=ce.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Ee.update(ie,ce,Qn),(Cn||ze.receiveShadow!==ie.receiveShadow)&&(ze.receiveShadow=ie.receiveShadow,St.setValue(w,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(kn.envMap.value=Be,kn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Q.environment!==null&&(kn.envMapIntensity.value=Q.environmentIntensity),Cn&&(St.setValue(w,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&t_(kn,da),Te&&ue.fog===!0&&V.refreshFogUniforms(kn,Te),V.refreshMaterialUniforms(kn,ue,G,Z,f.state.transmissionRenderTarget[D.id]),Sl.upload(w,mf(ze),kn,C)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Sl.upload(w,mf(ze),kn,C),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&St.setValue(w,"center",ie.center),St.setValue(w,"modelViewMatrix",ie.modelViewMatrix),St.setValue(w,"normalMatrix",ie.normalMatrix),St.setValue(w,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const cn=ue.uniformsGroups;for(let xn=0,Dc=cn.length;xn<Dc;xn++){const Es=cn[xn];q.update(Es,Qn),q.bind(Es,Qn)}}return Qn}function t_(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function n_(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,Q,ce){X.get(D.texture).__webglTexture=Q,X.get(D.depthTexture).__webglTexture=ce;const ue=X.get(D);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Q){const ce=X.get(D);ce.__webglFramebuffer=Q,ce.__useDefaultFramebuffer=Q===void 0};const i_=w.createFramebuffer();this.setRenderTarget=function(D,Q=0,ce=0){R=D,T=Q,E=ce;let ue=!0,ie=null,Te=!1,Ne=!1;if(D){const Be=X.get(D);if(Be.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(w.FRAMEBUFFER,null),ue=!1;else if(Be.__webglFramebuffer===void 0)C.setupRenderTarget(D);else if(Be.__hasExternalTextures)C.rebindTextures(D,X.get(D.texture).__webglTexture,X.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ke=D.depthTexture;if(Be.__boundDepthTexture!==ke){if(ke!==null&&X.has(ke)&&(D.width!==ke.image.width||D.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(D)}}const We=D.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const Xe=X.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xe[Q])?ie=Xe[Q][ce]:ie=Xe[Q],Te=!0):D.samples>0&&C.useMultisampledRTT(D)===!1?ie=X.get(D).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[ce]:ie=Xe,P.copy(D.viewport),I.copy(D.scissor),F=D.scissorTest}else P.copy(de).multiplyScalar(G).floor(),I.copy(fe).multiplyScalar(G).floor(),F=Ae;if(ce!==0&&(ie=i_),H.bindFramebuffer(w.FRAMEBUFFER,ie)&&ue&&H.drawBuffers(D,ie),H.viewport(P),H.scissor(I),H.setScissorTest(F),Te){const Be=X.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Be.__webglTexture,ce)}else if(Ne){const Be=X.get(D.texture),We=Q;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Be.__webglTexture,ce,We)}else if(D!==null&&ce!==0){const Be=X.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Be.__webglTexture,ce)}b=-1},this.readRenderTargetPixels=function(D,Q,ce,ue,ie,Te,Ne){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=X.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){H.bindFramebuffer(w.FRAMEBUFFER,Fe);try{const Be=D.texture,We=Be.format,Xe=Be.type;if(!J.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ue&&ce>=0&&ce<=D.height-ie&&w.readPixels(Q,ce,ue,ie,Re.convert(We),Re.convert(Xe),Te)}finally{const Be=R!==null?X.get(R).__webglFramebuffer:null;H.bindFramebuffer(w.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(D,Q,ce,ue,ie,Te,Ne){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=X.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){const Be=D.texture,We=Be.format,Xe=Be.type;if(!J.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=D.width-ue&&ce>=0&&ce<=D.height-ie){H.bindFramebuffer(w.FRAMEBUFFER,Fe);const ke=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ke),w.bufferData(w.PIXEL_PACK_BUFFER,Te.byteLength,w.STREAM_READ),w.readPixels(Q,ce,ue,ie,Re.convert(We),Re.convert(Xe),0);const nt=R!==null?X.get(R).__webglFramebuffer:null;H.bindFramebuffer(w.FRAMEBUFFER,nt);const lt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await dM(w,lt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ke),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Te),w.deleteBuffer(ke),w.deleteSync(lt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Q=null,ce=0){D.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,D=arguments[1]);const ue=Math.pow(2,-ce),ie=Math.floor(D.image.width*ue),Te=Math.floor(D.image.height*ue),Ne=Q!==null?Q.x:0,Fe=Q!==null?Q.y:0;C.setTexture2D(D,0),w.copyTexSubImage2D(w.TEXTURE_2D,ce,0,0,Ne,Fe,ie,Te),H.unbindTexture()};const s_=w.createFramebuffer(),r_=w.createFramebuffer();this.copyTextureToTexture=function(D,Q,ce=null,ue=null,ie=0,Te=null){D.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,D=arguments[1],Q=arguments[2],Te=arguments[3]||0,ce=null),Te===null&&(ie!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=ie,ie=0):Te=0);let Ne,Fe,Be,We,Xe,ke,nt,lt,Lt;const Ct=D.isCompressedTexture?D.mipmaps[Te]:D.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Fe=ce.max.y-ce.min.y,Be=ce.isBox3?ce.max.z-ce.min.z:1,We=ce.min.x,Xe=ce.min.y,ke=ce.isBox3?ce.min.z:0;else{const zn=Math.pow(2,-ie);Ne=Math.floor(Ct.width*zn),Fe=Math.floor(Ct.height*zn),D.isDataArrayTexture?Be=Ct.depth:D.isData3DTexture?Be=Math.floor(Ct.depth*zn):Be=1,We=0,Xe=0,ke=0}ue!==null?(nt=ue.x,lt=ue.y,Lt=ue.z):(nt=0,lt=0,Lt=0);const rt=Re.convert(Q.format),ze=Re.convert(Q.type);let jt;Q.isData3DTexture?(C.setTexture3D(Q,0),jt=w.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(C.setTexture2DArray(Q,0),jt=w.TEXTURE_2D_ARRAY):(C.setTexture2D(Q,0),jt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,Q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,Q.unpackAlignment);const ct=w.getParameter(w.UNPACK_ROW_LENGTH),Qn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),hr=w.getParameter(w.UNPACK_SKIP_PIXELS),Cn=w.getParameter(w.UNPACK_SKIP_ROWS),da=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ct.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ct.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,We),w.pixelStorei(w.UNPACK_SKIP_ROWS,Xe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ke);const St=D.isDataArrayTexture||D.isData3DTexture,kn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const zn=X.get(D),cn=X.get(Q),xn=X.get(zn.__renderTarget),Dc=X.get(cn.__renderTarget);H.bindFramebuffer(w.READ_FRAMEBUFFER,xn.__webglFramebuffer),H.bindFramebuffer(w.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let Es=0;Es<Be;Es++)St&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,X.get(D).__webglTexture,ie,ke+Es),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,X.get(Q).__webglTexture,Te,Lt+Es)),w.blitFramebuffer(We,Xe,Ne,Fe,nt,lt,Ne,Fe,w.DEPTH_BUFFER_BIT,w.NEAREST);H.bindFramebuffer(w.READ_FRAMEBUFFER,null),H.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(ie!==0||D.isRenderTargetTexture||X.has(D)){const zn=X.get(D),cn=X.get(Q);H.bindFramebuffer(w.READ_FRAMEBUFFER,s_),H.bindFramebuffer(w.DRAW_FRAMEBUFFER,r_);for(let xn=0;xn<Be;xn++)St?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zn.__webglTexture,ie,ke+xn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,zn.__webglTexture,ie),kn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,cn.__webglTexture,Te,Lt+xn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,cn.__webglTexture,Te),ie!==0?w.blitFramebuffer(We,Xe,Ne,Fe,nt,lt,Ne,Fe,w.COLOR_BUFFER_BIT,w.NEAREST):kn?w.copyTexSubImage3D(jt,Te,nt,lt,Lt+xn,We,Xe,Ne,Fe):w.copyTexSubImage2D(jt,Te,nt,lt,We,Xe,Ne,Fe);H.bindFramebuffer(w.READ_FRAMEBUFFER,null),H.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else kn?D.isDataTexture||D.isData3DTexture?w.texSubImage3D(jt,Te,nt,lt,Lt,Ne,Fe,Be,rt,ze,Ct.data):Q.isCompressedArrayTexture?w.compressedTexSubImage3D(jt,Te,nt,lt,Lt,Ne,Fe,Be,rt,Ct.data):w.texSubImage3D(jt,Te,nt,lt,Lt,Ne,Fe,Be,rt,ze,Ct):D.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Te,nt,lt,Ne,Fe,rt,ze,Ct.data):D.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Te,nt,lt,Ct.width,Ct.height,rt,Ct.data):w.texSubImage2D(w.TEXTURE_2D,Te,nt,lt,Ne,Fe,rt,ze,Ct);w.pixelStorei(w.UNPACK_ROW_LENGTH,ct),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,hr),w.pixelStorei(w.UNPACK_SKIP_ROWS,Cn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,da),Te===0&&Q.generateMipmaps&&w.generateMipmap(jt),H.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,ce=null,ue=null,ie=0){return D.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,D=arguments[2],Q=arguments[3],ie=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Q,ce,ue,ie)},this.initRenderTarget=function(D){X.get(D).__webglFramebuffer===void 0&&C.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?C.setTextureCube(D,0):D.isData3DTexture?C.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?C.setTexture2DArray(D,0):C.setTexture2D(D,0),H.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,H.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Lm={type:"change"},cf={type:"start"},Q0={type:"end"},al=new C0,Nm=new us,hw=Math.cos(70*Zd.DEG2RAD),Ft=new j,yn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Du=1e-6;class dw extends Cb{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new ir,this._lastTargetPosition=new j,this._quat=new ir().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new am,this._sphericalDelta=new am,this._scale=1,this._panOffset=new j,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new j,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pw.bind(this),this._onPointerDown=fw.bind(this),this._onPointerUp=mw.bind(this),this._onContextMenu=Mw.bind(this),this._onMouseWheel=_w.bind(this),this._onKeyDown=xw.bind(this),this._onTouchStart=yw.bind(this),this._onTouchMove=Sw.bind(this),this._onMouseDown=gw.bind(this),this._onMouseMove=vw.bind(this),this._interceptControlDown=bw.bind(this),this._interceptControlUp=Ew.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lm),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ft.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<hw?this.object.lookAt(this.target):(Nm.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(Nm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Du||this._lastTargetPosition.distanceToSquared(this.target)>Du?(this.dispatchEvent(Lm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function fw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function pw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function mw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q0),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Wr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Wr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(cf)}function vw(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _w(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(cf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Q0))}function xw(n){this.enabled!==!1&&this._handleKeyDown(n)}function yw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(cf)}function Sw(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function Mw(n){this.enabled!==!1&&n.preventDefault()}function bw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ew(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ea=new j;function Gn(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ea.copy(e),Ea[i]=0,Ea.normalize();const c=.5*a/(a+o),u=1-Ea.angleTo(n)/l;return Math.sign(Ea[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Tw extends Ms{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new j,l=new j,c=new j(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new j,y=.5/s;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(o.fromArray(u,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),u[m+0]=c.x*Math.sign(o.x)+l.x*r,u[m+1]=c.y*Math.sign(o.y)+l.y*r,u[m+2]=c.z*Math.sign(o.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Gn(g,l,"z","y",r,i),d[f+1]=1-Gn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-Gn(g,l,"z","y",r,i),d[f+1]=1-Gn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-Gn(g,l,"x","z",r,e),d[f+1]=Gn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-Gn(g,l,"x","z",r,e),d[f+1]=1-Gn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-Gn(g,l,"x","y",r,e),d[f+1]=1-Gn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=Gn(g,l,"x","y",r,e),d[f+1]=1-Gn(g,l,"y","x",r,t);break}}}class Aw extends O0{constructor(){super();const e=new Ms;e.deleteAttribute("uv");const t=new qn({side:vn}),i=new qn,s=new j0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new et(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new et(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new et(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new et(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new et(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new et(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new et(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new et(e,Rr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new et(e,Rr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new et(e,Rr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const y=new et(e,Rr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const m=new et(e,Rr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new et(e,Rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Rr(n){const e=new Yr;return e.color.setScalar(n),e}function ww({truck:n,scene:e,m:t,box:i,cyl:s,lift:r,platform:a}){const o=new Et;n.add(o);const l=new qn({color:"#111923",metalness:.35,roughness:.46}),c=new qn({color:"#75838d",metalness:.9,roughness:.24}),u=new qn({color:"#deefff",emissive:"#badbff",emissiveIntensity:2.2}),h=new qn({color:"#7aafba",emissive:"#227b90",emissiveIntensity:.6});function d(m,f,x,_,v){const A=new j(...f),T=new j(...x),E=T.clone().sub(A),R=new et(new Tc(_,_,E.length(),16),v);return R.position.copy(A.add(T).multiplyScalar(.5)),R.quaternion.setFromUnitVectors(new j(0,1,0),E.normalize()),R.castShadow=!0,m.add(R),R}for(const m of[-2.35,2.03])for(const f of[-1,1]){const x=new V0;x.absarc(0,0,.66,0,Math.PI,!1),x.lineTo(-.58,0),x.absarc(0,0,.58,Math.PI,0,!0),x.closePath();const _=new et(new sf(x,{depth:.36,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2,steps:1}),l);_.position.set(m,.56,f===1?1.11:-1.47),o.add(_);for(const v of[.33,.37]){const A=new et(new wc(v,.012,8,48),c);A.position.set(m,.56,f*1.445),o.add(A)}}for(const m of[-.78,.78]){i(o,6.25,.19,.13,-.15,.52,m,l);for(let f=-2.9;f<3;f+=.65)i(o,.065,.16,1.63,f,.52,0,c)}for(const m of[-2.35,2.03]){s(o,.11,2.45,m,.48,0,l);for(const f of[-.74,.74]){for(let x=0;x<4;x++)i(o,.93-x*.12,.016,.11,m,.38+x*.022,f,c);d(o,[m-.23,.48,f],[m+.12,.83,f],.045,l)}}i(o,1.72,.32,1.38,-.05,.36,0,l);for(let m=-.8;m<.8;m+=.09)i(o,.02,.34,1.4,m,.36,0,c);i(o,.2,.2,2.35,-3.57,.93,0,l),i(o,.035,.05,1.15,-3.685,1.16,0,c);for(const m of[-.85,.85])i(o,.055,.09,.42,-3.555,1.5,m,l),i(o,.062,.025,.36,-3.585,1.54,m,u),i(o,.06,.06,.24,-3.588,1.43,m,t.glass),s(o,.04,.045,-3.68,.92,m,c,"x");for(const m of[-1.19,1.19]){i(o,.25,2.9,.19,3.2,2.55,m,l,.025),i(o,.04,2.63,.07,3.335,2.52,m,c);for(let f=1.25;f<3.88;f+=.24)s(o,.022,.028,3.36,f,m,c,"x"),i(o,.022,.09,.015,3.355,f,m+.055,t.dark);i(r,.25,.34,.23,.015,.05,m,c,.02),s(r,.075,.26,.06,.06,m,l),i(o,.04,.61,.025,3.352,3.12,m,h),d(o,[3.2,1.22,m],[3.2,3.85,m],.024,c),d(a,[.08,-.08,m*.87],[1.58,-.2,m*.87],.035,l);for(const f of[.2,1.56])s(a,.048,.09,f,-.13,m*.87,c)}i(o,.27,.26,2.63,3.18,3.98,0,l,.025),i(o,.035,.035,1.86,3.33,3.88,0,u);for(let m=-1.15;m<3;m+=.65){i(o,.045,.08,2.31,m,3.9,0,c);for(const f of[-1.07,1.07])i(o,.28,.026,.025,m,3.84,f,u)}for(const m of[-1.12,1.12]){i(o,4.4,.055,.035,.78,2.32,m,c);for(let f=-1.25;f<3;f+=.14)i(o,.058,.021,.043,f,2.32,m,l)}i(o,.58,.07,.58,-2.25,4.01,0,l,.025),s(o,.19,.15,-2.25,4.13,0,l,"y"),s(o,.197,.045,-2.25,4.16,0,t.glass,"y"),s(o,.18,.016,-2.25,4.22,0,c,"y");const p=new Et;e.add(p);const g=new qn({color:"#4d6875",metalness:.25,roughness:.65});for(const m of[-2.15,2.15]){i(p,9,.002,.017,.4,-.081,m,g);for(const f of[-4.1,4.9])i(p,.02,.002,.48,f,-.079,m,g)}const y=new j0("#d6e8ff",9,7,2);return y.position.set(.6,3.6,.2),o.add(y),{dispose(){}}}const Ml={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ur{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cw=new of(-1,1,1,-1,0,1);class Rw extends Bn{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const Pw=new Rw;class Rc{constructor(e){this._mesh=new et(Pw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dw extends ur{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Im extends ur{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Lw extends ur{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dw(Ml),this.copyPass.material.blending=mn,this.clock=new wb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Im!==void 0&&(a instanceof Im?i=!0:a instanceof Lw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iw{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=e-d,y=t-p;let m,f;g>y?(m=1,f=0):(m=0,f=1);const x=g-m+u,_=y-f+u,v=g-1+2*u,A=y-1+2*u,T=l&255,E=c&255,R=this.perm[T+this.perm[E]]%12,b=this.perm[T+m+this.perm[E+f]]%12,M=this.perm[T+1+this.perm[E+1]]%12;let P=.5-g*g-y*y;P<0?i=0:(P*=P,i=P*P*this.dot(this.grad3[R],g,y));let I=.5-x*x-_*_;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[b],x,_));let F=.5-v*v-A*A;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[M],v,A)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o;const c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(i+c),p=1/6,g=(u+h+d)*p,y=u-g,m=h-g,f=d-g,x=e-y,_=t-m,v=i-f;let A,T,E,R,b,M;x>=_?_>=v?(A=1,T=0,E=0,R=1,b=1,M=0):x>=v?(A=1,T=0,E=0,R=1,b=0,M=1):(A=0,T=0,E=1,R=1,b=0,M=1):_<v?(A=0,T=0,E=1,R=0,b=1,M=1):x<v?(A=0,T=1,E=0,R=0,b=1,M=1):(A=0,T=1,E=0,R=1,b=1,M=0);const P=x-A+p,I=_-T+p,F=v-E+p,N=x-R+2*p,O=_-b+2*p,W=v-M+2*p,Z=x-1+3*p,G=_-1+3*p,ee=v-1+3*p,he=u&255,de=h&255,fe=d&255,Ae=this.perm[he+this.perm[de+this.perm[fe]]]%12,se=this.perm[he+A+this.perm[de+T+this.perm[fe+E]]]%12,ge=this.perm[he+R+this.perm[de+b+this.perm[fe+M]]]%12,we=this.perm[he+1+this.perm[de+1+this.perm[fe+1]]]%12;let oe=.6-x*x-_*_-v*v;oe<0?s=0:(oe*=oe,s=oe*oe*this.dot3(this.grad3[Ae],x,_,v));let pe=.6-P*P-I*I-F*F;pe<0?r=0:(pe*=pe,r=pe*pe*this.dot3(this.grad3[se],P,I,F));let Ie=.6-N*N-O*O-W*W;Ie<0?a=0:(Ie*=Ie,a=Ie*Ie*this.dot3(this.grad3[ge],N,O,W));let ve=.6-Z*Z-G*G-ee*ee;return ve<0?o=0:(ve*=ve,o=ve*ve*this.dot3(this.grad3[we],Z,G,ee)),32*(s+r+a+o)}noise4d(e,t,i,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const y=(e+t+i+s)*l,m=Math.floor(e+y),f=Math.floor(t+y),x=Math.floor(i+y),_=Math.floor(s+y),v=(m+f+x+_)*c,A=m-v,T=f-v,E=x-v,R=_-v,b=e-A,M=t-T,P=i-E,I=s-R,F=b>M?32:0,N=b>P?16:0,O=M>P?8:0,W=b>I?4:0,Z=M>I?2:0,G=P>I?1:0,ee=F+N+O+W+Z+G,he=a[ee][0]>=3?1:0,de=a[ee][1]>=3?1:0,fe=a[ee][2]>=3?1:0,Ae=a[ee][3]>=3?1:0,se=a[ee][0]>=2?1:0,ge=a[ee][1]>=2?1:0,we=a[ee][2]>=2?1:0,oe=a[ee][3]>=2?1:0,pe=a[ee][0]>=1?1:0,Ie=a[ee][1]>=1?1:0,ve=a[ee][2]>=1?1:0,U=a[ee][3]>=1?1:0,L=b-he+c,B=M-de+c,w=P-fe+c,K=I-Ae+c,z=b-se+2*c,J=M-ge+2*c,H=P-we+2*c,te=I-oe+2*c,X=b-pe+3*c,C=M-Ie+3*c,S=P-ve+3*c,k=I-U+3*c,Y=b-1+4*c,re=M-1+4*c,ne=P-1+4*c,Se=I-1+4*c,V=m&255,$=f&255,me=x&255,ae=_&255,xe=o[V+o[$+o[me+o[ae]]]]%32,be=o[V+he+o[$+de+o[me+fe+o[ae+Ae]]]]%32,Ee=o[V+se+o[$+ge+o[me+we+o[ae+oe]]]]%32,ye=o[V+pe+o[$+Ie+o[me+ve+o[ae+U]]]]%32,Oe=o[V+1+o[$+1+o[me+1+o[ae+1]]]]%32;let Re=.6-b*b-M*M-P*P-I*I;Re<0?u=0:(Re*=Re,u=Re*Re*this.dot4(r[xe],b,M,P,I));let He=.6-L*L-B*B-w*w-K*K;He<0?h=0:(He*=He,h=He*He*this.dot4(r[be],L,B,w,K));let q=.6-z*z-J*J-H*H-te*te;q<0?d=0:(q*=q,d=q*q*this.dot4(r[Ee],z,J,H,te));let Ce=.6-X*X-C*C-S*S-k*k;Ce<0?p=0:(Ce*=Ce,p=Ce*Ce*this.dot4(r[ye],X,C,S,k));let le=.6-Y*Y-re*re-ne*ne-Se*Se;return le<0?g=0:(le*=le,g=le*le*this.dot4(r[Oe],Y,re,ne,Se)),27*(u+h+d+p+g)}}const ol={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Me},cameraProjectionMatrix:{value:new yt},cameraInverseProjectionMatrix:{value:new yt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},ll={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},cl={uniforms:{tDiffuse:{value:null},resolution:{value:new Me}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class ds extends ur{constructor(e,t,i,s,r=32){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new ef;a.format=nr,a.type=tr,this.normalRenderTarget=new Kn(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:Si,depthTexture:a}),this.ssaoRenderTarget=new Kn(this.width,this.height,{type:Si}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Wt({defines:Object.assign({},ol.defines),uniforms:vi.clone(ol.uniforms),vertexShader:ol.vertexShader,fragmentShader:ol.fragmentShader,blending:mn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new yb,this.normalMaterial.blending=mn,this.blurMaterial=new Wt({defines:Object.assign({},cl.defines),uniforms:vi.clone(cl.uniforms),vertexShader:cl.vertexShader,fragmentShader:cl.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Wt({defines:Object.assign({},ll.defines),uniforms:vi.clone(ll.uniforms),vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader,blending:mn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Wt({uniforms:vi.clone(Ml.uniforms),vertexShader:Ml.vertexShader,fragmentShader:Ml.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:o0,blendDst:ch,blendEquation:ki,blendSrcAlpha:a0,blendDstAlpha:ch,blendEquationAlpha:ki}),this.fsQuad=new Rc(null),this.originalClearColor=new Je}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,i){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ds.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=r0,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const s=new j;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=i/e;r=Zd.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}generateRandomKernelRotations(){const i=new Iw,s=4*4,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=i.noise3d(o,l,c)}this.noiseTexture=new BM(r,4,4,Gd,gi),this.noiseTexture.wrapS=ia,this.noiseTexture.wrapT=ia,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const s=t.get(i);i.visible=s}),t.clear()}}ds.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Uw={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ow extends ur{constructor(){super();const e=Uw;this.uniforms=vi.clone(e.uniforms),this.material=new xb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Rc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===c0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===u0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===h0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===f0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===p0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===d0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fw extends ur{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ul={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},hl={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Lu={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Bw extends ur{constructor(e,t){super(),this.edgesRT=new Kn(e,t,{depthBuffer:!1,type:Si}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Kn(e,t,{depthBuffer:!1,type:Si}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Xt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=si,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Xt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=Jt,this.searchTexture.minFilter=Jt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=vi.clone(ul.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new Wt({defines:Object.assign({},ul.defines),uniforms:this.uniformsEdges,vertexShader:ul.vertexShader,fragmentShader:ul.fragmentShader}),this.uniformsWeights=vi.clone(hl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Wt({defines:Object.assign({},hl.defines),uniforms:this.uniformsWeights,vertexShader:hl.vertexShader,fragmentShader:hl.fragmentShader}),this.uniformsBlend=vi.clone(Lu.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Wt({uniforms:this.uniformsBlend,vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader}),this.fsQuad=new Rc(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}function kw(n){const e=new O0;e.background=new Je("#18232e"),e.fog=new Qd("#18232e",24,65);const t=new Tn(30,1,.1,120),i=new Dm({antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,1.25)),i.shadowMap.enabled=!0,i.shadowMap.type=s0,i.toneMapping=Ql,i.toneMappingExposure=.95,n.appendChild(i.domElement);const s=new Aw,r=new Jh(i),a=r.fromScene(s,.035);e.environment=a.texture,e.environmentIntensity=.85,s.dispose(),r.dispose();const o=new Dm({antialias:!0,preserveDrawingBuffer:!0});o.setSize(640,360),o.toneMapping=Ql,o.toneMappingExposure=.95;const l=new dw(t,i.domElement);l.enableDamping=!0,l.minDistance=7,l.maxDistance=35,l.maxPolarAngle=Math.PI/2-.04;const c=new Nw(i);c.setPixelRatio(Math.min(devicePixelRatio,1.25)),c.addPass(new Fw(e,t));const u=new ds(e,t,1,1,12);u.kernelRadius=.22,u.minDistance=.002,u.maxDistance=.14,u.enabled=!1,c.addPass(u),c.addPass(new Ow),c.addPass(new Bw),e.add(new bb(11847900,1120546,.48));const h=new Eu(16775407,3.2);h.position.set(-3,10,7),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-9,right:9,top:9,bottom:-9}),h.shadow.normalBias=.015,h.shadow.bias=-5e-5,h.shadow.radius=3,e.add(h);const d=new Eu(12179967,2.8);d.position.set(3,5,-5),e.add(d);const p=new Eu(15070975,3.5);p.position.set(-5,4,-3),e.add(p);function g(V){const $=document.createElement("canvas");$.width=$.height=256;const me=$.getContext("2d");me.fillStyle=V==="wood"?"#baa07d":"#bdbdbd",me.fillRect(0,0,256,256);let ae=7241;const xe=()=>(ae=ae*1664525+1013904223>>>0,ae/4294967296);if(V==="fabric")for(let Ee=0;Ee<256;Ee+=2)for(let ye=0;ye<256;ye+=2){const Oe=Math.floor(125+xe()*105);me.fillStyle=`rgb(${Oe},${Oe},${Oe})`,me.fillRect(ye,Ee,1,Ee%4?2:1)}else for(let Ee=0;Ee<900;Ee++){me.strokeStyle=V==="wood"?`rgba(55,30,10,${xe()*.1})`:`rgba(35,40,45,${xe()*.12})`,me.beginPath();const ye=xe()*256;me.moveTo(ye,0),me.bezierCurveTo(ye+xe()*12,80,ye-xe()*12,175,ye+xe()*9,256),me.stroke()}const be=new _u($);return be.wrapS=be.wrapT=ia,be.repeat.set(V==="fabric"?5:2,V==="fabric"?5:2),be.anisotropy=Math.min(i.capabilities.getMaxAnisotropy(),8),be}const y=g("fabric"),m=g("metal"),f=g("wood");f.colorSpace=bn;const x=(V,$=0,me=.6)=>new qn({color:V,metalness:$,roughness:me}),_={body:x("#f3f1ec",.35,.32),steel:x("#9da8b0",.8,.29),dark:x("#273038",.45,.45),rubber:x("#151b21",0,.9),teal:x("#087f86",.35,.4),wine:x("#770a2d",.3,.4),amber:x("#f9c55c",.3),glass:x("#25434f",.7,.19),floor:x("#56636e",.7,.5),pad:x("#d3dcdf",0,.95)};_.body=new nl({color:"#75828b",metalness:.78,roughness:.23,clearcoat:.65,clearcoatRoughness:.17}),_.steel.bumpMap=m,_.steel.bumpScale=.003,_.floor.bumpMap=m,_.floor.bumpScale=.004,_.floor.color.set("#303c46"),_.glass=new nl({color:"#0c1620",metalness:.25,roughness:.07,clearcoat:1}),_.rubber.bumpMap=y,_.rubber.bumpScale=.004;function v(V,$,me,ae,xe,be,Ee,ye,Oe=0){const Re=new et(Oe?new Tw($,me,ae,2,Oe):new Ms($,me,ae),ye);return Re.position.set(xe,be,Ee),Re.castShadow=!0,Re.receiveShadow=!0,V.add(Re),Re}function A(V,$,me,ae,xe,be,Ee,ye="z"){const Oe=new et(new Tc($,$,me,32),Ee);return ye==="z"?Oe.rotation.x=Math.PI/2:ye==="x"&&(Oe.rotation.z=Math.PI/2),Oe.position.set(ae,xe,be),Oe.castShadow=!0,V.add(Oe),Oe}function T(V,$,me,ae,xe,be,Ee,ye=0){const Oe=document.createElement("canvas");Oe.width=1024,Oe.height=512;const Re=Oe.getContext("2d");Re.fillStyle="#f3f1ec",Re.fillRect(0,0,1024,512),Re.fillStyle="#790e32",Re.font="bold 158px Arial",Re.fillText($[0],55,205),Re.fillStyle="#087c86",Re.font="46px Arial",Re.fillText($[1],58,308),Re.font="28px Arial",Re.fillText("CONCEPT VEHICLE / WASTEGO LAB",58,401);const He=new _u(Oe);He.colorSpace=bn;const q=new et(new aa(me,ae),new qn({map:He,roughness:.5}));return q.position.set(xe,be,Ee),q.rotation.y=ye,V.add(q),q}function E(V,$,me,ae,xe){const be=new Et;be.position.set($,me,ae),V.add(be);const Ee=new nl({color:xe,roughness:.92,sheen:1,sheenColor:new Je("#afbbb9"),sheenRoughness:.9,bumpMap:y,bumpScale:.018}),ye=x(xe,0,1);ye.color.multiplyScalar(.7),v(be,1.85,.23,.8,0,.24,0,Ee,.06),v(be,1.85,.65,.17,0,.6,-.34,Ee,.065);for(const Oe of[-.84,.84]){v(be,.17,.52,.88,Oe,.43,0,Ee,.05);for(const Re of[-.3,.3])A(be,.032,.14,Oe,.07,Re,_.dark,"y")}for(const Oe of[-.38,.38]){v(be,.71,.16,.56,Oe,.43,.05,Ee,.065);const Re=v(be,.7,.43,.2,Oe,.7,-.21,Ee,.07);Re.rotation.x=-.09,v(be,.63,.006,.005,Oe,.44,.333,ye,.002);for(const He of[-.18,.18]){const q=new et(new Ha(.012,12,8),ye);q.scale.z=.3,q.position.set(Oe+He,.72,-.095),be.add(q)}}return be}v(e,100,.1,100,0,-.14,0,x("#cbd0d3",.05,.8));const R=document.createElement("canvas");R.width=R.height=128;const b=R.getContext("2d"),M=b.createRadialGradient(64,64,12,64,64,64);M.addColorStop(0,"rgba(18,25,32,.35)"),M.addColorStop(1,"rgba(18,25,32,0)"),b.fillStyle=M,b.fillRect(0,0,128,128);const P=new _u(R),I=new et(new aa(10,5),new Yr({map:P,transparent:!0,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.position.y=-.08,e.add(I);const F=e.children.find(V=>V.isMesh&&V.geometry?.parameters?.width===100);F&&F.material.color.set("#202c38");const N=new Et;e.add(N),v(N,6.7,.36,2.52,-.1,.77,0,_.dark,.06),v(N,4.7,.13,2.4,.82,1.07,0,_.floor);const O=new nl({color:"#b5bfc4",metalness:.62,roughness:.28,clearcoat:.55});v(N,1.98,2.84,2.39,-2.48,2.52,0,O,.045);for(const V of[-1.205,1.205]){v(N,1.95,.08,.055,-2.48,3.94,V,_.steel),v(N,1.95,.08,.055,-2.48,1.13,V,_.steel),v(N,.07,2.8,.055,-3.43,2.52,V,_.steel);for(let $=1.3;$<3.9;$+=.3)A(N,.013,.016,-3.44,$,V*1.02,_.dark)}v(N,.1,2.79,2.31,-3.5,2.52,0,O,.025),v(N,.045,.26,1.23,-3.57,1.86,0,_.dark,.02);for(const V of[-.39,0,.39])A(N,.044,.025,-3.6,1.86,V,_.glass,"x");v(N,.07,.12,2.27,-3.54,3.94,0,_.steel,.012);const W=[];for(const V of[-2.35,2.03])for(const $ of[-1.27,1.27]){const me=new Et;me.position.set(V,.56,$),N.add(me),A(me,.55,.3,0,0,0,_.rubber);const ae=new et(new wc(.415,.135,12,48),_.rubber);ae.position.z=$>0?.06:-.06,me.add(ae),A(me,.32,.31,0,0,0,_.dark),A(me,.285,.33,0,0,0,_.steel),A(me,.105,.36,0,0,0,_.steel);for(let xe=0;xe<10;xe++){const be=xe*Math.PI/5;A(me,.036,.345,Math.cos(be)*.224,Math.sin(be)*.224,0,_.dark),A(me,.015,.365,Math.cos(be)*.147,Math.sin(be)*.147,0,_.steel)}W.push(me),v(N,.04,.48,.45,V+.58,.47,$,_.rubber);for(let xe=0;xe<Math.PI*2;xe+=Math.PI/24){const be=v(me,.044,.022,.28,Math.cos(xe)*.55,Math.sin(xe)*.55,0,_.rubber);be.rotation.z=xe-Math.PI/2}}v(N,4.58,2.78,.08,.83,2.52,-1.19,_.body),v(N,.08,2.78,2.4,-1.47,2.52,0,_.body);for(const V of[-1.45,3.1])for(const $ of[-1.19,1.19])v(N,.11,2.84,.11,V,2.53,$,_.steel);for(const V of[-1.257,1.257])for(const $ of[-1.45,3.1])for(let me=1.25;me<3.9;me+=.25)A(N,.018,.018,$,me,V,_.dark);for(const V of[-1.2,1.2]){v(N,2.7,.38,.09,.05,.79,V,_.body,.02);for(let $=-1.05;$<1.3;$+=.45)v(N,.045,.2,.1,$,.79,V*1.04,_.dark);v(N,.8,.025,.012,-.8,.83,V*1.06,_.wine)}for(const V of[-1.19,1.19]){v(N,4.7,.12,.12,.83,3.92,V,_.steel),v(N,4.7,.12,.12,.83,1.15,V,_.steel);for(let $=-1.1;$<3;$+=.55)v(N,.028,2.65,.03,$,2.53,-1.135,_.steel),v(N,.1,.04,.14,$,1.18,V,_.amber)}const Z=new Et;N.add(Z),v(Z,4.6,2.74,.065,.82,2.53,1.21,_.body),v(Z,4.68,.09,2.43,.82,3.95,0,_.body),T(Z,["WasteGo","DIRECT COLLECTION"],2.7,1.35,.7,2.5,1.25),T(N,["WasteGo","AUTONOMOUS CARGO"],1.55,.78,-2.48,2.89,1.207);const G=new Et;N.add(G),v(G,.09,2.68,2.29,3.13,2.54,0,_.body);for(let V=1.24;V<3.87;V+=.145)v(G,.025,.009,2.25,3.184,V,0,_.dark);v(G,.04,.08,.5,3.2,1.34,0,_.dark,.01);const ee=[];for(const V of[-1,1]){const $=new Et;$.position.set(.75,2.48,V*1.12),N.add($),v($,4.35,.1,1.12,0,0,-V*.56,_.steel);for(let me=-1.3;me<2;me+=.55)v($,.045,.055,1.1,me,-.07,-V*.56,_.dark);ee.push({pivot:$,sign:V})}const he=new qn({color:"#ac926f",map:f,bumpMap:f,bumpScale:.005,roughness:.53}),de=new Et;N.add(de),E(de,-.15,2.55,-.12,"#a7a095"),v(de,.78,1.05,.7,2.05,3.06,-.1,he,.012),v(de,.02,.07,.13,2.452,3.12,.1,_.dark);const fe=new Et;N.add(fe);for(const V of[-1.12,1.12])for(let $=-1.1;$<3;$+=.65)v(fe,.55,1,.07,$,1.75,V,_.pad,.035);const Ae=new Et;N.add(Ae);const se=new Et;Ae.add(se),v(se,1.97,.12,2.36,.985,0,0,_.floor,.018);for(const V of[-1.15,1.15]){v(se,1.95,.025,.08,.985,.075,V,_.amber);for(let $=.05;$<1.9;$+=.17){const me=v(se,.065,.008,.09,$,.091,V,_.dark);me.rotation.y=-.4}}for(let V=-1;V<=1;V+=.2)v(se,1.84,.007,.009,.98,.066,V,_.steel);for(const V of[-1.15,1.15])v(N,.15,2.84,.15,3.25,2.53,V,_.dark),v(N,.038,2.7,.04,3.34,2.5,V,_.steel),v(N,.075,.62,.075,3.35,2.92,V,_.amber),v(N,.075,.42,.075,3.35,1.51,V,_.wine);const ge=new Et;N.add(ge);const we=E(ge,0,0,0,"#456366"),oe=new Et;ge.add(oe),v(oe,.95,1.83,.6,0,.97,0,he,.012),v(oe,.008,1.7,.008,0,.97,.308,_.dark);for(const V of[-.065,.065])v(oe,.018,.17,.025,V,1.02,.33,_.steel,.005);const pe=new Et;ge.add(pe);for(const V of[-.64,.64])v(pe,.055,.9,.025,V,.47,.455,_.amber),v(pe,.055,.025,.91,V,.91,0,_.amber);const Ie=new qn({color:"#16c9d1",emissive:"#04b8c7",emissiveIntensity:1});for(const V of[-1.3,3.13])for(const $ of[-1.09,1.09]){v(N,.23,.17,.23,V,3.99,$,_.dark,.025);const me=new et(new Ha(.05,16,16),Ie);me.position.set(V+.12,3.99,$),N.add(me)}const ve=new Et;ve.position.set(-3.43,4.14,0),N.add(ve),v(ve,.32,.24,.56,0,0,0,_.dark,.03),v(ve,.25,.04,.42,.04,-.15,0,_.steel,.01);for(const V of[-.16,.16])A(ve,.078,.045,-.175,0,V,_.steel,"x"),A(ve,.055,.052,-.198,0,V,_.glass,"x"),A(ve,.023,.055,-.202,0,V,Ie,"x");v(ve,.024,.016,.055,-.18,.075,0,Ie,.003);const U=new Et;N.add(U),U.position.set(3.33,3.89,0),v(U,.18,.2,.38,0,0,0,_.dark,.025);for(const V of[-.11,.11])A(U,.045,.025,.1,0,V,_.glass,"x");A(U,.065,.027,.1,0,0,_.steel,"x"),A(U,.048,.03,.117,0,0,_.glass,"x"),v(U,.006,.014,.014,.142,.07,.13,Ie),v(N,.11,.43,.26,3.34,2.05,1.19,_.dark,.015),v(N,.016,.29,.2,3.405,2.08,1.19,_.glass,.005);for(let V=1.12;V<1.28;V+=.026)v(N,.018,.06,.008,3.416,2.02,V,_.body);const L=new Et;N.add(L);const B=new Yr({color:"#0db8be",transparent:!0,opacity:.5,depthWrite:!1});for(let V=1.25;V<3.88;V+=.17)v(L,.012,.008,2.15,3.36,V,0,B);const w=new Et;e.add(w);const K=x("#bc244a",0,.7);A(w,.16,.58,0,.96,0,K,"y");const z=new et(new Ha(.15,20,16),K);z.position.y=1.45,w.add(z);for(const V of[-.1,.1])A(w,.06,.61,V,.35,0,K,"y");for(const V of[-.25,.25])A(w,.055,.6,V,1,0,K,"y");const J=new et(new rf(.38,.42,64),new Yr({color:"#bf244b",side:mi}));J.rotation.x=-Math.PI/2,J.position.y=.02,w.add(J),ww({truck:N,scene:e,m:_,box:v,cyl:A,lift:Ae,platform:se});let H=0,te=0,X=performance.now(),C=0;function S(V="hero"){const $=t.aspect,me=Math.max(1,1.35/$),ae=V==="front"?[-10,5.7,6]:V==="rear"?[10.8,4.3,5.2]:V==="side"?[.8,3.5,16]:[10.5,5.6,13.2];t.position.set(ae[0]*me,ae[1]*me,ae[2]*me),l.target.set(V==="front"?-2.5:V==="rear"?2.8:.65,V==="front"?3:1.95,0),l.update()}const k=new ResizeObserver(()=>{const{width:V,height:$}=n.getBoundingClientRect();!V||!$||(t.aspect=V/$,t.updateProjectionMatrix(),i.setSize(V,$),c.setSize(V,$),S())});k.observe(n);function Y(V,$){const me=performance.now(),ae=$.latched?0:Math.min((me-X)/1e3,.05);X=me,H=$.layout==="full"?1:0,te=Zd.damp(te,H,7,ae),de.visible=H===0&&te<.01,ee.forEach(({pivot:be,sign:Ee})=>be.rotation.x=Ee*te*Math.PI/2),fe.visible=$.fleet==="reuse",_.wine.color.set($.fleet==="reuse"?"#087c86":"#770a2d"),Z.visible=!$.cutaway,G.visible=V.closed>.01,G.scale.y=Math.max(.01,V.closed),G.position.y=3.88*(1-V.closed),Ae.position.set(3.22,.18+V.lift*.91,0),se.rotation.z=V.fold*Math.PI/2,ge.position.set(4.21-V.inward*3.45,.26+V.lift*.91,0),we.visible=$.item==="sofa",oe.visible=$.item==="cabinet",pe.visible=V.secured&&$.item==="sofa",N.position.x=-V.travel*1.3;const xe=(V.travel-C)*1.3/.56;W.forEach(be=>be.rotation.z+=xe),C=V.travel,L.visible=$.showSafety&&V.closed<.5,B.color.set($.latched?"#f13958":"#0db8be"),B.opacity=$.latched?.85:.4,w.visible=$.intrusion,w.position.set(N.position.x+3.5,0,1.58),l.update(),c.render()}function re(){const V=new Tn(63,1.7777777777777777,.05,30);return V.position.set(3.51+N.position.x,3.78,0),V.lookAt(ge.position.x+N.position.x,.6,0),o.render(e,V),o.domElement.toDataURL("image/png")}function ne(){k.disconnect(),l.dispose(),u.dispose(),c.passes.forEach(ae=>{ae!==u&&ae.dispose?.()}),c.dispose();const V=new Set,$=new Set,me=new Set([y,m,f,P]);e.traverse(ae=>{ae.geometry&&V.add(ae.geometry);for(const xe of ae.material?Array.isArray(ae.material)?ae.material:[ae.material]:[])$.add(xe),xe.map&&me.add(xe.map)}),V.forEach(ae=>ae.dispose()),$.forEach(ae=>ae.dispose()),me.forEach(ae=>ae.dispose()),a.dispose(),o.dispose(),i.dispose(),i.domElement.remove()}function Se(){const V=n.clientWidth,$=n.clientHeight;return[{id:"front",label:"前顶部 · 行驶感知相机",xyz:[-3.43,4.14,0],dx:-135,dy:-35},{id:"sensor",label:"后门楣 · 预约验货相机",xyz:[3.45,3.89,0],dx:25,dy:-50},{id:"deck",label:"02 独立层板",xyz:[.6,2.48,1.12],dx:-130,dy:-12},{id:"safety",label:"03 安全光幕",xyz:[3.36,2.9,0],dx:34,dy:-20},{id:"lift",label:"04 升降尾板",xyz:[4.2,.18,1],dx:35,dy:5}].map(me=>{const ae=new j(...me.xyz);return ae.x+=N.position.x,ae.project(t),{...me,x:(ae.x+1)*V/2,y:(1-ae.y)*$/2,visible:ae.z<1&&Math.abs(ae.x)<.85&&Math.abs(ae.y)<.8}})}return{render:Y,view:S,dispose:ne,annotations:Se,capture:re}}const Sn=Object.freeze({length:4.5,width:2.25,height:2.7,lowerHeight:1.22,upperHeight:1.25,payload:800,tailLift:300,tailLength:1.97,tailWidth:2.36,clearance:.08}),Ns=[{name:"扫码与货品核验",en:"SCAN & VERIFY",duration:3,description:"模拟扫码核对预约并开门，门楣摄像头比对现场货品；一致、尺寸合格且安全联锁解除后才允许升降。"},{name:"尾板升起",en:"LIFT",duration:4,description:"车辆驻车，作业区隔离，尾板由地面位升至货舱地板高度。"},{name:"移载入舱",en:"TRANSFER",duration:4,description:"家具沿概念移载轨迹进入下层。实际驱动、接触和夹持机构尚未设计。"},{name:"固定与收板",en:"SECURE",duration:3,description:"先示意固定货物，再竖起空尾板、关闭货舱。真实锁止反馈需传感器验证。"},{name:"直达运输",en:"TRANSIT",duration:5,description:"仅在模拟固定、门闭与收板条件满足后播放行驶；不包含道路自动驾驶。"},{name:"到站展开",en:"ARRIVAL",duration:3,description:"示意到站驻车、开门和展开尾板；接收站准入与实际人员安排需另行确认。"},{name:"卸载交接",en:"HANDOVER",duration:5,description:"解除示意固定、移出家具，再降低尾板；交接记录和接收证明尚未对接。"}],$0=n=>Math.max(0,Math.min(1,n));function zw(n,e){const t=e==="reuse"?"WG-R01-0921":"WG-C01-0921";return n.trim()==="EXPIRED"?{ok:!1,message:"示例预约已过期，请重新预约。"}:n.trim()!==t?{ok:!1,message:"预约码无效或车辆不匹配，舱门保持锁定。"}:{ok:!0,message:"示例预约有效 · 当前车辆匹配 · 允许开门"}}function Vw(n,e){if(e.occluded)return{status:"review",message:"货品遮挡，无法确认一致；升降保持禁止，需重新采集或人工复核。"};if(n.type!==e.type||n.count!==e.count)return{status:"mismatch",message:"类别或件数与预约不一致，禁止升降。"};for(const t of["length","width","height"])if(!Number.isFinite(e[t])||Math.abs(n[t]-e[t])>.08)return{status:"mismatch",message:"外包尺寸超出示例容差 ±0.08 m，禁止升降。"};return{status:"match",message:"示例类别、件数与尺寸一致；这不是实测识别结果。"}}function Hw({scanned:n,doorOpen:e,match:t,bound:i,loadOK:s,latched:r}){return n&&e&&t==="match"&&i&&s&&!r}const Di=n=>(n=$0(n),n*n*(3-2*n));function Gw(n,e){e=$0(e);let t=0,i=0,s=0,r=0,a=!1,o=0;return n===1&&(t=Di(e)),n===2&&(t=1,i=Di(e)),n===3&&(t=1,i=1,a=e>=.2,s=Di((e-.2)/.55),r=Di((e-.72)/.28)),n===4&&(t=1,i=1,s=1,r=1,a=!0,o=Di(e)),n===5&&(t=1,i=1,a=!0,o=1,r=1-Di(e/.3),s=1-Di((e-.3)/.7)),n===6&&(o=1,i=1-Di(e/.55),t=1-Di((e-.55)/.45)),{lift:t,inward:i,fold:s,closed:r,secured:a,travel:o,driveAllowed:a&&s===1&&r===1}}function Ww(n,e){const{length:t,width:i,height:s,mass:r}=n,a=[];if(![t,i,s,r].every(c=>Number.isFinite(c)&&c>0))return{ok:!1,reasons:["请输入大于零的有效尺寸与重量。"],volume:null,clearance:null};const o=e==="double"?Sn.lowerHeight:Sn.height;(t+Sn.clearance>Sn.length||i+Sn.clearance>Sn.width)&&a.push("长或宽超出示例货舱净尺寸（含 80 mm 预留）。"),(t+Sn.clearance>Sn.tailLength||i+Sn.clearance>Sn.tailWidth)&&a.push("当前朝向超出示例尾板面积（1.97 × 2.36 m，含预留）；未验证旋转或外悬装载。"),s+Sn.clearance>o&&a.push(e==="double"?"家具高于示例下层净高，请改用通高区。":"家具高于示例通高净高。"),r>Sn.tailLift&&a.push("单件重量超过示例尾板限值 300 kg。");const l=e==="double"?110:0;return r+l>Sn.payload&&a.push("含示例上层家具的总重量超过示例载荷 800 kg。"),{ok:a.length===0,reasons:a,volume:t*i*s,clearance:o-s,existingMass:l}}Hl({setup(){const n=it(null),e=it(""),t=it("clearance"),i=it("double"),s=it("sofa"),r=it(!0),a=it(!0),o=it(0),l=it(0),c=it(!1),u=it(1),h=it(!1),d=it(!1),p=it(!1),g=it("safety"),y=it([]),m=it({length:1.85,width:.88,height:.94,mass:60}),f=it([]),x=it("WG-C01-0921"),_=it(!1),v=it(!1),A=it(0),T=it("舱门锁定。请先使用示例预约码模拟扫码。"),E=it("pending"),R=it("等待门上摄像头进行货品比对。"),b=it("match"),M=it(""),P=it(""),I=Wn(()=>t.value==="reuse"?"WG-R01-0921":"WG-C01-0921"),F=Wn(()=>JSON.stringify({item:s.value,dimensions:m.value,fleet:t.value,layout:i.value,scenario:b.value})),N=Wn(()=>b.value==="mismatch"?s.value==="sofa"?"cabinet":"sofa":s.value),O=Wn(()=>Ww(m.value,i.value)),W=Wn(()=>Ns[o.value]),Z=Wn(()=>{const S=Gw(o.value,l.value);return o.value===0&&(S.closed=1-A.value),S}),G=Wn(()=>Hw({scanned:_.value,doorOpen:v.value&&A.value===1,match:E.value,bound:M.value===F.value,loadOK:O.value.ok,latched:d.value})),ee=Ns.reduce((S,k)=>S+k.duration,0),he=Wn(()=>Math.round(100*(Ns.slice(0,o.value).reduce((S,k)=>S+k.duration,0)+l.value*W.value.duration)/ee)),de=[{id:"sensor",n:"01",name:"预约货品比对",en:"RESERVATION MATCH",title:"升降前，确认是预约的那件货",description:"扫码核对预约与车辆后开门。门楣相机采集现场货品，对照预约类别、件数和外包尺寸；不一致或遮挡时禁止升降。仅外观尺寸一致不能证明实物身份，真实系统需多视角及人工复核。",input:"预约记录 / 门上相机 / 件数与尺寸",output:"一致 / 不匹配 / 待复核 → 升降授权",limit:"当前扫码为输入码模拟；比对使用预设测试数据，无真实二维码解码或 AI 识别。"},{id:"deck",n:"02",name:"可收双层",en:"ADAPTIVE CARGO BAY",title:"低件分层，高件留通高",description:"双层模式分开示意承载区；切换通高时，清空示例上层货物，两片层板向侧壁折起。实际机构需独立承载与机械锁止。",input:"家具尺寸 / 空舱状态 / 层板位置",output:"双层或通高建议 / 净高冲突提示",limit:"折板运动仅为概念；铰链、强度与锁止未工程验证。"},{id:"safety",n:"03",name:"人员检测与联锁",en:"PERSONNEL INTERLOCK",title:"人员进入，停止并锁存",description:"示意安全光幕检测入口占用，暂停当前动画并锁存状态。区域清空后必须手动复位，再单独启动；不会自动恢复。",input:"模拟光幕占用 / 急停 / 人工复位",output:"暂停动作 / 锁存提示 / 事件记录",limit:"界面运行在浏览器，不是安全控制器，不构成安全认证。"},{id:"lift",n:"04",name:"升降与移载",en:"LIFT & TRANSFER",title:"动作有顺序，状态可追溯",description:"先驻车隔离，升到地板高度后移入家具；固定后收板关门。到站按逆序展开、移出、降低。",input:"阶段 / 尾板位置 / 货物位置 / 锁止反馈",output:"顺序状态机 / 阶段进度 / 运输条件",limit:"真实移载驱动与夹持结构待设计，无物理碰撞仿真。"}],fe=Wn(()=>de.find(S=>S.id===g.value));let Ae,se,ge=0,we=0,oe;function pe(S){y.value=[{time:new Date().toLocaleTimeString("zh-CN",{hour12:!1}),message:S},...y.value].slice(0,5)}function Ie(){_.value=!1,v.value=!1,A.value=0,E.value="pending",M.value="",P.value="",T.value="舱门锁定，请重新模拟扫码。",R.value="等待门上摄像头进行货品比对。"}function ve(){c.value=!1,o.value=0,l.value=0,Ie(),pe("预约核验已重置；安全锁存保持不变")}function U(S,k){d.value||(ve(),S==="fleet"&&(t.value=k,x.value=I.value),S==="layout"&&(i.value=k),S==="item"&&(s.value=k,m.value=k==="sofa"?{length:1.85,width:.88,height:.94,mass:60}:{length:.95,width:.6,height:1.9,mass:70}))}function L(){ve(),pe("现场测试场景已改变，必须重新扫码与比对")}function B(){if(d.value||o.value!==0)return;c.value=!1,Ie();const S=zw(x.value,t.value);T.value=S.message,_.value=S.ok,v.value=S.ok,pe(S.ok?"模拟扫码通过：舱门解锁打开":"扫码核验失败：保持关门"),Ae?.view("rear")}function w(){if(!_.value||A.value!==1||d.value||o.value!==0)return;const S={...m.value,type:s.value,count:1},k={...m.value,type:N.value,count:1,occluded:b.value==="review"};b.value==="size"&&(k.height+=.2);const Y=Vw(S,k);E.value=Y.status,R.value=Y.message,M.value=F.value,P.value=Ae?.capture()||"",pe("模拟摄像头比对："+Y.message)}function K(S){if(!(d.value||S>0&&!G.value)){if(S===0){ve();return}c.value=!1,o.value=S,l.value=0,pe("已核验预约的阶段预览："+Ns[S].name)}}function z(){if(c.value){c.value=!1,pe("人工暂停");return}if(G.value){if(o.value===Ns.length-1&&l.value===1){ve();return}c.value=!0,pe("预约与货品核验通过，启动概念流程")}}function J(S){if(S==="intrusion"){if(h.value=!h.value,!h.value){pe("模拟人员离开；等待手动复位");return}}else p.value=!0;c.value=!1,d.value=!0,pe(S==="intrusion"?"模拟光幕触发：暂停并锁存":"模拟急停触发：暂停并锁存")}function H(){p.value=!1,pe("模拟急停解除；等待手动复位")}function te(){h.value||p.value||(d.value=!1,pe("手动复位完成；需再次点击播放"))}function X(S){if(S==="front"){g.value="sensor",Ae?.view("front");return}g.value=S,Ae?.view(S==="safety"||S==="lift"?"rear":"hero")}const C=Wn(()=>d.value?"联锁已触发":c.value?"演示运行中":"等待操作");return Ys(()=>{try{let k=function(Y){if(se=requestAnimationFrame(k),document.hidden||Y-we<33)return;we=Y;const re=ge?Math.min((Y-ge)/1e3,.1):0;ge=Y,o.value===0&&v.value&&!d.value&&(A.value=Math.min(1,A.value+re*.8)),c.value&&(G.value?(l.value=Math.min(1,l.value+re*u.value/W.value.duration),l.value===1&&(o.value<Ns.length-1?(o.value++,l.value=0,pe("进入阶段："+W.value.name)):(c.value=!1,pe("示意交接完成")))):(c.value=!1,pe("核验授权失效，演示暂停"))),Ae.render(Z.value,{fleet:t.value,layout:i.value,item:N.value,cutaway:r.value,showSafety:a.value,intrusion:h.value,latched:d.value,matched:G.value})};var S=k;Ae=kw(n.value),pe("车辆就绪：等待模拟扫码开门"),se=requestAnimationFrame(k)}catch(k){e.value="3D 初始化失败："+k.message}}),Ys(()=>{oe=setInterval(()=>{Ae&&(f.value=Ae.annotations())},100)}),la(()=>{clearInterval(oe),cancelAnimationFrame(se),Ae?.dispose()}),{bookingCode:x,scanned:_,doorOpen:v,doorAmount:A,scanMessage:T,matchStatus:E,matchMessage:R,scenario:b,verifiedKey:M,cameraImage:P,expectedCode:I,fingerprint:F,observedItem:N,permitted:G,scan:B,compare:w,changeScenario:L,mount:n,fault:e,fleet:t,layout:i,item:s,cutaway:r,showSafety:a,step:o,progress:l,playing:c,speed:u,intrusion:h,latched:d,emergency:p,activeTech:g,events:y,dimensions:m,annotations:f,check:O,current:W,position:Z,overall:he,techs:de,technology:fe,stateName:C,DEMO:Sn,stages:Ns,configure:U,jump:K,togglePlay:z,trip:J,releaseEmergency:H,acknowledge:te,inspect:X,reset:ve,view:S=>Ae?.view(S)}},template:`
<div class="app"><header><a class="brand" href="#">Waste<span>Go</span><i>◢</i><small>让 大 件 回 收 更 简 单</small></a><nav><a class="nav-active" href="#concept">车辆概念</a><a href="#engineering">技术架构</a><a href="#workflow">收运流程</a></nav><span class="header-meta">RESEARCH & DEVELOPMENT <b>预约验货版 V03</b></span></header>
<main><section class="intro" id="concept"><div><div class="eyebrow"><span>05</span> VEHICLE CONCEPT / 清运车概念与专车配置</div><h1>家具的下一程，<em>从有序收运开始。</em></h1><p>预约收取 · 分区装载 · 直达确认接收点</p></div><div class="intro-note"><b>一个流程，两类专车。</b><span>清运与二手配送分别配置<br>各自合单，不交叉派车</span></div></section>
<section class="hero-layout"><div class="vehicle-panel"><div class="vehicle-top"><div><span class="section-kicker">WASTEGO / ENGINEERING EXPLORER</span><h2>{{fleet==='clearance'?'无人家具直达收运方案':'二手家具专车配送方案'}}</h2></div><span class="outline-tag">3D 概念模型</span></div>
<div class="scene-shell"><div ref="mount" class="canvas"><p v-if="fault" class="fault">{{fault}}</p></div><div class="annotations" v-if="cutaway&&step===0"><div v-for="a in annotations.filter(a=>a.visible)" :key="a.id" class="annotation" :style="{left:a.x+'px',top:a.y+'px'}"><i></i><svg width="180" height="100" style="left:-140px;top:-55px"><path :d="'M140 55 L'+(140+a.dx*.7)+' '+(55+a.dy)+' L'+(140+a.dx)+' '+(55+a.dy)"/></svg><button :style="{left:a.dx+'px',top:(a.dy-22)+'px'}" @click="inspect(a.id)">{{a.label}}</button></div></div><div class="scene-caption"><span>{{fleet==='clearance'?'COLLECTION VEHICLE':'REUSE DELIVERY'}}</span><b>WG–{{fleet==='clearance'?'C':'R'}}01</b><small>结构、动作与尺寸均为示意</small></div><div class="scene-status" :class="{alarm:latched}"><i></i>{{stateName}}</div><div class="scene-tools"><button :class="{active:cutaway}" @click="cutaway=!cutaway">{{cutaway?'剖面视图':'封闭视图'}}</button><button @click="view('hero')">整体</button><button @click="view('rear')">尾部特写</button><button @click="view('side')">侧视</button></div><span class="orbit-help">拖动旋转 / 滚轮缩放</span></div>
<div class="cabless-note"><span>无驾驶舱 · 前部与货舱等高</span><button @click="view('front')">查看前顶部摄像头 ↗</button><small>前相机：行驶环境感知示意 / 后相机：预约货品核验</small></div><div class="parts-strip"><button v-for="t in techs" :key="t.id" :class="{active:activeTech===t.id}" @click="inspect(t.id)"><span>{{t.n}}</span><div>{{t.name}}<small>{{t.en}}</small></div><b>↗</b></button></div></div>
<aside class="configuration"><div class="section-kicker">VEHICLE CONFIGURATION</div><h2>两类专车分别配置</h2><div class="fleet-tabs"><button :class="{active:fleet==='clearance'}" :disabled="latched" @click="configure('fleet','clearance')">清运专车 <small>COLLECTION</small></button><button :class="{active:fleet==='reuse'}" :disabled="latched" @click="configure('fleet','reuse')">二手配送 <small>REUSE</small></button></div><p class="config-copy">{{fleet==='clearance'?'围绕已确认接收站组织清运。按物品类型、接收条件与时间窗口合单。':'围绕交取区域安排配送，增加货舱软垫示意；防护包装与固定方案需人工确认。'}}</p><div class="rule-line"><span>派车规则</span><strong>两类订单独立调度</strong></div>
<div class="config-heading"><h3>可收双层与通高区</h3><span>02 / CARGO BAY</span></div><div class="layout-options"><button :class="{active:layout==='double'}" :disabled="latched" @click="configure('layout','double')"><span class="bay-icon double">▱<br>▱</span><b>双层装载</b><small>低件分层 · 上层示例货物</small></button><button :class="{active:layout==='full'}" :disabled="latched" @click="configure('layout','full')"><span class="bay-icon">▯</span><b>通高模式</b><small>清空上层 · 层板折起</small></button></div><p class="fineprint">切换配置会回到起点。层板收起须先卸空；折叠机构与独立承重尚待验证。</p>
<div class="route-card"><div class="route-dots"><span>⌂</span><i></i><span>▣</span><i></i><span>♻</span></div><b>{{fleet==='clearance'?'预约收集点 → 确认接收站':'交货点 → 指定收货点'}}</b><small>示意路线 · 未接入地图或优化算法</small></div></aside></section>
<section class="verification"><div class="verification-head"><div><span class="section-kicker">ACCESS CONTROL & CARGO VERIFICATION</span><h2>扫码开门，验货后才升降。</h2></div><span class="sim-badge">预约数据与相机画面均为模拟</span></div><div class="verify-grid">
<article class="verify-column"><h3><span>01</span>预约凭证 / 扫码开门</h3><div class="booking-id">{{expectedCode}}</div><p class="booking-meta">预约货品：{{item==='sofa'?'双人沙发':'高柜'}} × 1<br>{{dimensions.length}} × {{dimensions.width}} × {{dimensions.height}} m · {{dimensions.mass}} kg（人工申报）<br>专属车辆：{{fleet==='clearance'?'WG–C01 清运专车':'WG–R01 二手配送'}}</p><div class="scan-control"><input v-model="bookingCode" aria-label="示例预约码" :disabled="step!==0||latched" placeholder="输入示例预约码"><button :disabled="step!==0||latched" @click="scan">模拟扫码开门</button></div><p class="scan-feedback">{{scanMessage}}</p><p class="fineprint">模拟扫码器的解码结果；输入 EXPIRED 可测试过期。真实接入需服务端校验签名、预约时段、车辆绑定及单次使用。</p></article>
<article class="verify-column"><h3><span>02</span>门上摄像头 / 货品比对</h3><div class="camera-feed"><img v-if="cameraImage" :src="cameraImage" alt="由三维模型渲染的模拟货品采集画面"><div v-else class="camera-placeholder">{{!scanned?'门已锁定 · 等待预约验证':doorAmount<1?'舱门正在打开…':'门已打开 · 等待采集货品'}}</div><span class="feed-label">DOOR CAM 01 / SYNTHETIC VIEW</span><div v-if="cameraImage" class="reticle"></div><span class="feed-status">{{matchStatus==='pending'?'等待比对':matchStatus==='match'?'示例一致':matchStatus==='review'?'遮挡 · 待复核':'不匹配 · 已拦截'}}</span></div><div class="camera-options"><select v-model="scenario" @change="changeScenario" :disabled="latched||playing||step!==0" aria-label="现场货品测试场景"><option value="match">现场货品与预约一致</option><option value="mismatch">现场货品类别不一致</option><option value="size">现场尺寸超差</option><option value="review">画面遮挡 / 待复核</option></select><button class="verify-action" :disabled="!scanned||doorAmount<1||latched||step!==0" @click="compare">采集并比对</button></div><p class="fineprint">三维渲染截图 + 预设识别数据，不是实际摄像头或 AI 推理。尺寸超差、遮挡由测试数据模拟。</p></article>
<article class="verify-column"><h3><span>03</span>核验结果 / 升降授权</h3><div class="verify-results" :class="{pass:permitted}"><strong>{{permitted?'核验通过':matchStatus==='pending'?'等待核验':'升降未获授权'}}</strong><p>{{verifiedKey&&verifiedKey!==fingerprint?'预约或配置已改变，请重新核验。':matchMessage}}</p><dl><dt>预约凭证</dt><dd>{{scanned?'模拟有效':'未通过'}}</dd><dt>初始开门授权</dt><dd>{{doorOpen?'已授予':'未授予'}}</dd><dt>货品比对</dt><dd>{{matchStatus==='match'?'示例一致':matchStatus==='review'?'待复核':matchStatus==='mismatch'?'不匹配':'未核验'}}</dd><dt>尺寸与载荷</dt><dd>{{check.ok?'示例通过':'存在冲突'}}</dd><dt>安全联锁</dt><dd>{{latched?'已锁存':'已释放'}}</dd></dl><div class="permission">{{permitted?'● 允许启动升降流程':'● 禁止启动升降流程'}}</div></div></article>
</div></section>
<section class="workflow" id="workflow"><div class="section-title"><div><span class="section-kicker">SEQUENTIAL OPERATIONS</span><h2>从预约到交接，每一步都有状态。</h2></div><span class="demo-label">演示时间，不代表作业耗时</span></div><div class="timeline"><button v-for="(s,i) in stages" :key="i" :class="{active:step===i,done:step>i}" :disabled="latched||(i>0&&!permitted)" @click="jump(i)"><span>{{String(i+1).padStart(2,'0')}}</span><b>{{s.name}}</b><small>{{s.en}}</small></button></div><div class="playback"><button class="play" :disabled="!permitted&&!playing" @click="togglePlay">{{playing?'Ⅱ 暂停':'▶ 播放流程'}}</button><button class="reset" :disabled="latched" @click="reset">↺ 重置核验</button><div class="play-description"><b>{{current.name}}</b><p>{{current.description}}</p></div><select v-model.number="speed" aria-label="播放速度"><option :value=".5">0.5×</option><option :value="1">1×</option><option :value="2">2×</option></select><span class="percent">{{overall}}<small>%</small></span></div><div class="track"><i :style="{width:overall+'%'}"></i></div></section>
<section class="engineering" id="engineering"><div class="section-title"><div><span class="section-kicker">DESIGN LOGIC / NOT HARDWARE VALIDATION</span><h2>技术细节，可以展开，也可以检验。</h2></div><span class="demo-label">设计假设与真实能力分开呈现</span></div><div class="engineering-grid">
<article class="tech-card"><div class="card-number">{{technology.n}}<span> / SYSTEM DETAIL</span></div><h3>{{technology.title}}</h3><p>{{technology.description}}</p><dl><dt>输入</dt><dd>{{technology.input}}</dd><dt>输出</dt><dd>{{technology.output}}</dd></dl><div class="technical-note">{{technology.limit}}</div><div class="chips"><button v-for="t in techs" :class="{active:activeTech===t.id}" @click="inspect(t.id)">{{t.name}}</button></div></article>
<article class="safety-card" :class="{tripped:latched}"><div class="card-top"><span class="section-kicker">SAFETY INTERLOCK / 软件演示</span><span class="status-pill">{{latched?'已锁存':'待命'}}</span></div><h3>人员检测与运动联锁</h3><p>光幕占用或急停触发 → 暂停 → 清除触发源 → 手动复位 → 再启动。</p><div class="safety-state"><div><i :class="{red:intrusion}"></i><span>入口光幕</span><b>{{intrusion?'模拟遮挡':'模拟无遮挡'}}</b></div><div><i :class="{red:emergency}"></i><span>急停输入</span><b>{{emergency?'已触发':'已释放'}}</b></div><div><i :class="{red:latched}"></i><span>运动授权</span><b>{{latched?'禁止继续':'等待启动指令'}}</b></div></div><div class="safety-actions"><button @click="trip('intrusion')">{{intrusion?'移出模拟人员':'模拟人员进入'}}</button><button class="estop" @click="emergency?releaseEmergency():trip('emergency')">{{emergency?'解除急停':'模拟急停'}}</button><button :disabled="!latched||intrusion||emergency" @click="acknowledge">手动复位</button></div><label class="checkbox"><input type="checkbox" v-model="showSafety">显示尾部光幕示意</label><small class="fineprint">浏览器动画停止不等于真实机械安全停止；安全等级、响应时间和停止距离尚未评估。</small></article>
<article class="load-card"><span class="section-kicker">LOAD ENVELOPE / 示例约束</span><h3>先检查，再安排舱位</h3><div class="item-tabs"><button :class="{active:item==='sofa'}" :disabled="latched" @click="configure('item','sofa')">双人沙发</button><button :class="{active:item==='cabinet'}" :disabled="latched" @click="configure('item','cabinet')">高柜</button></div><div class="inputs"><label>长 / m<input type="number" min=".1" step=".01" v-model.number="dimensions.length" :disabled="playing||latched"></label><label>宽 / m<input type="number" min=".1" step=".01" v-model.number="dimensions.width" :disabled="playing||latched"></label><label>高 / m<input type="number" min=".1" step=".01" v-model.number="dimensions.height" :disabled="playing||latched"></label><label>重量 / kg<input type="number" min="1" step="1" v-model.number="dimensions.mass" :disabled="playing||latched"></label></div><div class="validation" :class="{invalid:!check.ok}"><b>{{check.ok?'✓ 示例尺寸与重量检查通过':'! 当前方案存在冲突'}}</b><p v-if="!check.ok" v-for="reason in check.reasons">{{reason}}</p><p v-else>仍需核实重心、轴荷、门洞、通道及货物固定。</p></div><p class="fineprint">示例货舱 4.50 × 2.25 × 2.70 m；下层净高 1.22 m；尾板 300 kg；整舱 800 kg。全部为测试假设，非设计额定值。输入用于校验，不改变三维模型比例。</p></article>
</div></section>
<section class="telemetry"><div><span class="section-kicker">SIMULATED TELEMETRY</span><h3>状态可见，事件可追溯。</h3><p>仅当前会话，无真实传感器或持久化记录。</p></div><dl><dt>尾板升程</dt><dd>{{Math.round(position.lift*100)}}<small>%</small></dd><dt>货物固定</dt><dd>{{position.secured?'示意锁定':'未固定'}}</dd><dt>运输条件</dt><dd>{{position.driveAllowed&&!latched?'模拟满足':'未满足'}}</dd></dl><ul><li v-for="(e,i) in events.slice(0,3)" :key="i"><time>{{e.time}}</time>{{e.message}}</li></ul></section>
<footer><b>WASTE<span>GO</span> / VEHICLE LAB</b><p>概念方案，非已部署产品。真实应用仍需验证车辆合规、承重与固定、机械安全、道路运行及接收站准入。</p><span>2026 · V03</span></footer>
</main></div>`}).mount("#app");
