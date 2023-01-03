"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[2456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=i,v=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1,title:"Propri\xe9t\xe9s de mod\xe8le",description:"Comment utiliser les propri\xe9t\xe9s de mod\xe8le pour les items ?",tags:["items","models"]},a=void 0,l={unversionedId:"models/items/property",id:"version-1.18.x/models/items/property",title:"Propri\xe9t\xe9s de mod\xe8le",description:"Comment utiliser les propri\xe9t\xe9s de mod\xe8le pour les items ?",source:"@site/versioned_docs/version-1.18.x/models/items/property.md",sourceDirName:"models/items",slug:"/models/items/property",permalink:"/1.18.x/models/items/property",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/models/items/property.md",tags:[{label:"items",permalink:"/1.18.x/tags/items"},{label:"models",permalink:"/1.18.x/tags/models"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Propri\xe9t\xe9s de mod\xe8le",description:"Comment utiliser les propri\xe9t\xe9s de mod\xe8le pour les items ?",tags:["items","models"]},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/1.18.x/category/models/items"},next:{title:"Data Generators",permalink:"/1.18.x/category/data-generators"}},s={},m=[{value:"Enregistrer l&#39;item comme ayant un mod\xe8le variable",id:"enregistrer-litem-comme-ayant-un-mod\xe8le-variable",level:2},{value:"Mod\xe8le",id:"mod\xe8le",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Disponibles depuis la 1.9, les propri\xe9t\xe9s de mod\xe8le (anciennement appel\xe9es ",(0,i.kt)("em",{parentName:"p"},"models predicates"),") permettent de changer le mod\xe8le d'un item dynamiquement."),(0,i.kt)("h2",{id:"enregistrer-litem-comme-ayant-un-mod\xe8le-variable"},"Enregistrer l'item comme ayant un mod\xe8le variable"),(0,i.kt)("p",null,"Le rendu des items se faisant c\xf4t\xe9 client, nous aurons besoin d'ex\xe9cuter le code suivant dans la fonction ",(0,i.kt)("strong",{parentName:"p"},"client")," de la classe principale (celle-ci doit avoir un param\xe8tre de type ",(0,i.kt)("strong",{parentName:"p"},"FMLClientSetupEvent"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ItemProperties.register(Items.TEST_SIMPLE_ITEM_ONE.get(), new ResourceLocation("modid", example_property"), (stack, level, livingEntity, id) -> {\n    return stack.getOrCreateTag().getBoolean("tag") ? 1.0f : 0.0f;\n});\n')),(0,i.kt)("p",null,"Ici dans cet exemple, l'item (premier param\xe8tre) qui comportera un mod\xe8le variable sera un item de test (mais il est possible de changer celui-ci par l'item de votre choix). En second, nous avons l'identifiant de la propri\xe9t\xe9 qui sera utilis\xe9 dans le fichier mod\xe8le de l'item. Le troisi\xe8me quant \xe0 lui permet de retourner une valeur flottante (g\xe9n\xe9ralement comprise entre 0 et 1) qui sera utilis\xe9 apr\xe8s dans le mod\xe8le de l'item (en ayant acc\xe8s \xe0 certaines variables comme l'item, le monde, l'entit\xe9 tenant l'item, etc...)."),(0,i.kt)("p",null,"Dans ce cas pr\xe9cis, notre propri\xe9t\xe9 se nomme ",(0,i.kt)("inlineCode",{parentName:"p"},"modid:example_property")," et sa valeur varie entre 0 et 1 selon si l'item en question poss\xe8de un tag ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," de valeur ",(0,i.kt)("strong",{parentName:"p"},"true")," ou non, si c'est le cas la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," aura pour valeur 1, sinon 0."),(0,i.kt)("h2",{id:"mod\xe8le"},"Mod\xe8le"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "minecraft:item/generated",\n  "textures": {\n    "layer0": "modid:item/example_item"\n  },\n  "overrides": [\n    {\n      "predicate": {\n        "modid:example_property": 1.0\n      },\n      "model": "modid:item/example_item_with_property"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Ici nous nous int\xe9resserons au champ ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," (les champs au-dessus sont \xe0 connaitre, car ils servent \xe0 d\xe9finir le mod\xe8le d'un item de base) qui dans notre cas contient un seul \xe9l\xe9ment (mais il peut y en avoir plusieurs). Celui-ci v\xe9rifie si la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"modid:example_property")," (que nous avons enregistr\xe9 tout \xe0 l\u2019heure) a pour valeur 1 (donc si l\u2019item que nous tenons poss\xe8de le tag ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," et si celui-ci \xe0 pour valeur ",(0,i.kt)("strong",{parentName:"p"},"true"),"), si c\u2019est le cas alors le mod\xe8le de l\u2019item deviendra ",(0,i.kt)("inlineCode",{parentName:"p"},"modid:item/example_item_with_property")," sinon son mod\xe8le restera ",(0,i.kt)("inlineCode",{parentName:"p"},"modid:item/example_item"),"."))}d.isMDXComponent=!0}}]);