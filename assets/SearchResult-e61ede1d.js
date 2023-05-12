import{u as B,g as G,p as J,q as E,v as K,x as N,y as O,h as w,j as k,z as V,A as P,m as t,R as A,B as W,C as T,D as X,E as Y,F as Z,G as _,s as ee,H as te,L as se,I as ae,J as le,K as ue,M as q,N as re}from"./app-98bf151c.js";const ne="search-pro-result-history",o=B(ne,[]),oe=()=>{const{resultHistoryCount:u}=q,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},ce=u=>{const c=E(),l=w(!1),h=ee([]);let i;const v=ue(y=>{l.value=!0,i==null||i.terminate(),y?(i=new Worker(`/${q.worker}`,{}),i.addEventListener("message",({data:g})=>{h.value=g,l.value=!1}),i.postMessage({query:y,routeLocale:c.value})):(h.value=[],l.value=!1)},q.delay);return P([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=G({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=te(),h=J(),i=E(),v=K(N),{addQueryHistory:y}=se(),{enabled:g,resultHistory:L,addResultHistory:C,removeResultHistory:Q}=oe(),R=O(u,"query"),{results:d,searching:j}=ce(R),r=w(0),a=w(0),D=k(()=>L.value.length>0),f=k(()=>d.value.length>0),$=k(()=>d.value[r.value]||null),F=()=>{r.value=r.value>0?r.value-1:d.value.length-1,a.value=$.value.contents.length-1},I=()=>{r.value=r.value<d.value.length-1?r.value+1:0,a.value=0},M=()=>{a.value<$.value.contents.length-1?a.value=a.value+1:I()},U=()=>{a.value>0?a.value=a.value-1:F()},b=e=>e.map(s=>re(s)?s:t(s[0],s[1])),S=e=>{if(e.type==="custom"){const s=ae[e.index]||"$content",[p,m=""]=le(s)?s[i.value].split("$content"):s.split("$content");return b([p,...e.display,m])}return b(e.display)},H=()=>{r.value=0,a.value=0,c("updateQuery",""),c("close")};return V("keydown",e=>{if(f.value){if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const s=$.value.contents[a.value];l.value.path!==s.path&&(y(u.query),C(s),h.push(s.path),H())}}}),P([r,a],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:R.value?!f.value:!D.value}],id:"search-pro-results"},R.value===""?D.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),L.value.map((e,s)=>t(A,{to:e.path,class:["search-pro-result-item",{active:a.value===s}],onClick:()=>{H()}},()=>[t(W,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),Q(s)}},t(T))]))])):g?v.value.emptyHistory:v.value.emptyResult:j.value?t(X,{hint:v.value.searching}):f.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:s},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),s.map((n,z)=>{const x=m&&a.value===z;return t(A,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{y(u.query),C(n),H()}},()=>[n.type==="content"?null:t(n.type==="title"?Y:n.type==="heading"?Z:_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
