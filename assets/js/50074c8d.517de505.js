"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:4,title:"Progr\xe8s",description:"Comment utiliser les data generators pour les progr\xe8s ?",tags:["data generators"]},o=void 0,s={unversionedId:"data/advancement",id:"version-1.18/data/advancement",title:"Progr\xe8s",description:"Comment utiliser les data generators pour les progr\xe8s ?",source:"@site/versioned_docs/version-1.18/data/advancement.md",sourceDirName:"data",slug:"/data/advancement",permalink:"/1.18/data/advancement",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18/data/advancement.md",tags:[{label:"data generators",permalink:"/1.18/tags/data-generators"}],version:"1.18",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Progr\xe8s",description:"Comment utiliser les data generators pour les progr\xe8s ?",tags:["data generators"]},sidebar:"tutorialSidebar",previous:{title:"Fichiers de traductions",permalink:"/1.18/data/lang"},next:{title:"Mise \xe0 jour",permalink:"/1.18/category/update"}},l={},c=[{value:"Advancement Provider",id:"advancement-provider",level:2},{value:"Ajout du succ\xe8s",id:"ajout-du-succ\xe8s",level:3},{value:"GatherDataEvent",id:"gatherdataevent",level:2}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans cette section, nous allons voir comment g\xe9n\xe9rer nos progr\xe8s \xe0 l'aide d'un g\xe9n\xe9rateur."),(0,a.kt)("h2",{id:"advancement-provider"},"Advancement Provider"),(0,a.kt)("p",null,"Pour commencer, nous avons besoin d'une classe qui h\xe9ritera de la classe ",(0,a.kt)("inlineCode",{parentName:"p"},"AdvancementProvider"),".\nOn rajoutera le constructeur de la classe dans lequel nous allons modifier quelques trucs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class AdvancementsGenerator extends AdvancementProvider {\n\n    public AdvancementsGenerator(DataGenerator generatorIn, ExistingFileHelper fileHelper){\n        super(generatorIn, fileHelper);\n    }\n}\n")),(0,a.kt)("p",null,"Ici le premier param\xe8tre \xe0 renseigner est le ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGenerator")," pass\xe9 en param\xe8tre du constructeur.\nEn deuxi\xe8me, on aura besoin du ",(0,a.kt)("strong",{parentName:"p"},"ExistingFileHelper")," (celui-ci servant pour la v\xe9rification des fichiers d\xe9j\xe0 g\xe9n\xe9r\xe9s)."),(0,a.kt)("p",null,"Il sera ensuite n\xe9cessaire d'utiliser la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"registerAdvancements")," h\xe9rit\xe9e de la classe m\xe8re pour enregistrer nos succ\xe8s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void registerAdvancements(Consumer<Advancement> consumer, ExistingFileHelper fileHelper) \n{\n\n}\n")),(0,a.kt)("h3",{id:"ajout-du-succ\xe8s"},"Ajout du succ\xe8s"),(0,a.kt)("p",null,"Ici pour ajouter un succ\xe8s il nous suffira d'\xe9crire le code suivant : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Advancement.Builder.advancement().display(Items.DIAMOND_BLOCK,\n                        new TranslatableComponent(Items.DIAMOND_BLOCK.getDescriptionId()),\n                        new TextComponent("You obtained a DiamondBlock"),\n                        new ResourceLocation("textures/block/diamond_block.png"),\n                        FrameType.CHALLENGE,\n                        true,\n                        true,\n                        false)\n                .parent(new ResourceLocation("story/mine_stone"))\n                .addCriterion("get_diamond_block", InventoryChangeTrigger.TriggerInstance.hasItems(Items.DIAMOND_BLOCK))\n                .save(consumer, new ResourceLocation("modid", "mon_progres"), fileHelper);\n')),(0,a.kt)("p",null,"Pour expliquer :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'display(Items.DIAMOND_BLOCK, new TranslatableComponent(Items.DIAMOND_BLOCK.getDescriptionId()), new TextComponent("You obtained a DiamondBlock"), new ResourceLocation("textures/block/diamond_block.png"), FrameType.CHALLENGE, true, true, false)\n')),(0,a.kt)("p",null,"Ici on d\xe9finit l'affichage du succ\xe8s avec ces param\xe8tres respectifs. En premier lieu nous avons l'item qui servira d'ic\xf4ne, en deuxi\xe8me le nom du succ\xe8s (ici d\xe9finis par une cl\xe9 de traduction pour que celui-ci d\xe9pende de la langue choisie), en troisi\xe8me la description du succ\xe8s (ici un texte simple non d\xe9pendant de la langue choisie), en quatri\xe8me la texture de fond si jamais votre succ\xe8s n'a pas de ",(0,a.kt)("em",{parentName:"p"},"parent")," (peut \xeatre d\xe9finie sur null si ce n'est pas le cas), en cinqui\xe8me nous avons l'indication de si le succ\xe8s une fois obtenu doit afficher une notification (aussi appel\xe9e ",(0,a.kt)("em",{parentName:"p"},"toast"),") en haut \xe0 droite de l'\xe9cran du joueur, en sixi\xe8me encore une indication mais cette fois-ci sp\xe9cifiant si une annonce doit \xeatre faite dans le chat \xe0 l'obtention du succ\xe8s et enfin en septi\xe8me nous avons une indication de si le succ\xe8s doit \xeatre cach\xe9 avant que celui d\xe9fini comme ",(0,a.kt)("em",{parentName:"p"},"parent")," soit obtenu."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'parent(new ResourceLocation("story/mine_stone"))\n')),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"parent")," permet de d\xe9finir le ",(0,a.kt)("em",{parentName:"p"},"parent")," du succ\xe8s (arborescence des succ\xe8s).\nIci le premier param\xe8tre est l'identifiant du succ\xe8s ",(0,a.kt)("em",{parentName:"p"},"parent")," (ici le succ\xe8s ",(0,a.kt)("inlineCode",{parentName:"p"},"mine_stone"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'addCriterion("get_diamond_block", InventoryChangeTrigger.TriggerInstance.hasItems(Items.DIAMOND_BLOCK))\n')),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"addCriterion")," (qui est facultative selon si vous voulez que votre progr\xe8s cr\xe9er un nouvel onglet ou non dans le menu d\xe9di\xe9) permet quant \xe0 elle, d'ajouter un crit\xe8re d'obtention au succ\xe8s (plusieurs crit\xe8res peuvent \xeatre d\xe9finis). Ici le crit\xe8re est d'obtenir un bloc de diamant, mais il en existe plein d'autres type (la liste compl\xe8te est disponible dans le package ",(0,a.kt)("inlineCode",{parentName:"p"},"net.minecraft.advancements.critereon"),").\nIci le premier param\xe8tre correspond au nom du crit\xe8re et le second \xe0 l'instance du crit\xe8re param\xe9tr\xe9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'save(consumer, new ResourceLocation("modid", "mon_progres"), fileHelper)\n')),(0,a.kt)("p",null,"Enfin, la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," qui sert, comme son nom l'indique, \xe0 sauvegarder notre progr\xe8s. En\npremier param\xe8tre on renseigne ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer")," qui est le param\xe8tre de notre fonction\n",(0,a.kt)("inlineCode",{parentName:"p"},"registerAdvancements"),". En second param\xe8tre on doit renseigner l'identifiant de notre progr\xe8s (si celui-ci contient des slashs, le progr\xe8s sera plac\xe9 dans les dossiers portant les noms pr\xe9c\xe9dents les slashs (par exemple le succ\xe8s d'identifiant ",(0,a.kt)("inlineCode",{parentName:"p"},"test/test_advancement")," aura pour identifiant ",(0,a.kt)("inlineCode",{parentName:"p"},"test_advancement")," et sera contenu dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," lui-m\xeame contenu dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"advancements")," de vos ressources)). Et enfin en troisi\xe8me argument nous avons le fileHelper qui est le deuxi\xe8me param\xe8tre de notre fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"registerAdvancements"),"."),(0,a.kt)("h2",{id:"gatherdataevent"},"GatherDataEvent"),(0,a.kt)("p",null,"Dans votre fonction avec en param\xe8tre l'event ",(0,a.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," il nous\nfaudra ajouter notre 'provider'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void dataGen(final GatherDataEvent e)\n{\n    DataGenerator generator = e.getGenerator();\n\n    if(e.includeClient())\n    {\n\n    }\n\n    if(e.includeServer())\n    {\n        generator.addProvider(new AdvancementsGenerator(generator, event.getExistingFileHelper()));\n    }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Remarquez le ",(0,a.kt)("inlineCode",{parentName:"p"},"e.includeServer()")," qui permet de r\xe9partir les diff\xe9rentes\nressources selon le c\xf4t\xe9 qui les utilise. En l'occurrence, les progr\xe8s\nne sont utilis\xe9s que par le serveur, donc pas besoin de le g\xe9n\xe9rer cot\xe9 client.")))}u.isMDXComponent=!0}}]);