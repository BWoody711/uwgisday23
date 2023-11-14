import{b7 as T,aF as k,U as G,b as D,V as z,w as F,el as N,C,b6 as $,b5 as O,bf as U,em as W,en as A,aB as H,dS as K,q as v,t as S,v as J}from"./index-20a3a931.js";import{b as P,g as Y,d as Q}from"./kmlUtils-1cb62878.js";import{f as X,w as Z,b as tt}from"./Bitmap-cfe64b9c.js";import{a as et}from"./BitmapContainer-8671a1f9.js";import{m as it,u as at}from"./LayerView-098fab9c.js";import{i as M}from"./GraphicContainer-d2504332.js";import{r as R}from"./GraphicsView2D-1b0e6664.js";import{C as st,e as rt}from"./rasterProjectionHelper-152673e6.js";import{a as ot}from"./WGLContainer-669855af.js";import{N as nt,o as lt}from"./RenderingContext-bffae766.js";import{D as E,G as ht,U as pt,X as q}from"./enums-bdecffa2.js";import{E as mt}from"./FramebufferObject-eeddb2a7.js";import{m as ct}from"./rasterUtils-bd064a14.js";import{e as L,T as dt}from"./Texture-54d8fcd1.js";import"./Container-432cd32f.js";import"./definitions-ebb85b04.js";import"./color-58fa3ac3.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./scaleUtils-360fb5b9.js";import"./BaseGraphicContainer-8cf5803e.js";import"./FeatureContainer-18d2828b.js";import"./AttributeStoreView-0095b6c5.js";import"./TiledDisplayObject-a378007a.js";import"./visualVariablesUtils-2a678f55.js";import"./OptimizedGeometry-d94e541f.js";import"./ExpandedCIM-7b94de45.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-b50434fc.js";import"./GeometryUtils-ff18ef05.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-1c04739f.js";import"./floatRGBA-9bceb527.js";import"./util-5587a23d.js";import"./TileContainer-25845c65.js";import"./vec3f32-2da9db36.js";import"./ProgramTemplate-924f6333.js";import"./normalizeUtilsSync-add08810.js";import"./projectionSupport-84804d58.js";import"./json-48e3ea08.js";import"./Matcher-893ea5f4.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-8efe0fd7.js";import"./earcut-c10b150c.js";import"./ComputedAttributeStorage-602eae2f.js";import"./featureConversionUtils-c83131eb.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./TimeOnly-4776e6b3.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./programUtils-38d7ba08.js";import"./NestedMap-1b5db22e.js";import"./OrderIndependentTransparency-6ae10952.js";import"./basicInterfaces-11f56cb3.js";import"./testSVGPremultipliedAlpha-2b6562bd.js";import"./doublePrecisionUtils-e3c3d0d8.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new nt(e,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=lt("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const e=T(t.extent,a),s=new k({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:h}=st(s,a,t.extent);let n=(o+h)/2;const l=Math.round((e.xmax-e.xmin)/n),u=Math.round((e.ymax-e.ymin)/n);n=(e.width/l+e.height/u)/2;const I=new k({x:n,y:n,spatialReference:e.spatialReference}),g=rt({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=ct(this._rctx,g),y=new L(l,u);y.wrapMode=E.CLAMP_TO_EDGE;const m=new mt(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:b=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,b),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,_=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,ht.RGBA,pt.UNSIGNED_BYTE,_.data);const B=m.detachColorTexture(q.COLOR_ATTACHMENT0);return m.dispose(),{texture:B,extent:e,imageData:_}}const f=m.detachColorTexture(q.COLOR_ATTACHMENT0);return m.dispose(),{texture:f,extent:e}}reprojectBitmapData(t,a){const r=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,e=new L;e.wrapMode=E.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const s=new dt(this._rctx,e,r),o=this.reprojectTexture({texture:s,extent:t.extent},a,!0);o.texture.dispose();const h=document.createElement("canvas"),n=o.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:o.extent}}async loadAndReprojectBitmapData(t,a,r){const e=(await G(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=e.width,s.height=e.height;const o=s.getContext("2d");o.drawImage(e,0,0);const h=o.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const n=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new z}async hitTest(i,t){var r,e,s;const a=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(s=this._polygonsView)==null?void 0:s.hitTest(i)].flat().filter(Boolean).map(o=>(o.layer=a,o.sourceLayer=a,{type:"graphic",graphic:o,layer:a,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),F(()=>this.layer.visibleSublayers,i=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of i){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=N(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,a;((t=this.view.spatialReference)!=null&&t.isWGS84||(a=this.view.spatialReference)!=null&&a.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,$.fromJSON(i.extent),this.view.spatialReference).then(r=>{const e=new tt(r.bitmapData);e.x=r.extent.xmin,e.y=r.extent.ymax,e.resolution=r.extent.width/r.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:a,viewBoundScale:r,httpQuery:e}=i;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await O(),r!=null&&r!==1){const c=new $(t.extent);c.expand(r),s=c}else s=t.extent;s=T(s,U.WGS84);const o=T(s,U.WebMercator),h=s.xmin,n=s.xmax,l=s.ymin,u=s.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let _;for(_ in y)c[V]=c[V].replace(_,y[_])}},x=A(a);m(x);let b={};e!=null&&(b=A(e),m(b));const f=H(i.href);return f.query={...f.query,...x,...b},`${f.path}?${K(x)}`}return i.href}async _fetchService(i){const t=new j;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,a){return this._fetchParsedKML(i,a).then(async r=>{for(const e of r.sublayers){t.allSublayers.set(e.id,e);const s=e.points?await P(e.points):[],o=e.polylines?await P(e.polylines):[],h=e.polygons?await P(e.polygons):[],n=e.mapImages||[];if(t.allPoints.push(...s.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...h.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t,a)}}})}_fetchParsedKML(i,t){return Y(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>Q(a.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([J("esri.views.2d.layers.KMLLayerView2D")],d);const we=d;export{we as default};