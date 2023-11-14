import{am as Ke,el as Rr}from"./index-cb8c10d0.js";function Qe(S,c){for(var z=0;z<c.length;z++){const E=c[z];if(typeof E!="string"&&!Array.isArray(E)){for(const U in E)if(U!=="default"&&!(U in S)){const q=Object.getOwnPropertyDescriptor(E,U);q&&Object.defineProperty(S,U,q.get?q:{enumerable:!0,get:()=>E[U]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}var $e,Yr,ke,Pr={exports:{}};Pr.exports,$e=Pr,Pr.exports,Yr=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,ke=function(S){var c,z,E;S=S||{},c||(c=S!==void 0?S:{}),c.ready=new Promise(function(r,e){z=r,E=e});var U=Object.assign({},c),q="./this.program",x="";typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),Yr&&(x=Yr),x=x.indexOf("blob:")!==0?x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var J,Oe=c.print||console.log.bind(console),N=c.printErr||console.warn.bind(console);Object.assign(c,U),U=null,c.thisProgram&&(q=c.thisProgram),c.wasmBinary&&(J=c.wasmBinary),c.noExitRuntime,typeof WebAssembly!="object"&&K("no native wasm support detected");var Cr,$r,F,_,Y,X,w,y,Hr,Vr,Br,zr,qr=!1,Nr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function ur(r,e,n){var t=e+n;for(n=e;r[n]&&!(n>=t);)++n;if(16<n-e&&r.buffer&&Nr)return Nr.decode(r.subarray(e,n));for(t="";e<n;){var a=r[e++];if(128&a){var i=63&r[e++];if((224&a)==192)t+=String.fromCharCode((31&a)<<6|i);else{var f=63&r[e++];65536>(a=(240&a)==224?(15&a)<<12|i<<6|f:(7&a)<<18|i<<12|f<<6|63&r[e++])?t+=String.fromCharCode(a):(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else t+=String.fromCharCode(a)}return t}function Lr(r,e,n,t){if(0<t){t=n+t-1;for(var a=0;a<r.length;++a){var i=r.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++a)),127>=i){if(n>=t)break;e[n++]=i}else{if(2047>=i){if(n+1>=t)break;e[n++]=192|i>>6}else{if(65535>=i){if(n+2>=t)break;e[n++]=224|i>>12}else{if(n+3>=t)break;e[n++]=240|i>>18,e[n++]=128|i>>12&63}e[n++]=128|i>>6&63}e[n++]=128|63&i}}e[n]=0}}function Gr(r){for(var e=0,n=0;n<r.length;++n){var t=r.charCodeAt(n);127>=t?e++:2047>=t?e+=2:55296<=t&&57343>=t?(e+=4,++n):e+=3}return e}function Jr(){var r=Cr.buffer;$r=r,c.HEAP8=F=new Int8Array(r),c.HEAP16=Y=new Int16Array(r),c.HEAP32=w=new Int32Array(r),c.HEAPU8=_=new Uint8Array(r),c.HEAPU16=X=new Uint16Array(r),c.HEAPU32=y=new Uint32Array(r),c.HEAPF32=Hr=new Float32Array(r),c.HEAPF64=zr=new Float64Array(r),c.HEAP64=Vr=new BigInt64Array(r),c.HEAPU64=Br=new BigUint64Array(r)}var Xr,Zr=[],Kr=[],Qr=[];function Ee(){var r=c.preRun.shift();Zr.unshift(r)}var D,H=0,Z=null;function K(r){throw c.onAbort&&c.onAbort(r),N(r="Aborted("+r+")"),qr=!0,r=new WebAssembly.RuntimeError(r+". Build with -sASSERTIONS for more info."),E(r),r}function re(){return D.startsWith("data:application/octet-stream;base64,")}if(D="arcgis-knowledge-client-core.wasm",!re()){var ee=D;D=c.locateFile?c.locateFile(ee,x):x+ee}function ne(){var r=D;try{if(r==D&&J)return new Uint8Array(J);throw"both async and sync fetching of the wasm failed"}catch(e){K(e)}}function je(){return J||typeof fetch!="function"?Promise.resolve().then(function(){return ne()}):fetch(D,{credentials:"same-origin"}).then(function(r){if(!r.ok)throw"failed to load wasm binary file at '"+D+"'";return r.arrayBuffer()}).catch(function(){return ne()})}function kr(r){for(;0<r.length;)r.shift()(c)}function Se(r){this.fa=r-24,this.Ya=function(e){y[this.fa+4>>2]=e},this.Oa=function(e){y[this.fa+8>>2]=e},this.Ua=function(){w[this.fa>>2]=0},this.Ma=function(){F[this.fa+12>>0]=0},this.Va=function(){F[this.fa+13>>0]=0},this.Ia=function(e,n){this.La(),this.Ya(e),this.Oa(n),this.Ua(),this.Ma(),this.Va()},this.La=function(){y[this.fa+16>>2]=0}}var cr={};function fr(r){for(;r.length;){var e=r.pop();r.pop()(e)}}function Q(r){return this.fromWireType(w[r>>2])}var L={},V={},sr={};function te(r){if(r===void 0)return"_unknown";var e=(r=r.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=e&&57>=e?"_"+r:r}function Wr(r,e){return r=te(r),function(){return e.apply(this,arguments)}}function Or(r){var e=Error,n=Wr(r,function(t){this.name=r,this.message=t,(t=Error(t).stack)!==void 0&&(this.stack=this.toString()+`
`+t.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var ae=void 0;function lr(r){throw new ae(r)}function $(r,e,n){function t(u){(u=n(u)).length!==r.length&&lr("Mismatched type converter count");for(var l=0;l<r.length;++l)k(r[l],u[l])}r.forEach(function(u){sr[u]=e});var a=Array(e.length),i=[],f=0;e.forEach((u,l)=>{V.hasOwnProperty(u)?a[l]=V[u]:(i.push(u),L.hasOwnProperty(u)||(L[u]=[]),L[u].push(()=>{a[l]=V[u],++f===i.length&&t(a)}))}),i.length===0&&t(a)}function rr(r){if(r===null)return"null";var e=typeof r;return e==="object"||e==="array"||e==="function"?r.toString():""+r}var ie=void 0;function b(r){for(var e="";_[r];)e+=ie[_[r++]];return e}var G=void 0;function m(r){throw new G(r)}function k(r,e,n={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=e.name;if(r||m('type "'+t+'" must have a positive integer typeid pointer'),V.hasOwnProperty(r)){if(n.Wa)return;m("Cannot register type '"+t+"' twice")}V[r]=e,delete sr[r],L.hasOwnProperty(r)&&(e=L[r],delete L[r],e.forEach(a=>a()))}function oe(r,e,n){switch(e){case 0:return n?function(t){return F[t]}:function(t){return _[t]};case 1:return n?function(t){return Y[t>>1]}:function(t){return X[t>>1]};case 2:return n?function(t){return w[t>>2]}:function(t){return y[t>>2]};case 3:return n?function(t){return Vr[t>>3]}:function(t){return Br[t>>3]};default:throw new TypeError("Unknown integer type: "+r)}}function er(r){switch(r){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+r)}}function Er(r){m(r.da.ga.ea.name+" instance already deleted")}var jr=!1;function ue(){}function ce(r){--r.count.value,r.count.value===0&&(r.ia?r.ka.na(r.ia):r.ga.ea.na(r.fa))}function fe(r,e,n){return e===n?r:n.la===void 0||(r=fe(r,e,n.la))===null?null:n.Ka(r)}var se={},nr=[];function Sr(){for(;nr.length;){var r=nr.pop();r.da.ta=!1,r.delete()}}var tr=void 0,ar={};function Fe(r,e){for(e===void 0&&m("ptr should not be undefined");r.la;)e=r.va(e),r=r.la;return ar[e]}function hr(r,e){return e.ga&&e.fa||lr("makeClassHandle requires ptr and ptrType"),!!e.ka!=!!e.ia&&lr("Both smartPtrType and smartPtr must be specified"),e.count={value:1},dr(Object.create(r,{da:{value:e}}))}function dr(r){return typeof FinalizationRegistry>"u"?(dr=e=>e,r):(jr=new FinalizationRegistry(e=>{ce(e.da)}),ue=e=>{jr.unregister(e)},(dr=e=>{var n=e.da;return n.ia&&jr.register(e,{da:n},e),e})(r))}function I(){}function Fr(r,e,n){if(r[e].ha===void 0){var t=r[e];r[e]=function(){return r[e].ha.hasOwnProperty(arguments.length)||m("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[e].ha+")!"),r[e].ha[arguments.length].apply(this,arguments)},r[e].ha=[],r[e].ha[t.sa]=t}}function Dr(r,e,n){c.hasOwnProperty(r)?((n===void 0||c[r].ha!==void 0&&c[r].ha[n]!==void 0)&&m("Cannot register public name '"+r+"' twice"),Fr(c,r,r),c.hasOwnProperty(n)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),c[r].ha[n]=e):(c[r]=e,n!==void 0&&(c[r].kb=n))}function De(r,e,n,t,a,i,f,u){this.name=r,this.constructor=e,this.oa=n,this.na=t,this.la=a,this.Pa=i,this.va=f,this.Ka=u,this.$a=[]}function pr(r,e,n){for(;e!==n;)e.va||m("Expected null or instance of "+n.name+", got an instance of "+e.name),r=e.va(r),e=e.la;return r}function Me(r,e){return e===null?(this.Aa&&m("null is not a valid "+this.name),0):(e.da||m('Cannot pass "'+rr(e)+'" as a '+this.name),e.da.fa||m("Cannot pass deleted object as a pointer of type "+this.name),pr(e.da.fa,e.da.ga.ea,this.ea))}function Ue(r,e){if(e===null){if(this.Aa&&m("null is not a valid "+this.name),this.xa){var n=this.Ba();return r!==null&&r.push(this.na,n),n}return 0}if(e.da||m('Cannot pass "'+rr(e)+'" as a '+this.name),e.da.fa||m("Cannot pass deleted object as a pointer of type "+this.name),!this.wa&&e.da.ga.wa&&m("Cannot convert argument of type "+(e.da.ka?e.da.ka.name:e.da.ga.name)+" to parameter type "+this.name),n=pr(e.da.fa,e.da.ga.ea,this.ea),this.xa)switch(e.da.ia===void 0&&m("Passing raw pointer to smart pointer is illegal"),this.fb){case 0:e.da.ka===this?n=e.da.ia:m("Cannot convert argument of type "+(e.da.ka?e.da.ka.name:e.da.ga.name)+" to parameter type "+this.name);break;case 1:n=e.da.ia;break;case 2:if(e.da.ka===this)n=e.da.ia;else{var t=e.clone();n=this.ab(n,O(function(){t.delete()})),r!==null&&r.push(this.na,n)}break;default:m("Unsupporting sharing policy")}return n}function xe(r,e){return e===null?(this.Aa&&m("null is not a valid "+this.name),0):(e.da||m('Cannot pass "'+rr(e)+'" as a '+this.name),e.da.fa||m("Cannot pass deleted object as a pointer of type "+this.name),e.da.ga.wa&&m("Cannot convert argument of type "+e.da.ga.name+" to parameter type "+this.name),pr(e.da.fa,e.da.ga.ea,this.ea))}function j(r,e,n,t,a,i,f,u,l,s,h){this.name=r,this.ea=e,this.Aa=n,this.wa=t,this.xa=a,this.Za=i,this.fb=f,this.Ga=u,this.Ba=l,this.ab=s,this.na=h,a||e.la!==void 0?this.toWireType=Ue:(this.toWireType=t?Me:xe,this.ja=null)}function le(r,e,n){c.hasOwnProperty(r)||lr("Replacing nonexistant public symbol"),c[r].ha!==void 0&&n!==void 0?c[r].ha[n]=e:(c[r]=e,c[r].sa=n)}var vr=[];function T(r,e){r=b(r);var n=vr[e];return n||(e>=vr.length&&(vr.length=e+1),vr[e]=n=Xr.get(e)),typeof n!="function"&&m("unknown function pointer with signature "+r+": "+e),n}var he=void 0;function de(r){var e=b(r=_e(r));return M(r),e}function B(r,e){function n(i){a[i]||V[i]||(sr[i]?sr[i].forEach(n):(t.push(i),a[i]=!0))}var t=[],a={};throw e.forEach(n),new he(r+": "+t.map(de).join([", "]))}function gr(r,e,n,t,a){var i=e.length;2>i&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");var f=e[1]!==null&&n!==null,u=!1;for(n=1;n<e.length;++n)if(e[n]!==null&&e[n].ja===void 0){u=!0;break}var l=e[0].name!=="void",s=i-2,h=Array(s),p=[],v=[];return function(){if(arguments.length!==s&&m("function "+r+" called with "+arguments.length+" arguments, expected "+s+" args!"),v.length=0,p.length=f?2:1,p[0]=a,f){var o=e[1].toWireType(v,this);p[1]=o}for(var d=0;d<s;++d)h[d]=e[d+2].toWireType(v,arguments[d]),p.push(h[d]);if(d=t.apply(null,p),u)fr(v);else for(var g=f?1:2;g<e.length;g++){var A=g===1?o:h[g-2];e[g].ja!==null&&e[g].ja(A)}return o=l?e[0].fromWireType(d):void 0}}function mr(r,e){for(var n=[],t=0;t<r;t++)n.push(y[e+4*t>>2]);return n}function pe(r,e,n){return r instanceof Object||m(n+' with invalid "this": '+r),r instanceof e.ea.constructor||m(n+' incompatible with "this" of type '+r.constructor.name),r.da.fa||m("cannot call emscripten binding method "+n+" on deleted object"),pr(r.da.fa,r.da.ga.ea,e.ea)}var Mr=[],W=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ur(r){4<r&&--W[r].Ca==0&&(W[r]=void 0,Mr.push(r))}var P=r=>(r||m("Cannot use deleted val. handle = "+r),W[r].value),O=r=>{switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=Mr.length?Mr.pop():W.length;return W[e]={Ca:1,value:r},e}};function Ie(r,e,n){switch(e){case 0:return function(t){return this.fromWireType((n?F:_)[t])};case 1:return function(t){return this.fromWireType((n?Y:X)[t>>1])};case 2:return function(t){return this.fromWireType((n?w:y)[t>>2])};default:throw new TypeError("Unknown integer type: "+r)}}function ir(r,e){var n=V[r];return n===void 0&&m(e+" has unknown type "+de(r)),n}function Re(r,e){switch(e){case 2:return function(n){return this.fromWireType(Hr[n>>2])};case 3:return function(n){return this.fromWireType(zr[n>>3])};default:throw new TypeError("Unknown float type: "+r)}}var ve=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Ye(r,e){for(var n=r>>1,t=n+e/2;!(n>=t)&&X[n];)++n;if(32<(n<<=1)-r&&ve)return ve.decode(_.subarray(r,n));for(n="",t=0;!(t>=e/2);++t){var a=Y[r+2*t>>1];if(a==0)break;n+=String.fromCharCode(a)}return n}function He(r,e,n){if(n===void 0&&(n=2147483647),2>n)return 0;var t=e;n=(n-=2)<2*r.length?n/2:r.length;for(var a=0;a<n;++a)Y[e>>1]=r.charCodeAt(a),e+=2;return Y[e>>1]=0,e-t}function Ve(r){return 2*r.length}function Be(r,e){for(var n=0,t="";!(n>=e/4);){var a=w[r+4*n>>2];if(a==0)break;++n,65536<=a?(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a)):t+=String.fromCharCode(a)}return t}function ze(r,e,n){if(n===void 0&&(n=2147483647),4>n)return 0;var t=e;n=t+n-4;for(var a=0;a<r.length;++a){var i=r.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++a)),w[e>>2]=i,(e+=4)+4>n)break}return w[e>>2]=0,e-t}function qe(r){for(var e=0,n=0;n<r.length;++n){var t=r.charCodeAt(n);55296<=t&&57343>=t&&++n,e+=4}return e}function ge(r,e){for(var n=Array(r),t=0;t<r;++t)n[t]=ir(y[e+4*t>>2],"parameter "+t);return n}var Ne={};function yr(r){var e=Ne[r];return e===void 0?b(r):e}var br=[];function me(){function r(e){e.$$$embind_global$$$=e;var n=typeof $$$embind_global$$$=="object"&&e.$$$embind_global$$$==e;return n||delete e.$$$embind_global$$$,n}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Rr=="object"&&r(Rr)?$$$embind_global$$$=Rr:typeof self=="object"&&r(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function Le(r){var e=br.length;return br.push(r),e}var ye=[],xr={};function be(){if(!Ir){var r,e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:q||"./this.program"};for(r in xr)xr[r]===void 0?delete e[r]:e[r]=xr[r];var n=[];for(r in e)n.push(r+"="+e[r]);Ir=n}return Ir}var Ir,Ge=[null,[],[]];function wr(r){return r%4==0&&(r%100!=0||r%400==0)}var we=[31,29,31,30,31,30,31,31,30,31,30,31],Ae=[31,28,31,30,31,30,31,31,30,31,30,31];function Je(r){var e=Array(Gr(r)+1);return Lr(r,e,0,e.length),e}function Xe(r,e,n,t){function a(o,d,g){for(o=typeof o=="number"?o.toString():o||"";o.length<d;)o=g[0]+o;return o}function i(o,d){return a(o,d,"0")}function f(o,d){function g(C){return 0>C?-1:0<C?1:0}var A;return(A=g(o.getFullYear()-d.getFullYear()))===0&&(A=g(o.getMonth()-d.getMonth()))===0&&(A=g(o.getDate()-d.getDate())),A}function u(o){switch(o.getDay()){case 0:return new Date(o.getFullYear()-1,11,29);case 1:return o;case 2:return new Date(o.getFullYear(),0,3);case 3:return new Date(o.getFullYear(),0,2);case 4:return new Date(o.getFullYear(),0,1);case 5:return new Date(o.getFullYear()-1,11,31);case 6:return new Date(o.getFullYear()-1,11,30)}}function l(o){var d=o.qa;for(o=new Date(new Date(o.ra+1900,0,1).getTime());0<d;){var g=o.getMonth(),A=(wr(o.getFullYear())?we:Ae)[g];if(!(d>A-o.getDate())){o.setDate(o.getDate()+d);break}d-=A-o.getDate()+1,o.setDate(1),11>g?o.setMonth(g+1):(o.setMonth(0),o.setFullYear(o.getFullYear()+1))}return g=new Date(o.getFullYear()+1,0,4),d=u(new Date(o.getFullYear(),0,4)),g=u(g),0>=f(d,o)?0>=f(g,o)?o.getFullYear()+1:o.getFullYear():o.getFullYear()-1}var s=w[t+40>>2];for(var h in t={ib:w[t>>2],hb:w[t+4>>2],ya:w[t+8>>2],Da:w[t+12>>2],za:w[t+16>>2],ra:w[t+20>>2],ma:w[t+24>>2],qa:w[t+28>>2],lb:w[t+32>>2],gb:w[t+36>>2],jb:s&&s?ur(_,s):""},n=n?ur(_,n):"",s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})n=n.replace(new RegExp(h,"g"),s[h]);var p="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),v="January February March April May June July August September October November December".split(" ");for(h in s={"%a":function(o){return p[o.ma].substring(0,3)},"%A":function(o){return p[o.ma]},"%b":function(o){return v[o.za].substring(0,3)},"%B":function(o){return v[o.za]},"%C":function(o){return i((o.ra+1900)/100|0,2)},"%d":function(o){return i(o.Da,2)},"%e":function(o){return a(o.Da,2," ")},"%g":function(o){return l(o).toString().substring(2)},"%G":function(o){return l(o)},"%H":function(o){return i(o.ya,2)},"%I":function(o){return(o=o.ya)==0?o=12:12<o&&(o-=12),i(o,2)},"%j":function(o){for(var d=0,g=0;g<=o.za-1;d+=(wr(o.ra+1900)?we:Ae)[g++]);return i(o.Da+d,3)},"%m":function(o){return i(o.za+1,2)},"%M":function(o){return i(o.hb,2)},"%n":function(){return`
`},"%p":function(o){return 0<=o.ya&&12>o.ya?"AM":"PM"},"%S":function(o){return i(o.ib,2)},"%t":function(){return"	"},"%u":function(o){return o.ma||7},"%U":function(o){return i(Math.floor((o.qa+7-o.ma)/7),2)},"%V":function(o){var d=Math.floor((o.qa+7-(o.ma+6)%7)/7);if(2>=(o.ma+371-o.qa-2)%7&&d++,d)d==53&&((g=(o.ma+371-o.qa)%7)==4||g==3&&wr(o.ra)||(d=1));else{d=52;var g=(o.ma+7-o.qa-1)%7;(g==4||g==5&&wr(o.ra%400-1))&&d++}return i(d,2)},"%w":function(o){return o.ma},"%W":function(o){return i(Math.floor((o.qa+7-(o.ma+6)%7)/7),2)},"%y":function(o){return(o.ra+1900).toString().substring(2)},"%Y":function(o){return o.ra+1900},"%z":function(o){var d=0<=(o=o.gb);return o=Math.abs(o)/60,(d?"+":"-")+("0000"+(o/60*100+o%60)).slice(-4)},"%Z":function(o){return o.jb},"%%":function(){return"%"}},n=n.replace(/%%/g,"\0\0"),s)n.includes(h)&&(n=n.replace(new RegExp(h,"g"),s[h](t)));return(h=Je(n=n.replace(/\0\0/g,"%"))).length>e?0:(F.set(h,r),h.length-1)}ae=c.InternalError=Or("InternalError");for(var Te=Array(256),Ar=0;256>Ar;++Ar)Te[Ar]=String.fromCharCode(Ar);ie=Te,G=c.BindingError=Or("BindingError"),I.prototype.isAliasOf=function(r){if(!(this instanceof I&&r instanceof I))return!1;var e=this.da.ga.ea,n=this.da.fa,t=r.da.ga.ea;for(r=r.da.fa;e.la;)n=e.va(n),e=e.la;for(;t.la;)r=t.va(r),t=t.la;return e===t&&n===r},I.prototype.clone=function(){if(this.da.fa||Er(this),this.da.ua)return this.da.count.value+=1,this;var r=dr,e=Object,n=e.create,t=Object.getPrototypeOf(this),a=this.da;return(r=r(n.call(e,t,{da:{value:{count:a.count,ta:a.ta,ua:a.ua,fa:a.fa,ga:a.ga,ia:a.ia,ka:a.ka}}}))).da.count.value+=1,r.da.ta=!1,r},I.prototype.delete=function(){this.da.fa||Er(this),this.da.ta&&!this.da.ua&&m("Object already scheduled for deletion"),ue(this),ce(this.da),this.da.ua||(this.da.ia=void 0,this.da.fa=void 0)},I.prototype.isDeleted=function(){return!this.da.fa},I.prototype.deleteLater=function(){return this.da.fa||Er(this),this.da.ta&&!this.da.ua&&m("Object already scheduled for deletion"),nr.push(this),nr.length===1&&tr&&tr(Sr),this.da.ta=!0,this},c.getInheritedInstanceCount=function(){return Object.keys(ar).length},c.getLiveInheritedInstances=function(){var r,e=[];for(r in ar)ar.hasOwnProperty(r)&&e.push(ar[r]);return e},c.flushPendingDeletes=Sr,c.setDelayFunction=function(r){tr=r,nr.length&&tr&&tr(Sr)},j.prototype.Qa=function(r){return this.Ga&&(r=this.Ga(r)),r},j.prototype.Ea=function(r){this.na&&this.na(r)},j.prototype.argPackAdvance=8,j.prototype.readValueFromPointer=Q,j.prototype.deleteObject=function(r){r!==null&&r.delete()},j.prototype.fromWireType=function(r){function e(){return this.xa?hr(this.ea.oa,{ga:this.Za,fa:n,ka:this,ia:r}):hr(this.ea.oa,{ga:this,fa:r})}var n=this.Qa(r);if(!n)return this.Ea(r),null;var t=Fe(this.ea,n);if(t!==void 0)return t.da.count.value===0?(t.da.fa=n,t.da.ia=r,t.clone()):(t=t.clone(),this.Ea(r),t);if(t=this.ea.Pa(n),!(t=se[t]))return e.call(this);t=this.wa?t.Ha:t.pointerType;var a=fe(n,this.ea,t.ea);return a===null?e.call(this):this.xa?hr(t.ea.oa,{ga:t,fa:a,ka:this,ia:r}):hr(t.ea.oa,{ga:t,fa:a})},he=c.UnboundTypeError=Or("UnboundTypeError"),c.count_emval_handles=function(){for(var r=0,e=5;e<W.length;++e)W[e]!==void 0&&++r;return r},c.get_first_emval=function(){for(var r=5;r<W.length;++r)if(W[r]!==void 0)return W[r];return null};var Ze={n:function(r){return _r(r+24)+24},m:function(r,e,n){throw new Se(r).Ia(e,n),r},u:function(r){var e=cr[r];delete cr[r];var n=e.Ba,t=e.na,a=e.Fa;$([r],a.map(i=>i.Ta).concat(a.map(i=>i.cb)),i=>{var f={};return a.forEach((u,l)=>{var s=i[l],h=u.Ra,p=u.Sa,v=i[l+a.length],o=u.bb,d=u.eb;f[u.Na]={read:g=>s.fromWireType(h(p,g)),write:(g,A)=>{var C=[];o(d,g,v.toWireType(C,A)),fr(C)}}}),[{name:e.name,fromWireType:function(u){var l,s={};for(l in f)s[l]=f[l].read(u);return t(u),s},toWireType:function(u,l){for(var s in f)if(!(s in l))throw new TypeError('Missing field:  "'+s+'"');var h=n();for(s in f)f[s].write(h,l[s]);return u!==null&&u.push(t,h),h},argPackAdvance:8,readValueFromPointer:Q,ja:t}]})},E:function(r,e,n,t,a){e=b(e),n=er(n);var i=e.indexOf("u")!=-1;i&&(a=(1n<<64n)-1n),k(r,{name:e,fromWireType:function(f){return f},toWireType:function(f,u){if(typeof u!="bigint"&&typeof u!="number")throw new TypeError('Cannot convert "'+rr(u)+'" to '+this.name);if(u<t||u>a)throw new TypeError('Passing a number "'+rr(u)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+t+", "+a+"]!");return u},argPackAdvance:8,readValueFromPointer:oe(e,n,!i),ja:null})},S:function(r,e,n,t,a){var i=er(n);k(r,{name:e=b(e),fromWireType:function(f){return!!f},toWireType:function(f,u){return u?t:a},argPackAdvance:8,readValueFromPointer:function(f){if(n===1)var u=F;else if(n===2)u=Y;else{if(n!==4)throw new TypeError("Unknown boolean type size: "+e);u=w}return this.fromWireType(u[f>>i])},ja:null})},f:function(r,e,n,t,a,i,f,u,l,s,h,p,v){h=b(h),i=T(a,i),u&&(u=T(f,u)),s&&(s=T(l,s)),v=T(p,v);var o=te(h);Dr(o,function(){B("Cannot construct "+h+" due to unbound types",[t])}),$([r,e,n],t?[t]:[],function(d){if(d=d[0],t)var g=d.ea,A=g.oa;else A=I.prototype;d=Wr(o,function(){if(Object.getPrototypeOf(this)!==C)throw new G("Use 'new' to construct "+h);if(R.pa===void 0)throw new G(h+" has no accessible constructor");var Ce=R.pa[arguments.length];if(Ce===void 0)throw new G("Tried to invoke ctor of "+h+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(R.pa).toString()+") parameters instead!");return Ce.apply(this,arguments)});var C=Object.create(A,{constructor:{value:d}});d.prototype=C;var R=new De(h,d,C,v,g,i,u,s);g=new j(h,R,!0,!1,!1),A=new j(h+"*",R,!1,!1,!1);var or=new j(h+" const*",R,!1,!0,!1);return se[r]={pointerType:A,Ha:or},le(o,d),[g,A,or]})},o:function(r,e,n,t,a,i,f){var u=mr(n,t);e=b(e),i=T(a,i),$([],[r],function(l){function s(){B("Cannot call "+h+" due to unbound types",u)}var h=(l=l[0]).name+"."+e;e.startsWith("@@")&&(e=Symbol[e.substring(2)]);var p=l.ea.constructor;return p[e]===void 0?(s.sa=n-1,p[e]=s):(Fr(p,e,h),p[e].ha[n-1]=s),$([],u,function(v){return v=gr(h,[v[0],null].concat(v.slice(1)),null,i,f),p[e].ha===void 0?(v.sa=n-1,p[e]=v):p[e].ha[n-1]=v,[]}),[]})},i:function(r,e,n,t,a,i){0<e||K();var f=mr(e,n);a=T(t,a),$([],[r],function(u){var l="constructor "+(u=u[0]).name;if(u.ea.pa===void 0&&(u.ea.pa=[]),u.ea.pa[e-1]!==void 0)throw new G("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+u.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return u.ea.pa[e-1]=()=>{B("Cannot construct "+u.name+" due to unbound types",f)},$([],f,function(s){return s.splice(1,0,null),u.ea.pa[e-1]=gr(l,s,null,a,i),[]}),[]})},b:function(r,e,n,t,a,i,f,u){var l=mr(n,t);e=b(e),i=T(a,i),$([],[r],function(s){function h(){B("Cannot call "+p+" due to unbound types",l)}var p=(s=s[0]).name+"."+e;e.startsWith("@@")&&(e=Symbol[e.substring(2)]),u&&s.ea.$a.push(e);var v=s.ea.oa,o=v[e];return o===void 0||o.ha===void 0&&o.className!==s.name&&o.sa===n-2?(h.sa=n-2,h.className=s.name,v[e]=h):(Fr(v,e,p),v[e].ha[n-2]=h),$([],l,function(d){return d=gr(p,d,s,i,f),v[e].ha===void 0?(d.sa=n-2,v[e]=d):v[e].ha[n-2]=d,[]}),[]})},c:function(r,e,n,t,a,i,f,u,l,s){e=b(e),a=T(t,a),$([],[r],function(h){var p=(h=h[0]).name+"."+e,v={get:function(){B("Cannot access "+p+" due to unbound types",[n,f])},enumerable:!0,configurable:!0};return v.set=l?()=>{B("Cannot access "+p+" due to unbound types",[n,f])}:()=>{m(p+" is a read-only property")},Object.defineProperty(h.ea.oa,e,v),$([],l?[n,f]:[n],function(o){var d=o[0],g={get:function(){var C=pe(this,h,p+" getter");return d.fromWireType(a(i,C))},enumerable:!0};if(l){l=T(u,l);var A=o[1];g.set=function(C){var R=pe(this,h,p+" setter"),or=[];l(s,R,A.toWireType(or,C)),fr(or)}}return Object.defineProperty(h.ea.oa,e,g),[]}),[]})},R:function(r,e){k(r,{name:e=b(e),fromWireType:function(n){var t=P(n);return Ur(n),t},toWireType:function(n,t){return O(t)},argPackAdvance:8,readValueFromPointer:Q,ja:null})},s:function(r,e,n,t){function a(){}n=er(n),e=b(e),a.values={},k(r,{name:e,constructor:a,fromWireType:function(i){return this.constructor.values[i]},toWireType:function(i,f){return f.value},argPackAdvance:8,readValueFromPointer:Ie(e,n,t),ja:null}),Dr(e,a)},e:function(r,e,n){var t=ir(r,"enum");e=b(e),r=t.constructor,t=Object.create(t.constructor.prototype,{value:{value:n},constructor:{value:Wr(t.name+"_"+e,function(){})}}),r.values[n]=t,r[e]=t},D:function(r,e,n){n=er(n),k(r,{name:e=b(e),fromWireType:function(t){return t},toWireType:function(t,a){return a},argPackAdvance:8,readValueFromPointer:Re(e,n),ja:null})},V:function(r,e,n,t,a,i){var f=mr(e,n);r=b(r),a=T(t,a),Dr(r,function(){B("Cannot call "+r+" due to unbound types",f)},e-1),$([],f,function(u){return le(r,gr(r,[u[0],null].concat(u.slice(1)),null,a,i),e-1),[]})},w:function(r,e,n,t,a){e=b(e),a===-1&&(a=4294967295),a=er(n);var i=u=>u;if(t===0){var f=32-8*n;i=u=>u<<f>>>f}n=e.includes("unsigned")?function(u,l){return l>>>0}:function(u,l){return l},k(r,{name:e,fromWireType:i,toWireType:n,argPackAdvance:8,readValueFromPointer:oe(e,a,t!==0),ja:null})},q:function(r,e,n){function t(i){var f=y;return new a($r,f[1+(i>>=2)],f[i])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][e];k(r,{name:n=b(n),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{Wa:!0})},h:function(r,e,n,t,a,i,f,u,l,s,h,p){n=b(n),i=T(a,i),u=T(f,u),s=T(l,s),p=T(h,p),$([r],[e],function(v){return v=v[0],[new j(n,v.ea,!1,!1,!0,v,t,i,u,s,p)]})},F:function(r,e){var n=(e=b(e))==="std::string";k(r,{name:e,fromWireType:function(t){var a=y[t>>2],i=t+4;if(n)for(var f=i,u=0;u<=a;++u){var l=i+u;if(u==a||_[l]==0){if(f=f?ur(_,f,l-f):"",s===void 0)var s=f;else s+=String.fromCharCode(0),s+=f;f=l+1}}else{for(s=Array(a),u=0;u<a;++u)s[u]=String.fromCharCode(_[i+u]);s=s.join("")}return M(t),s},toWireType:function(t,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var i=typeof a=="string";i||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||m("Cannot pass non-string to std::string");var f=n&&i?Gr(a):a.length,u=_r(4+f+1),l=u+4;if(y[u>>2]=f,n&&i)Lr(a,_,l,f+1);else if(i)for(i=0;i<f;++i){var s=a.charCodeAt(i);255<s&&(M(l),m("String has UTF-16 code units that do not fit in 8 bits")),_[l+i]=s}else for(i=0;i<f;++i)_[l+i]=a[i];return t!==null&&t.push(M,u),u},argPackAdvance:8,readValueFromPointer:Q,ja:function(t){M(t)}})},A:function(r,e,n){if(n=b(n),e===2)var t=Ye,a=He,i=Ve,f=()=>X,u=1;else e===4&&(t=Be,a=ze,i=qe,f=()=>y,u=2);k(r,{name:n,fromWireType:function(l){for(var s,h=y[l>>2],p=f(),v=l+4,o=0;o<=h;++o){var d=l+4+o*e;o!=h&&p[d>>u]!=0||(v=t(v,d-v),s===void 0?s=v:(s+=String.fromCharCode(0),s+=v),v=d+e)}return M(l),s},toWireType:function(l,s){typeof s!="string"&&m("Cannot pass non-string to C++ string type "+n);var h=i(s),p=_r(4+h+e);return y[p>>2]=h>>u,a(s,p+4,h+e),l!==null&&l.push(M,p),p},argPackAdvance:8,readValueFromPointer:Q,ja:function(l){M(l)}})},v:function(r,e,n,t,a,i){cr[r]={name:b(e),Ba:T(n,t),na:T(a,i),Fa:[]}},l:function(r,e,n,t,a,i,f,u,l,s){cr[r].Fa.push({Na:b(e),Ta:n,Ra:T(t,a),Sa:i,cb:f,bb:T(u,l),eb:s})},T:function(r,e){k(r,{Xa:!0,name:e=b(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},k:function(r,e,n){r=P(r),e=ir(e,"emval::as");var t=[],a=O(t);return y[n>>2]=a,e.toWireType(t,r)},z:function(r,e){return r=P(r),(e=ir(e,"emval::as")).toWireType(null,r)},W:function(r,e,n,t){r=P(r),n=ge(e,n);for(var a=Array(e),i=0;i<e;++i){var f=n[i];a[i]=f.readValueFromPointer(t),t+=f.argPackAdvance}return r=r.apply(void 0,a),O(r)},U:function(r,e,n,t,a){r=br[r],e=P(e),n=yr(n);var i=[];return y[t>>2]=O(i),r(e,n,i,a)},G:function(r,e,n,t){(r=br[r])(e=P(e),n=yr(n),null,t)},a:Ur,H:function(r){return r===0?O(me()):(r=yr(r),O(me()[r]))},B:function(r,e){var n=ge(r,e),t=n[0];e=t.name+"_$"+n.slice(1).map(function(f){return f.name}).join("_")+"$";var a=ye[e];if(a!==void 0)return a;var i=Array(r-1);return a=Le((f,u,l,s)=>{for(var h=0,p=0;p<r-1;++p)i[p]=n[p+1].readValueFromPointer(s+h),h+=n[p+1].argPackAdvance;for(f=f[u].apply(f,i),p=0;p<r-1;++p)n[p+1].Ja&&n[p+1].Ja(i[p]);if(!t.Xa)return t.toWireType(l,f)}),ye[e]=a},r:function(r,e){return r=P(r),e=P(e),O(r[e])},g:function(r){4<r&&(W[r].Ca+=1)},I:function(r,e){return(r=P(r))instanceof(e=P(e))},t:function(r){return typeof(r=P(r))=="number"},x:function(r){return typeof(r=P(r))=="string"},p:function(r){return O(yr(r))},j:function(r){fr(P(r)),Ur(r)},d:function(r,e){return r=(r=ir(r,"_emval_take_value")).readValueFromPointer(e),O(r)},y:function(r){return r=P(r),O(typeof r)},C:function(){K("")},N:function(r,e,n){_.copyWithin(r,e,e+n)},M:function(r){var e=_.length;if(2147483648<(r>>>=0))return!1;for(var n=1;4>=n;n*=2){var t=e*(1+.2/n);t=Math.min(t,r+100663296);var a=Math;t=Math.max(r,t),a=a.min.call(a,2147483648,t+(65536-t%65536)%65536);r:{try{Cr.grow(a-$r.byteLength+65535>>>16),Jr();var i=1;break r}catch{}i=void 0}if(i)return!0}return!1},K:function(r,e){var n=0;return be().forEach(function(t,a){var i=e+n;for(a=y[r+4*a>>2]=i,i=0;i<t.length;++i)F[a++>>0]=t.charCodeAt(i);F[a>>0]=0,n+=t.length+1}),0},L:function(r,e){var n=be();y[r>>2]=n.length;var t=0;return n.forEach(function(a){t+=a.length+1}),y[e>>2]=t,0},Q:function(){return 52},P:function(){return 70},O:function(r,e,n,t){for(var a=0,i=0;i<n;i++){var f=y[e>>2],u=y[e+4>>2];e+=8;for(var l=0;l<u;l++){var s=_[f+l],h=Ge[r];s===0||s===10?((r===1?Oe:N)(ur(h,0)),h.length=0):h.push(s)}a+=u}return y[t>>2]=a,0},J:function(r,e,n,t){return Xe(r,e,n,t)}};(function(){function r(a){c.asm=a.exports,Cr=c.asm.X,Jr(),Xr=c.asm.ba,Kr.unshift(c.asm.Y),H--,c.monitorRunDependencies&&c.monitorRunDependencies(H),H==0&&Z&&(a=Z,Z=null,a())}function e(a){r(a.instance)}function n(a){return je().then(function(i){return WebAssembly.instantiate(i,t)}).then(function(i){return i}).then(a,function(i){N("failed to asynchronously prepare wasm: "+i),K(i)})}var t={a:Ze};if(H++,c.monitorRunDependencies&&c.monitorRunDependencies(H),c.instantiateWasm)try{return c.instantiateWasm(t,r)}catch(a){N("Module.instantiateWasm callback failed with error: "+a),E(a)}(J||typeof WebAssembly.instantiateStreaming!="function"||re()||typeof fetch!="function"?n(e):fetch(D,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,t).then(e,function(i){return N("wasm streaming compile failed: "+i),N("falling back to ArrayBuffer instantiation"),n(e)})})).catch(E)})(),c.___wasm_call_ctors=function(){return(c.___wasm_call_ctors=c.asm.Y).apply(null,arguments)};var Tr,_r=c._malloc=function(){return(_r=c._malloc=c.asm.Z).apply(null,arguments)},M=c._free=function(){return(M=c._free=c.asm._).apply(null,arguments)},_e=c.___getTypeName=function(){return(_e=c.___getTypeName=c.asm.$).apply(null,arguments)};function Pe(){function r(){if(!Tr&&(Tr=!0,c.calledRun=!0,!qr)){if(kr(Kr),z(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),c.postRun)for(typeof c.postRun=="function"&&(c.postRun=[c.postRun]);c.postRun.length;){var e=c.postRun.shift();Qr.unshift(e)}kr(Qr)}}if(!(0<H)){if(c.preRun)for(typeof c.preRun=="function"&&(c.preRun=[c.preRun]);c.preRun.length;)Ee();kr(Zr),0<H||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),r()},1)):r())}}if(c.__embind_initialize_bindings=function(){return(c.__embind_initialize_bindings=c.asm.aa).apply(null,arguments)},c.___cxa_is_pointer_type=function(){return(c.___cxa_is_pointer_type=c.asm.ca).apply(null,arguments)},Z=function r(){Tr||Pe(),Tr||(Z=r)},c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();return Pe(),S.ready},$e.exports=ke;var We=Pr.exports;const en=Qe({__proto__:null,default:Ke(We)},[We]);export{en as a};
