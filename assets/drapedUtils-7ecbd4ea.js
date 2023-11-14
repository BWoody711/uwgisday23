import{cA as K,dC as W,bs as X,q as p,t as c,iw as Y,ea as ee,aT as I,bh as te,dD as re,v as M,aI as q,b$ as se,D as A,bH as ie,dH as ne,fJ as oe,aB as ae,aO as le,b_ as ue,bZ as pe,U as ye,br as ce,eE as fe,I as he,s as U,e as P,V as de,k as H,dh as z,_ as me,gH as ge,b2 as V,K as be,ix as we,eZ as xe}from"./index-cb8c10d0.js";import{i as ve,o as $e}from"./scaleUtils-5a9a93fd.js";import{n as T}from"./floorFilterUtils-080a7cd2.js";import{n as Se}from"./sublayerUtils-bff2a338.js";import{n as Re,p as Fe}from"./popupUtils-6d1fbc49.js";function _(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Ee(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function J(t,e){var s;return typeof t=="number"?t:(s=t==null?void 0:t.stops)!=null&&s.length?Ee(t.stops):e}function Oe(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:a,minSize:l}=o;return(J(a,t)+J(l,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let o=0;o<r;o++)i+=s[o];const n=Math.floor(i/r);return Math.max(n,t)}function Q(t){var n,o;const e=t==null?void 0:t.renderer,s=(n=t==null?void 0:t.event)==null?void 0:n.pointerType,i=s==="touch"?9:6;if(!e)return i;const r="visualVariables"in e?Oe(i,e.visualVariables):i;if(e.type==="simple")return _(r,e.symbol);if(e.type==="unique-value"){let a=r;return(o=e.uniqueValueInfos)==null||o.forEach(l=>{a=_(a,l.symbol)}),a}if(e.type==="class-breaks"){let a=r;return e.classBreakInfos.forEach(l=>{a=_(a,l.symbol)}),a}return e.type==="dot-density"||e.type,r}function je(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:o,layerOption:a,mapExtent:l,maxAllowableOffset:u,returnFieldName:y,returnGeometry:f,returnUnformattedValues:h,returnZ:R,spatialReference:$,timeExtent:v,tolerance:m,width:F}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:x}=Ie(t),j=(e==null?void 0:e.geometry)!=null?e.geometry:null,w={geometryPrecision:n,maxAllowableOffset:u,returnFieldName:y,returnGeometry:f,returnUnformattedValues:h,returnZ:R,tolerance:m},E=j&&j.toJSON()||r;w.imageDisplay=`${F},${o},${s}`,i&&(w.gdbVersion=i),E&&(delete E.spatialReference,w.geometry=JSON.stringify(E),w.geometryType=K(E));const L=$??(E==null?void 0:E.spatialReference)??(l==null?void 0:l.spatialReference);if(L&&(w.sr=W(L)),w.time=v?[v.start,v.end].join(","):null,l){const{xmin:B,ymin:D,xmax:Z,ymax:C}=l;w.mapExtent=`${B},${D},${Z},${C}`}return b&&(w.layerDefs=b),g&&!b&&(w.dynamicLayers=g),w.layers=a==="popup"?"visible":a,x&&!g&&(w.layers+=`:${x.join(",")}`),w}function Ie(t){var $,v;const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:o,gdbVersion:a}=t,l=(v=($=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:$.layer)==null?void 0:v.serviceSublayers,u=o==="popup",y={},f=ve({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),h=[],R=m=>{const F=f===0,g=m.minScale===0||f<=m.minScale,b=m.maxScale===0||f>=m.maxScale;if(m.visible&&(F||g&&b))if(m.sublayers)m.sublayers.forEach(R);else{if((n==null?void 0:n.includes(m.id))===!1||u&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(R),r&&!h.length)y.layerIds=[];else{const m=Se(h,l,a),F=h.map(g=>{const b=T(s,g);return g.toExportImageJSON(b)});if(m)y.dynamicLayers=JSON.stringify(F);else{if(r){let b=h.map(({id:x})=>x);n&&(b=b.filter(x=>n.includes(x))),y.layerIds=b}else n!=null&&n.length&&(y.layerIds=n);const g=Pe(s,h);if(g!=null&&g.length){const b={};for(const x of g)x.definitionExpression&&(b[x.id]=x.definitionExpression);Object.keys(b).length&&(y.layerDefs=JSON.stringify(b))}}}return y}function Pe(t,e){const s=!!(t!=null&&t.length),i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=T(t,r),o=X(n,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var G;let d=G=class extends q{static from(t){return se(G,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};p([c({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),p([c()],d.prototype,"floors",void 0),p([c({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),p([c({types:Y,json:{read:ee,write:!0}})],d.prototype,"geometry",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"height",void 0),p([c({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),p([c({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),p([c({type:I,json:{write:!0}})],d.prototype,"mapExtent",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),p([c({type:te,json:{write:!0}})],d.prototype,"spatialReference",void 0),p([c()],d.prototype,"sublayers",void 0),p([c({type:re,json:{write:!0}})],d.prototype,"timeExtent",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=G=p([M("esri.rest.support.IdentifyParameters")],d);const k=d;let S=class extends q{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return A.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=oe.toJSON(i.type))}};p([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),p([c({type:A})],S.prototype,"feature",void 0),p([ie("feature",["attributes","geometry"])],S.prototype,"readFeature",null),p([ne("feature")],S.prototype,"writeFeature",null),p([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),p([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=p([M("esri.rest.support.IdentifyResult")],S);const _e=S;async function Ne(t,e,s){const i=(e=Ge(e)).geometry?[e.geometry]:[],r=ae(t);return r.path+="/identify",le(i).then(n=>{const o=je(e,{geometry:n==null?void 0:n[0]}),a=ue({...r.query,f:"json",...o}),l=pe(a,s);return ye(r.path,l).then(Ve).then(u=>Me(u,e.sublayers))})}function Ve(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>_e.fromJSON(s)),e}function Ge(t){return t=k.from(t)}function Me(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let N=null;function ke(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends ce{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=fe(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([he(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var o,a;const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new U("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ae(s.sublayers,i,e);if(!r.length)return[];const n=await Le(s,r);if(!((((a=(o=s.capabilities)==null?void 0:o.operations)==null?void 0:a.supportsIdentify)??!0)&&s.version>=10.5)&&!n)throw new U("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return P();let s=null;if(t instanceof A?s=[t]:de.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(H),!(s!=null&&s.length))return P();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),P(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async o=>{var u;o||(o=new z);let a=null;const l="visualVariables"in n?(u=n.visualVariables)==null?void 0:u.find(y=>y.type==="size"):void 0;l&&(N||(N=(await me(()=>import("./index-cb8c10d0.js").then(y=>y.mw),["assets/index-cb8c10d0.js","assets/index-112053cf.css"])).getSize),a=N(l,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),a||(a="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16),s.includes(r)&&(r.symbol=new z({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(i!=null&&i.length)||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),o=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>n){const y=u.sourceLayer;ge(o,y,()=>new Map).set(u.getObjectId(),u)}const a=Array.from(o,([u,y])=>{const f=u.createQuery();return f.objectIds=[...y.keys()],f.outFields=[u.objectIdField],f.returnGeometry=!0,f.maxAllowableOffset=n,f.outSpatialReference=s.spatialReference,u.queryFeatures(f)}),l=await Promise.all(a);if(!this.destroyed)for(const{features:u}of l)for(const y of u){const f=y.sourceLayer,h=o.get(f).get(y.getObjectId());h&&i.includes(h)&&(h.geometry=y.geometry,r(h,"geometry"),this._featuresResolutions.set(h,n))}}_getTargetResolution(t){const e=t*V(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView,l=s!=null?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:$})=>$.load().catch(()=>{})));const u=Math.min(be("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce(($,v)=>v.renderer?Q({renderer:v.renderer,event:l}):$,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,u),f=$e(a,o),h=Math.round(y.width/f),R=new I({xmin:y.center.x-f*h,ymin:y.center.y-f*h,xmax:y.center.x+f*h,ymax:y.center.y+f*h,spatialReference:y.spatialReference});return new k({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:R,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:n,tolerance:u,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=s!=null?s.event:null,o=e.map(async({sublayer:a,popupTemplate:l})=>{var x;if(await a.load().catch(()=>{}),a.capabilities&&!a.capabilities.operations.supportsQuery)return[];const u=a.createQuery(),y=Q({renderer:a.renderer,event:n}),f=this.createFetchPopupFeaturesQueryGeometry(t,y),h=new Set,[R]=await Promise.all([Re(a,l),(x=a.renderer)==null?void 0:x.collectRequiredFields(h,a.fieldsIndex)]);we(h,a.fieldsIndex,R);const $=Array.from(h).sort();if(u.geometry=f,u.outFields=$,u.timeExtent=r,i){const j=i.clone(),w=T(j,a);w!=null&&(u.where=u.where?`(${u.where}) AND (${w})`:w)}const v=this._getTargetResolution(f.width/y),m=await Te(l),F=a.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(l);F||(u.maxAllowableOffset=v);let{features:g}=await a.queryFeatures(u);const b=F?0:v;g=await Ue(a,g);for(const j of g)this._featuresResolutions.set(j,b);return g});return(await Promise.allSettled(o)).reduce((a,l)=>l.status==="fulfilled"?[...a,...l.value]:a,[]).filter(H)}};function Ae(t,e,s){const i=[];if(!t)return i;const r=n=>{const o=n.minScale===0||e<=n.minScale,a=n.maxScale===0||e>=n.maxScale;if(n.visible&&o&&a){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const l=Fe(n,{...s,defaultPopupTemplateEnabled:!1});l!=null&&i.unshift({sublayer:n,popupTemplate:l})}}};return t.map(r),i}function Te(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?xe():Promise.resolve()}async function Le(t,e){var s,i;if((i=(s=t.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}p([c({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),p([c({constructOnly:!0})],O.prototype,"layerView",void 0),p([c({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),p([c({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),p([c({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=p([M("esri.views.layers.support.MapService")],O);function Be(t,e,s,i=new I){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const y=s.overlayPixelSizeInMapUnits(t),f=s.basemapSpatialReference;r=f==null||f.equals(s.spatialReference)?e*y:V(f)/V(s.spatialReference)}const n=t.x-r,o=t.y-r,a=t.x+r,l=t.y+r,{spatialReference:u}=s;return i.xmin=Math.min(n,a),i.ymin=Math.min(o,l),i.xmax=Math.max(n,a),i.ymax=Math.max(o,l),i.spatialReference=u,i}new I;export{O as G,ke as S,Be as r};
