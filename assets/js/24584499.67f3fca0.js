"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1784],{9910:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"forge-116-362","metadata":{"permalink":"/news/forge-116-362","editUrl":"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/news/2021-07-22-forge-116-362.md","source":"@site/news/2021-07-22-forge-116-362.md","title":"Forge 1.16.5 36.2","description":"La version 1.16.5 36.2 de Forge est sortie et elle apporte quelques nouveaut\xe9s.","date":"2021-07-22T00:00:00.000Z","formattedDate":"22 juillet 2021","tags":[{"label":"forge","permalink":"/news/tags/forge"},{"label":"update","permalink":"/news/tags/update"},{"label":"1.16.5","permalink":"/news/tags/1-16-5"}],"truncated":true,"authors":[{"name":"Mysterious_Dev","title":"Admin de Les Moddeurs Francais","url":"https://github.com/Mysterious-Dev","imageURL":"https://avatars.githubusercontent.com/u/40738104?v=4"}],"nextItem":{"title":"Forge 1.17.1 37.0","permalink":"/news/forge-117-370"}},"content":"La version 1.16.5 36.2 de Forge est sortie et elle apporte quelques nouveaut\xe9s.\\n\\n\x3c!--truncate--\x3e\\n\\nLien de l\'annonce de Forge : https://forums.minecraftforge.net/topic/102524-forge-362-minecraft-1165/\\n\\n### Nouveaut\xe9s\\n- Ajout d\'un loader custom pour les TextureAtlasSprite d\xe9stin\xe9 aux blocs qui n\xe9cessitent des textures dynamiques sans moteur de rendu dit **fancy**\\n- Ajout d\'un data generator pour le sounds.json\\n- `AbstractFurnaceTileEntity` utilise d\xe9sormais le r\xe9sultat de la fonction `IRecipe.assemble`\\n- L\'entit\xe9 *SmallFireballEntity* ne v\xe9rifie plus la r\xe8gle de jeu mobGriefing, au profit de l\'event *MobGriefingEvent*\\n- Les Piglins utilisent d\xe9sormais l\'event MobGriefingEvent pour d\xe9cider quand ramasser des objets en or\\n- Les fours utilisent d\xe9sormais le IRecipeType de la recette actuelle lors du calcul du temps de combustion\\n- La vidange des FluidSources est d\xe9sormais respectueuse de la suppression du FluidStack.\\n- Les *PlayerEntities* ont maintenant un attribut de *knockback*\\n- Le calcul du knockback dans `PlayerEntity#attack` a \xe9t\xe9 mis \xe0 jour pour utiliser l\'attribut ajout\xe9 ci-dessus\\n- Changement de commodit\xe9 pour le d\xe9nombrement des potions\\n- Les \xe9chelles customs rendent mainenant les trappes grimpables\\n- Ajout de quelques *accesstransformers* dans `DimensionSettings` pour faciliter son utilisation\\n- N\'importe quel bloc peut maintenant s\'annoncer sois m\xeame comme \xe9tant un endroit de spawn\\n- Ajout d\'un nouvel event, `ProjectileImpactEvent.FishingBobber`\\n- Suppression d\'une annotation Nullable de `canCreatureSpawn` qui provoquait des hypoth\xe8ses trompeuses\\n- Suppression d\'un correctif d\xe9fectueux de la classe \'Entity\'\\n- Les *mobs* peuvent maintenant utiliser des armes \xe0 distance personnalis\xe9es\\n- Les entit\xe9s d\'\xe9clair peuvent d\xe9sormais infliger des d\xe9gats customs\\n- Ajout d\'une \\"connexion\\" factice \xe0 FakePlayers\\n\\n### Correctifs\\n- Correction d\'un bug qui rendait les mondes en LAN inaccessible apr\xe8s la suppression d\'un mod\\n- Correction d\'un probl\xe8me o\xf9 parfois les t\xe2ches gradle runClient/runData/runServer \xe9chouaient avec le message \\"Impossible de localiser le fichier de classe LaunchTesting\\"\\n- Correction des environnements Forgedev afin qu\'ils ne plantent plus avec des probl\xe8mes de chargement de classe lors de l\'ex\xe9cution de la configuration \\"forge forge test server\\"\\n- Synchronisation de `ResourcePackList#addPackFinder` dans le but de supprimer une condition de concurrence\\n- Correction de certains probl\xe8mes de mise en miroir et de rotation du mod\xe8le de certains blocs vanilla (MC-227255, MC-134110)\\n- Le bouton URL d\'un mod dans le menu **Mods** a \xe9t\xe9 r\xe9align\xe9 avec le texte\\n- PacketBuffer#readLongArray`, `#readSectionPos` et `#readString` ne sont plus supprim\xe9s d\'un c\xf4t\xe9\\n- Correction d\'un blocage de chargement d\'un chunk obscur\' lors de l\'appel de `getChunk`\\n- Correction du *shift-scrolling* sur Mac\\n- Correction des \xe9liminations de monstres n\'\xe9tant pas attribu\xe9es correctement (MC-121048)"},{"id":"forge-117-370","metadata":{"permalink":"/news/forge-117-370","editUrl":"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/news/2021-07-22-forge-117-370.md","source":"@site/news/2021-07-22-forge-117-370.md","title":"Forge 1.17.1 37.0","description":"La version 1.17.1 37.0 de Forge est sortie apr\xe8s des semaines d\'attente, et celle-ci change beaucoup de choses.","date":"2021-07-22T00:00:00.000Z","formattedDate":"22 juillet 2021","tags":[{"label":"forge","permalink":"/news/tags/forge"},{"label":"update","permalink":"/news/tags/update"},{"label":"1.17.1","permalink":"/news/tags/1-17-1"}],"truncated":true,"authors":[{"name":"Mysterious_Dev","title":"Admin de Les Moddeurs Francais","url":"https://github.com/Mysterious-Dev","imageURL":"https://avatars.githubusercontent.com/u/40738104?v=4"}],"prevItem":{"title":"Forge 1.16.5 36.2","permalink":"/news/forge-116-362"}},"content":"La version 1.17.1 37.0 de Forge est sortie apr\xe8s des semaines d\'attente, et celle-ci change beaucoup de choses.\\n\\n\x3c!--truncate--\x3e\\n\\nLien de l\'annonce de Forge : https://forums.minecraftforge.net/topic/102544-forge-370-minecraft-1171/\\n\\n### Enfin !\\nMinecraft Forge 1.17.1 est d\xe9sormais publique !\\nAvant toutes choses, quelques points sont \xe0 aborder suite aux nombreux changements.\\n\\n### Java 16 et les Modules\\n\\nPresque toutes les fonctionnalit\xe9s de Java 16 sont ouvertes aux mods.\\nCependant, les modules Java sont un peu p\xe9nibles \xe0 utiliser.\\n\\nSi vous utilisez le syst\xe8me module-info dans votre mod, assurez-vous de bien comprendre ce que c\u2019est et comment il est expos\xe9 aux autres modules (mods) au moment de la compilation.\\nActuellement, module-infos sera ignor\xe9 lors de l\u2019ex\xe9cution mais PAS lors de la compilation.\\nNotre conseil permanent est de ne pas d\xe9velopper votre mod en tant que module.\\n\\n### Mixins\\nLes Mixins ont \xe9t\xe9 d\xe9sactiv\xe9s pour le moment suite au changement de version de Java (Minecraft \xe9tant pass\xe9 de Java 8 \xe0 Java 16). Une fois que la librairie sera mise \xe0 jour, ils seront r\xe9introduits.\\n\\n### Forge Gradle\\nForgeGradle 5 est d\xe9sormais disponible pour le d\xe9veloppement de mod en version 1.16 et 1.17 (pour faciliter le support de Java 16, faciliter la t\xe2che aux moddeurs utilisant les 2 versions, etc...).\\n\\n### Installateurs et serveurs\\nEn raison du fonctionnement du syst\xe8me de modules en Java, le serveur se lance d\xe9sormais d\u2019une mani\xe8re tr\xe8s diff\xe9rente.\\nIl n\u2019est plus possible de fournir un seul fichier jar ex\xe9cutable comme c\u2019\xe9tait le cas auparavant, une solution de contournement est donc utilis\xe9 :\\n\\nLorsque vous installez un serveur, vous verrez deux scripts d\u2019ex\xe9cution (un pour Linux et Mac, un pour Windows) et des fichiers d\u2019arguments.\\nLes arguments sont ajout\xe9s dans l\u2019ordre :\\n\\n`java @user_jvm_args.txt @forge_args.txt <user game args>`\\n\\nComme vous pouvez le constater par son nom, seul le fichier user_jvm_args.txt est destin\xe9 \xe0 \xeatre modifi\xe9 par l\u2019utilisateur final.\\n\\nIl y a un exemple \xe9crit fourni par CurlieWurlie dans le fichier user_jvm_args qui explique les arguments les plus couramment utilis\xe9s (-Xmx, -Xms).\\nLes tutoriels pour cr\xe9er un serveur ne fonctionneront plus sur Forge >=37.0. Vous devrez utiliser l\u2019un des fichiers de commandes (.bash / .sh) fournis, sinon le jeu ne pourra pas se charger."}]}')}}]);