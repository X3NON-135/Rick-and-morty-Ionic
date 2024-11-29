/*! For license information please see 75.3fb8c7a1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75],{75:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>A});var r="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",c=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+r+c,"gim"),i=new RegExp("("+o+c,"gim"),p=new RegExp("("+n+c,"gim"),a=r+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,g=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),f=d("::slotted"),m=d(":host"),$=d(":host-context"),x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,v=/(^.*?[^\\])??((:+)(.*)|$)/,_="%BLOCK%",k=e=>{const t=e.split(b),s=[],r=[];let n=0,o=[];for(let c=0;c<t.length;c++){const e=t[c];"}"===e&&n--,n>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(_),o=[]),s.push(e)),"{"===e&&n++}o.length>0&&(r.push(o.join("")),s.push(_));return{escapedString:s.join(""),blocks:r}},E=(e,t,s)=>e.replace(t,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t[2]){const e=t[2].split(","),r=[];for(let n=0;n<e.length;n++){const o=e[n].trim();if(!o)break;r.push(s(a,o,t[3]))}return r.join(",")}return a+t[3]})),O=(e,t,s)=>e+t.replace(r,"")+s,R=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,j=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},C=(e,t)=>e.replace(v,(function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+t+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),W=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(function(e){return arguments.length<=1?void 0:arguments[1]}))),n=e=>{let n=e.trim();if(!n)return"";if(e.indexOf(a)>-1)n=((e,t,s)=>{if(u.lastIndex=0,u.test(e)){const t=`.${s}`;return e.replace(h,((e,s)=>C(s,t))).replace(u,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(u,"");t.length>0&&(n=C(t,r))}return n},o=(e=>{const t=[];let s=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const n=`__ph-${s}__`;return t.push(r),s++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,n)=>{const o=`__ph-${s}__`;return t.push(n),s++,r+o})),placeholders:t}})(e);let c,l="",i=0;const p=/( |>|\+|~(?!=))\s*/g;let g=!((e=o.content).indexOf(a)>-1);for(;null!==(c=p.exec(e));){const t=c[1],s=e.slice(i,c.index).trim();g=g||s.indexOf(a)>-1;l+=`${g?n(s):s} ${t} `,i=p.lastIndex}const d=e.substring(i);return g=g||d.indexOf(a)>-1,l+=g?n(d):d,f=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>f[+t]));var f},T=(e,t,s,r)=>((e,t)=>{const s=k(e);let r=0;return s.escapedString.replace(S,(function(){const e=arguments.length<=2?void 0:arguments[2];let n="",o=arguments.length<=4?void 0:arguments[4],c="";o&&o.startsWith("{"+_)&&(n=s.blocks[r++],o=o.substring(8),c="{");const l=t({selector:e,content:n});return`${arguments.length<=1?void 0:arguments[1]}${l.selector}${arguments.length<=3?void 0:arguments[3]}${c}${l.content}${o}`}))})(e,(e=>{let n=e.selector,o=e.content;"@"!==e.selector[0]?n=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():j(e,t)?W(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=T(e.content,t,s,r));return{selector:n.replace(/\s{2,}/g," ").trim(),content:o}})),L=(e,t,s,c)=>{const h=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(p,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t[2]){const e=t[2].trim(),n=t[3],o=s+e+n;let c="";for(let s=t[4]-1;s>=0;s--){const e=t[5][s];if("}"===e||","===e)break;c=e+c}const l=(c+o).trim(),i=`${c.trimEnd()}${o.trim()}`.trim();if(l!==i){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return a+t[3]})),{selectors:r,cssText:e}})(e=(e=>E(e,i,R))(e=(e=>E(e,l,O))(e=(e=>e.replace($,`$1${o}`).replace(m,`$1${r}`).replace(f,`$1${n}`))(e))),c);return e=(e=>g.reduce(((e,t)=>e.replace(t," ")),e))(e=h.cssText),t&&(e=T(e,t,s,c)),{cssText:(e=(e=y(e,s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors.map((e=>({orgSelector:y(e.orgSelector,s),updatedSelector:y(e.updatedSelector,s)})))}},y=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),A=(e,t)=>{const s=t+"-h",r=t+"-s",n=e.match(w)||[];e=(e=>e.replace(x,""))(e);const o=L(e,t,s,r);return e=[o.cssText,...n].join("\n"),o.slottedSelectors.forEach((t=>{const s=new RegExp(t.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");e=e.replace(s,t.updatedSelector)})),e}}}]);
//# sourceMappingURL=75.3fb8c7a1.chunk.js.map