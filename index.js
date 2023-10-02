// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).callbacks=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&o.call(t,e)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l,f=n()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=u(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function b(t){return"number"==typeof t}function h(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function m(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+h(i):h(i)+t,n&&(t="-"+t)),t}var d=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!b(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=m(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=m(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===v.call(t.specifier)?v.call(r):d.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function E(t){return"string"==typeof t}var j=Math.abs,_=String.prototype.toLowerCase,x=String.prototype.toUpperCase,S=String.prototype.replace,T=/e\+(\d)$/,O=/e-(\d)$/,k=/^(\d+)$/,V=/^(\d+)e/,A=/\.0$/,F=/\.0*e/,I=/(\..*[^0])0*e/;function P(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":j(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=S.call(r,I,"$1e"),r=S.call(r,F,"e"),r=S.call(r,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=S.call(r,T,"e+0$1"),r=S.call(r,O,"e-0$1"),t.alternate&&(r=S.call(r,k,"$1."),r=S.call(r,V,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===x.call(t.specifier)?x.call(r):_.call(r)}function N(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function L(t,e,r){var n=e-t.length;return n<0?t:t=r?t+N(n):N(n)+t}var C=String.fromCharCode,R=isNaN,B=Array.isArray;function M(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function $(t){var e,r,n,i,o,u,a,c,l;if(!B(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(E(n=t[c]))u+=n;else{if(e=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(a=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,R(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[a],10),a+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),u+=n.arg||"",a+=1}return u}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function W(t){var e,r,n,i;for(r=[],i=0,n=Y.exec(t);n;)(e=t.slice(i,Y.lastIndex-n[0].length)).length&&r.push(e),r.push(G(n)),i=Y.lastIndex,n=Y.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function X(t){return"string"==typeof t}function Z(t){var e,r,n;if(!X(t))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=W(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return $.apply(null,r)}var U,H=Object.prototype,J=H.toString,z=H.__defineGetter__,D=H.__defineSetter__,q=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,r){var n,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(q.call(t,e)||K.call(t,e)?(n=t.__proto__,t.__proto__=H,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(t,e,r.get),u&&D&&D.call(t,e,r.set),t};var Q=U;function tt(t,e,r){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function et(t){return"string"==typeof t}var rt=String.prototype.valueOf;var nt=n();function it(t){return"object"==typeof t&&(t instanceof String||(nt?function(t){try{return rt.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function ot(t){return et(t)||it(t)}function ut(t){return"number"==typeof t}tt(ot,"isPrimitive",et),tt(ot,"isObject",it);var at=Number,ct=at.prototype.toString;var lt=n();function ft(t){return"object"==typeof t&&(t instanceof at||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function gt(t){return ut(t)&&st(t)}function yt(t){return ft(t)&&st(t.valueOf())}function bt(t){return gt(t)||yt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",gt),tt(bt,"isObject",yt);var ht=Number.POSITIVE_INFINITY,mt=at.NEGATIVE_INFINITY,dt=Math.floor;function vt(t){return dt(t)===t}function wt(t){return t<ht&&t>mt&&vt(t)}function Et(t){return ut(t)&&wt(t)}function jt(t){return ft(t)&&wt(t.valueOf())}function _t(t){return Et(t)||jt(t)}tt(_t,"isPrimitive",Et),tt(_t,"isObject",jt);var xt=Object.prototype.propertyIsEnumerable;var St=!xt.call("beep","0");function Tt(t,e){var r;return null!=t&&(!(r=xt.call(t,e))&&St&&ot(t)?!gt(e=+e)&&Et(e)&&e>=0&&e<t.length:r)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var kt=s?p:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Tt(t,"callee")},Vt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Ot(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(At));var Ft=Tt((function(){}),"prototype"),It=!Tt({toString:null},"toString");function Pt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,e,r){var n,i;if(!Pt(t)&&!et(t))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Et(r))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(bt(e)){for(;i<n;i++)if(bt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}var Lt=/./;function Ct(t){return"boolean"==typeof t}var Rt=Boolean,Bt=Boolean.prototype.toString;var Mt=n();function $t(t){return"object"==typeof t&&(t instanceof Rt||(Mt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Yt(t){return Ct(t)||$t(t)}function Gt(){return new Function("return this;")()}tt(Yt,"isPrimitive",Ct),tt(Yt,"isObject",$t);var Wt="object"==typeof self?self:null,Xt="object"==typeof window?window:null,Zt="object"==typeof global?global:null,Ut="object"==typeof globalThis?globalThis:null;var Ht=function(t){if(arguments.length){if(!Ct(t))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Gt()}if(Ut)return Ut;if(Wt)return Wt;if(Xt)return Xt;if(Zt)return Zt;throw new Error("unexpected error. Unable to resolve global object.")}(),Jt=Ht.document&&Ht.document.childNodes,zt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Kt(t){var e,r,n,i;if(("Object"===(r=f(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=qt.exec(n.toString()))return e[1]}return At(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}tt(Dt,"REGEXP",qt);var Qt="function"==typeof Lt||"object"==typeof zt||"function"==typeof Jt?function(t){return Kt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Kt(t).toLowerCase():e};function te(t){return t.constructor&&t.constructor.prototype===t}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window;var ne=function(){var t;if("undefined"===Qt(re))return!1;for(t in re)try{-1===Nt(ee,t)&&u(re,t)&&null!==re[t]&&"object"===Qt(re[t])&&te(re[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window;var oe,ue=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];oe=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return kt(e)?t(Vt.call(e)):t(e)}:t:function(t){var e,r,n,i,o,a,c;if(i=[],kt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!At(t))return i;r=Ft&&n}for(o in t)r&&"prototype"===o||!u(t,o)||i.push(String(o));if(It)for(e=function(t){if(!1===ie&&!ne)return te(t);try{return te(t)}catch(t){return!1}}(t),c=0;c<ue.length;c++)a=ue[c],e&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var ae=oe;function ce(t){return"function"===Qt(t)}var le,fe=Object,pe=Object.getPrototypeOf;le=ce(Object.getPrototypeOf)?pe:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var se=le;var ge=Object.prototype;function ye(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(e=function(t){return null==t?null:(t=fe(t),se(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&ce(e.constructor)&&"[object Function]"===f(e.constructor)&&u(e,"isPrototypeOf")&&ce(e.isPrototypeOf)&&(e===ge||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var be=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function he(){return be.slice()}var me={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function de(){var t;return 0===arguments.length?me.all.slice():(t=me[arguments[0]])?t.slice():[]}function ve(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function we(t,e,r){Q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}tt(de,"enum",ve),function(t,e){var r,n,i;for(r=ae(e),i=0;i<r.length;i++)we(t,n=r[i],e[n])}(de,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ee={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function je(){return{bool:Ee.bool,int8:Ee.int8,uint8:Ee.uint8,uint8c:Ee.uint8c,int16:Ee.int16,uint16:Ee.uint16,int32:Ee.int32,uint32:Ee.uint32,int64:Ee.int64,uint64:Ee.uint64,float32:Ee.float32,float64:Ee.float64,complex64:Ee.complex64,complex128:Ee.complex128,binary:Ee.binary,generic:Ee.generic,notype:Ee.notype,userdefined_type:Ee.userdefined_type}}tt(he,"enum",je),function(t,e){var r,n,i;for(r=ae(e),i=0;i<r.length;i++)we(t,n=r[i],e[n])}(he,je());var _e=function(t,e){var r,n,i,o,a,c,l,f=!0;if(!At(t))throw new TypeError(Z("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ye(e))throw new TypeError(Z("invalid argument. Options argument must be an object. Value: `%s`.",e));if(u(e,"duplicates")&&!Ct(f=e.duplicates))throw new TypeError(Z("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(n=(r=ae(t)).length,a={},f)for(l=0;l<n;l++)u(a,o=t[i=r[l]])?(c=a[o],Ot(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<n;l++)a[t[i=r[l]]]=i;return a}(je(),{duplicates:!1});var xe=je();function Se(t){var e=typeof t;return"string"===e?function(t){var e=xe[t];return"number"==typeof e?e:null}(t)?t:null:"number"===e?function(t){var e=_e[t];return"string"==typeof e?e:null}(t):null}var Te="function"==typeof Math.fround?Math.fround:null,Oe="function"==typeof Float32Array;var ke="function"==typeof Float32Array?Float32Array:null;var Ve,Ae="function"==typeof Float32Array?Float32Array:void 0;Ve=function(){var t,e,r;if("function"!=typeof ke)return!1;try{e=new ke([1,3.14,-3.14,5e40]),r=e,t=(Oe&&r instanceof Float32Array||"[object Float32Array]"===f(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ht}catch(e){t=!1}return t}()?Ae:function(){throw new Error("not implemented")};var Fe=new Ve(1);var Ie="function"==typeof Te?Te:function(t){return Fe[0]=t,Fe[0]};function Pe(t,e){if(!(this instanceof Pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ut(t))throw new TypeError(Z("invalid argument. Real component must be a number. Value: `%s`.",t));if(!ut(e))throw new TypeError(Z("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ie(t)}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ie(e)}),this}function Ne(t,e){if(!(this instanceof Ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ut(t))throw new TypeError(Z("invalid argument. Real component must be a number. Value: `%s`.",t));if(!ut(e))throw new TypeError(Z("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function Le(t){return Et(t)&&t>=0}function Ce(t){return jt(t)&&t.valueOf()>=0}function Re(t){return Le(t)||Ce(t)}tt(Pe,"BYTES_PER_ELEMENT",4),tt(Pe.prototype,"BYTES_PER_ELEMENT",4),tt(Pe.prototype,"byteLength",8),tt(Pe.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),tt(Pe.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),tt(Ne,"BYTES_PER_ELEMENT",8),tt(Ne.prototype,"BYTES_PER_ELEMENT",8),tt(Ne.prototype,"byteLength",16),tt(Ne.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),tt(Ne.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),tt(Re,"isPrimitive",Le),tt(Re,"isObject",Ce);var Be="number";function Me(t,e,r){var n;if(!ce(t))throw new TypeError(Z("invalid argument. First argument must be a function. Value: `%s`.",t));if(!Le(e))throw new TypeError(Z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!ce(r))throw new TypeError(Z("invalid argument. Third argument must be a constructor function. Value: `%s`.",r));return n=[function(){var e=t();if(typeof e===Be)return new r(e,0);return e},function(e){var n=t(e);if(typeof n===Be)return new r(n,0);return n},function(e,n){var i=t(e,n);if(typeof i===Be)return new r(i,0);return i},function(e,n,i){var o=t(e,n,i);if(typeof o===Be)return new r(o,0);return o},function(e,n,i,o){var u=t(e,n,i,o);if(typeof u===Be)return new r(u,0);return u},function(e,n,i,o,u){var a=t(e,n,i,o,u);if(typeof a===Be)return new r(a,0);return a}],e<=5?n[e]:function(){var e,n,i;for(e=[],i=0;i<arguments.length;i++)e.push(arguments[i]);if(typeof(n=t.apply(null,e))===Be)return new r(n,0);return n}}var $e="complex64",Ye="complex128",Ge={complex64:Pe,complex128:Ne};function We(t,e,r){return r===Ye?e===$e||e===Ye?t[Ye]:Me(t.default,1,Ge[r]):r===$e?e===$e?t[$e]:e===Ye?t[Ye]:Me(t.default,1,Ge[r]):"generic"===r?e===Ye?t[Ye]:e===$e?t[$e]:t.default:t.default}return function(t,e){var r,n,i,o;for(r=[],o=0;o<e.length;o+=3)n=Se(e[o]),i=Se(e[o+2]),r.push(We(t,n,i));return r}}));
//# sourceMappingURL=index.js.map
