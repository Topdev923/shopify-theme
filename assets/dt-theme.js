!function(c){c.fn.hoverIntent=function(e,t,n){function r(e){o=e.pageX,i=e.pageY}var o,i,a,u,s={interval:100,sensitivity:6,timeout:50},s="object"==typeof e?c.extend(s,e):c.isFunction(t)?c.extend(s,{over:e,out:t,selector:n}):c.extend(s,{over:e,out:e,selector:t}),l=function(e,t){if(t.hoverIntent_t=clearTimeout(t.hoverIntent_t),Math.sqrt((a-o)*(a-o)+(u-i)*(u-i))<s.sensitivity)return c(t).off("mousemove.hoverIntent",r),t.hoverIntent_s=!0,s.over.apply(t,[e]);a=o,u=i,t.hoverIntent_t=setTimeout(function(){l(e,t)},s.interval)},t=function(e){var n=c.extend({},e),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"===e.type?(a=n.pageX,u=n.pageY,c(o).on("mousemove.hoverIntent",r),o.hoverIntent_s||(o.hoverIntent_t=setTimeout(function(){l(n,o)},s.interval))):(c(o).off("mousemove.hoverIntent",r),o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){var e,t;e=n,(t=o).hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,s.out.apply(t,[e])},s.timeout)))};return this.on({"mouseenter.hoverIntent":t,"mouseleave.hoverIntent":t},s.selector)}}(jQuery),Shopify.Image={preload:function(e,t){for(var n=0;n<e.length;n++){var o=e[n];this.loadImage(this.getSizedImageUrl(o,t))}},loadImage:function(e){(new Image).src=e},switchImage:function(e,t,n){var o;e&&t&&(o=this.imageSize(t.src),o=this.getSizedImageUrl(e.src,o),n?n(o,e,t):t.src=o)},imageSize:function(e){e=e.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=e?e[1]:null},getSizedImageUrl:function(e,t){if(null==t)return e;if("master"==t)return this.removeProtocol(e);var n=e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null==n)return null;e=e.split(n[0]),n=n[0];return this.removeProtocol(e[0]+"_"+t+n)},removeProtocol:function(e){return e.replace(/http(s)?:/,"")}},function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self).Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function l(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function c(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.id,e=t.url,t=n||e;if(!t)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=t,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(t);if(l(t))return t.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(t,"” is not a vimeo.com url."))}var n=void 0!==Array.prototype.indexOf,o="undefined"!=typeof window&&void 0!==window.postMessage;if(!(t||n&&o))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var r,a,u="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(a(this,"_id","_WeakMap_"+f()+"."+f()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function d(e,t){if(!h(e)||!r.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function f(){return Math.random().toString().substring(2)}function h(e){return Object(e)===e}(p="undefined"!=typeof self?self:"undefined"!=typeof window?window:u).WeakMap||(r=Object.prototype.hasOwnProperty,a=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},p.WeakMap=(a(s.prototype,"delete",function(e){if(d(this,"delete"),!h(e))return!1;var t=e[this._id];return!(!t||t[0]!==e||(delete e[this._id],0))}),a(s.prototype,"get",function(e){if(d(this,"get"),h(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),a(s.prototype,"has",function(e){if(d(this,"has"),!h(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),a(s.prototype,"set",function(e,t){if(d(this,"set"),!h(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:a(e,this._id,[e,t]),this}),a(s,"_polyfill",!0),s));var p,y=(n=j={exports:{}},o=function(){var e,n,o,r,i,a,u=Object.prototype.toString,s="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(u){e=function(e,t,n){return e[t]=n,e}}function l(e,t){o.add(e,t),n=n||s(o.drain)}function c(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function d(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=c(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function f(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&l(d,t))}function h(e,n,o,r){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){o(t,e)},r)}(t)}function p(e){this.def=e,this.triggered=!1}function t(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new t(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),o.chain.push(n),0!==o.state&&l(d,o),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(n){var o,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(o=c(n))?l(function(){var t=new p(r);try{o.call(n,function(){e.apply(t,arguments)},function(){f.apply(t,arguments)})}catch(e){f.call(t,e)}}):(r.msg=n,r.state=1,0<r.chain.length&&l(d,r))}catch(e){f.call(new p(r),e)}}}).call(o,e)},function(e){f.call(o,e)})}catch(e){f.call(o,e)}}function v(e,t){this.fn=e,this.self=t,this.next=void 0}var m=e({},"constructor",y,!(o={add:function(e,t){a=new v(e,t),i?i.next=a:r=a,i=a,a=void 0},drain:function(){var e=r;for(r=i=n=void 0;e;)e.fn.call(e.self),e=e.next}}));return e(y.prototype=m,"__NPO__",0,!1),e(y,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),e(y,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),e(y,"all",function(t){var a=this;return"[object Array]"!=u.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var o=t.length,r=Array(o),i=0;h(a,t,function(e,t){r[e]=t,++i===o&&n(r)},e)})}),e(y,"race",function(t){var o=this;return"[object Array]"!=u.call(t)?o.reject(TypeError("Not an array")):new o(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");h(o,t,function(e,t){n(t)},e)})}),y},(p=u)[u="Promise"]=p[u]||o(),n.exports&&(n.exports=p[u]),j.exports),v=new WeakMap;function m(e,t,n){var o=v.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),v.set(e.element,o)}function g(e,t){return(v.get(e.element)||{})[t]||[]}function w(e,t,n){var o=v.get(e.element)||{};if(!o[t])return 1;if(!n)return o[t]=[],v.set(e.element,o),1;n=o[t].indexOf(n);return-1!==n&&o[t].splice(n,1),v.set(e.element,o),o[t]&&0===o[t].length}var b=["autopause","autoplay","background","byline","color","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function T(o,e){e=1<arguments.length&&void 0!==e?e:{};return b.reduce(function(e,t){var n=o.getAttribute("data-vimeo-".concat(t));return!n&&""!==n||(e[t]=""===n?1:n),e},e)}function k(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");e=document.createElement("div");return e.innerHTML=n,t.appendChild(e.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function _(i,e,t){var a=1<arguments.length&&void 0!==e?e:{},u=2<arguments.length?t:void 0;return new Promise(function(t,n){if(!l(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e,o="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i),"&domain=").concat(window.location.hostname);for(e in a)a.hasOwnProperty(e)&&(o+="&".concat(e,"=").concat(encodeURIComponent(a[e])));var r=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);r.open("GET",o,!0),r.onload=function(){if(404!==r.status)if(403!==r.status)try{var e=JSON.parse(r.responseText);if(403===e.domain_status_code)return k(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},r.onerror=function(){var e=r.status?" (".concat(r.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},r.send()})}function E(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function I(e,t,n){e.element.contentWindow&&e.element.contentWindow.postMessage&&(t={method:t},void 0!==n&&(t.value=n),8<=(n=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&n<10&&(t=JSON.stringify(t)),e.element.contentWindow.postMessage(t,e.origin))}var P=new WeakMap,x=new WeakMap,j=(e(S.prototype,[{key:"callMethod",value:function(n){var o=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new y(function(e,t){return o.ready().then(function(){m(o,n,{resolve:e,reject:t}),I(o,n,r)}).catch(t)})}},{key:"get",value:function(n){var o=this;return new y(function(e,t){return n=i(n,"get"),o.ready().then(function(){m(o,n,{resolve:e,reject:t}),I(o,n)}).catch(t)})}},{key:"set",value:function(n,o){var r=this;return new y(function(e,t){if(n=i(n,"set"),null==o)throw new TypeError("There must be a value to set.");return r.ready().then(function(){m(r,n,{resolve:e,reject:t}),I(r,n,o)}).catch(t)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===g(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),m(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");w(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=x.get(this)||new y(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return y.resolve(e)}},{key:"addCuePoint",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new y(function(e){x.delete(t),P.delete(t.element),t._originalElement&&(P.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&"IFRAME"===t.element.nodeName&&t.element.parentNode&&t.element.parentNode.removeChild(t.element),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),S);function S(r){var e,s=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(e){if(!(e instanceof S))throw new TypeError("Cannot call a class as a function")}(this),window.jQuery&&r instanceof jQuery&&(1<r.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),r=r[0]),"undefined"!=typeof document&&"string"==typeof r&&(r=document.getElementById(r)),e=r,!Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");var n=r.ownerDocument.defaultView;if("IFRAME"===r.nodeName||(o=r.querySelector("iframe"))&&(r=o),"IFRAME"===r.nodeName&&!l(r.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(P.has(r))return P.get(r);this.element=r,this.origin="*";var o=new y(function(a,u){var e=function(e){if(l(e.origin)&&s.element.contentWindow===e.source){"*"===s.origin&&(s.origin=e.origin);var t=E(e.data);if(t&&"error"===t.event&&t.data&&"ready"===t.data.method){var n=new Error(t.data.message);return n.name=t.data.name,void u(n)}e=t&&"ready"===t.event,n=t&&"ping"===t.method;if(e||n)return s.element.setAttribute("data-ready","true"),void a();o=s,n=[],(r=E(r=t)).event?("error"===r.event&&g(o,r.data.method).forEach(function(e){var t=new Error(r.data.message);t.name=r.data.name,e.reject(t),w(o,r.data.method,e)}),n=g(o,"event:".concat(r.event)),i=r.data):!r.method||(t=function(e,t){var n=g(e,t);if(n.length<1)return!1;n=n.shift();return w(e,t,n),n}(o,r.method))&&(n.push(t),i=r.value),n.forEach(function(e){try{if("function"==typeof e)return void e.call(o,i);e.resolve(i)}catch(e){}})}var o,r,i};n.addEventListener?n.addEventListener("message",e,!1):n.attachEvent&&n.attachEvent("onmessage",e),"IFRAME"!==s.element.nodeName&&_(c(e=T(r,t)),e,r).then(function(e){var t,n,o=k(e,r);return s.element=o,t=s._originalElement=r,n=o,o=v.get(t),v.set(n,o),v.delete(t),P.set(s.element,s),e}).catch(u)});return x.set(this,o),P.set(this.element,this),"IFRAME"===this.element.nodeName&&I(this,"ping"),this}return t||(function(e){function n(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}e=0<arguments.length&&void 0!==e?e:document,e=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));e.forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=T(t);_(c(e),e,t).then(function(e){return k(e,t)}).catch(n)}catch(e){n(e)}})}(),function(e){var o=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,e=function(e){if(l(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=o.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}},window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e))}()),j}),jQuery.cookie=function(e,t,n){if(void 0===t){var o=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),i=0;i<r.length;i++){var a=jQuery.trim(r[i]);if(a.substring(0,e.length+1)==e+"="){o=decodeURIComponent(a.substring(e.length+1));break}}return o}n=n||{},null===t&&(t="",n.expires=-1);var u="";n.expires&&("number"==typeof n.expires||n.expires.toUTCString)&&("number"==typeof n.expires?(l=new Date).setTime(l.getTime()+24*n.expires*60*60*1e3):l=n.expires,u="; expires="+l.toUTCString());var s=n.path?"; path="+n.path:"",l=n.domain?"; domain="+n.domain:"",n=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),u,s,l,n].join("")},function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(a){function u(e){return parseFloat(e)||0}function s(e){var e=a(e),o=null,r=[];return e.each(function(){var e=a(this),t=e.offset().top-u(e.css("margin-top")),n=0<r.length?r[r.length-1]:null;null!==n&&Math.floor(Math.abs(o-t))<=1?r[r.length-1]=n.add(e):r.push(e),o=t}),r}function l(e){var t={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?a.extend(t,e):("boolean"==typeof e?t.byRow=e:"remove"===e&&(t.remove=!0),t)}var o=-1,r=-1,c=a.fn.matchHeight=function(e){e=l(e);if(e.remove){var n=this;return this.css(e.property,""),a.each(c._groups,function(e,t){t.elements=t.elements.not(n)}),this}return this.length<=1&&!e.target||(c._groups.push({elements:this,options:e}),c._apply(this,e)),this};c.version="master",c._groups=[],c._throttle=80,c._maintainScroll=!0,c._beforeUpdate=null,c._afterUpdate=null,c._rows=s,c._parse=u,c._parseOptions=l,c._apply=function(e,t){var r=l(t),n=a(e),o=[n],i=a(window).scrollTop(),t=a("html").outerHeight(!0),e=n.parents().filter(":hidden");return e.each(function(){var e=a(this);e.data("style-cache",e.attr("style"))}),e.css("display","block"),r.byRow&&!r.target&&(n.each(function(){var e=a(this),t=e.css("display");"inline-block"!==t&&"flex"!==t&&"inline-flex"!==t&&(t="block"),e.data("style-cache",e.attr("style")),e.css({display:t,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),o=s(n),n.each(function(){var e=a(this);e.attr("style",e.data("style-cache")||"")})),a.each(o,function(e,t){var t=a(t),o=0;if(r.target)o=r.target.outerHeight(!1);else{if(r.byRow&&t.length<=1)return void t.css(r.property,"");t.each(function(){var e=a(this),t=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");n={display:n};n[r.property]="",e.css(n),e.outerHeight(!1)>o&&(o=e.outerHeight(!1)),t?e.attr("style",t):e.css("display","")})}t.each(function(){var e=a(this),t=0;r.target&&e.is(r.target)||("border-box"!==e.css("box-sizing")&&(t+=u(e.css("border-top-width"))+u(e.css("border-bottom-width")),t+=u(e.css("padding-top"))+u(e.css("padding-bottom"))),e.css(r.property,o-t+"px"))})}),e.each(function(){var e=a(this);e.attr("style",e.data("style-cache")||null)}),c._maintainScroll&&a(window).scrollTop(i/t*a("html").outerHeight(!0)),this},c._applyDataApi=function(){var n={};a("[data-match-height], [data-mh]").each(function(){var e=a(this),t=e.attr("data-mh")||e.attr("data-match-height");t in n?n[t]=n[t].add(e):n[t]=e}),a.each(n,function(){this.matchHeight(!0)})};function i(e){c._beforeUpdate&&c._beforeUpdate(e,c._groups),a.each(c._groups,function(e){var t=this;t.elements.length&&setTimeout(function(){c._apply(t.elements,t.options)},500)}),c._afterUpdate&&c._afterUpdate(e,c._groups)}c._update=function(e,t){if(t&&"resize"===t.type){var n=a(window).width();if(n===o)return;o=n}e?-1===r&&(r=setTimeout(function(){i(t),r=-1},c._throttle)):i(t)},a(c._applyDataApi),a(window).bind("load",function(e){c._update(!1,e)}),a(window).bind("resize orientationchange",function(e){c._update(!0,e)})}),"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(a,u,i){YTPlayer={player:null,defaults:{ratio:16/9,videoId:"LSmgKRx5pBo",mute:!0,repeat:!0,width:a(u).width(),playButtonClass:"YTPlayer-play",pauseButtonClass:"YTPlayer-pause",muteButtonClass:"YTPlayer-mute",volumeUpClass:"YTPlayer-volume-up",volumeDownClass:"YTPlayer-volume-down",start:0,pauseOnScroll:!1,fitToBackground:!0,playerVars:{iv_load_policy:3,modestbranding:1,autoplay:1,controls:0,showinfo:0,wmode:"opaque",branding:0,autohide:0},events:null},init:function(e,t){var n,o,r=this;return r.userOptions=t,r.$body=a("body"),r.$node=a(e),r.$window=a(u),r.defaults.events={onReady:function(e){r.onPlayerReady(e),r.options.pauseOnScroll&&r.pauseOnScroll(),"function"==typeof r.options.callback&&r.options.callback.call(this)},onStateChange:function(e){1===e.data?(r.$node.find("img").fadeOut(400),r.$node.addClass("loaded")):0===e.data&&r.options.repeat&&r.player.seekTo(r.options.start)}},r.options=a.extend(!0,{},r.defaults,r.userOptions),r.options.height=Math.ceil(r.options.width/r.options.ratio),r.ID=(new Date).getTime(),r.holderID="YTPlayer-ID-"+r.ID,r.options.fitToBackground?r.createBackgroundVideo():r.createContainerVideo(),r.$window.on("resize.YTplayer"+r.ID,function(){r.resize(r)}),n=r.onYouTubeIframeAPIReady.bind(r),(t=i.createElement("script")).id="youtube-sdk",e=i.getElementsByTagName("head")[0],"file://"==u.location.origin?t.src="http://www.youtube.com/iframe_api":t.src="//www.youtube.com/iframe_api",e.appendChild(t),console.log(t),t=e=null,o=n,"undefined"==typeof YT&&void 0===u.loadingPlayer?(u.loadingPlayer=!0,u.dfd=a.Deferred(),u.onYouTubeIframeAPIReady=function(){u.onYouTubeIframeAPIReady=null,u.dfd.resolve("done"),o()}):"object"==typeof YT?o():u.dfd.done(function(e){o()}),r.resize(r),r},pauseOnScroll:function(){var e=this;e.$window.on("scroll.YTplayer"+e.ID,function(){1===e.player.getPlayerState()&&e.player.pauseVideo()}),e.$window.scrollStopped(function(){2===e.player.getPlayerState()&&e.player.playVideo()})},createContainerVideo:function(){var e=a('<div id="ytplayer-container'+this.ID+'" >                                    <div id="'+this.holderID+'" class="ytplayer-player-inline"></div>                                     </div>                                     <div id="ytplayer-shield" class="ytplayer-shield"></div>');this.$node.append(e),this.$YTPlayerString=e},createBackgroundVideo:function(){var e=a('<div id="ytplayer-container'+this.ID+'" class="ytplayer-container background">                                    <div id="'+this.holderID+'" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');this.$node.append(e),this.$YTPlayerString=e},resize:function(e){var t=a(u);e.options.fitToBackground||(t=e.$node);var n,o=t.width(),r=t.height(),i=a("#"+e.holderID);o/e.options.ratio<r?(n=Math.ceil(r*e.options.ratio),i.width(n).height(r).css({left:(o-n)/2,top:0})):(e=Math.ceil(o/e.options.ratio),i.width(o).height(e).css({left:0,top:(r-e)/2})),t=i=null},onYouTubeIframeAPIReady:function(){theme.ProductVideo.youtubeApiLoaded=!0,theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);this.player=new u.YT.Player(this.holderID,this.options)},onPlayerReady:function(e){this.options.mute&&e.target.mute()},getPlayer:function(){return this.player},destroy:function(){var e=this;e.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),e.$YTPlayerString.remove(),a(u).off("resize.YTplayer"+e.ID),a(u).off("scroll.YTplayer"+e.ID),e.$body=null,e.$node=null,e.$YTPlayerString=null,e.player.destroy(),e.player=null}},a.fn.scrollStopped=function(e){var t=a(this),n=this;t.scroll(function(){t.data("scrollTimeout")&&clearTimeout(t.data("scrollTimeout")),t.data("scrollTimeout",setTimeout(e,250,n))})},a.fn.YTPlayer=function(t){return this.each(function(){a(this).data("yt-init",!0);var e=Object.create(YTPlayer);e.init(this,t),a.data(this,"ytPlayer",e)})}}(jQuery,window,document);

function dT_Swiper($container) {
  var id = $container.attr('data-section-id');
  var ItemsPerView = +$container.attr('data-item-per-view');
  var ItemsRow = +$container.attr('data-item-row');
  var ItemsSpace = +$container.attr('data-item-space');
  var autoHeight = +$container.attr('data-auto-height') || false;
  var ItemsLimit = +$container.attr('data-blocks-limit');
  var Autoplay = +$container.attr('data-autoplay') * 1000;
  var initAutoplay = Autoplay ? {
    delay: Autoplay
  } : false;
  var mobileSlides = +$container.attr('data-small-screen-items') || 1;
  return new Swiper('#swiper-' + id + '-slider', {
    direction: 'horizontal',
    pagination: {
      el: '#swiper-' + id + '-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#swiper-' + id + '-next',
      prevEl: '#swiper-' + id + '-prev'
    },
    loop: false,
    slidesPerView: ItemsPerView,
    slidesPerGroup: 1,
    slidesPerColumn: ItemsRow,
    spaceBetween: ItemsSpace,
    autoHeight: autoHeight,
    slidesPerColumnFill: 'row',
    simulateTouch: true,
    autoplay: initAutoplay,
    breakpoints: {
      320: {
        slidesPerView: mobileSlides,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: ItemsPerView,
        spaceBetween: 30,
      }
    },
  });
}

window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];
$(document).on('shopify:section:load', this._onSectionLoad.bind(this)).on('shopify:section:unload', this._onSectionUnload.bind(this)).on('shopify:section:select', this._onSelect.bind(this)).on('shopify:section:deselect', this._onDeselect.bind(this)).on('shopify:section:reorder', this._onReorder.bind(this)).on('shopify:block:select', this._onBlockSelect.bind(this)).on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function _createInstance(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },
  _onSectionLoad: function _onSectionLoad(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function _onSectionUnload(evt) {
    this.instances = _.filter(this.instances, function (instance) {
      var isEventInstance = instance.id === evt.originalEvent.detail.sectionId;

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function _onSelect(evt) {

    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function (instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function _onDeselect(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function (instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },
  _onReorder: function _onReorder(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function (instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onReorder)) {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function _onBlockSelect(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function (instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function _onBlockDeselect(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function (instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {       
      instance.onBlockDeselect(evt);
    }
  },

  register: function register(type, constructor) {
    this.constructors[type] = constructor;
    $('[data-section-type=' + type + ']').each(function (index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

theme.LibraryLoader = function () {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function () {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function () {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function () {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
}();

theme.ProductStatus = function () {
  function ProductStatus(container) {
    this.container = container;
  }
  ProductStatus.prototype = Object.assign({}, ProductStatus.prototype, {
    updateContent: function updateContent(variantId) {}
  });
  return ProductStatus;
}();

var textToDownCase = function textToDownCase(str) {
  return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
};
var UrlTrigger = false;
var home_featured_product_media = false;

function setUnitPrice(variant) {
  var baseUnit = '';
  if (variant.unit_price_measurement) {
    if (variant.unit_price_measurement.reference_value !== 1) {
      baseUnit += variant.unit_price_measurement.reference_value;
    }
    baseUnit += variant.unit_price_measurement.reference_unit;
  }
  return Shopify.formatMoney(variant.unit_price, DT_THEME.moneyFormat) + '/' + baseUnit;
}

theme.numberCounter = function () {
  function numberCounter(container) {
    var $container = this.$container = $(container);
    var initInview = $container.attr('data-section-id');
    $('.inview-' + initInview + '-initialized').bind('inview', function (event, visible) {
      if (visible) {
        //$(this).stop().animate({ opacity: 1 });

        $('.dt-sc-number-counter-value').each(function () {
          var $this = $(this),
              max_value = $this.attr('data-value');
          $({
            counter_value: $this.text()
          }).animate({
            counter_value: max_value
          }, {
            step: function step() {
              $this.text(Math.floor(this.counter_value));
            },
            duration: 1500,
            easing: 'swing',
            complete: function complete() {
              $this.text(this.counter_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); //For placing comma(,) after particular digit
            }
          });
        });
      } else {
        //  $(this).stop().animate({ opacity: 0 });
      }
    });
  }
  return numberCounter;
}();


theme.featuredCollection = function () {
  function featuredCollection(container) {
    var $container = this.$container = $(container);
    dT_Swiper($container);
  }
  return featuredCollection;
}();

theme.indexProductCarousel = function () {
  function indexProductCarousel(container) {
    var $container = this.$container = $(container),
        sectionId = "home-product-carousel-section";
    dT_Swiper($container);
    dt_initQuickShop(sectionId);
    dt_activateQuickShop();
  }
  return indexProductCarousel;
}();

theme.productBlockCarousel = function () {
  function productBlockCarousel(container) {
    var $container = this.$container = $(container),
        sectionId = "home-blockCarousel-section";
    dT_Swiper($container);
    dt_initQuickShop(sectionId);
    dt_activateQuickShop();
  }
  return productBlockCarousel;
}();


theme.searchPage = function () {
  function searchPage(container) {
    var $container = this.$container = $(container),
        sectionId = "search-page";
    dt_initQuickShop(sectionId);
    dt_activateQuickShop();
  }
  return searchPage;
}();
theme.tabGrid = function () {
  function tabGrid(container) {
    var $container = this.$container = $(container),
        sectionId = "home-tab-grid";
    dt_initQuickShop(sectionId);
    dt_activateQuickShop();
  }
  return tabGrid;
}();
 
theme.HomeSlideshow = function () {
  function HomeSlideshow(container) {

    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var sliderActive = this.sliderActive = $('#home-slider-' + sectionId).length;
    var sliderSpeed = $container.attr('data-animation-speed');
    var sliderAuto = $container.attr('data-autoPlay');
    if (sliderAuto == 'true') var autoplay = sliderSpeed > 0 ? {
      delay: +sliderSpeed
    } : false;else {
      autoplay = "false";
    }
    var slidesCount = $('#home-slider-' + sectionId + ' .swiper-slide').length;
    if (slidesCount > 1) {
      var loop = true;
      var simulateTouch = true;
    } else {
      var loop = false;
      var simulateTouch = false;
    }
    var dtSwiper = this.dtSwiper = new Swiper('#home-slider-' + sectionId, {
      navigation: {
        nextEl: '#swiper-button-next-' + sectionId,
        prevEl: '#swiper-button-prev-' + sectionId
      },
      direction: 'horizontal',
      loop: loop,
      simulateTouch: simulateTouch,
      pagination: {
        el: '#swiper-pagination-' + sectionId,
        clickable: true
      },
      autoplay: autoplay,
      autoHeight: true
    });
  }

  return HomeSlideshow;
}();

theme.HomeSlideshow.prototype = _.assignIn({}, theme.HomeSlideshow.prototype, {

  onBlockSelect: function onBlockSelect(evt) {
    var sectionId = this.sectionId;
    var slideIndex = $(evt.target).data('index');
    var dtSwiper = this.dtSwiper;
    var dtSwiperMobile = this.dtSwiperMobile;
    dtSwiper.slideTo(slideIndex, 1500, false);
    dtSwiper.autoplay.stop();
  },
  onBlockDeselect: function onBlockDeselect() {
    var sectionId = this.sectionId;
    var dtSwiper = this.dtSwiper;
    var dtSwiperMobile = this.dtSwiperMobile;
    dtSwiper.autoplay.start();
  }
});

theme.ProductPage = function () {
  var defaults = {
    sliderActive: false,
    zoomEnabled: false,
    imageSize: null,
    imageZoomSize: null,
    selectors: {
      addToCart: '.dT_AddToCart',
      addToCartText: '.dT_AddToCartText',
      optionSelector: 'ProductSelect'
    }
  };

  function Product(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    this.settings = $.extend({}, defaults, {
      sectionId: sectionId,
      swiperObjects: {},
      selectors: {
        unitPrice: '.unitPrice-' + sectionId,
        originalSelectorId: 'ProductSelect-' + sectionId,
        addToCart: '.dT_AddToCart',
        productPrice: '#ProductPrice-' + sectionId + ' span',
        comparePrice: '#ComparePrice-' + sectionId + ' span',
        addToCartText: '.dT_AddToCartText-' + sectionId,
        notifyForm: '#notify-block-' + sectionId,
        zoomEnabled: '.zoom-activate',
        variantSkuData: '.sku-table-' + sectionId,
        variantSku: '.variant-sku-' + sectionId,
        InventoryProduct: '.inventory-product-' + sectionId,
        variantInventory: '.variant-inventory-' + sectionId,
        inventoryAvailability: '[data-inventory-availability]'
      }
    });

    dt_initQuickShop(sectionId);
    dt_activateQuickShop();

    var rteVideo = $container.find(".product-single__description.rte iframe").length || false;

    if (rteVideo) {
      $container.find(".product-single__description.rte iframe").wrap("<div class='dT-video-wrapper'></div>");
    }

    dt_Quantity(sectionId);
    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);

    this.init();

    $.fn.matchHeight._update();

    this.inventoryAvailability = container.querySelector(this.settings.selectors.inventoryAvailability);
    if (this.inventoryAvailability) {
      this._initProductStatus();
    }
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    isProductStatus: function isProductStatus() {},
    _initProductStatus: function _initProductStatus() {
      this.ProductStatus = new theme.ProductStatus(this.inventoryAvailability);
      if (this.ProductStatus) {
        this.initProductVariant();
      }
    },
    onSelect: function onSelect() {
      if (theme.ProductVideo.youtubeApiLoaded == true) {
        theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
      }
    },
    onUnload: function onUnload(evt) {
      theme.ProductVideo.removeSectionVideos(this.settings.sectionId);
    },
    init: function init() {
      this.dT_init_Swiper();
      this.dT_Overrides();
      this.dT_Zoom();
      this.dT_Swatches();
    },

    dT_Overrides: function dT_Overrides() {
      DT_THEME.productStrings = DT_THEME.productStrings || {};
      $.extend(DT_THEME.strings, DT_THEME.productStrings);
    },
    dT_Zoom: function dT_Zoom() {
      if (typeof $.zoom === 'function' && this.settings.selectors.zoomEnabled.length) {
        if ($(window).width() > 767) {
          var imageBlock = $('#slider');
          if (imageBlock.length) {
            var imageSlideLinks = imageBlock.find('.zoom-img-wrap');
            if (imageSlideLinks.length) {
              imageSlideLinks.each(function () {
                var t = $(this);
                var url = t.find("img.zoom-img").data('srczoom');
                t.find(".zoom-img-container").zoom({
                  url: url,
                  touch: false
                });
              });
            }
          }
        }

        $(window).resize(function () {
          if ($(window).width() > 767) {
            var imageBlock = $('#slider');
            if (imageBlock.length) {
              var imageSlideLinks = imageBlock.find('.zoom-img-wrap');
              if (imageSlideLinks.length) {
                imageSlideLinks.each(function () {
                  var t = $(this);
                  var url = t.find("img.zoom-img").data('srczoom');
                  t.find(".zoom-img-container").zoom({
                    url: url,
                    touch: false
                  });
                });
              }
            }
          } else {
            var imageBlock = $('#slider');
            if (imageBlock.length) {
              var imageSlideLinks = imageBlock.find('.zoom-img-wrap');
              if (imageSlideLinks.length) {
                imageSlideLinks.each(function () {
                  var t = $(this);
                  t.find(".zoom-img-container").trigger('zoom.destroy');
                });
              }
            }
          }
        });
      } else {
        return false;
      }
    },
    dT_Swatches: function dT_Swatches() {
      this.$container.find('.swatch :radio').change(function () {
        var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
        var optionValue = jQuery(this).val().replace(/\s{2,}/g, ' ');
        jQuery(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
      });

      var productJSON = this.productSingleObject;
      for (var i = 0, length = productJSON.variants.length; i < length; i++) {
        var productVariants = productJSON.variants[i];
        if (productVariants.available) {
          for (var j = 0, optlength = productVariants.options.length; j < optlength; j++) {
            var variantOption = productVariants.options[j];
            variantOption = textToDownCase(variantOption);
            this.$container.find('.swatch[data-option-index="' + j + '"] .' + variantOption + '').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
          }
        }
      }
    },
    dT_init_Swiper: function dT_init_Swiper() {
      var windowResizeFunc = function windowResizeFunc() {
        $(window).trigger('resize');
      };

      var $container = this.$container;
      var sectionId = this.settings.sectionId;

      $container.find("[data-product-media-type-video]").each(function () {
        var $el = $(this);
        theme.ProductVideo.init($el, sectionId);
      });

      if ($('.swiper-main-' + this.settings.sectionId + ' .swiper-wrapper .swiper-slide').length > 1) {
        var useLoop = true;
      } else {
        var useLoop = false;
      }
      this.settings.swiperObjects.mySwiper = new Swiper('.swiper-main-' + this.settings.sectionId, {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination-' + this.settings.sectionId,
          clickable: true
        },
        updateOnImagesReady: true,
        spaceBetween: 0,
        slidesPerView: 1,
        roundLengths: true,
        simulateTouch: false,
        onImagesReady: windowResizeFunc
      });

      // Swiper Vertical scroll

      var gallerySwiperThumbsVert = this.settings.swiperObjects.gallerySwiperThumbsVert = new Swiper('#swiper-gallery-thumbs-vert-' + this.settings.sectionId, {
        direction: 'vertical',
        initialSlide: 2,
        spaceBetween: 10,
        slidesPerView: 5,
        loop: false,
        loopedSlides: 5,
        freeMode: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        updateOnImagesReady: false,
        onImagesReady: windowResizeFunc,
        disableAutoResize: true,
        resizeEvent: 'auto'
      });

      this.settings.swiperObjects.gallerySwiperVert = new Swiper('#swiper-gallery-vert-' + this.settings.sectionId, {
        initialSlide: 2,
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false,
        roundLengths: true,
        simulateTouch: false
      });

      if (typeof this.settings.swiperObjects.gallerySwiperVert.controller != "undefined") {
        this.settings.swiperObjects.gallerySwiperVert.controller.control = this.settings.swiperObjects.gallerySwiperThumbsVert;
        this.settings.swiperObjects.gallerySwiperThumbsVert.controller.control = this.settings.swiperObjects.gallerySwiperVert;
      }

      // Swiper Horizontal scroll  

      var gallerySwiperThumbs = this.settings.swiperObjects.gallerySwiperThumbs = new Swiper('#swiper-gallery-thumbs-' + this.settings.sectionId, {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
       // centeredSlides: true,
      });

      this.settings.swiperObjects.gallerySwiper = new Swiper('#swiper-gallery-' + this.settings.sectionId, {
        loop: false,
        spaceBetween: 10,       
        thumbs: {
          swiper: gallerySwiperThumbs,
        },
        
      });

    },

    initProductVariant: function initProductVariant() {
      if (!this.productSingleObject) {
        return;
      }
      var self = this;

      var productJSON = this.productSingleObject;
      var productVariantObj = productJSON.variants;
      $(".main-product-select-" + productJSON.id + " .single-option-selector").on("change", function () {

        var option1 = $(".main-product-select-" + productJSON.id + " #SingleOptionSelector-0").val() || null,
            option2 = $(".main-product-select-" + productJSON.id + " #SingleOptionSelector-1").val() || null,
            option3 = $(".main-product-select-" + productJSON.id + " #SingleOptionSelector-2").val() || null,
            flag = true;
        for (var i = 0, length = productVariantObj.length; i < length; i++) {
          var productVar = productVariantObj[i];
          if (productVar.option1 != null) {
            productVar.option1 = productVar.option1.replace(/\s{2,}/g, ' ');
          }
          if (productVar.option2 != null) {
            productVar.option2 = productVar.option2.replace(/\s{2,}/g, ' ');
          }
          if (productVar.option3 != null) {
            productVar.option3 = productVar.option3.replace(/\s{2,}/g, ' ');
          }

          if (option1 == productVar.option1 && option2 == productVar.option2 && option3 == productVar.option3) {
            flag = false;
            $('#ProductSelect-' + productJSON.id).val(productVar.id);
            self.productVariantCallback(productVar, productJSON.id);
            break;
          }
        }
        if (flag) {
          self.productVariantCallback(null, productJSON.id);
        }
      });

      var selectedOptionsLength = $('#ProductSelect-' + productJSON.id + ' option[selected]').length;
      var optionsLength = $('#ProductSelect-' + productJSON.id).length;
      if (!selectedOptionsLength || optionsLength == 1) {
        self.productVariantCallback(productJSON.variants[0], productJSON.id);
      }

      if (productJSON.options.size == 1 && productJSON.options[0] != 'Title') {
        $('.selector-wrapper:eq(0)').prepend('<label>' + productJSON.options[0] + '</label>');
      }

      if (productJSON.variants.size == 1 && productJSON.variants[0].title.indexOf('Default') + 1) {
        $('.selector-wrapper').hide();
      }

      var str = window.location.href;
      if (!(str.indexOf('?variant=') + 1)) {
        var found_one_in_stock = false;
        for (variant in productJSON.variants) {
          if (productJSON.variants[variant].available && found_one_in_stock == false) {
            found_one_in_stock = true;
            for (option in productJSON.options) {
              var i = Object.keys(productJSON.options).indexOf(option);
              if (i >= 0) {
                $('.main-product-select-' + productJSON.id + ' .single-option-selector:eq(' + i + ')').val(productJSON.variants[variant].options[i].replace(/\s{2,}/g, ' ')).trigger("change");
              }
            }

            if ($('#ProductTemplate-' + productJSON.id).html()) {
              UrlTrigger = true;
            }
            if ($('#FeaturedProduct').html()) {
              home_featured_product_media = true;
            }
          }
        }
      } else {
        if ($('#ProductTemplate-' + productJSON.id).html()) {
          UrlTrigger = true;
        }
        if ($('#FeaturedProduct').html()) {
          home_featured_product_media = true;
        }
        $('.main-product-select-' + productJSON.id + ' .single-option-selector').first().trigger("change");
      }

      this.productVariantStyles();
    },

    productVariantStyles: function productVariantStyles() {
      $('.selector-wrapper').addClass('product-form__item');
      $('.single-option-selector').addClass('product-form__input');
    },

    productVariantCallback: function productVariantCallback(variant, selector) {
      if (variant) {
        this.ProductStatus.updateContent(variant.id);
      }
      if (variant && UrlTrigger) {
        var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
        window.history.replaceState({
          path: newurl
        }, '', newurl);
      }

      var buy_now_btn = $(this.settings.selectors.addToCart).closest("form").find(".shopify-payment-button");

      if (variant) {
        var indexArray = [];
        $(".main-product-select-" + selector + " .single-option-selector option:selected").each(function () {
          indexArray.push($(this).index());
        });
        var form = jQuery('#ProductSelect-' + selector).closest('form');
        for (var i = 0, length = variant.options.length; i < length; i++) {
          var num = indexArray[i];
          var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
          var radioButton = $(radioButtonDiv).find(":radio");
          if (radioButton.size()) {
            radioButton.get(0).checked = true;
          }
        }
      }
      // END SWATCHES

      if (variant) {

        if (variant.featured_image && (UrlTrigger || home_featured_product_media)) {
          var slideId = variant.featured_media.id;
          if (typeof this.settings.swiperObjects.gallerySwiper.controller != "undefined") {
            this.settings.swiperObjects.gallerySwiper.slideTo($("#" + slideId).index());
          } else if (typeof this.settings.swiperObjects.gallerySwiperVert.controller != "undefined") {
            this.settings.swiperObjects.gallerySwiperVert.slideTo($("#" + slideId).index());
          } else {
            this.settings.swiperObjects.mySwiper.slideTo($("#" + slideId).index());
          }
        }

        $(this.settings.selectors.productPrice).html(Shopify.formatMoney(variant.price, DT_THEME.moneyFormat));

        if (variant.unit_price) {
          $(this.settings.selectors.unitPrice).html(setUnitPrice(variant));
        } else {
          $(this.settings.selectors.unitPrice).html('');
        }

        if (variant.compare_at_price > variant.price) {
          $(this.settings.selectors.comparePrice).html(Shopify.formatMoney(variant.compare_at_price, DT_THEME.moneyFormat)).removeClass('hide');

          $(this.settings.selectors.price).addClass(this.settings.selectors.saleClasses);
          $(this.settings.selectors.saleLabel).removeClass('hide');
          $(this.settings.selectors.comparePrice).closest("li").removeClass('hide');
        } else {
          $(this.settings.selectors.comparePrice).addClass('hide');
          $(this.settings.selectors.comparePrice).closest("li").addClass('hide');
          $(this.settings.selectors.saleLabel).addClass('hide');
          $(this.settings.selectors.price).removeClass(this.settings.selectors.saleClasses);
        }

        if (variant.available) {
          $(this.settings.selectors.notifyForm).hide();
          $(this.settings.selectors.addToCart).prop('disabled', false);
          $(this.settings.selectors.addToCartText).text(DT_THEME.strings.addToCart);
          buy_now_btn.show();
        } else {
          $(this.settings.selectors.notifyForm).show();
          $(this.settings.selectors.addToCart).prop('disabled', true);
          $(this.settings.selectors.addToCartText).text(DT_THEME.strings.soldOut);
          buy_now_btn.hide();
        }

        if (jQuery.type(variant) === "null") {} else {
          variantSkuData = $(this.settings.selectors.variantSkuData);
          variantSku = $(this.settings.selectors.variantSku);
          InventoryProduct = $(this.settings.selectors.InventoryProduct);
          variantInventory = $(this.settings.selectors.variantInventory);

          if (variant.sku && variantSkuData) {
            variantSkuData.addClass("attributes-visible").removeClass("attributes-hidden");
            variantSku.html(variant.sku);
            if (variantSkuData.is(":last-child")) {
              variantSkuData.prev('li').removeAttr("style");
            }
          } else {
            variantSkuData.addClass("attributes-hidden").removeClass("attributes-visible");
            variantSku.html('');
            if (variantSkuData.is(":last-child")) {
              variantSkuData.prev('li').css("padding-bottom", "0");
            }
          }

          if (InventoryProduct) {
            InventoryProduct.addClass("attributes-visible").removeClass("attributes-hidden");
            var main_product_select = $("#ProductSelect-" + selector),
                optionsLength = main_product_select.find("option").length;
            for (var i = 0; i <= optionsLength; i++) {
              var currentOption = main_product_select.find("option:nth-child(" + i + ")");
              if (currentOption.val() == variant.id) {
                var variant_inventory_management = currentOption.attr("data-inventory_management");
                var variant_inventory_policy = currentOption.attr("data-inventory_policy");
                var variant_inventory_quantity = currentOption.attr("data-inventory_quantity");
                break;
              } else {
                var variant_inventory_management = "";
                var variant_inventory_policy = "";
                var variant_inventory_quantity = "";
              }
            }
            if (variant_inventory_management == "shopify" && variant_inventory_policy != "continue") {
              if (variant_inventory_quantity > 0) {
                variantInventory.html('<span class=in-stock>In stock!</span>');
                                      } else {
                                      variantInventory.html('<span class=out-of-stock>Sorry!  This product is currently out of stock.</span>');
                                      }
                                      } else {
                                      variantInventory.html('<span class=in-stock>In stock!</span>');
                                      }
                                      }
                                      }

                                      this.$container.find(".product-price").show();
                $(this.settings.selectors.addToCart).show();
                this.$container.find(".product_payments_btns").show();
                if (variant.available) {
                  $(this.settings.selectors.addToCart).prop('disabled', false);
                }
              } else {
                this.$container.find(".product-price").show();
                this.$container.find(".product_payments_btns").show();
                $(this.settings.selectors.addToCart).prop('disabled', true);
                $(this.settings.selectors.addToCartText).text(DT_THEME.strings.unavailable);
                $(this.settings.selectors.comparePrice).addClass('hide');
                $(this.settings.selectors.comparePrice).closest("li").addClass('hide');
                $(this.settings.selectors.saleLabel).addClass('hide');
                $(this.settings.selectors.price).removeClass(this.settings.selectors.saleClasses);
                $(this.settings.selectors.productPrice).html('Unavailable');
                                                             buy_now_btn.hide();
                $(this.settings.selectors.notifyForm).show();
                if (InventoryProduct) {
                  variantInventory.html('<span class=out-of-stock>Sold Out</span>');
                                        }
                                        }
                                        }
                                        });
                  return Product;
                }();

                var swiperArr = [],
                    container = $('#container');
                theme.CollectionPage = function () {
                  function CollectionPage(container) {
                    var $container = this.$container = $(container),
                        sectionId = this.sectionId = $container.attr('data-section-id'),
                        container = $('#container'),
                        mp = $.magnificPopup.instance,
                        swiperCarousel,
                        swiperCarouselThumbs;
                    dt_initQuickShop(sectionId);
                    $(".variant-option-color").each(function () {
                      if ($(this).children().length == 0) {
                        $(this).remove();
                      } else {
                        $(this).show();
                      }
                    });
                    $(".variant-option-size").each(function () {
                      if ($(this).children().length == 0) {
                        $(this).remove();
                      } else {
                        $(this).show();
                      }
                    });
                    dt_activateQuickShop();
                  }
                  return CollectionPage;
                }();
                theme.CollectionPage.prototype = _.assignIn({}, theme.CollectionPage.prototype, {
                  onSelect: function onSelect() {
                    var mp = $.magnificPopup.instance;
                    if (typeof mp !== 'undefined') {
                      mp.close();
                    }
                  }
                });

                function dt_QuickCallback(variant, selector) {
                  var productPanel = $('div.quick-shop-modal[data-id="' + selector + '"]');
                  if (variant) {
                    if (variant.featured_image) {
                      var slideId = variant.featured_media.id;
                      var slide = $("#" + slideId);
                      var slideIndex = slide.index();
                      swiperCarousel = new Swiper('.quick-swiper-container');
                      swiperCarousel.slideTo(slideIndex);
                      var slideImg = slide.find('img'),
                          src = slideImg.attr("data-original");
                    }
                  }

                  // BEGIN SWATCHES
                  if (variant) {
                    var indexArray = [];
                    $("[data-id='" + selector + "'] .single-option-selector option:selected").each(function () {
                      indexArray.push($(this).index());
                    });
                    var form = jQuery('#dt-sc-quick-ProductSelect-' + selector).closest('form');
                    for (var i = 0, length = variant.options.length; i < length; i++) {
                      var num = indexArray[i];
                      var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
                      var radioButton = $(radioButtonDiv).find(":radio");
                      if (radioButton.size()) {
                        radioButton.get(0).checked = true;
                      }
                    }
                  }
                  // END SWATCHES

                  var addToCart = productPanel.find('.dT-AddtoCart'),
                      addtoCartText = addToCart.find('span');
                  var productPrice = productPanel.find('.product-price-current span');
                  var unitPrice = productPanel.find('.unitPrice');
                  var comparePrice = productPanel.find('.product-price-list span');
                  if (variant) {
                    if (variant.available) {
                     addToCart.removeClass('disabled').prop('disabled', false).val('Add to Cart');
                     addtoCartText.text('Add to Cart');
						} else {                                                                                    
						addToCart.val('Sold Out').addClass('disabled').prop('disabled', true);
						addtoCartText.html('Sold Out');
						}
						if (variant.unit_price) {
                        unitPrice.html(setUnitPrice(variant));
                      } else {
                        unitPrice.html('');
                      }

                      // Regardless of stock, update the product price
                      if (productPrice.length) {
                        productPrice.html(Shopify.formatMoney(variant.price, DT_THEME.moneyFormat));
                      }

                      // Also update and show the product's compare price if necessary
                      if (comparePrice.length) {
                        if (variant.compare_at_price > variant.price) {
                          comparePrice.html(Shopify.formatMoney(variant.compare_at_price, DT_THEME.moneyFormat)).show();
                          comparePrice.closest("li").show();
                        } else {
                          comparePrice.html("");
                          comparePrice.closest("li").hide();
                          comparePrice.hide();
                        }
                      }
                      productPanel.find(".product-price").show();
                      addToCart.show();
                      productPanel.find(".product_payments_btns").show();
                      if (variant.available) {
                        addToCart.prop('disabled', false);
                      }
                    } else {
                      addToCart.val('Unavailable').show().addClass('disabled').prop('disabled', true);
                                    addtoCartText.html('Sold Out');
                                    comparePrice.html("");
                      comparePrice.closest("li").hide();
                      comparePrice.hide();
                      productPrice.html('Unavailable');
                                        productPanel.find(".product-price").show();
                      productPanel.find(".product_payments_btns").show();
                    }
                  };

                  function dt_initQuickShop(sectionId) {
                    var sectionContainer = $("[data-section-id='" + sectionId + "']");
                    sectionContainer.find('.quick-view-btn').on('click', function (e) {
                      if ($(this).hasClass('quick-view-btn-opened')) {
                        $(this).removeClass('quick-view-btn-opened');
                      } else {
                        var productId = $(this).attr("data-product-id"),
                            quick_view_url = $(this).data("url"),
                            btn = $(this);
                        $("#quick-shop-modal-inner-" + productId).load(quick_view_url, function (resp) {
                          dt_QuickShopWindow(btn, productId);
                          dt_QuickShopWindowReady(productId, sectionId);
                        });
                      }
                    });
                  }

                  function dt_activateQuickShop() {
                    if (typeof $().magnificPopup !== 'function') {
                      return;
                    }
                    var $quickShopBtns = $('a.quick-view-btn');
                    if ($quickShopBtns.length) {
                      $quickShopBtns.each(function () {
                        var prod_id = $(this).data('product-id');
                        var productId = $(this).attr("data-product-id"),
                            quick_view_url = $(this).data("url"),
                            btn = $(this);
                        $(this).magnificPopup({
                          type: 'ajax',
                          closeOnContentClick: false,
                          mainClass: 'mfp-move-from-top',
                          removalDelay: 1000,
                          callbacks: {
                            elementParse: function elementParse(item) {
                              item.src = item.src.split("?")[0] + "?view=quickview";
                            },
                            ajaxContentAdded: function ajaxContentAdded() {
                              var mp = $.magnificPopup.instance;
                              var cur = mp.st.el;
                              var href = $(cur).attr('href');
                              var select = $(".mfp-move-from-top").find(".SingleOptionSelector-0");
                              dt_QuickShopWindow(btn, productId);
                              dt_QuickShopWindowReady(productId, prod_id);
                              doProductSingleWishListPersistent();
                              if (select.length) {
                                select.trigger("change");
                              }
                            }

                          }
                        });
                      });
                    }
                  }

                  function dt_QuickShopWindowReady(productId, sectionId) {
                    var quickShopScreen = $("#product-quick-shop-" + productId);
                    if (!$('#dt_QuickViewJson-' + productId).html()) {
                      return;
                    }

                    quickShopScreen.find(".swatch :radio").on("change", function () {
                      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
                      var optionValue = jQuery(this).val().replace(/\s{2,}/g, ' ');
                      jQuery(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
                    });

                    var product = JSON.parse(document.getElementById('dt_QuickViewJson-' + productId).innerHTML);
                    
                    $(".quick-view-selector-" + product.id).on("change", function () {
                      var $form = $(this).closest("form"),
                          productVariantObj = product.variants;
                      var option1 = $form.find(".SingleOptionSelector-0").val() || null,
                          option2 = $form.find(".SingleOptionSelector-1").val() || null,
                          option3 = $form.find(".SingleOptionSelector-2").val() || null,
                          flag = true;
                      for (var i = 0, length = productVariantObj.length; i < length; i++) {
                        var productVar = productVariantObj[i];
                        if (productVar.option1 != null) {
                          productVar.option1 = productVar.option1.replace(/\s{2,}/g, ' ');
                        }
                        if (productVar.option2 != null) {
                          productVar.option2 = productVar.option2.replace(/\s{2,}/g, ' ');
                        }
                        if (productVar.option3 != null) {
                          productVar.option3 = productVar.option3.replace(/\s{2,}/g, ' ');
                        }

                        if (option1 == productVar.option1 && option2 == productVar.option2 && option3 == productVar.option3) {
                          flag = false;
                          $('#dt-sc-quick-' + product.id).val(productVar.id);
                          dt_QuickCallback(productVar, product.id);
                          break;
                        }
                      }
                      if (flag) {
                        dt_QuickCallback(null, product.id);
                      }
                     $form.find('.variant-push').val(productVar.id);                      
                     
                      
                    });

                    if (product.variants.length && product.variants[0].title.indexOf('Default') >= 0) {
                      quickShopScreen.find('.selector-wrapper').hide();
                    }

                    var productJSON = product;
                    for (var i = 0, length = productJSON.variants.length; i < length; i++) {
                      var productVariants = productJSON.variants[i];

                      if (productVariants.available) {
                        for (var j = 0, optlength = productVariants.options.length; j < optlength; j++) {
                          var variantOption = productVariants.options[j];
                          variantOption = textToDownCase(variantOption);
                          quickShopScreen.find('.swatch[data-option-index="' + j + '"] .' + variantOption + '').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
                        }
                      }
                    }

                    // BEGIN SWATCHES

                    var indexArray = [];
                    var productVariantOptions = product.variants;
                    $("[data-id=" + product.id + "] .single-option-selector option:selected").each(function () {
                      indexArray.push($(this).index());
                    });
                    var form = jQuery('#dt-sc-quick-' + product.id).closest('form');
                    var variantIndex = jQuery('#dt-sc-quick-' + product.id + ' option:selected').index();
                    if (variantIndex >= 0) {
                      var variant = productVariantOptions[variantIndex];
                      for (var i = 0, length = variant.options.length; i < length; i++) {
                        var num = indexArray[i];
                        var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
                        var radioButton = $(radioButtonDiv).find(":radio");
                        if (radioButton.size()) {
                          radioButton.get(0).checked = true;
                        }
                      }
                    }

                    // END SWATCHES
                    dt_Quantity(productId);
                  }

                  function dt_QuickShopWindow(btn, productId) {

                    var windowResizeFunc = function windowResizeFunc() {
                      $(window).trigger('resize');
                    };

                    setTimeout(function () {
                      var $container = $("#quick-shop-modal-inner-" + productId);
                      var sectionId = productId;

                      $container.find("[data-product-media-type-video]").each(function () {
                        var $el = $(this);
                        theme.ProductVideo.init($el, sectionId);
                      });

                      if (theme.ProductVideo.youtubeApiLoaded) {
                        theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
                      }
                      swiperCarousel = new Swiper('.quick-swiper-' + productId, {
                        direction: 'horizontal',
                        navigation: {
                          nextEl: '#swiper-' + productId + '-next',
                          prevEl: '#swiper-' + productId + '-prev'
                        },
                        simulateTouch: false,
                        updateOnImagesReady: true,
                        on: {
                          transitionEnd: function transitionEnd() {
                            var slider = this;
                            var index = slider.activeIndex;
                            var current_index = slider.previousIndex;

                            var $newMedia = $(slider.$el).find(".swiper-slide").eq(index).find("[data-product-single-media-wrapper]");
                            var $currentMedia = $(".quick-swiper-container").find("[data-product-single-media-wrapper]");

                            $currentMedia.trigger('mediaHidden').removeAttr("style");
                            $newMedia.css("visibility", "visible").trigger('mediaVisible');

                            if (theme.Helpers.isTouch()) {
                              return false;
                            }

                            if ($newMedia.find("model-viewer").length) {
                              $newMedia.find("model-viewer").focus();
                            } else if ($newMedia.find("[tabindex='0']").length) {
                              $newMedia.find("[tabindex]").focus();
                            } else {
                              setTimeout(function () {
                                $newMedia.focus();
                              }, 100);
                            }
                          }
                        }
                      });
                    }, 500);
                  }

                  function dt_Quantity(sectionId) {
                    $('.btn-number-' + sectionId).click(function (e) {
                      e.preventDefault();
                      fieldName = $(this).attr('data-field');
                      type = $(this).attr('data-type');
                      var input = $(this).closest(".product-form__item--quantity").find("input[name='quantity']");
                      var currentVal = parseInt(input.val());
                      if (!isNaN(currentVal)) {
                        if (type == 'minus') {
                          if (currentVal > 0) {
                            input.val(currentVal - 1).change();
                          }
                        } else if (type == 'plus') {
                          input.val(currentVal + 1).change();
                        }
                      } else {
                        input.val(0);
                      }
                    });

                    $('.input-number-' + sectionId).focusin(function () {
                      $(this).data('oldValue', $(this).val());
                    });

                    $('.input-number-' + sectionId).change(function () {

                      minValue = 0;
                      maxValue = 999;
                      valueCurrent = parseInt($(this).val());

                      name = $(this).attr('name');
                      if (valueCurrent >= minValue) {
                        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
                      } else {
                        $(this).val($(this).data('oldValue'));
                      }
                      if (valueCurrent <= maxValue) {
                        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled');
                      } else {
                        $(this).val($(this).data('oldValue'));
                      }
                    });
                  }

                  theme.Helpers = function () {
                    var touchDevice = false;

                    function setTouch() {
                      touchDevice = true;
                      $("body").addClass("body-touch-device");
                    }

                    function isTouch() {
                      return touchDevice;
                    }
                    return {
                      setTouch: setTouch,
                      isTouch: isTouch
                    };
                  }();

                  // Youtube API callback
                  // eslint-disable-next-line no-unused-vars
                  function onYouTubeIframeAPIReady() {
                    theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
                    theme.ProductVideo.youtubeApiLoaded = true;
                  }

                  theme.ProductVideo = function () {
                    var videos = {};

                    var hosts = {
                      html5: 'html5',
                      youtube: 'youtube'
                    };

                    var selectors = {
                      productMediaWrapper: '[data-product-single-media-wrapper]'
                    };

                    var attributes = {
                      enableVideoLooping: 'enable-video-looping',
                      videoId: 'video-id'
                    };

                    function init(videoContainer, sectionId) {
                      if (!videoContainer.length) {
                        return;
                      }

                      var videoElement = videoContainer.find('iframe, video')[0];
                      var mediaId = videoContainer.data('mediaId');

                      if (!videoElement) {
                        return;
                      }

                      videos[mediaId] = {
                        mediaId: mediaId,
                        sectionId: sectionId,
                        host: hostFromVideoElement(videoElement),
                        container: videoContainer,
                        element: videoElement,
                        ready: function ready() {
                          createPlayer(this);
                        }
                      };

                      var video = videos[mediaId];

                      switch (video.host) {
                        case hosts.html5:
                          window.Shopify.loadFeatures([{
                            name: 'video-ui',
                            version: '1.0',
                            onLoad: setupPlyrVideos
                          }]);
                          theme.LibraryLoader.load('plyrShopifyStyles');
                          break;
                        case hosts.youtube:
                          if (!$("#youtube-sdk").length) {
                            theme.LibraryLoader.load('youtubeSdk');
                          }
                          break;
                      }
                    }

                    function setupPlyrVideos(errors) {
                      if (errors) {
                        fallbackToNativeVideo();
                        return;
                      }

                      loadVideos(hosts.html5);
                    }

                    function createPlayer(video) {
                      if (video.player) {
                        return;
                      }

                      var productMediaWrapper = video.container.closest(selectors.productMediaWrapper);
                      var enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);

                      switch (video.host) {
                        case hosts.html5:
                          // eslint-disable-next-line no-undef
                          video.player = new Shopify.Plyr(video.element, {
                            loop: {
                              active: enableLooping
                            }
                          });
                          break;
                        case hosts.youtube:
                          var videoId = productMediaWrapper.data(attributes.videoId);

                          video.player = new YT.Player(video.element, {
                            videoId: videoId,
                            events: {
                              onStateChange: function onStateChange(event) {
                                if (event.data === 0 && enableLooping) event.target.seekTo(0);
                              }
                            }
                          });
                          break;
                      }

                      productMediaWrapper.on('mediaHidden xrLaunch', function () {
                        if (!video.player) return;

                        if (video.host === hosts.html5) {
                          video.player.pause();
                        }

                        if (video.host === hosts.youtube && video.player.pauseVideo) {
                          video.player.pauseVideo();
                        }
                      });

                      productMediaWrapper.on('mediaVisible', function () {
                        if (theme.Helpers.isTouch()) return;
                        if (!video.player) return;

                        if (video.host === hosts.html5) {
                          video.player.play();
                        }

                        if (video.host === hosts.youtube && video.player.playVideo) {
                          video.player.playVideo();
                        }
                      });
                    }

                    function hostFromVideoElement(video) {
                      if (video.tagName === 'VIDEO') {
                        return hosts.html5;
                      }

                      if (video.tagName === 'IFRAME') {
                        if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(video.src)) {
                          return hosts.youtube;
                        }
                      }
                      return null;
                    }

                    function loadVideos(host) {
                      for (var key in videos) {
                        if (videos.hasOwnProperty(key)) {
                          var video = videos[key];
                          if (video.host === host) {
                            video.ready();
                          }
                        }
                      }
                    }

                    function fallbackToNativeVideo() {
                      for (var key in videos) {
                        if (videos.hasOwnProperty(key)) {
                          var video = videos[key];

                          if (video.nativeVideo) continue;

                          if (video.host === hosts.html5) {
                            video.element.setAttribute('controls', 'controls');
                            video.nativeVideo = true;
                          }
                        }
                      }
                    }

                    function removeSectionVideos(sectionId) {
                      for (var key in videos) {
                        if (videos.hasOwnProperty(key)) {
                          var video = videos[key];

                          if (video.sectionId === sectionId) {
                            if (video.player) video.player.destroy();
                            delete videos[key];
                          }
                        }
                      }
                    }

                    return {
                      init: init,
                      hosts: hosts,
                      loadVideos: loadVideos,
                      removeSectionVideos: removeSectionVideos
                    };
                  }();

                  theme.faqBlocks = function () {
                    $(document).on('click', '.dt-sc-accordion-btn', function () {
                      if (!open_accordion) {
                        open_accordion = true;
                        var active_accordion = $(this).index('.dt-sc-accordion-btn'),
                            active_accordion_height = $('.dt-sc-accordion-content-inner').eq(active_accordion).outerHeight();
                        $('.dt-sc-accordion-btn h5').removeClass('active');
                        $(this).find('h5').addClass('active');
                        $('.dt-sc-accordion-content').stop().animate({
                          height: 0
                        }, transition);
                        $('.dt-sc-accordion-content').eq(active_accordion).stop().animate({
                          height: active_accordion_height
                        }, transition);
                        setTimeout(function () {
                          open_accordion = false;
                        }, transition);
                      }
                    });
                    var transition = 500,
                        open_accordion = false;
                  }();

                  theme.notify = function () {
                    $(document).on('click', '#notify-me', function () {
                      $('#notify-me-wrapper').fadeIn();
                      return false;
                    });
                  }();

                  $(document).ready(function () {
                    var sections = new theme.Sections();
                    sections.register('product-template', theme.ProductPage);
                    sections.register('slideshow-section', theme.HomeSlideshow);
                    sections.register('collection-template', theme.CollectionPage);
                    sections.register('store-availability', theme.ProductStatus);                                      
                    sections.register('featured-collection-section', theme.featuredCollection);                    
                    sections.register('faq-block-section', theme.faqBlocks);
                    sections.register('home-product-carousel-section', theme.indexProductCarousel);                   
                    sections.register('home-blockCarousel-section', theme.productBlockCarousel);
                    sections.register('notify', theme.notify);
                    sections.register('search-page', theme.searchPage);
                    sections.register('home-tab-grid', theme.tabGrid);
                    sections.register('home-tab-sidebar-collection', theme.tabGrid);
                    sections.register('number-counter-section', theme.numberCounter);

                    $(document).on('shopify:section:select', function (e) {
                      var $target = $(e.target),
                          sectionID = e.originalEvent.detail.sectionId,
                          $handle = $('#shopify-section-handle-' + sectionID),
                          handle_class = $handle.length ? $handle.attr('data-bg-type') : null;
                      if (handle_class) {
                        $target.addClass(handle_class);
                      }
                    });

                    //     lazyloaded loader start
                    var selectors = {
                      image: '[data-image]',
                      lazyloaded: '.lazyloaded'
                    };

                    function onLoadHideLazysizesAnimation() {
                      var alreadyLazyloaded = document.querySelectorAll('.lazyloaded');
                      alreadyLazyloaded.forEach(function (image) {
                        removeImageLoadingAnimation(image);
                      });
                    }
                    onLoadHideLazysizesAnimation();
                  });

                  function removeImageLoadingAnimation(image) {
                    // Remove loading animation
                    var imageWrapper = image.hasAttribute('data-image-loading-animation') ? image : image.closest('[data-image-loading-animation]');

                    if (imageWrapper) {
                      imageWrapper.removeAttribute('data-image-loading-animation');
                    }
                  }
                  //     lazyloaded loader end   


                  $(document).one('touchstart', function () {
                    theme.Helpers.setTouch();
                  });
                  
                  // announcement bar start
                  if ($.cookie('announcementCookie') == 'closed') {
                    $('.announcement-bar').hide();
                  }
                  $('.announcement-bar a.close').bind('click', function () {
                    $('.announcement-bar').css({
                      "height": "0",
                      "padding": "0",
                      "opacity": "0",
                      "z-index": "-1"
                    });
                    $.cookie('announcementCookie', 'closed', {
                      expires: 1,
                      path: '/'
                    });
                  });

                  $(document).ready(function ($) {
                    $('.announcement-bar').each(function () {
                      $(this).css({
                        'height': $(this).outerHeight() + 'px'
                      });
                    });
                  });
                  // announcement bar end

                  // parallax banner start
                  function dt_sc_parallax() {
                    var $bgs = [];
                    var $contents = [];
                    var $parallax_window = $(window);
                    var scrollTop = window.transY || document.documentElement.scrollTop;

                    $('[data-style="parallax"]').each(function () {
                      var $bgImage = $(this);
                      $bgImage.__speed = $bgImage.data('speed') || 1;
                      $bgImage.__pOff = $bgImage.offset().top;
                      $bgs.push($bgImage);
                    });

                    $parallax_window.on('scroll resize', function () {
                      scrollTop = window.transY || document.documentElement.scrollTop;
                      $contents.forEach(function ($contentObj) {
                        var transformY = $contentObj.__pOff - scrollTop / $contentObj.__speed;
                        $contentObj.css('top', transformY);
                      });
                      $bgs.forEach(function ($bgImage) {
                        var transformY = -((scrollTop - $bgImage.__pOff) / $bgImage.__speed);
                        $bgImage.css({
                          backgroundPosition: '50% ' + transformY / 2 + 'px'
                        });
                      });
                    });
                    $parallax_window.trigger('scroll');
                  };			

                  dt_sc_parallax();
                  // parallax banner end
                  
                  //     Item swatch trigger start
                  $(document).on('click', '.color-values', function () {
                    if ($(this).hasClass("active")) {
                      $(".color-values").removeClass("active");
                    } else {
                      $(".color-values").removeClass("active");
                      $(this).addClass("active");
                    }
                  });
                  $('body').on('click', '.swatch-element.color', function () {
                    $(this).next('label').find('i');
                  });
                  $('body').on('click', '.swatch span', function () {

                    if ($(this).data("image").indexOf("no-image") == -1) {
                      $(this).parents('.products').find('.image_group .featured-image').attr('src', $(this).data("image"));
                    }

                    if ($(this).parents('.swatch').hasClass('color')) {

                      var variant = $(this).data('id');
                      $(this).parents('.shopify-product-form').find('.variant-push').val(variant);

                      var swatch_item = $(this).data('variant-item');

                      $(this).parents('.shopify-product-form').find('.variant-option-size .size-values').removeClass('active');

                      $(this).parents('.shopify-product-form').find('.variant-option-size .swatch').each(function () {

                        var swatch_size_vars = $(this).find('span').data('variant-title');
                        swatch_size_vars = swatch_size_vars.split('/');
                        swatch_size_vars = $.map(swatch_size_vars, $.trim);
                        swatch_size_vars = $.map(swatch_size_vars, function (n) {
                          return n.toLowerCase();
                        });
                        swatch_size_vars = $.map(swatch_size_vars, function (n) {
                          return n.replace(/ /g, '-');
                        });

                        if ($.inArray(swatch_item, swatch_size_vars) >= 0) {
                          $(this).parent('.size-values').toggleClass('active');
                        }
                      });
                    }

                    if ($(this).parents('.swatch').hasClass('size')) {

                      var variant = $(this).data('id');
                      $(this).parents('.shopify-product-form').find('.variant-push').val(variant);
                    }
                  });
                  //     Item swatch trigger end

                  
                  window.theme = window.theme || {};
                  theme.init = function () {
                    theme.drawersInit();
                    theme.cartPage();
                  };

                  theme.drawersInit = function () {
                    theme.RightDrawer = new theme.Drawers('CartDrawer', 'right', {
                      'onDrawerOpen': ajaxCart.load
                    });
                  };

                  theme.cartPage = function () {
                    $('body').on('click', '.cart__note-add', function () {
                      $(this).addClass('is-hidden');
                      $('.cart__note').addClass('is-active');                      
                    });
                  };

/*============================================================================
  Drawer modules
==============================================================================*/
                  theme.Drawers = function () {
                    var Drawer = function Drawer(id, position, options) {
                      var defaults = {
                        close: '.js-drawer-close',
                        open: '.js-drawer-open-' + position,
                        openClass: 'js-drawer-open',
                        dirOpenClass: 'js-drawer-open-' + position
                      };

                      this.$nodes = {
                        parent: $('body, html'),
                        page: $('#container')
                      };

                      this.config = $.extend(defaults, options);
                      this.position = position;

                      this.$drawer = $('#' + id);

                      if (!this.$drawer.length) {
                        return false;
                      }

                      this.drawerIsOpen = false;
                      this.init();
                    };

                    Drawer.prototype.init = function () {
                      $(this.config.open).on('click', $.proxy(this.open, this));
                      this.$drawer.on('click', this.config.close, $.proxy(this.close, this));
                    };

                    Drawer.prototype.open = function (evt) {
                      $('body').addClass('shifter-enabled');
                      var externalCall = false;
                      if (evt) {
                        evt.preventDefault();
                      } else {
                        externalCall = true;
                      }

                      if (evt && evt.stopPropagation) {
                        evt.stopPropagation();
                        // save the source of the click, we'll focus to this on close
                        this.$activeSource = $(evt.currentTarget);
                      }

                      if (this.drawerIsOpen && !externalCall) {
                        return this.close();
                      }

                      this.$drawer.prepareTransition();

                      this.$nodes.parent.addClass(this.config.openClass + ' ' + this.config.dirOpenClass);
                      this.drawerIsOpen = true;

                      // Set focus on drawer
                      this.trapFocus({
                        $container: this.$drawer,
                        $elementToFocus: this.$drawer.find('.drawer__close-button'),
                        namespace: 'drawer_focus'
                      });

                      if (this.config.onDrawerOpen && typeof this.config.onDrawerOpen == 'function') {
                        if (!externalCall) {
                          this.config.onDrawerOpen();
                        }
                      }

                      if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
                        this.$activeSource.attr('aria-expanded', 'true');
                      }

                      this.$nodes.parent.on('keyup.drawer', $.proxy(function (evt) {
                        // close on 'esc' keypress
                        if (evt.keyCode === 27) {
                          this.close();
                          return false;
                        }
                      }, this));

                      //  this.$nodes.parent.on('click.drawer', $.proxy(function (evt) {  
                      //   this.close();  
                      //   }, this));

                      // Lock scrolling on mobile
                      this.$nodes.page.on('touchmove.drawer', function () {
                        return false;
                      });

                      this.$nodes.page.on('click.drawer', $.proxy(function () {
                        $('body').removeClass('shifter-enabled');
                        if ('.js-drawer-open-right'.length) {
                          this.close();
                        }
                        return false;
                      }, this));
                    };

                    Drawer.prototype.close = function () {
                      if (!this.drawerIsOpen) {
                        return;
                      }

                      $(document.activeElement).trigger('blur');

                      this.$drawer.prepareTransition();

                      this.$nodes.parent.removeClass(this.config.dirOpenClass + ' ' + this.config.openClass);

                      this.drawerIsOpen = false;

                      this.removeTrapFocus({
                        $container: this.$drawer,
                        namespace: 'drawer_focus'
                      });

                      this.$nodes.page.off('.drawer');
                      this.$nodes.parent.off('.drawer');
                    };

                    Drawer.prototype.trapFocus = function (options) {
                      var eventName = options.eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

                      if (!options.$elementToFocus) {
                        options.$elementToFocus = options.$container;
                      }

                      options.$container.attr('tabindex', '-1');
                      options.$elementToFocus.focus();

                      $(document).on(eventName, function (evt) {
                        if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
                          options.$container.focus();
                        }
                      });
                    };

                    Drawer.prototype.removeTrapFocus = function (options) {
                      var eventName = options.namespace ? 'focusin.' + options.namespace : 'focusin';

                      if (options.$container && options.$container.length) {
                        options.$container.removeAttr('tabindex');
                      }

                      $(document).off(eventName);
                    };

                    return Drawer;
                  }();

                  $(theme.init);

                  $(window).load(function () {
                    $(".se-pre-con").fadeOut("slow");
                  });
                  
                  $(document).ready(function () {                     
                    $('.shopify-currency-form select').on("select2:select", function (e) {
                      $('#currency_form').submit();
                    });
                    function currencyFormSubmit(event) {
                      event.target.form.submit();
                    }
                    document.querySelectorAll('.shopify-currency-form select').forEach(function (element) {
                      element.addEventListener('change', currencyFormSubmit);
                    });
                    // default currency end


                    $("#accordian li").click(function () {
                      var link = $(this);
                      var closest_ul = link.closest("ul");
                      var parallel_active_links = closest_ul.find(".active");
                      var closest_li = link.closest("li");
                      var link_status = closest_li.hasClass("active");
                      var count = 0;

                      closest_ul.find("ul").slideUp(function () {
                        if (++count == closest_ul.find("ul").length) parallel_active_links.removeClass("active");
                      });

                      if (!link_status) {
                        closest_li.children("ul").slideDown();
                        closest_li.addClass("active");
                      }
                    });

                    $('#to-top').on('click', function (e) {
                      e.preventDefault();
                      var target = this.hash;
                      var $target = $(target);
                      $('html, body').stop().animate({
                        'scrollTop': $target.offset().top
                      }, 900, 'swing');
                    });                    
                   
                  });
                  
                  $(window).scroll(function () {
                    var screenHeight = $(this).scrollTop();
                    if (screenHeight > 800) {
                      $("#to-top").css("display", "block");
                    } else {
                      $("#to-top").css("display", "none");
                    }
                  });

                  if($(window).width() < 768) {                       
                    $(window).on("resize", function () {
                      $('.sidebar').removeAttr('id');                      
                    }).resize();
                  }
                  
                  
                  
                  // sidebar start
                  if ($(window).width() < 1280) {
                    if ($('.has-sidebar').length > 0) {                                                                          
                        $(document).ready(toggleFilter);
                        $(window).on('resize',toggleFilter);
                        function toggleFilter() {
                          $(".toggleIcon").on('click', function () {
                            if ($(this).hasClass('clicked')) {
                              $(this).removeClass('clicked');
                              $(this).parents('.has-sidebar').removeClass('open');
                            } else {
                              $(this).addClass('clicked');
                              $(this).parents('.has-sidebar').addClass('open');
                            }
                          });
                        };
                        $(".js-close-modal").click(function () {
                          $(".has-sidebar").removeClass("open");
                           $(".toggleIcon").removeClass("clicked");
                        });                      
                      }
                    }
                  
                  // sidebar end

