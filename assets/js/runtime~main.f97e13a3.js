!function(){"use strict";var e,t,n,r,o,f={},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=f,i.c=c,e=[],i.O=function(t,n,r,o){if(!n){var f=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var c=!0,u=0;u<n.length;u++)(!1&o||f>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[u])}))?n.splice(u--,1):(c=!1,o<f&&(f=o));if(c){e.splice(d--,1);var a=r();void 0!==a&&(t=a)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var f={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){f[t]=function(){return e[t]}}));return f.default=function(){return e},i.d(o,f),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"assets/js/"+({51:"23b8615d",53:"935f2afb",163:"a64d470c",195:"c4f5d8e4",218:"2dc45ced",280:"b924f9ed",283:"4856f5e5",325:"215c24a1",423:"6b45e673",451:"7f8b29e1",484:"8d91250b",510:"95357ccf",514:"1be78505",618:"8f030830",636:"88cb7d3a",805:"e066a2fa",952:"3b464fa6",966:"1781a37c",999:"e46db26d"}[e]||e)+"."+{51:"6aca3973",53:"77b444ed",89:"24d49bed",163:"ff18eca5",195:"5c52dfbd",218:"cc80155b",280:"22957b78",283:"bb22b6a2",325:"08cc5dda",423:"32f1989a",451:"dfb9c127",484:"663d3904",510:"84fd0403",514:"c964e55a",529:"c724e8e3",618:"bce6cb08",636:"a366345b",724:"58682d04",805:"6744b72c",893:"3d661f8e",952:"4ebf8c05",966:"ae94c54a",999:"62f284bc"}[e]+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="@finos/perspective-docs:",i.l=function(e,t,n,f){if(r[e])r[e].push(t);else{var c,u;if(void 0!==n)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var b=a[d];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+n){c=b;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="/",i.gca=function(e){return e={"23b8615d":"51","935f2afb":"53",a64d470c:"163",c4f5d8e4:"195","2dc45ced":"218",b924f9ed:"280","4856f5e5":"283","215c24a1":"325","6b45e673":"423","7f8b29e1":"451","8d91250b":"484","95357ccf":"510","1be78505":"514","8f030830":"618","88cb7d3a":"636",e066a2fa:"805","3b464fa6":"952","1781a37c":"966",e46db26d:"999"}[e]||e,i.p+i.u(e)},function(){i.b=document.baseURI||self.location.href;var e={303:0,532:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var f=i.p+i.u(t),c=new Error;i.l(f,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",c.name="ChunkLoadError",c.type=o,c.request=f,r[1](c)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,f=n[0],c=n[1],u=n[2],a=0;if(f.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(u)var d=u(i)}for(t&&t(n);a<f.length;a++)o=f[a],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},n=self.webpackChunk_finos_perspective_docs=self.webpackChunk_finos_perspective_docs||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();