import"./index-cb8c10d0.js";function p(t){return"r"in t&&"g"in t&&"b"in t}function b(t){return"h"in t&&"s"in t&&"v"in t}function g(t){return"l"in t&&"a"in t&&"b"in t}function l(t){return"l"in t&&"c"in t&&"h"in t}function k(t){return"x"in t&&"y"in t&&"z"in t}const w=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],y=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function M(t,o){const r=[];let u,n;if(t[0].length!==o.length)throw new Error("dimensions do not match");const e=t.length,c=t[0].length;let i=0;for(u=0;u<e;u++){for(i=0,n=0;n<c;n++)i+=t[u][n]*o[n];r.push(i)}return r}function m(t){const o=[t.r/255,t.g/255,t.b/255].map(u=>u<=.04045?u/12.92:((u+.055)/1.055)**2.4),r=M(w,o);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function a(t){const o=M(y,[t.x/100,t.y/100,t.z/100]).map(r=>{const u=r<=.0031308?12.92*r:1.055*r**.4166666666666667-.055;return Math.min(1,Math.max(u,0))});return{r:Math.round(255*o[0]),g:Math.round(255*o[1]),b:Math.round(255*o[2])}}function d(t){const o=[t.x/95.047,t.y/100,t.z/108.883].map(r=>r>.008856451679035631?r**.3333333333333333:7.787037037037035*r+.13793103448275862);return{l:116*o[1]-16,a:500*(o[0]-o[1]),b:200*(o[1]-o[2])}}function x(t){const o=t.l,r=[(o+16)/116+t.a/500,(o+16)/116,(o+16)/116-t.b/200].map(u=>u>6/29?u**3:3*(6/29)**2*(u-4/29));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function z(t){const o=t.l,r=t.a,u=t.b,n=Math.sqrt(r*r+u*u);let e=Math.atan2(u,r);return e=e>0?e:e+2*Math.PI,{l:o,c:n,h:e}}function v(t){const o=t.l,r=t.c,u=t.h;return{l:o,a:r*Math.cos(u),b:r*Math.sin(u)}}function q(t){return d(m(t))}function H(t){return a(x(t))}function L(t){return z(d(m(t)))}function j(t){return a(x(v(t)))}function A(t){const o=t.r,r=t.g,u=t.b,n=Math.max(o,r,u),e=n-Math.min(o,r,u);let c=n,i=e===0?0:n===o?(r-u)/e%6:n===r?(u-o)/e+2:(o-r)/e+4,s=e===0?0:e/c;return i<0&&(i+=6),i*=60,s*=100,c*=100/255,{h:i,s,v:c}}function E(t){const o=(t.h+360)%360/60,r=t.s/100,u=t.v/100*255,n=u*r,e=n*(1-Math.abs(o%2-1));let c;switch(Math.floor(o)){case 0:c={r:n,g:e,b:0};break;case 1:c={r:e,g:n,b:0};break;case 2:c={r:0,g:n,b:e};break;case 3:c={r:0,g:e,b:n};break;case 4:c={r:e,g:0,b:n};break;case 5:case 6:c={r:n,g:0,b:e};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+u-n),c.g=Math.round(c.g+u-n),c.b=Math.round(c.b+u-n),c}function h(t){return p(t)?t:l(t)?j(t):g(t)?H(t):k(t)?a(t):b(t)?E(t):t}function P(t){return b(t)?t:A(h(t))}function B(t){return g(t)?t:q(h(t))}function C(t){return l(t)?t:L(h(t))}var f;(function(t){t[t.Low=160]="Low",t[t.High=225]="High"})(f||(f={}));export{B as A,C as j,h as y,P as z};
