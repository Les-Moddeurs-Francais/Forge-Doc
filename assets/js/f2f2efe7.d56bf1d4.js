"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[14],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4168:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"forge-116-362",title:"Forge 1.16.5 36.2",author:"Mysterious_Dev",author_title:"Admin de Les Moddeurs Francais",author_url:"https://github.com/Mysterious-Dev",author_image_url:"https://avatars.githubusercontent.com/u/40738104?v=4",tags:["forge","update","1.16.5"]},s=void 0,u={permalink:"/blog/forge-116-362",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/blog/2021-07-22-forge-116-362.md",source:"@site/blog/2021-07-22-forge-116-362.md",title:"Forge 1.16.5 36.2",description:"La version 1.16.5 36.2 de Forge est sortie et elle apporte quelques nouveaut\xe9s.",date:"2021-07-22T00:00:00.000Z",formattedDate:"July 22, 2021",tags:[{label:"forge",permalink:"/blog/tags/forge"},{label:"update",permalink:"/blog/tags/update"},{label:"1.16.5",permalink:"/blog/tags/1-16-5"}],truncated:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",imageURL:"https://avatars.githubusercontent.com/u/40738104?v=4"}],nextItem:{title:"Forge 1.17.1 37.0",permalink:"/blog/forge-117-370"}},c={authorsImageUrls:[void 0]},p=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",children:[]},{value:"Correctifs",id:"correctifs",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La version 1.16.5 36.2 de Forge est sortie et elle apporte quelques nouveaut\xe9s."),(0,i.kt)("p",null,"Lien de l'annonce de Forge : ",(0,i.kt)("a",{parentName:"p",href:"https://forums.minecraftforge.net/topic/102524-forge-362-minecraft-1165/"},"https://forums.minecraftforge.net/topic/102524-forge-362-minecraft-1165/")),(0,i.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ajout d'un loader custom pour les TextureAtlasSprite d\xe9stin\xe9 aux blocs qui n\xe9cessitent des textures dynamiques sans moteur de rendu dit ",(0,i.kt)("strong",{parentName:"li"},"fancy")),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un data generator pour le sounds.json"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AbstractFurnaceTileEntity")," utilise d\xe9sormais le r\xe9sultat de la fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"IRecipe.assemble")),(0,i.kt)("li",{parentName:"ul"},"L'entit\xe9 ",(0,i.kt)("em",{parentName:"li"},"SmallFireballEntity")," ne v\xe9rifie plus la r\xe8gle de jeu mobGriefing, au profit de l'event ",(0,i.kt)("em",{parentName:"li"},"MobGriefingEvent")),(0,i.kt)("li",{parentName:"ul"},"Les Piglins utilisent d\xe9sormais l'event MobGriefingEvent pour d\xe9cider quand ramasser des objets en or"),(0,i.kt)("li",{parentName:"ul"},"Les fours utilisent d\xe9sormais le IRecipeType de la recette actuelle lors du calcul du temps de combustion"),(0,i.kt)("li",{parentName:"ul"},"La vidange des FluidSources est d\xe9sormais respectueuse de la suppression du FluidStack."),(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("em",{parentName:"li"},"PlayerEntities")," ont maintenant un attribut de ",(0,i.kt)("em",{parentName:"li"},"knockback")),(0,i.kt)("li",{parentName:"ul"},"Le calcul du knockback dans ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerEntity#attack")," a \xe9t\xe9 mis \xe0 jour pour utiliser l'attribut ajout\xe9 ci-dessus"),(0,i.kt)("li",{parentName:"ul"},"Changement de commodit\xe9 pour le d\xe9nombrement des potions"),(0,i.kt)("li",{parentName:"ul"},"Les \xe9chelles customs rendent mainenant les trappes grimpables"),(0,i.kt)("li",{parentName:"ul"},"Ajout de quelques ",(0,i.kt)("em",{parentName:"li"},"accesstransformers")," dans ",(0,i.kt)("inlineCode",{parentName:"li"},"DimensionSettings")," pour faciliter son utilisation"),(0,i.kt)("li",{parentName:"ul"},"N'importe quel bloc peut maintenant s'annoncer sois m\xeame comme \xe9tant un endroit de spawn"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un nouvel event, ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectileImpactEvent.FishingBobber")),(0,i.kt)("li",{parentName:"ul"},"Suppression d'une annotation Nullable de ",(0,i.kt)("inlineCode",{parentName:"li"},"canCreatureSpawn")," qui provoquait des hypoth\xe8ses trompeuses"),(0,i.kt)("li",{parentName:"ul"},"Suppression d'un correctif d\xe9fectueux de la classe 'Entity'"),(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("em",{parentName:"li"},"mobs")," peuvent maintenant utiliser des armes \xe0 distance personnalis\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Les entit\xe9s d'\xe9clair peuvent d\xe9sormais infliger des d\xe9gats customs"),(0,i.kt)("li",{parentName:"ul"},'Ajout d\'une "connexion" factice \xe0 FakePlayers')),(0,i.kt)("h3",{id:"correctifs"},"Correctifs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Correction d'un bug qui rendait les mondes en LAN inaccessible apr\xe8s la suppression d'un mod"),(0,i.kt)("li",{parentName:"ul"},'Correction d\'un probl\xe8me o\xf9 parfois les t\xe2ches gradle runClient/runData/runServer \xe9chouaient avec le message "Impossible de localiser le fichier de classe LaunchTesting"'),(0,i.kt)("li",{parentName:"ul"},"Correction des environnements Forgedev afin qu'ils ne plantent plus avec des probl\xe8mes de chargement de classe lors de l'ex\xe9cution de la configuration \"forge forge test server\""),(0,i.kt)("li",{parentName:"ul"},"Synchronisation de ",(0,i.kt)("inlineCode",{parentName:"li"},"ResourcePackList#addPackFinder")," dans le but de supprimer une condition de concurrence"),(0,i.kt)("li",{parentName:"ul"},"Correction de certains probl\xe8mes de mise en miroir et de rotation du mod\xe8le de certains blocs vanilla (MC-227255, MC-134110)"),(0,i.kt)("li",{parentName:"ul"},"Le bouton URL d'un mod dans le menu ",(0,i.kt)("strong",{parentName:"li"},"Mods")," a \xe9t\xe9 r\xe9align\xe9 avec le texte"),(0,i.kt)("li",{parentName:"ul"},"PacketBuffer#readLongArray",(0,i.kt)("inlineCode",{parentName:"li"},", "),"#readSectionPos",(0,i.kt)("inlineCode",{parentName:"li"},"et"),"#readString` ne sont plus supprim\xe9s d'un c\xf4t\xe9"),(0,i.kt)("li",{parentName:"ul"},"Correction d'un blocage de chargement d'un chunk obscur' lors de l'appel de ",(0,i.kt)("inlineCode",{parentName:"li"},"getChunk")),(0,i.kt)("li",{parentName:"ul"},"Correction du ",(0,i.kt)("em",{parentName:"li"},"shift-scrolling")," sur Mac"),(0,i.kt)("li",{parentName:"ul"},"Correction des \xe9liminations de monstres n'\xe9tant pas attribu\xe9es correctement (MC-121048)")))}d.isMDXComponent=!0}}]);