"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5300],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,u=k["".concat(o,".").concat(s)]||k[s]||N[s]||l;return n?a.createElement(u,d(d({ref:e},m),{},{components:n})):a.createElement(u,d({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var p=2;p<l;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4545:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Ressources",description:"Quelles sont les diff\xe9rentes ressources de Minecraft ?",hide_table_of_contents:!0,tags:["bases"]},d=void 0,i={unversionedId:"bases/resources/index",id:"version-1.18.x/bases/resources/index",title:"Ressources",description:"Quelles sont les diff\xe9rentes ressources de Minecraft ?",source:"@site/versioned_docs/version-1.18.x/bases/resources/index.md",sourceDirName:"bases/resources",slug:"/bases/resources/",permalink:"/1.18.x/bases/resources/",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/bases/resources/index.md",tags:[{label:"bases",permalink:"/1.18.x/tags/bases"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",frontMatter:{title:"Ressources",description:"Quelles sont les diff\xe9rentes ressources de Minecraft ?",hide_table_of_contents:!0,tags:["bases"]},sidebar:"tutorialSidebar",previous:{title:"Mods.toml",permalink:"/1.18.x/bases/mods_toml"},next:{title:"Traductions",permalink:"/1.18.x/bases/resources/lang"}},o={},p=[{value:"Blockstates",id:"blockstates",level:2},{value:"Traductions",id:"traductions",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:2},{value:"Textures",id:"textures",level:2},{value:"Recettes",id:"recettes",level:2},{value:"Progr\xe8s",id:"progr\xe8s",level:2},{value:"Tables de butin",id:"tables-de-butin",level:2},{value:"Tags",id:"tags",level:2}],m={toc:p};function N(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tous les dossiers (et donc les ressources associ\xe9es) cit\xe9s ici doivent se trouver dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/main/resources/"),"."),(0,r.kt)("h2",{id:"blockstates"},"Blockstates"),(0,r.kt)("p",null,"Les ",(0,r.kt)("em",{parentName:"p"},"blockstates")," sont d\xe9finies par des fichiers JSON se trouvant dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/<modid>/blockstates"),"."),(0,r.kt)("h2",{id:"traductions"},(0,r.kt)("a",{parentName:"h2",href:"lang"},"Traductions")),(0,r.kt)("p",null,"Les traductions sont d\xe9finies dans des fichiers JSON dont le nom d\xe9pend du ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language"},(0,r.kt)("em",{parentName:"a"},"code de la langue"))," vis\xe9, se trouvant dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/<modid>/lang"),"."),(0,r.kt)("h2",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Les mod\xe8les sont d\xe9finis par des fichiers JSON.\nIls peuvent se trouver dans deux dossiers diff\xe9rents, si cela concerne les blocs, le dossier concern\xe9 sera ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/<modid>/models/block")," et si cela concerne les items, le dossier concern\xe9 sera ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/<modid>/models/item"),"."),(0,r.kt)("h2",{id:"textures"},"Textures"),(0,r.kt)("p",null,"Les textures sont des fichiers PNG se trouvant dans un sous dossier du dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/<modid>/textures"),"."),(0,r.kt)("h2",{id:"recettes"},(0,r.kt)("a",{parentName:"h2",href:"recipe"},"Recettes")),(0,r.kt)("p",null,"Les recettes sont d\xe9finies par des fichiers JSON se trouvant dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/<modid>/recipes"),"."),(0,r.kt)("h2",{id:"progr\xe8s"},"Progr\xe8s"),(0,r.kt)("p",null,"Les progr\xe8s sont d\xe9finis par des fichiers JSON se trouvant dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/<modid>/advancements"),"."),(0,r.kt)("h2",{id:"tables-de-butin"},"Tables de butin"),(0,r.kt)("p",null,"Les tables de butin sont d\xe9finies par des fichiers JSON se trouvant dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/<modid>/loot_tables")," (des sous dossiers sont attendus selon si cela concerne les blocs (",(0,r.kt)("inlineCode",{parentName:"p"},"blocks"),"), les coffres (",(0,r.kt)("inlineCode",{parentName:"p"},"chests"),") ou m\xeames les entit\xe9s (",(0,r.kt)("inlineCode",{parentName:"p"},"entities"),"))."),(0,r.kt)("h2",{id:"tags"},(0,r.kt)("a",{parentName:"h2",href:"tags"},"Tags")),(0,r.kt)("p",null,"Les ",(0,r.kt)("em",{parentName:"p"},"tags")," sont d\xe9finis par des fichiers JSON se trouvant dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/<modid>/tags")," (des sous dossiers sont attendus et leurs noms d\xe9pendra de la cl\xe9 du registre pour lequel le tag sera affect\xe9 (liste ci-dessous))."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Liste des registres avec leurs cl\xe9s"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Registre"),(0,r.kt)("th",{parentName:"tr",align:null},"Cl\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SOUND_EVENT_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sound_event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLUID_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fluid"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MOB_EFFECT_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mob_effect"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BLOCK_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ENCHANTMENT_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enchantment"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ENTITY_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entity_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ITEM_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"item"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POTION_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"potion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PARTICLE_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"particle_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BLOCK_ENTITY_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block_entity_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MOTIVE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"motive"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CUSTOM_STAT_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_stat"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CHUNK_STATUS_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chunk_status"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RULE_TEST_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rule_test"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POS_RULE_TEST_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pos_rule_test"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MENU_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"menu"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RECIPE_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recipe_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RECIPE_SERIALIZER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recipe_serializer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ATTRIBUTE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attribute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GAME_EVENT_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"game_event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POSITION_SOURCE_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"position_source_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STAT_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stat_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VILLAGER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"villager_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VILLAGER_PROFESSION_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"villager_profession"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POINT_OF_INTEREST_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"point_of_interest_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MEMORY_MODULE_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memory_module_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SENSOR_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sensor_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SCHEDULE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schedule"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ACTIVITY_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"activity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOOT_ENTRY_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loot_pool_entry_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOOT_FUNCTION_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loot_function_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOOT_ITEM_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loot_condition_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOOT_NUMBER_PROVIDER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loot_number_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOOT_NBT_PROVIDER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loot_nbt_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOOT_SCORE_PROVIDER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loot_score_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DIMENSION_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dimension_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DIMENSION_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dimension"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LEVEL_STEM_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dimension"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT_PROVIDER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT_PROVIDER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HEIGHT_PROVIDER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BLOCK_PREDICATE_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block_predicate_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOISE_GENERATOR_SETTINGS_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/noise_settings"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONFIGURED_CARVER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/configured_carver"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONFIGURED_FEATURE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/configured_feature"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PLACED_FEATURE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/placed_feature"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONFIGURED_STRUCTURE_FEATURE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/configured_structure_feature"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRUCTURE_SET_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/structure_set"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROCESSOR_LIST_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/processor_list"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TEMPLATE_POOL_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/template_pool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BIOME_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/biome"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOISE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/noise"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DENSITY_FUNCTION_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/density_function"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CARVER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/carver"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FEATURE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/feature"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRUCTURE_FEATURE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/structure_feature"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRUCTURE_PLACEMENT_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/structure_placement"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRUCTURE_PIECE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/structure_piece"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PLACEMENT_MODIFIER_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/placement_modifier_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BLOCK_STATE_PROVIDER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/block_state_provider_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOLIAGE_PLACER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/foliage_placer_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUNK_PLACER_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/trunk_placer_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TREE_DECORATOR_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/tree_decorator_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FEATURE_SIZE_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/feature_size_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BIOME_SOURCE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/biome_source"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CHUNK_GENERATOR_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/chunk_generator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONDITION_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/material_condition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RULE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/material_rule"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DENSITY_FUNCTION_TYPE_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/density_function_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRUCTURE_PROCESSOR_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/structure_processor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRUCTURE_POOL_ELEMENT_REGISTRY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worldgen/structure_pool_element")))))))}N.isMDXComponent=!0}}]);