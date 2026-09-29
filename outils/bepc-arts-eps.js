  // =========================================================
  // Arts plastiques, Éducation musicale et EPS
  // =========================================================
  const MAT_ARTS = { id: "arts", nom: "Arts plastiques et musique", icone: "✎", couleur: "#8A5A9E", examen: "Écrit (1 h 30)",
    chapitres: [
      { id: "art-couleurs", titre: "Arts plastiques · Les couleurs",
        cours: rg("Couleurs primaires", "<b>Rouge (magenta), jaune, bleu (cyan)</b> : on ne peut pas les obtenir par mélange.") +
          rg("Couleurs secondaires", "Mélange de deux primaires : rouge + jaune = <b>orange</b> ; jaune + bleu = <b>vert</b> ; bleu + rouge = <b>violet</b>.") +
          rg("Complémentaires", "Une primaire et la secondaire faite des deux autres : rouge / vert ; jaune / violet ; bleu / orange. Côte à côte, elles se renforcent (contraste).") +
          rg("Chaudes et froides", "Chaudes : rouge, orange, jaune (soleil, feu). Froides : bleu, vert, violet (eau, ombre). Neutres : noir, blanc, gris.") +
          rg("Vocabulaire", "<b>Camaïeu</b> : nuances d'une seule couleur. <b>Dégradé</b> : passage progressif du clair au foncé. <b>Ton</b> : ajouter du blanc éclaircit, du noir assombrit."),
        qs: [
          ["Quelles sont les trois couleurs primaires ?", "Rouge, jaune, bleu", "Vert, orange, violet", "Noir, blanc, gris", "Rouge, vert, marron", "On ne peut pas les obtenir par mélange."],
          ["Jaune + bleu donne :", "vert", "violet", "orange", "marron", "Couleur secondaire."],
          ["Rouge + jaune donne :", "orange", "vert", "violet", "rose", "Couleur secondaire."],
          ["La couleur complémentaire du rouge est :", "le vert", "l'orange", "le violet", "le jaune", "Le vert est fait de jaune + bleu, les deux autres primaires."],
          ["La couleur complémentaire du bleu est :", "l'orange", "le vert", "le violet", "le rouge", "Orange = rouge + jaune."],
          ["Lequel est une couleur chaude ?", "L'orange", "Le bleu", "Le vert", "Le violet", "Couleurs du feu et du soleil."],
          ["Un camaïeu, c'est :", "des nuances d'une seule couleur", "un mélange de toutes les couleurs", "un dessin en noir", "un collage", "Par exemple plusieurs bleus."],
          ["Pour éclaircir une couleur, on ajoute :", "du blanc", "du noir", "du rouge", "de l'eau de Javel", "Ajouter du noir l'assombrit."],
          ["Bleu + rouge donne :", "violet", "vert", "orange", "jaune", "Couleur secondaire."],
          ["Le noir, le blanc et le gris sont des couleurs :", "neutres", "primaires", "chaudes", "complémentaires", "On les appelle aussi achromatiques."]
        ] },
      { id: "art-dessin", titre: "Arts plastiques · Dessin, perspective et composition",
        cours: rg("Perspective", "Donne l'illusion de la profondeur : <b>ligne d'horizon</b> (à hauteur des yeux), <b>point de fuite</b> où se rejoignent les lignes parallèles qui s'éloignent. Plus un objet est loin, plus il paraît petit.") +
          rg("Plans", "Premier plan (proche), plan moyen, arrière-plan (lointain).") +
          rg("Composition", "Organisation des éléments dans l'image : lignes directrices, équilibre, centre d'intérêt, règle des tiers.") +
          rg("Techniques", "Crayon, fusain, gouache, aquarelle, collage, modelage (argile), gravure, batik, sculpture sur bois."),
        qs: [
          ["Le point où se rejoignent les lignes qui s'éloignent s'appelle :", "le point de fuite", "le premier plan", "le centre", "la marge", "Il est situé sur la ligne d'horizon."],
          ["La ligne d'horizon est placée :", "à la hauteur des yeux de l'observateur", "toujours en bas", "toujours au milieu", "en dehors du dessin", "Elle change si on se baisse ou si on monte."],
          ["Dans un dessin, un objet lointain paraît :", "plus petit", "plus grand", "de la même taille", "plus coloré", "C'est l'effet de la perspective."],
          ["Le premier plan d'une image montre :", "ce qui est le plus proche", "ce qui est le plus loin", "le ciel", "la signature", "L'arrière-plan montre le lointain."],
          ["La composition d'une image, c'est :", "l'organisation des éléments dans l'image", "le prix du tableau", "le nom du peintre", "le cadre", "Elle guide le regard."],
          ["Le modelage se fait surtout avec :", "de l'argile", "de l'eau", "du papier calque", "de l'encre", "On façonne la matière avec les mains."],
          ["Le batik est une technique :", "de teinture de tissu avec réserve à la cire", "de dessin au crayon", "de sculpture sur pierre", "de photographie", "La cire empêche la teinture de pénétrer."],
          ["Le fusain est :", "un bâton de charbon de bois pour dessiner", "une peinture à l'huile", "une colle", "un pinceau", "Il donne des noirs profonds et s'estompe au doigt."]
        ] },
      { id: "art-patrimoine", titre: "Arts plastiques · Le patrimoine artistique ivoirien",
        cours: rg("Masques et statuaire", "Masques <b>Dan</b> (Yacouba) de l'ouest, masques et statuettes <b>Baoulé</b>, masques du <b>Poro</b> sénoufo, masque <b>Zaouli</b> des Gouro (danse inscrite au patrimoine de l'UNESCO en 2017).") +
          rg("Textiles", "<b>Pagne Kita</b> tissé (Baoulé), <b>toiles de Korhogo</b> peintes (Sénoufo), pagnes indigo.") +
          rg("Autres", "Poterie de <b>Katiola</b>, orfèvrerie akan (poids à peser l'or), vannerie, architecture (mosquées de style soudanais de Kong, inscrites à l'UNESCO).") +
          rg("Rôle", "Ces objets ont souvent une fonction <b>sociale et religieuse</b> (initiation, funérailles, fêtes), pas seulement décorative."),
        qs: [
          ["Le pagne Kita est un tissage traditionnel :", "baoulé", "sénoufo", "dan", "bété", "Tissé en bandes aux couleurs vives."],
          ["Les toiles peintes de Korhogo sont un art :", "sénoufo", "baoulé", "agni", "abbey", "Motifs d'animaux et de personnages sur coton."],
          ["Le Zaouli est une danse masquée :", "gouro", "baoulé", "sénoufo", "attié", "Inscrite au patrimoine immatériel de l'UNESCO en 2017."],
          ["Quelle ville est célèbre pour sa poterie ?", "Katiola", "San-Pedro", "Grand-Bassam", "Tabou", "Au centre-nord du pays."],
          ["Les masques traditionnels ont souvent une fonction :", "sociale et religieuse", "uniquement commerciale", "sportive", "aucune", "Initiation, funérailles, fêtes, justice."],
          ["Les masques Dan viennent :", "de l'ouest (région de Man)", "du sud-est", "du nord-est", "de la côte", "Peuple Dan ou Yacouba."],
          ["Les poids à peser l'or sont un art :", "akan", "sénoufo", "dan", "krou", "Petites figurines en laiton."],
          ["Le Poro est :", "une société d'initiation sénoufo", "un tissu", "un plat", "un instrument", "Elle utilise de nombreux masques et statues."]
        ] },
      { id: "mus-solfege", titre: "Éducation musicale · Le solfège",
        cours: rg("La portée", "<b>5 lignes</b> et 4 interlignes. La <b>clé de sol</b> (sur la 2e ligne) fixe le nom des notes : do, ré, mi, fa, sol, la, si.") +
          rg("Durées", "Ronde = 4 temps ; blanche = 2 ; <b>noire = 1</b> ; croche = ½ ; double croche = ¼. Un <b>point</b> après une note augmente sa durée de moitié (blanche pointée = 3 temps).") +
          rg("Silences", "Pause (4 temps), demi-pause (2), soupir (1), demi-soupir (½).") +
          rg("Mesures", "2/4, 3/4, 4/4 : le chiffre du haut donne le nombre de temps par mesure. Les mesures sont séparées par des barres.") +
          rg("Altérations et nuances", "Dièse ♯ (hausse d'un demi-ton), bémol ♭ (baisse d'un demi-ton), bécarre ♮ (annule). Piano (doux), forte (fort), crescendo (de plus en plus fort). Tempo : adagio (lent), andante (modéré), allegro (rapide)."),
        qs: [
          ["Combien de lignes compte une portée ?", "5", "4", "6", "7", "Et 4 interlignes."],
          ["Combien de temps vaut une blanche ?", "2 temps", "1 temps", "4 temps", "½ temps", "La noire vaut 1 temps."],
          ["Combien de temps vaut une ronde ?", "4 temps", "2 temps", "1 temps", "3 temps", "La plus longue des figures courantes."],
          ["Une croche vaut :", "½ temps", "1 temps", "2 temps", "¼ temps", "Deux croches = une noire."],
          ["Une blanche pointée vaut :", "3 temps", "2 temps", "2,5 temps", "4 temps", "Le point ajoute la moitié : 2 + 1 = 3."],
          ["Le dièse :", "hausse la note d'un demi-ton", "baisse la note d'un demi-ton", "annule une altération", "allonge la note", "Le bémol la baisse."],
          ["Dans une mesure à 3/4, il y a :", "3 temps par mesure", "4 temps par mesure", "3 mesures", "34 temps", "Le chiffre du haut indique le nombre de temps."],
          ["« Forte » signifie :", "fort", "doux", "rapide", "lent", "Piano = doux."],
          ["Le soupir est un silence de :", "1 temps", "4 temps", "2 temps", "½ temps", "Il a la durée d'une noire."],
          ["Quelle note suit « sol » dans la gamme ?", "la", "fa", "si", "do", "Do, ré, mi, fa, sol, la, si, do."]
        ] },
      { id: "mus-instruments", titre: "Éducation musicale · Instruments et musiques de Côte d'Ivoire",
        cours: rg("Familles d'instruments", "<b>Cordes</b> (guitare, violon, kora), <b>vents</b> (flûte, trompette, saxophone), <b>percussions</b> (tam-tam, djembé, balafon, xylophone).") +
          rg("Instruments ivoiriens", "<b>Attoungblan</b> : tambour parleur akan. <b>Balafon</b> : xylophone à calebasses (Sénoufo, Malinké). <b>Kora</b> : harpe-luth mandingue. <b>Djembé</b>, sanza, arc musical.") +
          rg("Musiques modernes", "Ziglibithy d'<b>Ernesto Djédjé</b> (années 1970), reggae d'<b>Alpha Blondy</b>, <b>zouglou</b> né en 1990 chez les étudiants (Les Parents du Campus), zoblazo de <b>Meiway</b>, <b>coupé-décalé</b> (2002-2003, Douk Saga), <b>Magic System</b> (« Premier Gaou », 1999).") +
          rg("Hymne et festivals", "Hymne national : <b>L'Abidjanaise</b> (1960). Festivals : <b>MASA</b> (Marché des arts du spectacle d'Abidjan, depuis 1993), <b>FEMUA</b> (festival créé par Magic System à Anoumabo en 2008)."),
        qs: [
          ["Le tambour parleur des Akan s'appelle :", "l'attoungblan", "le balafon", "la kora", "la sanza", "Il reproduit les tons de la langue."],
          ["Le balafon appartient à la famille des :", "percussions", "cordes", "vents", "cuivres", "Lames de bois frappées, résonateurs en calebasse."],
          ["La kora est un instrument à :", "cordes", "vent", "percussion", "clavier", "Harpe-luth mandingue à 21 cordes."],
          ["Le zouglou est né :", "vers 1990 chez les étudiants d'Abidjan", "en 1960 au village", "en 2020 sur internet", "au XIXe siècle", "Chant de revendication et d'humour."],
          ["Quel groupe a chanté « Premier Gaou » ?", "Magic System", "Les Parents du Campus", "Espoir 2000", "Zêguêhi", "Grand succès de 1999-2000."],
          ["Le coupé-décalé est apparu :", "au début des années 2000", "en 1960", "en 1980", "en 2020", "Avec Douk Saga et la Jet-Set."],
          ["Quel est le nom de l'hymne national ivoirien ?", "L'Abidjanaise", "La Marseillaise", "L'Ivoirienne", "Salut Côte d'Ivoire", "Adopté en 1960."],
          ["Alpha Blondy est un grand artiste de :", "reggae", "zouglou", "coupé-décalé", "musique classique", "« Brigadier Sabari », « Jérusalem »…"],
          ["Le FEMUA a été créé par :", "Magic System", "Alpha Blondy", "Meiway", "Ernesto Djédjé", "À Anoumabo (Marcory), en 2008."],
          ["La flûte appartient à la famille des :", "vents", "cordes", "percussions", "claviers", "On souffle dedans."]
        ] }
    ] };

  const MAT_EPS = { id: "eps", nom: "EPS", icone: "⚑", couleur: "#4F7A2A", examen: "Épreuve pratique",
    chapitres: [
      { id: "eps-sante", titre: "Échauffement, santé et préparation",
        cours: rg("L'épreuve", "L'EPS au BEPC est une épreuve <b>pratique</b>, souvent passée avant l'écrit. Demande à ton professeur les épreuves exactes de ton centre (course, saut, lancer…). Les élèves dispensés doivent fournir un certificat médical.") +
          rg("L'échauffement", "10 à 15 minutes : trottiner, mobiliser les articulations, étirements légers, accélérations progressives. Il prépare le cœur et les muscles et évite les blessures.") +
          rg("Hygiène", "Boire de l'eau avant, pendant et après ; bien dormir ; manger léger 2 à 3 heures avant ; tenue et chaussures adaptées.") +
          rg("S'entraîner", "Régulièrement, 3 fois par semaine, en augmentant progressivement ; récupérer entre les séances."),
        qs: [
          ["À quoi sert l'échauffement ?", "À préparer le corps et éviter les blessures", "À se fatiguer avant l'épreuve", "À rien", "À perdre du poids", "Il augmente la température des muscles et le rythme cardiaque."],
          ["Combien de temps dure un bon échauffement ?", "10 à 15 minutes", "1 minute", "2 heures", "Il est inutile", "Progressif, du plus doux au plus intense."],
          ["Quand faut-il boire de l'eau ?", "Avant, pendant et après l'effort", "Jamais pendant l'effort", "Seulement la veille", "Seulement après l'épreuve", "La déshydratation diminue les performances."],
          ["Combien de temps avant l'épreuve faut-il prendre son dernier repas ?", "2 à 3 heures avant", "Juste avant", "La veille seulement", "Il ne faut pas manger", "Un repas léger, facile à digérer."],
          ["Un élève malade qui ne peut pas faire l'épreuve doit fournir :", "un certificat médical", "une lettre d'un ami", "rien", "une photo", "Pour être dispensé."],
          ["Pour progresser, il vaut mieux s'entraîner :", "régulièrement, plusieurs fois par semaine", "une seule fois la veille", "jamais", "toute la nuit", "La régularité est la clé."],
          ["Après l'effort, il est bon de :", "récupérer : marcher, s'étirer doucement, boire", "s'arrêter brusquement et s'asseoir au soleil", "courir encore plus vite", "boire une boisson très sucrée seulement", "Le retour au calme aide les muscles."],
          ["Le sommeil avant l'épreuve est :", "très important", "inutile", "à éviter", "dangereux", "Un corps reposé est plus performant."]
        ] },
      { id: "eps-courses", titre: "Les courses (vitesse, demi-fond, relais)",
        cours: rg("Vitesse", "Départ accroupi ou debout aux commandes « À vos marques ! Prêts ! » puis le signal. Rester dans son couloir, regarder devant, courir sur l'avant du pied, bras actifs, finir en <b>dépassant</b> la ligne d'arrivée sans ralentir. Un faux départ peut éliminer.") +
          rg("Demi-fond", "Courses plus longues : partir à une allure régulière, gérer sa respiration, ne pas s'épuiser au premier tour, accélérer à la fin.") +
          rg("Relais", "Le témoin doit être transmis <b>dans la zone de transmission</b> ; le receveur part avant que le donneur n'arrive. Un témoin tombé doit être ramassé par le coureur qui l'a fait tomber."),
        qs: [
          ["Quelles sont les commandes de départ d'une course de vitesse ?", "« À vos marques ! Prêts ! » puis le signal", "« Un, deux, trois, soleil ! »", "« Attention, partez ! » seulement", "Il n'y a pas de commande", "Ne pas partir avant le signal."],
          ["Partir avant le signal s'appelle :", "un faux départ", "un départ lancé", "un relais", "un sprint", "Il peut entraîner la disqualification."],
          ["En course de vitesse, il faut :", "rester dans son couloir", "changer de couloir", "ralentir avant l'arrivée", "regarder derrière soi", "Sortir de son couloir peut disqualifier."],
          ["Au demi-fond, la bonne stratégie est :", "une allure régulière puis accélérer à la fin", "partir à fond dès le départ", "marcher la moitié du temps", "s'arrêter à chaque tour", "Gérer son effort est la clé."],
          ["Au relais, le témoin doit être passé :", "dans la zone de transmission", "n'importe où", "après la ligne d'arrivée", "en le lançant", "Sinon l'équipe est disqualifiée."],
          ["Comment franchir la ligne d'arrivée ?", "En la dépassant sans ralentir", "En s'arrêtant juste avant", "En marchant", "En sautant", "On ralentit seulement après la ligne."],
          ["En vitesse, on court plutôt :", "sur l'avant du pied", "sur les talons", "pieds à plat", "en sautillant", "Pour une foulée rapide et dynamique."],
          ["Les bras pendant la course doivent :", "accompagner le mouvement d'avant en arrière", "rester immobiles", "tourner en cercle", "rester levés", "Ils donnent de l'élan et de l'équilibre."]
        ] },
      { id: "eps-sauts-lancers", titre: "Les sauts et les lancers",
        cours: rg("Saut en longueur", "Course d'élan régulière, appel sur <b>un pied</b> sur la planche (ne pas mordre la ligne, sinon essai nul). La mesure se fait de la planche à la marque la plus proche laissée dans le sable.") +
          rg("Saut en hauteur", "Course d'élan, appel sur un pied (le plus éloigné de la barre), franchissement en ciseau ou en « fosbury ». Faire tomber la barre = essai manqué.") +
          rg("Lancer de poids", "Dans le cercle, le poids est <b>poussé</b> depuis l'épaule, près du cou (on ne le lance pas comme une balle). Sortir du cercle par l'arrière après le jet, sinon essai nul."),
        qs: [
          ["En saut en longueur, si le pied dépasse la planche d'appel :", "l'essai est nul", "le saut compte double", "on gagne", "rien ne se passe", "On dit qu'on « mord » la planche."],
          ["Le saut en longueur est mesuré jusqu'à :", "la marque la plus proche de la planche", "la marque la plus lointaine", "l'endroit où on sort du sable", "la main", "Tomber en arrière fait perdre de la distance."],
          ["L'appel d'un saut se fait sur :", "un seul pied", "les deux pieds", "les mains", "les genoux", "C'est l'impulsion."],
          ["En saut en hauteur, faire tomber la barre :", "compte comme un essai manqué", "est autorisé", "donne un bonus", "arrête la compétition", "On a généralement trois essais par hauteur."],
          ["Au lancer de poids, le poids est :", "poussé depuis l'épaule", "lancé bras tendu comme une balle", "roulé au sol", "lancé à deux mains", "Lancer bras tendu est dangereux et interdit."],
          ["Après le jet, on sort du cercle :", "par l'arrière", "par l'avant", "en sautant par-dessus le butoir", "on reste dedans", "Sortir par l'avant rend l'essai nul."],
          ["La technique de saut en hauteur où l'on passe la barre sur le dos s'appelle :", "le fosbury", "le ciseau", "le triple saut", "la perche", "Du nom de l'athlète Dick Fosbury (1968)."],
          ["Une course d'élan réussie doit être :", "régulière et en accélération", "lente et hésitante", "toujours en marchant", "en zigzag", "Pour arriver vite et juste sur la planche."]
        ] },
      { id: "eps-sports-co", titre: "Les sports collectifs",
        cours: rg("Football", "2 équipes de <b>11</b> joueurs, 2 mi-temps de 45 minutes. Seul le gardien peut toucher le ballon avec les mains dans sa surface. Règle du hors-jeu.") +
          rg("Handball", "<b>7</b> joueurs par équipe (dont le gardien), on joue avec les mains ; pas plus de 3 pas ni 3 secondes avec le ballon ; zone réservée au gardien.") +
          rg("Basket-ball", "<b>5</b> joueurs ; panier à 2 points, 3 points derrière la ligne à 3 points, 1 point pour un lancer franc ; pas de marcher (courir avec le ballon sans dribbler).") +
          rg("Volley-ball", "<b>6</b> joueurs ; 3 touches maximum par équipe ; le ballon ne doit pas toucher le sol dans son camp.") +
          rg("Valeurs", "Esprit d'équipe, respect de l'arbitre et de l'adversaire, fair-play."),
        qs: [
          ["Combien de joueurs par équipe au football ?", "11", "7", "5", "6", "Dont un gardien."],
          ["Combien de joueurs par équipe au handball ?", "7", "11", "5", "6", "Dont un gardien."],
          ["Combien de joueurs par équipe au basket-ball ?", "5", "6", "7", "11", "Sur le terrain en même temps."],
          ["Combien de joueurs par équipe au volley-ball ?", "6", "5", "7", "11", "Trois touches maximum par équipe."],
          ["Au basket, un panier réussi derrière la ligne des 3 points vaut :", "3 points", "2 points", "1 point", "4 points", "Un lancer franc vaut 1 point."],
          ["Au handball, on peut faire au maximum :", "3 pas avec le ballon en main", "10 pas", "aucun pas", "autant de pas qu'on veut", "Et garder le ballon 3 secondes au plus."],
          ["Combien dure un match de football ?", "2 × 45 minutes", "2 × 30 minutes", "4 × 10 minutes", "90 secondes", "Plus les arrêts de jeu."],
          ["Le fair-play, c'est :", "respecter les règles, l'adversaire et l'arbitre", "gagner à tout prix", "tricher sans se faire voir", "insulter l'arbitre", "Une valeur essentielle du sport."]
        ] }
    ] };
