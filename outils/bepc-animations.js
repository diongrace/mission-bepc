  // =========================================================
  // Animations commentées (comme de petites vidéos, mais légères et hors ligne)
  // Chaque animation : une scène SVG, des curseurs, et des étapes lues à voix haute.
  // =========================================================
  const f2 = x => String(Math.round(x * 100) / 100).replace(".", ",");
  const RAD = Math.PI / 180;
  let nettoyages = [];
  function nettoyerAnims() { nettoyages.forEach(f => { try { f(); } catch (e) {} }); nettoyages = []; }
  const curseur = (id, label, min, max, pas, val, unite = "") => `<label class="anim-curseur"><span>${label} <b data-val="${id}">${String(val).replace(".", ",")}${unite}</b></span><input type="range" data-c="${id}" min="${min}" max="${max}" step="${pas}" value="${val}" aria-label="${label}"></label>`;
  const lireC = (el, id) => Number(el.querySelector(`[data-c="${id}"]`).value);
  function ecrireC(el, id, v, unite = "") { const i = el.querySelector(`[data-c="${id}"]`); if (i) i.value = v; const b = el.querySelector(`[data-val="${id}"]`); if (b) b.textContent = String(v).replace(".", ",") + unite; }
  function brancherCurseurs(el, maj, unites = {}) {
    el.querySelectorAll("[data-c]").forEach(i => i.addEventListener("input", () => { const b = el.querySelector(`[data-val="${i.dataset.c}"]`); if (b) b.textContent = i.value.replace(".", ",") + (unites[i.dataset.c] || ""); maj(); }));
  }
  // Lecteur d'étapes narrées : Lecture / Pause, précédent, suivant
  function lecteur(el, etapes, surEtape) {
    const n = etapes.length, leg = el.querySelector(".anim-legende"), btnLire = el.querySelector("[data-lire]"), pts = el.querySelector(".anim-points");
    let i = 0, enLecture = false, minuterie = null;
    pts.innerHTML = etapes.map((_, k) => `<button type="button" data-pt="${k}" aria-label="Étape ${k + 1}"></button>`).join("");
    function montrer(k) {
      i = Math.max(0, Math.min(n - 1, k));
      leg.innerHTML = `<span class="etiquette">Étape ${i + 1} sur ${n}</span>${etapes[i].texte}`;
      pts.querySelectorAll("button").forEach((b, j) => b.classList.toggle("actif", j === i));
      if (surEtape) surEtape(i, etapes[i]);
    }
    function arreter() { enLecture = false; clearTimeout(minuterie); try { speechSynthesis.cancel(); } catch (e) {} btnLire.textContent = "▶ Lecture"; }
    function dire(texte, fin) {
      const brut = texte.replace(/<[^>]+>/g, "");
      let fini = false; const suite = () => { if (!fini) { fini = true; clearTimeout(minuterie); minuterie = setTimeout(fin, 600); } };
      minuterie = setTimeout(suite, Math.max(4500, brut.length * 75));
      if (voixOk) {
        try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(brut); u.lang = "fr-FR"; u.rate = 0.95;
          const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().startsWith("fr")); if (v) u.voice = v;
          u.onend = suite; speechSynthesis.speak(u); } catch (e) {}
      }
    }
    function lire() { enLecture = true; btnLire.textContent = "❚❚ Pause"; dire(etapes[i].texte, () => { if (!enLecture) return; if (i < n - 1) { montrer(i + 1); lire(); } else arreter(); }); }
    btnLire.addEventListener("click", () => { if (enLecture) arreter(); else { if (i === n - 1) montrer(0); lire(); } });
    el.querySelector("[data-prec]").addEventListener("click", () => { arreter(); montrer(i - 1); });
    el.querySelector("[data-suiv]").addEventListener("click", () => { arreter(); montrer(i + 1); });
    pts.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { arreter(); montrer(+b.dataset.pt); }));
    nettoyages.push(arreter);
    montrer(0);
  }
  const controles = `<div class="anim-legende" aria-live="polite"></div>
    <div class="anim-controles"><button type="button" class="anim-btn" data-prec aria-label="Étape précédente">‹</button><button type="button" class="anim-btn lire" data-lire>▶ Lecture</button><button type="button" class="anim-btn" data-suiv aria-label="Étape suivante">›</button><div class="anim-points"></div></div>`;
  const svg = (vb, contenu, label) => `<svg viewBox="${vb}" class="anim-svg" role="img" aria-label="${label}">${contenu}</svg>`;
  const TX = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-size="${o.s || 12}" font-weight="${o.w || 800}" fill="${o.c || "var(--encre)"}" text-anchor="${o.a || "middle"}" font-family="Nunito,Segoe UI,sans-serif">${t}</text>`;
  const LI = (a, b, c = "var(--encre)", w = 2, extra = "") => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
  const PO = (p, r = 3, c = "var(--encre)") => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${c}"/>`;
  const pt = (O, r, d) => [O[0] + r * Math.cos(d * RAD), O[1] - r * Math.sin(d * RAD)];
  const fleche = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/></marker></defs>`;
  const BLEU = "#2B63B8", ORANGE = "#E0701F", VERT = "#1A8F5F", ROUGE = "#CF3F35", VIOLET = "#7A4FB5";

  const ANIMS = [
    // ---------------- Maths ----------------
    { id: "a-thales", chap: "thales", titre: "Thalès en mouvement", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>${curseur("t", "Position de M :", 0.2, 0.9, 0.05, 0.4)}<div class="anim-info" data-info></div>`;
      const A = [160, 22], B = [40, 200], C = [290, 200];
      const maj = () => {
        const t = lireC(el, "t"), M = [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t], N = [A[0] + (C[0] - A[0]) * t, A[1] + (C[1] - A[1]) * t];
        el.querySelector("[data-svg]").innerHTML = svg("0 0 330 225", `<polygon points="${A} ${B} ${C}" fill="${BLEU}" fill-opacity=".08" stroke="var(--encre)" stroke-width="2"/>` + LI(M, N, ORANGE, 3) + LI(B, C, ORANGE, 3, 'stroke-dasharray="0"') +
          [["A", A, 0, -8], ["B", B, -12, 14], ["C", C, 12, 14], ["M", M, -14, 4], ["N", N, 14, 4]].map(([n, p, dx, dy]) => PO(p) + TX(p[0] + dx, p[1] + dy, n, { s: 15 })).join("") +
          TX((A[0] + M[0]) / 2 - 22, (A[1] + M[1]) / 2, "AM = " + f2(10 * t), { s: 11, c: BLEU }) + TX((A[0] + N[0]) / 2 + 24, (A[1] + N[1]) / 2, "AN = " + f2(12 * t), { s: 11, c: BLEU }) + TX((M[0] + N[0]) / 2, M[1] - 6, "MN = " + f2(11 * t), { s: 11, c: ORANGE }) +
          TX(165, 218, "AB = 10 · AC = 12 · BC = 11 (en cm)", { s: 11, c: "var(--encre-2)", w: 700 }), "Triangle ABC avec la parallèle MN");
        el.querySelector("[data-info]").innerHTML = `${fr("AM", "AB")} = ${fr(f2(10 * t), 10)} = <b>${f2(t)}</b> &nbsp; ${fr("AN", "AC")} = ${fr(f2(12 * t), 12)} = <b>${f2(t)}</b> &nbsp; ${fr("MN", "BC")} = ${fr(f2(11 * t), 11)} = <b>${f2(t)}</b>`;
      };
      brancherCurseurs(el, maj); maj();
      lecteur(el, [
        { texte: "Voici le triangle ABC. M est sur le côté AB, N sur le côté AC, et la droite MN est <b>parallèle</b> à BC.", t: 0.4 },
        { texte: "Déplace M avec le curseur : la droite MN reste toujours parallèle à BC.", t: 0.7 },
        { texte: "Regarde les trois quotients sous la figure : ils sont <b>toujours égaux</b>. C'est la propriété de Thalès.", t: 0.3 },
        { texte: "Par exemple, si M est au milieu de AB, alors AM sur AB vaut 0,5 : N est au milieu de AC et MN vaut la moitié de BC.", t: 0.5 }
      ], (i, e) => { ecrireC(el, "t", e.t); maj(); });
    } },
    { id: "a-pythagore", chap: "triangle", titre: "Pythagore avec des carrés", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div><div class="anim-deux">${curseur("a", "AB =", 2, 6, 1, 3, " cm")}${curseur("b", "AC =", 2, 6, 1, 4, " cm")}</div><div class="anim-info" data-info></div>`;
      const maj = () => {
        const a = lireC(el, "a"), b = lireC(el, "b"), u = 16, A = [0, 0], B = [a * u, 0], C = [0, -b * u], p = [b * u, a * u];
        const sqAB = [A, B, [a * u, a * u], [0, a * u]], sqAC = [A, C, [-b * u, -b * u], [-b * u, 0]], sqBC = [B, C, [C[0] + p[0], C[1] - p[1]], [B[0] + p[0], B[1] - p[1]]];
        const tous = [...sqAB, ...sqAC, ...sqBC], xs = tous.map(q => q[0]), ys = tous.map(q => q[1]);
        const mx = Math.min(...xs) - 12, my = Math.min(...ys) - 12, w = Math.max(...xs) - mx + 12, h = Math.max(...ys) - my + 12;
        const poly = (pts, c) => `<polygon points="${pts.map(q => q.join(",")).join(" ")}" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/>`;
        const centre = pts => [pts.reduce((s, q) => s + q[0], 0) / 4, pts.reduce((s, q) => s + q[1], 0) / 4];
        const c2 = a * a + b * b, c = Math.sqrt(c2), [cB, cC, cH] = [centre(sqAB), centre(sqAC), centre(sqBC)];
        el.querySelector("[data-svg]").innerHTML = svg(`${mx} ${my} ${w} ${h}`, poly(sqAB, BLEU) + poly(sqAC, VERT) + poly(sqBC, ORANGE) + `<polygon points="${A} ${B} ${C}" fill="var(--carte)" stroke="var(--encre)" stroke-width="2.5"/>` +
          `<path d="M8 0 V-8 H0" fill="none" stroke="var(--encre)" stroke-width="1.5"/>` + TX(cB[0], cB[1] + 4, a * a, { s: 14, c: BLEU }) + TX(cC[0], cC[1] + 4, b * b, { s: 14, c: VERT }) + TX(cH[0], cH[1] + 4, c2, { s: 16, c: ORANGE }) +
          TX(-5, 14, "A", { s: 13 }) + TX(B[0] + 8, 12, "B", { s: 13 }) + TX(-8, C[1] - 4, "C", { s: 13 }), "Carrés construits sur les côtés d'un triangle rectangle");
        el.querySelector("[data-info]").innerHTML = `AB² + AC² = <b style="color:${BLEU}">${a * a}</b> + <b style="color:${VERT}">${b * b}</b> = <b style="color:${ORANGE}">${c2}</b> = BC², donc BC = ${Number.isInteger(c) ? "<b>" + c + " cm</b>" : rac(c2) + " ≈ <b>" + f2(c) + " cm</b>"}`;
      };
      brancherCurseurs(el, maj, { a: " cm", b: " cm" }); maj();
      lecteur(el, [
        { texte: "Le triangle ABC est <b>rectangle en A</b>. Son plus grand côté, BC, en face de l'angle droit, s'appelle l'<b>hypoténuse</b>.", a: 3, b: 4 },
        { texte: "On construit un carré sur chaque côté. Le nombre dans chaque carré est son aire : 9 pour le côté 3, 16 pour le côté 4.", a: 3, b: 4 },
        { texte: "Surprise : l'aire du grand carré orange, 25, est égale à la somme des deux autres : 9 plus 16. Donc BC mesure 5.", a: 3, b: 4 },
        { texte: "Change les longueurs avec les curseurs : l'égalité reste toujours vraie. C'est la propriété de Pythagore : BC² = AB² + AC².", a: 5, b: 2 }
      ], (i, e) => { ecrireC(el, "a", e.a, " cm"); ecrireC(el, "b", e.b, " cm"); maj(); });
    } },
    { id: "a-trigo", chap: "triangle", titre: "Cosinus, sinus, tangente", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>${curseur("x", "Angle B :", 15, 75, 1, 35, "°")}<div class="anim-info" data-info></div>`;
      const maj = () => {
        const x = lireC(el, "x"), Lp = 230, B = [30, 200], A = [30 + Lp * Math.cos(x * RAD), 200], C = [A[0], 200 - Lp * Math.sin(x * RAD)];
        const co = Math.cos(x * RAD), si = Math.sin(x * RAD);
        el.querySelector("[data-svg]").innerHTML = svg("0 0 300 225", LI(B, A, BLEU, 4) + LI(A, C, ORANGE, 4) + LI(B, C, "var(--encre)", 3) + `<path d="M${A[0] - 10} 200 V190 H${A[0]}" fill="none" stroke="var(--encre)" stroke-width="1.5"/>` +
          `<path d="M${B[0] + 28} 200 A28 28 0 0 0 ${B[0] + 28 * co} ${200 - 28 * si}" fill="none" stroke="${VIOLET}" stroke-width="2.5"/>` + TX(B[0] + 42, 193, x + "°", { s: 11, c: VIOLET }) +
          TX((B[0] + A[0]) / 2, 216, "adjacent = " + f2(10 * co), { s: 11, c: BLEU }) + TX(Math.min(A[0] + 6, 262), (A[1] + C[1]) / 2, "opposé = " + f2(10 * si), { s: 11, c: ORANGE, a: "start" }) +
          TX((B[0] + C[0]) / 2 - 16, (B[1] + C[1]) / 2 - 8, "hypoténuse = 10", { s: 11, a: "end" }) + PO(A) + PO(B) + PO(C) + TX(B[0] - 8, 214, "B", { s: 14 }) + TX(A[0] + 6, 214, "A", { s: 14 }) + TX(C[0] + 10, C[1], "C", { s: 14 }), "Triangle rectangle avec un angle variable");
        el.querySelector("[data-info]").innerHTML = `cos ${x}° = ${fr("adj.", "hyp.")} = <b style="color:${BLEU}">${f2(co)}</b> &nbsp; sin ${x}° = ${fr("opp.", "hyp.")} = <b style="color:${ORANGE}">${f2(si)}</b> &nbsp; tan ${x}° = ${fr("opp.", "adj.")} = <b>${f2(si / co)}</b>`;
      };
      brancherCurseurs(el, maj, { x: "°" }); maj();
      lecteur(el, [
        { texte: "Le triangle est rectangle en A. On s'intéresse à l'angle B, en violet. L'hypoténuse mesure 10.", x: 35 },
        { texte: "Le côté <b>adjacent</b>, en bleu, touche l'angle B. Cosinus B égale adjacent divisé par hypoténuse.", x: 35 },
        { texte: "Le côté <b>opposé</b>, en orange, est en face de l'angle B. Sinus B égale opposé divisé par hypoténuse.", x: 35 },
        { texte: "Tangente B égale opposé divisé par adjacent. Pour retenir : SOH CAH TOA.", x: 45 },
        { texte: "Fais grandir l'angle : le cosinus diminue et le sinus augmente. Ils restent toujours entre 0 et 1.", x: 65 }
      ], (i, e) => { ecrireC(el, "x", e.x, "°"); maj(); });
    } },
    { id: "a-angles", chap: "angles", titre: "L'angle inscrit ne bouge pas", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>${curseur("c", "Déplace le point C :", 25, 155, 1, 90)}<div class="anim-info" data-info></div>`;
      const O = [160, 118], r = 88, A = pt(O, r, 215), B = pt(O, r, 325);
      const angle = (S, U, V) => { const a1 = Math.atan2(U[1] - S[1], U[0] - S[0]), a2 = Math.atan2(V[1] - S[1], V[0] - S[0]); let d = Math.abs(a1 - a2) / RAD; return d > 180 ? 360 - d : d; };
      const maj = () => {
        const C = pt(O, r, lireC(el, "c")), aC = angle(C, A, B), aO = angle(O, A, B);
        el.querySelector("[data-svg]").innerHTML = svg("0 0 320 225", `<circle cx="${O[0]}" cy="${O[1]}" r="${r}" fill="none" stroke="var(--encre)" stroke-width="2"/>` +
          `<path d="M${A[0]} ${A[1]} A${r} ${r} 0 0 0 ${B[0]} ${B[1]}" fill="none" stroke="${VERT}" stroke-width="6" stroke-opacity=".5"/>` + LI(O, A, BLEU, 2.5) + LI(O, B, BLEU, 2.5) + LI(C, A, ORANGE, 2.5) + LI(C, B, ORANGE, 2.5) +
          [["A", A, -14, 12], ["B", B, 14, 12], ["C", C, 0, -10], ["O", O, 0, -10]].map(([n, p, dx, dy]) => PO(p) + TX(p[0] + dx, p[1] + dy, n, { s: 14 })).join("") +
          TX(O[0], O[1] + 26, Math.round(aO) + "°", { s: 13, c: BLEU }) + TX(C[0], C[1] + 30, Math.round(aC) + "°", { s: 13, c: ORANGE }) + TX(O[0], 222, "arc AB intercepté", { s: 11, c: VERT }), "Cercle avec un angle au centre et un angle inscrit");
        el.querySelector("[data-info]").innerHTML = `Angle au centre AÔB = <b style="color:${BLEU}">${Math.round(aO)}°</b> · angle inscrit AĈB = <b style="color:${ORANGE}">${Math.round(aC)}°</b> = ${Math.round(aO)}° ÷ 2`;
      };
      brancherCurseurs(el, maj); maj();
      lecteur(el, [
        { texte: "L'angle AOB, en bleu, a son sommet au <b>centre</b> du cercle : c'est un angle au centre. Il mesure 110 degrés.", c: 90 },
        { texte: "L'angle ACB, en orange, a son sommet <b>sur le cercle</b> : c'est un angle inscrit. Les deux interceptent le même arc AB, en vert.", c: 90 },
        { texte: "Déplace le point C sur le cercle : l'angle inscrit garde toujours la même mesure, 55 degrés.", c: 140 },
        { texte: "Retiens : un angle inscrit mesure la <b>moitié</b> de l'angle au centre qui intercepte le même arc.", c: 45 }
      ], (i, e) => { ecrireC(el, "c", e.c); maj(); });
    } },
    { id: "a-chasles", chap: "vecteurs", titre: "La relation de Chasles", construire(el) {
      const A = [40, 175], B = [150, 45], C = [280, 150];
      el.querySelector(".anim-scene").innerHTML = `<div data-svg>${svg("0 0 320 210", fleche("fl-ch") +
        `<g class="vec" data-v="1">${LI(A, B, BLEU, 3.5, 'marker-end="url(#fl-ch)"')}${TX(78, 100, "AB⃗", { s: 15, c: BLEU })}</g>` +
        `<g class="vec" data-v="2">${LI(B, C, VERT, 3.5, 'marker-end="url(#fl-ch)"')}${TX(232, 88, "BC⃗", { s: 15, c: VERT })}</g>` +
        `<g class="vec" data-v="3">${LI(A, C, ORANGE, 4, 'marker-end="url(#fl-ch)"')}${TX(170, 185, "AC⃗ = AB⃗ + BC⃗", { s: 15, c: ORANGE })}</g>` +
        [["A", A, -10, 16], ["B", B, 0, -10], ["C", C, 12, 14]].map(([n, p, dx, dy]) => PO(p, 4) + TX(p[0] + dx, p[1] + dy, n, { s: 15 })).join(""), "Trois points A, B, C et les vecteurs AB, BC, AC")}</div>`;
      lecteur(el, [
        { texte: "On part du point A et on va jusqu'au point B : c'est le vecteur <b>AB</b>, en bleu.", v: 1 },
        { texte: "Puis on continue de B jusqu'à C : c'est le vecteur <b>BC</b>, en vert.", v: 2 },
        { texte: "Le trajet total va directement de A à C : AB plus BC égale <b>AC</b>. C'est la relation de Chasles.", v: 3 },
        { texte: "Astuce : la lettre du milieu, B, disparaît. De même, CA plus AB égale CB.", v: 3 }
      ], (i, e) => el.querySelectorAll(".vec").forEach(g => g.classList.toggle("montre", +g.dataset.v <= e.v)));
    } },
    { id: "a-identite", chap: "litteral", titre: "(a + b)² en image", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div><div class="anim-deux">${curseur("a", "a =", 1, 6, 1, 3)}${curseur("b", "b =", 1, 5, 1, 2)}</div><div class="anim-info" data-info></div>`;
      const maj = () => {
        const a = lireC(el, "a"), b = lireC(el, "b"), u = 190 / (a + b), x0 = 50, y0 = 15, A = a * u, Bp = b * u;
        const R = (x, y, w, h, c, t) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/>` + TX(x + w / 2, y + h / 2 + 5, t, { s: 14, c });
        el.querySelector("[data-svg]").innerHTML = svg("0 0 290 230", R(x0, y0, A, A, BLEU, "a²") + R(x0 + A, y0, Bp, A, ORANGE, "ab") + R(x0, y0 + A, A, Bp, ORANGE, "ab") + R(x0 + A, y0 + A, Bp, Bp, VERT, "b²") +
          TX(x0 + A / 2, y0 + 205, "a", { s: 13 }) + TX(x0 + A + Bp / 2, y0 + 205, "b", { s: 13 }) + TX(x0 - 12, y0 + A / 2, "a", { s: 13 }) + TX(x0 - 12, y0 + A + Bp / 2, "b", { s: 13 }), "Carré de côté a + b découpé en quatre parties");
        el.querySelector("[data-info]").innerHTML = `(${a} + ${b})² = ${(a + b) ** 2} &nbsp;et&nbsp; <b style="color:${BLEU}">${a * a}</b> + 2 × <b style="color:${ORANGE}">${a * b}</b> + <b style="color:${VERT}">${b * b}</b> = ${a * a + 2 * a * b + b * b}`;
      };
      brancherCurseurs(el, maj); maj();
      lecteur(el, [
        { texte: "Voici un grand carré de côté a plus b. Son aire vaut donc (a + b) au carré.", a: 3, b: 2 },
        { texte: "On le découpe en quatre morceaux : un carré bleu a², un carré vert b², et <b>deux</b> rectangles orange a fois b.", a: 3, b: 2 },
        { texte: "Donc (a + b)² = a² + 2ab + b². Les deux rectangles expliquent le « 2ab » qu'on oublie souvent !", a: 4, b: 1 },
        { texte: "Vérifie avec les curseurs : les deux calculs donnent toujours le même nombre.", a: 5, b: 3 }
      ], (i, e) => { ecrireC(el, "a", e.a); ecrireC(el, "b", e.b); maj(); });
    } },
    { id: "a-balance", chap: "equations", titre: "Résoudre une équation avec une balance", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>`;
      const boite = (x, y) => `<rect x="${x}" y="${y}" width="24" height="24" rx="4" fill="${ORANGE}"/>` + TX(x + 12, y + 17, "x", { s: 14, c: "#fff" });
      const poids = (x, y, v) => `<circle cx="${x}" cy="${y}" r="14" fill="${BLEU}"/>` + TX(x, y + 5, v, { s: 12, c: "#fff" });
      const scene = (gauche, droite, eq) => svg("0 0 320 200", `<path d="M160 60 L145 175 H175 Z" fill="var(--encre-2)"/>` + LI([40, 60], [280, 60], "var(--encre)", 5) + LI([40, 60], [40, 100], "var(--encre-2)", 1.5) + LI([280, 60], [280, 100], "var(--encre-2)", 1.5) +
        `<path d="M5 100 H75 L65 112 H15 Z" fill="var(--encre-2)"/><path d="M245 100 H315 L305 112 H255 Z" fill="var(--encre-2)"/>` + gauche + droite + TX(160, 196, eq, { s: 16, c: ORANGE }), "Balance en équilibre");
      const etats = [
        [boite(8, 74) + boite(34, 74) + boite(8, 48) + poids(58, 84, 5), poids(280, 84, 20), "3x + 5 = 20"],
        [boite(8, 74) + boite(34, 74) + boite(8, 48) + `<g opacity=".25">${poids(58, 84, 5)}</g>`, poids(280, 84, 15) + TX(280, 60, "− 5", { s: 13, c: ROUGE }) + TX(58, 60, "− 5", { s: 13, c: ROUGE }), "3x = 15"],
        [boite(28, 74), poids(280, 84, 5), "x = 5"],
        [boite(8, 74) + boite(34, 74) + boite(8, 48) + poids(58, 84, 5), poids(280, 84, 20), "3 × 5 + 5 = 20 ✓"]
      ];
      lecteur(el, [
        { texte: "La balance est en équilibre : à gauche, trois boîtes x et un poids de 5 ; à droite, un poids de 20. C'est l'équation 3x + 5 = 20.", k: 0 },
        { texte: "Pour garder l'équilibre, on enlève 5 <b>des deux côtés</b>. Il reste 3x = 15.", k: 1 },
        { texte: "Trois boîtes pèsent 15, donc une boîte pèse 15 divisé par 3 : <b>x = 5</b>.", k: 2 },
        { texte: "On vérifie : 3 fois 5 plus 5 égale 20. La balance est bien équilibrée !", k: 3 }
      ], (i, e) => { const [g, d, q] = etats[e.k]; el.querySelector("[data-svg]").innerHTML = scene(g, d, q); });
    } },
    { id: "a-affine", chap: "affines", titre: "Tracer f(x) = ax + b", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div><div class="anim-deux">${curseur("a", "a =", -3, 3, 0.5, 1)}${curseur("b", "b =", -4, 4, 1, 1)}</div><div class="anim-info" data-info></div>`;
      const u = 20, O = [130, 120], X = x => O[0] + x * u, Y = y => O[1] - y * u;
      let grille = ""; for (let k = -5; k <= 5; k++) grille += LI([X(k), Y(-5)], [X(k), Y(5)], "var(--trait)", 1) + LI([X(-5), Y(k)], [X(5), Y(k)], "var(--trait)", 1);
      grille += LI([X(-5.5), O[1]], [X(5.5), O[1]], "var(--encre-2)", 1.5) + LI([O[0], Y(-5.5)], [O[0], Y(5.5)], "var(--encre-2)", 1.5) + TX(X(5.3), O[1] - 5, "x", { s: 11 }) + TX(O[0] + 8, Y(5.3), "y", { s: 11 });
      const maj = () => {
        const a = lireC(el, "a"), b = lireC(el, "b"), sens = a > 0 ? "croissante" : a < 0 ? "décroissante" : "constante";
        el.querySelector("[data-svg]").innerHTML = svg("0 0 260 240", `<defs><clipPath id="cl-aff"><rect x="${X(-5)}" y="${Y(5)}" width="${10 * u}" height="${10 * u}"/></clipPath></defs>` + grille +
          `<g clip-path="url(#cl-aff)">${LI([X(-6), Y(a * -6 + b)], [X(6), Y(a * 6 + b)], ORANGE, 3.5)}${LI([X(0), Y(b)], [X(1), Y(b)], VERT, 2.5, 'stroke-dasharray="4 3"')}${LI([X(1), Y(b)], [X(1), Y(a + b)], VIOLET, 2.5, 'stroke-dasharray="4 3"')}</g>` +
          PO([X(0), Y(b)], 5, BLEU) + TX(X(0) - 10, Y(b) - 6, "b", { s: 12, c: BLEU, a: "end" }) + TX(X(1) + 6, Y(b + a / 2) + 4, "a", { s: 12, c: VIOLET, a: "start" }), "Droite représentant la fonction affine");
        el.querySelector("[data-info]").innerHTML = `f(x) = <b>${lin(a, b).replace(/\./g, ",")}</b> · la droite coupe l'axe des y en <b style="color:${BLEU}">${moins(b)}</b> · f est <b>${sens}</b>`;
      };
      brancherCurseurs(el, maj); maj();
      lecteur(el, [
        { texte: "La représentation d'une fonction affine f(x) = ax + b est une <b>droite</b>.", a: 1, b: 1 },
        { texte: "Le nombre b, en bleu, est l'<b>ordonnée à l'origine</b> : c'est là que la droite coupe l'axe vertical.", a: 1, b: 3 },
        { texte: "Le nombre a est le <b>coefficient directeur</b> : quand x augmente de 1, y augmente de a. Regarde le petit escalier violet.", a: 2, b: 1 },
        { texte: "Si a est positif, la droite monte : f est croissante. Si a est négatif, elle descend : f est décroissante.", a: -1.5, b: 2 },
        { texte: "Si a vaut 0, la droite est horizontale : f est constante.", a: 0, b: -2 }
      ], (i, e) => { ecrireC(el, "a", e.a); ecrireC(el, "b", e.b); maj(); });
    } },
    { id: "a-camembert", chap: "stats", titre: "Construire un diagramme circulaire", construire(el) {
      const D = [["Attiéké", 12, ORANGE], ["Riz", 9, BLEU], ["Foutou", 6, VERT], ["Placali", 3, VIOLET]], tot = 30, O = [110, 110], r = 90;
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>`;
      const secteur = (a0, a1, c) => { const p0 = pt(O, r, 90 - a0), p1 = pt(O, r, 90 - a1); return `<path d="M${O[0]} ${O[1]} L${p0[0]} ${p0[1]} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p1[0]} ${p1[1]} Z" fill="${c}" stroke="#fff" stroke-width="2"/>`; };
      const dessiner = k => { let a = 0, s = `<circle cx="${O[0]}" cy="${O[1]}" r="${r}" fill="var(--grille)" stroke="var(--trait)"/>`, leg = "";
        D.forEach(([n, e, c], j) => { const ang = e / tot * 360; if (j < k) { s += secteur(a, a + ang, c); const m = pt(O, r * 0.62, 90 - a - ang / 2); s += TX(m[0], m[1] + 4, ang + "°", { s: 12, c: "#fff" }); } a += ang;
          leg += `<rect x="225" y="${40 + j * 34}" width="14" height="14" rx="3" fill="${c}" opacity="${j < k ? 1 : .25}"/>` + TX(245, 52 + j * 34, `${n} : ${e}`, { s: 12, a: "start", c: j < k ? "var(--encre)" : "var(--encre-2)" }); });
        el.querySelector("[data-svg]").innerHTML = svg("0 0 330 225", s + leg + TX(280, 210, "Total : 30 élèves", { s: 11, c: "var(--encre-2)" }), "Diagramme circulaire des plats préférés"); };
      lecteur(el, [
        { texte: "30 élèves ont donné leur plat préféré. Le cercle entier, 360 degrés, représente les 30 élèves.", k: 0 },
        { texte: "Attiéké : 12 élèves. Angle = 12 sur 30, fois 360, égale <b>144 degrés</b>.", k: 1 },
        { texte: "Riz : 9 sur 30, fois 360, égale <b>108 degrés</b>.", k: 2 },
        { texte: "Foutou : 6 sur 30, fois 360, égale <b>72 degrés</b>.", k: 3 },
        { texte: "Placali : 3 sur 30, fois 360, égale <b>36 degrés</b>. Vérification : 144 + 108 + 72 + 36 = 360.", k: 4 }
      ], (i, e) => dessiner(e.k));
    } },
    { id: "a-cone", chap: "pyramides", titre: "Pourquoi on divise par 3", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>`;
      const dessiner = n => el.querySelector("[data-svg]").innerHTML = svg("0 0 320 210",
        `<path d="M40 40 L110 40 L75 170 Z" fill="${BLEU}" fill-opacity=".85"/><ellipse cx="75" cy="40" rx="35" ry="9" fill="#7FB3E8"/>` + TX(75, 195, "cône plein d'eau", { s: 11 }) +
        (n > 0 && n < 4 ? `<path d="M118 60 Q150 20 175 55" fill="none" stroke="${BLEU}" stroke-width="3" stroke-dasharray="4 4"/>` : "") +
        `<rect x="185" y="${170 - 130 * Math.min(n, 3) / 3}" width="90" height="${130 * Math.min(n, 3) / 3}" fill="${BLEU}" fill-opacity=".85" class="eau"/>` +
        `<path d="M185 40 V170 M275 40 V170" stroke="var(--encre)" stroke-width="2.5"/><ellipse cx="230" cy="170" rx="45" ry="9" fill="none" stroke="var(--encre)" stroke-width="2.5"/><ellipse cx="230" cy="40" rx="45" ry="9" fill="none" stroke="var(--encre)" stroke-width="2"/>` +
        TX(230, 195, "cylindre de même base et même hauteur", { s: 11 }) + TX(230, 105, n ? n + " × " : "", { s: 22, c: "#fff" }), "Un cône versé dans un cylindre");
      lecteur(el, [
        { texte: "Voici un cône et un cylindre qui ont la <b>même base</b> et la <b>même hauteur</b>. Le cylindre est vide.", n: 0 },
        { texte: "On remplit le cône d'eau et on le verse dans le cylindre : le cylindre est rempli au tiers.", n: 1 },
        { texte: "On recommence une deuxième fois : il est rempli aux deux tiers.", n: 2 },
        { texte: "À la troisième fois, il est plein ! Le volume du cône est donc <b>le tiers</b> de celui du cylindre : V = aire de la base fois hauteur, divisé par 3. C'est pareil pour la pyramide.", n: 3 }
      ], (i, e) => dessiner(e.n));
    } },
    // ---------------- Physique-Chimie ----------------
    { id: "a-lentille", chap: "pc-lentilles", titre: "L'image par une lentille convergente", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>${curseur("d", "Distance de l'objet :", 20, 160, 5, 110, " mm")}<div class="anim-info" data-info></div>`;
      const O = [190, 110], f = 50, h = 36;
      const maj = () => {
        const d = lireC(el, "d"), xo = O[0] - d, haut = [xo, O[1] - h];
        let s = fleche("fl-len") + LI([5, O[1]], [375, O[1]], "var(--encre-2)", 1.2) + `<ellipse cx="${O[0]}" cy="${O[1]}" rx="7" ry="88" fill="#7FB3E8" fill-opacity=".45" stroke="${BLEU}" stroke-width="2"/>` +
          PO([O[0] - f, O[1]], 3.5, VIOLET) + PO([O[0] + f, O[1]], 3.5, VIOLET) + TX(O[0] - f, O[1] + 16, "F", { s: 12, c: VIOLET }) + TX(O[0] + f, O[1] + 16, "F'", { s: 12, c: VIOLET }) + TX(O[0] + 8, O[1] + 16, "O", { s: 11 }) +
          LI([xo, O[1]], haut, VERT, 4, 'marker-end="url(#fl-len)"') + TX(xo, O[1] + 16, "objet", { s: 11, c: VERT });
        let info;
        if (Math.abs(d - f) < 3) { info = "L'objet est au foyer : les rayons ressortent parallèles, <b>l'image est à l'infini</b> (pas d'image nette)."; s += LI(haut, [O[0], haut[1]], ORANGE, 2) + LI([O[0], haut[1]], [375, haut[1]], ORANGE, 2) + LI(haut, [375, haut[1] + (375 - xo) * h / d], ROUGE, 2); }
        else {
          const di = d * f / (d - f), hi = -h * di / d, xi = O[0] + di, top = [xi, O[1] - hi];
          const pente1 = (O[1] - (O[1] - h)) / f; // rayon parallèle puis passant par F'
          const loin = x => [x, (O[1] - h) + pente1 * (x - O[0])], loin2 = x => [x, (O[1] - h) + (h / d) * (x - xo)];
          s += LI(haut, [O[0], O[1] - h], ORANGE, 2) + LI([O[0], O[1] - h], loin(375), ORANGE, 2) + LI(haut, loin2(375), ROUGE, 2);
          if (di > 0) { if (xi < 372) s += LI([xi, O[1]], [xi, Math.max(8, Math.min(212, top[1]))], VIOLET, 4, 'marker-end="url(#fl-len)"') + TX(xi, O[1] - Math.sign(hi) * 14 + 4, "image", { s: 11, c: VIOLET }); }
          else { s += LI([O[0], O[1] - h], [xi, top[1]], ORANGE, 1.5, 'stroke-dasharray="4 4"') + LI(haut, [xi, top[1]], ROUGE, 1.5, 'stroke-dasharray="4 4"') + LI([xi, O[1]], top, VIOLET, 3, 'stroke-dasharray="5 3" marker-end="url(#fl-len)"') + TX(xi, O[1] + 16, "image", { s: 11, c: VIOLET }); }
          const g = Math.abs(hi / h);
          info = di > 0 ? `Image <b>réelle</b> (on peut la voir sur un écran), <b>renversée</b>, ${g > 1.05 ? "<b>plus grande</b>" : g < 0.95 ? "<b>plus petite</b>" : "de même taille"} que l'objet${xi > 372 ? " (très loin à droite)" : ""}.`
            : "L'objet est entre le foyer et la lentille : image <b>virtuelle</b>, <b>droite</b> et <b>plus grande</b>. C'est la <b>loupe</b> !";
        }
        el.querySelector("[data-svg]").innerHTML = svg("0 0 380 220", s, "Rayons lumineux à travers une lentille convergente");
        el.querySelector("[data-info]").innerHTML = info;
      };
      brancherCurseurs(el, maj, { d: " mm" }); maj();
      lecteur(el, [
        { texte: "Une lentille convergente, en bleu, avec son foyer objet F et son foyer image F prime. L'objet est la flèche verte.", d: 130 },
        { texte: "Le rayon orange part parallèle à l'axe : après la lentille, il passe par le foyer F prime. Le rayon rouge passe par le centre O sans être dévié.", d: 130 },
        { texte: "Là où les rayons se croisent se forme l'<b>image</b>, en violet. Ici, elle est réelle, renversée et plus petite.", d: 130 },
        { texte: "Rapproche l'objet du foyer : l'image devient plus grande et s'éloigne.", d: 70 },
        { texte: "Quand l'objet est entre F et la lentille, l'image est virtuelle, droite et agrandie : c'est le principe de la loupe.", d: 30 }
      ], (i, e) => { ecrireC(el, "d", e.d, " mm"); maj(); });
    } },
    { id: "a-electrolyse", chap: "pc-electrolyse", titre: "L'électrolyse de l'eau", construire(el) {
      const bulles = (x, n) => Array.from({ length: n }, (_, k) => `<circle cx="${x - 6 + (k % 3) * 6}" cy="190" r="${2 + (k % 2)}" fill="#fff" stroke="${BLEU}" stroke-width=".8"><animate attributeName="cy" from="192" to="70" dur="${1.6 + (k % 4) * .3}s" begin="${k * .35}s" repeatCount="indefinite"/></circle>`).join("");
      const dessiner = () => el.querySelector("[data-svg]").innerHTML = svg("0 0 320 230",
        `<rect x="40" y="60" width="240" height="140" rx="6" fill="#BFE0F7" stroke="var(--encre-2)" stroke-width="2"/>` +
        `<rect x="85" y="40" width="40" height="150" rx="18" fill="none" stroke="var(--encre)" stroke-width="2.5"/><rect x="195" y="40" width="40" height="150" rx="18" fill="none" stroke="var(--encre)" stroke-width="2.5"/>` +
        `<rect x="88" y="43" width="34" height="0" fill="#fff" fill-opacity=".9"><animate attributeName="height" from="0" to="96" dur="10s" fill="freeze"/></rect>` +
        `<rect x="198" y="43" width="34" height="0" fill="#fff" fill-opacity=".9"><animate attributeName="height" from="0" to="48" dur="10s" fill="freeze"/></rect>` +
        bulles(105, 8) + bulles(215, 4) + `<rect x="100" y="190" width="10" height="30" fill="#555"/><rect x="210" y="190" width="10" height="30" fill="#555"/>` +
        LI([105, 220], [105, 226], "#555", 3) + LI([105, 226], [215, 226], "#555", 2) + `<rect x="140" y="218" width="40" height="12" rx="2" fill="var(--carte)" stroke="var(--encre)"/>` + TX(146, 228, "−", { s: 12, c: ROUGE }) + TX(174, 228, "+", { s: 12, c: ROUGE }) +
        TX(105, 30, "H₂ (−)", { s: 13, c: BLEU }) + TX(215, 30, "O₂ (+)", { s: 13, c: ROUGE }) + TX(18, 120, "eau", { s: 11, c: "var(--encre-2)", a: "start" }), "Électrolyse de l'eau : deux tubes se remplissent de gaz");
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div><button type="button" class="bouton second" data-rejouer>Recommencer l'expérience</button>`;
      el.querySelector("[data-rejouer]").addEventListener("click", dessiner); dessiner();
      lecteur(el, [
        { texte: "On fait passer un courant dans de l'eau additionnée d'un peu de soude. Deux tubes pleins d'eau sont retournés sur les électrodes." },
        { texte: "Des bulles de gaz apparaissent sur les deux électrodes et montent dans les tubes." },
        { texte: "Du côté de la borne moins, la cathode, on obtient <b>deux fois plus</b> de gaz : c'est le dihydrogène H₂." },
        { texte: "Du côté de la borne plus, l'anode, c'est le dioxygène O₂. L'équation est : 2 H₂O donne 2 H₂ plus O₂." },
        { texte: "Tests : le dihydrogène fait une petite détonation près d'une flamme ; le dioxygène rallume une bûchette incandescente." }
      ]);
    } },
    { id: "a-ph", chap: "pc-solutions", titre: "Le pH et la couleur du BBT", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>${curseur("p", "pH de la solution :", 0, 14, 0.5, 3)}<div class="anim-info" data-info></div>`;
      const ex = [[2, "citron"], [3, "vinaigre"], [7, "eau pure"], [10, "eau savonneuse"], [12, "eau de Javel"]];
      const maj = () => {
        const p = lireC(el, "p"), coul = p < 6 ? "#E8C21F" : p <= 7.6 ? "#3DAA5C" : "#2F6FD0", nat = p < 7 ? "acide" : p === 7 ? "neutre" : "basique";
        el.querySelector("[data-svg]").innerHTML = svg("0 0 330 200", `<defs><linearGradient id="g-ph"><stop offset="0" stop-color="#CF3F35"/><stop offset=".45" stop-color="#E8C21F"/><stop offset=".5" stop-color="#3DAA5C"/><stop offset=".56" stop-color="#3DAA5C"/><stop offset="1" stop-color="#2F6FD0"/></linearGradient></defs>` +
          `<rect x="20" y="130" width="290" height="16" rx="8" fill="url(#g-ph)"/>` + Array.from({ length: 15 }, (_, k) => TX(20 + k * 290 / 14, 162, k, { s: 10, c: "var(--encre-2)" })).join("") +
          ex.map(([v, n], k) => TX(20 + v * 290 / 14, k % 2 ? 190 : 178, n, { s: 9.5, c: "var(--encre-2)", w: 700 })).join("") +
          `<path d="M${20 + p * 290 / 14} 124 l-6 -10 h12 z" fill="var(--encre)"/>` +
          `<path d="M140 10 v80 a25 25 0 0 0 50 0 v-80" fill="none" stroke="var(--encre)" stroke-width="2.5"/><path d="M142.5 40 v50 a22.5 22.5 0 0 0 45 0 v-50 z" fill="${coul}" style="transition:fill .4s"/>` +
          TX(230, 60, "BBT", { s: 12, c: "var(--encre-2)", a: "start" }) + TX(230, 80, coul === "#E8C21F" ? "jaune" : coul === "#3DAA5C" ? "vert" : "bleu", { s: 16, c: coul, a: "start" }), "Échelle de pH et tube avec du BBT");
        el.querySelector("[data-info]").innerHTML = `pH ${String(p).replace(".", ",")} : solution <b>${nat}</b> · le BBT devient <b>${coul === "#E8C21F" ? "jaune" : coul === "#3DAA5C" ? "vert" : "bleu"}</b>`;
      };
      brancherCurseurs(el, maj); maj();
      lecteur(el, [
        { texte: "Le pH va de 0 à 14. Avec un pH de 3, comme le vinaigre, la solution est <b>acide</b> : le BBT devient jaune.", p: 3 },
        { texte: "Avec un pH de 7, comme l'eau pure, la solution est <b>neutre</b> : le BBT est vert.", p: 7 },
        { texte: "Avec un pH supérieur à 7, comme l'eau savonneuse, la solution est <b>basique</b> : le BBT devient bleu.", p: 10 },
        { texte: "Si on dilue un acide avec de l'eau, son pH augmente et se rapproche de 7.", p: 5 }
      ], (i, e) => { ecrireC(el, "p", e.p); maj(); });
    } },
    { id: "a-ohm", chap: "pc-ohm", titre: "La loi d'Ohm", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div><div class="anim-deux">${curseur("u", "Tension U =", 0, 12, 0.5, 6, " V")}${curseur("r", "Résistance R =", 10, 100, 5, 30, " Ω")}</div><div class="anim-info" data-info></div>`;
      const maj = () => {
        const U = lireC(el, "u"), R = lireC(el, "r"), I = U / R, chaleur = Math.min(1, I / 0.6);
        const gx = x => 200 + x / 1.2 * 110, gy = y => 190 - y / 12 * 150;
        el.querySelector("[data-svg]").innerHTML = svg("0 0 330 210",
          `<rect x="20" y="40" width="150" height="120" rx="8" fill="none" stroke="var(--encre)" stroke-width="2.5"/>` +
          `<rect x="15" y="85" width="10" height="30" fill="var(--carte)" stroke="var(--encre)" stroke-width="2"/>` + TX(6, 80, "+", { s: 13, c: ROUGE }) + TX(6, 128, "−", { s: 13, c: ROUGE }) +
          `<rect x="70" y="30" width="50" height="20" rx="3" fill="rgb(${Math.round(80 + 175 * chaleur)},${Math.round(90 - 40 * chaleur)},60)" stroke="var(--encre)" stroke-width="2"/>` + TX(95, 22, "R", { s: 12 }) +
          `<circle cx="95" cy="160" r="14" fill="var(--carte)" stroke="var(--encre)" stroke-width="2"/>` + TX(95, 165, "A", { s: 13 }) + TX(95, 192, f2(I) + " A", { s: 12, c: BLEU }) +
          LI([200, 190], [315, 190], "var(--encre-2)", 1.5) + LI([200, 190], [200, 35], "var(--encre-2)", 1.5) + TX(318, 186, "I", { s: 11, a: "start" }) + TX(200, 30, "U", { s: 11 }) +
          LI([gx(0), gy(0)], [gx(Math.min(1.2, 12 / R)), gy(Math.min(12, 1.2 * R))], ORANGE, 2.5) + PO([gx(Math.min(I, 1.2)), gy(U)], 5, BLEU) + TX(258, 60, "U = R × I", { s: 12, c: ORANGE }), "Circuit avec un conducteur ohmique et sa caractéristique");
        el.querySelector("[data-info]").innerHTML = `I = ${fr("U", "R")} = ${fr(String(U).replace(".", ","), R)} = <b>${f2(I)} A</b> · plus la résistance est grande, plus le courant est faible.`;
      };
      brancherCurseurs(el, maj, { u: " V", r: " Ω" }); maj();
      lecteur(el, [
        { texte: "Un générateur alimente un conducteur ohmique de résistance R. L'ampèremètre A mesure l'intensité I du courant.", u: 6, r: 30 },
        { texte: "Augmente la tension : l'intensité augmente dans la même proportion. Le point bleu avance sur une droite qui passe par l'origine.", u: 12, r: 30 },
        { texte: "C'est la loi d'Ohm : U égale R fois I. La tension est proportionnelle à l'intensité.", u: 9, r: 30 },
        { texte: "Avec une plus grande résistance, pour la même tension, le courant est plus faible et la droite est plus pentue.", u: 9, r: 90 }
      ], (i, e) => { ecrireC(el, "u", e.u, " V"); ecrireC(el, "r", e.r, " Ω"); maj(); });
    } },
    { id: "a-energie", chap: "pc-energie", titre: "La mangue qui tombe", construire(el) {
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div>${curseur("h", "Hauteur de la mangue :", 0, 5, 0.25, 5, " m")}<button type="button" class="bouton second" data-lacher>Lâcher la mangue</button><div class="anim-info" data-info></div>`;
      const m = 0.2, g = 10, H = 5;
      const maj = () => {
        const h = lireC(el, "h"), Ep = m * g * h, Ec = m * g * H - Ep, v = Math.sqrt(2 * Ec / m), y = 190 - h / H * 160;
        const barre = (x, val, c, n) => `<rect x="${x}" y="${190 - val / 10 * 150}" width="34" height="${val / 10 * 150}" fill="${c}"/>` + TX(x + 17, 205, n, { s: 11, c }) + TX(x + 17, 184 - val / 10 * 150, f2(val) + " J", { s: 10 });
        el.querySelector("[data-svg]").innerHTML = svg("0 0 330 215", `<rect x="0" y="190" width="150" height="10" fill="#7A5230"/><rect x="18" y="20" width="10" height="170" fill="#6B4423"/><path d="M28 30 h55" stroke="#6B4423" stroke-width="6"/>` +
          `<ellipse cx="75" cy="${y - 9}" rx="9" ry="11" fill="#F2A71B" stroke="#C7641B"/>` + LI([110, 30], [110, 190], "var(--encre-2)", 1, 'stroke-dasharray="3 3"') + TX(118, 34, "5 m", { s: 10, a: "start" }) + TX(118, 190, "0", { s: 10, a: "start" }) +
          barre(175, Ep, BLEU, "Ep") + barre(225, Ec, ORANGE, "Ec") + barre(275, Ep + Ec, VERT, "Em"), "Une mangue qui tombe et ses énergies");
        el.querySelector("[data-info]").innerHTML = `Ep = m·g·h = ${f2(Ep)} J · Ec = ${f2(Ec)} J · vitesse ≈ <b>${f2(v)} m/s</b> · Em = Ep + Ec = <b>10 J</b> (constante sans frottements)`;
      };
      let chute = null; const stop = () => { clearInterval(chute); chute = null; }; nettoyages.push(stop);
      el.querySelector("[data-lacher]").addEventListener("click", () => { stop(); let t = 0; ecrireC(el, "h", 5, " m"); maj();
        chute = setInterval(() => { t += 0.04; const h = Math.max(0, 5 - 5 * t * t); ecrireC(el, "h", Math.round(h * 4) / 4, " m"); maj(); if (h <= 0) stop(); }, 40); });
      brancherCurseurs(el, maj, { h: " m" }); maj();
      lecteur(el, [
        { texte: "Une mangue de 200 grammes est accrochée à 5 mètres. Elle est immobile : toute son énergie est potentielle, 10 joules.", h: 5 },
        { texte: "Pendant la chute, sa hauteur diminue : l'énergie potentielle, en bleu, diminue. Sa vitesse augmente : l'énergie cinétique, en orange, augmente.", h: 2.5 },
        { texte: "Au sol, toute l'énergie est devenue cinétique : la mangue arrive à 10 mètres par seconde.", h: 0 },
        { texte: "La somme, l'énergie mécanique en vert, reste toujours 10 joules : elle se conserve s'il n'y a pas de frottements. Appuie sur « Lâcher la mangue » !", h: 5 }
      ], (i, e) => { stop(); ecrireC(el, "h", e.h, " m"); maj(); });
    } },
    // ---------------- SVT ----------------
    { id: "a-circulation", chap: "svt-circulation", titre: "Le trajet du sang", construire(el) {
      const petite = "M110 150 C60 150 60 40 110 30 L210 30 C260 40 260 110 210 110", grande = "M210 150 C265 155 265 215 210 215 L110 215 C55 215 55 115 110 110";
      const points = (d, de, a, n) => Array.from({ length: n }, (_, k) => `<circle r="5"><animateMotion dur="6s" begin="${-k * 6 / n}s" repeatCount="indefinite" path="${d}"/><animate attributeName="fill" values="${de};${de};${a};${a}" keyTimes="0;0.4;0.6;1" dur="6s" begin="${-k * 6 / n}s" repeatCount="indefinite"/></circle>`).join("");
      el.querySelector(".anim-scene").innerHTML = `<div data-svg>${svg("0 0 320 235",
        `<path d="${petite}" fill="none" stroke="var(--trait)" stroke-width="7"/><path d="${grande}" fill="none" stroke="var(--trait)" stroke-width="7"/>` +
        `<rect x="120" y="14" width="80" height="30" rx="12" fill="#F5B7C5"/>` + TX(160, 34, "poumons", { s: 12, c: "#18283A" }) + `<rect x="115" y="200" width="90" height="30" rx="10" fill="#E8D5B7"/>` + TX(160, 220, "organes", { s: 12, c: "#18283A" }) +
        `<g class="coeur"><rect x="100" y="95" width="55" height="30" rx="6" fill="#6C8FD6" data-z="od"/><rect x="100" y="130" width="55" height="35" rx="6" fill="#4B6FBF" data-z="vd"/><rect x="165" y="95" width="55" height="30" rx="6" fill="#E57368" data-z="og"/><rect x="165" y="130" width="55" height="35" rx="6" fill="#CF3F35" data-z="vg"/></g>` +
        TX(127, 114, "OD", { s: 11, c: "#fff" }) + TX(127, 152, "VD", { s: 11, c: "#fff" }) + TX(192, 114, "OG", { s: 11, c: "#fff" }) + TX(192, 152, "VG", { s: 11, c: "#fff" }) +
        points(petite, "#3B6FD0", "#CF3F35", 5) + points(grande, "#CF3F35", "#3B6FD0", 5) + TX(35, 80, "petite", { s: 10, c: "var(--encre-2)" }) + TX(35, 92, "circulation", { s: 10, c: "var(--encre-2)" }) + TX(290, 175, "grande", { s: 10, c: "var(--encre-2)" }) + TX(290, 187, "circulation", { s: 10, c: "var(--encre-2)" }),
        "Le cœur et les deux circulations sanguines")}</div><p class="anim-note">Rouge : sang riche en dioxygène. Bleu : sang pauvre en dioxygène. (Le côté droit du cœur est dessiné à gauche, comme sur un schéma de face.)</p>`;
      lecteur(el, [
        { texte: "Le cœur a quatre cavités : deux oreillettes en haut, deux ventricules en bas. Le cœur droit est dessiné à gauche.", z: "" },
        { texte: "Le ventricule droit envoie le sang pauvre en dioxygène, en bleu, vers les <b>poumons</b> : c'est la petite circulation.", z: "vd" },
        { texte: "Dans les poumons, le sang se charge en dioxygène et devient rouge. Il revient dans l'oreillette gauche.", z: "og" },
        { texte: "Le ventricule gauche envoie ce sang riche en dioxygène dans l'aorte, vers tous les <b>organes</b> : c'est la grande circulation.", z: "vg" },
        { texte: "Les organes prennent le dioxygène. Le sang, redevenu bleu, revient par les veines caves dans l'oreillette droite, et le tour recommence.", z: "od" }
      ], (i, e) => el.querySelectorAll("[data-z]").forEach(r => r.classList.toggle("allume", r.dataset.z === e.z)));
    } },
    { id: "a-digestion", chap: "svt-digestion", titre: "Le voyage d'une bouchée", construire(el) {
      const chemin = "M160 42 L160 105 C160 115 175 118 190 118 C215 120 215 145 190 150 C170 152 150 150 140 158 L200 166 L135 174 L200 182 L135 190 L200 198 L150 206 C120 206 110 200 110 180 L110 150 C110 135 120 132 225 132 L230 132 C240 132 240 150 240 215";
      const org = (id, d, n, x, y) => `<path d="${d}" data-o="${id}" class="organe"/>` + TX(x, y, n, { s: 11, a: x > 160 ? "start" : "end" });
      el.querySelector(".anim-scene").innerHTML = `<div data-svg>${svg("0 0 330 235",
        `<circle cx="160" cy="25" r="20" fill="var(--grille)" stroke="var(--trait)"/><rect x="95" y="50" width="160" height="180" rx="40" fill="var(--grille)" stroke="var(--trait)"/>` +
        org("bouche", "M150 36 h20 v8 h-20 z", "bouche (salive)", 130, 30) + org("oeso", "M156 46 h8 v58 h-8 z", "œsophage", 150, 80) +
        org("estomac", "M165 108 C190 100 225 115 215 145 C205 160 170 155 165 140 z", "estomac", 222, 120) + org("grele", "M132 156 h74 v48 h-74 z", "intestin grêle", 212, 185) +
        org("gros", "M105 135 h135 v10 h-125 v70 h-10 z", "gros intestin", 100, 225) +
        `<circle r="6" fill="${ORANGE}" stroke="#fff" stroke-width="1.5"><animateMotion dur="14s" repeatCount="indefinite" path="${chemin}"/></circle>`, "Le tube digestif et le trajet d'une bouchée")}</div>`;
      lecteur(el, [
        { texte: "Dans la <b>bouche</b>, les dents broient les aliments et la salive commence à digérer l'amidon grâce à l'amylase.", o: "bouche" },
        { texte: "La bouchée descend par l'<b>œsophage</b> jusqu'à l'estomac.", o: "oeso" },
        { texte: "Dans l'<b>estomac</b>, les aliments sont brassés ; le suc gastrique et la pepsine commencent à digérer les protéines.", o: "estomac" },
        { texte: "Dans l'<b>intestin grêle</b>, le suc pancréatique, la bile et le suc intestinal finissent la digestion. Les nutriments passent dans le sang grâce aux villosités.", o: "grele" },
        { texte: "Ce qui n'est pas digéré passe dans le <b>gros intestin</b>, où l'eau est récupérée, puis est rejeté.", o: "gros" }
      ], (i, e) => el.querySelectorAll("[data-o]").forEach(p => p.classList.toggle("allume", p.dataset.o === e.o)));
    } },
    { id: "a-transfusion", chap: "svt-transfusion", titre: "Qui peut donner à qui ?", construire(el) {
      const G = ["A", "B", "AB", "O"];
      el.querySelector(".anim-scene").innerHTML = `<div class="anim-deux"><div><span class="etiquette">Donneur</span><div class="segments" data-g="don">${G.map(g => `<button type="button" data-v="${g}" aria-pressed="${g === "O"}">${g}</button>`).join("")}</div></div>
        <div><span class="etiquette">Receveur</span><div class="segments" data-g="rec">${G.map(g => `<button type="button" data-v="${g}" aria-pressed="${g === "A"}">${g}</button>`).join("")}</div></div></div><div data-svg></div><div class="anim-info" data-info></div>`;
      let don = "O", rec = "A";
      const maj = () => {
        const antigenes = don === "AB" ? ["A", "B"] : don === "O" ? [] : [don], anticorps = rec === "AB" ? [] : rec === "O" ? ["A", "B"] : [rec === "A" ? "B" : "A"];
        const conflit = antigenes.filter(a => anticorps.includes(a)), ok = !conflit.length;
        const cellule = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#E05A4E" stroke="#A8332A" stroke-width="1.5"/>` + antigenes.map((a, k) => a === "A" ? `<path d="M${x - 4 + k * 8} ${y - 18} l4 -7 l4 7 z" fill="${BLEU}"/>` : `<rect x="${x - 4 + k * 8}" y="${y - 23}" width="7" height="7" fill="${VERT}"/>`).join("");
        const y = (x, yy, a) => `<path d="M${x} ${yy} v10 M${x} ${yy} l-5 -7 M${x} ${yy} l5 -7" stroke="${a === "A" ? BLEU : VERT}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
        const pos = ok ? [[40, 70], [85, 110], [130, 60], [60, 150], [120, 150], [170, 105]] : [[90, 95], [110, 105], [95, 118], [115, 88], [80, 112], [104, 128]];
        el.querySelector("[data-svg]").innerHTML = svg("0 0 330 200", `<rect x="10" y="30" width="190" height="160" rx="14" fill="#FDECEA" stroke="var(--trait)"/>` + pos.map(p => cellule(p[0], p[1])).join("") +
          anticorps.map((a, k) => [0, 1, 2].map(j => y(225 + j * 30 + k * 12, 60 + j * 40 + k * 20, a)).join("")).join("") +
          TX(105, 20, "hématies du donneur " + don, { s: 11 }) + TX(262, 12, "anticorps du", { s: 11 }) + TX(262, 25, "receveur " + rec, { s: 11 }) + TX(265, 185, anticorps.length ? anticorps.map(a => "anti-" + a).join(" + ") : "aucun anticorps", { s: 11, c: "var(--encre-2)" }), "Hématies du donneur et anticorps du receveur");
        el.querySelector("[data-info]").innerHTML = ok ? `<b style="color:var(--vert)">Compatible :</b> les hématies ${don} n'ont ${antigenes.length ? "que l'antigène " + antigenes.join(" et ") + ", " : "aucun antigène, "}que les anticorps du receveur ${rec} n'attaquent pas.`
          : `<b style="color:var(--rouge)">Agglutination !</b> Les anticorps anti-${conflit.join(" et anti-")} du receveur collent les hématies ${don} entre elles : transfusion impossible.`;
      };
      el.querySelectorAll("[data-g]").forEach(g => g.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { if (g.dataset.g === "don") don = b.dataset.v; else rec = b.dataset.v; g.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false")); maj(); })));
      maj();
      const choisir = (d, r) => { don = d; rec = r; el.querySelectorAll('[data-g="don"] button').forEach(x => x.setAttribute("aria-pressed", x.dataset.v === d ? "true" : "false")); el.querySelectorAll('[data-g="rec"] button').forEach(x => x.setAttribute("aria-pressed", x.dataset.v === r ? "true" : "false")); maj(); };
      lecteur(el, [
        { texte: "Les hématies portent des antigènes : triangle bleu pour A, carré vert pour B. Le groupe O n'en a pas.", d: "A", r: "A" },
        { texte: "Le plasma du receveur contient des anticorps contre les antigènes qu'il n'a pas. Un receveur A a des anticorps anti-B.", d: "B", r: "A" },
        { texte: "Si les anticorps rencontrent leur antigène, les hématies se collent : c'est l'<b>agglutination</b>, un accident grave.", d: "B", r: "A" },
        { texte: "Le groupe O n'a aucun antigène : il peut donner à tout le monde. C'est le donneur universel.", d: "O", r: "B" },
        { texte: "Le groupe AB n'a aucun anticorps : il peut recevoir de tous les groupes. C'est le receveur universel. Essaie toutes les combinaisons !", d: "A", r: "AB" }
      ], (i, e) => choisir(e.d, e.r));
    } },
    { id: "a-sol", chap: "svt-sol", titre: "Sable ou argile : qui laisse passer l'eau ?", construire(el) {
      const entonnoir = (x, c, n, lit, h) => `<path d="M${x - 45} 40 h90 l-35 55 v20 h-20 v-20 z" fill="var(--carte)" stroke="var(--encre)" stroke-width="2"/><path d="M${x - 40} 44 h80 l-30 47 h-20 z" fill="${c}"/>` + TX(x, 30, n, { s: 12 }) +
        Array.from({ length: 4 }, (_, k) => `<circle cx="${x}" cy="118" r="3" fill="${BLEU}"><animate attributeName="cy" from="118" to="175" dur="${lit}s" begin="${k * lit / 4}s" repeatCount="indefinite"/></circle>`).join("") +
        `<rect x="${x - 22}" y="140" width="44" height="70" fill="none" stroke="var(--encre)" stroke-width="2"/><rect x="${x - 20}" y="208" width="40" height="0" fill="${BLEU}" fill-opacity=".7"><animate attributeName="height" from="0" to="${h}" dur="9s" fill="freeze"/><animate attributeName="y" from="208" to="${208 - h}" dur="9s" fill="freeze"/></rect>`;
      const dessiner = () => el.querySelector("[data-svg]").innerHTML = svg("0 0 320 225", entonnoir(85, "#E3C48A", "sol sableux", 0.5, 56) + entonnoir(235, "#9C6B4E", "sol argileux", 2.2, 14) + TX(85, 222, "80 mL", { s: 12, c: BLEU }) + TX(235, 222, "20 mL", { s: 12, c: BLEU }), "Perméabilité d'un sol sableux et d'un sol argileux");
      el.querySelector(".anim-scene").innerHTML = `<div data-svg></div><button type="button" class="bouton second" data-rejouer>Recommencer l'expérience</button>`;
      el.querySelector("[data-rejouer]").addEventListener("click", dessiner); dessiner();
      lecteur(el, [
        { texte: "On verse 100 millilitres d'eau sur deux échantillons : du sol sableux à gauche, du sol argileux à droite." },
        { texte: "Dans le sable, l'eau coule vite : les grains sont gros et laissent de grands espaces. On recueille 80 millilitres." },
        { texte: "Dans l'argile, l'eau passe lentement : les particules sont très fines et retiennent l'eau. On recueille seulement 20 millilitres." },
        { texte: "Conclusion : le sol sableux est très <b>perméable</b> ; le sol argileux l'est peu, mais il garde mieux l'eau pour les plantes." }
      ]);
    } },
    // ---------------- Histoire et Français ----------------
    { id: "a-frise", chap: "hg-independance", titre: "La frise de 1893 à 1960", construire(el) {
      const E = [[1893, "10 mars 1893 : création de la colonie de Côte d'Ivoire ; Binger est le premier gouverneur ; capitale Grand-Bassam."], [1898, "1898 : capture de Samory Touré, grand résistant à la conquête."], [1900, "1900 : la capitale passe à Bingerville après une épidémie de fièvre jaune."], [1934, "1934 : Abidjan devient la capitale."],
        [1944, "1944 : Félix Houphouët-Boigny crée le Syndicat agricole africain (SAA)."], [1946, "11 avril 1946 : loi Houphouët-Boigny abolissant le travail forcé ; création du PDCI (avril) et du RDA (octobre, à Bamako)."], [1949, "Décembre 1949 : marche des femmes sur Grand-Bassam."],
        [1956, "1956 : loi-cadre Defferre, autonomie interne."], [1958, "28 septembre 1958 : référendum ; 4 décembre 1958 : proclamation de la République."], [1960, "7 août 1960 : <b>indépendance</b> de la Côte d'Ivoire."]];
      const X = a => 30 + (a - 1890) * 13.5;
      el.querySelector(".anim-scene").innerHTML = `<div class="frise-defil"><svg viewBox="0 0 990 120" class="frise" role="img" aria-label="Frise chronologique de 1893 à 1960">${LI([20, 60], [975, 60], "var(--encre)", 3)}` +
        [1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960].map(a => LI([X(a), 54], [X(a), 66], "var(--encre-2)", 2) + TX(X(a), 84, a, { s: 12, c: "var(--encre-2)" })).join("") +
        E.map(([a], k) => `<g data-ev="${k}" class="ev"><circle cx="${X(a)}" cy="60" r="9" fill="${a >= 1944 ? ORANGE : BLEU}" stroke="#fff" stroke-width="2"/>${TX(X(a), k % 2 ? 108 : 36, a, { s: 12, c: a >= 1944 ? ORANGE : BLEU })}</g>`).join("") + `</svg></div><div class="anim-note"><span style="color:${BLEU};font-weight:800">●</span> colonisation · <span style="color:${ORANGE};font-weight:800">●</span> marche vers l'indépendance</div>`;
      const defil = el.querySelector(".frise-defil");
      const montrer = k => { el.querySelectorAll(".ev").forEach(g => g.classList.toggle("allume", +g.dataset.ev === k)); const x = X(E[k][0]) / 990 * defil.scrollWidth; defil.scrollTo({ left: Math.max(0, x - defil.clientWidth / 2), behavior: "smooth" }); };
      lecteur(el, E.map(([, t], k) => ({ texte: t, k })), (i, e) => montrer(e.k));
      el.querySelectorAll(".ev").forEach(g => g.addEventListener("click", () => el.querySelectorAll("[data-pt]")[+g.dataset.ev].click()));
    } },
    { id: "a-communication", chap: "fr-communication", titre: "Le schéma de la communication", construire(el) {
      const perso2 = (x, c) => `<circle cx="${x}" cy="95" r="16" fill="#7B4A2A"/><rect x="${x - 18}" y="113" width="36" height="45" rx="10" fill="${c}"/>`;
      el.querySelector(".anim-scene").innerHTML = `<div data-svg>${svg("0 0 330 210",
        perso2(45, ORANGE) + perso2(285, BLEU) + TX(45, 180, "émetteur", { s: 12, c: ORANGE }) + TX(285, 180, "récepteur", { s: 12, c: BLEU }) +
        `<g data-p="canal">${LI([75, 120], [255, 120], "var(--encre-2)", 3, 'stroke-dasharray="6 5"')}${TX(165, 140, "canal : la voix, un papier, un téléphone…", { s: 10.5, c: "var(--encre-2)" })}</g>` +
        `<g data-p="message"><rect x="-16" y="-11" width="32" height="22" rx="3" fill="#fff" stroke="${VERT}" stroke-width="2"/><path d="M-16 -11 l16 12 l16 -12" fill="none" stroke="${VERT}" stroke-width="2"/><animateMotion dur="3.5s" repeatCount="indefinite" path="M80 120 L250 120"/></g>` +
        `<g data-p="code">${`<rect x="105" y="160" width="120" height="24" rx="12" fill="${VIOLET}" fill-opacity=".15" stroke="${VIOLET}"/>`}${TX(165, 177, "code : le français", { s: 11, c: VIOLET })}</g>` +
        `<g data-p="referent"><path d="M120 25 h90 a10 10 0 0 1 10 10 v25 a10 10 0 0 1 -10 10 h-40 l-5 10 l-5 -10 h-40 a10 10 0 0 1 -10 -10 v-25 a10 10 0 0 1 10 -10 z" fill="var(--carte)" stroke="${ROUGE}" stroke-width="2"/>${TX(165, 45, "référent :", { s: 10.5, c: ROUGE })}${TX(165, 60, "la réunion de parents", { s: 10.5, c: ROUGE })}</g>`,
        "Schéma de la communication")}</div>`;
      lecteur(el, [
        { texte: "L'<b>émetteur</b>, ici le proviseur, veut transmettre une information au <b>récepteur</b>, les parents d'élèves.", p: [] },
        { texte: "Ce qu'il transmet est le <b>message</b> : l'enveloppe verte qui voyage.", p: ["message"] },
        { texte: "Le message passe par un <b>canal</b> : la voix, une lettre, un téléphone.", p: ["message", "canal"] },
        { texte: "Émetteur et récepteur doivent partager le même <b>code</b> : ici, la langue française.", p: ["message", "canal", "code"] },
        { texte: "Le <b>référent</b> est ce dont on parle : la réunion de parents. Tous ces éléments forment le schéma de la communication.", p: ["message", "canal", "code", "referent"] }
      ], (i, e) => el.querySelectorAll("[data-p]").forEach(g => g.classList.toggle("estompe", !e.p.includes(g.dataset.p))));
    } }
  ];
  const animsDe = id => ANIMS.filter(a => a.chap === id);
  const blocAnim = a => `<div class="anim" data-anim="${a.id}"><div class="anim-tete"><span class="anim-badge">▶ Animation</span><b>${a.titre}</b></div><div class="anim-scene"></div>${controles}</div>`;
  function monterAnims() { vue.querySelectorAll("[data-anim]").forEach(el => { const a = ANIMS.find(x => x.id === el.dataset.anim); if (a && !el.dataset.monte) { el.dataset.monte = "1"; a.construire(el); } }); }
  function afficherAnimations() {
    const groupes = MATIERES.filter(m => m.chapitres).map(M => [M, ANIMS.filter(a => { const c = chapitreDe(a.chap); return c && c.matiere === M.id; })]).filter(([, l]) => l.length);
    vue.innerHTML = `<section class="ecran large"><button type="button" class="retour" id="retour">‹ Accueil</button>
      <h2>Apprendre en animations</h2>
      <p style="color:var(--encre-2)">Des animations expliquées à voix haute, comme de petites vidéos. Appuie sur <b>▶ Lecture</b>, ou avance étape par étape. Tu peux aussi manipuler les curseurs.</p>
      ${groupes.map(([M, l]) => `<span class="etiquette pleine">${M.nom}</span><div class="liste grille2">${l.map(a => `<button type="button" class="theme-carte" data-a="${a.id}"><span class="icone" style="background:${M.couleur}">▶</span><span class="txt"><b>${a.titre}</b><small>${chapitreDe(a.chap).titre.replace(/^[^·]+· /, "")}</small></span></button>`).join("")}</div>`).join("")}
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("accueil"));
    vue.querySelectorAll("[data-a]").forEach(b => b.addEventListener("click", () => aller("anim", b.dataset.a)));
  }
  function afficherAnim(id) {
    const a = ANIMS.find(x => x.id === id), c = chapitreDe(a.chap), M = matiereDe(c.matiere);
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Animations</button>${blocAnim(a)}
      <button type="button" class="carte-mini" data-chap="${c.id}" style="--c:${M.couleur}"><span class="etiquette">La leçon complète</span><b>${c.titre.replace(/^[^·]+· /, "")}</b><small>${M.nom} · cours, exemple et exercices</small></button></section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("animations"));
    vue.querySelector("[data-chap]").addEventListener("click", () => { ongletChapitre[c.id] = "exos"; aller("chapitre", c.id); });
    monterAnims();
  }
