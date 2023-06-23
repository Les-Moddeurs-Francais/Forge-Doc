"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={slug:"forge-1191-420",title:"Forge 1.19.1 42.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19.1"]},i=void 0,l={permalink:"/news/forge-1191-420",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2022-07-28-forge-1191-420.md",source:"@site/news/2022-07-28-forge-1191-420.md",title:"Forge 1.19.1 42.0",description:"Avec la sortie de la si controvers\xe9e 1.19.1, la premi\xe8re version de Forge 1.19.1 a donc \xe9t\xe9 publi\xe9e. Celle-ci apporte quelques petits changements.",date:"2022-07-28T00:00:00.000Z",formattedDate:"28 juillet 2022",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.19.1",permalink:"/news/tags/1-19-1"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-1191-420",title:"Forge 1.19.1 42.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19.1"]},prevItem:{title:"Forge 1.19.2 43.1",permalink:"/news/forge-1192-431"},nextItem:{title:"Forge 1.19 41.1",permalink:"/news/forge-119-411"}},s={authorsImageUrls:[void 0]},u=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Changements",id:"changements",level:3},{value:"Suppressions",id:"suppressions",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Avec la sortie de la si controvers\xe9e 1.19.1, la premi\xe8re version de Forge 1.19.1 a donc \xe9t\xe9 publi\xe9e. Celle-ci apporte quelques petits changements."),(0,o.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ajout de l'appel de l'\xe9v\xe8nement ",(0,o.kt)("inlineCode",{parentName:"li"},"EntityMobGriefingEvent")," dans la fonction ",(0,o.kt)("inlineCode",{parentName:"li"},"Allay#wantsToPickUp"))),(0,o.kt)("h3",{id:"changements"},"Changements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Les types d'arguments de commande ont d\xe9sormais un registre"),(0,o.kt)("li",{parentName:"ul"},"Refonte de l'\xe9v\xe8nement ",(0,o.kt)("inlineCode",{parentName:"li"},"ServerChatEvent")," pour utiliser le syst\xe8me ",(0,o.kt)("inlineCode",{parentName:"li"},"ChatDecorator")),(0,o.kt)("li",{parentName:"ul"},"Forge utilise d\xe9sormais Gradle 7.5")),(0,o.kt)("h3",{id:"suppressions"},"Suppressions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La fonction ",(0,o.kt)("inlineCode",{parentName:"li"},"ClientChatEvent#setMessage")," a \xe9t\xe9 supprim\xe9e pour le moment")))}c.isMDXComponent=!0}}]);