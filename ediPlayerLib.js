!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=50)}([function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=r(26),o=r(27),i=r(28);function u(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=f.prototype:(null===t&&(t=new f(e)),t.length=e),t}function f(t,e,r){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);f.TYPED_ARRAY_SUPPORT?(t=e).__proto__=f.prototype:t=h(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!f.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|p(e,r),o=(t=a(t,n)).write(e,r);o!==n&&(t=t.slice(0,o));return t}(t,e,r):function(t,e){if(f.isBuffer(e)){var r=0|d(e.length);return 0===(t=a(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):h(t,e);if("Buffer"===e.type&&i(e.data))return h(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e){if(l(e),t=a(t,e<0?0:0|d(e)),!f.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function h(t,e){var r=e.length<0?0:0|d(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function d(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function p(t,e){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return k(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return z(t).length;default:if(n)return k(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:y(t,e,r,n,o);if("number"==typeof e)return e&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):y(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function y(t,e,r,n,o){var i,u=1,a=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,a/=2,f/=2,r/=2}function s(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(o){var l=-1;for(i=r;i<a;i++)if(s(t,i)===s(e,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===f)return l*u}else-1!==l&&(i-=i-l),l=-1}else for(r+f>a&&(r=a-f),i=r;i>=0;i--){for(var c=!0,h=0;h<f;h++)if(s(t,i+h)!==s(e,h)){c=!1;break}if(c)return i}return-1}function w(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var a=parseInt(e.substr(2*u,2),16);if(isNaN(a))return u;t[r+u]=a}return u}function b(t,e,r,n){return F(k(e,t.length-r),t,r,n)}function _(t,e,r,n){return F(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function E(t,e,r,n){return _(t,e,r,n)}function A(t,e,r,n){return F(z(e),t,r,n)}function m(t,e,r,n){return F(function(t,e){for(var r,n,o,i=[],u=0;u<t.length&&!((e-=2)<0);++u)r=t.charCodeAt(u),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function M(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,u,a,f,s=t[o],l=null,c=s>239?4:s>223?3:s>191?2:1;if(o+c<=r)switch(c){case 1:s<128&&(l=s);break;case 2:128==(192&(i=t[o+1]))&&(f=(31&s)<<6|63&i)>127&&(l=f);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(f=(15&s)<<12|(63&i)<<6|63&u)>2047&&(f<55296||f>57343)&&(l=f);break;case 4:i=t[o+1],u=t[o+2],a=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&a)&&(f=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&a)>65535&&f<1114112&&(l=f)}null===l?(l=65533,c=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),o+=c}return function(t){var e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=R));return r}(n)}e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=u(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,e,r){return s(null,t,e,r)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,e,r){return function(t,e,r,n){return l(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,e){if(!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var u=t[r];if(!f.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},f.byteLength=p,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?M(this,0,t):function(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return M(this,e,r);case"ascii":return B(this,e,r);case"latin1":case"binary":return O(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,e,r,n,o){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),a=Math.min(i,u),s=this.slice(n,o),l=t.slice(e,r),c=0;c<a;++c)if(s[c]!==l[c]){i=s[c],u=l[c];break}return i<u?-1:u<i?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return w(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return E(this,t,e,r);case"base64":return A(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function B(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function T(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=N(t[i]);return o}function U(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function S(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function j(t,e,r,n,o,i){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function I(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function L(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function D(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Y(t,e,r,n,i){return i||D(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function x(t,e,r,n,i){return i||D(t,0,r,8),o.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),f.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=f.prototype;else{var o=e-t;r=new f(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},f.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||S(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},f.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||S(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},f.prototype.readUInt8=function(t,e){return e||S(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return e||S(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return e||S(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return e||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return e||S(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||S(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||S(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},f.prototype.readInt8=function(t,e){return e||S(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){e||S(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){e||S(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return e||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return e||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return e||S(t,4,this.length),o.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return e||S(t,4,this.length),o.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return e||S(t,8,this.length),o.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return e||S(t,8,this.length),o.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||j(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||j(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);j(this,t,e,r,o-1,-o)}var i=0,u=1,a=0;for(this[e]=255&t;++i<r&&(u*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);j(this,t,e,r,o-1,-o)}var i=r-1,u=1,a=0;for(this[e+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||j(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},f.prototype.writeFloatLE=function(t,e,r){return Y(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return Y(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return x(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return x(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!f.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},f.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var u=f.isBuffer(t)?t:k(new f(t,n).toString()),a=u.length;for(i=0;i<r-e;++i)this[i+e]=u[i%a]}return this};var C=/[^+\/0-9A-Za-z-_]/g;function N(t){return t<16?"0"+t.toString(16):t.toString(16)}function k(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(C,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}}).call(this,r(25))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5);e.default=function(t,e,r){void 0===e&&(e=0),r||(r=8*t.length-e);var o=Math.floor(e/8),i=Math.floor(r/8)+2,u=[];u.length=8*i;for(var a=0;a<i;a++){if(void 0!==t[o+a]){var f=n.default(t[o+a]);u[8*a]=f[0],u[8*a+1]=f[1],u[8*a+2]=f[2],u[8*a+3]=f[3],u[8*a+4]=f[4],u[8*a+5]=f[5],u[8*a+6]=f[6],u[8*a+7]=f[7]}}var s=e%8;return u.slice(s,s+r)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!Array.isArray(t)||8!==t.length)throw new RangeError("invalid array length");for(var e=0,r=0;r<8;r++)t[7-r]&&(e|=1<<r);return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8);e.bits=n.default;var o=r(23);e.buffer=o.default;var i=r(39);e.byte=i.default;var u=r(40);e.integer=u.default;var a=r(44);e.nibble=a.default;var f=r(47);e.string=f.default,e.default={bits:n.default,buffer:o.default,byte:i.default,integer:u.default,nibble:a.default,string:f.default}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],r=0;r<t.length;r++)e[r]=1^t[r];return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t>255||t<0||~~t!==t)throw new RangeError("invalid byte");for(var e=[0,0,0,0,0,0,0,0],r=0;r<8;r++)e[7-r]=t>>r&1;return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.p2=[];for(var n=0;n<32;n++)e.p2[n]=Math.pow(2,n)},function(t,e){window.Module={preRun:[],postRun:[],internalCbs:{},setStatus:function(t){},totalDependencies:0,onRuntimeInitialized:()=>{console.log("init done, calling cpp init"),Module.ccall("init",null),window.initDone=!0,Module.print=(t=>console.log(t))}};var r=document.createElement("script");r.type="text/javascript",r.src="irtdab.js",document.body.append(r)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9);e.and=n.default;var o=r(10);e.nand=o.default;var i=r(11);e.nor=i.default;var u=r(4);e.not=u.default;var a=r(12);e.or=a.default;var f=r(13);e.reduceAnd=f.default;var s=r(14);e.reduceNand=s.default;var l=r(15);e.reduceNor=l.default;var c=r(16);e.reduceOr=c.default;var h=r(17);e.reduceXnor=h.default;var d=r(18);e.reduceXor=d.default;var p=r(19);e.toBoolean=p.default;var g=r(20);e.toString=g.default;var v=r(21);e.xnor=v.default;var y=r(22);e.xor=y.default,e.default={and:n.default,nand:o.default,nor:i.default,not:u.default,or:a.default,reduceAnd:f.default,reduceNand:s.default,reduceNor:l.default,reduceOr:c.default,reduceXnor:h.default,reduceXor:d.default,toBoolean:p.default,toString:g.default,xnor:v.default,xor:y.default}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var r=[],n=0;n<t.length;n++)r[n]=t[n]&e[n];return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var r=[],n=0;n<t.length;n++)r[n]=t[n]&e[n]^1;return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var r=[],n=0;n<t.length;n++)r[n]=1^(t[n]|e[n]);return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var r=[],n=0;n<t.length;n++)r[n]=t[n]|e[n];return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t.length<2)throw new RangeError("Not enough bits.");for(var e=t[0],r=1;r<t.length;r++)e&=t[r];return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t.length<2)throw new RangeError("Not enough bits.");for(var e=t[0],r=1;r<t.length;r++)e=e&t[r]^1;return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t.length<2)throw new RangeError("Not enough bits.");for(var e=t[0],r=1;r<t.length;r++)e=1^(e|t[r]);return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t.length<2)throw new RangeError("Not enough bits.");for(var e=t[0],r=1;r<t.length;r++)e|=t[r];return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t.length<2)throw new RangeError("Not enough bits.");for(var e=t[0],r=1;r<t.length;r++)e^=1^t[r];return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t.length<2)throw new RangeError("Not enough bits.");for(var e=t[0],r=1;r<t.length;r++)e^=t[r];return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],r=0;r<t.length;r++)e[r]=1===t[r];return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=" "),!e)return t.join("");for(var n="",o=0;o<t.length;o++)n+=""+t[o],o%e==e-1&&o!==t.length-1&&(n+=r);return n}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var r=[],n=0;n<t.length;n++)r[n]=t[n]^e[n]^1;return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var r=[],n=0;n<t.length;n++)r[n]=t[n]^e[n];return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(24);e.and=n.default;var o=r(29);e.create=o.default;var i=r(30);e.modify=i.default;var u=r(31);e.nand=u.default;var a=r(32);e.nor=a.default;var f=r(33);e.not=f.default;var s=r(34);e.or=s.default;var l=r(1);e.read=l.default;var c=r(35);e.readInt=c.default;var h=r(36);e.readUInt=h.default;var d=r(37);e.xnor=d.default;var p=r(38);e.xor=p.default,e.default={and:n.default,create:o.default,modify:i.default,nand:u.default,nor:a.default,not:f.default,or:s.default,read:l.default,readInt:c.default,readUInt:h.default,xnor:d.default,xor:p.default}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,n){void 0===n&&(n=!1);for(var o=n?r.length:e.length,i=t.alloc(o),u=0;u<o;u++){var a=n?u%e.length:u;i[u]=e[a]&r[u]}return i}}).call(this,r(0).Buffer)},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";e.byteLength=function(t){var e=s(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){for(var e,r=s(t),n=r[0],u=r[1],a=new i(function(t,e,r){return 3*(e+r)/4-r}(0,n,u)),f=0,l=u>0?n-4:n,c=0;c<l;c+=4)e=o[t.charCodeAt(c)]<<18|o[t.charCodeAt(c+1)]<<12|o[t.charCodeAt(c+2)]<<6|o[t.charCodeAt(c+3)],a[f++]=e>>16&255,a[f++]=e>>8&255,a[f++]=255&e;2===u&&(e=o[t.charCodeAt(c)]<<2|o[t.charCodeAt(c+1)]>>4,a[f++]=255&e);1===u&&(e=o[t.charCodeAt(c)]<<10|o[t.charCodeAt(c+1)]<<4|o[t.charCodeAt(c+2)]>>2,a[f++]=e>>8&255,a[f++]=255&e);return a},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],u=0,a=r-o;u<a;u+=16383)i.push(l(t,u,u+16383>a?a:u+16383));1===o?(e=t[r-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===o&&(e=(t[r-2]<<8)+t[r-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,f=u.length;a<f;++a)n[a]=u[a],o[u.charCodeAt(a)]=a;function s(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t,e,r){for(var o,i,u=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return u.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,o){var i,u,a=8*o-n-1,f=(1<<a)-1,s=f>>1,l=-7,c=r?o-1:0,h=r?-1:1,d=t[e+c];for(c+=h,i=d&(1<<-l)-1,d>>=-l,l+=a;l>0;i=256*i+t[e+c],c+=h,l-=8);for(u=i&(1<<-l)-1,i>>=-l,l+=n;l>0;u=256*u+t[e+c],c+=h,l-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:1/0*(d?-1:1);u+=Math.pow(2,n),i-=s}return(d?-1:1)*u*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var u,a,f,s=8*i-o-1,l=(1<<s)-1,c=l>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,p=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,u=l):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),(e+=u+c>=1?h/f:h*Math.pow(2,1-c))*f>=2&&(u++,f/=2),u+c>=l?(a=0,u=l):u+c>=1?(a=(e*f-1)*Math.pow(2,o),u+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[r+d]=255&a,d+=p,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;t[r+d]=255&u,d+=p,u/=256,s-=8);t[r+d-p]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=r(2);e.default=function(e){for(var r=[0,0,0,0,0,0,0,0],o=t.alloc(Math.ceil(e.length/8)),i=0;i<o.length;i++){for(var u=0;u<8;u++)e[8*i+u]?r[u]=e[8*i+u]:r[u]=0;o[i]=n.default(r)}return o}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),o=r(1);e.default=function(t,e,r){void 0===r&&(r=0);for(var i=Math.floor(r/8),u=Math.ceil((r+e.length)/8),a=t.slice(i,u),f=o.default(a),s=r%8,l=0;l<e.length;l++)f[s++]=e[l];for(var c=u-i,h=0;h<c;h++)a[h]=n.default(f.slice(8*h,8*(h+1)))}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,n){void 0===n&&(n=!1);for(var o=n?r.length:e.length,i=t.alloc(o),u=0;u<o;u++){var a=n?u%e.length:u;i[u]=~(e[a]&r[u])}return i}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,n){void 0===n&&(n=!1);for(var o=n?r.length:e.length,i=t.alloc(o),u=0;u<o;u++){var a=n?u%e.length:u;i[u]=~(e[a]|r[u])}return i}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){for(var r=t.alloc(e.length),n=0;n<e.length;n++)r[n]=~e[n];return r}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,n){void 0===n&&(n=!1);for(var o=n?r.length:e.length,i=t.alloc(o),u=0;u<o;u++){var a=n?u%e.length:u;i[u]=e[a]|r[u]}return i}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=r(4),i=r(1);e.default=function(t,e,r){void 0===e&&(e=0),void 0===r&&(r=8);var u=i.default(t,e,r);if(0===u[0]){for(var a=0,f=0;f<r;f++)u[f]&&(a+=n.p2[r-f-1]);return a}a=-1;var s=o.default(u);for(f=0;f<r;f++)s[f]&&(a-=n.p2[r-f-1]);return a}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=r(1);e.default=function(t,e,r){void 0===e&&(e=0),void 0===r&&(r=8);for(var i=o.default(t,e,r),u=0,a=0;a<r;a++)u+=i[a]*n.p2[r-a-1];return u}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,n){void 0===n&&(n=!1);for(var o=n?r.length:e.length,i=t.alloc(o),u=0;u<o;u++){var a=n?u%e.length:u;i[u]=~(e[a]^r[u])}return i}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,n){void 0===n&&(n=!1);for(var o=n?r.length:e.length,i=t.alloc(o),u=0;u<o;u++){var a=n?u%e.length:u;i[u]=e[a]^r[u]}return i}}).call(this,r(0).Buffer)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5);e.read=n.default;var o=r(2);e.write=o.default,e.default={read:n.default,write:o.default}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(41);e.getBit=n.default;var o=r(42);e.setBit=o.default;var i=r(43);e.toggleBit=i.default,e.default={getBit:n.default,setBit:o.default,toggleBit:i.default}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return t>>e&1}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){return 1===r?t|1<<e:t&~(1<<e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return t^1<<e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(45);e.read=n.default;var o=r(46);e.write=o.default,e.default={read:n.default,write:o.default}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(t<16&&t>=0&&Math.floor(t)===t){for(var e=[0,0,0,0],r=0;r<4;r++)e[3-r]=t>>r&1;return e}throw new RangeError("invalid array length")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!Array.isArray(t)||4!==t.length)throw new RangeError("invalid array length");for(var e=0,r=0;r<4;r++)t[3-r]&&(e|=1<<r);return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(48);e.toBits=n.default,e.default={toBits:n.default}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],r=0;r<t.length;r++)"1"===t[r]?e.push(1):"0"===t[r]&&e.push(0);return e}},function(t,e){"undefined"==typeof SharedArrayBuffer&&eventBus.fireEvent("msg",{msg:"sharredArrayBuffer not supported",code:"sharredArrayBuffer"})},function(t,e,r){"use strict";r.r(e);const n=new function(){var t=this;t.events={},t.addEventListener=function(e,r,n){n=n||window,t.events.hasOwnProperty(e)?t.events[e].push({handler:r,ctx:n}):t.events[e]=[{handler:r,ctx:n}]},t.removeEventListener=function(e,r,n){if(n=n||window,t.events.hasOwnProperty(e)){var o=t.events[e].indexOf({handler:r,ctx:n});-1!=o&&t.events[e].splice(o,1)}},t.fireEvent=function(e,r){if(t.events.hasOwnProperty(e)){r||(r=[]);for(var n=t.events[e],o=n.length,i=0;i<o;i++)n[i].handler.apply(n[i].ctx,[r])}}};let o=function(){return n};r(7);var i=r(3),u=r.n(i);const a=o();a.fireEvent("test",{test:12});let f;new Uint8Array;const s=async t=>{const e=(await fetch(t)).body.getReader();let r;for(;!r||!r.done;)r=await e.read(),w(r.value)},l=t=>{f?(f+1!=t&&a.fireEvent("msg",{msg:"af seq counter broken",seq:t,lastSeqCounter:f,code:"afBroken"}),f=t):f=t};let c=!1,h=+new Date;document.getElementById("serverIssue");const d=()=>{+new Date-h>5e3&&v("asd45")&&a.fireEvent("msg",{msg:"No data has been received from the streaming server for a few seconds. Is there a problem?",code:"noStreamData"})};var p=0,g=[];const v=t=>{const e=+new Date/1e3,r=e-(g[t]||0);return r>4&&(g[t]=e,r>4)},y=t=>{const e=+new Date/1e3;"hide"==t&&(p=+new Date/1e3),e-p>2&&v("aret654")&&a.fireEvent("msg",{msg:"audio is only Zero",code:"audioZero"})};setInterval(d,4e3);const w=t=>{if(d(),h=+new Date,void 0===t)return void console.error("chunk is undefined, strange bug, have to fix this");let e=0;for(c&&(t=function(t,e){var r=new Uint8Array(t.byteLength+e.byteLength);return r.set(new Uint8Array(t),0),r.set(new Uint8Array(e),t.byteLength),r}(c,t));t.length>e;)if(65==t[e+0]&&70==t[e+1]&&84==t[e+9]){c=t.slice(e);let n=t[(e+=2)+0]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];var r=t[e+=4]<<8|t[e+1];if(e+=2,e+=1,(e+=1)+n>t.length)return;l(r),c=!1;let o=t.slice(e,e+n);b(o),e+=n,e+=2}else e++},b=t=>{let e=0;for(;t.length>e;){let r=t.slice(e,e+4);e+=4;let n=Math.floor((t[e+0]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])/8);if((e+=4)+n>t.length)return void console.error("tagLength is larger than AF length");let o=t.slice(e,e+n);switch(r.toString()){case"100,101,116,105":_(o);break;case"101,115,116,1":E(o);break;case"42,112,116,114":break;default:console.log("no tag definition for: "+(new TextDecoder).decode(r))}e+=n}},_=t=>{let e=0;const r=u.a.byte.read(t[e]),n=t=>r[t]+"",o=r[0],i=r[1],a=(r[2],n(3)+n(4)+n(5)+n(6)+n(7));parseInt(a,2);if(e+=1,i){e+=o?13:5;let r=t.slice(e,e+96);A({type:"fic",buffer:r})}},E=t=>{let e=0;const r=u.a.byte.read(t[e]),n=t=>r[t]+"",o=n(0)+n(1)+n(2)+n(3)+n(4)+n(5),i=parseInt(o,2);e+=3;const a=t.slice(e),f=Math.round(new Uint8Array(a).reduce((t,e)=>t+e)/a.byteLength);y(0==f?"show":"hide"),A({type:"mst",scid:i,buffer:a})},A=t=>{const{buffer:e,scid:r,type:n}=t,o="mst"===n?r:100;if(window.initDone&&Module._getDls)try{const t=Module.ccall("malloc","int",["int"],[e.byteLength]);Module.HEAPU8.set(new Uint8Array(e),t),Module.ccall("dataInput",null,["int","int","int"],[t,e.byteLength,o]),Module._free(t)}catch(t){console.log("tried to send data to dabLibJs, but failed while calling",t)}else console.log("tried to send mst to cpp but cpp was not init")};const m=o();let P;window.audioDataAvailable=window.Module.internalCbs.audioDataAvailable=function(t){P!=t&&(P=t,m.fireEvent("audioType",P));const e=Module.ccall("getAudioData","number");var r=new Module.VectorAudioData(e);const n=[];for(let t=0;t<r.size();t++)n.push(r.get(t));const o=new Uint8Array(n);m.fireEvent("encodedAudioData",o)};const M=o();M.fireEvent("test",{test:12}),window.slsAvailable=window.Module.internalCbs.slsHandler=function(){const t=Module.getSls(),e=[];for(let r=0;r<=t.slideshowData.size();r++)e.push(t.slideshowData.get(r));var r=new Blob([new Uint8Array(e)],{type:t.mimeType}),n=URL.createObjectURL(r);const o={contentName:t.contentName,clickThroughUrl:t.clickThroughUrl,contentSubType:t.contentSubType,triggerTime:0==t.triggerTime?"now":t.triggerTime,categoryId:t.categoryId,categoryTitle:t.categoryTitle,isCategorized:t.isCategorized,slideId:t.slideId};M.fireEvent("slsMeta",o),M.fireEvent("slsUrl",n),M.fireEvent("sls",{url:n,meta:o})};const R=o();window.dlsAvailable=window.Module.internalCbs.dlsHandler=function(){const t=Module.getDls();R.fireEvent("dls",t)};r(49);const B=o();var O,T,U,S=!1;if(!("MediaSource"in window))throw"error: MediaSource ist not supported on this system";(O=new MediaSource).addEventListener("sourceopen",function(){S=!0},!1);const j=t=>{O&&(O&&T&&"open"===O.readyState?T.appendBuffer(t):console.log("got audio data, but buffer is not ready"))};B.addEventListener("audioType",t=>{if(U="mpeg"==t?"audio/mpeg":"audio/aac",console.info({codec:U}),!MediaSource.isTypeSupported(U))throw"error: MediaSource does not support the requested codec: "+U;S?T=O.addSourceBuffer(U):O.addEventListener("sourceopen",function(){T=O.addSourceBuffer(U)},!1),B.addEventListener("encodedAudioData",j)});const I=!!O&&URL.createObjectURL(O),L=o(),D={startStream:function(t){const e=new URL(window.location.href);let r=decodeURIComponent(e.searchParams.get("url"));0!=r.indexOf("http")&&(r="http://"+r);const n="http://null"!=r?r:t.url;s(n)},availableEvents:["sls","dls","msg","slsMeta","slsUrl","encodedAudioData","audioType"],audioUrl:I};Object.assign(D,L),window.ediPlayer=D;var Y=D;window.ediPlayer=Y}]);