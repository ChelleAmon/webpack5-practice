(()=>{"use strict";var e,r={325:(e,r,n)=>{function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const o=function(){function e(){var r,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),n="hello-world-button",(r="buttonCssClass")in this?Object.defineProperty(this,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[r]=n}var r,n;return r=e,(n=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass),e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello World",e.classList.add("hello-world-text"),r.appendChild(e)};var r=document.querySelector("body");r.appendChild(e)}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();var a=n(755),l=n.n(a);function i(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(new(function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n;return r=e,(n=[{key:"render",value:function(e){var r=l()("<h1>"),n=l()("body");r.text('Webpack is Awesome! This is "'+e+'" page'),n.append(r)}}])&&i(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}())).render("hello world"),(new o).render(),console.log("Production mode")}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,n,o,a)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,o,a]=e[s],i=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[l,i,c]=n,u=0;if(l.some((r=>0!==e[r]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var s=c(t)}for(r&&r(n);u<l.length;u++)a=l[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},n=self.webpackChunkwebpack5_practice=self.webpackChunkwebpack5_practice||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[755],(()=>t(325)));o=t.O(o)})();