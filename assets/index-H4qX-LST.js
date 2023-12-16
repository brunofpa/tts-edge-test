var H=Object.defineProperty;var J=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>(J(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _(){}function M(e){return e()}function C(){return Object.create(null)}function y(e){e.forEach(M)}function T(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function A(){return W(" ")}function V(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return Array.from(e.childNodes)}function j(e,t){e.value=t??""}let L;function $(e){L=e}const h=[],I=[];let p=[];const q=[],Y=Promise.resolve();let E=!1;function Z(){E||(E=!0,Y.then(R))}function O(e){p.push(e)}const b=new Set;let d=0;function R(){if(d!==0)return;const e=L;do{try{for(;d<h.length;){const t=h[d];d++,$(t),ee(t.$$)}}catch(t){throw h.length=0,d=0,t}for($(null),h.length=0,d=0;I.length;)I.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];b.has(n)||(b.add(n),n())}p.length=0}while(h.length);for(;q.length;)q.pop()();E=!1,b.clear(),$(e)}function ee(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function te(e){const t=[],n=[];p.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),p=t}const x=new Set;let ne;function U(e,t){e&&e.i&&(x.delete(e),e.i(t))}function re(e,t,n,o){if(e&&e.o){if(x.has(e))return;x.add(e),ne.c.push(()=>{x.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function oe(e){e&&e.c()}function k(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),O(()=>{const s=e.$$.on_mount.map(M).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...s):y(s),e.$$.on_mount=[]}),r.forEach(O)}function D(e,t){const n=e.$$;n.fragment!==null&&(te(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(h.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,o,r,s,c=null,l=[-1]){const f=L;$(e);const i=e.$$={fragment:null,ctx:[],props:s,update:_,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:t.target||f.$$.root};c&&c(i.root);let a=!1;if(i.ctx=n?n(e,t.props||{},(u,N,...P)=>{const B=P.length?P[0]:N;return i.ctx&&r(i.ctx[u],i.ctx[u]=B)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](B),a&&ie(e,u)),N}):[],i.update(),a=!0,y(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const u=X(t.target);i.fragment&&i.fragment.l(u),u.forEach(S)}else i.fragment&&i.fragment.c();t.intro&&U(e.$$.fragment),k(e,t.target,t.anchor),R()}$(f)}class G{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){D(this,1),this.$destroy=_}$on(t,n){if(!T(n))return _;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);function ce(e){let t,n,o,r,s,c,l,f;return{c(){t=g("div"),n=g("h1"),n.textContent="Conversão de texto em fala",o=A(),r=g("textarea"),s=A(),c=g("button"),c.textContent="Ler em voz alta",v(r,"placeholder","Digite qualquer coisa"),v(r,"class","svelte-1lld9at"),v(c,"class","svelte-1lld9at"),v(t,"class","container svelte-1lld9at")},m(i,a){F(i,t,a),m(t,n),m(t,o),m(t,r),j(r,e[0]),m(t,s),m(t,c),l||(f=[V(r,"input",e[2]),V(c,"click",e[1])],l=!0)},p(i,[a]){a&1&&j(r,i[0])},i:_,o:_,d(i){i&&S(t),l=!1,y(f)}}}function ue(e,t,n){const o=window.speechSynthesis;let r="",s=null;function c(){const i=o.getVoices();s=i.find(u=>u.lang==="pt-BR"&&u.name=="Microsoft Francisca Online (Natural) - Portuguese (Brazil)")||i[0]}c(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=c);function l(){const i=new SpeechSynthesisUtterance(r);i.voice=s,o.speak(i)}function f(){r=this.value,n(0,r)}return[r,l,f]}class fe extends G{constructor(t){super(),K(this,t,ue,ce,z,{})}}function le(e){let t,n,o;return n=new fe({}),{c(){t=g("main"),oe(n.$$.fragment)},m(r,s){F(r,t,s),k(n,t,null),o=!0},p:_,i(r){o||(U(n.$$.fragment,r),o=!0)},o(r){re(n.$$.fragment,r),o=!1},d(r){r&&S(t),D(n)}}}class ae extends G{constructor(t){super(),K(this,t,null,le,z,{})}}new ae({target:document.getElementById("app")});
