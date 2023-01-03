"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:1,title:"Item basique",description:"Comment cr\xe9er un item basique ?",tags:["items"]},a=void 0,o={unversionedId:"items/basic",id:"version-1.18.x/items/basic",title:"Item basique",description:"Comment cr\xe9er un item basique ?",source:"@site/versioned_docs/version-1.18.x/items/basic.md",sourceDirName:"items",slug:"/items/basic",permalink:"/1.18.x/items/basic",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/items/basic.md",tags:[{label:"items",permalink:"/1.18.x/tags/items"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Item basique",description:"Comment cr\xe9er un item basique ?",tags:["items"]},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/1.18.x/category/items"},next:{title:"Propri\xe9t\xe9s des items",permalink:"/1.18.x/items/properties"}},l={},u=[{value:"Type d&#39;enregistrement",id:"type-denregistrement",level:2},{value:"DeferredRegister",id:"deferredregister",level:3},{value:"Enregistrer l&#39;item",id:"enregistrer-litem",level:2},{value:"Sans classe custom",id:"sans-classe-custom",level:3},{value:"Avec classe custom",id:"avec-classe-custom",level:3},{value:"Ressources",id:"ressources",level:2},{value:"Mod\xe8le et texture",id:"mod\xe8le-et-texture",level:3},{value:"Traductions",id:"traductions",level:3}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"type-denregistrement"},"Type d'enregistrement"),(0,s.kt)("p",null,"Pour que l'item soit reconnu par le jeu, il nous faut l'enregistrer, et pour cela deux choix s'offrent \xe0 nous. Soit les events, soit les DeferredRegister."),(0,s.kt)("h3",{id:"deferredregister"},"DeferredRegister"),(0,s.kt)("p",null,"Veuillez-vous referrer \xe0 la ",(0,s.kt)("a",{parentName:"p",href:"../register/deferred"},"page sur ce sujet"),"."),(0,s.kt)("h2",{id:"enregistrer-litem"},"Enregistrer l'item"),(0,s.kt)("p",null,"Maintenant que l'un des types d'enregistrement a \xe9t\xe9 vu, il ne nous reste plus qu'\xe0 enregistrer l'item et ici deux types sont possibles, enregistrer l'item avec une classe custom ou sans."),(0,s.kt)("h3",{id:"sans-classe-custom"},"Sans classe custom"),(0,s.kt)("p",null,"Cette mani\xe8re nous permet d'enregistrer un item, mais celui-ci sera tr\xe8s basique (c'est-\xe0-dire qu'on ne pourra pas d\xe9finir une action lors d'un clique droit ou m\xeame lors de la destruction de l'item)."),(0,s.kt)("p",null,"Ainsi pour faire l'enregistrement, ajoutez une variable comme celle-ci dans la classe contenant le DeferredRegister :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Item> MON_ITEM = ITEMS.register("mon_item", () -> new Item(new Item.Properties().stacksTo(10)));\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Tous les noms de classes, de variables et de m\xe9thodes sont personnalisables comme vous le souhaitez, et cela, tout au long du ",(0,s.kt)("em",{parentName:"p"},"tutoriel"),".")),(0,s.kt)("p",null,"Si vous souhaitez en savoir un peu plus sur les diff\xe9rentes propri\xe9t\xe9s disponibles pour les items, voici une ",(0,s.kt)("a",{parentName:"p",href:"./properties"},"page d\xe9di\xe9e \xe0 ceci"),"."),(0,s.kt)("h3",{id:"avec-classe-custom"},"Avec classe custom"),(0,s.kt)("p",null,"Ici cette mani\xe8re nous permettra plus tard, d'ajouter des comportements \xe0 l'item (nous ne verrons cela que dans un prochain chapitre).\nPour cela, vous devez tout d'abord cr\xe9er une classe custom \xe9tendu de la classe ",(0,s.kt)("inlineCode",{parentName:"p"},"Item"),", ce qui nous donne une classe du type :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class MonItem extends Item {\n    public MonItem(Properties properties) {\n        super(properties);\n    }\n}\n")),(0,s.kt)("p",null,"Ainsi nous pourrons enregistrer l'item comme dans la technique sans classe custom sauf que nous ferons un ",(0,s.kt)("inlineCode",{parentName:"p"},"new MonItem")," et non ",(0,s.kt)("inlineCode",{parentName:"p"},"new Item"),", ce qui donne une variable du type"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Item> MON_ITEM = ITEMS.register("mon_item", () -> new MonItem(new Item.Properties().tab(CreativeModeTab.TAB_MISC)));\n')),(0,s.kt)("h2",{id:"ressources"},"Ressources"),(0,s.kt)("p",null,"Maintenant que notre item est ajout\xe9, il faut lui donner un mod\xe8le, une texture ainsi qu'un nom qui d\xe9pendra de la langue."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title='Arborescence basique des ressources pour un mod'",title:"'Arborescence",basique:!0,des:!0,ressources:!0,pour:!0,un:!0,"mod'":!0},"assets\n\u2514\u2500\u2500 modid\n    \u251c\u2500\u2500 blockstates\n    \u251c\u2500\u2500 lang\n    \u251c\u2500\u2500 models\n    \u2502     \u251c\u2500\u2500 block\n    \u2502     \u2514\u2500\u2500 item\n    \u2514\u2500\u2500 textures\n          \u251c\u2500\u2500 block\n          \u2514\u2500\u2500 item\n")),(0,s.kt)("h3",{id:"mod\xe8le-et-texture"},"Mod\xe8le et texture"),(0,s.kt)("p",null,"Pour un item, son mod\xe8le permet de d\xe9finir sa forme ainsi que les textures qui lui seront appliqu\xe9es."),(0,s.kt)("p",null,"Ici nous appliquerons un mod\xe8le basique assimilable au diamant."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "minecraft:item/generated",\n  "textures": {\n    "layer0": "modid:item/mon_item"\n  }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"parent")," correspond au mod\xe8le maitre que l'item va utiliser."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"textures")," correspond aux textures appliqu\xe9es \xe0 l'item."),(0,s.kt)("p",null,"Comme sp\xe9cifi\xe9 dans le mod\xe8le, la texture se situera dans le dossier ",(0,s.kt)("inlineCode",{parentName:"p"},"textures/item")," et aura comme nom ",(0,s.kt)("inlineCode",{parentName:"p"},"mon_item.png")," (l'extension est importante)."),(0,s.kt)("h3",{id:"traductions"},"Traductions"),(0,s.kt)("p",null,"Un item \xe0 sa cr\xe9ation se voie attribuer de mani\xe8re syst\xe9matique un nom d\xe9localis\xe9. La raison \xe9tant que celui-ci permet de traduire le nom de l'item dans toutes les langues support\xe9es par le jeu."),(0,s.kt)("p",null,"Ici l'item ne comportera qu'un nom traduit en anglais (en_us) qui est la langue de base du jeu (en cas de traduction manquante dans une autre langue, le jeu appliquera cette traduction), mais voici toutes les ",(0,s.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language"},"langues")," disponible dans le jeu avec leurs codes respectifs. "),(0,s.kt)("p",null,"Les fichiers de langue sont situ\xe9s dans le dossier ",(0,s.kt)("inlineCode",{parentName:"p"},"lang")," des ressources."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=en_us.json",title:"en_us.json"},'{\n  "item.modid.mon_item": "My Item"\n}\n')))}c.isMDXComponent=!0}}]);