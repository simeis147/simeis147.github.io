/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lo(n,s){const a=new Set(n.split(","));return s?t=>a.has(t.toLowerCase()):t=>a.has(t)}const xn={},Sa=[],ls=()=>{},vu=()=>!1,bt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xo=n=>n.startsWith("onUpdate:"),Rn=Object.assign,Co=(n,s)=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)},yu=Object.prototype.hasOwnProperty,kn=(n,s)=>yu.call(n,s),nn=Array.isArray,Aa=n=>re(n)==="[object Map]",sl=n=>re(n)==="[object Set]",tn=n=>typeof n=="function",jn=n=>typeof n=="string",$a=n=>typeof n=="symbol",Sn=n=>n!==null&&typeof n=="object",al=n=>(Sn(n)||tn(n))&&tn(n.then)&&tn(n.catch),tl=Object.prototype.toString,re=n=>tl.call(n),bu=n=>re(n).slice(8,-1),el=n=>re(n)==="[object Object]",Io=n=>jn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,La=Lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ie=n=>{const s=Object.create(null);return a=>s[a]||(s[a]=n(a))},_u=/-(\w)/g,ks=ie(n=>n.replace(_u,(s,a)=>a?a.toUpperCase():"")),wu=/\B([A-Z])/g,Ha=ie(n=>n.replace(wu,"-$1").toLowerCase()),_t=ie(n=>n.charAt(0).toUpperCase()+n.slice(1)),xe=ie(n=>n?`on${_t(n)}`:""),Zs=(n,s)=>!Object.is(n,s),Ce=(n,s)=>{for(let a=0;a<n.length;a++)n[a](s)},ne=(n,s,a)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:a})},Eu=n=>{const s=parseFloat(n);return isNaN(s)?n:s},Su=n=>{const s=jn(n)?Number(n):NaN;return isNaN(s)?n:s};let Bp;const ol=()=>Bp||(Bp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function To(n){if(nn(n)){const s={};for(let a=0;a<n.length;a++){const t=n[a],e=jn(t)?Cu(t):To(t);if(e)for(const o in e)s[o]=e[o]}return s}else if(jn(n)||Sn(n))return n}const Au=/;(?![^(]*\))/g,Lu=/:([^]+)/,xu=/\/\*[^]*?\*\//g;function Cu(n){const s={};return n.replace(xu,"").split(Au).forEach(a=>{if(a){const t=a.split(Lu);t.length>1&&(s[t[0].trim()]=t[1].trim())}}),s}function Oo(n){let s="";if(jn(n))s=n;else if(nn(n))for(let a=0;a<n.length;a++){const t=Oo(n[a]);t&&(s+=t+" ")}else if(Sn(n))for(const a in n)n[a]&&(s+=a+" ");return s.trim()}const Iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tu=Lo(Iu);function pl(n){return!!n||n===""}const jg=n=>jn(n)?n:n==null?"":nn(n)||Sn(n)&&(n.toString===tl||!tn(n.toString))?JSON.stringify(n,cl,2):String(n),cl=(n,s)=>s&&s.__v_isRef?cl(n,s.value):Aa(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((a,[t,e],o)=>(a[Ie(t,o)+" =>"]=e,a),{})}:sl(s)?{[`Set(${s.size})`]:[...s.values()].map(a=>Ie(a))}:$a(s)?Ie(s):Sn(s)&&!nn(s)&&!el(s)?String(s):s,Ie=(n,s="")=>{var a;return $a(n)?`Symbol(${(a=n.description)!=null?a:s})`:n};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xn;class Ou{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xn,!s&&Xn&&(this.index=(Xn.scopes||(Xn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const a=Xn;try{return Xn=this,s()}finally{Xn=a}}}on(){Xn=this}off(){Xn=this.parent}stop(s){if(this._active){let a,t;for(a=0,t=this.effects.length;a<t;a++)this.effects[a].stop();for(a=0,t=this.cleanups.length;a<t;a++)this.cleanups[a]();if(this.scopes)for(a=0,t=this.scopes.length;a<t;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!s){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function Pu(n,s=Xn){s&&s.active&&s.effects.push(n)}function ll(){return Xn}function Bu(n){Xn&&Xn.cleanups.push(n)}let ua;class Po{constructor(s,a,t,e){this.fn=s,this.trigger=a,this.scheduler=t,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Pu(this,e)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ha();for(let s=0;s<this._depsLength;s++){const a=this.deps[s];if(a.computed&&(Du(a.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),fa()}return this._dirtyLevel>=4}set dirty(s){this._dirtyLevel=s?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let s=Qs,a=ua;try{return Qs=!0,ua=this,this._runnings++,Dp(this),this.fn()}finally{Rp(this),this._runnings--,ua=a,Qs=s}}stop(){var s;this.active&&(Dp(this),Rp(this),(s=this.onStop)==null||s.call(this),this.active=!1)}}function Du(n){return n.value}function Dp(n){n._trackId++,n._depsLength=0}function Rp(n){if(n.deps.length>n._depsLength){for(let s=n._depsLength;s<n.deps.length;s++)rl(n.deps[s],n);n.deps.length=n._depsLength}}function rl(n,s){const a=n.get(s);a!==void 0&&s._trackId!==a&&(n.delete(s),n.size===0&&n.cleanup())}let Qs=!0,Xe=0;const il=[];function ha(){il.push(Qs),Qs=!1}function fa(){const n=il.pop();Qs=n===void 0?!0:n}function Bo(){Xe++}function Do(){for(Xe--;!Xe&&no.length;)no.shift()()}function ul(n,s,a){if(s.get(n)!==n._trackId){s.set(n,n._trackId);const t=n.deps[n._depsLength];t!==s?(t&&rl(t,n),n.deps[n._depsLength++]=s):n._depsLength++}}const no=[];function kl(n,s,a){Bo();for(const t of n.keys()){let e;t._dirtyLevel<s&&(e??(e=n.get(t)===t._trackId))&&(t._shouldSchedule||(t._shouldSchedule=t._dirtyLevel===0),t._dirtyLevel=s),t._shouldSchedule&&(e??(e=n.get(t)===t._trackId))&&(t.trigger(),(!t._runnings||t.allowRecurse)&&t._dirtyLevel!==2&&(t._shouldSchedule=!1,t.scheduler&&no.push(t.scheduler)))}Do()}const dl=(n,s)=>{const a=new Map;return a.cleanup=n,a.computed=s,a},se=new WeakMap,ka=Symbol(""),so=Symbol("");function Un(n,s,a){if(Qs&&ua){let t=se.get(n);t||se.set(n,t=new Map);let e=t.get(a);e||t.set(a,e=dl(()=>t.delete(a))),ul(ua,e)}}function Bs(n,s,a,t,e,o){const p=se.get(n);if(!p)return;let l=[];if(s==="clear")l=[...p.values()];else if(a==="length"&&nn(n)){const r=Number(t);p.forEach((i,u)=>{(u==="length"||!$a(u)&&u>=r)&&l.push(i)})}else switch(a!==void 0&&l.push(p.get(a)),s){case"add":nn(n)?Io(a)&&l.push(p.get("length")):(l.push(p.get(ka)),Aa(n)&&l.push(p.get(so)));break;case"delete":nn(n)||(l.push(p.get(ka)),Aa(n)&&l.push(p.get(so)));break;case"set":Aa(n)&&l.push(p.get(ka));break}Bo();for(const r of l)r&&kl(r,4);Do()}function Ru(n,s){var a;return(a=se.get(n))==null?void 0:a.get(s)}const Mu=Lo("__proto__,__v_isRef,__isVue"),ml=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($a)),Mp=ju();function ju(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...a){const t=ln(this);for(let o=0,p=this.length;o<p;o++)Un(t,"get",o+"");const e=t[s](...a);return e===-1||e===!1?t[s](...a.map(ln)):e}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...a){ha(),Bo();const t=ln(this)[s].apply(this,a);return Do(),fa(),t}}),n}function Vu(n){const s=ln(this);return Un(s,"has",n),s.hasOwnProperty(n)}class hl{constructor(s=!1,a=!1){this._isReadonly=s,this._isShallow=a}get(s,a,t){const e=this._isReadonly,o=this._isShallow;if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return o;if(a==="__v_raw")return t===(e?o?Yu:yl:o?vl:gl).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(t)?s:void 0;const p=nn(s);if(!e){if(p&&kn(Mp,a))return Reflect.get(Mp,a,t);if(a==="hasOwnProperty")return Vu}const l=Reflect.get(s,a,t);return($a(a)?ml.has(a):Mu(a))||(e||Un(s,"get",a),o)?l:Vn(l)?p&&Io(a)?l:l.value:Sn(l)?e?Rs(l):wt(l):l}}class fl extends hl{constructor(s=!1){super(!1,s)}set(s,a,t,e){let o=s[a];if(!this._isShallow){const r=Ba(o);if(!ae(t)&&!Ba(t)&&(o=ln(o),t=ln(t)),!nn(s)&&Vn(o)&&!Vn(t))return r?!1:(o.value=t,!0)}const p=nn(s)&&Io(a)?Number(a)<s.length:kn(s,a),l=Reflect.set(s,a,t,e);return s===ln(e)&&(p?Zs(t,o)&&Bs(s,"set",a,t):Bs(s,"add",a,t)),l}deleteProperty(s,a){const t=kn(s,a);s[a];const e=Reflect.deleteProperty(s,a);return e&&t&&Bs(s,"delete",a,void 0),e}has(s,a){const t=Reflect.has(s,a);return(!$a(a)||!ml.has(a))&&Un(s,"has",a),t}ownKeys(s){return Un(s,"iterate",nn(s)?"length":ka),Reflect.ownKeys(s)}}class Nu extends hl{constructor(s=!1){super(!0,s)}set(s,a){return!0}deleteProperty(s,a){return!0}}const $u=new fl,Hu=new Nu,Fu=new fl(!0),Ro=n=>n,ue=n=>Reflect.getPrototypeOf(n);function jt(n,s,a=!1,t=!1){n=n.__v_raw;const e=ln(n),o=ln(s);a||(Zs(s,o)&&Un(e,"get",s),Un(e,"get",o));const{has:p}=ue(e),l=t?Ro:a?Vo:ct;if(p.call(e,s))return l(n.get(s));if(p.call(e,o))return l(n.get(o));n!==e&&n.get(s)}function Vt(n,s=!1){const a=this.__v_raw,t=ln(a),e=ln(n);return s||(Zs(n,e)&&Un(t,"has",n),Un(t,"has",e)),n===e?a.has(n):a.has(n)||a.has(e)}function Nt(n,s=!1){return n=n.__v_raw,!s&&Un(ln(n),"iterate",ka),Reflect.get(n,"size",n)}function jp(n){n=ln(n);const s=ln(this);return ue(s).has.call(s,n)||(s.add(n),Bs(s,"add",n,n)),this}function Vp(n,s){s=ln(s);const a=ln(this),{has:t,get:e}=ue(a);let o=t.call(a,n);o||(n=ln(n),o=t.call(a,n));const p=e.call(a,n);return a.set(n,s),o?Zs(s,p)&&Bs(a,"set",n,s):Bs(a,"add",n,s),this}function Np(n){const s=ln(this),{has:a,get:t}=ue(s);let e=a.call(s,n);e||(n=ln(n),e=a.call(s,n)),t&&t.call(s,n);const o=s.delete(n);return e&&Bs(s,"delete",n,void 0),o}function $p(){const n=ln(this),s=n.size!==0,a=n.clear();return s&&Bs(n,"clear",void 0,void 0),a}function $t(n,s){return function(t,e){const o=this,p=o.__v_raw,l=ln(p),r=s?Ro:n?Vo:ct;return!n&&Un(l,"iterate",ka),p.forEach((i,u)=>t.call(e,r(i),r(u),o))}}function Ht(n,s,a){return function(...t){const e=this.__v_raw,o=ln(e),p=Aa(o),l=n==="entries"||n===Symbol.iterator&&p,r=n==="keys"&&p,i=e[n](...t),u=a?Ro:s?Vo:ct;return!s&&Un(o,"iterate",r?so:ka),{next(){const{value:k,done:d}=i.next();return d?{value:k,done:d}:{value:l?[u(k[0]),u(k[1])]:u(k),done:d}},[Symbol.iterator](){return this}}}}function $s(n){return function(...s){return n==="delete"?!1:n==="clear"?void 0:this}}function zu(){const n={get(o){return jt(this,o)},get size(){return Nt(this)},has:Vt,add:jp,set:Vp,delete:Np,clear:$p,forEach:$t(!1,!1)},s={get(o){return jt(this,o,!1,!0)},get size(){return Nt(this)},has:Vt,add:jp,set:Vp,delete:Np,clear:$p,forEach:$t(!1,!0)},a={get(o){return jt(this,o,!0)},get size(){return Nt(this,!0)},has(o){return Vt.call(this,o,!0)},add:$s("add"),set:$s("set"),delete:$s("delete"),clear:$s("clear"),forEach:$t(!0,!1)},t={get(o){return jt(this,o,!0,!0)},get size(){return Nt(this,!0)},has(o){return Vt.call(this,o,!0)},add:$s("add"),set:$s("set"),delete:$s("delete"),clear:$s("clear"),forEach:$t(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ht(o,!1,!1),a[o]=Ht(o,!0,!1),s[o]=Ht(o,!1,!0),t[o]=Ht(o,!0,!0)}),[n,a,s,t]}const[Gu,qu,Ju,Wu]=zu();function Mo(n,s){const a=s?n?Wu:Ju:n?qu:Gu;return(t,e,o)=>e==="__v_isReactive"?!n:e==="__v_isReadonly"?n:e==="__v_raw"?t:Reflect.get(kn(a,e)&&e in t?a:t,e,o)}const Ku={get:Mo(!1,!1)},Uu={get:Mo(!1,!0)},Qu={get:Mo(!0,!1)},gl=new WeakMap,vl=new WeakMap,yl=new WeakMap,Yu=new WeakMap;function Zu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xu(n){return n.__v_skip||!Object.isExtensible(n)?0:Zu(bu(n))}function wt(n){return Ba(n)?n:jo(n,!1,$u,Ku,gl)}function bl(n){return jo(n,!1,Fu,Uu,vl)}function Rs(n){return jo(n,!0,Hu,Qu,yl)}function jo(n,s,a,t,e){if(!Sn(n)||n.__v_raw&&!(s&&n.__v_isReactive))return n;const o=e.get(n);if(o)return o;const p=Xu(n);if(p===0)return n;const l=new Proxy(n,p===2?t:a);return e.set(n,l),l}function xa(n){return Ba(n)?xa(n.__v_raw):!!(n&&n.__v_isReactive)}function Ba(n){return!!(n&&n.__v_isReadonly)}function ae(n){return!!(n&&n.__v_isShallow)}function _l(n){return xa(n)||Ba(n)}function ln(n){const s=n&&n.__v_raw;return s?ln(s):n}function wl(n){return Object.isExtensible(n)&&ne(n,"__v_skip",!0),n}const ct=n=>Sn(n)?wt(n):n,Vo=n=>Sn(n)?Rs(n):n;class El{constructor(s,a,t,e){this.getter=s,this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Po(()=>s(this._value),()=>Za(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!e,this.__v_isReadonly=t}get value(){const s=ln(this);return(!s._cacheable||s.effect.dirty)&&Zs(s._value,s._value=s.effect.run())&&Za(s,4),No(s),s.effect._dirtyLevel>=2&&Za(s,2),s._value}set value(s){this._setter(s)}get _dirty(){return this.effect.dirty}set _dirty(s){this.effect.dirty=s}}function nk(n,s,a=!1){let t,e;const o=tn(n);return o?(t=n,e=ls):(t=n.get,e=n.set),new El(t,e,o||!e,a)}function No(n){var s;Qs&&ua&&(n=ln(n),ul(ua,(s=n.dep)!=null?s:n.dep=dl(()=>n.dep=void 0,n instanceof El?n:void 0)))}function Za(n,s=4,a){n=ln(n);const t=n.dep;t&&kl(t,s)}function Vn(n){return!!(n&&n.__v_isRef===!0)}function U(n){return Sl(n,!1)}function Tn(n){return Sl(n,!0)}function Sl(n,s){return Vn(n)?n:new sk(n,s)}class sk{constructor(s,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?s:ln(s),this._value=a?s:ct(s)}get value(){return No(this),this._value}set value(s){const a=this.__v_isShallow||ae(s)||Ba(s);s=a?s:ln(s),Zs(s,this._rawValue)&&(this._rawValue=s,this._value=a?s:ct(s),Za(this,4))}}function da(n){return Vn(n)?n.value:n}const ak={get:(n,s,a)=>da(Reflect.get(n,s,a)),set:(n,s,a,t)=>{const e=n[s];return Vn(e)&&!Vn(a)?(e.value=a,!0):Reflect.set(n,s,a,t)}};function Al(n){return xa(n)?n:new Proxy(n,ak)}class tk{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:t}=s(()=>No(this),()=>Za(this));this._get=a,this._set=t}get value(){return this._get()}set value(s){this._set(s)}}function $o(n){return new tk(n)}class ek{constructor(s,a,t){this._object=s,this._key=a,this._defaultValue=t,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Ru(ln(this._object),this._key)}}class ok{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Fa(n,s,a){return Vn(n)?n:tn(n)?new ok(n):Sn(n)&&arguments.length>1?pk(n,s,a):U(n)}function pk(n,s,a){const t=n[s];return Vn(t)?t:new ek(n,s,a)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(n,s,a,t){try{return t?n(...t):n()}catch(e){Et(e,s,a)}}function is(n,s,a,t){if(tn(n)){const o=Ys(n,s,a,t);return o&&al(o)&&o.catch(p=>{Et(p,s,a)}),o}const e=[];for(let o=0;o<n.length;o++)e.push(is(n[o],s,a,t));return e}function Et(n,s,a,t=!0){const e=s?s.vnode:null;if(s){let o=s.parent;const p=s.proxy,l=`https://vuejs.org/error-reference/#runtime-${a}`;for(;o;){const i=o.ec;if(i){for(let u=0;u<i.length;u++)if(i[u](n,p,l)===!1)return}o=o.parent}const r=s.appContext.config.errorHandler;if(r){Ys(r,null,10,[n,p,l]);return}}ck(n,a,e,t)}function ck(n,s,a,t=!0){console.error(n)}let lt=!1,ao=!1;const Fn=[];let As=0;const Ca=[];let qs=null,la=0;const Ll=Promise.resolve();let Ho=null;function sa(n){const s=Ho||Ll;return n?s.then(this?n.bind(this):n):s}function lk(n){let s=As+1,a=Fn.length;for(;s<a;){const t=s+a>>>1,e=Fn[t],o=rt(e);o<n||o===n&&e.pre?s=t+1:a=t}return s}function ke(n){(!Fn.length||!Fn.includes(n,lt&&n.allowRecurse?As+1:As))&&(n.id==null?Fn.push(n):Fn.splice(lk(n.id),0,n),xl())}function xl(){!lt&&!ao&&(ao=!0,Ho=Ll.then(Cl))}function rk(n){const s=Fn.indexOf(n);s>As&&Fn.splice(s,1)}function ik(n){nn(n)?Ca.push(...n):(!qs||!qs.includes(n,n.allowRecurse?la+1:la))&&Ca.push(n),xl()}function Hp(n,s,a=lt?As+1:0){for(;a<Fn.length;a++){const t=Fn[a];if(t&&t.pre){if(n&&t.id!==n.uid)continue;Fn.splice(a,1),a--,t()}}}function te(n){if(Ca.length){const s=[...new Set(Ca)].sort((a,t)=>rt(a)-rt(t));if(Ca.length=0,qs){qs.push(...s);return}for(qs=s,la=0;la<qs.length;la++)qs[la]();qs=null,la=0}}const rt=n=>n.id==null?1/0:n.id,uk=(n,s)=>{const a=rt(n)-rt(s);if(a===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return a};function Cl(n){ao=!1,lt=!0,Fn.sort(uk);try{for(As=0;As<Fn.length;As++){const s=Fn[As];s&&s.active!==!1&&Ys(s,null,14)}}finally{As=0,Fn.length=0,te(),lt=!1,Ho=null,(Fn.length||Ca.length)&&Cl()}}function kk(n,s,...a){if(n.isUnmounted)return;const t=n.vnode.props||xn;let e=a;const o=s.startsWith("update:"),p=o&&s.slice(7);if(p&&p in t){const u=`${p==="modelValue"?"model":p}Modifiers`,{number:k,trim:d}=t[u]||xn;d&&(e=a.map(h=>jn(h)?h.trim():h)),k&&(e=a.map(Eu))}let l,r=t[l=xe(s)]||t[l=xe(ks(s))];!r&&o&&(r=t[l=xe(Ha(s))]),r&&is(r,n,6,e);const i=t[l+"Once"];if(i){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,is(i,n,6,e)}}function Il(n,s,a=!1){const t=s.emitsCache,e=t.get(n);if(e!==void 0)return e;const o=n.emits;let p={},l=!1;if(!tn(n)){const r=i=>{const u=Il(i,s,!0);u&&(l=!0,Rn(p,u))};!a&&s.mixins.length&&s.mixins.forEach(r),n.extends&&r(n.extends),n.mixins&&n.mixins.forEach(r)}return!o&&!l?(Sn(n)&&t.set(n,null),null):(nn(o)?o.forEach(r=>p[r]=null):Rn(p,o),Sn(n)&&t.set(n,p),p)}function de(n,s){return!n||!bt(s)?!1:(s=s.slice(2).replace(/Once$/,""),kn(n,s[0].toLowerCase()+s.slice(1))||kn(n,Ha(s))||kn(n,s))}let rs=null,Tl=null;function ee(n){const s=rs;return rs=n,Tl=n&&n.type.__scopeId||null,s}function dk(n,s=rs,a){if(!s||n._n)return n;const t=(...e)=>{t._d&&Xp(-1);const o=ee(s);let p;try{p=n(...e)}finally{ee(o),t._d&&Xp(1)}return p};return t._n=!0,t._c=!0,t._d=!0,t}function Te(n){const{type:s,vnode:a,proxy:t,withProxy:e,props:o,propsOptions:[p],slots:l,attrs:r,emit:i,render:u,renderCache:k,data:d,setupState:h,ctx:v,inheritAttrs:w}=n;let E,b;const L=ee(n);try{if(a.shapeFlag&4){const x=e||t,j=x;E=gs(u.call(j,x,k,o,h,d,v)),b=r}else{const x=s;E=gs(x.length>1?x(o,{attrs:r,slots:l,emit:i}):x(o,null)),b=s.props?r:mk(r)}}catch(x){tt.length=0,Et(x,n,1),E=Mn(Ls)}let y=E;if(b&&w!==!1){const x=Object.keys(b),{shapeFlag:j}=y;x.length&&j&7&&(p&&x.some(xo)&&(b=hk(b,p)),y=Xs(y,b))}return a.dirs&&(y=Xs(y),y.dirs=y.dirs?y.dirs.concat(a.dirs):a.dirs),a.transition&&(y.transition=a.transition),E=y,ee(L),E}const mk=n=>{let s;for(const a in n)(a==="class"||a==="style"||bt(a))&&((s||(s={}))[a]=n[a]);return s},hk=(n,s)=>{const a={};for(const t in n)(!xo(t)||!(t.slice(9)in s))&&(a[t]=n[t]);return a};function fk(n,s,a){const{props:t,children:e,component:o}=n,{props:p,children:l,patchFlag:r}=s,i=o.emitsOptions;if(s.dirs||s.transition)return!0;if(a&&r>=0){if(r&1024)return!0;if(r&16)return t?Fp(t,p,i):!!p;if(r&8){const u=s.dynamicProps;for(let k=0;k<u.length;k++){const d=u[k];if(p[d]!==t[d]&&!de(i,d))return!0}}}else return(e||l)&&(!l||!l.$stable)?!0:t===p?!1:t?p?Fp(t,p,i):!0:!!p;return!1}function Fp(n,s,a){const t=Object.keys(s);if(t.length!==Object.keys(n).length)return!0;for(let e=0;e<t.length;e++){const o=t[e];if(s[o]!==n[o]&&!de(a,o))return!0}return!1}function gk({vnode:n,parent:s},a){for(;s;){const t=s.subTree;if(t.suspense&&t.suspense.activeBranch===n&&(t.el=n.el),t===n)(n=s.vnode).el=a,s=s.parent;else break}}const Ol="components";function ts(n,s){return yk(Ol,n,!0,s)||n}const vk=Symbol.for("v-ndc");function yk(n,s,a=!0,t=!1){const e=rs||Hn;if(e){const o=e.type;if(n===Ol){const l=dd(o,!1);if(l&&(l===s||l===ks(s)||l===_t(ks(s))))return o}const p=zp(e[n]||o[n],s)||zp(e.appContext[n],s);return!p&&t?o:p}}function zp(n,s){return n&&(n[s]||n[ks(s)]||n[_t(ks(s))])}const bk=n=>n.__isSuspense;function Pl(n,s){s&&s.pendingBranch?nn(n)?s.effects.push(...n):s.effects.push(n):ik(n)}const _k=Symbol.for("v-scx"),wk=()=>yn(_k);function Bl(n,s){return Fo(n,null,s)}const Ft={};function en(n,s,a){return Fo(n,s,a)}function Fo(n,s,{immediate:a,deep:t,flush:e,once:o,onTrack:p,onTrigger:l}=xn){if(s&&o){const A=s;s=(...J)=>{A(...J),j()}}const r=Hn,i=A=>t===!0?A:wa(A,t===!1?1:void 0);let u,k=!1,d=!1;if(Vn(n)?(u=()=>n.value,k=ae(n)):xa(n)?(u=()=>i(n),k=!0):nn(n)?(d=!0,k=n.some(A=>xa(A)||ae(A)),u=()=>n.map(A=>{if(Vn(A))return A.value;if(xa(A))return i(A);if(tn(A))return Ys(A,r,2)})):tn(n)?s?u=()=>Ys(n,r,2):u=()=>(h&&h(),is(n,r,3,[v])):u=ls,s&&t){const A=u;u=()=>wa(A())}let h,v=A=>{h=y.onStop=()=>{Ys(A,r,4),h=y.onStop=void 0}},w;if(Lt)if(v=ls,s?a&&is(s,r,3,[u(),d?[]:void 0,v]):u(),e==="sync"){const A=wk();w=A.__watcherHandles||(A.__watcherHandles=[])}else return ls;let E=d?new Array(n.length).fill(Ft):Ft;const b=()=>{if(!(!y.active||!y.dirty))if(s){const A=y.run();(t||k||(d?A.some((J,V)=>Zs(J,E[V])):Zs(A,E)))&&(h&&h(),is(s,r,3,[A,E===Ft?void 0:d&&E[0]===Ft?[]:E,v]),E=A)}else y.run()};b.allowRecurse=!!s;let L;e==="sync"?L=b:e==="post"?L=()=>Wn(b,r&&r.suspense):(b.pre=!0,r&&(b.id=r.uid),L=()=>ke(b));const y=new Po(u,ls,L),x=ll(),j=()=>{y.stop(),x&&Co(x.effects,y)};return s?a?b():E=y.run():e==="post"?Wn(y.run.bind(y),r&&r.suspense):y.run(),w&&w.push(j),j}function Ek(n,s,a){const t=this.proxy,e=jn(n)?n.includes(".")?Dl(t,n):()=>t[n]:n.bind(t,t);let o;tn(s)?o=s:(o=s.handler,a=s);const p=At(this),l=Fo(e,o.bind(t),a);return p(),l}function Dl(n,s){const a=s.split(".");return()=>{let t=n;for(let e=0;e<a.length&&t;e++)t=t[a[e]];return t}}function wa(n,s,a=0,t){if(!Sn(n)||n.__v_skip)return n;if(s&&s>0){if(a>=s)return n;a++}if(t=t||new Set,t.has(n))return n;if(t.add(n),Vn(n))wa(n.value,s,a,t);else if(nn(n))for(let e=0;e<n.length;e++)wa(n[e],s,a,t);else if(sl(n)||Aa(n))n.forEach(e=>{wa(e,s,a,t)});else if(el(n))for(const e in n)wa(n[e],s,a,t);return n}function Ss(n,s,a,t){const e=n.dirs,o=s&&s.dirs;for(let p=0;p<e.length;p++){const l=e[p];o&&(l.oldValue=o[p].value);let r=l.dir[t];r&&(ha(),is(r,a,8,[n.el,l,n,s]),fa())}}const Js=Symbol("_leaveCb"),zt=Symbol("_enterCb");function Rl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mn(()=>{n.isMounted=!0}),Hl(()=>{n.isUnmounting=!0}),n}const os=[Function,Array],Ml={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:os,onEnter:os,onAfterEnter:os,onEnterCancelled:os,onBeforeLeave:os,onLeave:os,onAfterLeave:os,onLeaveCancelled:os,onBeforeAppear:os,onAppear:os,onAfterAppear:os,onAppearCancelled:os},Sk={name:"BaseTransition",props:Ml,setup(n,{slots:s}){const a=za(),t=Rl();return()=>{const e=s.default&&zo(s.default(),!0);if(!e||!e.length)return;let o=e[0];if(e.length>1){for(const d of e)if(d.type!==Ls){o=d;break}}const p=ln(n),{mode:l}=p;if(t.isLeaving)return Oe(o);const r=Gp(o);if(!r)return Oe(o);const i=it(r,p,t,a);ut(r,i);const u=a.subTree,k=u&&Gp(u);if(k&&k.type!==Ls&&!ra(r,k)){const d=it(k,p,t,a);if(ut(k,d),l==="out-in")return t.isLeaving=!0,d.afterLeave=()=>{t.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},Oe(o);l==="in-out"&&r.type!==Ls&&(d.delayLeave=(h,v,w)=>{const E=jl(t,k);E[String(k.key)]=k,h[Js]=()=>{v(),h[Js]=void 0,delete i.delayedLeave},i.delayedLeave=w})}return o}}},Ak=Sk;function jl(n,s){const{leavingVNodes:a}=n;let t=a.get(s.type);return t||(t=Object.create(null),a.set(s.type,t)),t}function it(n,s,a,t){const{appear:e,mode:o,persisted:p=!1,onBeforeEnter:l,onEnter:r,onAfterEnter:i,onEnterCancelled:u,onBeforeLeave:k,onLeave:d,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:w,onAppear:E,onAfterAppear:b,onAppearCancelled:L}=s,y=String(n.key),x=jl(a,n),j=(V,Q)=>{V&&is(V,t,9,Q)},A=(V,Q)=>{const P=Q[1];j(V,Q),nn(V)?V.every(G=>G.length<=1)&&P():V.length<=1&&P()},J={mode:o,persisted:p,beforeEnter(V){let Q=l;if(!a.isMounted)if(e)Q=w||l;else return;V[Js]&&V[Js](!0);const P=x[y];P&&ra(n,P)&&P.el[Js]&&P.el[Js](),j(Q,[V])},enter(V){let Q=r,P=i,G=u;if(!a.isMounted)if(e)Q=E||r,P=b||i,G=L||u;else return;let B=!1;const X=V[zt]=In=>{B||(B=!0,In?j(G,[V]):j(P,[V]),J.delayedLeave&&J.delayedLeave(),V[zt]=void 0)};Q?A(Q,[V,X]):X()},leave(V,Q){const P=String(n.key);if(V[zt]&&V[zt](!0),a.isUnmounting)return Q();j(k,[V]);let G=!1;const B=V[Js]=X=>{G||(G=!0,Q(),X?j(v,[V]):j(h,[V]),V[Js]=void 0,x[P]===n&&delete x[P])};x[P]=n,d?A(d,[V,B]):B()},clone(V){return it(V,s,a,t)}};return J}function Oe(n){if(St(n))return n=Xs(n),n.children=null,n}function Gp(n){return St(n)?n.children?n.children[0]:void 0:n}function ut(n,s){n.shapeFlag&6&&n.component?ut(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function zo(n,s=!1,a){let t=[],e=0;for(let o=0;o<n.length;o++){let p=n[o];const l=a==null?p.key:String(a)+String(p.key!=null?p.key:o);p.type===ns?(p.patchFlag&128&&e++,t=t.concat(zo(p.children,s,l))):(s||p.type!==Ls)&&t.push(l!=null?Xs(p,{key:l}):p)}if(e>1)for(let o=0;o<t.length;o++)t[o].patchFlag=-2;return t}/*! #__NO_SIDE_EFFECTS__ */function M(n,s){return tn(n)?Rn({name:n.name},s,{setup:n}):n}const Xa=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Vl(n){tn(n)&&(n={loader:n});const{loader:s,loadingComponent:a,errorComponent:t,delay:e=200,timeout:o,suspensible:p=!0,onError:l}=n;let r=null,i,u=0;const k=()=>(u++,r=null,d()),d=()=>{let h;return r||(h=r=s().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((w,E)=>{l(v,()=>w(k()),()=>E(v),u+1)});throw v}).then(v=>h!==r&&r?r:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),i=v,v)))};return M({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return i},setup(){const h=Hn;if(i)return()=>Pe(i,h);const v=L=>{r=null,Et(L,h,13,!t)};if(p&&h.suspense||Lt)return d().then(L=>()=>Pe(L,h)).catch(L=>(v(L),()=>t?Mn(t,{error:L}):null));const w=U(!1),E=U(),b=U(!!e);return e&&setTimeout(()=>{b.value=!1},e),o!=null&&setTimeout(()=>{if(!w.value&&!E.value){const L=new Error(`Async component timed out after ${o}ms.`);v(L),E.value=L}},o),d().then(()=>{w.value=!0,h.parent&&St(h.parent.vnode)&&(h.parent.effect.dirty=!0,ke(h.parent.update))}).catch(L=>{v(L),E.value=L}),()=>{if(w.value&&i)return Pe(i,h);if(E.value&&t)return Mn(t,{error:E.value});if(a&&!b.value)return Mn(a)}}})}function Pe(n,s){const{ref:a,props:t,children:e,ce:o}=s.vnode,p=Mn(n,t,e);return p.ref=a,p.ce=o,delete s.vnode.ce,p}const St=n=>n.type.__isKeepAlive;function Lk(n,s){Nl(n,"a",s)}function xk(n,s){Nl(n,"da",s)}function Nl(n,s,a=Hn){const t=n.__wdc||(n.__wdc=()=>{let e=a;for(;e;){if(e.isDeactivated)return;e=e.parent}return n()});if(me(s,t,a),a){let e=a.parent;for(;e&&e.parent;)St(e.parent.vnode)&&Ck(t,s,a,e),e=e.parent}}function Ck(n,s,a,t){const e=me(s,n,t,!0);ga(()=>{Co(t[s],e)},a)}function me(n,s,a=Hn,t=!1){if(a){const e=a[n]||(a[n]=[]),o=s.__weh||(s.__weh=(...p)=>{if(a.isUnmounted)return;ha();const l=At(a),r=is(s,a,n,p);return l(),fa(),r});return t?e.unshift(o):e.push(o),o}}const Ms=n=>(s,a=Hn)=>(!Lt||n==="sp")&&me(n,(...t)=>s(...t),a),Ik=Ms("bm"),mn=Ms("m"),Tk=Ms("bu"),$l=Ms("u"),Hl=Ms("bum"),ga=Ms("um"),Ok=Ms("sp"),Pk=Ms("rtg"),Bk=Ms("rtc");function Dk(n,s=Hn){me("ec",n,s)}const to=n=>n?sr(n)?Wo(n)||n.proxy:to(n.parent):null,nt=Rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>to(n.parent),$root:n=>to(n.root),$emit:n=>n.emit,$options:n=>Go(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,ke(n.update)}),$nextTick:n=>n.n||(n.n=sa.bind(n.proxy)),$watch:n=>Ek.bind(n)}),Be=(n,s)=>n!==xn&&!n.__isScriptSetup&&kn(n,s),Rk={get({_:n},s){const{ctx:a,setupState:t,data:e,props:o,accessCache:p,type:l,appContext:r}=n;let i;if(s[0]!=="$"){const h=p[s];if(h!==void 0)switch(h){case 1:return t[s];case 2:return e[s];case 4:return a[s];case 3:return o[s]}else{if(Be(t,s))return p[s]=1,t[s];if(e!==xn&&kn(e,s))return p[s]=2,e[s];if((i=n.propsOptions[0])&&kn(i,s))return p[s]=3,o[s];if(a!==xn&&kn(a,s))return p[s]=4,a[s];eo&&(p[s]=0)}}const u=nt[s];let k,d;if(u)return s==="$attrs"&&Un(n,"get",s),u(n);if((k=l.__cssModules)&&(k=k[s]))return k;if(a!==xn&&kn(a,s))return p[s]=4,a[s];if(d=r.config.globalProperties,kn(d,s))return d[s]},set({_:n},s,a){const{data:t,setupState:e,ctx:o}=n;return Be(e,s)?(e[s]=a,!0):t!==xn&&kn(t,s)?(t[s]=a,!0):kn(n.props,s)||s[0]==="$"&&s.slice(1)in n?!1:(o[s]=a,!0)},has({_:{data:n,setupState:s,accessCache:a,ctx:t,appContext:e,propsOptions:o}},p){let l;return!!a[p]||n!==xn&&kn(n,p)||Be(s,p)||(l=o[0])&&kn(l,p)||kn(t,p)||kn(nt,p)||kn(e.config.globalProperties,p)},defineProperty(n,s,a){return a.get!=null?n._.accessCache[s]=0:kn(a,"value")&&this.set(n,s,a.value,null),Reflect.defineProperty(n,s,a)}};function qp(n){return nn(n)?n.reduce((s,a)=>(s[a]=null,s),{}):n}let eo=!0;function Mk(n){const s=Go(n),a=n.proxy,t=n.ctx;eo=!1,s.beforeCreate&&Jp(s.beforeCreate,n,"bc");const{data:e,computed:o,methods:p,watch:l,provide:r,inject:i,created:u,beforeMount:k,mounted:d,beforeUpdate:h,updated:v,activated:w,deactivated:E,beforeDestroy:b,beforeUnmount:L,destroyed:y,unmounted:x,render:j,renderTracked:A,renderTriggered:J,errorCaptured:V,serverPrefetch:Q,expose:P,inheritAttrs:G,components:B,directives:X,filters:In}=s;if(i&&jk(i,t,null),p)for(const sn in p){const W=p[sn];tn(W)&&(t[sn]=W.bind(a))}if(e){const sn=e.call(a,a);Sn(sn)&&(n.data=wt(sn))}if(eo=!0,o)for(const sn in o){const W=o[sn],Bn=tn(W)?W.bind(a,a):tn(W.get)?W.get.bind(a,a):ls,_s=!tn(W)&&tn(W.set)?W.set.bind(a):ls,es=_({get:Bn,set:_s});Object.defineProperty(t,sn,{enumerable:!0,configurable:!0,get:()=>es.value,set:Nn=>es.value=Nn})}if(l)for(const sn in l)Fl(l[sn],t,a,sn);if(r){const sn=tn(r)?r.call(a):r;Reflect.ownKeys(sn).forEach(W=>{us(W,sn[W])})}u&&Jp(u,n,"c");function q(sn,W){nn(W)?W.forEach(Bn=>sn(Bn.bind(a))):W&&sn(W.bind(a))}if(q(Ik,k),q(mn,d),q(Tk,h),q($l,v),q(Lk,w),q(xk,E),q(Dk,V),q(Bk,A),q(Pk,J),q(Hl,L),q(ga,x),q(Ok,Q),nn(P))if(P.length){const sn=n.exposed||(n.exposed={});P.forEach(W=>{Object.defineProperty(sn,W,{get:()=>a[W],set:Bn=>a[W]=Bn})})}else n.exposed||(n.exposed={});j&&n.render===ls&&(n.render=j),G!=null&&(n.inheritAttrs=G),B&&(n.components=B),X&&(n.directives=X)}function jk(n,s,a=ls){nn(n)&&(n=oo(n));for(const t in n){const e=n[t];let o;Sn(e)?"default"in e?o=yn(e.from||t,e.default,!0):o=yn(e.from||t):o=yn(e),Vn(o)?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get:()=>o.value,set:p=>o.value=p}):s[t]=o}}function Jp(n,s,a){is(nn(n)?n.map(t=>t.bind(s.proxy)):n.bind(s.proxy),s,a)}function Fl(n,s,a,t){const e=t.includes(".")?Dl(a,t):()=>a[t];if(jn(n)){const o=s[n];tn(o)&&en(e,o)}else if(tn(n))en(e,n.bind(a));else if(Sn(n))if(nn(n))n.forEach(o=>Fl(o,s,a,t));else{const o=tn(n.handler)?n.handler.bind(a):s[n.handler];tn(o)&&en(e,o,n)}}function Go(n){const s=n.type,{mixins:a,extends:t}=s,{mixins:e,optionsCache:o,config:{optionMergeStrategies:p}}=n.appContext,l=o.get(s);let r;return l?r=l:!e.length&&!a&&!t?r=s:(r={},e.length&&e.forEach(i=>oe(r,i,p,!0)),oe(r,s,p)),Sn(s)&&o.set(s,r),r}function oe(n,s,a,t=!1){const{mixins:e,extends:o}=s;o&&oe(n,o,a,!0),e&&e.forEach(p=>oe(n,p,a,!0));for(const p in s)if(!(t&&p==="expose")){const l=Vk[p]||a&&a[p];n[p]=l?l(n[p],s[p]):s[p]}return n}const Vk={data:Wp,props:Kp,emits:Kp,methods:Qa,computed:Qa,beforeCreate:Gn,created:Gn,beforeMount:Gn,mounted:Gn,beforeUpdate:Gn,updated:Gn,beforeDestroy:Gn,beforeUnmount:Gn,destroyed:Gn,unmounted:Gn,activated:Gn,deactivated:Gn,errorCaptured:Gn,serverPrefetch:Gn,components:Qa,directives:Qa,watch:$k,provide:Wp,inject:Nk};function Wp(n,s){return s?n?function(){return Rn(tn(n)?n.call(this,this):n,tn(s)?s.call(this,this):s)}:s:n}function Nk(n,s){return Qa(oo(n),oo(s))}function oo(n){if(nn(n)){const s={};for(let a=0;a<n.length;a++)s[n[a]]=n[a];return s}return n}function Gn(n,s){return n?[...new Set([].concat(n,s))]:s}function Qa(n,s){return n?Rn(Object.create(null),n,s):s}function Kp(n,s){return n?nn(n)&&nn(s)?[...new Set([...n,...s])]:Rn(Object.create(null),qp(n),qp(s??{})):s}function $k(n,s){if(!n)return s;if(!s)return n;const a=Rn(Object.create(null),n);for(const t in s)a[t]=Gn(n[t],s[t]);return a}function zl(){return{app:null,config:{isNativeTag:vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hk=0;function Fk(n,s){return function(t,e=null){tn(t)||(t=Rn({},t)),e!=null&&!Sn(e)&&(e=null);const o=zl(),p=new WeakSet;let l=!1;const r=o.app={_uid:Hk++,_component:t,_props:e,_container:null,_context:o,_instance:null,version:hd,get config(){return o.config},set config(i){},use(i,...u){return p.has(i)||(i&&tn(i.install)?(p.add(i),i.install(r,...u)):tn(i)&&(p.add(i),i(r,...u))),r},mixin(i){return o.mixins.includes(i)||o.mixins.push(i),r},component(i,u){return u?(o.components[i]=u,r):o.components[i]},directive(i,u){return u?(o.directives[i]=u,r):o.directives[i]},mount(i,u,k){if(!l){const d=Mn(t,e);return d.appContext=o,k===!0?k="svg":k===!1&&(k=void 0),u&&s?s(d,i):n(d,i,k),l=!0,r._container=i,i.__vue_app__=r,Wo(d.component)||d.component.proxy}},unmount(){l&&(n(null,r._container),delete r._container.__vue_app__)},provide(i,u){return o.provides[i]=u,r},runWithContext(i){const u=st;st=r;try{return i()}finally{st=u}}};return r}}let st=null;function us(n,s){if(Hn){let a=Hn.provides;const t=Hn.parent&&Hn.parent.provides;t===a&&(a=Hn.provides=Object.create(t)),a[n]=s}}function yn(n,s,a=!1){const t=Hn||rs;if(t||st){const e=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:st._context.provides;if(e&&n in e)return e[n];if(arguments.length>1)return a&&tn(s)?s.call(t&&t.proxy):s}}function zk(n,s,a,t=!1){const e={},o={};ne(o,he,1),n.propsDefaults=Object.create(null),Gl(n,s,e,o);for(const p in n.propsOptions[0])p in e||(e[p]=void 0);a?n.props=t?e:bl(e):n.type.props?n.props=e:n.props=o,n.attrs=o}function Gk(n,s,a,t){const{props:e,attrs:o,vnode:{patchFlag:p}}=n,l=ln(e),[r]=n.propsOptions;let i=!1;if((t||p>0)&&!(p&16)){if(p&8){const u=n.vnode.dynamicProps;for(let k=0;k<u.length;k++){let d=u[k];if(de(n.emitsOptions,d))continue;const h=s[d];if(r)if(kn(o,d))h!==o[d]&&(o[d]=h,i=!0);else{const v=ks(d);e[v]=po(r,l,v,h,n,!1)}else h!==o[d]&&(o[d]=h,i=!0)}}}else{Gl(n,s,e,o)&&(i=!0);let u;for(const k in l)(!s||!kn(s,k)&&((u=Ha(k))===k||!kn(s,u)))&&(r?a&&(a[k]!==void 0||a[u]!==void 0)&&(e[k]=po(r,l,k,void 0,n,!0)):delete e[k]);if(o!==l)for(const k in o)(!s||!kn(s,k))&&(delete o[k],i=!0)}i&&Bs(n,"set","$attrs")}function Gl(n,s,a,t){const[e,o]=n.propsOptions;let p=!1,l;if(s)for(let r in s){if(La(r))continue;const i=s[r];let u;e&&kn(e,u=ks(r))?!o||!o.includes(u)?a[u]=i:(l||(l={}))[u]=i:de(n.emitsOptions,r)||(!(r in t)||i!==t[r])&&(t[r]=i,p=!0)}if(o){const r=ln(a),i=l||xn;for(let u=0;u<o.length;u++){const k=o[u];a[k]=po(e,r,k,i[k],n,!kn(i,k))}}return p}function po(n,s,a,t,e,o){const p=n[a];if(p!=null){const l=kn(p,"default");if(l&&t===void 0){const r=p.default;if(p.type!==Function&&!p.skipFactory&&tn(r)){const{propsDefaults:i}=e;if(a in i)t=i[a];else{const u=At(e);t=i[a]=r.call(null,s),u()}}else t=r}p[0]&&(o&&!l?t=!1:p[1]&&(t===""||t===Ha(a))&&(t=!0))}return t}function ql(n,s,a=!1){const t=s.propsCache,e=t.get(n);if(e)return e;const o=n.props,p={},l=[];let r=!1;if(!tn(n)){const u=k=>{r=!0;const[d,h]=ql(k,s,!0);Rn(p,d),h&&l.push(...h)};!a&&s.mixins.length&&s.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!r)return Sn(n)&&t.set(n,Sa),Sa;if(nn(o))for(let u=0;u<o.length;u++){const k=ks(o[u]);Up(k)&&(p[k]=xn)}else if(o)for(const u in o){const k=ks(u);if(Up(k)){const d=o[u],h=p[k]=nn(d)||tn(d)?{type:d}:Rn({},d);if(h){const v=Zp(Boolean,h.type),w=Zp(String,h.type);h[0]=v>-1,h[1]=w<0||v<w,(v>-1||kn(h,"default"))&&l.push(k)}}}const i=[p,l];return Sn(n)&&t.set(n,i),i}function Up(n){return n[0]!=="$"&&!La(n)}function Qp(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Yp(n,s){return Qp(n)===Qp(s)}function Zp(n,s){return nn(s)?s.findIndex(a=>Yp(a,n)):tn(s)&&Yp(s,n)?0:-1}const Jl=n=>n[0]==="_"||n==="$stable",qo=n=>nn(n)?n.map(gs):[gs(n)],qk=(n,s,a)=>{if(s._n)return s;const t=dk((...e)=>qo(s(...e)),a);return t._c=!1,t},Wl=(n,s,a)=>{const t=n._ctx;for(const e in n){if(Jl(e))continue;const o=n[e];if(tn(o))s[e]=qk(e,o,t);else if(o!=null){const p=qo(o);s[e]=()=>p}}},Kl=(n,s)=>{const a=qo(s);n.slots.default=()=>a},Jk=(n,s)=>{if(n.vnode.shapeFlag&32){const a=s._;a?(n.slots=ln(s),ne(s,"_",a)):Wl(s,n.slots={})}else n.slots={},s&&Kl(n,s);ne(n.slots,he,1)},Wk=(n,s,a)=>{const{vnode:t,slots:e}=n;let o=!0,p=xn;if(t.shapeFlag&32){const l=s._;l?a&&l===1?o=!1:(Rn(e,s),!a&&l===1&&delete e._):(o=!s.$stable,Wl(s,e)),p=s}else s&&(Kl(n,s),p={default:1});if(o)for(const l in e)!Jl(l)&&p[l]==null&&delete e[l]};function pe(n,s,a,t,e=!1){if(nn(n)){n.forEach((d,h)=>pe(d,s&&(nn(s)?s[h]:s),a,t,e));return}if(Xa(t)&&!e)return;const o=t.shapeFlag&4?Wo(t.component)||t.component.proxy:t.el,p=e?null:o,{i:l,r}=n,i=s&&s.r,u=l.refs===xn?l.refs={}:l.refs,k=l.setupState;if(i!=null&&i!==r&&(jn(i)?(u[i]=null,kn(k,i)&&(k[i]=null)):Vn(i)&&(i.value=null)),tn(r))Ys(r,l,12,[p,u]);else{const d=jn(r),h=Vn(r);if(d||h){const v=()=>{if(n.f){const w=d?kn(k,r)?k[r]:u[r]:r.value;e?nn(w)&&Co(w,o):nn(w)?w.includes(o)||w.push(o):d?(u[r]=[o],kn(k,r)&&(k[r]=u[r])):(r.value=[o],n.k&&(u[n.k]=r.value))}else d?(u[r]=p,kn(k,r)&&(k[r]=p)):h&&(r.value=p,n.k&&(u[n.k]=p))};p?(v.id=-1,Wn(v,a)):v()}}}let Hs=!1;const Kk=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Uk=n=>n.namespaceURI.includes("MathML"),Gt=n=>{if(Kk(n))return"svg";if(Uk(n))return"mathml"},qt=n=>n.nodeType===8;function Qk(n){const{mt:s,p:a,o:{patchProp:t,createText:e,nextSibling:o,parentNode:p,remove:l,insert:r,createComment:i}}=n,u=(y,x)=>{if(!x.hasChildNodes()){a(null,y,x),te(),x._vnode=y;return}Hs=!1,k(x.firstChild,y,null,null,null),te(),x._vnode=y,Hs&&console.error("Hydration completed but contains mismatches.")},k=(y,x,j,A,J,V=!1)=>{const Q=qt(y)&&y.data==="[",P=()=>w(y,x,j,A,J,Q),{type:G,ref:B,shapeFlag:X,patchFlag:In}=x;let An=y.nodeType;x.el=y,In===-2&&(V=!1,x.dynamicChildren=null);let q=null;switch(G){case Da:An!==3?x.children===""?(r(x.el=e(""),p(y),y),q=y):q=P():(y.data!==x.children&&(Hs=!0,y.data=x.children),q=o(y));break;case Ls:L(y)?(q=o(y),b(x.el=y.content.firstChild,y,j)):An!==8||Q?q=P():q=o(y);break;case at:if(Q&&(y=o(y),An=y.nodeType),An===1||An===3){q=y;const sn=!x.children.length;for(let W=0;W<x.staticCount;W++)sn&&(x.children+=q.nodeType===1?q.outerHTML:q.data),W===x.staticCount-1&&(x.anchor=q),q=o(q);return Q?o(q):q}else P();break;case ns:Q?q=v(y,x,j,A,J,V):q=P();break;default:if(X&1)(An!==1||x.type.toLowerCase()!==y.tagName.toLowerCase())&&!L(y)?q=P():q=d(y,x,j,A,J,V);else if(X&6){x.slotScopeIds=J;const sn=p(y);if(Q?q=E(y):qt(y)&&y.data==="teleport start"?q=E(y,y.data,"teleport end"):q=o(y),s(x,sn,null,j,A,Gt(sn),V),Xa(x)){let W;Q?(W=Mn(ns),W.anchor=q?q.previousSibling:sn.lastChild):W=y.nodeType===3?nr(""):Mn("div"),W.el=y,x.component.subTree=W}}else X&64?An!==8?q=P():q=x.type.hydrate(y,x,j,A,J,V,n,h):X&128&&(q=x.type.hydrate(y,x,j,A,Gt(p(y)),J,V,n,k))}return B!=null&&pe(B,null,A,x),q},d=(y,x,j,A,J,V)=>{V=V||!!x.dynamicChildren;const{type:Q,props:P,patchFlag:G,shapeFlag:B,dirs:X,transition:In}=x,An=Q==="input"||Q==="option";if(An||G!==-1){X&&Ss(x,null,j,"created");let q=!1;if(L(y)){q=Ul(A,In)&&j&&j.vnode.props&&j.vnode.props.appear;const W=y.content.firstChild;q&&In.beforeEnter(W),b(W,y,j),x.el=y=W}if(B&16&&!(P&&(P.innerHTML||P.textContent))){let W=h(y.firstChild,x,y,j,A,J,V);for(;W;){Hs=!0;const Bn=W;W=W.nextSibling,l(Bn)}}else B&8&&y.textContent!==x.children&&(Hs=!0,y.textContent=x.children);if(P)if(An||!V||G&48)for(const W in P)(An&&(W.endsWith("value")||W==="indeterminate")||bt(W)&&!La(W)||W[0]===".")&&t(y,W,null,P[W],void 0,void 0,j);else P.onClick&&t(y,"onClick",null,P.onClick,void 0,void 0,j);let sn;(sn=P&&P.onVnodeBeforeMount)&&ps(sn,j,x),X&&Ss(x,null,j,"beforeMount"),((sn=P&&P.onVnodeMounted)||X||q)&&Pl(()=>{sn&&ps(sn,j,x),q&&In.enter(y),X&&Ss(x,null,j,"mounted")},A)}return y.nextSibling},h=(y,x,j,A,J,V,Q)=>{Q=Q||!!x.dynamicChildren;const P=x.children,G=P.length;for(let B=0;B<G;B++){const X=Q?P[B]:P[B]=gs(P[B]);if(y)y=k(y,X,A,J,V,Q);else{if(X.type===Da&&!X.children)continue;Hs=!0,a(null,X,j,null,A,J,Gt(j),V)}}return y},v=(y,x,j,A,J,V)=>{const{slotScopeIds:Q}=x;Q&&(J=J?J.concat(Q):Q);const P=p(y),G=h(o(y),x,P,j,A,J,V);return G&&qt(G)&&G.data==="]"?o(x.anchor=G):(Hs=!0,r(x.anchor=i("]"),P,G),G)},w=(y,x,j,A,J,V)=>{if(Hs=!0,x.el=null,V){const G=E(y);for(;;){const B=o(y);if(B&&B!==G)l(B);else break}}const Q=o(y),P=p(y);return l(y),a(null,x,P,Q,j,A,Gt(P),J),Q},E=(y,x="[",j="]")=>{let A=0;for(;y;)if(y=o(y),y&&qt(y)&&(y.data===x&&A++,y.data===j)){if(A===0)return o(y);A--}return y},b=(y,x,j)=>{const A=x.parentNode;A&&A.replaceChild(y,x);let J=j;for(;J;)J.vnode.el===x&&(J.vnode.el=J.subTree.el=y),J=J.parent},L=y=>y.nodeType===1&&y.tagName.toLowerCase()==="template";return[u,k]}const Wn=Pl;function Yk(n){return Zk(n,Qk)}function Zk(n,s){const a=ol();a.__VUE__=!0;const{insert:t,remove:e,patchProp:o,createElement:p,createText:l,createComment:r,setText:i,setElementText:u,parentNode:k,nextSibling:d,setScopeId:h=ls,insertStaticContent:v}=n,w=(f,g,S,T=null,I=null,R=null,H=void 0,D=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!ra(f,g)&&(T=C(f),Nn(f,I,R,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:O,ref:z,shapeFlag:Z}=g;switch(O){case Da:E(f,g,S,T);break;case Ls:b(f,g,S,T);break;case at:f==null&&L(g,S,T,H);break;case ns:B(f,g,S,T,I,R,H,D,N);break;default:Z&1?j(f,g,S,T,I,R,H,D,N):Z&6?X(f,g,S,T,I,R,H,D,N):(Z&64||Z&128)&&O.process(f,g,S,T,I,R,H,D,N,K)}z!=null&&I&&pe(z,f&&f.ref,R,g||f,!g)},E=(f,g,S,T)=>{if(f==null)t(g.el=l(g.children),S,T);else{const I=g.el=f.el;g.children!==f.children&&i(I,g.children)}},b=(f,g,S,T)=>{f==null?t(g.el=r(g.children||""),S,T):g.el=f.el},L=(f,g,S,T)=>{[f.el,f.anchor]=v(f.children,g,S,T,f.el,f.anchor)},y=({el:f,anchor:g},S,T)=>{let I;for(;f&&f!==g;)I=d(f),t(f,S,T),f=I;t(g,S,T)},x=({el:f,anchor:g})=>{let S;for(;f&&f!==g;)S=d(f),e(f),f=S;e(g)},j=(f,g,S,T,I,R,H,D,N)=>{g.type==="svg"?H="svg":g.type==="math"&&(H="mathml"),f==null?A(g,S,T,I,R,H,D,N):Q(f,g,I,R,H,D,N)},A=(f,g,S,T,I,R,H,D)=>{let N,O;const{props:z,shapeFlag:Z,transition:Y,dirs:an}=f;if(N=f.el=p(f.type,R,z&&z.is,z),Z&8?u(N,f.children):Z&16&&V(f.children,N,null,T,I,De(f,R),H,D),an&&Ss(f,null,T,"created"),J(N,f,f.scopeId,H,T),z){for(const gn in z)gn!=="value"&&!La(gn)&&o(N,gn,null,z[gn],R,f.children,T,I,Dn);"value"in z&&o(N,"value",null,z.value,R),(O=z.onVnodeBeforeMount)&&ps(O,T,f)}an&&Ss(f,null,T,"beforeMount");const pn=Ul(I,Y);pn&&Y.beforeEnter(N),t(N,g,S),((O=z&&z.onVnodeMounted)||pn||an)&&Wn(()=>{O&&ps(O,T,f),pn&&Y.enter(N),an&&Ss(f,null,T,"mounted")},I)},J=(f,g,S,T,I)=>{if(S&&h(f,S),T)for(let R=0;R<T.length;R++)h(f,T[R]);if(I){let R=I.subTree;if(g===R){const H=I.vnode;J(f,H,H.scopeId,H.slotScopeIds,I.parent)}}},V=(f,g,S,T,I,R,H,D,N=0)=>{for(let O=N;O<f.length;O++){const z=f[O]=D?Ws(f[O]):gs(f[O]);w(null,z,g,S,T,I,R,H,D)}},Q=(f,g,S,T,I,R,H)=>{const D=g.el=f.el;let{patchFlag:N,dynamicChildren:O,dirs:z}=g;N|=f.patchFlag&16;const Z=f.props||xn,Y=g.props||xn;let an;if(S&&oa(S,!1),(an=Y.onVnodeBeforeUpdate)&&ps(an,S,g,f),z&&Ss(g,f,S,"beforeUpdate"),S&&oa(S,!0),O?P(f.dynamicChildren,O,D,S,T,De(g,I),R):H||W(f,g,D,null,S,T,De(g,I),R,!1),N>0){if(N&16)G(D,g,Z,Y,S,T,I);else if(N&2&&Z.class!==Y.class&&o(D,"class",null,Y.class,I),N&4&&o(D,"style",Z.style,Y.style,I),N&8){const pn=g.dynamicProps;for(let gn=0;gn<pn.length;gn++){const Ln=pn[gn],$n=Z[Ln],hs=Y[Ln];(hs!==$n||Ln==="value")&&o(D,Ln,$n,hs,I,f.children,S,T,Dn)}}N&1&&f.children!==g.children&&u(D,g.children)}else!H&&O==null&&G(D,g,Z,Y,S,T,I);((an=Y.onVnodeUpdated)||z)&&Wn(()=>{an&&ps(an,S,g,f),z&&Ss(g,f,S,"updated")},T)},P=(f,g,S,T,I,R,H)=>{for(let D=0;D<g.length;D++){const N=f[D],O=g[D],z=N.el&&(N.type===ns||!ra(N,O)||N.shapeFlag&70)?k(N.el):S;w(N,O,z,null,T,I,R,H,!0)}},G=(f,g,S,T,I,R,H)=>{if(S!==T){if(S!==xn)for(const D in S)!La(D)&&!(D in T)&&o(f,D,S[D],null,H,g.children,I,R,Dn);for(const D in T){if(La(D))continue;const N=T[D],O=S[D];N!==O&&D!=="value"&&o(f,D,O,N,H,g.children,I,R,Dn)}"value"in T&&o(f,"value",S.value,T.value,H)}},B=(f,g,S,T,I,R,H,D,N)=>{const O=g.el=f?f.el:l(""),z=g.anchor=f?f.anchor:l("");let{patchFlag:Z,dynamicChildren:Y,slotScopeIds:an}=g;an&&(D=D?D.concat(an):an),f==null?(t(O,S,T),t(z,S,T),V(g.children||[],S,z,I,R,H,D,N)):Z>0&&Z&64&&Y&&f.dynamicChildren?(P(f.dynamicChildren,Y,S,I,R,H,D),(g.key!=null||I&&g===I.subTree)&&Ql(f,g,!0)):W(f,g,S,z,I,R,H,D,N)},X=(f,g,S,T,I,R,H,D,N)=>{g.slotScopeIds=D,f==null?g.shapeFlag&512?I.ctx.activate(g,S,T,H,N):In(g,S,T,I,R,H,N):An(f,g,N)},In=(f,g,S,T,I,R,H)=>{const D=f.component=ld(f,T,I);if(St(f)&&(D.ctx.renderer=K),rd(D),D.asyncDep){if(I&&I.registerDep(D,q),!f.el){const N=D.subTree=Mn(Ls);b(null,N,g,S)}}else q(D,f,g,S,I,R,H)},An=(f,g,S)=>{const T=g.component=f.component;if(fk(f,g,S))if(T.asyncDep&&!T.asyncResolved){sn(T,g,S);return}else T.next=g,rk(T.update),T.effect.dirty=!0,T.update();else g.el=f.el,T.vnode=g},q=(f,g,S,T,I,R,H)=>{const D=()=>{if(f.isMounted){let{next:z,bu:Z,u:Y,parent:an,vnode:pn}=f;{const ba=Yl(f);if(ba){z&&(z.el=pn.el,sn(f,z,H)),ba.asyncDep.then(()=>{f.isUnmounted||D()});return}}let gn=z,Ln;oa(f,!1),z?(z.el=pn.el,sn(f,z,H)):z=pn,Z&&Ce(Z),(Ln=z.props&&z.props.onVnodeBeforeUpdate)&&ps(Ln,an,z,pn),oa(f,!0);const $n=Te(f),hs=f.subTree;f.subTree=$n,w(hs,$n,k(hs.el),C(hs),f,I,R),z.el=$n.el,gn===null&&gk(f,$n.el),Y&&Wn(Y,I),(Ln=z.props&&z.props.onVnodeUpdated)&&Wn(()=>ps(Ln,an,z,pn),I)}else{let z;const{el:Z,props:Y}=g,{bm:an,m:pn,parent:gn}=f,Ln=Xa(g);if(oa(f,!1),an&&Ce(an),!Ln&&(z=Y&&Y.onVnodeBeforeMount)&&ps(z,gn,g),oa(f,!0),Z&&_n){const $n=()=>{f.subTree=Te(f),_n(Z,f.subTree,f,I,null)};Ln?g.type.__asyncLoader().then(()=>!f.isUnmounted&&$n()):$n()}else{const $n=f.subTree=Te(f);w(null,$n,S,T,f,I,R),g.el=$n.el}if(pn&&Wn(pn,I),!Ln&&(z=Y&&Y.onVnodeMounted)){const $n=g;Wn(()=>ps(z,gn,$n),I)}(g.shapeFlag&256||gn&&Xa(gn.vnode)&&gn.vnode.shapeFlag&256)&&f.a&&Wn(f.a,I),f.isMounted=!0,g=S=T=null}},N=f.effect=new Po(D,ls,()=>ke(O),f.scope),O=f.update=()=>{N.dirty&&N.run()};O.id=f.uid,oa(f,!0),O()},sn=(f,g,S)=>{g.component=f;const T=f.vnode.props;f.vnode=g,f.next=null,Gk(f,g.props,T,S),Wk(f,g.children,S),ha(),Hp(f),fa()},W=(f,g,S,T,I,R,H,D,N=!1)=>{const O=f&&f.children,z=f?f.shapeFlag:0,Z=g.children,{patchFlag:Y,shapeFlag:an}=g;if(Y>0){if(Y&128){_s(O,Z,S,T,I,R,H,D,N);return}else if(Y&256){Bn(O,Z,S,T,I,R,H,D,N);return}}an&8?(z&16&&Dn(O,I,R),Z!==O&&u(S,Z)):z&16?an&16?_s(O,Z,S,T,I,R,H,D,N):Dn(O,I,R,!0):(z&8&&u(S,""),an&16&&V(Z,S,T,I,R,H,D,N))},Bn=(f,g,S,T,I,R,H,D,N)=>{f=f||Sa,g=g||Sa;const O=f.length,z=g.length,Z=Math.min(O,z);let Y;for(Y=0;Y<Z;Y++){const an=g[Y]=N?Ws(g[Y]):gs(g[Y]);w(f[Y],an,S,null,I,R,H,D,N)}O>z?Dn(f,I,R,!0,!1,Z):V(g,S,T,I,R,H,D,N,Z)},_s=(f,g,S,T,I,R,H,D,N)=>{let O=0;const z=g.length;let Z=f.length-1,Y=z-1;for(;O<=Z&&O<=Y;){const an=f[O],pn=g[O]=N?Ws(g[O]):gs(g[O]);if(ra(an,pn))w(an,pn,S,null,I,R,H,D,N);else break;O++}for(;O<=Z&&O<=Y;){const an=f[Z],pn=g[Y]=N?Ws(g[Y]):gs(g[Y]);if(ra(an,pn))w(an,pn,S,null,I,R,H,D,N);else break;Z--,Y--}if(O>Z){if(O<=Y){const an=Y+1,pn=an<z?g[an].el:T;for(;O<=Y;)w(null,g[O]=N?Ws(g[O]):gs(g[O]),S,pn,I,R,H,D,N),O++}}else if(O>Y)for(;O<=Z;)Nn(f[O],I,R,!0),O++;else{const an=O,pn=O,gn=new Map;for(O=pn;O<=Y;O++){const Zn=g[O]=N?Ws(g[O]):gs(g[O]);Zn.key!=null&&gn.set(Zn.key,O)}let Ln,$n=0;const hs=Y-pn+1;let ba=!1,Tp=0;const Ja=new Array(hs);for(O=0;O<hs;O++)Ja[O]=0;for(O=an;O<=Z;O++){const Zn=f[O];if($n>=hs){Nn(Zn,I,R,!0);continue}let Es;if(Zn.key!=null)Es=gn.get(Zn.key);else for(Ln=pn;Ln<=Y;Ln++)if(Ja[Ln-pn]===0&&ra(Zn,g[Ln])){Es=Ln;break}Es===void 0?Nn(Zn,I,R,!0):(Ja[Es-pn]=O+1,Es>=Tp?Tp=Es:ba=!0,w(Zn,g[Es],S,null,I,R,H,D,N),$n++)}const Op=ba?Xk(Ja):Sa;for(Ln=Op.length-1,O=hs-1;O>=0;O--){const Zn=pn+O,Es=g[Zn],Pp=Zn+1<z?g[Zn+1].el:T;Ja[O]===0?w(null,Es,S,Pp,I,R,H,D,N):ba&&(Ln<0||O!==Op[Ln]?es(Es,S,Pp,2):Ln--)}}},es=(f,g,S,T,I=null)=>{const{el:R,type:H,transition:D,children:N,shapeFlag:O}=f;if(O&6){es(f.component.subTree,g,S,T);return}if(O&128){f.suspense.move(g,S,T);return}if(O&64){H.move(f,g,S,K);return}if(H===ns){t(R,g,S);for(let Z=0;Z<N.length;Z++)es(N[Z],g,S,T);t(f.anchor,g,S);return}if(H===at){y(f,g,S);return}if(T!==2&&O&1&&D)if(T===0)D.beforeEnter(R),t(R,g,S),Wn(()=>D.enter(R),I);else{const{leave:Z,delayLeave:Y,afterLeave:an}=D,pn=()=>t(R,g,S),gn=()=>{Z(R,()=>{pn(),an&&an()})};Y?Y(R,pn,gn):gn()}else t(R,g,S)},Nn=(f,g,S,T=!1,I=!1)=>{const{type:R,props:H,ref:D,children:N,dynamicChildren:O,shapeFlag:z,patchFlag:Z,dirs:Y}=f;if(D!=null&&pe(D,null,S,f,!0),z&256){g.ctx.deactivate(f);return}const an=z&1&&Y,pn=!Xa(f);let gn;if(pn&&(gn=H&&H.onVnodeBeforeUnmount)&&ps(gn,g,f),z&6)ws(f.component,S,T);else{if(z&128){f.suspense.unmount(S,T);return}an&&Ss(f,null,g,"beforeUnmount"),z&64?f.type.remove(f,g,S,I,K,T):O&&(R!==ns||Z>0&&Z&64)?Dn(O,g,S,!1,!0):(R===ns&&Z&384||!I&&z&16)&&Dn(N,g,S),T&&Yn(f)}(pn&&(gn=H&&H.onVnodeUnmounted)||an)&&Wn(()=>{gn&&ps(gn,g,f),an&&Ss(f,null,g,"unmounted")},S)},Yn=f=>{const{type:g,el:S,anchor:T,transition:I}=f;if(g===ns){Is(S,T);return}if(g===at){x(f);return}const R=()=>{e(S),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:H,delayLeave:D}=I,N=()=>H(S,R);D?D(f.el,R,N):N()}else R()},Is=(f,g)=>{let S;for(;f!==g;)S=d(f),e(f),f=S;e(g)},ws=(f,g,S)=>{const{bum:T,scope:I,update:R,subTree:H,um:D}=f;T&&Ce(T),I.stop(),R&&(R.active=!1,Nn(H,f,g,S)),D&&Wn(D,g),Wn(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Dn=(f,g,S,T=!1,I=!1,R=0)=>{for(let H=R;H<f.length;H++)Nn(f[H],g,S,T,I)},C=f=>f.shapeFlag&6?C(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let F=!1;const $=(f,g,S)=>{f==null?g._vnode&&Nn(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,S),F||(F=!0,Hp(),te(),F=!1),g._vnode=f},K={p:w,um:Nn,m:es,r:Yn,mt:In,mc:V,pc:W,pbc:P,n:C,o:n};let rn,_n;return s&&([rn,_n]=s(K)),{render:$,hydrate:rn,createApp:Fk($,rn)}}function De({type:n,props:s},a){return a==="svg"&&n==="foreignObject"||a==="mathml"&&n==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:a}function oa({effect:n,update:s},a){n.allowRecurse=s.allowRecurse=a}function Ul(n,s){return(!n||n&&!n.pendingBranch)&&s&&!s.persisted}function Ql(n,s,a=!1){const t=n.children,e=s.children;if(nn(t)&&nn(e))for(let o=0;o<t.length;o++){const p=t[o];let l=e[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=e[o]=Ws(e[o]),l.el=p.el),a||Ql(p,l)),l.type===Da&&(l.el=p.el)}}function Xk(n){const s=n.slice(),a=[0];let t,e,o,p,l;const r=n.length;for(t=0;t<r;t++){const i=n[t];if(i!==0){if(e=a[a.length-1],n[e]<i){s[t]=e,a.push(t);continue}for(o=0,p=a.length-1;o<p;)l=o+p>>1,n[a[l]]<i?o=l+1:p=l;i<n[a[o]]&&(o>0&&(s[t]=a[o-1]),a[o]=t)}}for(o=a.length,p=a[o-1];o-- >0;)a[o]=p,p=s[p];return a}function Yl(n){const s=n.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:Yl(s)}const nd=n=>n.__isTeleport,ns=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),Ls=Symbol.for("v-cmt"),at=Symbol.for("v-stc"),tt=[];let vs=null;function Vg(n=!1){tt.push(vs=n?null:[])}function sd(){tt.pop(),vs=tt[tt.length-1]||null}let kt=1;function Xp(n){kt+=n}function ad(n){return n.dynamicChildren=kt>0?vs||Sa:null,sd(),kt>0&&vs&&vs.push(n),n}function Ng(n,s,a,t,e,o){return ad(Xl(n,s,a,t,e,o,!0))}function co(n){return n?n.__v_isVNode===!0:!1}function ra(n,s){return n.type===s.type&&n.key===s.key}const he="__vInternal",Zl=({key:n})=>n??null,Zt=({ref:n,ref_key:s,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?jn(n)||Vn(n)||tn(n)?{i:rs,r:n,k:s,f:!!a}:n:null);function Xl(n,s=null,a=null,t=0,e=null,o=n===ns?0:1,p=!1,l=!1){const r={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&Zl(s),ref:s&&Zt(s),scopeId:Tl,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:t,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:rs};return l?(Jo(r,a),o&128&&n.normalize(r)):a&&(r.shapeFlag|=jn(a)?8:16),kt>0&&!p&&vs&&(r.patchFlag>0||o&6)&&r.patchFlag!==32&&vs.push(r),r}const Mn=td;function td(n,s=null,a=null,t=0,e=null,o=!1){if((!n||n===vk)&&(n=Ls),co(n)){const l=Xs(n,s,!0);return a&&Jo(l,a),kt>0&&!o&&vs&&(l.shapeFlag&6?vs[vs.indexOf(n)]=l:vs.push(l)),l.patchFlag|=-2,l}if(md(n)&&(n=n.__vccOpts),s){s=ed(s);let{class:l,style:r}=s;l&&!jn(l)&&(s.class=Oo(l)),Sn(r)&&(_l(r)&&!nn(r)&&(r=Rn({},r)),s.style=To(r))}const p=jn(n)?1:bk(n)?128:nd(n)?64:Sn(n)?4:tn(n)?2:0;return Xl(n,s,a,t,e,p,o,!0)}function ed(n){return n?_l(n)||he in n?Rn({},n):n:null}function Xs(n,s,a=!1){const{props:t,ref:e,patchFlag:o,children:p}=n,l=s?od(t||{},s):t;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Zl(l),ref:s&&s.ref?a&&e?nn(e)?e.concat(Zt(s)):[e,Zt(s)]:Zt(s):e,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:p,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==ns?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xs(n.ssContent),ssFallback:n.ssFallback&&Xs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function nr(n=" ",s=0){return Mn(Da,null,n,s)}function $g(n,s){const a=Mn(at,null,n);return a.staticCount=s,a}function gs(n){return n==null||typeof n=="boolean"?Mn(Ls):nn(n)?Mn(ns,null,n.slice()):typeof n=="object"?Ws(n):Mn(Da,null,String(n))}function Ws(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xs(n)}function Jo(n,s){let a=0;const{shapeFlag:t}=n;if(s==null)s=null;else if(nn(s))a=16;else if(typeof s=="object")if(t&65){const e=s.default;e&&(e._c&&(e._d=!1),Jo(n,e()),e._c&&(e._d=!0));return}else{a=32;const e=s._;!e&&!(he in s)?s._ctx=rs:e===3&&rs&&(rs.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else tn(s)?(s={default:s,_ctx:rs},a=32):(s=String(s),t&64?(a=16,s=[nr(s)]):a=8);n.children=s,n.shapeFlag|=a}function od(...n){const s={};for(let a=0;a<n.length;a++){const t=n[a];for(const e in t)if(e==="class")s.class!==t.class&&(s.class=Oo([s.class,t.class]));else if(e==="style")s.style=To([s.style,t.style]);else if(bt(e)){const o=s[e],p=t[e];p&&o!==p&&!(nn(o)&&o.includes(p))&&(s[e]=o?[].concat(o,p):p)}else e!==""&&(s[e]=t[e])}return s}function ps(n,s,a,t=null){is(n,s,7,[a,t])}const pd=zl();let cd=0;function ld(n,s,a){const t=n.type,e=(s?s.appContext:n.appContext)||pd,o={uid:cd++,vnode:n,type:t,parent:s,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(e.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ql(t,e),emitsOptions:Il(t,e),emit:null,emitted:null,propsDefaults:xn,inheritAttrs:t.inheritAttrs,ctx:xn,data:xn,props:xn,attrs:xn,slots:xn,refs:xn,setupState:xn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=s?s.root:o,o.emit=kk.bind(null,o),n.ce&&n.ce(o),o}let Hn=null;const za=()=>Hn||rs;let ce,lo;{const n=ol(),s=(a,t)=>{let e;return(e=n[a])||(e=n[a]=[]),e.push(t),o=>{e.length>1?e.forEach(p=>p(o)):e[0](o)}};ce=s("__VUE_INSTANCE_SETTERS__",a=>Hn=a),lo=s("__VUE_SSR_SETTERS__",a=>Lt=a)}const At=n=>{const s=Hn;return ce(n),n.scope.on(),()=>{n.scope.off(),ce(s)}},nc=()=>{Hn&&Hn.scope.off(),ce(null)};function sr(n){return n.vnode.shapeFlag&4}let Lt=!1;function rd(n,s=!1){s&&lo(s);const{props:a,children:t}=n.vnode,e=sr(n);zk(n,a,e,s),Jk(n,t);const o=e?id(n,s):void 0;return s&&lo(!1),o}function id(n,s){const a=n.type;n.accessCache=Object.create(null),n.proxy=wl(new Proxy(n.ctx,Rk));const{setup:t}=a;if(t){const e=n.setupContext=t.length>1?kd(n):null,o=At(n);ha();const p=Ys(t,n,0,[n.props,e]);if(fa(),o(),al(p)){if(p.then(nc,nc),s)return p.then(l=>{sc(n,l,s)}).catch(l=>{Et(l,n,0)});n.asyncDep=p}else sc(n,p,s)}else ar(n,s)}function sc(n,s,a){tn(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Sn(s)&&(n.setupState=Al(s)),ar(n,a)}let ac;function ar(n,s,a){const t=n.type;if(!n.render){if(!s&&ac&&!t.render){const e=t.template||Go(n).template;if(e){const{isCustomElement:o,compilerOptions:p}=n.appContext.config,{delimiters:l,compilerOptions:r}=t,i=Rn(Rn({isCustomElement:o,delimiters:l},p),r);t.render=ac(e,i)}}n.render=t.render||ls}{const e=At(n);ha();try{Mk(n)}finally{fa(),e()}}}function ud(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(s,a){return Un(n,"get","$attrs"),s[a]}}))}function kd(n){const s=a=>{n.exposed=a||{}};return{get attrs(){return ud(n)},slots:n.slots,emit:n.emit,expose:s}}function Wo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Al(wl(n.exposed)),{get(s,a){if(a in s)return s[a];if(a in nt)return nt[a](n)},has(s,a){return a in s||a in nt}}))}function dd(n,s=!0){return tn(n)?n.displayName||n.name:n.name||s&&n.__name}function md(n){return tn(n)&&"__vccOpts"in n}const _=(n,s)=>nk(n,s,Lt);function c(n,s,a){const t=arguments.length;return t===2?Sn(s)&&!nn(s)?co(s)?Mn(n,null,[s]):Mn(n,s):Mn(n,null,s):(t>3?a=Array.prototype.slice.call(arguments,2):t===3&&co(a)&&(a=[a]),Mn(n,s,a))}const hd="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const fd="http://www.w3.org/2000/svg",gd="http://www.w3.org/1998/Math/MathML",Ks=typeof document<"u"?document:null,tc=Ks&&Ks.createElement("template"),vd={insert:(n,s,a)=>{s.insertBefore(n,a||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,a,t)=>{const e=s==="svg"?Ks.createElementNS(fd,n):s==="mathml"?Ks.createElementNS(gd,n):Ks.createElement(n,a?{is:a}:void 0);return n==="select"&&t&&t.multiple!=null&&e.setAttribute("multiple",t.multiple),e},createText:n=>Ks.createTextNode(n),createComment:n=>Ks.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ks.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,a,t,e,o){const p=a?a.previousSibling:s.lastChild;if(e&&(e===o||e.nextSibling))for(;s.insertBefore(e.cloneNode(!0),a),!(e===o||!(e=e.nextSibling)););else{tc.innerHTML=t==="svg"?`<svg>${n}</svg>`:t==="mathml"?`<math>${n}</math>`:n;const l=tc.content;if(t==="svg"||t==="mathml"){const r=l.firstChild;for(;r.firstChild;)l.appendChild(r.firstChild);l.removeChild(r)}s.insertBefore(l,a)}return[p?p.nextSibling:s.firstChild,a?a.previousSibling:s.lastChild]}},Fs="transition",Wa="animation",Ra=Symbol("_vtc"),na=(n,{slots:s})=>c(Ak,er(n),s);na.displayName="Transition";const tr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yd=na.props=Rn({},Ml,tr),pa=(n,s=[])=>{nn(n)?n.forEach(a=>a(...s)):n&&n(...s)},ec=n=>n?nn(n)?n.some(s=>s.length>1):n.length>1:!1;function er(n){const s={};for(const B in n)B in tr||(s[B]=n[B]);if(n.css===!1)return s;const{name:a="v",type:t,duration:e,enterFromClass:o=`${a}-enter-from`,enterActiveClass:p=`${a}-enter-active`,enterToClass:l=`${a}-enter-to`,appearFromClass:r=o,appearActiveClass:i=p,appearToClass:u=l,leaveFromClass:k=`${a}-leave-from`,leaveActiveClass:d=`${a}-leave-active`,leaveToClass:h=`${a}-leave-to`}=n,v=bd(e),w=v&&v[0],E=v&&v[1],{onBeforeEnter:b,onEnter:L,onEnterCancelled:y,onLeave:x,onLeaveCancelled:j,onBeforeAppear:A=b,onAppear:J=L,onAppearCancelled:V=y}=s,Q=(B,X,In)=>{Gs(B,X?u:l),Gs(B,X?i:p),In&&In()},P=(B,X)=>{B._isLeaving=!1,Gs(B,k),Gs(B,h),Gs(B,d),X&&X()},G=B=>(X,In)=>{const An=B?J:L,q=()=>Q(X,B,In);pa(An,[X,q]),oc(()=>{Gs(X,B?r:o),Os(X,B?u:l),ec(An)||pc(X,t,w,q)})};return Rn(s,{onBeforeEnter(B){pa(b,[B]),Os(B,o),Os(B,p)},onBeforeAppear(B){pa(A,[B]),Os(B,r),Os(B,i)},onEnter:G(!1),onAppear:G(!0),onLeave(B,X){B._isLeaving=!0;const In=()=>P(B,X);Os(B,k),pr(),Os(B,d),oc(()=>{B._isLeaving&&(Gs(B,k),Os(B,h),ec(x)||pc(B,t,E,In))}),pa(x,[B,In])},onEnterCancelled(B){Q(B,!1),pa(y,[B])},onAppearCancelled(B){Q(B,!0),pa(V,[B])},onLeaveCancelled(B){P(B),pa(j,[B])}})}function bd(n){if(n==null)return null;if(Sn(n))return[Re(n.enter),Re(n.leave)];{const s=Re(n);return[s,s]}}function Re(n){return Su(n)}function Os(n,s){s.split(/\s+/).forEach(a=>a&&n.classList.add(a)),(n[Ra]||(n[Ra]=new Set)).add(s)}function Gs(n,s){s.split(/\s+/).forEach(t=>t&&n.classList.remove(t));const a=n[Ra];a&&(a.delete(s),a.size||(n[Ra]=void 0))}function oc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let _d=0;function pc(n,s,a,t){const e=n._endId=++_d,o=()=>{e===n._endId&&t()};if(a)return setTimeout(o,a);const{type:p,timeout:l,propCount:r}=or(n,s);if(!p)return t();const i=p+"end";let u=0;const k=()=>{n.removeEventListener(i,d),o()},d=h=>{h.target===n&&++u>=r&&k()};setTimeout(()=>{u<r&&k()},l+1),n.addEventListener(i,d)}function or(n,s){const a=window.getComputedStyle(n),t=v=>(a[v]||"").split(", "),e=t(`${Fs}Delay`),o=t(`${Fs}Duration`),p=cc(e,o),l=t(`${Wa}Delay`),r=t(`${Wa}Duration`),i=cc(l,r);let u=null,k=0,d=0;s===Fs?p>0&&(u=Fs,k=p,d=o.length):s===Wa?i>0&&(u=Wa,k=i,d=r.length):(k=Math.max(p,i),u=k>0?p>i?Fs:Wa:null,d=u?u===Fs?o.length:r.length:0);const h=u===Fs&&/\b(transform|all)(,|$)/.test(t(`${Fs}Property`).toString());return{type:u,timeout:k,propCount:d,hasTransform:h}}function cc(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((a,t)=>lc(a)+lc(n[t])))}function lc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function pr(){return document.body.offsetHeight}function wd(n,s,a){const t=n[Ra];t&&(s=(s?[s,...t]:[...t]).join(" ")),s==null?n.removeAttribute("class"):a?n.setAttribute("class",s):n.className=s}const rc=Symbol("_vod"),Ed=Symbol("_vsh"),Sd=Symbol(""),Ad=/(^|;)\s*display\s*:/;function Ld(n,s,a){const t=n.style,e=jn(a);let o=!1;if(a&&!e){if(s)if(jn(s))for(const p of s.split(";")){const l=p.slice(0,p.indexOf(":")).trim();a[l]==null&&Xt(t,l,"")}else for(const p in s)a[p]==null&&Xt(t,p,"");for(const p in a)p==="display"&&(o=!0),Xt(t,p,a[p])}else if(e){if(s!==a){const p=t[Sd];p&&(a+=";"+p),t.cssText=a,o=Ad.test(a)}}else s&&n.removeAttribute("style");rc in n&&(n[rc]=o?t.display:"",n[Ed]&&(t.display="none"))}const ic=/\s*!important$/;function Xt(n,s,a){if(nn(a))a.forEach(t=>Xt(n,s,t));else if(a==null&&(a=""),s.startsWith("--"))n.setProperty(s,a);else{const t=xd(n,s);ic.test(a)?n.setProperty(Ha(t),a.replace(ic,""),"important"):n[t]=a}}const uc=["Webkit","Moz","ms"],Me={};function xd(n,s){const a=Me[s];if(a)return a;let t=ks(s);if(t!=="filter"&&t in n)return Me[s]=t;t=_t(t);for(let e=0;e<uc.length;e++){const o=uc[e]+t;if(o in n)return Me[s]=o}return s}const kc="http://www.w3.org/1999/xlink";function Cd(n,s,a,t,e){if(t&&s.startsWith("xlink:"))a==null?n.removeAttributeNS(kc,s.slice(6,s.length)):n.setAttributeNS(kc,s,a);else{const o=Tu(s);a==null||o&&!pl(a)?n.removeAttribute(s):n.setAttribute(s,o?"":a)}}function Id(n,s,a,t,e,o,p){if(s==="innerHTML"||s==="textContent"){t&&p(t,e,o),n[s]=a??"";return}const l=n.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){const i=l==="OPTION"?n.getAttribute("value")||"":n.value,u=a??"";(i!==u||!("_value"in n))&&(n.value=u),a==null&&n.removeAttribute(s),n._value=a;return}let r=!1;if(a===""||a==null){const i=typeof n[s];i==="boolean"?a=pl(a):a==null&&i==="string"?(a="",r=!0):i==="number"&&(a=0,r=!0)}try{n[s]=a}catch{}r&&n.removeAttribute(s)}function Td(n,s,a,t){n.addEventListener(s,a,t)}function Od(n,s,a,t){n.removeEventListener(s,a,t)}const dc=Symbol("_vei");function Pd(n,s,a,t,e=null){const o=n[dc]||(n[dc]={}),p=o[s];if(t&&p)p.value=t;else{const[l,r]=Bd(s);if(t){const i=o[s]=Md(t,e);Td(n,l,i,r)}else p&&(Od(n,l,p,r),o[s]=void 0)}}const mc=/(?:Once|Passive|Capture)$/;function Bd(n){let s;if(mc.test(n)){s={};let t;for(;t=n.match(mc);)n=n.slice(0,n.length-t[0].length),s[t[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ha(n.slice(2)),s]}let je=0;const Dd=Promise.resolve(),Rd=()=>je||(Dd.then(()=>je=0),je=Date.now());function Md(n,s){const a=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=a.attached)return;is(jd(t,a.value),s,5,[t])};return a.value=n,a.attached=Rd(),a}function jd(n,s){if(nn(s)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},s.map(t=>e=>!e._stopped&&t&&t(e))}else return s}const hc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Vd=(n,s,a,t,e,o,p,l,r)=>{const i=e==="svg";s==="class"?wd(n,t,i):s==="style"?Ld(n,a,t):bt(s)?xo(s)||Pd(n,s,a,t,p):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Nd(n,s,t,i))?Id(n,s,t,o,p,l,r):(s==="true-value"?n._trueValue=t:s==="false-value"&&(n._falseValue=t),Cd(n,s,t,i))};function Nd(n,s,a,t){if(t)return!!(s==="innerHTML"||s==="textContent"||s in n&&hc(s)&&tn(a));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const e=n.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return hc(s)&&jn(a)?!1:s in n}const cr=new WeakMap,lr=new WeakMap,le=Symbol("_moveCb"),fc=Symbol("_enterCb"),rr={name:"TransitionGroup",props:Rn({},yd,{tag:String,moveClass:String}),setup(n,{slots:s}){const a=za(),t=Rl();let e,o;return $l(()=>{if(!e.length)return;const p=n.moveClass||`${n.name||"v"}-move`;if(!qd(e[0].el,a.vnode.el,p))return;e.forEach(Fd),e.forEach(zd);const l=e.filter(Gd);pr(),l.forEach(r=>{const i=r.el,u=i.style;Os(i,p),u.transform=u.webkitTransform=u.transitionDuration="";const k=i[le]=d=>{d&&d.target!==i||(!d||/transform$/.test(d.propertyName))&&(i.removeEventListener("transitionend",k),i[le]=null,Gs(i,p))};i.addEventListener("transitionend",k)})}),()=>{const p=ln(n),l=er(p);let r=p.tag||ns;e=o,o=s.default?zo(s.default()):[];for(let i=0;i<o.length;i++){const u=o[i];u.key!=null&&ut(u,it(u,l,t,a))}if(e)for(let i=0;i<e.length;i++){const u=e[i];ut(u,it(u,l,t,a)),cr.set(u,u.el.getBoundingClientRect())}return Mn(r,null,o)}}},$d=n=>delete n.mode;rr.props;const Hd=rr;function Fd(n){const s=n.el;s[le]&&s[le](),s[fc]&&s[fc]()}function zd(n){lr.set(n,n.el.getBoundingClientRect())}function Gd(n){const s=cr.get(n),a=lr.get(n),t=s.left-a.left,e=s.top-a.top;if(t||e){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${t}px,${e}px)`,o.transitionDuration="0s",n}}function qd(n,s,a){const t=n.cloneNode(),e=n[Ra];e&&e.forEach(l=>{l.split(/\s+/).forEach(r=>r&&t.classList.remove(r))}),a.split(/\s+/).forEach(l=>l&&t.classList.add(l)),t.style.display="none";const o=s.nodeType===1?s:s.parentNode;o.appendChild(t);const{hasTransform:p}=or(t);return o.removeChild(t),p}const Jd=Rn({patchProp:Vd},vd);let Ve,gc=!1;function Wd(){return Ve=gc?Ve:Yk(Jd),gc=!0,Ve}const Kd=(...n)=>{const s=Wd().createApp(...n),{mount:a}=s;return s.mount=t=>{const e=Qd(t);if(e)return a(e,!0,Ud(e))},s};function Ud(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qd(n){return jn(n)?document.querySelector(n):n}var Yd=["link","meta","script","style","noscript","template"],Zd=["title","base"],Xd=([n,s,a])=>Zd.includes(n)?n:Yd.includes(n)?n==="meta"&&s.name?`${n}.${s.name}`:n==="template"&&s.id?`${n}.${s.id}`:JSON.stringify([n,Object.entries(s).map(([t,e])=>typeof e=="boolean"?e?[t,""]:null:[t,e]).filter(t=>t!=null).sort(([t],[e])=>t.localeCompare(e)),a]):null,n0=n=>{const s=new Set,a=[];return n.forEach(t=>{const e=Xd(t);e&&!s.has(e)&&(s.add(e),a.push(t))}),a},s0=n=>n[0]==="/"?n:`/${n}`,ir=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,aa=n=>/^(https?:)?\/\//.test(n),a0=/.md((\?|#).*)?$/,Ma=(n,s="/")=>!!(aa(n)||n.startsWith("/")&&!n.startsWith(s)&&!a0.test(n)),ur=n=>/^[a-z][a-z0-9+.-]*:/.test(n),xt=n=>Object.prototype.toString.call(n)==="[object Object]",t0=n=>{const[s,...a]=n.split(/(\?|#)/);if(!s||s.endsWith("/"))return n;let t=s.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=t.substring(0,t.length-3)+".html":t.endsWith(".html")||(t=t+".html"),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t+a.join("")},Ko=n=>n[n.length-1]==="/"?n.slice(0,-1):n,kr=n=>n[0]==="/"?n.slice(1):n,e0=(n,s)=>{const a=Object.keys(n).sort((t,e)=>{const o=e.split("/").length-t.split("/").length;return o!==0?o:e.length-t.length});for(const t of a)if(s.startsWith(t))return t;return"/"},Pn=n=>typeof n=="string";const o0="modulepreload",p0=function(n){return"/"+n},vc={},m=function(s,a,t){let e=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link");e=Promise.all(a.map(p=>{if(p=p0(p),p in vc)return;vc[p]=!0;const l=p.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!t)for(let k=o.length-1;k>=0;k--){const d=o[k];if(d.href===p&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${r}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":o0,l||(u.as="script",u.crossOrigin=""),u.href=p,document.head.appendChild(u),l)return new Promise((k,d)=>{u.addEventListener("load",k),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${p}`)))})}))}return e.then(()=>s()).catch(o=>{const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=o,window.dispatchEvent(p),!p.defaultPrevented)throw o})},c0=JSON.parse('{"/ComputerBasics/DataStructure/01DS/ds02,.html":"/ComputerBasics/DataStructure/01DS/ds02_.html","/ComputerBasics/DataStructure/01DS/ds02,.md":"/ComputerBasics/DataStructure/01DS/ds02_.html"}'),l0=Object.fromEntries([["/",{loader:()=>m(()=>import("./index.html-BcgtGKyj.js"),__vite__mapDeps([0,1])),meta:{y:"h",t:"🏠️ 博客主页"}}],["/intro.html",{loader:()=>m(()=>import("./intro.html-CSwSdwGv.js"),__vite__mapDeps([2,1])),meta:{a:"Dongchengpeng",d:9618048e5,l:"2000年6月24日",c:["个人简介"],g:["个人简介"],e:`<div style="text-align:center;color:#f0f0f0; background-image: url('assets/intro/star.jpg'); opacity: 1; background-size:900px">
<p>地球这样的行星，是产生不了重元素的，你身体里的铁，来自璀璨的超新星爆炸。</p>
<p>血液里的锌，源自两次中子星对撞后喷射向宇宙的尘埃。</p>
<p>那微量的铜，更是需要见证一颗白矮星的死亡，</p>
<p>即使是最微不足道的钴，也源自几十亿光年外的星云。</p>
<p>某种意义上讲，人类对星空怀有好奇，是正常的。</p>
<p>渴望见证星河大海的极限，因为我们本就是星辰之子</p>
</div>`,r:{minutes:1.37,words:412},y:"a",t:"Chengpeng Dong"}}],["/slides.html",{loader:()=>m(()=>import("./slides.html-BrjuzOE_.js"),__vite__mapDeps([3,1])),meta:{d:1681268086e3,e:`<!-- markdownlint-disable MD024 MD051 -->
<p>@slidestart</p>
<!-- .slide: data-transition="slide" -->
<h2>幻灯片演示</h2>
<!-- .element: class="r-fit-text" -->
<p>一个简单的幻灯片演示与各种小贴士。</p>
<!-- .element: class="r-fit-text" -->
<blockquote>
<p>作者 Mr.Hope. 请滚动鼠标滚轮进入下一页</p>
</blockquote>
<hr>
<h2>标注幻灯片</h2>
<!-- .element: class="r-fit-text" -->`,r:{minutes:4.5,words:1351},y:"s",t:"幻灯片页",i:"person-chalkboard"}}],["/Projects/",{loader:()=>m(()=>import("./index.html-1Cd5dax8.js"),__vite__mapDeps([4,1])),meta:{y:"h",t:"主页",i:"home"}}],["/Projects/README01.html",{loader:()=>m(()=>import("./README01.html-KQ-o7BHN.js"),__vite__mapDeps([5,1])),meta:{d:1709603799e3,e:`<!-- ---
containerClass: home
home: true
title: 主页
icon: home
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: VuePress Theme Hope
tagline: 一个具有强大功能的 vuepress 主题✨
actions:
  - text: 使用教程 🧭
    link: ./cookbook/tutorial/
    type: primary

  - text: 介绍 💡
    link: ./guide/get-started/intro.html

  - text: 配置 🛠
    link: ./config/

  - text: 在线案例 🪀
    link: https://stackblitz.com/fork/vuepress-theme-hope

highlights:
  - header: 易于安装
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
      - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。

  - header: 在 Markdown 中添加你想要的内容
    description: 我们扩展了标准的 CommonMark 规范，为你添加了成吨功能。
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 链接检查
        icon: clipboard-check
        details: 检查 Markdown 链接
        link: ./guide/markdown/others.html#link-check

      - title: 自定义容器支持
        icon: box-archive
        details: 用样式装饰 Markdown 内容
        link: ./guide/markdown/container.html

      - title: 选项卡
        icon: table-columns
        details: 使用选项卡对相似内容进行分组
        link: ./guide/markdown/tabs.html

      - title: 代码组
        icon: code
        details: 使用选项卡对相似代码进行分组
        link: ./guide/markdown/code-tabs.html

      - title: 自定义对齐支持
        icon: align-center
        details: 让你在 Markdown 中对段落进行对齐
        link: ./guide/markdown/align.html

      - title: 自定义属性支持
        icon: code
        details: 让你为 Markdown 元素添加属性
        link: ./guide/markdown/attrs.html

      - title: 上下角标支持
        icon: superscript
        details: 你的 Markdown 现在将支持上下角标
        link: ./guide/markdown/sup-sub.html

      - title: 脚注
        icon: quote-left
        details: 你的 Markdown 现在将支持脚注
        link: ./guide/markdown/footnote.html

      - title: 标记支持
        icon: highlighter
        details: 让你在 Markdown 中对词句进行标记
        link: ./guide/markdown/mark.html

      - title: 任务列表
        icon: square-check
        details: 在 Markdown 中使用任务列表
        link: ./guide/markdown/tasklist.html

      - title: 图片语法
        icon: image
        details: 使用改进的语法指定图片大小与颜色模式
        link: ./guide/markdown/image.html

      - title: 卡片支持
        icon: square
        details: 在 Markdown 中展示卡片
        link: ./guide/markdown/card.html

      - title: 图表支持
        icon: chart-simple
        details: 在 Markdown 中展示图表
        link: ./guide/markdown/chart.html

      - title: 流程图支持
        icon: route
        details: 可以在 Markdown 中直接写出流程图
        link: ./guide/markdown/flowchart.html

      - title: Mermaid 支持
        icon: chart-pie
        details: 可以在 Markdown 中添加 Mermaid 图例
        link: ./guide/markdown/mermaid.html

      - title: Tex 支持
        icon: square-root-variable
        details: Markdown 现在也可以支持 Tex 语法以显示公式
        link: ./guide/markdown/tex.html

      - title: 导入文件支持
        icon: fab fa-markdown
        details: 将你的文档分段，并在 Markdown 中导入
        link: ./guide/markdown/include.html

      - title: 交互演示支持
        icon: code
        details: 你可以在 Markdown 中添加交互演示
        link: ./guide/markdown/playground.html

      - title: Vue 交互演示支持
        icon: fab fa-vuejs
        details: 在交互演示中展示 Vue 组件
        link: ./guide/markdown/vue-playground.html

      - title: 代码案例支持
        icon: laptop-code
        details: 你可以很方便的插入代码案例
        link: ./guide/markdown/demo/

      - title: 幻灯片支持
        icon: person-chalkboard
        details: 你可以直接在 Markdown 中插入幻灯片
        link: ./guide/markdown/presentation/

  - header: 布局
    description: 一个带有完整无障碍支持的响应式布局。
    image: /assets/image/layout.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 布局增强
        icon: object-group
        details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
        link: ./guide/layout/

      - title: 深色模式
        icon: circle-half-stroke
        details: 可以自由切换浅色模式与深色模式
        link: ./guide/interface/darkmode.html

      - title: 主题色切换
        icon: palette
        details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
        link: ./guide/interface/theme-color.html

      - title: 幻灯片页面
        icon: person-chalkboard
        details: 添加幻灯片页面以显示你喜欢的内容
        link: ./guide/layout/slides

      - title: 更多
        icon: ellipsis
        details: RTL 布局，打印支持，全局按钮等
        link: ./guide/interface/others.html

  - header: 新功能
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 浏览量与评论
        icon: comment-dots
        details: 配合 Waline 来开启阅读量统计与评论支持
        link: ./guide/feature/comment.html

      - title: 文章信息
        icon: circle-info
        details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
        link: ./guide/feature/page-info.html

      - title: 文章加密
        icon: lock
        details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
        link: ./guide/feature/encrypt.html

      - title: 搜索支持
        icon: search
        details: 支持 docsearch 和基于客户端的搜索
        link: ./guide/feature/search.html

      - title: 代码复制
        icon: copy
        details: 一键复制代码块中的代码
        link: ./guide/feature/copy-code.html

      - title: 图片预览
        icon: image
        details: 像相册一样允许你浏览、缩放并分享你的页面图片
        link: ./guide/feature/photo-swipe.html

  - header: 博客
    description: 通过主题创建个人博客
    image: /assets/image/blog.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 博客功能
        icon: blog
        details: 通过文章的日期、标签和分类展示文章
        link: ./guide/blog/intro.html

      - title: 博客主页
        icon: home
        details: 全新播客主页
        link: ./guide/blog/home.html

      - title: 博主信息
        icon: home
        details: 自定义名称、头像、座右铭和社交媒体链接
        link: ./guide/blog/blogger.html

      - title: 时间线
        icon: home
        details: 在时间线中浏览和通读博文
        link: ./guide/blog/timeline.html

  - header: 高级
    description: 增强站点与用户体验的高级功能
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: SEO 增强
        icon: dumbbell
        details: 将最终生成的网页针对搜索引擎进行优化。
        link: ./guide/advanced/seo.html

      - title: Sitemap
        icon: sitemap
        details: 自动为你的网站生成 Sitemap
        link: ./guide/advanced/sitemap.html

      - title: Feed 支持
        icon: rss
        details: 生成你的 Feed，并通知你的用户订阅它
        link: ./guide/advanced/feed.html

      - title: PWA 支持
        icon: mobile-screen
        details: 让你的网站更像一个 APP
        link: ./guide/advanced/pwa.html

copyright: false
footer: MIT Licensed | Copyright © 2019-present Mr.Hope
--- -->`,r:{minutes:4.41,words:1323},y:"a",t:""}}],["/BackEnd/JavaSE/Javase01.html",{loader:()=>m(()=>import("./Javase01.html-CkZoFeQk.js"),__vite__mapDeps([6,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:10.12,words:3037},y:"a",t:"Java基本语法",O:1}}],["/BackEnd/JavaSE/Javase02.html",{loader:()=>m(()=>import("./Javase02.html-BD4PJL7f.js"),__vite__mapDeps([7,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:20.97,words:6290},y:"a",t:"Java面向对象",O:2}}],["/BackEnd/JavaSE/Javase03.html",{loader:()=>m(()=>import("./Javase03.html-CkBC4pPa.js"),__vite__mapDeps([8,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:10.55,words:3164},y:"a",t:"Java基础API",O:3}}],["/BackEnd/JavaSE/Javase04.html",{loader:()=>m(()=>import("./Javase04.html-S5TPKpbl.js"),__vite__mapDeps([9,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:27.46,words:8239},y:"a",t:"Java常用API",O:4}}],["/BackEnd/JavaSE/Javase05.html",{loader:()=>m(()=>import("./Javase05.html-C86PbZ9x.js"),__vite__mapDeps([10,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:17.9,words:5369},y:"a",t:"JDK8新特性",O:5}}],["/BackEnd/JavaSE/Javase06.html",{loader:()=>m(()=>import("./Javase06.html-onlDJPzb.js"),__vite__mapDeps([11,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:25.14,words:7542},y:"a",t:"集合框架",O:6}}],["/BackEnd/JavaSE/Javase07.html",{loader:()=>m(()=>import("./Javase07.html-DF1jjXFf.js"),__vite__mapDeps([12,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:7.64,words:2292},y:"a",t:"异常处理",O:7}}],["/BackEnd/JavaSE/Javase08.html",{loader:()=>m(()=>import("./Javase08.html-CBpl_OrI.js"),__vite__mapDeps([13,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:31.76,words:9527},y:"a",t:"IO流体系",O:8}}],["/BackEnd/JavaSE/Javase09.html",{loader:()=>m(()=>import("./Javase09.html-C-AISkw6.js"),__vite__mapDeps([14,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:.06,words:17},y:"a",t:"特殊文件、日志框架",O:9}}],["/BackEnd/JavaSE/Javase10.html",{loader:()=>m(()=>import("./Javase10.html-DwfDNXVl.js"),__vite__mapDeps([15,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:3.77,words:1132},y:"a",t:"多线程技术",O:10}}],["/BackEnd/JavaSE/Javase11.html",{loader:()=>m(()=>import("./Javase11.html-B9vzTfZ_.js"),__vite__mapDeps([16,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:1.61,words:482},y:"a",t:"网络编程",O:11}}],["/BackEnd/JavaSE/Javase12.html",{loader:()=>m(()=>import("./Javase12.html-91ZXYYg-.js"),__vite__mapDeps([17,1])),meta:{d:16776288e5,l:"2023年3月1日",c:["JavaSE"],e:`
`,r:{minutes:12.88,words:3863},y:"a",t:"Java基础加强",O:12}}],["/BackEnd/JavaSE/",{loader:()=>m(()=>import("./index.html-BRKh7BsN.js"),__vite__mapDeps([18,1])),meta:{d:1681268086e3,e:`
`,r:{minutes:.61,words:182},y:"a",t:"JavaSE大纲"}}],["/BackEnd/JavaWeb/",{loader:()=>m(()=>import("./index.html-CH581PIB.js"),__vite__mapDeps([19,1])),meta:{d:16788384e5,l:"2023年3月15日",c:["JavaWeb"],e:`
`,r:{minutes:2.09,words:628},y:"a",t:"JavaWeb"}}],["/BackEnd/JavaWeb/javaweb01.html",{loader:()=>m(()=>import("./javaweb01.html-DbXV7PJK.js"),__vite__mapDeps([20,1])),meta:{d:16788384e5,l:"2023年3月15日",c:["JavaWeb","Maven"],e:`
`,r:{minutes:4.56,words:1369},y:"a",t:"Maven",O:1}}],["/BackEnd/JavaWeb/javaweb02.html",{loader:()=>m(()=>import("./javaweb02.html-DMP8gwGq.js"),__vite__mapDeps([21,1])),meta:{d:16788384e5,l:"2023年3月15日",c:["JavaWeb"],e:`
`,r:{minutes:3.22,words:967},y:"a",t:"HTTP协议",O:2}}],["/BackEnd/JavaWeb/javaweb03.html",{loader:()=>m(()=>import("./javaweb03.html-D8DTiQDW.js"),__vite__mapDeps([22,1])),meta:{d:16810848e5,l:"2023年4月10日",c:["Maven"],e:`
`,r:{minutes:15.56,words:4668},y:"a",t:"Maven高级",O:3}}],["/BackEnd/MyBatis/",{loader:()=>m(()=>import("./index.html-JgRxucm0.js"),__vite__mapDeps([23,1])),meta:{d:16805664e5,l:"2023年4月4日",c:["MyBatis"],e:`
`,r:{minutes:.52,words:157},y:"a",t:"MyBatis概述"}}],["/BackEnd/MyBatis/mybatis01.html",{loader:()=>m(()=>import("./mybatis01.html-CDWrt4Qk.js"),__vite__mapDeps([24,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["JDBC","MyBatis"],e:`
`,r:{minutes:13.69,words:4108},y:"a",t:"JDBC",O:1}}],["/BackEnd/MyBatis/mybatis02.html",{loader:()=>m(()=>import("./mybatis02.html-DegACBcU.js"),__vite__mapDeps([25,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["MyBatis"],e:`
<div class="hint-container warning">
<p class="hint-container-title">JDBC 缺点</p>
<p>硬编码</p>
<ul>
<li>注册驱动、获取连接 ①</li>
<li>SQL语句 ②</li>
</ul>
<p>操作繁琐</p>
<ul>
<li>手动设置参数 ③</li>
<li>手动封装结果集 ④</li>
</ul>
</div>
<figure><figcaption> </figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Mybatis 优化</p>
<ul>
<li>硬编码可以配置到 <strong>配置文件</strong></li>
<li>操作繁琐的地方mybatis都 <strong>自动完成</strong></li>
</ul>
</div>`,r:{minutes:.27,words:80},y:"a",t:"JDBC vs Mybatis",O:2}}],["/BackEnd/MyBatis/mybatis03.html",{loader:()=>m(()=>import("./mybatis03.html-BehYAT_f.js"),__vite__mapDeps([26,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["lombok"],e:`
<h2>1 介绍</h2>
<p>Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须但又显得很臃肿的Java代码</p>
<figure><figcaption> </figcaption></figure>
<table>
<thead>
<tr>
<th><strong>注解</strong></th>
<th><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>@Getter/@Setter</td>
<td>为所有的属性提供get/set方法</td>
</tr>
<tr>
<td>@ToString</td>
<td>会给类自动生成易阅读的  toString 方法</td>
</tr>
<tr>
<td>@EqualsAndHashCode</td>
<td>根据类所拥有的非静态字段自动重写 equals 方法和  hashCode 方法</td>
</tr>
<tr>
<td>@Data</td>
<td>提供了更综合的生成代码功能（@Getter  + @Setter + @ToString + @EqualsAndHashCode）</td>
</tr>
<tr>
<td>@NoArgsConstructor</td>
<td>为实体类生成无参的构造器方法</td>
</tr>
<tr>
<td>@AllArgsConstructor</td>
<td>为实体类生成除了static修饰的字段之外带有各参数的构造器方法</td>
</tr>
</tbody>
</table>`,r:{minutes:1.4,words:421},y:"a",t:"lombok",O:3}}],["/BackEnd/MyBatis/mybatis04.html",{loader:()=>m(()=>import("./mybatis04.html-BobuLz91.js"),__vite__mapDeps([27,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["MyBatis"],e:`
<h2>1. 入门程序分析</h2>
<p>Mybatis操作数据库步骤：</p>
<ol>
<li>
<p>准备工作 ( 创建springboot工程、数据库表user、实体类User )</p>
</li>
<li>
<p>引入Mybatis的相关依赖，配置Mybatis ( 数据库连接信息 )</p>
</li>
<li>
<p>编写SQL语句 ( 注解/XML )</p>
</li>
</ol>
<h2>2 入门程序实现</h2>
<h3>2.1 项目创建</h3>
<p>创建springboot工程，并导入 mybatis 的起步依赖、 mysql 的驱动包</p>
<figure><figcaption> </figcaption></figure>`,r:{minutes:3.45,words:1036},y:"a",t:"Mybatis快速入门",O:4}}],["/BackEnd/MyBatis/mybatis05.html",{loader:()=>m(()=>import("./mybatis05.html-DW49Jvcw.js"),__vite__mapDeps([28,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["MyBatis"],e:`
<h2>1 需求</h2>
<p>需求说明：</p>
<p>根据资料中提供的《tlias智能学习辅助系统》页面原型及需求，完成员工管理的需求开发</p>
<figure><figcaption> </figcaption></figure>
<figure><figcaption> </figcaption></figure>
<figure><figcaption> </figcaption></figure>
<p>通过分析以上的页面原型和需求，确定功能列表：</p>
<ol>
<li>
<p>查询</p>
<ul>
<li>根据主键ID查询</li>
<li>条件查询</li>
</ul>
</li>
<li>
<p>新增</p>
</li>
<li>
<p>更新</p>
</li>
<li>
<p>删除</p>
<ul>
<li>根据主键ID删除</li>
<li>根据主键ID批量删除</li>
</ul>
</li>
</ol>`,r:{minutes:10.67,words:3200},y:"a",t:"Mybatis基础操作",O:5}}],["/BackEnd/MyBatis/mybatis06.html",{loader:()=>m(()=>import("./mybatis06.html-DOrKZ13t.js"),__vite__mapDeps([29,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["MyBatis"],e:`
<div class="hint-container note">
<p class="hint-container-title">Mybatis的开发有两种方式</p>
<ol>
<li>注解</li>
<li>XML</li>
</ol>
</div>
<h2>1 XML配置文件规范</h2>
<p>使用Mybatis的注解方式，主要是来完成一些简单的增删改查功能。如果需要实现复杂的SQL功能，建议使用XML来配置映射语句</p>
<div class="hint-container info">
<p class="hint-container-title">Mybatis中使用XML映射文件规范</p>
<ol>
<li>
<p>XML映射文件的名称与Mapper接口名称一致，并且将XML映射文件和Mapper接口放置在相同包下（同包同名）</p>
</li>
<li>
<p>XML映射文件的namespace属性为Mapper接口全限定名一致</p>
</li>
<li>
<p>XML映射文件中sql语句的id与Mapper接口中的方法名一致，并保持返回类型一致</p>
</li>
</ol>
</div>`,r:{minutes:1.49,words:446},y:"a",t:"Mybatis的XML配置文件",O:6}}],["/BackEnd/MyBatis/mybatis07.html",{loader:()=>m(()=>import("./mybatis07.html-B1RXqtZl.js"),__vite__mapDeps([30,1])),meta:{d:16808256e5,l:"2023年4月7日",c:["MyBatis"],e:`
<h2>1 什么是动态SQL</h2>
<p>在页面原型中，列表上方的条件是动态的，是可以不传递的，也可以只传递其中的1个或者2个或者全部</p>
<figure><figcaption> </figcaption></figure>
<figure><figcaption> </figcaption></figure>
<p>而在刚才编写的SQL语句中，如果页面只传递了参数姓名 name 字段，其他两个字段 性别 和 入职时间 没有传递，那么这两个参数的值就是null</p>
<p>此时，执行的SQL语句为：</p>
<figure><figcaption> </figcaption></figure>`,r:{minutes:5.81,words:1742},y:"a",t:"Mybatis动态SQL",O:7}}],["/BackEnd/MybatisPlus/",{loader:()=>m(()=>import("./index.html-DyUrRpJg.js"),__vite__mapDeps([31,1])),meta:{d:16805664e5,l:"2023年4月4日",c:["MyBatisPlus"],e:`
`,r:{minutes:1.76,words:528},y:"a",t:"MyBatisPlus"}}],["/BackEnd/MybatisPlus/mybatisplus01.html",{loader:()=>m(()=>import("./mybatisplus01.html-BoP0PwPZ.js"),__vite__mapDeps([32,1])),meta:{d:16816032e5,l:"2023年4月16日",c:["MyBatisPlus"],e:`
<blockquote>
<ol>
<li>能够基于 MyBatisPlus 完成标准Dao开发</li>
<li>能够掌握 MyBatisPlus 的条件查询</li>
<li>能够掌握 MyBatisPlus 的字段映射与表名映射</li>
<li>能够掌握 id 生成策略控制</li>
<li>能够理解代码生成器的相关配置</li>
</ol>
</blockquote>
<h2>1 MyBatisPlus简介</h2>
<h3>1.1 入门案例</h3>
<p>MyBatisPlus环境搭建的步骤？</p>
<h4>SpringBoot整合MyBatisPlus入门程序</h4>
<h5>①：创建新模块，选择Spring初始化，并配置模块相关基础信息</h5>`,r:{minutes:10.66,words:3199},y:"a",t:"MybatisPlus入门",O:1}}],["/BackEnd/MybatisPlus/mybatisplus02.html",{loader:()=>m(()=>import("./mybatisplus02.html-C8J2L8C6.js"),__vite__mapDeps([33,1])),meta:{d:16816032e5,l:"2023年4月16日",c:["MyBatisPlus"],e:`
<h2>1 快速开发-代码生成器</h2>
<p>如果只给一张表的字段信息，能够推演出Domain、Dao层的代码？</p>
<h3>1.1 MyBatisPlus提供模板</h3>
<ul>
<li>Mapper接口模板</li>
</ul>
<figure><figcaption> </figcaption></figure>
<ul>
<li>实体对象类模板</li>
</ul>
<figure><figcaption> </figcaption></figure>
<h3>1.2 工程搭建和基本代码编写</h3>
<ul>
<li>第一步：创建SpringBoot工程，添加代码生成器相关依赖，其他依赖自行添加</li>
</ul>`,r:{minutes:1.85,words:556},y:"a",t:"MybatisPlus代码生成器",O:2}}],["/BackEnd/Spring/",{loader:()=>m(()=>import("./index.html-D6I6jttk.js"),__vite__mapDeps([34,1])),meta:{d:16805664e5,l:"2023年4月4日",c:["Spring"],e:`
`,r:{minutes:2.39,words:717},y:"a",t:"Spring"}}],["/BackEnd/Spring/spring01.html",{loader:()=>m(()=>import("./spring01.html-C0tVrXXp.js"),__vite__mapDeps([35,1])),meta:{d:16815168e5,l:"2023年4月15日",c:["Spring","Ioc","DI"],e:`
<blockquote>
<ol>
<li>掌握 Spring 相关概念</li>
<li>完成 IOC/DI 的入门案例编写</li>
<li>掌握 IOC 的相关配置与使用</li>
<li>掌握 DI 的相关配置与使用</li>
</ol>
</blockquote>
<h2>1 Spring核心概念</h2>
<figure><figcaption> </figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">代码在编写过程中遇到的问题</p>
<ol>
<li>
<p>业务层需要调用数据层的方法，就需要在业务层new数据层的对象 </p>
</li>
<li>
<p>如果数据层的实现类发生变化，那么业务层的代码也需要跟着改变 </p>
</li>
<li>
<p>发生变更后，都需要进行编译打包和重新部署</p>
</li>
</ol>
</div>`,r:{minutes:34.51,words:10352},y:"a",t:"Spring IOC DI",O:1}}],["/BackEnd/Spring/spring02.html",{loader:()=>m(()=>import("./spring02.html-D6ajG2K-.js"),__vite__mapDeps([36,1])),meta:{d:16816896e5,l:"2023年4月17日",c:["Spring","Ioc","DI"],e:`
<blockquote>
<ol>
<li>掌握 IOC/DI 配置管理第三方bean</li>
<li>掌握 IOC/DI 的注解开发</li>
<li>掌握 IOC/DI 注解管理第三方bean</li>
<li>完成Spring与Mybatis及Junit的整合开发</li>
</ol>
</blockquote>
<h2>1 IOC/DI 配置管理第三方bean</h2>
<h3>1.1 案例：数据源对象管理</h3>
<p>通过数据源<code>Druid(德鲁伊)</code>和<code>C3P0</code>来配置学习</p>
<h4>1.1.1 环境准备</h4>
<ul>
<li>
<p>创建一个Maven项目</p>
<figure><figcaption> </figcaption></figure>
</li>
<li>
<p>pom.xml添加依赖</p>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-context<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.10.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li>
<li>
<p>resources下添加spring的配置文件applicationContext.xml</p>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
            http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li>
<li>
<p>编写一个运行类App</p>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">"applicationContext.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
</ul>`,r:{minutes:34.74,words:10421},y:"a",t:"Spring IOC DI 注解开发",O:2}}],["/BackEnd/Spring/spring03.html",{loader:()=>m(()=>import("./spring03.html-BrL2dJG_.js"),__vite__mapDeps([37,1])),meta:{d:16815168e5,l:"2023年4月15日",c:["Spring"],v:"/assets/bgImage/iTab-85oxlo.webp",e:`
<blockquote>
<ul>
<li>理解并掌握AOP相关概念</li>
<li>能够说出AOP的工作流程</li>
<li>能运用AOP相关知识完成对应的案例编写</li>
<li>重点掌握Spring的声明式事务管理</li>
</ul>
</blockquote>
<h2>1 AOP简介</h2>
<h3>1.1 什么是AOP?</h3>
<ul>
<li>AOP(Aspect Oriented Programming) 面向切面编程，一种编程范式，指导开发者如何组织程序结构</li>
<li>OOP(Object Oriented Programming) 面向对象编程</li>
</ul>`,r:{minutes:49.87,words:14961},y:"a",t:"Spring AOP",O:3}}],["/BackEnd/SpringBoot/",{loader:()=>m(()=>import("./index.html-mupEL_Ip.js"),__vite__mapDeps([38,1])),meta:{d:16805664e5,l:"2023年4月4日",c:["SpringBoot"],e:`
`,r:{minutes:1.1,words:330},y:"a",t:"SpringBoot"}}],["/BackEnd/SpringBoot/springboot01.html",{loader:()=>m(()=>import("./springboot01.html-BiCRZaes.js"),__vite__mapDeps([39,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot"],e:`
<figure><figcaption> </figcaption></figure>
<p>SpringBoot进行web程序开发时，内置了一个核心的Servlet程序 DispatcherServlet，称之为<code>核心控制器</code><br>
DispatcherServlet 负责接收页面发送的请求，然后根据执行的规则，将请求再转发给后面的请求处理器Controller，请求处理器处理完请求之后，最终再由DispatcherServlet给浏览器响应数据。</p>
<figure><figcaption> </figcaption></figure>
<p>请求到达Tomcat之后，Tomcat会负责解析这些请求数据，解析后的请求数据会传递给Servlet程序的 HttpServletRequest 对象，也意味着 HttpServletRequest 对象就可以获取到请求数据。 而Tomcat，还给Servlet程序传递了一个参数 HttpServletResponse，通过这个对象，可以给浏览器设置响应数据 。</p>`,r:{minutes:23.28,words:6985},y:"a",t:"SpringBoot请求响应",O:1}}],["/BackEnd/SpringBoot/springboot02.html",{loader:()=>m(()=>import("./springboot02.html-dPf_yt4H.js"),__vite__mapDeps([40,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot案例"],e:`
<h2>1. 准备工作</h2>
<h3>1.1 需求</h3>
<p><strong>部门管理</strong>:</p>
<figure><figcaption> </figcaption></figure>
<p>部门管理功能开发包括：</p>
<ul>
<li>查询部门列表</li>
<li>删除部门</li>
<li>新增部门</li>
<li>修改部门</li>
</ul>
<p><strong>员工管理</strong>:</p>
<figure><figcaption> </figcaption></figure>
<p>员工管理功能开发包括：</p>
<ul>
<li>查询员工列表(分页、条件)</li>
<li>删除员工</li>
<li>新增员工</li>
<li>修改员工</li>
</ul>`,r:{minutes:5.98,words:1794},y:"a",t:"SpringBoot案例 ⅓",O:2}}],["/BackEnd/SpringBoot/springboot03.html",{loader:()=>m(()=>import("./springboot03.html-ZuTRmGnU.js"),__vite__mapDeps([41,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot案例"],e:`
<h2>1. 部门管理</h2>
<p>开发的部门管理功能包含：</p>
<ol>
<li>查询部门</li>
<li>删除部门</li>
<li>新增部门</li>
<li>更新部门</li>
</ol>
<h3>1.1 查询部门</h3>
<h4>1.1.1 原型和需求</h4>
<figure><figcaption> </figcaption></figure>
<h4>1.1.2 接口文档</h4>
<p><strong>部门列表查询</strong>:</p>
<ul>
<li>
<p>基本信息</p>
<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>请求路径：/depts

请求方式：GET

接口描述：该接口用于部门列表数据查询
</code></pre></div></li>
<li>
<p>请求参数</p>
<p>无</p>
</li>
<li>
<p>响应数据</p>
<p>参数格式：application/json</p>
<p>参数说明：</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>number</td>
<td>必须</td>
<td>响应码，1 代表成功，0 代表失败</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>非必须</td>
<td>提示信息</td>
</tr>
<tr>
<td>data</td>
<td>object[ ]</td>
<td>非必须</td>
<td>返回的数据</td>
</tr>
<tr>
<td>|- id</td>
<td>number</td>
<td>非必须</td>
<td>id</td>
</tr>
<tr>
<td>|- name</td>
<td>string</td>
<td>非必须</td>
<td>部门名称</td>
</tr>
<tr>
<td>|- createTime</td>
<td>string</td>
<td>非必须</td>
<td>创建时间</td>
</tr>
<tr>
<td>|- updateTime</td>
<td>string</td>
<td>非必须</td>
<td>修改时间</td>
</tr>
</tbody>
</table>
<p>响应数据样例：</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"学工部"</span><span class="token punctuation">,</span>
      <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token string">"2022-09-01T23:06:29"</span><span class="token punctuation">,</span>
      <span class="token property">"updateTime"</span><span class="token operator">:</span> <span class="token string">"2022-09-01T23:06:29"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"教研部"</span><span class="token punctuation">,</span>
      <span class="token property">"createTime"</span><span class="token operator">:</span> <span class="token string">"2022-09-01T23:06:29"</span><span class="token punctuation">,</span>
      <span class="token property">"updateTime"</span><span class="token operator">:</span> <span class="token string">"2022-09-01T23:06:29"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
</ul>`,r:{minutes:15.82,words:4745},y:"a",t:"SpringBoot案例 ⅔",O:3}}],["/BackEnd/SpringBoot/springboot04.html",{loader:()=>m(()=>import("./springboot04.html-C3_2XCUr.js"),__vite__mapDeps([42,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot案例","文件存储","阿里云OSS"],e:`
<p>关于员工管理的功能，还有两个需求:</p>
<ul>
<li>新增员工</li>
<li>修改员工</li>
</ul>
<figure><figcaption> </figcaption></figure>
<p>在"新增员工"中，需要添加头像，而头像需要用到"文件上传"技术。</p>
<h2>1. 新增员工</h2>
<h3>1.1 需求</h3>
<figure><figcaption> </figcaption></figure>
<h3>1.2 接口文档</h3>
<ul>
<li>
<p>基本信息</p>
<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>请求路径：/emps

请求方式：POST

接口描述：该接口用于添加员工的信息
</code></pre></div></li>
<li>
<p>请求参数</p>
<p>参数格式：application/json</p>
<p>参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>string</td>
<td>必须</td>
<td>用户名</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>必须</td>
<td>姓名</td>
</tr>
<tr>
<td>gender</td>
<td>number</td>
<td>必须</td>
<td>性别, 说明: 1 男, 2 女</td>
</tr>
<tr>
<td>image</td>
<td>string</td>
<td>非必须</td>
<td>图像</td>
</tr>
<tr>
<td>deptId</td>
<td>number</td>
<td>非必须</td>
<td>部门id</td>
</tr>
<tr>
<td>entrydate</td>
<td>string</td>
<td>非必须</td>
<td>入职日期</td>
</tr>
<tr>
<td>job</td>
<td>number</td>
<td>非必须</td>
<td>职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师</td>
</tr>
</tbody>
</table>
<p>请求数据样例：</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"https://web-framework.oss-cn-hangzhou.aliyuncs.com/2022-09-03-07-37-38222.jpg"</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"linpingzhi"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"林平之"</span><span class="token punctuation">,</span>
  <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"entrydate"</span><span class="token operator">:</span> <span class="token string">"2022-09-18"</span><span class="token punctuation">,</span>
  <span class="token property">"deptId"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>响应数据</p>
<p>参数格式：application/json</p>
<p>参数说明：</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>number</td>
<td>必须</td>
<td>响应码，1 代表成功，0 代表失败</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>非必须</td>
<td>提示信息</td>
</tr>
<tr>
<td>data</td>
<td>object</td>
<td>非必须</td>
<td>返回的数据</td>
</tr>
</tbody>
</table>
<p>响应数据样例：</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"code"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
</ul>`,r:{minutes:24.22,words:7266},y:"a",t:"SpringBoot案例 ⅟",O:4}}],["/BackEnd/SpringBoot/springboot05.html",{loader:()=>m(()=>import("./springboot05.html-BNeanmS2.js"),__vite__mapDeps([43,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot案例","Cookie","Session","令牌技术"],e:`
<h2>1. 登录功能</h2>
<h3>1.1 需求</h3>
<figure><figcaption> </figcaption></figure>
<p>输入用户名及密码，点击 "登录" 按钮就要请求服务器，服务端判断用户输入的用户名或者密码是否正确。如果正确，则返回成功结果，前端跳转至系统首页面。</p>
<h3>1.2 接口文档</h3>
<p>参照接口文档来开发登录功能</p>
<ul>
<li>
<p>基本信息</p>
<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>请求路径：/login

请求方式：POST

接口描述：该接口用于员工登录Tlias智能学习辅助系统，登录完毕后，系统下发JWT令牌。 
</code></pre></div></li>
<li>
<p>请求参数</p>
<p>参数格式：application/json</p>
<p>参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必须</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>string</td>
<td>必须</td>
<td>用户名</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>必须</td>
<td>密码</td>
</tr>
</tbody>
</table>
<p>请求数据样例：</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"jinyong"</span><span class="token punctuation">,</span>
    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"123456"</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>响应数据</p>
<p>参数格式：application/json</p>
<p>参数说明：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必须</th>
<th>默认值</th>
<th>备注</th>
<th>其他信息</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>number</td>
<td>必须</td>
<td></td>
<td>响应码, 1 成功 ; 0  失败</td>
<td></td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>非必须</td>
<td></td>
<td>提示信息</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>string</td>
<td>必须</td>
<td></td>
<td>返回的数据 , jwt令牌</td>
<td></td>
</tr>
</tbody>
</table>
<p>响应数据样例：</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token string">"eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo"</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
</ul>`,r:{minutes:42.54,words:12762},y:"a",t:"SpringBoot案例-登录认证",O:5}}],["/BackEnd/SpringBoot/springboot06.html",{loader:()=>m(()=>import("./springboot06.html-BZgDmY7x.js"),__vite__mapDeps([44,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot","AOP"],e:`
<h2>1. 事务管理</h2>
<h3>1.1 事务回顾</h3>
<p><strong>事务</strong>是一组操作的集合，它是一个不可分割的工作单位。事务会把所有的操作作为一个整体，一起向数据库提交或者是撤销操作请求。所以这组操作要么同时成功，要么同时失败。</p>
<div class="hint-container info">
<p class="hint-container-title">事务的操作</p>
<ol>
<li>开启事务（一组操作开始前，开启事务）：start transaction / begin ;</li>
<li>提交事务（这组操作全部成功后，提交事务）：commit ;</li>
<li>回滚事务（中间任何一个操作出现异常，回滚事务）：rollback ;</li>
</ol>
</div>`,r:{minutes:30.55,words:9166},y:"a",t:"SpringBoot事务、AOP",O:6}}],["/BackEnd/SpringBoot/springboot07.html",{loader:()=>m(()=>import("./springboot07.html-D4XCuYCI.js"),__vite__mapDeps([45,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["SpringBoot"],e:`
<h2>1. 配置优先级</h2>
<p>SpringBoot项目当中支持的三类配置文件：</p>
<ul>
<li>application.properties</li>
<li>application.yml</li>
<li>application.yaml</li>
</ul>
<p>properties、yaml、yml三种配置文件同时存在</p>
<figure><figcaption> </figcaption></figure>
<blockquote>
<p>properties、yaml、yml三种配置文件，优先级最高的是properties</p>
</blockquote>`,r:{minutes:37.56,words:11267},y:"a",t:"SpringBoot原理",O:7}}],["/BackEnd/SpringBoot/springboot08.html",{loader:()=>m(()=>import("./springboot08.html-DtM-NdqP.js"),__vite__mapDeps([46,1])),meta:{d:16819488e5,l:"2023年4月20日",c:["SpringBoot"],e:`
<blockquote>
<ul>
<li>掌握基于SpringBoot框架的程序开发步骤</li>
<li>熟练使用SpringBoot配置信息修改服务器配置</li>
<li>基于SpringBoot的完成SSM整合项目开发</li>
</ul>
</blockquote>
<h2>1 SpringBoot简介</h2>
<p>SpringBoot 是由 Pivotal 团队提供的全新框架，其设计目的是用来<strong>简化</strong> Spring 应用的<strong>初始搭建</strong>以及<strong>开发过程</strong></p>
<p>回顾一下 SpringMVC 开发</p>`,r:{minutes:24.36,words:7308},y:"a",t:"SpringBoot整合",O:8}}],["/BackEnd/SpringCloud/",{loader:()=>m(()=>import("./index.html-CofcT5XP.js"),__vite__mapDeps([47,1])),meta:{d:16872192e5,l:"2023年6月20日",c:["SpringCloud"],e:`
<p>随着互联网行业的发展，对服务的要求也越来越高，服务架构也从单体架构逐渐演变为现在流行的微服务架构</p>
<blockquote>
<p>这些架构之间有怎样的差别呢？</p>
<p>Target：了解微服务架构的优缺点</p>
</blockquote>
<h2>1 单体架构</h2>
<p><strong>单体架构</strong>：将业务的所有功能集中在一个项目中开发，打成一个包部署。</p>
<figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620132746.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>`,r:{minutes:2.95,words:886},y:"a",t:"认识微服务"}}],["/BackEnd/SpringCloud/springcloud01.html",{loader:()=>m(()=>import("./springcloud01.html-D2ZCwnPW.js"),__vite__mapDeps([48,1])),meta:{d:16872192e5,l:"2023年6月20日",c:["SpringCloud","Enreka"],e:`
<h2>1 服务拆分和远程调用</h2>
<p>任何分布式架构都离不开服务的拆分，微服务也是一样。</p>
<h3>1.1 服务拆分原则</h3>
<ul>
<li>不同微服务，不要重复开发相同业务</li>
<li>微服务数据独立，不要访问其它微服务的数据库</li>
<li>微服务可以将自己的业务暴露为接口，供其它微服务调用</li>
</ul>
<figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620185721.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>`,r:{minutes:12.33,words:3700},y:"a",t:"Enreka",O:1}}],["/BackEnd/SpringCloud/springcloud02.html",{loader:()=>m(()=>import("./springcloud02.html-BrW1JYWd.js"),__vite__mapDeps([49,1])),meta:{d:16873056e5,l:"2023年6月21日",c:["SpringCloud","Nacos"],e:`
<h2>1 Nacos注册中心</h2>
<p>国内公司一般都推崇阿里巴巴的技术，比如注册中心，SpringCloudAlibaba也推出了一个名为Nacos的注册中心</p>
<h3>1.1 认识和安装Nacos</h3>
<p><a href="https://nacos.io/" target="_blank" rel="noopener noreferrer">Nacos</a>是阿里巴巴的产品，现在是<a href="https://spring.io/projects/spring-cloud" target="_blank" rel="noopener noreferrer">SpringCloud</a>中的一个组件。相比<a href="https://github.com/Netflix/eureka" target="_blank" rel="noopener noreferrer">Eureka</a>功能更加丰富，在国内受欢迎程度较高</p>`,r:{minutes:9.22,words:2767},y:"a",t:"Nacos",O:2}}],["/BackEnd/SpringCloud/springcloud03.html",{loader:()=>m(()=>import("./springcloud03.html-DRe71QYe.js"),__vite__mapDeps([50,1])),meta:{d:1687392e6,l:"2023年6月22日",c:["SpringCloud","Feign"],e:`
<h2>1 Feign远程调用</h2>
<p>先来看我们以前利用RestTemplate发起远程调用的代码：</p>
<figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230621185722.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<p>存在下面的问题：</p>
<ul>
<li>
<p>代码可读性差，编程体验不统一</p>
</li>
<li>
<p>参数复杂URL难以维护</p>
</li>
</ul>`,r:{minutes:5.96,words:1787},y:"a",t:"Feign",O:3}}],["/BackEnd/SpringCloud/springcloud04.html",{loader:()=>m(()=>import("./springcloud04.html-FCwKOuQO.js"),__vite__mapDeps([51,1])),meta:{d:1687392e6,l:"2023年6月22日",c:["SpringCloud","Gateway"],e:`
<h2>1 Gateway服务网关</h2>
<p>Spring Cloud Gateway 是 Spring Cloud 的一个全新项目，该项目是基于 Spring 5.0，Spring Boot 2.0 和 Project Reactor 等响应式编程和事件流技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。</p>
<h3>1.1 为什么需要网关</h3>
<p>Gateway网关是我们服务的守门神，所有微服务的统一入口。</p>
<p>网关的<strong>核心功能特性</strong>：</p>
<ul>
<li>请求路由</li>
<li>权限控制</li>
<li>限流</li>
</ul>`,r:{minutes:8.88,words:2665},y:"a",t:"Gateway",O:4}}],["/BackEnd/SpringCloud/springcloud05.html",{loader:()=>m(()=>import("./springcloud05.html-BcZB5N3w.js"),__vite__mapDeps([52,1])),meta:{d:1687392e6,l:"2023年6月22日",c:["SpringCloud","Docker"],e:`
<h2>1.初识Docker</h2>
<h3>1.1.什么是Docker</h3>
<p>微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。</p>
<ul>
<li>分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。</li>
<li>在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题</li>
</ul>
<h4>1.1.1.应用部署的环境问题</h4>
<p>大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题：</p>
<ul>
<li>
<p>依赖关系复杂，容易出现兼容性问题</p>
</li>
<li>
<p>开发、测试、生产环境有差异</p>
</li>
</ul>`,r:{minutes:22.39,words:6716},y:"a",t:"Docker",O:5}}],["/BackEnd/SpringCloud/springcloud06.html",{loader:()=>m(()=>import("./springcloud06.html-IytzXLgr.js"),__vite__mapDeps([53,1])),meta:{d:1687392e6,l:"2023年6月22日",c:["SpringCloud","RabbitMQ"],e:`
<h2>1.初识MQ</h2>
<h3>1.1.同步和异步通讯</h3>
<p>微服务间通讯有同步和异步两种方式：</p>
<p>同步通讯：就像打电话，需要实时响应<br>
异步通讯：就像发邮件，不需要马上回复</p>
<figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230630120206.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<p>两种方式各有优劣，打电话可以立即得到响应，但是你却不能跟多个人同时通话。发送邮件可以同时与多个人收发邮件，但是往往响应会有延迟</p>`,r:{minutes:15.71,words:4714},y:"a",t:"RabbitMQ",O:6}}],["/BackEnd/SpringCloud/springcloud07.html",{loader:()=>m(()=>import("./springcloud07.html-a4fADyb2.js"),__vite__mapDeps([54,1])),meta:{d:1687392e6,l:"2023年6月22日",c:["SpringCloud","ElasticSearch"],e:`
<h2>1.初识elasticsearch</h2>
<h3>1.1.了解ES</h3>
<h4>1.1.1.elasticsearch的作用</h4>
<p>elasticsearch是一款非常强大的开源搜索引擎，具备非常多强大功能，可以帮助我们从海量数据中快速找到需要的内容</p>
<p>例如：</p>
<ul>
<li>在GitHub搜索代码</li>
<li>在电商网站搜索商品</li>
<li>在百度搜索答案</li>
<li>在打车软件搜索附近的车</li>
</ul>
<h4>1.1.2.ELK技术栈</h4>
<p>elasticsearch结合kibana、Logstash、Beats，也就是elastic stack（ELK）。被广泛应用在日志数据分析、实时监控等领域：</p>`,r:{minutes:22.43,words:6730},y:"a",t:"ElasticSearch01",O:7}}],["/BackEnd/SpringCloud/springcloud08.html",{loader:()=>m(()=>import("./springcloud08.html-DVbvfNbj.js"),__vite__mapDeps([55,1])),meta:{d:1687392e6,l:"2023年6月22日",c:["SpringCloud","ElasticSearch"],e:`
<p>昨天已经导入了大量数据到elasticsearch中，实现了elasticsearch的数据存储功能。但elasticsearch最擅长的还是搜索和数据分析。</p>
<p>分别使用<strong>DSL</strong>和<strong>RestClient</strong>实现搜索。</p>
<h2>1.DSL查询文档</h2>
<p>elasticsearch的查询依然是基于JSON风格的DSL来实现的。</p>
<h3>1.1.DSL查询分类</h3>
<p>Elasticsearch提供了基于JSON的DSL（<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" target="_blank" rel="noopener noreferrer">Domain Specific Language</a>）来定义查询。常见的查询类型包括：</p>`,r:{minutes:30.85,words:9256},y:"a",t:"ElasticSearch02",O:8}}],["/BackEnd/SpringCloud/springcloud09.html",{loader:()=>m(()=>import("./springcloud09.html-CzN7FTYS.js"),__vite__mapDeps([56,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud","ElasticSearch"],e:`
<h2>1.数据聚合</h2>
<p><strong>聚合</strong>可以让我们极其方便的实现对数据的统计、分析、运算。例如：</p>
<ul>
<li>什么品牌的手机最受欢迎？</li>
<li>这些手机的平均价格、最高价格、最低价格？</li>
<li>这些手机每月的销售情况如何？</li>
</ul>
<p>实现这些统计功能的比数据库的sql要方便的多，而且查询速度非常快，可以实现近实时搜索效果。</p>
<h3>1.1.聚合的种类</h3>
<p>聚合常见的有三类：</p>
<ul>
<li>
<p>**桶（Bucket）**聚合：用来对文档做分组</p>
<ul>
<li>TermAggregation：按照文档字段值分组，例如按照品牌值分组、按照国家分组</li>
<li>Date Histogram：按照日期阶梯分组，例如一周为一组，或者一月为一组</li>
</ul>
</li>
<li>
<p>**度量（Metric）**聚合：用以计算一些值，比如：最大值、最小值、平均值等</p>
<ul>
<li>Avg：求平均值</li>
<li>Max：求最大值</li>
<li>Min：求最小值</li>
<li>Stats：同时求max、min、avg、sum等</li>
</ul>
</li>
<li>
<p>**管道（pipeline）**聚合：其它聚合的结果为基础做聚合</p>
</li>
</ul>`,r:{minutes:21.1,words:6331},y:"a",t:"ElasticSearch03",O:9}}],["/BackEnd/SpringCloud/springcloud10.html",{loader:()=>m(()=>import("./springcloud10.html-jkeM9ZbE.js"),__vite__mapDeps([57,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"10",O:10}}],["/BackEnd/SpringCloud/springcloud11.html",{loader:()=>m(()=>import("./springcloud11.html-4EnW6WHK.js"),__vite__mapDeps([58,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"11",O:11}}],["/BackEnd/SpringCloud/springcloud12.html",{loader:()=>m(()=>import("./springcloud12.html-CSWlEoez.js"),__vite__mapDeps([59,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"12",O:12}}],["/BackEnd/SpringCloud/springcloud13.html",{loader:()=>m(()=>import("./springcloud13.html-O7bmklkk.js"),__vite__mapDeps([60,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"13",O:13}}],["/BackEnd/SpringCloud/springcloud14.html",{loader:()=>m(()=>import("./springcloud14.html-C0oW1728.js"),__vite__mapDeps([61,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"14",O:14}}],["/BackEnd/SpringCloud/springcloud15.html",{loader:()=>m(()=>import("./springcloud15.html-DMcWDau-.js"),__vite__mapDeps([62,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"15",O:15}}],["/BackEnd/SpringCloud/springcloud16.html",{loader:()=>m(()=>import("./springcloud16.html-jWL_YFNF.js"),__vite__mapDeps([63,1])),meta:{d:16880832e5,l:"2023年6月30日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"16",O:16}}],["/BackEnd/SpringCloud/springcloud17.html",{loader:()=>m(()=>import("./springcloud17.html-BRdOo9_k.js"),__vite__mapDeps([64,1])),meta:{d:16893792e5,l:"2023年7月15日",c:["SpringCloud"],e:`
`,r:{minutes:.03,words:9},y:"a",t:"17",O:17}}],["/BackEnd/SpringMVC/",{loader:()=>m(()=>import("./index.html-BCytSo0m.js"),__vite__mapDeps([65,1])),meta:{d:16805664e5,l:"2023年4月4日",c:["SpringMVC"],e:`
<h2>1 SpringMVC简介</h2>
<blockquote>
<p>SpringMVC 隶属于 Spring ，是 Spring 技术中的一部分</p>
</blockquote>
<p>SpringMVC 与 Servlet 技术功能等同，均属于web层或者说是表现层开发技术</p>
<div class="hint-container tip">
<p class="hint-container-title">SpringMVC 与 Servlet相比</p>
<p>开发起来更简单快捷，用更少的代码完成表现层代码的开发</p>
</div>
<h3>1.1 Servlet例子</h3>`,r:{minutes:3.08,words:924},y:"a",t:"SpringMVC"}}],["/BackEnd/SpringMVC/springmvc01.html",{loader:()=>m(()=>import("./springmvc01.html-B1h0Kbkl.js"),__vite__mapDeps([66,1])),meta:{d:16816896e5,l:"2023年4月17日",c:["SpringMVC"],e:`
<h2>1 SpringMVC入门案例</h2>
<p>先回顾Servlet是如何进行开发的?</p>
<figure><figcaption> </figcaption></figure>
<ol>
<li>
<p>浏览器发送请求到Tomcat服务器</p>
</li>
<li>
<p>Tomcat服务器接收到请求后，会根据请求路径来匹配对应的Servlet，并将请求交给对应的Servlet来处理</p>
</li>
</ol>
<blockquote>
<p>对于Servlet来说，主要完成的是Servlet类的开发以及对应路径的配置</p>
</blockquote>
<hr>
<p>那么对于SpringMVC程序的流程会是什么样的呢?</p>`,r:{minutes:41.78,words:12534},y:"a",t:"SpringMVC 入门",O:1}}],["/BackEnd/SpringMVC/springmvc02.html",{loader:()=>m(()=>import("./springmvc02.html-DU-G4wTx.js"),__vite__mapDeps([67,1])),meta:{d:16816896e5,l:"2023年4月17日",c:["SpringMVC","SSM"],e:`
<blockquote>
<ul>
<li>完成SSM的整合开发</li>
<li>能够理解并实现统一结果封装与统一异常处理</li>
<li>能够完成前后台功能整合开发</li>
<li>掌握拦截器的编写</li>
</ul>
</blockquote>
<h2>1 SSM整合</h2>
<p><code>Mybatis</code>、<code>Spring</code> 和 <code>SpringMVC</code> 三个框架</p>
<h3>1.1 流程分析</h3>
<p>(1) 创建工程</p>
<ul>
<li>创建一个Maven的web工程</li>
<li>pom.xml添加SSM需要的依赖jar包</li>
<li>编写Web项目的入口配置类，实现<code>AbstractAnnotationConfigDispatcherServletInitializer</code>重写以下方法
<ul>
<li>getRootConfigClasses()  ：返回Spring的配置类-&gt;需要<strong>SpringConfig</strong>配置类</li>
<li>getServletConfigClasses() ：返回SpringMVC的配置类-&gt;需要<strong>SpringMvcConfig</strong>配置类</li>
<li>getServletMappings()      : 设置SpringMVC请求拦截路径规则</li>
<li>getServletFilters()       ：设置过滤器，解决POST请求中文乱码问题</li>
</ul>
</li>
</ul>`,r:{minutes:36.92,words:11077},y:"a",t:"SpringMVC SSM整合",O:2}}],["/ComputerBasics/Algorithm/",{loader:()=>m(()=>import("./index.html-Dklz8pGc.js"),__vite__mapDeps([68,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法"],e:`
<p>算法，启动！</p>
`,r:{minutes:.1,words:29},y:"a",t:"Algorithm"}}],["/ComputerBasics/ComputerNetwork/",{loader:()=>m(()=>import("./index.html-DUtwaO1H.js"),__vite__mapDeps([69,1])),meta:{d:16838496e5,l:"2023年5月12日",c:["计算机网络"],e:`
<h2>1. 计算机网络体系结构</h2>
<h3>1.1 简介</h3>
<p>定义：计算机网络的各层 + 其协议的集合</p>
<p>作用：定义该计算机网络的所能完成的功能</p>
<h3>1.2 结构介绍</h3>
<ul>
<li>
<p>计算机网络体系结构分为3种：OSI体系结构、TCP / IP体系结构、五层体系结构。</p>
</li>
<li>
<p>OSI 体系结构：概念清楚 &amp; 理念完整，但复杂 &amp; 不实用；</p>
</li>
<li>
<p>TCP / IP 体系结构：含了一系列构成互联网基础的网络协议，是Internet的核心协议 &amp; 被广泛应用于局域网和广域网；
五层体系结构：融合了OSI 与 TCP / IP的体系结构，目的是为了学习 &amp; 讲解计算机原理。</p>
</li>
</ul>`,r:{minutes:.8,words:240},y:"a",t:"Computer Network"}}],["/ComputerBasics/ComputerNetwork/computernetword01.html",{loader:()=>m(()=>import("./computernetword01.html-CqWmHzEP.js"),__vite__mapDeps([70,1])),meta:{d:16838496e5,l:"2023年5月12日",c:["计算机网络"],e:`
<h2>1 网桥模式、路由模式、NAT模式、旁路模式</h2>
<h3>1.1 网桥模式</h3>
<ul>
<li>
<p>网桥模式是计算机网络中的一种网络设备工作模式，它可以连接多个局域网（LAN）并转发数据帧以实现不同网段之间的通信。网桥是一个二层设备，它在物理层和数据链路层工作，可以识别数据帧的目的MAC地址，并将数据帧转发到正确的目标端口。网桥可以减少网络中的广播风暴，提高网络性能和安全性。</p>
<p>在网桥模式中，多个局域网连接到网桥的不同端口上，网桥通过学习每个端口上连接的设备的MAC地址，建立一个MAC地址表，从而可以转发数据帧到正确的目标端口。当数据帧到达网桥时，网桥会检查数据帧的目的MAC地址，并将数据帧转发到MAC地址表中对应的端口上，如果该地址不在MAC地址表中，则将数据帧广播到所有端口上，以便学习新的MAC地址。</p>
</li>
</ul>`,r:{minutes:7.46,words:2238},y:"a",t:"计算机网络01",O:1}}],["/ComputerBasics/ComputerNetwork/computernetwork02.html",{loader:()=>m(()=>import("./computernetwork02.html-CqQnZg_Q.js"),__vite__mapDeps([71,1])),meta:{d:16838496e5,l:"2023年5月12日",c:["计算机网络"],e:`
<h2>1 snmp协议的概念</h2>
<p>SNMP（Simple Network Management Protocol）是一种用于网络管理的应用层协议，它可以在网络中的设备之间进行通信和信息交换，从而实现对网络设备的监控、配置和管理。SNMP协议定义了一组标准的消息格式和协议操作，可以实现对网络设备的远程管理和监控。</p>
<p><strong>SNMP协议主要包括以下几个部分</strong>：</p>
<ol>
<li>
<p>管理站：指执行网络管理任务的计算机或者设备，使用SNMP协议向网络设备发送请求，获取设备的状态信息。</p>
</li>
<li>
<p>管理代理：指网络设备上的软件模块，用于响应管理站的请求，提供设备的状态信息和配置数据。</p>
</li>
<li>
<p>管理信息库：指保存在管理代理中的设备状态信息和配置数据，可以由管理站查询和修改。</p>
</li>
<li>
<p>管理对象：指网络设备中的各种资源，例如接口、路由表、系统信息等，可以由管理站查询和配置。</p>
</li>
</ol>`,r:{minutes:6.33,words:1899},y:"a",t:"计算机网络02",O:2}}],["/ComputerBasics/DataStructure/",{loader:()=>m(()=>import("./index.html-CqWMba3L.js"),__vite__mapDeps([72,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["数据结构"],e:`
<p>数据结构，启动！</p>
`,r:{minutes:.11,words:34},y:"a",t:"Data Structure"}}],["/ComputerBasics/OpreatingSystem/",{loader:()=>m(()=>import("./index.html-C4VtXfcX.js"),__vite__mapDeps([73,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["操作系统"],e:`
`,r:{minutes:.09,words:28},y:"a",t:"Opreating System"}}],["/Database/NoSQL/",{loader:()=>m(()=>import("./index.html-FP5FMtxV.js"),__vite__mapDeps([74,1])),meta:{d:1681268086e3,e:`
`,r:{minutes:.03,words:8},y:"a",t:"NoSQL"}}],["/Database/SQL/",{loader:()=>m(()=>import("./index.html-C00Vvad6.js"),__vite__mapDeps([75,1])),meta:{d:16807392e5,l:"2023年4月6日",c:["SQL基础"],e:`
`,r:{minutes:3.91,words:1174},y:"a",t:"MySQL",O:1}}],["/FrontEnd/CSS/",{loader:()=>m(()=>import("./index.html-CF9mdHgS.js"),__vite__mapDeps([76,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Front End","CSS"],e:`
`,r:{minutes:.12,words:37},y:"a",t:"什么是CSS ?"}}],["/FrontEnd/CSS/css01.html",{loader:()=>m(()=>import("./css01.html-CTp5XXmI.js"),__vite__mapDeps([77,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["CSS"],e:`
`,r:{minutes:.72,words:216},y:"a",t:"CSS引入方式",O:1}}],["/FrontEnd/CSS/css02.html",{loader:()=>m(()=>import("./css02.html-CI4ygQAo.js"),__vite__mapDeps([78,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["CSS"],e:`
`,r:{minutes:.99,words:298},y:"a",t:"CSS选择器",O:2}}],["/FrontEnd/CSS/css03.html",{loader:()=>m(()=>import("./css03.html-BBansr1c.js"),__vite__mapDeps([79,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["CSS"],e:`
`,r:{minutes:4.27,words:1281},y:"a",t:"CSS页面布局",O:3}}],["/FrontEnd/HTML/",{loader:()=>m(()=>import("./index.html-CvgAaU11.js"),__vite__mapDeps([80,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Front End","HTML"],e:`
`,r:{minutes:.46,words:137},y:"a",t:"Introduction to front-end"}}],["/FrontEnd/HTML/html01.html",{loader:()=>m(()=>import("./html01.html-BKdVNsli.js"),__vite__mapDeps([81,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["HTML"],e:`
`,r:{minutes:.43,words:130},y:"a",t:"什么是HTML ?",O:1}}],["/FrontEnd/HTML/html02.html",{loader:()=>m(()=>import("./html02.html-S1cjljBD.js"),__vite__mapDeps([82,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["HTML"],e:`
`,r:{minutes:1.34,words:403},y:"a",t:"HTML标签",O:2}}],["/FrontEnd/HTML/html03.html",{loader:()=>m(()=>import("./html03.html-C9nrfqIC.js"),__vite__mapDeps([83,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["HTML"],e:`
`,r:{minutes:3.86,words:1157},y:"a",t:"HTML标签",O:3}}],["/FrontEnd/JavaScript/",{loader:()=>m(()=>import("./index.html-BZzddRYH.js"),__vite__mapDeps([84,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Front End","JavaScript"],e:`
`,r:{minutes:.19,words:58},y:"a",t:"JavaScript"}}],["/FrontEnd/JavaScript/javascript01.html",{loader:()=>m(()=>import("./javascript01.html-CgnUOJwQ.js"),__vite__mapDeps([85,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["JavaScript"],e:`
`,r:{minutes:1.82,words:545},y:"a",t:"基础语法",O:1}}],["/FrontEnd/JavaScript/javascript02.html",{loader:()=>m(()=>import("./javascript02.html-DVOoMCrm.js"),__vite__mapDeps([86,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["JavaScript"],e:`
`,r:{minutes:3.2,words:960},y:"a",t:"基本对象",O:2}}],["/FrontEnd/JavaScript/javascript03.html",{loader:()=>m(()=>import("./javascript03.html-D5AJ_Oiv.js"),__vite__mapDeps([87,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["JavaScript"],e:`
`,r:{minutes:1.82,words:546},y:"a",t:"BOM对象",O:3}}],["/FrontEnd/JavaScript/javascript04.html",{loader:()=>m(()=>import("./javascript04.html-B-eF7eX-.js"),__vite__mapDeps([88,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["JavaScript"],e:`
`,r:{minutes:3.75,words:1126},y:"a",t:"DOM对象",O:4}}],["/FrontEnd/JavaScript/javascript05.html",{loader:()=>m(()=>import("./javascript05.html-DPU4BnMS.js"),__vite__mapDeps([89,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["JavaScript"],e:`
`,r:{minutes:3.16,words:948},y:"a",t:"事件",O:5}}],["/FrontEnd/Vue/",{loader:()=>m(()=>import("./index.html-C-eCSrGO.js"),__vite__mapDeps([90,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Front End","Vue"],e:`
`,r:{minutes:1.62,words:486},y:"a",t:"Vue概述"}}],["/FrontEnd/Vue/vue01.html",{loader:()=>m(()=>import("./vue01.html-DxBICxJ8.js"),__vite__mapDeps([91,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:7.91,words:2372},y:"a",t:"Vue指令",O:1}}],["/FrontEnd/Vue/vue02.html",{loader:()=>m(()=>import("./vue02.html-B6Xdu4P0.js"),__vite__mapDeps([92,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:1.07,words:320},y:"a",t:"Vue生命周期",O:2}}],["/FrontEnd/Vue/vue03.html",{loader:()=>m(()=>import("./vue03.html-GSnVqsKK.js"),__vite__mapDeps([93,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:7.23,words:2169},y:"a",t:"AJAX",O:3}}],["/FrontEnd/Vue/vue04.html",{loader:()=>m(()=>import("./vue04.html-DOVBpgLn.js"),__vite__mapDeps([94,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:1.64,words:493},y:"a",t:"Vue-cli脚手架",O:4}}],["/FrontEnd/Vue/vue05.html",{loader:()=>m(()=>import("./vue05.html-BJi9XueR.js"),__vite__mapDeps([95,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:12.32,words:3695},y:"a",t:"Element-UI",O:5}}],["/FrontEnd/Vue/vue06.html",{loader:()=>m(()=>import("./vue06.html-CduDEvPW.js"),__vite__mapDeps([96,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:1.93,words:579},y:"a",t:"Vue路由",O:6}}],["/FrontEnd/Vue/vue07.html",{loader:()=>m(()=>import("./vue07.html-BORlp5h4.js"),__vite__mapDeps([97,1])),meta:{d:16784064e5,l:"2023年3月10日",c:["Vue"],e:`
`,r:{minutes:.87,words:261},y:"a",t:"打包部署",O:7}}],["/Others/BroadBand/",{loader:()=>m(()=>import("./index.html-CLD-cKIY.js"),__vite__mapDeps([98,1])),meta:{d:16816896e5,l:"2023年4月17日",g:["宽带"],e:`
<h2>1. 网线</h2>
<table>
<thead>
<tr>
<th></th>
<th>CAT.5</th>
<th>CAT.5E</th>
<th>CAT.6</th>
<th>CAT.6A</th>
<th>CAT.7</th>
<th>CAT.8</th>
</tr>
</thead>
<tbody>
<tr>
<td>传输速率</td>
<td>100Mbps</td>
<td>1000Mbps</td>
<td>1Gbps</td>
<td>10Gbps</td>
<td>10Gbps</td>
<td>25/40Gbps</td>
</tr>
<tr>
<td>传输频率</td>
<td>100MHz</td>
<td>100MHz</td>
<td>250MHz</td>
<td>500MHz</td>
<td>600MHz</td>
<td>2000MHz</td>
</tr>
<tr>
<td>最大距离</td>
<td>100m</td>
<td>100m</td>
<td>100m</td>
<td>100m</td>
<td>100m</td>
<td>30m</td>
</tr>
<tr>
<td>线缆类型</td>
<td>非屏蔽</td>
<td>屏蔽/非屏蔽</td>
<td>屏蔽/非屏蔽</td>
<td>屏蔽/非屏蔽</td>
<td>双层屏蔽</td>
<td>双层屏蔽</td>
</tr>
</tbody>
</table>`,r:{minutes:2.08,words:625},y:"a",t:"宽带"}}],["/Others/Demo/",{loader:()=>m(()=>import("./index.html-DqYg0maC.js"),__vite__mapDeps([99,1])),meta:{d:1701430325e3,c:["使用指南"],e:`<h2>目录</h2>
<ul>
<li>
<p><a href="/Others/Demo/page.html" target="_blank">页面展示</a></p>
</li>
<li>
<p><a href="/Others/Demo/disable.html" target="_blank">禁用展示</a></p>
</li>
</ul>
`,r:{minutes:.1,words:29},y:"a",t:"主要功能与配置演示"}}],["/Others/Demo/disable.html",{loader:()=>m(()=>import("./disable.html-DfOGrLx5.js"),__vite__mapDeps([100,1])),meta:{d:1701430325e3,c:["使用指南"],g:["禁用"],e:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,r:{minutes:.42,words:126},y:"a",t:"布局与功能禁用",O:3}}],["/Others/Demo/page.html",{loader:()=>m(()=>import("./page.html-DCBc2ci0.js"),__vite__mapDeps([101,1])),meta:{a:"Ms.Hope",d:15778368e5,l:"2020年1月1日",c:["使用指南"],g:["页面配置","使用指南"],u:!0,v:"/assets/bgImage/iTab-dpvvgm.jpg",e:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,r:{minutes:1.44,words:433},y:"a",t:"页面配置",O:1}}],["/Others/ElectronicProduct/",{loader:()=>m(()=>import("./index.html-DprP0Qqo.js"),__vite__mapDeps([102,1])),meta:{y:"h",t:"电子产品"}}],["/Others/ElectronicProduct/computer.html",{loader:()=>m(()=>import("./computer.html-eezyCKGH.js"),__vite__mapDeps([103,1])),meta:{y:"h",t:"电子产品"}}],["/Others/ElectronicProduct/screen.html",{loader:()=>m(()=>import("./screen.html-Bh7mbIND.js"),__vite__mapDeps([104,1])),meta:{y:"h",t:"电子产品"}}],["/Projects/huike/",{loader:()=>m(()=>import("./index.html-CyTEtMAh.js"),__vite__mapDeps([105,1])),meta:{d:16946496e5,l:"2023年9月14日",c:["项目","汇客CRM"],e:`
<h2>1 项目模块结构</h2>
<blockquote>
<p>注意: 继承 / 依赖 是两个东西</p>
</blockquote>
<h3>1.1 继承结构</h3>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code>爷爷: spring-boot

父工程:huike-parent

子工程
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-system<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-common<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-clues<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-business<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-mybatis-review<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-contract<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-report<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>huike-task<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:3.34,words:1001},y:"a",t:"汇客CRM DAY01"}}],["/Projects/huike/huike01.html",{loader:()=>m(()=>import("./huike01.html-BiDfnpvA.js"),__vite__mapDeps([106,1])),meta:{d:16946496e5,l:"2023年9月14日",c:["汇客CRM"],e:`
`,r:{minutes:.05,words:14},y:"a",t:"汇客CRM DAY02",O:1}}],["/Projects/huike/huike02.html",{loader:()=>m(()=>import("./huike02.html-DCiAn7OJ.js"),__vite__mapDeps([107,1])),meta:{d:16946496e5,l:"2023年9月14日",c:["汇客CRM"],e:`
`,r:{minutes:.05,words:14},y:"a",t:"汇客CRM DAY03",O:2}}],["/Projects/reggietakeout/",{loader:()=>m(()=>import("./index.html-cDgcyE-h.js"),__vite__mapDeps([108,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["项目","瑞吉外卖"],e:`
<h2>0. 地址</h2>
<p><strong>视频地址</strong>: <a href="https://www.bilibili.com/video/BV13a411q753" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV13a411q753</a></p>
<p><strong>仓库地址</strong>: <a href="https://github.com/simeis147/reggie_take_out" target="_blank" rel="noopener noreferrer">https://github.com/simeis147/reggie_take_out</a></p>`,r:{minutes:5.27,words:1580},y:"a",t:"瑞吉外卖"}}],["/Projects/skytakeout/",{loader:()=>m(()=>import("./index.html-CIhio-OQ.js"),__vite__mapDeps([109,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["项目","苍穹外卖"],e:`
<h2>知识储备</h2>
<div class="hint-container info">
<p class="hint-container-title">知识储备</p>
<ol>
<li>
<p>熟悉Maven项目的<a href="../../BackEnd/JavaWeb/javaweb03">聚合和继承</a> 👈</p>
</li>
<li>
<p>了解Maven依赖的版本锁定</p>
</li>
<li>
<p>了解前后端分离开发的好处以及项目开发的流程</p>
</li>
<li>
<p>了解分模块开发的作用</p>
</li>
<li>
<p>熟悉<a href="http://www.yangeit.cn:21010/javaweb2023/day12.html#_2-5-jwt%E4%BB%A4%E7%89%8C" target="_blank" rel="noopener noreferrer">Jwt令牌</a>的特性和作用 👈</p>
</li>
<li>
<p>能独立利用SpringBoot和Mybatis开发单表的接口</p>
</li>
</ol>
</div>`,r:{minutes:1.74,words:521},y:"a",t:"苍穹外卖"}}],["/Projects/skytakeout/skytakeout01.html",{loader:()=>m(()=>import("./skytakeout01.html-D5kSOGL-.js"),__vite__mapDeps([110,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>工程模块说明 🍐</h2>
<table>
<thead>
<tr>
<th>序号</th>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>sky-take-out</td>
<td>maven父工程 ，统一管理依赖版本，聚合其他子模块</td>
</tr>
<tr>
<td>2</td>
<td>sky-common</td>
<td>子模块，存放公共类，例如：工具类、常量类、异常类等</td>
</tr>
<tr>
<td>3</td>
<td>sky-pojo</td>
<td>子模块，存放实体类、VO、DTO等</td>
</tr>
<tr>
<td>4</td>
<td>sky-server</td>
<td>子模块，后端服务，存放配置文件、Controller、Service、Mapper等</td>
</tr>
</tbody>
</table>`,r:{minutes:1.39,words:416},y:"a",t:"Day01 项目概述、环境搭建",O:1}}],["/Projects/skytakeout/skytakeout02.html",{loader:()=>m(()=>import("./skytakeout02.html-CL8na0VN.js"),__vite__mapDeps([111,1])),meta:{d:16897248e5,l:"2023年7月19日",c:["苍穹外卖"],e:`
<h2>1. 新增员工 🚩</h2>
<h3>1.1 编码</h3>

<h3>1.2 代码完善</h3>
<p>目前，程序存在的问题主要有两个： 👇👇</p>
<ul>
<li>录入的用户名已存在，抛出的异常后没有处理</li>
<li>新增员工时，创建人id和修改人id设置为固定值</li>
</ul>

<h2>2. 员工分页查询 🚩</h2>
<h3>2.1编码</h3>
<div class="hint-container info">
<p class="hint-container-title">步骤</p>
<ol>
<li>设计DTO类</li>
<li>封装PageResult</li>
<li>Controller层</li>
<li>Service层接口</li>
<li>Service层实现类</li>
<li>Mapper层</li>
</ol>
</div>`,r:{minutes:8.65,words:2596},y:"a",t:"Day02 员工管理、分类管理",O:2}}],["/Projects/skytakeout/skytakeout03.html",{loader:()=>m(()=>import("./skytakeout03.html-CnudL0h_.js"),__vite__mapDeps([112,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>1. 公共字段自动填充🍐 ✏️ 🚩</h2>

<h2>2. 新增菜品 🚩</h2>

<h2>3. 菜品分页查询 🚩</h2>

<h2>4. 删除菜品 🚩</h2>

<h2>5. 修改菜品 🚩</h2>
<h3>5.1 根据id查询菜品实现</h3>

<h3>5.2 修改菜品实现</h3>

`,r:{minutes:9.02,words:2706},y:"a",t:"Day03 菜品管理",O:3}}],["/Projects/skytakeout/skytakeout04.html",{loader:()=>m(()=>import("./skytakeout04.html-Bc4RZeob.js"),__vite__mapDeps([113,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`

`,r:{minutes:4.66,words:1399},y:"a",t:"Day04 项目实战（套餐管理）",O:4}}],["/Projects/skytakeout/skytakeout05.html",{loader:()=>m(()=>import("./skytakeout05.html-Cf6jQ8OZ.js"),__vite__mapDeps([114,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>在sky-server模块中，创建ShopController,定义setStatus设置营业状态---设置营业状态</li>
<li>定义创建ShopController定义getStatus接口查询营业状态方法---管理端查询营业状态</li>
<li>定义创建com.sky.controller.user包，并创建ShopController，定义getStatus接口查询营业状态方法---用户端查询营业状态</li>
</ol>
</div>`,r:{minutes:2.1,words:629},y:"a",t:"Day05 店铺营业状态设置",O:5}}],["/Projects/skytakeout/skytakeout06.html",{loader:()=>m(()=>import("./skytakeout06.html-Cg57PmmV.js"),__vite__mapDeps([115,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>商品浏览功能代码✏️</h2>

`,r:{minutes:2.25,words:674},y:"a",t:"Day06 微信登录、商品浏览",O:6}}],["/Projects/skytakeout/skytakeout07.html",{loader:()=>m(()=>import("./skytakeout07.html-mOBV4J3U.js"),__vite__mapDeps([116,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>1. 缓存商品</h2>
<p><a href="http://www.yangeit.cn:21010/skytakeoutproject2023/day07.html#_1-%E7%BC%93%E5%AD%98%E8%8F%9C%E5%93%81" target="_blank" rel="noopener noreferrer">缓存商品</a></p>
<p><a href="http://www.yangeit.cn:21010/skytakeoutproject2023/day07.html#_2-%E7%BC%93%E5%AD%98%E5%A5%97%E9%A4%90" target="_blank" rel="noopener noreferrer">缓存套餐</a></p>`,r:{minutes:2.68,words:803},y:"a",t:"Day07 缓存商品、购物车",O:7}}],["/Projects/skytakeout/skytakeout08.html",{loader:()=>m(()=>import("./skytakeout08.html-Dmmxts4S.js"),__vite__mapDeps([117,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>1. 地址簿功能代码</h2>

<h2>2. 用户下单</h2>

<h2>3. 订单支付</h2>
<p><a href="http://www.yangeit.cn:21010/skytakeoutproject2023/day08.html#_3-%E8%AE%A2%E5%8D%95%E6%94%AF%E4%BB%98" target="_blank" rel="noopener noreferrer">订单支付</a></p>
`,r:{minutes:4.59,words:1378},y:"a",t:"Day08 用户下单、订单支付",O:8}}],["/Projects/skytakeout/skytakeout09.html",{loader:()=>m(()=>import("./skytakeout09.html-DhBsdYdb.js"),__vite__mapDeps([118,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>1. 历史订单</h2>

<h2>2. 订单管理</h2>

`,r:{minutes:7.46,words:2237},y:"a",t:"Day09 项目实战（历史订单、订单管理）",O:9}}],["/Projects/skytakeout/skytakeout10.html",{loader:()=>m(()=>import("./skytakeout10.html-Di8cuTVl.js"),__vite__mapDeps([119,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>1. 订单状态定时处理</h2>

<h2>2. 来单提醒</h2>

<h2>3. 客户催单</h2>

`,r:{minutes:2.2,words:661},y:"a",t:"Day10 订单状态定时处理、来单提醒和客户催单",O:10}}],["/Projects/skytakeout/skytakeout11.html",{loader:()=>m(()=>import("./skytakeout11.html-B9OqjxZ_.js"),__vite__mapDeps([120,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`
<h2>1. 营业额统计</h2>

<h2>2. 用户统计</h2>

<h2>3. 订单统计</h2>

<h2>4. 销量排名TOP10</h2>

`,r:{minutes:4.85,words:1454},y:"a",t:"Day11 数据统计（图形报表）",O:11}}],["/Projects/skytakeout/skytakeout12.html",{loader:()=>m(()=>import("./skytakeout12.html-B21NF0GT.js"),__vite__mapDeps([121,1])),meta:{d:16896384e5,l:"2023年7月18日",c:["苍穹外卖"],e:`

`,r:{minutes:1.44,words:433},y:"a",t:"Day12 数据统计（Excel报表）",O:12}}],["/Projects/tjxt/",{loader:()=>m(()=>import("./index.html-DtmwRE3b.js"),__vite__mapDeps([122,1])),meta:{d:16950816e5,l:"2023年9月19日",c:["项目","天机学堂"],e:`
`,r:{minutes:.06,words:19},y:"a",t:"天机学堂"}}],["/Projects/tjxt/tjxt01.html",{loader:()=>m(()=>import("./tjxt01.html-D0Cpycqe.js"),__vite__mapDeps([123,1])),meta:{d:1694736e6,l:"2023年9月15日",c:["天机学堂"],e:`
`,r:{minutes:.04,words:12},y:"a",t:"DAY01",O:1}}],["/Tools/Git/",{loader:()=>m(()=>import("./index.html-ClJgFf4s.js"),__vite__mapDeps([124,1])),meta:{d:16777152e5,l:"2023年3月2日",c:["Git"],e:`
`,r:{minutes:.79,words:236},y:"a",t:"Git"}}],["/Tools/MarkDown/",{loader:()=>m(()=>import("./index.html-ChZJ90XO.js"),__vite__mapDeps([125,1])),meta:{d:16777152e5,l:"2023年3月2日",c:["Markdown"],u:!0,e:`
`,r:{minutes:1.25,words:374},y:"a",t:"Markdown速查表"}}],["/Tools/MarkDown/markdown01.html",{loader:()=>m(()=>import("./markdown01.html-D1ly1U7O.js"),__vite__mapDeps([126,1])),meta:{d:1680912e6,l:"2023年4月8日",c:["Markdown"],v:"https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230627144902.png",e:`
<h2><a class="header-anchor" href="#_1-提示信息"><span>1 </span></a><a href="https://theme-hope.vuejs.press/zh/guide/markdown/hint.html" target="_blank" rel="noopener noreferrer">提示信息</a></h2>
<div class="hint-container important">
<p class="hint-container-title">important</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">info</p>
</div>`,r:{minutes:1.16,words:347},y:"a",t:"Markdown方言（ hope ）",O:1}}],["/Tools/Resource/",{loader:()=>m(()=>import("./index.html-bZeC6Yj0.js"),__vite__mapDeps([127,1])),meta:{d:16900704e5,l:"2023年7月23日",g:["资源整合"],u:!0,e:`
<h2><a class="header-anchor" href="#_1-🪐-chatgpt"><span>1. 🪐 </span></a><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a></h2>
`,r:{minutes:1.02,words:306},y:"a",t:"资源整合"}}],["/ComputerBasics/Algorithm/01Arrays/",{loader:()=>m(()=>import("./index.html-TMQKo6lU.js"),__vite__mapDeps([128,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","数组"],r:{minutes:.06,words:17},y:"a",t:"01 数组"}}],["/ComputerBasics/Algorithm/01Arrays/arrays01.html",{loader:()=>m(()=>import("./arrays01.html-BI1twLz7.js"),__vite__mapDeps([129,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","数组"],e:`
<p><strong>数组是存放在连续内存空间上的相同类型数据的集合。</strong></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>数组下标都是从 0 开始的。</li>
<li>数组内存空间的地址是连续的</li>
</ul>
</div>
<p>正是因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址。</p>
<p><strong>数组的元素是不能删的，只能覆盖。</strong></p>
`,r:{minutes:.42,words:127},y:"a",t:"数组理论基础",O:1}}],["/ComputerBasics/Algorithm/01Arrays/arrays02.html",{loader:()=>m(()=>import("./arrays02.html-vt7ZaZPe.js"),__vite__mapDeps([130,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","数组"],e:`
<p>O(logn)</p>
<h2>相关题目推荐</h2>
<ul>
<li><a href="https://leetcode.cn/problems/binary-search/" target="_blank" rel="noopener noreferrer">704. 二分查找</a></li>
<li><a href="https://leetcode.cn/problems/search-insert-position/" target="_blank" rel="noopener noreferrer">35. 搜索插入位置</a></li>
<li><a href="https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank" rel="noopener noreferrer">34. 在排序数组中查找元素的第一个和最后一个位置</a></li>
<li><a href="https://leetcode.cn/problems/sqrtx/" target="_blank" rel="noopener noreferrer">69. x 的平方根</a></li>
<li><a href="https://leetcode.cn/problems/valid-perfect-square/" target="_blank" rel="noopener noreferrer">367. 有效的完全平方数</a></li>
</ul>`,r:{minutes:1.1,words:330},y:"a",t:"二分法",O:2}}],["/ComputerBasics/Algorithm/01Arrays/arrays03.html",{loader:()=>m(()=>import("./arrays03.html-vGXv65fc.js"),__vite__mapDeps([131,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","数组"],e:`
<p>双指针算法</p>
<h2>相关题目推荐</h2>
<ul>
<li><a href="https://leetcode.cn/problems/remove-element/" target="_blank" rel="noopener noreferrer">27. 移除元素</a></li>
<li><a href="https://leetcode.cn/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noopener noreferrer">26. 删除排序数组中的重复项</a></li>
<li><a href="https://leetcode.cn/problems/move-zeroes/" target="_blank" rel="noopener noreferrer">283. 移动零</a></li>
<li><a href="https://leetcode.cn/problems/backspace-string-compare/" target="_blank" rel="noopener noreferrer">844. 比较含退格的字符串</a></li>
<li><a href="https://leetcode.cn/problems/squares-of-a-sorted-array/" target="_blank" rel="noopener noreferrer">977. 有序数组的平方</a></li>
</ul>`,r:{minutes:.96,words:287},y:"a",t:"移除元素",O:3}}],["/ComputerBasics/Algorithm/01Arrays/arrays04.html",{loader:()=>m(()=>import("./arrays04.html-DGmae4Dm.js"),__vite__mapDeps([132,1])),meta:{d:16862688e5,l:"2023年6月9日",c:["算法","数组"],e:`
<h2>相关题目推荐</h2>
<ul>
<li><a href="https://leetcode.cn/problems/minimum-size-subarray-sum/" target="_blank" rel="noopener noreferrer">209. 长度最小的子数组</a></li>
<li><a href="https://leetcode.cn/problems/fruit-into-baskets/" target="_blank" rel="noopener noreferrer">904. 水果成篮</a></li>
<li><a href="https://leetcode.cn/problems/minimum-window-substring/" target="_blank" rel="noopener noreferrer">76. 最小覆盖子串</a></li>
</ul>`,r:{minutes:.36,words:108},y:"a",t:"滑动窗口",O:4}}],["/ComputerBasics/Algorithm/01Arrays/arrays05.html",{loader:()=>m(()=>import("./arrays05.html-Ca8pgkfk.js"),__vite__mapDeps([133,1])),meta:{d:16862688e5,l:"2023年6月9日",c:["算法","数组"],e:`
<p>本题不涉及到什么算法，就是模拟过程，但却十分考察对代码的掌控能力</p>
<h2>相关题目推荐</h2>
<ul>
<li><a href="https://leetcode.cn/problems/spiral-matrix-ii/" target="_blank" rel="noopener noreferrer">59. 螺旋矩阵 II</a></li>
<li><a href="https://leetcode.cn/problems/spiral-matrix/" target="_blank" rel="noopener noreferrer">54. 螺旋矩阵</a></li>
<li><a href="https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/" target="_blank" rel="noopener noreferrer">剑指Offer 29.顺时针打印矩阵</a></li>
</ul>`,r:{minutes:1.41,words:422},y:"a",t:"模拟行为",O:5}}],["/ComputerBasics/Algorithm/02LinkedList/",{loader:()=>m(()=>import("./index.html-COz83ro3.js"),__vite__mapDeps([134,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","链表"],r:{minutes:.06,words:17},y:"a",t:"02 链表"}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist01.html",{loader:()=>m(()=>import("./linkedlist01.html-B-XlLKtH.js"),__vite__mapDeps([135,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","链表"],e:`
<p>链表是一种通过指针串联在一起的线性结构，每一个节点由两部分组成，一个是数据域一个是指针域（存放指向下一个节点的指针），最后一个节点的指针域指向null（空指针的意思）。</p>
<p><a href="https://programmercarl.com/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E9%93%BE%E8%A1%A8%E7%9A%84%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">链表理论基础</a></p>
<h2>写法</h2>`,r:{minutes:.69,words:206},y:"a",t:"链表理论基础",O:1}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist02.html",{loader:()=>m(()=>import("./linkedlist02.html-6K9stdMC.js"),__vite__mapDeps([136,1])),meta:{d:16867008e5,l:"2023年6月14日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/remove-linked-list-elements/" target="_blank" rel="noopener noreferrer">203.移除链表元素</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 添加虚节点方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 因为删除可能涉及到头节点，所以设置dummy节点，统一操作</span>
    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 不添加虚拟节点方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 已经为null，提前退出</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 已确定当前head.val != val</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 不添加虚拟节点and pre Node方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val<span class="token operator">==</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span> curr <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curr<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>next<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            curr<span class="token punctuation">.</span>next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.93,words:280},y:"a",t:"移除链表元素",O:2}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist03.html",{loader:()=>m(()=>import("./linkedlist03.html-CQ4W13V4.js"),__vite__mapDeps([137,1])),meta:{d:16867008e5,l:"2023年6月14日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/design-linked-list/" target="_blank" rel="noopener noreferrer">707.设计链表</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//单链表</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token operator">=</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token comment">//size存储链表元素的个数</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token comment">//虚拟头结点</span>
    <span class="token class-name">ListNode</span> head<span class="token punctuation">;</span>

    <span class="token comment">//初始化链表</span>
    <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取第index个节点的数值，注意index是从0开始的，第0个节点就是头结点</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果index非法，返回-1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">//包含一个虚拟头节点，所以查找第 index+1 个节点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//在链表最前面插入一个节点，等价于在第0个元素前添加</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//在链表的最后插入一个节点，等价于在(末尾+1)个元素前添加</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 在第 index 个节点之前插入一个新节点，例如index为0，那么新插入的节点为链表的新头节点。</span>
    <span class="token comment">// 如果 index 等于链表的长度，则说明是新插入的节点为链表的尾结点</span>
    <span class="token comment">// 如果 index 大于链表的长度，则返回空</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">//找到要插入节点的前驱</span>
        <span class="token class-name">ListNode</span> pred <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> toAdd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        toAdd<span class="token punctuation">.</span>next <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pred<span class="token punctuation">.</span>next <span class="token operator">=</span> toAdd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//删除第index个节点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> pred <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pred<span class="token punctuation">.</span>next <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:2.51,words:752},y:"a",t:"设计链表",O:3}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist04.html",{loader:()=>m(()=>import("./linkedlist04.html-CZ4cmHQ8.js"),__vite__mapDeps([138,1])),meta:{d:16867008e5,l:"2023年6月14日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">206.反转链表</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 双指针</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 保存下一个节点</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            prev <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.76,words:229},y:"a",t:"翻转链表",O:4}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist05.html",{loader:()=>m(()=>import("./linkedlist05.html-AWTbkEeX.js"),__vite__mapDeps([139,1])),meta:{d:16867008e5,l:"2023年6月14日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/swap-nodes-in-pairs/" target="_blank" rel="noopener noreferrer">24. 两两交换链表中的节点</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 递归版本</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// base case 退出提交</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 获取当前节点的下一个节点</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 进行递归</span>
        <span class="token class-name">ListNode</span> newNode <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里进行交换</span>
        next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>

        <span class="token keyword">return</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div>`,r:{minutes:.88,words:263},y:"a",t:"两两交换链表中的节点",O:5}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist06.html",{loader:()=>m(()=>import("./linkedlist06.html-BvOSPkq8.js"),__vite__mapDeps([140,1])),meta:{d:16867008e5,l:"2023年6月14日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer">19.删除链表的倒数第N个节点</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> dummyNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token class-name">ListNode</span> fastIndex <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> slowIndex <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>

    <span class="token comment">//只要快慢指针相差 n 个结点即可</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n  <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fastIndex <span class="token operator">=</span> fastIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastIndex<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fastIndex <span class="token operator">=</span> fastIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slowIndex <span class="token operator">=</span> slowIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//此时 slowIndex 的位置就是待删除元素的前一个位置。</span>
    <span class="token comment">//具体情况可自己画一个链表长度为 3 的图来模拟代码来理解</span>
    slowIndex<span class="token punctuation">.</span>next <span class="token operator">=</span> slowIndex<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.52,words:155},y:"a",t:"删除链表的倒数第N个节点",O:6}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist07.html",{loader:()=>m(()=>import("./linkedlist07.html-BY9EdWPs.js"),__vite__mapDeps([141,1])),meta:{d:16867008e5,l:"2023年6月14日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/" target="_blank" rel="noopener noreferrer">面试题 02.07. 链表相交</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">int</span> lenA <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> lenB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表A的长度</span>
            lenA<span class="token operator">++</span><span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curB <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表B的长度</span>
            lenB<span class="token operator">++</span><span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA为最长链表的头，lenA为其长度</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lenB <span class="token operator">&gt;</span> lenA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//1. swap (lenA, lenB);</span>
            <span class="token keyword">int</span> tmpLen <span class="token operator">=</span> lenA<span class="token punctuation">;</span>
            lenA <span class="token operator">=</span> lenB<span class="token punctuation">;</span>
            lenB <span class="token operator">=</span> tmpLen<span class="token punctuation">;</span>
            <span class="token comment">//2. swap (curA, curB);</span>
            <span class="token class-name">ListNode</span> tmpNode <span class="token operator">=</span> curA<span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curB<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> tmpNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 求长度差</span>
        <span class="token keyword">int</span> gap <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA和curB在同一起点上（末尾位置对齐）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>gap<span class="token operator">--</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历curA 和 curB，遇到相同则直接返回</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curA <span class="token operator">==</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.64,words:192},y:"a",t:"链表相交",O:7}}],["/ComputerBasics/Algorithm/02LinkedList/linkedlist08.html",{loader:()=>m(()=>import("./linkedlist08.html-BGlv9C_I.js"),__vite__mapDeps([142,1])),meta:{d:16867872e5,l:"2023年6月15日",c:["算法","链表"],e:`
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer">142.环形链表II</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 有环</span>
                <span class="token class-name">ListNode</span> index1 <span class="token operator">=</span> fast<span class="token punctuation">;</span>
                <span class="token class-name">ListNode</span> index2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
                <span class="token comment">// 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>index1 <span class="token operator">!=</span> index2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    index1 <span class="token operator">=</span> index1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    index2 <span class="token operator">=</span> index2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> index1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.37,words:112},y:"a",t:"环形链表II",O:8}}],["/ComputerBasics/Algorithm/03HashTable/",{loader:()=>m(()=>import("./index.html-BVgpdH71.js"),__vite__mapDeps([143,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","哈希表"],r:{minutes:.06,words:19},y:"a",t:"03 哈希表"}}],["/ComputerBasics/Algorithm/03HashTable/hashtable01.html",{loader:()=>m(()=>import("./hashtable01.html-C5FTRD55.js"),__vite__mapDeps([144,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<blockquote>
<p>哈希表是根据关键码的值而直接进行访问的数据结构。</p>
</blockquote>
<h2>总结</h2>
<p>当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法。</p>
<p>但是哈希法也是牺牲了空间换取了时间，因为我们要使用额外的数组，set或者是map来存放数据，才能实现快速的查找。</p>
`,r:{minutes:.41,words:124},y:"a",t:"哈希表理论基础",O:1}}],["/ComputerBasics/Algorithm/03HashTable/hashtable02.html",{loader:()=>m(()=>import("./hashtable02.html-BPEencQ0.js"),__vite__mapDeps([145,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/valid-anagram/description/" target="_blank" rel="noopener noreferrer">242.有效的字母异位词</a></p>
<h2>相关题目推荐</h2>
<p><a href="https://leetcode.cn/problems/ransom-note/description/" target="_blank" rel="noopener noreferrer">383.赎金信</a><br>
<a href="https://leetcode.cn/problems/group-anagrams/description/" target="_blank" rel="noopener noreferrer">49. 字母异位词分组</a><br>
<a href="https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/" target="_blank" rel="noopener noreferrer">438.找到字符串中所有字母异位词</a></p>`,r:{minutes:.82,words:246},y:"a",t:"有效的字母异位词",O:2}}],["/ComputerBasics/Algorithm/03HashTable/hashtable03.html",{loader:()=>m(()=>import("./hashtable03.html-C3g5UIvO.js"),__vite__mapDeps([146,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/intersection-of-two-arrays/" target="_blank" rel="noopener noreferrer">349. 两个数组的交集</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">intersection</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums1<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> nums2 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums2<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> resSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历数组1</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//遍历数组2的过程中判断哈希表中是否存在该元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>set1<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                resSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      
        <span class="token comment">//方法1：将结果集合转为数组</span>

        <span class="token keyword">return</span> resSet<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span>x <span class="token operator">-&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//方法2：另外申请一个数组存放setRes中的元素,最后返回数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>resSet<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> resSet<span class="token punctuation">)</span><span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.82,words:246},y:"a",t:"两个数组的交集",O:3}}],["/ComputerBasics/Algorithm/03HashTable/hashtable04.html",{loader:()=>m(()=>import("./hashtable04.html--OdlUuq4.js"),__vite__mapDeps([147,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/happy-number/description/" target="_blank" rel="noopener noreferrer">第202题. 快乐数</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isHappy</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> record <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>record<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            record<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            n <span class="token operator">=</span> <span class="token function">getNextNumber</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getNextNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            res <span class="token operator">+=</span> temp <span class="token operator">*</span> temp<span class="token punctuation">;</span>
            n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.26,words:77},y:"a",t:"快乐数",O:4}}],["/ComputerBasics/Algorithm/03HashTable/hashtable05.html",{loader:()=>m(()=>import("./hashtable05.html-BPWYpxz0.js"),__vite__mapDeps([148,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/two-sum/description/" target="_blank" rel="noopener noreferrer">1. 两数之和</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// 遍历当前元素，并在map中寻找是否有匹配的key</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
            res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 如果没找到匹配对，就把访问过的元素和下标加入到map中</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.42,words:126},y:"a",t:"两数之和",O:5}}],["/ComputerBasics/Algorithm/03HashTable/hashtable06.html",{loader:()=>m(()=>import("./hashtable06.html-y16doJS0.js"),__vite__mapDeps([149,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/4sum-ii/description/" target="_blank" rel="noopener noreferrer">第454题.四数相加II</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fourSumCount</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums3<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//统计两个数组中的元素之和，同时统计出现的次数，放入map</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">:</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> sum <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//统计剩余的两个元素的和，在map中找是否存在相加为0的情况，同时记录次数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">:</span> nums4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">-</span> i <span class="token operator">-</span> j<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.49,words:148},y:"a",t:"四数相加II",O:6}}],["/ComputerBasics/Algorithm/03HashTable/hashtable07.html",{loader:()=>m(()=>import("./hashtable07.html-BgfvrmI_.js"),__vite__mapDeps([150,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/ransom-note/description/" target="_blank" rel="noopener noreferrer">383. 赎金信</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canConstruct</span><span class="token punctuation">(</span><span class="token class-name">String</span> ransomNote<span class="token punctuation">,</span> <span class="token class-name">String</span> magazine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// shortcut</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ransomNote<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> magazine<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 定义一个哈希映射数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> record <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> magazine<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            record<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">'a'</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> ransomNote<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            record<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">'a'</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 如果数组中存在负数，说明ransomNote字符串总存在magazine中没有的字符</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> record<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.38,words:113},y:"a",t:"赎金信",O:7}}],["/ComputerBasics/Algorithm/03HashTable/hashtable08.html",{loader:()=>m(()=>import("./hashtable08.html-DgOsaJ27.js"),__vite__mapDeps([151,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/3sum/" target="_blank" rel="noopener noreferrer">第15题. 三数之和</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 找出a + b + c = 0</span>
        <span class="token comment">// a = nums[i], b = nums[left], c = nums[right]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 去重a</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">int</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    right<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 去重逻辑应该放在找到一个三元组之后，对b 和 c去重</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>
                    
                    right<span class="token operator">--</span><span class="token punctuation">;</span> 
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.72,words:216},y:"a",t:"三数之和",O:8}}],["/ComputerBasics/Algorithm/03HashTable/hashtable09.html",{loader:()=>m(()=>import("./hashtable09.html-DZCgvXrC.js"),__vite__mapDeps([152,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法","哈希表"],e:`
<p><a href="https://leetcode.cn/problems/4sum/description/" target="_blank" rel="noopener noreferrer">第18题. 四数之和</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">fourSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
       
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  
            <span class="token comment">// nums[i] &gt; target 直接返回, 剪枝操作</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 对nums[i]去重</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 对nums[j]去重</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">int</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// nums[k] + nums[i] + nums[left] + nums[right] &gt; target int会溢出</span>
                    <span class="token keyword">long</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token comment">// 对nums[left]和nums[right]去重</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>

                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.67,words:202},y:"a",t:"四数之和",O:9}}],["/ComputerBasics/Algorithm/04String/",{loader:()=>m(()=>import("./index.html-T2cQBWIZ.js"),__vite__mapDeps([153,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","字符串"],r:{minutes:.06,words:19},y:"a",t:"04 字符串"}}],["/ComputerBasics/Algorithm/04String/String01.html",{loader:()=>m(()=>import("./String01.html-C3JmqIui.js"),__vite__mapDeps([154,1])),meta:{d:17093376e5,l:"2024年3月2日",c:["算法","字符串"],e:`
<p><a href="https://leetcode.cn/problems/reverse-string/description/" target="_blank" rel="noopener noreferrer">344. 反转字符串</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">^=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//构造 a ^ b 的结果，并放在 a 中</span>
            s<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">^=</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//将 a ^ b 这一结果再 ^ b ，存入b中，此时 b = a, a = a ^ b</span>
            s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">^=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//a ^ b 的结果再 ^ a ，存入 a 中，此时 b = a, a = b 完成交换</span>
            l<span class="token operator">++</span><span class="token punctuation">;</span>
            r<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种方法用temp来交换数值更多人容易理解些</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            l<span class="token operator">++</span><span class="token punctuation">;</span>
            r<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.55,words:166},y:"a",t:"反转字符串",O:1}}],["/ComputerBasics/Algorithm/04String/String02.html",{loader:()=>m(()=>import("./String02.html-D5Qx5yf_.js"),__vite__mapDeps([155,1])),meta:{d:17093376e5,l:"2024年3月2日",c:["算法","字符串"],e:`
<p><a href="https://leetcode.cn/problems/reverse-string-ii/" target="_blank" rel="noopener noreferrer">541. 反转字符串II</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//解法一</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 找到k处和2k处</span>
            <span class="token class-name">StringBuffer</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 与length进行判断，如果大于length了，那就将其置为length</span>
            <span class="token keyword">int</span> firstK <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> k <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> <span class="token operator">?</span> length <span class="token operator">:</span> start <span class="token operator">+</span> k<span class="token punctuation">;</span>
            <span class="token keyword">int</span> secondK <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> <span class="token operator">?</span> length <span class="token operator">:</span> start <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//无论start所处位置，至少会反转一次</span>
            temp<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> firstK<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 如果firstK到secondK之间有元素，这些元素直接放入res里即可。</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>firstK <span class="token operator">&lt;</span> secondK<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//此时剩余长度一定大于k。</span>
                res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>firstK<span class="token punctuation">,</span> secondK<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            start <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//解法二（似乎更容易理解点）</span>
<span class="token comment">//题目的意思其实概括为 每隔2k个反转前k个，尾数不够k个时候全部反转</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token comment">//这里是判断尾数够不够k个来取决end指针的位置</span>
            <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//用异或运算反转 </span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                start<span class="token operator">++</span><span class="token punctuation">;</span>
                end<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 解法二还可以用temp来交换数值，会的人更多些</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token comment">// 判断尾数够不够k个来取决end指针的位置</span>
            <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
                
                <span class="token keyword">char</span> temp <span class="token operator">=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

                start<span class="token operator">++</span><span class="token punctuation">;</span>
                end<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.31,words:394},y:"a",t:"反转字符串II",O:2}}],["/ComputerBasics/Algorithm/04String/String03.html",{loader:()=>m(()=>import("./String03.html-CU3O1Po_.js"),__vite__mapDeps([156,1])),meta:{d:17093376e5,l:"2024年3月2日",c:["算法","字符串"],e:`
<p><a href="https://kamacoder.com/problempage.php?pid=1064" target="_blank" rel="noopener noreferrer">替换数字</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.23,words:68},y:"a",t:"替换数字",O:3}}],["/ComputerBasics/Algorithm/04String/String04.html",{loader:()=>m(()=>import("./String04.html--KWOg9_Z.js"),__vite__mapDeps([157,1])),meta:{d:1709424e6,l:"2024年3月3日",c:["算法","字符串"],e:`
<p><a href="https://leetcode.cn/problems/reverse-words-in-a-string/" target="_blank" rel="noopener noreferrer">151.翻转字符串里的单词</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
     * 不使用Java内置方法实现
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 1.去除首尾以及中间多余空格
     * 2.反转整个字符串
     * 3.反转各个单词
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println("ReverseWords.reverseWords2() called with: s = [" + s + "]");</span>
        <span class="token comment">// 1.去除首尾以及中间多余空格</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.反转整个字符串</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.反转各个单词</span>
        <span class="token function">reverseEachWord</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">StringBuilder</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println("ReverseWords.removeSpace() called with: s = [" + s + "]");</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">' '</span><span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">' '</span><span class="token punctuation">)</span> end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">!=</span> <span class="token char">' '</span> <span class="token operator">||</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println("ReverseWords.removeSpace returned: sb = [" + sb + "]");</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 反转字符串指定区间[start, end]的字符
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> sb<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println("ReverseWords.reverseString() called with: sb = [" + sb + "], start = [" + start + "], end = [" + end + "]");</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">.</span><span class="token function">setCharAt</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">.</span><span class="token function">setCharAt</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println("ReverseWords.reverseString returned: sb = [" + sb + "]");</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">reverseEachWord</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> sb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>end <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                end<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">reverseString</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:4.45,words:1336},y:"a",t:"翻转字符串里的单词",O:4}}],["/ComputerBasics/Algorithm/04String/String05.html",{loader:()=>m(()=>import("./String05.html-QC9GkhK5.js"),__vite__mapDeps([158,1])),meta:{d:1709424e6,l:"2024年3月3日",c:["算法","字符串"],e:`
<p><a href="https://kamacoder.com/problempage.php?pid=1065" target="_blank" rel="noopener noreferrer">右旋字符串</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 版本一</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//获取字符串长度</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//反转整个字符串</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//反转前一段字符串，此时的字符串首尾尾是0,n - 1</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> n<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//反转后一段字符串，此时的字符串首尾尾是n,len - 1</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//异或法反转字符串，参照题目 344.反转字符串的解释</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
            ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 版本二</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//获取字符串长度</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//反转前一段字符串，此时的字符串首尾是0,len - n - 1</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> len <span class="token operator">-</span> n<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//反转后一段字符串，此时的字符串首尾是len - n,len - 1</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//反转整个字符串</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//异或法反转字符串，参照题目 344.反转字符串的解释</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
            ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.16,words:349},y:"a",t:"右旋字符串",O:5}}],["/ComputerBasics/Algorithm/04String/String06.html",{loader:()=>m(()=>import("./String06.html-8l5I2edt.js"),__vite__mapDeps([159,1])),meta:{d:1709424e6,l:"2024年3月3日",c:["算法","字符串"],e:`
<p><a href="https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/" target="_blank" rel="noopener noreferrer">28. 找出字符串中第一个匹配项的下标</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 基于窗口滑动的算法
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 时间复杂度：O(m*n)
     * 空间复杂度：O(1)
     * 注：n为haystack的长度，m为needle的长度
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">strStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> haystack<span class="token punctuation">,</span> <span class="token class-name">String</span> needle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> needle<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 当 needle 是空字符串时我们应当返回 0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> haystack<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">-</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 找到首字母相等</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> haystack<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> needle<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 没有首字母相等的</span>
                <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 遍历后续字符，判断是否相等</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> haystack<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> needle<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
                j<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 找到</span>
                <span class="token keyword">return</span> i <span class="token operator">-</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 未找到</span>
                i <span class="token operator">-=</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.43,words:429},y:"a",t:"实现 strStr()",O:6}}],["/ComputerBasics/Algorithm/04String/String07.html",{loader:()=>m(()=>import("./String07.html-CMgKCHcJ.js"),__vite__mapDeps([160,1])),meta:{d:1709424e6,l:"2024年3月3日",c:["算法","字符串"],e:`
<p><a href="https://leetcode.cn/problems/repeated-substring-pattern/" target="_blank" rel="noopener noreferrer">459.重复的子字符串</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">repeatedSubstringPattern</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 原串加个空格(哨兵)，使下标从1开始，这样j从0开始，也不用初始化了</span>
        s <span class="token operator">=</span> <span class="token string">" "</span> <span class="token operator">+</span> s<span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 构造 next 数组过程，j从0开始(空格)，i从2开始</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 匹配不成功，j回到前一位置 next 数组所对应的值</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> chars<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 匹配成功，j往后移</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> chars<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">// 更新 next 数组的值</span>
            next<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 最后判断是否是重复的子字符串，这里 next[len] 即代表next数组末尾的值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> len <span class="token operator">%</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> next<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.73,words:219},y:"a",t:"重复的子字符串",O:7}}],["/ComputerBasics/Algorithm/05DoublePointer/",{loader:()=>m(()=>import("./index.html-BZC_hr9m.js"),__vite__mapDeps([161,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","双指针法"],r:{minutes:.07,words:21},y:"a",t:"05 双指针法"}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer01.html",{loader:()=>m(()=>import("./doublePointer01.html-C9A8Mp_S.js"),__vite__mapDeps([162,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/remove-element/" target="_blank" rel="noopener noreferrer">27. 移除元素</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 快慢指针</span>
        <span class="token keyword">int</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fastIndex <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> fastIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
                slowIndex<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> slowIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.75,words:224},y:"a",t:"移除元素",O:1}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer02.html",{loader:()=>m(()=>import("./doublePointer02.html-Ber2davf.js"),__vite__mapDeps([163,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/reverse-string/" target="_blank" rel="noopener noreferrer">344.反转字符串</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">^=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//构造 a ^ b 的结果，并放在 a 中</span>
            s<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">^=</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//将 a ^ b 这一结果再 ^ b ，存入b中，此时 b = a, a = a ^ b</span>
            s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">^=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//a ^ b 的结果再 ^ a ，存入 a 中，此时 b = a, a = b 完成交换</span>
            l<span class="token operator">++</span><span class="token punctuation">;</span>
            r<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种方法用temp来交换数值更多人容易理解些</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            l<span class="token operator">++</span><span class="token punctuation">;</span>
            r<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.55,words:166},y:"a",t:"反转字符串",O:2}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer03.html",{loader:()=>m(()=>import("./doublePointer03.html-DkBngaZQ.js"),__vite__mapDeps([164,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://kamacoder.com/problempage.php?pid=1064" target="_blank" rel="noopener noreferrer">替换数字</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.23,words:68},y:"a",t:"替换数字",O:3}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer04.html",{loader:()=>m(()=>import("./doublePointer04.html-Kc-PFfsB.js"),__vite__mapDeps([165,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/reverse-words-in-a-string/" target="_blank" rel="noopener noreferrer">151.翻转字符串里的单词</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
     * 不使用Java内置方法实现
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 1.去除首尾以及中间多余空格
     * 2.反转整个字符串
     * 3.反转各个单词
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println("ReverseWords.reverseWords2() called with: s = [" + s + "]");</span>
        <span class="token comment">// 1.去除首尾以及中间多余空格</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.反转整个字符串</span>
        <span class="token function">reverseString</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.反转各个单词</span>
        <span class="token function">reverseEachWord</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">StringBuilder</span> <span class="token function">removeSpace</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println("ReverseWords.removeSpace() called with: s = [" + s + "]");</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">' '</span><span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">' '</span><span class="token punctuation">)</span> end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">!=</span> <span class="token char">' '</span> <span class="token operator">||</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println("ReverseWords.removeSpace returned: sb = [" + sb + "]");</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 反转字符串指定区间[start, end]的字符
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> sb<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println("ReverseWords.reverseString() called with: sb = [" + sb + "], start = [" + start + "], end = [" + end + "]");</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">.</span><span class="token function">setCharAt</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">.</span><span class="token function">setCharAt</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println("ReverseWords.reverseString returned: sb = [" + sb + "]");</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">reverseEachWord</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> sb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>end <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                end<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">reverseString</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:4.45,words:1336},y:"a",t:"翻转字符串里的单词",O:4}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer05.html",{loader:()=>m(()=>import("./doublePointer05.html-DXB_7Fye.js"),__vite__mapDeps([166,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">206.反转链表</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 双指针</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 保存下一个节点</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            prev <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.75,words:224},y:"a",t:"反转链表",O:5}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer06.html",{loader:()=>m(()=>import("./doublePointer06.html-BEO6tB5C.js"),__vite__mapDeps([167,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer">19.删除链表的倒数第N个节点</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> dummyNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token class-name">ListNode</span> fastIndex <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> slowIndex <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>

    <span class="token comment">// 只要快慢指针相差 n 个结点即可</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n  <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
        fastIndex <span class="token operator">=</span> fastIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fastIndex <span class="token operator">=</span> fastIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slowIndex <span class="token operator">=</span> slowIndex<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//此时 slowIndex 的位置就是待删除元素的前一个位置。</span>
    <span class="token comment">//具体情况可自己画一个链表长度为 3 的图来模拟代码来理解</span>
    slowIndex<span class="token punctuation">.</span>next <span class="token operator">=</span> slowIndex<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.5,words:150},y:"a",t:"删除链表的倒数第N个节点",O:6}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer07.html",{loader:()=>m(()=>import("./doublePointer07.html-9ORBLUCS.js"),__vite__mapDeps([168,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/" target="_blank" rel="noopener noreferrer">面试题 02.07. 链表相交</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">int</span> lenA <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> lenB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表A的长度</span>
            lenA<span class="token operator">++</span><span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curB <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表B的长度</span>
            lenB<span class="token operator">++</span><span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA为最长链表的头，lenA为其长度</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lenB <span class="token operator">&gt;</span> lenA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//1. swap (lenA, lenB);</span>
            <span class="token keyword">int</span> tmpLen <span class="token operator">=</span> lenA<span class="token punctuation">;</span>
            lenA <span class="token operator">=</span> lenB<span class="token punctuation">;</span>
            lenB <span class="token operator">=</span> tmpLen<span class="token punctuation">;</span>
            <span class="token comment">//2. swap (curA, curB);</span>
            <span class="token class-name">ListNode</span> tmpNode <span class="token operator">=</span> curA<span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curB<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> tmpNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 求长度差</span>
        <span class="token keyword">int</span> gap <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA和curB在同一起点上（末尾位置对齐）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>gap<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历curA 和 curB，遇到相同则直接返回</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curA <span class="token operator">==</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.62,words:187},y:"a",t:"链表相交",O:7}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer08.html",{loader:()=>m(()=>import("./doublePointer08.html-B3glHEX2.js"),__vite__mapDeps([169,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer">142.环形链表II</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 有环</span>
                <span class="token class-name">ListNode</span> index1 <span class="token operator">=</span> fast<span class="token punctuation">;</span>
                <span class="token class-name">ListNode</span> index2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
                <span class="token comment">// 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>index1 <span class="token operator">!=</span> index2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    index1 <span class="token operator">=</span> index1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    index2 <span class="token operator">=</span> index2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> index1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.36,words:107},y:"a",t:"环形链表II",O:8}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer09.html",{loader:()=>m(()=>import("./doublePointer09.html-CnqiyObI.js"),__vite__mapDeps([170,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/3sum/" target="_blank" rel="noopener noreferrer">第15题. 三数之和</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 找出a + b + c = 0</span>
        <span class="token comment">// a = nums[i], b = nums[left], c = nums[right]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 去重a</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">int</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    right<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token comment">// 去重逻辑应该放在找到一个三元组之后，对b 和 c去重</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>
                    
                    right<span class="token operator">--</span><span class="token punctuation">;</span> 
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.72,words:216},y:"a",t:"三数之和",O:9}}],["/ComputerBasics/Algorithm/05DoublePointer/doublePointer10.html",{loader:()=>m(()=>import("./doublePointer10.html-03_K0xS9.js"),__vite__mapDeps([171,1])),meta:{d:17095104e5,l:"2024年3月4日",c:["算法","双指针"],e:`
<p><a href="https://leetcode.cn/problems/4sum/" target="_blank" rel="noopener noreferrer">第18题. 四数之和</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">fourSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
       
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              
            <span class="token comment">// nums[i] &gt; target 直接返回, 剪枝操作</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 对nums[i]去重</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 对nums[j]去重</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">int</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// nums[k] + nums[i] + nums[left] + nums[right] &gt; target int会溢出</span>
                    <span class="token keyword">long</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token comment">// 对nums[left]和nums[right]去重</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>

                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.67,words:202},y:"a",t:"四数之和",O:10}}],["/ComputerBasics/Algorithm/06StacksAndQueues/",{loader:()=>m(()=>import("./index.html-CDp2M4gp.js"),__vite__mapDeps([172,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","栈与队列"],r:{minutes:.07,words:21},y:"a",t:"06 栈与队列"}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues01.html",{loader:()=>m(()=>import("./stacksAndQueues01.html-B-cCckVa.js"),__vite__mapDeps([173,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/implement-queue-using-stacks/" target="_blank" rel="noopener noreferrer">232.用栈实现队列</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>

    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stackIn<span class="token punctuation">;</span>
    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stackOut<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Initialize your data structure here. */</span>
    <span class="token keyword">public</span> <span class="token class-name">MyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stackIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 负责进栈</span>
        stackOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 负责出栈</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Push element x to the back of queue. */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stackIn<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Removes the element from in front of queue and returns that element. */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
        <span class="token function">dumpstackIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> stackOut<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Get the front element. */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dumpstackIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> stackOut<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Returns whether the queue is empty. */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> stackIn<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> stackOut<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果stackOut为空，那么将stackIn中的元素全部放到stackOut中</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dumpstackIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stackOut<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> 
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stackIn<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                stackOut<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stackIn<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.53,words:160},y:"a",t:"用栈实现队列",O:1}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues02.html",{loader:()=>m(()=>import("./stacksAndQueues02.html-C3vnuB0-.js"),__vite__mapDeps([174,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/implement-stack-using-queues/" target="_blank" rel="noopener noreferrer">225. 用队列实现栈</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyStack</span> <span class="token punctuation">{</span>

    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queue1<span class="token punctuation">;</span> <span class="token comment">// 和栈中保持一样元素的队列</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queue2<span class="token punctuation">;</span> <span class="token comment">// 辅助队列</span>

    <span class="token doc-comment comment">/** Initialize your data structure here. */</span>
    <span class="token keyword">public</span> <span class="token class-name">MyStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Push element x onto stack. */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue2<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 先放在辅助队列中</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue1<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            queue2<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>queue1<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queueTemp<span class="token punctuation">;</span>
        queueTemp <span class="token operator">=</span> queue1<span class="token punctuation">;</span>
        queue1 <span class="token operator">=</span> queue2<span class="token punctuation">;</span>
        queue2 <span class="token operator">=</span> queueTemp<span class="token punctuation">;</span> <span class="token comment">// 最后交换queue1和queue2，将元素都放到queue1中</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Removes the element on top of the stack and returns that element. */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> queue1<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为queue1中的元素和栈中的保持一致，所以这个和下面两个的操作只看queue1即可</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Get the top element. */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> queue1<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/** Returns whether the stack is empty. */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> queue1<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.65,words:795},y:"a",t:"用队列实现栈",O:2}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues03.html",{loader:()=>m(()=>import("./stacksAndQueues03.html-Cd-ugXN_.js"),__vite__mapDeps([175,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/valid-parentheses/" target="_blank" rel="noopener noreferrer">20. 有效的括号</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//碰到左括号，就把相应的右括号入栈</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">'('</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">')'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">'{'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">'}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">'['</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">']'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//如果是右括号判断是否和栈顶元素匹配</span>
                deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//最后判断栈中元素是否匹配</span>
        <span class="token keyword">return</span> deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.41,words:123},y:"a",t:"有效的括号",O:3}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues04.html",{loader:()=>m(()=>import("./stacksAndQueues04.html-dR5tTM_C.js"),__vite__mapDeps([176,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/" target="_blank" rel="noopener noreferrer">1047. 删除字符串中的所有相邻重复项</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token class-name">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//ArrayDeque会比LinkedList在除了删除元素这一点外会快一点</span>
        <span class="token comment">//参考：https://stackoverflow.com/questions/6163166/why-is-arraydeque-better-than-linkedlist</span>
        <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">S</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ch <span class="token operator">=</span> <span class="token class-name">S</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token comment">//剩余的元素即为不重复的元素</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            str <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.45,words:136},y:"a",t:"删除字符串中的所有相邻重复项",O:4}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues05.html",{loader:()=>m(()=>import("./stacksAndQueues05.html-DjtOurwf.js"),__vite__mapDeps([177,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/evaluate-reverse-polish-notation/" target="_blank" rel="noopener noreferrer">150. 逆波兰表达式求值</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">evalRPN</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"+"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        <span class="token comment">// leetcode 内置jdk的问题，不能使用==判断字符串是否相等</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 注意 - 和/ 需要特殊处理</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> temp1 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> temp2 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp2 <span class="token operator">/</span> temp1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.42,words:127},y:"a",t:"逆波兰表达式求值",O:5}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues06.html",{loader:()=>m(()=>import("./stacksAndQueues06.html-CVZJC7-p.js"),__vite__mapDeps([178,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/sliding-window-maximum/" target="_blank" rel="noopener noreferrer">239. 滑动窗口最大值</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//解法一</span>
<span class="token comment">//自定义数组</span>
<span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//弹出元素时，比较当前要弹出的数值是否等于队列出口的数值，如果相等则弹出</span>
    <span class="token comment">//同时判断队列当前是否为空</span>
    <span class="token keyword">void</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">==</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//添加元素时，如果要添加的元素大于入口处的元素，就将入口元素弹出</span>
    <span class="token comment">//保证队列元素单调递减</span>
    <span class="token comment">//比如此时队列元素3,1，2将要入队，比1大，所以1弹出，此时队列：3,2</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">&gt;</span> deque<span class="token punctuation">.</span><span class="token function">getLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        deque<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//队列队顶元素始终为最大值</span>
    <span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">maxSlidingWindow</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//存放结果元素的数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//自定义队列</span>
        <span class="token class-name">MyQueue</span> myQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//先将前k的元素放入队列</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            myQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">[</span>num<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> myQueue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> k<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//滑动窗口移除最前面的元素，移除是判断该元素是否放入队列</span>
            myQueue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//滑动窗口加入最后面的元素</span>
            myQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//记录对应的最大值</span>
            res<span class="token punctuation">[</span>num<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> myQueue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.08,words:624},y:"a",t:"滑动窗口最大值",O:6}}],["/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues07.html",{loader:()=>m(()=>import("./stacksAndQueues07.html-PT2j4lv1.js"),__vite__mapDeps([179,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["算法","栈与队列"],e:`
<p><a href="https://leetcode.cn/problems/top-k-frequent-elements/" target="_blank" rel="noopener noreferrer">347.前 K 个高频元素</a></p>
<h2>写法</h2>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*Comparator接口说明:
 * 返回负数，形参中第一个参数排在前面；返回正数，形参中第二个参数排在前面
 * 对于队列：排在前面意味着往队头靠
 * 对于堆（使用PriorityQueue实现）：从队头到队尾按从小到大排就是最小堆（小顶堆），
 *                                从队头到队尾按从大到小排就是最大堆（大顶堆）---&gt;队头元素相当于堆的根节点
 * */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">//解法1：基于大顶堆实现</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent1</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//key为数组元素值,val为对应出现次数</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token operator">:</span>nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//在优先队列中存储二元组(num,cnt),cnt表示元素值num在数组中的出现次数</span>
        <span class="token comment">//出现次数按从队头到队尾的顺序是从大到小排,出现次数最多的在队头(相当于大顶堆)</span>
        <span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>pair1<span class="token punctuation">,</span> pair2<span class="token punctuation">)</span><span class="token operator">-&gt;</span>pair2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>pair1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry<span class="token operator">:</span>map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//大顶堆需要对所有元素进行排序</span>
            pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>k<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//依次从队头弹出k个,就是出现频率前k高的元素</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//解法2：基于小顶堆实现</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent2</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//key为数组元素值,val为对应出现次数</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token operator">:</span>nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//在优先队列中存储二元组(num,cnt),cnt表示元素值num在数组中的出现次数</span>
        <span class="token comment">//出现次数按从队头到队尾的顺序是从小到大排,出现次数最低的在队头(相当于小顶堆)</span>
        <span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>pair1<span class="token punctuation">,</span>pair2<span class="token punctuation">)</span><span class="token operator">-&gt;</span>pair1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>pair2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry<span class="token operator">:</span>map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//小顶堆只需要维持k个元素有序</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pq<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>k<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//小顶堆元素个数小于k个时直接加</span>
                pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>pq<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//当前元素出现次数大于小顶堆的根结点(这k个元素中出现次数最少的那个)</span>
                    pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//弹出队头(小顶堆的根结点),即把堆里出现次数最少的那个删除,留下的就是出现次数多的了</span>
                    pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//依次弹出小顶堆,先弹出的是堆的根,出现次数少,后面弹出的出现次数多</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.91,words:874},y:"a",t:"前 K 个高频元素",O:7}}],["/ComputerBasics/Algorithm/07BinaryTree/",{loader:()=>m(()=>import("./index.html-BIrHaFDm.js"),__vite__mapDeps([180,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","二叉树"],r:{minutes:.06,words:19},y:"a",t:"07 二叉树"}}],["/ComputerBasics/Algorithm/08BacktrackingAlgorithm/",{loader:()=>m(()=>import("./index.html-BJXCk2Gh.js"),__vite__mapDeps([181,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","回溯算法"],r:{minutes:.07,words:21},y:"a",t:"08 回溯算法"}}],["/ComputerBasics/Algorithm/09GreedyAlgorithm/",{loader:()=>m(()=>import("./index.html-CzSqmv5s.js"),__vite__mapDeps([182,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","贪心算法"],r:{minutes:.07,words:21},y:"a",t:"09 贪心算法"}}],["/ComputerBasics/Algorithm/10DynamicProgramming/",{loader:()=>m(()=>import("./index.html-3gJ-yP2x.js"),__vite__mapDeps([183,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","动态规划"],r:{minutes:.07,words:21},y:"a",t:"10 动态规划"}}],["/ComputerBasics/Algorithm/11MonotonicStack/",{loader:()=>m(()=>import("./index.html-EeDZSUhV.js"),__vite__mapDeps([184,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["算法","单调栈"],r:{minutes:.06,words:19},y:"a",t:"11 单调栈"}}],["/ComputerBasics/Algorithm/12Summary/",{loader:()=>m(()=>import("./index.html-Cxn07NAw.js"),__vite__mapDeps([185,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法"],r:{minutes:.05,words:15},y:"a",t:"12 总结"}}],["/ComputerBasics/Algorithm/12Summary/summary01.html",{loader:()=>m(()=>import("./summary01.html-sT_syPza.js"),__vite__mapDeps([186,1])),meta:{d:17092512e5,l:"2024年3月1日",c:["算法"],e:`
`,r:{minutes:.04,words:11},y:"a",t:"总结",O:1}}],["/ComputerBasics/ComputerNetwork/01cn/",{loader:()=>m(()=>import("./index.html-CPU2SRD7.js"),__vite__mapDeps([187,1])),meta:{d:17097696e5,l:"2024年3月7日",c:["计算机网络"],r:{minutes:.08,words:23},y:"a",t:"计算机网络面试题"}}],["/ComputerBasics/ComputerNetwork/01cn/cn01.html",{loader:()=>m(()=>import("./cn01.html-C8JVBUyK.js"),__vite__mapDeps([188,1])),meta:{d:17097696e5,l:"2024年3月7日",c:["计算机网络"],e:`
<h2>OSI 七层网络模型及各层协议</h2>
<p><strong>OSI（Open System Interconnect）七层网络模型</strong> 是国际标准化组织提出的一个网络分层模型</p>
<table>
<thead>
<tr>
<th>结构</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>应用层</td>
<td>为计算机用户提供服务</td>
</tr>
<tr>
<td>表示层</td>
<td>负责数据格式的转换（编码解码、加密解密、压缩解压缩）</td>
</tr>
<tr>
<td>会话层</td>
<td>管理（建立、维护、重连）应用程序之间的会话</td>
</tr>
<tr>
<td>传输层</td>
<td>提供端到端的通信，数据的分段、流量控制和错误恢复。</td>
</tr>
<tr>
<td>网络层</td>
<td>路由和寻址（决定数据在网络的游走路径）</td>
</tr>
<tr>
<td>数据链路层</td>
<td>提供物理层上的逻辑连接，进行帧的同步、错误检测和流量控制</td>
</tr>
<tr>
<td>物理层</td>
<td>传输比特流，定义了物理介质和设备之间的连接标准</td>
</tr>
</tbody>
</table>`,r:{minutes:1.24,words:371},y:"a",t:"基础级问题",O:1}}],["/ComputerBasics/ComputerNetwork/01cn/cn02.html",{loader:()=>m(()=>import("./cn02.html-B1_1fO-x.js"),__vite__mapDeps([189,1])),meta:{d:17097696e5,l:"2024年3月7日",c:["计算机网络"],e:`
<h2>tcp 如何保证可靠性传输</h2>
<h3>拥塞控制</h3>
<h3>流量控制</h3>
<h3>重传机制</h3>
<h2>常见协议工作原理</h2>
<h3>https</h3>
<h3>ARP</h3>
<h3>ICMP</h3>
<h3>DHCP</h3>
<h3>PING</h3>
<h2>session 和 cookie 的区别</h2>
`,r:{minutes:.19,words:58},y:"a",t:"进阶级问题",O:2}}],["/ComputerBasics/ComputerNetwork/01cn/cn03.html",{loader:()=>m(()=>import("./cn03.html-DMn_M1nG.js"),__vite__mapDeps([190,1])),meta:{d:17097696e5,l:"2024年3月7日",c:["计算机网络"],e:`
<h2>tcp 的粘包和拆包以解决方案</h2>
<h2>Dos、DDos、DRDos 攻击</h2>
<h2>http长连接原理</h2>
`,r:{minutes:.13,words:40},y:"a",t:"挑战级问题",O:3}}],["/ComputerBasics/DataStructure/01DS/",{loader:()=>m(()=>import("./index.html-BeoDKxKl.js"),__vite__mapDeps([191,1])),meta:{d:17097696e5,l:"2024年3月7日",c:["数据结构"],r:{minutes:.08,words:24},y:"a",t:"数据结构与算法面试题"}}],["/ComputerBasics/DataStructure/01DS/ds01.html",{loader:()=>m(()=>import("./ds01.html-Ds4p9aF1.js"),__vite__mapDeps([192,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["数据结构"],e:`
<h2>栈的概念、性质、应用</h2>
<h3>栈的基本概念</h3>
<p><strong>栈（Stack）</strong> 是一种基本的数据结构，它遵循 <strong>先进后出</strong> （Last In, First Out，LIFO）的原则。这意味着最后进入栈的元素将首先被移除。</p>
<p>栈常用一维数组或链表来实现，用数组实现的栈叫作 <strong>顺序栈</strong> ，用链表实现的栈叫作 <strong>链式栈</strong> 。</p>
<h3>栈的基本操作</h3>
<ol>
<li>
<p><strong>push</strong>：将元素插入栈顶，栈顶元素被移除。</p>
</li>
<li>
<p><strong>pop</strong>：将栈顶元素移除。</p>
</li>
<li>
<p><strong>Peek</strong>：查看栈顶元素，但不移除。</p>
</li>
<li>
<p><strong>isEmpty</strong>：判断栈是否为空。</p>
</li>
<li>
<p><strong>size</strong>：返回栈中元素的个数。</p>
</li>
<li>
<p><strong>toString</strong>：返回栈中元素的字符串表示。</p>
</li>
</ol>`,r:{minutes:4.47,words:1342},y:"a",t:"基础级问题",O:1}}],["/ComputerBasics/DataStructure/01DS/ds02_.html",{loader:()=>m(()=>import("./ds02_.html-Diz3xo_G.js"),__vite__mapDeps([193,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["数据结构"],e:`
<h2>常见哈希函数</h2>
<h2>堆的概念、性质及其插入、删除</h2>
<h2>huffman树概念、构造方法及huffman编码</h2>
<h2>AVL树及其性质</h2>
<h2>红黑树概念及其性质</h2>
<h2>B树、B+树、B*树</h2>
<h2>图的最小生成树</h2>
<h2>图的最短路径查找算法</h2>
<h2>基本算法思想</h2>
<h3>穷举</h3>
<h3>分治</h3>
<h3>贪心</h3>
<h3>回溯</h3>
<h3>动态规划</h3>
`,r:{minutes:.34,words:102},y:"a",t:"进阶级问题",O:2}}],["/ComputerBasics/DataStructure/01DS/ds03.html",{loader:()=>m(()=>import("./ds03.html-BoJxKiMW.js"),__vite__mapDeps([194,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["数据结构"],e:`
<h2>布隆过滤器</h2>
<h2>字符串匹配算法</h2>
<h2>红黑树与AVL树的比较</h2>
<h2>A*算法</h2>
<h2>tim排序</h2>
`,r:{minutes:.14,words:43},y:"a",t:"挑战级问题",O:3}}],["/ComputerBasics/DataStructure/02MO/",{loader:()=>m(()=>import("./index.html-ruUqJr9A.js"),__vite__mapDeps([195,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["中间件与其他专业技能"],r:{minutes:.1,words:30},y:"a",t:"中间件与其他专业技能"}}],["/ComputerBasics/DataStructure/02MO/mo01.html",{loader:()=>m(()=>import("./mo01.html-BX0GyyE7.js"),__vite__mapDeps([196,1])),meta:{d:17100288e5,l:"2024年3月10日",e:`
<h2>Spring控制翻转与依赖注入</h2>
<h2>Spring AOP概念与动机</h2>
<h2>依赖注入的基本原则</h2>
<h2>Spring factoryBean与beanFactory</h2>
<h2>Spring BeanFactory和ApplicationContext区别</h2>
<h2>Spring事务及传播机制</h2>
<h2>Redis的常见数据类型</h2>
<h2>设计模式原则</h2>
`,r:{minutes:.23,words:69},y:"a",t:"基础级问题",O:1}}],["/ComputerBasics/DataStructure/02MO/mo02.html",{loader:()=>m(()=>import("./mo02.html-CQHoWySV.js"),__vite__mapDeps([197,1])),meta:{d:17100288e5,l:"2024年3月10日",e:`
<h2>Spring ioc实现机制</h2>
<h2>Redis内存淘汰机制</h2>
<h2>Redis过期删除实现原理</h2>
<h2>Redis持久化机制</h2>
<h2>一致性哈希算法</h2>
<h2>Nginx的特性</h2>
<h2>常见的设计模式及应用</h2>
<h2>MQ的作用</h2>
`,r:{minutes:.21,words:64},y:"a",t:"进阶级问题",O:2}}],["/ComputerBasics/DataStructure/02MO/mo03.html",{loader:()=>m(()=>import("./mo03.html-BLZmE8ao.js"),__vite__mapDeps([198,1])),meta:{d:17100288e5,l:"2024年3月10日",e:`
<h2>AOP的实现原理</h2>
<h2>Spring Bean的生命周期</h2>
<h2>Redis数据结构的实现原理</h2>
<h2>Redis线程模型</h2>
<h2>缓存双写一致性问题</h2>
<h2>分布式事务CAP理论及2pc、3pc协议</h2>
<h2>分布式锁实现机制原理</h2>
<h2>领域驱动设计</h2>
<h2>Kafka的设计架构</h2>
<h2>Kafka的高性能设计</h2>
<h2>Kafka的持久化设计</h2>
`,r:{minutes:.31,words:93},y:"a",t:"3",O:3}}],["/ComputerBasics/OpreatingSystem/OSInterview/",{loader:()=>m(()=>import("./index.html-i0YUa8sA.js"),__vite__mapDeps([199,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["操作系统"],r:{minutes:.08,words:23},y:"a",t:"操作系统面试题"}}],["/ComputerBasics/OpreatingSystem/OSInterview/osi01.html",{loader:()=>m(()=>import("./osi01.html-DCayo1Wd.js"),__vite__mapDeps([200,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["操作系统"],e:`
<h2>进程、线程的区别</h2>
<h2>进程状态及转换</h2>
<h2>线程同步方式</h2>
<h2>死锁及其产生条件</h2>
<h2>内存分页、内存分段的区别</h2>
<h2>虚拟内存</h2>
<h2>页面置换算法</h2>
<h2>中断处理过程</h2>
`,r:{minutes:.24,words:71},y:"a",t:"基础级问题",O:1}}],["/ComputerBasics/OpreatingSystem/OSInterview/osi02.html",{loader:()=>m(()=>import("./osi02.html-Dek5ekXp.js"),__vite__mapDeps([201,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["操作系统"],e:`
<h2>进程间通信方式</h2>
<h2>进程调度算法</h2>
<h2>死锁的处理策略和常用方法</h2>
<h2>用户态和内核态及其切换</h2>
<h2>硬链接和软连接的区别</h2>
<h2>Linux基础操作命令</h2>
`,r:{minutes:.23,words:69},y:"a",t:"进阶级问题",O:2}}],["/ComputerBasics/OpreatingSystem/OSInterview/osi03.html",{loader:()=>m(()=>import("./osi03.html-DxJkSuWj.js"),__vite__mapDeps([202,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["操作系统"],e:`
<h2>IO多路复用(select、pol、epoll)</h2>
<h2>零拷贝技术</h2>
<h2>线程实现方式</h2>
<h2>Linux管道式操作命令</h2>
`,r:{minutes:.14,words:43},y:"a",t:"挑战级问题",O:3}}],["/Database/Basic/Language/",{loader:()=>m(()=>import("./index.html-Bp048ahM.js"),__vite__mapDeps([203,1])),meta:{d:1681268086e3,e:`
`,r:{minutes:.03,words:8},y:"a",t:"Language"}}],["/Database/Basic/Principle/",{loader:()=>m(()=>import("./index.html-Cx-3VWQq.js"),__vite__mapDeps([204,1])),meta:{d:1681268086e3,e:`
`,r:{minutes:5.67,words:1702},y:"a",t:"数据库基础知识"}}],["/Database/SQL/01Basics/",{loader:()=>m(()=>import("./index.html-By65QVKv.js"),__vite__mapDeps([205,1])),meta:{d:16807392e5,l:"2023年4月6日",c:["SQL基础"],e:`
`,r:{minutes:.06,words:17},y:"a",t:"MySQL基础篇",O:1}}],["/Database/SQL/01Basics/sql01.html",{loader:()=>m(()=>import("./sql01.html-CtDuZ6MF.js"),__vite__mapDeps([206,1])),meta:{d:16807392e5,l:"2023年4月6日",c:["SQL基础","DDL"],e:`
`,r:{minutes:1.44,words:432},y:"a",t:"DDL",O:1}}],["/Database/SQL/01Basics/sql02.html",{loader:()=>m(()=>import("./sql02.html-DLpGAtPD.js"),__vite__mapDeps([207,1])),meta:{d:16807392e5,l:"2023年4月6日",c:["SQL基础","DML"],e:`
`,r:{minutes:1.33,words:399},y:"a",t:"DML",O:2}}],["/Database/SQL/01Basics/sql03.html",{loader:()=>m(()=>import("./sql03.html-Bxsb8wR7.js"),__vite__mapDeps([208,1])),meta:{d:16807392e5,l:"2023年4月6日",c:["SQL基础","DQL"],e:`
`,r:{minutes:5.42,words:1627},y:"a",t:"DQL",O:3}}],["/Database/SQL/01Basics/sql04.html",{loader:()=>m(()=>import("./sql04.html-CZwDvtKL.js"),__vite__mapDeps([209,1])),meta:{d:16807392e5,l:"2023年4月6日",c:["SQL基础"],e:`
`,r:{minutes:12.75,words:3825},y:"a",t:"MySQL高级",O:4}}],["/Database/SQL/02Advanced/",{loader:()=>m(()=>import("./index.html-BcXzFsLH.js"),__vite__mapDeps([210,1])),meta:{d:169992e7,l:"2023年11月14日",c:["SQL进阶"],e:`
`,r:{minutes:.06,words:19},y:"a",t:"MySQL进阶篇",O:2}}],["/Database/SQL/02Advanced/advanced01.html",{loader:()=>m(()=>import("./advanced01.html-DP_pCX9j.js"),__vite__mapDeps([211,1])),meta:{d:169992e7,l:"2023年11月14日",c:["SQL进阶"],e:`
`,r:{minutes:.04,words:11},y:"a",t:"01",O:1}}],["/Database/SQL/03OperationAndMaintenance/",{loader:()=>m(()=>import("./index.html-cxbtOL7E.js"),__vite__mapDeps([212,1])),meta:{d:169992e7,l:"2023年11月14日",c:["SQL运维"],e:`
`,r:{minutes:.06,words:19},y:"a",t:"MySQL运维篇",O:3}}],["/Database/SQL/03OperationAndMaintenance/oam01.html",{loader:()=>m(()=>import("./oam01.html-CMIvNeKn.js"),__vite__mapDeps([213,1])),meta:{d:169992e7,l:"2023年11月14日",c:["SQL运维"],e:`
`,r:{minutes:.04,words:11},y:"a",t:"01",O:1}}],["/Projects/reggietakeout/01projectbasic/",{loader:()=>m(()=>import("./index.html-CavRVQKn.js"),__vite__mapDeps([214,1])),meta:{d:16811712e5,l:"2023年4月11日",r:{minutes:.05,words:14},y:"a",t:"项目基础",O:1}}],["/Projects/reggietakeout/01projectbasic/day01.html",{loader:()=>m(()=>import("./day01.html-BgoUALhL.js"),__vite__mapDeps([215,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 开发环境搭建</h2>
<h3>1.1 数据库环境搭建</h3>
<h4>1.1.1 创建数据库</h4>
<p>以下两种方式中的任意一种，创建项目数据库</p>
<p>1.<strong>图形界面</strong></p>
<figure><figcaption> </figcaption></figure>
<blockquote>
<p>注意: 本项目数据库的字符串，选择 utf8mb4</p>
</blockquote>
<p>2.<strong>命令行</strong></p>
<figure><figcaption> </figcaption></figure>
<h4>1.1.2 数据库表导入</h4>`,r:{minutes:8.21,words:2463},y:"a",t:"瑞吉外卖基础-Day01",O:1}}],["/Projects/reggietakeout/01projectbasic/day02.html",{loader:()=>m(()=>import("./day02.html-D3FgORWw.js"),__vite__mapDeps([216,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 完善登录功能</h2>
<h3>1.1 问题分析</h3>
<p>1.<strong>目前现状</strong></p>
<p>用户如果不登录直接访问系统首页面，照样可以正常访问</p>
<figure><figcaption> </figcaption></figure>
<p>2.<strong>理想效果</strong></p>
<p>上述这种设计并不合理，只有登录成功后才可以访问系统中的页面，如果没有登录，访问系统中的任何界面都直接跳转到登录页面</p>
<figure><figcaption> </figcaption></figure>
<p>3.<strong>具体应该怎么实现呢？</strong></p>`,r:{minutes:17.41,words:5223},y:"a",t:"瑞吉外卖基础-Day02",O:2}}],["/Projects/reggietakeout/01projectbasic/day03.html",{loader:()=>m(()=>import("./day03.html-BiG8WU2v.js"),__vite__mapDeps([217,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 公共字段自动填充</h2>
<h3>1.1 问题分析</h3>
<p>公共字段，也就是很多表中都会有这些字段</p>
<figure><figcaption> </figcaption></figure>
<blockquote>
<ol>
<li>在新增数据时，将 createTime、updateTime 设置为当前时间，createUser、updateUser设置为当前登录用户ID</li>
<li>在更新数据时，将 updateTime 设置为当前时间，updateUser 设置为当前登录用户ID</li>
</ol>
</blockquote>
<p>目前项目中处理这些字段都是在每一个业务方法中进行赋值操作</p>`,r:{minutes:15.97,words:4792},y:"a",t:"瑞吉外卖基础-Day03",O:3}}],["/Projects/reggietakeout/01projectbasic/day04.html",{loader:()=>m(()=>import("./day04.html-BnlJhsnc.js"),__vite__mapDeps([218,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 文件上传下载</h2>
<h3>1.1 上传介绍</h3>
<h4>1.1.1 概述</h4>
<p>文件上传，也称为upload，是指将本地图片、视频、音频等文件上传到服务器上，可以供其他用户浏览或下载的过程</p>
<figure><figcaption> </figcaption></figure>
<p>文件上传时，对页面的form表单有如下要求：</p>
<table>
<thead>
<tr>
<th>表单属性</th>
<th>取值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>method</td>
<td>post</td>
<td>必须选择post方式提交</td>
</tr>
<tr>
<td>enctype</td>
<td>multipart/form-data</td>
<td>采用multipart格式上传文件</td>
</tr>
<tr>
<td>type</td>
<td>file</td>
<td>使用input的file控件上传</td>
</tr>
</tbody>
</table>`,r:{minutes:19.9,words:5969},y:"a",t:"瑞吉外卖基础-Day04",O:4}}],["/Projects/reggietakeout/01projectbasic/day05.html",{loader:()=>m(()=>import("./day05.html-DqfLRaDu.js"),__vite__mapDeps([219,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 新增套餐</h2>
<h3>1.1 需求分析</h3>
<p>套餐就是菜品的集合</p>
<p>后台系统中可以管理套餐信息，通过新增套餐功能来添加一个新的套餐，在添加套餐时需要选择当前套餐所属的套餐分类和包含的菜品，并且需要上传套餐对应的图片，在移动端会按照套餐分类来展示对应的套餐</p>
<figure><figcaption> </figcaption></figure>
<h3>1.2 数据模型</h3>
<p>新增套餐，其实就是将新增页面录入的套餐信息插入到setmeal表，还需要向setmeal_dish表插入套餐和菜品关联数据<br>
所以在新增套餐时，涉及到两个表</p>`,r:{minutes:26.07,words:7821},y:"a",t:"瑞吉外卖基础-Day05",O:5}}],["/Projects/reggietakeout/01projectbasic/day06.html",{loader:()=>m(()=>import("./day06.html-B1mqQIkW.js"),__vite__mapDeps([220,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 用户地址簿功能</h2>
<h3>1.1 需求分析</h3>
<p>地址簿：指的是移动端消费者用户的地址信息，用户登录成功后可以维护自己的地址信息，同一个用户可以有多个地址信息，但是只能有一个<strong>默认地址</strong></p>
<figure><figcaption> </figcaption></figure>
<figure><figcaption> </figcaption></figure>
<p>对于地址簿管理，需要实现以下几个功能：</p>
<ul>
<li>新增地址</li>
<li>地址列表查询</li>
<li>设置默认地址</li>
<li>编辑地址</li>
<li>删除地址</li>
</ul>`,r:{minutes:19.84,words:5952},y:"a",t:"瑞吉外卖基础-Day06",O:6}}],["/Projects/reggietakeout/02git/",{loader:()=>m(()=>import("./index.html-yC9YWEDB.js"),__vite__mapDeps([221,1])),meta:{d:16811712e5,l:"2023年4月11日",r:{minutes:.04,words:11},y:"a",t:"Git",O:2}}],["/Projects/reggietakeout/02git/git01.html",{loader:()=>m(()=>import("./git01.html-YqhlOioU.js"),__vite__mapDeps([222,1])),meta:{d:16828128e5,l:"2023年4月30日",c:["Git"],e:`
<blockquote>
<p>掌握 Git 本地仓库操作命令<br>
掌握 Git 远程仓库操作命令<br>
掌握 Git 分支操作命令<br>
了解 Git 标签操作命令<br>
掌握 IDEA 中使用 Git 的方法</p>
</blockquote>
<h2>1. 前言</h2>
<h3>1.1 什么是Git</h3>
<p>Git是一个分布式版本控制工具，主要用于管理开发过程中的源代码文件（Java类、xml文件、html页面等），在软件开发过程中被广泛使用。</p>
<div class="hint-container tip">
<p class="hint-container-title">其他的版本控制工具</p>
<ul>
<li>SVN</li>
<li>CVS</li>
<li>VSS</li>
</ul>
</div>`,r:{minutes:7.22,words:2165},y:"a",t:"Git-Day01",O:1}}],["/Projects/reggietakeout/03linux/",{loader:()=>m(()=>import("./index.html-CAjFmlox.js"),__vite__mapDeps([223,1])),meta:{d:16811712e5,l:"2023年4月11日",r:{minutes:.04,words:11},y:"a",t:"Linux",O:3}}],["/Projects/reggietakeout/03linux/day01.html",{loader:()=>m(()=>import("./day01.html-CRcdhi90.js"),__vite__mapDeps([224,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖"],e:`
<h2>1. 前言</h2>
<h3>1.1 什么是Linux</h3>
<p>Linux是一套免费使用和自由传播的操作系统</p>
<h3>1.2 为什么要学Linux</h3>
<ol>
<li>
<p>企业用人要求</p>
<p>Linux操作系统提供了很多稳定的发行版本，广泛的应用在各种服务器操作系统领域，将来开发出来的项目，最终要上线运行，就需要将项目部署在Linux服务器中</p>
</li>
<li>
<p>个人发展需要</p>
<p>作为javaEE开发工程师，将来在企业中开发时会涉及到很多的数据库、中间件等技术，比如MySQL、Redis、MQ等技术，而这些应用软件大多都是需要安装在Linux系统中使用的</p>
<p>做为开发人员，是需要通过远程工具连接Linux操作系统，然后来操作这些软件的</p>
</li>
</ol>`,r:{minutes:13.62,words:4087},y:"a",t:"Linux-Day01",O:1}}],["/Projects/reggietakeout/03linux/day02.html",{loader:()=>m(()=>import("./day02.html-BK12evmN.js"),__vite__mapDeps([225,1])),meta:{d:16811712e5,l:"2023年4月11日",c:["瑞吉外卖","Linux"],e:`
<h2>网络常识</h2>
<p>桥接模式：使用你的真实网卡,相当于你的局域网中多了一台电脑</p>
<p>仅主机模式：通过虚拟网卡将消息转发给真机,真机再把消息发到外部局域网,虚拟机里面装的软件,外部机器访问不到</p>
<p>NAT模式：可以把虚拟机的端口映射到真机上,外部机器可以访问真机的ip和端口从而访问到虚拟机</p>
<h2>1. 软件安装</h2>
<p><a href="https://www.bilibili.com/video/BV13a411q753?p=132&amp;vd_source=8a1412d04d200fa33278d2b150f9b8df" target="_blank" rel="noopener noreferrer">软件安装视频地址</a></p>`,r:{minutes:2.18,words:654},y:"a",t:"Linux-Day02",O:2}}],["/Projects/reggietakeout/04Redis/",{loader:()=>m(()=>import("./index.html-C6pPm1a1.js"),__vite__mapDeps([226,1])),meta:{d:16811712e5,l:"2023年4月11日",r:{minutes:.04,words:11},y:"a",t:"Redis",O:3}}],["/Projects/reggietakeout/04Redis/redis01.html",{loader:()=>m(()=>import("./redis01.html-dDHIoNOP.js"),__vite__mapDeps([227,1])),meta:{d:16828128e5,l:"2023年4月30日",c:["Redis"],e:`
<blockquote>
<ul>
<li>Redis入门</li>
<li>Redis数据类型</li>
<li>Redis常用命令</li>
<li>在Java中操作Redis</li>
</ul>
</blockquote>
<h2>1. 前言</h2>
<h3>1.1 什么是Redis</h3>
<p>Redis是一个基于<strong>内存</strong>的key-value结构数据库。Redis 是互联网技术领域使用最为广泛的存储中间件，它是「<strong>Re</strong>mote <strong>Di</strong>ctionary <strong>S</strong>ervice」的首字母缩写，也就是「远程字典服务」</p>`,r:{minutes:11.08,words:3323},y:"a",t:"Redis-Day01",O:1}}],["/Tools/Git/01Manual/",{loader:()=>m(()=>import("./index.html-C2yrYX25.js"),__vite__mapDeps([228,1])),meta:{d:16841088e5,l:"2023年5月15日",r:{minutes:.04,words:12},y:"a",t:"1 手册"}}],["/Tools/Git/01Manual/manual01.html",{loader:()=>m(()=>import("./manual01.html-BZyugLha.js"),__vite__mapDeps([229,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>一般来说，日常使用只要记住下图6个命令，就可以了。但是熟练使用，恐怕要记住60～100个命令。</p>
<figure><figcaption> </figcaption></figure>
<p>几个专用名词的译名</p>
<blockquote>
<ul>
<li>Workspace：工作区</li>
<li>Index / Stage：暂存区</li>
<li>Repository：仓库区（或本地仓库）</li>
<li>Remote：远程仓库</li>
</ul>
</blockquote>
<h2>1 新建代码库</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在当前目录新建一个Git代码库</span>
$ <span class="token function">git</span> init

<span class="token comment"># 新建一个目录，将其初始化为Git代码库</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># 下载一个项目和它的整个代码历史</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:5.94,words:1782},y:"a",t:"1. 常用Git命令清单",O:1}}],["/Tools/Git/01Manual/manual02.html",{loader:()=>m(()=>import("./manual02.html-3L82imPj.js"),__vite__mapDeps([230,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<h2>1 rebase分支合并</h2>
<h3>1.1 说明</h3>
<p>以下 <code>v2</code> 是某个需求的开发分支， <code>dev</code>是总的开发分支，<code>v2</code> 是基于<code>dev</code>分支签出的。</p>
<p>当完成<code>v2</code>的开发后，需要把代码合并到<code>dev</code>，我们可以使用<code>rebase</code>进行合并：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 首先将 v2 push到远程仓库</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'xxx'</span>
<span class="token function">git</span> push origin v2

<span class="token comment"># 切换到 dev 拉取最新代码</span>
<span class="token function">git</span> checkout dev
<span class="token function">git</span> pull origin dev

<span class="token comment"># 切换到 v2</span>
<span class="token function">git</span> checkout v2
<span class="token function">git</span> rebase dev <span class="token comment"># 将 v2 的所有[commit] 变基到(应用到) dev</span>

<span class="token comment"># 切换到 dev</span>
<span class="token function">git</span> checkout dev
<span class="token function">git</span> merge v2  <span class="token comment"># 将 dev分支 快进合并 （此时 (HEAD -&gt; dev, v2) [commit] 两个分支指向同一个提交）</span>

<span class="token comment"># 查看 原v2的[commit]记录 是否在dev分支的最前面（变基成功会把v2的提交记录应用到dev分支的最前面）</span>
<span class="token function">git</span> log

<span class="token comment"># 如果到这一步发现有问题，尝试使用 git --abort中止变基，如果还是有问题的可以在dev分支上使用《后悔药》操作， 再到v2分支上使用《后悔药》操作，即可使两个分支都回退到 rebase变基 之前的状态</span>

<span class="token comment"># 试运行项目是否有问题</span>
<span class="token function">yarn</span> start

<span class="token function">git</span> status <span class="token comment"># 查看状态是否有问题</span>
<span class="token function">git</span> push origin dev <span class="token comment"># 推送到远程仓库的 dev</span>

</code></pre></div>`,r:{minutes:4.29,words:1288},y:"a",t:"2. Git变基合并",O:2}}],["/Tools/Git/01Manual/manual03.html",{loader:()=>m(()=>import("./manual03.html-BxKcJxmA.js"),__vite__mapDeps([231,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<figure><figcaption> </figcaption></figure>
`,r:{minutes:.06,words:17},y:"a",t:"3. Git命令思维导图",O:3}}],["/Tools/Git/02DocumentNotes/",{loader:()=>m(()=>import("./index.html-HgH9fHir.js"),__vite__mapDeps([232,1])),meta:{d:16841088e5,l:"2023年5月15日",r:{minutes:.05,words:14},y:"a",t:"2 文档笔记"}}],["/Tools/Git/02DocumentNotes/documentnotes01.html",{loader:()=>m(()=>import("./documentnotes01.html-Dt-Tne0q.js"),__vite__mapDeps([233,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>官方文档（中文）：<a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noopener noreferrer">https://git-scm.com/book/zh/v2</a></p>
<h2>Git基础</h2>
<h3>全局配置</h3>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">'your name'</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">'xxx@xx.com'</span>
</code></pre></div>`,r:{minutes:12.78,words:3834},y:"a",t:"1. Git基础与命令",O:1}}],["/Tools/Git/02DocumentNotes/documentnotes02.html",{loader:()=>m(()=>import("./documentnotes02.html-CxiPmiji.js"),__vite__mapDeps([234,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。</p>
<h2>首次提交</h2>
<p>在进行提交操作时，Git 会保存一个提交对象（commit object）。</p>
<p>假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。 暂存操作会为每一个文件计算校验和（使用 SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中 （Git 使用 <em>blob</em> 对象来保存它们），最终将校验和加入到暂存区域等待提交：</p>`,r:{minutes:6.35,words:1904},y:"a",t:"2. Git分支-分支原理",O:2}}],["/Tools/Git/02DocumentNotes/documentnotes03.html",{loader:()=>m(()=>import("./documentnotes03.html-DkaaxrJu.js"),__vite__mapDeps([235,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>文档：<a href="https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6" target="_blank" rel="noopener noreferrer">Git 分支 - 分支的新建与合并</a></p>
<h2>创建分支并切换</h2>
<p>此时有一个需求需要在新的分支<code>iss53</code>上工作：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> iss53  <span class="token comment"># b表示branch</span>
</code></pre></div>`,r:{minutes:3.05,words:915},y:"a",t:"3. Git分支的新建与合并-分支操作",O:3}}],["/Tools/Git/02DocumentNotes/documentnotes04.html",{loader:()=>m(()=>import("./documentnotes04.html-Cs0uTKtT.js"),__vite__mapDeps([236,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<h2>查看分支</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
  iss53
* master  <span class="token comment"># 带星号*表示当前所在分支</span>
  testing
</code></pre></div><p><code>git branch</code> 命令不只是可以创建与删除分支。 如果不加任何参数运行它，会得到当前所有分支的一个列表。</p>`,r:{minutes:1.3,words:391},y:"a",t:"4. Git分支管理-查看分支",O:4}}],["/Tools/Git/02DocumentNotes/documentnotes05.html",{loader:()=>m(()=>import("./documentnotes05.html-Cwdxllz1.js"),__vite__mapDeps([237,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>文档：<a href="https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E4%BD%9C%E6%B5%81" target="_blank" rel="noopener noreferrer">Git分支开发工作流</a></p>
<h2>长期分支</h2>
<p>因为 Git 使用简单的三方合并，所以就算在一段较长的时间内，反复把一个分支合并入另一个分支，也不是什么难事。 也就是说，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支；你可以定期地把某些主题分支合并入其他分支中。</p>`,r:{minutes:4.01,words:1204},y:"a",t:"5. Git分支开发工作流",O:5}}],["/Tools/Git/02DocumentNotes/documentnotes06.html",{loader:()=>m(()=>import("./documentnotes06.html-go3nmab5.js"),__vite__mapDeps([238,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p><strong>远程引用是对远程仓库的引用（指针）</strong>，包括分支、标签等等。</p>
<blockquote>
<p>远程分支本质上也是一个指针，指向远程地址</p>
</blockquote>
<h2>查看远程引用列表与信息</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># 远程引用的完整列表</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># 远程分支的更多信息</span>
</code></pre></div>`,r:{minutes:10.85,words:3255},y:"a",t:"6. Git分支-远程分支",O:6}}],["/Tools/Git/02DocumentNotes/documentnotes07.html",{loader:()=>m(()=>import("./documentnotes07.html-CBdVNJ6t.js"),__vite__mapDeps([239,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>在 Git 中整合来自不同分支的修改主要有两种方法：<code>merge</code> 以及 <code>rebase</code>。 在本节中我们将学习什么是“变基”，怎样使用“变基”，并将展示该操作的惊艳之处，以及指出在何种情况下你应避免使用它。</p>
<h2>变基的基本操作</h2>
<p>请回顾之前在 <a href="https://git-scm.com/book/zh/v2/ch00/_basic_merging" target="_blank" rel="noopener noreferrer">分支的合并</a> 中的一个例子，你会看到开发任务分叉到两个不同分支，又各自提交了更新。</p>`,r:{minutes:13.89,words:4166},y:"a",t:"7. Git分支-变基",O:7}}],["/Tools/Git/02DocumentNotes/documentnotes08.html",{loader:()=>m(()=>import("./documentnotes08.html-BF9FeLsL.js"),__vite__mapDeps([240,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>Git 能够以多种方式来指定单个提交、一组提交、或者一定范围内的提交。 了解它们并不是必需的，但是了解一下总没坏处。</p>
<p>修订版本指的是：<strong>提交</strong></p>
<h2>单个修订版本</h2>
<p>你可以通过任意一个提交的 40 个字符的完整 SHA-1 散列值来指定它， 不过还有很多更人性化的方式来做同样的事情。本节将会介绍获取单个提交的多种方法。</p>
<h2>简短的 SHA-1</h2>
<p>Git 十分智能，你只需要提供 SHA-1 的前几个字符就可以获得对应的那次提交， 当然你提供的 SHA-1 字符数量<strong>不得少于 4 个</strong>，并且没有歧义——也就是说， 当前对象数据库中没有其它对象以这段 SHA-1 开头。</p>`,r:{minutes:11.57,words:3472},y:"a",t:"8. Git工具-查看修订版本",O:8}}],["/Tools/Git/02DocumentNotes/documentnotes09.html",{loader:()=>m(()=>import("./documentnotes09.html-C1_IwePW.js"),__vite__mapDeps([241,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 <code>git add</code> 时使用 <code>-i</code> 或者 <code>--interactive</code> 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-i</span>
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb

*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">&gt;</span>
</code></pre></div>`,r:{minutes:5.15,words:1545},y:"a",t:"9. Git工具-交互式暂存",O:9}}],["/Tools/Git/02DocumentNotes/documentnotes10.html",{loader:()=>m(()=>import("./documentnotes10.html-DrnwaD0Q.js"),__vite__mapDeps([242,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>许多时候，在使用 Git 时，你可能想要修订提交历史。 Git 很棒的一点是它允许你在最后时刻做决定。 你可以在将暂存区内容提交前决定哪些文件进入提交，可以通过 <code>git stash</code> 来决定不与某些内容工作， 也可以重写已经发生的提交就像它们以另一种方式发生的一样。 这可能涉及改变提交的顺序，改变提交中的信息或修改文件，将提交压缩或是拆分， 或完全地移除提交——在将你的工作成果与他人共享之前。</p>
<p>在本节中，你可以学到如何完成这些工作，这样在与他人分享你的工作成果时你的提交历史将如你所愿地展示出来。</p>
<table>
<thead>
<tr>
<th>Note</th>
<th>在满意之前不要推送你的工作Git 的基本原则之一是，由于克隆中有很多工作是本地的，因此你可以 <strong>在本地</strong> 随便重写历史记录。 然而一旦推送了你的工作，那就完全是另一回事了，除非你有充分的理由进行更改，否则应该将推送的工作视为最终结果。 简而言之，在对它感到满意并准备与他人分享之前，应当避免推送你的工作。</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:12.89,words:3868},y:"a",t:"10. Git工具-重写历史",O:10}}],["/Tools/Git/02DocumentNotes/documentnotes11.html",{loader:()=>m(()=>import("./documentnotes11.html-Bmf_-71g.js"),__vite__mapDeps([243,1])),meta:{d:16841088e5,l:"2023年5月15日",c:["Git"],e:`
<p>在继续了解更专业的工具前，我们先探讨一下 Git 的 <code>reset</code> 和 <code>checkout</code> 命令。 在初遇的 Git 命令中，这两个是最让人困惑的。 它们能做很多事情，所以看起来我们很难真正地理解并恰当地运用它们。 针对这一点，我们先来做一个简单的比喻。</p>
<h2>三棵树</h2>
<p>理解 <code>reset</code> 和 <code>checkout</code> 的最简方法，就是以 Git 的思维框架（将其作为内容管理器）来管理三棵不同的树。 “树” 在我们这里的实际意思是 “文件的集合”，而不是指特定的数据结构。 （在某些情况下索引看起来并不像一棵树，不过我们现在的目的是用简单的方式思考它。）</p>`,r:{minutes:13.1,words:3931},y:"a",t:"11. Git工具-重置揭密",O:11}}],["/Database/Basic/Principle/DBInterview/",{loader:()=>m(()=>import("./index.html-BytKjdm4.js"),__vite__mapDeps([244,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["数据库"],r:{minutes:.07,words:21},y:"a",t:"数据库面试题"}}],["/Database/Basic/Principle/DBInterview/dbi01.html",{loader:()=>m(()=>import("./dbi01.html-B57gACYQ.js"),__vite__mapDeps([245,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["数据库"],e:`
<h2>varchar和char的区别</h2>
<h2>drop \\ delete \\ truncate的区别</h2>
<h2>mysql存储引擎及比较</h2>
<h2>mysql索引类型</h2>
<h2>关系数据库事务特性</h2>
<h2>数据库事务隔离级别及解决的问题</h2>
<h2>数据库内连接、外连接、笛卡尔积</h2>
`,r:{minutes:.26,words:77},y:"a",t:"基础级问题",O:1}}],["/Database/Basic/Principle/DBInterview/dbi02.html",{loader:()=>m(()=>import("./dbi02.html-DZV0GKQi.js"),__vite__mapDeps([246,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["数据库"],e:`
<h2>innodb的行锁种类，死锁原因及解法</h2>
<h2>innodb索引使用原则</h2>
<h2>自适应哈希索引</h2>
<h2>数据库崩溃恢复机制</h2>
`,r:{minutes:.17,words:51},y:"a",t:"进阶级问题",O:2}}],["/Database/Basic/Principle/DBInterview/dbi03.html",{loader:()=>m(()=>import("./dbi03.html-QTPDlTly.js"),__vite__mapDeps([247,1])),meta:{d:17100288e5,l:"2024年3月10日",c:["数据库"],e:`
<h2>mysql事务隔离级别实现原理</h2>
<h2>innodb索引实现原理及动机</h2>
<h2>查询语句中不同关键字的执行顺序</h2>
<h2>关系数据库范式与反范式及其取合</h2>
<h2>数据库主从架构及数据同步机制</h2>
<h2>SQL调优</h2>
<h2>倒排索引原理</h2>
`,r:{minutes:.3,words:89},y:"a",t:"挑战级问题",O:3}}],["/404.html",{loader:()=>m(()=>import("./404.html-1I6WCfV6.js"),__vite__mapDeps([248,1])),meta:{y:"p",t:""}}],["/BackEnd/",{loader:()=>m(()=>import("./index.html-BQi35vmN.js"),__vite__mapDeps([249,1])),meta:{y:"p",t:"Back End"}}],["/ComputerBasics/",{loader:()=>m(()=>import("./index.html-DquPVtzA.js"),__vite__mapDeps([250,1])),meta:{y:"p",t:"Computer Basics"}}],["/Database/",{loader:()=>m(()=>import("./index.html-CERGYyl5.js"),__vite__mapDeps([251,1])),meta:{y:"p",t:"Database"}}],["/FrontEnd/",{loader:()=>m(()=>import("./index.html-CiyJDAxK.js"),__vite__mapDeps([252,1])),meta:{y:"p",t:"Front End"}}],["/Others/",{loader:()=>m(()=>import("./index.html-DdypkRpJ.js"),__vite__mapDeps([253,1])),meta:{y:"p",t:"Others"}}],["/Tools/",{loader:()=>m(()=>import("./index.html-CiJ46zEr.js"),__vite__mapDeps([254,1])),meta:{y:"p",t:"Tools"}}],["/Database/Basic/",{loader:()=>m(()=>import("./index.html-Dh-k2sjm.js"),__vite__mapDeps([255,1])),meta:{y:"p",t:"Basic"}}],["/category/",{loader:()=>m(()=>import("./index.html-D7sDa0XW.js"),__vite__mapDeps([256,1])),meta:{y:"p",t:"分类",I:!1}}],["/category/%E4%B8%AA%E4%BA%BA%E7%AE%80%E4%BB%8B/",{loader:()=>m(()=>import("./index.html-CmnBSd-J.js"),__vite__mapDeps([257,1])),meta:{y:"p",t:"个人简介 分类",I:!1}}],["/category/javase/",{loader:()=>m(()=>import("./index.html-BTp_JDD1.js"),__vite__mapDeps([258,1])),meta:{y:"p",t:"JavaSE 分类",I:!1}}],["/category/javaweb/",{loader:()=>m(()=>import("./index.html-XoXOT5PH.js"),__vite__mapDeps([259,1])),meta:{y:"p",t:"JavaWeb 分类",I:!1}}],["/category/maven/",{loader:()=>m(()=>import("./index.html-BQuom7ag.js"),__vite__mapDeps([260,1])),meta:{y:"p",t:"Maven 分类",I:!1}}],["/category/mybatis/",{loader:()=>m(()=>import("./index.html-YTyiWODt.js"),__vite__mapDeps([261,1])),meta:{y:"p",t:"MyBatis 分类",I:!1}}],["/category/jdbc/",{loader:()=>m(()=>import("./index.html-Bea7ZbmX.js"),__vite__mapDeps([262,1])),meta:{y:"p",t:"JDBC 分类",I:!1}}],["/category/lombok/",{loader:()=>m(()=>import("./index.html-SuiR-EHm.js"),__vite__mapDeps([263,1])),meta:{y:"p",t:"lombok 分类",I:!1}}],["/category/mybatisplus/",{loader:()=>m(()=>import("./index.html-DTnvcoQ_.js"),__vite__mapDeps([264,1])),meta:{y:"p",t:"MyBatisPlus 分类",I:!1}}],["/category/spring/",{loader:()=>m(()=>import("./index.html-gwhWMTXQ.js"),__vite__mapDeps([265,1])),meta:{y:"p",t:"Spring 分类",I:!1}}],["/category/ioc/",{loader:()=>m(()=>import("./index.html-D0zYtCYZ.js"),__vite__mapDeps([266,1])),meta:{y:"p",t:"Ioc 分类",I:!1}}],["/category/di/",{loader:()=>m(()=>import("./index.html-C-grTLwO.js"),__vite__mapDeps([267,1])),meta:{y:"p",t:"DI 分类",I:!1}}],["/category/springboot/",{loader:()=>m(()=>import("./index.html-jaGBuGDw.js"),__vite__mapDeps([268,1])),meta:{y:"p",t:"SpringBoot 分类",I:!1}}],["/category/springboot%E6%A1%88%E4%BE%8B/",{loader:()=>m(()=>import("./index.html-BXFhUEUm.js"),__vite__mapDeps([269,1])),meta:{y:"p",t:"SpringBoot案例 分类",I:!1}}],["/category/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8/",{loader:()=>m(()=>import("./index.html-D5MfJyvf.js"),__vite__mapDeps([270,1])),meta:{y:"p",t:"文件存储 分类",I:!1}}],["/category/%E9%98%BF%E9%87%8C%E4%BA%91oss/",{loader:()=>m(()=>import("./index.html-BapU8yji.js"),__vite__mapDeps([271,1])),meta:{y:"p",t:"阿里云OSS 分类",I:!1}}],["/category/cookie/",{loader:()=>m(()=>import("./index.html-Tdi4eaSX.js"),__vite__mapDeps([272,1])),meta:{y:"p",t:"Cookie 分类",I:!1}}],["/category/session/",{loader:()=>m(()=>import("./index.html-B2gZ5i91.js"),__vite__mapDeps([273,1])),meta:{y:"p",t:"Session 分类",I:!1}}],["/category/%E4%BB%A4%E7%89%8C%E6%8A%80%E6%9C%AF/",{loader:()=>m(()=>import("./index.html-CMTvfH1W.js"),__vite__mapDeps([274,1])),meta:{y:"p",t:"令牌技术 分类",I:!1}}],["/category/aop/",{loader:()=>m(()=>import("./index.html-CLam2qTD.js"),__vite__mapDeps([275,1])),meta:{y:"p",t:"AOP 分类",I:!1}}],["/category/springcloud/",{loader:()=>m(()=>import("./index.html-qhsl4ANz.js"),__vite__mapDeps([276,1])),meta:{y:"p",t:"SpringCloud 分类",I:!1}}],["/category/enreka/",{loader:()=>m(()=>import("./index.html-CpGG5Osh.js"),__vite__mapDeps([277,1])),meta:{y:"p",t:"Enreka 分类",I:!1}}],["/category/nacos/",{loader:()=>m(()=>import("./index.html-D-x9vFiw.js"),__vite__mapDeps([278,1])),meta:{y:"p",t:"Nacos 分类",I:!1}}],["/category/feign/",{loader:()=>m(()=>import("./index.html-DdqgOZZb.js"),__vite__mapDeps([279,1])),meta:{y:"p",t:"Feign 分类",I:!1}}],["/category/gateway/",{loader:()=>m(()=>import("./index.html-DGlXUGW3.js"),__vite__mapDeps([280,1])),meta:{y:"p",t:"Gateway 分类",I:!1}}],["/category/docker/",{loader:()=>m(()=>import("./index.html-r_j57iNL.js"),__vite__mapDeps([281,1])),meta:{y:"p",t:"Docker 分类",I:!1}}],["/category/rabbitmq/",{loader:()=>m(()=>import("./index.html-BiOR4MS3.js"),__vite__mapDeps([282,1])),meta:{y:"p",t:"RabbitMQ 分类",I:!1}}],["/category/elasticsearch/",{loader:()=>m(()=>import("./index.html-DDgl4Yra.js"),__vite__mapDeps([283,1])),meta:{y:"p",t:"ElasticSearch 分类",I:!1}}],["/category/springmvc/",{loader:()=>m(()=>import("./index.html-BD8WUd30.js"),__vite__mapDeps([284,1])),meta:{y:"p",t:"SpringMVC 分类",I:!1}}],["/category/ssm/",{loader:()=>m(()=>import("./index.html-Cucx8oTw.js"),__vite__mapDeps([285,1])),meta:{y:"p",t:"SSM 分类",I:!1}}],["/category/%E7%AE%97%E6%B3%95/",{loader:()=>m(()=>import("./index.html-_56iGlwI.js"),__vite__mapDeps([286,1])),meta:{y:"p",t:"算法 分类",I:!1}}],["/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/",{loader:()=>m(()=>import("./index.html-_mWYMghv.js"),__vite__mapDeps([287,1])),meta:{y:"p",t:"计算机网络 分类",I:!1}}],["/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>m(()=>import("./index.html-C8Vv_f99.js"),__vite__mapDeps([288,1])),meta:{y:"p",t:"数据结构 分类",I:!1}}],["/category/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/",{loader:()=>m(()=>import("./index.html-4z0vZ2RL.js"),__vite__mapDeps([289,1])),meta:{y:"p",t:"操作系统 分类",I:!1}}],["/category/sql%E5%9F%BA%E7%A1%80/",{loader:()=>m(()=>import("./index.html-DavD5f1k.js"),__vite__mapDeps([290,1])),meta:{y:"p",t:"SQL基础 分类",I:!1}}],["/category/front-end/",{loader:()=>m(()=>import("./index.html-By92lFef.js"),__vite__mapDeps([291,1])),meta:{y:"p",t:"Front End 分类",I:!1}}],["/category/css/",{loader:()=>m(()=>import("./index.html-DFcSTARn.js"),__vite__mapDeps([292,1])),meta:{y:"p",t:"CSS 分类",I:!1}}],["/category/html/",{loader:()=>m(()=>import("./index.html-C1XMpgak.js"),__vite__mapDeps([293,1])),meta:{y:"p",t:"HTML 分类",I:!1}}],["/category/javascript/",{loader:()=>m(()=>import("./index.html-TYJegIMI.js"),__vite__mapDeps([294,1])),meta:{y:"p",t:"JavaScript 分类",I:!1}}],["/category/vue/",{loader:()=>m(()=>import("./index.html-B7zOrXok.js"),__vite__mapDeps([295,1])),meta:{y:"p",t:"Vue 分类",I:!1}}],["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>m(()=>import("./index.html-ChQ0rOP1.js"),__vite__mapDeps([296,1])),meta:{y:"p",t:"使用指南 分类",I:!1}}],["/category/%E9%A1%B9%E7%9B%AE/",{loader:()=>m(()=>import("./index.html-D1asTWOJ.js"),__vite__mapDeps([297,1])),meta:{y:"p",t:"项目 分类",I:!1}}],["/category/%E6%B1%87%E5%AE%A2crm/",{loader:()=>m(()=>import("./index.html-a8OyiAmU.js"),__vite__mapDeps([298,1])),meta:{y:"p",t:"汇客CRM 分类",I:!1}}],["/category/%E7%91%9E%E5%90%89%E5%A4%96%E5%8D%96/",{loader:()=>m(()=>import("./index.html-Bq1JktnP.js"),__vite__mapDeps([299,1])),meta:{y:"p",t:"瑞吉外卖 分类",I:!1}}],["/category/%E8%8B%8D%E7%A9%B9%E5%A4%96%E5%8D%96/",{loader:()=>m(()=>import("./index.html-Zepf8ia-.js"),__vite__mapDeps([300,1])),meta:{y:"p",t:"苍穹外卖 分类",I:!1}}],["/category/%E5%A4%A9%E6%9C%BA%E5%AD%A6%E5%A0%82/",{loader:()=>m(()=>import("./index.html-D0IzW1tn.js"),__vite__mapDeps([301,1])),meta:{y:"p",t:"天机学堂 分类",I:!1}}],["/category/git/",{loader:()=>m(()=>import("./index.html-CiMBuAOz.js"),__vite__mapDeps([302,1])),meta:{y:"p",t:"Git 分类",I:!1}}],["/category/markdown/",{loader:()=>m(()=>import("./index.html-QtguPgga.js"),__vite__mapDeps([303,1])),meta:{y:"p",t:"Markdown 分类",I:!1}}],["/category/%E6%95%B0%E7%BB%84/",{loader:()=>m(()=>import("./index.html-sd9AATP9.js"),__vite__mapDeps([304,1])),meta:{y:"p",t:"数组 分类",I:!1}}],["/category/%E9%93%BE%E8%A1%A8/",{loader:()=>m(()=>import("./index.html-dpsLtubU.js"),__vite__mapDeps([305,1])),meta:{y:"p",t:"链表 分类",I:!1}}],["/category/%E5%93%88%E5%B8%8C%E8%A1%A8/",{loader:()=>m(()=>import("./index.html-Dnr2EFok.js"),__vite__mapDeps([306,1])),meta:{y:"p",t:"哈希表 分类",I:!1}}],["/category/%E5%AD%97%E7%AC%A6%E4%B8%B2/",{loader:()=>m(()=>import("./index.html-Bu0lfMAc.js"),__vite__mapDeps([307,1])),meta:{y:"p",t:"字符串 分类",I:!1}}],["/category/%E5%8F%8C%E6%8C%87%E9%92%88%E6%B3%95/",{loader:()=>m(()=>import("./index.html-DYIADFAe.js"),__vite__mapDeps([308,1])),meta:{y:"p",t:"双指针法 分类",I:!1}}],["/category/%E5%8F%8C%E6%8C%87%E9%92%88/",{loader:()=>m(()=>import("./index.html-CCvAz_pT.js"),__vite__mapDeps([309,1])),meta:{y:"p",t:"双指针 分类",I:!1}}],["/category/%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97/",{loader:()=>m(()=>import("./index.html-E6Be09hp.js"),__vite__mapDeps([310,1])),meta:{y:"p",t:"栈与队列 分类",I:!1}}],["/category/%E4%BA%8C%E5%8F%89%E6%A0%91/",{loader:()=>m(()=>import("./index.html-Cv7w_g2P.js"),__vite__mapDeps([311,1])),meta:{y:"p",t:"二叉树 分类",I:!1}}],["/category/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95/",{loader:()=>m(()=>import("./index.html-B0NyYLkt.js"),__vite__mapDeps([312,1])),meta:{y:"p",t:"回溯算法 分类",I:!1}}],["/category/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/",{loader:()=>m(()=>import("./index.html-wecpPAP-.js"),__vite__mapDeps([313,1])),meta:{y:"p",t:"贪心算法 分类",I:!1}}],["/category/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/",{loader:()=>m(()=>import("./index.html-DnCf2Njr.js"),__vite__mapDeps([314,1])),meta:{y:"p",t:"动态规划 分类",I:!1}}],["/category/%E5%8D%95%E8%B0%83%E6%A0%88/",{loader:()=>m(()=>import("./index.html-CSvRPcTs.js"),__vite__mapDeps([315,1])),meta:{y:"p",t:"单调栈 分类",I:!1}}],["/category/%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%B8%8E%E5%85%B6%E4%BB%96%E4%B8%93%E4%B8%9A%E6%8A%80%E8%83%BD/",{loader:()=>m(()=>import("./index.html-esU-0TzJ.js"),__vite__mapDeps([316,1])),meta:{y:"p",t:"中间件与其他专业技能 分类",I:!1}}],["/category/ddl/",{loader:()=>m(()=>import("./index.html-DXtCM0R2.js"),__vite__mapDeps([317,1])),meta:{y:"p",t:"DDL 分类",I:!1}}],["/category/dml/",{loader:()=>m(()=>import("./index.html-DkEvzPqD.js"),__vite__mapDeps([318,1])),meta:{y:"p",t:"DML 分类",I:!1}}],["/category/dql/",{loader:()=>m(()=>import("./index.html-DJ2CFPUX.js"),__vite__mapDeps([319,1])),meta:{y:"p",t:"DQL 分类",I:!1}}],["/category/sql%E8%BF%9B%E9%98%B6/",{loader:()=>m(()=>import("./index.html-gp7W_nKL.js"),__vite__mapDeps([320,1])),meta:{y:"p",t:"SQL进阶 分类",I:!1}}],["/category/sql%E8%BF%90%E7%BB%B4/",{loader:()=>m(()=>import("./index.html-UAbZ60AE.js"),__vite__mapDeps([321,1])),meta:{y:"p",t:"SQL运维 分类",I:!1}}],["/category/linux/",{loader:()=>m(()=>import("./index.html-UhnvhVMD.js"),__vite__mapDeps([322,1])),meta:{y:"p",t:"Linux 分类",I:!1}}],["/category/redis/",{loader:()=>m(()=>import("./index.html-DoTzPhnm.js"),__vite__mapDeps([323,1])),meta:{y:"p",t:"Redis 分类",I:!1}}],["/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{loader:()=>m(()=>import("./index.html-CDVXhXPs.js"),__vite__mapDeps([324,1])),meta:{y:"p",t:"数据库 分类",I:!1}}],["/tag/",{loader:()=>m(()=>import("./index.html-BwvLwJsp.js"),__vite__mapDeps([325,1])),meta:{y:"p",t:"标签",I:!1}}],["/tag/%E4%B8%AA%E4%BA%BA%E7%AE%80%E4%BB%8B/",{loader:()=>m(()=>import("./index.html-Dj_89DMY.js"),__vite__mapDeps([326,1])),meta:{y:"p",t:"标签: 个人简介",I:!1}}],["/tag/%E5%AE%BD%E5%B8%A6/",{loader:()=>m(()=>import("./index.html-Cr-3Y4gD.js"),__vite__mapDeps([327,1])),meta:{y:"p",t:"标签: 宽带",I:!1}}],["/tag/%E7%A6%81%E7%94%A8/",{loader:()=>m(()=>import("./index.html-CXuUvnbv.js"),__vite__mapDeps([328,1])),meta:{y:"p",t:"标签: 禁用",I:!1}}],["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{loader:()=>m(()=>import("./index.html-Ct5moPhX.js"),__vite__mapDeps([329,1])),meta:{y:"p",t:"标签: 页面配置",I:!1}}],["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>m(()=>import("./index.html-B0ovx8gG.js"),__vite__mapDeps([330,1])),meta:{y:"p",t:"标签: 使用指南",I:!1}}],["/tag/%E8%B5%84%E6%BA%90%E6%95%B4%E5%90%88/",{loader:()=>m(()=>import("./index.html-_lXcxGL5.js"),__vite__mapDeps([331,1])),meta:{y:"p",t:"标签: 资源整合",I:!1}}],["/article/",{loader:()=>m(()=>import("./index.html-Bav2TIbc.js"),__vite__mapDeps([332,1])),meta:{y:"p",t:"文章",I:!1}}],["/star/",{loader:()=>m(()=>import("./index.html-CvI7Qpxb.js"),__vite__mapDeps([333,1])),meta:{y:"p",t:"星标",I:!1}}],["/timeline/",{loader:()=>m(()=>import("./index.html-CpN-lQii.js"),__vite__mapDeps([334,1])),meta:{y:"p",t:"时间轴",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const _a=typeof document<"u";function r0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const fn=Object.assign;function Ne(n,s){const a={};for(const t in s){const e=s[t];a[t]=ys(e)?e.map(n):n(e)}return a}const et=()=>{},ys=Array.isArray,dr=/#/g,i0=/&/g,u0=/\//g,k0=/=/g,d0=/\?/g,mr=/\+/g,m0=/%5B/g,h0=/%5D/g,hr=/%5E/g,f0=/%60/g,fr=/%7B/g,g0=/%7C/g,gr=/%7D/g,v0=/%20/g;function Uo(n){return encodeURI(""+n).replace(g0,"|").replace(m0,"[").replace(h0,"]")}function y0(n){return Uo(n).replace(fr,"{").replace(gr,"}").replace(hr,"^")}function ro(n){return Uo(n).replace(mr,"%2B").replace(v0,"+").replace(dr,"%23").replace(i0,"%26").replace(f0,"`").replace(fr,"{").replace(gr,"}").replace(hr,"^")}function b0(n){return ro(n).replace(k0,"%3D")}function _0(n){return Uo(n).replace(dr,"%23").replace(d0,"%3F")}function w0(n){return n==null?"":_0(n).replace(u0,"%2F")}function dt(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const E0=/\/$/,S0=n=>n.replace(E0,"");function $e(n,s,a="/"){let t,e={},o="",p="";const l=s.indexOf("#");let r=s.indexOf("?");return l<r&&l>=0&&(r=-1),r>-1&&(t=s.slice(0,r),o=s.slice(r+1,l>-1?l:s.length),e=n(o)),l>-1&&(t=t||s.slice(0,l),p=s.slice(l,s.length)),t=C0(t??s,a),{fullPath:t+(o&&"?")+o+p,path:t,query:e,hash:dt(p)}}function A0(n,s){const a=s.query?n(s.query):"";return s.path+(a&&"?")+a+(s.hash||"")}function yc(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function L0(n,s,a){const t=s.matched.length-1,e=a.matched.length-1;return t>-1&&t===e&&ja(s.matched[t],a.matched[e])&&vr(s.params,a.params)&&n(s.query)===n(a.query)&&s.hash===a.hash}function ja(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function vr(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const a in n)if(!x0(n[a],s[a]))return!1;return!0}function x0(n,s){return ys(n)?bc(n,s):ys(s)?bc(s,n):n===s}function bc(n,s){return ys(s)?n.length===s.length&&n.every((a,t)=>a===s[t]):n.length===1&&n[0]===s}function C0(n,s){if(n.startsWith("/"))return n;if(!n)return s;const a=s.split("/"),t=n.split("/"),e=t[t.length-1];(e===".."||e===".")&&t.push("");let o=a.length-1,p,l;for(p=0;p<t.length;p++)if(l=t[p],l!==".")if(l==="..")o>1&&o--;else break;return a.slice(0,o).join("/")+"/"+t.slice(p).join("/")}var mt;(function(n){n.pop="pop",n.push="push"})(mt||(mt={}));var ot;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ot||(ot={}));function I0(n){if(!n)if(_a){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),S0(n)}const T0=/^[^#]+#/;function O0(n,s){return n.replace(T0,"#")+s}function P0(n,s){const a=document.documentElement.getBoundingClientRect(),t=n.getBoundingClientRect();return{behavior:s.behavior,left:t.left-a.left-(s.left||0),top:t.top-a.top-(s.top||0)}}const fe=()=>({left:window.scrollX,top:window.scrollY});function B0(n){let s;if("el"in n){const a=n.el,t=typeof a=="string"&&a.startsWith("#"),e=typeof a=="string"?t?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!e)return;s=P0(e,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.scrollX,s.top!=null?s.top:window.scrollY)}function _c(n,s){return(history.state?history.state.position-s:-1)+n}const io=new Map;function D0(n,s){io.set(n,s)}function R0(n){const s=io.get(n);return io.delete(n),s}let M0=()=>location.protocol+"//"+location.host;function yr(n,s){const{pathname:a,search:t,hash:e}=s,o=n.indexOf("#");if(o>-1){let l=e.includes(n.slice(o))?n.slice(o).length:1,r=e.slice(l);return r[0]!=="/"&&(r="/"+r),yc(r,"")}return yc(a,n)+t+e}function j0(n,s,a,t){let e=[],o=[],p=null;const l=({state:d})=>{const h=yr(n,location),v=a.value,w=s.value;let E=0;if(d){if(a.value=h,s.value=d,p&&p===v){p=null;return}E=w?d.position-w.position:0}else t(h);e.forEach(b=>{b(a.value,v,{delta:E,type:mt.pop,direction:E?E>0?ot.forward:ot.back:ot.unknown})})};function r(){p=a.value}function i(d){e.push(d);const h=()=>{const v=e.indexOf(d);v>-1&&e.splice(v,1)};return o.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(fn({},d.state,{scroll:fe()}),"")}function k(){for(const d of o)d();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:r,listen:i,destroy:k}}function wc(n,s,a,t=!1,e=!1){return{back:n,current:s,forward:a,replaced:t,position:window.history.length,scroll:e?fe():null}}function V0(n){const{history:s,location:a}=window,t={value:yr(n,a)},e={value:s.state};e.value||o(t.value,{back:null,current:t.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function o(r,i,u){const k=n.indexOf("#"),d=k>-1?(a.host&&document.querySelector("base")?n:n.slice(k))+r:M0()+n+r;try{s[u?"replaceState":"pushState"](i,"",d),e.value=i}catch(h){console.error(h),a[u?"replace":"assign"](d)}}function p(r,i){const u=fn({},s.state,wc(e.value.back,r,e.value.forward,!0),i,{position:e.value.position});o(r,u,!0),t.value=r}function l(r,i){const u=fn({},e.value,s.state,{forward:r,scroll:fe()});o(u.current,u,!0);const k=fn({},wc(t.value,r,null),{position:u.position+1},i);o(r,k,!1),t.value=r}return{location:t,state:e,push:l,replace:p}}function N0(n){n=I0(n);const s=V0(n),a=j0(n,s.state,s.location,s.replace);function t(o,p=!0){p||a.pauseListeners(),history.go(o)}const e=fn({location:"",base:n,go:t,createHref:O0.bind(null,n)},s,a);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>s.state.value}),e}function $0(n){return typeof n=="string"||n&&typeof n=="object"}function br(n){return typeof n=="string"||typeof n=="symbol"}const Ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_r=Symbol("");var Ec;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ec||(Ec={}));function Va(n,s){return fn(new Error,{type:n,[_r]:!0},s)}function Ts(n,s){return n instanceof Error&&_r in n&&(s==null||!!(n.type&s))}const Sc="[^/]+?",H0={sensitive:!1,strict:!1,start:!0,end:!0},F0=/[.+*?^${}()[\]/\\]/g;function z0(n,s){const a=fn({},H0,s),t=[];let e=a.start?"^":"";const o=[];for(const i of n){const u=i.length?[]:[90];a.strict&&!i.length&&(e+="/");for(let k=0;k<i.length;k++){const d=i[k];let h=40+(a.sensitive?.25:0);if(d.type===0)k||(e+="/"),e+=d.value.replace(F0,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:w,optional:E,regexp:b}=d;o.push({name:v,repeatable:w,optional:E});const L=b||Sc;if(L!==Sc){h+=10;try{new RegExp(`(${L})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+x.message)}}let y=w?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;k||(y=E&&i.length<2?`(?:/${y})`:"/"+y),E&&(y+="?"),e+=y,h+=20,E&&(h+=-8),w&&(h+=-20),L===".*"&&(h+=-50)}u.push(h)}t.push(u)}if(a.strict&&a.end){const i=t.length-1;t[i][t[i].length-1]+=.7000000000000001}a.strict||(e+="/?"),a.end?e+="$":a.strict&&(e+="(?:/|$)");const p=new RegExp(e,a.sensitive?"":"i");function l(i){const u=i.match(p),k={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",v=o[d-1];k[v.name]=h&&v.repeatable?h.split("/"):h}return k}function r(i){let u="",k=!1;for(const d of n){(!k||!u.endsWith("/"))&&(u+="/"),k=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:w,optional:E}=h,b=v in i?i[v]:"";if(ys(b)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=ys(b)?b.join("/"):b;if(!L)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):k=!0);else throw new Error(`Missing required param "${v}"`);u+=L}}return u||"/"}return{re:p,score:t,keys:o,parse:l,stringify:r}}function G0(n,s){let a=0;for(;a<n.length&&a<s.length;){const t=s[a]-n[a];if(t)return t;a++}return n.length<s.length?n.length===1&&n[0]===80?-1:1:n.length>s.length?s.length===1&&s[0]===80?1:-1:0}function q0(n,s){let a=0;const t=n.score,e=s.score;for(;a<t.length&&a<e.length;){const o=G0(t[a],e[a]);if(o)return o;a++}if(Math.abs(e.length-t.length)===1){if(Ac(t))return 1;if(Ac(e))return-1}return e.length-t.length}function Ac(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const J0={type:0,value:""},W0=/[a-zA-Z0-9_]/;function K0(n){if(!n)return[[]];if(n==="/")return[[J0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function s(h){throw new Error(`ERR (${a})/"${i}": ${h}`)}let a=0,t=a;const e=[];let o;function p(){o&&e.push(o),o=[]}let l=0,r,i="",u="";function k(){i&&(a===0?o.push({type:0,value:i}):a===1||a===2||a===3?(o.length>1&&(r==="*"||r==="+")&&s(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:i,regexp:u,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):s("Invalid state to consume buffer"),i="")}function d(){i+=r}for(;l<n.length;){if(r=n[l++],r==="\\"&&a!==2){t=a,a=4;continue}switch(a){case 0:r==="/"?(i&&k(),p()):r===":"?(k(),a=1):d();break;case 4:d(),a=t;break;case 1:r==="("?a=2:W0.test(r)?d():(k(),a=0,r!=="*"&&r!=="?"&&r!=="+"&&l--);break;case 2:r===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+r:a=3:u+=r;break;case 3:k(),a=0,r!=="*"&&r!=="?"&&r!=="+"&&l--,u="";break;default:s("Unknown state");break}}return a===2&&s(`Unfinished custom RegExp for param "${i}"`),k(),p(),e}function U0(n,s,a){const t=z0(K0(n.path),a),e=fn(t,{record:n,parent:s,children:[],alias:[]});return s&&!e.record.aliasOf==!s.record.aliasOf&&s.children.push(e),e}function Q0(n,s){const a=[],t=new Map;s=Cc({strict:!1,end:!0,sensitive:!1},s);function e(u){return t.get(u)}function o(u,k,d){const h=!d,v=Y0(u);v.aliasOf=d&&d.record;const w=Cc(s,u),E=[v];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of y)E.push(fn({},v,{components:d?d.record.components:v.components,path:x,aliasOf:d?d.record:v}))}let b,L;for(const y of E){const{path:x}=y;if(k&&x[0]!=="/"){const j=k.record.path,A=j[j.length-1]==="/"?"":"/";y.path=k.record.path+(x&&A+x)}if(b=U0(y,k,w),d?d.alias.push(b):(L=L||b,L!==b&&L.alias.push(b),h&&u.name&&!xc(b)&&p(u.name)),v.children){const j=v.children;for(let A=0;A<j.length;A++)o(j[A],b,d&&d.children[A])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&r(b)}return L?()=>{p(L)}:et}function p(u){if(br(u)){const k=t.get(u);k&&(t.delete(u),a.splice(a.indexOf(k),1),k.children.forEach(p),k.alias.forEach(p))}else{const k=a.indexOf(u);k>-1&&(a.splice(k,1),u.record.name&&t.delete(u.record.name),u.children.forEach(p),u.alias.forEach(p))}}function l(){return a}function r(u){let k=0;for(;k<a.length&&q0(u,a[k])>=0&&(u.record.path!==a[k].record.path||!wr(u,a[k]));)k++;a.splice(k,0,u),u.record.name&&!xc(u)&&t.set(u.record.name,u)}function i(u,k){let d,h={},v,w;if("name"in u&&u.name){if(d=t.get(u.name),!d)throw Va(1,{location:u});w=d.record.name,h=fn(Lc(k.params,d.keys.filter(L=>!L.optional).concat(d.parent?d.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),u.params&&Lc(u.params,d.keys.map(L=>L.name))),v=d.stringify(h)}else if(u.path!=null)v=u.path,d=a.find(L=>L.re.test(v)),d&&(h=d.parse(v),w=d.record.name);else{if(d=k.name?t.get(k.name):a.find(L=>L.re.test(k.path)),!d)throw Va(1,{location:u,currentLocation:k});w=d.record.name,h=fn({},k.params,u.params),v=d.stringify(h)}const E=[];let b=d;for(;b;)E.unshift(b.record),b=b.parent;return{name:w,path:v,params:h,matched:E,meta:X0(E)}}return n.forEach(u=>o(u)),{addRoute:o,resolve:i,removeRoute:p,getRoutes:l,getRecordMatcher:e}}function Lc(n,s){const a={};for(const t of s)t in n&&(a[t]=n[t]);return a}function Y0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Z0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Z0(n){const s={},a=n.props||!1;if("component"in n)s.default=a;else for(const t in n.components)s[t]=typeof a=="object"?a[t]:a;return s}function xc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function X0(n){return n.reduce((s,a)=>fn(s,a.meta),{})}function Cc(n,s){const a={};for(const t in n)a[t]=t in s?s[t]:n[t];return a}function wr(n,s){return s.children.some(a=>a===n||wr(n,a))}function nm(n){const s={};if(n===""||n==="?")return s;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let e=0;e<t.length;++e){const o=t[e].replace(mr," "),p=o.indexOf("="),l=dt(p<0?o:o.slice(0,p)),r=p<0?null:dt(o.slice(p+1));if(l in s){let i=s[l];ys(i)||(i=s[l]=[i]),i.push(r)}else s[l]=r}return s}function Ic(n){let s="";for(let a in n){const t=n[a];if(a=b0(a),t==null){t!==void 0&&(s+=(s.length?"&":"")+a);continue}(ys(t)?t.map(o=>o&&ro(o)):[t&&ro(t)]).forEach(o=>{o!==void 0&&(s+=(s.length?"&":"")+a,o!=null&&(s+="="+o))})}return s}function sm(n){const s={};for(const a in n){const t=n[a];t!==void 0&&(s[a]=ys(t)?t.map(e=>e==null?null:""+e):t==null?t:""+t)}return s}const am=Symbol(""),Tc=Symbol(""),ge=Symbol(""),Qo=Symbol(""),uo=Symbol("");function Ka(){let n=[];function s(t){return n.push(t),()=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)}}function a(){n=[]}return{add:s,list:()=>n.slice(),reset:a}}function Us(n,s,a,t,e,o=p=>p()){const p=t&&(t.enterCallbacks[e]=t.enterCallbacks[e]||[]);return()=>new Promise((l,r)=>{const i=d=>{d===!1?r(Va(4,{from:a,to:s})):d instanceof Error?r(d):$0(d)?r(Va(2,{from:s,to:d})):(p&&t.enterCallbacks[e]===p&&typeof d=="function"&&p.push(d),l())},u=o(()=>n.call(t&&t.instances[e],s,a,i));let k=Promise.resolve(u);n.length<3&&(k=k.then(i)),k.catch(d=>r(d))})}function He(n,s,a,t,e=o=>o()){const o=[];for(const p of n)for(const l in p.components){let r=p.components[l];if(!(s!=="beforeRouteEnter"&&!p.instances[l]))if(tm(r)){const u=(r.__vccOpts||r)[s];u&&o.push(Us(u,a,t,p,l,e))}else{let i=r();o.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${p.path}"`));const k=r0(u)?u.default:u;p.components[l]=k;const h=(k.__vccOpts||k)[s];return h&&Us(h,a,t,p,l,e)()}))}}return o}function tm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Oc(n){const s=yn(ge),a=yn(Qo),t=_(()=>s.resolve(da(n.to))),e=_(()=>{const{matched:r}=t.value,{length:i}=r,u=r[i-1],k=a.matched;if(!u||!k.length)return-1;const d=k.findIndex(ja.bind(null,u));if(d>-1)return d;const h=Pc(r[i-2]);return i>1&&Pc(u)===h&&k[k.length-1].path!==h?k.findIndex(ja.bind(null,r[i-2])):d}),o=_(()=>e.value>-1&&cm(a.params,t.value.params)),p=_(()=>e.value>-1&&e.value===a.matched.length-1&&vr(a.params,t.value.params));function l(r={}){return pm(r)?s[da(n.replace)?"replace":"push"](da(n.to)).catch(et):Promise.resolve()}return{route:t,href:_(()=>t.value.href),isActive:o,isExactActive:p,navigate:l}}const em=M({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oc,setup(n,{slots:s}){const a=wt(Oc(n)),{options:t}=yn(ge),e=_(()=>({[Bc(n.activeClass,t.linkActiveClass,"router-link-active")]:a.isActive,[Bc(n.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const o=s.default&&s.default(a);return n.custom?o:c("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:e.value},o)}}}),om=em;function pm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function cm(n,s){for(const a in s){const t=s[a],e=n[a];if(typeof t=="string"){if(t!==e)return!1}else if(!ys(e)||e.length!==t.length||t.some((o,p)=>o!==e[p]))return!1}return!0}function Pc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Bc=(n,s,a)=>n??s??a,lm=M({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:a}){const t=yn(uo),e=_(()=>n.route||t.value),o=yn(Tc,0),p=_(()=>{let i=da(o);const{matched:u}=e.value;let k;for(;(k=u[i])&&!k.components;)i++;return i}),l=_(()=>e.value.matched[p.value]);us(Tc,_(()=>p.value+1)),us(am,l),us(uo,e);const r=U();return en(()=>[r.value,l.value,n.name],([i,u,k],[d,h,v])=>{u&&(u.instances[k]=i,h&&h!==u&&i&&i===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),i&&u&&(!h||!ja(u,h)||!d)&&(u.enterCallbacks[k]||[]).forEach(w=>w(i))},{flush:"post"}),()=>{const i=e.value,u=n.name,k=l.value,d=k&&k.components[u];if(!d)return Dc(a.default,{Component:d,route:i});const h=k.props[u],v=h?h===!0?i.params:typeof h=="function"?h(i):h:null,E=c(d,fn({},v,s,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(k.instances[u]=null)},ref:r}));return Dc(a.default,{Component:E,route:i})||E}}});function Dc(n,s){if(!n)return null;const a=n(s);return a.length===1?a[0]:a}const rm=lm;function im(n){const s=Q0(n.routes,n),a=n.parseQuery||nm,t=n.stringifyQuery||Ic,e=n.history,o=Ka(),p=Ka(),l=Ka(),r=Tn(Ps);let i=Ps;_a&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ne.bind(null,C=>""+C),k=Ne.bind(null,w0),d=Ne.bind(null,dt);function h(C,F){let $,K;return br(C)?($=s.getRecordMatcher(C),K=F):K=C,s.addRoute(K,$)}function v(C){const F=s.getRecordMatcher(C);F&&s.removeRoute(F)}function w(){return s.getRoutes().map(C=>C.record)}function E(C){return!!s.getRecordMatcher(C)}function b(C,F){if(F=fn({},F||r.value),typeof C=="string"){const g=$e(a,C,F.path),S=s.resolve({path:g.path},F),T=e.createHref(g.fullPath);return fn(g,S,{params:d(S.params),hash:dt(g.hash),redirectedFrom:void 0,href:T})}let $;if(C.path!=null)$=fn({},C,{path:$e(a,C.path,F.path).path});else{const g=fn({},C.params);for(const S in g)g[S]==null&&delete g[S];$=fn({},C,{params:k(g)}),F.params=k(F.params)}const K=s.resolve($,F),rn=C.hash||"";K.params=u(d(K.params));const _n=A0(t,fn({},C,{hash:y0(rn),path:K.path})),f=e.createHref(_n);return fn({fullPath:_n,hash:rn,query:t===Ic?sm(C.query):C.query||{}},K,{redirectedFrom:void 0,href:f})}function L(C){return typeof C=="string"?$e(a,C,r.value.path):fn({},C)}function y(C,F){if(i!==C)return Va(8,{from:F,to:C})}function x(C){return J(C)}function j(C){return x(fn(L(C),{replace:!0}))}function A(C){const F=C.matched[C.matched.length-1];if(F&&F.redirect){const{redirect:$}=F;let K=typeof $=="function"?$(C):$;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=L(K):{path:K},K.params={}),fn({query:C.query,hash:C.hash,params:K.path!=null?{}:C.params},K)}}function J(C,F){const $=i=b(C),K=r.value,rn=C.state,_n=C.force,f=C.replace===!0,g=A($);if(g)return J(fn(L(g),{state:typeof g=="object"?fn({},rn,g.state):rn,force:_n,replace:f}),F||$);const S=$;S.redirectedFrom=F;let T;return!_n&&L0(t,K,$)&&(T=Va(16,{to:S,from:K}),es(K,K,!0,!1)),(T?Promise.resolve(T):P(S,K)).catch(I=>Ts(I)?Ts(I,2)?I:_s(I):W(I,S,K)).then(I=>{if(I){if(Ts(I,2))return J(fn({replace:f},L(I.to),{state:typeof I.to=="object"?fn({},rn,I.to.state):rn,force:_n}),F||S)}else I=B(S,K,!0,f,rn);return G(S,K,I),I})}function V(C,F){const $=y(C,F);return $?Promise.reject($):Promise.resolve()}function Q(C){const F=Is.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(C):C()}function P(C,F){let $;const[K,rn,_n]=um(C,F);$=He(K.reverse(),"beforeRouteLeave",C,F);for(const g of K)g.leaveGuards.forEach(S=>{$.push(Us(S,C,F))});const f=V.bind(null,C,F);return $.push(f),Dn($).then(()=>{$=[];for(const g of o.list())$.push(Us(g,C,F));return $.push(f),Dn($)}).then(()=>{$=He(rn,"beforeRouteUpdate",C,F);for(const g of rn)g.updateGuards.forEach(S=>{$.push(Us(S,C,F))});return $.push(f),Dn($)}).then(()=>{$=[];for(const g of _n)if(g.beforeEnter)if(ys(g.beforeEnter))for(const S of g.beforeEnter)$.push(Us(S,C,F));else $.push(Us(g.beforeEnter,C,F));return $.push(f),Dn($)}).then(()=>(C.matched.forEach(g=>g.enterCallbacks={}),$=He(_n,"beforeRouteEnter",C,F,Q),$.push(f),Dn($))).then(()=>{$=[];for(const g of p.list())$.push(Us(g,C,F));return $.push(f),Dn($)}).catch(g=>Ts(g,8)?g:Promise.reject(g))}function G(C,F,$){l.list().forEach(K=>Q(()=>K(C,F,$)))}function B(C,F,$,K,rn){const _n=y(C,F);if(_n)return _n;const f=F===Ps,g=_a?history.state:{};$&&(K||f?e.replace(C.fullPath,fn({scroll:f&&g&&g.scroll},rn)):e.push(C.fullPath,rn)),r.value=C,es(C,F,$,f),_s()}let X;function In(){X||(X=e.listen((C,F,$)=>{if(!ws.listening)return;const K=b(C),rn=A(K);if(rn){J(fn(rn,{replace:!0}),K).catch(et);return}i=K;const _n=r.value;_a&&D0(_c(_n.fullPath,$.delta),fe()),P(K,_n).catch(f=>Ts(f,12)?f:Ts(f,2)?(J(f.to,K).then(g=>{Ts(g,20)&&!$.delta&&$.type===mt.pop&&e.go(-1,!1)}).catch(et),Promise.reject()):($.delta&&e.go(-$.delta,!1),W(f,K,_n))).then(f=>{f=f||B(K,_n,!1),f&&($.delta&&!Ts(f,8)?e.go(-$.delta,!1):$.type===mt.pop&&Ts(f,20)&&e.go(-1,!1)),G(K,_n,f)}).catch(et)}))}let An=Ka(),q=Ka(),sn;function W(C,F,$){_s(C);const K=q.list();return K.length?K.forEach(rn=>rn(C,F,$)):console.error(C),Promise.reject(C)}function Bn(){return sn&&r.value!==Ps?Promise.resolve():new Promise((C,F)=>{An.add([C,F])})}function _s(C){return sn||(sn=!C,In(),An.list().forEach(([F,$])=>C?$(C):F()),An.reset()),C}function es(C,F,$,K){const{scrollBehavior:rn}=n;if(!_a||!rn)return Promise.resolve();const _n=!$&&R0(_c(C.fullPath,0))||(K||!$)&&history.state&&history.state.scroll||null;return sa().then(()=>rn(C,F,_n)).then(f=>f&&B0(f)).catch(f=>W(f,C,F))}const Nn=C=>e.go(C);let Yn;const Is=new Set,ws={currentRoute:r,listening:!0,addRoute:h,removeRoute:v,hasRoute:E,getRoutes:w,resolve:b,options:n,push:x,replace:j,go:Nn,back:()=>Nn(-1),forward:()=>Nn(1),beforeEach:o.add,beforeResolve:p.add,afterEach:l.add,onError:q.add,isReady:Bn,install(C){const F=this;C.component("RouterLink",om),C.component("RouterView",rm),C.config.globalProperties.$router=F,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>da(r)}),_a&&!Yn&&r.value===Ps&&(Yn=!0,x(e.location).catch(rn=>{}));const $={};for(const rn in Ps)Object.defineProperty($,rn,{get:()=>r.value[rn],enumerable:!0});C.provide(ge,F),C.provide(Qo,bl($)),C.provide(uo,r);const K=C.unmount;Is.add(C),C.unmount=function(){Is.delete(C),Is.size<1&&(i=Ps,X&&X(),X=null,r.value=Ps,Yn=!1,sn=!1),K()}}};function Dn(C){return C.reduce((F,$)=>F.then(()=>Q($)),Promise.resolve())}return ws}function um(n,s){const a=[],t=[],e=[],o=Math.max(s.matched.length,n.matched.length);for(let p=0;p<o;p++){const l=s.matched[p];l&&(n.matched.find(i=>ja(i,l))?t.push(l):a.push(l));const r=n.matched[p];r&&(s.matched.find(i=>ja(i,r))||e.push(r))}return[a,t,e]}function js(){return yn(ge)}function Vs(){return yn(Qo)}var Yo=Symbol(""),Cs=()=>{const n=yn(Yo);if(!n)throw new Error("useClientData() is called without provider.");return n},km=()=>Cs().pageComponent,hn=()=>Cs().pageData,bn=()=>Cs().pageFrontmatter,dm=()=>Cs().pageHead,Zo=()=>Cs().pageLang,mm=()=>Cs().pageLayout,ms=()=>Cs().routeLocale,hm=()=>Cs().routes,Er=()=>Cs().siteData,Ga=()=>Cs().siteLocaleData,fm=Symbol(""),Sr=Tn(c0),ht=Tn(l0),Ar=n=>{const s=t0(n);if(ht.value[s])return s;const a=encodeURI(s);return ht.value[a]?a:Sr.value[s]||s},qa=n=>{const s=Ar(n),a=ht.value[s]??{...ht.value["/404.html"],notFound:!0};return{path:s,notFound:!1,...a}},ve=M({name:"ClientOnly",setup(n,s){const a=U(!1);return mn(()=>{a.value=!0}),()=>{var t,e;return a.value?(e=(t=s.slots).default)==null?void 0:e.call(t):null}}}),Lr=M({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const s=km(),a=_(()=>{if(!n.path)return s.value;const t=qa(n.path);return Vl(()=>t.loader().then(({comp:e})=>e))});return()=>c(a.value)}}),En=n=>aa(n)?n:`/${kr(n)}`,gm=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const s=n.currentTarget.getAttribute("target");if(s!=null&&s.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},On=({active:n=!1,activeClass:s="route-link-active",to:a,...t},{slots:e})=>{var l;const o=js(),p=En(Ar(a));return c("a",{...t,class:["route-link",{[s]:n}],href:p,onClick:(r={})=>{gm(r)?o.push(a).catch():Promise.resolve()}},(l=e.default)==null?void 0:l.call(e))};On.displayName="RouteLink";On.props={active:Boolean,activeClass:String,to:String};var vm="Layout",ym="en-US",ca=wt({resolveLayouts:n=>n.reduce((s,a)=>({...s,...a.layouts}),{}),resolvePageHead:(n,s,a)=>{const t=Pn(s.description)?s.description:a.description,e=[...Array.isArray(s.head)?s.head:[],...a.head,["title",{},n],["meta",{name:"description",content:t}]];return n0(e)},resolvePageHeadTitle:(n,s)=>[n.title,s.title].filter(a=>!!a).join(" | "),resolvePageLang:(n,s)=>n.lang||s.lang||ym,resolvePageLayout:(n,s)=>{const a=Pn(n.frontmatter.layout)?n.frontmatter.layout:vm;if(!s[a])throw new Error(`[vuepress] Cannot resolve layout: ${a}`);return s[a]},resolveRouteLocale:(n,s)=>e0(n,s),resolveSiteLocaleData:(n,s)=>{var a;return{...n,...n.locales[s],head:[...((a=n.locales[s])==null?void 0:a.head)??[],...n.head??[]]}}});const bm={};var Qn=(n={})=>n;const Ns=n=>{const s=ms();return _(()=>n[s.value]??{})};var qn=Uint8Array,Ea=Uint16Array,_m=Int32Array,xr=new qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cr=new qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wm=new qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ir=function(n,s){for(var a=new Ea(31),t=0;t<31;++t)a[t]=s+=1<<n[t-1];for(var e=new _m(a[30]),t=1;t<30;++t)for(var o=a[t];o<a[t+1];++o)e[o]=o-a[t]<<5|t;return{b:a,r:e}},Tr=Ir(xr,2),Or=Tr.b,Em=Tr.r;Or[28]=258,Em[258]=28;var Sm=Ir(Cr,0),Am=Sm.b,ko=new Ea(32768);for(var wn=0;wn<32768;++wn){var zs=(wn&43690)>>1|(wn&21845)<<1;zs=(zs&52428)>>2|(zs&13107)<<2,zs=(zs&61680)>>4|(zs&3855)<<4,ko[wn]=((zs&65280)>>8|(zs&255)<<8)>>1}var pt=function(n,s,a){for(var t=n.length,e=0,o=new Ea(s);e<t;++e)n[e]&&++o[n[e]-1];var p=new Ea(s);for(e=1;e<s;++e)p[e]=p[e-1]+o[e-1]<<1;var l;if(a){l=new Ea(1<<s);var r=15-s;for(e=0;e<t;++e)if(n[e])for(var i=e<<4|n[e],u=s-n[e],k=p[n[e]-1]++<<u,d=k|(1<<u)-1;k<=d;++k)l[ko[k]>>r]=i}else for(l=new Ea(t),e=0;e<t;++e)n[e]&&(l[e]=ko[p[n[e]-1]++]>>15-n[e]);return l},Ct=new qn(288);for(var wn=0;wn<144;++wn)Ct[wn]=8;for(var wn=144;wn<256;++wn)Ct[wn]=9;for(var wn=256;wn<280;++wn)Ct[wn]=7;for(var wn=280;wn<288;++wn)Ct[wn]=8;var Pr=new qn(32);for(var wn=0;wn<32;++wn)Pr[wn]=5;var Lm=pt(Ct,9,1),xm=pt(Pr,5,1),Fe=function(n){for(var s=n[0],a=1;a<n.length;++a)n[a]>s&&(s=n[a]);return s},fs=function(n,s,a){var t=s/8|0;return(n[t]|n[t+1]<<8)>>(s&7)&a},ze=function(n,s){var a=s/8|0;return(n[a]|n[a+1]<<8|n[a+2]<<16)>>(s&7)},Cm=function(n){return(n+7)/8|0},Xo=function(n,s,a){return(s==null||s<0)&&(s=0),(a==null||a>n.length)&&(a=n.length),new qn(n.subarray(s,a))},Im=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],cs=function(n,s,a){var t=new Error(s||Im[n]);if(t.code=n,Error.captureStackTrace&&Error.captureStackTrace(t,cs),!a)throw t;return t},Tm=function(n,s,a,t){var e=n.length,o=t?t.length:0;if(!e||s.f&&!s.l)return a||new qn(0);var p=!a,l=p||s.i!=2,r=s.i;p&&(a=new qn(e*3));var i=function(rn){var _n=a.length;if(rn>_n){var f=new qn(Math.max(_n*2,rn));f.set(a),a=f}},u=s.f||0,k=s.p||0,d=s.b||0,h=s.l,v=s.d,w=s.m,E=s.n,b=e*8;do{if(!h){u=fs(n,k,1);var L=fs(n,k+1,3);if(k+=3,L)if(L==1)h=Lm,v=xm,w=9,E=5;else if(L==2){var A=fs(n,k,31)+257,J=fs(n,k+10,15)+4,V=A+fs(n,k+5,31)+1;k+=14;for(var Q=new qn(V),P=new qn(19),G=0;G<J;++G)P[wm[G]]=fs(n,k+G*3,7);k+=J*3;for(var B=Fe(P),X=(1<<B)-1,In=pt(P,B,1),G=0;G<V;){var An=In[fs(n,k,X)];k+=An&15;var y=An>>4;if(y<16)Q[G++]=y;else{var q=0,sn=0;for(y==16?(sn=3+fs(n,k,3),k+=2,q=Q[G-1]):y==17?(sn=3+fs(n,k,7),k+=3):y==18&&(sn=11+fs(n,k,127),k+=7);sn--;)Q[G++]=q}}var W=Q.subarray(0,A),Bn=Q.subarray(A);w=Fe(W),E=Fe(Bn),h=pt(W,w,1),v=pt(Bn,E,1)}else cs(1);else{var y=Cm(k)+4,x=n[y-4]|n[y-3]<<8,j=y+x;if(j>e){r&&cs(0);break}l&&i(d+x),a.set(n.subarray(y,j),d),s.b=d+=x,s.p=k=j*8,s.f=u;continue}if(k>b){r&&cs(0);break}}l&&i(d+131072);for(var _s=(1<<w)-1,es=(1<<E)-1,Nn=k;;Nn=k){var q=h[ze(n,k)&_s],Yn=q>>4;if(k+=q&15,k>b){r&&cs(0);break}if(q||cs(2),Yn<256)a[d++]=Yn;else if(Yn==256){Nn=k,h=null;break}else{var Is=Yn-254;if(Yn>264){var G=Yn-257,ws=xr[G];Is=fs(n,k,(1<<ws)-1)+Or[G],k+=ws}var Dn=v[ze(n,k)&es],C=Dn>>4;Dn||cs(3),k+=Dn&15;var Bn=Am[C];if(C>3){var ws=Cr[C];Bn+=ze(n,k)&(1<<ws)-1,k+=ws}if(k>b){r&&cs(0);break}l&&i(d+131072);var F=d+Is;if(d<Bn){var $=o-Bn,K=Math.min(Bn,F);for($+d<0&&cs(3);d<K;++d)a[d]=t[$+d]}for(;d<F;++d)a[d]=a[d-Bn]}}s.l=h,s.p=Nn,s.b=d,s.f=u,h&&(u=1,s.m=w,s.d=v,s.n=E)}while(!u);return d!=a.length&&p?Xo(a,0,d):a.subarray(0,d)},Om=new qn(0),Pm=function(n,s){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&cs(6,"invalid zlib data"),(n[1]>>5&1)==+!s&&cs(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Bm(n,s){return Tm(n.subarray(Pm(n,s&&s.dictionary),-4),{i:2},s&&s.out,s&&s.dictionary)}var Rc=typeof TextEncoder<"u"&&new TextEncoder,mo=typeof TextDecoder<"u"&&new TextDecoder,Dm=0;try{mo.decode(Om,{stream:!0}),Dm=1}catch{}var Rm=function(n){for(var s="",a=0;;){var t=n[a++],e=(t>127)+(t>223)+(t>239);if(a+e>n.length)return{s,r:Xo(n,a-1)};e?e==3?(t=((t&15)<<18|(n[a++]&63)<<12|(n[a++]&63)<<6|n[a++]&63)-65536,s+=String.fromCharCode(55296|t>>10,56320|t&1023)):e&1?s+=String.fromCharCode((t&31)<<6|n[a++]&63):s+=String.fromCharCode((t&15)<<12|(n[a++]&63)<<6|n[a++]&63):s+=String.fromCharCode(t)}};function Mm(n,s){if(s){for(var a=new qn(n.length),t=0;t<n.length;++t)a[t]=n.charCodeAt(t);return a}if(Rc)return Rc.encode(n);for(var e=n.length,o=new qn(n.length+(n.length>>1)),p=0,l=function(u){o[p++]=u},t=0;t<e;++t){if(p+5>o.length){var r=new qn(p+8+(e-t<<1));r.set(o),o=r}var i=n.charCodeAt(t);i<128||s?l(i):i<2048?(l(192|i>>6),l(128|i&63)):i>55295&&i<57344?(i=65536+(i&1047552)|n.charCodeAt(++t)&1023,l(240|i>>18),l(128|i>>12&63),l(128|i>>6&63),l(128|i&63)):(l(224|i>>12),l(128|i>>6&63),l(128|i&63))}return Xo(o,0,p)}function jm(n,s){if(s){for(var a="",t=0;t<n.length;t+=16384)a+=String.fromCharCode.apply(null,n.subarray(t,t+16384));return a}else{if(mo)return mo.decode(n);var e=Rm(n),o=e.s,a=e.r;return a.length&&cs(8),o}}const Mc=n=>{const s=atob(n);return jm(Bm(Mm(s,!0)))},ss=(n,s)=>{var t;const a=(t=(s==null?void 0:s._instance)||za())==null?void 0:t.appContext.components;return a?n in a||ks(n)in a||_t(ks(n))in a:!1},Br=n=>new Promise(s=>setTimeout(s,n)),Dr=n=>typeof n<"u",Ge=n=>typeof n=="number",ho=Array.isArray,Na=(n,s)=>Pn(n)&&n.startsWith(s),Vm=(n,s)=>Pn(n)&&n.endsWith(s),va=Object.entries,Nm=Object.fromEntries,ds=Object.keys,np=n=>{if(n){if(typeof n=="number")return new Date(n);const s=Date.parse(n.toString());if(!Number.isNaN(s))return new Date(s)}return null},ye=n=>Na(n,"/");function Rr(n,s){let a,t,e;const o=U(!0),p=()=>{o.value=!0,e()};en(n,p,{flush:"sync"});const l=typeof s=="function"?s:s.get,r=typeof s=="function"?void 0:s.set,i=$o((u,k)=>(t=u,e=k,{get(){return o.value&&(a=l(),o.value=!1),t(),a},set(d){r==null||r(d)}}));return Object.isExtensible(i)&&(i.trigger=p),i}function xs(n){return ll()?(Bu(n),!0):!1}function Jn(n){return typeof n=="function"?n():da(n)}const ma=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const $m=Object.prototype.toString,Hm=n=>$m.call(n)==="[object Object]",Ds=()=>{},fo=Fm();function Fm(){var n,s;return ma&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((s=window==null?void 0:window.navigator)==null?void 0:s.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function sp(n,s){function a(...t){return new Promise((e,o)=>{Promise.resolve(n(()=>s.apply(this,t),{fn:s,thisArg:this,args:t})).then(e).catch(o)})}return a}const Mr=n=>n();function zm(n,s={}){let a,t,e=Ds;const o=l=>{clearTimeout(l),e(),e=Ds};return l=>{const r=Jn(n),i=Jn(s.maxWait);return a&&o(a),r<=0||i!==void 0&&i<=0?(t&&(o(t),t=null),Promise.resolve(l())):new Promise((u,k)=>{e=s.rejectOnCancel?k:u,i&&!t&&(t=setTimeout(()=>{a&&o(a),t=null,u(l())},i)),a=setTimeout(()=>{t&&o(t),t=null,u(l())},r)})}}function Gm(...n){let s=0,a,t=!0,e=Ds,o,p,l,r,i;!Vn(n[0])&&typeof n[0]=="object"?{delay:p,trailing:l=!0,leading:r=!0,rejectOnCancel:i=!1}=n[0]:[p,l=!0,r=!0,i=!1]=n;const u=()=>{a&&(clearTimeout(a),a=void 0,e(),e=Ds)};return d=>{const h=Jn(p),v=Date.now()-s,w=()=>o=d();return u(),h<=0?(s=Date.now(),w()):(v>h&&(r||!t)?(s=Date.now(),w()):l&&(o=new Promise((E,b)=>{e=i?b:E,a=setTimeout(()=>{s=Date.now(),t=!0,E(w()),u()},Math.max(0,h-v))})),!r&&!a&&(a=setTimeout(()=>t=!0,h)),t=!1,o)}}function qm(n=Mr){const s=U(!0);function a(){s.value=!1}function t(){s.value=!0}const e=(...o)=>{s.value&&n(...o)};return{isActive:Rs(s),pause:a,resume:t,eventFilter:e}}function Jm(n){let s;function a(){return s||(s=n()),s}return a.reset=async()=>{const t=s;s=void 0,t&&await t},a}function Wm(n){return n||za()}function Km(...n){if(n.length!==1)return Fa(...n);const s=n[0];return typeof s=="function"?Rs($o(()=>({get:s,set:Ds}))):U(s)}function jr(n,s=200,a={}){return sp(zm(s,a),n)}function Um(n,s=200,a=!1,t=!0,e=!1){return sp(Gm(s,a,t,e),n)}function Qm(n,s,a={}){const{eventFilter:t=Mr,...e}=a;return en(n,sp(t,s),e)}function Ym(n,s,a={}){const{eventFilter:t,...e}=a,{eventFilter:o,pause:p,resume:l,isActive:r}=qm(t);return{stop:Qm(n,s,{...e,eventFilter:o}),pause:p,resume:l,isActive:r}}function be(n,s=!0,a){Wm()?mn(n,a):s?n():sa(n)}function Zm(n,s=1e3,a={}){const{immediate:t=!0,immediateCallback:e=!1}=a;let o=null;const p=U(!1);function l(){o&&(clearInterval(o),o=null)}function r(){p.value=!1,l()}function i(){const u=Jn(s);u<=0||(p.value=!0,e&&n(),l(),o=setInterval(n,u))}if(t&&ma&&i(),Vn(s)||typeof s=="function"){const u=en(s,()=>{p.value&&ma&&i()});xs(u)}return xs(r),{isActive:p,pause:r,resume:i}}function Xm(n,s,a={}){const{immediate:t=!0}=a,e=U(!1);let o=null;function p(){o&&(clearTimeout(o),o=null)}function l(){e.value=!1,p()}function r(...i){p(),e.value=!0,o=setTimeout(()=>{e.value=!1,o=null,n(...i)},Jn(s))}return t&&(e.value=!0,ma&&r()),xs(l),{isPending:Rs(e),start:r,stop:l}}function ft(n=!1,s={}){const{truthyValue:a=!0,falsyValue:t=!1}=s,e=Vn(n),o=U(n);function p(l){if(arguments.length)return o.value=l,o.value;{const r=Jn(a);return o.value=o.value===r?Jn(t):r,o.value}}return e?p:[o,p]}function as(n){var s;const a=Jn(n);return(s=a==null?void 0:a.$el)!=null?s:a}const bs=ma?window:void 0,Vr=ma?window.document:void 0,Nr=ma?window.navigator:void 0;function Cn(...n){let s,a,t,e;if(typeof n[0]=="string"||Array.isArray(n[0])?([a,t,e]=n,s=bs):[s,a,t,e]=n,!s)return Ds;Array.isArray(a)||(a=[a]),Array.isArray(t)||(t=[t]);const o=[],p=()=>{o.forEach(u=>u()),o.length=0},l=(u,k,d,h)=>(u.addEventListener(k,d,h),()=>u.removeEventListener(k,d,h)),r=en(()=>[as(s),Jn(e)],([u,k])=>{if(p(),!u)return;const d=Hm(k)?{...k}:k;o.push(...a.flatMap(h=>t.map(v=>l(u,h,v,d))))},{immediate:!0,flush:"post"}),i=()=>{r(),p()};return xs(i),i}let jc=!1;function n1(n,s,a={}){const{window:t=bs,ignore:e=[],capture:o=!0,detectIframe:p=!1}=a;if(!t)return Ds;fo&&!jc&&(jc=!0,Array.from(t.document.body.children).forEach(d=>d.addEventListener("click",Ds)),t.document.documentElement.addEventListener("click",Ds));let l=!0;const r=d=>e.some(h=>{if(typeof h=="string")return Array.from(t.document.querySelectorAll(h)).some(v=>v===d.target||d.composedPath().includes(v));{const v=as(h);return v&&(d.target===v||d.composedPath().includes(v))}}),u=[Cn(t,"click",d=>{const h=as(n);if(!(!h||h===d.target||d.composedPath().includes(h))){if(d.detail===0&&(l=!r(d)),!l){l=!0;return}s(d)}},{passive:!0,capture:o}),Cn(t,"pointerdown",d=>{const h=as(n);l=!r(d)&&!!(h&&!d.composedPath().includes(h))},{passive:!0}),p&&Cn(t,"blur",d=>{setTimeout(()=>{var h;const v=as(n);((h=t.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(v!=null&&v.contains(t.document.activeElement))&&s(d)},0)})].filter(Boolean);return()=>u.forEach(d=>d())}function s1(){const n=U(!1),s=za();return s&&mn(()=>{n.value=!0},s),n}function It(n){const s=s1();return _(()=>(s.value,!!n()))}function a1(n,s={}){const{immediate:a=!0,fpsLimit:t=void 0,window:e=bs}=s,o=U(!1),p=t?1e3/t:null;let l=0,r=null;function i(d){if(!o.value||!e)return;l||(l=d);const h=d-l;if(p&&h<p){r=e.requestAnimationFrame(i);return}l=d,n({delta:h,timestamp:d}),r=e.requestAnimationFrame(i)}function u(){!o.value&&e&&(o.value=!0,l=0,r=e.requestAnimationFrame(i))}function k(){o.value=!1,r!=null&&e&&(e.cancelAnimationFrame(r),r=null)}return a&&u(),xs(k),{isActive:Rs(o),pause:k,resume:u}}function $r(n,s={}){const{window:a=bs}=s,t=It(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let e;const o=U(!1),p=i=>{o.value=i.matches},l=()=>{e&&("removeEventListener"in e?e.removeEventListener("change",p):e.removeListener(p))},r=Bl(()=>{t.value&&(l(),e=a.matchMedia(Jn(n)),"addEventListener"in e?e.addEventListener("change",p):e.addListener(p),o.value=e.matches)});return xs(()=>{r(),l(),e=void 0}),o}function Vc(n,s={}){const{controls:a=!1,navigator:t=Nr}=s,e=It(()=>t&&"permissions"in t);let o;const p=typeof n=="string"?{name:n}:n,l=U(),r=()=>{o&&(l.value=o.state)},i=Jm(async()=>{if(e.value){if(!o)try{o=await t.permissions.query(p),Cn(o,"change",r),r()}catch{l.value="prompt"}return o}});return i(),a?{state:l,isSupported:e,query:i}:l}function t1(n={}){const{navigator:s=Nr,read:a=!1,source:t,copiedDuring:e=1500,legacy:o=!1}=n,p=It(()=>s&&"clipboard"in s),l=Vc("clipboard-read"),r=Vc("clipboard-write"),i=_(()=>p.value||o),u=U(""),k=U(!1),d=Xm(()=>k.value=!1,e);function h(){p.value&&b(l.value)?s.clipboard.readText().then(L=>{u.value=L}):u.value=E()}i.value&&a&&Cn(["copy","cut"],h);async function v(L=Jn(t)){i.value&&L!=null&&(p.value&&b(r.value)?await s.clipboard.writeText(L):w(L),u.value=L,k.value=!0,d.start())}function w(L){const y=document.createElement("textarea");y.value=L??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function E(){var L,y,x;return(x=(y=(L=document==null?void 0:document.getSelection)==null?void 0:L.call(document))==null?void 0:y.toString())!=null?x:""}function b(L){return L==="granted"||L==="prompt"}return{isSupported:i,text:u,copied:k,copy:v}}const Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wt="__vueuse_ssr_handlers__",e1=o1();function o1(){return Wt in Jt||(Jt[Wt]=Jt[Wt]||{}),Jt[Wt]}function p1(n,s){return e1[n]||s}function c1(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const l1={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Nc="vueuse-storage";function _e(n,s,a,t={}){var e;const{flush:o="pre",deep:p=!0,listenToStorageChanges:l=!0,writeDefaults:r=!0,mergeDefaults:i=!1,shallow:u,window:k=bs,eventFilter:d,onError:h=P=>{console.error(P)},initOnMounted:v}=t,w=(u?Tn:U)(typeof s=="function"?s():s);if(!a)try{a=p1("getDefaultStorage",()=>{var P;return(P=bs)==null?void 0:P.localStorage})()}catch(P){h(P)}if(!a)return w;const E=Jn(s),b=c1(E),L=(e=t.serializer)!=null?e:l1[b],{pause:y,resume:x}=Ym(w,()=>A(w.value),{flush:o,deep:p,eventFilter:d});k&&l&&be(()=>{Cn(k,"storage",V),Cn(k,Nc,Q),v&&V()}),v||V();function j(P,G){k&&k.dispatchEvent(new CustomEvent(Nc,{detail:{key:n,oldValue:P,newValue:G,storageArea:a}}))}function A(P){try{const G=a.getItem(n);if(P==null)j(G,null),a.removeItem(n);else{const B=L.write(P);G!==B&&(a.setItem(n,B),j(G,B))}}catch(G){h(G)}}function J(P){const G=P?P.newValue:a.getItem(n);if(G==null)return r&&E!=null&&a.setItem(n,L.write(E)),E;if(!P&&i){const B=L.read(G);return typeof i=="function"?i(B,E):b==="object"&&!Array.isArray(B)?{...E,...B}:B}else return typeof G!="string"?G:L.read(G)}function V(P){if(!(P&&P.storageArea!==a)){if(P&&P.key==null){w.value=E;return}if(!(P&&P.key!==n)){y();try{(P==null?void 0:P.newValue)!==L.write(w.value)&&(w.value=J(P))}catch(G){h(G)}finally{P?sa(x):x()}}}}function Q(P){V(P.detail)}return w}function r1(n){return $r("(prefers-color-scheme: dark)",n)}function i1(n,s,a={}){const{window:t=bs,...e}=a;let o;const p=It(()=>t&&"ResizeObserver"in t),l=()=>{o&&(o.disconnect(),o=void 0)},r=_(()=>Array.isArray(n)?n.map(k=>as(k)):[as(n)]),i=en(r,k=>{if(l(),p.value&&t){o=new ResizeObserver(s);for(const d of k)d&&o.observe(d,e)}},{immediate:!0,flush:"post"}),u=()=>{l(),i()};return xs(u),{isSupported:p,stop:u}}function u1(n,s={width:0,height:0},a={}){const{window:t=bs,box:e="content-box"}=a,o=_(()=>{var k,d;return(d=(k=as(n))==null?void 0:k.namespaceURI)==null?void 0:d.includes("svg")}),p=U(s.width),l=U(s.height),{stop:r}=i1(n,([k])=>{const d=e==="border-box"?k.borderBoxSize:e==="content-box"?k.contentBoxSize:k.devicePixelContentBoxSize;if(t&&o.value){const h=as(n);if(h){const v=t.getComputedStyle(h);p.value=Number.parseFloat(v.width),l.value=Number.parseFloat(v.height)}}else if(d){const h=Array.isArray(d)?d:[d];p.value=h.reduce((v,{inlineSize:w})=>v+w,0),l.value=h.reduce((v,{blockSize:w})=>v+w,0)}else p.value=k.contentRect.width,l.value=k.contentRect.height},a);be(()=>{const k=as(n);k&&(p.value="offsetWidth"in k?k.offsetWidth:s.width,l.value="offsetHeight"in k?k.offsetHeight:s.height)});const i=en(()=>as(n),k=>{p.value=k?s.width:0,l.value=k?s.height:0});function u(){r(),i()}return{width:p,height:l,stop:u}}const $c=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ap(n,s={}){const{document:a=Vr,autoExit:t=!1}=s,e=_(()=>{var b;return(b=as(n))!=null?b:a==null?void 0:a.querySelector("html")}),o=U(!1),p=_(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>a&&b in a||e.value&&b in e.value)),l=_(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>a&&b in a||e.value&&b in e.value)),r=_(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>a&&b in a||e.value&&b in e.value)),i=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>a&&b in a),u=It(()=>e.value&&a&&p.value!==void 0&&l.value!==void 0&&r.value!==void 0),k=()=>i?(a==null?void 0:a[i])===e.value:!1,d=()=>{if(r.value){if(a&&a[r.value]!=null)return a[r.value];{const b=e.value;if((b==null?void 0:b[r.value])!=null)return!!b[r.value]}}return!1};async function h(){if(!(!u.value||!o.value)){if(l.value)if((a==null?void 0:a[l.value])!=null)await a[l.value]();else{const b=e.value;(b==null?void 0:b[l.value])!=null&&await b[l.value]()}o.value=!1}}async function v(){if(!u.value||o.value)return;d()&&await h();const b=e.value;p.value&&(b==null?void 0:b[p.value])!=null&&(await b[p.value](),o.value=!0)}async function w(){await(o.value?h():v())}const E=()=>{const b=d();(!b||b&&k())&&(o.value=b)};return Cn(a,$c,E,!1),Cn(()=>as(e),$c,E,!1),t&&xs(h),{isSupported:u,isFullscreen:o,enter:v,exit:h,toggle:w}}function qe(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function Hg(n,s,a={}){const{window:t=bs}=a;return _e(n,s,t==null?void 0:t.localStorage,a)}function k1(n={}){const{controls:s=!1,interval:a="requestAnimationFrame"}=n,t=U(new Date),e=()=>t.value=new Date,o=a==="requestAnimationFrame"?a1(e,{immediate:!0}):Zm(e,a,{immediate:!0});return s?{now:t,...o}:t}function Hr(n){const s=window.getComputedStyle(n);if(s.overflowX==="scroll"||s.overflowY==="scroll"||s.overflowX==="auto"&&n.clientWidth<n.scrollWidth||s.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const a=n.parentNode;return!a||a.tagName==="BODY"?!1:Hr(a)}}function d1(n){const s=n||window.event,a=s.target;return Hr(a)?!1:s.touches.length>1?!0:(s.preventDefault&&s.preventDefault(),!1)}const Kt=new WeakMap;function tp(n,s=!1){const a=U(s);let t=null;en(Km(n),p=>{const l=qe(Jn(p));if(l){const r=l;Kt.get(r)||Kt.set(r,r.style.overflow),a.value&&(r.style.overflow="hidden")}},{immediate:!0});const e=()=>{const p=qe(Jn(n));!p||a.value||(fo&&(t=Cn(p,"touchmove",l=>{d1(l)},{passive:!1})),p.style.overflow="hidden",a.value=!0)},o=()=>{var p;const l=qe(Jn(n));!l||!a.value||(fo&&(t==null||t()),l.style.overflow=(p=Kt.get(l))!=null?p:"",Kt.delete(l),a.value=!1)};return xs(o),_({get(){return a.value},set(p){p?e():o()}})}let m1=0;function h1(n,s={}){const a=U(!1),{document:t=Vr,immediate:e=!0,manual:o=!1,id:p=`vueuse_styletag_${++m1}`}=s,l=U(n);let r=()=>{};const i=()=>{if(!t)return;const k=t.getElementById(p)||t.createElement("style");k.isConnected||(k.id=p,s.media&&(k.media=s.media),t.head.appendChild(k)),!a.value&&(r=en(l,d=>{k.textContent=d},{immediate:!0}),a.value=!0)},u=()=>{!t||!a.value||(r(),t.head.removeChild(t.getElementById(p)),a.value=!1)};return e&&!o&&be(i),o||xs(u),{id:p,css:l,unload:u,load:i,isLoaded:Rs(a)}}function f1(n={}){const{window:s=bs,behavior:a="auto"}=n;if(!s)return{x:U(0),y:U(0)};const t=U(s.scrollX),e=U(s.scrollY),o=_({get(){return t.value},set(l){scrollTo({left:l,behavior:a})}}),p=_({get(){return e.value},set(l){scrollTo({top:l,behavior:a})}});return Cn(s,"scroll",()=>{t.value=s.scrollX,e.value=s.scrollY},{capture:!1,passive:!0}),{x:o,y:p}}function g1(n={}){const{window:s=bs,initialWidth:a=Number.POSITIVE_INFINITY,initialHeight:t=Number.POSITIVE_INFINITY,listenOrientation:e=!0,includeScrollbar:o=!0}=n,p=U(a),l=U(t),r=()=>{s&&(o?(p.value=s.innerWidth,l.value=s.innerHeight):(p.value=s.document.documentElement.clientWidth,l.value=s.document.documentElement.clientHeight))};if(r(),be(r),Cn("resize",r,{passive:!0}),e){const i=$r("(orientation: portrait)");en(i,()=>r())}return{width:p,height:l}}const on=({name:n="",color:s="currentColor"},{slots:a})=>{var t;return c("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:s,"aria-label":`${n} icon`},(t=a.default)==null?void 0:t.call(a))};on.displayName="IconBase";const ep=({size:n=48,stroke:s=4,wrapper:a=!0,height:t=2*n})=>{const e=c("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[c("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),c("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round"},[c("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),c("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return a?c("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${t}px`},e):e};ep.displayName="LoadingIcon";const Fr=(n,{slots:s})=>{var a;return(a=s.default)==null?void 0:a.call(s)},op=()=>c(on,{name:"github"},()=>c("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));op.displayName="GitHubIcon";const pp=()=>c(on,{name:"gitlab"},()=>c("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));pp.displayName="GitLabIcon";const cp=()=>c(on,{name:"gitee"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));cp.displayName="GiteeIcon";const lp=()=>c(on,{name:"bitbucket"},()=>c("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));lp.displayName="BitbucketIcon";const rp=()=>c(on,{name:"source"},()=>c("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));rp.displayName="SourceIcon";function v1(){const n=U(!1),s=za();return s&&mn(()=>{n.value=!0},s),n}function y1(n){return v1(),_(()=>!!n())}const b1=()=>y1(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),_1=()=>{const n=b1();return _(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},w1=n=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(s=>s.test(n)),E1=n=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(s=>s.test(n)),S1=n=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(s=>s.test(n)),we=(n,s)=>{let a=1;for(let t=0;t<n.length;t++)a+=n.charCodeAt(t),a+=a<<10,a^=a>>6;return a+=a<<3,a^=a>>11,a%s};let A1=class{constructor(){this.messageElements={};const s="message-container",a=document.getElementById(s);a?this.containerElement=a:(this.containerElement=document.createElement("div"),this.containerElement.id=s,document.body.appendChild(this.containerElement))}pop(s,a=2e3){const t=document.createElement("div"),e=Date.now();return t.className="message move-in",t.innerHTML=s,this.containerElement.appendChild(t),this.messageElements[e]=t,a>0&&setTimeout(()=>{this.close(e)},a),e}close(s){if(s){const a=this.messageElements[s];a.classList.remove("move-in"),a.classList.add("move-out"),a.addEventListener("animationend",()=>{a.remove(),delete this.messageElements[s]})}else ds(this.messageElements).forEach(a=>this.close(Number(a)))}destroy(){document.body.removeChild(this.containerElement)}};const zr=/#.*$/u,L1=n=>{const s=zr.exec(n);return s?s[0]:""},Hc=n=>decodeURI(n).replace(zr,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),Gr=(n,s)=>{if(!Dr(s))return!1;const a=Hc(n.path),t=Hc(s),e=L1(s);return e?e===n.hash&&(!t||a===t):a===t},x1=n=>aa(n)?n:`https://github.com/${n}`,ip=n=>!aa(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null;var C1=n=>Object.prototype.toString.call(n)==="[object Object]",gt=n=>typeof n=="string";const qr=Array.isArray,Fc=n=>C1(n)&&gt(n.name),vt=(n,s=!1)=>n?qr(n)?n.map(a=>gt(a)?{name:a}:Fc(a)?a:null).filter(a=>a!==null):gt(n)?[{name:n}]:Fc(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${s?"":"| false"} | undefined\`, but got`,n),[]):[],Jr=(n,s)=>{if(n){if(qr(n)&&n.every(gt))return n;if(gt(n))return[n];console.error(`Expect ${s||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},Wr=n=>Jr(n,"category"),Kr=n=>Jr(n,"tag");var I1={"/":{source:"源代码"}},T1=M({name:"SiteInfo",components:{BitbucketIcon:lp,GiteeIcon:cp,GitHubIcon:op,GitLabIcon:pp,SourceIcon:rp},props:{name:{type:String,required:!0},desc:{type:String,default:""},logo:{type:String,default:""},url:{type:String,required:!0},preview:{type:String,required:!0},repo:{type:String,default:""}},setup(n){const s=Ns(I1),a=_(()=>n.repo?ip(n.repo):null);return()=>c("div",{class:"vp-site-info","data-name":n.name},[c("a",{class:"vp-site-info-navigator",title:n.name,href:n.url,target:"_blank"}),c("div",{class:"vp-site-info-preview",style:{background:`url(${En(n.preview)}) center/cover no-repeat`}}),c("div",{class:"vp-site-info-detail"},[n.logo?c("img",{class:"vp-site-info-logo",src:n.logo,alt:"",loading:"lazy","no-view":""}):null,c("div",{class:"vp-site-info-name"},n.name),c("div",{class:"vp-site-info-desc"},n.desc)]),n.repo?c("div",{class:"vp-site-info-source-wrapper"},c("a",{class:"vp-site-info-source",href:n.repo,"aria-label":s.value.source,"data-balloon-pos":"left",title:s.value.source,target:"_blank"},c(ts(`${a.value}Icon`)))):null])}});const Ur=({title:n,desc:s="",logo:a,background:t,color:e,link:o})=>{const p=[a?c("img",{class:"vp-card-logo",src:En(a),loading:"lazy","no-view":""}):null,c("div",{class:"vp-card-content"},[c("div",{class:"vp-card-title",innerHTML:n}),c("hr"),c("div",{class:"vp-card-desc",innerHTML:s})])],l={};return t&&(l.background=t),e&&(l.color=e),o?Ma(o)?c("a",{class:"vp-card",href:o,target:"_blank",style:l},p):c(On,{to:o,class:"vp-card",style:l},()=>p):c("div",{class:"vp-card",style:l},p)};Ur.displayName="VPCard";var O1=M({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const s=_(()=>{const t=["font-icon icon"],e=`iconfont icon-${n.icon}`;return t.push(e),t}),a=_(()=>{const t={};return n.color&&(t.color=n.color),n.size&&(t["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),ds(t).length?t:null});return()=>n.icon?c("span",{key:n.icon,class:s.value,style:a.value}):null}});const Qr=({type:n="info",text:s="",vertical:a,color:t},{slots:e})=>{var o;return c("span",{class:["vp-badge",n,{diy:t}],style:{verticalAlign:a??!1,backgroundColor:t??!1}},((o=e.default)==null?void 0:o.call(e))||s)};Qr.displayName="Badge";const P1=Qn({enhance:({app:n})=>{ss("SiteInfo")||n.component("SiteInfo",T1),ss("VPCard")||n.component("VPCard",Ur),ss("FontIcon")||n.component("FontIcon",O1),ss("Badge")||n.component("Badge",Qr)},setup:()=>{h1(`@import url("//at.alicdn.com/t/c/font_4010207_lnf1z756n8m.css");
`)},rootComponents:[]}),zc=async(n,s)=>{const{path:a,query:t}=n.currentRoute.value,{scrollBehavior:e}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:a,query:t,hash:s}),n.options.scrollBehavior=e},B1=({headerLinkSelector:n,headerAnchorSelector:s,delay:a,offset:t=5})=>{const e=js();Cn("scroll",jr(()=>{var v,w;const p=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(p-0)<t){zc(e,"");return}const r=window.innerHeight+p,i=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(i-r)<t,k=Array.from(document.querySelectorAll(n)),h=Array.from(document.querySelectorAll(s)).filter(E=>k.some(b=>b.hash===E.hash));for(let E=0;E<h.length;E++){const b=h[E],L=h[E+1],y=p>=(((v=b.parentElement)==null?void 0:v.offsetTop)??0)-t,x=!L||p<(((w=L.parentElement)==null?void 0:w.offsetTop)??0)-t;if(!(y&&x))continue;const A=decodeURIComponent(e.currentRoute.value.hash),J=decodeURIComponent(b.hash);if(A===J)return;if(u){for(let V=E+1;V<h.length;V++)if(A===decodeURIComponent(h[V].hash))return}zc(e,J);return}},a))},D1=".vp-sidebar-link, .toc-link",R1=".header-anchor",M1=200,j1=5,V1=Qn({setup(){B1({headerLinkSelector:D1,headerAnchorSelector:R1,delay:M1,offset:j1})}});let Yr=n=>Pn(n.title)?{title:n.title}:null;const Zr=Symbol(""),N1=n=>{Yr=n},$1=()=>yn(Zr),H1=n=>{n.provide(Zr,Yr)};var F1={"/":{title:"目录",empty:"暂无目录"}};const z1=M({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(n){const s=$1(),a=Ns(F1),t=hn(),e=hm(),o=Er(),l=Tn(va(e.value).map(([i,{meta:u}])=>{const k=s(u);if(!k)return null;const d=i.split("/").length;return{level:Vm(i,"/")?d-2:d-1,base:i.replace(/\/[^/]+\/?$/,"/"),path:i,...k}}).filter(i=>xt(i)&&Pn(i.title))),r=_(()=>{const i=n.base?s0(ir(n.base)):t.value.path.replace(/\/[^/]+$/,"/"),u=i.split("/").length-2,k=[];return l.value.filter(({level:d,path:h})=>{if(!Na(h,i)||h===i)return!1;if(i==="/"){const v=ds(o.value.locales).filter(w=>w!=="/");if(h==="/404.html"||v.some(w=>Na(h,w)))return!1}return d-u<=n.level}).sort(({title:d,level:h,order:v},{title:w,level:E,order:b})=>{const L=h-E;return L||(Ge(v)?Ge(b)?v>0?b>0?v-b:-1:b<0?v-b:1:v:Ge(b)?b:d.localeCompare(w))}).forEach(d=>{var w;const{base:h,level:v}=d;switch(v-u){case 1:{k.push(d);break}case 2:{const E=k.find(b=>b.path===h);E&&(E.children??(E.children=[])).push(d);break}default:{const E=k.find(b=>b.path===h.replace(/\/[^/]+\/$/,"/"));if(E){const b=(w=E.children)==null?void 0:w.find(L=>L.path===h);b&&(b.children??(b.children=[])).push(d)}}}}),k});return()=>{const i=r.value.some(u=>u.children);return c("div",{class:["vp-catalog-wrapper",{index:n.index}]},[n.hideHeading?null:c("h2",{class:"vp-catalog-main-title"},a.value.title),r.value.length?c(n.index?"ol":"ul",{class:["vp-catalogs",{deep:i}]},r.value.map(({children:u=[],title:k,path:d,content:h})=>{const v=c(On,{class:"vp-catalog-title",to:d},()=>h?c(h):k);return c("li",{class:"vp-catalog"},i?[c("h3",{id:k,class:["vp-catalog-child-title",{"has-children":u.length}]},[c("a",{href:`#${k}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),v]),u.length?c(n.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:w=[],content:E,path:b,title:L})=>c("li",{class:"vp-child-catalog"},[c("div",{class:["vp-catalog-sub-title",{"has-children":w.length}]},[c("a",{href:`#${L}`,class:"vp-catalog-header-anchor"},"#"),c(On,{class:"vp-catalog-title",to:b},()=>E?c(E):L)]),w.length?c(n.index?"ol":"div",{class:n.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},w.map(({content:y,path:x,title:j})=>n.index?c("li",{class:"vp-sub-catalog"},c(On,{to:x},()=>y?c(y):j)):c(On,{class:"vp-sub-catalog-link",to:x},()=>y?c(y):j))):null]))):null]:c("div",{class:"vp-catalog-child-title"},v))})):c("p",{class:"vp-empty-catalog"},a.value.empty)])}}}),G1=Qn({enhance:({app:n})=>{H1(n),ss("Catalog",n)||n.component("Catalog",z1)}});var q1={"/":{backToTop:"返回顶部"}};const J1=M({name:"BackToTop",setup(n){const s=bn(),a=Ns(q1),t=Tn(),{height:e}=u1(t),{height:o}=g1(),{y:p}=f1(),l=_(()=>s.value.backToTop!==!1&&p.value>100),r=_(()=>p.value/(e.value-o.value)*100);return mn(()=>{t.value=document.body}),()=>c(na,{name:"back-to-top"},()=>l.value?c("button",{type:"button",class:"vp-back-to-top-button","aria-label":a.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[c("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":r.value},c("svg",c("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*r.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),c("div",{class:"back-to-top-icon"})]):null)}}),W1=Qn({rootComponents:[J1]}),K1=c("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[c("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),c("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Xr=M({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const s=ms(),a=_(()=>n.locales[s.value]??{openInNewWindow:"open in new window"});return()=>c("span",[K1,c("span",{class:"external-link-icon-sr-only"},a.value.openInNewWindow)])}});var U1={};const Q1=U1,Y1=Qn({enhance({app:n}){n.component("ExternalLinkIcon",c(Xr,{locales:Q1}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const un={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const s=un.isStarted();n=Je(n,un.settings.minimum,1),un.status=n===1?null:n;const a=un.render(!s),t=a.querySelector(un.settings.barSelector),e=un.settings.speed,o=un.settings.easing;return a.offsetWidth,Z1(p=>{Ut(t,{transform:"translate3d("+Gc(n)+"%,0,0)",transition:"all "+e+"ms "+o}),n===1?(Ut(a,{transition:"none",opacity:"1"}),a.offsetWidth,setTimeout(function(){Ut(a,{transition:"all "+e+"ms linear",opacity:"0"}),setTimeout(function(){un.remove(),p()},e)},e)):setTimeout(()=>p(),e)}),un},isStarted:()=>typeof un.status=="number",start:()=>{un.status||un.set(0);const n=()=>{setTimeout(()=>{un.status&&(un.trickle(),n())},un.settings.trickleSpeed)};return un.settings.trickle&&n(),un},done:n=>!n&&!un.status?un:un.inc(.3+.5*Math.random()).set(1),inc:n=>{let s=un.status;return s?(typeof n!="number"&&(n=(1-s)*Je(Math.random()*s,.1,.95)),s=Je(s+n,0,.994),un.set(s)):un.start()},trickle:()=>un.inc(Math.random()*un.settings.trickleRate),render:n=>{if(un.isRendered())return document.getElementById("nprogress");qc(document.documentElement,"nprogress-busy");const s=document.createElement("div");s.id="nprogress",s.innerHTML=un.settings.template;const a=s.querySelector(un.settings.barSelector),t=n?"-100":Gc(un.status||0),e=document.querySelector(un.settings.parent);return Ut(a,{transition:"all 0 linear",transform:"translate3d("+t+"%,0,0)"}),e!==document.body&&qc(e,"nprogress-custom-parent"),e==null||e.appendChild(s),s},remove:()=>{Jc(document.documentElement,"nprogress-busy"),Jc(document.querySelector(un.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&X1(n)},isRendered:()=>!!document.getElementById("nprogress")},Je=(n,s,a)=>n<s?s:n>a?a:n,Gc=n=>(-1+n)*100,Z1=function(){const n=[];function s(){const a=n.shift();a&&a(s)}return function(a){n.push(a),n.length===1&&s()}}(),Ut=function(){const n=["Webkit","O","Moz","ms"],s={};function a(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,r){return r.toUpperCase()})}function t(p){const l=document.body.style;if(p in l)return p;let r=n.length;const i=p.charAt(0).toUpperCase()+p.slice(1);let u;for(;r--;)if(u=n[r]+i,u in l)return u;return p}function e(p){return p=a(p),s[p]??(s[p]=t(p))}function o(p,l,r){l=e(l),p.style[l]=r}return function(p,l){for(const r in l){const i=l[r];i!==void 0&&Object.prototype.hasOwnProperty.call(l,r)&&o(p,r,i)}}}(),ni=(n,s)=>(typeof n=="string"?n:up(n)).indexOf(" "+s+" ")>=0,qc=(n,s)=>{const a=up(n),t=a+s;ni(a,s)||(n.className=t.substring(1))},Jc=(n,s)=>{const a=up(n);if(!ni(n,s))return;const t=a.replace(" "+s+" "," ");n.className=t.substring(1,t.length-1)},up=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),X1=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)},nh=()=>{mn(()=>{const n=js(),s=new Set;s.add(n.currentRoute.value.path),n.beforeEach(a=>{s.has(a.path)||un.start()}),n.afterEach(a=>{s.add(a.path),un.done()})})},sh=Qn({setup(){nh()}}),ah=JSON.parse(`{"encrypt":{},"author":{"name":"Dongcp","url":"https://github.com/simeis147"},"pageInfo":["Author","Date","Original","Word","ReadingTime","PageView","Category","Tag"],"docsDir":"docs","repo":"simeis147","darkmode":"toggle","contributors":true,"lastUpdated":true,"editLink":false,"breadcrumb":true,"breadcrumbIcon":true,"blog":{"description":"Master's degree in reading","intro":"/intro.html","avatar":"assets/theme/logo.png","roundAvatar":true,"medias":{"Gmail":"mailto:cpdong@gmail.com","Email":"mailto:24726259408@qq.com","GitHub":"https://github.com/simeis147","Gitee":"https://gitee.com/dong-chengpeng"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"⚙️ 便捷工具","children":[{"text":"文档","children":[{"text":"Markdown","icon":"/assets/icon/markdown.svg","link":"/Tools/MarkDown/"},{"text":"Resource","icon":"/assets/icon/resources.svg","link":"/Tools/Resource/"}]},{"text":"工具","children":[{"text":"Git","icon":"/assets/icon/git.svg","link":"/Tools/Git/"},{"text":"BugMemoir","icon":"/assets/icon/bug.svg","link":"https://simeis147.github.io/bug-memoir/"}]}]},{"text":"💻 基础知识","children":[{"text":"基础","children":[{"text":"计算机网络","icon":"/assets/icon/network.svg","link":"/ComputerBasics/ComputerNetwork/"},{"text":"操作系统","icon":"/assets/icon/os.svg","link":"/ComputerBasics/OpreatingSystem/"}]},{"text":"算法","children":[{"text":"数据结构","icon":"/assets/icon/dataStructure.svg","link":"/ComputerBasics/DataStructure/"},{"text":"算法","icon":"/assets/icon/algorithm.svg","link":"/ComputerBasics/Algorithm/"}]}]},{"text":"📑 数据存储","children":[{"text":"数据库基础和原理","children":[{"text":"数据库原理","icon":"/assets/icon/database.svg","link":"/Database/Basic/Principle/"},{"text":"SQL语言","icon":"/assets/icon/sql.svg","link":"/Database/Basic/Language/"}]},{"text":"SQL 数据库","children":[{"text":"Mysql详解","icon":"/assets/icon/mysql.svg","link":"/Database/SQL/"}]},{"text":"NoSQL 数据库","children":[{"text":"Redis详解","icon":"/assets/icon/redis.svg","link":"/Database/NoSQL/"}]}]},{"text":"🔬 后端相关","children":[{"text":"框架","children":[{"text":"MyBatisPlus","icon":"/assets/icon/mybatisplus.svg","link":"/BackEnd/MybatisPlus/"},{"text":"MyBatis","icon":"/assets/icon/mybatis.svg","link":"/BackEnd/MyBatis/"},{"text":"SpringCloud","icon":"/assets/icon/springcloud.svg","link":"/BackEnd/SpringCloud/"},{"text":"SpringBoot","icon":"/assets/icon/springboot.svg","link":"/BackEnd/SpringBoot/"},{"text":"SpringMVC","icon":"/assets/icon/springMVC.svg","link":"/BackEnd/SpringMVC/"},{"text":"Spring","icon":"/assets/icon/spring.svg","link":"/BackEnd/Spring/"}]},{"text":"理论知识","children":[{"text":"JavaWeb","icon":"/assets/icon/javaweb.svg","link":"/BackEnd/JavaWeb/"},{"text":"JavaSE","icon":"/assets/icon/java.svg","link":"/BackEnd/JavaSE/"}]}]},{"text":"🔭 前端相关","children":[{"text":"框架","children":[{"text":"Vue","icon":"/assets/icon/vue.svg","link":"/FrontEnd/Vue/"}]},{"text":"理论知识","children":[{"text":"JavaScript","icon":"/assets/icon/javascript.svg","link":"/FrontEnd/JavaScript/"},{"text":"CSS","icon":"/assets/icon/css.svg","link":"/FrontEnd/CSS/"},{"text":"HTML","icon":"/assets/icon/html.svg","link":"/FrontEnd/HTML/"}]}]},{"text":"📝 项目资源","link":"/Projects/"}],"sidebar":{"/Tools/Git/":"structure","/Tools/Git/*":"structure","/Tools/MarkDown/":"structure","/Tools/Resource/":"structure","/ComputerBasics/ComputerNetwork/":"structure","/ComputerBasics/Algorithm/":"structure","/ComputerBasics/Algorithm/*":"structure","/ComputerBasics/OpreatingSystem/":"structure","/ComputerBasics/OpreatingSystem/*":"structure","/ComputerBasics/DataStructure/":"structure","/ComputerBasics/DataStructure/*":"structure","/Database/Basic/Language/":"structure","/Database/Basic/Principle/":"structure","/Database/NoSQL/":"structure","/Database/SQL/":"structure","/BackEnd/JavaSE/":"structure","/BackEnd/JavaWeb/":"structure","/BackEnd/MyBatis/":"structure","/BackEnd/MybatisPlus/":"structure","/BackEnd/Spring/":"structure","/BackEnd/SpringBoot/":"structure","/BackEnd/SpringCloud/":"structure","/BackEnd/SpringMVC/":"structure","/FrontEnd/HTML/":"structure","/FrontEnd/CSS/":"structure","/FrontEnd/JavaScript/":"structure","/FrontEnd/Vue/":"structure","/Projects/reggietakeout/":"structure","/Projects/reggietakeout/*":"structure","/Projects/skytakeout/":"structure","/Projects/huike/":"structure","/Projects/chuanzhihealth/":"structure","/Projects/tjxt/":"structure","/Demo/":"structure"},"footer":"Powered by <a href=\\"https://v2.vuepress.vuejs.org/zh/\\" target=\\"_blank\\"> VuePress </a> | Theme <a href=\\"https://theme-hope.vuejs.press/zh/\\" target=\\"_blank\\"> Hope </a>","displayFooter":true,"copyright":"Copyright © 2023 - present  <center><script async src=\\"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js\\"><\/script><span id=\\"busuanzi_container_site_pv\\" style='display:none'>本站总访问量 <span id=\\"busuanzi_value_site_pv\\"></span> 次 </span> <span id=\\"busuanzi_container_site_uv\\" style='display:none'> | 本站访客数 <span id=\\"busuanzi_value_site_uv\\"></span> 人次 <span id=\\"busuanzi_container_page_pv\\" style='display:none'> | 本文总阅读量 <span id=\\"busuanzi_value_page_pv\\"></span> 次</center>"}},"navbarLayout":{"start":["Brand"],"center":["Links"],"end":["Language","Repo","Outlook","Search"]}}`),th=U(ah),si=()=>th,ai=Symbol(""),eh=()=>{const n=yn(ai);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},oh=(n,s)=>{const{locales:a,...t}=n;return{...t,...a==null?void 0:a[s]}},ph=Qn({enhance({app:n}){const s=si(),a=n._context.provides[Yo],t=_(()=>oh(s.value,a.routeLocale.value));n.provide(ai,t),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return s.value}},$themeLocale:{get(){return t.value}}})}});var ch={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.27/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.27/templates/giscus/dark.css",repo:"simeis147/BlogGiscus",repoId:"R_kgDOKyHOLw",category:"Announcements",categoryId:"DIC_kwDOKyHOL84CbRA3"};const lh=ch;let rh=lh;const ti=Symbol(""),ei=()=>yn(ti),ih=ei,uh=n=>{n.provide(ti,rh)},Wc=["ar","ca","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var kh=M({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(n){const s=ih(),a=Zo(),t=!!(s.repo&&s.repoId&&s.category&&s.categoryId),{repo:e,repoId:o,category:p,categoryId:l}=s,r=U(!1),i=_(()=>{if(Wc.includes(a.value))return a.value;const k=a.value.split("-")[0];return Wc.includes(k)?k:"en"}),u=_(()=>({repo:e,repoId:o,category:p,categoryId:l,lang:i.value,theme:n.darkmode?s.darkTheme||"dark":s.lightTheme||"light",mapping:s.mapping||"pathname",term:n.identifier,inputPosition:s.inputPosition||"top",reactionsEnabled:s.reactionsEnabled===!1?"0":"1",strict:s.strict===!1?"0":"1",loading:s.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return mn(async()=>{await m(()=>import("./giscus-7BMGhbDA.js"),__vite__mapDeps([])),r.value=!0}),()=>t?c("div",{id:"comment",class:["giscus-wrapper",{"input-top":s.inputPosition!=="bottom"}]},r.value?c("giscus-widget",u.value):c(ep)):null}}),dh=M({name:"CommentService",props:{darkmode:Boolean},setup(n){const s=ei(),a=hn(),t=bn(),e=s.comment!==!1,o=_(()=>t.value.comment||e&&t.value.comment!==!1);return()=>c(kh,{identifier:t.value.commentID||a.value.path,darkmode:n.darkmode,style:{display:o.value?"block":"none"}})}}),mh=Qn({enhance:({app:n})=>{uh(n),n.component("CommentService",dh)}});const hh=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,fh=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&hh.test(navigator.userAgent),gh=({delay:n=500,duration:s=2e3,locales:a,selector:t,showInMobile:e})=>{const{copy:o,copied:p}=t1({legacy:!0,copiedDuring:s}),l=Ns(a),r=hn(),i=d=>{if(!d.hasAttribute("copy-code-registered")){const h=document.createElement("button");h.type="button",h.classList.add("vp-copy-code-button"),h.innerHTML='<div class="vp-copy-icon" />',h.setAttribute("aria-label",l.value.copy),h.setAttribute("data-copied",l.value.copied),d.parentElement&&d.parentElement.insertBefore(h,d),d.setAttribute("copy-code-registered","")}},u=()=>{sa().then(()=>Br(n)).then(()=>{t.forEach(d=>{document.querySelectorAll(d).forEach(i)})})},k=(d,h,v)=>{let{innerText:w=""}=h;/language-(shellscript|shell|bash|sh|zsh)/.test(d.classList.toString())&&(w=w.replace(/^ *(\$|>) /gm,"")),o(w).then(()=>{v.classList.add("copied"),en(p,()=>{v.classList.remove("copied"),v.blur()},{once:!0})})};mn(()=>{const d=!fh()||e;d&&u(),Cn("click",h=>{const v=h.target;if(v.matches('div[class*="language-"] > button.copy')){const w=v.parentElement,E=v.nextElementSibling;E&&k(w,E,v)}else if(v.matches('div[class*="language-"] div.vp-copy-icon')){const w=v.parentElement,E=w.parentElement,b=w.nextElementSibling;b&&k(E,b,w)}}),en(()=>r.value.path,()=>{d&&u()})})};var vh={"/":{copy:"复制代码",copied:"已复制"}},yh=['.theme-hope-content div[class*="language-"] pre'];const bh=500,_h=2e3,wh=vh,Eh=yh,Sh=!1,Ah=Qn({setup:()=>{gh({selector:Eh,locales:wh,duration:_h,delay:bh,showInMobile:Sh})}}),Qt=_e("VUEPRESS_CODE_TAB_STORE",{});var Lh=M({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:s}){const a=U(n.active),t=Tn([]),e=()=>{n.tabId&&(Qt.value[n.tabId]=n.data[a.value].id)},o=(i=a.value)=>{a.value=i<t.value.length-1?i+1:0,t.value[a.value].focus()},p=(i=a.value)=>{a.value=i>0?i-1:t.value.length-1,t.value[a.value].focus()},l=(i,u)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),a.value=u):i.key==="ArrowRight"?(i.preventDefault(),o()):i.key==="ArrowLeft"&&(i.preventDefault(),p()),n.tabId&&(Qt.value[n.tabId]=n.data[a.value].id)},r=()=>{if(n.tabId){const i=n.data.findIndex(({id:u})=>Qt.value[n.tabId]===u);if(i!==-1)return i}return n.active};return mn(()=>{a.value=r(),en(()=>Qt.value[n.tabId],(i,u)=>{if(n.tabId&&i!==u){const k=n.data.findIndex(({id:d})=>d===i);k!==-1&&(a.value=k)}})}),()=>n.data.length?c("div",{class:"vp-code-tabs"},[c("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:i},u)=>{const k=u===a.value;return c("button",{type:"button",ref:d=>{d&&(t.value[u]=d)},class:["vp-code-tab-nav",{active:k}],role:"tab","aria-controls":`codetab-${n.id}-${u}`,"aria-selected":k,onClick:()=>{a.value=u,e()},onKeydown:d=>l(d,u)},s[`title${u}`]({value:i,isActive:k}))})),n.data.map(({id:i},u)=>{const k=u===a.value;return c("div",{class:["vp-code-tab",{active:k}],id:`codetab-${n.id}-${u}`,role:"tabpanel","aria-expanded":k},[c("div",{class:"vp-code-tab-title"},s[`title${u}`]({value:i,isActive:k})),s[`tab${u}`]({value:i,isActive:k})])})]):null}});const oi=({active:n=!1},{slots:s})=>{var a;return c("div",{class:["code-group-item",{active:n}],"aria-selected":n},(a=s.default)==null?void 0:a.call(s))};oi.displayName="CodeGroupItem";const xh=M({name:"CodeGroup",slots:Object,setup(n,{slots:s}){const a=U(-1),t=Tn([]),e=(l=a.value)=>{a.value=l<t.value.length-1?l+1:0,t.value[a.value].focus()},o=(l=a.value)=>{a.value=l>0?l-1:t.value.length-1,t.value[a.value].focus()},p=(l,r)=>{l.key===" "||l.key==="Enter"?(l.preventDefault(),a.value=r):l.key==="ArrowRight"?(l.preventDefault(),e(r)):l.key==="ArrowLeft"&&(l.preventDefault(),o(r))};return()=>{var r;const l=(((r=s.default)==null?void 0:r.call(s))||[]).filter(i=>i.type.name==="CodeGroupItem").map(i=>(i.props===null&&(i.props={}),i));return l.length===0?null:(a.value<0||a.value>l.length-1?(a.value=l.findIndex(i=>"active"in i.props),a.value===-1&&(a.value=0)):l.forEach((i,u)=>{i.props.active=u===a.value}),c("div",{class:"code-group"},[c("div",{class:"code-group-nav"},l.map((i,u)=>{const k=u===a.value;return c("button",{type:"button",ref:d=>{d&&(t.value[u]=d)},class:["code-group-nav-tab",{active:k}],"aria-pressed":k,"aria-expanded":k,onClick:()=>{a.value=u},onKeydown:d=>p(d,u)},i.props.title)})),l]))}}}),Ch='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',Ih='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',Th='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var Oh={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const We=Oh,Kc={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},Ph=(n,s,a)=>{const t=document.createElement(n);return xt(s)&&ds(s).forEach(e=>{if(e.indexOf("data"))t[e]=s[e];else{const o=e.replace("data","");t.dataset[o]=s[e]}}),a&&a.forEach(e=>{t.appendChild(e)}),t},kp=n=>({...We,...n,jsLib:Array.from(new Set([...We.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...We.cssLib||[],...n.cssLib||[]]))}),Ia=(n,s)=>{if(Dr(n[s]))return n[s];const a=new Promise(t=>{var o;const e=document.createElement("script");e.src=s,(o=document.querySelector("body"))==null||o.appendChild(e),e.onload=()=>{t()}});return n[s]=a,a},Bh=(n,s)=>{if(s.css&&Array.from(n.childNodes).every(a=>a.nodeName!=="STYLE")){const a=Ph("style",{innerHTML:s.css});n.appendChild(a)}},Dh=(n,s,a)=>{const t=a.getScript();if(t&&Array.from(s.childNodes).every(e=>e.nodeName!=="SCRIPT")){const e=document.createElement("script");e.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${n} .vp-code-demo-display').shadowRoot;
${t}}`)),s.appendChild(e)}},Rh=n=>{const s=ds(n),a={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(t=>{const e=s.filter(o=>Kc[t].types.includes(o));if(e.length){const o=e[0];a[t]=[n[o].replace(/^\n|\n$/g,""),Kc[t].map[o]||o]}}),a.isLegal=(!a.html.length||a.html[1]==="none")&&(!a.js.length||a.js[1]==="none")&&(!a.css.length||a.css[1]==="none"),a},pi=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),ci=n=>`<div id="app">
${pi(n)}
</div>`,Mh=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,jh=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),li=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,Vh=(n,s)=>{const a=kp(s),t=n.js[0]||"";return{...a,html:pi(n.html[0]||""),js:t,css:n.css[0]||"",isLegal:n.isLegal,getScript:()=>{var e;return a.useBabel?((e=window.Babel.transform(t,{presets:["es2015"]}))==null?void 0:e.code)||"":t}}},Nh=/<template>([\s\S]+)<\/template>/u,$h=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,Hh=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Fh=(n,s)=>{const a=kp(s),t=n.html[0]||"",e=Nh.exec(t),o=$h.exec(t),p=Hh.exec(t),l=e?e[1].replace(/^\n|\n$/g,""):"",[r="",i=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[u="",k=""]=p?[p[4].replace(/^\n|\n$/g,""),p[3]]:[],d=i===""&&(k===""||k==="css");return{...a,html:ci(l),js:jh(r),css:u,isLegal:d,jsLib:[a.vue,...a.jsLib],getScript:()=>{var v,w;const h=s.useBabel?((w=(v=window.Babel)==null?void 0:v.transform(r,{presets:["es2015"]}))==null?void 0:w.code)||"":r.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${li(h)};appOptions.template=\`${l.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},zh=(n,s)=>{const a=kp(s);return{...a,html:ci(""),js:Mh(n.js[0]||""),css:n.css[0]||(n.js[0]?n.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:n.isLegal,jsLib:[a.react,a.reactDOM,...a.jsLib],jsx:!0,getScript:()=>{var e,o;const t=((o=(e=window.Babel)==null?void 0:e.transform(n.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${li(t)}))`}}},Ta={},Gh=n=>Promise.all([Ia(Ta,n.babel),Ia(Ta,n.react),Ia(Ta,n.reactDOM)]),qh=n=>{const s=[Ia(Ta,n.vue)];return n.useBabel&&s.push(Ia(Ta,n.babel)),Promise.all(s)},Jh=n=>n.useBabel?Ia(Ta,n.babel):Promise.resolve();var Wh=M({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(n,{slots:s}){const[a,t]=ft(!1),e=Tn(),o=Tn(),p=U("0"),l=U(!1),r=_(()=>JSON.parse(n.config?Mc(n.config):"{}")),i=_(()=>{const v=JSON.parse(Mc(n.code));return Rh(v)}),u=_(()=>n.type==="react"?zh(i.value,r.value):n.type==="vue"?Fh(i.value,r.value):Vh(i.value,r.value)),k=_(()=>u.value.isLegal),d=(v=!1)=>{const w=e.value.attachShadow({mode:"open"}),E=document.createElement("div");E.classList.add("code-demo-app"),w.appendChild(E),k.value?(v&&(E.innerHTML=u.value.html),Bh(w,u.value),Dh(n.id,w,u.value),p.value="0"):p.value="auto",l.value=!0},h=()=>{switch(n.type){case"react":return Gh(u.value).then(()=>d());case"vue":return qh(u.value).then(()=>d());default:return Jh(u.value).then(()=>d(!0))}};return Cn("beforeprint",()=>{t(!0)}),mn(()=>{setTimeout(()=>{h()},800)}),()=>{var v;return c("div",{class:"vp-code-demo",id:n.id},[c("div",{class:"vp-code-demo-header"},[u.value.isLegal?c("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",a.value?"down":"end"],onClick:()=>{p.value=a.value?"0":`${o.value.clientHeight+13.8}px`,t()}}):null,n.title?c("span",{class:"vp-code-demo-title"},decodeURIComponent(n.title)):null,u.value.isLegal&&u.value.jsfiddle!==!1?c("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[c("input",{type:"hidden",name:"html",value:u.value.html}),c("input",{type:"hidden",name:"js",value:u.value.js}),c("input",{type:"hidden",name:"css",value:u.value.css}),c("input",{type:"hidden",name:"wrap",value:"1"}),c("input",{type:"hidden",name:"panel_js",value:"3"}),c("input",{type:"hidden",name:"resources",value:[...u.value.cssLib,...u.value.jsLib].join(",")}),c("button",{type:"submit",class:"jsfiddle-button",innerHTML:Ih,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!u.value.isLegal||u.value.codepen!==!1?c("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[c("input",{type:"hidden",name:"data",value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(";"),css_external:u.value.cssLib.join(";"),layout:u.value.codepenLayout,html_pre_processor:i.value?i.value.html[1]:"none",js_pre_processor:i.value?i.value.js[1]:u.value.jsx?"babel":"none",css_pre_processor:i.value?i.value.css[1]:"none",editors:u.value.codepenEditors})}),c("button",{type:"submit",innerHTML:Ch,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),l.value?null:c(ep,{class:"vp-code-demo-loading"}),c("div",{ref:e,class:"vp-code-demo-display",style:{display:k.value&&l.value?"block":"none"}}),c("div",{class:"vp-code-demo-code-wrapper",style:{height:p.value}},c("div",{ref:o,class:"vp-code-demo-codes"},(v=s.default)==null?void 0:v.call(s)))])}}}),Kh=M({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(n,{slots:s}){const[a,t]=ft(!1),e=Tn(),o=U("0");return Cn("beforeprint",()=>{t(!0)}),()=>{var p,l;return c("div",{class:"vp-md-demo",id:n.id},[c("div",{class:"vp-md-demo-header"},[c("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",a.value?"down":"end"],onClick:()=>{o.value=a.value?"0":`${e.value.clientHeight+13.8}px`,t()}}),n.title?decodeURIComponent(n.title):null]),c("div",{class:"vp-md-demo-display"},(p=s.default)==null?void 0:p.call(s)),c("div",{class:"vp-md-demo-code-wrapper",style:{height:o.value}},c("div",{ref:e,class:"vp-md-demo-codes"},(l=s.code)==null?void 0:l.call(s)))])}}});const Uh=()=>{Cn("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})})},ri=({title:n="",link:s})=>c("div",{class:"vp-playground"},[c("div",{class:"vp-playground-header"},[n?c("div",{class:"vp-playground-title"},decodeURIComponent(n)):null,c("div",{class:"vp-playground-actions"},[c("a",{class:"vp-playground-action",href:decodeURIComponent(s),target:"_blank",innerHTML:Th})])]),c("div",{class:"vp-playground-container"},c("iframe",{src:decodeURIComponent(s)}))]);ri.displayName="Playground";const Ke=_e("VUEPRESS_TAB_STORE",{});var Qh=M({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:s}){const a=U(n.active),t=Tn([]),e=()=>{n.tabId&&(Ke.value[n.tabId]=n.data[a.value].id)},o=(i=a.value)=>{a.value=i<t.value.length-1?i+1:0,t.value[a.value].focus()},p=(i=a.value)=>{a.value=i>0?i-1:t.value.length-1,t.value[a.value].focus()},l=(i,u)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),a.value=u):i.key==="ArrowRight"?(i.preventDefault(),o()):i.key==="ArrowLeft"&&(i.preventDefault(),p()),e()},r=()=>{if(n.tabId){const i=n.data.findIndex(({id:u})=>Ke.value[n.tabId]===u);if(i!==-1)return i}return n.active};return mn(()=>{a.value=r(),en(()=>Ke.value[n.tabId],(i,u)=>{if(n.tabId&&i!==u){const k=n.data.findIndex(({id:d})=>d===i);k!==-1&&(a.value=k)}})}),()=>n.data.length?c("div",{class:"vp-tabs"},[c("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:i},u)=>{const k=u===a.value;return c("button",{type:"button",ref:d=>{d&&(t.value[u]=d)},class:["vp-tab-nav",{active:k}],role:"tab","aria-controls":`tab-${n.id}-${u}`,"aria-selected":k,onClick:()=>{a.value=u,e()},onKeydown:d=>l(d,u)},s[`title${u}`]({value:i,isActive:k}))})),n.data.map(({id:i},u)=>{const k=u===a.value;return c("div",{class:["vp-tab",{active:k}],id:`tab-${n.id}-${u}`,role:"tabpanel","aria-expanded":k},[c("div",{class:"vp-tab-title"},s[`title${u}`]({value:i,isActive:k})),s[`tab${u}`]({value:i,isActive:k})])})]):null}});const Yh=Qn({enhance:({app:n})=>{n.component("CodeTabs",Lh),ss("CodeGroup",n)||n.component("CodeGroup",xh),ss("CodeGroupItem",n)||n.component("CodeGroupItem",oi),n.component("CodeDemo",Wh),n.component("MdDemo",Kh),n.component("Playground",ri),n.component("Tabs",Qh)},setup:()=>{Uh()}});let Zh={};const ii=Symbol(""),Xh=()=>yn(ii),n2=n=>{n.provide(ii,Zh)},s2='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',a2=n=>Pn(n)?Array.from(document.querySelectorAll(n)):n.map(s=>Array.from(document.querySelectorAll(s))).flat(),ui=n=>new Promise((s,a)=>{n.complete?s({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>s(ui(n)),n.onerror=t=>a(t))}),t2=n=>{const{isSupported:s,toggle:a}=ap();n.on("uiRegister",()=>{s.value&&n.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}}),n.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(t,e)=>{t.setAttribute("download",""),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener"),e.on("change",()=>{t.setAttribute("href",e.currSlide.data.src)})}}),n.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(t,e)=>{const o=[];let p=-1;for(let l=0;l<e.getNumItems();l++){const r=document.createElement("div");r.className="photo-swipe-bullet",r.onclick=i=>{e.goTo(o.indexOf(i.target))},o.push(r),t.appendChild(r)}e.on("change",()=>{p>=0&&o[p].classList.remove("active"),o[e.currIndex].classList.add("active"),p=e.currIndex})}})})},e2=(n,s,a=!0)=>m(()=>import("./photoswipe.esm-SzV8tJDW.js"),__vite__mapDeps([])).then(({default:t})=>{let e=null;const o=n.map(p=>({html:s2,element:p,msrc:p.src}));return n.forEach((p,l)=>{const r=()=>{e==null||e.destroy(),e=new t({preloaderDelay:0,showHideAnimationType:"zoom",...s,dataSource:o,index:l,...a?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),t2(e),e.addFilter("thumbEl",()=>p),e.addFilter("placeholderSrc",()=>p.src),e.init()};p.getAttribute("photo-swipe")||(p.style.cursor="zoom-in",p.addEventListener("click",()=>{r()}),p.addEventListener("keypress",({key:i})=>{i==="Enter"&&r()}),p.setAttribute("photo-swipe","")),ui(p).then(i=>{o.splice(l,1,i),e==null||e.refreshSlideContent(l)})}),a?Cn("wheel",()=>{e==null||e.close()}):()=>{}}),o2=({selector:n,locales:s,delay:a=500,scrollToClose:t=!0})=>{const e=Xh(),o=Ns(s),p=hn(),l=bn();let r=null;const i=()=>{const{photoSwipe:u}=l.value;u!==!1&&sa().then(()=>Br(a)).then(async()=>{const k=Pn(u)?u:n;r=await e2(a2(k),{...e,...o.value},t)})};mn(()=>{i(),en(()=>p.value.path,()=>{r==null||r(),i()})}),ga(()=>{r==null||r()})};var p2={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const c2=".theme-hope-content :not(a) > img:not([no-view])",l2=p2,r2=800,i2=!0,u2=Qn({enhance:({app:n})=>{n2(n)},setup:()=>{o2({selector:c2,delay:r2,locales:l2,scrollToClose:i2})}}),k2=()=>c(on,{name:"heading"},()=>c("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));k2.displayName="HeadingIcon";const d2=()=>c(on,{name:"heart"},()=>c("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));d2.displayName="HeartIcon";const m2=()=>c(on,{name:"history"},()=>c("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));m2.displayName="HistoryIcon";const h2=()=>c(on,{name:"title"},()=>c("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));h2.displayName="TitleIcon";const dp=()=>c(on,{name:"search"},()=>c("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));dp.displayName="SearchIcon";const ki=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[c("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},c("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),c("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},c("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),c("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},c("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);ki.displayName="LoadingIcon";const di=({hint:n})=>c("div",{class:"search-pro-result-wrapper loading"},[c(ki),n]);di.displayName="SearchLoading";const f2='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';var g2={0:"分类：$content",1:"标签：$content"},v2={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",searching:"搜索中",defaultTitle:"文档",select:"选择",navigate:"切换",autocomplete:"自动补全",exit:"关闭",queryHistory:"搜索历史",resultHistory:"历史结果",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},y2={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro.worker.js"};const mp=y2,zg=g2,mi=mp.hotKeys,hp=v2;new URL("data:text/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBPLGdldFN0b3JlZEZpZWxkcyBhcyBDLGF1dG9TdWdnZXN0IGFzIFQsbG9hZEpTT05JbmRleCBhcyAkfWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0IGIgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4LmpzIjtpbXBvcnR7ZW50cmllcyBhcyB3fWZyb20iQHZ1ZXByZXNzL2hlbHBlci9jbGllbnQiO2NvbnN0IFM9KGksZSk9Pntjb25zdCBsPWkudG9Mb3dlckNhc2UoKSxzPWUudG9Mb3dlckNhc2UoKSxuPVtdO2xldCB0PTAsYz0wO2NvbnN0IGE9KG8sZz0hMSk9PntsZXQgdT0iIjtjPT09MD91PW8ubGVuZ3RoPjIwP2DigKYgJHtvLnNsaWNlKC0yMCl9YDpvOmc/dT1vLmxlbmd0aCtjPjEwMD9gJHtvLnNsaWNlKDAsMTAwLWMpfeKApiBgOm86dT1vLmxlbmd0aD4yMD9gJHtvLnNsaWNlKDAsMjApfSDigKYgJHtvLnNsaWNlKC0yMCl9YDpvLHUmJm4ucHVzaCh1KSxjKz11Lmxlbmd0aCxnfHwobi5wdXNoKFsibWFyayIsZV0pLGMrPWUubGVuZ3RoLGM+PTEwMCYmbi5wdXNoKCIg4oCmIikpfTtsZXQgcD1sLmluZGV4T2Yocyx0KTtpZihwPT09LTEpcmV0dXJuIG51bGw7Zm9yKDtwPj0wOyl7Y29uc3Qgbz1wK3MubGVuZ3RoO2lmKGEoaS5zbGljZSh0LHApKSx0PW8sYz4xMDApYnJlYWs7cD1sLmluZGV4T2Yocyx0KX1yZXR1cm4gYzwxMDAmJmEoaS5zbGljZSh0KSwhMCksbn0sRT0oaSxlKT0+ZS5jb250ZW50cy5yZWR1Y2UoKGwsWyxzXSk9PmwrcywwKS1pLmNvbnRlbnRzLnJlZHVjZSgobCxbLHNdKT0+bCtzLDApLEY9KGksZSk9Pk1hdGgubWF4KC4uLmUuY29udGVudHMubWFwKChbLGxdKT0+bCkpLU1hdGgubWF4KC4uLmkuY29udGVudHMubWFwKChbLGxdKT0+bCkpLE09KGksZSxsPXt9KT0+e2NvbnN0IHM9e307cmV0dXJuIE8oZSxpLHtib29zdDp7aDoyLHQ6MSxjOjR9LHByZWZpeDohMCwuLi5sfSkuZm9yRWFjaChuPT57Y29uc3R7aWQ6dCx0ZXJtczpjLHNjb3JlOmF9PW4scD10LmluY2x1ZGVzKCJAIiksbz10LmluY2x1ZGVzKCIjIiksW2csdV09dC5zcGxpdCgvWyNAXS8pLGY9TnVtYmVyKGcpLG09Yy5zb3J0KChoLHIpPT5oLmxlbmd0aC1yLmxlbmd0aCkuZmlsdGVyKChoLHIpPT5jLnNsaWNlKHIrMSkuZXZlcnkoZD0+IWQuaW5jbHVkZXMoaCkpKSx7Y29udGVudHM6eX09c1tmXT8/PXt0aXRsZToiIixjb250ZW50czpbXX07aWYocCl5LnB1c2goW3t0eXBlOiJjdXN0b21GaWVsZCIsaWQ6ZixpbmRleDp1LGRpc3BsYXk6bS5tYXAoaD0+bi5jLm1hcChyPT5TKHIsaCkpKS5mbGF0KCkuZmlsdGVyKGg9PmghPT1udWxsKX0sYV0pO2Vsc2V7Y29uc3QgaD1tLm1hcChyPT5TKG4uaCxyKSkuZmlsdGVyKHI9PnIhPT1udWxsKTtpZihoLmxlbmd0aCYmeS5wdXNoKFt7dHlwZTpvPyJoZWFkaW5nIjoidGl0bGUiLGlkOmYsLi4ubyYme2FuY2hvcjp1fSxkaXNwbGF5Omh9LGFdKSwidCJpbiBuKWZvcihjb25zdCByIG9mIG4udCl7Y29uc3QgZD1tLm1hcCh4PT5TKHIseCkpLmZpbHRlcih4PT54IT09bnVsbCk7ZC5sZW5ndGgmJnkucHVzaChbe3R5cGU6InRleHQiLGlkOmYsLi4ubyYme2FuY2hvcjp1fSxkaXNwbGF5OmR9LGFdKX19fSksdyhzKS5zb3J0KChbLG5dLFssdF0pPT5TRUFSQ0hfUFJPX1NPUlRfU1RSQVRFR1k9PT0idG90YWwiP0Uobix0KTpGKG4sdCkpLm1hcCgoW24se3RpdGxlOnQsY29udGVudHM6Y31dKT0+e2lmKCF0KXtjb25zdCBhPUMoZSxuKTthJiYodD1hLmgpfXJldHVybnt0aXRsZTp0LGNvbnRlbnRzOmMubWFwKChbYV0pPT5hKX19KX0sUj0oaSxlLGw9e30pPT5UKGUsaSx7ZnV6enk6LjIsLi4ubH0pLm1hcCgoe3N1Z2dlc3Rpb246c30pPT5zKTtzZWxmLm9ubWVzc2FnZT1hc3luYyh7ZGF0YTp7dHlwZTppPSJhbGwiLHF1ZXJ5OmUsbG9jYWxlOmwsb3B0aW9uczpzfX0pPT57Y29uc3R7ZGVmYXVsdDpufT1hd2FpdCBiW2xdKCksdD0kKG4se2ZpZWxkczpbImgiLCJ0IiwiYyJdLHN0b3JlRmllbGRzOlsiaCIsInQiLCJjIl19KTtpPT09InN1Z2dlc3QiP3NlbGYucG9zdE1lc3NhZ2UoUihlLHQscykpOmk9PT0ic2VhcmNoIj9zZWxmLnBvc3RNZXNzYWdlKE0oZSx0LHMpKTpzZWxmLnBvc3RNZXNzYWdlKHtzdWdnZXN0aW9uczpSKGUsdCxzKSxyZXN1bHRzOk0oZSx0LHMpfSl9OwovLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAK",import.meta.url);const b2=()=>{const n=new Worker(`/${mp.worker}`,{}),s=[];return n.addEventListener("message",({data:a})=>{const{resolve:t}=s.shift();t(a)}),{search:a=>new Promise((t,e)=>{n.postMessage(a),s.push({resolve:t,reject:e})}),terminate:()=>{n.terminate(),s.forEach(({reject:a})=>a(new Error("Worker has been terminated.")))}}};let _2={};const hi=Symbol(""),w2=()=>{const n=ms(),{locales:s={},...a}=yn(hi);return _(()=>({...a,...s[n.value]||{}}))},E2=n=>{n.provide(hi,_2)},S2=(n,s=!1)=>{const a=U(0),t=_(()=>n.value[a.value]),e=()=>{a.value=a.value>0?a.value-1:n.value.length-1},o=()=>{a.value=a.value<n.value.length-1?a.value+1:0};return en(n,()=>{s||(a.value=0)}),{index:a,item:t,prev:e,next:o}},A2=n=>n instanceof Element?document.activeElement===n&&(["TEXTAREA","SELECT","INPUT"].includes(n.tagName)||n.hasAttribute("contenteditable")):!1,L2=n=>mi.some(s=>{const{key:a,ctrl:t=!1,shift:e=!1,alt:o=!1,meta:p=!1}=s;return a===n.key&&t===n.ctrlKey&&e===n.shiftKey&&o===n.altKey&&p===n.metaKey}),x2='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',C2='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',I2='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',T2='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',fp=Symbol(""),O2=()=>{const n=U(!1);us(fp,n)},P2=n=>{const s=U([]);{const a=w2(),t=ms();mn(()=>{const e=jr(l=>{l?o({type:"suggest",query:l,locale:t.value,options:a.value}).then(r=>{s.value=r.length?Na(r[0],l)&&!r[0].slice(l.length).includes(" ")?r:[l,...r]:[]}).catch(r=>{console.error(r)}):s.value=[]},mp.suggestDelay),{search:o,terminate:p}=b2();en([n,t],()=>e(n.value),{immediate:!0}),ga(()=>{p()})})}return{suggestions:s}},Ue=mi[0];var B2=M({name:"SearchBox",setup(){const n=Ns(hp),s=yn(fp),a=U(!1),t=_(()=>Ue?[(a.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((e,o)=>Ue[["ctrl","shift","alt","meta"][o]]),Ue.key.toUpperCase()]:null);return Cn("keydown",e=>{!s.value&&L2(e)&&!A2(e.target)&&(e.preventDefault(),s.value=!0)}),mn(()=>{const{userAgent:e}=navigator;a.value=S1(e)||E1(e)||w1(e)}),()=>[c("button",{type:"button",class:"search-pro-button","aria-label":n.value.search,onClick:()=>{s.value=!0}},[c(dp),c("div",{class:"search-pro-placeholder"},n.value.search),t.value?c("div",{class:"search-pro-key-hints"},t.value.map(e=>c("kbd",{class:"search-pro-key"},e))):null])]}});const D2=Vl({loader:()=>m(()=>import("./SearchResult-DVZNazVa.js"),__vite__mapDeps([])),loadingComponent:()=>{const n=Ns(hp);return c(di,{hint:n.value.loading})}});var R2=M({name:"SearchModal",setup(){const n=yn(fp),s=Ga(),a=_1(),t=Ns(hp),e=U(""),{suggestions:o}=P2(e),p=U(!1),{index:l,prev:r,next:i}=S2(o),u=Tn(),k=Tn(),d=(h=l.value)=>{e.value=o.value[h],p.value=!1};return Cn("keydown",h=>{p.value?h.key==="ArrowUp"?r():h.key==="ArrowDown"?i():h.key==="Enter"?d():h.key==="Escape"&&(p.value=!1):h.key==="Escape"&&(n.value=!1)}),mn(()=>{const h=tp(document.body);en(n,async v=>{var w;h.value=v,v&&(await sa(),(w=u.value)==null||w.focus())}),n1(k,()=>{p.value=!1}),ga(()=>{h.value=!1})}),()=>n.value?c("div",{class:"search-pro-modal-wrapper"},[c("div",{class:"search-pro-mask",onClick:()=>{n.value=!1,e.value=""}}),c("div",{class:"search-pro-modal"},[c("div",{class:"search-pro-box"},[c("form",[c("label",{for:"search-pro","aria-label":t.value.search},c(dp)),c("input",{ref:u,type:"search",class:"search-pro-input",id:"search-pro",placeholder:t.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${s.value.title}-search`,value:e.value,"aria-controls":"search-pro-results",onKeydown:h=>{const{key:v}=h;o.value.length&&(v==="Tab"?(d(),h.preventDefault()):(v==="ArrowDown"||v==="ArrowUp"||v==="Escape")&&h.preventDefault())},onInput:({target:h})=>{e.value=h.value,p.value=!0,l.value=0}}),e.value?c("button",{type:"reset",class:"search-pro-clear-button",innerHTML:f2,onClick:()=>{e.value=""}}):null,p.value&&o.value.length?c("ul",{class:"search-pro-suggestions",ref:k},o.value.map((h,v)=>c("li",{class:["search-pro-suggestion",{active:v===l.value}],onClick:()=>{d(v)}},[c("kbd",{class:"search-pro-auto-complete",title:`Tab ${t.value.autocomplete}`},"Tab"),h]))):null]),c("button",{type:"button",class:"search-pro-close-button",onClick:()=>{n.value=!1,e.value=""}},t.value.cancel)]),c(D2,{query:e.value,isFocusing:!p.value,onClose:()=>{n.value=!1},onUpdateQuery:h=>{e.value=h}}),a.value?null:c("div",{class:"search-pro-hints"},[c("span",{class:"search-pro-hint"},[c("kbd",{innerHTML:x2}),t.value.select]),c("span",{class:"search-pro-hint"},[c("kbd",{innerHTML:I2}),c("kbd",{innerHTML:C2}),t.value.navigate]),c("span",{class:"search-pro-hint"},[c("kbd",{innerHTML:T2}),t.value.exit])])])]):null}}),M2=Qn({enhance({app:n}){E2(n),n.component("SearchBox",B2)},setup(){O2()},rootComponents:[R2]});const fi=()=>{const n=hn();return _(()=>n.value.readingTime??null)},gi=(n,s)=>{const{minutes:a,words:t}=n,{less1Minute:e,word:o,time:p}=s;return{time:a<1?e:p.replace("$time",Math.round(a).toString()),words:o.replace("$word",t.toString())}};var Uc={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const Qc={words:"",time:""},go=typeof Uc>"u"?null:Uc,vi=()=>go?Ns(go):_(()=>null),j2=()=>{if(typeof go>"u")return _(()=>Qc);const n=fi(),s=vi();return _(()=>n.value&&s.value?gi(n.value,s.value):Qc)},ta=()=>si(),cn=()=>eh(),ya=()=>{const n=ta();return _(()=>!!n.value.pure)},Qe=()=>null,V2="719px",N2="1440px",$2="true",gp={mobileBreakPoint:V2,pcBreakPoint:N2,enableThemeColor:$2,"theme-1":"#2196f3","theme-2":"#f26d6d","theme-3":"#fb9b5f","theme-4":"#7f8c8d"},vp={"/Tools/Git/":["",{text:"1 手册",prefix:"01Manual/",collapsible:!0,children:["manual01","manual02","manual03"]},{text:"2 文档笔记",prefix:"02DocumentNotes/",collapsible:!0,children:["documentnotes01","documentnotes02","documentnotes03","documentnotes04","documentnotes05","documentnotes06","documentnotes07","documentnotes08","documentnotes09","documentnotes10","documentnotes11"]}],"/Tools/Git/*":[],"/Tools/MarkDown/":["","markdown01"],"/Tools/Resource/":[""],"/ComputerBasics/ComputerNetwork/":["","computernetword01","computernetwork02",{text:"计算机网络面试题",prefix:"01cn/",collapsible:!0,children:["cn01","cn02","cn03"]}],"/ComputerBasics/Algorithm/":["",{text:"01 数组",prefix:"01Arrays/",collapsible:!0,children:["arrays01","arrays02","arrays03","arrays04","arrays05"]},{text:"02 链表",prefix:"02LinkedList/",collapsible:!0,children:["linkedlist01","linkedlist02","linkedlist03","linkedlist04","linkedlist05","linkedlist06","linkedlist07","linkedlist08"]},{text:"03 哈希表",prefix:"03HashTable/",collapsible:!0,children:["hashtable01","hashtable02","hashtable03","hashtable04","hashtable05","hashtable06","hashtable07","hashtable08","hashtable09"]},{text:"04 字符串",prefix:"04String/",collapsible:!0,children:["String01","String02","String03","String04","String05","String06","String07"]},{text:"05 双指针法",prefix:"05DoublePointer/",collapsible:!0,children:["doublePointer01","doublePointer02","doublePointer03","doublePointer04","doublePointer05","doublePointer06","doublePointer07","doublePointer08","doublePointer09","doublePointer10"]},{text:"06 栈与队列",prefix:"06StacksAndQueues/",collapsible:!0,children:["stacksAndQueues01","stacksAndQueues02","stacksAndQueues03","stacksAndQueues04","stacksAndQueues05","stacksAndQueues06","stacksAndQueues07"]},{text:"07 二叉树",prefix:"07BinaryTree/",collapsible:!0,children:[]},{text:"08 回溯算法",prefix:"08BacktrackingAlgorithm/",collapsible:!0,children:[]},{text:"09 贪心算法",prefix:"09GreedyAlgorithm/",collapsible:!0,children:[]},{text:"10 动态规划",prefix:"10DynamicProgramming/",collapsible:!0,children:[]},{text:"11 单调栈",prefix:"11MonotonicStack/",collapsible:!0,children:[]},{text:"12 总结",prefix:"12Summary/",collapsible:!0,children:["summary01"]}],"/ComputerBasics/Algorithm/*":[],"/ComputerBasics/OpreatingSystem/":["",{text:"操作系统面试题",prefix:"OSInterview/",collapsible:!0,children:["osi01","osi02","osi03"]}],"/ComputerBasics/OpreatingSystem/*":[],"/ComputerBasics/DataStructure/":["",{text:"中间件与其他专业技能",prefix:"02MO/",collapsible:!0,children:["mo01","mo02","mo03"]},{text:"数据结构与算法面试题",prefix:"01DS/",collapsible:!0,children:["ds01","/ComputerBasics/DataStructure/01DS/ds02_.html","ds03"]}],"/ComputerBasics/DataStructure/*":[],"/Database/Basic/Language/":[""],"/Database/Basic/Principle/":["",{text:"数据库面试题",prefix:"DBInterview/",collapsible:!0,children:["dbi01","dbi02","dbi03"]}],"/Database/NoSQL/":[""],"/Database/SQL/":["",{text:"MySQL基础篇",prefix:"01Basics/",collapsible:!0,children:["sql01","sql02","sql03","sql04"]},{text:"MySQL进阶篇",prefix:"02Advanced/",collapsible:!0,children:["advanced01"]},{text:"MySQL运维篇",prefix:"03OperationAndMaintenance/",collapsible:!0,children:["oam01"]}],"/BackEnd/JavaSE/":["","Javase01","Javase02","Javase03","Javase04","Javase05","Javase06","Javase07","Javase08","Javase09","Javase10","Javase11","Javase12"],"/BackEnd/JavaWeb/":["","javaweb01","javaweb02","javaweb03"],"/BackEnd/MyBatis/":["","mybatis01","mybatis02","mybatis03","mybatis04","mybatis05","mybatis06","mybatis07"],"/BackEnd/MybatisPlus/":["","mybatisplus01","mybatisplus02"],"/BackEnd/Spring/":["","spring01","spring02","spring03"],"/BackEnd/SpringBoot/":["","springboot01","springboot02","springboot03","springboot04","springboot05","springboot06","springboot07","springboot08"],"/BackEnd/SpringCloud/":["","springcloud01","springcloud02","springcloud03","springcloud04","springcloud05","springcloud06","springcloud07","springcloud08","springcloud09","springcloud10","springcloud11","springcloud12","springcloud13","springcloud14","springcloud15","springcloud16","springcloud17"],"/BackEnd/SpringMVC/":["","springmvc01","springmvc02"],"/FrontEnd/HTML/":["","html01","html02","html03"],"/FrontEnd/CSS/":["","css01","css02","css03"],"/FrontEnd/JavaScript/":["","javascript01","javascript02","javascript03","javascript04","javascript05"],"/FrontEnd/Vue/":["","vue01","vue02","vue03","vue04","vue05","vue06","vue07"],"/Projects/reggietakeout/":["",{text:"项目基础",prefix:"01projectbasic/",collapsible:!0,children:["day01","day02","day03","day04","day05","day06"]},{text:"Git",prefix:"02git/",collapsible:!0,children:["git01"]},{text:"Linux",prefix:"03linux/",collapsible:!0,children:["day01","day02"]},{text:"Redis",prefix:"04Redis/",collapsible:!0,children:["redis01"]}],"/Projects/reggietakeout/*":[],"/Projects/skytakeout/":["","skytakeout01","skytakeout02","skytakeout03","skytakeout04","skytakeout05","skytakeout06","skytakeout07","skytakeout08","skytakeout09","skytakeout10","skytakeout11","skytakeout12"],"/Projects/huike/":["","huike01","huike02"],"/Projects/chuanzhihealth/":[],"/Projects/tjxt/":["","tjxt01"],"/Demo/":[]},yi=n=>{const{icon:s="",color:a,size:t}=n,e=a||t?{}:null;return a&&(e.color=a),t&&(e.height=Number.isNaN(Number(t))?t:`${t}px`),aa(s)?c("img",{class:"icon",src:s,alt:"","no-view":"",style:e}):ye(s)?c("img",{class:"icon",src:En(s),alt:"","aria-hidden":"","no-view":"",style:e}):c(ts("FontIcon"),n)};yi.displayName="HopeIcon";var zn=yi;const Tt=()=>{const n=js(),s=Vs();return a=>{if(a)if(ye(a))s.path!==a&&n.push(a);else if(ur(a))window&&window.open(a);else{const t=s.path.slice(0,s.path.lastIndexOf("/"));n.push(`${t}/${encodeURI(a)}`)}}},bi=()=>{const n=cn(),s=bn();return _(()=>{const{author:a}=s.value;return a?vt(a):a===!1?[]:vt(n.value.author,!1)})},H2=()=>{const n=bn(),s=yn(Symbol.for("categoryMap"));return _(()=>Wr(n.value.category).map(a=>{var t;return{name:a,path:((t=s==null?void 0:s.value.map[a])==null?void 0:t.path)||""}}))},F2=()=>{const n=bn(),s=yn(Symbol.for("tagMap"));return _(()=>Kr(n.value.tag).map(a=>{var t;return{name:a,path:((t=s==null?void 0:s.value.map[a])==null?void 0:t.path)||""}}))},z2=()=>{const n=bn(),s=hn();return _(()=>{const a=np(n.value.date);if(a)return a;const{createdTime:t}=s.value.git||{};return t?new Date(t):null})},G2=()=>{const n=cn(),s=hn(),a=bn(),t=bi(),e=H2(),o=F2(),p=z2(),l=fi(),r=j2(),i=_(()=>({author:t.value,category:e.value,date:p.value,localizedDate:s.value.localizedDate,tag:o.value,isOriginal:a.value.isOriginal||!1,readingTime:l.value,readingTimeLocale:r.value,pageview:"pageview"in a.value?a.value.pageview:!0})),u=_(()=>"pageInfo"in a.value?a.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:i,items:u}},{mobileBreakPoint:q2,pcBreakPoint:J2}=gp,Yc=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,Ot=()=>{const n=U(!1),s=U(!1),a=()=>{n.value=window.innerWidth<=(Yc(q2)??719),s.value=window.innerWidth>=(Yc(J2)??1440)};return mn(()=>{a(),Cn("resize",a,!1),Cn("orientationchange",a,!1)}),{isMobile:n,isPC:s}},_i=Symbol(""),Pt=()=>{const n=yn(_i);if(!n)throw new Error("useDarkmode() is called without provider.");return n},W2=n=>{const s=ta(),a=r1(),t=_(()=>s.value.darkmode||"switch"),e=_e("vuepress-theme-hope-scheme","auto"),o=_(()=>{const l=t.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?a.value:l==="toggle"?e.value==="dark":e.value==="dark"||e.value==="auto"&&a.value}),p=_(()=>{const l=t.value;return l==="switch"||l==="toggle"});n.provide(_i,{canToggle:p,config:t,isDarkmode:o,status:e}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},K2=()=>{const{config:n,isDarkmode:s,status:a}=Pt();Bl(()=>{n.value==="disable"?a.value="light":n.value==="enable"?a.value="dark":n.value==="toggle"&&a.value==="auto"&&(a.value="light")}),mn(()=>{en(s,t=>document.documentElement.setAttribute("data-theme",t?"dark":"light"),{immediate:!0})})};var vn=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(vn||{}),wi=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(wi||{});const ia=(n="",s="")=>ye(s)?s:`${ir(n)}${s}`,Oa=(n,s=!1)=>{const{meta:a,path:t}=qa(n);return a?{text:!s&&a[vn.shortTitle]?a[vn.shortTitle]:a[vn.title]||t,link:t,...a[vn.icon]?{icon:a[vn.icon]}:{}}:{text:t,link:t}},vo=({config:n,prefix:s=""})=>{const a=(t,e=s)=>{const o=Pn(t)?Oa(ia(e,t)):t.link?{...t,...Ma(t.link)?{}:{link:Oa(ia(e,t.link)).link}}:t;if("children"in o){const p=ia(e,o.prefix),l=o.children==="structure"?vp[p]:o.children;return{type:"group",...o,prefix:p,children:l.map(r=>a(r,p))}}return{type:"page",...o}};return n.map(t=>a(t))},U2=({config:n,page:s,headerDepth:a})=>{const t=ds(n).sort((e,o)=>o.length-e.length);for(const e of t)if(Na(decodeURI(s.path),e)){const o=n[e];return o?vo({config:o==="structure"?vp[e]:o,page:s,headerDepth:a,prefix:e}):[]}return console.warn(`${s.path} is missing sidebar config.`),[]},Q2=({config:n,routeLocale:s,page:a,headerDepth:t})=>n==="structure"?vo({config:vp[s],page:a,headerDepth:t,prefix:s}):ho(n)?vo({config:n,page:a,headerDepth:t}):xt(n)?U2({config:n,page:a,headerDepth:t}):[],Ei=Symbol(""),Y2=()=>{const n=bn(),s=cn(),a=hn(),t=ms(),e=_(()=>n.value.home?!1:n.value.sidebar??s.value.sidebar??"structure"),o=_(()=>n.value.headerDepth??s.value.headerDepth??2),p=Rr(()=>[e.value,o.value,a.value.path,null],()=>Q2({config:e.value,routeLocale:t.value,page:a.value,headerDepth:o.value}));us(Ei,p)},yp=()=>{const n=yn(Ei);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var Z2=M({name:"PageFooter",setup(){const n=ta(),s=cn(),a=bn(),t=bi(),e=_(()=>{const{copyright:i,footer:u}=a.value;return u!==!1&&!!(i||u||s.value.displayFooter)}),o=_(()=>{const{footer:i}=a.value;return i===!1?!1:Pn(i)?i:s.value.footer||""}),p=_(()=>t.value.map(({name:i})=>i).join(", ")),l=i=>`Copyright © ${new Date().getFullYear()} ${p.value} ${i?`${i} Licensed`:""}`,r=_(()=>{const{copyright:i,license:u=""}=a.value,{license:k}=n.value,{copyright:d}=s.value;return i??(u?l(u):Pn(d)?d:p.value||k?l(k):!1)});return()=>e.value?c("footer",{class:"vp-footer-wrapper"},[o.value?c("div",{class:"vp-footer",innerHTML:o.value}):null,r.value?c("div",{class:"vp-copyright",innerHTML:r.value}):null]):null}}),Kn=M({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:s,emit:a,slots:t}){const e=Vs(),o=Er(),p=Fa(n,"config"),l=_(()=>aa(p.value.link)),r=_(()=>!l.value&&ur(p.value.link)),i=_(()=>p.value.target||(l.value?"_blank":void 0)),u=_(()=>i.value==="_blank"),k=_(()=>!l.value&&!r.value&&!u.value),d=_(()=>p.value.rel||(u.value?"noopener noreferrer":null)),h=_(()=>p.value.ariaLabel||p.value.text),v=_(()=>{if(n.exact)return!1;const E=ds(o.value.locales);return E.length?E.every(b=>b!==p.value.link):p.value.link!=="/"}),w=_(()=>k.value?p.value.activeMatch?new RegExp(p.value.activeMatch,"u").test(e.path):v.value?Na(e.path,p.value.link):e.path===p.value.link:!1);return()=>{const{before:E,after:b,default:L}=t,{text:y,icon:x,link:j}=p.value;return k.value?c(On,{to:j,"aria-label":h.value,...s,class:["nav-link",{active:w.value},s.class],onFocusout:()=>a("focusout")},()=>L?L():[E?E():c(zn,{icon:x}),y,b==null?void 0:b()]):c("a",{href:j,rel:d.value,target:i.value,"aria-label":h.value,...s,class:["nav-link",s.class],onFocusout:()=>a("focusout")},L?L():[E?E():c(zn,{icon:x}),y,n.noExternalLinkIcon?null:c(Xr),b==null?void 0:b()])}}}),X2=M({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:s}){const a=hn(),t=Fa(n,"config"),e=_(()=>t.value.ariaLabel||t.value.text),o=U(!1);en(()=>a.value.path,()=>{o.value=!1});const p=l=>{l.detail===0&&(o.value=!o.value)};return()=>{var l;return c("div",{class:["dropdown-wrapper",{open:o.value}]},[c("button",{type:"button",class:"dropdown-title","aria-label":e.value,onClick:p},[((l=s.title)==null?void 0:l.call(s))||c("span",{class:"title"},[c(zn,{icon:t.value.icon}),n.config.text]),c("span",{class:"arrow"}),c("ul",{class:"nav-dropdown"},t.value.children.map((r,i)=>{const u=i===t.value.children.length-1;return c("li",{class:"dropdown-item"},"children"in r?[c("h4",{class:"dropdown-subtitle"},r.link?c(Kn,{config:r,onFocusout:()=>{r.children.length===0&&u&&(o.value=!1)}}):c("span",r.text)),c("ul",{class:"dropdown-subitem-wrapper"},r.children.map((k,d)=>c("li",{class:"dropdown-subitem"},c(Kn,{config:k,onFocusout:()=>{d===r.children.length-1&&u&&(o.value=!1)}}))))]:c(Kn,{config:r,onFocusout:()=>{u&&(o.value=!1)}}))}))])])}}});const Si=(n,s="")=>Pn(n)?Oa(ia(s,n)):"children"in n?{...n,...n.link&&!Ma(n.link)?Oa(ia(s,n.link)):{},children:n.children.map(a=>Si(a,ia(s,n.prefix)))}:{...n,link:Ma(n.link)?n.link:Oa(ia(s,n.link)).link},Ai=()=>{const n=cn(),s=()=>(n.value.navbar||[]).map(a=>Si(a));return Rr(()=>n.value.navbar,()=>s())},nf=()=>{const n=cn(),s=_(()=>n.value.repo||null),a=_(()=>s.value?x1(s.value):null),t=_(()=>s.value?ip(s.value):null),e=_(()=>a.value?n.value.repoLabel??(t.value===null?"Source":t.value):null);return _(()=>!a.value||!e.value||n.value.repoDisplay===!1?null:{type:t.value||"Source",label:e.value,link:a.value})};var sf=M({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const s=hn(),a=Fa(n,"config"),t=_(()=>a.value.ariaLabel||a.value.text),e=U(!1);en(()=>s.value.path,()=>{e.value=!1});const o=(p,l)=>l[l.length-1]===p;return()=>[c("button",{type:"button",class:["nav-screen-dropdown-title",{active:e.value}],"aria-label":t.value,onClick:()=>{e.value=!e.value}},[c("span",{class:"title"},[c(zn,{icon:a.value.icon}),n.config.text]),c("span",{class:["arrow",e.value?"down":"end"]})]),c("ul",{class:["nav-screen-dropdown",{hide:!e.value}]},a.value.children.map(p=>c("li",{class:"dropdown-item"},"children"in p?[c("h4",{class:"dropdown-subtitle"},p.link?c(Kn,{config:p,onFocusout:()=>{o(p,a.value.children)&&p.children.length===0&&(e.value=!1)}}):c("span",p.text)),c("ul",{class:"dropdown-subitem-wrapper"},p.children.map(l=>c("li",{class:"dropdown-subitem"},c(Kn,{config:l,onFocusout:()=>{o(l,p.children)&&o(p,a.value.children)&&(e.value=!1)}}))))]:c(Kn,{config:p,onFocusout:()=>{o(p,a.value.children)&&(e.value=!1)}}))))]}}),af=M({name:"NavScreenLinks",setup(){const n=Ai();return()=>n.value.length?c("nav",{class:"nav-screen-links"},n.value.map(s=>c("div",{class:"navbar-links-item"},"children"in s?c(sf,{config:s}):c(Kn,{config:s})))):null}});const Li=()=>c(on,{name:"dark"},()=>c("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Li.displayName="DarkIcon";const xi=()=>c(on,{name:"light"},()=>c("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));xi.displayName="LightIcon";const Ci=()=>c(on,{name:"auto"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Ci.displayName="AutoIcon";const Ii=()=>c(on,{name:"enter-fullscreen"},()=>c("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Ii.displayName="EnterFullScreenIcon";const Ti=()=>c(on,{name:"cancel-fullscreen"},()=>c("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Ti.displayName="CancelFullScreenIcon";const Oi=()=>c(on,{name:"outlook"},()=>[c("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Oi.displayName="OutlookIcon";var Pi=M({name:"AppearanceSwitch",setup(){const{config:n,isDarkmode:s,status:a}=Pt(),t=ya(),e=()=>{n.value==="switch"?a.value={light:"dark",dark:"auto",auto:"light"}[a.value]:a.value=a.value==="light"?"dark":"light"},o=async p=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!t.value)||!p){e();return}const l=p.clientX,r=p.clientY,i=Math.hypot(Math.max(l,innerWidth-l),Math.max(r,innerHeight-r)),u=s.value;await document.startViewTransition(async()=>{e(),await sa()}).ready,s.value!==u&&document.documentElement.animate({clipPath:s.value?[`circle(${i}px at ${l}px ${r}px)`,`circle(0px at ${l}px ${r}px)`]:[`circle(0px at ${l}px ${r}px)`,`circle(${i}px at ${l}px ${r}px)`]},{duration:400,pseudoElement:s.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>c("button",{type:"button",id:"appearance-switch",onClick:o},[c(Ci,{style:{display:a.value==="auto"?"block":"none"}}),c(Li,{style:{display:a.value==="dark"?"block":"none"}}),c(xi,{style:{display:a.value==="light"?"block":"none"}})])}}),tf=M({name:"AppearanceMode",setup(){const n=cn(),{canToggle:s}=Pt(),a=_(()=>n.value.outlookLocales.darkmode);return()=>s.value?c("div",{class:"appearance-wrapper"},[c("label",{class:"appearance-title",for:"appearance-switch"},a.value),c(Pi)]):null}});const Ye="VUEPRESS_THEME_COLOR";var ef=M({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const s=(a="")=>{const t=document.documentElement.classList,e=ds(n.themeColor);if(!a){localStorage.removeItem(Ye),t.remove(...e);return}t.remove(...e.filter(o=>o!==a)),t.add(a),localStorage.setItem(Ye,a)};return mn(()=>{const a=localStorage.getItem(Ye);a&&s(a)}),()=>c("ul",{id:"theme-color-picker"},[c("li",c("span",{class:"theme-color",onClick:()=>s()})),va(n.themeColor).map(([a,t])=>c("li",c("span",{style:{background:t},onClick:()=>s(a)})))])}});const Pa=gp.enableThemeColor==="true",of=Pa?Nm(va(gp).filter(([n])=>n.startsWith("theme-"))):{};var pf=M({name:"ThemeColor",setup(){const n=cn(),s=_(()=>n.value.outlookLocales.themeColor);return()=>Pa?c("div",{class:"theme-color-wrapper"},[c("label",{class:"theme-color-title",for:"theme-color-picker"},s.value),c(ef,{themeColor:of})]):null}}),Bi=M({name:"ToggleFullScreenButton",setup(){const n=cn(),{isSupported:s,isFullscreen:a,toggle:t}=ap(),e=_(()=>n.value.outlookLocales.fullscreen);return()=>s?c("div",{class:"full-screen-wrapper"},[c("label",{class:"full-screen-title",for:"full-screen-switch"},e.value),c("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:a.value,onClick:()=>t()},a.value?c(Ti):c(Ii))]):null}}),Di=M({name:"OutlookSettings",setup(){const n=ta(),s=ya(),a=_(()=>!s.value&&n.value.fullscreen);return()=>c(ve,()=>[Pa?c(pf):null,c(tf),a.value?c(Bi):null])}}),cf=M({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:s,slots:a}){const t=hn(),{isMobile:e}=Ot(),o=Tn(),p=tp(o);return mn(()=>{o.value=document.body,en(e,l=>{!l&&n.show&&(p.value=!1,s("close"))}),en(()=>t.value.path,()=>{p.value=!1,s("close")})}),ga(()=>{p.value=!1}),()=>c(na,{name:"fade",onEnter:()=>{p.value=!0},onAfterLeave:()=>{p.value=!1}},()=>{var l,r;return n.show?c("div",{id:"nav-screen"},c("div",{class:"vp-nav-screen-container"},[(l=a.before)==null?void 0:l.call(a),c(af),c("div",{class:"vp-outlook-wrapper"},c(Di)),(r=a.after)==null?void 0:r.call(a)])):null})}}),lf=M({name:"NavbarBrand",setup(){const n=ms(),s=Ga(),a=cn(),t=_(()=>a.value.home||n.value),e=_(()=>s.value.title),o=_(()=>a.value.navTitle??e.value),p=_(()=>a.value.logo?En(a.value.logo):null),l=_(()=>a.value.logoDark?En(a.value.logoDark):null);return()=>c(On,{to:t.value,class:"vp-brand"},()=>[p.value?c("img",{class:["vp-nav-logo",{light:!!l.value}],src:p.value,alt:""}):null,l.value?c("img",{class:["vp-nav-logo dark"],src:l.value,alt:""}):null,o.value?c("span",{class:["vp-site-name",{"hide-in-pad":p.value&&a.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),rf=M({name:"NavbarLinks",setup(){const n=Ai();return()=>n.value.length?c("nav",{class:"vp-nav-links"},n.value.map(s=>c("div",{class:"nav-item hide-in-mobile"},"children"in s?c(X2,{config:s}):c(Kn,{config:s})))):null}}),uf=M({name:"RepoLink",components:{BitbucketIcon:lp,GiteeIcon:cp,GitHubIcon:op,GitLabIcon:pp,SourceIcon:rp},setup(){const n=nf();return()=>n.value?c("div",{class:"nav-item vp-repo"},c("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},c(ts(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Ri=({active:n=!1},{emit:s})=>c("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>s("toggle")},c("span",[c("span",{class:"vp-top"}),c("span",{class:"vp-middle"}),c("span",{class:"vp-bottom"})]));Ri.displayName="ToggleNavbarButton";var kf=Ri;const yo=(n,{emit:s})=>c("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>s("toggle")},c("span",{class:"icon"}));yo.displayName="ToggleSidebarButton",yo.emits=["toggle"];var df=yo,mf=M({name:"OutlookButton",setup(){const{isSupported:n}=ap(),s=ta(),a=ya(),t=hn(),{canToggle:e}=Pt(),o=U(!1),p=_(()=>!a.value&&s.value.fullscreen&&n);return en(()=>t.value.path,()=>{o.value=!1}),()=>e.value||p.value||Pa?c("div",{class:"nav-item hide-in-mobile"},e.value&&!p.value&&!Pa?c(Pi):p.value&&!e.value&&!Pa?c(Bi):c("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[c(Oi),c("div",{class:"outlook-dropdown"},c(Di))])):null}}),hf=M({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:s,slots:a}){const t=cn(),{isMobile:e}=Ot(),o=U(!1),p=_(()=>{const{navbarAutoHide:u="mobile"}=t.value;return u!=="none"&&(u==="always"||e.value)}),l=_(()=>t.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),r={Brand:lf,Language:Qe,Links:rf,Repo:uf,Outlook:mf,Search:ss("Docsearch")?ts("Docsearch"):ss("SearchBox")?ts("SearchBox"):Qe},i=u=>r[u]??(ss(u)?ts(u):Qe);return()=>{var u,k,d,h,v,w;return[c("header",{id:"navbar",class:["vp-navbar",{"auto-hide":p.value,"hide-icon":t.value.navbarIcon===!1}]},[c("div",{class:"vp-navbar-start"},[c(df,{onToggle:()=>{o.value&&(o.value=!1),s("toggleSidebar")}}),(u=a.startBefore)==null?void 0:u.call(a),(l.value.start||[]).map(E=>c(i(E))),(k=a.startAfter)==null?void 0:k.call(a)]),c("div",{class:"vp-navbar-center"},[(d=a.centerBefore)==null?void 0:d.call(a),(l.value.center||[]).map(E=>c(i(E))),(h=a.centerAfter)==null?void 0:h.call(a)]),c("div",{class:"vp-navbar-end"},[(v=a.endBefore)==null?void 0:v.call(a),(l.value.end||[]).map(E=>c(i(E))),(w=a.endAfter)==null?void 0:w.call(a),c(kf,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),c(cf,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var E;return(E=a.screenTop)==null?void 0:E.call(a)},after:()=>{var E;return(E=a.screenBottom)==null?void 0:E.call(a)}})]}}});const yt=(n,s,a=!1)=>"activeMatch"in s?new RegExp(s.activeMatch,"u").test(n.path):Gr(n,s.link)?!0:"children"in s&&!a?s.children.some(t=>yt(n,t)):!1,Mi=(n,s)=>s.type==="group"?s.children.some(a=>a.type==="group"?Mi(n,a):a.type==="page"&&yt(n,a,!0))||"prefix"in s&&Gr(n,s.prefix):!1;var ff=M({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const s=Vs();return()=>Pn(n.config.link)?c(Kn,{class:["vp-sidebar-link","vp-sidebar-page",{active:yt(s,n.config,!0)}],exact:!0,config:n.config}):c("p",n,[c(zn,{icon:n.config.icon}),n.config.text])}}),gf=M({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:s}){const a=Vs(),t=_(()=>yt(a,n.config)),e=_(()=>yt(a,n.config,!0));return()=>{const{collapsible:o,children:p=[],icon:l,prefix:r,link:i,text:u}=n.config;return c("section",{class:"vp-sidebar-group"},[c(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||i,exact:e.value,active:t.value}],...o?{type:"button",onClick:()=>s("toggle"),onKeydown:k=>{k.key==="Enter"&&s("toggle")}}:{}},[c(zn,{icon:l}),i?c(Kn,{class:"vp-sidebar-title",config:{text:u,link:i},noExternalLinkIcon:!0}):c("span",{class:"vp-sidebar-title"},u),o?c("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!o?c(ji,{key:r,config:p}):null])}}}),ji=M({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const s=Vs(),a=U(-1),t=e=>{a.value=e===a.value?-1:e};return en(()=>s.path,()=>{const e=n.config.findIndex(o=>Mi(s,o));a.value=e},{immediate:!0,flush:"post"}),()=>c("ul",{class:"vp-sidebar-links"},n.config.map((e,o)=>c("li",e.type==="group"?c(gf,{config:e,open:o===a.value,onToggle:()=>t(o)}):c(ff,{config:e}))))}}),vf=M({name:"SideBar",slots:Object,setup(n,{slots:s}){const a=Vs(),t=cn(),e=yp(),o=Tn();return mn(()=>{en(()=>a.hash,p=>{const l=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${a.path}${p}"]`);if(!l)return;const{top:r,height:i}=o.value.getBoundingClientRect(),{top:u,height:k}=l.getBoundingClientRect();u<r?l.scrollIntoView(!0):u+k>r+i&&l.scrollIntoView(!1)},{immediate:!0})}),()=>{var p,l,r;return c("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":t.value.sidebarIcon===!1}]},[(p=s.top)==null?void 0:p.call(s),((l=s.default)==null?void 0:l.call(s))||c(ji,{config:e.value}),(r=s.bottom)==null?void 0:r.call(s)])}}}),bp=M({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:s}){const a=js(),t=hn(),e=bn(),o=cn(),{isMobile:p,isPC:l}=Ot(),[r,i]=ft(!1),[u,k]=ft(!1),d=yp(),h=U(!1),v=_(()=>n.noNavbar||e.value.navbar===!1||o.value.navbar===!1?!1:!!(t.value.title||o.value.logo||o.value.repo||o.value.navbar)),w=_(()=>n.noSidebar?!1:e.value.sidebar!==!1&&d.value.length!==0&&!e.value.home),E=_(()=>n.noToc||e.value.home?!1:e.value.toc||o.value.toc!==!1&&e.value.toc!==!1),b={x:0,y:0},L=A=>{b.x=A.changedTouches[0].clientX,b.y=A.changedTouches[0].clientY},y=A=>{const J=A.changedTouches[0].clientX-b.x,V=A.changedTouches[0].clientY-b.y;Math.abs(J)>Math.abs(V)*1.5&&Math.abs(J)>40&&(J>0&&b.x<=80?i(!0):i(!1))},x=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let j=0;return Cn("scroll",Um(()=>{const A=x();A<=58||A<j?h.value=!1:j+200<A&&!r.value&&(h.value=!0),j=A},300,!0)),en(p,A=>{A||i(!1)}),mn(()=>{const A=tp(document.body);en(r,V=>{A.value=V});const J=a.afterEach(()=>{i(!1)});ga(()=>{A.value=!1,J()})}),()=>c(ss("GlobalEncrypt")?ts("GlobalEncrypt"):Fr,()=>c("div",{class:["theme-container",{"no-navbar":!v.value,"no-sidebar":!w.value&&!(s.sidebar||s.sidebarTop||s.sidebarBottom),"has-toc":E.value,"hide-navbar":h.value,"sidebar-collapsed":!p.value&&!l.value&&u.value,"sidebar-open":p.value&&r.value},n.containerClass,e.value.containerClass||""],onTouchStart:L,onTouchEnd:y},[v.value?c(hf,{onToggleSidebar:()=>i()},{startBefore:()=>{var A;return(A=s.navbarStartBefore)==null?void 0:A.call(s)},startAfter:()=>{var A;return(A=s.navbarStartAfter)==null?void 0:A.call(s)},centerBefore:()=>{var A;return(A=s.navbarCenterBefore)==null?void 0:A.call(s)},centerAfter:()=>{var A;return(A=s.navbarCenterAfter)==null?void 0:A.call(s)},endBefore:()=>{var A;return(A=s.navbarEndBefore)==null?void 0:A.call(s)},endAfter:()=>{var A;return(A=s.navbarEndAfter)==null?void 0:A.call(s)},screenTop:()=>{var A;return(A=s.navScreenTop)==null?void 0:A.call(s)},screenBottom:()=>{var A;return(A=s.navScreenBottom)==null?void 0:A.call(s)}}):null,c(na,{name:"fade"},()=>r.value?c("div",{class:"vp-sidebar-mask",onClick:()=>i(!1)}):null),c(na,{name:"fade"},()=>p.value?null:c("div",{class:"toggle-sidebar-wrapper",onClick:()=>k()},c("span",{class:["arrow",u.value?"end":"start"]}))),c(vf,{},{...s.sidebar?{default:()=>s.sidebar()}:{},top:()=>{var A;return(A=s.sidebarTop)==null?void 0:A.call(s)},bottom:()=>{var A;return(A=s.sidebarBottom)==null?void 0:A.call(s)}}),s.default(),c(Z2)]))}}),dn=M({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:s}){const a=e=>{e.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,e.style.transform="translateY(-20px)",e.style.opacity="0"},t=e=>{e.style.transform="translateY(0)",e.style.opacity="1"};return()=>c(n.type==="single"?na:Hd,{name:"drop",appear:n.appear,onAppear:a,onAfterAppear:t,onEnter:a,onAfterEnter:t,onBeforeLeave:a},()=>s.default())}});const bo=({custom:n})=>c(Lr,{class:["theme-hope-content",{custom:n}]});bo.displayName="MarkdownContent",bo.props={custom:Boolean};var _p=bo;const Vi=()=>c(on,{name:"author"},()=>c("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Vi.displayName="AuthorIcon";const Ni=()=>c(on,{name:"calendar"},()=>c("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Ni.displayName="CalendarIcon";const $i=()=>c(on,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));$i.displayName="CategoryIcon";const Hi=()=>c(on,{name:"print"},()=>c("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Hi.displayName="PrintIcon";const Fi=()=>c(on,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Fi.displayName="TagIcon";const zi=()=>c(on,{name:"timer"},()=>c("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));zi.displayName="TimerIcon";const Gi=()=>c(on,{name:"word"},()=>[c("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),c("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Gi.displayName="WordIcon";const ea=()=>{const n=cn();return _(()=>n.value.metaLocales)};var yf=M({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const s=ea();return()=>n.author.length?c("span",{class:"page-author-info","aria-label":`${s.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[c(Vi),c("span",n.author.map(a=>a.url?c("a",{class:"page-author-item",href:a.url,target:"_blank",rel:"noopener noreferrer"},a.name):c("span",{class:"page-author-item"},a.name))),c("span",{property:"author",content:n.author.map(a=>a.name).join(", ")})]):null}}),bf=M({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const s=js(),a=hn(),t=ea(),e=(o,p="")=>{p&&a.value.path!==p&&(o.preventDefault(),s.push(p))};return()=>n.category.length?c("span",{class:"page-category-info","aria-label":`${t.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[c($i),n.category.map(({name:o,path:p})=>c("span",{class:["page-category-item",{[`category${we(o,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:l=>e(l,p)},o)),c("meta",{property:"articleSection",content:n.category.map(({name:o})=>o).join(",")})]):null}}),_f=M({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const s=Zo(),a=ea();return()=>n.date?c("span",{class:"page-date-info","aria-label":`${a.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[c(Ni),c("span",c(ve,()=>n.localizedDate||n.date.toLocaleDateString(s.value))),c("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),wf=M({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const s=ea();return()=>n.isOriginal?c("span",{class:"page-original-info"},s.value.origin):null}}),Ef=M({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const s=ea(),a=_(()=>{if(!n.readingTime)return null;const{minutes:t}=n.readingTime;return t<1?"PT1M":`PT${Math.round(t)}M`});return()=>{var t,e;return(t=n.readingTimeLocale)!=null&&t.time?c("span",{class:"page-reading-time-info","aria-label":`${s.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[c(zi),c("span",(e=n.readingTimeLocale)==null?void 0:e.time),c("meta",{property:"timeRequired",content:a.value})]):null}}}),Sf=M({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const s=js(),a=hn(),t=ea(),e=(o,p="")=>{p&&a.value.path!==p&&(o.preventDefault(),s.push(p))};return()=>n.tag.length?c("span",{class:"page-tag-info","aria-label":`${t.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[c(Fi),n.tag.map(({name:o,path:p})=>c("span",{class:["page-tag-item",{[`tag${we(o,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:l=>e(l,p)},o)),c("meta",{property:"keywords",content:n.tag.map(({name:o})=>o).join(",")})]):null}}),Af=M({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const s=ea();return()=>{var a,t,e;return(a=n.readingTimeLocale)!=null&&a.words?c("span",{class:"page-word-info","aria-label":`${s.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[c(Gi),c("span",(t=n.readingTimeLocale)==null?void 0:t.words),c("meta",{property:"wordCount",content:(e=n.readingTime)==null?void 0:e.words})]):null}}}),qi=M({name:"PageInfo",components:{AuthorInfo:yf,CategoryInfo:bf,DateInfo:_f,OriginalInfo:wf,PageViewInfo:()=>null,ReadingTimeInfo:Ef,TagInfo:Sf,WordInfo:Af},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const s=ya();return()=>n.items?c("div",{class:"page-info"},n.items.map(a=>c(ts(`${a}Info`),{...n.info,pure:s.value}))):null}}),Lf=M({name:"PrintButton",setup(){const n=ta(),s=cn();return()=>n.value.print===!1?null:c("button",{type:"button",class:"print-button",title:s.value.metaLocales.print,onClick:()=>{window.print()}},c(Hi))}});const xf=({title:n,level:s,slug:a})=>c(On,{to:`#${a}`,class:["vp-toc-link",`level${s}`]},()=>n),_o=(n,s)=>{const a=Vs();return n.length&&s>0?c("ul",{class:"vp-toc-list"},n.map(t=>{const e=_o(t.children,s-1);return[c("li",{class:["vp-toc-item",{active:a.hash===`#${t.slug}`}]},xf(t)),e?c("li",e):null]})):null};var Ji=M({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:s}){const a=Vs(),t=hn(),e=ea(),[o,p]=ft(),l=Tn(),r=U("-1.7rem"),i=k=>{var d;(d=l.value)==null||d.scrollTo({top:k,behavior:"smooth"})},u=()=>{if(l.value){const k=document.querySelector(".vp-toc-item.active");k?r.value=`${k.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:r.value="-1.7rem"}else r.value="-1.7rem"};return mn(()=>{en(()=>a.hash,k=>{if(l.value){const d=document.querySelector(`#toc a.toc-link[href$="${k}"]`);if(!d)return;const{top:h,height:v}=l.value.getBoundingClientRect(),{top:w,height:E}=d.getBoundingClientRect();w<h?i(l.value.scrollTop+w-h):w+E>h+v&&i(l.value.scrollTop+w+E-h-v)}}),en(()=>a.fullPath,u,{flush:"post",immediate:!0})}),()=>{var d,h;const k=n.items.length?_o(n.items,n.headerDepth):t.value.headers?_o(t.value.headers,n.headerDepth):null;return k?c("div",{class:"vp-toc-placeholder"},[c("aside",{id:"toc"},[(d=s.before)==null?void 0:d.call(s),c("div",{class:"vp-toc-header",onClick:()=>{p()}},[e.value.toc,c(Lf),c("div",{class:["arrow",o.value?"down":"end"]})]),c("div",{class:["vp-toc-wrapper",o.value?"open":""],ref:l},[k,c("div",{class:"vp-toc-marker",style:{top:r.value}})]),(h=s.after)==null?void 0:h.call(s)])]):null}}}),wp=M({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const s=hn(),a=cn(),t=Tn(),e=({target:o})=>{const p=document.querySelector(o.hash);if(p){const l=()=>{p.removeAttribute("tabindex"),p.removeEventListener("blur",l)};p.setAttribute("tabindex","-1"),p.addEventListener("blur",l),p.focus(),window.scrollTo(0,0)}};return mn(()=>{en(()=>s.value.path,()=>t.value.focus())}),()=>[c("span",{ref:t,tabindex:"-1"}),c("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:e},a.value.routeLocales.skipToContent)]}});let Ze=null,Ua=null;const Cf={wait:()=>Ze,pending:()=>{Ze=new Promise(n=>{Ua=n})},resolve:()=>{Ua==null||Ua(),Ze=null,Ua=null}},Wi=()=>Cf;var If=M({name:"FadeSlideY",slots:Object,setup(n,{slots:s}){const{resolve:a,pending:t}=Wi();return()=>c(na,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:a,onBeforeLeave:t},()=>{var e;return(e=s.default)==null?void 0:e.call(s)})}});const Tf=(n,s)=>{const a=n.replace(s,"/").split("/"),t=[];let e=Ko(s);return a.forEach((o,p)=>{p!==a.length-1?(e+=`${o}/`,t.push({link:e,name:o||"Home"})):o!==""&&(e+=o,t.push({link:e,name:o}))}),t},Ki=(n,{slots:s})=>{var k,d;const{bgImage:a,bgImageDark:t,bgImageStyle:e,color:o,description:p,image:l,imageDark:r,header:i,features:u=[]}=n;return c("div",{class:"vp-feature-wrapper"},[a?c("div",{class:["vp-feature-bg",{light:t}],style:[{"background-image":`url(${a})`},e]}):null,t?c("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${t})`},e]}):null,c("div",{class:"vp-feature",style:o?{color:o}:{}},[((k=s.image)==null?void 0:k.call(s,n))||[l?c("img",{class:["vp-feature-image",{light:r}],src:En(l),alt:""}):null,r?c("img",{class:"vp-feature-image dark",src:En(r),alt:""}):null],((d=s.info)==null?void 0:d.call(s,n))||[i?c("h2",{class:"vp-feature-header"},i):null,p?c("p",{class:"vp-feature-description",innerHTML:p}):null],u.length?c("div",{class:"vp-features"},u.map(({icon:h,title:v,details:w,link:E})=>{const b=[c("h3",{class:"vp-feature-title"},[c(zn,{icon:h}),c("span",{innerHTML:v})]),c("p",{class:"vp-feature-details",innerHTML:w})];return E?Ma(E)?c("a",{class:"vp-feature-item link",href:E,"aria-label":v,target:"_blank"},b):c(On,{class:"vp-feature-item link",to:E,"aria-label":v},()=>b):c("div",{class:"vp-feature-item"},b)})):null])])};Ki.displayName="FeaturePanel";var Zc=Ki,Of=M({name:"HeroInfo",slots:Object,setup(n,{slots:s}){const a=bn(),t=Ga(),e=_(()=>a.value.heroFullScreen??!1),o=_(()=>{const{heroText:i,tagline:u}=a.value;return{text:i??t.value.title??"Hello",tagline:u??t.value.description??"",isFullScreen:e.value}}),p=_(()=>{const{heroText:i,heroImage:u,heroImageDark:k,heroAlt:d,heroImageStyle:h}=a.value;return{image:u?En(u):null,imageDark:k?En(k):null,heroStyle:h,alt:d||i||"",isFullScreen:e.value}}),l=_(()=>{const{bgImage:i,bgImageDark:u,bgImageStyle:k}=a.value;return{image:Pn(i)?En(i):null,imageDark:Pn(u)?En(u):null,bgStyle:k,isFullScreen:e.value}}),r=_(()=>a.value.actions??[]);return()=>{var i,u,k;return c("header",{class:["vp-hero-info-wrapper",{fullscreen:e.value}]},[((i=s.heroBg)==null?void 0:i.call(s,l.value))||[l.value.image?c("div",{class:["vp-hero-mask",{light:l.value.imageDark}],style:[{"background-image":`url(${l.value.image})`},l.value.bgStyle]}):null,l.value.imageDark?c("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${l.value.imageDark})`},l.value.bgStyle]}):null],c("div",{class:"vp-hero-info"},[((u=s.heroImage)==null?void 0:u.call(s,p.value))||c(dn,{appear:!0,type:"group"},()=>[p.value.image?c("img",{key:"light",class:["vp-hero-image",{light:p.value.imageDark}],style:p.value.heroStyle,src:p.value.image,alt:p.value.alt}):null,p.value.imageDark?c("img",{key:"dark",class:"vp-hero-image dark",style:p.value.heroStyle,src:p.value.imageDark,alt:p.value.alt}):null]),((k=s.heroInfo)==null?void 0:k.call(s,o.value))??c("div",{class:"vp-hero-infos"},[o.value.text?c(dn,{appear:!0,delay:.04},()=>c("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?c(dn,{appear:!0,delay:.08},()=>c("p",{id:"main-description",innerHTML:o.value.tagline})):null,r.value.length?c(dn,{appear:!0,delay:.12},()=>c("p",{class:"vp-hero-actions"},r.value.map(d=>c(Kn,{class:["vp-hero-action",d.type||"default"],config:d,noExternalLinkIcon:!0},d.icon?{before:()=>c(zn,{icon:d.icon})}:{})))):null])])])}}});const Ui=(n,{slots:s})=>{var d,h,v;const{bgImage:a,bgImageDark:t,bgImageStyle:e,color:o,description:p,image:l,imageDark:r,header:i,highlights:u=[],type:k="un-order"}=n;return c("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[a?c("div",{class:["vp-highlight-bg",{light:t}],style:[{"background-image":`url(${a})`},e]}):null,t?c("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${t})`},e]}):null,c("div",{class:"vp-highlight"},[((d=s.image)==null?void 0:d.call(s,n))||[l?c("img",{class:["vp-highlight-image",{light:r}],src:En(l),alt:""}):null,r?c("img",{class:"vp-highlight-image dark",src:En(r),alt:""}):null],((h=s.info)==null?void 0:h.call(s,n))||[c("div",{class:"vp-highlight-info-wrapper"},c("div",{class:"vp-highlight-info"},[i?c("h2",{class:"vp-highlight-header",innerHTML:i}):null,p?c("p",{class:"vp-highlight-description",innerHTML:p}):null,((v=s.highlights)==null?void 0:v.call(s,u))||c(k==="order"?"ol":k==="no-order"?"dl":"ul",{class:"vp-highlights"},u.map(({icon:w,title:E,details:b,link:L})=>{const y=[c(k==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[w?c(zn,{class:"vp-highlight-icon",icon:w}):null,c("span",{innerHTML:E})]),b?c(k==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:b}):null];return c(k==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:L}]},L?Ma(L)?c("a",{class:"vp-highlight-item link",href:L,"aria-label":E,target:"_blank"},y):c(On,{class:"vp-highlight-item link",to:L,"aria-label":E},()=>y):c("div",{class:"vp-highlight-item"},y))}))]))]])])};Ui.displayName="HighlightPanel";var Pf=Ui,Bf=M({name:"HomePage",slots:Object,setup(n,{slots:s}){const a=ya(),t=bn(),e=_(()=>{const{features:p}=t.value;return ho(p)?p:null}),o=_(()=>{const{highlights:p}=t.value;return ho(p)?p:null});return()=>{var p,l,r,i;return c("main",{id:"main-content",class:["vp-project-home ",{pure:a.value}],"aria-labelledby":t.value.heroText===null?"":"main-title"},[(p=s.top)==null?void 0:p.call(s),c(Of),((l=o.value)==null?void 0:l.map(u=>"features"in u?c(Zc,u):c(Pf,u)))||(e.value?c(dn,{appear:!0,delay:.24},()=>c(Zc,{features:e.value})):null),(r=s.center)==null?void 0:r.call(s),c(dn,{appear:!0,delay:.32},()=>c(_p)),(i=s.bottom)==null?void 0:i.call(s)])}}}),Df=M({name:"BreadCrumb",setup(){const n=hn(),s=ms(),a=bn(),t=cn(),e=Tn([]),o=_(()=>(a.value.breadcrumb||a.value.breadcrumb!==!1&&t.value.breadcrumb!==!1)&&e.value.length>1),p=_(()=>a.value.breadcrumbIcon||a.value.breadcrumbIcon!==!1&&t.value.breadcrumbIcon!==!1),l=()=>{const r=Tf(n.value.path,s.value).map(({link:i,name:u})=>{const{path:k,meta:d}=qa(i);return d?{title:d[vn.shortTitle]||d[vn.title]||u,icon:d[vn.icon],path:k}:null}).filter(i=>i!==null);r.length>1&&(e.value=r)};return mn(()=>{en(()=>n.value.path,l,{immediate:!0})}),()=>c("nav",{class:["vp-breadcrumb",{disable:!o.value}]},o.value?c("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},e.value.map((r,i)=>c("li",{class:{"is-active":e.value.length-1===i},property:"itemListElement",typeof:"ListItem"},[c(On,{to:r.path,property:"item",typeof:"WebPage"},()=>[p.value?c(zn,{icon:r.icon}):null,c("span",{property:"name"},r.title||"Unknown")]),c("meta",{property:"position",content:i+1})]))):[])}});const Xc=n=>n===!1||xt(n)?n:Pn(n)?Oa(n,!0):null,wo=(n,s,a)=>{const t=n.findIndex(e=>e.link===s);if(t!==-1){const e=n[t+a];return e!=null&&e.link?e:null}for(const e of n)if("children"in e){const o=wo(e.children,s,a);if(o)return o}return null};var Rf=M({name:"PageNav",setup(){const n=cn(),s=bn(),a=yp(),t=hn(),e=Tt(),o=_(()=>{const l=Xc(s.value.prev);return l===!1?null:l||(n.value.prevLink===!1?null:wo(a.value,t.value.path,-1))}),p=_(()=>{const l=Xc(s.value.next);return l===!1?null:l||(n.value.nextLink===!1?null:wo(a.value,t.value.path,1))});return Cn("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?p.value&&(e(p.value.link),l.preventDefault()):l.key==="ArrowLeft"&&o.value&&(e(o.value.link),l.preventDefault()))}),()=>o.value||p.value?c("nav",{class:"vp-page-nav"},[o.value?c(Kn,{class:"prev",config:o.value},()=>{var l,r;return[c("div",{class:"hint"},[c("span",{class:"arrow start"}),n.value.metaLocales.prev]),c("div",{class:"link"},[c(zn,{icon:(l=o.value)==null?void 0:l.icon}),(r=o.value)==null?void 0:r.text])]}):null,p.value?c(Kn,{class:"next",config:p.value},()=>{var l,r;return[c("div",{class:"hint"},[n.value.metaLocales.next,c("span",{class:"arrow end"})]),c("div",{class:"link"},[(l=p.value)==null?void 0:l.text,c(zn,{icon:(r=p.value)==null?void 0:r.icon})])]}):null]):null}});const Mf={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},jf=({docsRepo:n,docsBranch:s,docsDir:a,filePathRelative:t,editLinkPattern:e})=>{if(!t)return null;const o=ip(n);let p;return e?p=e:o!==null&&(p=Mf[o]),p?p.replace(/:repo/u,aa(n)?n:`https://github.com/${n}`).replace(/:branch/u,s).replace(/:path/u,kr(`${Ko(a)}/${t}`)):null},Vf=()=>{const n=cn(),s=hn(),a=bn();return _(()=>{const{repo:t,docsRepo:e=t,docsBranch:o="main",docsDir:p="",editLink:l,editLinkPattern:r=""}=n.value;if(!(a.value.editLink??l??!0)||!e)return null;const i=jf({docsRepo:e,docsBranch:o,docsDir:p,editLinkPattern:r,filePathRelative:s.value.filePathRelative});return i?{text:n.value.metaLocales.editLink,link:i}:null})},Nf=()=>{const n=Ga(),s=cn(),a=hn(),t=bn();return _(()=>{var e,o;return!(t.value.lastUpdated??s.value.lastUpdated??!0)||!((e=a.value.git)!=null&&e.updatedTime)?null:new Date((o=a.value.git)==null?void 0:o.updatedTime).toLocaleString(n.value.lang)})},$f=()=>{const n=cn(),s=hn(),a=bn();return _(()=>{var t;return a.value.contributors??n.value.contributors??!0?((t=s.value.git)==null?void 0:t.contributors)??null:null})};var Hf=M({name:"PageTitle",setup(){const n=hn(),s=bn(),a=cn(),{info:t,items:e}=G2();return()=>c("div",{class:"vp-page-title"},[c("h1",[a.value.titleIcon===!1?null:c(zn,{icon:s.value.icon}),n.value.title]),c(qi,{info:t.value,...e.value===null?{}:{items:e.value}}),c("hr")])}});const Qi=()=>c(on,{name:"edit"},()=>[c("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),c("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Qi.displayName="EditIcon";var Ff=M({name:"PageMeta",setup(){const n=cn(),s=Vf(),a=Nf(),t=$f();return()=>{const{metaLocales:e}=n.value;return c("footer",{class:"page-meta"},[s.value?c("div",{class:"meta-item edit-link"},c(Kn,{class:"label",config:s.value},{before:()=>c(Qi)})):null,c("div",{class:"meta-item git-info"},[a.value?c("div",{class:"update-time"},[c("span",{class:"label"},`${e.lastUpdated}: `),c(ve,()=>c("span",{class:"info"},a.value))]):null,t.value&&t.value.length?c("div",{class:"contributors"},[c("span",{class:"label"},`${e.contributors}: `),t.value.map(({email:o,name:p},l)=>[c("span",{class:"contributor",title:`email: ${o}`},p),l!==t.value.length-1?",":""])]):null])])}}}),zf=M({name:"NormalPage",slots:Object,setup(n,{slots:s}){const a=bn(),{isDarkmode:t}=Pt(),e=cn(),o=_(()=>a.value.toc||a.value.toc!==!1&&e.value.toc!==!1);return()=>c("main",{id:"main-content",class:"vp-page"},c(ss("LocalEncrypt")?ts("LocalEncrypt"):Fr,()=>{var p,l,r,i;return[(p=s.top)==null?void 0:p.call(s),a.value.cover?c("div",{class:"page-cover"},c("img",{src:En(a.value.cover),alt:"","no-view":""})):null,c(Df),c(Hf),o.value?c(Ji,{headerDepth:a.value.headerDepth??e.value.headerDepth??2},{before:()=>{var u;return(u=s.tocBefore)==null?void 0:u.call(s)},after:()=>{var u;return(u=s.tocAfter)==null?void 0:u.call(s)}}):null,(l=s.contentBefore)==null?void 0:l.call(s),c(_p),(r=s.contentAfter)==null?void 0:r.call(s),c(Ff),c(Rf),ss("CommentService")?c(ts("CommentService"),{darkmode:t.value}):null,(i=s.bottom)==null?void 0:i.call(s)]}))}}),Gf=M({name:"Layout",slots:Object,setup(n,{slots:s}){const a=ta(),t=cn(),e=hn(),o=bn(),{isMobile:p}=Ot(),l=_(()=>{var r,i;return((r=t.value.blog)==null?void 0:r.sidebarDisplay)||((i=a.value.blog)==null?void 0:i.sidebarDisplay)||"mobile"});return()=>[c(wp),c(bp,{},{default:()=>{var r;return((r=s.default)==null?void 0:r.call(s))||(o.value.home?c(Bf):c(If,()=>c(zf,{key:e.value.path},{top:()=>{var i;return(i=s.top)==null?void 0:i.call(s)},bottom:()=>{var i;return(i=s.bottom)==null?void 0:i.call(s)},contentBefore:()=>{var i;return(i=s.contentBefore)==null?void 0:i.call(s)},contentAfter:()=>{var i;return(i=s.contentAfter)==null?void 0:i.call(s)},tocBefore:()=>{var i;return(i=s.tocBefore)==null?void 0:i.call(s)},tocAfter:()=>{var i;return(i=s.tocAfter)==null?void 0:i.call(s)}})))},...l.value==="none"?{}:{navScreenBottom:()=>c(ts("BloggerInfo"))},...!p.value&&l.value==="always"?{sidebar:()=>c(ts("BloggerInfo"))}:{}})]}}),qf=M({name:"NotFoundHint",setup(){const n=cn(),s=()=>{const a=n.value.routeLocales.notFoundMsg;return a[Math.floor(Math.random()*a.length)]};return()=>c("div",{class:"not-found-hint"},[c("p",{class:"error-code"},"404"),c("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),c("p",{class:"error-hint"},s())])}}),Jf=M({name:"NotFound",slots:Object,setup(n,{slots:s}){const a=js(),t=ms(),e=cn();return()=>[c(wp),c(bp,{noSidebar:!0},()=>{var o;return c("main",{id:"main-content",class:"vp-page not-found"},((o=s.default)==null?void 0:o.call(s))||[c(qf),c("div",{class:"actions"},[c("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),c("button",{type:"button",class:"action-button",onClick:()=>{a.push(e.value.home??t.value)}},e.value.routeLocales.home)])])})]}});const Wf={Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>'},Kf={category:{"/":{path:"/category/",map:{个人简介:{path:"/category/个人简介/",indexes:[0]},JavaSE:{path:"/category/javase/",indexes:[1,2,3,4,5,6,7,8,9,10,11,12]},JavaWeb:{path:"/category/javaweb/",indexes:[13,14,15]},Maven:{path:"/category/maven/",indexes:[16,14]},MyBatis:{path:"/category/mybatis/",indexes:[17,18,19,20,21,22,23]},JDBC:{path:"/category/jdbc/",indexes:[17]},lombok:{path:"/category/lombok/",indexes:[24]},MyBatisPlus:{path:"/category/mybatisplus/",indexes:[25,26,27]},Spring:{path:"/category/spring/",indexes:[28,29,30,31]},Ioc:{path:"/category/ioc/",indexes:[28,29]},DI:{path:"/category/di/",indexes:[28,29]},SpringBoot:{path:"/category/springboot/",indexes:[32,33,34,35,36]},SpringBoot案例:{path:"/category/springboot案例/",indexes:[37,38,39,40]},文件存储:{path:"/category/文件存储/",indexes:[39]},阿里云OSS:{path:"/category/阿里云oss/",indexes:[39]},Cookie:{path:"/category/cookie/",indexes:[40]},Session:{path:"/category/session/",indexes:[40]},令牌技术:{path:"/category/令牌技术/",indexes:[40]},AOP:{path:"/category/aop/",indexes:[34]},SpringCloud:{path:"/category/springcloud/",indexes:[41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]},Enreka:{path:"/category/enreka/",indexes:[58]},Nacos:{path:"/category/nacos/",indexes:[56]},Feign:{path:"/category/feign/",indexes:[50]},Gateway:{path:"/category/gateway/",indexes:[51]},Docker:{path:"/category/docker/",indexes:[52]},RabbitMQ:{path:"/category/rabbitmq/",indexes:[53]},ElasticSearch:{path:"/category/elasticsearch/",indexes:[42,54,55]},SpringMVC:{path:"/category/springmvc/",indexes:[59,60,61]},SSM:{path:"/category/ssm/",indexes:[60]},算法:{path:"/category/算法/",indexes:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121]},计算机网络:{path:"/category/计算机网络/",indexes:[122,123,124,125,126,127,128]},数据结构:{path:"/category/数据结构/",indexes:[129,130,131,132,133]},操作系统:{path:"/category/操作系统/",indexes:[134,135,136,137,138]},SQL基础:{path:"/category/sql基础/",indexes:[139,140,141,142,143,144]},"Front End":{path:"/category/front-end/",indexes:[145,146,147,148]},CSS:{path:"/category/css/",indexes:[145,149,150,151]},HTML:{path:"/category/html/",indexes:[146,152,153,154]},JavaScript:{path:"/category/javascript/",indexes:[147,155,156,157,158,159]},Vue:{path:"/category/vue/",indexes:[148,160,161,162,163,164,165,166]},使用指南:{path:"/category/使用指南/",indexes:[167,168,169]},项目:{path:"/category/项目/",indexes:[170,171,172,173]},汇客CRM:{path:"/category/汇客crm/",indexes:[171,174,175]},瑞吉外卖:{path:"/category/瑞吉外卖/",indexes:[173,176,177,178,179,180,181,182,183]},苍穹外卖:{path:"/category/苍穹外卖/",indexes:[184,172,185,186,187,188,189,190,191,192,193,194,195]},天机学堂:{path:"/category/天机学堂/",indexes:[170,196]},Git:{path:"/category/git/",indexes:[197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212]},Markdown:{path:"/category/markdown/",indexes:[213,214]},数组:{path:"/category/数组/",indexes:[104,105,107,108,109,110]},链表:{path:"/category/链表/",indexes:[97,98,99,100,101,102,103,111,112]},哈希表:{path:"/category/哈希表/",indexes:[86,87,88,89,90,91,92,93,94,113]},字符串:{path:"/category/字符串/",indexes:[79,80,81,82,83,84,85,114]},双指针法:{path:"/category/双指针法/",indexes:[115]},双指针:{path:"/category/双指针/",indexes:[69,70,71,72,73,74,75,76,77,78]},栈与队列:{path:"/category/栈与队列/",indexes:[62,63,64,65,66,67,68,116]},二叉树:{path:"/category/二叉树/",indexes:[117]},回溯算法:{path:"/category/回溯算法/",indexes:[118]},贪心算法:{path:"/category/贪心算法/",indexes:[119]},动态规划:{path:"/category/动态规划/",indexes:[120]},单调栈:{path:"/category/单调栈/",indexes:[121]},中间件与其他专业技能:{path:"/category/中间件与其他专业技能/",indexes:[215]},DDL:{path:"/category/ddl/",indexes:[141]},DML:{path:"/category/dml/",indexes:[142]},DQL:{path:"/category/dql/",indexes:[143]},SQL进阶:{path:"/category/sql进阶/",indexes:[216,217]},SQL运维:{path:"/category/sql运维/",indexes:[218,219]},Linux:{path:"/category/linux/",indexes:[183]},Redis:{path:"/category/redis/",indexes:[220]},数据库:{path:"/category/数据库/",indexes:[221,222,223,224]}}}},tag:{"/":{path:"/tag/",map:{个人简介:{path:"/tag/个人简介/",indexes:[0]},宽带:{path:"/tag/宽带/",indexes:[225]},禁用:{path:"/tag/禁用/",indexes:[169]},页面配置:{path:"/tag/页面配置/",indexes:[167]},使用指南:{path:"/tag/使用指南/",indexes:[167]},资源整合:{path:"/tag/资源整合/",indexes:[226]}}}}},Yi=["/intro.html","/BackEnd/JavaSE/Javase01.html","/BackEnd/JavaSE/Javase02.html","/BackEnd/JavaSE/Javase03.html","/BackEnd/JavaSE/Javase04.html","/BackEnd/JavaSE/Javase05.html","/BackEnd/JavaSE/Javase06.html","/BackEnd/JavaSE/Javase07.html","/BackEnd/JavaSE/Javase08.html","/BackEnd/JavaSE/Javase09.html","/BackEnd/JavaSE/Javase10.html","/BackEnd/JavaSE/Javase11.html","/BackEnd/JavaSE/Javase12.html","/BackEnd/JavaWeb/","/BackEnd/JavaWeb/javaweb01.html","/BackEnd/JavaWeb/javaweb02.html","/BackEnd/JavaWeb/javaweb03.html","/BackEnd/MyBatis/mybatis01.html","/BackEnd/MyBatis/mybatis02.html","/BackEnd/MyBatis/mybatis04.html","/BackEnd/MyBatis/mybatis05.html","/BackEnd/MyBatis/mybatis06.html","/BackEnd/MyBatis/mybatis07.html","/BackEnd/MyBatis/","/BackEnd/MyBatis/mybatis03.html","/BackEnd/MybatisPlus/mybatisplus01.html","/BackEnd/MybatisPlus/mybatisplus02.html","/BackEnd/MybatisPlus/","/BackEnd/Spring/spring02.html","/BackEnd/Spring/spring01.html","/BackEnd/Spring/spring03.html","/BackEnd/Spring/","/BackEnd/SpringBoot/springboot08.html","/BackEnd/SpringBoot/springboot01.html","/BackEnd/SpringBoot/springboot06.html","/BackEnd/SpringBoot/springboot07.html","/BackEnd/SpringBoot/","/BackEnd/SpringBoot/springboot02.html","/BackEnd/SpringBoot/springboot03.html","/BackEnd/SpringBoot/springboot04.html","/BackEnd/SpringBoot/springboot05.html","/BackEnd/SpringCloud/springcloud17.html","/BackEnd/SpringCloud/springcloud09.html","/BackEnd/SpringCloud/springcloud10.html","/BackEnd/SpringCloud/springcloud11.html","/BackEnd/SpringCloud/springcloud12.html","/BackEnd/SpringCloud/springcloud13.html","/BackEnd/SpringCloud/springcloud14.html","/BackEnd/SpringCloud/springcloud15.html","/BackEnd/SpringCloud/springcloud16.html","/BackEnd/SpringCloud/springcloud03.html","/BackEnd/SpringCloud/springcloud04.html","/BackEnd/SpringCloud/springcloud05.html","/BackEnd/SpringCloud/springcloud06.html","/BackEnd/SpringCloud/springcloud07.html","/BackEnd/SpringCloud/springcloud08.html","/BackEnd/SpringCloud/springcloud02.html","/BackEnd/SpringCloud/","/BackEnd/SpringCloud/springcloud01.html","/BackEnd/SpringMVC/springmvc01.html","/BackEnd/SpringMVC/springmvc02.html","/BackEnd/SpringMVC/","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues01.html","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues02.html","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues03.html","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues04.html","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues05.html","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues06.html","/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues07.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer01.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer02.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer03.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer04.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer05.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer06.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer07.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer08.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer09.html","/ComputerBasics/Algorithm/05DoublePointer/doublePointer10.html","/ComputerBasics/Algorithm/04String/String04.html","/ComputerBasics/Algorithm/04String/String05.html","/ComputerBasics/Algorithm/04String/String06.html","/ComputerBasics/Algorithm/04String/String07.html","/ComputerBasics/Algorithm/04String/String01.html","/ComputerBasics/Algorithm/04String/String02.html","/ComputerBasics/Algorithm/04String/String03.html","/ComputerBasics/Algorithm/03HashTable/hashtable01.html","/ComputerBasics/Algorithm/03HashTable/hashtable02.html","/ComputerBasics/Algorithm/03HashTable/hashtable03.html","/ComputerBasics/Algorithm/03HashTable/hashtable04.html","/ComputerBasics/Algorithm/03HashTable/hashtable05.html","/ComputerBasics/Algorithm/03HashTable/hashtable06.html","/ComputerBasics/Algorithm/03HashTable/hashtable07.html","/ComputerBasics/Algorithm/03HashTable/hashtable08.html","/ComputerBasics/Algorithm/03HashTable/hashtable09.html","/ComputerBasics/Algorithm/12Summary/","/ComputerBasics/Algorithm/12Summary/summary01.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist08.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist02.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist03.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist04.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist05.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist06.html","/ComputerBasics/Algorithm/02LinkedList/linkedlist07.html","/ComputerBasics/Algorithm/01Arrays/arrays04.html","/ComputerBasics/Algorithm/01Arrays/arrays05.html","/ComputerBasics/Algorithm/","/ComputerBasics/Algorithm/01Arrays/","/ComputerBasics/Algorithm/01Arrays/arrays01.html","/ComputerBasics/Algorithm/01Arrays/arrays02.html","/ComputerBasics/Algorithm/01Arrays/arrays03.html","/ComputerBasics/Algorithm/02LinkedList/","/ComputerBasics/Algorithm/02LinkedList/linkedlist01.html","/ComputerBasics/Algorithm/03HashTable/","/ComputerBasics/Algorithm/04String/","/ComputerBasics/Algorithm/05DoublePointer/","/ComputerBasics/Algorithm/06StacksAndQueues/","/ComputerBasics/Algorithm/07BinaryTree/","/ComputerBasics/Algorithm/08BacktrackingAlgorithm/","/ComputerBasics/Algorithm/09GreedyAlgorithm/","/ComputerBasics/Algorithm/10DynamicProgramming/","/ComputerBasics/Algorithm/11MonotonicStack/","/ComputerBasics/ComputerNetwork/01cn/","/ComputerBasics/ComputerNetwork/01cn/cn01.html","/ComputerBasics/ComputerNetwork/01cn/cn02.html","/ComputerBasics/ComputerNetwork/01cn/cn03.html","/ComputerBasics/ComputerNetwork/","/ComputerBasics/ComputerNetwork/computernetword01.html","/ComputerBasics/ComputerNetwork/computernetwork02.html","/ComputerBasics/DataStructure/01DS/","/ComputerBasics/DataStructure/01DS/ds01.html","/ComputerBasics/DataStructure/01DS/ds02_.html","/ComputerBasics/DataStructure/01DS/ds03.html","/ComputerBasics/DataStructure/","/ComputerBasics/OpreatingSystem/OSInterview/","/ComputerBasics/OpreatingSystem/OSInterview/osi01.html","/ComputerBasics/OpreatingSystem/OSInterview/osi02.html","/ComputerBasics/OpreatingSystem/OSInterview/osi03.html","/ComputerBasics/OpreatingSystem/","/Database/SQL/","/Database/SQL/01Basics/","/Database/SQL/01Basics/sql01.html","/Database/SQL/01Basics/sql02.html","/Database/SQL/01Basics/sql03.html","/Database/SQL/01Basics/sql04.html","/FrontEnd/CSS/","/FrontEnd/HTML/","/FrontEnd/JavaScript/","/FrontEnd/Vue/","/FrontEnd/CSS/css01.html","/FrontEnd/CSS/css02.html","/FrontEnd/CSS/css03.html","/FrontEnd/HTML/html01.html","/FrontEnd/HTML/html02.html","/FrontEnd/HTML/html03.html","/FrontEnd/JavaScript/javascript01.html","/FrontEnd/JavaScript/javascript02.html","/FrontEnd/JavaScript/javascript03.html","/FrontEnd/JavaScript/javascript04.html","/FrontEnd/JavaScript/javascript05.html","/FrontEnd/Vue/vue01.html","/FrontEnd/Vue/vue02.html","/FrontEnd/Vue/vue03.html","/FrontEnd/Vue/vue04.html","/FrontEnd/Vue/vue05.html","/FrontEnd/Vue/vue06.html","/FrontEnd/Vue/vue07.html","/Others/Demo/page.html","/Others/Demo/","/Others/Demo/disable.html","/Projects/tjxt/","/Projects/huike/","/Projects/skytakeout/","/Projects/reggietakeout/","/Projects/huike/huike01.html","/Projects/huike/huike02.html","/Projects/reggietakeout/01projectbasic/day01.html","/Projects/reggietakeout/01projectbasic/day02.html","/Projects/reggietakeout/01projectbasic/day03.html","/Projects/reggietakeout/01projectbasic/day04.html","/Projects/reggietakeout/01projectbasic/day05.html","/Projects/reggietakeout/01projectbasic/day06.html","/Projects/reggietakeout/03linux/day01.html","/Projects/reggietakeout/03linux/day02.html","/Projects/skytakeout/skytakeout02.html","/Projects/skytakeout/skytakeout01.html","/Projects/skytakeout/skytakeout03.html","/Projects/skytakeout/skytakeout04.html","/Projects/skytakeout/skytakeout05.html","/Projects/skytakeout/skytakeout06.html","/Projects/skytakeout/skytakeout07.html","/Projects/skytakeout/skytakeout08.html","/Projects/skytakeout/skytakeout09.html","/Projects/skytakeout/skytakeout10.html","/Projects/skytakeout/skytakeout11.html","/Projects/skytakeout/skytakeout12.html","/Projects/tjxt/tjxt01.html","/Tools/Git/01Manual/manual01.html","/Tools/Git/01Manual/manual02.html","/Tools/Git/01Manual/manual03.html","/Tools/Git/02DocumentNotes/documentnotes01.html","/Tools/Git/02DocumentNotes/documentnotes02.html","/Tools/Git/02DocumentNotes/documentnotes03.html","/Tools/Git/02DocumentNotes/documentnotes04.html","/Tools/Git/02DocumentNotes/documentnotes05.html","/Tools/Git/02DocumentNotes/documentnotes06.html","/Tools/Git/02DocumentNotes/documentnotes07.html","/Tools/Git/02DocumentNotes/documentnotes08.html","/Tools/Git/02DocumentNotes/documentnotes09.html","/Tools/Git/02DocumentNotes/documentnotes10.html","/Tools/Git/02DocumentNotes/documentnotes11.html","/Projects/reggietakeout/02git/git01.html","/Tools/Git/","/Tools/MarkDown/","/Tools/MarkDown/markdown01.html","/ComputerBasics/DataStructure/02MO/","/Database/SQL/02Advanced/","/Database/SQL/02Advanced/advanced01.html","/Database/SQL/03OperationAndMaintenance/","/Database/SQL/03OperationAndMaintenance/oam01.html","/Projects/reggietakeout/04Redis/redis01.html","/Database/Basic/Principle/DBInterview/","/Database/Basic/Principle/DBInterview/dbi01.html","/Database/Basic/Principle/DBInterview/dbi02.html","/Database/Basic/Principle/DBInterview/dbi03.html","/Others/BroadBand/","/Tools/Resource/","/ComputerBasics/DataStructure/02MO/mo01.html","/ComputerBasics/DataStructure/02MO/mo02.html","/ComputerBasics/DataStructure/02MO/mo03.html","/Projects/README01.html","/Tools/Git/01Manual/","/Tools/Git/02DocumentNotes/","/slides.html","/BackEnd/JavaSE/","/Database/NoSQL/","/Database/Basic/Language/","/Database/Basic/Principle/","/Projects/reggietakeout/01projectbasic/","/Projects/reggietakeout/02git/","/Projects/reggietakeout/03linux/","/Projects/reggietakeout/04Redis/"],Eo=Tn(Kf);Rs(Eo);const Zi=n=>{const s=hn(),a=bn(),t=ms();return _(()=>{var l;const e=n??((l=a.value.blog)==null?void 0:l.key)??"";if(!e)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!Eo.value[e])throw new Error(`useBlogCategory: key ${e} is invalid`);const o=Eo.value[e][t.value],p={path:o.path,map:{}};for(const r in o.map){const i=o.map[r];p.map[r]={path:i.path,items:[]};for(const u of i.indexes){const{path:k,meta:d}=qa(Yi[u]);p.map[r].items.push({path:k,info:d})}s.value.path===i.path&&(p.currentItems=p.map[r].items)}return p})},Uf={article:{"/":{path:"/article/",indexes:[226,213,167,215,227,228,229,134,135,136,137,221,222,223,224,122,123,124,125,129,230,62,63,64,65,66,67,68,130,131,132,133,138,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,168,169,216,217,218,219,170,196,171,174,175,184,172,185,186,187,188,189,190,191,192,193,194,195,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,231,197,198,199,232,200,201,202,203,204,205,206,207,208,209,210,126,127,128,211,220,32,28,59,60,225,25,26,29,30,233,234,235,236,237,173,238,176,177,178,179,180,181,239,240,182,183,241,16,33,37,38,39,40,34,35,214,17,18,24,19,20,21,22,139,140,141,142,143,144,23,27,31,36,61,13,14,15,145,149,150,151,146,152,153,154,147,155,156,157,158,159,148,160,161,162,163,164,165,166,212,1,2,3,4,5,6,7,8,9,10,11,12,0]}},star:{"/":{path:"/star/",indexes:[226,214,213,167]}},timeline:{"/":{path:"/timeline/",indexes:[215,227,228,229,134,135,136,137,221,222,223,224,122,123,124,125,129,230,62,63,64,65,66,67,68,130,131,132,133,138,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,168,169,216,217,218,219,170,196,171,174,175,226,184,172,185,186,187,188,189,190,191,192,193,194,195,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,231,197,198,199,232,200,201,202,203,204,205,206,207,208,209,210,126,127,128,211,220,32,28,59,60,225,25,26,29,30,233,234,235,236,237,173,238,176,177,178,179,180,181,239,240,182,183,241,16,33,37,38,39,40,34,35,214,17,18,24,19,20,21,22,139,140,141,142,143,144,23,27,31,36,61,13,14,15,145,149,150,151,146,152,153,154,147,155,156,157,158,159,148,160,161,162,163,164,165,166,212,213,1,2,3,4,5,6,7,8,9,10,11,12,167,0]}}},So=Tn(Uf);Rs(So);const Ee=n=>{const s=bn(),a=ms();return _(()=>{var p;const t=n??((p=s.value.blog)==null?void 0:p.key)??"";if(!t)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!So.value[t])throw new Error(`useBlogType: key ${n} is invalid`);const e=So.value[t][a.value],o={path:e.path,items:[]};for(const l of e.indexes){const{path:r,meta:i}=qa(Yi[l]);o.items.push({path:r,info:i})}return o})},Xi=()=>c(on,{name:"lock"},()=>c("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Xi.displayName="LockIcon";var Qf=[];const nu=Symbol.for("categoryMap"),Bt=()=>{const n=yn(nu);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},Yf=()=>{const n=Zi("category");us(nu,n)},Dt=()=>{const n=ta(),s=cn();return _(()=>({...n.value.blog,...s.value.blog}))},su=Symbol.for("tagMap"),Rt=()=>{const n=yn(su);if(!n)throw new Error("useTagMap() is called without provider.");return n},Zf=()=>{const n=Zi("tag");us(su,n)},Xf=n=>{const s=cn();return _(()=>{const{[vn.author]:a}=n.value;return a?vt(a):a===!1?[]:vt(s.value.author,!1)})},ng=n=>{const s=Bt();return _(()=>Wr(n.value[vn.category]).map(a=>({name:a,path:s.value.map[a].path})))},sg=n=>{const s=Rt();return _(()=>Kr(n.value[vn.tag]).map(a=>({name:a,path:s.value.map[a].path})))},ag=n=>_(()=>{const{[vn.date]:s}=n.value;return np(s)}),tg=n=>{const s=Fa(n,"info"),a=Dt(),t=Xf(s),e=ng(s),o=sg(s),p=ag(s),l=vi(),r=_(()=>({author:t.value,category:e.value,date:p.value,localizedDate:s.value[vn.localizedDate]||"",tag:o.value,isOriginal:s.value[vn.isOriginal]||!1,readingTime:s.value[vn.readingTime]||null,readingTimeLocale:s.value[vn.readingTime]&&l.value?gi(s.value[vn.readingTime],l.value):null,pageview:n.path})),i=_(()=>a.value.articleInfo);return{info:r,items:i}},au=Symbol(""),Mt=()=>{const n=yn(au);if(!n)throw new Error("useArticles() is called without provider.");return n},eg=()=>{const n=Ee("article");us(au,n)},tu=Symbol(""),Ep=()=>{const n=yn(tu);if(!n)throw new Error("useStars() is called without provider.");return n},og=()=>{const n=Ee("star");us(tu,n)},eu=Symbol(""),Sp=()=>{const n=yn(eu);if(!n)throw new Error("useTimelines() is called without provider.");return n},pg=()=>{const n=Ee("timeline"),s=_(()=>{const a=[];return n.value.items.forEach(({info:t,path:e})=>{const o=np(t[vn.date]);if(o){const p=o.getFullYear(),l=o.getMonth()+1,r=o.getDate();(!a[0]||a[0].year!==p)&&a.unshift({year:p,items:[]}),a[0].items.push({date:`${l}/${r}`,info:t,path:e})}}),{...n.value,config:a.reverse()}});us(eu,s)},cg=()=>{eg(),Yf(),og(),Zf(),pg()};var lg=M({name:"SocialMedia",setup(){const n=Dt(),s=ya(),a=_(()=>{const t=n.value.medias;return t?va(t).map(([e,o])=>({name:e,icon:Wf[e],url:o})):[]});return()=>a.value.length?c("div",{class:"vp-social-medias"},a.value.map(({name:t,icon:e,url:o})=>c("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":t,...s.value?{}:{"data-balloon-pos":"up"},innerHTML:e}))):null}}),Ap=M({name:"BloggerInfo",setup(){const n=Dt(),s=Ga(),a=cn(),t=Mt(),e=Bt(),o=Rt(),p=Sp(),l=Tt(),r=_(()=>{var d;return n.value.name||((d=vt(a.value.author)[0])==null?void 0:d.name)||s.value.title}),i=_(()=>n.value.avatar||a.value.logo),u=_(()=>a.value.blogLocales),k=_(()=>n.value.intro);return()=>{const{article:d,category:h,tag:v,timeline:w}=u.value,E=[[t.value.path,t.value.items.length,d],[e.value.path,ds(e.value.map).length,h],[o.value.path,ds(o.value.map).length,v],[p.value.path,p.value.items.length,w]];return c("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[c("div",{class:"vp-blogger",...k.value?{style:{cursor:"pointer"},"aria-label":u.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>l(k.value)}:{}},[i.value?c("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:En(i.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,r.value?c("div",{class:"vp-blogger-name",property:"name"},r.value):null,n.value.description?c("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,k.value?c("meta",{property:"url",content:En(k.value)}):null]),c("div",{class:"vp-blog-counts"},E.map(([b,L,y])=>c(On,{class:"vp-blog-count",to:b},()=>[c("div",{class:"count"},L),c("div",y)]))),c(lg)])}}});const Lp=()=>c(on,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Lp.displayName="CategoryIcon";const xp=()=>c(on,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));xp.displayName="TagIcon";const Cp=()=>c(on,{name:"timeline"},()=>c("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Cp.displayName="TimelineIcon";const ou=()=>c(on,{name:"slides"},()=>c("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));ou.displayName="SlideIcon";const pu=()=>c(on,{name:"sticky"},()=>[c("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);pu.displayName="StickyIcon";const Se=()=>c(on,{name:"article"},()=>c("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Se.displayName="ArticleIcon";const cu=()=>c(on,{name:"book"},()=>c("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));cu.displayName="BookIcon";const lu=()=>c(on,{name:"link"},()=>c("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));lu.displayName="LinkIcon";const ru=()=>c(on,{name:"project"},()=>c("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ru.displayName="ProjectIcon";const iu=()=>c(on,{name:"friend"},()=>c("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));iu.displayName="FriendIcon";const Ao=()=>c(on,{name:"slide-down"},()=>c("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ao.displayName="SlideDownIcon";const uu=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});uu.displayName="EmptyIcon";var rg=M({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:s}){const a=Fa(n,"info"),{info:t,items:e}=tg(n);return()=>{var d,h,v;const{[vn.title]:o,[vn.type]:p,[vn.isEncrypted]:l=!1,[vn.cover]:r,[vn.excerpt]:i,[vn.sticky]:u}=a.value,k=t.value;return c("div",{class:"vp-article-wrapper"},c("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((d=s.cover)==null?void 0:d.call(s,{cover:r}))||(r?[c("img",{class:"vp-article-cover",src:En(r),loading:"lazy"}),c("meta",{property:"image",content:En(r)})]:[]),u?c(pu):null,c(On,{to:n.path},()=>{var w;return((w=s.title)==null?void 0:w.call(s,{title:o,isEncrypted:l,type:p}))||c("header",{class:"vp-article-title"},[l?c(Xi):null,p===wi.slide?c(ou):null,c("span",{property:"headline"},o)])}),((h=s.excerpt)==null?void 0:h.call(s,{excerpt:i}))||(i?c("div",{class:"vp-article-excerpt",innerHTML:i}):null),c("hr",{class:"vp-article-hr"}),((v=s.info)==null?void 0:v.call(s,{info:k}))||c(qi,{info:k,...e.value?{items:e.value}:{}})]))}}}),ig=M({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:s}){let a;const t=cn(),e=U(""),o=_(()=>t.value.paginationLocales),p=_(()=>Math.ceil(n.total/n.perPage)),l=_(()=>!!p.value&&p.value!==1),r=_(()=>p.value<7?!1:n.current>4),i=_(()=>p.value<7?!1:n.current<p.value-3),u=_(()=>{const{current:h}=n;let v=1,w=p.value;const E=[];p.value>=7&&(h<=4&&h<p.value-3?(v=1,w=5):h>4&&h>=p.value-3?(w=p.value,v=p.value-4):p.value>7&&(v=h-2,w=h+2));for(let b=v;b<=w;b++)E.push(b);return E}),k=h=>s("updateCurrentPage",h),d=h=>{const v=parseInt(h,10);v<=p.value&&v>0?k(v):a.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/gu,p.value.toString())}`)};return mn(()=>{a=new A1}),()=>c("div",{class:"vp-pagination"},l.value?c("nav",{class:"vp-pagination-list"},[c("div",{class:"vp-pagination-number "},[n.current>1?c("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>k(n.current-1)},o.value.prev):null,r.value?[c("div",{role:"navigation",onClick:()=>k(1)},1),c("div",{class:"ellipsis"},"...")]:null,u.value.map(h=>c("div",{key:h,class:{active:n.current===h},role:"navigation",onClick:()=>k(h)},h)),i.value?[c("div",{class:"ellipsis"},"..."),c("div",{role:"navigation",onClick:()=>k(p.value)},p.value)]:null,n.current<p.value?c("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>k(n.current+1)},o.value.next):null]),c("div",{class:"vp-pagination-nav"},[c("label",{for:"navigation-text"},`${o.value.navigate}: `),c("input",{id:"navigation-text",value:e.value,onInput:({target:h})=>{e.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),d(e.value))}}),c("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>d(e.value)},o.value.action)])]):[])}}),Ip=M({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const s=Vs(),a=js(),t=Dt(),e=U(1),o=_(()=>t.value.articlePerPage||10),p=_(()=>n.items.slice((e.value-1)*o.value,e.value*o.value)),l=async r=>{e.value=r;const i={...s.query};!(i.page===r.toString()||r===1&&!i.page)&&(r===1?delete i.page:i.page=r.toString(),await a.push({path:s.path,query:i}))};return mn(()=>{const{page:r}=s.query;l(r?Number(r):1),en(e,()=>{const i=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,i)},100)})}),()=>c("div",{id:"article-list",class:"vp-article-list",role:"feed"},p.value.length?[...p.value.map(({info:r,path:i},u)=>c(dn,{appear:!0,delay:u*.04},()=>c(rg,{key:i,info:r,path:i}))),c(ig,{current:e.value,perPage:o.value,total:n.items.length,onUpdateCurrentPage:l})]:c(uu))}}),ku=M({name:"CategoryList",setup(){const n=hn(),s=Bt();return()=>c("ul",{class:"vp-category-list"},va(s.value.map).sort(([,a],[,t])=>t.items.length-a.items.length).map(([a,{path:t,items:e}])=>c("li",{class:["vp-category",`vp-category${we(a,9)}`,{active:t===n.value.path}]},c(On,{to:t},()=>[a,c("span",{class:"count"},e.length)]))))}}),du=M({name:"TagList",setup(){const n=bn(),s=Rt(),a=t=>{var e;return t===((e=n.value.blog)==null?void 0:e.name)};return()=>c("ul",{class:"tag-list-wrapper"},va(s.value.map).sort(([,t],[,e])=>e.items.length-t.items.length).map(([t,{path:e,items:o}])=>c("li",{class:["tag",`tag${we(t,9)}`,{active:a(t)}]},c(On,{to:e},()=>[t,c("span",{class:"tag-num"},o.length)]))))}}),ug=M({name:"TimelineList",setup(){const n=cn(),s=Sp(),a=Tt(),t=_(()=>n.value.blogLocales.timeline);return()=>c("div",{class:"timeline-list-wrapper"},[c("div",{class:"timeline-list-title",onClick:()=>a(s.value.path)},[c(Cp),c("span",{class:"num"},s.value.items.length),t.value]),c("hr"),c("div",{class:"timeline-content"},c("ul",{class:"timeline-list"},s.value.config.map(({year:e,items:o},p)=>c(dn,{appear:!0,delay:.08*(p+1)},()=>c("li",[c("h3",{class:"timeline-year"},e),c("ul",{class:"timeline-year-wrapper"},o.map(({date:l,info:r,path:i})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},l),c(On,{class:"timeline-title",to:i},()=>r[vn.title])])))])))))])}});const kg={article:Se,category:Lp,tag:xp,timeline:Cp};var mu=M({name:"InfoList",setup(){const n=cn(),s=Mt(),a=Bt(),t=_(()=>ds(a.value.map).length),e=Ep(),o=Rt(),p=_(()=>ds(o.value.map).length),l=Tt(),r=U("article"),i=_(()=>n.value.blogLocales);return()=>c("div",{class:"vp-blog-infos"},[c("div",{class:"vp-blog-type-switcher"},va(kg).map(([u,k])=>c("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{r.value=u}},c("div",{class:["icon-wrapper",{active:r.value===u}],"aria-label":i.value[u],"data-balloon-pos":"up"},c(k))))),c(dn,()=>r.value==="article"?c("div",{class:"vp-star-article-wrapper"},[c("div",{class:"title",onClick:()=>l(s.value.path)},[c(Se),c("span",{class:"num"},s.value.items.length),i.value.article]),c("hr"),e.value.items.length?c("ul",{class:"vp-star-articles"},e.value.items.map(({info:u,path:k},d)=>c(dn,{appear:!0,delay:.08*(d+1)},()=>c("li",{class:"vp-star-article"},c(On,{to:k},()=>u[vn.title]))))):c("div",{class:"vp-star-article-empty"},i.value.empty.replace("$text",i.value.star))]):r.value==="category"?c("div",{class:"vp-category-wrapper"},[t.value?[c("div",{class:"title",onClick:()=>l(a.value.path)},[c(Lp),c("span",{class:"num"},t.value),i.value.category]),c("hr"),c(dn,{delay:.04},()=>c(ku))]:c("div",{class:"vp-category-empty"},i.value.empty.replace("$text",i.value.category))]):r.value==="tag"?c("div",{class:"vp-tag-wrapper"},[p.value?[c("div",{class:"title",onClick:()=>l(o.value.path)},[c(xp),c("span",{class:"num"},p.value),i.value.tag]),c("hr"),c(dn,{delay:.04},()=>c(du))]:c("div",{class:"vp-tag-empty"},i.value.empty.replace("$text",i.value.tag))]):c(dn,()=>c(ug)))])}}),Ae=M({name:"BlogWrapper",slots:Object,setup(n,{slots:s}){const{isMobile:a}=Ot();return()=>[c(wp),c(bp,{noSidebar:!0,noToc:!0},{default:()=>s.default(),navScreenBottom:()=>c(Ap),...a.value?{sidebar:()=>c(mu)}:{}})]}});const hu=()=>c("aside",{class:"vp-blog-info-wrapper"},[c(dn,()=>c(Ap)),c(dn,{delay:.04},()=>c(mu))]);hu.displayName="InfoPanel";var Le=hu,dg=M({name:"BlogPage",setup(){const n=hn(),s=bn(),a=Bt(),t=Rt();return()=>{const{key:e="",name:o=""}=s.value.blog||{},p=o?e==="category"?a.value.map[o].items:e==="tag"?t.value.map[o].items:[]:[];return c(Ae,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(dn,()=>e==="category"?c(ku):e==="tag"?c(du):null),o?c(dn,{appear:!0,delay:.24},()=>c(Ip,{key:n.value.path,items:p})):null]),c(dn,{delay:.16},()=>c(Le,{key:"blog"}))])))}}});const mg="//theme-hope-assets.vuejs.press/hero/default.jpg";var hg=M({name:"BlogHero",slots:Object,setup(n,{slots:s}){const a=bn(),t=Ga(),e=Tn(),o=_(()=>a.value.heroFullScreen??!1),p=_(()=>{const{heroText:r,heroImage:i,heroImageDark:u,heroAlt:k,heroImageStyle:d,tagline:h}=a.value;return{text:r??t.value.title??"Hello",image:i?En(i):null,imageDark:u?En(u):null,heroStyle:d,alt:k||r||"",tagline:h??"",isFullScreen:o.value}}),l=_(()=>{const{bgImage:r,bgImageDark:i,bgImageStyle:u}=a.value;return{image:Pn(r)?En(r):r===!1?null:mg,imageDark:Pn(i)?En(i):null,bgStyle:u,isFullScreen:o.value}});return()=>{var r,i;return a.value.hero===!1?null:c("div",{ref:e,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!l.value.image}]},[((r=s.heroBg)==null?void 0:r.call(s,l.value))||[l.value.image?c("div",{class:["vp-blog-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?c("div",{class:"vp-blog-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((i=s.heroInfo)==null?void 0:i.call(s,p.value))||[c(dn,{appear:!0,type:"group",delay:.04},()=>[p.value.image?c("img",{key:"light",class:["vp-blog-hero-image",{light:p.value.imageDark}],style:p.value.heroStyle,src:p.value.image,alt:p.value.alt}):null,p.value.imageDark?c("img",{key:"dark",class:"vp-blog-hero-image dark",style:p.value.heroStyle,src:p.value.imageDark,alt:p.value.alt}):null]),c(dn,{appear:!0,delay:.08},()=>p.value.text?c("h1",{class:"vp-blog-hero-title"},p.value.text):null),c(dn,{appear:!0,delay:.12},()=>p.value.tagline?c("p",{class:"vp-blog-hero-description",innerHTML:p.value.tagline}):null)],p.value.isFullScreen?c("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:e.value.clientHeight,behavior:"smooth"})}},[c(Ao),c(Ao)]):null])}}});const fg=["link","article","book","project","friend"];var gg=M({name:"ProjectPanel",components:{ArticleIcon:Se,BookIcon:cu,FriendIcon:iu,LinkIcon:lu,ProjectIcon:ru},props:{items:{type:Array,required:!0}},setup(n){const s=ya(),a=Tt(),t=(e="",o="icon")=>fg.includes(e)?c(ts(`${e}-icon`)):aa(e)?c("img",{class:"vp-project-image",src:e,alt:o}):ye(e)?c("img",{class:"vp-project-image",src:En(e),alt:o}):c(zn,{icon:e});return()=>c("div",{class:"vp-project-panel"},n.items.map(({icon:e,link:o,name:p,desc:l},r)=>c("div",{class:["vp-project-card",{[`project${r%9}`]:!s.value}],onClick:()=>a(o)},[t(e,p),c("div",{class:"vp-project-name"},p),c("div",{class:"vp-project-desc"},l)])))}}),vg=M({name:"BlogHome",setup(){const n=Mt(),s=bn(),a=_(()=>s.value.projects??[]);return()=>c("div",{class:"vp-page vp-blog"},[c(hg),c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[a.value.length?c(dn,{appear:!0,delay:.16},()=>c(gg,{items:a.value})):null,c(dn,{appear:!0,delay:.24},()=>c(Ip,{items:n.value.items}))]),c(dn,{appear:!0,delay:.16},()=>c(Le,{key:"blog"}))]),c(dn,{appear:!0,delay:.28},()=>c(_p))])}});const fu=()=>c(Ae,()=>c(vg));fu.displayName="BlogHomeLayout";var yg=fu,bg=M({name:"ArticleType",setup(){const n=hn(),s=ms(),a=cn(),t=Mt(),e=Ep(),o=_(()=>{const p=a.value.blogLocales;return[{text:p.all,path:t.value.path},{text:p.star,path:e.value.path},...Qf.map(({key:l,path:r})=>({text:p[l],path:r.replace(/^\//,s.value)}))]});return()=>c("ul",{class:"vp-article-type-wrapper"},o.value.map(p=>c("li",{class:["vp-article-type",{active:p.path===n.value.path}]},c(On,{to:p.path},()=>p.text))))}}),_g=M({name:"BlogPage",setup(){const n=Ee(),s=bn(),a=hn(),t=Mt(),e=Ep(),o=_(()=>{const{key:p="",type:l}=s.value.blog||{};return p==="star"?e.value.items:l==="type"&&p?n.value.items:t.value.items});return()=>c(Ae,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(dn,()=>c(bg)),c(dn,{appear:!0,delay:.24},()=>c(Ip,{key:a.value.path,items:o.value}))]),c(dn,{delay:.16},()=>c(Le,{key:"blog"}))])))}}),wg=M({name:"TimelineItems",setup(){const n=Dt(),s=cn(),a=Sp(),t=_(()=>n.value.timeline||s.value.blogLocales.timelineTitle),e=_(()=>a.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>c("div",{class:"timeline-wrapper"},c("ul",{class:"timeline-content"},[c(dn,()=>c("li",{class:"motto"},t.value)),c(Ji,{items:e.value}),a.value.config.map(({year:o,items:p},l)=>c(dn,{appear:!0,delay:.08*(l+1),type:"group"},()=>[c("h3",{key:"title",id:o,class:"timeline-year-title"},c("span",o)),c("li",{key:"content",class:"timeline-year-list"},[c("ul",{class:"timeline-year-wrapper"},p.map(({date:r,info:i,path:u})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},r),c(On,{class:"timeline-title",to:u},()=>i[vn.title])])))])]))]))}});const gu=()=>c(Ae,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(dn,{appear:!0,delay:.24},()=>c(wg))]),c(dn,{delay:.16},()=>c(Le,{key:"blog"}))])));gu.displayName="Timeline";var Eg=gu;N1(n=>{const s=n.t,a=n.I!==!1,t=n.i;return a?{title:s,content:t?()=>[c(zn,{icon:t}),s]:null,order:n.O,index:n.I}:null});const Sg=Qn({enhance:({app:n,router:s})=>{const{scrollBehavior:a}=s.options;s.options.scrollBehavior=async(...t)=>(await Wi().wait(),a(...t)),W2(n),n.component("HopeIcon",zn),n.component("BloggerInfo",Ap)},setup:()=>{K2(),Y2(),cg()},layouts:{Layout:Gf,NotFound:Jf,BlogCategory:dg,BlogHome:yg,BlogType:_g,Timeline:Eg}}),nl=1e3*60*60*24,Ag=(n,s={"/":"Running time: :day days :hour hours :minute minutes :second seconds"},a=!1)=>{const t=(n instanceof Date?n:new Date(n)).getTime();let e="";const o=hn(),p=k1(),l=ms(),r=_(()=>{const i=p.value.getTime()-t,u=new Date(i%nl);return{day:Math.floor(i/nl),hour:u.getHours(),minute:u.getMinutes(),second:u.getSeconds()}});mn(()=>{en(()=>[o.value.path,r.value],()=>{const i=document.querySelector(".vp-footer");if(i){const{day:u,hour:k,minute:d,second:h}=r.value,v=(s[l.value]||s["/"]).replace(":day",u.toString()).replace(":hour",k.toString()).replace(":minute",d.toString()).replace(":second",h.toString());i.innerHTML=`${a?`${i.innerHTML.replace(`<br>${e}`,"")}<br>`:""}${v}`,e=v}},{flush:"post",immediate:!0})})},Lg=Qn({setup(){Ag(new Date("2023-03-20"),{"/":"本站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒"},!0)}}),Yt=[bm,P1,V1,G1,W1,Y1,sh,ph,mh,Ah,Yh,u2,M2,Sg,Lg],xg=JSON.parse(`{"base":"/","lang":"zh-CN","title":"Simeis 147","description":"Simeis 147's Blog","head":[["script",{"type":"text/javascript","src":"/assets/js/51la.js"}]],"locales":{}}`);var Ya=Tn(xg),Cg=N0,Ig=()=>{const n=im({history:Cg(Ko("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(s,a,t)=>t||(s.hash?{el:s.hash}:{top:0})});return n.beforeResolve(async(s,a)=>{if(s.path!==a.path||a===Ps){const t=qa(s.path);if(t.path!==s.path)return t.path;const e=await t.loader();s.meta={...t.meta,_pageChunk:e}}else s.path===a.path&&(s.meta=a.meta)}),n},Tg=n=>{n.component("ClientOnly",ve),n.component("Content",Lr),n.component("RouteLink",On)},Og=(n,s,a)=>{const t=_(()=>s.currentRoute.value.path),e=$o((E,b)=>({get(){return E(),s.currentRoute.value.meta._pageChunk},set(L){s.currentRoute.value.meta._pageChunk=L,b()}})),o=_(()=>ca.resolveLayouts(a)),p=_(()=>ca.resolveRouteLocale(Ya.value.locales,t.value)),l=_(()=>ca.resolveSiteLocaleData(Ya.value,p.value)),r=_(()=>e.value.comp),i=_(()=>e.value.data),u=_(()=>i.value.frontmatter),k=_(()=>ca.resolvePageHeadTitle(i.value,l.value)),d=_(()=>ca.resolvePageHead(k.value,u.value,l.value)),h=_(()=>ca.resolvePageLang(i.value,l.value)),v=_(()=>ca.resolvePageLayout(i.value,o.value)),w={layouts:o,pageData:i,pageComponent:r,pageFrontmatter:u,pageHead:d,pageHeadTitle:k,pageLang:h,pageLayout:v,redirects:Sr,routeLocale:p,routePath:t,routes:ht,siteData:Ya,siteLocaleData:l};return n.provide(Yo,w),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>d.value},$headTitle:{get:()=>k.value},$lang:{get:()=>h.value},$page:{get:()=>i.value},$routeLocale:{get:()=>p.value},$site:{get:()=>Ya.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>En}}),w},Pg=()=>{const n=dm(),s=Zo();let a=[];const t=()=>{n.value.forEach(p=>{const l=Bg(p);l&&a.push(l)})},e=()=>{const p=[];return n.value.forEach(l=>{const r=Dg(l);r&&p.push(r)}),p},o=()=>{document.documentElement.lang=s.value;const p=e();a.forEach((l,r)=>{const i=p.findIndex(u=>l.isEqualNode(u));i===-1?(l.remove(),delete a[r]):p.splice(i,1)}),p.forEach(l=>document.head.appendChild(l)),a=[...a.filter(l=>!!l),...p]};us(fm,o),mn(()=>{t(),en(n,o,{immediate:!1})})},Bg=([n,s,a=""])=>{const t=Object.entries(s).map(([l,r])=>Pn(r)?`[${l}=${JSON.stringify(r)}]`:r===!0?`[${l}]`:"").join(""),e=`head > ${n}${t}`;return Array.from(document.querySelectorAll(e)).find(l=>l.innerText===a)||null},Dg=([n,s,a])=>{if(!Pn(n))return null;const t=document.createElement(n);return xt(s)&&Object.entries(s).forEach(([e,o])=>{Pn(o)?t.setAttribute(e,o):o===!0&&t.setAttribute(e,"")}),Pn(a)&&t.appendChild(document.createTextNode(a)),t},Rg=Kd,Mg=async()=>{var a;const n=Rg({name:"Vuepress",setup(){var o;Pg();for(const p of Yt)(o=p.setup)==null||o.call(p);const t=Yt.flatMap(({rootComponents:p=[]})=>p.map(l=>c(l))),e=mm();return()=>[c(e.value),t]}}),s=Ig();Tg(n),Og(n,s,Yt);for(const t of Yt)await((a=t.enhance)==null?void 0:a.call(t,{app:n,router:s,siteData:Ya}));return n.use(s),{app:n,router:s}};Mg().then(({app:n,router:s})=>{s.isReady().then(()=>{n.mount("#app")})});export{k2 as A,d2 as B,Tn as C,mn as D,ga as E,Pn as F,zg as G,xt as H,jr as I,mp as J,w2 as O,b2 as P,On as R,$g as a,Xl as b,Ng as c,Mg as createVueApp,nr as d,Mn as e,M as f,js as g,ms as h,Ns as i,hp as j,Fa as k,wt as l,U as m,_ as n,Vg as o,Cn as p,en as q,ts as r,c as s,jg as t,Hg as u,m2 as v,dk as w,f2 as x,di as y,h2 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-BcgtGKyj.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/intro.html-CSwSdwGv.js","assets/slides.html-BrjuzOE_.js","assets/index.html-1Cd5dax8.js","assets/README01.html-KQ-o7BHN.js","assets/Javase01.html-CkZoFeQk.js","assets/Javase02.html-BD4PJL7f.js","assets/Javase03.html-CkBC4pPa.js","assets/Javase04.html-S5TPKpbl.js","assets/Javase05.html-C86PbZ9x.js","assets/Javase06.html-onlDJPzb.js","assets/Javase07.html-DF1jjXFf.js","assets/Javase08.html-CBpl_OrI.js","assets/Javase09.html-C-AISkw6.js","assets/Javase10.html-DwfDNXVl.js","assets/Javase11.html-B9vzTfZ_.js","assets/Javase12.html-91ZXYYg-.js","assets/index.html-BRKh7BsN.js","assets/index.html-CH581PIB.js","assets/javaweb01.html-DbXV7PJK.js","assets/javaweb02.html-DMP8gwGq.js","assets/javaweb03.html-D8DTiQDW.js","assets/index.html-JgRxucm0.js","assets/mybatis01.html-CDWrt4Qk.js","assets/mybatis02.html-DegACBcU.js","assets/mybatis03.html-BehYAT_f.js","assets/mybatis04.html-BobuLz91.js","assets/mybatis05.html-DW49Jvcw.js","assets/mybatis06.html-DOrKZ13t.js","assets/mybatis07.html-B1RXqtZl.js","assets/index.html-DyUrRpJg.js","assets/mybatisplus01.html-BoP0PwPZ.js","assets/mybatisplus02.html-C8J2L8C6.js","assets/index.html-D6I6jttk.js","assets/spring01.html-C0tVrXXp.js","assets/spring02.html-D6ajG2K-.js","assets/spring03.html-BrL2dJG_.js","assets/index.html-mupEL_Ip.js","assets/springboot01.html-BiCRZaes.js","assets/springboot02.html-dPf_yt4H.js","assets/springboot03.html-ZuTRmGnU.js","assets/springboot04.html-C3_2XCUr.js","assets/springboot05.html-BNeanmS2.js","assets/springboot06.html-BZgDmY7x.js","assets/springboot07.html-D4XCuYCI.js","assets/springboot08.html-DtM-NdqP.js","assets/index.html-CofcT5XP.js","assets/springcloud01.html-D2ZCwnPW.js","assets/springcloud02.html-BrW1JYWd.js","assets/springcloud03.html-DRe71QYe.js","assets/springcloud04.html-FCwKOuQO.js","assets/springcloud05.html-BcZB5N3w.js","assets/springcloud06.html-IytzXLgr.js","assets/springcloud07.html-a4fADyb2.js","assets/springcloud08.html-DVbvfNbj.js","assets/springcloud09.html-CzN7FTYS.js","assets/springcloud10.html-jkeM9ZbE.js","assets/springcloud11.html-4EnW6WHK.js","assets/springcloud12.html-CSWlEoez.js","assets/springcloud13.html-O7bmklkk.js","assets/springcloud14.html-C0oW1728.js","assets/springcloud15.html-DMcWDau-.js","assets/springcloud16.html-jWL_YFNF.js","assets/springcloud17.html-BRdOo9_k.js","assets/index.html-BCytSo0m.js","assets/springmvc01.html-B1h0Kbkl.js","assets/springmvc02.html-DU-G4wTx.js","assets/index.html-Dklz8pGc.js","assets/index.html-DUtwaO1H.js","assets/computernetword01.html-CqWmHzEP.js","assets/computernetwork02.html-CqQnZg_Q.js","assets/index.html-CqWMba3L.js","assets/index.html-C4VtXfcX.js","assets/index.html-FP5FMtxV.js","assets/index.html-C00Vvad6.js","assets/index.html-CF9mdHgS.js","assets/css01.html-CTp5XXmI.js","assets/css02.html-CI4ygQAo.js","assets/css03.html-BBansr1c.js","assets/index.html-CvgAaU11.js","assets/html01.html-BKdVNsli.js","assets/html02.html-S1cjljBD.js","assets/html03.html-C9nrfqIC.js","assets/index.html-BZzddRYH.js","assets/javascript01.html-CgnUOJwQ.js","assets/javascript02.html-DVOoMCrm.js","assets/javascript03.html-D5AJ_Oiv.js","assets/javascript04.html-B-eF7eX-.js","assets/javascript05.html-DPU4BnMS.js","assets/index.html-C-eCSrGO.js","assets/vue01.html-DxBICxJ8.js","assets/vue02.html-B6Xdu4P0.js","assets/vue03.html-GSnVqsKK.js","assets/vue04.html-DOVBpgLn.js","assets/vue05.html-BJi9XueR.js","assets/vue06.html-CduDEvPW.js","assets/vue07.html-BORlp5h4.js","assets/index.html-CLD-cKIY.js","assets/index.html-DqYg0maC.js","assets/disable.html-DfOGrLx5.js","assets/page.html-DCBc2ci0.js","assets/index.html-DprP0Qqo.js","assets/computer.html-eezyCKGH.js","assets/screen.html-Bh7mbIND.js","assets/index.html-CyTEtMAh.js","assets/huike01.html-BiDfnpvA.js","assets/huike02.html-DCiAn7OJ.js","assets/index.html-cDgcyE-h.js","assets/index.html-CIhio-OQ.js","assets/skytakeout01.html-D5kSOGL-.js","assets/skytakeout02.html-CL8na0VN.js","assets/skytakeout03.html-CnudL0h_.js","assets/skytakeout04.html-Bc4RZeob.js","assets/skytakeout05.html-Cf6jQ8OZ.js","assets/skytakeout06.html-Cg57PmmV.js","assets/skytakeout07.html-mOBV4J3U.js","assets/skytakeout08.html-Dmmxts4S.js","assets/skytakeout09.html-DhBsdYdb.js","assets/skytakeout10.html-Di8cuTVl.js","assets/skytakeout11.html-B9OqjxZ_.js","assets/skytakeout12.html-B21NF0GT.js","assets/index.html-DtmwRE3b.js","assets/tjxt01.html-D0Cpycqe.js","assets/index.html-ClJgFf4s.js","assets/index.html-ChZJ90XO.js","assets/markdown01.html-D1ly1U7O.js","assets/index.html-bZeC6Yj0.js","assets/index.html-TMQKo6lU.js","assets/arrays01.html-BI1twLz7.js","assets/arrays02.html-vt7ZaZPe.js","assets/arrays03.html-vGXv65fc.js","assets/arrays04.html-DGmae4Dm.js","assets/arrays05.html-Ca8pgkfk.js","assets/index.html-COz83ro3.js","assets/linkedlist01.html-B-XlLKtH.js","assets/linkedlist02.html-6K9stdMC.js","assets/linkedlist03.html-CQ4W13V4.js","assets/linkedlist04.html-CZ4cmHQ8.js","assets/linkedlist05.html-AWTbkEeX.js","assets/linkedlist06.html-BvOSPkq8.js","assets/linkedlist07.html-BY9EdWPs.js","assets/linkedlist08.html-BGlv9C_I.js","assets/index.html-BVgpdH71.js","assets/hashtable01.html-C5FTRD55.js","assets/hashtable02.html-BPEencQ0.js","assets/hashtable03.html-C3g5UIvO.js","assets/hashtable04.html--OdlUuq4.js","assets/hashtable05.html-BPWYpxz0.js","assets/hashtable06.html-y16doJS0.js","assets/hashtable07.html-BgfvrmI_.js","assets/hashtable08.html-DgOsaJ27.js","assets/hashtable09.html-DZCgvXrC.js","assets/index.html-T2cQBWIZ.js","assets/String01.html-C3JmqIui.js","assets/String02.html-D5Qx5yf_.js","assets/String03.html-CU3O1Po_.js","assets/String04.html--KWOg9_Z.js","assets/String05.html-QC9GkhK5.js","assets/String06.html-8l5I2edt.js","assets/String07.html-CMgKCHcJ.js","assets/index.html-BZC_hr9m.js","assets/doublePointer01.html-C9A8Mp_S.js","assets/doublePointer02.html-Ber2davf.js","assets/doublePointer03.html-DkBngaZQ.js","assets/doublePointer04.html-Kc-PFfsB.js","assets/doublePointer05.html-DXB_7Fye.js","assets/doublePointer06.html-BEO6tB5C.js","assets/doublePointer07.html-9ORBLUCS.js","assets/doublePointer08.html-B3glHEX2.js","assets/doublePointer09.html-CnqiyObI.js","assets/doublePointer10.html-03_K0xS9.js","assets/index.html-CDp2M4gp.js","assets/stacksAndQueues01.html-B-cCckVa.js","assets/stacksAndQueues02.html-C3vnuB0-.js","assets/stacksAndQueues03.html-Cd-ugXN_.js","assets/stacksAndQueues04.html-dR5tTM_C.js","assets/stacksAndQueues05.html-DjtOurwf.js","assets/stacksAndQueues06.html-CVZJC7-p.js","assets/stacksAndQueues07.html-PT2j4lv1.js","assets/index.html-BIrHaFDm.js","assets/index.html-BJXCk2Gh.js","assets/index.html-CzSqmv5s.js","assets/index.html-3gJ-yP2x.js","assets/index.html-EeDZSUhV.js","assets/index.html-Cxn07NAw.js","assets/summary01.html-sT_syPza.js","assets/index.html-CPU2SRD7.js","assets/cn01.html-C8JVBUyK.js","assets/cn02.html-B1_1fO-x.js","assets/cn03.html-DMn_M1nG.js","assets/index.html-BeoDKxKl.js","assets/ds01.html-Ds4p9aF1.js","assets/ds02_.html-Diz3xo_G.js","assets/ds03.html-BoJxKiMW.js","assets/index.html-ruUqJr9A.js","assets/mo01.html-BX0GyyE7.js","assets/mo02.html-CQHoWySV.js","assets/mo03.html-BLZmE8ao.js","assets/index.html-i0YUa8sA.js","assets/osi01.html-DCayo1Wd.js","assets/osi02.html-Dek5ekXp.js","assets/osi03.html-DxJkSuWj.js","assets/index.html-Bp048ahM.js","assets/index.html-Cx-3VWQq.js","assets/index.html-By65QVKv.js","assets/sql01.html-CtDuZ6MF.js","assets/sql02.html-DLpGAtPD.js","assets/sql03.html-Bxsb8wR7.js","assets/sql04.html-CZwDvtKL.js","assets/index.html-BcXzFsLH.js","assets/advanced01.html-DP_pCX9j.js","assets/index.html-cxbtOL7E.js","assets/oam01.html-CMIvNeKn.js","assets/index.html-CavRVQKn.js","assets/day01.html-BgoUALhL.js","assets/day02.html-D3FgORWw.js","assets/day03.html-BiG8WU2v.js","assets/day04.html-BnlJhsnc.js","assets/day05.html-DqfLRaDu.js","assets/day06.html-B1mqQIkW.js","assets/index.html-yC9YWEDB.js","assets/git01.html-YqhlOioU.js","assets/index.html-CAjFmlox.js","assets/day01.html-CRcdhi90.js","assets/day02.html-BK12evmN.js","assets/index.html-C6pPm1a1.js","assets/redis01.html-dDHIoNOP.js","assets/index.html-C2yrYX25.js","assets/manual01.html-BZyugLha.js","assets/manual02.html-3L82imPj.js","assets/manual03.html-BxKcJxmA.js","assets/index.html-HgH9fHir.js","assets/documentnotes01.html-Dt-Tne0q.js","assets/documentnotes02.html-CxiPmiji.js","assets/documentnotes03.html-DkaaxrJu.js","assets/documentnotes04.html-Cs0uTKtT.js","assets/documentnotes05.html-Cwdxllz1.js","assets/documentnotes06.html-go3nmab5.js","assets/documentnotes07.html-CBdVNJ6t.js","assets/documentnotes08.html-BF9FeLsL.js","assets/documentnotes09.html-C1_IwePW.js","assets/documentnotes10.html-DrnwaD0Q.js","assets/documentnotes11.html-Bmf_-71g.js","assets/index.html-BytKjdm4.js","assets/dbi01.html-B57gACYQ.js","assets/dbi02.html-DZV0GKQi.js","assets/dbi03.html-QTPDlTly.js","assets/404.html-1I6WCfV6.js","assets/index.html-BQi35vmN.js","assets/index.html-DquPVtzA.js","assets/index.html-CERGYyl5.js","assets/index.html-CiyJDAxK.js","assets/index.html-DdypkRpJ.js","assets/index.html-CiJ46zEr.js","assets/index.html-Dh-k2sjm.js","assets/index.html-D7sDa0XW.js","assets/index.html-CmnBSd-J.js","assets/index.html-BTp_JDD1.js","assets/index.html-XoXOT5PH.js","assets/index.html-BQuom7ag.js","assets/index.html-YTyiWODt.js","assets/index.html-Bea7ZbmX.js","assets/index.html-SuiR-EHm.js","assets/index.html-DTnvcoQ_.js","assets/index.html-gwhWMTXQ.js","assets/index.html-D0zYtCYZ.js","assets/index.html-C-grTLwO.js","assets/index.html-jaGBuGDw.js","assets/index.html-BXFhUEUm.js","assets/index.html-D5MfJyvf.js","assets/index.html-BapU8yji.js","assets/index.html-Tdi4eaSX.js","assets/index.html-B2gZ5i91.js","assets/index.html-CMTvfH1W.js","assets/index.html-CLam2qTD.js","assets/index.html-qhsl4ANz.js","assets/index.html-CpGG5Osh.js","assets/index.html-D-x9vFiw.js","assets/index.html-DdqgOZZb.js","assets/index.html-DGlXUGW3.js","assets/index.html-r_j57iNL.js","assets/index.html-BiOR4MS3.js","assets/index.html-DDgl4Yra.js","assets/index.html-BD8WUd30.js","assets/index.html-Cucx8oTw.js","assets/index.html-_56iGlwI.js","assets/index.html-_mWYMghv.js","assets/index.html-C8Vv_f99.js","assets/index.html-4z0vZ2RL.js","assets/index.html-DavD5f1k.js","assets/index.html-By92lFef.js","assets/index.html-DFcSTARn.js","assets/index.html-C1XMpgak.js","assets/index.html-TYJegIMI.js","assets/index.html-B7zOrXok.js","assets/index.html-ChQ0rOP1.js","assets/index.html-D1asTWOJ.js","assets/index.html-a8OyiAmU.js","assets/index.html-Bq1JktnP.js","assets/index.html-Zepf8ia-.js","assets/index.html-D0IzW1tn.js","assets/index.html-CiMBuAOz.js","assets/index.html-QtguPgga.js","assets/index.html-sd9AATP9.js","assets/index.html-dpsLtubU.js","assets/index.html-Dnr2EFok.js","assets/index.html-Bu0lfMAc.js","assets/index.html-DYIADFAe.js","assets/index.html-CCvAz_pT.js","assets/index.html-E6Be09hp.js","assets/index.html-Cv7w_g2P.js","assets/index.html-B0NyYLkt.js","assets/index.html-wecpPAP-.js","assets/index.html-DnCf2Njr.js","assets/index.html-CSvRPcTs.js","assets/index.html-esU-0TzJ.js","assets/index.html-DXtCM0R2.js","assets/index.html-DkEvzPqD.js","assets/index.html-DJ2CFPUX.js","assets/index.html-gp7W_nKL.js","assets/index.html-UAbZ60AE.js","assets/index.html-UhnvhVMD.js","assets/index.html-DoTzPhnm.js","assets/index.html-CDVXhXPs.js","assets/index.html-BwvLwJsp.js","assets/index.html-Dj_89DMY.js","assets/index.html-Cr-3Y4gD.js","assets/index.html-CXuUvnbv.js","assets/index.html-Ct5moPhX.js","assets/index.html-B0ovx8gG.js","assets/index.html-_lXcxGL5.js","assets/index.html-Bav2TIbc.js","assets/index.html-CvI7Qpxb.js","assets/index.html-CpN-lQii.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
