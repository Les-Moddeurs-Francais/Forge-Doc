!function(){"use strict";var e,c,t,f,n,r={},a={};function o(e){var c=a[e];if(void 0!==c)return c.exports;var t=a[e]={exports:{}};return r[e].call(t.exports,t,t.exports,o),t.exports}o.m=r,e=[],o.O=function(c,t,f,n){if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],n=e[i][2];for(var a=!0,d=0;d<t.length;d++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](t[d])}))?t.splice(d--,1):(a=!1,n<r&&(r=n));if(a){e.splice(i--,1);var u=f();void 0!==u&&(c=u)}}return c}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[t,f,n]},o.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(c,{a:c}),c},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var n=Object.create(null);o.r(n);var r={};c=c||[null,t({}),t([]),t(t)];for(var a=2&f&&e;"object"==typeof a&&!~c.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(c){r[c]=function(){return e[c]}}));return r.default=function(){return e},o.d(n,r),n},o.d=function(e,c){for(var t in c)o.o(c,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:c[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(c,t){return o.f[t](e,c),c}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",64:"d64cf8f8",448:"7f9d7439",465:"aa0ae13f",850:"40227597",1209:"5bd2bc16",1447:"a98860cd",1451:"dca7ddc3",1516:"172ac131",1618:"80f5e4fa",1784:"24584499",2392:"bc88f846",2449:"95c2e7b4",2535:"814f3328",2583:"0c94138f",2598:"ce3ccfd5",2701:"8b0f4364",3089:"a6aa9e1f",3422:"4f806ca3",3431:"08ac8579",3608:"9e4087bc",3669:"e240f1d8",3709:"971286d5",3751:"3720c009",4013:"01a85c17",4120:"06dd7867",4121:"55960ee5",4195:"c4f5d8e4",4349:"4852ba84",4430:"1fc8cea4",4700:"8c7972ff",4836:"88c6804c",5174:"72c8f5ae",5659:"293f897f",5856:"e4ffd996",5932:"bc1b9aeb",6103:"ccc49370",6378:"b11ca90c",7135:"82a0cd4c",7241:"f8b9f4f8",7361:"32d144c9",7918:"17896441",7930:"9429132a",8215:"18007095",8598:"9e94c6cd",8610:"6875c492",9514:"1be78505",9671:"0e384e19",9762:"01db9603",9924:"df203c0f"}[e]||e)+"."+{53:"9cfe66b1",64:"a7477d9f",448:"1d8364a7",465:"61287c35",850:"6ffef869",923:"2d0ddb4f",1209:"c5f5aa8e",1447:"611471bf",1451:"789610d4",1516:"095c46d9",1618:"34f0c16c",1784:"67f3fca0",2392:"e878703c",2449:"97ede8e2",2535:"f1644b6a",2583:"83f37099",2598:"8c228b41",2701:"b8c38bdf",3089:"c211c8da",3422:"aafb9791",3431:"945352fb",3608:"633c1a84",3669:"62df8320",3709:"bdd70455",3751:"60f18c11",3829:"256c2134",4013:"2a54647d",4120:"9f44cde9",4121:"21125d94",4195:"a4665998",4349:"97c6f2ac",4430:"f052f1b3",4608:"30f546f6",4700:"10850125",4814:"b73503fb",4836:"3cae24f0",5131:"4ac603b6",5174:"64d67566",5659:"f4bf5295",5856:"ae4371cd",5932:"9f27c4ea",6103:"fb28aeb2",6378:"5c43a7cc",6444:"c97cd83b",7135:"6d941fe3",7241:"7c50e063",7361:"4c9eb3af",7918:"4fea7ad1",7930:"f24f14fe",8215:"0089d7bb",8598:"1ba7659a",8610:"64655292",9514:"a4512595",9671:"d1089351",9762:"c55409cd",9924:"208ea0ab"}[e]+".js"},o.miniCssF=function(e){return"assets/css/styles.0bf58541.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},f={},n="doc-forge:",o.l=function(e,c,t,r){if(f[e])f[e].push(c);else{var a,d;if(void 0!==t)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var b=u[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+t){a=b;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",n+t),a.src=e),f[e]=[c];var s=function(c,t){a.onerror=a.onload=null,clearTimeout(l);var n=f[e];if(delete f[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(t)})),c)return c(t)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={17896441:"7918",18007095:"8215",24584499:"1784",40227597:"850","935f2afb":"53",d64cf8f8:"64","7f9d7439":"448",aa0ae13f:"465","5bd2bc16":"1209",a98860cd:"1447",dca7ddc3:"1451","172ac131":"1516","80f5e4fa":"1618",bc88f846:"2392","95c2e7b4":"2449","814f3328":"2535","0c94138f":"2583",ce3ccfd5:"2598","8b0f4364":"2701",a6aa9e1f:"3089","4f806ca3":"3422","08ac8579":"3431","9e4087bc":"3608",e240f1d8:"3669","971286d5":"3709","3720c009":"3751","01a85c17":"4013","06dd7867":"4120","55960ee5":"4121",c4f5d8e4:"4195","4852ba84":"4349","1fc8cea4":"4430","8c7972ff":"4700","88c6804c":"4836","72c8f5ae":"5174","293f897f":"5659",e4ffd996:"5856",bc1b9aeb:"5932",ccc49370:"6103",b11ca90c:"6378","82a0cd4c":"7135",f8b9f4f8:"7241","32d144c9":"7361","9429132a":"7930","9e94c6cd":"8598","6875c492":"8610","1be78505":"9514","0e384e19":"9671","01db9603":"9762",df203c0f:"9924"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(c,t){var f=o.o(e,c)?e[c]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var n=new Promise((function(t,n){f=e[c]=[t,n]}));t.push(f[2]=n);var r=o.p+o.u(c),a=new Error;o.l(r,(function(t){if(o.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;a.message="Loading chunk "+c+" failed.\n("+n+": "+r+")",a.name="ChunkLoadError",a.type=n,a.request=r,f[1](a)}}),"chunk-"+c,c)}},o.O.j=function(c){return 0===e[c]};var c=function(c,t){var f,n,r=t[0],a=t[1],d=t[2],u=0;if(r.some((function(c){return 0!==e[c]}))){for(f in a)o.o(a,f)&&(o.m[f]=a[f]);if(d)var i=d(o)}for(c&&c(t);u<r.length;u++)n=r[u],o.o(e,n)&&e[n]&&e[n][0](),e[r[u]]=0;return o.O(i)},t=self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[];t.forEach(c.bind(null,0)),t.push=c.bind(null,t.push.bind(t))}()}();