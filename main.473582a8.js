parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return i(e)||t(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,n):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var a,c=4,d=c*c,s=0,l=0,f=0,u=document.querySelector("tbody"),T=u.children,h=document.querySelector(".game-header"),x=h.querySelector("button"),v=document.querySelector(".game-score"),m=document.querySelectorAll(".field-cell");function y(e){e.innerText="",e.className="field-cell"}function b(){L(),A(),q("nothing"),k()}function L(){e(m).map(function(e){y(e)}),v.innerText=0}function g(){return Math.random()>.1?2:4}function w(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g();T[n].children[e].innerText=r,T[n].children[e].classList.add("field-cell--".concat(r)),T[n].children[e].classList.remove("field-cell--".concat(r/2))}function S(){p(d),""===T[l].children[s].innerText?w(s,l):S()}function A(){p(d),w(s,l),p(d),w(s,l)}function p(e){var n=Math.floor(Math.random()*e);f!==n?(f=n,s=Math.floor(f/c),l=f-s*c):p(e)}function k(){x.classList.remove("start"),x.classList.add("restart"),x.innerText="Restart"}function q(e){var n=document.querySelector(".message-lose"),r=document.querySelector(".message-win"),t=document.querySelector(".message-start");switch(e){case"lose":r.classList.add("hidden"),t.classList.add("hidden"),n.classList.remove("hidden");break;case"win":n.classList.add("hidden"),t.classList.add("hidden"),r.classList.remove("hidden");break;case"nothing":n.classList.add("hidden"),r.classList.add("hidden"),t.classList.add("hidden")}}function M(){a=!1;for(var e=0;e<c;e++){j(e);for(var n=c-1;n>0;n--){var r=T[n].children[e],t=T[n-1].children[e];if(""!==r.innerText&&""!==t.innerText&&r.innerText===t.innerText){var i=2*+r.innerText;w(e,n,i),v.innerText=+v.innerText+i,y(t),a=!0}}j(e)}}function j(e){for(var n=0,r=c-1;r>=0;r--){var t=T[r].children[e];""!==t.innerText?r!==c-1&&n>0&&(w(e,r+n,t.innerText),y(t),n--,r++,a=!0):n++}}function E(){a=!1;for(var e=0;e<c;e++){I(e);for(var n=0;n<c-1;n++){var r=T[n].children[e],t=T[n+1].children[e];if(""!==r.innerText&&""!==t.innerText&&r.innerText===t.innerText){var i=2*+r.innerText;w(e,n,i),v.innerText=+v.innerText+i,y(t),a=!0}}I(e)}}function I(e){for(var n=0,r=0;r<c;r++){var t=T[r].children[e];""!==t.innerText?0!==r&&n>0&&(w(e,r-n,t.innerText),y(t),n--,r--,a=!0):n++}}function O(){a=!1;for(var e=0;e<c;e++){R(e);for(var n=c-1;n>0;n--){var r=T[e].children[n],t=T[e].children[n-1];if(""!==r.innerText&&""!==t.innerText&&r.innerText===t.innerText){var i=2*+r.innerText;w(n,e,i),v.innerText=+v.innerText+i,y(t),a=!0}}R(e)}}function R(e){for(var n=0,r=c-1;r>=0;r--){var t=T[e].children[r];""!==t.innerText?r!==c-1&&n>0&&(w(r+n,e,t.innerText),y(t),n--,r++,a=!0):n++}}function U(){a=!1;for(var e=0;e<c;e++){C(e);for(var n=0;n<c-1;n++){var r=T[e].children[n],t=T[e].children[n+1];if(""!==r.innerText&&""!==t.innerText&&r.innerText===t.innerText){var i=2*+r.innerText;w(n,e,i),v.innerText=+v.innerText+i,y(t),a=!0}}C(e)}}function C(e){for(var n=0,r=0;r<c;r++){var t=T[e].children[r];""!==t.innerText?0!==r&&n>0&&(w(r-n,e,t.innerText),y(t),n--,r--,a=!0):n++}}function D(n,r){return e(n).some(function(n){return e(n.children).some(function(e){return e.innerText===r})})}x.addEventListener("click",b),document.addEventListener("keydown",function(e){switch(e.key){case"ArrowDown":M();break;case"ArrowUp":E();break;case"ArrowRight":O();break;case"ArrowLeft":U()}a&&S();var n=D(T,"");if(!a&&!n){for(var r=0,t=0;t<c-1;t++)for(var i=0;i<c-1;i++){var o=T[t].children[i],d=T[t+1].children[i],s=T[t].children[i+1];o.innerText!==d.innerText&&o.innerText!==s.innerText||r++}r||q("lose")}D(T,"2048")&&q("win")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.473582a8.js.map