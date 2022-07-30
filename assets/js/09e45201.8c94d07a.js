"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[4309],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8343:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"forge-119-411",title:"Forge 1.19 41.1",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour",1.19]},s=void 0,u={permalink:"/news/forge-119-411",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2022-07-27-forge-119-411.md",source:"@site/news/2022-07-27-forge-119-411.md",title:"Forge 1.19 41.1",description:"Pour la sortie de Minecraft 1.19.1, la premi\xe8re version stable de Forge 1.19 a \xe9t\xe9 publi\xe9e.",date:"2022-07-27T00:00:00.000Z",formattedDate:"27 juillet 2022",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.19",permalink:"/news/tags/1-19"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-119-411",title:"Forge 1.19 41.1",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19"]},prevItem:{title:"Forge 1.19.1 42.0",permalink:"/news/forge-119-420"},nextItem:{title:"Forge 1.19 41.0",permalink:"/news/forge-119-410"}},d={authorsImageUrls:[void 0]},p=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Changements",id:"changements",level:3},{value:"Corrections",id:"corrections",level:3}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pour la sortie de Minecraft 1.19.1, la premi\xe8re version stable de Forge 1.19 a \xe9t\xe9 publi\xe9e."),(0,i.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nouvelle option ",(0,i.kt)("inlineCode",{parentName:"li"},"displayTest")," dans mods.toml qui contr\xf4le l'affichage du mod dans l'\xe9cran de connexion au serveur"),(0,i.kt)("li",{parentName:"ul"},'Nouveau syst\xe8me de "fonctionnalit\xe9s" permettant aux mods de demander que certaines fonctionnalit\xe9s soient disponibles dans le syst\xe8me de chargement. Par exemple, ',(0,i.kt)("inlineCode",{parentName:"li"},"java_version")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"glsl_version")),(0,i.kt)("li",{parentName:"ul"},"Nouvelle r\xe9vision de l'API des fluides permettant une meilleure physique pour les fluides personnalis\xe9s"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un syst\xe8me de modificateurs de biomes"),(0,i.kt)("li",{parentName:"ul"},"Nouveau syst\xe8me de gestion des d\xe9pendances ",(0,i.kt)("inlineCode",{parentName:"li"},"JarInJar")),(0,i.kt)("li",{parentName:"ul"},"Nouvelle ",(0,i.kt)("inlineCode",{parentName:"li"},"ToolAction")," pour l'utilisation des cannes \xe0 p\xeache."),(0,i.kt)("li",{parentName:"ul"},"Ajout de la ",(0,i.kt)("inlineCode",{parentName:"li"},"capabilities")," ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemHandler")," aux bateaux de stockage"),(0,i.kt)("li",{parentName:"ul"},"Mise en place d'un support complet pour l'IPv6"),(0,i.kt)("li",{parentName:"ul"},"Impl\xe9mentation de la mise en cache pour les packs de ressources"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un ",(0,i.kt)("em",{parentName:"li"},"hook")," permettant aux enchantements et aux potions de contr\xf4ler leur onglet cr\xe9atif"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un ",(0,i.kt)("em",{parentName:"li"},"hook")," permettant aux blocs de mieux contr\xf4ler leur apparence sur les cartes"),(0,i.kt)("li",{parentName:"ul"},"Ajout de l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"li"},"RenderLevelStageEvent")," rempla\xe7ant ",(0,i.kt)("inlineCode",{parentName:"li"},"RenderLevelLastEvent")),(0,i.kt)("li",{parentName:"ul"},"Ajout d'une option de configuration pour d\xe9sactiver les optimisations c\xf4t\xe9 client du ",(0,i.kt)("inlineCode",{parentName:"li"},"DFU"),", ce qui devrait acc\xe9l\xe9rer le processus de chargement du client"),(0,i.kt)("li",{parentName:"ul"},"Ajout de l'en-t\xeate User-Agent aux requ\xeates faites par le v\xe9rificateur de mise \xe0 jour"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'une API pour l'en-t\xeate et le pied de page des listes d'onglets"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un ",(0,i.kt)("em",{parentName:"li"},"hook")," permettant la modification de la ",(0,i.kt)("em",{parentName:"li"},"lightmap")," via les effets sp\xe9ciaux des dimensions"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un ",(0,i.kt)("em",{parentName:"li"},"hook"),' permettant de rendre \xe9missives les faces d\'un mod\xe8le "elements"')),(0,i.kt)("h3",{id:"changements"},"Changements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IForgeRegistryEntry")," est d\xe9sormais supprim\xe9, en faveur des ",(0,i.kt)("inlineCode",{parentName:"li"},"Delegates")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"Holders")),(0,i.kt)("li",{parentName:"ul"},"Les \xe9v\xe9nements de registre seront d\xe9sormais d\xe9clench\xe9s dans l'ordre o\xf9 le jeu de base remplit ses propres registres"),(0,i.kt)("li",{parentName:"ul"},"Modification de ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfigValue#get()")," pour lever une exception si elle est appel\xe9e avant le chargement de la configuration"),(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfigValue"),"'s impl\xe9mentent d\xe9sormais un ",(0,i.kt)("inlineCode",{parentName:"li"},"Supplier")),(0,i.kt)("li",{parentName:"ul"},"Le traitement personnalis\xe9 des paquets a \xe9t\xe9 transf\xe9r\xe9 au thread du r\xe9seau afin de permettre aux moddeurs de mieux contr\xf4ler les activit\xe9s hors fil d'ex\xe9cution.")),(0,i.kt)("h3",{id:"corrections"},"Corrections"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Correction de diverses m\xe9thodes d'\xe9v\xe9nement manquant d'annotations ",(0,i.kt)("inlineCode",{parentName:"li"},"Nullable")," appropri\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Correction de ",(0,i.kt)("inlineCode",{parentName:"li"},"SlotItemHandler")," n'utilisant pas ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemHandler")," quand il est initialis\xe9"),(0,i.kt)("li",{parentName:"ul"},"Correction des arguments incorrects pass\xe9s \xe0 ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayLevelSoundEvent.AtEntity")),(0,i.kt)("li",{parentName:"ul"},"Correction du pipeline d'\xe9clairage qui ignore les coordonn\xe9es de la superposition provenant du moteur de rendu de blocs"),(0,i.kt)("li",{parentName:"ul"},"Correction de l'\xe9cran de confirmation exp\xe9rimental qui s'affiche dans certains cas o\xf9 il ne devrait pas"),(0,i.kt)("li",{parentName:"ul"},"Correction des donn\xe9es worldgen des mods qui n'\xe9taient pas charg\xe9es lors de la cr\xe9ation de nouveaux mondes solo"),(0,i.kt)("li",{parentName:"ul"},"La distance d'atteinte / la port\xe9e d'attaque \xe9tait fix\xe9e \xe0 6.0"),(0,i.kt)("li",{parentName:"ul"},"Correction de ",(0,i.kt)("inlineCode",{parentName:"li"},"EnumArgument")," qui utilise ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()")," au lieu de ",(0,i.kt)("inlineCode",{parentName:"li"},"name()")," pour les suggestions, ce qui fait que certains enums sugg\xe8rent des valeurs invalides"),(0,i.kt)("li",{parentName:"ul"},"Correction de certaines biblioth\xe8ques natives qui ne se chargeaient pas correctement, ce qui devrait r\xe9soudre les probl\xe8mes du Mac M1"),(0,i.kt)("li",{parentName:"ul"},"Correction d'un probl\xe8me de chargement des param\xe8tres du p\xe9riph\xe9rique audio lors du d\xe9marrage initial"),(0,i.kt)("li",{parentName:"ul"},"Les blocs de structure ne faisaient pas pivoter les entit\xe9s correctement lors du chargement (",(0,i.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MC-105317"},"MC-105317"),")"),(0,i.kt)("li",{parentName:"ul"},"Correction de ",(0,i.kt)("inlineCode",{parentName:"li"},"ITransformationServices")," ne se chargeant pas depuis le classpath pendant le temps de d\xe9veloppement"),(0,i.kt)("li",{parentName:"ul"},"Correction de certains objets personnalis\xe9s qui rendaient la barre de d\xe9g\xe2ts deux fois dans les interfaces des villageois"),(0,i.kt)("li",{parentName:"ul"},"Correction des ",(0,i.kt)("em",{parentName:"li"},"data generators")," li\xe9s aux portes"),(0,i.kt)("li",{parentName:"ul"},"Correction des bo\xeetes de shulker qui permettaient l'entr\xe9e d'objets, qui retournent false pour ",(0,i.kt)("inlineCode",{parentName:"li"},"Item#canFitInsideContainerItems")),(0,i.kt)("li",{parentName:"ul"},"Correction de ",(0,i.kt)("inlineCode",{parentName:"li"},"BufferBuilder.putBulkData(ByteBuffer)")," ne fixant pas les positions correctement"),(0,i.kt)("li",{parentName:"ul"},"Correction des blocs cassant les IA des entit\xe9s qui ne fonctionnaient pas correctement lorsque le chunk 0,0 \xe9tait d\xe9charg\xe9"),(0,i.kt)("li",{parentName:"ul"},"Correction du fait que ",(0,i.kt)("inlineCode",{parentName:"li"},"renderBreakingTexture")," n'utilisait pas les donn\xe9es du mod\xe8le correspondant"),(0,i.kt)("li",{parentName:"ul"},"Correction des modificateurs de butin global qui n'utilisaient pas le codec de r\xe9partition"),(0,i.kt)("li",{parentName:"ul"},"La canne \xe0 sucre ne d\xe9clenchait pas l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"li"},"CropGrowEvent.Post")),(0,i.kt)("li",{parentName:"ul"},"Correction des arbal\xe8tes qui ne d\xe9clenchaient pas l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrowLooseEvent")),(0,i.kt)("li",{parentName:"ul"},"Correction de la possibilit\xe9 pour les blocs modd\xe9s de ne pas se coller aux blocs collants de base"),(0,i.kt)("li",{parentName:"ul"},"Correction des noms de canaux invalides envoy\xe9s par le serveur qui provoquaient une erreur dans le thread r\xe9seau")))}c.isMDXComponent=!0}}]);