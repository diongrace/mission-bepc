  // =========================================================
  // SVT et Physique-Chimie (programmes officiels de 3e, DPFC)
  // qs : [question, bonne réponse, faux…, explication]
  // =========================================================
  const rg = (t, x) => `<div class="regle"><b>${t}</b>${x}</div>`;

  const MAT_SVT = { id: "svt", nom: "SVT", icone: "✿", couleur: "#1A8F5F", examen: "Écrit",
    chapitres: [
      { id: "svt-aliments", titre: "Les aliments et l'Homme", theme: "La nutrition chez l'Homme",
        cours: rg("Aliments simples (nutriments)", "Glucides, lipides, protides, eau, sels minéraux, vitamines.") +
          rg("Rôles", "<b>Énergétiques</b> : glucides et lipides. <b>Bâtisseurs</b> (constructeurs) : protides. <b>Fonctionnels</b> (protecteurs) : vitamines et sels minéraux.") +
          rg("Tests d'identification", "Amidon : <b>eau iodée</b> → bleu-violet. Glucose : <b>liqueur de Fehling</b> à chaud → précipité rouge brique. Lipides : tache <b>translucide</b> sur le papier. Protides : réactif du <b>biuret</b> → violet. Sels (chlorures) : nitrate d'argent → précipité blanc.") +
          rg("Maladies nutritionnelles", "Kwashiorkor (manque de protides), marasme (manque de tout), scorbut (vitamine C), rachitisme (vitamine D), goitre (iode), anémie (fer), obésité (excès).") +
          rg("Ration équilibrée", "Chaque repas doit contenir des aliments des trois groupes : par exemple attiéké (énergétique) + poisson (bâtisseur) + légumes et fruits (fonctionnels)."),
        qs: [
          ["Quel réactif met en évidence l'amidon ?", "L'eau iodée", "La liqueur de Fehling", "L'eau de chaux", "Le nitrate d'argent", "L'eau iodée donne une coloration <b>bleu-violet</b> en présence d'amidon."],
          ["La liqueur de Fehling chauffée avec du glucose donne :", "un précipité rouge brique", "une coloration bleu-violet", "une tache translucide", "un précipité blanc", "Test des sucres réducteurs comme le glucose : précipité <b>rouge brique</b> à chaud."],
          ["Les protides sont des aliments :", "bâtisseurs (constructeurs)", "énergétiques seulement", "sans utilité", "fonctionnels seulement", "Les protides (viande, poisson, œufs, haricots) construisent et réparent le corps."],
          ["Quelle maladie est due à un manque de protides chez l'enfant ?", "Le kwashiorkor", "Le scorbut", "Le goitre", "Le paludisme", "Le kwashiorkor touche les enfants mal nourris en protides : ventre gonflé, œdèmes, cheveux décolorés."],
          ["Le scorbut est dû à un manque de :", "vitamine C", "vitamine D", "fer", "iode", "La vitamine C se trouve dans les agrumes (orange, citron) et les fruits frais."],
          ["Le goitre (gonflement du cou) est lié à un manque de :", "iode", "calcium", "vitamine A", "glucides", "L'iode est nécessaire à la glande thyroïde ; on utilise du sel iodé."],
          ["Quel groupe d'aliments fournit surtout de l'énergie ?", "Glucides et lipides", "Vitamines et sels minéraux", "Protides et eau", "Eau et sels minéraux", "Riz, igname, manioc (glucides) et huiles (lipides) sont les aliments énergétiques."],
          ["Une tache translucide sur du papier indique la présence de :", "lipides", "protides", "glucose", "amidon", "Les lipides (huile, beurre) laissent une tache qui laisse passer la lumière."],
          ["Lequel de ces repas est le plus équilibré ?", "Attiéké, poisson, salade et une orange", "Riz et pain", "Beignets et sucreries", "Alloco et jus sucré", "Il contient des aliments énergétiques, bâtisseurs et fonctionnels."],
          ["L'anémie peut être due à un manque de :", "fer", "sucre", "lipides", "vitamine C seulement", "Le fer sert à fabriquer l'hémoglobine des globules rouges (feuilles vertes, viande, haricots)."]
        ] },
      { id: "svt-digestion", titre: "La digestion des aliments", theme: "La nutrition chez l'Homme",
        cours: rg("Définition", "La digestion transforme les aliments en <b>nutriments</b> assez petits pour passer dans le sang.") +
          rg("Deux actions", "<b>Mécanique</b> : mastication (dents), brassage (estomac). <b>Chimique</b> : les <b>enzymes</b> des sucs digestifs découpent les grosses molécules.") +
          rg("Le trajet", "Bouche (salive : amylase, amidon → maltose) → œsophage → estomac (suc gastrique : pepsine sur les protides) → intestin grêle (suc pancréatique, bile, suc intestinal) → gros intestin.") +
          rg("Produits finaux", "Amidon → <b>glucose</b> ; protides → <b>acides aminés</b> ; lipides → <b>acides gras et glycérol</b>.") +
          rg("Absorption", "Les nutriments passent dans le sang au niveau de l'<b>intestin grêle</b>, grâce aux <b>villosités intestinales</b> qui augmentent la surface d'échange."),
        qs: [
          ["Où a lieu l'absorption des nutriments ?", "Dans l'intestin grêle", "Dans l'estomac", "Dans la bouche", "Dans le gros intestin", "La paroi de l'intestin grêle est plissée de <b>villosités</b> riches en vaisseaux sanguins."],
          ["L'amylase salivaire transforme l'amidon en :", "maltose", "acides aminés", "glycérol", "protéines", "Dès la bouche, l'amylase de la salive commence la digestion de l'amidon."],
          ["Quelle enzyme de l'estomac agit sur les protides ?", "La pepsine", "L'amylase", "La lipase", "La bile", "Le suc gastrique contient la pepsine, active en milieu acide."],
          ["Le produit final de la digestion de l'amidon est :", "le glucose", "l'acide aminé", "l'acide gras", "le maltose uniquement", "L'amidon est découpé jusqu'au glucose, qui passe dans le sang."],
          ["Les protides sont digérés en :", "acides aminés", "glucose", "glycérol", "vitamines", "Les acides aminés servent ensuite à fabriquer nos propres protéines."],
          ["Quel est le rôle de la bile ?", "Émulsionner les lipides (les fractionner en gouttelettes)", "Digérer l'amidon", "Tuer les microbes du sang", "Fabriquer du glucose", "La bile, produite par le foie, ne contient pas d'enzyme ; elle facilite l'action de la lipase."],
          ["Qu'est-ce qu'une enzyme digestive ?", "Une substance qui découpe les grosses molécules des aliments", "Un organe", "Un aliment", "Une vitamine", "Chaque enzyme agit sur un type d'aliment : c'est sa <b>spécificité</b>."],
          ["La mastication est une action :", "mécanique", "chimique", "hormonale", "nerveuse uniquement", "Les dents broient les aliments : c'est la digestion mécanique."],
          ["À quoi servent les villosités intestinales ?", "À augmenter la surface d'absorption", "À digérer les os", "À fabriquer la salive", "À stocker les selles", "Des millions de villosités donnent à l'intestin une énorme surface d'échange."],
          ["Quel organe produit la bile ?", "Le foie", "Le pancréas", "L'estomac", "Le cœur", "La bile est fabriquée par le foie et stockée dans la vésicule biliaire."]
        ] },
      { id: "svt-sang", titre: "Le sang", theme: "La nutrition chez l'Homme",
        cours: rg("Composition", "<b>Plasma</b> (liquide jaunâtre, environ 55 %) + <b>éléments figurés</b> : globules rouges (hématies), globules blancs (leucocytes), plaquettes.") +
          rg("Globules rouges", "Contiennent l'<b>hémoglobine</b> qui transporte le dioxygène. Environ 4 à 5 millions par mm³.") +
          rg("Globules blancs", "Défendent l'organisme contre les microbes.") +
          rg("Plaquettes", "Permettent la <b>coagulation</b> du sang (arrêt des saignements).") +
          rg("Rôles du sang", "Transport (O₂, CO₂, nutriments, déchets), défense, coagulation, répartition de la chaleur."),
        qs: [
          ["Quel élément du sang transporte le dioxygène ?", "Les globules rouges", "Les globules blancs", "Les plaquettes", "Le plasma seul", "Grâce à l'hémoglobine qu'ils contiennent."],
          ["Quel est le rôle des globules blancs ?", "Défendre l'organisme contre les microbes", "Transporter le dioxygène", "Coaguler le sang", "Digérer les aliments", "Les leucocytes attaquent les microbes (phagocytose, anticorps)."],
          ["Les plaquettes servent à :", "la coagulation du sang", "la respiration", "la digestion", "la vision", "Elles forment un « bouchon » qui arrête le saignement."],
          ["Le liquide jaunâtre du sang s'appelle :", "le plasma", "la lymphe", "la bile", "l'hémoglobine", "Le plasma transporte les nutriments, les déchets et les anticorps."],
          ["Comment appelle-t-on aussi les globules rouges ?", "Les hématies", "Les leucocytes", "Les thrombocytes", "Les neurones", "Hématies = globules rouges ; leucocytes = globules blancs."],
          ["Quel pigment rouge fixe le dioxygène ?", "L'hémoglobine", "La chlorophylle", "La mélanine", "La bile", "L'hémoglobine contient du fer."],
          ["Parmi ces rôles, lequel n'est PAS un rôle du sang ?", "Digérer les aliments", "Transporter les nutriments", "Défendre l'organisme", "Répartir la chaleur", "La digestion se fait dans le tube digestif, pas dans le sang."],
          ["Un manque de globules rouges ou d'hémoglobine s'appelle :", "une anémie", "une hémorragie", "une infection", "un diabète", "L'anémie donne fatigue et pâleur ; le paludisme en est une cause fréquente."],
          ["Le sang transporte le CO₂ :", "des organes vers les poumons", "des poumons vers les organes", "vers l'estomac", "il ne le transporte pas", "Le CO₂ produit par les cellules est rejeté au niveau des poumons."],
          ["Quel examen compte les cellules du sang ?", "La numération formule sanguine (hémogramme)", "La radiographie", "L'échographie", "Le test de grossesse", "L'hémogramme donne le nombre de globules rouges, blancs et plaquettes."]
        ] },
      { id: "svt-transfusion", titre: "La transfusion sanguine", theme: "La nutrition chez l'Homme",
        cours: rg("Groupes sanguins ABO", "Groupe A (antigène A), B (antigène B), AB (A et B), O (aucun). Le plasma contient les anticorps contre les antigènes absents : groupe A → anti-B ; B → anti-A ; O → anti-A et anti-B ; AB → aucun.") +
          rg("Règle", "On ne doit pas apporter au receveur un antigène contre lequel son plasma a des anticorps : sinon <b>agglutination</b> des hématies (accident grave).") +
          rg("Donneur et receveur universels", "<b>O</b> : donneur universel (pas d'antigène). <b>AB</b> : receveur universel (pas d'anticorps). En tenant compte du Rhésus : O− donneur universel, AB+ receveur universel.") +
          rg("Rhésus", "Rh+ si l'antigène D est présent, Rh− sinon. Un Rh− ne doit recevoir que du Rh−.") +
          rg("Le don de sang", "Geste gratuit et volontaire, organisé en Côte d'Ivoire par le <b>CNTS</b> (Centre national de transfusion sanguine)."),
        qs: [
          ["Quel groupe est donneur universel (système ABO) ?", "O", "AB", "A", "B", "Les hématies du groupe O ne portent ni antigène A ni antigène B."],
          ["Quel groupe est receveur universel (système ABO) ?", "AB", "O", "A", "B", "Le plasma AB ne contient ni anti-A ni anti-B."],
          ["Le plasma d'une personne du groupe A contient :", "des anticorps anti-B", "des anticorps anti-A", "anti-A et anti-B", "aucun anticorps", "On n'a pas d'anticorps contre ses propres antigènes."],
          ["Que se passe-t-il en cas de transfusion incompatible ?", "Les hématies s'agglutinent", "Rien du tout", "Le sang devient bleu", "Le receveur guérit plus vite", "L'agglutination bouche les vaisseaux : c'est un accident grave."],
          ["Une personne du groupe B peut recevoir du sang :", "B ou O", "A ou AB", "AB seulement", "de tous les groupes", "B reçoit de B et de O (règle ABO, même Rhésus)."],
          ["Une personne O Rh− peut recevoir du sang :", "O Rh− seulement", "de tout le monde", "AB Rh+", "A Rh+", "O− n'a ni antigène A, ni B, ni D : il ne peut recevoir que du O−."],
          ["Qui organise le don de sang en Côte d'Ivoire ?", "Le CNTS", "La SODECI", "La CIE", "Le BNETD", "Centre national de transfusion sanguine."],
          ["Les antigènes A et B se trouvent :", "à la surface des globules rouges", "dans le plasma", "dans les plaquettes", "dans l'estomac", "Les anticorps, eux, sont dans le plasma."],
          ["Pourquoi donner son sang ?", "Pour sauver des vies (accidents, accouchements, anémies)", "Pour gagner de l'argent", "Pour maigrir", "Ce n'est pas utile", "Le sang ne se fabrique pas en usine : seul le don permet de soigner."],
          ["Une personne Rh− a :", "des hématies sans antigène D", "des hématies avec l'antigène D", "un sang sans globules", "le groupe AB forcément", "Rh+ : antigène D présent ; Rh− : absent."]
        ] },
      { id: "svt-circulation", titre: "La circulation sanguine", theme: "La nutrition chez l'Homme",
        cours: rg("Le cœur", "Muscle creux à <b>4 cavités</b> : 2 oreillettes (en haut) et 2 ventricules (en bas). Cœur droit : sang pauvre en O₂. Cœur gauche : sang riche en O₂. Les <b>valvules</b> empêchent le sang de revenir en arrière.") +
          rg("Vaisseaux", "<b>Artères</b> : partent du cœur. <b>Veines</b> : reviennent au cœur. <b>Capillaires</b> : très fins, lieu des échanges avec les cellules.") +
          rg("Grande circulation", "Ventricule gauche → aorte → organes → veines caves → oreillette droite.") +
          rg("Petite circulation (pulmonaire)", "Ventricule droit → artère pulmonaire → poumons (le sang se charge en O₂) → veines pulmonaires → oreillette gauche.") +
          rg("Hygiène", "Sport régulier, peu de sel et de graisses, pas de tabac : prévient l'hypertension et les maladies du cœur."),
        qs: [
          ["Combien de cavités possède le cœur ?", "4", "2", "3", "6", "Deux oreillettes et deux ventricules."],
          ["Les vaisseaux qui partent du cœur s'appellent :", "les artères", "les veines", "les capillaires", "les nerfs", "Les veines ramènent le sang vers le cœur."],
          ["Le sang riche en dioxygène se trouve dans :", "le cœur gauche", "le cœur droit", "les veines caves", "l'artère pulmonaire", "Il revient des poumons par les veines pulmonaires dans l'oreillette gauche."],
          ["Quelle artère part du ventricule gauche ?", "L'aorte", "L'artère pulmonaire", "La veine cave", "La carotide seulement", "L'aorte distribue le sang oxygéné à tout le corps."],
          ["La petite circulation conduit le sang :", "du cœur aux poumons et retour", "du cœur au cerveau", "des pieds à la tête", "de l'estomac au foie", "Elle sert à recharger le sang en O₂ et à rejeter le CO₂."],
          ["Le rôle des valvules est :", "d'empêcher le sang de refluer", "de fabriquer le sang", "de filtrer le sang", "de coaguler le sang", "Le sang circule dans un seul sens."],
          ["Où se font les échanges entre le sang et les cellules ?", "Dans les capillaires", "Dans l'aorte", "Dans les oreillettes", "Dans les valvules", "Leur paroi très fine laisse passer O₂, nutriments et déchets."],
          ["Le sang arrive dans l'oreillette droite par :", "les veines caves", "l'aorte", "les veines pulmonaires", "l'artère pulmonaire", "Les veines caves ramènent le sang pauvre en O₂ du corps."],
          ["Lequel de ces gestes protège le cœur ?", "Faire du sport et manger peu salé", "Fumer", "Manger beaucoup de fritures", "Rester assis toute la journée", "Le sport renforce le cœur ; l'excès de sel favorise l'hypertension."],
          ["Le pouls que l'on sent au poignet correspond :", "aux battements du cœur transmis dans une artère", "à la respiration", "à la digestion", "à un nerf", "Chaque contraction du ventricule envoie une onde dans les artères."]
        ] },
      { id: "svt-grossesse", titre: "Les grossesses précoces et leur prévention", theme: "La reproduction humaine et le VIH",
        cours: rg("Définition", "Grossesse qui survient chez une adolescente, avant que son corps et sa vie soient prêts (en général avant 18 ans).") +
          rg("Le cycle", "Chez la femme, un cycle dure environ 28 jours ; l'<b>ovulation</b> a lieu vers le 14e jour. La fécondation (rencontre d'un spermatozoïde et d'un ovule) peut survenir lors d'un seul rapport.") +
          rg("Risques", "Accouchement difficile, fistule obstétricale, avortement clandestin (danger de mort), abandon scolaire, pauvreté, rejet familial.") +
          rg("Prévention", "Abstinence, report des premiers rapports, dialogue avec les parents, méthodes contraceptives (préservatif, pilule…) conseillées par un centre de santé. Le préservatif protège aussi du VIH et des IST.") +
          rg("En Côte d'Ivoire", "Des milliers de cas chaque année (4 266 en 2024-2025 selon le ministère). Une élève enceinte peut bénéficier d'un report de scolarité pour revenir à l'école."),
        qs: [
          ["Vers quel jour d'un cycle de 28 jours a lieu l'ovulation ?", "Vers le 14e jour", "Le 1er jour", "Le 28e jour", "Chaque jour", "La période la plus féconde est autour de l'ovulation."],
          ["Un seul rapport sexuel non protégé peut-il entraîner une grossesse ?", "Oui", "Non, jamais", "Seulement après 25 ans", "Seulement le 1er jour du cycle", "Un seul rapport suffit s'il a lieu en période féconde."],
          ["Quelle méthode protège à la fois de la grossesse et du VIH ?", "Le préservatif", "La pilule", "Le calcul des jours", "Aucune", "Le préservatif est la seule méthode contraceptive qui protège aussi des IST."],
          ["Lequel est un risque d'une grossesse précoce ?", "L'abandon scolaire", "Une meilleure santé", "Plus de temps pour étudier", "Aucun risque", "Beaucoup de filles enceintes quittent l'école."],
          ["Qu'est-ce que la fécondation ?", "L'union d'un spermatozoïde et d'un ovule", "La naissance du bébé", "Les règles", "L'ovulation", "Elle donne une cellule-œuf qui se développera en embryon."],
          ["L'avortement clandestin est dangereux car :", "il peut provoquer hémorragies, infections et la mort", "il est sans risque", "il est toujours légal", "il protège du VIH", "Il est pratiqué sans conditions médicales."],
          ["Que permet le « report de scolarité » ?", "Revenir à l'école après une grossesse", "Ne plus aller à l'école", "Passer en classe supérieure sans examen", "Changer de pays", "Mesure du ministère depuis 2019."],
          ["La meilleure prévention pour une élève de 3e est :", "l'abstinence ou le report des premiers rapports", "écouter les rumeurs", "l'automédication", "attendre la chance", "C'est la méthode la plus sûre à cet âge."],
          ["Où obtenir des conseils fiables sur la contraception ?", "Dans un centre de santé ou auprès d'un agent de santé", "Chez le vendeur de rue", "Sur des rumeurs", "Nulle part", "Les professionnels de santé donnent des conseils adaptés et confidentiels."],
          ["La fistule obstétricale est :", "une lésion grave due à un accouchement très difficile", "une vitamine", "un vaccin", "un moyen de contraception", "Les adolescentes y sont plus exposées car leur bassin n'est pas encore mature."]
        ] },
      { id: "svt-vih", titre: "L'infection au VIH", theme: "La reproduction humaine et le VIH",
        cours: rg("Le virus", "Le <b>VIH</b> (virus de l'immunodéficience humaine) détruit les <b>lymphocytes T4</b> (globules blancs) qui dirigent la défense du corps. Le <b>sida</b> est le stade avancé : les maladies opportunistes s'installent.") +
          rg("Transmission", "Voie <b>sexuelle</b> (rapports non protégés), voie <b>sanguine</b> (objets souillés, sang contaminé), de la <b>mère à l'enfant</b> (grossesse, accouchement, allaitement).") +
          rg("Pas de transmission par", "la poignée de main, les moustiques, les toilettes, le partage des repas, la salive, les accolades.") +
          rg("Dépistage et traitement", "Test sanguin <b>gratuit, volontaire et confidentiel</b>. Les <b>ARV</b> (antirétroviraux) ne guérissent pas mais permettent une vie normale.") +
          rg("Prévention", "Abstinence, fidélité, préservatif, ne pas partager lames et aiguilles, PTME (prévention de la transmission mère-enfant)."),
        qs: [
          ["Quelles cellules le VIH détruit-il ?", "Les lymphocytes T4", "Les globules rouges", "Les neurones", "Les cellules de la peau", "Ces globules blancs coordonnent la défense de l'organisme."],
          ["Que signifie « VIH » ?", "Virus de l'immunodéficience humaine", "Virus de l'infection hépatique", "Vaccin international humain", "Virus intestinal humain", "Il affaiblit le système immunitaire."],
          ["Le VIH se transmet-il par une piqûre de moustique ?", "Non", "Oui", "Seulement la nuit", "Seulement en saison des pluies", "Le virus ne survit pas et ne se multiplie pas dans le moustique."],
          ["Lequel est un mode de transmission du VIH ?", "Un rapport sexuel non protégé", "Une poignée de main", "Partager un repas", "Une accolade", "Les trois autres ne transmettent pas le VIH."],
          ["Les ARV permettent :", "de vivre normalement en contrôlant le virus", "de guérir définitivement", "de vacciner contre le VIH", "de transmettre le virus", "Il n'existe pas encore de guérison ni de vaccin."],
          ["Le dépistage du VIH est :", "gratuit, volontaire et confidentiel", "payant et obligatoire", "affiché publiquement", "interdit aux jeunes", "Connaître son statut permet d'être soigné tôt."],
          ["Qu'est-ce que la PTME ?", "La prévention de la transmission du VIH de la mère à l'enfant", "Un vaccin", "Un test de grossesse", "Un sport", "Avec les ARV, une mère séropositive peut avoir un bébé non infecté."],
          ["Le sida est :", "le stade avancé de l'infection au VIH", "une autre maladie sans lien", "un vaccin", "une vitamine", "Le corps ne se défend plus contre les maladies opportunistes."],
          ["Partager une lame de rasoir peut transmettre le VIH car :", "elle peut contenir du sang contaminé", "elle est coupante", "elle est en métal", "c'est faux", "C'est la voie sanguine."],
          ["Face à une personne vivant avec le VIH, il faut :", "la soutenir et ne pas la discriminer", "l'éviter", "se moquer d'elle", "refuser de lui parler", "La stigmatisation empêche les gens de se faire dépister et soigner."]
        ] },
      { id: "svt-sol", titre: "Les caractéristiques d'un sol", theme: "Les relations entre les sols et les plantes",
        cours: rg("Constituants", "<b>Minéraux</b> : cailloux, graviers, sable, limon, argile. <b>Organiques</b> : humus (matière organique décomposée), êtres vivants (vers de terre, bactéries). Plus de l'<b>eau</b> et de l'<b>air</b>.") +
          rg("Profil du sol", "Couches superposées appelées <b>horizons</b> : en haut l'horizon humifère (sombre, riche en humus), puis les horizons minéraux, puis la <b>roche-mère</b>.") +
          rg("Texture", "Proportion de sable, limon et argile. Sol sableux : léger, <b>très perméable</b>, pauvre. Sol argileux : lourd, <b>peu perméable</b>, retient l'eau.") +
          rg("Complexe argilo-humique", "Association argile + humus qui retient l'eau et les sels minéraux : c'est lui qui rend le sol fertile."),
        qs: [
          ["La matière organique décomposée du sol s'appelle :", "l'humus", "l'argile", "le sable", "la roche-mère", "Elle vient des feuilles mortes, des cadavres et des excréments décomposés."],
          ["Quel sol laisse passer l'eau le plus vite ?", "Le sol sableux", "Le sol argileux", "Un sol compact", "Tous pareil", "Les grains de sable laissent de grands espaces entre eux."],
          ["Les couches d'un sol s'appellent des :", "horizons", "strates de nuages", "roches", "racines", "L'ensemble des horizons forme le profil du sol."],
          ["Tout en bas du profil du sol, on trouve :", "la roche-mère", "l'humus", "les feuilles mortes", "l'horizon humifère", "Le sol se forme à partir de l'altération de la roche-mère."],
          ["Le complexe argilo-humique est formé :", "d'argile et d'humus", "de sable et d'eau", "de cailloux et d'air", "de racines", "Il retient les sels minéraux et l'eau utiles aux plantes."],
          ["Lequel est un constituant minéral du sol ?", "Le sable", "L'humus", "Le ver de terre", "La feuille morte", "Le sable provient de la dégradation des roches."],
          ["Un sol argileux est :", "peu perméable et retient l'eau", "très perméable", "sans eau", "sans minéraux", "L'argile est formée de particules très fines."],
          ["Quel rôle jouent les vers de terre ?", "Ils aèrent le sol et le mélangent", "Ils détruisent le sol", "Ils mangent les racines", "Aucun", "Ils creusent des galeries et participent à la formation de l'humus."],
          ["Que contient aussi un sol, en plus des éléments solides ?", "De l'eau et de l'air", "Du pétrole", "Du sucre", "Rien", "L'air et l'eau occupent les espaces entre les particules."],
          ["La couleur sombre de l'horizon supérieur est due :", "à l'humus", "au sable", "à la roche-mère", "au soleil", "Plus un sol est riche en humus, plus il est foncé."]
        ] },
      { id: "svt-sol-plantes", titre: "Les relations sols-plantes", theme: "Les relations entre les sols et les plantes",
        cours: rg("Ce que la plante prend au sol", "De l'<b>eau</b> et des <b>sels minéraux</b> (azote N, phosphore P, potassium K…), absorbés par les <b>poils absorbants</b> des racines.") +
          rg("La sève brute", "Eau + sels minéraux, elle monte des racines vers les feuilles par les vaisseaux du bois.") +
          rg("Ce que la plante donne au sol", "Feuilles mortes et racines qui deviennent de l'<b>humus</b> ; les racines retiennent le sol contre l'érosion. Les légumineuses (arachide, haricot) enrichissent le sol en azote grâce à leurs <b>nodosités</b>.") +
          rg("Photosynthèse", "Avec la lumière, la chlorophylle, l'eau et le CO₂, la feuille fabrique de la matière organique et rejette du dioxygène."),
        qs: [
          ["Quelle partie de la racine absorbe l'eau et les sels minéraux ?", "Les poils absorbants", "La coiffe", "La tige", "Les feuilles", "Ils sont situés près de l'extrémité des racines."],
          ["La sève brute est composée :", "d'eau et de sels minéraux", "de sucre", "de chlorophylle", "d'humus", "Elle monte des racines vers les feuilles."],
          ["Les lettres N, P, K désignent :", "l'azote, le phosphore et le potassium", "trois vitamines", "trois roches", "trois maladies", "Ce sont les principaux éléments des engrais."],
          ["Quelles plantes enrichissent le sol en azote ?", "Les légumineuses (arachide, haricot, soja)", "Le cacaoyer", "Le palmier", "Toutes les graminées", "Des bactéries de leurs nodosités fixent l'azote de l'air."],
          ["Comment les plantes protègent-elles le sol ?", "Leurs racines le retiennent contre l'érosion", "Elles l'assèchent totalement", "Elles le rendent stérile", "Elles ne jouent aucun rôle", "Un sol nu est emporté par la pluie et le vent."],
          ["La photosynthèse rejette :", "du dioxygène", "du dioxyde de carbone", "de l'azote", "de l'humus", "La plante utilise le CO₂ et rejette l'O₂."],
          ["D'où vient l'humus d'une forêt ?", "Des feuilles mortes et débris décomposés", "Du sable", "Des engrais chimiques seulement", "De la roche-mère", "Les décomposeurs (bactéries, champignons) transforment la litière."],
          ["Une plante qui manque d'eau :", "flétrit (se fane)", "grandit plus vite", "devient rouge", "ne change pas", "L'eau maintient les cellules gonflées."],
          ["Pourquoi un sol pauvre donne-t-il de mauvaises récoltes ?", "Il manque de sels minéraux pour les plantes", "Il a trop d'humus", "Il est trop fertile", "Les plantes n'ont pas besoin du sol", "Les plantes y trouvent peu d'éléments nutritifs."],
          ["La chlorophylle se trouve surtout dans :", "les feuilles", "les racines", "les fleurs fanées", "le sol", "C'est le pigment vert qui capte la lumière."]
        ] },
      { id: "svt-degradation", titre: "La dégradation des sols", theme: "Dégradation, protection et amélioration des sols",
        cours: rg("L'érosion", "Arrachement et transport du sol par l'eau de pluie (érosion hydrique) ou le vent (érosion éolienne). Elle est forte sur les sols nus et en pente.") +
          rg("Causes humaines", "Déforestation, feux de brousse, culture sur brûlis, surpâturage, monoculture, orpaillage clandestin, usage excessif de pesticides et d'engrais, déchets plastiques.") +
          rg("Autres phénomènes", "<b>Lessivage</b> : l'eau entraîne les sels minéraux en profondeur. <b>Latéritisation</b> : formation d'une croûte dure (cuirasse).") +
          rg("Conséquences", "Baisse des rendements, famine, désertification, inondations, pollution des cours d'eau."),
        qs: [
          ["L'érosion hydrique est causée par :", "l'eau de pluie", "le vent", "le soleil", "les engrais", "L'eau de ruissellement emporte la terre, surtout sur les pentes."],
          ["Lequel est une cause humaine de dégradation des sols ?", "Les feux de brousse", "Les vers de terre", "L'humus", "Les haies", "Le feu détruit la végétation et l'humus, et laisse le sol nu."],
          ["Le lessivage d'un sol, c'est :", "l'entraînement des sels minéraux en profondeur par l'eau", "le lavage des vêtements", "l'ajout d'engrais", "la formation d'humus", "Les racines ne peuvent plus atteindre ces éléments."],
          ["Pourquoi un sol nu s'érode-t-il plus ?", "Aucune racine ni végétation ne le protège", "Il est plus riche", "Il est plus humide", "C'est faux", "La végétation freine l'eau et retient la terre."],
          ["L'orpaillage clandestin dégrade les sols car :", "il creuse des trous et pollue au mercure", "il plante des arbres", "il ajoute de l'humus", "il protège la forêt", "Il détruit aussi les terres agricoles et les rivières."],
          ["Le surpâturage, c'est :", "trop d'animaux qui broutent sur une même surface", "le manque d'animaux", "la plantation d'arbres", "l'irrigation", "La végétation n'a pas le temps de repousser."],
          ["La monoculture épuise le sol car :", "la même plante prélève toujours les mêmes sels minéraux", "elle enrichit le sol", "elle attire les vers", "elle empêche l'érosion", "La rotation des cultures évite cet épuisement."],
          ["Une conséquence de la dégradation des sols est :", "la baisse des récoltes", "l'augmentation de la fertilité", "plus de forêts", "moins d'inondations", "Un sol dégradé nourrit mal les plantes."],
          ["La culture sur brûlis consiste à :", "brûler la végétation avant de cultiver", "arroser le champ", "mettre du compost", "planter des arbres", "Pratique ancienne qui appauvrit le sol si elle est répétée."],
          ["La désertification, c'est :", "la transformation progressive d'une zone en désert", "la création d'un parc", "une saison des pluies", "le reboisement", "Elle menace le nord de l'Afrique de l'Ouest."]
        ] },
      { id: "svt-protection", titre: "La protection et l'amélioration des sols", theme: "Dégradation, protection et amélioration des sols",
        cours: rg("Protéger", "Reboisement, lutte contre les feux (pare-feu), haies brise-vent, cultures en terrasses ou selon les courbes de niveau sur les pentes, paillage, agroforesterie.") +
          rg("Améliorer", "<b>Engrais organiques</b> : fumier, compost, engrais verts. <b>Engrais chimiques</b> (NPK) en dose raisonnable. <b>Chaulage</b> pour corriger un sol trop acide.") +
          rg("Pratiques culturales", "<b>Jachère</b> (laisser le sol se reposer), <b>rotation</b> et <b>association</b> des cultures (maïs + légumineuses).") +
          rg("En Côte d'Ivoire", "Programme Net-Zéro Nature-Positive (2026) : 1,5 million d'hectares à reboiser."),
        qs: [
          ["Qu'est-ce que la jachère ?", "Laisser une terre se reposer sans culture", "Brûler un champ", "Arroser tous les jours", "Couper les arbres", "Le sol reconstitue sa fertilité naturellement."],
          ["Le compost est :", "un engrais organique fait de déchets végétaux décomposés", "un pesticide", "un engrais chimique", "une roche", "Il apporte de l'humus et des sels minéraux."],
          ["Sur une pente, on limite l'érosion en cultivant :", "en terrasses ou selon les courbes de niveau", "dans le sens de la pente", "sans aucune plante", "après un feu", "Les terrasses freinent le ruissellement."],
          ["La rotation des cultures consiste à :", "changer de culture d'une saison à l'autre sur le même champ", "cultiver toujours la même plante", "tourner autour du champ", "brûler le champ", "Chaque plante prélève des éléments différents."],
          ["Le chaulage sert à :", "corriger l'acidité d'un sol", "tuer les vers de terre", "remplacer l'eau", "fabriquer du plastique", "On apporte de la chaux (calcaire)."],
          ["Les haies brise-vent protègent contre :", "l'érosion éolienne", "le paludisme", "les inondations en ville", "la photosynthèse", "Elles réduisent la force du vent au ras du sol."],
          ["L'agroforesterie, c'est :", "associer des arbres aux cultures (par exemple cacao sous ombrage)", "couper toute la forêt", "cultiver sans sol", "élever des poissons", "Les arbres protègent et enrichissent le sol."],
          ["Pourquoi éviter l'excès d'engrais chimiques ?", "Il pollue les sols et les eaux", "Il n'a aucun effet", "Il rend le sol trop riche en humus", "Il est gratuit", "Il faut respecter les doses conseillées."],
          ["Le paillage consiste à :", "couvrir le sol de paille ou de feuilles", "brûler la paille", "enlever toute végétation", "creuser le sol", "Il garde l'humidité et protège de l'érosion."],
          ["Associer maïs et haricot sur un même champ est utile car :", "le haricot enrichit le sol en azote", "le maïs tue le haricot", "cela épuise le sol", "c'est interdit", "C'est l'association des cultures."]
        ] }
    ] };

  // ---------- Physique-Chimie : exercices de calcul ----------
  const PCG = {
    poids() {
      const m = parmi([0.5, 2, 5, 12, 25, 50, 60, 75]);
      return { comp: "pc-calcul", enonce: `Calcule le poids (en N) d'un objet de masse ${dec(m)} kg. On prend g = 10 N/kg.`, type: "nombre", reponse: m * 10, affiche: dec(m * 10) + " N",
        explication: `P = m × g = ${dec(m)} × 10 = <b>${dec(m * 10)} N</b>. La masse s'exprime en kg, le poids en newtons (N).` };
    },
    masse() {
      const P = parmi([20, 150, 400, 650, 800]);
      return { comp: "pc-calcul", enonce: `Un corps a un poids de ${P} N. Quelle est sa masse (en kg) ? g = 10 N/kg.`, type: "nombre", reponse: P / 10, affiche: dec(P / 10) + " kg",
        explication: `m = ${fr("P", "g")} = ${fr(P, 10)} = <b>${dec(P / 10)} kg</b>.` };
    },
    travail() {
      const F = parmi([20, 50, 100, 150, 200]), L = parmi([2, 3, 5, 10, 12]);
      return { comp: "pc-calcul", enonce: `Une force constante de ${F} N déplace son point d'application de ${L} m dans sa direction et son sens. Calcule son travail (en J).`, type: "nombre", reponse: F * L, affiche: F * L + " J",
        explication: `W = F × L = ${F} × ${L} = <b>${F * L} J</b> (joules).` };
    },
    puissanceMeca() {
      const W = parmi([600, 1200, 3000, 4500]), t = parmi([2, 3, 5, 10, 15]);
      if (!Number.isInteger(W / t * 10)) return PCG.puissanceMeca();
      return { comp: "pc-calcul", enonce: `Un moteur effectue un travail de ${W} J en ${t} s. Calcule sa puissance (en W).`, type: "nombre", reponse: W / t, affiche: dec(W / t) + " W",
        explication: `P = ${fr("W", "t")} = ${fr(W, t)} = <b>${dec(W / t)} W</b> (watts).` };
    },
    energiePot() {
      const m = parmi([2, 5, 10, 20]), h = parmi([3, 5, 8, 10, 12]);
      return { comp: "pc-calcul", enonce: `Un sac de ${m} kg est posé sur un mur à ${h} m du sol. Calcule son énergie potentielle de pesanteur (sol = référence, g = 10 N/kg).`, type: "nombre", reponse: m * 10 * h, affiche: m * 10 * h + " J",
        explication: `Ep = m × g × h = ${m} × 10 × ${h} = <b>${m * 10 * h} J</b>.` };
    },
    energieCin() {
      const m = parmi([2, 4, 10, 60, 80]), v = parmi([2, 3, 5, 10]);
      return { comp: "pc-calcul", enonce: `Un corps de masse ${m} kg se déplace à ${v} m/s. Calcule son énergie cinétique (en J).`, type: "nombre", reponse: m * v * v / 2, affiche: dec(m * v * v / 2) + " J",
        explication: `Ec = ½ × m × v² = 0,5 × ${m} × ${v}² = <b>${dec(m * v * v / 2)} J</b>.` };
    },
    puissanceElec() {
      const U = parmi([12, 220, 230]), I = parmi([0.5, 2, 5, 10]);
      return { comp: "pc-calcul", enonce: `Un appareil fonctionne sous ${U} V et est traversé par un courant de ${dec(I)} A. Calcule sa puissance (en W).`, type: "nombre", reponse: U * I, affiche: dec(U * I) + " W",
        explication: `P = U × I = ${U} × ${dec(I)} = <b>${dec(U * I)} W</b>.` };
    },
    energieElec() {
      const P = parmi([100, 500, 1000, 1500, 2000]), t = parmi([2, 3, 4, 5]);
      return { comp: "pc-calcul", enonce: `Un fer à repasser de ${P} W fonctionne pendant ${t} h. Calcule l'énergie consommée en kWh.`, type: "nombre", reponse: P * t / 1000, affiche: dec(P * t / 1000) + " kWh",
        explication: `E = P × t = ${P} W × ${t} h = ${P * t} Wh = <b>${dec(P * t / 1000)} kWh</b> (1 kWh = 1 000 Wh).` };
    },
    ohm() {
      const R = parmi([10, 20, 47, 100, 220]), I = parmi([0.1, 0.2, 0.5]), cas = hasard(0, 1);
      const U = Math.round(R * I * 100) / 100;
      return cas ? { comp: "pc-calcul", enonce: `Un conducteur ohmique de résistance ${R} Ω est traversé par un courant de ${dec(I)} A. Calcule la tension U à ses bornes (en V).`, type: "nombre", reponse: U, affiche: dec(U) + " V",
        explication: `Loi d'Ohm : U = R × I = ${R} × ${dec(I)} = <b>${dec(U)} V</b>.` }
        : { comp: "pc-calcul", enonce: `La tension aux bornes d'un conducteur ohmique est ${dec(U)} V et l'intensité ${dec(I)} A. Calcule sa résistance (en Ω).`, type: "nombre", reponse: R, affiche: R + " Ω",
        explication: `R = ${fr("U", "I")} = ${fr(dec(U), dec(I))} = <b>${R} Ω</b>.` };
    },
    serie() {
      const R1 = parmi([10, 22, 47, 100]), R2 = parmi([10, 33, 68, 150]);
      return { comp: "pc-calcul", enonce: `Deux conducteurs ohmiques de ${R1} Ω et ${R2} Ω sont montés en <b>série</b>. Quelle est la résistance équivalente ?`, type: "nombre", reponse: R1 + R2, affiche: (R1 + R2) + " Ω",
        explication: `En série, les résistances s'additionnent : R = R₁ + R₂ = ${R1} + ${R2} = <b>${R1 + R2} Ω</b>.` };
    },
    vergence() {
      const f = parmi([0.1, 0.2, 0.25, 0.5, 0.05]);
      return { comp: "pc-calcul", enonce: `Une lentille convergente a une distance focale de ${dec(f * 100)} cm. Calcule sa vergence (en dioptries).`, type: "nombre", reponse: 1 / f, affiche: dec(1 / f) + " δ",
        explication: `C = ${fr(1, "f")} avec f en <b>mètres</b> : f = ${dec(f)} m, donc C = ${fr(1, dec(f))} = <b>${dec(1 / f)} δ</b>.` };
    },
    electrolyse() {
      const v = parmi([5, 8, 10, 12, 15]);
      return { comp: "pc-calcul", enonce: `Lors de l'électrolyse de l'eau, on recueille ${v} cm³ de dioxygène. Quel volume de dihydrogène obtient-on en même temps ?`, type: "nombre", reponse: 2 * v, affiche: 2 * v + " cm³",
        explication: `Le volume de dihydrogène est le <b>double</b> de celui du dioxygène : 2 × ${v} = <b>${2 * v} cm³</b> (2H₂O → 2H₂ + O₂).` };
    }
  };

  const MAT_PC = { id: "pc", nom: "Physique-Chimie", icone: "⚗", couleur: "#7A4FB5", examen: "Écrit",
    chapitres: [
      { id: "pc-masse", titre: "Masse et poids d'un corps", periode: "Septembre", extra: [PCG.poids, PCG.masse],
        cours: rg("Masse", "Quantité de matière. Unité : le <b>kilogramme (kg)</b>. Se mesure avec une <b>balance</b>. Elle ne change pas avec le lieu.") +
          rg("Poids", "Force d'attraction exercée par la Terre. Unité : le <b>newton (N)</b>. Se mesure avec un <b>dynamomètre</b>. Il varie avec le lieu (plus faible sur la Lune).") +
          rg("Relation", "<b>P = m × g</b> ; g ≈ 9,8 N/kg sur Terre (on prend souvent 10 N/kg). Sur la Lune g ≈ 1,6 N/kg.") +
          rg("Caractéristiques du poids", "Point d'application : centre de gravité. Direction : verticale. Sens : vers le bas."),
        qs: [
          ["Quelle est l'unité du poids ?", "Le newton (N)", "Le kilogramme (kg)", "Le joule (J)", "Le watt (W)", "Le poids est une force : il s'exprime en newtons."],
          ["Avec quel instrument mesure-t-on un poids ?", "Un dynamomètre", "Une balance", "Un thermomètre", "Un voltmètre", "La balance mesure la masse."],
          ["Sur la Lune, la masse d'un astronaute :", "reste la même", "diminue", "augmente", "devient nulle", "La masse ne dépend pas du lieu ; le poids, lui, diminue."],
          ["La direction du poids est :", "verticale", "horizontale", "oblique", "variable", "Le poids est dirigé vers le centre de la Terre, vers le bas."],
          ["Quelle relation lie le poids et la masse ?", "P = m × g", "P = m + g", "m = P × g", "P = g ÷ m", "g est l'intensité de la pesanteur, en N/kg."],
          ["Le point d'application du poids est :", "le centre de gravité", "le point le plus haut", "le sol", "le dynamomètre", "Noté G."],
          ["Sur la Lune, le poids d'un objet est :", "environ 6 fois plus petit que sur Terre", "le même", "plus grand", "nul", "g ≈ 1,6 N/kg sur la Lune contre 9,8 N/kg sur Terre."],
          ["L'unité de g est :", "le newton par kilogramme (N/kg)", "le mètre", "le kilogramme", "le watt", "g = P / m."]
        ] },
      { id: "pc-forces", titre: "Les forces", periode: "Septembre",
        cours: rg("Définition", "Une force modélise une <b>action mécanique</b> capable de mettre un corps en mouvement, de modifier son mouvement ou de le déformer.") +
          rg("Caractéristiques", "<b>Point d'application</b>, <b>direction</b> (droite d'action), <b>sens</b>, <b>intensité</b> (en newtons).") +
          rg("Représentation", "Par un <b>vecteur</b> (flèche) dont la longueur est proportionnelle à l'intensité, selon une échelle (par exemple 1 cm pour 10 N).") +
          rg("Types", "Forces de <b>contact</b> (poussée, tension d'un fil, réaction d'un support) et forces <b>à distance</b> (poids, force magnétique, force électrique)."),
        qs: [
          ["Combien de caractéristiques a une force ?", "4", "2", "3", "5", "Point d'application, direction, sens et intensité."],
          ["Le poids est une force :", "à distance", "de contact", "nulle", "magnétique", "La Terre attire les objets sans les toucher."],
          ["La tension d'un fil est une force :", "de contact", "à distance", "magnétique", "électrique", "Le fil touche l'objet qu'il retient."],
          ["À l'échelle 1 cm pour 10 N, une force de 35 N est représentée par une flèche de :", "3,5 cm", "35 cm", "0,35 cm", "10 cm", "35 ÷ 10 = 3,5 cm."],
          ["L'intensité d'une force se mesure avec :", "un dynamomètre", "une règle", "une balance", "un ampèremètre", "Unité : le newton."],
          ["Lequel n'est PAS un effet d'une force ?", "Changer la couleur d'un objet", "Mettre un objet en mouvement", "Déformer un objet", "Modifier une trajectoire", "Une force agit sur le mouvement ou la forme."],
          ["L'attraction d'un aimant sur un clou est une force :", "à distance", "de contact", "de frottement", "nulle", "L'aimant agit sans toucher le clou."],
          ["On représente une force par :", "un vecteur (une flèche)", "un cercle", "un point seul", "un carré", "La flèche montre la direction, le sens et l'intensité."]
        ] },
      { id: "pc-equilibre", titre: "Équilibre d'un solide soumis à deux forces", periode: "Octobre",
        cours: rg("Condition d'équilibre", "Un solide soumis à deux forces F₁ et F₂ est en équilibre si ces forces ont : la <b>même droite d'action</b>, des <b>sens contraires</b>, la <b>même intensité</b>. On écrit F₁⃗ + F₂⃗ = 0⃗.") +
          rg("Exemple", "Une lampe suspendue à un fil : la tension du fil compense exactement le poids de la lampe (T = P).") +
          rg("Objet posé sur une table", "La réaction de la table compense le poids."),
        qs: [
          ["Un solide soumis à deux forces est en équilibre si les forces ont :", "même droite d'action, sens contraires, même intensité", "même sens et même intensité", "des directions perpendiculaires", "des intensités différentes", "Elles se compensent : F₁⃗ + F₂⃗ = 0⃗."],
          ["Une lampe de poids 8 N est suspendue à un fil, immobile. La tension du fil vaut :", "8 N", "0 N", "16 N", "4 N", "À l'équilibre, T = P."],
          ["La somme vectorielle de deux forces qui se compensent est :", "le vecteur nul", "le double d'une force", "le poids", "impossible à calculer", "F₁⃗ + F₂⃗ = 0⃗."],
          ["Un livre posé sur une table est en équilibre sous l'action :", "de son poids et de la réaction de la table", "de son poids seulement", "d'aucune force", "de la tension d'un fil", "La table exerce une force verticale vers le haut."],
          ["Si deux forces ont la même intensité et le même sens, le solide :", "n'est pas en équilibre", "est en équilibre", "flotte", "disparaît", "Elles doivent être de sens contraires."],
          ["La tension d'un fil qui retient un objet est dirigée :", "le long du fil, vers le point d'attache", "vers le bas", "horizontalement", "au hasard", "Pour un objet suspendu, elle est verticale vers le haut."],
          ["Un objet de masse 2 kg est suspendu et immobile. La tension du fil vaut (g = 10 N/kg) :", "20 N", "2 N", "0,2 N", "12 N", "P = m × g = 20 N et T = P."],
          ["Deux forces qui se compensent ont forcément :", "la même droite d'action", "des points d'application très éloignés", "des intensités différentes", "le même sens", "C'est une des trois conditions."]
        ] },
      { id: "pc-travail", titre: "Travail et puissance mécaniques", periode: "Octobre", extra: [PCG.travail, PCG.puissanceMeca],
        cours: rg("Travail d'une force", "Une force travaille si son point d'application se déplace. Si la force est parallèle au déplacement : <b>W = F × L</b> (joules, J).") +
          rg("Travail du poids", "W = m × g × h, où h est la hauteur de chute. Si la force est perpendiculaire au déplacement, son travail est nul.") +
          rg("Travail moteur ou résistant", "Moteur (positif) si la force favorise le déplacement ; résistant (négatif) si elle s'y oppose (frottements).") +
          rg("Puissance", "<b>P = W / t</b> en watts (W) ; 1 kW = 1 000 W."),
        qs: [
          ["L'unité du travail est :", "le joule (J)", "le watt (W)", "le newton (N)", "le volt (V)", "W = F × L : newtons × mètres = joules."],
          ["La puissance mécanique se calcule par :", "P = W / t", "P = W × t", "P = F / L", "P = m × g", "Plus on fait un travail vite, plus la puissance est grande."],
          ["Le travail d'une force perpendiculaire au déplacement est :", "nul", "maximal", "toujours négatif", "égal à F", "Elle ne fait ni avancer ni freiner l'objet."],
          ["Les frottements effectuent un travail :", "résistant", "moteur", "nul", "infini", "Ils s'opposent au mouvement."],
          ["1 kilowatt vaut :", "1 000 W", "100 W", "10 W", "1 000 000 W", "Préfixe kilo = mille."],
          ["Un porteur soulève un colis : le travail de la force du porteur est :", "moteur", "résistant", "nul", "négatif", "Sa force est dans le sens du déplacement (vers le haut)."],
          ["Deux machines font le même travail ; la plus puissante est celle qui :", "le fait en moins de temps", "le fait en plus de temps", "est la plus lourde", "est la plus bruyante", "P = W / t."],
          ["Le travail du poids d'un objet qui tombe d'une hauteur h vaut :", "m × g × h", "m + g + h", "m × h", "g × h", "Il est moteur pendant la chute."]
        ] },
      { id: "pc-energie", titre: "Énergie mécanique", periode: "Octobre", extra: [PCG.energieCin, PCG.energiePot],
        cours: rg("Énergie cinétique", "Énergie liée à la vitesse : <b>Ec = ½ m v²</b> (m en kg, v en m/s, Ec en J).") +
          rg("Énergie potentielle de pesanteur", "Énergie liée à la hauteur : <b>Ep = m g h</b>.") +
          rg("Énergie mécanique", "<b>Em = Ec + Ep</b>. Sans frottements, elle se conserve : quand un objet tombe, Ep diminue et Ec augmente d'autant.") +
          rg("Conversions", "Barrage (Kossou, Soubré) : l'énergie potentielle de l'eau devient cinétique, puis électrique."),
        qs: [
          ["L'énergie cinétique dépend :", "de la masse et de la vitesse", "de la hauteur seulement", "de la couleur", "de la température seulement", "Ec = ½ m v²."],
          ["Si la vitesse double, l'énergie cinétique est :", "multipliée par 4", "multipliée par 2", "divisée par 2", "inchangée", "v² : (2v)² = 4v²."],
          ["L'énergie potentielle de pesanteur dépend :", "de la masse et de la hauteur", "de la vitesse seulement", "du volume", "de la forme", "Ep = m g h."],
          ["L'énergie mécanique est :", "la somme Ec + Ep", "le produit Ec × Ep", "toujours nulle", "la différence Ec − Ep", "Em = Ec + Ep."],
          ["Quand une mangue tombe de l'arbre (sans frottements) :", "Ep diminue et Ec augmente", "Ep augmente et Ec diminue", "les deux augmentent", "rien ne change", "L'énergie potentielle se transforme en énergie cinétique."],
          ["Dans un barrage hydroélectrique, l'énergie potentielle de l'eau devient finalement :", "de l'énergie électrique", "de l'énergie chimique", "de la lumière solaire", "du pétrole", "La chute d'eau fait tourner les turbines."],
          ["L'unité de l'énergie est :", "le joule", "le watt", "le newton", "le mètre", "Comme le travail."],
          ["Un objet immobile au sol (référence) a :", "Ec = 0 et Ep = 0", "Ec maximale", "Ep maximale", "une énergie infinie", "Vitesse nulle et hauteur nulle."]
        ] },
      { id: "pc-electrolyse", titre: "Électrolyse et synthèse de l'eau", periode: "Novembre", extra: [PCG.electrolyse],
        cours: rg("Électrolyse", "Décomposition de l'eau (additionnée de soude) par le courant électrique : <b>dihydrogène H₂</b> à la cathode (borne −) et <b>dioxygène O₂</b> à l'anode (borne +). Volume de H₂ = <b>2 fois</b> celui de O₂.") +
          rg("Équation", "2 H₂O → 2 H₂ + O₂.") +
          rg("Tests", "H₂ : petite détonation à l'approche d'une flamme. O₂ : rallume une bûchette incandescente.") +
          rg("Synthèse", "2 H₂ + O₂ → 2 H₂O. Le mélange est <b>explosif</b> (mélange tonnant) : expérience dangereuse."),
        qs: [
          ["Quel gaz se dégage à la cathode (borne −) ?", "Le dihydrogène", "Le dioxygène", "Le dioxyde de carbone", "L'azote", "C'est aussi le gaz dont le volume est le double."],
          ["Quel gaz rallume une bûchette incandescente ?", "Le dioxygène", "Le dihydrogène", "Le dioxyde de carbone", "La vapeur d'eau", "C'est le test du dioxygène."],
          ["Le volume de dihydrogène obtenu est :", "le double de celui du dioxygène", "égal à celui du dioxygène", "la moitié", "nul", "D'après l'équation 2 H₂O → 2 H₂ + O₂."],
          ["L'équation de l'électrolyse de l'eau est :", "2 H₂O → 2 H₂ + O₂", "H₂O → H₂ + O₂", "2 H₂ + O₂ → 2 H₂O", "H₂O → 2 H + O", "Il faut autant d'atomes de chaque sorte des deux côtés."],
          ["Le test du dihydrogène donne :", "une petite détonation à la flamme", "un précipité blanc", "une coloration bleue", "une odeur de soufre", "Le H₂ brûle très vite avec l'O₂ de l'air."],
          ["Pourquoi ajoute-t-on de la soude à l'eau ?", "Pour qu'elle conduise mieux le courant", "Pour la colorer", "Pour la refroidir", "Pour la rendre potable", "L'eau pure conduit très mal le courant."],
          ["La synthèse de l'eau s'écrit :", "2 H₂ + O₂ → 2 H₂O", "2 H₂O → 2 H₂ + O₂", "H₂ + O → H₂O", "H + O₂ → H₂O", "C'est la réaction inverse de l'électrolyse."],
          ["L'eau est formée :", "d'hydrogène et d'oxygène", "de carbone et d'oxygène", "d'azote et d'hydrogène", "d'un seul élément", "Formule H₂O."]
        ] },
      { id: "pc-alcanes", titre: "Les alcanes", periode: "Novembre – décembre",
        cours: rg("Définition", "Hydrocarbures (carbone + hydrogène) saturés, de formule générale <b>CₙH₂ₙ₊₂</b>.") +
          rg("Les premiers", "Méthane CH₄, éthane C₂H₆, propane C₃H₈, <b>butane C₄H₁₀</b> (gaz des bouteilles de cuisine).") +
          rg("Combustion complète", "Flamme bleue, produit du CO₂ et de l'eau : CH₄ + 2 O₂ → CO₂ + 2 H₂O. Le CO₂ trouble l'<b>eau de chaux</b>.") +
          rg("Combustion incomplète", "Manque de dioxygène : flamme jaune, dépôt de carbone (suie) et <b>monoxyde de carbone CO</b>, gaz très toxique. Toujours aérer la cuisine."),
        qs: [
          ["Quelle est la formule générale des alcanes ?", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙHₙ", "C₂ₙHₙ", "Exemple : n = 4 donne C₄H₁₀."],
          ["Le gaz des bouteilles de cuisine est surtout :", "le butane", "le méthane", "l'oxygène", "l'azote", "Formule C₄H₁₀."],
          ["La formule du méthane est :", "CH₄", "C₂H₆", "C₄H₁₀", "CO₂", "C'est l'alcane le plus simple."],
          ["La combustion complète d'un alcane produit :", "du dioxyde de carbone et de l'eau", "du monoxyde de carbone seulement", "de l'hydrogène", "du sel", "Avec assez de dioxygène."],
          ["Quel réactif met en évidence le CO₂ ?", "L'eau de chaux (elle se trouble)", "L'eau iodée", "Le BBT", "La liqueur de Fehling", "Il se forme un précipité blanc."],
          ["Une flamme jaune qui noircit les casseroles indique :", "une combustion incomplète", "une combustion complète", "l'absence de gaz", "de l'eau", "Il se forme du carbone (suie) et du CO."],
          ["Pourquoi le monoxyde de carbone est-il dangereux ?", "Il est toxique et peut tuer sans être senti", "Il sent très mauvais", "Il est coloré", "Il est inoffensif", "Il empêche le sang de transporter le dioxygène."],
          ["Combien d'atomes d'hydrogène contient le propane (3 atomes de carbone) ?", "8", "6", "3", "10", "2 × 3 + 2 = 8 : C₃H₈."],
          ["Les alcanes sont formés :", "de carbone et d'hydrogène seulement", "de carbone et d'oxygène", "d'azote", "de métaux", "Ce sont des hydrocarbures."],
          ["Le méthane brûle selon : CH₄ + 2 O₂ → …", "CO₂ + 2 H₂O", "C + H₂O", "CO + H₂", "2 CO₂ + H₂O", "L'équation est équilibrée : 1 C, 4 H et 4 O de chaque côté."]
        ] },
      { id: "pc-lentilles", titre: "Les lentilles", periode: "Janvier", extra: [PCG.vergence],
        cours: rg("Deux types", "<b>Convergente</b> : bords minces, concentre la lumière. <b>Divergente</b> : bords épais, disperse la lumière.") +
          rg("Éléments", "Axe optique, centre optique O, <b>foyer image F'</b>, <b>distance focale f</b> = OF'.") +
          rg("Vergence", "<b>C = 1 / f</b> (f en mètres, C en dioptries δ). Positive pour une lentille convergente, négative pour une divergente.") +
          rg("Rayons particuliers (lentille convergente)", "Un rayon passant par O n'est pas dévié. Un rayon parallèle à l'axe ressort en passant par F'. Un rayon passant par F ressort parallèle à l'axe.") +
          rg("Images", "Un objet éloigné donne une image réelle, renversée, que l'on peut voir sur un écran. La loupe est une lentille convergente."),
        qs: [
          ["Une lentille à bords minces est :", "convergente", "divergente", "plane", "opaque", "Elle fait converger les rayons."],
          ["La vergence s'exprime en :", "dioptries (δ)", "mètres", "newtons", "watts", "C = 1/f avec f en mètres."],
          ["Un rayon passant par le centre optique :", "n'est pas dévié", "est réfléchi", "passe par F'", "est absorbé", "C'est un rayon particulier."],
          ["Un rayon parallèle à l'axe optique ressort d'une lentille convergente en passant par :", "le foyer image F'", "le centre optique", "le foyer objet F", "nulle part", "Définition du foyer image."],
          ["La distance focale est la distance entre :", "le centre optique et le foyer image", "deux lentilles", "l'objet et l'écran", "les deux bords", "f = OF'."],
          ["Une loupe est :", "une lentille convergente", "une lentille divergente", "un miroir", "un prisme", "Elle grossit les objets proches."],
          ["La vergence d'une lentille divergente est :", "négative", "positive", "nulle", "infinie", "Par convention."],
          ["L'image d'un objet très éloigné par une lentille convergente se forme :", "au foyer image", "sur la lentille", "à l'infini", "derrière l'objet", "Les rayons arrivent presque parallèles à l'axe."]
        ] },
      { id: "pc-oeil", titre: "Les défauts de l'œil et leurs corrections", periode: "Janvier",
        cours: rg("L'œil normal", "Le cristallin joue le rôle d'une lentille convergente ; l'image se forme sur la <b>rétine</b>. L'<b>accommodation</b> permet de voir net de près comme de loin.") +
          rg("Myopie", "Voit mal <b>de loin</b> : l'image se forme <b>en avant</b> de la rétine (œil trop convergent). Correction : lentille <b>divergente</b>.") +
          rg("Hypermétropie", "Voit mal <b>de près</b> : l'image se forme <b>derrière</b> la rétine (œil pas assez convergent). Correction : lentille <b>convergente</b>.") +
          rg("Presbytie", "Avec l'âge, le cristallin accommode moins bien : on voit mal de près. Correction : lentille convergente (lunettes pour lire).") +
          rg("Astigmatisme", "Cornée irrégulière : vision déformée. Correction : verres spéciaux (cylindriques)."),
        qs: [
          ["Un myope voit mal :", "de loin", "de près", "les couleurs", "la nuit seulement", "L'image des objets éloignés se forme avant la rétine."],
          ["La myopie se corrige avec une lentille :", "divergente", "convergente", "plane", "opaque", "Elle diminue la convergence de l'œil."],
          ["Un hypermétrope voit mal :", "de près", "de loin", "les couleurs", "rien", "L'image se forme derrière la rétine."],
          ["L'hypermétropie se corrige avec une lentille :", "convergente", "divergente", "colorée", "plane", "Elle ajoute de la convergence."],
          ["La presbytie est due :", "à l'âge (le cristallin accommode moins)", "au soleil", "à un microbe", "à la myopie", "Elle apparaît souvent après 40-45 ans."],
          ["Dans l'œil, l'image se forme normalement sur :", "la rétine", "la cornée", "l'iris", "la pupille", "La rétine transforme la lumière en message nerveux."],
          ["Quelle partie de l'œil joue le rôle d'une lentille convergente ?", "Le cristallin", "L'iris", "La rétine", "Le nerf optique", "Il change de forme pour accommoder."],
          ["L'accommodation permet :", "de voir net à différentes distances", "de voir les couleurs", "de pleurer", "de fermer l'œil", "Le cristallin se bombe pour voir de près."]
        ] },
      { id: "pc-oxydation", titre: "Oxydation des corps purs simples", periode: "Février",
        cours: rg("Définition", "Une <b>oxydation</b> est une réaction où un corps se combine avec le dioxygène. On obtient un <b>oxyde</b>.") +
          rg("Exemples", "Carbone : C + O₂ → CO₂. Soufre : S + O₂ → SO₂ (gaz à odeur suffocante). Fer (paille de fer qui brûle) : 3 Fe + 2 O₂ → Fe₃O₄. Cuivre chauffé : 2 Cu + O₂ → 2 CuO (noir).") +
          rg("Oxydation lente", "La <b>rouille</b> se forme lentement sur le fer en présence d'eau et d'air ; elle est poreuse et ronge tout le métal. L'aluminium se couvre d'une fine couche d'alumine qui le protège.") +
          rg("Protéger le fer", "Peinture, graissage, galvanisation (couche de zinc), chromage."),
        qs: [
          ["Une oxydation est une réaction avec :", "le dioxygène", "l'eau seulement", "l'azote", "le sel", "Le produit est un oxyde."],
          ["La combustion du carbone produit :", "du dioxyde de carbone", "du dioxyde de soufre", "de l'eau", "de la rouille", "C + O₂ → CO₂."],
          ["Le cuivre chauffé à l'air se couvre d'une couche :", "noire d'oxyde de cuivre CuO", "rouge de rouille", "blanche de sel", "verte d'herbe", "2 Cu + O₂ → 2 CuO."],
          ["La combustion du fer dans le dioxygène donne :", "Fe₃O₄ (oxyde magnétique)", "Fe₂O₃ seulement", "FeS", "du fer pur", "3 Fe + 2 O₂ → Fe₃O₄."],
          ["La rouille se forme en présence :", "d'eau et d'air", "d'air sec seulement", "de vide", "d'huile", "Il faut de l'humidité et du dioxygène."],
          ["Pourquoi l'aluminium ne rouille-t-il pas comme le fer ?", "Une fine couche d'alumine le protège", "Il ne réagit jamais", "Il est plus lourd", "Il est magnétique", "Cette couche est imperméable, contrairement à la rouille."],
          ["Lequel protège le fer de la rouille ?", "La peinture", "L'eau salée", "L'humidité", "Le soleil", "Elle empêche le contact avec l'eau et l'air."],
          ["La combustion du soufre produit un gaz :", "à odeur suffocante (SO₂)", "sans odeur", "qui rallume une bûchette", "qui est de l'eau", "Le dioxyde de soufre pollue l'air (pluies acides)."]
        ] },
      { id: "pc-reduction", titre: "Réduction des oxydes", periode: "Février – mars",
        cours: rg("Définition", "La <b>réduction</b> d'un oxyde consiste à lui <b>enlever l'oxygène</b>. Le corps qui prend l'oxygène est le <b>réducteur</b>.") +
          rg("Oxydoréduction", "Réduction et oxydation ont lieu en même temps. Exemple : 2 CuO + C → 2 Cu + CO₂ (CuO est réduit, C est oxydé).") +
          rg("Aluminothermie", "Fe₂O₃ + 2 Al → 2 Fe + Al₂O₃ (soudure des rails).") +
          rg("Industrie", "Dans le <b>haut fourneau</b>, on réduit l'oxyde de fer par le carbone (coke) pour obtenir la fonte."),
        qs: [
          ["Réduire un oxyde, c'est :", "lui enlever l'oxygène", "lui ajouter de l'oxygène", "le chauffer seulement", "le dissoudre", "Le réducteur capte l'oxygène."],
          ["Dans 2 CuO + C → 2 Cu + CO₂, le réducteur est :", "le carbone", "l'oxyde de cuivre", "le cuivre", "le CO₂", "Le carbone prend l'oxygène de l'oxyde de cuivre."],
          ["Dans la même réaction, l'oxyde de cuivre est :", "réduit", "oxydé", "inchangé", "détruit", "Il perd son oxygène et devient du cuivre."],
          ["Une réaction où ont lieu à la fois une oxydation et une réduction s'appelle :", "une oxydoréduction", "une électrolyse", "une combustion lente", "une dilution", "Les deux sont toujours liées."],
          ["Dans l'aluminothermie, l'aluminium :", "réduit l'oxyde de fer", "est réduit", "ne réagit pas", "fond sans réagir", "Fe₂O₃ + 2 Al → 2 Fe + Al₂O₃."],
          ["Le haut fourneau sert à obtenir :", "de la fonte à partir du minerai de fer", "de l'aluminium", "du pétrole", "du sel", "L'oxyde de fer est réduit par le carbone."],
          ["Après la réduction de l'oxyde de cuivre par le carbone, on observe :", "du cuivre rouge et l'eau de chaux qui se trouble", "de la rouille", "une flamme bleue", "rien", "Le CO₂ formé trouble l'eau de chaux."],
          ["Le réducteur est un corps qui :", "capte l'oxygène", "donne de l'oxygène", "est toujours un métal précieux", "est un acide", "Il est lui-même oxydé."]
        ] },
      { id: "pc-solutions", titre: "Solutions acides, basiques et neutres", periode: "Mars",
        cours: rg("Le pH", "Nombre de 0 à 14 mesuré avec le papier pH ou un pH-mètre. <b>pH < 7 : acide</b> ; <b>pH = 7 : neutre</b> ; <b>pH > 7 : basique</b>.") +
          rg("Indicateur BBT", "Bleu de bromothymol : <b>jaune</b> en milieu acide, <b>vert</b> en milieu neutre, <b>bleu</b> en milieu basique.") +
          rg("Exemples", "Acides : jus de citron, vinaigre, acide chlorhydrique. Neutre : eau pure. Basiques : eau savonneuse, eau de Javel, soude.") +
          rg("Dilution", "Diluer un acide avec de l'eau fait monter son pH vers 7.") +
          rg("Sécurité", "Porter des lunettes et des gants. Toujours verser l'acide dans l'eau, jamais l'inverse."),
        qs: [
          ["Une solution de pH 3 est :", "acide", "basique", "neutre", "impossible", "pH inférieur à 7."],
          ["Une solution de pH 11 est :", "basique", "acide", "neutre", "impossible", "pH supérieur à 7."],
          ["L'eau pure a un pH de :", "7", "0", "14", "1", "Elle est neutre."],
          ["Le BBT devient jaune dans une solution :", "acide", "basique", "neutre", "salée seulement", "Vert = neutre, bleu = basique."],
          ["Lequel est acide ?", "Le jus de citron", "L'eau savonneuse", "L'eau de Javel", "La soude", "Il contient de l'acide citrique."],
          ["Quand on dilue un acide, son pH :", "augmente vers 7", "diminue", "reste le même", "devient 14", "La solution devient moins acide."],
          ["Pour diluer un acide concentré, on verse :", "l'acide dans l'eau", "l'eau dans l'acide", "les deux en même temps très vite", "on ne le dilue jamais", "Sinon, projections dangereuses."],
          ["Avec quel instrument mesure-t-on précisément le pH ?", "Un pH-mètre", "Un thermomètre", "Un dynamomètre", "Un voltmètre", "Le papier pH donne une valeur approchée."]
        ] },
      { id: "pc-puissance-elec", titre: "Puissance et énergie électriques", periode: "Avril", extra: [PCG.puissanceElec, PCG.energieElec],
        cours: rg("Puissance", "<b>P = U × I</b> (watts = volts × ampères). La <b>puissance nominale</b> est inscrite sur l'appareil (par exemple 1 500 W pour un fer à repasser).") +
          rg("Énergie", "<b>E = P × t</b>. En joules si t en secondes ; en <b>kWh</b> si P en kW et t en heures. 1 kWh = 3 600 000 J.") +
          rg("Facture", "Le compteur de la CIE mesure l'énergie consommée en kWh.") +
          rg("Sécurité", "Fusible et disjoncteur coupent le courant en cas de surintensité. Ne pas brancher trop d'appareils sur une même prise."),
        qs: [
          ["La puissance électrique se calcule par :", "P = U × I", "P = U / I", "P = R × I", "P = U + I", "Unité : le watt."],
          ["L'énergie électrique se calcule par :", "E = P × t", "E = P / t", "E = U / I", "E = m × g", "Plus un appareil fonctionne longtemps, plus il consomme."],
          ["Le compteur électrique mesure :", "l'énergie consommée (en kWh)", "la tension", "la masse", "la température", "C'est sur cette base que la facture est calculée."],
          ["1 kWh correspond à :", "3 600 000 J", "1 000 J", "3 600 J", "100 J", "1 000 W × 3 600 s."],
          ["Que signifie « 1 500 W » sur un fer à repasser ?", "Sa puissance nominale", "Sa tension", "Son intensité", "Son prix", "Puissance consommée en fonctionnement normal."],
          ["Le rôle d'un fusible est de :", "couper le circuit en cas de surintensité", "augmenter la puissance", "mesurer la tension", "éclairer", "Il protège l'installation contre les incendies."],
          ["Une lampe de 60 W allumée 10 heures consomme :", "0,6 kWh", "6 kWh", "600 kWh", "60 kWh", "60 W × 10 h = 600 Wh = 0,6 kWh."],
          ["Pour économiser l'énergie, il vaut mieux :", "éteindre les appareils inutilisés", "laisser la lumière allumée", "ouvrir le réfrigérateur longtemps", "brancher plus d'appareils", "L'énergie consommée dépend du temps de fonctionnement."]
        ] },
      { id: "pc-ohm", titre: "Le conducteur ohmique", periode: "Avril – mai", extra: [PCG.ohm, PCG.serie],
        cours: rg("Résistance", "Un conducteur ohmique (résistor) est caractérisé par sa <b>résistance R</b>, en ohms (Ω), mesurée avec un <b>ohmmètre</b>.") +
          rg("Loi d'Ohm", "<b>U = R × I</b> : la tension est proportionnelle à l'intensité. La caractéristique U = f(I) est une droite qui passe par l'origine.") +
          rg("Associations", `En <b>série</b> : R = R₁ + R₂. En <b>dérivation</b> : ${fr(1, "R")} = ${fr(1, "R₁")} + ${fr(1, "R₂")}.`) +
          rg("Effet Joule", "Un conducteur traversé par un courant chauffe : c'est le principe du fer à repasser et du chauffe-eau."),
        qs: [
          ["La loi d'Ohm s'écrit :", "U = R × I", "U = R + I", "I = R × U", "R = U × I", "U en volts, R en ohms, I en ampères."],
          ["L'unité de la résistance est :", "l'ohm (Ω)", "le volt", "l'ampère", "le watt", "Symbole Ω (oméga)."],
          ["Avec quel appareil mesure-t-on une résistance ?", "Un ohmmètre", "Un ampèremètre", "Une balance", "Un pH-mètre", "On le branche aux bornes du conducteur, hors circuit."],
          ["En série, deux résistances de 20 Ω et 30 Ω équivalent à :", "50 Ω", "10 Ω", "600 Ω", "12 Ω", "Les résistances s'additionnent en série."],
          ["La caractéristique d'un conducteur ohmique est :", "une droite passant par l'origine", "un cercle", "une courbe qui monte puis descend", "un point", "U est proportionnelle à I."],
          ["L'effet Joule, c'est :", "l'échauffement d'un conducteur parcouru par un courant", "la production de lumière par le soleil", "le magnétisme", "la chute des corps", "Utilisé dans les radiateurs, fers à repasser…"],
          ["Si R = 100 Ω et I = 0,1 A, alors U = :", "10 V", "1 000 V", "0,001 V", "100,1 V", "U = 100 × 0,1 = 10 V."],
          ["En dérivation, la résistance équivalente est :", "plus petite que chacune des résistances", "plus grande que la somme", "égale à la somme", "toujours nulle", "1/R = 1/R₁ + 1/R₂."]
        ] }
    ] };
