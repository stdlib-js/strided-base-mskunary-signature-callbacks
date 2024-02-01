// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&o.call(t,e)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l=n()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=u(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(t){return"number"==typeof t}function b(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function h(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+b(i):b(i)+t,n&&(t="-"+t)),t}var m=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function d(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!y(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=h(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=h(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===v.call(t.specifier)?v.call(r):m.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function w(t){return"string"==typeof t}var E=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,x=String.prototype.replace,S=/e\+(\d)$/,O=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,V=/\.0$/,A=/\.0*e/,F=/(\..*[^0])0*e/;function I(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":E(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=x.call(r,F,"$1e"),r=x.call(r,A,"e"),r=x.call(r,V,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=x.call(r,S,"e+0$1"),r=x.call(r,O,"e-0$1"),t.alternate&&(r=x.call(r,T,"$1."),r=x.call(r,k,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===_.call(t.specifier)?_.call(r):j.call(r)}function P(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function N(t,e,r){var n=e-t.length;return n<0?t:t=r?t+P(n):P(n)+t}var L=String.fromCharCode,C=isNaN,R=Array.isArray;function B(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function M(t){var e,r,n,i,o,u,a,c,l;if(!R(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(w(n=t[c]))u+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(a=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,C(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[a],10),a+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=d(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(o)?String(n.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),u+=n.arg||"",a+=1}return u}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function G(t){var e,r,n,i;for(r=[],i=0,n=$.exec(t);n;)(e=t.slice(i,$.lastIndex-n[0].length)).length&&r.push(e),r.push(Y(n)),i=$.lastIndex,n=$.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function W(t){return"string"==typeof t}function X(t){var e,r,n;if(!W(t))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=G(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return M.apply(null,r)}var Z,U=Object.prototype,H=U.toString,J=U.__defineGetter__,z=U.__defineSetter__,D=U.__lookupGetter__,q=U.__lookupSetter__;Z=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,r){var n,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(D.call(t,e)||q.call(t,e)?(n=t.__proto__,t.__proto__=U,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&J&&J.call(t,e,r.get),u&&z&&z.call(t,e,r.set),t};var K=Z;function Q(t,e,r){K(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function tt(t){return"string"==typeof t}var et=String.prototype.valueOf;var rt=n();function nt(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function it(t){return tt(t)||nt(t)}function ot(t){return"number"==typeof t}Q(it,"isPrimitive",tt),Q(it,"isObject",nt);var ut=Number,at=ut.prototype.toString;var ct=n();function lt(t){return"object"==typeof t&&(t instanceof ut||(ct?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ft(t){return ot(t)||lt(t)}function pt(t){return t!=t}function st(t){return ot(t)&&pt(t)}function gt(t){return lt(t)&&pt(t.valueOf())}function yt(t){return st(t)||gt(t)}Q(ft,"isPrimitive",ot),Q(ft,"isObject",lt),Q(yt,"isPrimitive",st),Q(yt,"isObject",gt);var bt=Number.POSITIVE_INFINITY,ht=ut.NEGATIVE_INFINITY,mt=Math.floor;function vt(t){return mt(t)===t}function dt(t){return t<bt&&t>ht&&vt(t)}function wt(t){return ot(t)&&dt(t)}function Et(t){return lt(t)&&dt(t.valueOf())}function jt(t){return wt(t)||Et(t)}Q(jt,"isPrimitive",wt),Q(jt,"isObject",Et);var _t=Object.prototype.propertyIsEnumerable;var xt=!_t.call("beep","0");function St(t,e){var r;return null!=t&&(!(r=_t.call(t,e))&&xt&&it(t)?!st(e=+e)&&wt(e)&&e>=0&&e<t.length:r)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var Tt=p?f:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!St(t,"callee")},kt=Array.prototype.slice;function Vt(t){return null!==t&&"object"==typeof t}Q(Vt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Ot(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Vt));var At=St((function(){}),"prototype"),Ft=!St({toString:null},"toString");function It(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Pt(t,e,r){var n,i;if(!It(t)&&!tt(t))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!wt(r))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(yt(e)){for(;i<n;i++)if(yt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}var Nt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Rt=Boolean.prototype.toString;var Bt=n();function Mt(t){return"object"==typeof t&&(t instanceof Ct||(Bt?function(t){try{return Rt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function $t(t){return Lt(t)||Mt(t)}function Yt(){return new Function("return this;")()}Q($t,"isPrimitive",Lt),Q($t,"isObject",Mt);var Gt="object"==typeof self?self:null,Wt="object"==typeof window?window:null,Xt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Zt="object"==typeof Xt?Xt:null,Ut="object"==typeof globalThis?globalThis:null;var Ht=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Yt()}if(Ut)return Ut;if(Gt)return Gt;if(Wt)return Wt;if(Zt)return Zt;throw new Error("unexpected error. Unable to resolve global object.")}(),Jt=Ht.document&&Ht.document.childNodes,zt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Kt(t){var e,r,n,i;if(("Object"===(r=l(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=qt.exec(n.toString()))return e[1]}return Vt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}Q(Dt,"REGEXP",qt);var Qt="function"==typeof Nt||"object"==typeof zt||"function"==typeof Jt?function(t){return Kt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Kt(t).toLowerCase():e};function te(t){return t.constructor&&t.constructor.prototype===t}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window;var ne=function(){var t;if("undefined"===Qt(re))return!1;for(t in re)try{-1===Pt(ee,t)&&u(re,t)&&null!==re[t]&&"object"===Qt(re[t])&&te(re[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window;var oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ue=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return Tt(e)?t(kt.call(e)):t(e)}:t:function(t){var e,r,n,i,o,a,c;if(i=[],Tt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Vt(t))return i;r=At&&n}for(o in t)r&&"prototype"===o||!u(t,o)||i.push(String(o));if(Ft)for(e=function(t){if(!1===ie&&!ne)return te(t);try{return te(t)}catch(t){return!1}}(t),c=0;c<oe.length;c++)a=oe[c],e&&"constructor"===a||!u(t,a)||i.push(String(a));return i};function ae(t){return"function"===Qt(t)}var ce,le=Object,fe=Object.getPrototypeOf;ce=ae(Object.getPrototypeOf)?fe:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var pe=ce;var se=Object.prototype;function ge(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(e=function(t){return null==t?null:(t=le(t),pe(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&ae(e.constructor)&&"[object Function]"===l(e.constructor)&&u(e,"isPrototypeOf")&&ae(e.isPrototypeOf)&&(e===se||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var ye=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function be(){return ye.slice()}var he={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function me(){var t;return 0===arguments.length?he.all.slice():(t=he[arguments[0]])?t.slice():[]}function ve(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function de(t,e,r){K(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}Q(me,"enum",ve),function(t,e){var r,n,i;for(r=ue(e),i=0;i<r.length;i++)de(t,n=r[i],e[n])}(me,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var we={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ee(){return{bool:we.bool,int8:we.int8,uint8:we.uint8,uint8c:we.uint8c,int16:we.int16,uint16:we.uint16,int32:we.int32,uint32:we.uint32,int64:we.int64,uint64:we.uint64,float32:we.float32,float64:we.float64,complex64:we.complex64,complex128:we.complex128,binary:we.binary,generic:we.generic,notype:we.notype,userdefined_type:we.userdefined_type}}Q(be,"enum",Ee),function(t,e){var r,n,i;for(r=ue(e),i=0;i<r.length;i++)de(t,n=r[i],e[n])}(be,Ee());var je=function(t,e){var r,n,i,o,a,c,l,f=!0;if(!Vt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ge(e))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",e));if(u(e,"duplicates")&&!Lt(f=e.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(n=(r=ue(t)).length,a={},f)for(l=0;l<n;l++)u(a,o=t[i=r[l]])?(c=a[o],Ot(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<n;l++)a[t[i=r[l]]]=i;return a}(Ee(),{duplicates:!1});var _e=Ee();function xe(t){var e=typeof t;return"string"===e?function(t){var e=_e[t];return"number"==typeof e?e:null}(t)?t:null:"number"===e?function(t){var e=je[t];return"string"==typeof e?e:null}(t):null}var Se="function"==typeof Math.fround?Math.fround:null,Oe="function"==typeof Float32Array;var Te="function"==typeof Float32Array?Float32Array:null;var ke,Ve="function"==typeof Float32Array?Float32Array:void 0;ke=function(){var t,e,r;if("function"!=typeof Te)return!1;try{e=new Te([1,3.14,-3.14,5e40]),r=e,t=(Oe&&r instanceof Float32Array||"[object Float32Array]"===l(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===bt}catch(e){t=!1}return t}()?Ve:function(){throw new Error("not implemented")};var Ae=new ke(1);var Fe="function"==typeof Se?Se:function(t){return Ae[0]=t,Ae[0]};function Ie(t,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ot(t))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",t));if(!ot(e))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return K(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fe(t)}),K(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fe(e)}),this}function Pe(t,e){if(!(this instanceof Pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ot(t))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",t));if(!ot(e))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return K(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),K(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function Ne(t){return wt(t)&&t>=0}function Le(t){return Et(t)&&t.valueOf()>=0}function Ce(t){return Ne(t)||Le(t)}Q(Ie,"BYTES_PER_ELEMENT",4),Q(Ie.prototype,"BYTES_PER_ELEMENT",4),Q(Ie.prototype,"byteLength",8),Q(Ie.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),Q(Ie.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),Q(Pe,"BYTES_PER_ELEMENT",8),Q(Pe.prototype,"BYTES_PER_ELEMENT",8),Q(Pe.prototype,"byteLength",16),Q(Pe.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),Q(Pe.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),Q(Ce,"isPrimitive",Ne),Q(Ce,"isObject",Le);var Re="number";function Be(t,e,r){var n;if(!ae(t))throw new TypeError(X("invalid argument. First argument must be a function. Value: `%s`.",t));if(!Ne(e))throw new TypeError(X("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!ae(r))throw new TypeError(X("invalid argument. Third argument must be a constructor function. Value: `%s`.",r));return n=[function(){var e=t();if(typeof e===Re)return new r(e,0);return e},function(e){var n=t(e);if(typeof n===Re)return new r(n,0);return n},function(e,n){var i=t(e,n);if(typeof i===Re)return new r(i,0);return i},function(e,n,i){var o=t(e,n,i);if(typeof o===Re)return new r(o,0);return o},function(e,n,i,o){var u=t(e,n,i,o);if(typeof u===Re)return new r(u,0);return u},function(e,n,i,o,u){var a=t(e,n,i,o,u);if(typeof a===Re)return new r(a,0);return a}],e<=5?n[e]:function(){var e,n,i;for(e=[],i=0;i<arguments.length;i++)e.push(arguments[i]);if(typeof(n=t.apply(null,e))===Re)return new r(n,0);return n}}var Me="complex64",$e="complex128",Ye={complex64:Ie,complex128:Pe};function Ge(t,e,r){return r===$e?e===Me||e===$e?t[$e]:Be(t.default,1,Ye[r]):r===Me?e===Me?t[Me]:e===$e?t[$e]:Be(t.default,1,Ye[r]):"generic"===r?e===$e?t[$e]:e===Me?t[Me]:t.default:t.default}function We(t,e){var r,n,i,o;for(r=[],o=0;o<e.length;o+=3)n=xe(e[o]),i=xe(e[o+2]),r.push(Ge(t,n,i));return r}export{We as default};
//# sourceMappingURL=mod.js.map
