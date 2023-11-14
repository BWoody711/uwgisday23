import{q as m,v as d,w as u,P as y,K as h,L as c}from"./index-cb8c10d0.js";import b from"./FeatureLayerView2D-8db8a0d1.js";import"./Container-85b121df.js";import"./definitions-328d54fa.js";import"./enums-bdecffa2.js";import"./Texture-d90263e2.js";import"./LayerView-2663e6e1.js";import"./scaleUtils-5a9a93fd.js";import"./AttributeStoreView-f57c4151.js";import"./TiledDisplayObject-2b64e00b.js";import"./color-ebf39a9d.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-6804eac4.js";import"./FramebufferObject-80159f0f.js";import"./ProgramTemplate-4339738f.js";import"./GeometryUtils-67cf8401.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-f0ab7973.js";import"./featureConversionUtils-317e3645.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-1ef3f471.js";import"./ExpandedCIM-800e3b93.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-214f8e9b.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b480e172.js";import"./floatRGBA-028aa075.js";import"./util-77b54e6c.js";import"./BitmapTileContainer-5f4783da.js";import"./Bitmap-2721d778.js";import"./TileContainer-9fad44e6.js";import"./CircularArray-ef508845.js";import"./BufferPool-f5e44a0f.js";import"./FeatureContainer-369d9021.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-6d1fbc49.js";import"./RefreshableLayerView-a29c66c4.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const oe=n;export{oe as default};
