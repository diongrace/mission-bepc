  // =========================================================
  // Histoire-Géographie et EDHC (programmes officiels de 3e)
  // =========================================================
  const MAT_HG = { id: "hg", nom: "Histoire-Géographie", icone: "⌖", couleur: "#9A6A12", examen: "Écrit",
    chapitres: [
      { id: "hg-colonisation", titre: "Histoire · L'impérialisme et la colonisation en Côte d'Ivoire",
        cours: rg("Causes de l'impérialisme (fin XIXe siècle)", "<b>Économiques</b> : matières premières et débouchés. <b>Politiques</b> : puissance et prestige. <b>Idéologiques</b> : prétendue « mission civilisatrice ». La <b>conférence de Berlin</b> (1884-1885) organise le partage de l'Afrique.") +
          rg("Exploration", "<b>Louis-Gustave Binger</b> part de Bamako (1887), passe par Kong et arrive à Grand-Bassam (1889). <b>Marcel Treich-Laplène</b> le rejoint à Kong et signe des traités. <b>Arthur Verdier</b> développe le commerce à Assinie et Grand-Bassam.") +
          rg("La colonie", "Créée le <b>10 mars 1893</b>, Binger premier gouverneur. Capitales : <b>Grand-Bassam</b> (1893), <b>Bingerville</b> (1900, après la fièvre jaune), <b>Abidjan</b> (1934). Intégrée à l'<b>AOF</b> (1895).") +
          rg("Résistances", "<b>Samory Touré</b> (capturé en 1898 à Guélémou), les Baoulé, les Abbey (1910), les Gouro, les Dida, les Agni… Le gouverneur <b>Angoulvant</b> (1908-1916) mène une « pacification » brutale.") +
          rg("Système colonial", "Travaux forcés, impôt de capitation, code de l'indigénat, cultures obligatoires (café, cacao)."),
        qs: [
          ["Quand la colonie de Côte d'Ivoire a-t-elle été créée ?", "Le 10 mars 1893", "Le 7 août 1960", "En 1946", "En 1884", "Binger en devient le premier gouverneur."],
          ["Quelle conférence a organisé le partage de l'Afrique ?", "La conférence de Berlin (1884-1885)", "La conférence de Brazzaville", "La conférence de Bandung", "Le traité de Versailles", "Les puissances européennes y fixent les règles de l'occupation."],
          ["Quel explorateur a relié Bamako à Grand-Bassam en passant par Kong (1887-1889) ?", "Louis-Gustave Binger", "Samory Touré", "Angoulvant", "Houphouët-Boigny", "Bingerville porte son nom."],
          ["Quelle fut la première capitale de la colonie ?", "Grand-Bassam", "Abidjan", "Yamoussoukro", "Bouaké", "Puis Bingerville (1900) et Abidjan (1934)."],
          ["Pourquoi la capitale quitte-t-elle Grand-Bassam en 1900 ?", "À cause d'une épidémie de fièvre jaune", "À cause d'un séisme", "Pour se rapprocher du nord", "À cause de la guerre mondiale", "La capitale est transférée à Bingerville."],
          ["Quel grand résistant fut capturé en 1898 ?", "Samory Touré", "Binger", "Treich-Laplène", "Angoulvant", "Il combattit longtemps la conquête française."],
          ["Qui mena une « pacification » brutale de 1908 à 1916 ?", "Le gouverneur Angoulvant", "Binger", "Samory Touré", "Houphouët-Boigny", "Conquête militaire violente contre les résistances."],
          ["Dans quelle fédération la Côte d'Ivoire fut-elle intégrée ?", "L'AOF (Afrique occidentale française)", "L'AEF", "La CEDEAO", "L'UA", "Créée en 1895."],
          ["Lequel est un aspect du système colonial ?", "Les travaux forcés", "Le suffrage universel", "L'école gratuite pour tous", "La liberté de la presse", "Aboli en 1946 grâce à la loi Houphouët-Boigny."],
          ["Depuis quand Abidjan est-elle la capitale de la colonie ?", "1934", "1893", "1900", "1983", "Yamoussoukro deviendra la capitale politique en 1983."]
        ] },
      { id: "hg-independance", titre: "Histoire · L'accession de la Côte d'Ivoire à l'indépendance",
        cours: rg("Contexte", "Après la Seconde Guerre mondiale, la <b>conférence de Brazzaville</b> (1944) promet des réformes.") +
          rg("Houphouët-Boigny et le SAA", "En <b>1944</b>, Félix Houphouët-Boigny crée le <b>Syndicat agricole africain</b> (SAA). Élu député en 1945, il fait voter la <b>loi du 11 avril 1946</b> qui abolit le travail forcé.") +
          rg("Partis", "<b>PDCI</b> (avril 1946) et <b>RDA</b> (octobre 1946, Bamako). Répression de 1949-1950 ; marche des femmes sur Grand-Bassam (décembre 1949).") +
          rg("Étapes vers l'indépendance", "<b>Loi-cadre Defferre</b> (1956) : autonomie interne. <b>Référendum du 28 septembre 1958</b> : la Côte d'Ivoire entre dans la Communauté. République proclamée le <b>4 décembre 1958</b>.") +
          rg("Indépendance", "<b>7 août 1960</b>. Constitution du 3 novembre 1960 ; Houphouët-Boigny premier président. Admission à l'ONU le 20 septembre 1960."),
        qs: [
          ["Quelle est la date de l'indépendance de la Côte d'Ivoire ?", "Le 7 août 1960", "Le 4 décembre 1958", "Le 10 mars 1893", "Le 11 avril 1946", "Fête nationale le 7 août."],
          ["Quel syndicat Houphouët-Boigny crée-t-il en 1944 ?", "Le Syndicat agricole africain (SAA)", "Le PDCI", "Le RDA", "La CEDEAO", "Il défend les planteurs africains."],
          ["Quelle loi de 1946 porte le nom d'Houphouët-Boigny ?", "La loi abolissant le travail forcé", "La loi-cadre", "La loi sur l'indépendance", "La loi sur le vote des femmes", "Loi du 11 avril 1946."],
          ["Où le RDA a-t-il été créé en octobre 1946 ?", "À Bamako", "À Abidjan", "À Dakar", "À Paris", "Rassemblement démocratique africain."],
          ["Quelle loi de 1956 accorde l'autonomie interne ?", "La loi-cadre Defferre", "La loi Houphouët-Boigny", "La loi Lamine Guèye", "Le traité de Versailles", "Elle instaure aussi le suffrage universel."],
          ["Quand la République de Côte d'Ivoire a-t-elle été proclamée ?", "Le 4 décembre 1958", "Le 7 août 1960", "Le 1er janvier 1960", "Le 28 septembre 1958", "Après le référendum du 28 septembre 1958."],
          ["Que s'est-il passé en décembre 1949 à Grand-Bassam ?", "Une marche des femmes pour soutenir les militants emprisonnés", "L'indépendance", "Une épidémie", "La création de l'AOF", "Épisode marquant de la lutte anticoloniale."],
          ["Qui fut le premier président de la Côte d'Ivoire ?", "Félix Houphouët-Boigny", "Henri Konan Bédié", "Laurent Gbagbo", "Alassane Ouattara", "Président de 1960 à sa mort en 1993."],
          ["Quand la Côte d'Ivoire a-t-elle été admise à l'ONU ?", "Le 20 septembre 1960", "Le 7 août 1960", "En 1945", "En 1963", "Quelques semaines après l'indépendance."],
          ["La conférence de Brazzaville a eu lieu en :", "1944", "1960", "1884", "1958", "Elle annonce des réformes dans les colonies françaises."]
        ] },
      { id: "hg-crises", titre: "Histoire · Les crises sociopolitiques de l'Afrique indépendante",
        cours: rg("Formes", "Coups d'État, guerres civiles, rébellions, conflits ethniques, crises post-électorales.") +
          rg("Exemples", "Guerre du Biafra au Nigeria (1967-1970). <b>Génocide des Tutsi au Rwanda</b> (1994, environ 800 000 morts). Crise ivoirienne (rébellion de 2002, crise post-électorale de 2010-2011). Coups d'État récents au Mali, en Guinée, au Burkina Faso, au Niger et au Gabon.") +
          rg("Causes", "Mauvaise gouvernance, ethnicisme, pauvreté, conquête du pouvoir par la force, ingérences extérieures, richesses convoitées.") +
          rg("Conséquences", "Morts, réfugiés et déplacés, destructions, recul économique, traumatismes.") +
          rg("Solutions", "Dialogue, justice, réconciliation, démocratie, respect des institutions, rôle de l'UA et de la CEDEAO."),
        qs: [
          ["En quelle année a eu lieu le génocide des Tutsi au Rwanda ?", "1994", "1960", "2010", "1967", "Environ 800 000 morts en trois mois."],
          ["La guerre du Biafra a eu lieu dans quel pays ?", "Le Nigeria", "Le Rwanda", "La Côte d'Ivoire", "Le Ghana", "De 1967 à 1970."],
          ["Lequel est une cause fréquente des crises en Afrique ?", "La mauvaise gouvernance", "La paix durable", "Le dialogue", "Le respect des institutions", "Avec l'ethnicisme et la pauvreté."],
          ["Quelle crise a suivi l'élection présidentielle de 2010 en Côte d'Ivoire ?", "Une crise post-électorale (2010-2011)", "La guerre du Biafra", "Le génocide", "Aucune", "Elle a fait environ 3 000 morts."],
          ["Un coup d'État, c'est :", "une prise du pouvoir par la force", "une élection", "un référendum", "une fête nationale", "Contraire aux règles démocratiques."],
          ["Lequel est une conséquence des crises ?", "Des réfugiés et des déplacés", "Plus de touristes", "Une croissance forte", "La fin de la pauvreté", "Les populations fuient les violences."],
          ["Quelle organisation régionale intervient souvent en Afrique de l'Ouest ?", "La CEDEAO", "L'OTAN", "L'Union européenne", "L'ASEAN", "Communauté économique des États de l'Afrique de l'Ouest."],
          ["Lequel est une solution durable aux crises ?", "Le dialogue et la réconciliation", "La vengeance", "Les armes", "L'exclusion", "Avec la justice et la démocratie."]
        ] },
      { id: "hg-ww2", titre: "Histoire · La Seconde Guerre mondiale",
        cours: rg("Causes", "Humiliation de l'Allemagne par le <b>traité de Versailles</b> (1919), crise économique de <b>1929</b>, régimes totalitaires (nazisme d'<b>Hitler</b>, fascisme de Mussolini, militarisme japonais), expansionnisme (Anschluss, Sudètes), faiblesse de la SDN.") +
          rg("Déclenchement", "<b>1er septembre 1939</b> : l'Allemagne envahit la Pologne ; la France et le Royaume-Uni déclarent la guerre le 3 septembre.") +
          rg("Caractères", "Guerre <b>mondiale</b> et <b>totale</b>. Génocide des Juifs (la <b>Shoah</b>, environ 6 millions de morts). Bombes atomiques sur <b>Hiroshima</b> (6 août 1945) et Nagasaki (9 août 1945). Les Africains y participent (tirailleurs).") +
          rg("Fin", "Capitulation allemande le <b>8 mai 1945</b>, japonaise le 2 septembre 1945.") +
          rg("Conséquences", "50 à 60 millions de morts, Europe ruinée, création de l'<b>ONU</b>, guerre froide, accélération de la décolonisation."),
        qs: [
          ["Quel événement déclenche la Seconde Guerre mondiale ?", "L'invasion de la Pologne par l'Allemagne (1er septembre 1939)", "L'attaque de Pearl Harbor", "Le traité de Versailles", "La crise de 1929", "La France et le Royaume-Uni déclarent la guerre deux jours plus tard."],
          ["Qui dirigeait l'Allemagne nazie ?", "Adolf Hitler", "Mussolini", "Staline", "De Gaulle", "Au pouvoir depuis 1933."],
          ["Qu'est-ce que la Shoah ?", "Le génocide des Juifs par les nazis", "Une bataille navale", "Un traité de paix", "Une conférence", "Environ 6 millions de victimes."],
          ["Sur quelle ville a été lancée la première bombe atomique ?", "Hiroshima", "Berlin", "Paris", "Londres", "Le 6 août 1945 ; puis Nagasaki le 9 août."],
          ["Quand l'Allemagne a-t-elle capitulé ?", "Le 8 mai 1945", "Le 11 novembre 1918", "Le 1er septembre 1939", "Le 24 octobre 1945", "Fin de la guerre en Europe."],
          ["Lequel est une cause de la guerre ?", "La crise économique de 1929", "La création de l'ONU", "La décolonisation", "La guerre froide", "Elle favorise l'arrivée des régimes totalitaires."],
          ["Quelle organisation est créée en 1945 pour préserver la paix ?", "L'ONU", "La SDN", "L'UA", "La CEDEAO", "Elle remplace la SDN, qui avait échoué."],
          ["Comment appelait-on les soldats africains de l'armée française ?", "Les tirailleurs", "Les samouraïs", "Les casques bleus", "Les légionnaires romains", "Ils ont combattu sur de nombreux fronts."],
          ["Environ combien de morts a fait la Seconde Guerre mondiale ?", "50 à 60 millions", "5 000", "500 000", "1 milliard", "La guerre la plus meurtrière de l'histoire."],
          ["Une guerre « totale » signifie :", "que toutes les ressources et les civils sont mobilisés ou touchés", "qu'elle dure un jour", "qu'elle se fait sans armes", "qu'un seul pays est concerné", "Économie, science et population sont engagées."]
        ] },
      { id: "hg-onu", titre: "Histoire · L'Organisation des Nations unies (ONU)",
        cours: rg("Création", "Charte signée à <b>San Francisco</b> le 26 juin 1945 ; entrée en vigueur le <b>24 octobre 1945</b> (Journée des Nations unies). Siège : <b>New York</b>. <b>193</b> États membres.") +
          rg("Buts", "Maintenir la paix et la sécurité, développer l'amitié entre les nations, favoriser la coopération et le respect des droits de l'homme.") +
          rg("Organes", "<b>Assemblée générale</b> (tous les États), <b>Conseil de sécurité</b> (15 membres dont 5 permanents avec droit de <b>veto</b> : Chine, États-Unis, France, Royaume-Uni, Russie), Conseil économique et social, <b>Cour internationale de justice</b> (La Haye), Secrétariat dirigé par le <b>Secrétaire général</b>.") +
          rg("Institutions spécialisées", "UNESCO (éducation, culture), OMS (santé), FAO (alimentation), UNICEF (enfance), HCR (réfugiés), PNUD (développement).") +
          rg("En Côte d'Ivoire", "L'ONUCI (casques bleus) a aidé à ramener la paix de 2004 à 2017."),
        qs: [
          ["Où se trouve le siège de l'ONU ?", "À New York", "À Genève", "À Paris", "À Addis-Abeba", "Certaines agences sont à Genève, Paris, Rome…"],
          ["Combien d'États sont membres de l'ONU ?", "193", "51", "55", "15", "51 États fondateurs en 1945."],
          ["Combien de membres permanents compte le Conseil de sécurité ?", "5", "15", "10", "193", "Chine, États-Unis, France, Royaume-Uni, Russie."],
          ["Le droit de veto permet :", "à un membre permanent de bloquer une décision du Conseil de sécurité", "de voter deux fois", "d'exclure un pays", "d'élire le président d'un pays", "Il est souvent critiqué."],
          ["Quelle agence de l'ONU s'occupe de la santé ?", "L'OMS", "L'UNESCO", "La FAO", "Le HCR", "Organisation mondiale de la santé."],
          ["Quelle agence s'occupe de l'éducation et de la culture ?", "L'UNESCO", "L'OMS", "La FAO", "Le PNUD", "Siège à Paris."],
          ["La Journée des Nations unies est le :", "24 octobre", "7 août", "25 mai", "1er mai", "Date d'entrée en vigueur de la Charte (1945)."],
          ["Où siège la Cour internationale de justice ?", "À La Haye", "À New York", "À Abidjan", "À Londres", "Aux Pays-Bas."],
          ["Quelle mission de l'ONU a aidé la Côte d'Ivoire de 2004 à 2017 ?", "L'ONUCI", "La MINUSMA", "L'OTAN", "La CEDEAO", "Opération des Nations unies en Côte d'Ivoire."],
          ["Le but principal de l'ONU est :", "maintenir la paix et la sécurité internationales", "organiser la Coupe du monde", "gouverner tous les pays", "vendre du pétrole", "Article 1er de la Charte."]
        ] },
      { id: "hg-ua", titre: "Histoire · L'Union africaine (UA)",
        cours: rg("De l'OUA à l'UA", "L'<b>OUA</b> est créée le <b>25 mai 1963</b> à <b>Addis-Abeba</b> (d'où la Journée de l'Afrique le 25 mai). L'<b>UA</b> la remplace : acte constitutif adopté à Lomé (2000), lancement à <b>Durban en 2002</b>.") +
          rg("Siège et membres", "Siège : <b>Addis-Abeba</b> (Éthiopie). <b>55</b> États membres.") +
          rg("Organes", "Conférence des chefs d'État, <b>Commission de l'UA</b> (présidée depuis 2025 par le Djiboutien Mahmoud Ali Youssouf), Parlement panafricain, Conseil de paix et de sécurité.") +
          rg("Objectifs", "Unité et solidarité africaines, paix, développement, démocratie. Projets : <b>Agenda 2063</b>, <b>ZLECAf</b> (zone de libre-échange continentale)."),
        qs: [
          ["Quand l'OUA a-t-elle été créée ?", "Le 25 mai 1963", "Le 7 août 1960", "En 2002", "Le 24 octobre 1945", "Le 25 mai est la Journée de l'Afrique."],
          ["Où se trouve le siège de l'Union africaine ?", "À Addis-Abeba", "À Abidjan", "À Durban", "À Lomé", "En Éthiopie."],
          ["En quelle année l'UA a-t-elle été lancée ?", "2002", "1963", "1945", "2010", "À Durban, en Afrique du Sud."],
          ["Combien d'États membres compte l'UA ?", "55", "193", "15", "54", "Tous les pays du continent africain."],
          ["Qu'est-ce que la ZLECAf ?", "La zone de libre-échange continentale africaine", "Une monnaie", "Une armée", "Un parti politique", "Pour développer le commerce entre pays africains."],
          ["Quel est le grand plan de développement de l'UA ?", "L'Agenda 2063", "Le plan Marshall", "La loi-cadre", "Le PND 2030", "L'Afrique que nous voulons en 2063."],
          ["Quelle organisation l'UA a-t-elle remplacée ?", "L'OUA", "L'ONU", "La CEDEAO", "L'AOF", "Organisation de l'unité africaine."],
          ["Qui préside la Commission de l'UA depuis 2025 ?", "Mahmoud Ali Youssouf", "Moussa Faki Mahamat", "Kofi Annan", "Félix Houphouët-Boigny", "Diplomate djiboutien, élu en février 2025."]
        ] },
      { id: "hg-atouts", titre: "Géographie · Les atouts naturels et humains de la Côte d'Ivoire",
        cours: rg("Territoire", "Superficie : <b>322 462 km²</b>. Façade maritime sur le golfe de Guinée. Voisins : Liberia, Guinée, Mali, Burkina Faso, Ghana.") +
          rg("Climat et végétation", "Au sud : climat <b>équatorial</b> (4 saisons), forêt dense. Au nord : climat <b>tropical</b> (2 saisons), savane.") +
          rg("Relief et eaux", "Plaines et plateaux ; montagnes à l'ouest (<b>mont Nimba</b>, 1 752 m, point culminant). Fleuves : Cavally, Sassandra, <b>Bandama</b>, Comoé. Lacs de barrage : Kossou, Buyo.") +
          rg("Sous-sol", "Or, manganèse, pétrole et gaz (gisement Baleine), fer, nickel, diamant.") +
          rg("Population", "<b>29 389 150</b> habitants (recensement de 2021), très jeune ; plus de 60 ethnies en 4 grands groupes : Akan, Krou, Mandé, Gour (Voltaïques)."),
        qs: [
          ["Quelle est la superficie de la Côte d'Ivoire ?", "322 462 km²", "32 246 km²", "3 224 620 km²", "1 000 000 km²", "Environ 322 000 km²."],
          ["Quel est le point culminant du pays ?", "Le mont Nimba (1 752 m)", "Le mont Tonkoui", "Le Kilimandjaro", "Le mont Péko", "Situé à l'ouest, à la frontière avec la Guinée et le Liberia."],
          ["Quel climat domine au sud du pays ?", "Équatorial", "Désertique", "Tropical sec", "Polaire", "Avec quatre saisons et une forêt dense."],
          ["Combien d'habitants comptait la Côte d'Ivoire au recensement de 2021 ?", "Environ 29,4 millions", "Environ 2,9 millions", "Environ 100 millions", "Environ 10 millions", "29 389 150 habitants."],
          ["Lequel est un fleuve de Côte d'Ivoire ?", "Le Bandama", "Le Niger", "Le Congo", "Le Nil", "Avec la Comoé, le Sassandra et le Cavally."],
          ["Quels sont les 4 grands groupes ethniques ?", "Akan, Krou, Mandé, Gour", "Baoulé, Bété, Dioula, Agni", "Peuls, Zoulous, Massaïs, Berbères", "Akan, Bantou, Arabe, Touareg", "Chacun comprend de nombreuses ethnies."],
          ["Quelle végétation domine au nord ?", "La savane", "La forêt dense", "Le désert", "La mangrove", "Le climat y est tropical, avec une longue saison sèche."],
          ["Quel gisement de pétrole découvert en 2021 est un atout récent ?", "Baleine", "Sankofa", "Kossou", "Tonkoui", "En production depuis 2023."],
          ["Lequel est un pays voisin de la Côte d'Ivoire ?", "Le Burkina Faso", "Le Sénégal", "Le Nigeria", "Le Cameroun", "Voisins : Liberia, Guinée, Mali, Burkina Faso, Ghana."],
          ["Une population jeune est un atout car :", "elle fournit une main-d'œuvre nombreuse", "elle ne consomme rien", "elle ne travaille pas", "ce n'est pas un atout", "À condition d'être formée et employée."]
        ] },
      { id: "hg-secteurs", titre: "Géographie · Les secteurs d'activités économiques de la Côte d'Ivoire",
        cours: rg("Primaire", "Agriculture, élevage, pêche. <b>1er producteur mondial de cacao</b> et de <b>noix de cajou (anacarde)</b>, 1er producteur africain d'<b>hévéa</b>. Aussi : café, palmier à huile, coton, banane, ananas.") +
          rg("Secondaire", "Industries agroalimentaires (transformation du cacao), raffinerie (SIR), BTP, mines (or), énergie : barrages (Kossou, Taabo, Buyo, <b>Soubré</b>) et centrales thermiques au gaz.") +
          rg("Tertiaire", "Commerce, banques, télécoms, transports : <b>port autonome d'Abidjan</b>, <b>port de San-Pedro</b> (grand port d'exportation du cacao), aéroport Félix-Houphouët-Boigny, chemin de fer Abidjan–Ouagadougou.") +
          rg("À retenir", "Le cacao et l'anacarde rapportent beaucoup de devises, mais le pays dépend des prix mondiaux (en 2026, le prix du cacao au planteur est passé de 2 800 à 1 200 F le kilo)."),
        qs: [
          ["Dans quels produits la Côte d'Ivoire est-elle 1er producteur mondial ?", "Le cacao et la noix de cajou", "Le pétrole et le gaz", "Le blé et le maïs", "Le café et le thé", "Deux cultures majeures d'exportation."],
          ["L'agriculture appartient au secteur :", "primaire", "secondaire", "tertiaire", "quaternaire", "Le primaire exploite directement la nature."],
          ["Une banque appartient au secteur :", "tertiaire", "primaire", "secondaire", "agricole", "Le tertiaire regroupe les services."],
          ["La transformation du cacao en chocolat relève du secteur :", "secondaire", "primaire", "tertiaire", "aucun", "Le secondaire transforme les matières premières."],
          ["Quel port est un grand port d'exportation du cacao ?", "San-Pedro", "Grand-Bassam", "Sassandra", "Jacqueville", "Avec le port autonome d'Abidjan."],
          ["Lequel est un barrage hydroélectrique ivoirien ?", "Soubré", "Assouan", "Kariba", "Akosombo", "Mis en service en 2017."],
          ["La Côte d'Ivoire est le 1er producteur africain de :", "l'hévéa (caoutchouc)", "pétrole", "diamant", "blé", "Le caoutchouc naturel est exporté."],
          ["Quelle ligne de chemin de fer relie la Côte d'Ivoire à un pays voisin ?", "Abidjan – Ouagadougou", "Abidjan – Dakar", "Abidjan – Lagos", "Abidjan – Accra", "Elle traverse Bouaké et Ferkessédougou."],
          ["Pourquoi la dépendance au cacao est-elle un risque ?", "Les revenus varient avec les prix mondiaux", "Le cacao ne se vend pas", "Il n'y a pas de risque", "Le cacao pousse partout", "Exemple : la forte baisse du prix au planteur en 2026."],
          ["Les télécommunications appartiennent au secteur :", "tertiaire", "primaire", "secondaire", "minier", "Ce sont des services."]
        ] },
      { id: "hg-problemes", titre: "Géographie · Les problèmes du développement économique de la Côte d'Ivoire",
        cours: rg("Problèmes", "Dépendance aux produits agricoles d'exportation et aux cours mondiaux, faible transformation locale, endettement, chômage des jeunes, exode rural, déforestation, inégalités entre régions, corruption, insuffisances d'énergie et d'infrastructures.") +
          rg("Solutions", "Diversification de l'économie, transformation locale (cacao, anacarde), formation professionnelle, soutien à l'entrepreneuriat des jeunes, bonne gouvernance, protection de l'environnement, plans nationaux de développement."),
        qs: [
          ["Lequel est un problème du développement économique ivoirien ?", "La faible transformation locale des matières premières", "La trop grande richesse", "L'absence d'agriculture", "Le manque de population", "Le pays exporte beaucoup de produits bruts."],
          ["L'exode rural, c'est :", "le départ des populations des campagnes vers les villes", "le retour au village", "un voyage à l'étranger", "une migration d'oiseaux", "Il fait gonfler les quartiers précaires des villes."],
          ["Une solution à la dépendance au cacao est :", "la diversification de l'économie", "planter encore plus de cacao seulement", "arrêter toute agriculture", "importer du cacao", "Développer d'autres cultures, industries et services."],
          ["La déforestation est liée surtout :", "à l'extension des plantations et à l'exploitation du bois", "à la pluie", "aux parcs nationaux", "au reboisement", "La Côte d'Ivoire a perdu une grande partie de sa forêt."],
          ["Transformer le cacao sur place permet :", "de créer des emplois et plus de valeur", "de perdre de l'argent", "de réduire les salaires", "rien", "Le chocolat vaut beaucoup plus que la fève brute."],
          ["Le chômage des jeunes peut être réduit par :", "la formation professionnelle et l'entrepreneuriat", "l'abandon scolaire", "l'exode rural", "la corruption", "Adapter les formations aux besoins de l'économie."],
          ["La corruption freine le développement car :", "elle détourne l'argent public", "elle crée des routes", "elle aide les écoles", "elle n'a aucun effet", "Moins d'argent pour les services publics."],
          ["Les inégalités régionales signifient :", "que certaines régions sont moins équipées que d'autres", "que toutes les régions sont égales", "qu'il y a trop d'écoles", "que le pays est petit", "Le sud a longtemps concentré les équipements."]
        ] },
      { id: "hg-afrique", titre: "Géographie · L'Afrique : étude économique et mondialisation",
        cours: rg("Atouts", "Immenses ressources : pétrole (Nigeria, Angola), or (Ghana, Afrique du Sud), cobalt (RD Congo), cacao, terres agricoles ; population très jeune (environ 1,5 milliard d'habitants).") +
          rg("Faiblesses", "Économies dépendantes des matières premières, industrie faible, pauvreté, dette, conflits, infrastructures insuffisantes.") +
          rg("Organisations régionales", "<b>CEDEAO</b> (1975, siège à Abuja) ; <b>UEMOA</b> (1994, siège à Ouagadougou, franc CFA). En janvier 2025, le Mali, le Burkina Faso et le Niger ont quitté la CEDEAO et forment l'<b>AES</b> (Alliance des États du Sahel).") +
          rg("L'Afrique dans la mondialisation", "Environ <b>3 %</b> du commerce mondial. Elle exporte surtout des matières premières et importe des produits manufacturés. Partenaires : Chine, Union européenne, États-Unis… La <b>ZLECAf</b> (échanges lancés en 2021, secrétariat à Accra) veut développer le commerce entre Africains."),
        qs: [
          ["Quelle part du commerce mondial l'Afrique représente-t-elle environ ?", "3 %", "30 %", "50 %", "75 %", "Une place encore marginale."],
          ["Où se trouve le siège de la CEDEAO ?", "À Abuja", "À Abidjan", "À Ouagadougou", "À Addis-Abeba", "Au Nigeria."],
          ["Quels pays ont quitté la CEDEAO en janvier 2025 ?", "Le Mali, le Burkina Faso et le Niger", "Le Ghana, le Togo et le Bénin", "Le Sénégal et la Gambie", "La Côte d'Ivoire et le Liberia", "Ils forment l'Alliance des États du Sahel (AES)."],
          ["L'Afrique exporte surtout :", "des matières premières", "des avions", "des ordinateurs", "des voitures", "Et importe des produits manufacturés."],
          ["L'UEMOA utilise comme monnaie :", "le franc CFA", "l'euro", "le dollar", "le naira", "Union économique et monétaire ouest-africaine."],
          ["Quel pays africain est connu pour le cobalt ?", "La RD Congo", "Le Maroc", "Le Sénégal", "Madagascar", "Métal utilisé dans les batteries de téléphones."],
          ["La mondialisation, c'est :", "l'intensification des échanges à l'échelle de la planète", "la fermeture des frontières", "la fin du commerce", "une guerre", "Marchandises, capitaux, informations, personnes."],
          ["Où se trouve le secrétariat de la ZLECAf ?", "À Accra", "À Abuja", "À Dakar", "À Nairobi", "Au Ghana."],
          ["Une faiblesse de l'économie africaine est :", "une industrie encore faible", "une population trop âgée", "l'absence de ressources", "le manque de terres", "La transformation locale reste limitée."],
          ["Un atout de l'Afrique pour l'avenir est :", "sa population jeune", "son climat polaire", "l'absence de ressources", "son isolement", "Environ 60 % des Africains ont moins de 25 ans."]
        ] }
    ] };

  const MAT_EDHC = { id: "edhc", nom: "EDHC", icone: "⚖", couleur: "#2E7F8C", examen: "Écrit",
    chapitres: [
      { id: "edhc-parents", titre: "Les devoirs des parents et l'épanouissement de l'enfant", theme: "Droits de l'Homme et DIH",
        cours: rg("Texte de référence", "La <b>Convention relative aux droits de l'enfant</b> (ONU, 20 novembre 1989), ratifiée par la Côte d'Ivoire.") +
          rg("Devoirs des parents", "Déclarer la naissance (acte de naissance), nourrir, loger, soigner, <b>scolariser</b> (école obligatoire de 6 à 16 ans depuis 2015), protéger, éduquer, permettre les loisirs, écouter l'enfant.") +
          rg("Devoirs de l'enfant", "Respecter ses parents, étudier, participer aux tâches adaptées à son âge.") +
          rg("Dates", "20 novembre : Journée internationale des droits de l'enfant. 16 juin : Journée de l'enfant africain."),
        qs: [
          ["Quel texte international protège les droits de l'enfant ?", "La Convention relative aux droits de l'enfant (1989)", "Le traité de Versailles", "La Charte de l'ONU seulement", "Le code de la route", "Adoptée par l'ONU le 20 novembre 1989."],
          ["Jusqu'à quel âge l'école est-elle obligatoire en Côte d'Ivoire ?", "16 ans", "10 ans", "12 ans", "21 ans", "Scolarisation obligatoire de 6 à 16 ans depuis 2015."],
          ["Lequel est un devoir des parents ?", "Déclarer la naissance de l'enfant", "Faire travailler l'enfant au champ toute la journée", "Marier leur fille à 14 ans", "Priver l'enfant de loisirs", "Sans acte de naissance, l'enfant ne peut pas passer d'examen."],
          ["Le 16 juin est la journée :", "de l'enfant africain", "de l'indépendance", "de la femme", "du travail", "En souvenir des élèves de Soweto (1976)."],
          ["L'épanouissement de l'enfant, c'est :", "son développement physique, intellectuel et moral harmonieux", "le fait de ne jamais aller à l'école", "le travail précoce", "la punition", "Il a besoin d'amour, de soins, d'éducation et de loisirs."],
          ["Lequel est un devoir de l'enfant ?", "Respecter ses parents", "Refuser d'aller à l'école", "Frapper ses frères", "Désobéir", "Droits et devoirs vont ensemble."],
          ["Pourquoi les loisirs sont-ils un droit de l'enfant ?", "Ils contribuent à son développement et à son équilibre", "Ils sont inutiles", "Ils remplacent l'école", "Ils sont réservés aux adultes", "Jeu, sport et culture font partie de l'éducation."],
          ["Le 20 novembre est la Journée :", "internationale des droits de l'enfant", "de l'indépendance", "de la paix", "de l'eau", "Date d'adoption de la Convention (1989)."]
        ] },
      { id: "edhc-violences", titre: "Les instruments de protection contre les violences", theme: "Droits de l'Homme et DIH",
        cours: rg("Violences", "Physiques (coups), sexuelles (viol, harcèlement), psychologiques (insultes, menaces), économiques ; pratiques néfastes : mariage forcé ou précoce, <b>mutilations génitales féminines</b> (interdites par une loi de 1998).") +
          rg("Instruments", "<b>DUDH</b> (10 décembre 1948), Convention relative aux droits de l'enfant, Charte africaine des droits et du bien-être de l'enfant, Constitution ivoirienne, code pénal.") +
          rg("Mécanismes", "Police, gendarmerie, justice, centres sociaux, <b>CNDH</b> (Conseil national des droits de l'homme), ONG, lignes d'écoute pour les enfants.") +
          rg("Que faire ?", "Parler à un adulte de confiance, dénoncer, ne pas se taire, accompagner la victime vers un centre social ou de santé."),
        qs: [
          ["Quand la Déclaration universelle des droits de l'homme a-t-elle été adoptée ?", "Le 10 décembre 1948", "Le 7 août 1960", "Le 20 novembre 1989", "Le 25 mai 1963", "Journée des droits de l'homme le 10 décembre."],
          ["Les mutilations génitales féminines sont en Côte d'Ivoire :", "interdites et punies par la loi (depuis 1998)", "obligatoires", "encouragées", "autorisées", "Elles causent de graves souffrances et des risques pour la santé."],
          ["Que signifie CNDH ?", "Conseil national des droits de l'homme", "Comité national du développement humain", "Centre national de la danse", "Conseil des nations et des hommes", "Il reçoit les plaintes et surveille le respect des droits."],
          ["Lequel est une violence psychologique ?", "Les insultes et les menaces répétées", "Un vaccin", "Un conseil", "Un encouragement", "Elles blessent autant que les coups."],
          ["Face à une violence subie par un camarade, il faut :", "en parler à un adulte de confiance", "se taire", "se moquer", "filmer et partager", "Dénoncer protège la victime."],
          ["Le mariage d'une fille de 14 ans est :", "un mariage précoce, interdit", "une bonne tradition", "obligatoire", "sans conséquence", "Il met fin à la scolarité et met la santé en danger."],
          ["Lequel est un mécanisme de protection ?", "La justice", "La rumeur", "La vengeance", "Le silence", "Police, gendarmerie, justice et CNDH protègent les victimes."],
          ["La Charte africaine des droits et du bien-être de l'enfant est un texte :", "de l'Union africaine", "de la FIFA", "du PDCI", "de la CEDEAO seulement", "Adoptée par l'OUA en 1990."]
        ] },
      { id: "edhc-humanitaire", titre: "Les organisations humanitaires et l'assistance aux populations", theme: "Droits de l'Homme et DIH",
        cours: rg("Le Droit international humanitaire (DIH)", "Règles qui limitent les effets des conflits armés : protéger les civils, les blessés, les prisonniers. Textes : <b>Conventions de Genève</b> (1949).") +
          rg("La Croix-Rouge", "Le <b>CICR</b> est fondé en <b>1863</b> à Genève à l'initiative d'<b>Henri Dunant</b>, marqué par la bataille de Solférino (1859). Chaque pays a sa société nationale (Croix-Rouge de Côte d'Ivoire). Emblèmes protégés : croix rouge, croissant rouge.") +
          rg("Autres organisations", "HCR (réfugiés), UNICEF (enfants), PAM (alimentation), OMS (santé), Médecins sans frontières (MSF).") +
          rg("Principes", "Humanité, impartialité, neutralité, indépendance, volontariat, unité, universalité."),
        qs: [
          ["Qui a fondé la Croix-Rouge ?", "Henri Dunant", "Kofi Annan", "Albert Schweitzer", "Nelson Mandela", "Après avoir vu les blessés de la bataille de Solférino (1859)."],
          ["En quelle année le CICR a-t-il été fondé ?", "1863", "1945", "1960", "1989", "À Genève, en Suisse."],
          ["Les Conventions de Genève protègent :", "les civils, les blessés et les prisonniers en temps de guerre", "les commerçants", "les joueurs de football", "les animaux domestiques", "C'est le cœur du droit international humanitaire."],
          ["Quelle organisation s'occupe des réfugiés ?", "Le HCR", "L'OMS", "La FAO", "La FIFA", "Haut-Commissariat des Nations unies pour les réfugiés."],
          ["Le principe de neutralité signifie :", "ne prendre parti pour aucun camp", "choisir le camp le plus fort", "vendre des armes", "ne jamais aider", "Cela permet d'accéder à toutes les victimes."],
          ["L'emblème de la croix rouge doit être :", "respecté et protégé", "attaqué", "utilisé comme publicité", "ignoré", "Attaquer une ambulance ou un hôpital est un crime de guerre."],
          ["Quelle organisation de l'ONU aide les enfants ?", "L'UNICEF", "Le HCR", "L'OMS", "La Banque mondiale", "Fonds des Nations unies pour l'enfance."],
          ["Le principe d'impartialité signifie :", "aider selon les besoins, sans discrimination", "aider seulement ses amis", "aider les riches d'abord", "ne jamais aider", "L'aide va d'abord aux plus urgents."]
        ] },
      { id: "edhc-partis", titre: "Les comportements responsables face aux partis politiques et aux institutions", theme: "Le citoyen et la démocratie",
        cours: rg("Partis politiques", "Associations qui veulent conquérir et exercer le pouvoir par les <b>élections</b>. Le multipartisme existe en Côte d'Ivoire depuis <b>1990</b>.") +
          rg("Institutions (Constitution du 8 novembre 2016)", "Président de la République, Vice-président, Gouvernement, <b>Parlement</b> (Assemblée nationale et Sénat), Conseil constitutionnel, Cour de cassation, Conseil d'État, Cour des comptes, Chambre nationale des rois et chefs traditionnels…") +
          rg("Comportements responsables", "Tolérance, respect des opinions des autres, refus de la violence et des discours de haine, respect des institutions et des résultats des élections, pas de politique à l'école."),
        qs: [
          ["Depuis quand le multipartisme existe-t-il en Côte d'Ivoire ?", "1990", "1960", "2016", "1946", "Avant 1990, il y avait un parti unique."],
          ["Le rôle d'un parti politique est :", "de conquérir et d'exercer le pouvoir par les élections", "de prendre le pouvoir par les armes", "de vendre des produits", "de juger les citoyens", "Dans le respect de la loi."],
          ["Le Parlement ivoirien comprend :", "l'Assemblée nationale et le Sénat", "le Président et le Vice-président", "les ministres", "les maires", "Il vote les lois."],
          ["Quelle institution vérifie que les lois respectent la Constitution ?", "Le Conseil constitutionnel", "La mairie", "Le Sénat", "La police", "Il proclame aussi les résultats de la présidentielle."],
          ["Un comportement responsable en politique, c'est :", "respecter les opinions différentes", "insulter les adversaires", "casser les biens publics", "diffuser de fausses nouvelles", "La tolérance est une valeur démocratique."],
          ["De quand date la Constitution actuelle de la Côte d'Ivoire ?", "8 novembre 2016", "3 novembre 1960", "1er août 2000", "7 août 1960", "Elle crée le poste de Vice-président et le Sénat."],
          ["Qui vote les lois ?", "Le Parlement", "Le Conseil d'État", "Les partis politiques", "La police", "Assemblée nationale et Sénat."],
          ["Les discours de haine sur les réseaux sociaux sont :", "punis par la loi", "autorisés", "encouragés", "sans conséquence", "La loi sur la cybercriminalité les réprime (renforcée en 2023)."]
        ] },
      { id: "edhc-vote", titre: "Le vote et la participation du citoyen à la vie de la Nation", theme: "Le citoyen et la démocratie",
        cours: rg("Le vote", "Droit et devoir civique. En Côte d'Ivoire, on vote à partir de <b>18 ans</b>, inscrit sur la <b>liste électorale</b>, avec sa carte d'électeur et une pièce d'identité.") +
          rg("Organisation", "La <b>CEI</b> (Commission électorale indépendante) organise les élections. Le vote est <b>secret</b> (isoloir) ; le bulletin est déposé dans l'<b>urne</b>.") +
          rg("Élections", "Présidentielle (tous les 5 ans), législatives, sénatoriales, municipales, régionales.") +
          rg("Participer autrement", "S'informer, s'engager dans des associations, respecter les lois, payer ses impôts, protéger les biens publics."),
        qs: [
          ["À partir de quel âge peut-on voter en Côte d'Ivoire ?", "18 ans", "16 ans", "21 ans", "25 ans", "Il faut aussi être inscrit sur la liste électorale."],
          ["Quelle institution organise les élections ?", "La CEI", "La CIE", "La SODECI", "La DGI", "Commission électorale indépendante."],
          ["À quoi sert l'isoloir ?", "À garantir le secret du vote", "À compter les voix", "À ranger les urnes", "À faire campagne", "Personne ne doit savoir pour qui on vote."],
          ["Tous les combien d'années a lieu l'élection présidentielle ?", "5 ans", "2 ans", "10 ans", "7 ans", "Mandat de 5 ans."],
          ["L'abstention, c'est :", "le fait de ne pas aller voter", "voter deux fois", "être candidat", "compter les bulletins", "Une forte abstention affaiblit la démocratie."],
          ["Le vote est :", "un droit et un devoir civique", "une obligation payante", "réservé aux riches", "interdit aux femmes", "Suffrage universel : tous les citoyens majeurs."],
          ["Où dépose-t-on son bulletin ?", "Dans l'urne", "Dans l'isoloir", "À la mairie", "Au Conseil constitutionnel", "L'urne est ouverte publiquement au dépouillement."],
          ["Lequel est une façon de participer à la vie de la Nation, même avant 18 ans ?", "S'engager dans une association de son quartier", "Casser du matériel", "Frauder", "Refuser les règles", "Clubs, associations, service civique, bénévolat."]
        ] },
      { id: "edhc-impot", titre: "L'impôt et le développement de la Nation", theme: "Le citoyen et la démocratie",
        cours: rg("Définition", "Contribution <b>obligatoire</b> versée par les citoyens et les entreprises à l'État et aux collectivités, sans contrepartie directe.") +
          rg("Types", "<b>Directs</b> : impôt sur les salaires, impôt foncier, patente. <b>Indirects</b> : la <b>TVA</b> (18 % en Côte d'Ivoire), les droits de douane.") +
          rg("À quoi il sert", "Construire écoles, hôpitaux, routes ; payer les enseignants, médecins, policiers ; assurer la sécurité.") +
          rg("Incivisme fiscal", "Fraude, évasion, contrebande : moins d'argent pour les services publics. Les impôts sont collectés par la <b>DGI</b> (Direction générale des impôts)."),
        qs: [
          ["Qu'est-ce que l'impôt ?", "Une contribution obligatoire au financement de l'État", "Un cadeau volontaire", "Une amende", "Un salaire", "Il finance les services publics."],
          ["La TVA est un impôt :", "indirect", "direct", "facultatif", "réservé aux étrangers", "On la paie en achetant des biens et des services."],
          ["Quel est le taux normal de la TVA en Côte d'Ivoire ?", "18 %", "5 %", "50 %", "0 %", "Il est inclus dans le prix payé."],
          ["À quoi servent les impôts ?", "À construire des écoles, des routes et des hôpitaux", "À enrichir quelques personnes", "À rien", "À payer les dettes des particuliers", "Ils financent l'intérêt général."],
          ["Quelle administration collecte les impôts ?", "La DGI", "La CEI", "La SODECI", "Le CNTS", "Direction générale des impôts."],
          ["La fraude fiscale est :", "un comportement incivique puni par la loi", "un droit", "une bonne gestion", "obligatoire", "Elle prive l'État de ressources."],
          ["L'impôt foncier porte sur :", "les terrains et les bâtiments", "les salaires", "les achats", "les importations", "C'est un impôt direct."],
          ["Payer ses impôts, c'est :", "participer au développement de la Nation", "perdre son argent", "être puni", "un acte inutile", "Un devoir civique."]
        ] },
      { id: "edhc-biens", titre: "L'utilisation rationnelle des biens publics", theme: "La cohésion en famille et dans la communauté",
        cours: rg("Biens publics", "Biens qui appartiennent à tous : écoles, tables-bancs, routes, ponts, lampadaires, hôpitaux, jardins publics, bornes-fontaines, transports publics.") +
          rg("Pourquoi les protéger", "Ils sont payés avec l'argent de tous (impôts) et servent à tous, aujourd'hui et demain.") +
          rg("Comportements", "Ne pas dégrader ni voler, signaler les pannes, économiser l'eau et l'électricité, garder propres les lieux publics. Le vandalisme est puni par la loi."),
        qs: [
          ["Lequel est un bien public ?", "Une table-banc de l'école", "Mon téléphone", "La voiture du voisin", "Le pagne de ma mère", "Il appartient à la collectivité."],
          ["Avec quel argent les biens publics sont-ils financés ?", "L'argent des impôts de tous", "L'argent d'une seule famille", "Ils sont gratuits pour l'État", "L'argent des élèves uniquement", "Détruire un bien public, c'est gaspiller l'argent de tous."],
          ["Le vandalisme, c'est :", "la destruction volontaire de biens", "l'entretien des biens", "le vote", "un sport", "Il est puni par la loi."],
          ["Que faire si un robinet public fuit ?", "Le signaler aux responsables", "L'ignorer", "Le casser", "Emporter l'eau pour la vendre", "C'est un geste de citoyen responsable."],
          ["Écrire sur les tables de la classe est :", "une dégradation d'un bien public", "une bonne idée", "obligatoire", "un droit", "Les tables serviront à d'autres élèves."],
          ["Utiliser rationnellement un bien public, c'est :", "s'en servir correctement et le préserver", "le garder pour soi", "le détruire après usage", "le vendre", "Pour qu'il serve longtemps à tous."],
          ["Lequel n'est PAS un bien public ?", "Ma bicyclette personnelle", "Un pont", "Un hôpital public", "Un lampadaire de rue", "C'est un bien privé."],
          ["Le bien-être de la communauté dépend :", "du respect des biens communs par chacun", "de la destruction des biens", "du hasard", "de l'État seulement", "Chacun a sa part de responsabilité."]
        ] },
      { id: "edhc-entreprise", titre: "Le projet d'entreprise et l'insertion sociale", theme: "La cohésion en famille et dans la communauté",
        cours: rg("Étapes d'un projet", "1. Trouver une <b>idée</b>. 2. Faire une <b>étude de marché</b> (clients, concurrents, prix). 3. Rédiger un <b>plan d'affaires</b>. 4. Trouver le <b>financement</b> (épargne, tontine, microfinance, structures d'appui aux jeunes). 5. Créer l'entreprise (formalités). 6. Gérer et évaluer.") +
          rg("Qualités de l'entrepreneur", "Créativité, persévérance, rigueur, honnêteté, sens des responsabilités.") +
          rg("Insertion sociale", "Créer son activité permet d'avoir un revenu, d'être utile, et parfois d'employer d'autres personnes."),
        qs: [
          ["Quelle est la première étape d'un projet d'entreprise ?", "Trouver une idée", "Embaucher des employés", "Payer les impôts", "Fermer l'entreprise", "Puis l'étude de marché."],
          ["L'étude de marché sert à connaître :", "les clients, les concurrents et les prix", "la météo", "les résultats du BEPC", "les partis politiques", "Pour savoir si le projet peut marcher."],
          ["Le plan d'affaires (business plan) est :", "un document qui décrit le projet et ses chiffres", "une carte routière", "un contrat de travail", "un diplôme", "Il sert aussi à convaincre les financeurs."],
          ["Lequel est un moyen de financement accessible ?", "L'épargne ou la tontine", "Le vol", "La corruption", "Les jeux de hasard", "Aussi la microfinance et les structures d'appui aux jeunes."],
          ["Une qualité importante de l'entrepreneur est :", "la persévérance", "la paresse", "la malhonnêteté", "l'impatience", "Les débuts sont souvent difficiles."],
          ["L'insertion sociale, c'est :", "trouver sa place dans la société par une activité", "quitter la société", "rester sans rien faire", "aller en prison", "Le travail donne un revenu et de la dignité."],
          ["Pourquoi tenir une comptabilité ?", "Pour connaître ses recettes, ses dépenses et son bénéfice", "Pour rien", "Pour décorer le bureau", "Pour payer moins cher", "C'est la base d'une bonne gestion."],
          ["L'auto-emploi, c'est :", "créer son propre emploi", "attendre un emploi de l'État", "travailler sans salaire pour un autre", "le chômage", "Une réponse au chômage des jeunes."]
        ] },
      { id: "edhc-alliances", titre: "Les alliances entre les peuples Mandé et Gour et la cohésion sociale", theme: "La cohésion en famille et dans la communauté",
        cours: rg("Les peuples", "<b>Mandé</b> : Mandé du nord (Malinké, Dioula…) et Mandé du sud (Dan ou Yacouba, Gouro, Gagou, Toura…). <b>Gour</b> ou Voltaïques : Sénoufo, Lobi, Koulango, Tagbana, Djimini…") +
          rg("Les alliances interethniques", "Pactes anciens entre peuples, souvent appelés « <b>alliances à plaisanterie</b> » : les alliés peuvent se taquiner sans se fâcher, ont le devoir de s'entraider et l'interdiction de se faire du mal ou de verser le sang de l'allié.") +
          rg("Rôle", "Désamorcer les conflits par l'humour, rapprocher les communautés, renforcer la <b>cohésion sociale</b> et la paix. Elles ne doivent jamais servir à humilier."),
        qs: [
          ["Les Sénoufo appartiennent au groupe :", "Gour (Voltaïque)", "Akan", "Krou", "Mandé", "Avec les Lobi, les Koulango, les Tagbana…"],
          ["Les Malinké appartiennent au groupe :", "Mandé", "Gour", "Akan", "Krou", "Mandé du nord."],
          ["Les Dan (Yacouba) et les Gouro sont des peuples :", "Mandé du sud", "Akan", "Gour", "Krou", "Ils vivent à l'ouest et au centre-ouest."],
          ["Une alliance à plaisanterie permet :", "de se taquiner sans se fâcher et impose l'entraide", "de se battre", "d'insulter gravement", "de voler l'allié", "Elle désamorce les tensions par l'humour."],
          ["L'interdit principal d'une alliance est :", "de faire du mal à son allié", "de rire", "de se marier", "de voyager", "Verser le sang de l'allié est un tabou."],
          ["Les alliances interethniques renforcent :", "la cohésion sociale", "les divisions", "la violence", "l'exclusion", "Elles rappellent que les peuples sont liés."],
          ["Une plaisanterie entre alliés ne doit jamais :", "servir à humilier", "faire rire", "rapprocher", "rappeler l'alliance", "Le respect reste la règle."],
          ["Combien y a-t-il de grands groupes ethniques en Côte d'Ivoire ?", "4 (Akan, Krou, Mandé, Gour)", "2", "10", "60", "Qui regroupent plus de 60 ethnies."]
        ] },
      { id: "edhc-sante", titre: "La fréquentation des centres de santé et la lutte contre l'automédication", theme: "Les comportements de l'adolescent",
        cours: rg("Automédication", "Se soigner soi-même sans avis médical. Dangers : mauvais diagnostic, mauvaise dose, intoxication, résistance aux médicaments, maladie qui s'aggrave.") +
          rg("Médicaments de la rue", "Vendus hors des pharmacies, souvent <b>faux</b>, périmés ou mal conservés (au soleil) : ils peuvent tuer.") +
          rg("Bons réflexes", "Consulter tôt dans un centre de santé, acheter les médicaments en <b>pharmacie</b> avec une ordonnance, respecter les doses et la durée du traitement.") +
          rg("CMU", "La Couverture maladie universelle aide à payer les soins."),
        qs: [
          ["L'automédication, c'est :", "se soigner sans avis médical", "aller à l'hôpital", "se faire vacciner", "suivre une ordonnance", "Elle comporte de nombreux risques."],
          ["Pourquoi les médicaments de la rue sont-ils dangereux ?", "Ils sont souvent faux, périmés ou mal conservés", "Ils sont trop chers", "Ils sont trop efficaces", "Ils ne sont pas dangereux", "Ils peuvent causer des intoxications graves."],
          ["Où faut-il acheter ses médicaments ?", "En pharmacie", "Au marché", "Dans un car", "Chez un ami", "Les pharmacies garantissent la qualité."],
          ["Que faire en cas de fièvre ?", "Consulter rapidement un centre de santé", "Prendre n'importe quel comprimé", "Attendre une semaine", "Acheter des médicaments au marché", "La fièvre peut être un paludisme grave."],
          ["Arrêter un traitement antibiotique trop tôt peut :", "rendre les microbes résistants", "guérir plus vite", "n'avoir aucun effet", "protéger du VIH", "Il faut respecter la durée prescrite."],
          ["Que signifie CMU ?", "Couverture maladie universelle", "Centre médical urbain", "Carte municipale unique", "Comité des maladies urbaines", "Pour faciliter l'accès aux soins."],
          ["L'ordonnance est rédigée par :", "un médecin ou un agent de santé habilité", "le vendeur de rue", "un camarade", "le chauffeur de gbaka", "Elle précise le médicament et la dose."],
          ["Lequel est un bon réflexe ?", "Respecter la dose indiquée", "Doubler la dose pour guérir plus vite", "Partager ses médicaments", "Garder les médicaments au soleil", "Une surdose peut être mortelle."]
        ] },
      { id: "edhc-depistage", titre: "Les bienfaits du dépistage du VIH et la gestion de la vie", theme: "Les comportements de l'adolescent",
        cours: rg("Le dépistage", "Test sanguin <b>gratuit, volontaire et confidentiel</b>, accompagné de conseils.") +
          rg("Bienfaits", "Connaître son statut ; se protéger et protéger les autres ; si le test est positif, commencer tôt les <b>ARV</b> (gratuits) et vivre normalement ; éviter la transmission à son bébé (PTME).") +
          rg("Gestion de la vie", "Hygiène de vie, fidélité au traitement, projets d'avenir, soutien de la famille ; lutter contre la <b>stigmatisation</b>.") +
          rg("Objectif mondial", "95-95-95 : 95 % des personnes connaissent leur statut, 95 % d'entre elles sont traitées, 95 % des personnes traitées ont une charge virale indétectable."),
        qs: [
          ["Le dépistage du VIH est :", "gratuit, volontaire et confidentiel", "payant et public", "obligatoire à l'école", "interdit aux mineurs", "Le résultat n'est remis qu'à la personne."],
          ["Le principal bienfait du dépistage est :", "connaître son statut pour agir", "avoir peur", "être rejeté", "rien", "On peut se protéger ou se soigner tôt."],
          ["Une personne séropositive sous ARV peut :", "vivre normalement et longtemps", "guérir en une semaine", "ne jamais travailler", "transmettre le virus en serrant la main", "Le traitement contrôle le virus."],
          ["La stigmatisation des personnes vivant avec le VIH :", "les décourage de se faire dépister et soigner", "les aide", "est obligatoire", "est une bonne chose", "Il faut la combattre."],
          ["Les ARV en Côte d'Ivoire sont :", "gratuits", "très chers", "interdits", "vendus au marché", "Grâce aux programmes nationaux."],
          ["Que signifie « 95-95-95 » ?", "Les objectifs mondiaux de dépistage, de traitement et de contrôle du virus", "Un numéro de téléphone", "Un score de football", "Un vaccin", "Objectifs de l'ONUSIDA."],
          ["Pourquoi une femme enceinte doit-elle faire le test ?", "Pour éviter la transmission du VIH à son bébé", "Pour choisir le sexe du bébé", "Ce n'est pas utile", "Pour avoir des jumeaux", "C'est la PTME."],
          ["Gérer sa vie après un test positif, c'est :", "suivre son traitement et garder ses projets", "abandonner ses études", "cacher la vérité à son médecin", "arrêter de manger", "Beaucoup de personnes vivent normalement avec le VIH."]
        ] },
      { id: "edhc-parcs", titre: "La protection des parcs nationaux et des réserves", theme: "Environnement et protection",
        cours: rg("Parcs et réserves", "Parc national de <b>Taï</b> et parc national de la <b>Comoé</b> (patrimoine mondial de l'UNESCO), réserve du <b>mont Nimba</b> (UNESCO), parcs du Banco (Abidjan), d'Azagny, de la Marahoué, du mont Péko, du mont Sangbé, des îles Ehotilé.") +
          rg("Gestion", "L'<b>OIPR</b> (Office ivoirien des parcs et réserves, créé en 2002) protège ces espaces.") +
          rg("Menaces", "Braconnage, orpaillage clandestin, infiltrations agricoles (plantations de cacao), feux de brousse, exploitation illégale du bois.") +
          rg("Pourquoi protéger", "Biodiversité (chimpanzés, hippopotames pygmées, éléphants), climat, eau, tourisme, héritage pour les générations futures."),
        qs: [
          ["Quel parc ivoirien est inscrit au patrimoine mondial de l'UNESCO ?", "Le parc national de Taï", "Le jardin botanique de Bingerville", "Le zoo d'Abidjan", "La forêt du Banco seulement", "Tout comme le parc de la Comoé et le mont Nimba."],
          ["Quel organisme gère les parcs en Côte d'Ivoire ?", "L'OIPR", "La SODECI", "La CEI", "La DGI", "Office ivoirien des parcs et réserves."],
          ["Le braconnage, c'est :", "la chasse illégale", "la plantation d'arbres", "le tourisme", "la recherche scientifique", "Il menace les espèces protégées."],
          ["Quel parc se trouve dans la ville d'Abidjan ?", "Le parc national du Banco", "Le parc de la Comoé", "Le parc de Taï", "Le parc de la Marahoué", "Une forêt en pleine ville."],
          ["Lequel est une menace pour les parcs ?", "L'orpaillage clandestin", "Les gardes forestiers", "La recherche", "L'éducation", "Il détruit les sols et pollue les rivières au mercure."],
          ["Quel animal rare vit dans la forêt de Taï ?", "L'hippopotame pygmée", "L'ours polaire", "Le kangourou", "Le pingouin", "Avec des chimpanzés célèbres pour utiliser des outils."],
          ["Pourquoi protéger les parcs nationaux ?", "Pour préserver la biodiversité pour les générations futures", "Pour y construire des maisons", "Pour y planter du cacao", "Ce n'est pas utile", "Ils protègent aussi l'eau et le climat."],
          ["Planter du cacao dans une forêt classée est :", "une infraction", "encouragé", "obligatoire", "sans conséquence", "Ces infiltrations ont détruit une grande partie des forêts."]
        ] },
      { id: "edhc-eau", titre: "La gestion rationnelle de l'eau et la paix sociale", theme: "Environnement et protection",
        cours: rg("Une ressource précieuse", "L'eau potable est limitée et coûte cher à produire et à distribuer (SODECI dans les villes).") +
          rg("Gaspillage", "Robinets mal fermés, fuites non réparées, lavage excessif, pollution des cours d'eau.") +
          rg("Eau et conflits", "Partage des points d'eau entre éleveurs et agriculteurs, disputes aux bornes-fontaines, entre voisins : une mauvaise gestion de l'eau menace la <b>paix sociale</b>.") +
          rg("Bons gestes", "Fermer les robinets, réparer les fuites, récupérer l'eau de pluie, ne pas jeter de déchets dans les rivières, respecter les tours à la fontaine, dialoguer. 22 mars : Journée mondiale de l'eau."),
        qs: [
          ["Quelle entreprise distribue l'eau potable dans les villes ivoiriennes ?", "La SODECI", "La CIE", "Air Côte d'Ivoire", "La SIR", "La CIE s'occupe de l'électricité."],
          ["La Journée mondiale de l'eau est le :", "22 mars", "7 août", "5 juin", "25 mai", "Le 5 juin est la Journée mondiale de l'environnement."],
          ["Lequel est un gaspillage d'eau ?", "Laisser couler le robinet en se brossant les dents", "Réparer une fuite", "Récupérer l'eau de pluie", "Fermer le robinet", "Un robinet ouvert perd des litres chaque minute."],
          ["Pourquoi l'eau peut-elle provoquer des conflits ?", "Parce qu'elle est rare et partagée", "Parce qu'elle est illimitée", "Parce qu'elle est gratuite partout", "Elle n'en provoque jamais", "Exemple : éleveurs et agriculteurs autour d'un point d'eau."],
          ["Comment éviter un conflit à la borne-fontaine ?", "Respecter les tours et dialoguer", "Se battre", "Casser la borne", "Prendre toute l'eau", "Le dialogue préserve la paix sociale."],
          ["Jeter des déchets dans une rivière :", "pollue l'eau utilisée par d'autres", "la nettoie", "n'a aucun effet", "est recommandé", "Cela menace la santé de tous."],
          ["Récupérer l'eau de pluie permet :", "d'économiser l'eau potable", "de polluer", "de provoquer des inondations", "rien", "Pour l'arrosage ou le nettoyage."],
          ["Une gestion rationnelle de l'eau, c'est :", "l'utiliser sans gaspiller et la partager équitablement", "la garder pour soi", "la vendre très cher", "la gaspiller", "Pour qu'il y en ait pour tous."]
        ] }
    ] };
