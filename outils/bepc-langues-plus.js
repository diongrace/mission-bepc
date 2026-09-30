  // =========================================================
  // Anglais et espagnol : vraies leçons, écoute, exercices où l'on écrit
  // ecrire : [phrase à trous, [réponses acceptées], traduction, explication]
  // ordre  : [phrase correcte, traduction]
  // ecoute : [phrase entendue, bon sens, 3 faux sens, explication]
  // =========================================================
  const exL = (voix, lignes) => `<div class="ex-l-liste"><span class="etiquette">Exemples à écouter</span>${lignes.map(([p, f]) => `<div class="ex-l" data-voix="${voix}"><span lang="${voix.slice(0, 2)}">${p}</span><small>${f}</small></div>`).join("")}</div>`;
  const tabL = (titre, langs, entetes, lignes) => `<div class="tab-l"><span class="etiquette">${titre}</span><div class="tab-defil"><table><thead><tr>${entetes.map(e => `<th>${e}</th>`).join("")}</tr></thead><tbody>${lignes.map(l => `<tr>${l.map((c, i) => `<td${langs[i] ? ` lang="${langs[i]}"` : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
  const piegesL = (lang, liste) => `<div class="pieges-l"><span class="etiquette">Les pièges à éviter</span><ul>${liste.map(([faux, vrai, pourquoi]) => `<li><span class="faux-l" lang="${lang}">${faux}</span> → <b lang="${lang}">${vrai}</b><small>${pourquoi}</small></li>`).join("")}</ul></div>`;

  const LANGUES_PLUS = {
    // ---------------------------------------------------------------- ANGLAIS
    "en-present": {
      cours: rg("Present simple", "Pour une <b>habitude</b> ou une <b>vérité générale</b>. À he / she / it, on ajoute <b>-s</b> (he plays, she goes, he studies, she watches). Négation : don't / doesn't + base. Question : Do / Does + sujet + base.") +
        rg("Present continuous", "Pour une action <b>en train de se passer</b> : be (am / is / are) + verbe en -ing. « I am studying now. »") +
        rg("Mots repères", "Present simple : always, usually, often, sometimes, never, every day, on Sundays. Present continuous : now, right now, at the moment, today, this week, Look!, Listen!") +
        tabL("Conjugaison de « to play »", ["", "en", "en"], ["Sujet", "Present simple", "Present continuous"], [["I", "I play", "I am playing"], ["you", "you play", "you are playing"], ["he / she / it", "she play<b>s</b>", "she is playing"], ["we", "we play", "we are playing"], ["they", "they play", "they are playing"]]) +
        tabL("Affirmer, nier, questionner", ["", "en", "en"], ["Forme", "Present simple", "Present continuous"], [["Affirmation", "She plays.", "She is playing."], ["Négation", "She doesn't play.", "She isn't playing."], ["Question", "Does she play?", "Is she playing?"], ["Réponse courte", "Yes, she does. / No, she doesn't.", "Yes, she is. / No, she isn't."]]) +
        exL("en-GB", [["My mother sells fruit at the market.", "Ma mère vend des fruits au marché. (habitude)"], ["The sun rises in the east.", "Le soleil se lève à l'est. (vérité générale)"], ["He doesn't eat meat.", "Il ne mange pas de viande."], ["Do you speak English? — Yes, I do.", "Parles-tu anglais ? — Oui."], ["Look! It is raining.", "Regarde ! Il pleut. (en ce moment)"], ["We are revising for the BEPC this week.", "Nous révisons pour le BEPC cette semaine."]]) +
        piegesL("en", [["He go to school.", "He goes to school.", "À he / she / it, n'oublie pas le -s."], ["Does she plays?", "Does she play?", "Le -s est déjà sur does : le verbe reste à la base."], ["I am go to school.", "I go / I am going to school.", "Jamais be + base : c'est be + V-ing."], ["swiming, writting", "swimming, writing", "swim → swimming (on double) ; write → writing (le e tombe)."], ["I am knowing the answer.", "I know the answer.", "know, like, want, understand ne se mettent pas en -ing."]]),
      ecoute: [
        ["She goes to the market every Saturday.", "Elle va au marché tous les samedis.", "Elle est allée au marché samedi.", "Elle va aller au marché samedi.", "Elle n'aime pas le marché.", "goes + every Saturday : une habitude au présent."],
        ["They are playing football at the moment.", "Ils jouent au football en ce moment.", "Ils ont joué au football hier.", "Ils vont jouer au football.", "Ils n'aiment pas le football.", "are playing + at the moment : action en cours."],
        ["Does your brother speak English?", "Est-ce que ton frère parle anglais ?", "Ton frère parle anglais.", "Ton frère parlait anglais.", "Ton frère ne parle pas anglais.", "Does… ? : c'est une question au présent."],
        ["I don't understand the question.", "Je ne comprends pas la question.", "Je comprends la question.", "Je n'ai pas compris la réponse.", "Je pose une question.", "don't = négation au présent."]
      ],
      ecrire: [
        ["Awa ___ (go) to school on foot every day.", ["goes"], "Awa va à l'école à pied tous les jours.", "Habitude (every day) avec she : -s. Verbe en -o : go → goes."],
        ["Listen! The baby ___ (cry).", ["is crying", "'s crying"], "Écoute ! Le bébé pleure.", "« Listen! » : action en cours → is + crying."],
        ["My father ___ (not / like) rice.", ["doesn't like", "does not like"], "Mon père n'aime pas le riz.", "Négation à la 3e personne : doesn't + base (like, sans -s)."],
        ["___ your sister play football? — Yes, she does.", ["does"], "Est-ce que ta sœur joue au football ? — Oui.", "Question avec she : Does + sujet + base."],
        ["We ___ (watch) a film at the moment.", ["are watching", "'re watching"], "Nous regardons un film en ce moment.", "« at the moment » → are + watching."],
        ["She ___ (study) English every evening.", ["studies"], "Elle étudie l'anglais chaque soir.", "Consonne + y → -ies : study → studies."],
        ["They ___ (not / play) now; they are eating.", ["aren't playing", "are not playing"], "Ils ne jouent pas maintenant ; ils mangent.", "« now » : négation du present continuous → aren't + V-ing."],
        ["Water ___ (boil) at 100 °C.", ["boils"], "L'eau bout à 100 °C.", "Vérité générale → present simple, avec -s pour it."]
      ],
      ordre: [
        ["She usually gets up at six.", "Elle se lève d'habitude à six heures."],
        ["Are you doing your homework now?", "Est-ce que tu fais tes devoirs maintenant ?"],
        ["My brother doesn't like football.", "Mon frère n'aime pas le football."],
        ["Where does your mother work?", "Où travaille ta mère ?"]
      ]
    },
    "en-past": {
      cours: rg("Past simple", "Pour une action <b>terminée</b> à un moment précis du passé : yesterday, last week, last year, in 2020, two days ago. Verbes réguliers : <b>-ed</b> (played, visited). Négation : didn't + base. Question : Did + sujet + base.") +
        rg("Verbes irréguliers", "Ils ne prennent pas -ed : il faut les apprendre par cœur (tableau ci-dessous). Le 2e mot sert au past simple, le 3e (participe passé) sert au present perfect et au passif.") +
        rg("Past continuous", "Action <b>en cours</b> dans le passé : was / were + V-ing. On l'utilise souvent avec when : « I was reading when he arrived. »") +
        rg("Orthographe du -ed", "stop → stopped (on double la consonne) ; study → studied (y → ied) ; like → liked (e + d).") +
        tabL("Les verbes irréguliers les plus fréquents", ["en", "en", "en", ""], ["Base", "Past simple", "Participe passé", "Sens"], [["be", "was / were", "been", "être"], ["begin", "began", "begun", "commencer"], ["buy", "bought", "bought", "acheter"], ["come", "came", "come", "venir"], ["do", "did", "done", "faire"], ["eat", "ate", "eaten", "manger"], ["give", "gave", "given", "donner"], ["go", "went", "gone", "aller"], ["have", "had", "had", "avoir"], ["know", "knew", "known", "savoir, connaître"], ["make", "made", "made", "faire, fabriquer"], ["say", "said", "said", "dire"], ["see", "saw", "seen", "voir"], ["take", "took", "taken", "prendre"], ["tell", "told", "told", "dire, raconter"], ["write", "wrote", "written", "écrire"]]) +
        tabL("Affirmer, nier, questionner", ["", "en", "en"], ["Forme", "Verbe régulier", "Verbe irrégulier"], [["Affirmation", "She played.", "She went."], ["Négation", "She didn't play.", "She didn't go."], ["Question", "Did she play?", "Did she go?"]]) +
        exL("en-GB", [["Yesterday, I visited my grandmother in Bouaké.", "Hier, j'ai rendu visite à ma grand-mère à Bouaké."], ["We went to Assinie last holidays.", "Nous sommes allés à Assinie aux dernières vacances."], ["She didn't come to school on Monday.", "Elle n'est pas venue à l'école lundi."], ["Did you watch the match? — Yes, I did.", "As-tu regardé le match ? — Oui."], ["Ten years ago, there was no bridge here.", "Il y a dix ans, il n'y avait pas de pont ici."], ["I was sleeping when the phone rang.", "Je dormais quand le téléphone a sonné."]]) +
        piegesL("en", [["I goed to school.", "I went to school.", "go est irrégulier : went."], ["Did you went?", "Did you go?", "Après did, le verbe revient à la base."], ["She didn't came.", "She didn't come.", "Même règle avec didn't."], ["stoped, studyed", "stopped, studied", "Attention à l'orthographe du -ed."], ["I have seen him yesterday.", "I saw him yesterday.", "Avec une date passée précise (yesterday), c'est le past simple."]]),
      ecoute: [
        ["I went to Abidjan with my uncle last week.", "Je suis allé à Abidjan avec mon oncle la semaine dernière.", "Je vais à Abidjan avec mon oncle la semaine prochaine.", "Mon oncle habite à Abidjan.", "Je vais souvent à Abidjan.", "went = passé de go ; last week = la semaine dernière."],
        ["Did you finish your homework?", "As-tu fini tes devoirs ?", "Finis tes devoirs !", "Tu finiras tes devoirs ?", "Tu n'as pas de devoirs ?", "Did… ? : question au passé."],
        ["She didn't eat at the canteen.", "Elle n'a pas mangé à la cantine.", "Elle a mangé à la cantine.", "Elle mange à la cantine.", "Elle va manger à la cantine.", "didn't eat : négation au passé."],
        ["We were sleeping when the rain started.", "Nous dormions quand la pluie a commencé.", "Nous dormirons quand il pleuvra.", "Nous avons dormi sous la pluie.", "Nous ne dormons pas quand il pleut.", "were sleeping : action en cours dans le passé."]
      ],
      ecrire: [
        ["Last Sunday, we ___ (go) to church.", ["went"], "Dimanche dernier, nous sommes allés à l'église.", "« Last Sunday » : past simple. go → went."],
        ["She ___ (buy) a new dress yesterday.", ["bought"], "Elle a acheté une nouvelle robe hier.", "buy → bought (irrégulier, à ne pas confondre avec brought)."],
        ["I ___ (not / see) Kofi at the party.", ["didn't see", "did not see"], "Je n'ai pas vu Kofi à la fête.", "didn't + base : see (et non saw)."],
        ["___ you finish your homework last night?", ["did"], "As-tu fini tes devoirs hier soir ?", "Question au passé : Did + sujet + base."],
        ["The teacher ___ (write) the date on the board.", ["wrote"], "Le professeur a écrit la date au tableau.", "write → wrote → written."],
        ["They ___ (stop) the car in front of the school.", ["stopped"], "Ils ont arrêté la voiture devant l'école.", "Verbe court consonne-voyelle-consonne : on double : stopped."],
        ["He ___ (study) all night before the test.", ["studied"], "Il a étudié toute la nuit avant le contrôle.", "Consonne + y → -ied : studied."],
        ["I ___ (read) when the lights went off.", ["was reading"], "Je lisais quand la lumière s'est éteinte.", "Action en cours dans le passé : was + V-ing."]
      ],
      ordre: [
        ["We visited the port last year.", "Nous avons visité le port l'année dernière."],
        ["Did you see the match yesterday?", "As-tu vu le match hier ?"],
        ["She didn't go to school on Monday.", "Elle n'est pas allée à l'école lundi."],
        ["They were playing when it started to rain.", "Ils jouaient quand il a commencé à pleuvoir."]
      ]
    },
    "en-perfect": {
      cours: rg("Formation", "<b>have / has + participe passé</b> : I have finished, she has written. Forme courte : I've, she's. Négation : haven't / hasn't. Question : Have you… ? Has she… ?") +
        rg("Emplois", "1) Une action passée dont le résultat compte <b>maintenant</b> : « I have lost my pen » (je ne l'ai plus). 2) Une <b>expérience</b> : ever (déjà, dans une question), never (jamais). 3) Une durée qui <b>continue</b> jusqu'à maintenant, avec for ou since.") +
        rg("For ou since ?", "<b>for</b> + une durée : for two hours, for three years. <b>since</b> + un point de départ : since Monday, since 2020, since I was a child. En français, c'est le même mot : « depuis ».") +
        rg("Already, yet, just", "<b>already</b> = déjà (phrase affirmative) ; <b>yet</b> = pas encore (négation) ou déjà (question), en fin de phrase ; <b>just</b> = venir de.") +
        tabL("Conjugaison de « to finish »", ["", "en", "en", "en"], ["Sujet", "Affirmation", "Négation", "Question"], [["I / you / we / they", "I have finished", "I haven't finished", "Have you finished?"], ["he / she / it", "she has finished", "she hasn't finished", "Has she finished?"]]) +
        tabL("For ou since ?", ["en", "en"], ["for (une durée)", "since (un point de départ)"], [["for two hours", "since eight o'clock"], ["for three days", "since Monday"], ["for five years", "since 2020"], ["for a long time", "since I was a child"]]) +
        exL("en-GB", [["I have lived in Yamoussoukro since 2019.", "J'habite à Yamoussoukro depuis 2019."], ["She has studied English for four years.", "Elle étudie l'anglais depuis quatre ans."], ["Have you ever been to Ghana? — No, never.", "Es-tu déjà allé au Ghana ? — Non, jamais."], ["I have already done my exercises.", "J'ai déjà fait mes exercices."], ["He hasn't finished yet.", "Il n'a pas encore fini."], ["They have just arrived.", "Ils viennent d'arriver."]]) +
        piegesL("en", [["I live here since 2020.", "I have lived here since 2020.", "« depuis » + présent en français = present perfect en anglais."], ["for 2020", "since 2020", "2020 est un point de départ, pas une durée."], ["She have finished.", "She has finished.", "À he / she / it : has."], ["I haven't finished already.", "I haven't finished yet.", "Dans une négation : yet."], ["I have seen him yesterday.", "I saw him yesterday.", "Moment passé précis → past simple."]]),
      ecoute: [
        ["I have lived here since 2015.", "J'habite ici depuis 2015.", "J'ai habité ici en 2015.", "J'habiterai ici en 2015.", "Je n'ai jamais habité ici.", "have lived + since = depuis."],
        ["Have you ever been to Man?", "Es-tu déjà allé à Man ?", "Vas-tu aller à Man ?", "Habites-tu à Man ?", "Pourquoi es-tu à Man ?", "Have you ever… ? = As-tu déjà… ?"],
        ["She hasn't finished yet.", "Elle n'a pas encore fini.", "Elle a déjà fini.", "Elle vient de finir.", "Elle finira bientôt.", "hasn't… yet = pas encore."],
        ["They have just left.", "Ils viennent de partir.", "Ils vont partir.", "Ils sont partis depuis longtemps.", "Ils ne sont pas partis.", "have just + participe passé = venir de."]
      ],
      ecrire: [
        ["I ___ (live) in Daloa since 2018.", ["have lived", "'ve lived"], "J'habite à Daloa depuis 2018.", "« depuis » + point de départ → have + lived."],
        ["She has been our teacher ___ three years.", ["for"], "Elle est notre professeure depuis trois ans.", "three years = une durée → for."],
        ["We have known him ___ 2021.", ["since"], "Nous le connaissons depuis 2021.", "2021 = un point de départ → since."],
        ["He ___ (not / finish) his homework yet.", ["hasn't finished", "has not finished"], "Il n'a pas encore fini ses devoirs.", "he → hasn't + participe passé."],
        ["___ you ever eaten attiéké?", ["have"], "As-tu déjà mangé de l'attiéké ?", "Question : Have + sujet + participe passé."],
        ["They have ___ arrived. (Ils viennent d'arriver.)", ["just"], "Ils viennent d'arriver.", "« venir de » → just."],
        ["I have ___ (write) three letters.", ["written"], "J'ai écrit trois lettres.", "write → wrote → written : il faut le participe passé."],
        ["Have you done your exercises ___? (déjà ?)", ["yet"], "As-tu déjà fait tes exercices ?", "Dans une question, « déjà » en fin de phrase = yet."]
      ],
      ordre: [
        ["I have never seen the sea.", "Je n'ai jamais vu la mer."],
        ["She has lived here for ten years.", "Elle habite ici depuis dix ans."],
        ["Have you finished your homework yet?", "As-tu déjà fini tes devoirs ?"],
        ["We have just eaten.", "Nous venons de manger."]
      ]
    },
    "en-future": {
      cours: rg("Will", "Prédiction ou décision prise <b>sur le moment</b> : « It will be hot tomorrow. » « I'll help you. » will + base, à toutes les personnes. Négation : won't. Question : Will you… ?") +
        rg("Be going to", "Un <b>projet</b> déjà décidé, ou quelque chose qu'on voit arriver : « I am going to study medicine. » « Look at the clouds! It is going to rain. »") +
        rg("If, type 1 (possible)", "<b>If + présent, will + base</b> : « If you study, you will pass. » Jamais will juste après if.") +
        rg("If, type 2 (imaginaire)", "<b>If + past, would + base</b> : « If I were rich, I would build a school. » Avec be, on dit were à toutes les personnes.") +
        tabL("Will et be going to", ["", "en", "en"], ["Forme", "will", "be going to"], [["Affirmation", "I will go (I'll go)", "I am going to go"], ["Négation", "I won't go", "I'm not going to go"], ["Question", "Will you go?", "Are you going to go?"]]) +
        tabL("Les phrases avec if", ["", "en", "en", "en"], ["Type", "Condition", "Résultat", "Exemple"], [["1 · possible", "if + présent", "will + base", "If it rains, we will stay at home."], ["2 · imaginaire", "if + past", "would + base", "If I had money, I would buy a bike."]]) +
        exL("en-GB", [["It will be hot tomorrow.", "Il fera chaud demain. (prédiction)"], ["The bag is heavy. — Don't worry, I'll carry it.", "Le sac est lourd. — Ne t'inquiète pas, je vais le porter. (décision sur le moment)"], ["Next year, I am going to study at the lycée.", "L'année prochaine, je vais étudier au lycée. (projet)"], ["Look at the clouds! It is going to rain.", "Regarde les nuages ! Il va pleuvoir."], ["If you study every day, you will pass your BEPC.", "Si tu étudies chaque jour, tu réussiras ton BEPC."], ["If I were the minister, I would build more schools.", "Si j'étais ministre, je construirais plus d'écoles."]]) +
        piegesL("en", [["If it will rain…", "If it rains…", "Jamais will juste après if."], ["I will to go.", "I will go.", "will + base, sans to."], ["She wills come.", "She will come.", "will ne prend jamais de -s."], ["If I would have money…", "If I had money…", "Type 2 : if + past."], ["I am going study.", "I am going to study.", "N'oublie pas le to."]]),
      ecoute: [
        ["If it rains, the match will be cancelled.", "S'il pleut, le match sera annulé.", "Il a plu et le match a été annulé.", "Le match a lieu même s'il pleut.", "Il ne pleut jamais pendant les matchs.", "If + présent, will… : une condition possible."],
        ["I'm going to visit my grandparents next week.", "Je vais rendre visite à mes grands-parents la semaine prochaine.", "J'ai rendu visite à mes grands-parents la semaine dernière.", "Mes grands-parents viennent me voir.", "Je rends visite à mes grands-parents chaque semaine.", "going to + next week : un projet."],
        ["What would you do if you were the president?", "Que ferais-tu si tu étais président ?", "Que fais-tu quand tu vois le président ?", "Le président a-t-il fait cela ?", "Veux-tu devenir président ?", "would + if + past : une situation imaginaire."],
        ["I won't be late tomorrow.", "Je ne serai pas en retard demain.", "J'étais en retard hier.", "Je serai en retard demain.", "Je ne suis jamais en retard.", "won't = will not."]
      ],
      ecrire: [
        ["If it ___ (rain), we will stay at home.", ["rains"], "S'il pleut, nous resterons à la maison.", "Après if (type 1) : présent, jamais will. it → rains."],
        ["If you work hard, you ___ (pass) your exam.", ["will pass", "'ll pass"], "Si tu travailles dur, tu réussiras ton examen.", "Type 1 : if + présent, will + base."],
        ["If I ___ (have) a lot of money, I would help poor children.", ["had"], "Si j'avais beaucoup d'argent, j'aiderais les enfants pauvres.", "Type 2 : if + past (had), would + base."],
        ["If I were you, I ___ (study) more.", ["would study", "'d study"], "À ta place, j'étudierais davantage.", "Type 2 : would + base."],
        ["Next year, I am going ___ (learn) Spanish.", ["to learn"], "L'année prochaine, je vais apprendre l'espagnol.", "be going to + base : n'oublie pas to."],
        ["Don't worry, I ___ (not / tell) anybody.", ["won't tell", "will not tell"], "Ne t'inquiète pas, je ne le dirai à personne.", "Négation de will : won't + base."],
        ["Look at those black clouds! It ___ (rain).", ["is going to rain", "'s going to rain"], "Regarde ces nuages noirs ! Il va pleuvoir.", "On voit le signe → be going to."],
        ["___ you come to my birthday party? — Yes, I will.", ["will"], "Viendras-tu à mon anniversaire ? — Oui.", "Question au futur : Will + sujet + base."]
      ],
      ordre: [
        ["If you study, you will pass.", "Si tu étudies, tu réussiras."],
        ["I am going to be a doctor.", "Je vais être médecin."],
        ["Will you help me tomorrow?", "M'aideras-tu demain ?"],
        ["If I were rich, I would build a school.", "Si j'étais riche, je construirais une école."]
      ]
    },
    "en-modals": {
      cours: rg("Les modaux", "can, could, must, should, may, might + <b>base verbale</b>, sans to. Ils ne prennent <b>jamais de -s</b> : he can swim. Négation : can't, mustn't, shouldn't. Question : on inverse : Can you… ? Should I… ?") +
        rg("Must ou have to ?", "<b>must</b> : obligation que l'on ressent ou une règle forte (You must wear a helmet). <b>have to</b> : obligation qui vient de l'extérieur, et il se conjugue (she has to, I had to). <b>mustn't</b> = c'est interdit ; <b>don't have to</b> = ce n'est pas obligatoire.") +
        tabL("Sens de chaque modal", ["en", "", ""], ["Modal", "Sens", "Exemple"], [["can","capacité, permission","<span lang=\"en\">I can swim.</span><small class=\"tr-l\">Je sais nager.</small>"],["could","capacité passée, demande polie","<span lang=\"en\">Could you help me?</span><small class=\"tr-l\">Pourriez-vous m'aider ?</small>"],["must","obligation","<span lang=\"en\">You must wear a helmet.</span><small class=\"tr-l\">Tu dois porter un casque.</small>"],["mustn't","interdiction","<span lang=\"en\">You mustn't smoke here.</span><small class=\"tr-l\">Il est interdit de fumer ici.</small>"],["have to","obligation (règle extérieure)","<span lang=\"en\">I have to wear a uniform.</span><small class=\"tr-l\">Je dois porter un uniforme.</small>"],["don't have to","pas d'obligation","<span lang=\"en\">You don't have to pay.</span><small class=\"tr-l\">Tu n'es pas obligé de payer.</small>"],["should","conseil","<span lang=\"en\">You should sleep early.</span><small class=\"tr-l\">Tu devrais dormir tôt.</small>"],["may / might","possibilité, permission polie","<span lang=\"en\">It may rain. May I come in?</span><small class=\"tr-l\">Il se peut qu'il pleuve. Puis-je entrer ?</small>"]]) +
        exL("en-GB", [["Can you speak Spanish? — Yes, I can.", "Sais-tu parler espagnol ? — Oui."], ["Pupils must respect the teacher.", "Les élèves doivent respecter le professeur."], ["You should drink a lot of water when it is hot.", "Tu devrais boire beaucoup d'eau quand il fait chaud."], ["He couldn't come because he was sick.", "Il n'a pas pu venir parce qu'il était malade."], ["You mustn't cheat during the exam.", "Il est interdit de tricher pendant l'examen."], ["You don't have to come on Saturday.", "Tu n'es pas obligé de venir samedi."]]) +
        piegesL("en", [["He cans swim.", "He can swim.", "Jamais de -s aux modaux."], ["I must to go.", "I must go.", "Pas de to après un modal."], ["Can you to help me?", "Can you help me?", "Même règle dans la question."], ["You mustn't come. (= pas obligé)", "You don't have to come.", "mustn't = interdit ; don't have to = pas obligé."], ["He have to work.", "He has to work.", "have to se conjugue : he has to."]]),
      ecoute: [
        ["You mustn't use your phone during the test.", "Il est interdit d'utiliser ton téléphone pendant le contrôle.", "Tu dois utiliser ton téléphone pendant le contrôle.", "Tu peux utiliser ton téléphone après le contrôle.", "Ton téléphone est cassé.", "mustn't = interdiction."],
        ["You should see a doctor.", "Tu devrais voir un médecin.", "Tu es médecin.", "Tu as vu un médecin.", "Le médecin veut te voir.", "should = conseil."],
        ["Could you speak more slowly, please?", "Pourriez-vous parler plus lentement, s'il vous plaît ?", "Pouvez-vous parler plus fort ?", "Vous parlez trop vite.", "Pourquoi parlez-vous ?", "Could you… ? = une demande polie."],
        ["I can't come to your party.", "Je ne peux pas venir à ta fête.", "Je viendrai à ta fête.", "Je suis venu à ta fête.", "Ta fête est annulée.", "can't = ne peut pas."]
      ],
      ecrire: [
        ["You ___ smoke in the classroom. (interdiction)", ["mustn't", "must not"], "Il est interdit de fumer en classe.", "Interdiction → mustn't + base."],
        ["You look tired. You ___ go to bed early. (conseil)", ["should"], "Tu as l'air fatigué. Tu devrais te coucher tôt.", "Conseil → should."],
        ["My little brother ___ read. He is only three. (il ne sait pas)", ["can't", "cannot", "can not"], "Mon petit frère ne sait pas lire. Il n'a que trois ans.", "Capacité, à la forme négative → can't."],
        ["___ I open the window, please? (permission polie)", ["may", "can", "could"], "Puis-je ouvrir la fenêtre, s'il vous plaît ?", "Permission polie : May I… ? (Can I… ? et Could I… ? sont aussi justes)."],
        ["She ___ (have to) wear a uniform at school.", ["has to"], "Elle doit porter un uniforme à l'école.", "have to se conjugue : she has to."],
        ["When I was five, I ___ swim. (capacité passée)", ["could"], "Quand j'avais cinq ans, je savais nager.", "Capacité dans le passé → could."],
        ["Take your umbrella: it ___ rain this afternoon. (possibilité)", ["may", "might"], "Prends ton parapluie : il se peut qu'il pleuve cet après-midi.", "Possibilité → may ou might."],
        ["Tomorrow is Sunday: you ___ get up early. (pas obligé)", ["don't have to", "do not have to"], "Demain c'est dimanche : tu n'es pas obligé de te lever tôt.", "Pas d'obligation → don't have to (et non mustn't)."]
      ],
      ordre: [
        ["You should sleep under a mosquito net.", "Tu devrais dormir sous une moustiquaire."],
        ["Can you help me, please?", "Peux-tu m'aider, s'il te plaît ?"],
        ["We must respect the rules.", "Nous devons respecter les règles."],
        ["You mustn't throw rubbish in the gutter.", "Tu ne dois pas jeter d'ordures dans le caniveau."]
      ]
    },
    "en-compare": {
      cours: rg("Adjectif court (1 syllabe)", "Comparatif : adjectif + <b>-er than</b> (taller than). Superlatif : <b>the</b> + adjectif + <b>-est</b> (the tallest).") +
        rg("Adjectif long (2 syllabes ou plus)", "Comparatif : <b>more</b> + adjectif + than (more beautiful than). Superlatif : <b>the most</b> + adjectif (the most beautiful). Les adjectifs en -y font -ier / -iest : happy → happier → the happiest.") +
        rg("Égalité et infériorité", "<b>as … as</b> = aussi … que (as tall as). <b>not as … as</b> ou <b>less … than</b> = moins … que.") +
        tabL("Comparatif et superlatif", ["en", "en", "en"], ["Adjectif", "Comparatif", "Superlatif"], [["tall (court)", "taller than", "the tallest"], ["large (finit par e)", "larger than", "the largest"], ["big (consonne-voyelle-consonne)", "bigger than", "the biggest"], ["happy, easy (finit par y)", "happier than", "the happiest"], ["beautiful (long)", "more beautiful than", "the most beautiful"], ["good (irrégulier)", "better than", "the best"], ["bad (irrégulier)", "worse than", "the worst"], ["far (irrégulier)", "farther / further than", "the farthest"]]) +
        exL("en-GB", [["Abidjan is bigger than Bouaké.", "Abidjan est plus grande que Bouaké."], ["Mount Nimba is the highest mountain in Côte d'Ivoire.", "Le mont Nimba est la plus haute montagne de Côte d'Ivoire."], ["For me, maths is more difficult than music.", "Pour moi, les maths sont plus difficiles que la musique."], ["This is the best day of my life.", "C'est le plus beau jour de ma vie."], ["My bag is as heavy as yours.", "Mon sac est aussi lourd que le tien."], ["Awa is less tall than her sister.", "Awa est moins grande que sa sœur."]]) +
        piegesL("en", [["more big", "bigger", "Adjectif court : -er, pas more."], ["difficulter", "more difficult", "Adjectif long : more."], ["gooder, the goodest", "better, the best", "good est irrégulier."], ["taller that", "taller than", "« que » dans une comparaison = than."], ["the most tallest", "the tallest", "Jamais most et -est ensemble."]]),
      ecoute: [
        ["Kofi is taller than his brother.", "Kofi est plus grand que son frère.", "Kofi est plus petit que son frère.", "Kofi est aussi grand que son frère.", "Kofi est le plus grand de la famille.", "taller than = plus grand que."],
        ["This is the most beautiful beach in the country.", "C'est la plus belle plage du pays.", "Cette plage est plus belle que l'autre.", "Cette plage n'est pas belle.", "Il y a beaucoup de belles plages.", "the most + adjectif = le plus…"],
        ["My marks are worse than last year.", "Mes notes sont moins bonnes que l'année dernière.", "Mes notes sont meilleures que l'année dernière.", "Mes notes sont les mêmes que l'année dernière.", "Je n'ai pas eu de notes l'année dernière.", "worse = pire, plus mauvais."],
        ["Aya is as old as me.", "Aya a le même âge que moi.", "Aya est plus âgée que moi.", "Aya est plus jeune que moi.", "Aya est très vieille.", "as old as = aussi âgé que."]
      ],
      ecrire: [
        ["An elephant is ___ (big) than a dog.", ["bigger"], "Un éléphant est plus gros qu'un chien.", "big : consonne-voyelle-consonne → on double le g : bigger."],
        ["Maths is ___ (difficult) than drawing.", ["more difficult"], "Les maths sont plus difficiles que le dessin.", "Adjectif long → more + adjectif."],
        ["This is the ___ (good) mango in the basket.", ["best"], "C'est la meilleure mangue du panier.", "good → better → the best."],
        ["Today is ___ (hot) than yesterday.", ["hotter"], "Aujourd'hui, il fait plus chaud qu'hier.", "hot → hotter (on double le t)."],
        ["Awa is the ___ (happy) girl in the class.", ["happiest"], "Awa est la fille la plus heureuse de la classe.", "happy → the happiest (y devient i)."],
        ["The Nile is the ___ (long) river in Africa.", ["longest"], "Le Nil est le plus long fleuve d'Afrique.", "Superlatif court : the + -est."],
        ["My brother is as tall ___ my father.", ["as"], "Mon frère est aussi grand que mon père.", "Égalité : as … as."],
        ["Your mark is ___ (bad) than mine.", ["worse"], "Ta note est moins bonne que la mienne.", "bad → worse → the worst."]
      ],
      ordre: [
        ["Abidjan is bigger than Daloa.", "Abidjan est plus grande que Daloa."],
        ["She is the most intelligent pupil in the class.", "C'est l'élève la plus intelligente de la classe."],
        ["My bag is as heavy as yours.", "Mon sac est aussi lourd que le tien."],
        ["English is easier than Spanish for me.", "L'anglais est plus facile que l'espagnol pour moi."]
      ]
    },
    "en-passive": {
      cours: rg("La voix passive", "Le sujet <b>subit</b> l'action : <b>be (au bon temps) + participe passé</b>, puis by + l'agent si on le connaît. « Cocoa is grown in Côte d'Ivoire. » « The school was built by the villagers. »") +
        rg("Le discours rapporté", "Quand on rapporte ce que quelqu'un a dit (he said…), on <b>recule d'un temps</b> : am / is → was ; present → past ; will → would ; can → could. Les pronoms et les repères changent : I → he / she, now → then, today → that day, tomorrow → the next day.") +
        rg("Ordres et questions rapportés", "Ordre : told + personne + <b>to</b> + base (not to pour une interdiction). Question : asked + if (ou le mot interrogatif), <b>sans inversion</b> : « She asked me where I lived. »") +
        tabL("Du actif au passif", ["", "en", "en"], ["Temps", "Actif", "Passif"], [["présent", "They grow cocoa.", "Cocoa is grown."], ["passé", "They built the bridge in 2014.", "The bridge was built in 2014."], ["present perfect", "They have repaired the road.", "The road has been repaired."], ["futur", "They will open the school.", "The school will be opened."], ["modal", "We must protect forests.", "Forests must be protected."]]) +
        tabL("Du discours direct au discours rapporté", ["en", "en"], ["Il dit…", "Il a dit que…"], [["« I am tired. »", "He said (that) he was tired."], ["« I like mangoes. »", "She said she liked mangoes."], ["« I will come. »", "He said he would come."], ["« I can swim. »", "She said she could swim."], ["« Sit down! »", "The teacher told us to sit down."], ["« Don't talk! »", "He told me not to talk."], ["« Where do you live? »", "She asked me where I lived."]]) +
        exL("en-GB", [["Cocoa is grown in the west of Côte d'Ivoire.", "Le cacao est cultivé dans l'ouest de la Côte d'Ivoire."], ["The Henri Konan Bédié bridge was opened in 2014.", "Le pont Henri Konan Bédié a été ouvert en 2014."], ["The letter was written by my cousin.", "La lettre a été écrite par mon cousin."], ["Awa said that she was hungry.", "Awa a dit qu'elle avait faim."], ["The teacher told us to close our books.", "Le professeur nous a dit de fermer nos livres."], ["He asked me if I liked football.", "Il m'a demandé si j'aimais le football."]]) +
        piegesL("en", [["Cocoa is grow.", "Cocoa is grown.", "Le passif prend le participe passé."], ["The school built in 1990.", "The school was built in 1990.", "N'oublie pas be."], ["He said me…", "He told me… / He said to me…", "tell + personne ; say (to) + personne."], ["She said she is tired.", "She said she was tired.", "On recule d'un temps."], ["He asked me where did I live.", "He asked me where I lived.", "Pas d'inversion dans une question rapportée."]]),
      ecoute: [
        ["The school was built by the villagers.", "L'école a été construite par les villageois.", "Les villageois vont construire l'école.", "Les villageois vont à l'école.", "L'école construit un village.", "was built by = a été construit par."],
        ["He said that he was sick.", "Il a dit qu'il était malade.", "Il dit qu'il sera malade.", "Il a dit qu'il n'était pas malade.", "Il est allé voir un malade.", "said that he was = a dit qu'il était."],
        ["The teacher told us not to talk.", "Le professeur nous a dit de ne pas parler.", "Le professeur nous a dit de parler.", "Le professeur ne nous a pas parlé.", "Le professeur parle beaucoup.", "told us not to = nous a dit de ne pas."],
        ["Cocoa is exported to Europe.", "Le cacao est exporté vers l'Europe.", "Le cacao vient d'Europe.", "L'Europe produit du cacao.", "Le cacao n'est pas exporté.", "is exported = est exporté (passif)."]
      ],
      ecrire: [
        ["Cocoa ___ (grow) in Côte d'Ivoire.", ["is grown"], "Le cacao est cultivé en Côte d'Ivoire.", "Passif au présent : is + participe passé (grown)."],
        ["This school ___ (build) in 1995.", ["was built"], "Cette école a été construite en 1995.", "Passif au passé : was + built."],
        ["The windows ___ (clean) every Friday.", ["are cleaned"], "Les fenêtres sont nettoyées chaque vendredi.", "Sujet au pluriel → are + participe passé."],
        ["The new road will ___ (open) next month.", ["be opened"], "La nouvelle route sera ouverte le mois prochain.", "Passif au futur : will be + participe passé."],
        ["« I am tired. » → Awa said that she ___ tired.", ["was"], "Awa a dit qu'elle était fatiguée.", "On recule d'un temps : am → was."],
        ["« I will help you. » → He said he ___ help me.", ["would"], "Il a dit qu'il m'aiderait.", "will → would."],
        ["« Close the door! » → The teacher told me ___ the door.", ["to close"], "Le professeur m'a dit de fermer la porte.", "Ordre rapporté : told + personne + to + base."],
        ["« I can swim. » → She said she ___ swim.", ["could"], "Elle a dit qu'elle savait nager.", "can → could."]
      ],
      ordre: [
        ["The bridge was built in 2014.", "Le pont a été construit en 2014."],
        ["English is spoken in Ghana.", "L'anglais est parlé au Ghana."],
        ["She said that she was hungry.", "Elle a dit qu'elle avait faim."],
        ["The teacher told us to sit down.", "Le professeur nous a dit de nous asseoir."]
      ]
    },
    "en-relatives": {
      cours: rg("Pronoms relatifs", "Ils relient deux phrases : <b>who</b> pour une personne, <b>which</b> pour une chose ou un animal, <b>that</b> pour les deux, <b>whose</b> pour la possession (dont le…), <b>where</b> pour un lieu, <b>when</b> pour un moment.") +
        rg("Question tags", "Petite question à la fin (n'est-ce pas ?) : on reprend l'<b>auxiliaire</b> et le <b>pronom</b>, à la forme <b>inverse</b>. Phrase affirmative → tag négatif ; phrase négative → tag affirmatif. Sans auxiliaire, on prend do / does / did.") +
        rg("Connecteurs", "Ils organisent un texte : ajouter (and, also, in addition), opposer (but, however, although), cause (because), conséquence (so, therefore), ordre (first, then, finally), conclure (in conclusion).") +
        tabL("Les pronoms relatifs", ["en", "", ""], ["Pronom", "Pour", "Exemple"], [["who","une personne","<span lang=\"en\">The girl who sings is Aya.</span><small class=\"tr-l\">La fille qui chante est Aya.</small>"],["which","une chose, un animal","<span lang=\"en\">The book which I read is good.</span><small class=\"tr-l\">Le livre que j'ai lu est bien.</small>"],["that","personne ou chose","<span lang=\"en\">The man that helped me is a doctor.</span><small class=\"tr-l\">L'homme qui m'a aidé est médecin.</small>"],["whose","la possession","<span lang=\"en\">The boy whose father is a pilot…</span><small class=\"tr-l\">Le garçon dont le père est pilote…</small>"],["where","un lieu","<span lang=\"en\">The town where I live is Daloa.</span><small class=\"tr-l\">La ville où j'habite est Daloa.</small>"],["when","un moment","<span lang=\"en\">2026 is the year when…</span><small class=\"tr-l\">2026 est l'année où…</small>"]]) +
        tabL("Les question tags", ["en", "en"], ["Phrase", "Tag"], [["You are Ivorian,", "aren't you?"], ["She isn't tired,", "is she?"], ["He plays football,", "doesn't he?"], ["They went to school,", "didn't they?"], ["You can swim,", "can't you?"], ["Let's go,", "shall we?"]]) +
        tabL("Les connecteurs", ["", "en"], ["Pour…", "Connecteurs"], [["ajouter", "and, also, in addition, moreover"], ["opposer", "but, however, although"], ["donner la cause", "because, as"], ["donner la conséquence", "so, therefore"], ["mettre en ordre", "first, then, after that, finally"], ["conclure", "in conclusion, to sum up"]]) +
        exL("en-GB", [["The woman who sells mangoes is my aunt.", "La femme qui vend des mangues est ma tante."], ["This is the house where I was born.", "C'est la maison où je suis né."], ["It is hot, isn't it?", "Il fait chaud, n'est-ce pas ?"], ["Although it was raining, we went to school.", "Bien qu'il pleuve, nous sommes allés à l'école."], ["I was sick, so I stayed at home.", "J'étais malade, donc je suis resté à la maison."]]) +
        piegesL("en", [["The man which…", "The man who…", "Une personne → who."], ["The town where I live in.", "The town where I live.", "where remplace déjà « in »."], ["He plays football, isn't he?", "He plays football, doesn't he?", "Sans auxiliaire, on reprend do / does."], ["Although it rained, but we went.", "Although it rained, we went.", "Jamais although et but ensemble."], ["Because of it rains.", "Because it rains. / Because of the rain.", "because + phrase ; because of + nom."]]),
      ecoute: [
        ["The man who is talking is our new teacher.", "L'homme qui parle est notre nouveau professeur.", "Notre professeur ne parle pas.", "L'homme parle à notre professeur.", "Notre professeur est parti.", "who is talking = qui parle."],
        ["You like football, don't you?", "Tu aimes le football, n'est-ce pas ?", "Tu n'aimes pas le football.", "Aimes-tu le basket ?", "Tu jouais au football.", "don't you? = n'est-ce pas ?"],
        ["Although he was tired, he finished his homework.", "Bien qu'il soit fatigué, il a fini ses devoirs.", "Il était fatigué, donc il n'a pas fini ses devoirs.", "Il n'était pas fatigué.", "Il finira ses devoirs demain.", "Although = bien que."],
        ["This is the village where my grandfather lives.", "C'est le village où vit mon grand-père.", "Mon grand-père a quitté le village.", "Mon grand-père vit en ville.", "Où est le village ?", "where = où."]
      ],
      ecrire: [
        ["The boy ___ sits next to me is Kofi.", ["who", "that"], "Le garçon qui est assis à côté de moi est Kofi.", "Une personne → who (that est aussi juste)."],
        ["This is the market ___ my mother sells fruit.", ["where"], "C'est le marché où ma mère vend des fruits.", "Un lieu → where."],
        ["I have a friend ___ father is a pilot.", ["whose"], "J'ai un ami dont le père est pilote.", "La possession (dont le…) → whose."],
        ["The phone ___ I bought is broken.", ["which", "that"], "Le téléphone que j'ai acheté est cassé.", "Une chose → which (that est aussi juste)."],
        ["You are in form three, ___ you?", ["aren't"], "Tu es en 3e, n'est-ce pas ?", "Phrase affirmative avec are → tag négatif : aren't you?"],
        ["She doesn't like rice, ___ she?", ["does"], "Elle n'aime pas le riz, n'est-ce pas ?", "Phrase négative (doesn't) → tag affirmatif : does she?"],
        ["They went to Man, ___ they?", ["didn't"], "Ils sont allés à Man, n'est-ce pas ?", "Past simple affirmatif sans auxiliaire → didn't they?"],
        ["It was raining, ___ we stayed at home. (conséquence)", ["so"], "Il pleuvait, donc nous sommes restés à la maison.", "Une conséquence → so."]
      ],
      ordre: [
        ["The girl who sings is my sister.", "La fille qui chante est ma sœur."],
        ["This is the town where I was born.", "C'est la ville où je suis né."],
        ["It is hot today, isn't it?", "Il fait chaud aujourd'hui, n'est-ce pas ?"],
        ["I stayed at home because I was sick.", "Je suis resté à la maison parce que j'étais malade."]
      ]
    },
    "en-oral": {
      coursPlus: tabL("Phrases utiles devant le jury", ["en", ""], ["Anglais", "Français"], [["Good morning, sir / madam.", "Bonjour, monsieur / madame."], ["My name is… I am fifteen years old.", "Je m'appelle… J'ai quinze ans."], ["I am in form three at…", "Je suis en 3e au…"], ["Could you repeat, please?", "Pouvez-vous répéter, s'il vous plaît ?"], ["I'm sorry, I don't understand.", "Désolé, je ne comprends pas."], ["In my opinion… / I think that…", "À mon avis… / Je pense que…"], ["I agree / I disagree because…", "Je suis d'accord / pas d'accord parce que…"], ["Thank you for listening.", "Merci de m'avoir écouté."]]) +
        piegesL("en", [["I have fifteen years.", "I am fifteen (years old).", "L'âge se dit avec be."], ["I am agree.", "I agree.", "agree est un verbe : pas de am."], ["Good night! (en arrivant le soir)", "Good evening!", "Good night se dit pour partir ou dormir."], ["People is nice.", "People are nice.", "people est un pluriel."]]),
      ecoute: [
        ["Where do you live?", "Où habites-tu ?", "Que fais-tu ?", "Quel âge as-tu ?", "Comment vas-tu ?", "Where = où ; live = habiter."],
        ["What is your favourite subject?", "Quelle est ta matière préférée ?", "Quel est ton sport préféré ?", "Qui est ton professeur préféré ?", "Aimes-tu l'école ?", "favourite subject = matière préférée."]
      ],
      ecrire: [
        ["Good ___, sir. (le matin)", ["morning"], "Bonjour, monsieur.", "Le matin : Good morning ; l'après-midi : Good afternoon ; le soir : Good evening."],
        ["I am fifteen ___ old.", ["years"], "J'ai quinze ans.", "L'âge : I am + nombre + years old (jamais « I have »)."],
        ["I'm sorry, I don't ___. (je ne comprends pas)", ["understand"], "Désolé, je ne comprends pas.", "understand = comprendre."],
        ["___ my opinion, social media is useful.", ["in"], "À mon avis, les réseaux sociaux sont utiles.", "« À mon avis » = In my opinion."],
        ["I ___ with you. (je suis d'accord)", ["agree"], "Je suis d'accord avec toi.", "agree = être d'accord, sans am : I agree."],
        ["Thank you ___ listening.", ["for"], "Merci de m'avoir écouté.", "Thank you for + V-ing."]
      ],
      ordre: [
        ["Could you repeat, please?", "Pouvez-vous répéter, s'il vous plaît ?"],
        ["My name is Adriel and I am fifteen.", "Je m'appelle Adriel et j'ai quinze ans."],
        ["In my opinion, sport is important.", "À mon avis, le sport est important."],
        ["I agree with you because it is true.", "Je suis d'accord avec toi parce que c'est vrai."]
      ]
    },

    // ---------------------------------------------------------------- ESPAGNOL
    "es-presentarse": {
      coursPlus: tabL("Se présenter : questions et réponses", ["es", ""], ["Español", "Français"], [["¿Cómo te llamas? — Me llamo Adriel.", "Comment t'appelles-tu ? — Je m'appelle Adriel."], ["¿Cuántos años tienes? — Tengo quince años.", "Quel âge as-tu ? — J'ai quinze ans."], ["¿De dónde eres? — Soy de Costa de Marfil, soy marfileño.", "D'où es-tu ? — Je suis de Côte d'Ivoire, je suis ivoirien."], ["¿Dónde vives? — Vivo en Abiyán.", "Où habites-tu ? — J'habite à Abidjan."], ["¿En qué curso estás? — Estoy en tercero.", "En quelle classe es-tu ? — Je suis en 3e."], ["¿Qué tal? — Muy bien, gracias.", "Comment ça va ? — Très bien, merci."]]) +
        exL("es-ES", [["Buenos días, profesor.", "Bonjour, monsieur le professeur."], ["Hola, me llamo Aya y tengo catorce años.", "Salut, je m'appelle Aya et j'ai quatorze ans."], ["Mi hermano se llama Kofi.", "Mon frère s'appelle Kofi."], ["Vivo en Daloa con mi familia.", "J'habite à Daloa avec ma famille."], ["Hasta mañana.", "À demain."]]) +
        piegesL("es", [["Yo soy quince años.", "Tengo quince años.", "L'âge se dit avec tener (avoir)."], ["Me llamo es Aya.", "Me llamo Aya.", "me llamo veut déjà dire « je m'appelle »."], ["Soy ivoriano.", "Soy marfileño.", "Ivoirien = marfileño / marfileña."], ["Buenos tardes.", "Buenas tardes.", "tardes est féminin."], ["Cómo te llamas?", "¿Cómo te llamas?", "En espagnol, la question commence par ¿ et l'exclamation par ¡."]]),
      ecoute: [
        ["Me llamo Kofi y tengo quince años.", "Je m'appelle Kofi et j'ai quinze ans.", "Je m'appelle Kofi et j'ai cinq ans.", "Mon frère s'appelle Kofi.", "Kofi a quinze frères.", "Tengo quince años = j'ai quinze ans."],
        ["¿De dónde eres?", "D'où es-tu ?", "Où vas-tu ?", "Qui es-tu ?", "Quel âge as-tu ?", "¿De dónde…? = d'où ?"],
        ["Vivo en Yamusukro con mis padres.", "J'habite à Yamoussoukro avec mes parents.", "Mes parents habitent à Abidjan.", "Je vais à Yamoussoukro demain.", "Je vis seul à Yamoussoukro.", "vivo = j'habite ; mis padres = mes parents."],
        ["Buenas tardes, ¿qué tal?", "Bonjour (l'après-midi), comment ça va ?", "Bonne nuit, à demain.", "Au revoir, à plus tard.", "Bonjour, comment t'appelles-tu ?", "buenas tardes = bon après-midi ; ¿qué tal? = comment ça va ?"]
      ],
      ecrire: [
        ["¿Cómo te ___? — Me llamo Aya.", ["llamas"], "Comment t'appelles-tu ? — Je m'appelle Aya.", "llamarse : me llamo, te llamas, se llama."],
        ["___ quince años. (j'ai)", ["tengo"], "J'ai quinze ans.", "L'âge se dit avec tener : tengo."],
        ["Soy de Costa de Marfil, soy ___. (ivoirien)", ["marfileño"], "Je suis de Côte d'Ivoire, je suis ivoirien.", "ivoirien = marfileño (marfileña pour une fille)."],
        ["Buenas ___. (bonsoir)", ["noches"], "Bonsoir.", "Le soir : buenas noches."],
        ["___ en Bouaké. (j'habite)", ["vivo"], "J'habite à Bouaké.", "vivir → vivo (je)."],
        ["¿Cuántos años ___? (as-tu)", ["tienes"], "Quel âge as-tu ?", "tener → tienes (tu)."],
        ["Mi madre se ___ Ama.", ["llama"], "Ma mère s'appelle Ama.", "Elle s'appelle → se llama."],
        ["Hasta ___. (à demain)", ["mañana"], "À demain.", "mañana = demain (et aussi le matin)."]
      ],
      ordre: [
        ["Me llamo Aya y tengo catorce años.", "Je m'appelle Aya et j'ai quatorze ans."],
        ["Vivo en Abiyán con mi familia.", "J'habite à Abidjan avec ma famille."],
        ["¿Cuántos años tienes?", "Quel âge as-tu ?"],
        ["Soy marfileño y estoy en tercero.", "Je suis ivoirien et je suis en 3e."]
      ]
    },
    "es-ser-estar": {
      coursPlus: tabL("Conjugaison au présent", ["", "es", "es"], ["Sujet", "SER", "ESTAR"], [["yo", "soy", "estoy"], ["tú", "eres", "estás"], ["él / ella / usted", "es", "está"], ["nosotros", "somos", "estamos"], ["vosotros", "sois", "estáis"], ["ellos / ellas / ustedes", "son", "están"]]) +
        tabL("Quand utiliser ser ou estar ?", ["", ""], ["SER (ce qu'on est)", "ESTAR (où / comment on est)"], [["identité : Soy Adriel.", "lieu : Estoy en casa."], ["nationalité : Soy marfileño.", "état passager : Estoy cansado."], ["métier : Es médico.", "humeur : Está contenta."], ["caractère, description : Es alto.", "action en cours : Estoy estudiando."], ["l'heure : Son las tres.", ""]]) +
        exL("es-ES", [["Soy alumno y soy marfileño.", "Je suis élève et je suis ivoirien."], ["Mi padre es médico.", "Mon père est médecin."], ["Hoy estoy cansado.", "Aujourd'hui je suis fatigué."], ["Abiyán está en el sur del país.", "Abidjan est dans le sud du pays."], ["Son las ocho.", "Il est huit heures."], ["Estamos estudiando para el BEPC.", "Nous sommes en train d'étudier pour le BEPC."]]) +
        piegesL("es", [["Estoy marfileño.", "Soy marfileño.", "Nationalité → ser."], ["Soy en casa.", "Estoy en casa.", "Lieu → estar."], ["Es cansado. (aujourd'hui)", "Está cansado.", "État passager → estar."], ["Mi madre está profesora.", "Mi madre es profesora.", "Métier → ser."], ["Soy estudiando.", "Estoy estudiando.", "Action en cours → estar + gérondif."]]),
      ecoute: [
        ["Mi hermana está enferma hoy.", "Ma sœur est malade aujourd'hui.", "Ma sœur est infirmière.", "Ma sœur va bien aujourd'hui.", "Ma sœur est à l'hôpital depuis un an.", "está enferma : un état passager → estar."],
        ["Mi tío es ingeniero.", "Mon oncle est ingénieur.", "Mon oncle est à l'usine.", "Mon oncle veut devenir ingénieur.", "Mon oncle est fatigué.", "es ingeniero : un métier → ser."],
        ["Estamos en el mercado.", "Nous sommes au marché.", "Nous allons au marché.", "Nous sommes des commerçants.", "Le marché est fermé.", "estamos en = nous sommes (un lieu)."],
        ["Son las siete de la mañana.", "Il est sept heures du matin.", "Il est sept heures du soir.", "J'ai sept ans.", "Nous serons sept demain.", "son las siete = il est sept heures."]
      ],
      ecrire: [
        ["Yo ___ alumno del colegio. (ser)", ["soy"], "Je suis élève du collège.", "Identité → ser : soy."],
        ["Hoy mi hermano ___ enfermo. (estar)", ["está"], "Aujourd'hui mon frère est malade.", "État passager → estar : está."],
        ["Nosotros ___ en clase ahora.", ["estamos"], "Nous sommes en classe maintenant.", "Lieu → estar : estamos."],
        ["Mis padres ___ marfileños.", ["son"], "Mes parents sont ivoiriens.", "Nationalité → ser : son."],
        ["¿Dónde ___ tú? — Estoy en el mercado.", ["estás"], "Où es-tu ? — Je suis au marché.", "Lieu → estar : estás."],
        ["Mi madre ___ profesora de español.", ["es"], "Ma mère est professeure d'espagnol.", "Métier → ser : es."],
        ["___ las tres de la tarde.", ["son"], "Il est trois heures de l'après-midi.", "L'heure → ser : son las tres (mais es la una)."],
        ["Yo ___ estudiando para el examen.", ["estoy"], "Je suis en train d'étudier pour l'examen.", "Action en cours : estar + gérondif."]
      ],
      ordre: [
        ["Mi padre es médico en Abiyán.", "Mon père est médecin à Abidjan."],
        ["Hoy estoy muy cansado.", "Aujourd'hui je suis très fatigué."],
        ["La escuela está cerca de mi casa.", "L'école est près de chez moi."],
        ["Somos alumnos de tercero.", "Nous sommes des élèves de 3e."]
      ]
    },
    "es-presente": {
      coursPlus: tabL("Les verbes réguliers", ["", "es", "es", "es"], ["Sujet", "hablar (parler)", "comer (manger)", "vivir (vivre)"], [["yo", "hablo", "como", "vivo"], ["tú", "hablas", "comes", "vives"], ["él / ella", "habla", "come", "vive"], ["nosotros", "hablamos", "comemos", "vivimos"], ["vosotros", "habláis", "coméis", "vivís"], ["ellos / ellas", "hablan", "comen", "viven"]]) +
        tabL("Irréguliers : tener, hacer, ir", ["", "es", "es", "es"], ["Sujet", "tener (avoir)", "hacer (faire)", "ir (aller)"], [["yo", "tengo", "hago", "voy"], ["tú", "tienes", "haces", "vas"], ["él / ella", "tiene", "hace", "va"], ["nosotros", "tenemos", "hacemos", "vamos"], ["ellos / ellas", "tienen", "hacen", "van"]]) +
        tabL("Irréguliers qui changent de voyelle", ["", "es", "es"], ["Sujet", "poder (o → ue)", "querer (e → ie)"], [["yo", "puedo", "quiero"], ["tú", "puedes", "quieres"], ["él / ella", "puede", "quiere"], ["nosotros", "podemos (pas de changement)", "queremos (pas de changement)"], ["ellos / ellas", "pueden", "quieren"]]) +
        exL("es-ES", [["Hablo francés y un poco de español.", "Je parle français et un peu espagnol."], ["Mis padres viven en Korhogo.", "Mes parents vivent à Korhogo."], ["Comemos arroz todos los días.", "Nous mangeons du riz tous les jours."], ["Voy al colegio en autobús.", "Je vais au collège en bus."], ["¿Puedes ayudarme?", "Peux-tu m'aider ?"], ["Hago mis deberes por la tarde.", "Je fais mes devoirs l'après-midi."]]) +
        piegesL("es", [["Yo teno.", "Yo tengo.", "tener est irrégulier : tengo."], ["Yo haco.", "Yo hago.", "hacer : hago."], ["Yo podo.", "Yo puedo.", "o → ue (sauf nosotros et vosotros : podemos)."], ["Nosotros vivemos.", "Nosotros vivimos.", "Verbes en -ir : -imos."], ["Voy a el colegio.", "Voy al colegio.", "a + el = al."]]),
      ecoute: [
        ["Vamos al mercado los sábados.", "Nous allons au marché le samedi.", "Nous sommes allés au marché samedi.", "Le marché est fermé le samedi.", "Nous vendons au marché.", "vamos = nous allons ; los sábados = chaque samedi."],
        ["No puedo venir hoy.", "Je ne peux pas venir aujourd'hui.", "Je viens aujourd'hui.", "Je peux venir demain.", "Il ne peut pas venir.", "no puedo = je ne peux pas."],
        ["Mi hermana quiere ser enfermera.", "Ma sœur veut être infirmière.", "Ma sœur est infirmière.", "Ma sœur n'aime pas les infirmières.", "Ma sœur était infirmière.", "quiere ser = veut être."],
        ["¿Qué haces por la tarde?", "Que fais-tu l'après-midi ?", "Que fais-tu le matin ?", "Où vas-tu ce soir ?", "Qu'as-tu fait hier ?", "haces = tu fais ; por la tarde = l'après-midi."]
      ],
      ecrire: [
        ["Yo ___ (hablar) francés y español.", ["hablo"], "Je parle français et espagnol.", "Verbe en -ar, yo : hablo."],
        ["Nosotros ___ (vivir) en Daloa.", ["vivimos"], "Nous habitons à Daloa.", "Verbe en -ir, nosotros : -imos."],
        ["Mis hermanos ___ (comer) en la cantina.", ["comen"], "Mes frères mangent à la cantine.", "Verbe en -er, ellos : -en."],
        ["Yo ___ (tener) dos hermanas.", ["tengo"], "J'ai deux sœurs.", "tener est irrégulier : tengo."],
        ["¿Tú ___ (ir) al mercado?", ["vas"], "Vas-tu au marché ?", "ir : voy, vas, va, vamos, vais, van."],
        ["Yo no ___ (poder) salir hoy.", ["puedo"], "Je ne peux pas sortir aujourd'hui.", "poder : o → ue : puedo."],
        ["Ella ___ (querer) ser médica.", ["quiere"], "Elle veut être médecin.", "querer : e → ie : quiere."],
        ["Yo ___ (hacer) mis deberes cada noche.", ["hago"], "Je fais mes devoirs chaque soir.", "hacer : hago (je fais)."]
      ],
      ordre: [
        ["Hablo francés y un poco de español.", "Je parle français et un peu espagnol."],
        ["Mis padres viven en Korhogo.", "Mes parents vivent à Korhogo."],
        ["Voy al colegio en bicicleta.", "Je vais au collège à vélo."],
        ["¿Puedes ayudarme con los deberes?", "Peux-tu m'aider pour les devoirs ?"]
      ]
    },
    "es-gustar": {
      coursPlus: tabL("Gustar à toutes les personnes", ["es", "es", "es", ""], ["Pronom", "+ singulier ou infinitif", "+ pluriel", "Sens"], [["(a mí) me", "me gusta el fútbol", "me gustan los mangos", "j'aime"], ["(a ti) te", "te gusta", "te gustan", "tu aimes"], ["(a él / ella) le", "le gusta", "le gustan", "il / elle aime"], ["(a nosotros) nos", "nos gusta", "nos gustan", "nous aimons"], ["(a vosotros) os", "os gusta", "os gustan", "vous aimez"], ["(a ellos) les", "les gusta", "les gustan", "ils / elles aiment"]]) +
        tabL("Du plus fort au plus faible", ["es", ""], ["Español", "Français"], [["me encanta", "j'adore"], ["me gusta mucho", "j'aime beaucoup"], ["me gusta", "j'aime"], ["no me gusta mucho", "je n'aime pas beaucoup"], ["no me gusta nada", "je n'aime pas du tout"], ["prefiero", "je préfère"]]) +
        exL("es-ES", [["Me gusta el fútbol.", "J'aime le football."], ["Me gustan las matemáticas.", "J'aime les mathématiques."], ["A mi hermano le gusta bailar.", "Mon frère aime danser."], ["No nos gusta la lluvia.", "Nous n'aimons pas la pluie."], ["Me encanta la música.", "J'adore la musique."], ["¿Te gustan los mangos? — Sí, me gustan mucho.", "Aimes-tu les mangues ? — Oui, je les aime beaucoup."]]) +
        piegesL("es", [["Yo gusto el fútbol.", "Me gusta el fútbol.", "Mot à mot : « le football me plaît »."], ["Me gusta los mangos.", "Me gustan los mangos.", "Nom au pluriel → gustan."], ["Me gustan bailar.", "Me gusta bailar.", "Devant un infinitif → gusta."], ["A mi hermano gusta…", "A mi hermano le gusta…", "N'oublie pas le pronom le."], ["Me encanto la música.", "Me encanta la música.", "encantar se construit comme gustar."]]),
      ecoute: [
        ["Me encanta la música africana.", "J'adore la musique africaine.", "Je n'aime pas la musique africaine.", "Je joue de la musique africaine.", "La musique africaine est triste.", "me encanta = j'adore."],
        ["A mi padre no le gusta el pescado.", "Mon père n'aime pas le poisson.", "Mon père adore le poisson.", "Mon père vend du poisson.", "Mon père pêche du poisson.", "no le gusta = il n'aime pas."],
        ["¿Te gustan los mangos?", "Aimes-tu les mangues ?", "As-tu des mangues ?", "Veux-tu une mangue ?", "Où sont les mangues ?", "¿Te gustan…? = aimes-tu… ?"],
        ["Prefiero el fútbol al baloncesto.", "Je préfère le football au basket.", "Je n'aime ni le football ni le basket.", "Je joue au basket.", "Le football est plus difficile.", "prefiero = je préfère."]
      ],
      ecrire: [
        ["Me ___ el arroz. (gustar)", ["gusta"], "J'aime le riz.", "Nom au singulier → gusta."],
        ["Me ___ las frutas. (gustar)", ["gustan"], "J'aime les fruits.", "Nom au pluriel → gustan."],
        ["A mi madre ___ gusta cocinar.", ["le"], "Ma mère aime cuisiner.", "À elle → le gusta."],
        ["¿___ gusta el baloncesto? (à toi)", ["te"], "Aimes-tu le basket ?", "À toi → te gusta."],
        ["A nosotros ___ gusta la música.", ["nos"], "Nous aimons la musique.", "À nous → nos gusta."],
        ["Me ___ bailar. (gustar)", ["gusta"], "J'aime danser.", "Devant un infinitif → gusta (singulier)."],
        ["No me gusta ___ la historia. (pas du tout)", ["nada"], "Je n'aime pas du tout l'histoire.", "« pas du tout » → no me gusta nada."],
        ["Me ___ los deportes. (j'adore)", ["encantan"], "J'adore les sports.", "encantar se construit comme gustar : pluriel → encantan."]
      ],
      ordre: [
        ["Me gustan mucho las matemáticas.", "J'aime beaucoup les mathématiques."],
        ["A mi hermano le gusta el fútbol.", "Mon frère aime le football."],
        ["No me gusta nada la lluvia.", "Je n'aime pas du tout la pluie."],
        ["¿Te gusta bailar?", "Aimes-tu danser ?"]
      ]
    },
    "es-pasado": {
      coursPlus: tabL("Les verbes réguliers au passé", ["", "es", "es", "es"], ["Sujet", "hablar", "comer", "vivir"], [["yo", "hablé", "comí", "viví"], ["tú", "hablaste", "comiste", "viviste"], ["él / ella", "habló", "comió", "vivió"], ["nosotros", "hablamos", "comimos", "vivimos"], ["vosotros", "hablasteis", "comisteis", "vivisteis"], ["ellos / ellas", "hablaron", "comieron", "vivieron"]]) +
        tabL("Irréguliers au passé", ["", "es", "es"], ["Sujet", "ser / ir", "tener"], [["yo", "fui", "tuve"], ["tú", "fuiste", "tuviste"], ["él / ella", "fue", "tuvo"], ["nosotros", "fuimos", "tuvimos"], ["ellos / ellas", "fueron", "tuvieron"]]) +
        tabL("Irréguliers au passé (suite)", ["", "es", "es"], ["Sujet", "hacer", "estar"], [["yo", "hice", "estuve"], ["tú", "hiciste", "estuviste"], ["él / ella", "hizo", "estuvo"], ["nosotros", "hicimos", "estuvimos"], ["ellos / ellas", "hicieron", "estuvieron"]]) +
        rg("Mots repères du passé", "ayer (hier), anteayer (avant-hier), el año pasado (l'année dernière), la semana pasada (la semaine dernière), el lunes pasado (lundi dernier), en 2025, hace dos años (il y a deux ans).") +
        exL("es-ES", [["Ayer visité a mi abuela.", "Hier, j'ai rendu visite à ma grand-mère."], ["El año pasado fuimos a San Pedro.", "L'année dernière, nous sommes allés à San Pedro."], ["Mi hermano comió en la cantina.", "Mon frère a mangé à la cantine."], ["Hice mis deberes el domingo.", "J'ai fait mes devoirs dimanche."], ["Tuve una buena nota en español.", "J'ai eu une bonne note en espagnol."], ["¿Qué hiciste ayer?", "Qu'as-tu fait hier ?"]]) +
        piegesL("es", [["Yo hablo ayer.", "Yo hablé ayer.", "ayer → passé : hablé."], ["hablo / habló", "hablo = je parle ; habló = il a parlé", "L'accent change tout le sens !"], ["Yo hací.", "Yo hice.", "hacer est irrégulier."], ["Él hació.", "Él hizo.", "hacer : hizo (avec un z)."], ["Yo tení.", "Yo tuve.", "tener : tuve."]]),
      ecoute: [
        ["Ayer fui al colegio en autobús.", "Hier, je suis allé au collège en bus.", "Demain, j'irai au collège en bus.", "Je vais au collège à pied.", "Le bus est en panne.", "fui = je suis allé ; ayer = hier."],
        ["El sábado pasado visitamos a nuestros abuelos.", "Samedi dernier, nous avons rendu visite à nos grands-parents.", "Samedi prochain, nous rendrons visite à nos grands-parents.", "Nos grands-parents sont venus samedi.", "Nous rendons visite à nos grands-parents chaque samedi.", "visitamos + el sábado pasado : c'est le passé."],
        ["Mi hermana tuvo una buena nota.", "Ma sœur a eu une bonne note.", "Ma sœur aura une bonne note.", "Ma sœur n'a pas eu de note.", "Ma sœur a une mauvaise note.", "tuvo = a eu (tener au passé)."],
        ["¿Qué hiciste ayer por la tarde?", "Qu'as-tu fait hier après-midi ?", "Que fais-tu cet après-midi ?", "Que feras-tu demain ?", "Où étais-tu hier soir ?", "hiciste = tu as fait ; ayer por la tarde = hier après-midi."]
      ],
      ecrire: [
        ["Ayer yo ___ (hablar) con mi profesor.", ["hablé"], "Hier, j'ai parlé avec mon professeur.", "Verbe en -ar, yo : -é (hablé), avec l'accent."],
        ["El año pasado nosotros ___ (ir) a Abiyán.", ["fuimos"], "L'année dernière, nous sommes allés à Abidjan.", "ir : fui, fuiste, fue, fuimos, fuisteis, fueron."],
        ["Mi madre ___ (comer) pescado ayer.", ["comió"], "Ma mère a mangé du poisson hier.", "Verbe en -er, él / ella : -ió."],
        ["Ayer yo ___ (hacer) mis deberes.", ["hice"], "Hier, j'ai fait mes devoirs.", "hacer est irrégulier : hice."],
        ["Mis amigos ___ (vivir) en Man el año pasado.", ["vivieron"], "Mes amis ont vécu à Man l'année dernière.", "Verbe en -ir, ellos : -ieron."],
        ["La semana pasada yo ___ (tener) un examen.", ["tuve"], "La semaine dernière, j'ai eu un examen.", "tener : tuve."],
        ["¿Qué ___ (hacer) tú el domingo?", ["hiciste"], "Qu'as-tu fait dimanche ?", "hacer, tú : hiciste."],
        ["Mi padre ___ (trabajar) en el puerto en 2020.", ["trabajó"], "Mon père a travaillé au port en 2020.", "Verbe en -ar, él : -ó (trabajó), avec l'accent !"]
      ],
      ordre: [
        ["Ayer fui al mercado con mi madre.", "Hier, je suis allé au marché avec ma mère."],
        ["El año pasado visité el puerto.", "L'année dernière, j'ai visité le port."],
        ["¿Qué hiciste el domingo?", "Qu'as-tu fait dimanche ?"],
        ["Mi hermano comió en casa de mi tío.", "Mon frère a mangé chez mon oncle."]
      ]
    },
    "es-futuro": {
      coursPlus: tabL("Le futur simple : infinitif + terminaison", ["", "es", "es", "es"], ["Sujet", "hablar", "comer", "vivir"], [["yo", "hablaré", "comeré", "viviré"], ["tú", "hablarás", "comerás", "vivirás"], ["él, ella", "hablará", "comerá", "vivirá"], ["nosotros", "hablaremos", "comeremos", "viviremos"], ["vosotros", "hablaréis", "comeréis", "viviréis"], ["ellos", "hablarán", "comerán", "vivirán"]]) +
        tabL("Le futur proche : ir a + infinitif", ["", "es", ""], ["Sujet", "Español", "Français"], [["yo", "voy a estudiar", "je vais étudier"], ["tú", "vas a estudiar", "tu vas étudier"], ["él / ella", "va a estudiar", "il / elle va étudier"], ["nosotros", "vamos a estudiar", "nous allons étudier"], ["ellos / ellas", "van a estudiar", "ils / elles vont étudier"]]) +
        tabL("Les futurs irréguliers", ["es", "es", ""], ["Infinitif", "yo", "Sens"], [["tener", "tendré", "j'aurai"], ["hacer", "haré", "je ferai"], ["poder", "podré", "je pourrai"], ["salir", "saldré", "je sortirai"], ["decir", "diré", "je dirai"], ["venir", "vendré", "je viendrai"]]) +
        tabL("Les métiers", ["es", ""], ["Español", "Français"], [["médico / médica", "médecin"], ["profesor / profesora", "professeur"], ["ingeniero / ingeniera", "ingénieur"], ["enfermero / enfermera", "infirmier / infirmière"], ["abogado / abogada", "avocat / avocate"], ["periodista", "journaliste"], ["futbolista", "footballeur"]]) +
        exL("es-ES", [["Mañana voy a estudiar con mis amigos.", "Demain, je vais étudier avec mes amis."], ["El año próximo iré al liceo.", "L'année prochaine, j'irai au lycée."], ["Cuando sea mayor, quiero ser ingeniero.", "Quand je serai grand, je veux être ingénieur."], ["Mañana lloverá en Abiyán.", "Demain, il pleuvra à Abidjan."], ["Aprobaré el BEPC.", "Je réussirai le BEPC."], ["¿Qué harás el sábado?", "Que feras-tu samedi ?"]]) +
        piegesL("es", [["Voy estudiar.", "Voy a estudiar.", "ir a + infinitif : n'oublie pas le a."], ["Teneré.", "Tendré.", "tener est irrégulier au futur."], ["Haceré.", "Haré.", "hacer : haré."], ["Hablare.", "Hablaré.", "L'accent fait partie de la terminaison."], ["Quiero ser un médico.", "Quiero ser médico.", "Pas d'article devant un métier."]]),
      ecoute: [
        ["Mañana voy a jugar al fútbol.", "Demain, je vais jouer au football.", "Hier, j'ai joué au football.", "Je joue au football tous les jours.", "Je n'aime pas jouer au football.", "voy a jugar = je vais jouer ; mañana = demain."],
        ["Cuando sea mayor, seré profesora.", "Quand je serai grande, je serai professeure.", "Ma professeure est grande.", "Quand j'étais petite, j'étais professeure.", "Je ne veux pas être professeure.", "seré = je serai."],
        ["El año próximo viviremos en Abiyán.", "L'année prochaine, nous habiterons à Abidjan.", "L'année dernière, nous habitions à Abidjan.", "Nous habitons à Abidjan depuis un an.", "Nous voulons quitter Abidjan.", "viviremos = nous habiterons."],
        ["¿Qué harás después del BEPC?", "Que feras-tu après le BEPC ?", "Qu'as-tu fait après le BEPC ?", "Quand passes-tu le BEPC ?", "As-tu réussi le BEPC ?", "harás = tu feras ; después de = après."]
      ],
      ecrire: [
        ["Mañana ___ a estudiar. (je vais)", ["voy"], "Demain, je vais étudier.", "ir a + infinitif : voy a…"],
        ["El año próximo yo ___ (vivir) en Abiyán.", ["viviré"], "L'année prochaine, j'habiterai à Abidjan.", "Futur : infinitif + é."],
        ["Nosotros ___ (hablar) con el director.", ["hablaremos"], "Nous parlerons avec le directeur.", "Futur, nosotros : infinitif + emos."],
        ["Yo ___ (tener) dieciséis años en mayo.", ["tendré"], "J'aurai seize ans en mai.", "tener → tendré (irrégulier)."],
        ["¿Qué ___ (hacer) tú mañana?", ["harás"], "Que feras-tu demain ?", "hacer → haré, harás, hará…"],
        ["Mis padres ___ a viajar a Man. (ils vont)", ["van"], "Mes parents vont voyager à Man.", "ir a + infinitif : van a…"],
        ["Cuando sea mayor, quiero ser ___. (médecin, un garçon)", ["médico"], "Quand je serai grand, je veux être médecin.", "médecin = médico (médica pour une fille), sans article."],
        ["Mañana ___ (llover) en Abiyán.", ["lloverá"], "Demain, il pleuvra à Abidjan.", "llover → lloverá (il pleuvra)."]
      ],
      ordre: [
        ["El año próximo voy a estudiar en un liceo.", "L'année prochaine, je vais étudier dans un lycée."],
        ["Cuando sea mayor, quiero ser ingeniero.", "Quand je serai grand, je veux être ingénieur."],
        ["Mañana iremos a la playa.", "Demain, nous irons à la plage."],
        ["¿Qué vas a hacer el sábado?", "Que vas-tu faire samedi ?"]
      ]
    }
  };
  // On enrichit les chapitres existants
  [MAT_EN, MAT_ES].forEach(M => M.chapitres.forEach(c => {
    const plus = LANGUES_PLUS[c.id]; if (!plus) return;
    if (plus.cours) c.cours = plus.cours;
    if (plus.coursPlus) c.cours += plus.coursPlus;
    if (plus.ecoute) c.ecoute = (c.ecoute || []).concat(plus.ecoute);
    if (plus.ecrire) c.ecrire = plus.ecrire;
    if (plus.ordre) c.ordre = plus.ordre;
  }));
