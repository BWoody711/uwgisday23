import{q as l,t as a,v as E,br as M,eN as d,dM as N,aQ as O,eO as $,eP as y,eQ as g,eR as p,R as h,eS as x,Q as c,aE as k}from"./index-cb8c10d0.js";import{p as q}from"./normalizeUtilsSync-0dfcf0d7.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends M{constructor(t){super(t)}get bounds(){const t=this.coords;return(t==null?void 0:t.extent)==null?null:d(t.extent)}get coords(){var o;const t=(o=this.element.georeference)==null?void 0:o.coords;return N(t,this.spatialReference).geometry}get normalizedCoords(){return O.fromJSON(q(this.coords))}get normalizedBounds(){const t=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return t!=null?d(t):null}};l([a()],n.prototype,"spatialReference",void 0),l([a()],n.prototype,"element",void 0),l([a()],n.prototype,"bounds",null),l([a()],n.prototype,"coords",null),l([a()],n.prototype,"normalizedCoords",null),l([a()],n.prototype,"normalizedBounds",null),n=l([E("esri.layers.support.MediaElementView")],n);const r=k(),s=u(),i=u(),m=u();function V(e,t,o){return $(r,t[0],t[1],1),y(r,r,g(s,o)),r[2]===0?p(e,r[0],r[1]):p(e,r[0]/r[2],r[1]/r[2])}function A(e,t,o){return f(i,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),f(m,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),h(e,x(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function f(e,t,o,z,b,C,R,v,Q){c(e,t,z,C,o,b,R,1,1,1),$(r,v,Q,1),x(s,e);const[S,j,B]=y(r,r,g(s,s));return c(s,S,0,0,0,j,0,0,0,B),h(e,s,e)}export{V as h,n as i,A as j};