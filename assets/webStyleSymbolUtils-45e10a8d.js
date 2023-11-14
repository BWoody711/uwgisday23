import{s as $,bM as F,ao as w,ap as y,bN as d,bO as U,bP as D,bQ as P,bR as j,bS as I,bT as h,bU as S,bV as M,bW as T}from"./index-20a3a931.js";import{c as W,a as N}from"./devEnvironmentUtils-4eab2a99.js";function k(e,t,l,a){const n=e.name;return n==null?Promise.reject(new $("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?E(n,t,a):F(e,t,a).then(r=>A(r,n,t,l,T,a))}function v(e,t){return t.items.find(l=>l.name===e)}function A(e,t,l,a,n,r){var c,g;const o=(l==null?void 0:l.portal)!=null?l.portal:w.getDefault(),p={portal:o,url:y(e.baseUrl),origin:"portal-item"},m=v(t,e.data);if(!m){const u=`The symbol name '${t}' could not be found`;return Promise.reject(new $("symbolstyleutils:symbol-name-not-found",u,{symbolName:t}))}let i=d(n(m,a),p),b=((c=m.thumbnail)==null?void 0:c.href)??null;const f=(g=m.thumbnail)==null?void 0:g.imageData;W()&&(i=N(i)??"",b=N(b));const O={portal:o,url:y(U(i)),origin:"portal-item"};return D(i,r).then(u=>{const R=a==="cimRef"?P(u.data):u.data,s=j(R,O);if(s&&I(s)){if(b){const x=d(b,p);s.thumbnail=new h({url:x})}else f&&(s.thumbnail=new h({url:`data:image/png;base64,${f}`}));e.styleUrl?s.styleOrigin=new S({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new S({portal:l.portal,styleName:e.styleName,name:t}))}return s})}function E(e,t,l){const a=M.replaceAll(/\{SymbolName\}/gi,e),n=t.portal!=null?t.portal:w.getDefault();return D(a,l).then(r=>{const o=P(r.data);return j(o,{portal:n,url:y(U(a)),origin:"portal-item"})})}export{A as fetchSymbolFromStyle,v as getStyleItemFromStyle,k as resolveWebStyleSymbol};