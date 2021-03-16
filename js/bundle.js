/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,s=void 0,i=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(s?s(m):g())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,p,_,y,g=void 0;function w(t,e){var n=this,r=new this.constructor(L);void 0===r[S]&&I(r);var o=n._state;if(o){var s=arguments[o-1];i((function(){return $(o,r,s,n._result)}))}else M(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(L);return x(e,t),e}g=u?function(){return process.nextTick(m)}:l?(p=0,_=new l(m),y=document.createTextNode(""),_.observe(y,{characterData:!0}),function(){y.data=p=++p%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function L(){}var E=void 0;function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?T(t,e._result):2===e._state?C(t,e._result):M(e,void 0,(function(e){return x(t,e)}),(function(e){return C(t,e)}))}(e,n):void 0===r?T(e,n):t(r)?function(t,e,n){i((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?x(t,n):T(t,n))}),(function(e){r||(r=!0,C(t,e))}),t._label);!r&&o&&(r=!0,C(t,o))}),t)}(e,n,r):T(e,n)}function x(t,e){if(t===e)C(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)T(t,e);else{var n=void 0;try{n=e.then}catch(e){return void C(t,e)}A(t,e,n)}var r,o}function q(t){t._onerror&&t._onerror(t._result),j(t)}function T(t,e){t._state===E&&(t._result=e,t._state=1,0!==t._subscribers.length&&i(j,t))}function C(t,e){t._state===E&&(t._state=2,t._result=e,i(q,t))}function M(t,e,n,r){var o=t._subscribers,s=o.length;t._onerror=null,o[s]=e,o[s+1]=n,o[s+2]=r,0===s&&t._state&&i(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,s=t._result,i=0;i<e.length;i+=3)r=e[i],o=e[i+n],r?$(n,r,o,s):o(s);t._subscribers.length=0}}function $(e,n,r,o){var s=t(r),i=void 0,c=void 0,a=!0;if(s){try{i=r(o)}catch(t){a=!1,c=t}if(n===i)return void C(n,new TypeError("A promises callback cannot return that same promise."))}else i=o;n._state!==E||(s&&a?x(n,i):!1===a?C(n,c):1===e?T(n,i):2===e&&C(n,i))}var k=0;function I(t){t[S]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var O=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(L),this.promise[S]||I(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&T(this.promise,this._result))):C(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,s=void 0,i=!1;try{o=t.then}catch(t){i=!0,s=t}if(o===w&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===H){var c=new n(L);i?C(c,s):A(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===E&&(this._remaining--,2===t?C(r,n):this._result[e]=n),0===this._remaining&&T(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var H=function(){function e(t){this[S]=k++,this._result=this._state=void 0,this._subscribers=[],L!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){C(t,e)}))}catch(e){C(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return H.prototype.then=w,H.all=function(t){return new O(this,t).promise},H.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,s=0;s<o;s++)n.resolve(t[s]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},H.resolve=b,H.reject=function(t){var e=new this(L);return C(e,t),e},H._setScheduler=function(t){s=t},H._setAsap=function(t){i=t},H._asap=i,H.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=H},H.Promise=H,H}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}n(702).polyfill(),window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),5e4);(function(t,e,n,r){const o=document.querySelectorAll(t),s=document.querySelectorAll(e),i=document.querySelector(n);function c(){s.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),o.forEach((t=>{t.classList.remove(r)}))}function a(t=0){s[t].classList.add("show","fade"),s[t].classList.remove("hide"),o[t].classList.add(r)}c(),a(),i.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{n===t&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,r){const o=document.querySelector(n);document.addEventListener("click",(o=>{""===o.target.dataset.modal?t(n,r):""!==o.target.dataset.close&&"modal show"!==o.target.className||e(n)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&o.classList.contains("show")&&e(n)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(n,r),window.removeEventListener("scroll",e))}))}(".modal",n),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,s;function i(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){e&&n&&r&&o&&s?"female"===e?t.textContent=Math.round((447.6+9.2*r+3.1*n-4.3*o)*s):"male"===e&&(t.textContent=Math.round((88.36+13.4*r+4.8*n-5.7*o)*s)):t.textContent="____"}function a(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(s=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",s)):(e=t.target.getAttribute("id"),localStorage.setItem("sex",e)),r.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex",e)),localStorage.getItem("ratio")?s=localStorage.getItem("ratio"):(s=1.375,localStorage.setItem("ratio",s)),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),c(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(){class t{constructor(t,e,n,r,o,s,...i){this.src=t,this.alt=e,this.title=n,this.descr=r,this.price=o,this.classes=i,this.parent=document.querySelector(s),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((({img:e,altimg:n,title:r,descr:o,price:s})=>{new t(e,n,r,o,s,".menu .container").render()}))}))}(),function(n,r){function o(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal",r);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n            <div class="modal__content">\n                <div data-close class="modal__close">&times;</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const r=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((t=>{console.log(t),o("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}))}("form",n),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),s=r.querySelector("#hours"),i=r.querySelector("#minutes"),c=r.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/864e5%24),minutes:Math.floor(e/6e4%60),seconds:Math.floor(e/1e3%60)}}(e);o.innerHTML=n(t.days),s.innerHTML=n(t.hours),i.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(t,e)}(".timer","2021-04-11"),function({container:t,slide:e,nextArrow:n,prevArrow:r,totalCounter:o,currentCounter:s,wrapper:i,field:c}){const a=document.querySelector(t),l=a.querySelector(i),u=l.querySelectorAll(e),d=l.querySelector(c),h=document.querySelector(r),f=document.querySelector(n),m=document.querySelector(s),v=document.querySelector(o),p=window.getComputedStyle(l).width;let _=1,y=0;function g(){u.length<10?(v.textContent=`0${u.length}`,m.textContent=`0${_}`):(v.textContent=u.length,m.textContent=_)}function w(){L.forEach((t=>t.style.opacity=".5")),L[_-1].style.opacity=1}function b(t){return+t.replace(/\D/g,"")}g(),d.style.width=100*u.length+"%",d.style.display="flex",d.style.transition="0.5s all",l.style.overflow="hidden",u.forEach((t=>{t.style.width=p})),a.style.position="relative";const S=document.createElement("ol"),L=[];S.classList.add("carousel-indicators"),a.append(S);for(let t=0;t<u.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.classList.add("dot"),0===t&&(e.style.opacity=1),S.append(e),L.push(e)}f.addEventListener("click",(()=>{y==b(p)*(u.length-1)?y=0:y+=b(p),d.style.transform=`translateX(-${y}px)`,_==u.length?_=1:_++,g(),w()})),h.addEventListener("click",(()=>{0===y?y=b(p)*(u.length-1):y-=b(p),d.style.transform=`translateX(-${y}px)`,1==_?_=u.length:_--,g(),w()})),L.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");_=e,y=b(p)*(e-1),d.style.transform=`translateX(-${y}px)`,g(),w()}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}()}();
//# sourceMappingURL=bundle.js.map