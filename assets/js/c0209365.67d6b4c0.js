"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[2090],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,m=p["".concat(o,".").concat(g)]||p[g]||c[g]||l;return t?n.createElement(m,s(s({ref:r},d),{},{components:t})):n.createElement(m,s({ref:r},d))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=p;var a={};for(var o in r)hasOwnProperty.call(r,o)&&(a[o]=r[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<l;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4949:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=t(7462),i=(t(7294),t(3905));const l={sidebar_position:1,title:"Deferred Register",description:"Comment utiliser les Deferred Registers ?",tags:["enregistrement"]},s=void 0,a={unversionedId:"register/deferred",id:"version-1.18.x/register/deferred",title:"Deferred Register",description:"Comment utiliser les Deferred Registers ?",source:"@site/versioned_docs/version-1.18.x/register/deferred.md",sourceDirName:"register",slug:"/register/deferred",permalink:"/1.18.x/register/deferred",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/register/deferred.md",tags:[{label:"enregistrement",permalink:"/1.18.x/tags/enregistrement"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deferred Register",description:"Comment utiliser les Deferred Registers ?",tags:["enregistrement"]},sidebar:"tutorialSidebar",previous:{title:"Enregistrement",permalink:"/1.18.x/category/register"},next:{title:"Items",permalink:"/1.18.x/category/items"}},o={},u=[{value:"Cr\xe9er un Deferred Register",id:"cr\xe9er-un-deferred-register",level:2},{value:"Registres g\xe9r\xe9s par Forge",id:"registres-g\xe9r\xe9s-par-forge",level:3},{value:"Registres non g\xe9r\xe9s par Forge",id:"registres-non-g\xe9r\xe9s-par-forge",level:3},{value:"Indiquer au jeu que le DeferredRegister existe",id:"indiquer-au-jeu-que-le-deferredregister-existe",level:2}],d={toc:u};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister")," est une couche d'abstraction de l'\xe9v\xe9nement de registre utilis\xe9 pour enregistrer des \xe9l\xe9ments. Il maintient une correspondance entre les \"noms de registre\" et leurs ",(0,i.kt)("em",{parentName:"p"},"fournisseurs")," associ\xe9s et arrange ceux-ci lors de l'appel de l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent$Register"),"."),(0,i.kt)("h2",{id:"cr\xe9er-un-deferred-register"},"Cr\xe9er un Deferred Register"),(0,i.kt)("h3",{id:"registres-g\xe9r\xe9s-par-forge"},"Registres g\xe9r\xe9s par Forge"),(0,i.kt)("p",null,"Pour cr\xe9er un ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),", il nous faut tout d'abord ajouter une variable dans une classe o\xf9 nous enregistrerons tous les \xe9l\xe9ments concern\xe9s (comme les items, les blocs, etc...) comme celle-ci :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final DeferredRegister<Item> MON_REGISTRE = DeferredRegister.create(ForgeRegistries.ITEMS, "modid");\n')),(0,i.kt)("p",null,"Quelques explications :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La classe r\xe9f\xe9renc\xe9e entre les chevrons doit correspondre au type d\xe9finit par le premier argument"),(0,i.kt)("li",{parentName:"ul"},"Le premier argument permet de d\xe9finir le type d'\xe9l\xe9ment (liste ci-dessous) que nous allons pouvoir enregistrer (ici, cela sera pour les items)",(0,i.kt)("details",null,(0,i.kt)("summary",null,"Liste des types"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"BLOCKS"),(0,i.kt)("li",null,"FLUIDS"),(0,i.kt)("li",null,"ITEMS"),(0,i.kt)("li",null,"MOB_EFFECTS"),(0,i.kt)("li",null,"SOUND_EVENTS"),(0,i.kt)("li",null,"POTIONS"),(0,i.kt)("li",null,"ENCHANTMENTS"),(0,i.kt)("li",null,"ENTITIES"),(0,i.kt)("li",null,"BLOCK_ENTITIES"),(0,i.kt)("li",null,"PARTICLE_TYPES"),(0,i.kt)("li",null,"CONTAINERS"),(0,i.kt)("li",null,"PAINTING_TYPES"),(0,i.kt)("li",null,"RECIPE_SERIALIZERS"),(0,i.kt)("li",null,"ATTRIBUTES"),(0,i.kt)("li",null,"STAT_TYPES"),(0,i.kt)("li",null,"PROFESSIONS"),(0,i.kt)("li",null,"POI_TYPES"),(0,i.kt)("li",null,"MEMORY_MODULE_TYPES"),(0,i.kt)("li",null,"SENSOR_TYPES"),(0,i.kt)("li",null,"SCHEDULES"),(0,i.kt)("li",null,"ACTIVITIES"),(0,i.kt)("li",null,"WORLD_CARVERS"),(0,i.kt)("li",null,"FEATURES"),(0,i.kt)("li",null,"CHUNK_STATUS"),(0,i.kt)("li",null,"STRUCTURE_FEATURES"),(0,i.kt)("li",null,"BLOCK_STATE_PROVIDER_TYPES"),(0,i.kt)("li",null,"FOLIAGE_PLACER_TYPES"),(0,i.kt)("li",null,"TREE_DECORATOR_TYPES"),(0,i.kt)("li",null,"BIOMES"),(0,i.kt)("li",null,"DATA_SERIALIZERS"),(0,i.kt)("li",null,"LOOT_MODIFIER_SERIALIZERS"),(0,i.kt)("li",null,"WORLD_TYPES")))),(0,i.kt)("li",{parentName:"ul"},"Le deuxi\xe8me quant \xe0 lui est le modid sous lequel votre \xe9l\xe9ment sera enregistr\xe9 (il est pr\xe9f\xe9rable de mettre le modid de votre mod)")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Tous les noms de classes, de variables et de m\xe9thodes sont personnalisables comme vous le souhaitez, et cela, tout au long du tutoriel.")),(0,i.kt)("h3",{id:"registres-non-g\xe9r\xe9s-par-forge"},"Registres non g\xe9r\xe9s par Forge"),(0,i.kt)("p",null,"En raison de certaines particularit\xe9s du code de base, tous les registres ne sont pas g\xe9r\xe9s par Forge. Il peut s'agir de registres statiques, comme ",(0,i.kt)("inlineCode",{parentName:"p"},"RecipeType"),", qui peuvent \xeatre utilis\xe9s en toute s\xe9curit\xe9, ou dynamiques, comme ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredFeature")," et certains autres concernant la g\xe9n\xe9ration, qui sont g\xe9n\xe9ralement repr\xe9sent\xe9s en JSON. Ces objets ne doivent \xeatre enregistr\xe9s de cette mani\xe8re que si un autre objet de registre le n\xe9cessite. La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister#create")," poss\xe8de une surcharge (depuis la 1.18.2) qui permet aux moddeurs de sp\xe9cifier la cl\xe9 du registre pour lequel il est n\xe9cessaire de cr\xe9er un RegistryObject :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static final DeferredRegister<RecipeType<?>> MON_REGISTRE = DeferredRegister.create(Registry.RECIPE_TYPE_REGISTRY, "modid");\n\npublic static final RegistryObject<RecipeType<ExampleRecipe>> MON_TYPE_RECETTE = REGISTER.register("example_recipe_type", () -> new RecipeType<>() {});\n')),(0,i.kt)("h2",{id:"indiquer-au-jeu-que-le-deferredregister-existe"},"Indiquer au jeu que le DeferredRegister existe"),(0,i.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9e votre ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),", il ne reste plus qu'\xe0 faire comprendre au jeu que celui existe et pour cela il faudra disposer ce bout de code dans le constructeur de votre classe principale."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Classe.NOM_VARIABLE.register(FMLJavaModLoadingContext.get().getModEventBus());\n")))}c.isMDXComponent=!0}}]);