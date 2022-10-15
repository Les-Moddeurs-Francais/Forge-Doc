"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5,title:"Exporter le mod",description:"Comment exporter le mod ?",tags:["bases"]},i=void 0,s={unversionedId:"bases/exportation",id:"bases/exportation",title:"Exporter le mod",description:"Comment exporter le mod ?",source:"@site/docs/bases/exportation.md",sourceDirName:"bases",slug:"/bases/exportation",permalink:"/bases/exportation",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/bases/exportation.md",tags:[{label:"bases",permalink:"/tags/bases"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Exporter le mod",description:"Comment exporter le mod ?",tags:["bases"]},sidebar:"documentationSidebar",previous:{title:"Tags",permalink:"/bases/resources/tags"},next:{title:"Enregistrement",permalink:"/category/register"}},l={},p=[{value:"Configuration du build.gradle",id:"configuration-du-buildgradle",level:2},{value:"Version",id:"version",level:3},{value:"Group",id:"group",level:3},{value:"Nom de l&#39;archive",id:"nom-de-larchive",level:3},{value:"Exportation",id:"exportation",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Exporter le mod ou le compiler est n\xe9cessaire si vous voulez partager votre mod,\nou m\xeame jouer avec dans un modpack ou sur un serveur avec vos amis. Vous avez besoin\ndu ",(0,o.kt)("em",{parentName:"p"},".jar"),", et c'est ce qu'on va chercher \xe0 obtenir dans cette section.",(0,o.kt)("br",{parentName:"p"}),"\n","Pour cela on va configurer certaines choses dans le ",(0,o.kt)("em",{parentName:"p"},"build.gradle"),"."),(0,o.kt)("h2",{id:"configuration-du-buildgradle"},"Configuration du build.gradle"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Vous pouvez trouver le ",(0,o.kt)("em",{parentName:"p"},"build.gradle")," dans votre dossier principal")),(0,o.kt)("p",null,"Proche de la ligne 15, vous trouverez trois param\xe8tres qui vont nous int\xe9resser :\n",(0,o.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"archivesBaseName"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"version = '1.0'\ngroup = 'fr.zom.testmod'\narchivesBaseName = 'TestMod'\n")),(0,o.kt)("h3",{id:"version"},"Version"),(0,o.kt)("p",null,"Tout d'abord, nous avons la version de notre mod. Le param\xe8tre est assez clair.\nIl sert tout simplement \xe0 sp\xe9cifier la version de votre mod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"version = '1.0'\n")),(0,o.kt)("p",null,"Ici la version de mon mod est 1.0. N'oubliez pas les guillemets !"),(0,o.kt)("h3",{id:"group"},"Group"),(0,o.kt)("p",null,"On passe maintenant au group qui est le package contenant l'ensemble\nde votre code dans le dossier ",(0,o.kt)("em",{parentName:"p"},"src/main/java"),".",(0,o.kt)("br",{parentName:"p"}),"\n","(C'est souvent le package o\xf9 votre classe principale est situ\xe9e.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"group = 'fr.zom.testmod'\n")),(0,o.kt)("p",null,"Pour ma part voici le chemin des sources de mon mod."),(0,o.kt)("h3",{id:"nom-de-larchive"},"Nom de l'archive"),(0,o.kt)("p",null,"Enfin, dernier param\xe8tre qui sera le nom que vous donnez au ",(0,o.kt)("em",{parentName:"p"},".jar")," quand vous l'exporterez."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"archivesBaseName = 'TestMod'\n")),(0,o.kt)("p",null,"Le nom complet du ",(0,o.kt)("em",{parentName:"p"},".jar")," sera le nom que vous mettez juste ici accompagn\xe9 de la version\nqu'on a chang\xe9 plus haut."),(0,o.kt)("h2",{id:"exportation"},"Exportation"),(0,o.kt)("p",null,"Pour exporter votre mod, rien de plus simple, dans votre IDE, il vous suffit de lancer\nla t\xe2che gradle ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),", ou dans la console ",(0,o.kt)("inlineCode",{parentName:"p"},"gradlew build"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Veillez \xe0 ne laisser aucune erreur dans votre code lorsque vous exporter votre mod\nautrement le build ne fonctionnera pas !")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Pour retrouver le ",(0,o.kt)("em",{parentName:"p"},".jar")," g\xe9n\xe9r\xe9, rendez-vous dans votre dossier principal, puis dans\n",(0,o.kt)("inlineCode",{parentName:"p"},"build/libs")," et vous trouverez par exemple : ",(0,o.kt)("inlineCode",{parentName:"p"},"TestMod-1.0.jar"),".")))}d.isMDXComponent=!0}}]);