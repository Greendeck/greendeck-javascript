/* axios v0.16.2 | (c) 2017 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(5),u=n(6),a=r(u);a.Axios=s,a.create=function(e){return r(o.merge(u,e))},a.Cancel=n(23),a.CancelToken=n(24),a.isCancel=n(20),a.all=function(e){return Promise.all(e)},a.spread=n(25),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function r(e){return"[object Array]"===R.call(e)}function o(e){return"[object ArrayBuffer]"===R.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===R.call(e)}function d(e){return"[object File]"===R.call(e)}function l(e){return"[object Blob]"===R.call(e)}function h(e){return"[object Function]"===R.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function b(e,t,n){return g(t,function(t,r){n&&"function"==typeof t?e[r]=E(t,n):e[r]=t}),e}var E=n(3),C=n(4),R=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:u,isNumber:a,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:g,merge:x,extend:b,trim:w}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(6),i=n(2),s=n(17),u=n(18),a=n(21),c=n(22);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url));var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(8):"undefined"!=typeof process&&(e=n(8)),e}var i=n(2),s=n(7),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:o(),transformRequest:[function(e,t){return s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){a.headers[e]={}}),i.forEach(["post","put","patch"],function(e){a.headers[e]=i.merge(u)}),e.exports=a},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(9),i=n(12),s=n(13),u=n(14),a=n(10),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(15);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var y=e.auth.username||"",w=e.auth.password||"";d.Authorization="Basic "+c(y+":"+w)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onerror=function(){f(a("Network Error",e,null,l)),l=null},l.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var v=n(16),g=(e.withCredentials||u(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(11);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,i=String(e),s="",u=0,a=o;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&t>>8-u%1*8)){if(r=i.charCodeAt(u+=.75),r>255)throw new n;t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(19),s=n(20),u=n(6);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||u.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map


(function(window, document) {
    'use strict';

    var Greendeck = {},
        _on,
        _handler = [],
        _download_tracking = false,
        _download_pause,
        _outgoing_tracking = false,
        _outgoing_pause,
        _auto_decorate,
        _outgoing_ignore_subdomain = true;

    /**
     * Constants
     */
    var VERSION = 11;
    var ENDPOINT = 'staging.greendeck.co/track/';
    var XDM_PARAM_NAME = '__greendeckid';

    /**
     * addEventListener polyfill 1.0 / Eirik Backer / MIT Licence
     * https://gist.github.com/eirikbacker/2864711
     * removeEventListener from https://gist.github.com/jonathantneal/3748027
     */
    /*eslint-disable*/
    (function(win, doc){
        if (win.addEventListener) return;       //No need to polyfill

        var listeners = [];

        function docHijack(p){var old = doc[p];doc[p] = function(v){return addListen(old(v))}}
        function addEvent(on, fn, self) {
            self = this;

            listeners.unshift([self, on, fn, function(e) {
                var e = e || win.event;
                e.preventDefault  = e.preventDefault  || function(){e.returnValue = false}
                e.stopPropagation = e.stopPropagation || function(){e.cancelBubble = true}
                e.currentTarget = self;
                e.target = e.srcElement || self;
                fn.call(self, e);
            }]);

            return this.attachEvent('on' + on, listeners[0][3])
        }

        function removeEvent(on, fn) {
            for (var index = 0, register; register = listeners[index]; ++index) {
                if (register[0] == this && register[1] == on && register[2] == fn) {
                    return this.detachEvent("on" + on, listeners.splice(index, 1)[0][3]);
                }
            }
        }

        function addListen(obj, i){
            if (obj && (i = obj.length)) {
                while(i--) {
                    obj[i].addEventListener = addEvent;
                    obj[i].removeEventListener = removeEvent;
                }
            }
            else if (obj) {
                obj.addEventListener = addEvent;
                obj.removeEventListener = removeEvent;
            }

            return obj;
        }

        addListen([doc, win]);
        if ('Element' in win) {
            // IE 8
            win.Element.prototype.addEventListener = addEvent;
            win.Element.prototype.removeEventListener = removeEvent;
        }
        else {
            // IE < 8
            //Make sure we also init at domReady
            doc.attachEvent('onreadystatechange', function(){addListen(doc.all)});
            docHijack('getElementsByTagName');
            docHijack('getElementById');
            docHijack('createElement');
            addListen(doc.all);
        }
    })(window, document);

    /**
     * Array.prototype.indexOf polyfill via
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     */
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            if ( this === undefined || this === null ) {
                throw new TypeError( '"this" is null or not defined' );
            }

            var length = this.length >>> 0; // Hack to convert object.length to a UInt32

            fromIndex = +fromIndex || 0;

            if (Math.abs(fromIndex) === Infinity) {
                fromIndex = 0;
            }

            if (fromIndex < 0) {
                fromIndex += length;
                if (fromIndex < 0) {
                    fromIndex = 0;
                }
            }

            for (;fromIndex < length; fromIndex++) {
                if (this[fromIndex] === searchElement) {
                    return fromIndex;
                }
            }

            return -1;
        };
    }

    /**
     * Helper functions
     */
    Greendeck.extend = function(o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
    };

    // https://code.google.com/p/form-serialize/
    // modified to return an object
    Greendeck.serializeForm = function(form, options) {
        if (!form || form.nodeName !== "FORM") {
            return;
        }
        var _options = options || {};
        var _exclude = _options.exclude || [];
        var i, j, data = {};
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === "" || _exclude.indexOf(form.elements[i].name) > -1) {
                continue;
            }
            switch (form.elements[i].nodeName) {
                case 'INPUT':
                    switch (form.elements[i].type) {
                    case 'text':
                        case 'hidden':
                        case 'button':
                        case 'reset':
                        case 'submit':
                        data[form.elements[i].name] = form.elements[i].value;
                    break;
                    case 'checkbox':
                        case 'radio':
                        if (form.elements[i].checked) {
                            data[form.elements[i].name] = form.elements[i].value;
                        }
                    break;
                    case 'file':
                        break;
                }
                break;
                case 'TEXTAREA':
                    data[form.elements[i].name] = form.elements[i].value;
                break;
                case 'SELECT':
                    switch (form.elements[i].type) {
                    case 'select-one':
                        data[form.elements[i].name] = form.elements[i].value;
                    break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                        if (form.elements[i].options[j].selected) {
                            data[form.elements[i].name] = form.elements[i].options[j].value;
                        }
                    }
                    break;
                }
                break;
                case 'BUTTON':
                    switch (form.elements[i].type) {
                    case 'reset':
                        case 'submit':
                        case 'button':
                        data[form.elements[i].name] = form.elements[i].value;
                    break;
                }
                break;
            }
        }
        return data;
    };

    /*\
    |*|
    |*|  :: cookies.js ::
    |*|
    |*|  A complete cookies reader/writer framework with full unicode support.
    |*|
    |*|  Revision #1 - September 4, 2014
    |*|
    |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
    |*|  https://developer.mozilla.org/User:fusionchess
    |*|
    |*|  This framework is released under the GNU Public License, version 3 or later.
    |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
    |*|
    |*|  Syntaxes:
    |*|
    |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
    |*|  * docCookies.getItem(name)
    |*|  * docCookies.removeItem(name[, path[, domain]])
    |*|  * docCookies.hasItem(name)
    |*|  * docCookies.keys()
    |*|
    \*/
    var docCookies = {
        getItem: function (sKey) {
            if (!sKey) { return null; }
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
            var sExpires = "";

            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                    break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toUTCString();
                    break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        },
        removeItem: function (sKey, sPath, sDomain) {
            if (!this.hasItem(sKey)) { return false; }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function (sKey) {
            if (!sKey) { return false; }
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
            return aKeys;
        }
    };

    Greendeck.docCookies = docCookies;
    /*eslint-enable*/

    /**
     * Wrapper for window.location
     */
    Greendeck.location = function(property, value) {
        // make sure property is valid
        if (typeof window.location[property] !== 'undefined') {
            if (typeof value !== 'undefined') {
                window.location[property] = value;
            }
            else {
                return window.location[property];
            }
        }
    };

    /**
     * Parses current URL for parameters that start with either `utm_` or `gd_`
     * and have the keys `source`, `medium`, `content`, `campaign`, `term`
     *
     * @return {Object} Returns an object with campaign keys as keys
     */
    Greendeck.getCampaignData = function() {
        var vars = Greendeck.getUrlParams(),
            campaign = {},
            campaignKeys = ['source', 'medium', 'content', 'campaign', 'term'],
            key,
            value;

        for (var i = 0; i < campaignKeys.length; i++) {
            key = campaignKeys[i];
            value = vars['utm_' + key] || vars['gd_' + key];

            if (typeof value !== 'undefined') {
                campaign['campaign_' + (key === 'campaign' ? 'name' : key)] = value;
            }
        }

        return campaign;
    };

    Greendeck.mapQueryParams = function(mapping) {
      var vars = Greendeck.getUrlParams(),
        params = {};

      for (var key in mapping) {
        var value = vars[key];
        if (typeof value !== 'undefined') {
          params[mapping[key]] = value;
        }
      }

      return params;
    }


    /**
     * Parses the URL parameters for data beginning with a certain prefix
     *
     * @param {Function} method The callback method for each key found matching `prefix`
     * @param {string} prefix The prefix that the parameter should start with
     */
    Greendeck.getCustomData = function(method, prefix) {
        var vars = Greendeck.getUrlParams(),
            i,
            _prefix = prefix || 'wv_',
            key,
            value;

        for (i in vars) {
            if (vars.hasOwnProperty(i)) {
                value = vars[i];

                if (i.substring(0, _prefix.length) === _prefix) {
                    key = i.substring(_prefix.length);
                    method.call(this, key, value);
                }
            }
        }
    };

    /**
     * Parses Visitor Data in the URL.
     *
     * Query params that start with 'wv_'
     */
    Greendeck.getVisitorUrlData = function(context) {
        Greendeck.getCustomData.call(context, context.identify, 'wv_');
    };


    /**
     * Hides any campaign data (query params: wv_, gd_, utm_) from the URL
     * by using pushState (if available)
     */
    Greendeck.hideCampaignData = function() {
        return Greendeck.hideUrlParams(['wv_', 'gd_', 'utm_']);
    };
    Greendeck.hideCrossDomainId = function() {
        return Greendeck.hideUrlParams([XDM_PARAM_NAME]);
    };

    /**
     * Hides any URL parameters by calling window.history.replaceState
     *
     * @param {Array} params A list of parameter prefixes that will be hidden
     * @return {String} Returns the new URL that will be used
     */
    Greendeck.hideUrlParams = function(params) {
        var regex = new RegExp('[?&]+((?:' + params.join('|') + ')[^=&]*)=([^&#]*)', 'gi');
        var href = Greendeck.location('href').replace(regex, '');

        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, null, href);
        }

        return href;
    };

    /**
     * Retrieves the current URL parameters as an object
     *
     * @return {Object} An object for all of the URL parameters
     */
    Greendeck.getUrlParams = function() {
        var vars = {};
        var href = Greendeck.location('href');

        if (href) {
            href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = decodeURIComponent(value.split('+').join(' '));
            });
        }
        return vars;
    };

    Greendeck.buildUrlParams = function(params, prefix) {
        var _prefix = prefix || '',
            key,
            p = [];

        if (typeof params === 'undefined') {
            return params;
        }

        for (key in params) {
            if (params.hasOwnProperty(key)) {
                if (params[key] !== 'undefined' &&
                    params[key] !== 'null' &&
                    typeof params[key] !== 'undefined') {
                    p.push(_prefix + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
                }
            }
        }
        return p.join('&');
    };

    /**
     * Generates a random 12 character string
     *
     * @return {String} Returns a random 12 character string
     */
    Greendeck.randomString = function() {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
            i,
            rnum,
            s = '';

        for (i = 0; i < 12; i++) {
            rnum = Math.floor(Math.random() * chars.length);
            s += chars.substring(rnum, rnum + 1);
        }

        return s;
    };



    Greendeck.loadScript = function(url, callback) {
        var ssc,
            _callback,
            script = document.createElement('script');

        script.type = 'text/javascript';
        script.async = true;

        if (callback && typeof callback === 'function') {
            _callback = callback;
        }

        if (typeof script.onreadystatechange !== 'undefined') {
            script.onreadystatechange = function() {
                if (this.readyState === 4 ||
                    this.readyState === 'complete' ||
                    this.readyState === 'loaded') {
                    if (_callback) {
                        _callback();
                    }
                    Greendeck.removeScript(script);
                }
            };
        }
        else {
            script.onload = function() {
                if (_callback) {
                    _callback();
                }
                Greendeck.removeScript(script);
            };
            script.onerror = function() {
                Greendeck.removeScript(script);
            };
        }

        script.src = url;

        ssc = document.getElementsByTagName('script')[0];
        ssc.parentNode.insertBefore(script, ssc);
    };

    Greendeck.removeScript = function(script) {
        if (script && script.parentNode) {
            script.parentNode.removeChild(script);
        }
    };

    /**
     * Helper to either query an element by id, or return element if passed
     * through options
     *
     * Supports searching by ids and classnames (or querySelector if browser supported)
     */
    Greendeck.getElement = function(selector, options) {
        var _options = typeof selector === 'string' ? options || {} : selector || {};
        var _selector = selector;

        if (_options.el) {
            return _options.el;
        }
        else if (typeof selector === 'string') {
            if (document.querySelectorAll) {
                return document.querySelectorAll(_selector);
            }
            else if (selector[0] === '#') {
                _selector = selector.substr(1);
                return document.getElementById(_selector);
            }
            else if (selector[0] === '.') {
                _selector = selector.substr(1);
                return document.getElementsByClassName(_selector);
            }
        }
    };

    /**
     * Retrieves the current client domain name using the hostname
     * and returning the last two tokens with a `.` separator (domain + tld).
     *
     * This can be an issue if there is a second level domain
     */
    Greendeck.getDomain = function(hostname) {
        var _hostname = hostname || Greendeck.location('hostname');
        var secondLevelTlds = {
            'com.au': 1,
            'net.au': 1,
            'org.au': 1,
            'co.hu': 1,
            'com.ru': 1,
            'ac.za': 1,
            'net.za': 1,
            'com.za': 1,
            'co.za': 1,
            'co.uk': 1,
            'org.uk': 1,
            'me.uk': 1,
            'net.uk': 1
        };
        var domain = _hostname.substring(_hostname.lastIndexOf('.', _hostname.lastIndexOf('.') - 1) + 1);

        // check if domain is in list of second level domains, ignore if so
        if (secondLevelTlds[domain]) {
            domain = _hostname.substring(_hostname.lastIndexOf('.', _hostname.indexOf(domain) - 2) + 1);
        }

        return domain;
    };

    /**
     * Returns the current hostname with 'www' stripped out
     */
    Greendeck.getHostnameNoWww = function() {
        var hostname = Greendeck.location('hostname');

        if (hostname.indexOf('www.') === 0) {
            return hostname.replace('www.', '');
        }

        return hostname;
    };

    /**
     * Checks if string ends with suffix
     *
     * @param {string} str The haystack string
     * @param {string} suffix The needle
     * @return {boolean} True if needle was found in haystack
     */
    Greendeck.endsWith = function(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    /**
     * Checks if string starts with prefix
     *
     * @param {string} str The haystack string
     * @param {string} prefix The needle
     * @return {boolean} True if needle was found in haystack
     */
    Greendeck.startsWith = function(str, prefix) {
        return str.indexOf(prefix) === 0;
    };

    _on = Greendeck._on = function(parent, event, callback) {
        var id = parent.instanceName;

        if (!_handler[event]) {
            _handler[event] = {};
        }
        _handler[event][id] = parent;

        if (parent.__l) {
            if (!parent.__l[event]) {
                parent.__l[event] = [];
            }
            parent.__l[event].push(callback);
        }
    };

    Greendeck._fire = function(event) {
        var handler;
        var _event = _handler[event];
        var _l;

        if (_event) {
            for (var id in _event) {
                if (_event.hasOwnProperty(id)) {
                    handler = _event[id];
                    _l = handler && handler.__l;
                    if (_l && _l[event]) {
                        for (var i = 0; i < _l[event].length; i++) {
                            _l[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
                        }
                    }

                }
            }
        }
    };

    Greendeck.attachEvent = function(element, type, callback) {
        if (element.addEventListener) {
           element.addEventListener(type, callback);
        }
        else if (element.attachEvent) {
            /*eslint-disable*/
            element.attachEvent('on' + type, function(e) {
                var e = e || win.event;
                e.preventDefault = e.preventDefault || function() {e.returnValue = false};
                e.stopPropagation = e.stopPropagation || function() {e.cancelBubble = true};
                callback.call(self, e);
            });
            /*eslint-enable*/
        }
    };

    Greendeck.leftClick = function(evt) {
        evt = evt || window.event;
        var button = (typeof evt.which !== 'undefined' && evt.which === 1) ||
                    (typeof evt.button !== 'undefined' && evt.button === 0);
        return button && !evt.metaKey && !evt.altKey && !evt.ctrlKey && !evt.shiftKey;
    };

    Greendeck.redirect = function(link) {
        Greendeck.location('href', link);
    };

    /**
     * Determines if the current URL should be considered an outgoing URL
     */
    Greendeck.isOutgoingLink = function(targetHostname) {
        var currentHostname = Greendeck.location('hostname');
        var currentDomain = Greendeck.getDomain(currentHostname);

        return targetHostname !== currentHostname &&
            targetHostname.replace(/^www\./, '') !== currentHostname.replace(/^www\./, '') &&
            (
                !_outgoing_ignore_subdomain ||
                currentDomain !== Greendeck.getDomain(targetHostname)
            ) &&
            !Greendeck.startsWith(targetHostname, 'javascript') &&
            targetHostname !== '' &&
            targetHostname !== '#';
    };

    // attaches any events
    // needs to be handled here, instead of in a tracking instance because
    // these events should only be fired once on a page
    (function(on, fire) {
        on(document, 'mousedown', function(e) {
            var cElem;

            fire('mousemove', e, new Date());

            if (_auto_decorate) {
                cElem = e.srcElement || e.target;
                while (typeof cElem !== 'undefined' && cElem !== null) {
                    if (cElem.tagName && cElem.tagName.toLowerCase() === 'a') {
                        break;
                    }
                    cElem = cElem.parentNode;
                }
                if (typeof cElem !== 'undefined' && cElem !== null) {
                    fire('auto_decorate', cElem);
                }
            }
        });

        on(document, 'click', function(e) {
            var cElem,
                link,
                ignoreTarget = '_blank',
                _download;

            cElem = e.srcElement || e.target;

            if (Greendeck.leftClick(e)) {
                fire('click', e, cElem);
            }

            if (_download_tracking || _outgoing_tracking) {

                // searches for an anchor element
                while (typeof cElem !== 'undefined' && cElem !== null) {
                    if (cElem.tagName && cElem.tagName.toLowerCase() === 'a') {
                        break;
                    }
                    cElem = cElem.parentNode;
                }

                if (typeof cElem !== 'undefined' && cElem !== null &&
                    !cElem.getAttribute('data-greendeck-tracked')) {
                    link = cElem;
                    _download = link.pathname.match(/(?:doc|dmg|eps|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3|mp4|m4v)($|\&)/);

                    if (_download_tracking && _download) {
                        fire('download', link.href);

                        if (link.target !== ignoreTarget && Greendeck.leftClick(e)) {
                            e.preventDefault();
                            e.stopPropagation();

                            link.setAttribute('data-greendeck-tracked', true);
                            window.setTimeout(function() {
                                link.click();
                            }, _download_pause);
                        }
                    }
                    // Make sure
                    // * outgoing tracking is enabled
                    // * this URL does not match a download URL (doesn't end
                    //   in a binary file extension)
                    // * not ignoring subdomains OR link hostname is not a partial
                    //   match of current hostname (to check for subdomains),
                    // * hostname is not empty
                    if (_outgoing_tracking &&
                        !_download &&
                        Greendeck.isOutgoingLink(link.hostname)) {
                        fire('outgoing', link.href);

                        if (link.target !== ignoreTarget && Greendeck.leftClick(e)) {
                            e.preventDefault();
                            e.stopPropagation();

                            link.setAttribute('data-greendeck-tracked', true);

                            window.setTimeout(function() {
                                link.click();
                            }, _outgoing_pause);
                        }
                    }
                }
            }
        });

        on(document, 'mousemove', function(e) {
            fire('mousemove', e, new Date());
        });

        on(document, 'keydown', function() {
            fire('keydown');
        });
    })(Greendeck.attachEvent, Greendeck._fire);

    var Tracker = function(instanceName) {
        this.visitorData = {};
        this.sessionData = {};
        this.userData = {};

        this.options = {
            app: 'js-client',
            baseUrl: 'http://staging.greendeck.co/api/v1',
            client_id: '',
            client_secret: '',
            use_cookies: true,
            ping: true,
            ping_interval: 15000,
            idle_timeout: 300000,
            idle_threshold: 10000,
            download_pause: _download_pause || 200,
            outgoing_pause: _outgoing_pause || 200,
            download_tracking: false,
            outgoing_tracking: false,
            outgoing_ignore_subdomain: true,
            hide_campaign: false,
            hide_xdm_data: false,
            campaign_once: false,
            third_party: false,
            save_url_hash: true,
            cross_domain: false,
            region: null,
            ignore_query_url: false,
            map_query_params: {},
            cookie_name: 'gdTracker',
            cookie_domain: Greendeck.getHostnameNoWww() == 'localhost' ? Greendeck.getHostnameNoWww()  : '.' + Greendeck.getHostnameNoWww(),
            cookie_path: '/',
            cookie_expire: new Date(new Date().setDate(new Date().getDate() + 730))
        };

        this.instanceName = instanceName || 'greendeck';
        this.idle = 0;
        this.cookie = '';
        this.last_activity = new Date();
        this.loaded = false;
        this.dirtyCookie = false;
        this.sentCampaign = false;
        this.version = VERSION;

        if (instanceName && instanceName !== '') {
            window[instanceName] = this;
        }
    };

    Tracker.prototype = {
        docCookies: docCookies,
        init: function() {
            var callback,
                self = this;

            this.__l = {};
            this._processQueue('config');
            this._setupCookie();
            this._bindEvents();

            // Otherwise loading indicator gets stuck until the every response
            // in the queue has been received
            setTimeout(function() {
                self._processQueue();
            }, 1);

            this.loaded = true;

            callback = this.config('initialized');
            if (callback && typeof callback === 'function') {
                callback(this.instanceName);
            }

            // Safe to remove cross domain url parameter after setupCookie is called
            // Should only need to be called once on load
            if (this.config('hide_xdm_data')) {
                Greendeck.hideCrossDomainId();
            }

        },

        /**
         * Processes the tracker queue in case user tries to push events
         * before tracker is ready.
         */
        _processQueue: function(type) {
            var i,
                action,
                events,
                promises,
                promise,
                _wpt;

            _wpt = window.__gd ? window.__gd[this.instanceName] : _wpt;
            _wpt = window._w ? window._w[this.instanceName] : _wpt;

            // if _wpt is undefined, means script was loaded asynchronously and
            // there is no queue

            if (_wpt && _wpt._e) {
                events = _wpt._e;
                promises = _wpt._p;
                for (i = 0; i < events.length; i++) {
                    action = events[i];
                    promise= promises[i]
                    if (typeof action !== 'undefined' && this[action[0]] &&
                        (typeof type === 'undefined' || type === action[0])) {
                        var t = this[action[0]].apply(this, Array.prototype.slice.call(action, 1));
                        if (typeof t ==="object") {
                            promise.resolve_ex(t);
                        };
                    }
                }
            }
        },

        /**
         * Sets up the tracking cookie
         */
        _setupCookie: function() {
            var url_id = this.getUrlId();

            this.cookie = this.getCookie();


            // overwrite saved cookie if id is in url
            if (url_id) {
                this.cookie = url_id;
            }

            // Setup cookie
            if (!this.cookie || this.cookie.length < 1) {
                // this.cookie = Greendeck.randomString();
                this.cookie = JSON.stringify({
                    cid: this.config('client_id'),
                    cs: this.config('client_secret')
                })
            }

            docCookies.setItem(
                this.config('cookie_name'),
                this.cookie,
                this.config('cookie_expire'),
                this.config('cookie_path'),
                this.config('cookie_domain')
            );


            this.dirtyCookie = true;
        },

        /**
         * Binds some events to measure mouse and keyboard events
         */
        _bindEvents: function() {
            var self = this;

            _on(this, 'mousemove', function() {
                self.moved.apply(self, arguments);
            });
            _on(this, 'keydown', function() {
                self.typed.apply(self, arguments);
            });
            _on(this, 'download', function() {
              self.downloaded.apply(self, arguments);
            });
            _on(this, 'outgoing', function() {
              self.outgoing.apply(self, arguments);
            });
            _on(this, 'auto_decorate', function() {
              self.autoDecorate.apply(self, arguments);
            });
        },

        /**
         * Sets/gets values from dataStore depending on arguments passed
         *
         * @param dataStore Object The tracker property to read/write
         * @param key String/Object Returns property object if key and value is undefined,
         *      acts as a getter if only `key` is defined and a string, and
         *      acts as a setter if `key` and `value` are defined OR if `key` is an object.
         */
        _dataSetter: function(dataStore, key, value) {
            var i;

            if (typeof key === 'undefined') {
                return dataStore;
            }

            if (typeof value === 'undefined') {
                if (typeof key === 'string') {
                    return dataStore[key];
                }
                if (typeof key === 'object') {
                    for (i in key) {
                        if (key.hasOwnProperty(i)) {
                            if (i.substring(0, 7) === 'cookie_') {
                                this.dirtyCookie = true;
                            }
                            dataStore[i] = key[i];
                        }
                    }
                }
            }
            else {
                if (key.substring(0, 7) === 'cookie_') {
                    this.dirtyCookie = true;
                }
                dataStore[key] = value;
            }

            return this;
        },

        /**
         * Builds the correct tracking Url and performs an HTTP request
         */
        _push: function(options) {
            var _options = options || {},
                random = 'ra=' + Greendeck.randomString(),
                queryString,
                endpoint,
                urlParam,
                scriptUrl,
                types = [
                    ['visitorData', 'cv_'],
                    ['eventData', 'ce_'],
                    ['sessionData', 'cs_']
                ],
                _type,
                i,
                data = [];

            endpoint = this.getEndpoint(_options.endpoint);

            // Load custom visitor params from url
            Greendeck.getVisitorUrlData(this);

            if (this.config('hide_campaign')) {
                Greendeck.hideCampaignData();
            }

            data.push(random);

            // push tracker config values
            data.push(Greendeck.buildUrlParams(this.getOptionParams()));

            // push eventName if it exists
            if (_options.eventName) {
                data.push('event=' + _options.eventName);
            }

            for (i in types) {
                if (types.hasOwnProperty(i)) {
                    _type = types[i];
                    if (_options[_type[0]]) {
                        urlParam = Greendeck.buildUrlParams(_options[_type[0]], _type[1]);
                        if (urlParam) {
                            data.push(urlParam);
                        }
                    }
                }
            }

            queryString = '?' + data.join('&');

            scriptUrl = endpoint + queryString;
            Greendeck.loadScript(scriptUrl, _options.callback);
        },

        /*
         * Returns the Greendeck cookie string
         */
        getCookie: function() {
            return docCookies.getItem(this.config('cookie_name'));
        },

        /**
         * Generates a destination endpoint string to use depending on different
         * configuration options
         */
        getEndpoint: function(path) {
            var protocol = this.config('protocol');
            var _protocol = protocol && protocol !== '' ? protocol + ':' : '';
            var _path = path || '';
            var endpoint = _protocol + '//';
            var region = this.config('region');
            var thirdPartyPath;

            if (this.config('third_party') && !this.config('domain')) {
                throw new Error('Error: `domain` is not set.');
            }

            // create endpoint, default is www.greendeck.com/track/
            // China region will be cn.t.greendeck.com/track
            if (region) {
                endpoint += region + '.t.';
            }
            else {
                endpoint += 'www.';
            }

            thirdPartyPath = this.config('third_party') ? 'tp/' + this.config('domain') : '';

            if (_path && !Greendeck.endsWith(_path, '/')) {
                _path += '/';
            }

            if (thirdPartyPath && !Greendeck.startsWith(_path, '/')) {
                thirdPartyPath += '/';
            }

            endpoint += ENDPOINT + thirdPartyPath + _path;

            return endpoint;
        },
        authenticate: function(force){
            //check if auth_token is present in cookies or else get
            var stored_cookie = JSON.parse(this.getCookie());
            // if auth is not setup
            if ( this.getCookie()== null || typeof (stored_cookie["auth"]) === 'undefined' || force) {
                var this1 = this
                axios({
                  method:'POST',
                  baseURL: this.config('baseUrl'),
                  url:'/oauth/token',
                  data: {
                    grant_type: 'client_credentials',
                    client_id: this.config('client_id'),
                    client_secret: this.config('client_secret'),
                    scope: 'public read write'
                  }
                })
                .then(function(response) {
                    this1.cookie = JSON.stringify({
                        cid: this1.config('client_id'),
                        cs: this1.config('client_secret'),
                        auth: response.data.access_token
                    })
                    docCookies.setItem(
                        this1.config('cookie_name'),
                        this1.cookie,
                        this1.config('cookie_expire'),
                        this1.config('cookie_path'),
                        this1.config('cookie_domain')
                    );
                });
            }
        },
        apiRequest: function (url, params, method){
         var this1 = this
           var stored_cookie = {};
           	//waiting for the auth token to be set by the initializer and meanwhile
           	//sending a promise to resolve
            //adding person code to the request
            var stored_id_cookie = JSON.parse(docCookies.getItem('gdIdentifier'));
            params["person_code"]= stored_id_cookie["person_code"]

           	var promise = new Promise(function (resolve, reject){
		        function wait(){
		       	  stored_cookie = JSON.parse(this1.getCookie());
				  if (typeof stored_cookie['auth'] === 'undefined'){
				    setTimeout(wait,100);
				  } else {
				    axios({
                      method: method,
                      baseURL: 'http://staging.greendeck.co/api/v1',
                      url:url,
                      data: params,
                      headers: {'Authorization': 'Bearer ' + stored_cookie['auth']}
                    }).then(function(res){
                        resolve(res.data);
                    })
				  }
				}
				wait();
		    });
		    return promise
        },
        initialize: function(key, value){
            this.config(key,value);
            // pinging to track the sessions of the users
            this.startPing();
        },
        /**
         * Sets configuration options
         */
        config: function(key, value) {
            var data = this._dataSetter(this.options, key, value);

            // dataSetter returns `this` when it is used as a setter
            if (data === this) {
                // do validation
                if (this.options.ping_interval < 6000) {
                    this.options.ping_interval = 6000;
                }
                else if (this.options.ping_interval > 60000) {
                    this.options.ping_interval = 60000;
                }

                // set script wide variables for events that are bound on script load
                // since we shouldn't bind per tracker instance
                _outgoing_tracking = this.options.outgoing_tracking;
                _outgoing_pause = this.options.outgoing_pause;
                _download_tracking = this.options.download_tracking;
                _download_pause = this.options.download_pause;
                _auto_decorate = typeof _auto_decorate === 'undefined' && this.options.cross_domain ? this.options.cross_domain : _auto_decorate;
                _outgoing_ignore_subdomain = this.options.outgoing_ignore_subdomain;

                if (this.dirtyCookie && this.loaded) {
                    this._setupCookie();
                }
                this.authenticate()

            }


            return data;
        },

        /**
         * Use to attach custom visit data that doesn't stick to visitor
         * ** Not in use yet
         */
        visit: function(key, value) {
            return this._dataSetter(this.sessionData, key, value);
        },

        /**
         * Attach custom visitor data
         */
        identify_old: function(key, value) {
            return this._dataSetter(this.visitorData, key, value);
        },
        identify: function(person_code,properties) {

            this._dataSetter(this.userData, "person_code", person_code);

            //First check what is stored in the cookies
            var stored_id_cookie = JSON.parse(docCookies.getItem('gdIdentifier'));
            if (!stored_id_cookie){stored_id_cookie={}}
            var id_cookie = JSON.stringify({
                person_code: person_code
            })

            //if there is an already a user identifier
            //Case a: no old identifier present
                //a.1: person_code params present -> create a user with person code
                //a.2: person_code params not present -> create a guest
            // Case b: the new identifier is same as old
                 //b.1: if key and value exists: then just send a PUT req to update ppt
                 //b.2: else do nothing
            // Case c: new != old
                //c.1: old == _greendeck_guest -> call alias api -> PUT req to update ppt
                //c.2: old != _greendeck_guest

            //Case a
            //now create a user on the server if it doesn't exist
            if (typeof (stored_id_cookie["person_code"]) == 'undefined' ) {
                //Case a.1
                if (typeof person_code != 'undefined'){
                }
                //Case a.2
                else{
                    person_code = "greendeck_guest_" + Math.floor(100000000 + Math.random() * 900000000);
                    id_cookie = JSON.stringify({
                        person_code: person_code
                    })

                }
                //set the cookie with new person_code
                docCookies.setItem(
                    'gdIdentifier',
                    id_cookie,
                    this.config('cookie_expire'),
                    this.config('cookie_path'),
                    this.config('cookie_domain')
                );

                //call api request function to create user
                var user = this.userData
                return this.apiRequest("/people", user, "POST")


            }
            //case b and c
            else{
                //case b
                if ((stored_id_cookie["person_code"] == person_code) || typeof person_code == 'undefined') {
                    //case b.1
                    if(typeof properties != 'undefined'){
                        //call api request function to update user properties
                        var u = {};
                        u.person =  properties
                        return this.apiRequest("/people?person_code="+ person_code , u, "PUT")
                    }
                    //case b.2
                    else{
                        //do nothing
                    }
                }
                //case c
                else{
                    //case c.1
                    var this1 = this
                    if(stored_id_cookie["person_code"].startsWith('greendeck_guest_')){
                        //call alias api
                        var alias = { "person":{"new_person_code": person_code}}
                        this.apiRequest("/people/alias?person_code="+ stored_id_cookie["person_code"] , alias, "PUT").then(function(){
                            this1.reset('gdIdentifier')
                            id_cookie = JSON.stringify({
                                person_code: person_code
                            })

                            //set the cookie with new person_code
                            docCookies.setItem(
                                'gdIdentifier',
                                id_cookie,
                                this1.config('cookie_expire'),
                                this1.config('cookie_path'),
                                this1.config('cookie_domain')
                            );

                            //call update api to update ppts
                            var u = {};
                            u.person =  properties
                            return this1.apiRequest("/people?person_code="+ person_code , u, "PUT")
                        })


                    }
                    //case c.2
                    //this means user changed
                    else{
                        this.reset('gdIdentifier')

                        this.identify(person_code, properties)
                    }

                }

            };
        },
        track: function(name, properties){
            if(typeof name != 'undefined'){
                var stored_id_cookie = JSON.parse(docCookies.getItem('gdIdentifier'));
                var e  = {}
                if (typeof properties != 'undefined') {
                    e.event = properties
                };
                e.event.event_name = name
                e.event.person_code= stored_id_cookie["person_code"]
                return this.apiRequest('/events',e,"POST")
            };
        },
        transact: function(productCode,quantity,price,properties){
            if(typeof quantity != 'undefined' && typeof price != 'undefined'
             && typeof productCode != 'undefined'){
                var stored_id_cookie = JSON.parse(docCookies.getItem('gdIdentifier'));
                var t  = {}
                if (typeof properties != 'undefined') {
                    e.transaction = properties
                };
                e.transaction.quantity = quantity
                e.transaction.price = price
                e.transaction.product_code = productCode
                e.transaction.person_code= stored_id_cookie["person_code"]
                console.log(e)
                return this.apiRequest('/transactions',e,"POST")
            }
        },
        fetch: function(product_code){
            if(typeof product_code != 'undefined'){
                var stored_id_cookie = JSON.parse(docCookies.getItem('gdIdentifier'));
                var p= {}
                p.person_code = stored_id_cookie["person_code"]
                p.product_code = product_code
                return this.apiRequest('/fetch?person_code='+ p.person_code + "&product_code="+ p.product_code, {} ,"GET")
            }
        },
        /**
         * Generic method to call any tracker method
         */
        call: function(funcName) {
            if (this[funcName] && typeof this[funcName] === 'function') {
                this[funcName].apply(this, Array.prototype.slice.call(arguments, 1));
            }

        },

        /**
         * Send an event to tracking servr
         */
        track_old: function(name, options) {
            var event = {},
                eventName = '',
                cb,
                _hash,
                _cb = arguments[arguments.length - 1];

            // Load campaign params (load first to allow overrides)
            if (!this.config('campaign_once') || !this.sentCampaign) {
                Greendeck.extend(event, Greendeck.getCampaignData());
                this.sentCampaign = true;
            }

            // Load query params mapping into Greendeck event
            Greendeck.extend(event, Greendeck.mapQueryParams(this.config('map_query_params')));


            if (typeof _cb === 'function') {
                cb = _cb;
            }
            // Track default: pageview
            if (typeof name === 'undefined' || name === cb) {
                eventName = 'pv';
            }
            // Track custom events
            else if (typeof options === 'undefined' || options === cb) {
                if (typeof name === 'string') {
                    eventName = name;
                }
                if (typeof name === 'object') {
                    if (name.name && name.name === 'pv') {
                        eventName = 'pv';
                    }

                    this._dataSetter(event, name);
                }
            }
            // Track custom events in format of name,object
            else {
                this._dataSetter(event, options);
                eventName = name;
            }

            // Add some defaults for pageview
            if (eventName === 'pv') {
                event.url = event.url || this.getPageUrl();
                event.title = event.title || this.getPageTitle();
                event.domain = event.domain || this.getDomainName();
                event.uri = event.uri || this.getURI();

                if (this.config('save_url_hash')) {
                    _hash = event.hash || this.getPageHash();
                    if (_hash !== '') {
                        event.hash = _hash;
                    }
                }
            }

            this._push({
                endpoint: 'ce',
                visitorData: this.visitorData,
                sessionData: this.sessionData,
                eventName: eventName,
                eventData: event,
                callback: cb
            });

            this.startPing();
        },

        /**
         * Tracks a single form and then resubmits it
         */
        trackForm: function(eventName, selector, options) {
            var els;
            var _event = eventName || 'Tracked Form';
            var _options = typeof selector === 'string' ? options || {} : selector || {};
            var bindEl;
            var self = this;

            bindEl = function(el, ev, props, opts) {
                Greendeck.attachEvent(el, 'submit', function(e) {
                    self.trackFormHandler(e, el, ev, _options);
                });
            };

            if (_options.elements) {
                els = _options.elements;
            }
            else {
                els = Greendeck.getElement(selector, _options);
            }

            // attach event if form was found
            if (els && els.length > 0) {
                for (var i in els) {
                    bindEl(els[i], _event, _options);
                }
            }
        },

        trackFormHandler: function(e, el, eventName, options) {
            var data;
            var personData;
            var trackFinished = false;

            if (!el.getAttribute('data-tracked')) {
                data = Greendeck.serializeForm(el, options);

                if (options.identify && typeof options.identify === 'function') {
                    personData = options.identify(data) || {};
                    if (personData) {
                        this.identify(personData);
                    }
                }

                if (options.noSubmit) {
                    this.track(eventName, data, function() {
                        if (typeof options.callback === 'function') {
                            options.callback(data);
                        }
                    });
                }
                else {
                    e.preventDefault();
                    e.stopPropagation();

                    el.setAttribute('data-tracked', 1);

                    // submit the form if the reply takes less than 250ms
                    this.track(eventName, data, function() {
                        trackFinished = true;

                        if (typeof options.callback === 'function') {
                            options.callback(data);
                        }

                        el.submit();
                    });

                    // set timeout to resubmit to be a hard 250ms
                    // so even if greendeck does not reply it will still
                    // submit the form
                    setTimeout(function() {
                        if (!trackFinished) {
                            el.submit();
                        }
                    }, 250);
                }
            }
        },

        /**
         * Tracks clicks
         *
         * @param {String} eventName The name of the event to track
         * @param {String} selector The id of element to track
         * @param {Object} properties Any event properties to track with
         * @param {Object} options (Optional) Options object
         * @param {Array} options.elements Supports an array of elements (jQuery object)
         * @param {Boolean} options.noNav (Default: false) If true, will only perform the track event and let the click event bubble up
         */
        trackClick: function(eventName, selector, properties, options) {
            var els = [];
            var i;
            var _options = options || {};
            var _event = eventName || 'Item Clicked';
            var bindEl;
            var self = this;

            bindEl = function(el, ev, props, opts) {
                Greendeck.attachEvent(el, 'click', function(e) {
                    self.trackClickHandler(e, el, ev, props, opts);
                });
            };

            /**
             * Support an array of elements
             */
            if (_options.elements) {
                els = _options.elements;
            }
            else {
                els = Greendeck.getElement(selector, _options);
            }

            if (els) {
                for (i = 0; i < els.length; i++) {
                    bindEl(els[i], _event, properties, _options);
                }
            }
        },

        trackClickHandler: function(e, el, eventName, properties, options) {
            var trackFinished = false;

            if (!el.getAttribute('data-tracked')) {
                if (options.noNav) {
                    this.track(eventName, properties);
                }
                else {
                    e.preventDefault();

                    el.setAttribute('data-tracked', 1);

                    this.track(eventName, properties, function() {
                        trackFinished = true;

                        if (typeof options.callback === 'function') {
                            options.callback();
                        }

                        el.click();
                    });

                    setTimeout(function() {
                        if (!trackFinished) {
                            el.click();
                        }
                    }, 250);
                }
            }
        },

        startPing: function() {
            var self = this;

            if (typeof this.pingInterval === 'undefined') {
                this.pingInterval = window.setInterval(function() {
                    self.ping();
                    console.log('ping kiya')
                }, this.config('ping_interval'));
            }
        },

        stopPing: function() {
            if (typeof this.pingInterval !== 'undefined') {
                window.clearInterval(this.pingInterval);
                delete this.pingInterval;
            }
        },

        /**
         * Pings tracker with visitor info
         */
        ping: function() {
            var now;

            if (this.config('ping') && this.idle < this.config('idle_timeout')) {
                //this._push({
                //    endpoint: 'ping'
                //});
                var user = this.userData
                this.apiRequest("/people/session?person_code=" + user.person_code, {}, "POST")
            }
            else {
                this.stopPing();
            }

            now = new Date();
            if (now - this.last_activity > this.config('idle_threshold')) {
                this.idle = now - this.last_activity;
            }

            return this;
        },

        /**
         * Pushes visitor data to server without sending an event
         */
        push: function(cb) {
            this._push({
                endpoint: 'identify',
                visitorData: this.visitorData,
                sessionData: this.sessionData,
                callback: cb
            });
            return this;
        },

        /**
         * synchronous sleep
         */
        sleep: function() {
        },

        // User Action tracking and event handlers

        /**
         * Clicks
         */

        /**
         * Measure when the user last moved their mouse to update idle state
         */
        moved: function(e, last_activity) {
            this.last_activity = last_activity;
            this.idle = 0;
        },

        /**
         * Measure when user last typed
         */
        typed: function() {
            this.vs = 2;
        },

        downloaded: function(url) {
            this.track('download', {
                url: url
            });
        },

        outgoing: function(url) {
            this.track('outgoing', {
                url: url
            });
        },

        /**
         * Event handler for decorating an element with a URL (for now only
         * anchor tags)
         */
        autoDecorate: function(elem) {
            var decorated;
            var canDecorate;
            var xdm = this.config('cross_domain');

            if (xdm) {
                if (typeof xdm === 'string') {
                    canDecorate = elem.href.indexOf(xdm) > -1;
                }
                else if (xdm.push) {
                    canDecorate = xdm.indexOf(elem.hostname) > -1;
                }

                if (canDecorate) {
                    decorated = this.decorate(elem);

                    if (decorated) {
                        elem.href = decorated;
                        // bind an event handler on mouseup to remove the url
                    }
                }
            }
        },

        /**
         * Resets cookie
         */
        reset: function(name) {
            if(typeof name === 'undefined'){
                docCookies.removeItem(
                    this.config('cookie_name'),
                    this.config('cookie_path'),
                    this.config('cookie_domain')
                );
            }else{
                docCookies.removeItem(
                    name,
                    this.config('cookie_path'),
                    this.config('cookie_domain')
                );
            }

            this.cookie = null;
            this._setupCookie();
        },

        /**
         * Decorates a given URL with a __greendeckid query param with value of
         * the current cookie
         */
        decorate: function(url) {
            var el;
            var query;
            var pathname;
            var host;

            if (typeof url === 'string') {
                el = document.createElement('a');
                el.href = url;
                query = el.search ? '&' : '?';
            }
            else if (url && url.href) {
                el = url;
            }

            if (el) {
                query = el.search ? '&' : '?';
                pathname = el.pathname && el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname;

                host = el.hostname + (el.port && el.port !== '' && el.port !== '80' && el.port !== '0' ? ':' + el.port : '');

                return el.protocol + '//' +
                    host +
                    pathname +
                    el.search +
                    query + XDM_PARAM_NAME + '=' + this.cookie +
                    el.hash;
            }
        },

        /**
         * Undecorates a URL with __greendeckid query param
         */
        undecorate: function(url) {
            var regex = new RegExp('[?&]+(?:' + XDM_PARAM_NAME + ')=([^&#]*)', 'gi');
            var _url = url;

            if (url && url.href) {
                _url = url.href;
            }

            if (_url) {
                return _url.replace(regex, '');
            }
       },

        getPageUrl: function() {
            if (this.options.ignore_query_url) {
                return Greendeck.location('pathname');
            }
            else {
                return Greendeck.location('pathname') + Greendeck.location('search');
            }
        },

        getPageHash: function() {
            return Greendeck.location('hash');
        },

        getPageTitle: function() {
            return (document.getElementsByTagName('title').length === 0) ? '' : document.getElementsByTagName('title')[0].innerHTML;
        },

        getDomainName: function() {
          return Greendeck.location('hostname');
        },

        getURI: function() {
          return Greendeck.location('href');
        },

        /**
         * Retrieves a Greendeck unique id from a URL's query param (__greendeckid)
         *
         * @param {String} href The full URL to extract from
         */
        getUrlId: function(href) {
            var _href = href || Greendeck.location('href');
            var matches;
            var regex = new RegExp(XDM_PARAM_NAME + '=([^&#]+)');

            matches = _href.match(regex);

            if (matches && matches[1]) {
                return matches[1];
            }
        },

        getOptionParams: function() {
            // default params
            var o = {
                alias: this.config('domain') || Greendeck.getHostnameNoWww(),
                instance: this.instanceName,
                ka: this.config('keep_alive') || this.config('ping_interval') * 2,
                meta: docCookies.getItem('gdMeta') || '',
                screen: window.screen.width + 'x' + window.screen.height,
                language: window.navigator.browserLanguage || window.navigator.language || '',
                app: this.config('app'),
                referer: document.referrer,
                idle: '' + parseInt(this.idle / 1000, 10),
                vs: 'i'
            };

            if (!this.config('domain')) {
                o._warn = 'no_domain';

                if (Greendeck.getHostnameNoWww() !== Greendeck.getDomain()) {
                    o._warn += ',domain_mismatch';
                }
            }

            // set cookie if configured
            if (this.config('use_cookies')) {
                o.cookie = this.getCookie() || this.cookie;
            }

            // set ip if configured
            if (this.config('ip')) {
                o.ip = this.config('ip');
            }
            // this.vs is 2 after typing so 'writing'
            if (this.vs === 2) {
                o.vs = 'w';
                this.vs = 0;
            }
            else if (this.idle === 0) {
                o.vs = 'r';
            }

            return o;
        },

        /**
         * Stop ping timers and cleanup any globals.  Shouldn't really
         * be needed by clients.
         */
        dispose: function() {
            this.stopPing();

            for (var id in this.__l) {
                if (this.__l.hasOwnProperty(id)) {
                    _handler[id][this.instanceName] = null;
                }
            }
            this.__l = null;

            // cleanup global
            if (typeof window[this.instanceName] !== 'undefined') {
                try {
                    delete window[this.instanceName];
                }
                catch(e) {
                    window[this.instanceName] = undefined;
                }
            }
        }
    };

    window.GreendeckTracker = Tracker;
    window.GreendeckLoadScript = Greendeck.loadScript;

    if (typeof window.exports !== 'undefined') {
        Greendeck.Tracker = Tracker;
        window.exports.Greendeck = Greendeck;

        if (typeof window.greendeckLoaded === 'function') {
            window.greendeckLoaded();
            window.greendeckLoaded = null;
        }
    }

    // Initialize instances & preloaded settings/events
    var _queue = window.__gd || window._w;
    if (typeof _queue !== 'undefined') {
        for (var name in _queue) {
            if (_queue.hasOwnProperty(name)) {
                var instance = new Tracker(name);
                instance.init();


                // DO NOT REMOVE
                // compatibility with old tracker and chat
                if (typeof window.greendeckTracker === 'undefined') {
                    window.greendeckTracker = instance;
                }
            }
        }
    }

})(window, document);
