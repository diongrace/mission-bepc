  // =========================================================
  // Atelier de français écrit : texte argumentatif, résumé guidé, article de journal
  // =========================================================
  // Compte les mots comme au BEPC : l'apostrophe sépare deux mots (l'école = 2), un mot composé avec trait d'union compte pour 1.
  const compterMots = t => String(t).replace(/[’']/g, "' ").split(/\s+/).filter(w => /[A-Za-zÀ-ÿ0-9]/.test(w)).length;
  const TEXTES_RESUME = [
    { id: "sport", titre: "Le sport à l'école",
      texte: ["On considère souvent l'éducation physique comme une matière secondaire. Pourtant, le sport à l'école joue un rôle essentiel dans la formation des élèves.",
        "D'abord, il entretient la santé. En courant, en sautant, en jouant au football ou au handball, l'élève renforce son cœur, ses muscles et ses os. Il lutte aussi contre l'obésité, qui touche de plus en plus d'enfants dans nos villes.",
        "Ensuite, le sport aide à mieux apprendre. Après une séance d'éducation physique, l'élève est plus détendu et plus attentif en classe. Les médecins affirment d'ailleurs que l'activité physique améliore la mémoire et la concentration.",
        "Enfin, le sport forme le caractère. Dans une équipe, on apprend à respecter les règles, l'arbitre et l'adversaire. On découvre la solidarité, l'effort et la persévérance. Ces valeurs seront utiles toute la vie, à l'école comme au travail.",
        "Certes, beaucoup d'établissements manquent de terrains et de matériel. Mais un espace dégagé, un ballon et un enseignant motivé suffisent souvent pour organiser des activités utiles.",
        "Il faut donc cesser de négliger le sport à l'école : un esprit sain dans un corps sain reste la meilleure garantie de réussite."],
      idees: [["Le sport à l'école, jugé secondaire, est en réalité essentiel (thèse).", 1], ["Le sport entretient la santé et combat l'obésité.", 1], ["Le football et le handball sont les meilleurs sports.", 0, "C'est un exemple, pas une idée essentielle."],
        ["Le sport rend plus attentif et améliore la mémoire.", 1], ["Le sport forme le caractère : règles, solidarité, effort.", 1], ["Les médecins conseillent de consulter souvent.", 0, "Le texte ne dit pas cela."],
        ["Le manque de moyens n'empêche pas de faire du sport (objection réfutée).", 1], ["Il faut cesser de négliger le sport à l'école (conclusion).", 1]],
      modele: "Jugé secondaire, le sport scolaire est pourtant essentiel. Il préserve la santé et combat l'obésité. Il améliore aussi l'attention et la mémoire. De plus, il forge le respect des règles, la solidarité et l'effort. Même sans grands moyens, on peut le pratiquer. Valorisons-le donc : il garantit la réussite." },
    { id: "forets", titre: "Protéger nos forêts",
      texte: ["La Côte d'Ivoire a perdu une grande partie de ses forêts en quelques dizaines d'années. Cette disparition n'est pas une fatalité : chacun peut agir pour protéger ce qui reste.",
        "Les forêts nous rendent d'immenses services. Elles abritent de nombreux animaux et plantes, dont certains n'existent nulle part ailleurs. Elles retiennent les sols et l'eau, et elles favorisent les pluies dont nos cultures ont besoin. Sans elles, les terres s'appauvrissent et les récoltes diminuent.",
        "Or les menaces sont nombreuses. Des plantations s'installent illégalement dans les forêts classées, les feux de brousse ravagent chaque année des milliers d'hectares, et l'exploitation du bois se fait souvent sans contrôle.",
        "Pourtant, des solutions existent. L'État a lancé en 2026 un programme de reboisement ambitieux. Les planteurs peuvent pratiquer l'agroforesterie en cultivant le cacao à l'ombre des arbres. Quant aux élèves, ils peuvent planter des arbres dans leur école et sensibiliser leur famille.",
        "Certains diront que les agriculteurs ont besoin de terres pour nourrir le pays. C'est vrai, mais une agriculture qui détruit la forêt finit par détruire aussi ses propres récoltes.",
        "Protéger nos forêts, c'est donc protéger notre avenir. Il est temps que chacun prenne ses responsabilités."],
      idees: [["La disparition des forêts n'est pas une fatalité : chacun peut agir (thèse).", 1], ["Les forêts protègent la biodiversité, les sols, l'eau et favorisent les pluies.", 1], ["Certains animaux n'existent nulle part ailleurs.", 0, "C'est un détail qui précise l'idée de biodiversité."],
        ["Les forêts sont menacées : plantations illégales, feux, exploitation du bois.", 1], ["Des solutions existent : reboisement, agroforesterie, action des élèves.", 1], ["Le cacao pousse mieux au soleil.", 0, "Faux : le texte parle de cacao à l'ombre des arbres."],
        ["L'objection des terres agricoles est réfutée : détruire la forêt ruine les récoltes.", 1], ["Protéger les forêts, c'est protéger l'avenir (conclusion).", 1]],
      modele: "Notre pays a perdu beaucoup de forêts, mais chacun peut agir. Elles préservent la biodiversité, les sols, l'eau et les pluies utiles aux cultures. Pourtant, plantations illégales, feux et exploitation incontrôlée les menacent. Reboisement, agroforesterie et actions des élèves offrent des solutions. Détruire la forêt ruinerait l'agriculture elle-même. Protégeons-la donc pour notre avenir." }
  ];
  const PARA_TEL = "« Le téléphone portable est devenu indispensable aux élèves. En effet, il leur permet de faire des recherches pour leurs exposés. Par exemple, un élève de Daloa peut consulter en quelques secondes une encyclopédie en ligne. »";
  const ARTICLE = "<i>Korhogo, 12 mars 2026.</i> Hier matin, les élèves du lycée moderne de Korhogo ont planté 500 arbres autour de leur établissement. Organisée par le club environnement, cette opération vise à lutter contre la chaleur et l'avancée de la désertification. « Chaque élève est responsable d'un arbre et devra l'arroser », explique le proviseur. Une deuxième opération est prévue en juin.";
  MAT_FR.chapitres.push(
    { id: "fr-argu-atelier", titre: "Atelier · Le texte argumentatif (étayer, réfuter)",
      cours: rg("La thèse", "C'est l'<b>opinion</b> défendue. Exemple : « L'uniforme scolaire devrait être obligatoire. » Un simple fait (« Le lycée compte 800 élèves ») n'est pas une thèse.") +
        rg("Le paragraphe argumentatif", "<b>1. L'argument</b> (l'idée qui prouve) → <b>2. L'explication</b> (pourquoi c'est vrai) → <b>3. L'exemple</b> (un cas précis et réel).") +
        rg("Étayer ou réfuter", "<b>Étayer</b> : soutenir une thèse avec des arguments. <b>Réfuter</b> : montrer qu'une thèse est fausse ou exagérée ; on présente d'abord la thèse adverse, puis on la combat.") +
        rg("Les connecteurs", "Ajouter : d'abord, ensuite, de plus, enfin. Expliquer : en effet, car. Illustrer : par exemple. Opposer : mais, cependant, pourtant. Concéder : certes… mais. Conclure : donc, ainsi, en somme."),
      qs: [
        [`${PARA_TEL}<br>Quelle est la <b>thèse</b> de ce paragraphe ?`, "Le téléphone portable est devenu indispensable aux élèves.", "Il leur permet de faire des recherches pour leurs exposés.", "Un élève de Daloa peut consulter une encyclopédie en ligne.", "Les exposés sont difficiles.", "La thèse est l'opinion défendue ; les phrases suivantes la justifient."],
        [`${PARA_TEL}<br>Quel est l'<b>argument</b> ?`, "Il leur permet de faire des recherches pour leurs exposés.", "Le téléphone portable est devenu indispensable aux élèves.", "Un élève de Daloa peut consulter une encyclopédie.", "En effet.", "L'argument est la raison qui prouve la thèse ; il est introduit par « En effet »."],
        [`${PARA_TEL}<br>Quelle phrase est l'<b>exemple</b> ?`, "Un élève de Daloa peut consulter en quelques secondes une encyclopédie en ligne.", "Le téléphone portable est devenu indispensable.", "Il leur permet de faire des recherches.", "Aucune", "L'exemple est un cas précis, introduit par « Par exemple »."],
        ["Le connecteur « en effet » sert à :", "expliquer ou justifier ce qui précède", "opposer deux idées", "conclure", "donner un exemple", "« En effet » annonce une justification."],
        ["Quelle phrase est une <b>thèse</b> ?", "L'uniforme scolaire devrait être obligatoire dans tous les lycées.", "Le lycée compte 800 élèves.", "Les cours commencent à 7 h 30.", "Abidjan est au sud du pays.", "Une thèse est une opinion discutable ; les autres phrases sont des faits."],
        ["Pour <b>réfuter</b> la thèse « Les jeux vidéo rendent les jeunes violents », quel argument convient ?", "Des millions de joueurs ne sont jamais violents : la violence a d'autres causes.", "Certains jeux montrent des combats.", "Les jeunes jouent beaucoup.", "Les jeux vidéo coûtent cher.", "Réfuter, c'est montrer que la thèse est fausse ou exagérée."],
        ["Étayer une thèse, c'est :", "la soutenir avec des arguments et des exemples", "la critiquer", "la recopier", "la résumer", "Étayer = appuyer, renforcer."],
        ["Quel est le bon ordre d'un paragraphe argumentatif ?", "Argument, explication, exemple", "Exemple, conclusion, argument", "Conclusion, exemple, thèse", "Explication, titre, exemple", "C'est la structure qui convainc le correcteur."],
        ["Quel exemple illustre le mieux l'argument « Le sport renforce la santé » ?", "Un élève qui court trois fois par semaine s'essouffle moins en montant les escaliers.", "Le football est populaire en Côte d'Ivoire.", "Les stades sont grands.", "Mon frère aime le basket.", "Un bon exemple est précis et prouve directement l'argument."],
        ["« Certes, le téléphone distrait les élèves ; mais il peut les aider à apprendre. » Quelle est la position de l'auteur ?", "Il reconnaît un inconvénient mais défend le téléphone.", "Il est contre le téléphone.", "Il n'a pas d'avis.", "Il veut interdire les téléphones.", "« Certes… mais » : on concède un point, puis on affirme sa position."],
        ["Quel connecteur annonce une <b>conclusion</b> ?", "En somme", "Par exemple", "En effet", "D'abord", "Aussi : donc, ainsi, pour conclure."],
        ["Dans un texte qui réfute, on commence souvent par :", "présenter la thèse adverse, puis montrer ses limites", "donner sa conclusion", "raconter une histoire", "citer une recette", "On ne peut combattre une idée qu'après l'avoir présentée."]
      ] },
    { id: "fr-resume-atelier", titre: "Atelier · Le résumé guidé (avec compteur de mots)", special: "resume",
      cours: rg("La règle d'or", "Résumer, c'est réduire le texte (au BEPC, en général <b>au quart</b>, avec une marge de 10 %) en gardant <b>toutes les idées essentielles</b>, <b>dans l'ordre</b>, avec <b>tes propres mots</b>.") +
        rg("Compter les mots", "Un mot = ce qui est entre deux espaces. L'apostrophe sépare deux mots : « l'école » = 2 mots. Un mot composé avec un trait d'union compte pour 1. Indique le total à la fin : (68 mots).") +
        rg("Ce qu'on garde, ce qu'on enlève", "On garde la thèse, les arguments, la réfutation et la conclusion. On enlève les exemples, les répétitions et les détails.") +
        rg("Interdits", "Pas de « l'auteur dit que », « ce texte parle de ». Pas ton avis. Pas de phrases recopiées. On garde le « nous » ou le « je » de l'auteur."),
      qs: [
        ["Un texte de 240 mots doit être résumé au quart : environ combien de mots ?", "60", "24", "120", "80", "240 ÷ 4 = 60."],
        ["Avec une marge de 10 %, un résumé prévu de 60 mots peut compter entre :", "54 et 66 mots", "50 et 70 mots", "60 et 70 mots", "30 et 90 mots", "10 % de 60 = 6, donc de 54 à 66 mots."],
        ["Combien de mots compte « l'école » ?", "2", "1", "3", "0", "L'apostrophe sépare deux mots : l' + école."],
        ["Dans un résumé, peut-on écrire « l'auteur pense que… » ?", "Non, on parle comme l'auteur", "Oui, c'est obligatoire", "Oui, au début seulement", "Seulement à la fin", "Le résumé garde le système d'énonciation du texte."],
        ["Que fait-on des exemples du texte ?", "On les supprime ou on les remplace par une idée générale", "On les recopie tous", "On en ajoute d'autres", "On les met au début", "Les exemples illustrent ; ils ne sont pas essentiels."],
        ["L'ordre des idées dans le résumé doit être :", "le même que dans le texte", "inversé", "au choix", "alphabétique", "On respecte la progression de l'auteur."],
        ["Peut-on donner son avis dans un résumé ?", "Non", "Oui, à la fin", "Oui, au début", "Oui, si on est d'accord", "Le résumé est fidèle au texte : aucun commentaire personnel."],
        ["Reformuler, c'est :", "dire la même idée avec d'autres mots, plus courts", "recopier la phrase", "changer l'idée", "ajouter des exemples", "Exemple : « l'élève est plus détendu et plus attentif » → « il favorise l'attention »."],
        ["Que doit-on indiquer à la fin du résumé ?", "Le nombre de mots", "Son nom", "La date", "Rien", "Par exemple : (68 mots). Un nombre faux est pénalisé."],
        ["À quoi servent les connecteurs dans un résumé ?", "À montrer l'enchaînement logique des idées", "À allonger le texte", "À rien", "À donner son avis", "D'abord, de plus, mais, donc… rendent le résumé clair."]
      ] },
    { id: "fr-article-atelier", titre: "Atelier · L'article de journal",
      cours: rg("La structure", "<b>Titre</b> court et accrocheur · <b>chapeau</b> (2-3 lignes qui résument l'essentiel) · <b>attaque</b> (la 1re phrase qui accroche) · <b>corps</b> (les faits, du plus important au moins important) · <b>chute</b> (la fin qui ouvre sur la suite).") +
        rg("Les questions du journaliste", "Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ? Un bon article répond à toutes.") +
        rg("Le style", "Registre courant, phrases courtes, faits vérifiés, <b>citations</b> entre guillemets pour donner la parole aux témoins. Passé composé pour les faits récents."),
      qs: [
        [`${ARTICLE}<br><b>Qui</b> a planté les arbres ?`, "Les élèves du lycée moderne de Korhogo", "Le proviseur seul", "Les agents des eaux et forêts", "Les parents d'élèves", "C'est le sujet de la 1re phrase."],
        [`${ARTICLE}<br><b>Quand</b> l'opération a-t-elle eu lieu ?`, "Le 11 mars 2026 (« hier matin »)", "En juin", "Le 12 mars 2026", "L'année dernière", "L'article est daté du 12 mars et dit « hier matin »."],
        [`${ARTICLE}<br><b>Pourquoi</b> cette opération ?`, "Pour lutter contre la chaleur et la désertification", "Pour vendre du bois", "Pour décorer la cour seulement", "Pour une fête", "Le « pourquoi » est introduit par « vise à »."],
        [`${ARTICLE}<br>À quoi sert la phrase entre guillemets ?`, "À donner la parole à un témoin (le proviseur)", "À donner l'avis du journaliste", "À décorer l'article", "À poser une question", "La citation rend l'article vivant et crédible."],
        [`${ARTICLE}<br>Quel <b>titre</b> convient le mieux ?`, "Korhogo : 500 arbres plantés par les lycéens", "Une journée comme les autres", "Le proviseur parle", "Les arbres", "Un bon titre est court, précis et donne l'essentiel."],
        ["Le chapeau d'un article, c'est :", "le court texte sous le titre qui résume l'essentiel", "la signature du journaliste", "la photo", "la dernière phrase", "Il donne envie de lire la suite."],
        [`${ARTICLE}<br>La dernière phrase (« Une deuxième opération est prévue en juin ») est :`, "la chute, qui ouvre sur la suite", "le titre", "le chapeau", "une citation", "La chute termine l'article."],
        ["Quel temps utilise-t-on surtout pour raconter un fait récent dans un article ?", "Le passé composé", "Le passé simple", "Le futur antérieur", "Le subjonctif", "Exemple : « les élèves ont planté »."],
        ["Un article de journal doit être surtout :", "précis et objectif", "rempli de fautes", "très long", "uniquement l'avis du journaliste", "Il informe à partir de faits vérifiés."]
      ] }
  );
  SUJETS.push({ id: "fr-article", matiere: "francais", titre: "Français · Article de journal", duree: "2 h",
    consignes: "Sujet : ton établissement a organisé une journée de salubrité. Rédige un article d'une quinzaine de lignes pour le journal de l'école : titre, chapeau, corps avec au moins une citation, et chute.",
    questions: [
      Q("1 · Préparer", "Réponds aux six questions du journaliste (qui, quoi, où, quand, comment, pourquoi) à partir du sujet.", 4,
        `<b>Qui ?</b> les élèves, les enseignants, le club environnement. <b>Quoi ?</b> une journée de salubrité (nettoyage de la cour, des caniveaux, plantation). <b>Où ?</b> dans l'établissement et autour. <b>Quand ?</b> une date précise (par exemple le samedi 10 octobre 2026). <b>Comment ?</b> par groupes, avec balais, sacs, brouettes. <b>Pourquoi ?</b> pour un cadre propre, éviter le paludisme et les inondations, donner l'exemple.`),
      Q("2 · Rédiger", "Rédige ton article complet.", 16,
        `<b>Modèle</b> :<br><b>Lycée moderne : 300 élèves font briller leur école</b><br><i>Samedi dernier, élèves et enseignants ont consacré leur matinée à une grande journée de salubrité. Objectif : un établissement propre et sain.</i><br>Dès 7 heures, balais et sacs à la main, près de 300 élèves se sont répartis en groupes. Les uns ont débouché les caniveaux, les autres ont ramassé des centaines de sachets plastiques dans la cour. « Des caniveaux propres, c'est moins d'eau stagnante et donc moins de moustiques », explique Mme Koné, responsable du club environnement. Dix jeunes arbres ont aussi été plantés près du terrain de sport.<br>À midi, la cour avait changé de visage. Les organisateurs espèrent que chacun gardera les bons réflexes : jeter ses déchets dans les poubelles installées à cet effet. Rendez-vous est déjà pris pour le mois prochain.<br><br><b>Grille</b> : titre et chapeau (3 pts) · réponses aux 6 questions (4 pts) · citation bien introduite (2 pts) · organisation et chute (3 pts) · langue : orthographe, temps du récit, vocabulaire (4 pts).`)
    ] });
  EXEMPLES["fr-argu-atelier"] = E("Écris un paragraphe pour étayer la thèse : « Il faut lire tous les jours. »",
    ["<b>Argument</b> : « D'abord, la lecture enrichit notre vocabulaire. »", "<b>Explication</b> : « En effet, en lisant, nous rencontrons des mots nouveaux et nous voyons comment ils s'écrivent. »",
     "<b>Exemple</b> : « Par exemple, un élève qui lit un roman par mois fait souvent moins de fautes en dictée. »", "<b>Lien avec la thèse</b> : « C'est pourquoi lire chaque jour est une habitude précieuse. »"],
    "Un argument sans exemple convainc mal ; un exemple sans argument ne prouve rien.");
  EXEMPLES["fr-resume-atelier"] = E("Résume cette phrase en la réduisant de moitié : « Après une séance d'éducation physique, l'élève est plus détendu et plus attentif en classe, et les médecins affirment que l'activité physique améliore la mémoire. » (26 mots)",
    ["<b>Repérer l'idée</b> : le sport aide à mieux apprendre (attention et mémoire).", "<b>Supprimer</b> les détails : « après une séance », « les médecins affirment ».",
     "<b>Reformuler</b> avec ses mots : « Le sport améliore l'attention et la mémoire des élèves. »", "<b>Compter</b> : 10 mots (l'attention = 2 mots). C'est bien moins de la moitié."],
    "Reformuler n'est pas recopier en coupant des mots : il faut trouver une formule plus courte.");
  EXEMPLES["fr-article-atelier"] = E("Transforme cette information en attaque d'article : « Des élèves ont nettoyé les caniveaux du quartier samedi. »",
    ["<b>Chercher l'accroche</b> : ce qui est surprenant ou utile (le nombre d'élèves, le résultat).", "<b>Répondre à qui, quoi, quand, où</b> dans la première phrase.",
     "<b>Attaque</b> : « Samedi, balais en main, cinquante élèves du collège ont débarrassé les caniveaux de Yopougon de plus de cent sacs de déchets. »"],
    "L'attaque doit donner envie de lire la suite, sans donner son avis.");
