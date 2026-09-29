  // =========================================================
  // Oral d'anglais du BEPC : décrire une image, comprendre un texte, converser
  // =========================================================
  const PEAUX = ["#6B3E22", "#7B4A2A", "#5A3219", "#8A5533"];
  // Un personnage dessiné, pieds en (x, y)
  function perso(x, y, o = {}) {
    const s = o.s || 1, pe = o.peau || PEAUX[0], h = o.haut || "#E0701F", b = o.bas || "#2B4C7E";
    const tY = y - 62 * s, epaule = y - 50 * s, taille = y - 27 * s;
    const bras = { bas: [[-9, 22, -11, 0], [9, 22, 11, 0]], haut: [[-9, -26, -14, 0], [9, -26, 14, 0]], droit: [[-9, 22, -11, 0], [9, -26, 16, 0]], gauche: [[-9, -26, -16, 0], [9, 22, 11, 0]],
      avant: [[-9, 22, -11, 0], [9, 4, 24, 0]], tient: [[-9, 4, -18, 0], [9, 4, 18, 0]], tete: [[-9, -20, -6, 0], [9, -20, 6, 0]] }[o.bras || "bas"];
    let svg = "";
    if (o.robe) svg += `<path d="M${x - 9 * s} ${epaule} h${18 * s} l${6 * s} ${34 * s} h${-30 * s} z" fill="${h}"/>`;
    else svg += `<rect x="${x - 9 * s}" y="${epaule}" width="${18 * s}" height="${24 * s}" rx="${4 * s}" fill="${h}"/>`;
    if (!o.assis) svg += `<rect x="${x - 8 * s}" y="${o.robe ? y - 16 * s : taille}" width="${7 * s}" height="${o.robe ? 16 * s : 27 * s}" fill="${o.robe ? pe : b}"/><rect x="${x + 1 * s}" y="${o.robe ? y - 16 * s : taille}" width="${7 * s}" height="${o.robe ? 16 * s : 27 * s}" fill="${o.robe ? pe : b}"/>`;
    for (const [dx, dy, ex, ey] of bras) svg += `<line x1="${x + dx * s}" y1="${epaule + 3 * s}" x2="${x + (dx + ex) * s}" y2="${epaule + 3 * s + dy * s + ey}" stroke="${pe}" stroke-width="${4.5 * s}" stroke-linecap="round"/>`;
    svg += `<rect x="${x - 3 * s}" y="${tY + 7 * s}" width="${6 * s}" height="${6 * s}" fill="${pe}"/><circle cx="${x}" cy="${tY}" r="${9 * s}" fill="${pe}"/>`;
    if (o.foulard) svg += `<path d="M${x - 10 * s} ${tY - 1 * s} a${10 * s} ${10 * s} 0 0 1 ${20 * s} 0 z" fill="${o.foulard}"/>`;
    if (o.cheveux) svg += `<path d="M${x - 9 * s} ${tY - 2 * s} a${9 * s} ${9 * s} 0 0 1 ${18 * s} 0 q${-9 * s} ${-4 * s} ${-18 * s} 0z" fill="#1d130c"/>`;
    if (o.sac) svg += `<rect x="${x + 10 * s}" y="${epaule + 10 * s}" width="${12 * s}" height="${14 * s}" rx="${2 * s}" fill="${o.sac}"/>`;
    if (o.panier) svg += `<path d="M${x - 14 * s} ${tY - 9 * s} h${28 * s} l${-4 * s} ${-9 * s} h${-20 * s} z" fill="#B7843F"/>` + (o.panier === "cabosses" ? `<ellipse cx="${x - 5 * s}" cy="${tY - 19 * s}" rx="${5 * s}" ry="${3 * s}" fill="#E3A21A"/><ellipse cx="${x + 5 * s}" cy="${tY - 19 * s}" rx="${5 * s}" ry="${3 * s}" fill="#D9861C"/>` : "");
    return svg;
  }
  const ciel = (c = "#BFE3F7") => `<rect width="320" height="200" fill="${c}"/>`;
  const soleil = (x = 285, y = 30) => `<circle cx="${x}" cy="${y}" r="16" fill="#F7C331"/>`;
  const texteSvg = (x, y, t, taille = 11, coul = "#18283A", ancre = "middle") => `<text x="${x}" y="${y}" font-size="${taille}" font-family="Nunito,Segoe UI,sans-serif" font-weight="800" fill="${coul}" text-anchor="${ancre}">${t}</text>`;
  const arbre = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 40 * s}" width="${8 * s}" height="${40 * s}" fill="#6B4423"/><circle cx="${x}" cy="${y - 52 * s}" r="${22 * s}" fill="#2E8B45"/><circle cx="${x - 14 * s}" cy="${y - 42 * s}" r="${14 * s}" fill="#2E8B45"/><circle cx="${x + 14 * s}" cy="${y - 42 * s}" r="${14 * s}" fill="#34A04F"/>`;
  const svgScene = (contenu, label) => `<svg viewBox="0 0 320 200" class="scene" role="img" aria-label="${label}">${contenu}</svg>`;

  const IMAGES = [
    { id: "marche", titre: "At the market", fr: "Au marché",
      svg: svgScene(ciel() + soleil() + `<rect y="150" width="320" height="50" fill="#D8B98A"/>` +
        `<path d="M110 70 q50 -34 100 0 z" fill="#CF3F35"/><path d="M135 70 q25 -34 50 0 z" fill="#F7C331"/><line x1="160" y1="70" x2="160" y2="118" stroke="#555" stroke-width="3"/>` +
        perso(160, 150, { robe: true, haut: "#2B63B8", foulard: "#E0701F", peau: PEAUX[1] }) +
        `<rect x="105" y="115" width="110" height="36" fill="#8B5A2B"/><rect x="100" y="110" width="120" height="8" fill="#A06A34"/>` +
        `<ellipse cx="118" cy="106" rx="8" ry="6" fill="#F2A71B"/><ellipse cx="132" cy="106" rx="8" ry="6" fill="#E88A1A"/><ellipse cx="125" cy="99" rx="8" ry="6" fill="#F2B632"/>` +
        `<path d="M150 106 q10 -12 22 0" stroke="#F4D03F" stroke-width="6" fill="none"/><path d="M152 101 q10 -12 22 0" stroke="#F7DC6F" stroke-width="6" fill="none"/>` +
        `<circle cx="190" cy="105" r="6" fill="#D6332A"/><circle cx="202" cy="105" r="6" fill="#C0392B"/><circle cx="196" cy="98" r="6" fill="#E74C3C"/>` +
        perso(260, 175, { robe: true, haut: "#8E44AD", foulard: "#1A8F5F", peau: PEAUX[2], bras: "avant" }) + `<path d="M276 142 h22 l-3 14 h-16 z" fill="#B7843F"/>` +
        perso(50, 178, { haut: "#1A8F5F", bas: "#34495E", peau: PEAUX[3], cheveux: true, sac: "#C0392B", s: 0.9 }),
        "Un marché : une vendeuse de fruits sous un parasol, une cliente avec un panier et un garçon avec un sac"),
      vocab: [["a market", "un marché"], ["a stall", "un étal"], ["a seller", "une vendeuse"], ["a customer", "une cliente"], ["an umbrella", "un parasol"], ["a basket", "un panier"], ["mangoes, bananas, tomatoes", "mangues, bananes, tomates"]],
      modele: "In this picture, I can see a market. In the middle, there is a market woman behind her stall. She is selling fruit and vegetables: mangoes, bananas and tomatoes. Above the stall, there is a big red and yellow umbrella to protect her from the sun. On the right, a customer is holding a basket. I think she is buying some mangoes. On the left, a boy is carrying a red bag. It is a sunny day. In Côte d'Ivoire, many people buy fresh food at the market every day.",
      quiz: [["What is the woman in the middle doing?", "She is selling fruit and vegetables.", "She is cooking rice.", "She is playing football.", "She is sleeping.", "The seller is behind her stall with mangoes, bananas and tomatoes."],
        ["What is the customer holding?", "A basket.", "A phone.", "A book.", "A ball.", "On the right, the customer is holding a basket."],
        ["What is the weather like?", "It is sunny.", "It is raining.", "It is snowing.", "It is dark.", "We can see the sun in the sky."]] },
    { id: "classe", titre: "In the classroom", fr: "En classe",
      svg: svgScene(`<rect width="320" height="200" fill="#F3E6C9"/><rect y="160" width="320" height="40" fill="#B98B57"/>` +
        `<rect x="20" y="25" width="170" height="80" fill="#2F4F3E" stroke="#8B5A2B" stroke-width="5"/>` + texteSvg(105, 55, "English", 16, "#fff") + texteSvg(105, 80, "Monday, 12th May", 11, "#fff") +
        `<rect x="235" y="25" width="65" height="50" fill="#BFE3F7" stroke="#fff" stroke-width="4"/><line x1="267" y1="25" x2="267" y2="75" stroke="#fff" stroke-width="3"/>` +
        perso(207, 160, { haut: "#fff", bas: "#34495E", peau: PEAUX[2], bras: "gauche" }) +
        [[70, "#2B63B8", "bas"], [140, "#2B63B8", "droit"], [250, "#2B63B8", "bas"]].map(([x, c, br]) => perso(x, 178, { haut: c, bas: "#C0392B", peau: PEAUX[(x / 10) % 4 | 0], bras: br, s: 0.8, cheveux: true }) + `<rect x="${x - 30}" y="150" width="60" height="10" fill="#8B5A2B"/><rect x="${x - 26}" y="160" width="6" height="20" fill="#6B4423"/><rect x="${x + 20}" y="160" width="6" height="20" fill="#6B4423"/>`).join(""),
        "Une salle de classe : un professeur montre le tableau où il est écrit English, trois élèves à leurs tables, l'un lève la main"),
      vocab: [["a classroom", "une salle de classe"], ["a teacher", "un professeur"], ["a pupil / a student", "un élève"], ["a blackboard", "un tableau noir"], ["a desk", "une table"], ["to raise one's hand", "lever la main"], ["a uniform", "un uniforme"]],
      modele: "This picture shows a classroom. On the left, there is a blackboard. On the blackboard, the teacher has written 'English' and the date: Monday, 12th May. The teacher is standing next to the blackboard and he is pointing at it. In front of him, there are three pupils sitting at their desks. They are wearing blue shirts; it is their school uniform. The pupil in the middle is raising his hand because he wants to answer a question. On the right, there is a window. I think it is an English lesson.",
      quiz: [["Which lesson is it?", "An English lesson.", "A maths lesson.", "A cooking lesson.", "A music lesson.", "'English' is written on the blackboard."],
        ["What is the pupil in the middle doing?", "He is raising his hand.", "He is sleeping.", "He is eating.", "He is running.", "He wants to answer a question."],
        ["How many pupils can you see?", "Three.", "One.", "Five.", "Ten.", "Three pupils are sitting at their desks."]] },
    { id: "repas", titre: "A family meal", fr: "Un repas en famille",
      svg: svgScene(`<rect width="320" height="200" fill="#F6E3C6"/><rect y="150" width="320" height="50" fill="#C79A63"/>` +
        `<rect x="245" y="20" width="55" height="40" fill="#fff" stroke="#8B5A2B" stroke-width="3"/><circle cx="272" cy="40" r="9" fill="#E0701F"/>` +
        perso(70, 150, { haut: "#1A8F5F", peau: PEAUX[2], bras: "avant", assis: true }) + perso(125, 150, { robe: true, haut: "#E0701F", foulard: "#2B63B8", peau: PEAUX[1], bras: "tient", assis: true }) +
        perso(200, 150, { haut: "#F7C331", peau: PEAUX[3], bras: "avant", s: 0.8, assis: true, cheveux: true }) + perso(250, 150, { haut: "#8E44AD", peau: PEAUX[0], bras: "tient", s: 0.8, assis: true, cheveux: true }) +
        `<rect x="40" y="128" width="240" height="14" rx="3" fill="#8B5A2B"/><rect x="55" y="142" width="8" height="40" fill="#6B4423"/><rect x="257" y="142" width="8" height="40" fill="#6B4423"/>` +
        `<ellipse cx="160" cy="124" rx="34" ry="8" fill="#ddd"/><ellipse cx="160" cy="116" rx="26" ry="11" fill="#FFFDF5"/><ellipse cx="160" cy="112" rx="12" ry="5" fill="#A0522D"/>` +
        `<rect x="92" y="108" width="12" height="18" rx="3" fill="#7FB3D5"/><ellipse cx="220" cy="125" rx="14" ry="4" fill="#fff"/><ellipse cx="80" cy="125" rx="14" ry="4" fill="#fff"/>`,
        "Une famille de quatre personnes à table autour d'un grand plat de riz avec de la sauce"),
      vocab: [["a family", "une famille"], ["the father / the mother", "le père / la mère"], ["the children", "les enfants"], ["a dish", "un plat"], ["rice with sauce", "du riz avec de la sauce"], ["a jug of water", "une carafe d'eau"], ["to share", "partager"]],
      modele: "In this picture, I can see a family having a meal together. There are four people: the father, the mother and their two children. They are sitting around a table. In the middle of the table, there is a big dish of rice with some sauce. There is also a jug of water and some plates. The mother is serving the food and the children are eating. Behind them, on the wall, there is a picture. They look happy. In Africa, eating together is important because the family shares the meal and talks.",
      quiz: [["How many people are there?", "Four.", "Two.", "Six.", "Ten.", "The father, the mother and two children."],
        ["What is in the big dish?", "Rice with sauce.", "Pizza.", "Ice cream.", "Bread and cheese.", "A big dish of rice with some sauce is in the middle."],
        ["Where are they sitting?", "Around a table.", "On a bus.", "In a classroom.", "On the beach.", "They are having a meal together at home."]] },
    { id: "foot", titre: "A football match", fr: "Un match de football",
      svg: svgScene(`<rect width="320" height="200" fill="#9ED36A"/><rect width="320" height="45" fill="#4B5D73"/>` +
        Array.from({ length: 18 }, (_, i) => `<circle cx="${10 + i * 18}" cy="${22 + (i % 2) * 8}" r="6" fill="${["#E0701F", "#fff", "#1A8F5F"][i % 3]}"/>`).join("") +
        `<line x1="0" y1="120" x2="320" y2="120" stroke="#fff" stroke-width="2" opacity=".6"/><rect x="280" y="70" width="40" height="80" fill="none" stroke="#fff" stroke-width="4"/>` +
        perso(300, 150, { haut: "#1A8F5F", bas: "#111", peau: PEAUX[3], bras: "haut", s: 0.9 }) +
        perso(190, 175, { haut: "#E0701F", bas: "#fff", peau: PEAUX[1], bras: "tient" }) + `<circle cx="228" cy="150" r="7" fill="#fff" stroke="#111" stroke-width="1.5"/>` +
        perso(120, 165, { haut: "#E0701F", bas: "#fff", peau: PEAUX[2], bras: "haut", s: 0.9 }) + perso(240, 185, { haut: "#fff", bas: "#2B63B8", peau: "#E3B999", bras: "tient", s: 0.95 }) +
        perso(50, 160, { haut: "#111", bas: "#111", peau: PEAUX[0], bras: "droit", s: 0.85 }),
        "Un match de football : des joueurs en orange et un en blanc, le ballon près du but, un gardien en vert, un arbitre en noir, des supporters"),
      vocab: [["a match", "un match"], ["a player", "un joueur"], ["the ball", "le ballon"], ["the goal", "le but"], ["the goalkeeper", "le gardien"], ["the referee", "l'arbitre"], ["the fans / supporters", "les supporters"], ["to kick", "frapper (du pied)"]],
      modele: "This picture shows a football match. The players in orange and white are Ivorian players, maybe the Elephants. In the middle, one player in orange is running with the ball towards the goal. He is going to shoot. In front of him, a player in white is trying to stop him. On the left, another Ivorian player is raising his arms. On the right, the goalkeeper in green is ready to catch the ball. On the left, the referee in black is raising his arm. At the top, many fans are watching the match. I like football because it is a team sport. In 2026, the Elephants played very well at the World Cup.",
      quiz: [["What colour is the goalkeeper wearing?", "Green.", "Orange.", "White.", "Black.", "The goalkeeper near the goal is in green."],
        ["Who is wearing black?", "The referee.", "The goalkeeper.", "The fans.", "The coach.", "The referee is on the left, in black."],
        ["What is the player in the middle doing?", "He is running with the ball.", "He is sitting down.", "He is eating.", "He is reading.", "He is going towards the goal."]] },
    { id: "sante", titre: "At the health centre", fr: "Au centre de santé",
      svg: svgScene(ciel() + `<rect y="160" width="320" height="40" fill="#D8C9A8"/><rect x="20" y="40" width="200" height="120" fill="#fff" stroke="#bbb"/><rect x="95" y="100" width="40" height="60" fill="#7FB3D5"/>` +
        `<rect x="40" y="50" width="160" height="22" fill="#1A8F5F"/>` + texteSvg(120, 66, "HEALTH CENTRE", 12, "#fff") + `<rect x="30" y="85" width="14" height="40" fill="#CF3F35"/><rect x="17" y="98" width="40" height="14" fill="#CF3F35"/>` +
        `<rect x="150" y="84" width="60" height="44" fill="#FFF3C4" stroke="#C9941A"/>` + texteSvg(180, 100, "Sleep under", 8) + texteSvg(180, 111, "a mosquito", 8) + texteSvg(180, 122, "net!", 8) +
        perso(250, 185, { haut: "#fff", bas: "#fff", peau: PEAUX[1], bras: "avant", foulard: "#fff", robe: true }) +
        perso(290, 188, { robe: true, haut: "#E0701F", foulard: "#8E44AD", peau: PEAUX[2], bras: "tient" }) + `<ellipse cx="290" cy="146" rx="9" ry="6" fill="#F7C331"/><circle cx="283" cy="143" r="5" fill="${PEAUX[2]}"/>` +
        `<rect x="10" y="168" width="100" height="6" fill="#8B5A2B"/>` + perso(30, 185, { haut: "#2B63B8", peau: PEAUX[0], s: 0.7, assis: true }) + perso(60, 185, { robe: true, haut: "#C23B6B", peau: PEAUX[3], s: 0.7, assis: true }) + perso(90, 185, { haut: "#1A8F5F", peau: PEAUX[1], s: 0.7, assis: true }),
        "Un centre de santé : une infirmière en blanc vaccine un bébé dans les bras de sa mère, des gens attendent sur un banc, une affiche sur la moustiquaire"),
      vocab: [["a health centre", "un centre de santé"], ["a nurse", "une infirmière"], ["a baby", "un bébé"], ["to vaccinate", "vacciner"], ["a vaccine", "un vaccin"], ["a bench", "un banc"], ["a poster", "une affiche"], ["a mosquito net", "une moustiquaire"]],
      modele: "In this picture, I can see a health centre. On the building, we can read 'Health Centre' and there is a red cross. On the right, a nurse in a white uniform is talking to a mother. The mother is holding her baby in her arms. I think the nurse is going to vaccinate the baby, maybe against malaria. On the left, three people are sitting on a bench; they are waiting for their turn. On the wall, there is a poster: 'Sleep under a mosquito net!'. This picture shows that health is important and that we must go to the health centre when we are sick.",
      quiz: [["Who is wearing white?", "The nurse.", "The mother.", "The baby.", "The people on the bench.", "The nurse wears a white uniform."],
        ["What does the poster say?", "Sleep under a mosquito net!", "Buy fresh fruit!", "Play football!", "Close the door!", "The poster gives advice against malaria."],
        ["What are the people on the bench doing?", "They are waiting.", "They are dancing.", "They are cooking.", "They are swimming.", "They are waiting for their turn."]] },
    { id: "proprete", titre: "Clean-up day", fr: "Journée de salubrité",
      svg: svgScene(ciel() + soleil(40, 28) + `<rect y="140" width="320" height="60" fill="#9E9E9E"/><rect y="170" width="320" height="12" fill="#5D6D7E"/>` +
        `<rect x="90" y="20" width="160" height="26" fill="#fff" stroke="#1A8F5F" stroke-width="3"/>` + texteSvg(170, 38, "CLEAN-UP DAY", 13, "#1A8F5F") +
        `<rect x="18" y="120" width="30" height="40" rx="4" fill="#1A8F5F"/><rect x="14" y="114" width="38" height="8" rx="3" fill="#145A32"/>` +
        perso(95, 168, { haut: "#F7C331", peau: PEAUX[1], bras: "avant", cheveux: true }) + `<path d="M118 142 l10 26 h-14 z" fill="#111"/>` +
        perso(175, 168, { robe: true, haut: "#F7C331", foulard: "#E0701F", peau: PEAUX[2], bras: "tient" }) + `<line x1="193" y1="125" x2="212" y2="170" stroke="#8B5A2B" stroke-width="4"/><path d="M204 168 h18 l-4 8 h-12 z" fill="#C9941A"/>` +
        perso(265, 168, { haut: "#F7C331", peau: PEAUX[3], bras: "bas", cheveux: true }) +
        `<rect x="230" y="172" width="16" height="7" rx="3" fill="#7FB3D5" transform="rotate(20 238 175)"/><rect x="140" y="172" width="16" height="7" rx="3" fill="#85C1E9"/><path d="M290 172 q6 -6 12 0 q-6 6 -12 0" fill="#fff"/>`,
        "Une journée de salubrité : des jeunes en t-shirt jaune ramassent des déchets plastiques dans un caniveau, avec un sac, un balai et une poubelle"),
      vocab: [["clean-up day", "journée de salubrité"], ["rubbish / waste", "les déchets"], ["plastic bottles", "des bouteilles en plastique"], ["a gutter", "un caniveau"], ["a broom", "un balai"], ["a dustbin", "une poubelle"], ["to pick up", "ramasser"], ["volunteers", "des volontaires"]],
      modele: "This picture shows a clean-up day in a neighbourhood. At the top, there is a banner: 'Clean-up day'. I can see three young people wearing yellow T-shirts; they are volunteers. The boy on the left is picking up rubbish and putting it in a black bag. The girl in the middle is sweeping the street with a broom. On the left, there is a green dustbin. In the gutter, there are plastic bottles and bags. These young people are cleaning their area to avoid floods and diseases like malaria. I think it is a very good example of good citizenship.",
      quiz: [["What is written on the banner?", "Clean-up day.", "Happy birthday.", "Football match.", "Health centre.", "The banner says 'Clean-up day'."],
        ["What is the girl in the middle doing?", "She is sweeping with a broom.", "She is singing.", "She is reading a book.", "She is driving.", "She is cleaning the street."],
        ["Why is it important to clean the gutters?", "To avoid floods and malaria.", "To play football.", "To make noise.", "To sell bottles.", "Blocked gutters cause floods and stagnant water."]] },
    { id: "cacao", titre: "On a cocoa farm", fr: "Dans une plantation de cacao",
      svg: svgScene(ciel("#CDEBC0") + `<rect y="160" width="320" height="40" fill="#7A5230"/>` + arbre(60, 165, 1.1) + arbre(250, 165, 1.2) +
        `<ellipse cx="65" cy="120" rx="5" ry="9" fill="#E3A21A"/><ellipse cx="54" cy="130" rx="5" ry="9" fill="#D9861C"/><ellipse cx="256" cy="115" rx="5" ry="9" fill="#E3A21A"/><ellipse cx="244" cy="128" rx="5" ry="9" fill="#C7641B"/>` +
        perso(120, 170, { haut: "#34495E", bas: "#6B4423", peau: PEAUX[0], bras: "droit" }) + `<path d="M136 96 l16 -14 l3 3 l-15 14z" fill="#aaa"/>` +
        perso(190, 172, { robe: true, haut: "#1A8F5F", foulard: "#E0701F", peau: PEAUX[1], bras: "tete", panier: "cabosses" }) +
        `<ellipse cx="145" cy="170" rx="7" ry="4" fill="#E3A21A"/><ellipse cx="158" cy="172" rx="7" ry="4" fill="#D9861C"/><ellipse cx="290" cy="172" rx="7" ry="4" fill="#E3A21A"/>`,
        "Une plantation de cacao : un planteur coupe des cabosses avec une machette, une femme porte un panier de cabosses sur la tête"),
      vocab: [["a cocoa farm / plantation", "une plantation de cacao"], ["a farmer", "un planteur"], ["cocoa pods", "des cabosses"], ["a machete", "une machette"], ["to harvest", "récolter"], ["to carry on one's head", "porter sur la tête"], ["the price", "le prix"]],
      modele: "In this picture, I can see a cocoa farm. There are two cocoa trees with yellow and orange pods on their trunks. On the left, a farmer is harvesting the pods with a machete. In the middle, a woman is carrying a basket full of cocoa pods on her head. There are some pods on the ground too. Côte d'Ivoire is the first cocoa producer in the world, so this picture is very typical of our country. But in 2026, the price paid to farmers fell to 1,200 francs per kilo, so farmers are worried.",
      quiz: [["What is the farmer holding?", "A machete.", "A phone.", "A football.", "An umbrella.", "He uses a machete to cut the pods."],
        ["What is the woman carrying on her head?", "A basket of cocoa pods.", "A bucket of water.", "A school bag.", "A baby.", "Her basket is full of cocoa pods."],
        ["Which country is the first cocoa producer in the world?", "Côte d'Ivoire.", "France.", "Brazil.", "Canada.", "Côte d'Ivoire produces the most cocoa in the world."]] },
    { id: "inondation", titre: "A flood in the city", fr: "Une inondation en ville",
      svg: svgScene(ciel("#8C9BAA") + `<ellipse cx="80" cy="25" rx="60" ry="18" fill="#5D6D7E"/><ellipse cx="220" cy="22" rx="80" ry="20" fill="#566573"/>` +
        Array.from({ length: 30 }, (_, i) => `<line x1="${(i * 37) % 320}" y1="${40 + (i * 23) % 60}" x2="${(i * 37) % 320 - 5}" y2="${52 + (i * 23) % 60}" stroke="#D6EAF8" stroke-width="2"/>`).join("") +
        `<rect x="10" y="70" width="80" height="80" fill="#E5C9A0"/><path d="M5 72 l45 -25 l45 25z" fill="#A04000"/><rect x="230" y="60" width="80" height="90" fill="#D5DBDB"/><rect x="245" y="75" width="18" height="18" fill="#7FB3D5"/><rect x="278" y="75" width="18" height="18" fill="#7FB3D5"/>` +
        `<rect x="120" y="125" width="70" height="28" rx="8" fill="#C0392B"/><rect x="132" y="112" width="45" height="18" rx="6" fill="#E74C3C"/><rect x="138" y="115" width="14" height="11" fill="#D6EAF8"/><rect x="156" y="115" width="15" height="11" fill="#D6EAF8"/>` +
        perso(215, 178, { haut: "#2B63B8", bas: "#34495E", peau: PEAUX[1], bras: "tient" }) + `<circle cx="215" cy="105" r="7" fill="${PEAUX[2]}"/><rect x="209" y="111" width="12" height="12" rx="3" fill="#F7C331"/>` +
        `<rect y="145" width="320" height="55" fill="#5DADE2" opacity=".85"/><path d="M0 146 q20 -5 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>`,
        "Une inondation en ville sous la pluie : l'eau couvre la rue, une voiture est à moitié dans l'eau, un homme porte un enfant sur ses épaules"),
      vocab: [["a flood", "une inondation"], ["heavy rain", "une forte pluie"], ["dark clouds", "des nuages sombres"], ["the street is flooded", "la rue est inondée"], ["a car", "une voiture"], ["to carry", "porter"], ["dangerous", "dangereux"]],
      modele: "This picture shows a flood in a city. It is raining heavily and there are dark clouds in the sky. The street is covered with water. In the middle, a red car is half under the water. On the right, a man is walking in the water; he is carrying a child on his shoulders to protect him. In the background, there are some houses and a building. This situation is very dangerous. In June 2026, heavy rains caused floods in Abidjan and many people died. To avoid floods, we must not throw rubbish in the gutters and we must not build in dangerous areas.",
      quiz: [["What is the weather like?", "It is raining heavily.", "It is sunny and hot.", "It is snowing.", "It is windy and dry.", "There are dark clouds and rain."],
        ["What is the man doing?", "He is carrying a child.", "He is driving the car.", "He is swimming.", "He is sleeping.", "He carries the child on his shoulders."],
        ["Where is the car?", "Half under the water.", "In a garage.", "On a bridge.", "In the sky.", "The street is flooded."]] }
  ];

  const TEXTES = [
    { id: "awa", titre: "Awa's school day",
      texte: "Awa is fourteen years old. She lives in Daloa with her parents and her two brothers. She is in form three at the Lycée Moderne. Every morning, she gets up at half past five, sweeps the yard and has a quick breakfast. Then she walks to school with her friends. Her favourite subject is English because her teacher is very kind. After school, she helps her mother at the market. In the evening, she does her homework under the lamp. Awa wants to become a doctor to help people in her town.",
      questions: [["Where does Awa live?", "In Daloa.", "In Abidjan.", "In Paris.", "In Korhogo.", "« She lives in Daloa with her parents. »"],
        ["What does she do after school?", "She helps her mother at the market.", "She plays football.", "She watches TV all evening.", "She goes to the beach.", "« After school, she helps her mother at the market. »"],
        ["Why does she like English?", "Because her teacher is very kind.", "Because it is easy.", "Because she lives in England.", "She doesn't like English.", "« because her teacher is very kind »"],
        ["What does Awa want to become?", "A doctor.", "A teacher.", "A footballer.", "A singer.", "« Awa wants to become a doctor to help people in her town. »"]],
      resume: "This text is about Awa, a fourteen-year-old girl from Daloa. She is in form three. She gets up very early, sweeps the yard and walks to school. She likes English because her teacher is kind. After school, she helps her mother at the market and in the evening she does her homework. She wants to become a doctor to help people.",
      vocab: [["to get up", "se lever"], ["to sweep the yard", "balayer la cour"], ["homework", "les devoirs"], ["favourite subject", "matière préférée"], ["to become", "devenir"]] },
    { id: "pluie", titre: "The rainy season",
      texte: "In Côte d'Ivoire, the long rainy season starts in May and ends in July. During this period, it rains almost every day. The rain is good for farmers because their plants need water. But in big cities like Abidjan, heavy rains can cause floods. In June 2026, floods and landslides killed many people. Some houses were built in dangerous areas, and the gutters were full of rubbish. The government asks people not to throw waste in the gutters and to leave the dangerous areas during the rainy season.",
      questions: [["When does the long rainy season start?", "In May.", "In January.", "In December.", "In August.", "« the long rainy season starts in May and ends in July »"],
        ["Why is the rain good for farmers?", "Because their plants need water.", "Because they can stay at home.", "Because it is cold.", "It is not good for them.", "« their plants need water »"],
        ["What happened in June 2026?", "Floods and landslides killed many people.", "There was no rain.", "The schools closed for holidays.", "A football match was played.", "« In June 2026, floods and landslides killed many people. »"],
        ["What does the government ask people to do?", "Not to throw waste in the gutters.", "To build more houses in dangerous areas.", "To stop farming.", "To buy cars.", "« not to throw waste in the gutters and to leave the dangerous areas »"]],
      resume: "The text talks about the rainy season in Côte d'Ivoire, from May to July. Rain is useful for farmers, but in cities like Abidjan it can cause floods. In June 2026, floods killed many people because some houses were in dangerous areas and the gutters were blocked by rubbish. The government asks people to keep the gutters clean and to leave dangerous areas.",
      vocab: [["the rainy season", "la saison des pluies"], ["heavy rains", "de fortes pluies"], ["a landslide", "un glissement de terrain"], ["dangerous areas", "des zones à risque"], ["waste / rubbish", "les déchets"]] },
    { id: "lettre", titre: "A letter from a pen friend",
      texte: "Dear Kofi, Thank you for your last letter. I am happy to hear that you passed your exams. Here in Accra, the holidays have started. Last weekend, I visited my grandparents in their village. My grandfather has a big farm with cocoa and plantains. I helped him in the farm and in the evening he told us old stories. Next month, my family is going to visit Abidjan and I hope we can meet. Please tell me about your town and your favourite food. Best wishes, Ama.",
      questions: [["Who wrote the letter?", "Ama.", "Kofi.", "The grandfather.", "A teacher.", "The letter is signed « Ama »."],
        ["Where does Ama live?", "In Accra.", "In Abidjan.", "In the village.", "In London.", "« Here in Accra, the holidays have started. »"],
        ["What did Ama do last weekend?", "She visited her grandparents.", "She passed her exams.", "She went to Abidjan.", "She stayed in bed.", "« Last weekend, I visited my grandparents in their village. »"],
        ["What is Ama's family going to do next month?", "Visit Abidjan.", "Buy a farm.", "Move to Europe.", "Write a book.", "« Next month, my family is going to visit Abidjan. »"]],
      resume: "This is a letter from Ama, who lives in Accra, to her friend Kofi. She congratulates him on his exams. She tells him that she visited her grandparents' farm during the holidays and listened to old stories. Her family is going to visit Abidjan next month, so she hopes to meet Kofi. She asks him about his town and his favourite food.",
      vocab: [["a pen friend", "un correspondant"], ["to pass an exam", "réussir un examen"], ["grandparents", "grands-parents"], ["plantains", "des bananes plantains"], ["best wishes", "amitiés"]] },
    { id: "telephone", titre: "Mobile phones at school",
      texte: "Today, many students have a mobile phone. Some people think phones are useful at school: students can look for information, use dictionaries and learn with educational apps. But other people think phones are a problem. Some students play games or use social media during lessons, and they don't listen to the teacher. Some even use phones to cheat during tests. In many schools, phones are forbidden in the classroom. In my opinion, phones can help us to learn, but we must use them responsibly and only when the teacher allows it.",
      questions: [["According to the text, how can phones be useful?", "To look for information and learn with apps.", "To cheat during tests.", "To play games in class.", "They are never useful.", "« students can look for information, use dictionaries and learn with educational apps »"],
        ["What problem do phones cause?", "Some students don't listen to the teacher.", "They are too cheap.", "They are too heavy.", "They help students too much.", "« they don't listen to the teacher »"],
        ["What is the rule in many schools?", "Phones are forbidden in the classroom.", "Phones are compulsory.", "Teachers give phones to students.", "There is no rule.", "« In many schools, phones are forbidden in the classroom. »"],
        ["What is the writer's opinion?", "Phones can help if we use them responsibly.", "Phones must be destroyed.", "Phones are always bad.", "Students should use phones during tests.", "« we must use them responsibly and only when the teacher allows it »"]],
      resume: "The text is about mobile phones at school. Phones can be useful to find information and to learn, but they can also be a problem: some students play games, use social media or cheat. That is why many schools forbid phones in class. The writer thinks that phones can help students if they use them responsibly.",
      vocab: [["useful", "utile"], ["to cheat", "tricher"], ["forbidden", "interdit"], ["responsibly", "de façon responsable"], ["to allow", "autoriser"]] },
    { id: "paludisme", titre: "Malaria",
      texte: "Malaria is a serious disease in Africa. It is caused by a parasite, and it is transmitted by the bite of a female mosquito. The symptoms are fever, headache and tiredness. Young children and pregnant women are the most exposed. In Côte d'Ivoire, malaria represents about thirty percent of medical consultations. To protect ourselves, we should sleep under a mosquito net, remove stagnant water around the house and go to the health centre quickly when we have a fever. Today, there is also a malaria vaccine for young children.",
      questions: [["What transmits malaria?", "The bite of a female mosquito.", "Dirty water.", "Shaking hands.", "Eating mangoes.", "« transmitted by the bite of a female mosquito »"],
        ["What are the symptoms?", "Fever, headache and tiredness.", "Good health and energy.", "Only a cough.", "Blue skin.", "« The symptoms are fever, headache and tiredness. »"],
        ["Who are the most exposed?", "Young children and pregnant women.", "Old men only.", "Footballers.", "Teachers.", "« Young children and pregnant women are the most exposed. »"],
        ["How can we protect ourselves?", "By sleeping under a mosquito net.", "By drinking a lot of soda.", "By staying in the sun.", "By keeping stagnant water.", "Mosquito nets, no stagnant water, quick visit to the health centre, vaccine."]],
      resume: "The text is about malaria, a serious disease transmitted by the bite of a female mosquito. The main symptoms are fever, headache and tiredness, and children and pregnant women are the most exposed. In Côte d'Ivoire, it represents about thirty percent of consultations. To protect ourselves, we should sleep under a mosquito net, remove stagnant water, go to the health centre quickly and vaccinate young children.",
      vocab: [["a disease", "une maladie"], ["a bite", "une piqûre"], ["fever", "la fièvre"], ["stagnant water", "l'eau stagnante"], ["a mosquito net", "une moustiquaire"]] },
    { id: "elephants", titre: "The Elephants at the World Cup",
      texte: "In June 2026, the national football team of Côte d'Ivoire, the Elephants, played at the World Cup in North America. They lost their first match against Germany, but then they beat Curaçao two goals to nil. For the first time in their history, they qualified for the knockout stage. Unfortunately, they lost against Norway two goals to one in Dallas. The whole country was proud of the team. Many young Ivorians dream of becoming professional footballers, but they must also go to school.",
      questions: [["Where was the 2026 World Cup played?", "In North America.", "In Africa.", "In Europe.", "In Asia.", "« played at the World Cup in North America » (United States, Canada, Mexico)."],
        ["Which team did the Elephants beat?", "Curaçao.", "Germany.", "Norway.", "Brazil.", "« they beat Curaçao two goals to nil »"],
        ["What happened for the first time?", "They qualified for the knockout stage.", "They won the World Cup.", "They played in Africa.", "They lost all their matches.", "« For the first time in their history, they qualified for the knockout stage. »"],
        ["Which team eliminated them?", "Norway.", "Germany.", "Curaçao.", "Senegal.", "« they lost against Norway two goals to one in Dallas »"]],
      resume: "The text talks about the Elephants at the 2026 World Cup. After losing to Germany, they beat Curaçao and qualified for the knockout stage for the first time. Then they lost against Norway, two goals to one. The country was proud of them. The text also says that young people who dream of football must continue to go to school.",
      vocab: [["the national team", "l'équipe nationale"], ["to beat", "battre"], ["the knockout stage", "la phase à élimination directe"], ["unfortunately", "malheureusement"], ["proud", "fier"]] }
  ];

  const CONVERSATION = [
    ["Can you introduce yourself?", "Good morning. My name is Adriel. I am fifteen years old and I am in form three. I live in Côte d'Ivoire with my family. I like mathematics and football."],
    ["What is your favourite subject? Why?", "My favourite subject is mathematics because I like solving problems. I also like English because I can talk with people from other countries."],
    ["What do you do in your free time?", "In my free time, I play football with my friends, I listen to music and I help my parents at home. On Sundays, I go to church."],
    ["What do you want to do in the future?", "In the future, I want to become an engineer. I want to build roads and bridges in my country. To do this, I must work hard at school."],
    ["Can you describe your town?", "My town is big and lively. There is a market, a hospital, schools and churches. People are friendly, but sometimes the streets are dirty during the rainy season."],
    ["Can you talk about your family?", "There are five people in my family: my father, my mother, my big brother, my sister and me. My father is a trader and my mother is a teacher. I love my family."],
    ["What do you think about social media?", "In my opinion, social media is useful to learn and to communicate, but it can be dangerous: there are scams and fake news. We must use it responsibly."],
    ["How do you prepare for the BEPC?", "I prepare for the BEPC every day. I review my lessons in the evening, I do exercises and I study with my friends at the weekend. I also try to sleep well."]
  ];

  // Chapitre « Oral du BEPC » dans la matière Anglais (quiz tiré des images et des textes)
  MAT_EN.chapitres.unshift({ id: "en-oral-bepc", titre: "Oral du BEPC · image, texte, conversation", special: "oral",
    cours: rg("Comment se passe l'oral", "Tu tires un sujet : soit une <b>image à décrire</b>, soit un <b>texte à lire</b> puis à expliquer. Tu as un temps de préparation, puis tu parles devant le jury, qui te pose aussi quelques questions (petite conversation).") +
      rg("Décrire une image : le plan", "1. <b>Général</b> : « This picture shows… / In this picture, I can see… » 2. <b>Détails</b> avec les positions : in the middle, on the left, on the right, in the foreground (devant), in the background (au fond), at the top, at the bottom. 3. <b>Actions</b> au présent en -ing : « A woman <b>is selling</b> mangoes. » 4. <b>Ton avis</b> : « I think… / In my opinion… / It reminds me of… »") +
      rg("Expliquer un texte", "« This text is about… » (le sujet) · « The main character is… » · « First… then… finally… » · « I learnt that… » · « I agree / I disagree because… »") +
      rg("Phrases de secours", "« Could you repeat, please? » · « I'm sorry, I don't know the word, but… » · « Let me think… »") +
      rg("Conseils", "Parle lentement et fort, fais des phrases complètes, regarde le jury, souris. Mieux vaut une phrase simple et juste qu'une phrase compliquée et fausse."),
    qs: IMAGES.flatMap(im => im.quiz.map(([q, ...r]) => [`<div class="scene-mini">${im.svg}</div><p><b lang="en">${q}</b></p>`, ...r]))
      .concat(TEXTES.flatMap(t => t.questions.slice(0, 2).map(([q, ...r]) => [`<p style="color:var(--encre-2);font-size:14px">Texte : « ${t.titre} »</p><p lang="en" style="font-size:15px;background:var(--papier);padding:10px;border-radius:10px">${t.texte}</p><p><b lang="en">${q}</b></p>`, ...r]))) });
