  // =========================================================
  // Français (programme de 3e), Anglais, Espagnol
  // =========================================================
  const DICTEES = [
    ["Les mangues que nous avons cueillies ce matin sont déjà mûres.", "« que » (mis pour « les mangues ») est COD placé <b>avant</b> l'auxiliaire avoir : <b>cueillies</b> s'accorde. « mûres » garde l'accent circonflexe."],
    ["Quoique la pluie soit tombée toute la nuit, les élèves sont arrivés à l'heure.", "<b>Quoique</b> (en un mot = bien que) est suivi du subjonctif <b>soit</b>. « arrivés » s'accorde avec le sujet (auxiliaire être)."],
    ["Quelles que soient les difficultés, elle ne se décourage jamais.", "<b>Quelles que</b> (en deux mots) devant le verbe être : « quel » s'accorde avec le sujet « les difficultés »."],
    ["Tous les candidats doivent se présenter munis de leur convocation.", "<b>Tous</b> est ici un déterminant qui s'accorde. <b>munis</b> s'accorde avec « candidats »."],
    ["Les enfants, tout heureux, ont couru vers leurs parents.", "<b>tout</b> est adverbe (= très) devant un adjectif masculin : il reste invariable."],
    ["Elle était toute surprise de voir son frère revenu de Bouaké.", "Devant un adjectif féminin commençant par une consonne, l'adverbe tout s'accorde : <b>toute surprise</b>."],
    ["Ces mêmes élèves ont eux-mêmes nettoyé leur salle de classe.", "<b>mêmes</b> (adjectif, = identiques) s'accorde ; « eux-mêmes » prend un trait d'union et un s."],
    ["Les arguments convaincants du professeur ont rassuré les parents.", "Adjectif verbal : <b>convaincants</b> (avec c), à ne pas confondre avec le participe présent « convainquant »."],
    ["En se levant de bonne heure, on a le temps de réviser ses leçons.", "<b>ses</b> leçons = les siennes (possessif). « on a » : on peut dire « il a »."],
    ["Quand on respecte le code de la route, on sauve des vies.", "<b>on</b> (pronom sujet) et non « ont » (verbe avoir). Test : remplacer par « il »."],
    ["Leur mère leur a offert des cahiers neufs pour la rentrée.", "Le premier <b>leur</b> est un déterminant (singulier : une mère) ; le second est un pronom, toujours invariable."],
    ["Il faut protéger nos forêts, car elles abritent de nombreuses espèces menacées.", "<b>menacées</b> s'accorde avec « espèces » (féminin pluriel)."],
    ["La robe et le pagne que ma tante a achetés sont bleus.", "Participe avec avoir et COD placé avant (« que » = la robe et le pagne) : <b>achetés</b>. Féminin + masculin = accord au <b>masculin pluriel</b> : bleus."],
    ["Bien qu'il ait beaucoup travaillé, il craint encore l'examen.", "<b>Bien que</b> + subjonctif : <b>ait</b>. « craint » : verbe craindre au présent."],
    ["Les filles se sont aidées pour préparer le repas de la fête.", "Verbe pronominal réciproque : elles ont aidé <b>qui ?</b> « se » (les unes les autres), COD placé avant : <b>aidées</b>."],
    ["Quelque temps après, nous sommes partis visiter Yamoussoukro.", "<b>Quelque</b> (= un certain) devant un nom est un déterminant ; « partis » s'accorde avec « nous »."]
  ];
  const normaliserMots = s => s.toLowerCase().replace(/[’`]/g, "'").replace(/[.,;:!?«»"()]/g, " ").replace(/'/g, "' ").split(/\s+/).filter(Boolean);
  function comparerDictee(attendu, saisi) {
    const a = normaliserMots(attendu), b = normaliserMots(saisi);
    const L = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const ok = new Array(a.length).fill(false); let i = 0, j = 0;
    while (i < a.length && j < b.length) { if (a[i] === b[j]) { ok[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    const erreurs = Math.max(a.length, b.length) - L[0][0];
    let k = 0;
    const rendu = attendu.replace(/[’`]/g, "'").replace(/'/g, "' ").split(/\s+/).filter(Boolean).map(brut => {
      if (!normaliserMots(brut).length) return brut;
      const bon = ok[k++];
      return bon ? brut : `<mark class="faute">${brut}</mark>`;
    }).join(" ").replace(/' /g, "'");
    return { erreurs, rendu };
  }
  const genDictees = DICTEES.map(([phrase, expl]) => () => ({ comp: "fr-dictee", type: "texte", dictee: phrase, reponse: phrase, affiche: phrase,
    enonce: `<p>Écoute la phrase (autant de fois que tu veux), puis écris-la exactement.</p><div style="display:flex;gap:8px;flex-wrap:wrap">${btnEcoute(phrase, "fr-FR", "Écouter la dictée")}${btnEcoute(phrase, "fr-FR", "Lentement", false, 0.6)}</div>`,
    explication: expl }));

  const MAT_FR = { id: "francais", nom: "Français", icone: "Aa", couleur: "#B8452B", examen: "Écrit (rédaction + orthographe)",
    chapitres: [
      { id: "fr-dictee", titre: "Dictées (orthographe du BEPC)", special: "dictee",
        cours: rg("L'épreuve d'orthographe", "Au BEPC, l'orthographe est une épreuve écrite à part. Chaque faute compte : relis-toi toujours en vérifiant les accords.") +
          rg("Méthode de relecture", "1. Chaque verbe : trouve son sujet et accorde-le. 2. Chaque participe passé : être → accord avec le sujet ; avoir → accord avec le COD <b>s'il est placé avant</b>. 3. Chaque nom et adjectif : singulier ou pluriel ? 4. Les homophones : a/à, on/ont, ses/ces, leur/leurs, quel que/quelque.") +
          rg("Dans l'application", "Le téléphone lit la phrase ; écris-la, puis vérifie. Les mots mal écrits sont surlignés."),
        qs: [] },
      { id: "fr-communication", titre: "Grammaire · La communication",
        cours: rg("Schéma de la communication", "<b>Émetteur</b> → <b>message</b> → <b>récepteur</b>, grâce à un <b>code</b> (la langue), un <b>canal</b> (voix, papier, téléphone), à propos d'un <b>référent</b> (le sujet dont on parle).") +
          rg("Registres de langue", "<b>Soutenu</b> : « Je suis fort las. » <b>Courant</b> : « Je suis fatigué. » <b>Familier</b> : « Je suis crevé. »") +
          rg("Modalités de phrase", "Déclarative (assertive), interrogative, injonctive (impérative), exclamative.") +
          rg("Oral et écrit", "L'oral utilise l'intonation, les gestes, les répétitions ; l'écrit utilise la ponctuation et une syntaxe plus soignée."),
        qs: [
          ["Dans le schéma de la communication, celui qui reçoit le message est :", "le récepteur", "l'émetteur", "le canal", "le code", "L'émetteur envoie, le récepteur reçoit."],
          ["La langue utilisée pour communiquer s'appelle :", "le code", "le canal", "le référent", "le récepteur", "Émetteur et récepteur doivent partager le même code."],
          ["« Je suis crevé » appartient au registre :", "familier", "soutenu", "courant", "littéraire", "Courant : fatigué ; soutenu : épuisé, las."],
          ["« Veuillez fermer la porte. » est une phrase :", "injonctive", "interrogative", "exclamative", "déclarative", "Elle exprime un ordre ou une demande."],
          ["Le téléphone, dans une communication, est :", "le canal", "le code", "le message", "l'émetteur", "Le canal est le moyen physique de transmission."],
          ["Le référent, c'est :", "ce dont on parle", "celui qui parle", "celui qui écoute", "la langue", "Le sujet ou la réalité évoquée par le message."],
          ["Quel registre utiliser dans une lettre au proviseur ?", "Soutenu ou courant", "Familier", "Argotique", "Celui des réseaux sociaux", "Le registre s'adapte au destinataire."],
          ["« Quelle belle journée ! » est une phrase :", "exclamative", "interrogative", "injonctive", "négative seulement", "Elle exprime un sentiment."],
          ["Un geste ou une mimique relève de la communication :", "non verbale", "écrite", "soutenue", "codée en morse", "Sans mots."],
          ["« Est-ce que tu viens ? » est une phrase :", "interrogative", "déclarative", "injonctive", "exclamative", "Elle pose une question."]
        ] },
      { id: "fr-pronoms", titre: "Grammaire · La pronominalisation",
        cours: rg("Définition", "Remplacer un groupe nominal (ou une proposition) par un <b>pronom</b> pour éviter les répétitions — très utile dans le résumé.") +
          rg("Les pronoms", "<b>Personnels</b> (il, le, lui, leur, en, y), <b>possessifs</b> (le mien, la sienne), <b>démonstratifs</b> (celui-ci, cela), <b>relatifs</b> (qui, que, dont, où, lequel), <b>interrogatifs</b> (qui ? lequel ?), <b>indéfinis</b> (on, chacun, personne).") +
          rg("En et y", "<b>en</b> remplace un complément introduit par <b>de</b> (« Je parle de mon projet » → « J'en parle »). <b>y</b> remplace un complément introduit par <b>à</b> ou un lieu (« Je pense à l'examen » → « J'y pense »)."),
        qs: [
          ["« Je donne le livre à mon frère. » → Je ___ donne.", "le lui", "lui le", "la lui", "le leur", "« le » remplace « le livre », « lui » remplace « à mon frère »."],
          ["« Je pense à l'examen. » → J'___ pense.", "y", "en", "le", "lui", "« y » remplace un complément introduit par « à » (pour une chose)."],
          ["« Il parle de son voyage. » → Il ___ parle.", "en", "y", "le", "la", "« en » remplace un complément introduit par « de »."],
          ["Dans « Ce cahier est le mien », « le mien » est un pronom :", "possessif", "démonstratif", "relatif", "personnel", "Il indique l'appartenance."],
          ["« Le village ___ je suis né » :", "où", "que", "dont", "qui", "« où » pour un lieu ou un moment."],
          ["« L'ami ___ je t'ai parlé » :", "dont", "que", "où", "qui", "« parler de quelqu'un » → dont."],
          ["« Celui-ci » est un pronom :", "démonstratif", "possessif", "indéfini", "interrogatif", "Il désigne en montrant."],
          ["« Chacun » est un pronom :", "indéfini", "personnel", "relatif", "possessif", "Comme on, personne, quelqu'un, rien."],
          ["« J'écris à mes parents. » → Je ___ écris.", "leur", "leurs", "les", "y", "« leur » pronom personnel est toujours invariable."],
          ["La pronominalisation sert surtout à :", "éviter les répétitions", "allonger le texte", "changer le temps du verbe", "mettre au pluriel", "Indispensable pour un résumé fluide."]
        ] },
      { id: "fr-adverbe", titre: "Grammaire · L'adverbe et le groupe adverbial",
        cours: rg("Définition", "Mot <b>invariable</b> qui modifie le sens d'un verbe, d'un adjectif, d'un autre adverbe ou d'une phrase.") +
          rg("Formation en -ment", "Sur l'adjectif au féminin : lente → lent<b>ement</b>. Adjectifs en -ant → <b>-amment</b> (courant → couramment, puissant → puissamment). Adjectifs en -ent → <b>-emment</b> (prudent → prudemment, évident → évidemment).") +
          rg("Sens", "Manière (vite, bien), temps (hier, bientôt), lieu (ici, partout), quantité/intensité (très, trop), affirmation (oui, certes), négation (ne… pas), doute (peut-être).") +
          rg("Degrés", "Comparatif : plus / aussi / moins vite que. Superlatif : le plus vite, très vite. Irréguliers : bien → mieux ; mal → pis/plus mal ; beaucoup → plus."),
        qs: [
          ["Quel est l'adverbe formé sur « prudent » ?", "prudemment", "prudamment", "prudentement", "prudement", "-ent → -emment."],
          ["Quel est l'adverbe formé sur « courant » ?", "couramment", "couremment", "courantement", "couramant", "-ant → -amment."],
          ["Quel est l'adverbe formé sur « lent » ?", "lentement", "lentment", "lentemment", "lentamment", "On part du féminin « lente »."],
          ["L'adverbe est un mot :", "invariable", "qui s'accorde toujours", "qui se conjugue", "qui prend un s au pluriel", "Il ne change jamais de forme (sauf « tout » dans certains cas)."],
          ["« Hier » est un adverbe de :", "temps", "lieu", "manière", "quantité", "Il situe l'action dans le temps."],
          ["Le comparatif de supériorité de « bien » est :", "mieux", "plus bien", "meilleur", "bienmieux", "« Il chante mieux que moi. »"],
          ["« Peut-être » exprime :", "le doute", "la négation", "le lieu", "la quantité", "Adverbe de modalité."],
          ["Dans « Il court très vite », « très » modifie :", "l'adverbe « vite »", "le verbe « court »", "le sujet « il »", "rien", "Un adverbe peut modifier un autre adverbe."],
          ["Quel est l'adverbe formé sur « évident » ?", "évidemment", "évidamment", "évidentement", "évidament", "Prononcé [a] mais écrit « emment »."],
          ["« Tout à fait » est :", "une locution adverbiale", "un nom", "un verbe", "un pronom", "Un groupe de mots qui joue le rôle d'un adverbe."]
        ] },
      { id: "fr-infinitif", titre: "Grammaire · L'infinitif et le participe",
        cours: rg("Infinitif", "Présent : <b>chanter</b> ; passé : <b>avoir chanté</b>, être parti. Il peut être sujet (« Lire est utile »), COD (« J'aime lire »), complément du nom (« une machine à coudre »). Infinitif injonctif : « Ne pas fumer ».") +
          rg("Participe", "Présent : <b>chantant</b> (invariable). Passé : <b>chanté</b>. Passé composé : <b>ayant chanté</b>.") +
          rg("Participe présent ou adjectif verbal ?", "Participe présent : invariable, souvent suivi d'un complément (« des élèves <b>obéissant</b> à leurs maîtres »). Adjectif verbal : s'accorde, exprime une qualité (« des élèves <b>obéissants</b> »). Orthographes différentes : fatiguant/fatigant, convainquant/convaincant, négligeant/négligent, précédant/précédent."),
        qs: [
          ["L'infinitif passé de « partir » est :", "être parti", "avoir parti", "partant", "ayant parti", "Partir se conjugue avec être."],
          ["Le participe présent est :", "invariable", "toujours accordé", "toujours au féminin", "un nom", "« chantant » ne change pas."],
          ["« Ce travail est ___. » (adjectif verbal de fatiguer)", "fatigant", "fatiguant", "fatiguent", "fatigué", "Adjectif verbal : fatigant (sans u)."],
          ["« Les élèves, ___ la leçon, sont sortis. » (participe passé composé d'apprendre)", "ayant appris", "apprenant", "appris", "avoir appris", "Ayant + participe passé."],
          ["Dans « Lire enrichit l'esprit », « lire » est :", "sujet", "COD", "complément du nom", "attribut", "L'infinitif joue le rôle d'un nom."],
          ["« Des arguments ___. » (convaincre)", "convaincants", "convainquants", "convainquant", "convaincant", "Adjectif verbal qui s'accorde, avec c."],
          ["« Ne pas se pencher au dehors » : l'infinitif exprime :", "un ordre (infinitif injonctif)", "le passé", "une question", "un souhait", "Utilisé dans les consignes."],
          ["« En ___ tôt, tu réussiras. » (travailler)", "travaillant", "travaillé", "travailler", "travaillent", "Gérondif = en + participe présent."],
          ["« Le jour ___ » (adjectif verbal de précéder)", "précédent", "précédant", "précédants", "précédé", "Adjectif verbal : précédent (e)."],
          ["« Des enfants ___ la route sans regarder. » (traverser)", "traversant", "traversants", "traversé", "traverser", "Participe présent suivi d'un complément : invariable."]
        ] },
      { id: "fr-coordination", titre: "Grammaire · La coordination",
        cours: rg("Conjonctions de coordination", "<b>Mais, ou, et, donc, or, ni, car</b> (« Mais où est donc Ornicar ? »). Elles relient des éléments de même fonction ou des propositions.") +
          rg("Valeurs", "<b>mais</b> : opposition ; <b>ou</b> : alternative ; <b>et</b> : addition ; <b>donc</b> : conséquence ; <b>or</b> : objection, transition ; <b>ni</b> : négation ; <b>car</b> : cause.") +
          rg("Adverbes de liaison", "Cependant, pourtant, ensuite, enfin, en effet, ainsi… Très utiles pour enchaîner les idées d'un texte argumentatif."),
        qs: [
          ["Combien y a-t-il de conjonctions de coordination ?", "7", "5", "3", "10", "Mais, ou, et, donc, or, ni, car."],
          ["« Il pleut, ___ je prends mon parapluie. » (conséquence)", "donc", "car", "mais", "or", "Donc introduit une conséquence."],
          ["« Je reste à la maison ___ je suis malade. » (cause)", "car", "donc", "or", "ni", "Car introduit une cause."],
          ["« Il est intelligent ___ paresseux. » (opposition)", "mais", "car", "donc", "ni", "Mais marque l'opposition."],
          ["« Il ne boit ___ ne fume. »", "ni", "et", "ou", "car", "Ni coordonne des éléments négatifs."],
          ["« Tous les hommes sont mortels ; ___ Socrate est un homme. »", "or", "car", "mais", "ni", "Or introduit un nouvel élément du raisonnement."],
          ["« Veux-tu du thé ___ du café ? »", "ou", "car", "donc", "or", "Ou exprime un choix."],
          ["Lequel n'est PAS une conjonction de coordination ?", "parce que", "mais", "donc", "or", "« Parce que » est une conjonction de subordination."],
          ["« En effet » exprime :", "une explication", "une opposition", "une conclusion", "un choix", "C'est un adverbe de liaison."],
          ["La coordination relie des éléments :", "de même fonction", "de fonctions différentes toujours", "seulement des verbes", "seulement des noms", "Par exemple deux sujets ou deux propositions indépendantes."]
        ] },
      { id: "fr-circonstances", titre: "Grammaire · L'expression des circonstances",
        cours: rg("Cause", "Parce que, puisque, comme, étant donné que + <b>indicatif</b>. « Comme il pleuvait, nous sommes restés. »") +
          rg("Conséquence", "Si bien que, de sorte que, si… que, tellement… que + <b>indicatif</b>.") +
          rg("But", "Pour que, afin que + <b>subjonctif</b> ; pour, afin de + infinitif.") +
          rg("Temps", "Quand, lorsque, dès que, pendant que + indicatif ; <b>avant que</b> + subjonctif.") +
          rg("Condition", "Si + indicatif (« Si tu travailles, tu réussiras ») ; à condition que + subjonctif.") +
          rg("Opposition / concession", "<b>Bien que, quoique</b> + subjonctif ; alors que, tandis que + indicatif ; malgré + nom.") +
          rg("Comparaison", "Comme, ainsi que, de même que, plus… que."),
        qs: [
          ["« Il travaille ___ réussir. » exprime :", "le but (pour)", "la cause", "le temps", "la condition", "« pour » + infinitif = but."],
          ["« Bien que » est suivi :", "du subjonctif", "de l'indicatif", "de l'infinitif", "du conditionnel", "« Bien qu'il soit fatigué… »"],
          ["« Je reste ___ il pleut. » (cause)", "parce qu'", "afin qu'", "bien qu'", "pour qu'", "Parce que + indicatif = cause."],
          ["« Il a tant couru qu'il est épuisé. » exprime :", "la conséquence", "la cause", "le but", "l'opposition", "Tant… que = conséquence."],
          ["« Afin que » est suivi :", "du subjonctif", "de l'indicatif", "du futur", "d'un nom", "« Afin que tu comprennes… »"],
          ["« Si tu révises, tu ___ au BEPC. »", "réussiras", "réussirais", "réussisses", "réussi", "Si + présent → futur."],
          ["« ___ la pluie, le match a eu lieu. » (opposition)", "Malgré", "Grâce à", "À cause de", "Parce que", "Malgré + nom = opposition."],
          ["« Avant que » est suivi :", "du subjonctif", "de l'indicatif", "de l'infinitif", "du passé simple", "« Avant qu'il ne parte… »"],
          ["« Lorsque le maître entra, les élèves se levèrent. » exprime :", "le temps", "le but", "la condition", "l'opposition", "Lorsque = quand."],
          ["« Il est plus grand que son frère » exprime :", "la comparaison", "la cause", "le but", "la conséquence", "Plus… que."]
        ] },
      { id: "fr-ortho-lexicale", titre: "Orthographe lexicale · homophones et paronymes",
        cours: rg("Adjectif verbal / participe présent", "Convaincant/convainquant, fatigant/fatiguant, provocant/provoquant, négligent/négligeant, précédent/précédant, différent/différant, excellent/excellant, communicant/communiquant.") +
          rg("Homophones", "<b>quelque</b> (un certain, quelques = plusieurs) / <b>quel que</b> (+ être, accordé) ; <b>quoique</b> (bien que) / <b>quoi que</b> (quelle que soit la chose que) ; sans / s'en / sang ; peu / peut ; ce / se ; ces / ses / c'est / s'est.") +
          rg("Paronymes", "Mots presque semblables mais de sens différent : <b>éminent</b> (remarquable) / <b>imminent</b> (tout proche) ; <b>infraction</b> (faute) / <b>effraction</b> (bris de porte) ; <b>conjecture</b> (supposition) / <b>conjoncture</b> (situation) ; <b>perpétrer</b> (commettre) / <b>perpétuer</b> (faire durer) ; amener / emmener."),
        qs: [
          ["« ___ soient tes efforts, continue. »", "Quels que", "Quelques", "Quelque", "Quel que", "Quel que + être, accordé avec « efforts »."],
          ["« Il a ___ livres. » (plusieurs)", "quelques", "quels que", "quelle que", "quelque", "Quelques = plusieurs, déterminant pluriel."],
          ["« ___ il dise, je le crois. » (quelle que soit la chose que)", "Quoi qu'", "Quoiqu'", "Quoique", "Quoi que il", "En deux mots : quoi que."],
          ["« Le départ est ___. » (tout proche)", "imminent", "éminent", "immanent", "émanant", "Éminent = remarquable."],
          ["« Les voleurs sont entrés par ___. »", "effraction", "infraction", "affraction", "fraction", "L'infraction est une faute contre la loi."],
          ["« La ___ économique est difficile. » (situation)", "conjoncture", "conjecture", "conjonction", "jointure", "Conjecture = supposition."],
          ["« Il ___ va sans rien dire. »", "s'en", "sans", "sang", "cent", "Verbe s'en aller."],
          ["« Il ___ venir demain. »", "peut", "peu", "peux", "peus", "Verbe pouvoir (on peut dire « pouvait »)."],
          ["« Le ___ professeur » (remarquable)", "éminent", "imminent", "éminant", "immanent", "Éminent = de grande valeur."],
          ["« Ce sont des personnes ___ en art. » (exceller)", "excellentes", "excellantes", "excellant", "excellents", "Adjectif verbal : excellent(e)s."]
        ] },
      { id: "fr-ortho-grammaticale", titre: "Orthographe grammaticale · les accords",
        cours: rg("Participe passé", "Avec <b>être</b> : accord avec le sujet. Avec <b>avoir</b> : accord avec le <b>COD placé avant</b> (« Les lettres que j'ai <b>écrites</b> »), sinon pas d'accord (« J'ai écrit des lettres »).") +
          rg("Même", "Adjectif (identique) : s'accorde (« les mêmes livres »). Adverbe (aussi, jusqu'à) : invariable (« même les enfants »).") +
          rg("Tout", "Déterminant ou pronom : s'accorde (tous, toutes). Adverbe (= très, entièrement) : invariable, <b>sauf</b> devant un adjectif féminin commençant par une consonne ou un h aspiré (« elle est <b>toute</b> contente »).") +
          rg("Tel", "S'accorde avec le nom auquel il se rapporte (« de telles idées »).") +
          rg("Adjectif et plusieurs noms", "Un adjectif qui qualifie des noms masculin et féminin se met au <b>masculin pluriel</b> : « une robe et un pagne bleus »."),
        qs: [
          ["« Les chansons que nous avons ___ » (chanter)", "chantées", "chanté", "chantés", "chanter", "COD « que » (= les chansons) placé avant avoir."],
          ["« Nous avons ___ des chansons. » (chanter)", "chanté", "chantées", "chantés", "chanter", "COD placé après : pas d'accord."],
          ["« Elles sont ___ en retard. » (arriver)", "arrivées", "arrivé", "arrivés", "arriver", "Avec être : accord avec le sujet."],
          ["« Elle est ___ heureuse. »", "tout", "toute", "toutes", "tous", "Devant une voyelle, tout adverbe reste invariable."],
          ["« Elle est ___ contente. »", "toute", "tout", "toutes", "tous", "Devant une consonne au féminin, tout s'accorde."],
          ["« ___ les enfants ont compris. » (= aussi les enfants)", "Même", "Mêmes", "Mème", "Même que", "Même adverbe (= aussi, jusqu'à) : invariable."],
          ["« Ils ont les ___ chaussures. » (identiques)", "mêmes", "même", "mème", "mêmmes", "Adjectif : accord."],
          ["« Un pantalon et une chemise ___ » (blanc)", "blancs", "blanches", "blanc", "blanche", "Masculin + féminin → masculin pluriel."],
          ["« De ___ comportements sont inacceptables. » (tel)", "tels", "tel", "telles", "telle", "Tel s'accorde avec « comportements »."],
          ["« ___ les élèves sont présents. »", "Tous", "Tout", "Toutes", "Touts", "Déterminant masculin pluriel."]
        ] },
      { id: "fr-methodes", titre: "Expression écrite · argumenter, résumer, écrire un article",
        cours: rg("Le texte argumentatif", "Une <b>thèse</b> (opinion) défendue par des <b>arguments</b> illustrés d'<b>exemples</b>, liés par des connecteurs (d'abord, ensuite, en outre, cependant, donc, en conclusion). On peut <b>étayer</b> une thèse ou <b>réfuter</b> la thèse adverse.") +
          rg("Plan de la rédaction", "Introduction (amener le sujet, poser le problème, annoncer le plan) — Développement (paragraphes : idée + explication + exemple) — Conclusion (bilan + ouverture).") +
          rg("Le résumé", "Réduire le texte (en général au <b>quart</b> de sa longueur, avec une marge tolérée), en gardant l'<b>ordre des idées</b> et le <b>système d'énonciation</b> de l'auteur, avec ses propres mots, sans commentaire ni « l'auteur dit que ». Indiquer le nombre de mots.") +
          rg("L'article de journal", "Titre accrocheur, chapeau (résumé), attaque, corps, chute. Il répond aux questions : Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?"),
        qs: [
          ["La thèse d'un texte argumentatif est :", "l'opinion défendue", "un exemple", "le titre", "la conclusion seulement", "Les arguments servent à la soutenir."],
          ["Réfuter une thèse, c'est :", "la combattre avec des arguments", "la soutenir", "la recopier", "la résumer", "On démontre qu'elle est fausse ou discutable."],
          ["Dans un résumé, il faut :", "respecter l'ordre des idées du texte", "donner son avis", "écrire « l'auteur dit que »", "recopier des phrases entières", "Le résumé est fidèle et personnel dans les mots."],
          ["En général, un résumé réduit le texte :", "au quart de sa longueur", "de moitié", "au dixième", "à une phrase", "Avec une petite marge tolérée : respecte la consigne du sujet."],
          ["Un paragraphe argumentatif contient :", "une idée, une explication, un exemple", "seulement des exemples", "seulement la conclusion", "un dialogue", "C'est la structure qui convainc."],
          ["Le chapeau d'un article de journal est :", "le court texte qui résume l'article sous le titre", "la signature", "la photo", "la dernière phrase", "Il donne envie de lire."],
          ["Lequel est un connecteur d'opposition ?", "Cependant", "Ensuite", "Donc", "D'abord", "Aussi : mais, pourtant, toutefois."],
          ["L'introduction d'une rédaction se termine par :", "l'annonce du plan", "un exemple", "la conclusion", "une question sans rapport", "Elle amène, pose et annonce."],
          ["Dans le résumé, le système d'énonciation (je, nous…) :", "est conservé", "est remplacé par « l'auteur »", "est supprimé", "est mis au passé", "On parle comme l'auteur."],
          ["Un article de journal répond d'abord aux questions :", "Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?", "Combien de mots ?", "Quel temps fera-t-il ?", "Qui a gagné ?", "La règle des « 5 W » des journalistes."]
        ] }
    ] };

  const MAT_EN = { id: "anglais", nom: "Anglais", icone: "En", couleur: "#C23B6B", examen: "Écrit et oral",
    chapitres: [
      { id: "en-present", titre: "Present simple & present continuous",
        cours: rg("Present simple", "Habitudes, vérités générales : « I go to school every day. » À la 3e personne : <b>-s</b> (he goes). Négation : don't/doesn't + base. Question : Do/Does…?") +
          rg("Present continuous", "Action en cours : « I am studying now. » <b>be + V-ing</b>.") +
          rg("Mots repères", "Simple : always, usually, often, every day. Continuous : now, at the moment, look!, listen!"),
        qs: [
          ["She ___ to school every day.", "goes", "go", "is going", "going", "Habitude + 3e personne du singulier : -s (goes)."],
          ["Look! The children ___ football.", "are playing", "play", "plays", "played", "« Look! » : action en cours → be + V-ing."],
          ["___ your father work in Abidjan?", "Does", "Do", "Is", "Are", "3e personne du singulier : Does + base."],
          ["They ___ like rice.", "don't", "doesn't", "isn't", "aren't", "Négation au présent simple avec they : don't."],
          ["I ___ my homework at the moment.", "am doing", "do", "does", "did", "« at the moment » → present continuous."],
          ["Water ___ at 100 °C.", "boils", "is boiling", "boil", "boiling", "Vérité générale → present simple."],
          ["He usually ___ up at 6.", "gets", "is getting", "get", "got", "« usually » → habitude."],
          ["What ___ you doing now?", "are", "do", "does", "is", "Present continuous : are + you + V-ing."],
          ["My sister ___ TV every evening.", "watches", "watchs", "watch", "is watch", "Verbes en -ch : on ajoute -es."],
          ["Listen! Someone ___ at the door.", "is knocking", "knocks", "knock", "knocked", "« Listen! » → action en cours."]
        ] },
      { id: "en-past", titre: "Past simple & irregular verbs",
        cours: rg("Past simple", "Action terminée dans le passé (yesterday, last week, in 2020, ago). Réguliers : <b>-ed</b> (played). Négation : didn't + base. Question : Did…?") +
          rg("Verbes irréguliers à connaître", "go → went → gone ; see → saw → seen ; take → took → taken ; write → wrote → written ; buy → bought → bought ; eat → ate → eaten ; begin → began → begun ; come → came → come ; give → gave → given ; know → knew → known.") +
          rg("Past continuous", "Action en cours dans le passé : « I was reading when he arrived. »"),
        qs: [
          ["Yesterday, we ___ to Grand-Bassam.", "went", "go", "goes", "gone", "go → went → gone."],
          ["She ___ a letter last week.", "wrote", "writed", "written", "writes", "write → wrote → written."],
          ["Did you ___ the film?", "see", "saw", "seen", "seeing", "Après did : verbe à la base."],
          ["They ___ come to school yesterday.", "didn't", "don't", "doesn't", "weren't", "Négation au passé : didn't + base."],
          ["The past simple of « buy » is:", "bought", "buyed", "brought", "boughted", "buy → bought → bought."],
          ["I ___ reading when the lights went off.", "was", "were", "am", "did", "Past continuous : was/were + V-ing."],
          ["He ___ his breakfast two hours ago.", "ate", "eated", "eaten", "eat", "eat → ate → eaten ; « ago » → past simple."],
          ["The lesson ___ at 8 o'clock.", "began", "begun", "beginned", "begin", "begin → began → begun."],
          ["Where ___ you born?", "were", "was", "did", "are", "Be au passé : were avec you."],
          ["The past simple of « give » is:", "gave", "gived", "given", "giving", "give → gave → given."]
        ] },
      { id: "en-perfect", titre: "Present perfect (for, since, already, yet)",
        cours: rg("Formation", "<b>have/has + participe passé</b> : « I have finished. »") +
          rg("Emplois", "Action passée liée au présent, expérience (ever, never), durée jusqu'à maintenant avec <b>for</b> (une durée : for two years) ou <b>since</b> (un point de départ : since 2020).") +
          rg("Already / yet / just", "already (déjà, phrase affirmative), yet (négation et question), just (venir de)."),
        qs: [
          ["I have lived in Daloa ___ 2019.", "since", "for", "ago", "during", "Since + point de départ."],
          ["She has studied English ___ three years.", "for", "since", "ago", "from", "For + durée."],
          ["Have you ___ been to Man?", "ever", "yet", "since", "ago", "Ever = déjà (dans une question sur l'expérience)."],
          ["He ___ finished his exercise.", "has", "have", "is", "did", "3e personne : has + participe passé."],
          ["I haven't done my homework ___.", "yet", "already", "since", "ever", "Yet en fin de phrase négative."],
          ["We have ___ eaten. (déjà)", "already", "yet", "ever", "for", "Already dans une phrase affirmative."],
          ["They have ___ arrived. (viennent d'arriver)", "just", "yet", "since", "ago", "Just = venir de."],
          ["The present perfect of « write » (she) is:", "she has written", "she has wrote", "she have written", "she written", "have/has + participe passé (written)."],
          ["I ___ never seen the sea.", "have", "has", "am", "did", "Expérience avec never."],
          ["How long ___ you known him?", "have", "has", "did", "are", "Question sur une durée jusqu'à maintenant."]
        ] },
      { id: "en-future", titre: "Future & conditional (will, going to, if)",
        cours: rg("Will", "Décision spontanée, prédiction : « I will help you. » Négation : won't.") +
          rg("Be going to", "Projet ou intention : « I am going to study medicine. »") +
          rg("If-clauses", "Type 1 (réel) : <b>If + présent, will + base</b> : « If you study, you will pass. » Type 2 (hypothèse) : <b>If + past, would + base</b> : « If I were rich, I would build a school. »"),
        qs: [
          ["If you work hard, you ___ your BEPC.", "will pass", "would pass", "passed", "pass will", "Type 1 : if + présent, will + base."],
          ["If I were the President, I ___ build more schools.", "would", "will", "am", "did", "Type 2 : if + prétérit, would + base."],
          ["Next year, I ___ going to be in seconde.", "am", "will", "have", "do", "Be going to + base."],
          ["It's cold. I ___ close the window.", "will", "would", "am", "did", "Décision prise sur le moment : will."],
          ["She ___ come tomorrow. (négation)", "won't", "don't", "isn't", "wouldn't", "Won't = will not."],
          ["If it ___ tomorrow, we will stay at home.", "rains", "will rain", "rained", "raining", "On ne met jamais will après if (type 1)."],
          ["If I ___ a bird, I would fly.", "were", "am", "will be", "be", "Type 2 : « If I were » est la forme correcte."],
          ["What are you going ___ after school?", "to do", "do", "doing", "did", "Going to + base verbale."],
          ["I think Côte d'Ivoire ___ win the next match.", "will", "would", "is", "does", "Prédiction : will."],
          ["If he had money, he ___ buy a car.", "would", "will", "can", "is", "Type 2 : would."]
        ] },
      { id: "en-modals", titre: "Modals (can, must, should, may)",
        cours: rg("Sens", "<b>can</b> : capacité, permission. <b>could</b> : capacité passée, politesse. <b>must</b> : obligation forte. <b>mustn't</b> : interdiction. <b>should</b> : conseil. <b>may / might</b> : possibilité, permission polie. <b>have to</b> : obligation extérieure.") +
          rg("Règles", "Modal + <b>base verbale</b> sans « to » (sauf have to). Pas de -s à la 3e personne : he can swim."),
        qs: [
          ["You ___ smoke here. It's forbidden.", "mustn't", "don't have to", "should", "can", "Mustn't = interdiction."],
          ["You look tired. You ___ go to bed early.", "should", "mustn't", "can't", "may not", "Should = conseil."],
          ["___ I borrow your pen, please?", "May", "Must", "Should", "Will", "May = demande de permission polie (Can est aussi possible)."],
          ["She ___ speak three languages.", "can", "cans", "can to", "is can", "Capacité ; pas de -s ni de to."],
          ["Pupils ___ wear a uniform at school.", "must", "may", "might", "could to", "Obligation."],
          ["When I was five, I ___ swim.", "could", "can", "must", "should", "Capacité dans le passé."],
          ["It ___ rain this afternoon. (possibilité)", "may", "must", "should", "can't", "May/might = possibilité."],
          ["You ___ come if you don't want to. (pas obligé)", "don't have to", "mustn't", "must", "should", "Don't have to = absence d'obligation."],
          ["He ___ to leave now. (obligation)", "has", "must", "can", "should", "Has to = doit (obligation extérieure)."],
          ["After a modal, the verb is:", "in the base form without « to »", "with -ing", "with -ed", "with -s", "Ex : She must go."]
        ] },
      { id: "en-compare", titre: "Comparatives & superlatives",
        cours: rg("Adjectifs courts", "tall → <b>taller than</b> → <b>the tallest</b>. big → bigger → the biggest. happy → happier → the happiest.") +
          rg("Adjectifs longs", "<b>more</b> beautiful than → <b>the most</b> beautiful.") +
          rg("Irréguliers", "good → better → the best ; bad → worse → the worst ; far → farther/further → the farthest.") +
          rg("Égalité", "as tall as ; infériorité : less… than, not as… as."),
        qs: [
          ["Abidjan is ___ than Bouaké.", "bigger", "more big", "biggest", "the bigger", "Adjectif court : big → bigger (consonne doublée)."],
          ["This is the ___ day of my life.", "best", "better", "goodest", "most good", "good → better → the best."],
          ["Mathematics is ___ than English for me.", "more difficult", "difficulter", "most difficult", "the more difficult", "Adjectif long : more… than."],
          ["The Nile is the ___ river in Africa.", "longest", "longer", "most long", "long", "Superlatif : the + -est."],
          ["My brother is as tall ___ my father.", "as", "than", "that", "like", "Égalité : as… as."],
          ["The comparative of « bad » is:", "worse", "badder", "worst", "more bad", "bad → worse → the worst."],
          ["She is the ___ girl in the class.", "most intelligent", "intelligentest", "more intelligent", "most intelligenter", "Adjectif long au superlatif : the most."],
          ["The comparative of « happy » is:", "happier", "more happy", "happyer", "happiest", "Le y devient i."],
          ["Bananas are ___ expensive than apples here.", "less", "least", "fewer", "as", "Infériorité : less… than."],
          ["Mount Nimba is the ___ mountain in Côte d'Ivoire.", "highest", "higher", "most high", "high", "Superlatif."]
        ] },
      { id: "en-passive", titre: "Passive voice & reported speech",
        cours: rg("Passive voice", "<b>be (au bon temps) + participe passé</b> (+ by…). « Cocoa is grown in Côte d'Ivoire. » « The school was built in 1990. »") +
          rg("Reported speech", "Au discours indirect, on recule d'un temps : present → past, will → would, can → could. « I am tired », he said → He said (that) he <b>was</b> tired. Ordres : told me <b>to</b> + base.") +
          rg("Pronoms et repères", "I → he/she ; now → then ; today → that day ; tomorrow → the next day."),
        qs: [
          ["Cocoa ___ in Côte d'Ivoire.", "is grown", "grows by", "is grow", "growing", "Passif présent : is + participe passé."],
          ["The bridge ___ in 2014.", "was built", "is built", "built", "was build", "Passif passé : was + participe passé."],
          ["« I am hungry », she said. → She said that she ___ hungry.", "was", "is", "were", "has been", "Present → past."],
          ["« I will come », he said. → He said that he ___ come.", "would", "will", "can", "shall", "Will → would."],
          ["« Close the door », the teacher said to me. → The teacher told me ___ the door.", "to close", "close", "closing", "closed", "Ordre : told + personne + to + base."],
          ["Active: « The boy broke the window. » Passive:", "The window was broken by the boy.", "The window broke the boy.", "The window is broke by the boy.", "The boy was broken by the window.", "Le COD devient sujet."],
          ["English ___ all over the world.", "is spoken", "speaks", "is speak", "spoken", "Passif présent."],
          ["« I can swim », Awa said. → Awa said that she ___ swim.", "could", "can", "will", "must", "Can → could."],
          ["In reported speech, « tomorrow » becomes:", "the next day", "yesterday", "today", "now", "Les repères de temps changent aussi."],
          ["The letters ___ by the secretary every day.", "are typed", "is typed", "typed", "are type", "Sujet pluriel : are + participe passé."]
        ] },
      { id: "en-relatives", titre: "Relatives, question tags & connectors",
        cours: rg("Pronoms relatifs", "<b>who</b> (personnes), <b>which</b> (choses), <b>that</b> (les deux), <b>whose</b> (possession), <b>where</b> (lieu), <b>when</b> (temps).") +
          rg("Question tags", "Auxiliaire + pronom, à la forme inverse : « You are a student, <b>aren't you</b>? » « He doesn't smoke, <b>does he</b>? »") +
          rg("Connecteurs", "and, but, so, because, although, however, first, then, finally, in addition."),
        qs: [
          ["The man ___ lives next door is a doctor.", "who", "which", "whose", "where", "Personne → who."],
          ["The book ___ I bought is interesting.", "which", "who", "whose", "where", "Chose → which (ou that)."],
          ["This is the girl ___ father is a teacher.", "whose", "who", "which", "where", "Possession → whose."],
          ["Korhogo is the town ___ I was born.", "where", "which", "who", "whose", "Lieu → where."],
          ["You like football, ___?", "don't you", "do you", "aren't you", "isn't it", "Phrase affirmative → tag négatif avec l'auxiliaire do."],
          ["She isn't at school, ___?", "is she", "isn't she", "does she", "doesn't she", "Phrase négative → tag affirmatif."],
          ["He can drive, ___?", "can't he", "can he", "doesn't he", "isn't he", "On reprend le modal can."],
          ["I stayed at home ___ I was sick.", "because", "but", "so", "although", "Cause → because."],
          ["It was raining, ___ we played football.", "but", "because", "so that", "who", "Opposition → but."],
          ["___ it was late, he continued to study.", "Although", "Because", "So", "Then", "Although = bien que."]
        ] },
      { id: "en-oral", titre: "Oral · useful expressions (with listening)",
        cours: rg("Se présenter", "« My name is… I am fifteen years old. I am in form three (3e) at … I live in … »") +
          rg("Demander et répondre", "« Could you repeat, please? » « I'm sorry, I don't understand. » « In my opinion… » « I agree / I disagree because… »") +
          rg("Au jury", "Salue (« Good morning, sir / madam »), parle lentement, fais des phrases complètes, souris, remercie (« Thank you »).") +
          rg("Écoute", "Dans ce chapitre, appuie sur le bouton pour entendre la phrase en anglais, puis choisis ce qu'elle veut dire."),
        qs: [],
        ecoute: [
          ["Could you repeat, please?", "Pouvez-vous répéter, s'il vous plaît ?", "Pouvez-vous partir, s'il vous plaît ?", "Pouvez-vous lire, s'il vous plaît ?", "Pouvez-vous écrire, s'il vous plaît ?", "« Could you… » est une demande polie ; « repeat » = répéter."],
          ["How old are you?", "Quel âge as-tu ?", "Comment vas-tu ?", "Où habites-tu ?", "Comment t'appelles-tu ?", "« How old » = quel âge."],
          ["What do you want to be in the future?", "Que veux-tu faire plus tard ?", "Que fais-tu maintenant ?", "Qu'as-tu mangé ?", "Où vas-tu demain ?", "« In the future » = plus tard, dans l'avenir."],
          ["I live with my parents in Yopougon.", "J'habite avec mes parents à Yopougon.", "Je travaille avec mes parents à Yopougon.", "Mes parents habitent seuls à Yopougon.", "Je suis né à Yopougon.", "« I live » = j'habite."],
          ["My favourite subject is mathematics.", "Ma matière préférée est les mathématiques.", "Je déteste les mathématiques.", "Mon professeur de maths est gentil.", "Les mathématiques sont difficiles.", "« Favourite subject » = matière préférée."],
          ["I'm sorry, I don't understand the question.", "Désolé, je ne comprends pas la question.", "Désolé, je connais la réponse.", "Je suis content de la question.", "Je n'aime pas les questions.", "Phrase très utile à l'oral."],
          ["In my opinion, social media can be dangerous.", "À mon avis, les réseaux sociaux peuvent être dangereux.", "Je n'ai pas de téléphone.", "Les médias sont toujours utiles.", "Mon opinion n'est pas importante.", "« In my opinion » = à mon avis."],
          ["We must protect the environment.", "Nous devons protéger l'environnement.", "Nous pouvons polluer l'environnement.", "L'environnement est propre.", "Nous allons visiter l'environnement.", "« Must » = devoir (obligation)."],
          ["Thank you very much for your attention.", "Merci beaucoup pour votre attention.", "Faites attention à vous.", "Beaucoup de gens sont attentifs.", "Je vous remercie de votre visite.", "Pour terminer poliment un exposé."],
          ["There are many students in my class.", "Il y a beaucoup d'élèves dans ma classe.", "Il y a peu d'élèves dans ma classe.", "Ma classe est grande.", "Mes élèves sont nombreux.", "« There are » = il y a (pluriel)."]
        ] }
    ] };

  const MAT_ES = { id: "espagnol", nom: "Espagnol", icone: "Es", couleur: "#C9941A", examen: "Écrit (LV2)",
    chapitres: [
      { id: "es-presentarse", titre: "Saludar y presentarse",
        cours: rg("Saluer", "¡Hola! Buenos días (matin), buenas tardes (après-midi), buenas noches (soir). ¿Qué tal? ¿Cómo estás? — Bien, gracias. Adiós, hasta luego, hasta mañana.") +
          rg("Se présenter", "Me llamo… (je m'appelle) · Tengo quince años (j'ai 15 ans) · Soy marfileño/a (ivoirien·ne) · Vivo en Abiyán · Estoy en tercero.") +
          rg("Les nombres", "uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, <b>quince</b>, dieciséis, veinte, treinta, cien."),
        qs: [
          ["« Je m'appelle Adriel » se dit :", "Me llamo Adriel", "Yo soy llamo Adriel", "Mi nombre es de Adriel", "Llamo me Adriel", "Llamarse est un verbe pronominal."],
          ["« Buenas noches » s'emploie :", "le soir et la nuit", "le matin", "à midi", "jamais", "Buenos días (matin), buenas tardes (après-midi)."],
          ["« J'ai quinze ans » se dit :", "Tengo quince años", "Soy quince años", "Estoy quince años", "Hay quince años", "En espagnol, on « a » son âge avec tener."],
          ["Comment dit-on « ivoirien » ?", "marfileño", "ivoriano", "costeño", "africano", "Côte d'Ivoire = Costa de Marfil."],
          ["« Hasta mañana » signifie :", "À demain", "Bonjour", "Merci", "À ce soir", "Mañana = demain (ou matin)."],
          ["« ¿Qué tal? » signifie :", "Comment ça va ?", "Qui es-tu ?", "Quelle heure est-il ?", "Où vas-tu ?", "Réponse : bien, gracias."],
          ["Le nombre 15 se dit :", "quince", "cinco", "cincuenta", "catorce", "14 = catorce, 50 = cincuenta."],
          ["« Vivo en Abiyán » signifie :", "J'habite à Abidjan", "Je vais à Abidjan", "Je suis né à Abidjan", "J'aime Abidjan", "Vivir = vivre, habiter."]
        ] },
      { id: "es-ser-estar", titre: "Ser y estar",
        cours: rg("SER", "Identité, nationalité, profession, caractère, matière, heure : « Soy alumno. » « Es alto. » « Son las tres. » Conjugaison : soy, eres, es, somos, sois, son.") +
          rg("ESTAR", "Lieu, état passager, résultat d'une action : « Estoy en casa. » « Estoy cansado. » Conjugaison : estoy, estás, está, estamos, estáis, están.") +
          rg("Astuce", "Estar + gérondif = action en cours : « Estoy estudiando »."),
        qs: [
          ["Yo ___ alumno de tercero.", "soy", "estoy", "es", "está", "Identité → ser."],
          ["Mi madre ___ en el mercado.", "está", "es", "son", "soy", "Lieu → estar."],
          ["Hoy ___ muy cansado.", "estoy", "soy", "es", "eres", "État passager → estar."],
          ["Nosotros ___ marfileños.", "somos", "estamos", "son", "sois", "Nationalité → ser."],
          ["Yamoussoukro ___ en el centro del país.", "está", "es", "son", "hay", "Situation géographique → estar."],
          ["Mi padre ___ profesor.", "es", "está", "son", "estás", "Profession → ser."],
          ["« Estoy estudiando » signifie :", "Je suis en train d'étudier", "J'ai étudié", "J'étudierai", "Je suis étudiant", "Estar + gérondif."],
          ["Ellos ___ en clase ahora.", "están", "son", "es", "somos", "Lieu → estar."]
        ] },
      { id: "es-presente", titre: "El presente (regulares e irregulares)",
        cours: rg("Réguliers", "-AR (hablar) : hablo, hablas, habla, hablamos, habláis, hablan. -ER (comer) : como, comes, come… -IR (vivir) : vivo, vives, vive…") +
          rg("Irréguliers fréquents", "tener → tengo ; hacer → hago ; ir → voy, vas, va, vamos, vais, van ; poder (o→ue) → puedo ; querer (e→ie) → quiero ; salir → salgo."),
        qs: [
          ["Yo ___ español. (hablar)", "hablo", "habla", "hablas", "hablamos", "1re personne : -o."],
          ["Nosotros ___ arroz. (comer)", "comemos", "comen", "como", "comimos", "Nous : -emos."],
          ["Yo ___ al colegio a pie. (ir)", "voy", "va", "vamos", "iba", "Ir : voy, vas, va…"],
          ["Tú ___ un hermano. (tener)", "tienes", "tenes", "tengo", "tiene", "e → ie : tienes."],
          ["Yo ___ mis deberes. (hacer)", "hago", "hace", "haco", "hizo", "Irrégulier : hago."],
          ["Ella ___ ser médica. (querer)", "quiere", "quere", "quiero", "querer", "e → ie : quiere."],
          ["Nosotros ___ en Bouaké. (vivir)", "vivimos", "vivemos", "viven", "vivo", "-IR : -imos."],
          ["Yo no ___ salir hoy. (poder)", "puedo", "podo", "puede", "pudo", "o → ue : puedo."]
        ] },
      { id: "es-gustar", titre: "Gustar y los gustos",
        cours: rg("Construction", "Me / te / le / nos / os / les + <b>gusta</b> + singulier ou infinitif ; + <b>gustan</b> + pluriel. « Me gusta el fútbol. » « Me gustan los mangos. » « Me gusta bailar. »") +
          rg("Nuancer", "Me encanta (j'adore), no me gusta nada (je n'aime pas du tout), prefiero (je préfère)."),
        qs: [
          ["A mí me ___ el fútbol.", "gusta", "gustan", "gusto", "gustas", "Singulier → gusta."],
          ["Me ___ los mangos.", "gustan", "gusta", "gusto", "gustamos", "Pluriel → gustan."],
          ["« Me encanta bailar » signifie :", "J'adore danser", "Je déteste danser", "Je ne sais pas danser", "Je danse peu", "Encantar = adorer."],
          ["A mi hermano ___ gusta leer.", "le", "me", "te", "les", "À lui → le."],
          ["¿Te ___ la música?", "gusta", "gustan", "gustas", "gusto", "La música (singulier) → gusta."],
          ["« No me gusta nada » signifie :", "Je n'aime pas du tout", "J'aime tout", "J'aime un peu", "Rien ne me plaît pas", "Nada = rien, pas du tout."],
          ["A nosotros ___ gustan las vacaciones.", "nos", "os", "les", "me", "À nous → nos."],
          ["« Prefiero el arroz » signifie :", "Je préfère le riz", "Je prépare le riz", "Je mange le riz", "Je vends le riz", "Preferir (e → ie)."]
        ] },
      { id: "es-pasado", titre: "El pretérito indefinido (el pasado)",
        cours: rg("Emploi", "Action passée terminée : ayer, el año pasado, en 2025.") +
          rg("Réguliers", "hablar : hablé, hablaste, habló, hablamos, hablasteis, hablaron. comer/vivir : comí, comiste, comió, comimos, comisteis, comieron.") +
          rg("Irréguliers", "ser / ir : fui, fuiste, fue, fuimos, fuisteis, fueron. tener : tuve. hacer : hice, hizo. estar : estuve."),
        qs: [
          ["Ayer yo ___ con mi abuela. (hablar)", "hablé", "hablo", "habló", "hablaba", "1re personne : -é."],
          ["El año pasado ___ a Man. (ir, nosotros)", "fuimos", "vamos", "fueron", "íbamos", "Ir au passé : fuimos."],
          ["Ella ___ una carta. (escribir)", "escribió", "escribe", "escribí", "escribía", "3e personne : -ió."],
          ["Yo ___ mis deberes ayer. (hacer)", "hice", "hací", "hizo", "hago", "Hacer : hice, hiciste, hizo…"],
          ["Ellos ___ arroz con pescado. (comer)", "comieron", "comen", "comimos", "comió", "Ils : -ieron."],
          ["« Ayer » signifie :", "hier", "aujourd'hui", "demain", "toujours", "Repère du passé."],
          ["Yo ___ en casa todo el día. (estar)", "estuve", "estaba", "estoy", "estuvo", "Estar : estuve."],
          ["Mi padre ___ enfermo la semana pasada. (estar)", "estuvo", "estuve", "está", "estaba", "3e personne : estuvo."]
        ] },
      { id: "es-futuro", titre: "El futuro y los proyectos",
        cours: rg("Ir a + infinitif", "Futur proche : « Voy a estudiar medicina. »") +
          rg("Futur simple", "Infinitif + é, ás, á, emos, éis, án : hablaré, comerás, vivirá. Irréguliers : tener → tendré, hacer → haré, poder → podré, salir → saldré.") +
          rg("Parler de ses projets", "Cuando sea mayor, quiero ser… (quand je serai grand, je veux être…) médico, profesor, ingeniero, enfermera, abogado."),
        qs: [
          ["Mañana ___ a estudiar. (yo, ir)", "voy", "iré a", "fui", "iba", "Ir a + infinitif : voy a estudiar."],
          ["El año próximo ___ el BEPC. (yo, pasar)", "pasaré", "pasé", "paso", "pasaba", "Futur : infinitif + é."],
          ["Nosotros ___ a Abiyán. (viajar, futur)", "viajaremos", "viajamos", "viajaron", "viajábamos", "Terminaison -emos."],
          ["Yo ___ mucho trabajo. (tener, futur)", "tendré", "teneré", "tengo", "tuve", "Irrégulier : tendré."],
          ["« Quiero ser médico » signifie :", "Je veux être médecin", "Je suis médecin", "J'étais médecin", "Je vois un médecin", "Querer + infinitif."],
          ["Ella ___ la comida. (hacer, futur)", "hará", "hacerá", "hace", "hizo", "Irrégulier : haré, harás, hará."],
          ["« Mañana » signifie aussi :", "demain", "hier", "maintenant", "ce soir", "Et « la mañana » = le matin."],
          ["¿Qué ___ hacer después del colegio? (ir, tú)", "vas a", "voy a", "va a", "vamos a", "Tú : vas a + infinitif."]
        ] }
    ] };
