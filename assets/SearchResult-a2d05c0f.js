import{u as U,g as ee,p as M,q as B,v as ae,x as le,y as se,h as x,j as b,z as te,A as Y,m as l,B as _,C as F,R as I,D as re,E as ue,F as ie,G as ne,H as oe,O as ce,s as ve,l as pe,I as he,J as ye,K as de,L as me,M as E,N as fe}from"./app-b0b2fa4c.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=U(ge,[]),Re=()=>{const{queryHistoryCount:r}=E,n=r>0;return{enabled:n,queryHistory:y,addQueryHistory:t=>{n&&(y.value.length<r?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,r-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:D}=E,d=U(He,[]),Qe=()=>{const r=M(),n=D>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:n,resultHistory:d,addResultHistory:s=>{if(n){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<D?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,D-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const n=oe(),t=B(),{search:s,terminate:u}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(R=>{f.value=!0,R?s({type:"search",query:R,locale:t.value,options:n}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},E.searchDelay);Y([r,t],()=>w(r.value),{immediate:!0}),he(()=>{u()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:n}){const t=M(),s=B(),u=ae(le),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=Re(),{enabled:R,resultHistory:h,addResultHistory:L,removeResultHistory:j}=Qe(),O=f||R,S=se(r,"query"),{results:H,searching:z}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),P=b(()=>O&&(m.value.length>0||h.value.length>0)),C=b(()=>H.value.length>0),q=b(()=>H.value[p.value]||null),T=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,G=()=>{const{isQuery:e,index:a}=o.value;a===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:a-1}},J=()=>{const{isQuery:e,index:a}=o.value;a===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:a+1}},K=()=>{p.value=p.value>0?p.value-1:H.value.length-1,c.value=q.value.contents.length-1},N=()=>{p.value=p.value<H.value.length-1?p.value+1:0,c.value=0},V=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:N()},W=()=>{c.value>0?c.value=c.value-1:K()},A=e=>e.map(a=>ye(a)?a:l(a[0],a[1])),X=e=>{if(e.type==="customField"){const a=de[e.index]||"$content",[i,k=""]=me(a)?a[s.value].split("$content"):a.split("$content");return e.display.map(v=>l("div",A([i,...v,k])))}return e.display.map(a=>l("div",A(a)))},Q=()=>{p.value=0,c.value=0,n("updateQuery",""),n("close")};return te("keydown",e=>{if(r.isFocusing){if(C.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=q.value.contents[c.value],i=T(a);g(r.query),L(a),t.push(i),Q()}}else if(R){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const{index:a}=o.value;o.value.isQuery?(n("updateQuery",m.value[a]),e.preventDefault()):(t.push(h.value[a].link),Q())}}}}),Y([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!P.value}],id:"search-pro-results"},S.value===""?O?P.value?[f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),m.value.map((e,a)=>l("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===a}],onClick:()=>{n("updateQuery",e)}},[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(a)}})]))])):null,R?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),h.value.map((e,a)=>l(I,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===a}],onClick:()=>{Q()}},()=>[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>A(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),j(a)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:z.value?l(re,{hint:u.value.searching}):C.value?l("ul",{class:"search-pro-result-list"},H.value.map(({title:e,contents:a},i)=>{const k=p.value===i;return l("li",{class:["search-pro-result-list-item",{active:k}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((v,Z)=>{const $=k&&c.value===Z;return l(I,{to:T(v),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{g(r.query),L(v),Q()}},()=>[v.type==="text"?null:l(v.type==="title"?ue:v.type==="heading"?ie:ne,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",X(v))])])})])})):u.value.emptyResult)}});export{we as default};
