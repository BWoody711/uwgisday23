import{x as e,aB as f,aC as i}from"./index-cb8c10d0.js";import{c as m}from"./query-e1f4c37d.js";async function w(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,w as s};