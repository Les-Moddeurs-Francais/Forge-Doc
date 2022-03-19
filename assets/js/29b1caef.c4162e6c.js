"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5862],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||r;return n?i.createElement(c,l(l({ref:t},m),{},{components:n})):i.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return d},default:function(){return k}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={slug:"forge-118-380",title:"Forge 1.18 38.0",authors:["mysterious_dev"],tags:["forge","update",1.18]},p=void 0,u={permalink:"/news/forge-118-380",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/news/2021-12-01-forge-118-380.md",source:"@site/news/2021-12-01-forge-118-380.md",title:"Forge 1.18 38.0",description:"Seulement quelques heures apr\xe8s la sortie de la version 1.18, Forge 1.18 38.0 est sortie et elle apporte quelques changements (peu voir aucun ajout).",date:"2021-12-01T00:00:00.000Z",formattedDate:"1 d\xe9cembre 2021",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"update",permalink:"/news/tags/update"},{label:"1.18",permalink:"/news/tags/1-18"}],truncated:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-118-380",title:"Forge 1.18 38.0",authors:["mysterious_dev"],tags:["forge","update","1.18"]},prevItem:{title:"Forge 1.18.2 40.0",permalink:"/news/forge-118-400"},nextItem:{title:"Forge 1.17.1 37.1",permalink:"/news/forge-117-371"}},m={authorsImageUrls:[void 0]},d=[{value:"Changements",id:"changements",level:2},{value:"Suppressions",id:"suppressions",level:2}],s={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Seulement quelques heures apr\xe8s la sortie de la version 1.18, Forge 1.18 38.0 est sortie et elle apporte quelques changements (peu voir aucun ajout)."),(0,r.kt)("p",null,"Lien de l'annonce de Forge : ",(0,r.kt)("a",{parentName:"p",href:"https://forums.minecraftforge.net/topic/106322-forge-380-minecraft-118/"},"https://forums.minecraftforge.net/topic/106322-forge-380-minecraft-118/")),(0,r.kt)("h2",{id:"changements"},"Changements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"99% du paquet fmllegacy. La plupart des classes ont simplement \xe9t\xe9 d\xe9plac\xe9es de x.y.fmllegacy.z vers x.y.z"),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"Gui")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Screen")," (",(0,r.kt)("inlineCode",{parentName:"li"},"GuiOpenEvent")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ScreenOpenEvent"),", par exemple)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GuiScreenEvent")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ScreenEvent"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GuiOverlayDebugForge")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeDebugScreenOverlay")),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"GameMode")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"GameType")," (",(0,r.kt)("inlineCode",{parentName:"li"},"ClientPlayerChangeGameModeEvent")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientPlayerChangedGameTypeEvent"),", par exemple)"),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"MatrixStack")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"PoseStack")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DrawSelectionEvent#matrix"),"-> ",(0,r.kt)("inlineCode",{parentName:"li"},"DrawSelectionEvent#poseStack"),", par exemple)"),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"KeyBinding")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"KeyMapping")," (",(0,r.kt)("inlineCode",{parentName:"li"},"ClickInputEvent#keyBinding")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ClickInputEvent#keyMapping"),", par exemple)"),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"World")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Level")),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"WorldType")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"WorldPreset")," (",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#getDefaultWorldType")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#getDefaultWorldPreset"),", par exemple"),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"NBT")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Tag")," (",(0,r.kt)("inlineCode",{parentName:"li"},"BlockSnapshot#getNbt")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockSnapshot#getTag"),", par exemple)"),(0,r.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,r.kt)("inlineCode",{parentName:"li"},"Container")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Menu")," (",(0,r.kt)("inlineCode",{parentName:"li"},"IForgeContainerType")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"IForgeMenuType"),", par exemple)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#sound")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#originalSound")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#result")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#sound")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SoundEvent#manager")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"SoundEvent#engine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SoundEvent#soundSourceEvent#source")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"SoundEvent#soundSourceEvent#canal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FOVUpdateEvent")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"FOVModifierEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EntityViewRenderEvent#FOVModiier")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityViewRenderEvent#FieldOfView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InputUpdateEvent")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"MovementInputUpdateEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InitScreenEvent#{...Widget...}")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"{...Listener...}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ForgeItemTagsProvider#func_240521_a_Colored")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"copyColored")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MobSpawnInfoBuilder")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"MobSpawnSettingBuilder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BasicTrade")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"BasicItemListing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ModelLoader")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeModelBakery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ForgeWorldTypeScreens")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeWorldPresetEditors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackList")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"MultItemValue"))),(0,r.kt)("h2",{id:"suppressions"},"Suppressions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toute l'API d'animation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IForgeTextureAtlasSprite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IForgeItem#showDurabiityBar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"IForgeItem#getDurabilityForDisplay")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"IForgeItem#getRGBDurabilityForDisplay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#refreshResources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ModelBuilder#gui3d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BlockInfo#updateShift"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockInfo#getShx"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockInfo#getShy")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockInfo#getShz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CapabilityInject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CapabilityManager#register")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConditionalAdvancement#processConditions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IForgeItem#isShield")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IForgeStructureFeature#getDefaultSpawnList")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"IForgeStructureFeature#getDefaultCreatureSpawnList")),(0,r.kt)("li",{parentName:"ul"},"Classe des constantes de Forge"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VanillaResourceType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#worldRenderPass")," (+ accesseur)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#preDraw"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#postDraw")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#getColorIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ScrollPanel#drawBackground")," (+ accesseur)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Screen#RenderToolTip")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"Screen#RenderComponentToolTip")," (+ accesseur)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResourceManager#getResourceType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LootPool#bonusRolls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ForgeConfig#selectiveResourceReload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PotionEvent#PotionAddedEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientHooks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ModFileResourcePack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResourcePackLoader#getResourcePackFor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResourcePackLoader#IPackInfoFinder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServerLifecycleHooks#buildPackFinder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IResourceType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReloadRequirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CommandSetDimension"))))}k.isMDXComponent=!0}}]);