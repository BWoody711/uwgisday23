import{aB as e,dZ as n,b6 as p}from"./index-20a3a931.js";import{d as i}from"./queryTopFeatures-8a4e41cb.js";import"./query-bfeb5bde.js";import"./pbfQueryUtils-ddbc8ae3.js";import"./pbf-4a834e9a.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function b(o,r,a){const m=e(o),t=await i(m,n.from(r),{...a});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{b as executeForTopExtents};