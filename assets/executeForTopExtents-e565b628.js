import{aB as e,dZ as n,b6 as p}from"./index-03fdaeda.js";import{d as i}from"./queryTopFeatures-eb596fe1.js";import"./query-103706ea.js";import"./pbfQueryUtils-0635366e.js";import"./pbf-db87ebb7.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function b(o,r,a){const m=e(o),t=await i(m,n.from(r),{...a});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{b as executeForTopExtents};
