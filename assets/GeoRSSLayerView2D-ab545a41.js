import{w as l,P as h,x as g,V as w,z as f,A as d,B as n,q as u,v as V}from"./index-cb8c10d0.js";import{m as b,u as S}from"./LayerView-2663e6e1.js";import{i as _}from"./GraphicContainer-8b76bd40.js";import{r as T}from"./GraphicsView2D-4eff31d4.js";import"./scaleUtils-5a9a93fd.js";import"./Container-85b121df.js";import"./definitions-328d54fa.js";import"./enums-bdecffa2.js";import"./Texture-d90263e2.js";import"./color-ebf39a9d.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-9f13a3fe.js";import"./FeatureContainer-369d9021.js";import"./AttributeStoreView-f57c4151.js";import"./TiledDisplayObject-2b64e00b.js";import"./WGLContainer-6804eac4.js";import"./FramebufferObject-80159f0f.js";import"./ProgramTemplate-4339738f.js";import"./GeometryUtils-67cf8401.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-f0ab7973.js";import"./featureConversionUtils-317e3645.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-1ef3f471.js";import"./ExpandedCIM-800e3b93.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-214f8e9b.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b480e172.js";import"./floatRGBA-028aa075.js";import"./util-77b54e6c.js";import"./TileContainer-9fad44e6.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-0dfcf0d7.js";import"./projectionSupport-276693a5.js";import"./json-48e3ea08.js";import"./Matcher-1df389f9.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-0f11baf4.js";import"./ComputedAttributeStorage-82dd5a77.js";import"./TimeOnly-c5d299c6.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new w(i.features),p=t.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const we=y;export{we as default};
