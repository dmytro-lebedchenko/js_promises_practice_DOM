parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=function(n,t){document.body.insertAdjacentHTML("beforeend",'\n    <div\n      data-qa="notification"\n      class="notification notification--'.concat(n,'">\n        ').concat(t,"\n    </div>\n  "))};document.addEventListener("contextmenu",function(n){return n.preventDefault()});var t=function(t){return n("success","".concat(t," promise was resolved!"))},e=function(t){return n("warning","".concat(t," promise was rejected!"))},o=new Promise(function(n,t){document.addEventListener("click",n),setTimeout(t,3e3)}),c=new Promise(function(n){document.addEventListener("click",n)||document.addEventListener("contextmenu",n)}),i=new Promise(function(n){var t,e;document.body.addEventListener("mousedown",function(o){0===o.button&&(t=!0),2===o.button&&(e=!0),t&&e&&n()})});o.then(function(){return t("First")}).catch(function(){return e("First")}),c.then(function(){return t("Second")}),i.then(function(){return t("Third")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b6d55eb4.js.map