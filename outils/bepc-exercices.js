  // =========================================================
  // Outils mathématiques
  // =========================================================
  const hasard = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const parmi = l => l[Math.floor(Math.random() * l.length)];
  const nonNul = (a, b) => { let x = 0; while (x === 0) x = hasard(a, b); return x; };
  const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  const melanger = l => { const c = [...l]; for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };
  const moins = n => (n < 0 ? "−" + Math.abs(n) : String(n));                 // vrai signe moins
  const par = n => (n < 0 ? "(" + moins(n) + ")" : String(n));               // parenthèses si négatif
  const signe = n => (n < 0 ? " − " + Math.abs(n) : " + " + n);               // « + 3 » ou « − 3 »
  function reduireFrac(n, d) { if (d < 0) { n = -n; d = -d; } const g = pgcd(n, d); return [n / g, d / g]; }
  function fracTexte(n, d) { [n, d] = reduireFrac(n, d); return d === 1 ? moins(n) : moins(n) + "/" + d; }
  function fracHtml(n, d) {
    [n, d] = reduireFrac(n, d);
    if (d === 1) return moins(n);
    return (n < 0 ? "−" : "") + `<span class="fr"><span>${Math.abs(n)}</span><span>${d}</span></span>`;
  }
  const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
  const rac = x => `√<span class="rad">${x}</span>`;
  // ax² + bx + c écrit proprement
  function poly(a, b, c, v = "x") {
    const t = [];
    if (a) t.push((a === 1 ? "" : a === -1 ? "−" : moins(a)) + v + "²");
    if (b) t.push((t.length ? (b < 0 ? " − " : " + ") : (b < 0 ? "−" : "")) + (Math.abs(b) === 1 ? "" : Math.abs(b)) + v);
    if (c || !t.length) t.push((t.length ? (c < 0 ? " − " : " + ") : (c < 0 ? "−" : "")) + Math.abs(c));
    return t.join("");
  }
  const lin = (a, b, v = "x") => poly(0, a, b, v);                           // ax + b
  function lireNombre(s) {
    if (s == null) return NaN;
    s = String(s).replace(/\s/g, "").replace(/−/g, "-").replace(/,/g, ".");
    if (!s) return NaN;
    if (/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(s)) { const [a, b] = s.split("/").map(Number); return b ? a / b : NaN; }
    return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : NaN;
  }
  const egal = (a, b) => Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(b));
  const carreLibre = m => { for (let k = 2; k * k <= m; k++) if (m % (k * k) === 0) return false; return true; };

  // Une question : { comp (compétence), enonce, type, reponse, explication, figure?, choix?, modele? }
  // types : "nombre" | "deux" (deux solutions) | "qcm" | "coeffs" (plusieurs cases dans un modèle)

  // =========================================================
  // Bases de 4e
  // =========================================================
  const B = {
    fractions() {
      const b = parmi([2, 3, 4, 5, 6]), d = parmi([3, 4, 6, 8, 9, 10].filter(x => x !== b));
      const a = nonNul(1, b + 3), c = nonNul(1, d + 3), op = parmi(["+", "−"]);
      const n = op === "+" ? a * d + c * b : a * d - c * b, den = b * d;
      return { comp: "b-fractions", enonce: `Calcule et donne le résultat sous forme de fraction simplifiée :<div class="calc">${fr(a, b)} ${op} ${fr(c, d)}</div>`,
        type: "nombre", reponse: n / den, affiche: fracTexte(n, den),
        explication: `On met au même dénominateur ${den} : ${fr(a * d, den)} ${op} ${fr(c * b, den)} = ${fr(n, den)}, puis on simplifie : <b>${fracHtml(n, den)}</b>.` };
    },
    relatifs() {
      const a = nonNul(-9, 9), b = nonNul(-9, 9), c = nonNul(-12, 12);
      const r = a * b - c;
      return { comp: "b-relatifs", enonce: `Calcule :<div class="calc">${moins(a)} × ${par(b)} − ${par(c)}</div>`, type: "nombre", reponse: r, affiche: moins(r),
        explication: `On commence par la multiplication : ${moins(a)} × ${par(b)} = ${moins(a * b)}. Puis ${moins(a * b)} − ${par(c)} = ${moins(a * b)} ${c < 0 ? "+ " + Math.abs(c) : "− " + c} = <b>${moins(r)}</b>.` };
    },
    priorites() {
      const a = hasard(2, 20), b = hasard(2, 9), c = hasard(2, 9), d = hasard(1, 15);
      const r = a + b * c - d;
      return { comp: "b-priorites", enonce: `Calcule en respectant les priorités :<div class="calc">${a} + ${b} × ${c} − ${d}</div>`, type: "nombre", reponse: r, affiche: moins(r),
        explication: `La multiplication passe avant : ${b} × ${c} = ${b * c}. Puis ${a} + ${b * c} − ${d} = <b>${moins(r)}</b>.` };
    },
    equation() {
      const a = nonNul(-6, 7), x = nonNul(-8, 8), b = hasard(-12, 12), c = a * x + b;
      return { comp: "b-equation", enonce: `Résous l'équation :<div class="calc">${lin(a, b)} = ${moins(c)}</div>x = ?`, type: "nombre", reponse: x, affiche: moins(x),
        explication: `${lin(a, 0)} = ${moins(c)} ${b < 0 ? "+ " + Math.abs(b) : "− " + b} = ${moins(c - b)}, donc x = ${fr(moins(c - b), par(a))} = <b>${moins(x)}</b>.` };
    },
    developper() {
      const k = nonNul(-6, 7), a = nonNul(-9, 9);
      return { comp: "b-developper", enonce: `Développe et réduis :<div class="calc">${moins(k)}(x${signe(a)})</div>`, type: "coeffs",
        modele: ["", "x +", ""], reponse: [k, k * a], affiche: lin(k, k * a),
        explication: `On distribue ${moins(k)} : ${moins(k)} × x + ${moins(k)} × ${par(a)} = <b>${lin(k, k * a)}</b>.` };
    },
    puissances10() {
      const a = hasard(-6, 8), b = hasard(-6, 8);
      return { comp: "b-puissances", enonce: `Complète :<div class="calc">10<sup>${moins(a)}</sup> × 10<sup>${moins(b)}</sup> = 10<sup>?</sup></div>`, type: "nombre", reponse: a + b, affiche: moins(a + b),
        explication: `On additionne les exposants : ${moins(a)} + ${par(b)} = <b>${moins(a + b)}</b>.` };
    }
  };

  // =========================================================
  // Leçon 1 : Calcul littéral
  // =========================================================
  const L = {
    puissances() {
      const a = parmi([2, 3, 5, 7]), m = nonNul(-5, 6), n = nonNul(-5, 6);
      const cas = hasard(0, 2);
      if (cas === 0) return { comp: "l-puissances", enonce: `Complète :<div class="calc">${a}<sup>${moins(m)}</sup> × ${a}<sup>${moins(n)}</sup> = ${a}<sup>?</sup></div>`, type: "nombre", reponse: m + n, affiche: moins(m + n),
        explication: `a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> : ${moins(m)} + ${par(n)} = <b>${moins(m + n)}</b>.` };
      if (cas === 1) return { comp: "l-puissances", enonce: `Complète :<div class="calc">${fr(a + "<sup>" + moins(m) + "</sup>", a + "<sup>" + moins(n) + "</sup>")} = ${a}<sup>?</sup></div>`, type: "nombre", reponse: m - n, affiche: moins(m - n),
        explication: `${fr("a<sup>m</sup>", "a<sup>n</sup>")} = a<sup>m−n</sup> : ${moins(m)} − ${par(n)} = <b>${moins(m - n)}</b>.` };
      const p = hasard(2, 4);
      return { comp: "l-puissances", enonce: `Complète :<div class="calc">(${a}<sup>${moins(m)}</sup>)<sup>${p}</sup> = ${a}<sup>?</sup></div>`, type: "nombre", reponse: m * p, affiche: moins(m * p),
        explication: `(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup> : ${moins(m)} × ${p} = <b>${moins(m * p)}</b>.` };
    },
    puissanceNegative() {
      const a = parmi([2, 3, 4, 5, 10]), n = hasard(1, 3), v = Math.pow(a, n);
      return { comp: "l-puissances", enonce: `Écris sous forme de fraction :<div class="calc">${a}<sup>−${n}</sup></div>`, type: "nombre", reponse: 1 / v, affiche: "1/" + v,
        explication: `a<sup>−n</sup> = ${fr(1, "a<sup>n</sup>")}, donc ${a}<sup>−${n}</sup> = ${fr(1, a + "<sup>" + n + "</sup>")} = <b>${fr(1, v)}</b>.` };
    },
    valeur() {
      const a = nonNul(-4, 4), b = hasard(-6, 6), c = hasard(-9, 9), x = nonNul(-4, 4);
      const r = a * x * x + b * x + c;
      return { comp: "l-valeur", enonce: `Calcule la valeur de <b>${poly(a, b, c)}</b> pour <b>x = ${moins(x)}</b>.`, type: "nombre", reponse: r, affiche: moins(r),
        explication: `On remplace x par ${par(x)} : ${moins(a)} × ${par(x)}² ${b ? (b < 0 ? "− " + Math.abs(b) : "+ " + b) + " × " + par(x) : ""} ${c ? signe(c) : ""} = ${moins(a)} × ${x * x}${b ? signe(b * x) : ""}${c ? signe(c) : ""} = <b>${moins(r)}</b>.<br>Attention : ${par(x)}² = ${x * x}, un carré est toujours positif.` };
    },
    identites() {
      const a = hasard(1, 9), k = hasard(1, 4), cas = hasard(0, 3);
      if (cas === 0) return { comp: "l-developper", enonce: `Développe et réduis :<div class="calc">(${k === 1 ? "" : k}x + ${a})²</div>`, type: "coeffs", modele: ["", "x² +", "x +", ""],
        reponse: [k * k, 2 * k * a, a * a], affiche: poly(k * k, 2 * k * a, a * a),
        explication: `(a + b)² = a² + 2ab + b² avec a = ${k === 1 ? "x" : k + "x"} et b = ${a} : ${k === 1 ? "x²" : "(" + k + "x)²"} + 2 × ${k === 1 ? "x" : k + "x"} × ${a} + ${a}² = <b>${poly(k * k, 2 * k * a, a * a)}</b>.` };
      if (cas === 1) return { comp: "l-developper", enonce: `Développe et réduis :<div class="calc">(${k === 1 ? "" : k}x − ${a})²</div>`, type: "coeffs", modele: ["", "x² +", "x +", ""],
        reponse: [k * k, -2 * k * a, a * a], affiche: poly(k * k, -2 * k * a, a * a),
        explication: `(a − b)² = a² − 2ab + b² : ${k === 1 ? "x²" : "(" + k + "x)²"} − 2 × ${k === 1 ? "x" : k + "x"} × ${a} + ${a}² = <b>${poly(k * k, -2 * k * a, a * a)}</b>.` };
      if (cas === 2) return { comp: "l-developper", enonce: `Développe et réduis :<div class="calc">(${k === 1 ? "" : k}x + ${a})(${k === 1 ? "" : k}x − ${a})</div>`, type: "coeffs", modele: ["", "x² +", "x +", ""],
        reponse: [k * k, 0, -a * a], affiche: poly(k * k, 0, -a * a),
        explication: `(a + b)(a − b) = a² − b² : ${k === 1 ? "x²" : "(" + k + "x)²"} − ${a}² = <b>${poly(k * k, 0, -a * a)}</b>. Le terme en x vaut 0.` };
      const b = nonNul(-7, 7), c = nonNul(-7, 7);
      return { comp: "l-developper", enonce: `Développe et réduis :<div class="calc">(x${signe(b)})(x${signe(c)})</div>`, type: "coeffs", modele: ["", "x² +", "x +", ""],
        reponse: [1, b + c, b * c], affiche: poly(1, b + c, b * c),
        explication: `On distribue chaque terme : x × x + x × ${par(c)} + ${moins(b)} × x + ${moins(b)} × ${par(c)} = x² ${signe(c)}x ${signe(b)}x ${signe(b * c)} = <b>${poly(1, b + c, b * c)}</b>.` };
    },
    factoriserIdentite() {
      const a = hasard(2, 9), k = hasard(1, 3), cas = hasard(0, 2);
      const X = k === 1 ? "x" : k + "x";
      let expr, bon, faux;
      if (cas === 0) { expr = poly(k * k, 2 * k * a, a * a); bon = `(${X} + ${a})²`; faux = [`(${X} − ${a})²`, `(${X} + ${a})(${X} − ${a})`, `(${X} + ${2 * a})²`]; }
      else if (cas === 1) { expr = poly(k * k, -2 * k * a, a * a); bon = `(${X} − ${a})²`; faux = [`(${X} + ${a})²`, `(${X} + ${a})(${X} − ${a})`, `(${X} − ${a * a})²`]; }
      else { expr = poly(k * k, 0, -a * a); bon = `(${X} − ${a})(${X} + ${a})`; faux = [`(${X} − ${a})²`, `(${X} + ${a})²`, `(${X} − ${a * a})(${X} + ${a * a})`]; }
      return { comp: "l-factoriser", enonce: `Quelle est la factorisation de <b>${expr}</b> ?`, type: "qcm", choix: melanger([bon, ...faux]), reponse: bon,
        explication: cas === 2 ? `On reconnaît a² − b² = (a − b)(a + b) avec a = ${X} et b = ${a}.` : `On reconnaît ${cas === 0 ? "a² + 2ab + b² = (a + b)²" : "a² − 2ab + b² = (a − b)²"} avec a = ${X} et b = ${a} : 2 × ${X} × ${a} = ${2 * k * a}x.` };
    },
    factoriserCommun() {
      const a = nonNul(-6, 6), b = nonNul(1, 4), c = nonNul(-6, 6), d = nonNul(1, 4), e = nonNul(-6, 6);
      const F = `(x${signe(a)})`;
      const bon = `${F}(${lin(b + d, c + e)})`;
      const faux = [`${F}(${lin(b - d, c - e)})`, `${F}(${lin(b * d, c * e)})`, `(x${signe(-a)})(${lin(b + d, c + e)})`];
      return { comp: "l-factoriser", enonce: `Factorise :<div class="calc">${F}(${lin(b, c)}) + ${F}(${lin(d, e)})</div>`, type: "qcm", choix: melanger([...new Set([bon, ...faux])].slice(0, 4)), reponse: bon,
        explication: `Le facteur commun est ${F}. On l'écrit devant et on additionne ce qui reste : ${F}[(${lin(b, c)}) + (${lin(d, e)})] = <b>${bon}</b>.` };
    },
    produitNul() {
      const a = nonNul(1, 5), b = nonNul(-9, 9), c = nonNul(1, 5), d = nonNul(-9, 9);
      if (-b / a === -d / c) return L.produitNul();
      return { comp: "l-produitnul", enonce: `Résous l'équation :<div class="calc">(${lin(a, b)})(${lin(c, d)}) = 0</div>Donne les deux solutions.`, type: "deux",
        reponse: [-b / a, -d / c], affiche: fracTexte(-b, a) + " et " + fracTexte(-d, c),
        explication: `Un produit est nul si l'un de ses facteurs est nul :<br>${lin(a, b)} = 0 donne x = ${fracHtml(-b, a)} ; ${lin(c, d)} = 0 donne x = ${fracHtml(-d, c)}.` };
    },
    memeCarre() {
      const a = hasard(2, 12);
      return { comp: "l-produitnul", enonce: `Résous l'équation :<div class="calc">x² = ${a * a}</div>Donne les deux solutions.`, type: "deux", reponse: [a, -a], affiche: `${a} et −${a}`,
        explication: `Deux nombres ont le même carré ${a * a} : ${a} et −${a}, car ${a}² = (−${a})² = ${a * a}.` };
    },
    fractionRationnelle() {
      const a = nonNul(-8, 8), b = nonNul(1, 5), c = nonNul(-10, 10);
      return { comp: "l-fraction", enonce: `La fraction rationnelle <b>${fr("x" + signe(a), lin(b, c))}</b> existe pour toutes les valeurs de x sauf une. Laquelle ?`, type: "nombre",
        reponse: -c / b, affiche: fracTexte(-c, b),
        explication: `Une fraction existe si son dénominateur n'est pas nul. ${lin(b, c)} = 0 donne x = ${fracHtml(-c, b)}. Elle existe donc pour <b>x ≠ ${fracHtml(-c, b)}</b>.` };
    },
    defiTerrain() {
      const a = hasard(2, 8), b = hasard(1, 6);
      const lieu = parmi(["à Daloa", "à Bouaké", "à Yamoussoukro", "à Korhogo", "à Abidjan"]);
      return { comp: "l-developper", defi: true,
        enonce: `<b>Situation.</b> Le collège ${lieu} agrandit son jardin, carré de côté x mètres : on ajoute ${a} m à la longueur et on retire ${b} m à la largeur.<br>Écris l'aire du nouveau jardin (x + ${a})(x − ${b}) sous forme développée.`,
        type: "coeffs", modele: ["", "x² +", "x +", ""], reponse: [1, a - b, -a * b], affiche: poly(1, a - b, -a * b),
        explication: `(x + ${a})(x − ${b}) = x² − ${b}x + ${a}x − ${a * b} = <b>${poly(1, a - b, -a * b)}</b> (en m²).` };
    }
  };

  // =========================================================
  // Leçon 2 : Propriétés de Thalès dans un triangle
  // =========================================================
  function figureThales(val) {
    // A en haut, B et C en bas, M sur [AB], N sur [AC], (MN) // (BC)
    const A = [150, 20], B = [30, 190], C = [280, 190], t = val.t;
    const M = [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t], N = [A[0] + (C[0] - A[0]) * t, A[1] + (C[1] - A[1]) * t];
    const milieu = (P, Q, dx = 0, dy = 0) => [(P[0] + Q[0]) / 2 + dx, (P[1] + Q[1]) / 2 + dy];
    const etiquette = (txt, [x, y], nom, ancre) => txt ? `<text x="${x}" y="${y}" class="lg" text-anchor="${ancre}">${nom} = ${txt}</text>` : "";
    const sur = (P, Q, f, dx, dy) => [P[0] + (Q[0] - P[0]) * f + dx, P[1] + (Q[1] - P[1]) * f + dy];
    return `<svg viewBox="-50 0 410 225" class="figure" role="img" aria-label="Triangle ABC avec M sur AB et N sur AC, MN parallèle à BC">
      <polygon points="${A} ${B} ${C}" class="tri"/>
      <line x1="${M[0]}" y1="${M[1]}" x2="${N[0]}" y2="${N[1]}" class="para"/>
      ${[["A", A, -4, -6], ["B", B, -16, 14], ["C", C, 6, 14], ["M", M, -18, 4], ["N", N, 8, 4]].map(([n, P, dx, dy]) => `<text x="${P[0] + dx}" y="${P[1] + dy}" class="pt">${n}</text><circle cx="${P[0]}" cy="${P[1]}" r="2.6" class="pt-c"/>`).join("")}
      ${etiquette(val.AM, sur(A, B, t / 2, -10, 5), "AM", "end")}${etiquette(val.AB, sur(A, B, (1 + t) / 2 + 0.05, -12, 5), "AB", "end")}${etiquette(val.AN, sur(A, C, t / 2, 10, 5), "AN", "start")}${etiquette(val.AC, sur(A, C, (1 + t) / 2 + 0.05, 12, 5), "AC", "start")}
      ${etiquette(val.MN, milieu(M, N, 0, 18), "MN", "middle")}${etiquette(val.BC, milieu(B, C, 0, 24), "BC", "middle")}
    </svg>`;
  }
  const T = {
    longueur() {
      const p = hasard(1, 4), q = p + hasard(1, 4), g = pgcd(p, q), pp = p / g, qq = q / g;
      const u = hasard(1, 3), s = hasard(1, 4);
      const AM = pp * u, AB = qq * u, AN = pp * s, AC = qq * s;
      const cherche = parmi(["AN", "AC"]);
      const val = { t: AM / AB, AM: AM + " cm", AB: AB + " cm", AN: cherche === "AN" ? "?" : AN + " cm", AC: cherche === "AC" ? "?" : AC + " cm" };
      const rep = cherche === "AN" ? AN : AC;
      return { comp: "t-longueur", figure: figureThales(val),
        enonce: `Les droites (MN) et (BC) sont parallèles. AM = ${AM} cm, AB = ${AB} cm, ${cherche === "AN" ? "AC = " + AC : "AN = " + AN} cm.<br>Calcule <b>${cherche}</b> (en cm).`,
        type: "nombre", reponse: rep, affiche: String(rep),
        explication: `Propriété de Thalès : ${fr("AM", "AB")} = ${fr("AN", "AC")} = ${fr("MN", "BC")}.<br>${cherche === "AN" ? `AN = AC × ${fr("AM", "AB")} = ${AC} × ${fr(AM, AB)} = <b>${AN} cm</b>.` : `AC = AN × ${fr("AB", "AM")} = ${AN} × ${fr(AB, AM)} = <b>${AC} cm</b>.`}` };
    },
    consequence() {
      const p = hasard(1, 3), q = p + hasard(1, 3), g = pgcd(p, q), pp = p / g, qq = q / g;
      const u = hasard(1, 3), w = hasard(1, 4);
      const AM = pp * u, AB = qq * u, MN = pp * w, BC = qq * w;
      const cherche = parmi(["MN", "BC"]);
      const val = { t: AM / AB, AM: AM + " cm", AB: AB + " cm", MN: cherche === "MN" ? "?" : MN + " cm", BC: cherche === "BC" ? "?" : BC + " cm" };
      const rep = cherche === "MN" ? MN : BC;
      return { comp: "t-longueur", figure: figureThales(val),
        enonce: `(MN) // (BC). AM = ${AM} cm, AB = ${AB} cm, ${cherche === "MN" ? "BC = " + BC : "MN = " + MN} cm.<br>Calcule <b>${cherche}</b> (en cm).`,
        type: "nombre", reponse: rep, affiche: String(rep),
        explication: `Conséquence de la propriété de Thalès : ${fr("MN", "BC")} = ${fr("AM", "AB")}.<br>${cherche === "MN" ? `MN = BC × ${fr("AM", "AB")} = ${BC} × ${fr(AM, AB)} = <b>${MN} cm</b>.` : `BC = MN × ${fr("AB", "AM")} = ${MN} × ${fr(AB, AM)} = <b>${BC} cm</b>.`}` };
    },
    quotients() {
      const bon = `${fr("AN", "AC")}`;
      const faux = [fr("AN", "NC"), fr("MB", "AB"), fr("MN", "AC")];
      return { comp: "t-reconnaitre", figure: figureThales({ t: 0.45 }),
        enonce: `(MN) // (BC). Quel quotient est égal à ${fr("AM", "AB")} ?`, type: "qcm", choix: melanger([bon, ...faux]), reponse: bon,
        explication: `Dans la configuration de Thalès, on compare les longueurs <b>depuis le sommet A</b> : ${fr("AM", "AB")} = ${fr("AN", "AC")} = ${fr("MN", "BC")}.` };
    },
    reciproque() {
      const parallele = Math.random() < 0.5;
      const p = hasard(1, 3), q = p + hasard(1, 3);
      const u = hasard(1, 3), s = hasard(1, 3);
      const AM = p * u, AB = q * u, AC = q * s;
      let AN = p * s;
      const ecarts = [1, -1].filter(d => AN + d > 0 && AN + d < AC);
      if (!parallele && ecarts.length) AN = AN + parmi(ecarts);
      const ok = AM * AC === AN * AB;
      return { comp: "t-reciproque", figure: figureThales({ t: AM / AB, AM: AM + " cm", AB: AB + " cm", AN: AN + " cm", AC: AC + " cm" }),
        enonce: `M est sur [AB] et N sur [AC], dans le même ordre. AM = ${AM} cm, AB = ${AB} cm, AN = ${AN} cm, AC = ${AC} cm.<br>Les droites (MN) et (BC) sont-elles parallèles ?`,
        type: "qcm", choix: ["Oui, elles sont parallèles", "Non, elles ne sont pas parallèles"], reponse: ok ? "Oui, elles sont parallèles" : "Non, elles ne sont pas parallèles",
        explication: `On compare ${fr("AM", "AB")} = ${fr(AM, AB)} et ${fr("AN", "AC")} = ${fr(AN, AC)} : produits en croix ${AM} × ${AC} = ${AM * AC} et ${AN} × ${AB} = ${AN * AB}. ${ok ? "Ils sont égaux : d'après la <b>réciproque</b> de la propriété de Thalès, (MN) // (BC)." : "Ils sont différents : les quotients ne sont pas égaux, donc (MN) et (BC) <b>ne sont pas</b> parallèles."}` };
    },
    defiToit() {
      const H = parmi([3, 4, 6]), L2 = parmi([5, 6, 8]), d = parmi([1, 2, 3].filter(x => x < L2));
      const h = H * (L2 - d) / L2;
      return { comp: "t-longueur", defi: true,
        enonce: `<b>Situation.</b> Le toit du préau du collège forme un triangle rectangle : une barre verticale de ${H} m est placée au milieu, et le toit descend jusqu'au sol ${L2} m plus loin. Le charpentier doit poser une barre verticale parallèle, à ${d} m de la première.<br>Quelle est sa longueur (en m) ?`,
        type: "nombre", reponse: h, affiche: fracTexte(H * (L2 - d), L2).replace("/", " / ") + (Number.isInteger(h) ? "" : " ≈ " + h.toFixed(2).replace(".", ",")),
        explication: `Les deux barres sont parallèles (toutes deux verticales). Depuis le bas du toit, les distances sont ${L2} m et ${L2 - d} m. Thalès : ${fr("h", H)} = ${fr(L2 - d, L2)}, donc h = ${H} × ${fr(L2 - d, L2)} = <b>${fracHtml(H * (L2 - d), L2)} m</b>${Number.isInteger(h) ? "" : " ≈ " + h.toFixed(2).replace(".", ",") + " m"}.` };
    }
  };

  // =========================================================
  // Leçon 3 : Racines carrées
  // =========================================================
  const R = {
    carre() {
      const a = hasard(2, 15), neg = Math.random() < 0.5;
      return { comp: "r-definition", enonce: `Calcule :<div class="calc">${rac(neg ? "(−" + a + ")²" : a * a)}</div>`, type: "nombre", reponse: a, affiche: String(a),
        explication: neg ? `${rac("a²")} = |a| : ${rac("(−" + a + ")²")} = |−${a}| = <b>${a}</b>. Une racine carrée n'est jamais négative.` : `${a}² = ${a * a}, donc ${rac(a * a)} = <b>${a}</b>.` };
    },
    simplifier() {
      const m = parmi([2, 3, 5, 6, 7, 10]), k = hasard(2, 7), n = k * k * m;
      return { comp: "r-simplifier", enonce: `Écris sous la forme a${rac("b")} avec b le plus petit possible :<div class="calc">${rac(n)}</div>`, type: "coeffs", modele: ["", "√", ""],
        reponse: [k, m], racine: true, affiche: `${k}√${m}`,
        explication: `${n} = ${k * k} × ${m} et ${k * k} = ${k}², donc ${rac(n)} = ${rac(k * k)} × ${rac(m)} = <b>${k}${rac(m)}</b>.` };
    },
    somme() {
      const m = parmi([2, 3, 5]), k1 = hasard(1, 4), k2 = hasard(2, 4), a = hasard(1, 5), b = nonNul(-4, 4);
      const n2 = k2 * k2 * m, r = a + b * k2;
      return { comp: "r-operations", enonce: `Calcule et écris sous la forme a${rac(m)} :<div class="calc">${a === 1 ? "" : a}${rac(m)} ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}${rac(n2)}</div>`,
        type: "coeffs", modele: ["", "√" + m], reponse: [r], affiche: `${moins(r)}√${m}`,
        explication: `${rac(n2)} = ${k2}${rac(m)}, donc ${Math.abs(b) === 1 ? "" : Math.abs(b)}${rac(n2)} = ${Math.abs(b * k2)}${rac(m)}. Puis ${a}${rac(m)} ${b < 0 ? "−" : "+"} ${Math.abs(b * k2)}${rac(m)} = <b>${moins(r)}${rac(m)}</b>.` };
    },
    produit() {
      const m = parmi([2, 3, 5, 6, 7]), a = hasard(1, 4), b = hasard(1, 4);
      const x = a * a * m, y = b * b * m, r = a * b * m;
      return { comp: "r-operations", enonce: `Calcule :<div class="calc">${rac(x)} × ${rac(y)}</div>`, type: "nombre", reponse: r, affiche: String(r),
        explication: `${rac("a")} × ${rac("b")} = ${rac("ab")} : ${rac(x + " × " + y)} = ${rac(x * y)} = <b>${r}</b> (car ${r}² = ${x * y}).` };
    },
    developper() {
      const a = hasard(1, 6), b = parmi([2, 3, 5, 7]), s = parmi([1, -1]);
      return { comp: "r-operations", enonce: `Développe et réduis :<div class="calc">(${a} ${s > 0 ? "+" : "−"} ${rac(b)})²</div>Écris le résultat sous la forme p + q${rac(b)}.`,
        type: "coeffs", modele: ["", "+", "√" + b], reponse: [a * a + b, s * 2 * a], affiche: `${a * a + b} ${s > 0 ? "+" : "−"} ${2 * a}√${b}`,
        explication: `${s > 0 ? "(a + b)² = a² + 2ab + b²" : "(a − b)² = a² − 2ab + b²"} : ${a}² ${s > 0 ? "+" : "−"} 2 × ${a} × ${rac(b)} + ${rac(b)}² = ${a * a} ${s > 0 ? "+" : "−"} ${2 * a}${rac(b)} + ${b} = <b>${a * a + b} ${s > 0 ? "+" : "−"} ${2 * a}${rac(b)}</b>.` };
    },
    sansRadical() {
      const b = parmi([2, 3, 5, 6, 7]), a = hasard(1, 9);
      const [n, d] = reduireFrac(a, b);
      const bon = d === 1 ? `${n}${rac(b)}` : `${fr((n === 1 ? "" : n) + rac(b), d)}`;
      const faux = [`${fr(a, b)}`, `${fr(a + rac(b), a)}`, `${a}${rac(b)}`].filter(x => x !== bon);
      return { comp: "r-radical", enonce: `Écris sans radical au dénominateur :<div class="calc">${fr(a, rac(b))}</div>`, type: "qcm", choix: melanger([bon, ...faux.slice(0, 3)]), reponse: bon,
        explication: `On multiplie en haut et en bas par ${rac(b)} : ${fr(a + " × " + rac(b), rac(b) + " × " + rac(b))} = ${fr(a + rac(b), b)}${d !== b || n !== a ? " = " + bon : ""}.` };
    },
    conjugue() {
      const m = hasard(1, 6), a = parmi([2, 3, 5, 7]), s = parmi(["+", "−"]);
      const autre = s === "+" ? "−" : "+";
      const bon = `${m} ${autre} ${rac(a)}`;
      return { comp: "r-radical", enonce: `Quelle est l'expression conjuguée de <b>${m} ${s} ${rac(a)}</b> ?`, type: "qcm",
        choix: melanger([bon, `${m} ${s} ${rac(a)}`, `−${m} ${s} ${rac(a)}`, `${rac(m)} ${autre} ${a}`]), reponse: bon,
        explication: `On change seulement le signe devant la racine : le conjugué de ${m} ${s} ${rac(a)} est <b>${bon}</b>. Leur produit donne ${m}² − ${a} = ${m * m - a}, sans racine.` };
    },
    valeurAbsolue() {
      const n = parmi([2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15]), e = Math.floor(Math.sqrt(n)) + parmi([0, 1]);
      const pos = Math.sqrt(n) - e > 0;
      const bon = pos ? `${rac(n)} − ${e}` : `${e} − ${rac(n)}`;
      return { comp: "r-definition", enonce: `Écris sans valeur absolue :<div class="calc">|${rac(n)} − ${e}|</div>`, type: "qcm",
        choix: melanger([`${rac(n)} − ${e}`, `${e} − ${rac(n)}`, `${rac(n)} + ${e}`]), reponse: bon,
        explication: `${rac(n)} ≈ ${Math.sqrt(n).toFixed(2).replace(".", ",")}, donc ${rac(n)} − ${e} est ${pos ? "positif" : "négatif"}. ${pos ? "Un nombre positif est égal à sa valeur absolue" : "La valeur absolue d'un nombre négatif est son opposé"} : <b>${bon}</b>.` };
    },
    defiFerme() {
      const k = hasard(3, 9), m = parmi([2, 3, 5]), aire = k * k * m;
      const village = parmi(["Foula", "Boundiali", "Dabou", "Man", "Odienné"]);
      return { comp: "r-simplifier", defi: true,
        enonce: `<b>Situation.</b> Une ferme de ${village} est carrée et a une aire de ${aire} m². Quel est son côté exact, sous la forme a${rac("b")} (en m) ?`,
        type: "coeffs", modele: ["", "√", ""], reponse: [k, m], racine: true, affiche: `${k}√${m}`,
        explication: `Le côté vaut ${rac(aire)} = ${rac(k * k + " × " + m)} = <b>${k}${rac(m)} m</b> ≈ ${(k * Math.sqrt(m)).toFixed(1).replace(".", ",")} m.` };
    }
  };
