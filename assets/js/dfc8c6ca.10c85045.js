"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"forge-1193-440",title:"Forge 1.19.3 44.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19.3"]},i=void 0,l={permalink:"/news/forge-1193-440",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2022-12-08-forge-1193-440.md",source:"@site/news/2022-12-08-forge-1193-440.md",title:"Forge 1.19.3 44.0",description:"La version 1.19.3-44.0 de Forge est sortie et elle apporte plusieurs changements notables.",date:"2022-12-08T00:00:00.000Z",formattedDate:"8 d\xe9cembre 2022",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.19.3",permalink:"/news/tags/1-19-3"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-1193-440",title:"Forge 1.19.3 44.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19.3"]},prevItem:{title:"Forge 1.19.3 44.1",permalink:"/news/forge-1193-441"},nextItem:{title:"Forge 1.19.2 43.1",permalink:"/news/forge-1192-431"}},s={authorsImageUrls:[void 0]},u=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Changements",id:"changements",level:3},{value:"Suppressions",id:"suppressions",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La version 1.19.3-44.0 de Forge est sortie et elle apporte plusieurs changements notables."),(0,a.kt)("p",null,"Lien de l'annonce de Forge : ",(0,a.kt)("a",{parentName:"p",href:"https://blog.minecraftforge.net/releases/1-19-3/"},"https://blog.minecraftforge.net/releases/1-19-3/")),(0,a.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajout d'un nouvel \xe9v\xe9nement, ",(0,a.kt)("inlineCode",{parentName:"li"},"CreativeModeTabEvent"),", qui permet de cr\xe9er de nouveau onglet pour l'inventaire cr\xe9atif ou de modifier le contenu de ceux d\xe9j\xe0 existants"),(0,a.kt)("li",{parentName:"ul"},"Ajout d'un nouveau ",(0,a.kt)("em",{parentName:"li"},"provider"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DatapackBuiltinEntriesProvider"),", pour les data generators, facilitant la g\xe9n\xe9ration des fichiers JSON pour tout ce qui touche aux registres accessibles par des datapacks (principalement la g\xe9n\xe9ration)"),(0,a.kt)("li",{parentName:"ul"},"Ajout d'un acc\xe8s au champ ",(0,a.kt)("inlineCode",{parentName:"li"},"lookupProvider")," pour les data generators par l'interm\xe9diaire d'une fonction ",(0,a.kt)("em",{parentName:"li"},"getter"))),(0,a.kt)("h3",{id:"changements"},"Changements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\xe9placement des registres de ",(0,a.kt)("em",{parentName:"li"},"datapack")," vers l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"DataPackRegistryEvent.NewRegistry")," au lieu de les lier \xe0 la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeRegistry")),(0,a.kt)("li",{parentName:"ul"},"Mise \xe0 jour des \xe9v\xe9nements ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientChatReceivedEvent")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"ServerChatEvent")," pour s'aligner sur les changements de Mojang"),(0,a.kt)("li",{parentName:"ul"},"Modification de l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"RegisterShadersEvent")," pour utiliser la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"ResourceProvider"))),(0,a.kt)("h3",{id:"suppressions"},"Suppressions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Suppression de la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"li"},"tab(...)")," au profit du nouvel \xe9v\xe9nement, ",(0,a.kt)("inlineCode",{parentName:"li"},"CreativeModeTabEvent")),(0,a.kt)("li",{parentName:"ul"},"Suppression de la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeRegistryTagsProvider")),(0,a.kt)("li",{parentName:"ul"},"Le constructeur de la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"Button")," est supprim\xe9 au profit d'un constructeur (comme l'est la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"Component"),")")))}c.isMDXComponent=!0}}]);