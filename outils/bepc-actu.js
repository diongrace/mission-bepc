  // =========================================================
  // Grands thèmes d'actualité 2026 (faits vérifiés, septembre 2026)
  // quiz : [question, bonne réponse, faux, faux, faux, explication]
  // =========================================================
  const THEMES = [
    {
      id: "plastique", titre: "Pollution plastique et déchets", lettre: "♻", couleur: "#1A8F5F",
      matieres: "Français · EDHC · SVT · Anglais",
      chiffres: [["400 000 t", "de déchets plastiques par an en Côte d'Ivoire"], ["≈ 50 %", "finissent dans la nature"], ["3 à 20 %", "seulement sont recyclés"]],
      faits: [
        "En 2026, le ministre de l'Environnement et de la Transition écologique, <b>Abou Bamba</b>, a de nouveau alerté sur les dangers de la pollution plastique.",
        "Le <b>décret de 2013</b> interdit la production, le transport et l'utilisation des <b>sachets plastiques à usage unique</b>. Le gouvernement annonce qu'il sera fermement appliqué.",
        "La <b>plus grande usine de recyclage</b> de déchets du pays est annoncée dans la région du <b>Gbêkê</b> (Bouaké).",
        "Les déchets plastiques bouchent les caniveaux : c'est l'une des causes des <b>inondations</b> à Abidjan pendant la saison des pluies."
      ],
      vocab: [["un déchet", "waste"], ["recycler", "to recycle"], ["un sachet plastique", "a plastic bag"], ["polluer", "to pollute"], ["un caniveau", "a gutter / drain"], ["protéger l'environnement", "to protect the environment"]],
      arguments: [
        ["Causes", ["Usage massif des sachets et bouteilles à usage unique", "Manque de poubelles et de ramassage dans certains quartiers", "Incivisme : on jette par terre ou dans les caniveaux", "Faible recyclage"]],
        ["Conséquences", ["Caniveaux bouchés, donc inondations", "Eau stagnante, donc moustiques et paludisme", "Sols et animaux pollués (le bétail avale des sachets)", "Villes sales, mauvaise image pour le tourisme"]],
        ["Solutions", ["Appliquer l'interdiction des sachets", "Trier et recycler, créer des emplois dans le recyclage", "Utiliser des sacs réutilisables et des gourdes", "Sensibiliser dans les écoles et les quartiers"]]
      ],
      redaction: { sujet: "Dans ton quartier, les déchets plastiques envahissent les rues et les caniveaux. Dans un développement argumenté, montre les dangers de cette pollution et propose des solutions.",
        plan: ["Introduction : situation (400 000 tonnes par an, la moitié dans la nature) et annonce du plan", "I. Les dangers : inondations, maladies (paludisme), pollution des sols et des animaux", "II. Les solutions : respecter la loi sur les sachets, trier et recycler, changer nos habitudes", "Conclusion : chacun est responsable ; ouverture sur l'usine de recyclage du Gbêkê"] },
      oral: { sujet: "EDHC — Selon toi, la propreté de la ville est-elle l'affaire de l'État seulement ?",
        reponse: "Je pense que la propreté de la ville n'est pas seulement l'affaire de l'État. Bien sûr, l'État et les mairies doivent installer des poubelles, ramasser les ordures et faire respecter la loi qui interdit les sachets plastiques depuis 2013. Mais chaque citoyen a aussi un devoir. Quand je jette un sachet dans le caniveau, je participe aux inondations et au paludisme dans mon quartier. En Côte d'Ivoire, on produit environ 400 000 tonnes de déchets plastiques par an, et la moitié finit dans la nature. Donc, pour moi, la propreté est une responsabilité partagée : l'État organise, et le citoyen respecte." },
      anglais: { question: "What can students do to reduce plastic pollution?",
        reponse: "Students can do a lot to reduce plastic pollution. First, we can use a water bottle instead of buying plastic sachets of water. Second, we can put our waste in the dustbin and never in the gutters. Third, we can organise clean-up days at school. In Côte d'Ivoire, about half of plastic waste ends up in nature, so everybody must act." },
      quiz: [
        ["Combien de tonnes de déchets plastiques la Côte d'Ivoire produit-elle environ chaque année ?", "400 000 tonnes", "4 000 tonnes", "40 millions de tonnes", "4 000 000 000 tonnes", "Environ 400 000 tonnes par an, dont près de la moitié finit dans la nature."],
        ["Depuis quelle année un décret interdit-il les sachets plastiques à usage unique ?", "2013", "2000", "2020", "2026", "Le décret date de 2013 ; en 2026 le gouvernement annonce son application ferme."],
        ["Dans quelle région est annoncée la plus grande usine de recyclage du pays ?", "Le Gbêkê (Bouaké)", "Le Poro (Korhogo)", "Le Haut-Sassandra (Daloa)", "Le Tonkpi (Man)", "L'usine est annoncée dans la région du Gbêkê, dont le chef-lieu est Bouaké."],
        ["Quel est le lien entre les sachets plastiques et le paludisme ?", "Ils bouchent les caniveaux et l'eau stagnante attire les moustiques", "Les sachets contiennent le parasite", "Il n'y a aucun lien", "Le plastique donne de la fièvre", "L'eau qui stagne derrière les déchets devient un lieu de ponte pour les moustiques anophèles."],
        ["Quelle part des déchets plastiques est recyclée en Côte d'Ivoire ?", "Entre 3 et 20 %", "Environ 90 %", "100 %", "Environ 75 %", "Le recyclage reste faible : entre 3 et 20 % selon les estimations."],
        ["Comment dit-on « déchet » en anglais ?", "waste", "wish", "wash", "west", "« Waste » = déchet. « To recycle » = recycler."]
      ],
      sources: [["PNUE", "https://www.unep.org/fr/actualites-et-recits/recit/la-cote-divoire-veut-en-finir-avec-la-pollution-plastique"], ["AIP — HSE Week 2026", "https://www.aip.ci/cote-divoire-aip-hse-week-2026-abou-bamba-alerte-sur-les-risques-de-la-pollution-plastique/"]]
    },
    {
      id: "climat", titre: "Climat, forêts et inondations", lettre: "☂", couleur: "#2B63B8",
      matieres: "Géographie · SVT · Français · Anglais",
      chiffres: [["59", "victimes des pluies depuis mi-mai 2026 (gouvernement)"], ["1,5 million ha", "à reboiser (programme NZNP)"], ["9–20 nov.", "COP31 à Antalya (Turquie)"]],
      faits: [
        "Dans la nuit du <b>28 au 29 juin 2026</b>, des pluies diluviennes ont frappé Abidjan : quartiers inondés, glissement de terrain à <b>Attécoubé</b>. Le gouvernement a annoncé <b>59 victimes</b> depuis la mi-mai.",
        "Causes souvent citées : constructions dans des zones à risque, caniveaux bouchés par les déchets, béton partout qui empêche l'eau de s'infiltrer, pluies plus violentes avec le <b>changement climatique</b>.",
        "Le <b>2 avril 2026</b>, la Côte d'Ivoire a lancé le programme <b>Net-Zéro Nature-Positive (NZNP)</b> : plus de 3,5 milliards FCFA, 13 régions touchées par la <b>déforestation</b>, objectif de reboiser 1,5 million d'hectares.",
        "La <b>COP31</b>, grande conférence de l'ONU sur le climat, se tient du <b>9 au 20 novembre 2026</b> à <b>Antalya</b> (Turquie)."
      ],
      vocab: [["le changement climatique", "climate change"], ["une inondation", "a flood"], ["la déforestation", "deforestation"], ["reboiser", "to reforest / to plant trees"], ["un glissement de terrain", "a landslide"], ["la saison des pluies", "the rainy season"]],
      arguments: [
        ["Causes des inondations", ["Pluies de plus en plus fortes (changement climatique)", "Habitations construites dans les zones à risque", "Caniveaux bouchés par les ordures", "Trop de béton, pas assez d'espaces verts"]],
        ["Pourquoi protéger la forêt", ["Les arbres absorbent le CO₂ et freinent le réchauffement", "Ils retiennent le sol et l'eau", "Ils abritent les animaux (biodiversité)", "La forêt fait tomber la pluie utile à l'agriculture"]],
        ["Que faire", ["Ne pas construire dans les zones à risque", "Curer les caniveaux, ne rien y jeter", "Planter des arbres, lutter contre les feux de brousse", "Écouter les alertes météo pendant la saison des pluies"]]
      ],
      redaction: { sujet: "Après les inondations de juin 2026 à Abidjan, un camarade dit : « C'est la faute de la pluie, on n'y peut rien. » Es-tu d'accord ? Argumente.",
        plan: ["Introduction : rappel des pluies du 28-29 juin 2026 et de leurs victimes ; question posée", "I. Il est vrai que la nature joue un rôle : pluies violentes, changement climatique", "II. Mais l'homme aggrave le danger : constructions à risque, déchets dans les caniveaux, déforestation", "III. Donc on peut agir : urbanisme, propreté, reboisement (programme NZNP)", "Conclusion : on ne peut pas arrêter la pluie, mais on peut réduire les dégâts"] },
      oral: { sujet: "EDHC — Faut-il obliger les familles à quitter les zones à risque d'inondation ?",
        reponse: "C'est une question difficile. D'un côté, les familles ont le droit au logement, et partir coûte cher. De l'autre, le droit à la vie est le plus important de tous les droits. En juin 2026, les pluies ont fait des dizaines de victimes à Abidjan, notamment à Attécoubé, à cause d'un glissement de terrain. Je pense donc que l'État doit déplacer les familles des zones les plus dangereuses, mais en les aidant à se reloger dignement. Protéger la vie, oui, mais sans abandonner les personnes." },
      anglais: { question: "Why are forests important?",
        reponse: "Forests are very important. Trees produce oxygen and absorb carbon dioxide, so they fight climate change. They protect the soil and keep water. They are also home to many animals. In Côte d'Ivoire, a lot of forest has disappeared because of farming, so in 2026 the government launched a programme to plant trees on one and a half million hectares." },
      quiz: [
        ["Dans quelle ville se tient la COP31, en novembre 2026 ?", "Antalya (Turquie)", "Abidjan (Côte d'Ivoire)", "Paris (France)", "Belém (Brésil)", "La COP31 a lieu du 9 au 20 novembre 2026 à Antalya. (La COP30 s'était tenue à Belém en 2025.)"],
        ["Que veut dire « COP » dans « COP31 » ?", "Conférence des Parties (sur le climat)", "Comité olympique permanent", "Coupe des pays", "Conseil de l'ordre public", "La COP réunit chaque année les pays (les « parties ») qui ont signé la convention de l'ONU sur le climat."],
        ["Quel quartier d'Abidjan a connu un glissement de terrain meurtrier fin juin 2026 ?", "Attécoubé", "Cocody", "Plateau", "Port-Bouët", "Un glissement de terrain à Attécoubé a fait au moins une douzaine de morts."],
        ["Combien d'hectares le programme Net-Zéro Nature-Positive veut-il reboiser ?", "1,5 million d'hectares", "15 hectares", "150 hectares", "150 millions d'hectares", "Le programme, lancé le 2 avril 2026, vise 1,5 million d'hectares dans 13 régions."],
        ["Lequel de ces gestes aggrave les inondations en ville ?", "Jeter les ordures dans les caniveaux", "Planter des arbres", "Curer les caniveaux", "Écouter la météo", "Les caniveaux bouchés empêchent l'eau de s'écouler."],
        ["Comment dit-on « inondation » en anglais ?", "a flood", "a food", "a fool", "a floor", "« Flood » = inondation. « Landslide » = glissement de terrain."]
      ],
      sources: [["Africa24 — 59 victimes", "https://africa24tv.com/cote-divoire-59-victimes-dans-des-inondations-depuis-mi-mai/"], ["Abidjan.net — programme NZNP", "https://news.abidjan.net/articles/747507/lutte-contre-les-changements-climatiques-le-pnud-et-le-fem-lancent-le-programme-integre-net-zero-nature-positive-en-faveur-des-collectivites"], ["CCNUCC — COP31", "https://unfccc.int/cop31/ifp"]]
    },
    {
      id: "paludisme", titre: "Santé : le paludisme", lettre: "✚", couleur: "#CF3F35",
      matieres: "SVT · EDHC · Anglais",
      chiffres: [["≈ 30 %", "des consultations médicales"], ["231", "cas pour 1 000 habitants (2025)"], ["2030", "objectif : zéro paludisme"]],
      faits: [
        "Le paludisme représente <b>près de 30 % des consultations</b> et reste la <b>première cause de maladie chez les enfants de moins de 5 ans</b>.",
        "Il est dû à un parasite (le <b>plasmodium</b>) transmis par la piqûre du <b>moustique anophèle femelle</b>.",
        "La Côte d'Ivoire a introduit le <b>vaccin antipaludique R21</b> dans le calendrier vaccinal des enfants ; il est <b>gratuit</b>.",
        "Le <b>25 avril 2026</b>, la Journée mondiale de lutte contre le paludisme a été célébrée à <b>Anyama</b>. Objectif : une Côte d'Ivoire <b>sans paludisme en 2030</b>."
      ],
      vocab: [["le paludisme", "malaria"], ["un moustique", "a mosquito"], ["une moustiquaire", "a mosquito net"], ["un vaccin", "a vaccine"], ["la fièvre", "fever"], ["prévenir", "to prevent"]],
      arguments: [
        ["Comment on l'attrape", ["Piqûre d'un moustique anophèle femelle infecté", "Surtout le soir et la nuit", "Les moustiques pondent dans l'eau stagnante"]],
        ["Signes", ["Fièvre, frissons, maux de tête", "Fatigue, vomissements", "Chez l'enfant : peut devenir grave très vite"]],
        ["Se protéger", ["Dormir sous moustiquaire imprégnée", "Vacciner les jeunes enfants (vaccin gratuit)", "Supprimer l'eau stagnante (boîtes, pneus, caniveaux)", "Aller au centre de santé dès la fièvre, ne pas s'automédiquer"]]
      ],
      redaction: { sujet: "Ta petite sœur a souvent le paludisme. Écris une lettre à ta famille pour expliquer comment protéger toute la maison.",
        plan: ["Lieu, date, formule d'appel", "Introduction : l'inquiétude (le paludisme est la 1re cause de maladie des moins de 5 ans)", "I. Expliquer la cause : le moustique anophèle et l'eau stagnante", "II. Proposer des gestes : moustiquaires, propreté autour de la maison, vaccin gratuit, consultation rapide", "Conclusion : encourager, formule de politesse, signature"] },
      oral: { sujet: "EDHC — La santé est-elle un droit ou un devoir ?",
        reponse: "Pour moi, la santé est à la fois un droit et un devoir. C'est un droit, car l'État doit offrir des soins et des vaccins, comme le vaccin contre le paludisme qui est gratuit pour les enfants en Côte d'Ivoire. Mais c'est aussi un devoir, car chacun doit se protéger et protéger les autres : dormir sous moustiquaire, ne pas laisser d'eau stagnante, aller au centre de santé dès qu'on a de la fièvre. Le paludisme représente près de 30 % des consultations : si chacun fait sa part, on peut atteindre l'objectif zéro paludisme en 2030." },
      anglais: { question: "How can we prevent malaria?",
        reponse: "We can prevent malaria in several ways. We should sleep under a mosquito net every night. We must remove stagnant water around the house, because mosquitoes lay their eggs in it. Young children can get the malaria vaccine, which is free in Côte d'Ivoire. And if we have a fever, we should go to the health centre quickly." },
      quiz: [
        ["Quel animal transmet le paludisme ?", "Le moustique anophèle femelle", "La mouche tsé-tsé", "Le rat", "Le moustique mâle", "Seule la femelle anophèle pique pour se nourrir de sang et transmet le plasmodium."],
        ["Quel est l'agent (le microbe) du paludisme ?", "Un parasite : le plasmodium", "Un virus", "Une bactérie", "Un champignon", "Le plasmodium est un parasite qui se multiplie dans le foie puis dans les globules rouges."],
        ["Environ quelle part des consultations médicales est due au paludisme en Côte d'Ivoire ?", "Près de 30 %", "Près de 1 %", "Près de 90 %", "Près de 60 %", "Près de 30 % des consultations : c'est un problème majeur de santé publique."],
        ["Quel est l'objectif fixé par les autorités ?", "Zéro paludisme en 2030", "Zéro paludisme en 2026", "Réduire de 5 % en 2050", "Aucun objectif", "Objectif rappelé lors de la journée du 25 avril 2026 à Anyama : zéro paludisme à l'horizon 2030."],
        ["Le vaccin antipaludique pour les enfants en Côte d'Ivoire est :", "gratuit", "payant, 50 000 FCFA", "réservé aux adultes", "interdit", "Le vaccin R21 est dans le calendrier vaccinal des enfants et il est gratuit."],
        ["Comment dit-on « moustiquaire » en anglais ?", "a mosquito net", "a mosquito bite", "a fishing net", "a mosquito house", "« Mosquito net » = moustiquaire ; « bite » = piqûre."]
      ],
      sources: [["AIP — objectif 2030", "https://www.aip.ci/353628/aip-la-cote-divoire-intensifie-la-riposte-pour-atteindre-lobjectif-zero-cas-de-paludisme-en-2030/"], ["Gouvernement — vaccin R21", "https://gouv.ci/actualite/sante-la-cote-divoire-introduit-desormais-le-vaccin-antipaludique-r21matrix-m-dans-le-calendrier-vaccinal-des-enfants-2393"]]
    },
    {
      id: "drogue", titre: "Drogues et addictions chez les jeunes", lettre: "⚠", couleur: "#9A3B8C",
      matieres: "EDHC · SVT · Français",
      chiffres: [["Avril 2026", "campagne nationale dans les écoles"], ["Kush", "nouvelle drogue de synthèse très dangereuse"], ["PNLTA", "programme national contre les addictions"]],
      faits: [
        "En <b>avril 2026</b>, une <b>campagne nationale</b> contre les addictions a été lancée dans les écoles et universités par le <b>PNLTA</b> (Programme national de lutte contre le tabagisme, la toxicomanie, l'alcoolisme et les autres addictions).",
        "Des <b>contrôles inopinés</b> sont organisés dans des établissements scolaires pour lutter contre la circulation de drogue.",
        "Le <b>kush</b> est une drogue de synthèse (cannabis mélangé à des produits chimiques), apparue en Sierra Leone en 2022 et qui se répand en Afrique de l'Ouest. Elle détruit rapidement la santé des jeunes.",
        "En <b>juin 2026</b>, le Conseil national de sécurité s'est réuni à <b>Korhogo</b> sur les nouvelles drogues qui touchent les jeunes."
      ],
      vocab: [["la drogue", "drugs"], ["une addiction / la dépendance", "an addiction"], ["le tabac", "tobacco"], ["refuser", "to refuse / to say no"], ["la pression des amis", "peer pressure"], ["nuisible", "harmful"]],
      arguments: [
        ["Pourquoi certains jeunes commencent", ["Pression des amis, envie d'être « à la mode »", "Curiosité, ennui", "Problèmes familiaux, stress, chômage", "Fausse idée que ça rend fort ou intelligent"]],
        ["Conséquences", ["Santé : cerveau, poumons, cœur ; overdose", "Échec scolaire, exclusion", "Violence, vol, prison (la loi punit)", "Dépendance : on ne peut plus arrêter"]],
        ["Solutions", ["Savoir dire non, choisir ses amis", "Parler à un adulte de confiance", "Sport, art, église, clubs : occuper son temps", "Sensibilisation et contrôles dans les écoles"]]
      ],
      redaction: { sujet: "Un ami de ta classe commence à fumer et à prendre de la drogue « pour faire comme les grands ». Écris-lui une lettre pour le convaincre d'arrêter.",
        plan: ["Lieu, date, « Cher … »", "Introduction : ton inquiétude d'ami", "I. Les dangers pour sa santé (kush, dépendance) et pour ses études", "II. Les conséquences sur sa famille et son avenir (la loi punit)", "III. Des solutions concrètes : en parler, activités, t'appuyer sur toi", "Conclusion : encouragement, amitié, signature"] },
      oral: { sujet: "EDHC — Que penses-tu des contrôles anti-drogue dans les écoles ?",
        reponse: "Je suis plutôt favorable aux contrôles anti-drogue dans les écoles. L'école doit être un lieu sûr, où on vient pour apprendre. Aujourd'hui, de nouvelles drogues comme le kush circulent en Afrique de l'Ouest et détruisent la santé des jeunes. En avril 2026, une campagne nationale a été lancée dans les écoles, avec des contrôles. Mais les contrôles seuls ne suffisent pas : il faut aussi informer, écouter les élèves en difficulté et leur proposer des activités. Punir, oui, mais surtout prévenir et aider." },
      anglais: { question: "What would you say to a friend who wants to try drugs?",
        reponse: "I would tell my friend that drugs are very dangerous. They damage the brain and the body, and people become addicted. Drugs can also destroy your studies and your future. I would say: it is cool to say no! Let's play football or study together instead. And if you have problems, let's talk to an adult we trust." },
      quiz: [
        ["Que signifie le mot « addiction » ?", "Une dépendance : on ne peut plus s'en passer", "Une addition en maths", "Un médicament", "Un sport", "Une addiction est une dépendance à un produit ou à un comportement."],
        ["Qu'est-ce que le « kush » ?", "Une drogue de synthèse très dangereuse", "Un plat traditionnel", "Un vaccin", "Un jeu vidéo", "Le kush mélange du cannabis et des produits chimiques ; apparu en Sierra Leone en 2022."],
        ["Quand la campagne nationale contre les addictions a-t-elle été lancée dans les écoles ?", "En avril 2026", "En avril 2006", "En décembre 2027", "Jamais", "Le PNLTA a lancé cette campagne en milieu scolaire et universitaire en avril 2026."],
        ["Laquelle de ces raisons pousse souvent les jeunes à essayer la drogue ?", "La pression des amis", "Les bonnes notes", "Le sommeil", "Le sport", "La pression du groupe (« peer pressure ») est une cause fréquente."],
        ["Quel organe est le premier touché par les drogues ?", "Le cerveau", "Les cheveux", "Les ongles", "Les dents de lait", "Les drogues agissent sur le cerveau et le système nerveux."],
        ["« Peer pressure » veut dire :", "la pression des amis", "la tension artérielle", "la peur du noir", "la pression de l'eau", "« Peer » = camarade du même âge."]
      ],
      sources: [["7info — campagne nationale", "https://www.7info.ci/lutte-contre-les-addictions-une-campagne-nationale-ciblant-les-jeunes-lancee/"], ["Afrik.com — le kush", "https://www.afrik.com/l-afrique-a-l-epreuve-des-trafics-initiatives-et-resistances-face-a-la-drogue"]]
    },
    {
      id: "numerique", titre: "Réseaux sociaux, cybercriminalité et IA", lettre: "@", couleur: "#6C4FD8",
      matieres: "Français · EDHC · Anglais",
      chiffres: [["2013", "loi contre la cybercriminalité (renforcée en 2023)"], ["#EnLigneTousResponsables", "campagne nationale"], ["2024", "stratégie nationale d'intelligence artificielle"]],
      faits: [
        "La <b>loi de 2013</b> contre la cybercriminalité punit les délits sur internet. Elle a été <b>renforcée en 2023</b>, notamment contre la diffusion de contenus haineux.",
        "La campagne <b>#EnLigneTousResponsables</b> sensibilise aux dangers d'internet. En 2026, la police appelle les jeunes à un <b>usage responsable</b> des réseaux sociaux ; la PLCC (plateforme de lutte contre la cybercriminalité) met en garde contre l'<b>usurpation d'identité</b>.",
        "En <b>France</b>, une loi adoptée en 2026 interdit l'accès aux réseaux sociaux aux moins de 15 ans. Un bon sujet de débat : faut-il faire pareil ?",
        "<b>Intelligence artificielle</b> : la Côte d'Ivoire a une stratégie nationale depuis 2024. En 2026, les Journées carrières ont pour thème l'IA et les métiers de demain, et le 2e Salon de l'intelligence artificielle s'est tenu en septembre 2026."
      ],
      vocab: [["les réseaux sociaux", "social media"], ["une arnaque", "a scam"], ["le harcèlement en ligne", "cyberbullying"], ["un mot de passe", "a password"], ["l'intelligence artificielle", "artificial intelligence (AI)"], ["une fausse information", "fake news"]],
      arguments: [
        ["Avantages", ["Communiquer avec sa famille et ses amis", "Apprendre : vidéos, cours, applications", "Créer, vendre, trouver des opportunités", "L'IA peut aider en santé, agriculture, école"]],
        ["Dangers", ["Arnaques (« broutage »), vol d'identité", "Harcèlement, photos partagées sans accord", "Fausses informations", "Perte de temps, manque de sommeil, baisse des notes"]],
        ["Bon usage", ["Ne jamais partager son mot de passe ni ses photos intimes", "Vérifier une information avant de la partager", "Limiter son temps d'écran, surtout la nuit", "Signaler les abus ; la loi punit les cybercriminels"]]
      ],
      redaction: { sujet: "« Les réseaux sociaux font plus de mal que de bien aux élèves. » Discute cette affirmation.",
        plan: ["Introduction : place des réseaux sociaux dans la vie des jeunes ; débat (la France interdit aux moins de 15 ans en 2026)", "I. Les dangers réels : arnaques, harcèlement, fausses nouvelles, baisse des notes", "II. Mais aussi des avantages : apprendre, communiquer, entreprendre, l'IA", "III. Tout dépend de l'usage : règles, parents, loi de 2013 renforcée en 2023", "Conclusion : un outil, ni bon ni mauvais en soi ; « En ligne, tous responsables »"] },
      oral: { sujet: "EDHC — Faut-il interdire les réseaux sociaux aux moins de 15 ans, comme en France ?",
        reponse: "Je comprends pourquoi la France a fait ce choix en 2026 : les réseaux sociaux peuvent exposer les jeunes au harcèlement, aux arnaques et aux fausses informations. Mais je ne pense pas qu'une interdiction totale soit la meilleure solution chez nous, car les réseaux servent aussi à apprendre et à rester en contact avec la famille. Je préfère une solution d'éducation : apprendre aux jeunes à protéger leurs données, à vérifier les informations et à limiter leur temps d'écran, avec l'aide des parents. Et la loi ivoirienne sur la cybercriminalité doit être appliquée contre ceux qui abusent. Comme le dit la campagne : en ligne, tous responsables." },
      anglais: { question: "Do you think social media is good or bad for teenagers?",
        reponse: "In my opinion, social media is both good and bad. It is good because we can learn new things, watch lessons and talk with our family. But it can be bad: there are scams, cyberbullying and fake news, and some students spend all night on their phones. So I think we must use social media responsibly: never share our password, check information before sharing it, and sleep well before school." },
      quiz: [
        ["En quelle année la Côte d'Ivoire a-t-elle adopté sa loi contre la cybercriminalité ?", "2013", "1990", "2025", "2000", "La loi n° 2013-451 ; elle a été renforcée par une loi de 2023."],
        ["Quel pays a adopté en 2026 une loi interdisant les réseaux sociaux aux moins de 15 ans ?", "La France", "La Côte d'Ivoire", "Le Ghana", "Le Japon", "La France a adopté cette loi en 2026 ; le débat existe dans d'autres pays."],
        ["Qu'est-ce que l'« usurpation d'identité » ?", "Se faire passer pour quelqu'un d'autre", "Changer de coiffure", "Perdre sa carte d'identité", "Voter deux fois", "C'est utiliser le nom, les photos ou les comptes d'une autre personne, souvent pour escroquer."],
        ["Quel est le bon réflexe avant de partager une information choc ?", "Vérifier la source", "La partager tout de suite", "Ajouter des détails", "L'envoyer à tous ses contacts", "Beaucoup d'informations virales sont fausses (« fake news »)."],
        ["Quel thème avaient les Journées carrières 2026 ?", "L'intelligence artificielle et les métiers de demain", "La pêche artisanale", "Le football", "La musique zouglou", "Thème : « Intelligence artificielle : quelles compétences et quels métiers pour une jeunesse engagée… »"],
        ["« Cyberbullying » signifie :", "le harcèlement en ligne", "un jeu en ligne", "un virus", "une banque en ligne", "« Bullying » = harcèlement ; « cyber » = sur internet."]
      ],
      sources: [["ANSSI — textes nationaux", "https://www.anssi.ci/reglementations/textes-nationaux/"], ["AIP — jeunes et réseaux sociaux", "https://www.aip.ci/cote-divoire-aip-la-responsabilite-de-la-jeunesse-exigee-relativement-a-lusage-des-reseaux-sociaux/"], ["Agence Ecofin — IA et orientation", "https://www.agenceecofin.com/actualites-services/1102-135691-cote-d-ivoire-l-ia-au-c-ur-de-l-orientation-des-jeunes-vers-les-metiers-de-demain"]]
    },
    {
      id: "ecole", titre: "L'école : réussite, grossesses, BEPC", lettre: "✎", couleur: "#E0701F",
      matieres: "EDHC · Français · SVT",
      chiffres: [["52,17 %", "de réussite au BEPC 2026"], ["306 001", "admis au BEPC 2026"], ["4 266", "grossesses en milieu scolaire (2024-2025)"]],
      faits: [
        "<b>BEPC 2026</b> : taux national de réussite de <b>52,17 %</b> (51,41 % en 2025, 40,18 % en 2024). <b>306 001 admis</b> sur 586 587 candidats présents. Filles : 51,96 % ; garçons : 52,39 %.",
        "<b>Grossesses en milieu scolaire</b> : selon le ministère, les cas sont passés de 6 681 (2022-2023) à <b>4 266 (2024-2025)</b>, soit une baisse de 36,5 %. Mais c'est encore des milliers de filles dont les études sont menacées.",
        "Depuis 2019, une élève empêchée par une grossesse peut obtenir un <b>report de scolarité d'un an</b> et revenir gratuitement à l'école publique.",
        "En 2026, les acteurs de l'éducation et de la santé (par exemple dans la <b>Nawa</b>) appellent à mieux encadrer et informer les jeunes filles."
      ],
      vocab: [["réussir un examen", "to pass an exam"], ["échouer", "to fail"], ["un élève", "a pupil / a student"], ["l'abandon scolaire", "dropping out of school"], ["une grossesse", "a pregnancy"], ["l'éducation des filles", "girls' education"]],
      arguments: [
        ["Causes des grossesses précoces", ["Manque d'information sur la sexualité et le corps", "Pauvreté, dépendance matérielle", "Pression ou abus d'adultes", "Éloignement de la famille (élèves logées chez des tuteurs)"]],
        ["Conséquences", ["Abandon des études", "Risques pour la santé de la jeune mère", "Pauvreté qui se transmet", "Rejet social, souffrance"]],
        ["Solutions", ["Éducation sexuelle et dialogue parents-enfants", "Punir les adultes abuseurs", "Report de scolarité pour revenir à l'école", "Internats et cantines pour les élèves éloignées"]]
      ],
      redaction: { sujet: "Au BEPC 2026, près d'un candidat sur deux a échoué. Selon toi, quelles sont les clés de la réussite scolaire ? Illustre avec des exemples.",
        plan: ["Introduction : les chiffres du BEPC 2026 (52,17 %) ; la question", "I. L'effort personnel : régularité, révisions quotidiennes, sommeil, bon usage du téléphone", "II. L'entourage : famille, enseignants, camarades, groupes d'étude", "III. Les conditions : santé, cantine, lumière pour étudier, éviter les grossesses précoces et la drogue", "Conclusion : la réussite se construit dès la rentrée"] },
      oral: { sujet: "EDHC — L'éducation des filles est-elle aussi importante que celle des garçons ?",
        reponse: "Oui, absolument. L'éducation est un droit pour tous les enfants, filles et garçons. Au BEPC 2026, les filles ont presque le même taux de réussite que les garçons : 51,96 % contre 52,39 %, et elles sont même plus nombreuses parmi les admis. Cela prouve qu'elles réussissent quand on leur donne leur chance. Mais les grossesses en milieu scolaire font encore abandonner des milliers de filles chaque année. Il faut donc informer, protéger les filles contre les abus et les aider à revenir à l'école, grâce au report de scolarité. Une fille instruite, c'est une famille et un pays qui avancent." },
      anglais: { question: "How do you prepare for the BEPC?",
        reponse: "I prepare for the BEPC every day, not only at the end of the year. I review my lessons in the evening and I do exercises. On weekends, I study with my friends and we ask each other questions. I also try to sleep well and not spend too much time on my phone. In 2026, only about half of the candidates passed, so I must work hard." },
      quiz: [
        ["Quel a été le taux national de réussite au BEPC 2026 ?", "52,17 %", "25,17 %", "92,17 %", "12,17 %", "52,17 %, en légère hausse par rapport à 2025 (51,41 %)."],
        ["Combien de candidats ont été admis au BEPC 2026 ?", "306 001", "30 601", "3 060 010", "630 075", "306 001 admis sur 586 587 présents (630 075 étaient inscrits)."],
        ["Au BEPC 2026, qui a le meilleur taux de réussite ?", "Les garçons, de peu (52,39 % contre 51,96 %)", "Les filles, de 20 points", "Les garçons, de 30 points", "Exactement pareil", "Les taux sont très proches : 52,39 % (garçons) et 51,96 % (filles)."],
        ["Selon le ministère, comment ont évolué les grossesses en milieu scolaire entre 2022-2023 et 2024-2025 ?", "Elles ont baissé (de 6 681 à 4 266)", "Elles ont doublé", "Elles ont disparu", "Elles n'ont pas changé", "Baisse de 36,5 % selon le ministère ; le chiffre reste élevé."],
        ["Que permet le « report de scolarité » instauré en 2019 ?", "Revenir gratuitement à l'école publique après un an d'arrêt", "Sauter une classe", "Passer le BEPC deux fois la même année", "Ne plus aller à l'école", "Il concerne les élèves empêchés (grossesse, maladie, déplacement des parents)."],
        ["Comment dit-on « réussir un examen » en anglais ?", "to pass an exam", "to past an exam", "to fail an exam", "to win an exam", "« To pass » = réussir ; « to fail » = échouer."]
      ],
      sources: [["AIP — BEPC 2026", "https://www.aip.ci/cote-divoire-aip-bepc-2026-un-taux-national-de-reussite-de-5217-plus-de-306-000-admis/"], ["Ministère de l'Éducation — grossesses", "https://www.education.gouv.ci/index.php/Activite/details/370"], ["Burkina24 — chiffres 2024-2025", "https://burkina24.com/2025/07/07/cote-divoire-4-481-cas-de-grossesses-en-milieu-scolaire-recenses-entre-septembre-2024-et-juin-2025/"]]
    },
    {
      id: "civisme", titre: "Civisme, paix et sécurité routière", lettre: "⚖", couleur: "#2E7F8C",
      matieres: "EDHC · Français · Histoire",
      chiffres: [["66 ans", "d'indépendance le 7 août 2026"], ["1 650", "jeunes volontaires formés à la paix"], ["164 morts", "sur les routes du 1er janv. au 11 févr. 2026"]],
      faits: [
        "Le <b>7 août 2026</b>, la Côte d'Ivoire a fêté ses <b>66 ans d'indépendance</b> (indépendance le 7 août 1960).",
        "La <b>16e Semaine nationale du civisme</b> (1er–6 août 2026) avait pour thème : « Unis par les valeurs civiques, œuvrons pour une Côte d'Ivoire de paix, de dialogue et de fraternité ».",
        "En mai 2026, <b>1 650 jeunes</b> des centres de <b>Service civique</b> ont été formés à la paix et à la cohésion sociale (Programme national de cohésion sociale).",
        "<b>Sécurité routière</b> : 519 accidents, <b>164 morts</b> et 1 934 blessés du 1er janvier au 11 février 2026 (≈ 4 morts par jour). 81 motocyclistes tués de janvier à mi-août. Le <b>permis à points</b> sanctionne les mauvais conducteurs."
      ],
      vocab: [["la paix", "peace"], ["le civisme", "civic-mindedness / good citizenship"], ["un citoyen", "a citizen"], ["le code de la route", "the highway code"], ["un casque", "a helmet"], ["l'indépendance", "independence"]],
      arguments: [
        ["Être un bon citoyen", ["Respecter les symboles : drapeau, hymne, devise « Union – Discipline – Travail »", "Respecter les biens publics", "Payer ses impôts, voter à l'âge adulte", "Tolérance entre ethnies et religions"]],
        ["Causes des accidents", ["Vitesse, dépassements dangereux", "Téléphone au volant, alcool", "Motos sans casque, surcharge", "Véhicules mal entretenus, routes en mauvais état"]],
        ["Solutions", ["Porter le casque, attacher sa ceinture", "Respecter le code de la route et les feux", "Permis à points, contrôles", "Sensibiliser dès l'école"]]
      ],
      redaction: { sujet: "Chaque jour, les accidents de la route font des victimes en Côte d'Ivoire. Rédige un texte pour sensibiliser les jeunes de ton quartier, notamment ceux qui conduisent des motos.",
        plan: ["Introduction : chiffres 2026 (164 morts en six semaines, 81 motocyclistes tués)", "I. Les causes : vitesse, pas de casque, téléphone, alcool", "II. Les conséquences : morts, handicaps, familles détruites", "III. Les bons gestes : casque, code de la route, prudence", "Conclusion : appel à la responsabilité"] },
      oral: { sujet: "EDHC — Que signifie pour toi la devise « Union – Discipline – Travail » ?",
        reponse: "La devise de la Côte d'Ivoire est « Union – Discipline – Travail ». L'union, c'est vivre ensemble malgré nos différences d'ethnies et de religions ; c'est la paix et la cohésion sociale, le thème de la Semaine nationale du civisme en août 2026. La discipline, c'est respecter les règles : le règlement de l'école, les lois, le code de la route. Par exemple, porter un casque à moto, c'est de la discipline qui sauve des vies. Le travail, c'est l'effort de chacun pour développer le pays. Pour moi, élève, cela veut dire bien étudier. Cette année, le pays a fêté ses 66 ans d'indépendance : à nous, les jeunes, de faire vivre cette devise." },
      anglais: { question: "What can young people do for peace in their country?",
        reponse: "Young people can do many things for peace. We can respect everybody, whatever their ethnic group or religion. We can refuse violence and hate speech on social media. We can take part in activities like clean-up days or civic service. In 2026, Côte d'Ivoire celebrated sixty-six years of independence, and the motto is Union, Discipline, Work." },
      quiz: [
        ["Combien d'années d'indépendance la Côte d'Ivoire a-t-elle fêtées le 7 août 2026 ?", "66 ans", "60 ans", "56 ans", "76 ans", "Indépendance le 7 août 1960 : 2026 − 1960 = 66."],
        ["Quelle est la devise de la Côte d'Ivoire ?", "Union – Discipline – Travail", "Liberté – Égalité – Fraternité", "Un peuple – Un but – Une foi", "Paix – Travail – Patrie", "« Liberté – Égalité – Fraternité » est la devise de la France ; « Un peuple, un but, une foi » celle du Sénégal et du Mali."],
        ["Combien de personnes sont mortes sur les routes entre le 1er janvier et le 11 février 2026 ?", "164", "16", "1 640", "4", "164 morts en six semaines : environ 4 par jour."],
        ["À quoi sert le permis à points ?", "À retirer des points aux conducteurs qui commettent des infractions", "À gagner des cadeaux", "À conduire sans examen", "À payer moins d'essence", "Quand le solde de points est nul, le conducteur perd son droit de conduire."],
        ["Quel est le meilleur moyen de protéger sa vie à moto ?", "Porter un casque attaché", "Rouler vite pour arriver tôt", "Transporter trois passagers", "Téléphoner en roulant", "81 motocyclistes sont morts de janvier à mi-août 2026 ; le casque réduit fortement le risque de mort."],
        ["Comment dit-on « la paix » en anglais ?", "peace", "piece", "pace", "place", "« Peace » (paix) se prononce comme « piece » (morceau), mais ne s'écrit pas pareil !"]
      ],
      sources: [["Le Mandat Express — Semaine du civisme", "https://www.lemandatexpress.net/2026/07/30/semaine-nationale-du-civisme-2026-toure-mamadou-lance-7-jours-de-mobilisation-citoyenne-a-loccasion-du-66%E1%B5%89-anniversaire-de-lindependance/"], ["AIP — Service civique", "https://www.aip.ci/367393/cote-divoire-aip-cohesion-sociale-1-650-jeunes-volontaires-mobilises-pour-devenir-des-ambassadeurs-de-paix/"], ["7info — accidents 2026", "https://www.7info.ci/cote-divoire-519-accidents-164-morts-et-1-934-blesses-depuis-debut-2026/"], ["Yeclo — motocyclistes", "https://www.yeclo.com/securite-routiere-en-cote-divoire-81-motocyclistes-morts-depuis-janvier-2026/"]]
    },
    {
      id: "cacao", titre: "Cacao, économie et travail des enfants", lettre: "₣", couleur: "#7A4A1E",
      matieres: "Géographie · EDHC · Anglais",
      chiffres: [["1er", "producteur mondial de cacao"], ["1 200 F/kg", "prix bord champ 2026-2027"], ["− 57 %", "par rapport à 2 800 F en 2025-2026"]],
      faits: [
        "La Côte d'Ivoire est le <b>premier producteur mondial de cacao</b>. Le cacao est un pilier de l'économie et fait vivre des millions de personnes.",
        "Le <b>1er septembre 2026</b>, le prix minimum garanti « <b>bord champ</b> » (payé au paysan) de la campagne principale 2026-2027 a été fixé à <b>1 200 FCFA le kilo</b>, contre <b>2 800 FCFA</b> en 2025-2026 : une baisse de <b>57 %</b>, liée à la chute des prix sur le marché mondial.",
        "Le gouvernement vend une grande partie de la récolte <b>à l'avance</b> (vente par anticipation) pour garantir un prix stable aux planteurs.",
        "<b>Travail des enfants</b> : une étude dans les zones cacaoyères estime qu'environ <b>38 % des enfants</b> de 5 à 17 ans des familles productrices (près de 790 000) participent aux travaux du cacao. Le <b>12 juin</b> est la Journée mondiale contre le travail des enfants (célébrée à Soubré en 2026)."
      ],
      vocab: [["le cacao", "cocoa"], ["un planteur", "a farmer / a grower"], ["le prix", "the price"], ["exporter", "to export"], ["le travail des enfants", "child labour"], ["la récolte", "the harvest"]],
      arguments: [
        ["Importance du cacao", ["Première source de devises du pays", "Des millions de personnes en vivent", "Routes, écoles et centres de santé dans les zones rurales", "Transformation locale : chocolat, emplois industriels"]],
        ["Problèmes", ["Prix qui dépend du marché mondial (baisse de 2 800 à 1 200 F)", "Déforestation pour créer des plantations", "Travail dangereux des enfants", "Vieillissement des vergers et des planteurs"]],
        ["Solutions", ["Transformer le cacao sur place", "Diversifier : anacarde, hévéa, vivriers", "Scolariser tous les enfants, sanctionner les abus", "Agroforesterie : cacao planté avec des arbres"]]
      ],
      redaction: { sujet: "Le prix du cacao payé aux planteurs est passé de 2 800 à 1 200 FCFA le kilo. Explique les conséquences possibles pour les familles de planteurs et propose des solutions.",
        plan: ["Introduction : place du cacao (1er producteur mondial) ; annonce du 1er septembre 2026", "I. Pourquoi le prix baisse : le marché mondial et la vente par anticipation", "II. Les conséquences : revenus des familles, scolarité, risque de travail des enfants", "III. Les solutions : transformation locale, diversification, épargne, coopératives", "Conclusion : réduire la dépendance à un seul produit"] },
      oral: { sujet: "EDHC — Un enfant peut-il aider ses parents au champ ?",
        reponse: "Il faut distinguer aider ses parents et être exploité. Un enfant peut aider un peu, pendant les vacances, pour des tâches légères et sans danger, cela fait partie de l'éducation. Mais porter de lourdes charges, utiliser une machette ou des pesticides, ou manquer l'école pour travailler, c'est du travail dangereux interdit par la loi. Dans les zones de cacao, une étude estime qu'environ 38 % des enfants des familles productrices participent aux travaux. Or l'école est un droit. La Journée du 12 juin nous rappelle que la place d'un enfant est d'abord à l'école." },
      anglais: { question: "Why is cocoa important for Côte d'Ivoire?",
        reponse: "Cocoa is very important for Côte d'Ivoire because our country is the world's first cocoa producer. Millions of people live on cocoa farming. The country exports cocoa and gets money to build roads and schools. But in 2026 the price paid to farmers fell from two thousand eight hundred to one thousand two hundred francs per kilo, so farmers are worried. We should also stop child labour on cocoa farms." },
      quiz: [
        ["Quel est le prix bord champ du cacao pour la campagne principale 2026-2027 ?", "1 200 FCFA le kilo", "2 800 FCFA le kilo", "12 000 FCFA le kilo", "120 FCFA le kilo", "Fixé le 1er septembre 2026, contre 2 800 F l'année précédente."],
        ["Que veut dire « prix bord champ » ?", "Le prix payé directement au planteur", "Le prix d'une tablette de chocolat", "Le prix de l'engrais", "Le prix du transport en bateau", "C'est le prix minimum garanti au producteur, au bord de son champ."],
        ["De combien le prix a-t-il baissé en pourcentage ?", "D'environ 57 %", "D'environ 5 %", "D'environ 100 %", "Il a augmenté", "(2 800 − 1 200) ÷ 2 800 ≈ 0,57, soit 57 %. Bon exercice de maths !"],
        ["Quel est le rang de la Côte d'Ivoire dans la production mondiale de cacao ?", "1er", "3e", "10e", "25e", "La Côte d'Ivoire est le premier producteur mondial."],
        ["Quelle date est la Journée mondiale contre le travail des enfants ?", "Le 12 juin", "Le 7 août", "Le 25 avril", "Le 1er mai", "Le 12 juin ; en 2026, une célébration a eu lieu à Soubré."],
        ["« Child labour » signifie :", "le travail des enfants", "une maternité", "une crèche", "les jeux d'enfants", "« Labour » = travail (pénible)."]
      ],
      sources: [["Pulse — prix 2026-2027", "https://www.pulse.ci/article/campagne-principale-2026-2027-le-prix-bord-champ-du-cacao-est-fixe-a-1200-fcfa-le-kg-2026090401201680242"], ["Agence Ecofin — conséquences", "https://www.agenceecofin.com/actualites-agro/0209-141230-cacao-ce-que-la-baisse-du-prix-implique-pour-les-producteurs-ivoiriens-en-2026/2027"], ["OIT — 12 juin à Soubré", "https://www.ilo.org/fr/meetings-and-events/celebration-de-la-journee-mondiale-contre-le-travail-des-enfants-en-cote"]]
    },
    {
      id: "sport", titre: "Sport 2026 : Mondial, CAN et fair-play", lettre: "⚽", couleur: "#C9941A",
      matieres: "EDHC · Français · Anglais",
      chiffres: [["1re fois", "les Éléphants passent la phase de groupes d'un Mondial"], ["2-1", "défaite contre la Norvège en 16es de finale"], ["3-0", "victoire du Maroc sur tapis vert (CAN 2025)"]],
      faits: [
        "<b>Coupe du monde 2026</b> (États-Unis, Canada, Mexique, 48 équipes) : pour la <b>première fois de leur histoire</b>, les Éléphants passent la phase de groupes. Battus 2-1 par l'Allemagne, ils gagnent 2-0 contre Curaçao (doublé de <b>Nicolas Pépé</b>).",
        "Le <b>30 juin 2026</b> à Dallas, ils sont éliminés en <b>seizièmes de finale</b> par la <b>Norvège (2-1)</b>, malgré le but d'<b>Amad Diallo</b> ; Erling Haaland marque à la 86e minute.",
        "<b>CAN 2025</b> (au Maroc) : en finale le 18 janvier 2026, le Sénégal mène 1-0 contre le Maroc. Après un penalty accordé par l'arbitrage vidéo, des joueurs sénégalais <b>quittent le terrain</b>.",
        "Le <b>17 mars 2026</b>, le jury d'appel de la CAF déclare le Sénégal <b>forfait</b> et donne la victoire au Maroc (3-0). Le Sénégal a saisi le <b>Tribunal arbitral du sport</b> (audience le 8 octobre 2026). Un bon sujet sur le <b>respect des règles</b>."
      ],
      vocab: [["un match", "a match / a game"], ["l'arbitre", "the referee"], ["le fair-play", "fair play"], ["gagner / perdre", "to win / to lose"], ["une équipe", "a team"], ["respecter les règles", "to respect the rules"]],
      arguments: [
        ["Ce que le sport apprend", ["Discipline, travail, persévérance", "Esprit d'équipe, solidarité", "Respect de l'adversaire et de l'arbitre", "Unité nationale : tout le pays derrière les Éléphants"]],
        ["Dérives", ["Violence dans les stades et sur les réseaux", "Contestation des décisions, abandon du terrain", "Tricherie, dopage", "Paris sportifs chez les mineurs"]],
        ["Leçon du fair-play", ["On peut contester, mais par les voies légales (appel, TAS)", "Accepter la défaite avec dignité", "Féliciter l'adversaire", "Les règles protègent tout le monde"]]
      ],
      redaction: { sujet: "Lors de la finale de la CAN 2025, des joueurs ont quitté le terrain pour contester une décision de l'arbitre. Que penses-tu de ce comportement ? Argumente.",
        plan: ["Introduction : rappel des faits (18 janvier 2026, décision de la CAF le 17 mars)", "I. On peut comprendre la colère : sentiment d'injustice, enjeu énorme", "II. Mais quitter le terrain est une faute : non-respect des règles, mauvais exemple, sanction (forfait)", "III. La bonne attitude : jouer jusqu'au bout, puis contester par les voies légales (appel, TAS)", "Conclusion : le fair-play et le respect des règles, valeurs du sport comme de la citoyenneté"] },
      oral: { sujet: "EDHC — Que nous apprend le parcours des Éléphants au Mondial 2026 ?",
        reponse: "Le parcours des Éléphants au Mondial 2026 nous apprend beaucoup. D'abord, le travail paie : pour la première fois de son histoire, la Côte d'Ivoire a passé la phase de groupes d'une Coupe du monde. Ensuite, l'union fait la force : tout le pays, du nord au sud, était derrière son équipe, sans distinction d'ethnie ou de religion. Enfin, il faut savoir perdre avec dignité : éliminés par la Norvège 2 à 1, les joueurs ont accepté la défaite. C'est aussi une leçon pour nous, élèves : travailler, rester unis, et se relever après un échec." },
      anglais: { question: "What is your favourite sport and why?",
        reponse: "My favourite sport is football. I like it because it is a team sport: we must play together and help each other. I was very proud of the Elephants at the 2026 World Cup, because for the first time they reached the knockout stage. They lost against Norway, but they played well. Sport teaches us discipline and respect for the rules." },
      quiz: [
        ["Quelle équipe a éliminé la Côte d'Ivoire au Mondial 2026 ?", "La Norvège", "L'Allemagne", "Le Brésil", "Le Maroc", "Défaite 2-1 contre la Norvège le 30 juin 2026 à Dallas, en seizièmes de finale."],
        ["Qu'ont réussi les Éléphants pour la première fois de leur histoire en 2026 ?", "Passer la phase de groupes d'une Coupe du monde", "Gagner la Coupe du monde", "Participer à une Coupe du monde", "Battre l'Allemagne", "Ils avaient déjà participé à des Mondiaux, mais n'avaient jamais passé le 1er tour."],
        ["Quel Ivoirien a marqué deux buts contre Curaçao ?", "Nicolas Pépé", "Didier Drogba", "Yaya Touré", "Amad Diallo", "Nicolas Pépé a signé un doublé (victoire 2-0) ; Amad Diallo a marqué contre la Norvège."],
        ["Qui a été déclaré vainqueur de la CAN 2025 par le jury d'appel de la CAF en mars 2026 ?", "Le Maroc", "Le Sénégal", "La Côte d'Ivoire", "L'Égypte", "Le Sénégal, qui avait gagné 1-0 sur le terrain, a été déclaré forfait pour avoir quitté le terrain. Recours en cours au TAS."],
        ["Que signifie « fair-play » ?", "Respecter les règles, l'adversaire et l'arbitre", "Jouer uniquement à domicile", "Gagner à tout prix", "Jouer sans arbitre", "Le fair-play est l'esprit sportif : loyauté et respect."],
        ["« The referee » signifie :", "l'arbitre", "le gardien", "le supporter", "l'entraîneur", "Entraîneur = « coach », gardien = « goalkeeper »."]
      ],
      sources: [["FIFA — résultats de la Côte d'Ivoire", "https://www.fifa.com/fr/tournaments/mens/worldcup/canadamexicousa2026/articles/calendrier-resultats-cote-d-ivoire-coupe-du-monde-2026"], ["APS — élimination par la Norvège", "https://aps.sn/mondial-2026-la-cote-divoire-eliminee-par-la-norvege-en-seiziemes-de-finale-2-1/"], ["France 24 — décision de la CAF", "https://www.france24.com/fr/sports/20260317-can-2025-le-jury-d-appel-de-la-caf-d%C3%A9clare-le-maroc-vainqueur-de-la-finale"]]
    }
  ];
  const genQuizTheme = (th) => th.quiz.map(([enonce, bon, ...reste]) => () => {
    const expl = reste.pop();
    return { comp: "a-" + th.id, enonce, type: "qcm", choix: melanger([bon, ...reste]), reponse: bon, affiche: bon, explication: expl };
  });
