parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e=new Promise(function(n,e){document.addEventListener("click",function(){n("First")}),setTimeout(function(){e(new Error("First"))},3e3)}),t=new Promise(function(n){document.addEventListener("contextmenu",function(e){e.preventDefault(),n("Second")}),document.addEventListener("click",function(){n("Second")})}),i=Promise.all([new Promise(function(n){document.addEventListener("contextmenu",function(e){e.preventDefault(),n("Third")})}),new Promise(function(n){document.addEventListener("click",function(){n("Third")})})]);function c(e){var t=Array.isArray(e)?e[0]:e;n.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="success">\n      '.concat(t," promise was resolved\n    </div>\n  "))}function o(e){n.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="warning">\n      '.concat(e," promise was rejected\n    </div>\n  "))}e.then(c,o),t.then(c),i.then(c);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3aaae453.js.map