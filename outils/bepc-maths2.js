  // =========================================================
  // Maths : leçons 4 à 14 (progression officielle 3e)
  // =========================================================
  const TRIPLETS = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20], [20, 21, 29], [15, 20, 25]];
  const LETTRES = ["ABC", "EFG", "RST", "IJK", "MNP", "DEF"];
  const dec = x => String(Math.round(x * 1000) / 1000).replace(".", ",");
  const oui = (q, bon, faux, expl, comp) => ({ comp, enonce: q, type: "qcm", choix: melanger([bon, ...faux]), reponse: bon, affiche: bon, explication: expl });
  function figureCercle(etiqAngle) {
    // cercle de centre O, A et B en bas, C en haut ; angle au centre AOB et angle inscrit ACB
    const O = [150, 110], r = 85, pt = d => [O[0] + r * Math.cos(d * Math.PI / 180), O[1] - r * Math.sin(d * Math.PI / 180)];
    const A = pt(215), B = pt(325), C = pt(100);
    const l = (P, Q, c = "tri") => `<line x1="${P[0]}" y1="${P[1]}" x2="${Q[0]}" y2="${Q[1]}" class="${c}"/>`;
    const t = (n, P, dx, dy) => `<text x="${P[0] + dx}" y="${P[1] + dy}" class="pt">${n}</text><circle cx="${P[0]}" cy="${P[1]}" r="2.6" class="pt-c"/>`;
    return `<svg viewBox="0 0 300 215" class="figure" role="img" aria-label="Cercle de centre O avec les points A, B et C">
      <circle cx="${O[0]}" cy="${O[1]}" r="${r}" class="tri"/>${l(A, C)}${l(B, C)}${l(A, O, "para")}${l(B, O, "para")}
      ${t("A", A, -18, 12)}${t("B", B, 8, 12)}${t("C", C, -6, -8)}${t("O", O, -6, -10)}
      ${etiqAngle || ""}</svg>`;
  }

  const TR = {
    hypotenuse() {
      const [a, b, c] = parmi(TRIPLETS), [P, Q, S] = parmi(LETTRES);
      return { comp: "tr-pythagore", enonce: `Le triangle ${P}${Q}${S} est rectangle en ${P}. ${P}${Q} = ${a} cm et ${P}${S} = ${b} cm.<br>Calcule <b>${Q}${S}</b> (en cm).`,
        type: "nombre", reponse: c, affiche: c + " cm",
        explication: `Propriété de Pythagore : ${Q}${S}² = ${P}${Q}² + ${P}${S}² = ${a * a} + ${b * b} = ${c * c}, donc ${Q}${S} = ${rac(c * c)} = <b>${c} cm</b>.` };
    },
    cote() {
      const [a, b, c] = parmi(TRIPLETS), [P, Q, S] = parmi(LETTRES);
      return { comp: "tr-pythagore", enonce: `Le triangle ${P}${Q}${S} est rectangle en ${P}. ${Q}${S} = ${c} cm et ${P}${Q} = ${a} cm.<br>Calcule <b>${P}${S}</b> (en cm).`,
        type: "nombre", reponse: b, affiche: b + " cm",
        explication: `${Q}${S} est l'hypoténuse. ${P}${S}² = ${Q}${S}² − ${P}${Q}² = ${c * c} − ${a * a} = ${b * b}, donc ${P}${S} = <b>${b} cm</b>.` };
    },
    hypRacine() {
      const a = hasard(1, 7), b = hasard(1, 7), n = a * a + b * b;
      let k = 1; for (let d = 2; d * d <= n; d++) if (n % (d * d) === 0) k = d;
      const m = n / (k * k);
      if (m === 1) return TR.hypotenuse();
      return { comp: "tr-pythagore", enonce: `ABC est rectangle en A, AB = ${a} cm et AC = ${b} cm. Donne BC sous la forme a${rac("b")} (b le plus petit possible ; si a = 1, écris 1).`,
        type: "coeffs", modele: ["BC = ", "√", " cm"], reponse: [k, m], racine: true, affiche: `${k}√${m} cm`,
        explication: `BC² = ${a}² + ${b}² = ${n}, donc BC = ${rac(n)}${k > 1 ? ` = ${rac(k * k + " × " + m)} = <b>${k}${rac(m)} cm</b>` : ` = <b>1${rac(m)}</b>, c'est-à-dire ${rac(m)} cm`}.` };
    },
    reciproque() {
      const [a, b, c] = parmi(TRIPLETS), rect = Math.random() < 0.5, c2 = rect ? c : c + parmi([-1, 1]);
      const bon = rect ? "Oui, il est rectangle" : "Non, il n'est pas rectangle";
      return { comp: "tr-reciproque", enonce: `Un triangle a pour côtés ${a} cm, ${b} cm et ${c2} cm. Est-il rectangle ?`, type: "qcm",
        choix: ["Oui, il est rectangle", "Non, il n'est pas rectangle"], reponse: bon, affiche: bon,
        explication: `On compare le carré du plus grand côté à la somme des carrés des deux autres : ${c2}² = ${c2 * c2} et ${a}² + ${b}² = ${a * a + b * b}. ${rect ? "Égalité : d'après la <b>réciproque</b> de Pythagore, le triangle est rectangle." : "Pas d'égalité : le triangle <b>n'est pas</b> rectangle."}` };
    },
    rapport() {
      const [a, b, c] = parmi(TRIPLETS), g = pgcd(pgcd(a, b), c);
      const f = parmi(["cos", "sin", "tan"]);
      const [n, d] = f === "cos" ? [a, c] : f === "sin" ? [b, c] : [b, a];
      return { comp: "tr-trigo", enonce: `ABC est rectangle en A, AB = ${a}, AC = ${b} et BC = ${c}.<br>Calcule <b>${f} B̂</b> (fraction simplifiée ou décimal).`,
        type: "nombre", reponse: n / d, affiche: fracTexte(n, d),
        explication: `Pour l'angle B : côté adjacent AB, côté opposé AC, hypoténuse BC.<br>${f === "cos" ? `cos B̂ = ${fr("adjacent", "hypoténuse")} = ${fr("AB", "BC")}` : f === "sin" ? `sin B̂ = ${fr("opposé", "hypoténuse")} = ${fr("AC", "BC")}` : `tan B̂ = ${fr("opposé", "adjacent")} = ${fr("AC", "AB")}`} = ${fr(n, d)} = <b>${fracHtml(n, d)}</b>.<br>Moyen mnémotechnique : <b>SOH CAH TOA</b>.` };
    },
    cosSin() {
      const [a, b, c] = parmi(TRIPLETS), [n, d] = reduireFrac(a, c), [n2, d2] = reduireFrac(b, c);
      return { comp: "tr-trigo", enonce: `x est un angle aigu et cos x = ${fr(n, d)}. Calcule <b>sin x</b>.`, type: "nombre", reponse: n2 / d2, affiche: fracTexte(n2, d2),
        explication: `On utilise cos²x + sin²x = 1 : sin²x = 1 − (${fr(n, d)})² = 1 − ${fr(n * n, d * d)} = ${fr(d * d - n * n, d * d)}. Comme x est aigu, sin x > 0, donc sin x = <b>${fracHtml(n2, d2)}</b>.` };
    },
    longueurTrigo() {
      const [a, b, c] = parmi(TRIPLETS.filter(t => Number.isInteger(t[0] / t[2] * 1000))), k = parmi([1, 2]), BC = c * k, AB = a * k;
      return { comp: "tr-trigo", enonce: `ABC est rectangle en A, BC = ${BC} cm et cos B̂ = ${dec(a / c)}. Calcule <b>AB</b> (en cm).`, type: "nombre", reponse: AB, affiche: dec(AB) + " cm",
        explication: `cos B̂ = ${fr("AB", "BC")}, donc AB = BC × cos B̂ = ${BC} × ${dec(a / c)} = <b>${dec(AB)} cm</b>.` };
    },
    hauteur() {
      const [a, b, c] = parmi(TRIPLETS.filter(t => (t[0] * t[1] * 100) % t[2] === 0)), h = a * b / c;
      return { comp: "tr-pythagore", enonce: `ABC est rectangle en A, AB = ${a} cm, AC = ${b} cm, BC = ${c} cm. H est le pied de la hauteur issue de A. Calcule <b>AH</b>.`,
        type: "nombre", reponse: h, affiche: dec(h) + " cm",
        explication: `Propriété déduite de l'aire : AH × BC = AB × AC, donc AH = ${fr("AB × AC", "BC")} = ${fr(a + " × " + b, c)} = <b>${dec(h)} cm</b>.` };
    },
    complementaire() {
      const x = hasard(10, 80), f = parmi(["sin", "cos"]), g = f === "sin" ? "cos" : "sin";
      return { comp: "tr-trigo", enonce: `Complète : ${f} ${x}° = ${g} … °`, type: "nombre", reponse: 90 - x, affiche: (90 - x) + "°",
        explication: `Si deux angles sont complémentaires (somme 90°), le sinus de l'un est égal au cosinus de l'autre : ${f} ${x}° = ${g} (90° − ${x}°) = <b>${g} ${90 - x}°</b>.` };
    },
    defiEchelle() {
      const [a, b, c] = parmi([[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15]]);
      return { comp: "tr-pythagore", defi: true, enonce: `À Yamoussoukro, un peintre pose une échelle de <b>${c} m</b> contre un mur vertical. Le pied de l'échelle est à <b>${a} m</b> du mur. À quelle hauteur (en m) le haut de l'échelle touche-t-il le mur ?`,
        type: "nombre", reponse: b, affiche: b + " m",
        explication: `Le mur, le sol et l'échelle forment un triangle rectangle ; l'échelle est l'hypoténuse. h² = ${c}² − ${a}² = ${c * c} − ${a * a} = ${b * b}, donc h = <b>${b} m</b>.` };
    }
  };

  const CN = {
    notation() {
      const a = hasard(-6, 2), b = a + hasard(2, 8), cas = hasard(0, 3);
      const ineg = [`${moins(a)} ≤ x ≤ ${moins(b)}`, `${moins(a)} < x < ${moins(b)}`, `${moins(a)} ≤ x < ${moins(b)}`, `${moins(a)} < x ≤ ${moins(b)}`][cas];
      const tous = [`[${moins(a)} ; ${moins(b)}]`, `]${moins(a)} ; ${moins(b)}[`, `[${moins(a)} ; ${moins(b)}[`, `]${moins(a)} ; ${moins(b)}]`];
      return oui(`Quel intervalle correspond à : <b>${ineg}</b> ?`, tous[cas], tous.filter((_, i) => i !== cas),
        `Le crochet est <b>tourné vers le nombre</b> quand il est compris (≤) et <b>tourné vers l'extérieur</b> quand il est exclu (<). Réponse : <b>${tous[cas]}</b>.`, "cn-intervalles");
    },
    amplitude() {
      const a = hasard(-8, 4), b = a + hasard(2, 12), quoi = parmi(["amplitude", "centre"]);
      const r = quoi === "amplitude" ? b - a : (a + b) / 2;
      return { comp: "cn-intervalles", enonce: `Calcule ${quoi === "amplitude" ? "l'<b>amplitude</b>" : "le <b>centre</b>"} de l'intervalle [${moins(a)} ; ${moins(b)}].`, type: "nombre", reponse: r, affiche: dec(r),
        explication: quoi === "amplitude" ? `Amplitude = b − a = ${moins(b)} − ${par(a)} = <b>${moins(r)}</b>.` : `Centre = ${fr("a + b", 2)} = ${fr(moins(a) + " + " + par(b), 2)} = <b>${dec(r)}</b>.` };
    },
    intersection() {
      const a = hasard(-6, 0), b = a + hasard(3, 6), c = a + hasard(1, b - a - 1), d = b + hasard(1, 4);
      const op = parmi(["∩", "∪"]);
      const bon = op === "∩" ? `[${moins(c)} ; ${moins(b)}]` : `[${moins(a)} ; ${moins(d)}]`;
      const faux = op === "∩" ? [`[${moins(a)} ; ${moins(d)}]`, `[${moins(a)} ; ${moins(c)}]`, `[${moins(b)} ; ${moins(d)}]`] : [`[${moins(c)} ; ${moins(b)}]`, `[${moins(a)} ; ${moins(b)}]`, `[${moins(c)} ; ${moins(d)}]`];
      return oui(`Détermine : [${moins(a)} ; ${moins(b)}] ${op} [${moins(c)} ; ${moins(d)}]`, bon, faux,
        op === "∩" ? `L'<b>intersection</b> (∩) contient les nombres qui sont <b>dans les deux</b> intervalles : de ${moins(c)} à ${moins(b)}. Réponse : <b>${bon}</b>. Astuce : dessine les deux intervalles sur une droite graduée.` : `La <b>réunion</b> (∪) contient les nombres qui sont <b>dans l'un ou l'autre</b> : de ${moins(a)} à ${moins(d)}. Réponse : <b>${bon}</b>.`, "cn-intervalles");
    },
    comparer() {
      let a, m, b, n; do { a = hasard(2, 5); m = parmi([2, 3, 5, 6, 7]); b = hasard(2, 5); n = parmi([2, 3, 5, 6, 7]); } while (a * a * m === b * b * n || a === b);
      const X = `${a}√${m}`, Y = `${b}√${n}`, bon = a * a * m < b * b * n ? `${X} < ${Y}` : `${X} > ${Y}`;
      return oui(`Compare <b>${a}${rac(m)}</b> et <b>${b}${rac(n)}</b>.`, bon, [a * a * m < b * b * n ? `${X} > ${Y}` : `${X} < ${Y}`, `${X} = ${Y}`],
        `Deux nombres positifs sont rangés dans le même ordre que leurs carrés : (${a}${rac(m)})² = ${a * a} × ${m} = ${a * a * m} et (${b}${rac(n)})² = ${b * b * n}. Donc <b>${bon}</b>.`, "cn-comparer");
    },
    encadrerSomme() {
      const r = [[2, 1.4, 1.5], [3, 1.7, 1.8], [5, 2.2, 2.3], [7, 2.6, 2.7]], [p, q] = melanger(r).slice(0, 2), op = parmi(["+", "−"]);
      const bas = op === "+" ? p[1] + q[1] : p[1] - q[2], haut = op === "+" ? p[2] + q[2] : p[2] - q[1];
      return { comp: "cn-encadrer", enonce: `On sait que ${dec(p[1])} < ${rac(p[0])} < ${dec(p[2])} et ${dec(q[1])} < ${rac(q[0])} < ${dec(q[2])}.<br>Encadre ${rac(p[0])} ${op} ${rac(q[0])}.`,
        type: "coeffs", modele: ["", ` < √${p[0]} ${op} √${q[0]} < `, ""], reponse: [Math.round(bas * 10) / 10, Math.round(haut * 10) / 10], affiche: `${dec(bas)} < √${p[0]} ${op} √${q[0]} < ${dec(haut)}`,
        explication: op === "+" ? `On additionne membre à membre : ${dec(p[1])} + ${dec(q[1])} < ${rac(p[0])} + ${rac(q[0])} < ${dec(p[2])} + ${dec(q[2])}, soit <b>${dec(bas)} < … < ${dec(haut)}</b>.` : `Pour une différence, on encadre d'abord l'opposé : ${moins(-q[2]).replace(".", ",")} < −${rac(q[0])} < ${moins(-q[1]).replace(".", ",")}, puis on additionne : <b>${dec(bas)} < … < ${dec(haut)}</b>.` };
    },
    entiers() {
      let n; do { n = hasard(3, 120); } while (Number.isInteger(Math.sqrt(n)));
      const k = Math.floor(Math.sqrt(n));
      return { comp: "cn-encadrer", enonce: `Encadre ${rac(n)} par deux entiers consécutifs.`, type: "coeffs", modele: ["", ` < √${n} < `, ""], reponse: [k, k + 1], affiche: `${k} < √${n} < ${k + 1}`,
        explication: `${k}² = ${k * k} et ${k + 1}² = ${(k + 1) ** 2}. Comme ${k * k} < ${n} < ${(k + 1) ** 2}, on a <b>${k} < ${rac(n)} < ${k + 1}</b>.` };
    },
    arrondi() {
      let n; do { n = hasard(2, 50); } while (Number.isInteger(Math.sqrt(n)));
      const r = Math.round(Math.sqrt(n) * 10) / 10;
      return { comp: "cn-encadrer", enonce: `Donne l'<b>arrondi d'ordre 1</b> (au dixième) de ${rac(n)}. (Tu peux utiliser la calculatrice.)`, type: "nombre", reponse: r, affiche: dec(r),
        explication: `${rac(n)} ≈ ${dec(Math.floor(Math.sqrt(n) * 1000) / 1000)}… Le chiffre des centièmes est ${Math.floor(Math.sqrt(n) * 100) % 10} : on arrondit ${Math.floor(Math.sqrt(n) * 100) % 10 >= 5 ? "au-dessus" : "au-dessous"}, soit <b>${dec(r)}</b>.` };
    },
    defiTerrain() {
      const L1 = 17, L2 = 18, l1 = 14, l2 = 15;
      return { comp: "cn-encadrer", defi: true, enonce: `À Angré, un terrain rectangulaire a une longueur comprise entre ${L1} m et ${L2} m et une largeur comprise entre ${l1} m et ${l2} m. Encadre son aire A (en m²).`,
        type: "coeffs", modele: ["", " < A < ", ""], reponse: [L1 * l1, L2 * l2], affiche: `${L1 * l1} < A < ${L2 * l2}`,
        explication: `Pour des nombres positifs, on multiplie membre à membre : ${L1} × ${l1} < A < ${L2} × ${l2}, soit <b>${L1 * l1} < A < ${L2 * l2}</b>. Le terrain convient au commerçant qui veut une aire entre 230 et 300 m².` };
    }
  };

  const AI = {
    inscrit() {
      const x = hasard(15, 80), c = 2 * x;
      return { comp: "ai-angles", figure: figureCercle(`<text x="138" y="140" class="lg">${c}°</text>`), enonce: `Sur la figure, l'angle au centre AÔB mesure ${c}°. Calcule l'angle inscrit <b>AĈB</b> (en degrés).`,
        type: "nombre", reponse: x, affiche: x + "°",
        explication: `AĈB et AÔB interceptent le même arc AB. Un angle inscrit mesure <b>la moitié</b> de l'angle au centre associé : AĈB = ${c}° ÷ 2 = <b>${x}°</b>.` };
    },
    centre() {
      const x = hasard(15, 80);
      return { comp: "ai-angles", figure: figureCercle(`<text x="140" y="45" class="lg">${x}°</text>`), enonce: `Sur la figure, l'angle inscrit AĈB mesure ${x}°. Calcule l'angle au centre <b>AÔB</b>.`,
        type: "nombre", reponse: 2 * x, affiche: 2 * x + "°",
        explication: `L'angle au centre mesure <b>le double</b> de l'angle inscrit qui intercepte le même arc : AÔB = 2 × ${x}° = <b>${2 * x}°</b>.` };
    },
    memeArc() {
      const x = hasard(20, 75);
      return { comp: "ai-angles", enonce: `A, B, C et D sont sur un même cercle, C et D du même côté de (AB). AĈB = ${x}°. Combien mesure <b>AD̂B</b> ?`, type: "nombre", reponse: x, affiche: x + "°",
        explication: `AĈB et AD̂B sont deux angles inscrits qui interceptent <b>le même arc</b> AB : ils ont la même mesure, <b>${x}°</b>.` };
    },
    diametre() {
      return oui(`[AB] est un diamètre d'un cercle et C un point du cercle (différent de A et B). Que peut-on dire de l'angle AĈB ?`, "C'est un angle droit (90°)", ["Il mesure 180°", "Il mesure 45°", "On ne peut rien dire"],
        `L'angle au centre AÔB est plat (180°). L'angle inscrit AĈB mesure la moitié : <b>90°</b>. Le triangle ABC est rectangle en C.`, "ai-angles");
    },
    isocele() {
      const c = 2 * hasard(20, 70), base = (180 - c) / 2;
      return { comp: "ai-angles", enonce: `Dans un cercle de centre O, l'angle au centre AÔB mesure ${c}°. Calcule l'angle <b>OÂB</b>.`, type: "nombre", reponse: base, affiche: base + "°",
        explication: `OA = OB (rayons), donc le triangle OAB est isocèle en O : ses angles à la base sont égaux. OÂB = (180° − ${c}°) ÷ 2 = <b>${base}°</b>.` };
    }
  };

  const VE = {
    chasles() {
      const [A, B, C] = melanger(["A", "B", "C", "D", "E"]).slice(0, 3), cas = hasard(0, 2);
      const v = s => s + "⃗";
      const q = [[`${v(A + B)} + ${v(B + C)}`, v(A + C), [v(A + B), v(C + A), v(B + C)]], [`${v(A + B)} − ${v(A + C)}`, v(C + B), [v(B + C), v(A + B), "0⃗"]], [`${v(A + B)} + ${v(B + C)} + ${v(C + A)}`, "0⃗", [v(A + C), v(C + A), v(A + B)]]][cas];
      return oui(`Réduis : <b>${q[0]}</b>`, q[1], q[2], cas === 0 ? `Relation de Chasles : ${v(A + B)} + ${v(B + C)} = <b>${q[1]}</b> (le « ${B} » du milieu disparaît).` : cas === 1 ? `${v(A + B)} − ${v(A + C)} = ${v(A + B)} + ${v(C + A)} = ${v(C + A)} + ${v(A + B)} = <b>${q[1]}</b>.` : `${v(A + B)} + ${v(B + C)} = ${v(A + C)}, puis ${v(A + C)} + ${v(C + A)} = ${v(A + A)} = <b>0⃗</b>.`, "ve-vecteurs");
    },
    produit() {
      const k = parmi([2, 3, 4, -2, -3]), l = hasard(2, 6);
      return { comp: "ve-vecteurs", enonce: `AB = ${l} cm et AM⃗ = ${moins(k)} AB⃗. Calcule la longueur <b>AM</b> (en cm).`, type: "nombre", reponse: Math.abs(k) * l, affiche: Math.abs(k) * l + " cm",
        explication: `La longueur de k·AB⃗ est |k| × AB = ${Math.abs(k)} × ${l} = <b>${Math.abs(k) * l} cm</b>. ${k < 0 ? "Le signe moins change seulement le <b>sens</b> : M est de l'autre côté de A." : "M est sur la demi-droite [AB)."}` };
    },
    alignement() {
      return oui(`On sait que AB⃗ = −3 AC⃗. Que peut-on conclure ?`, "Les points A, B et C sont alignés", ["AB = AC", "ABC est un triangle rectangle", "B est le milieu de [AC]"],
        `AB⃗ et AC⃗ sont <b>colinéaires</b> (l'un est un multiple de l'autre) et ont le point A en commun : <b>A, B et C sont alignés</b>.`, "ve-vecteurs");
    },
    milieu() {
      return oui(`I est le milieu de [AB]. Quelle égalité est vraie ?`, "AI⃗ = IB⃗", ["AI⃗ = BI⃗", "AB⃗ = AI⃗", "IA⃗ = IB⃗"],
        `I milieu de [AB] équivaut à <b>AI⃗ = IB⃗</b> (même direction, même sens, même longueur). Attention : IA⃗ et IB⃗ sont <b>opposés</b>.`, "ve-vecteurs");
    },
    parallele() {
      return oui(`Si AB⃗ = 2 CD⃗, alors les droites (AB) et (CD) sont :`, "parallèles", ["perpendiculaires", "sécantes en A", "confondues forcément"],
        `Deux vecteurs colinéaires ont la même direction : les droites (AB) et (CD) sont <b>parallèles</b> (elles peuvent aussi être confondues si A, B, C, D sont alignés).`, "ve-vecteurs");
    }
  };

  const EI = {
    simple() {
      const a = nonNul(-6, 6), x = hasard(-6, 6), b = -a * x;
      return { comp: "ei-equations", enonce: `Résous dans ℝ :<div class="calc">${lin(a, b)} = 0</div>`, type: "nombre", reponse: -b / a, affiche: "x = " + fracTexte(-b, a),
        explication: `${lin(a, b)} = 0 ⇔ ${a === 1 ? "" : moins(a)}x = ${moins(-b)} ⇔ x = ${fr(moins(-b), moins(a))} = <b>${fracHtml(-b, a)}</b>.` };
    },
    deuxMembres() {
      let a, c; do { a = nonNul(-5, 7); c = nonNul(-5, 7); } while (a === c);
      const x = hasard(-5, 5), b = hasard(-9, 9), d = (a - c) * x + b;
      return { comp: "ei-equations", enonce: `Résous dans ℝ :<div class="calc">${lin(a, b)} = ${lin(c, d)}</div>`, type: "nombre", reponse: x, affiche: "x = " + moins(x),
        explication: `On regroupe les x à gauche et les nombres à droite : ${poly(0, a, 0)} ${c < 0 ? "+" : "−"} ${Math.abs(c) === 1 ? "" : Math.abs(c)}x = ${moins(d)}${b === 0 ? "" : signe(-b)}, soit ${moins(a - c)}x = ${moins(d - b)}, donc x = <b>${moins(x)}</b>.` };
    },
    produit() {
      const p = hasard(-6, 6), q = hasard(-6, 6), k = parmi([1, 1, 2]);
      return { comp: "ei-equations", enonce: `Résous :<div class="calc">(${lin(k, -k * p)})(${lin(1, -q)}) = 0</div>`, type: "deux", reponse: [p, q], affiche: `x = ${moins(p)} ou x = ${moins(q)}`,
        explication: `Un produit est nul si l'un des facteurs est nul : ${lin(k, -k * p)} = 0 ou ${lin(1, -q)} = 0, donc x = <b>${moins(p)}</b> ou x = <b>${moins(q)}</b>.` };
    },
    inequation() {
      const a = nonNul(-5, 5), x0 = hasard(-5, 5), b = -a * x0, sens = parmi(["≥", ">", "≤", "<"]);
      const inv = { "≥": "≤", ">": "<", "≤": "≥", "<": ">" }, s = a > 0 ? sens : inv[sens];
      const ferme = s === "≥" || s === "≤";
      const intervalle = (sg, f) => sg === "≥" || sg === ">" ? `${f ? "[" : "]"}${moins(x0)} ; +∞[` : `]−∞ ; ${moins(x0)}${f ? "]" : "["}`;
      const bon = intervalle(s, ferme);
      const faux = [intervalle(inv[s], ferme), intervalle(s, !ferme), intervalle(inv[s], !ferme)];
      return oui(`Résous dans ℝ : <b>${lin(a, b)} ${sens} 0</b>`, bon, faux,
        `${lin(a, b)} ${sens} 0 ⇔ ${a === 1 ? "" : a === -1 ? "−" : moins(a)}x ${sens} ${moins(-b)}. ${a < 0 ? "On divise par " + moins(a) + ", un nombre <b>négatif</b> : on <b>change le sens</b> de l'inégalité. " : ""}x ${s} ${moins(x0)}. Ensemble des solutions : <b>${bon}</b>.`, "ei-inequations");
    },
    systeme() {
      const a = hasard(-5, 1), b = a + hasard(2, 6);
      const bon = `[${moins(a)} ; ${moins(b)}[`;
      return oui(`Résous le système : <b>x${a === 0 ? "" : signe(-a)} ≥ 0</b> et <b>x${b === 0 ? "" : signe(-b)} < 0</b>`, bon, [`]${moins(a)} ; ${moins(b)}]`, `]−∞ ; ${moins(a)}]`, `[${moins(b)} ; +∞[`],
        `Première inéquation : x ≥ ${moins(a)}. Deuxième : x < ${moins(b)}. Les solutions communes forment l'intervalle <b>${bon}</b>.`, "ei-inequations");
    },
    defiCars() {
      const f1 = parmi([10000, 12000, 15000]), p1 = parmi([60, 70, 80]), f2 = f1 - parmi([3000, 4000, 5000]), p2 = p1 + parmi([20, 40]);
      const x = (f1 - f2) / (p2 - p1);
      return { comp: "ei-equations", defi: true, enonce: `Pour une sortie, l'entreprise 1 demande ${f1} F de caution + ${p1} F par km ; l'entreprise 2 demande ${f2} F + ${p2} F par km. Pour quelle distance (en km) les deux prix sont-ils égaux ?`,
        type: "nombre", reponse: x, affiche: dec(x) + " km",
        explication: `On résout ${f1} + ${p1}x = ${f2} + ${p2}x ⇔ ${f1 - f2} = ${p2 - p1}x ⇔ x = <b>${dec(x)} km</b>. Au-delà, l'entreprise 1 est moins chère.` };
    }
  };

  const CO = {
    vecteur() {
      const xa = hasard(-5, 5), ya = hasard(-5, 5), xb = hasard(-5, 5), yb = hasard(-5, 5);
      return { comp: "co-coordonnees", enonce: `Dans un repère, A(${moins(xa)} ; ${moins(ya)}) et B(${moins(xb)} ; ${moins(yb)}). Donne les coordonnées de <b>AB⃗</b>.`,
        type: "coeffs", modele: ["AB⃗ (", " ; ", ")"], reponse: [xb - xa, yb - ya], affiche: `(${moins(xb - xa)} ; ${moins(yb - ya)})`,
        explication: `AB⃗ (x<sub>B</sub> − x<sub>A</sub> ; y<sub>B</sub> − y<sub>A</sub>) = (${moins(xb)} − ${par(xa)} ; ${moins(yb)} − ${par(ya)}) = <b>(${moins(xb - xa)} ; ${moins(yb - ya)})</b>.` };
    },
    milieu() {
      const xa = hasard(-6, 6), ya = hasard(-6, 6), xb = hasard(-6, 6), yb = hasard(-6, 6);
      const xi = (xa + xb) / 2, yi = (ya + yb) / 2;
      return { comp: "co-coordonnees", enonce: `A(${moins(xa)} ; ${moins(ya)}) et B(${moins(xb)} ; ${moins(yb)}). Donne les coordonnées du milieu <b>I</b> de [AB].`,
        type: "coeffs", modele: ["I (", " ; ", ")"], reponse: [xi, yi], affiche: `(${dec(xi)} ; ${dec(yi)})`,
        explication: `x<sub>I</sub> = ${fr("x<sub>A</sub> + x<sub>B</sub>", 2)} = ${fr(moins(xa) + " + " + par(xb), 2)} = ${dec(xi)} et y<sub>I</sub> = ${fr(moins(ya) + " + " + par(yb), 2)} = ${dec(yi)}. Donc <b>I(${dec(xi)} ; ${dec(yi)})</b>.` };
    },
    distance() {
      const [a, b, c] = parmi(TRIPLETS.slice(0, 5)), xa = hasard(-4, 4), ya = hasard(-4, 4), sx = parmi([1, -1]), sy = parmi([1, -1]);
      const xb = xa + sx * a, yb = ya + sy * b;
      return { comp: "co-coordonnees", enonce: `Le repère est orthonormé. A(${moins(xa)} ; ${moins(ya)}) et B(${moins(xb)} ; ${moins(yb)}). Calcule la distance <b>AB</b>.`, type: "nombre", reponse: c, affiche: String(c),
        explication: `AB = ${rac("(x<sub>B</sub> − x<sub>A</sub>)² + (y<sub>B</sub> − y<sub>A</sub>)²")} = ${rac(`${par(xb - xa)}² + ${par(yb - ya)}²`)} = ${rac(a * a + b * b)} = <b>${c}</b>.` };
    },
    combinaison() {
      const x1 = hasard(-4, 4), y1 = hasard(-4, 4), x2 = hasard(-4, 4), y2 = hasard(-4, 4), k = parmi([2, 3, -2]);
      return { comp: "co-coordonnees", enonce: `u⃗(${moins(x1)} ; ${moins(y1)}) et v⃗(${moins(x2)} ; ${moins(y2)}). Donne les coordonnées de <b>u⃗ + ${moins(k)}v⃗</b>.`,
        type: "coeffs", modele: ["(", " ; ", ")"], reponse: [x1 + k * x2, y1 + k * y2], affiche: `(${moins(x1 + k * x2)} ; ${moins(y1 + k * y2)})`,
        explication: `${moins(k)}v⃗ (${moins(k * x2)} ; ${moins(k * y2)}), puis on additionne coordonnée par coordonnée : <b>(${moins(x1 + k * x2)} ; ${moins(y1 + k * y2)})</b>.` };
    },
    colineaires() {
      const x = nonNul(-4, 4), y = nonNul(-4, 4), k = parmi([2, 3, -2]), col = Math.random() < 0.5;
      const x2 = k * x, y2 = col ? k * y : k * y + parmi([1, -1]);
      const det = x * y2 - y * x2;
      return oui(`Les vecteurs u⃗(${moins(x)} ; ${moins(y)}) et v⃗(${moins(x2)} ; ${moins(y2)}) sont-ils colinéaires ?`, col ? "Oui" : "Non", [col ? "Non" : "Oui"],
        `On calcule xy' − x'y = ${par(x)} × ${par(y2)} − ${par(x2)} × ${par(y)} = ${moins(det)}. ${col ? "C'est 0 : les vecteurs sont <b>colinéaires</b>." : "Ce n'est pas 0 : ils ne sont <b>pas colinéaires</b>."}`, "co-coordonnees");
    },
    parallelogramme() {
      const A = [hasard(-4, 4), hasard(-4, 4)], B = [hasard(-4, 4), hasard(-4, 4)], C = [hasard(-4, 4), hasard(-4, 4)];
      const D = [A[0] + C[0] - B[0], A[1] + C[1] - B[1]];
      return { comp: "co-coordonnees", defi: true, enonce: `A(${moins(A[0])} ; ${moins(A[1])}), B(${moins(B[0])} ; ${moins(B[1])}), C(${moins(C[0])} ; ${moins(C[1])}). Trouve D tel que ABCD soit un parallélogramme.`,
        type: "coeffs", modele: ["D (", " ; ", ")"], reponse: D, affiche: `(${moins(D[0])} ; ${moins(D[1])})`,
        explication: `ABCD parallélogramme ⇔ AD⃗ = BC⃗. BC⃗ (${moins(C[0] - B[0])} ; ${moins(C[1] - B[1])}), donc x<sub>D</sub> = ${moins(A[0])} + ${par(C[0] - B[0])} = ${moins(D[0])} et y<sub>D</sub> = ${moins(A[1])} + ${par(C[1] - B[1])} = ${moins(D[1])}. <b>D(${moins(D[0])} ; ${moins(D[1])})</b>.` };
    }
  };

  const DR = {
    coefficient() {
      const xa = hasard(-4, 3), xb = xa + hasard(1, 4), ya = hasard(-5, 5), yb = hasard(-5, 5);
      return { comp: "dr-droites", enonce: `A(${moins(xa)} ; ${moins(ya)}) et B(${moins(xb)} ; ${moins(yb)}). Calcule le <b>coefficient directeur</b> de la droite (AB).`, type: "nombre", reponse: (yb - ya) / (xb - xa), affiche: fracTexte(yb - ya, xb - xa),
        explication: `a = ${fr("y<sub>B</sub> − y<sub>A</sub>", "x<sub>B</sub> − x<sub>A</sub>")} = ${fr(moins(yb) + " − " + par(ya), moins(xb) + " − " + par(xa))} = <b>${fracHtml(yb - ya, xb - xa)}</b>.` };
    },
    equation() {
      const a = nonNul(-4, 4), b = hasard(-6, 6), xa = hasard(-3, 0), xb = xa + hasard(1, 3);
      const ya = a * xa + b, yb = a * xb + b;
      return { comp: "dr-droites", enonce: `Détermine une équation de la droite (AB) avec A(${moins(xa)} ; ${moins(ya)}) et B(${moins(xb)} ; ${moins(yb)}).`,
        type: "coeffs", modele: ["y = ", "x + ", ""], reponse: [a, b], affiche: `y = ${lin(a, b)}`,
        explication: `Coefficient directeur : a = ${fr(moins(yb) + " − " + par(ya), moins(xb) + " − " + par(xa))} = ${moins(a)}. Puis A est sur la droite : ${moins(ya)} = ${moins(a)} × ${par(xa)} + b, donc b = ${moins(b)}. Équation : <b>y = ${lin(a, b)}</b>.` };
    },
    appartient() {
      const a = nonNul(-3, 3), b = hasard(-5, 5), x = hasard(-3, 3), dedans = Math.random() < 0.5, y = a * x + b + (dedans ? 0 : parmi([1, -1, 2]));
      return oui(`Le point P(${moins(x)} ; ${moins(y)}) appartient-il à la droite d'équation y = ${lin(a, b)} ?`, dedans ? "Oui" : "Non", [dedans ? "Non" : "Oui"],
        `On remplace x par ${moins(x)} : ${moins(a)} × ${par(x)} ${signe(b)} = ${moins(a * x + b)}. ${dedans ? "On trouve bien y<sub>P</sub> : P est <b>sur</b> la droite." : `On ne trouve pas ${moins(y)} : P n'est <b>pas</b> sur la droite.`}`, "dr-droites");
    },
    parallele() {
      const a = nonNul(-4, 4), b = hasard(-5, 5), x = hasard(-3, 3), y = hasard(-5, 5), b2 = y - a * x;
      return { comp: "dr-droites", enonce: `Donne l'équation de la droite parallèle à (D) : y = ${lin(a, b)} passant par P(${moins(x)} ; ${moins(y)}).`,
        type: "coeffs", modele: ["y = ", "x + ", ""], reponse: [a, b2], affiche: `y = ${lin(a, b2)}`,
        explication: `Deux droites parallèles ont le <b>même coefficient directeur</b> : a = ${moins(a)}. Puis ${moins(y)} = ${moins(a)} × ${par(x)} + b donne b = ${moins(b2)}. <b>y = ${lin(a, b2)}</b>.` };
    },
    perpendiculaire() {
      const a = parmi([2, 3, 4, -2, -3, -1, 1, 5]);
      return { comp: "dr-droites", enonce: `Une droite a pour coefficient directeur ${moins(a)}. Quel est le coefficient directeur d'une droite <b>perpendiculaire</b> (repère orthonormé) ?`, type: "nombre", reponse: -1 / a, affiche: fracTexte(-1, a),
        explication: `Deux droites sont perpendiculaires si le produit de leurs coefficients directeurs vaut −1 : a × a' = −1, donc a' = ${fr(-1, moins(a))} = <b>${fracHtml(-1, a)}</b>.` };
    }
  };

  const ST = {
    moyenne() {
      const vals = melanger([6, 8, 10, 12, 14, 16]).slice(0, 4).sort((x, y) => x - y), eff = [hasard(1, 4), hasard(1, 4), hasard(1, 4), 0];
      eff[3] = 10 - eff[0] - eff[1] - eff[2]; if (eff[3] < 1) return ST.moyenne();
      const tot = vals.reduce((s, v, i) => s + v * eff[i], 0), m = tot / 10;
      return { comp: "st-stats", enonce: `Notes d'une classe de 10 élèves :<table class="vocab"><tr><td>Note</td>${vals.map(v => `<td>${v}</td>`).join("")}</tr><tr><td>Effectif</td>${eff.map(e => `<td>${e}</td>`).join("")}</tr></table>Calcule la <b>moyenne</b>.`,
        type: "nombre", reponse: m, affiche: dec(m),
        explication: `Moyenne = ${fr("somme des (note × effectif)", "effectif total")} = ${fr(vals.map((v, i) => v + "×" + eff[i]).join(" + "), 10)} = ${fr(tot, 10)} = <b>${dec(m)}</b>.` };
    },
    mediane() {
      const n = parmi([7, 9, 11]), l = Array.from({ length: n }, () => hasard(2, 20)), t = [...l].sort((a, b) => a - b), med = t[(n - 1) / 2];
      return { comp: "st-stats", enonce: `Voici les âges (en ans) de ${n} enfants d'une famille élargie : ${l.join(" ; ")}.<br>Détermine la <b>médiane</b>.`, type: "nombre", reponse: med, affiche: String(med),
        explication: `On range dans l'ordre croissant : ${t.join(" ; ")}. Il y a ${n} valeurs, la médiane est la ${(n + 1) / 2}e : <b>${med}</b>. Autant de valeurs en dessous qu'au-dessus.` };
    },
    angle() {
      const tot = parmi([36, 60, 72, 90, 120]), e = hasard(1, tot / 3) ;
      const a = e * 360 / tot;
      if (!Number.isInteger(a)) return ST.angle();
      return { comp: "st-stats", enonce: `Dans un collège, sur ${tot} élèves interrogés, ${e} préfèrent le football. Dans un diagramme circulaire, quel angle (en degrés) représente le football ?`, type: "nombre", reponse: a, affiche: a + "°",
        explication: `Angle = ${fr("effectif", "effectif total")} × 360° = ${fr(e, tot)} × 360° = <b>${a}°</b>.` };
    },
    frequence() {
      const tot = parmi([20, 25, 40, 50]), e = hasard(1, tot - 1), f = e / tot * 100;
      return { comp: "st-stats", enonce: `Sur ${tot} candidats d'un centre, ${e} sont admis. Quelle est la <b>fréquence</b> des admis, en % ?`, type: "nombre", reponse: f, affiche: dec(f) + " %",
        explication: `Fréquence = ${fr("effectif", "effectif total")} × 100 = ${fr(e, tot)} × 100 = <b>${dec(f)} %</b>.` };
    },
    cumul() {
      const vals = [10, 11, 12, 13, 14], eff = vals.map(() => hasard(1, 8)), k = hasard(1, 3), c = eff.slice(0, k + 1).reduce((s, x) => s + x, 0);
      return { comp: "st-stats", enonce: `Âges des élèves d'un club :<table class="vocab"><tr><td>Âge</td>${vals.map(v => `<td>${v}</td>`).join("")}</tr><tr><td>Effectif</td>${eff.map(e => `<td>${e}</td>`).join("")}</tr></table>Quel est l'<b>effectif cumulé croissant</b> de l'âge ${vals[k]} ?`,
        type: "nombre", reponse: c, affiche: String(c),
        explication: `On additionne les effectifs de toutes les valeurs inférieures ou égales à ${vals[k]} : ${eff.slice(0, k + 1).join(" + ")} = <b>${c}</b>. C'est le nombre d'élèves qui ont ${vals[k]} ans ou moins.` };
    },
    mode() {
      const vals = ["Attiéké", "Riz", "Foutou", "Placali", "Alloco"], eff = melanger([3, 5, 7, 9, 12]);
      const i = eff.indexOf(12);
      return oui(`Plat préféré de 36 élèves : ${vals.map((v, j) => v + " : " + eff[j]).join(", ")}. Quel est le <b>mode</b> de cette série ?`, vals[i], vals.filter((_, j) => j !== i).slice(0, 3),
        `Le mode est la modalité qui a le <b>plus grand effectif</b> : <b>${vals[i]}</b> (12 élèves).`, "st-stats");
    }
  };

  const SY = {
    resoudre() {
      const x = hasard(-5, 6), y = hasard(-5, 6);
      let a, b, c, d; do { a = nonNul(-3, 4); b = nonNul(-3, 4); c = nonNul(-3, 4); d = nonNul(-3, 4); } while (a * d - b * c === 0);
      const e = a * x + b * y, f = c * x + d * y;
      const eq = (p, q, r) => `${poly(0, p, 0, "x")} ${q < 0 ? "−" : "+"} ${Math.abs(q) === 1 ? "" : Math.abs(q)}y = ${moins(r)}`;
      return { comp: "sy-systemes", enonce: `Résous le système :<div class="calc">${eq(a, b, e)}<br>${eq(c, d, f)}</div>`, type: "coeffs", modele: ["x = ", " ; y = ", ""], reponse: [x, y], affiche: `x = ${moins(x)} ; y = ${moins(y)}`,
        explication: `<b>Méthode par combinaison</b> : on élimine x.<br>1) On multiplie la 1re équation par ${par(c)} et la 2e par ${par(a)} :<br>&nbsp;&nbsp;${moins(a * c)}x + ${par(b * c)}y = ${moins(c * e)}<br>&nbsp;&nbsp;${moins(a * c)}x + ${par(a * d)}y = ${moins(a * f)}<br>2) On soustrait membre à membre : (${moins(b * c)} − ${par(a * d)})y = ${moins(c * e)} − ${par(a * f)}, soit ${moins(b * c - a * d)}y = ${moins(c * e - a * f)}, donc <b>y = ${moins(y)}</b>.<br>3) On remplace y dans la 1re équation : ${moins(a)}x + ${par(b)} × ${par(y)} = ${moins(e)} ⇔ ${moins(a)}x = ${moins(e - b * y)} ⇔ <b>x = ${moins(x)}</b>.<br>4) Vérification : ${moins(a)}×${par(x)} + ${par(b)}×${par(y)} = ${moins(e)} ✓ et ${moins(c)}×${par(x)} + ${par(d)}×${par(y)} = ${moins(f)} ✓.` };
    },
    verifier() {
      const a = nonNul(-3, 3), b = nonNul(-3, 3), x = hasard(-4, 4), y = hasard(-4, 4), ok = Math.random() < 0.5, c = a * x + b * y + (ok ? 0 : parmi([1, -1, 2]));
      return oui(`Le couple (${moins(x)} ; ${moins(y)}) est-il solution de l'équation ${poly(0, a, 0, "x")} ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}y = ${moins(c)} ?`, ok ? "Oui" : "Non", [ok ? "Non" : "Oui"],
        `On remplace : ${moins(a)} × ${par(x)} + ${par(b)} × ${par(y)} = ${moins(a * x + b * y)}. ${ok ? "On trouve bien " + moins(c) + " : <b>oui</b>." : "On ne trouve pas " + moins(c) + " : <b>non</b>."}`, "sy-systemes");
    },
    probleme() {
      const p1 = 400, p2 = 500, x = hasard(4, 16), y = hasard(4, 16), L = x + y, P = p1 * x + p2 * y;
      return { comp: "sy-systemes", defi: true, enonce: `Pour la fête de fin d'année à Abengourou, les 3e commandent du <b>bissap</b> (${p1} F le litre) et du <b>gnamankou</b> (${p2} F le litre) : ${L} litres pour ${P} F en tout. Combien de litres de chaque ?`,
        type: "coeffs", modele: ["bissap : ", " L ; gnamankou : ", " L"], reponse: [x, y], affiche: `${x} L de bissap et ${y} L de gnamankou`,
        explication: `Soit x les litres de bissap et y ceux de gnamankou : x + y = ${L} et ${p1}x + ${p2}y = ${P}. On remplace x = ${L} − y : ${p1}(${L} − y) + ${p2}y = ${P} ⇔ ${p2 - p1}y = ${P - p1 * L} ⇔ y = ${y}, puis x = ${x}. <b>${x} L de bissap et ${y} L de gnamankou</b>.` };
    },
    demiPlan() {
      const a = nonNul(-3, 3), b = nonNul(-3, 3), c = hasard(-5, 5), x = hasard(-3, 3), y = hasard(-3, 3), v = a * x + b * y;
      const ok = v < c;
      return oui(`Le point M(${moins(x)} ; ${moins(y)}) est-il solution de l'inéquation ${poly(0, a, 0, "x")} ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}y < ${moins(c)} ?`, ok ? "Oui" : "Non", [ok ? "Non" : "Oui"],
        `On calcule ${moins(a)} × ${par(x)} + ${par(b)} × ${par(y)} = ${moins(v)}. ${ok ? `${moins(v)} < ${moins(c)} : <b>oui</b>, M est dans le demi-plan solution.` : `${moins(v)} n'est pas inférieur à ${moins(c)} : <b>non</b>.`}`, "sy-systemes");
    }
  };

  const AF = {
    image() {
      const a = nonNul(-5, 5), b = hasard(-8, 8), x = hasard(-5, 5);
      return { comp: "af-affines", enonce: `f est l'application affine définie par f(x) = ${lin(a, b)}. Calcule <b>f(${moins(x)})</b>.`, type: "nombre", reponse: a * x + b, affiche: moins(a * x + b),
        explication: `f(${moins(x)}) = ${moins(a)} × ${par(x)} ${signe(b)} = ${moins(a * x)} ${signe(b)} = <b>${moins(a * x + b)}</b>.` };
    },
    antecedent() {
      const a = nonNul(-5, 5), b = hasard(-8, 8), x = hasard(-5, 5), y = a * x + b;
      return { comp: "af-affines", enonce: `f(x) = ${lin(a, b)}. Trouve le nombre dont l'image par f est <b>${moins(y)}</b>.`, type: "nombre", reponse: x, affiche: moins(x),
        explication: `On résout ${lin(a, b)} = ${moins(y)} ⇔ ${moins(a)}x = ${moins(y - b)} ⇔ x = <b>${moins(x)}</b>.` };
    },
    determiner() {
      const a = nonNul(-4, 4), b = hasard(-6, 6), x1 = hasard(-3, 1), x2 = x1 + hasard(1, 4);
      return { comp: "af-affines", enonce: `f est une application affine telle que f(${moins(x1)}) = ${moins(a * x1 + b)} et f(${moins(x2)}) = ${moins(a * x2 + b)}. Détermine f(x).`,
        type: "coeffs", modele: ["f(x) = ", "x + ", ""], reponse: [a, b], affiche: `f(x) = ${lin(a, b)}`,
        explication: `a = ${fr("f(x₂) − f(x₁)", "x₂ − x₁")} = ${fr(moins(a * x2 + b) + " − " + par(a * x1 + b), moins(x2) + " − " + par(x1))} = ${moins(a)}. Puis b = f(${moins(x1)}) − a × ${par(x1)} = ${moins(b)}. <b>f(x) = ${lin(a, b)}</b>.` };
    },
    sens() {
      const a = parmi([-3, -2, -1, 1, 2, 3, 0]), b = hasard(-5, 5);
      const bon = a > 0 ? "croissante" : a < 0 ? "décroissante" : "constante";
      return oui(`L'application affine f(x) = ${a === 0 ? moins(b) : lin(a, b)} est :`, bon, ["croissante", "décroissante", "constante"].filter(x => x !== bon),
        `Le sens de variation dépend du coefficient a${a === 0 ? " (ici a = 0)" : " = " + moins(a)} : a > 0 croissante, a < 0 décroissante, a = 0 constante. Donc f est <b>${bon}</b>.`, "af-affines");
    },
    lineaire() {
      const a = nonNul(-5, 6), x1 = hasard(2, 6), x2 = hasard(2, 9);
      return { comp: "af-affines", enonce: `f est une application <b>linéaire</b> et f(${x1}) = ${moins(a * x1)}. Calcule f(${x2}).`, type: "nombre", reponse: a * x2, affiche: moins(a * x2),
        explication: `f linéaire : f(x) = ax. Avec f(${x1}) = ${moins(a * x1)}, a = ${fr(moins(a * x1), x1)} = ${moins(a)}. Donc f(${x2}) = ${moins(a)} × ${x2} = <b>${moins(a * x2)}</b>.` };
    },
    defiSono() {
      const h = parmi([4, 5, 6]), p1 = 5000, c = 2000 * h, p2 = 7000;
      return { comp: "af-affines", defi: true, enonce: `Pour la kermesse du lycée de Korhogo, la sono coûte ${p1} F l'heure + ${c} F de caution chez le fournisseur A, et ${p2} F l'heure chez le fournisseur B. À partir de combien d'heures A devient-il plus avantageux ?`,
        type: "nombre", reponse: h, affiche: h + " heures",
        explication: `Prix A : f(x) = ${p1}x + ${c} ; prix B : g(x) = ${p2}x. Égalité : ${p1}x + ${c} = ${p2}x ⇔ ${p2 - p1}x = ${c} ⇔ x = <b>${h} heures</b>. Au-delà de ${h} h, A coûte moins cher.` };
    }
  };

  const PY = {
    pyramide() {
      const c = hasard(2, 9), h = 3 * hasard(1, 5), V = c * c * h / 3;
      return { comp: "py-volumes", enonce: `Une pyramide a une base carrée de côté ${c} cm et une hauteur de ${h} cm. Calcule son <b>volume</b> (en cm³).`, type: "nombre", reponse: V, affiche: V + " cm³",
        explication: `V = ${fr("aire de la base × hauteur", 3)} = ${fr(c + "² × " + h, 3)} = ${fr(c * c * h, 3)} = <b>${V} cm³</b>.` };
    },
    cone() {
      const r = hasard(2, 6), h = 3 * hasard(1, 4), k = r * r * h / 3;
      return { comp: "py-volumes", enonce: `Un cône de révolution a un rayon de base de ${r} cm et une hauteur de ${h} cm. Donne son volume sous la forme k × π.`, type: "coeffs", modele: ["V = ", " π cm³"], reponse: [k], affiche: `${k}π cm³`,
        explication: `V = ${fr("π × r² × h", 3)} = ${fr("π × " + r * r + " × " + h, 3)} = <b>${k}π cm³</b> (environ ${dec(Math.round(k * Math.PI * 10) / 10)} cm³).` };
    },
    reduction() {
      const k = parmi([[1, 2], [1, 3], [2, 3]]), V = k[1] ** 3 * hasard(1, 6) * 3, v = V * k[0] ** 3 / k[1] ** 3;
      return { comp: "py-volumes", enonce: `Une pyramide a un volume de ${V} cm³. On la coupe par un plan parallèle à la base : la petite pyramide obtenue est une réduction de coefficient ${fr(k[0], k[1])}. Calcule son volume.`,
        type: "nombre", reponse: v, affiche: v + " cm³",
        explication: `Dans une réduction de coefficient k, les longueurs sont multipliées par k, les aires par k² et les <b>volumes par k³</b> : v = ${V} × (${fr(k[0], k[1])})³ = ${V} × ${fr(k[0] ** 3, k[1] ** 3)} = <b>${v} cm³</b>.` };
    },
    generatrice() {
      const [a, b, c] = parmi(TRIPLETS.slice(0, 5));
      return { comp: "py-volumes", enonce: `Un cône a un rayon de ${a} cm et une hauteur de ${b} cm. Calcule la longueur de sa <b>génératrice</b>.`, type: "nombre", reponse: c, affiche: c + " cm",
        explication: `La hauteur, le rayon et la génératrice forment un triangle rectangle : g² = ${a}² + ${b}² = ${c * c}, donc g = <b>${c} cm</b>.` };
    },
    faces() {
      const n = parmi([3, 4, 5, 6, 8]), nom = { 3: "triangulaire", 4: "carrée", 5: "pentagonale", 6: "hexagonale", 8: "octogonale" }[n];
      return { comp: "py-volumes", enonce: `Combien de <b>faces</b> a une pyramide à base ${nom} ?`, type: "nombre", reponse: n + 1, affiche: String(n + 1),
        explication: `Une pyramide a <b>1 base</b> et autant de faces latérales (triangles) que la base a de côtés : 1 + ${n} = <b>${n + 1} faces</b>.` };
    }
  };

  const COURS2 = {
    triangle: `<div class="regle"><b>Pythagore</b>Si ABC est rectangle en A, alors BC² = AB² + AC² (BC est l'hypoténuse, le plus grand côté).</div>
      <div class="regle"><b>Réciproque</b>Si BC² = AB² + AC², alors ABC est rectangle en A. On compare le carré du plus grand côté à la somme des deux autres carrés.</div>
      <div class="regle"><b>Trigonométrie (angle aigu B̂)</b>cos B̂ = ${fr("côté adjacent", "hypoténuse")} · sin B̂ = ${fr("côté opposé", "hypoténuse")} · tan B̂ = ${fr("côté opposé", "côté adjacent")}<br>Retiens <b>SOH CAH TOA</b>.</div>
      <div class="regle"><b>Formules utiles</b>cos²x + sin²x = 1 · tan x = ${fr("sin x", "cos x")} · sin(90° − x) = cos x.</div>
      <div class="regle"><b>Propriété déduite de l'aire</b>Si H est le pied de la hauteur issue de A : AH × BC = AB × AC.</div>`,
    calcul: `<div class="regle"><b>Intervalles</b>−2 ≤ x ≤ 5 s'écrit [−2 ; 5] ; −2 < x < 5 s'écrit ]−2 ; 5[ ; x ≥ 3 s'écrit [3 ; +∞[.</div>
      <div class="regle"><b>Amplitude et centre de [a ; b]</b>Amplitude : b − a. Centre : ${fr("a + b", 2)}.</div>
      <div class="regle"><b>Intersection et réunion</b>A ∩ B : les nombres dans les deux. A ∪ B : les nombres dans l'un <b>ou</b> l'autre. Dessine toujours une droite graduée.</div>
      <div class="regle"><b>Comparer</b>Deux nombres positifs sont dans le même ordre que leurs carrés. Deux nombres strictement positifs sont dans l'ordre <b>inverse</b> de leurs inverses.</div>
      <div class="regle"><b>Encadrer</b>On peut additionner deux encadrements membre à membre. Pour une différence, on encadre d'abord l'opposé. Pour un produit de positifs, on multiplie.</div>`,
    angles: `${figureCercle()}
      <div class="regle"><b>Angle inscrit</b>Son sommet est sur le cercle et ses côtés coupent le cercle (AĈB). L'angle au centre associé a son sommet en O (AÔB).</div>
      <div class="regle"><b>Propriété</b>Un angle inscrit mesure <b>la moitié</b> de l'angle au centre qui intercepte le même arc : AĈB = ½ AÔB.</div>
      <div class="regle"><b>Même arc</b>Deux angles inscrits qui interceptent le même arc ont la même mesure.</div>
      <div class="regle"><b>Cas du diamètre</b>Un angle inscrit qui intercepte un demi-cercle est droit (90°).</div>`,
    vecteurs: `<div class="regle"><b>Chasles</b>AB⃗ + BC⃗ = AC⃗. Et AB⃗ − AC⃗ = AB⃗ + CA⃗ = CB⃗.</div>
      <div class="regle"><b>Produit par un réel</b>k·AB⃗ a la même direction que AB⃗, le même sens si k > 0, le sens contraire si k < 0, et pour longueur |k| × AB.</div>
      <div class="regle"><b>Colinéarité</b>u⃗ et v⃗ sont colinéaires si v⃗ = k·u⃗. Si AB⃗ = k·AC⃗, alors A, B, C sont alignés. Si AB⃗ = k·CD⃗, alors (AB) // (CD).</div>
      <div class="regle"><b>Milieu</b>I milieu de [AB] ⇔ AI⃗ = IB⃗ ⇔ IA⃗ + IB⃗ = 0⃗.</div>`,
    equations: `<div class="regle"><b>Équations</b>ax + b = 0 ⇔ x = −b/a. Pour ax + b = cx + d, on regroupe les x d'un côté et les nombres de l'autre.</div>
      <div class="regle"><b>Produit nul</b>(ax + b)(cx + d) = 0 ⇔ ax + b = 0 ou cx + d = 0.</div>
      <div class="regle"><b>Inéquations</b>On résout comme une équation, mais si on multiplie ou divise par un nombre <b>négatif</b>, on <b>change le sens</b> de l'inégalité. −2x > 6 ⇔ x < −3.</div>
      <div class="regle"><b>Solutions sous forme d'intervalle</b>x ≤ 4 : ]−∞ ; 4]. Système : on prend l'<b>intersection</b> des deux ensembles.</div>`,
    coordonnees: `<div class="regle"><b>Vecteur</b>AB⃗ (x<sub>B</sub> − x<sub>A</sub> ; y<sub>B</sub> − y<sub>A</sub>).</div>
      <div class="regle"><b>Milieu</b>I (${fr("x<sub>A</sub> + x<sub>B</sub>", 2)} ; ${fr("y<sub>A</sub> + y<sub>B</sub>", 2)}).</div>
      <div class="regle"><b>Distance (repère orthonormé)</b>AB = ${rac("(x<sub>B</sub> − x<sub>A</sub>)² + (y<sub>B</sub> − y<sub>A</sub>)²")}.</div>
      <div class="regle"><b>Opérations</b>u⃗ + v⃗ (x + x' ; y + y') · k·u⃗ (kx ; ky).</div>
      <div class="regle"><b>Colinéarité</b>u⃗(x ; y) et v⃗(x' ; y') sont colinéaires ⇔ xy' − x'y = 0.</div>`,
    droites: `<div class="regle"><b>Équation réduite</b>Une droite non verticale a une équation y = ax + b : a est le <b>coefficient directeur</b>, b l'<b>ordonnée à l'origine</b>.</div>
      <div class="regle"><b>Coefficient directeur</b>a = ${fr("y<sub>B</sub> − y<sub>A</sub>", "x<sub>B</sub> − x<sub>A</sub>")}.</div>
      <div class="regle"><b>Parallèles et perpendiculaires</b>Droites parallèles : même a. Perpendiculaires (repère orthonormé) : a × a' = −1.</div>
      <div class="regle"><b>Point sur une droite</b>On remplace x par l'abscisse du point : si on trouve son ordonnée, il est sur la droite.</div>`,
    stats: `<div class="regle"><b>Moyenne</b>${fr("somme des (valeur × effectif)", "effectif total")}. Pour des classes, on utilise le <b>centre</b> de chaque classe.</div>
      <div class="regle"><b>Médiane</b>Valeur qui partage la série rangée en deux groupes de même effectif. Avec n valeurs (n impair), c'est la ${fr("n + 1", 2)}-ième.</div>
      <div class="regle"><b>Mode</b>Valeur (ou classe) qui a le plus grand effectif.</div>
      <div class="regle"><b>Effectifs cumulés croissants</b>On additionne les effectifs des valeurs inférieures ou égales.</div>
      <div class="regle"><b>Diagramme circulaire</b>Angle = ${fr("effectif", "effectif total")} × 360°.</div>`,
    systemes: `<div class="regle"><b>Système de deux équations</b>On cherche le couple (x ; y) qui vérifie les deux équations à la fois.</div>
      <div class="regle"><b>Substitution</b>On exprime x (ou y) dans une équation, puis on le remplace dans l'autre.</div>
      <div class="regle"><b>Combinaison</b>On multiplie les équations pour que les x (ou les y) s'éliminent en additionnant.</div>
      <div class="regle"><b>Toujours vérifier</b>On remplace x et y dans les deux équations de départ.</div>
      <div class="regle"><b>Inéquation dans ℝ × ℝ</b>Ses solutions forment un demi-plan limité par la droite ax + by = c. On teste un point (souvent l'origine) pour savoir quel côté garder.</div>`,
    affines: `<div class="regle"><b>Définition</b>f(x) = ax + b est une application affine. Si b = 0, f(x) = ax est <b>linéaire</b> (proportionnalité).</div>
      <div class="regle"><b>Représentation</b>Une droite ; celle d'une application linéaire passe par l'origine.</div>
      <div class="regle"><b>Sens de variation</b>a > 0 : croissante ; a < 0 : décroissante ; a = 0 : constante.</div>
      <div class="regle"><b>Trouver f</b>a = ${fr("f(x₂) − f(x₁)", "x₂ − x₁")}, puis b = f(x₁) − a·x₁.</div>`,
    pyramides: `<div class="regle"><b>Volume</b>Pyramide et cône : V = ${fr("aire de la base × hauteur", 3)}. Cône : V = ${fr("π r² h", 3)}.</div>
      <div class="regle"><b>Génératrice du cône</b>g² = r² + h² (Pythagore).</div>
      <div class="regle"><b>Section parallèle à la base</b>On obtient une réduction de coefficient k : longueurs × k, aires × k², volumes × k³.</div>
      <div class="regle"><b>Faces</b>Une pyramide à base de n côtés a n + 1 faces.</div>`
  };

  const niv4 = (gA, gB, gC, gD) => [N("decouverte", "Découverte", 5, 3, gA, "Les premières règles"), N("entrainement", "Entraînement", 8, 6, gB),
    N("maitrise", "Maîtrise", 10, 8, gC, "8 bonnes réponses sur 10 pour maîtriser"), N("defi", "Défi BEPC", 3, 2, gD, "Situations comme à l'examen")];
  const CHAP_MATHS2 = [
    { id: "triangle", num: "4", titre: "Triangle rectangle", periode: "Octobre – novembre", cours: COURS2.triangle,
      niveaux: niv4([TR.hypotenuse, TR.cote, TR.reciproque], [TR.hypotenuse, TR.cote, TR.reciproque, TR.rapport, TR.complementaire], Object.values(TR).filter(g => g !== TR.defiEchelle), [TR.defiEchelle, TR.hypRacine, TR.hauteur]) },
    { id: "calcul", num: "5", titre: "Calcul numérique", periode: "Novembre", cours: COURS2.calcul,
      niveaux: niv4([CN.notation, CN.amplitude, CN.entiers], [CN.notation, CN.amplitude, CN.intersection, CN.entiers, CN.comparer], [CN.notation, CN.amplitude, CN.intersection, CN.comparer, CN.encadrerSomme, CN.entiers, CN.arrondi], [CN.defiTerrain, CN.encadrerSomme, CN.comparer]) },
    { id: "angles", num: "6", titre: "Angles inscrits", periode: "Décembre", cours: COURS2.angles,
      niveaux: niv4([AI.inscrit, AI.centre], [AI.inscrit, AI.centre, AI.memeArc, AI.diametre], Object.values(AI), [AI.isocele, AI.diametre, AI.memeArc]) },
    { id: "vecteurs", num: "7", titre: "Vecteurs", periode: "Décembre – janvier", cours: COURS2.vecteurs,
      niveaux: niv4([VE.chasles, VE.milieu], [VE.chasles, VE.produit, VE.milieu, VE.alignement], Object.values(VE), [VE.alignement, VE.parallele, VE.chasles]) },
    { id: "equations", num: "8", titre: "Équations et inéquations dans ℝ", periode: "Janvier", cours: COURS2.equations,
      niveaux: niv4([EI.simple, EI.deuxMembres], [EI.simple, EI.deuxMembres, EI.produit, EI.inequation], [EI.simple, EI.deuxMembres, EI.produit, EI.inequation, EI.systeme], [EI.defiCars, EI.systeme, EI.inequation]) },
    { id: "coordonnees", num: "9", titre: "Coordonnées de vecteurs", periode: "Janvier – février", cours: COURS2.coordonnees,
      niveaux: niv4([CO.vecteur, CO.milieu], [CO.vecteur, CO.milieu, CO.distance, CO.combinaison], Object.values(CO).filter(g => g !== CO.parallelogramme), [CO.parallelogramme, CO.colineaires, CO.distance]) },
    { id: "droites", num: "10", titre: "Équations de droites", periode: "Février", cours: COURS2.droites,
      niveaux: niv4([DR.coefficient, DR.appartient], [DR.coefficient, DR.appartient, DR.equation, DR.parallele], Object.values(DR), [DR.equation, DR.parallele, DR.perpendiculaire]) },
    { id: "stats", num: "11", titre: "Statistique", periode: "Février – mars", cours: COURS2.stats,
      niveaux: niv4([ST.mode, ST.frequence, ST.moyenne], [ST.moyenne, ST.mediane, ST.frequence, ST.cumul, ST.mode], [ST.moyenne, ST.mediane, ST.frequence, ST.cumul, ST.mode, ST.angle], [ST.angle, ST.moyenne, ST.mediane]) },
    { id: "systemes", num: "12", titre: "Équations et inéquations dans ℝ × ℝ", periode: "Mars", cours: COURS2.systemes,
      niveaux: niv4([SY.verifier, SY.demiPlan], [SY.verifier, SY.resoudre, SY.demiPlan], [SY.verifier, SY.resoudre, SY.demiPlan, SY.probleme], [SY.probleme, SY.resoudre, SY.probleme]) },
    { id: "affines", num: "13", titre: "Applications affines", periode: "Mars – avril", cours: COURS2.affines,
      niveaux: niv4([AF.image, AF.sens], [AF.image, AF.antecedent, AF.sens, AF.lineaire], [AF.image, AF.antecedent, AF.sens, AF.lineaire, AF.determiner], [AF.defiSono, AF.determiner, AF.lineaire]) },
    { id: "pyramides", num: "14", titre: "Pyramides et cônes", periode: "Avril", cours: COURS2.pyramides,
      niveaux: niv4([PY.faces, PY.pyramide], [PY.pyramide, PY.cone, PY.faces, PY.generatrice], Object.values(PY), [PY.reduction, PY.cone, PY.generatrice]) }
  ];
  const COMP_MATHS2 = { "tr-pythagore": "Pythagore", "tr-reciproque": "Réciproque de Pythagore", "tr-trigo": "Trigonométrie", "cn-intervalles": "Intervalles", "cn-comparer": "Comparer des nombres",
    "cn-encadrer": "Encadrer, arrondir", "ai-angles": "Angles inscrits", "ve-vecteurs": "Vecteurs", "ei-equations": "Équations dans ℝ", "ei-inequations": "Inéquations dans ℝ",
    "co-coordonnees": "Coordonnées de vecteurs", "dr-droites": "Équations de droites", "st-stats": "Statistique", "sy-systemes": "Systèmes dans ℝ × ℝ", "af-affines": "Applications affines", "py-volumes": "Pyramides et cônes" };
