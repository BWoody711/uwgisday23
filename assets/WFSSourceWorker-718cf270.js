import{s as m,at as y,cv as g,b0 as _,cz as d,m as F,o as w,j as S}from"./index-cb8c10d0.js";import{r as E,s as q}from"./featureConversionUtils-317e3645.js";import{m as x}from"./FeatureStore-88bcfa4e.js";import{x as T,j as R}from"./projectionSupport-276693a5.js";import{W as I}from"./QueryEngine-bc896278.js";import{E as b,N as j}from"./geojson-206532f5.js";import{p as C}from"./sourceUtils-8d1b4237.js";import{a as k,B as P}from"./wfsUtils-f374e441.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BoundsStore-f83876c2.js";import"./PooledRBush-8bf2d479.js";import"./timeSupport-05eb4812.js";import"./json-48e3ea08.js";import"./WhereClause-f930ce8b.js";import"./TimeOnly-c5d299c6.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-b480e172.js";import"./utils-a0232a33.js";import"./utils-2840c54d.js";import"./generateRendererUtils-a6d51092.js";import"./RenderState-1d6218ee.js";import"./date-294ce3fb.js";import"./xmlUtils-444cb4c0.js";class se{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:p,fields:o,geometryType:i,featureType:n,objectIdField:u,customParameters:a}=e,{spatialReference:s,getFeatureSpatialReference:h}=k(r,n,e.spatialReference);this._featureType=n,this._customParameters=a,this._getFeatureUrl=r,this._getFeatureOutputFormat=p,this._getFeatureSpatialReference=h;try{await T(h,s)}catch{throw new m("unsupported-projection","Projection not supported",{inSpatialReference:h,outSpatialReference:s})}y(t);const l=g.fromLayerJSON({fields:o,dateFieldsTimeReference:o.some(f=>f.type==="esriFieldTypeDate")?{timeZoneIANA:_}:null}),c=await this._snapshotFeatures({fieldsIndex:l,geometryType:i,objectIdField:u,spatialReference:s},t.signal);return this._queryEngine=new I({fieldsIndex:l,geometryType:i,hasM:!1,hasZ:!1,objectIdField:u,spatialReference:s,timeInfo:null,featureStore:new x({geometryType:i,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new m("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=d(r=>this._snapshotFeatures(this._queryEngine,r)),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),F(r)||w.getLogger("esri.layers.WFSLayer").error(new m("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:e,geometryType:t,spatialReference:r,fieldsIndex:p},o){const i=await P(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:o});b(i,this._getFeatureSpatialReference.wkid),y(o);const n=j(i,{geometryType:t,hasZ:!1,objectIdField:e});if(!S(r,this._getFeatureSpatialReference))for(const a of n)a.geometry!=null&&(a.geometry=E(R(q(a.geometry,t,!1,!1),this._getFeatureSpatialReference,r)));let u=1;for(const a of n){const s={};C(p,s,a.attributes,!0),a.attributes=s,s[e]==null&&(a.objectId=s[e]=u++)}return n}}export{se as default};
