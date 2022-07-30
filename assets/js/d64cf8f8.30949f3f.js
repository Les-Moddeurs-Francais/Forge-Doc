"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[64],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5055:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"Item color\xe9",description:"Comment cr\xe9er un item color\xe9 ?",tags:["items"]},s=void 0,l={unversionedId:"items/colored",id:"items/colored",title:"Item color\xe9",description:"Comment cr\xe9er un item color\xe9 ?",source:"@site/docs/items/colored.md",sourceDirName:"items",slug:"/items/colored",permalink:"/docs/items/colored",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/items/colored.md",tags:[{label:"items",permalink:"/docs/tags/items"}],version:"current",lastUpdatedBy:"Mysterious_Dev",frontMatter:{title:"Item color\xe9",description:"Comment cr\xe9er un item color\xe9 ?",tags:["items"]},sidebar:"tutorialSidebar",previous:{title:"Propri\xe9t\xe9s des items",permalink:"/docs/items/properties"},next:{title:"Onglet cr\xe9atif",permalink:"/docs/items/creative-tab"}},u={},p=[{value:"Enregistrer l&#39;item comme pouvant \xeatre color\xe9",id:"enregistrer-litem-comme-pouvant-\xeatre-color\xe9",level:2}],m={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Depuis plusieurs versions, Minecraft permet \xe0 certains items de pouvoir \xeatre color\xe9s. Nous permettant une palette de couleurs gigantesque, et ceci pour un seul item."),(0,i.kt)("p",null,"Nous n'aborderons pas la cr\xe9ation de l'item en tant que telle sur cette page, ceci \xe9tant d\xe9j\xe0 fait avec ",(0,i.kt)("a",{parentName:"p",href:"/docs/items/basic"},"celle-ci"),"."),(0,i.kt)("h2",{id:"enregistrer-litem-comme-pouvant-\xeatre-color\xe9"},"Enregistrer l'item comme pouvant \xeatre color\xe9"),(0,i.kt)("p",null,"Le rendu des items se faisant c\xf4t\xe9 client, nous aurons besoin d'ex\xe9cuter le code suivant dans la fonction ",(0,i.kt)("strong",{parentName:"p"},"client")," de la classe principale (celle-ci doit avoir un param\xe8tre de type ",(0,i.kt)("strong",{parentName:"p"},"FMLClientSetupEvent"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Minecraft.getInstance().getItemColors().register((stack, color) -> {\n    return stack.getTag() != null && stack.getTag().contains("color", 99) ? stack.getTag().getInt("color") : 0x13421772;\n}, Items.STICK);\n')),(0,i.kt)("p",null,"Ici dans cet exemple, l'item qui sera color\xe9 sera le b\xe2ton de base du jeu (mais il est possible de changer celui-ci par l'item de votre choix)."),(0,i.kt)("p",null,"Dans ce cas, si l'item n'a pas de tag, ou si le tag ne contient pas la cl\xe9 \"color\", alors la couleur sera noire. Sinon elle sera de la couleur sp\xe9cifi\xe9e dans le tag ",(0,i.kt)("em",{parentName:"p"},"color"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"La condition expos\xe9e ici n'est qu'\xe0 titre indicatif, et n'est donc pas n\xe9cessaire. Il est cependant n\xe9cessaire de retourner un nombre qui sera la couleur de votre item (ici par d\xe9faut la couleur sera celle attribu\xe9e au nombre ",(0,i.kt)("strong",{parentName:"p"},"0x13421772"),").")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"R\xe9sultat",src:r(1313).Z,width:"1920",height:"991"})))}d.isMDXComponent=!0},1313:function(e,t,r){t.Z=r.p+"assets/images/colored_item-89a6d6f4e12086ace4f25db3a1bb002b.png"}}]);