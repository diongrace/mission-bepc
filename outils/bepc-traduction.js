  // ---------- Toucher un mot pour le traduire · Mon carnet de mots ----------
  const VOIX_LANGUE = { en: "en-GB", es: "es-ES" };
  const NOM_LANGUE = { en: "Anglais", es: "Espagnol" };
  const ICONE_CARNET = ic('<path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5z"/><path d="M5 21.5V4.5M9 7h6M9 11h4"/>');
  const langueDeComp = comp => /^(m|def)-en-/.test(comp || "") ? "en" : /^(m|def)-es-/.test(comp || "") ? "es" : null;
  const sensCourt = s => s.split(" ; ")[0].replace(/\s*\([^)]*\)\s*$/, "");
  let bulleMot = null;
  function fermerBulle() {
    if (bulleMot) { bulleMot.remove(); bulleMot = null; }
    try { if (window.CSS && CSS.highlights) CSS.highlights.delete("mot-touche"); } catch (e) {}
  }
  // Le mot exact sous le doigt
  function motAuPoint(x, y) {
    let noeud, pos;
    if (document.caretPositionFromPoint) { const p = document.caretPositionFromPoint(x, y); if (!p) return null; noeud = p.offsetNode; pos = p.offset; }
    else if (document.caretRangeFromPoint) { const r = document.caretRangeFromPoint(x, y); if (!r) return null; noeud = r.startContainer; pos = r.startOffset; }
    else return null;
    if (!noeud || noeud.nodeType !== 3) return null;
    const t = noeud.textContent, lettre = /[A-Za-zÀ-ÖØ-öø-ÿ'’]/;
    let a = pos, b = pos;
    while (a > 0 && lettre.test(t[a - 1])) a--;
    while (b < t.length && lettre.test(t[b])) b++;
    while (a < b && /['’]/.test(t[a])) a++;
    while (b > a && /['’]/.test(t[b - 1])) b--;
    if (b <= a) return null;
    const range = document.createRange(); range.setStart(noeud, a); range.setEnd(noeud, b);
    const rc = range.getBoundingClientRect();
    if (x < rc.left - 6 || x > rc.right + 6 || y < rc.top - 6 || y > rc.bottom + 6) return null;
    return { mot: t.slice(a, b), range };
  }
  function traduireMot(mot, langue, mixte) {
    let r = chercherMot(mot, langue);
    if (!r && /['’]/.test(mot)) r = chercherMot(mot.split(/['’]/).pop(), langue);
    if (r || mixte) return r;
    if (/^[A-ZÀ-Ö]/.test(mot)) return { mot, base: mot, sens: "Nom propre (personne, ville ou pays) : il ne se traduit pas.", note: "", inconnu: true };
    return { mot, base: mot, sens: "Ce mot n'est pas encore dans le dictionnaire. Aide-toi de la phrase et de la traduction complète.", note: "", inconnu: true };
  }
  function noterDansCarnet(r, langue) {
    if (r.inconnu || r.sens.startsWith("✗")) return false;
    etat.carnet = etat.carnet || [];
    const i = etat.carnet.findIndex(x => x.l === langue && x.m === r.base);
    if (i >= 0) { const x = etat.carnet.splice(i, 1)[0]; x.n = (x.n || 1) + 1; x.f = r.mot.toLowerCase(); etat.carnet.unshift(x); }
    else etat.carnet.unshift({ l: langue, m: r.base, s: r.sens, f: r.mot.toLowerCase(), d: aujourdhui(), n: 1, ok: 0 });
    etat.carnet = etat.carnet.slice(0, 500); sauver();
    return true;
  }
  function montrerBulle(r, langue, range) {
    fermerBulle();
    try { if (window.Highlight && CSS.highlights) CSS.highlights.set("mot-touche", new Highlight(range)); } catch (e) {}
    const garde = noterDansCarnet(r, langue), faux = r.sens.startsWith("✗");
    const b = document.createElement("div"); b.className = "bulle-mot"; b.setAttribute("role", "dialog"); b.setAttribute("aria-label", "Traduction de " + r.mot);
    b.innerHTML = `<div class="bulle-tete"><span>${NOM_LANGUE[langue]} → français</span><button type="button" class="bulle-x" aria-label="Fermer">✕</button></div>
      <div class="bulle-ligne"><b class="bulle-t" lang="${langue}">${r.mot}</b>${r.inconnu ? "" : btnEcoute(r.mot, VOIX_LANGUE[langue], "Écouter", true)}</div>
      ${r.base !== r.mot.toLowerCase() && !r.inconnu ? `<small class="bulle-note">vient de <b lang="${langue}">${r.base}</b>${r.note ? " · " + r.note : ""}</small>` : r.note ? `<small class="bulle-note">${r.note}</small>` : ""}
      <p class="bulle-sens${faux ? " faux" : ""}">${r.sens}</p>
      ${r.inconnu ? "" : `<div class="bulle-pied">${garde ? '<span class="pastille vert">✓ Rangé dans ton carnet</span>' : '<span class="pastille">Piège d\'examen : à ne pas écrire</span>'}<button type="button" class="bulle-carnet" data-carnet="${langue}">Mon carnet (${(etat.carnet || []).length}) ›</button></div>`}`;
    document.body.appendChild(b); bulleMot = b;
    b.querySelector(".bulle-x").addEventListener("click", fermerBulle);
    const e = b.querySelector("[data-parle]"); if (e) e.addEventListener("click", () => parler(decodeURIComponent(e.dataset.parle), e.dataset.langue, e));
    const c = b.querySelector("[data-carnet]"); if (c) c.addEventListener("click", () => { fermerBulle(); aller("carnet", c.dataset.carnet); });
  }
  document.addEventListener("click", e => {
    if (bulleMot && bulleMot.contains(e.target)) return;
    const zone = e.target.closest && e.target.closest("[lang=en],[lang=es],[data-trad]");
    if (!zone || e.target.closest("button,a,input,textarea,summary,select,label,svg")) { fermerBulle(); return; }
    const langue = zone.dataset.trad || zone.getAttribute("lang");
    if (!DICO[langue]) { fermerBulle(); return; }
    const m = motAuPoint(e.clientX, e.clientY); if (!m) { fermerBulle(); return; }
    const r = traduireMot(m.mot, langue, zone.hasAttribute("data-trad"));
    if (r) montrerBulle(r, langue, m.range); else fermerBulle();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") fermerBulle(); });

  // ---------- L'écran « Mon carnet de mots » ----------
  const filtreCarnet = { l: "tous" };
  function afficherCarnet(p) {
    if (p === "en" || p === "es") filtreCarnet.l = p;
    const tous = etat.carnet || [], liste = tous.filter(x => filtreCarnet.l === "tous" || x.l === filtreCarnet.l);
    const sus = tous.filter(x => x.ok >= 2).length;
    const ligne = x => `<div class="mot-carnet${x.ok >= 2 ? " su" : ""}"><div class="mc-mot"><b lang="${x.l}">${x.m}</b>${x.f && x.f !== x.m ? `<small>vu : <span lang="${x.l}">${x.f}</span></small>` : ""}</div>
      <div class="mc-sens">${x.s}</div>
      <div class="mc-actions">${x.ok >= 2 ? '<span class="pastille vert">su</span>' : ""}${btnEcoute(x.m, VOIX_LANGUE[x.l], "Écouter", true)}<button type="button" class="mc-suppr" data-suppr="${x.l}:${encodeURIComponent(x.m)}" aria-label="Retirer ${x.m} du carnet">✕</button></div></div>`;
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Mes matières</button>
      ${bandeau("#C23B6B", ICONE_CARNET, "Mon carnet de mots", tous.length ? `${tous.length} mot${tous.length > 1 ? "s" : ""} · ${sus} bien su${sus > 1 ? "s" : ""}` : "Anglais et espagnol", tous.length ? Math.round(sus / tous.length * 100) : 0)}
      <div class="carte essai-mot"><span class="etiquette">Comment ça marche</span>
        <p>Dans tes textes d'anglais et d'espagnol, <b>touche un mot</b> : sa traduction s'affiche en bas de l'écran, avec la prononciation. Le mot est rangé ici tout seul, pour le réviser.</p>
        <p class="essai">Essaie ici : <span lang="en">Yesterday, I went to the market with my brother.</span></p>
        <p class="essai">Y aquí : <span lang="es">Me gustan las frutas y quiero ser ingeniera.</span></p></div>
      ${tous.length >= 3 ? `<button type="button" class="bouton" id="quiz-carnet">Réviser mes mots (${Math.min(10, liste.length >= 3 ? liste.length : tous.length)} questions)</button>` : ""}
      ${tous.length ? `<div class="onglets" role="tablist" style="--c:#C23B6B">${[["tous", "Tous"], ["en", "Anglais"], ["es", "Espagnol"]].map(([k, n]) => `<button type="button" role="tab" data-filtre="${k}" aria-selected="${filtreCarnet.l === k}">${n} <small>${k === "tous" ? tous.length : tous.filter(x => x.l === k).length}</small></button>`).join("")}</div>
        <div class="liste-carnet">${liste.map(ligne).join("") || '<p style="color:var(--encre-2)">Aucun mot dans cette langue pour l\'instant.</p>'}</div>`
      : `<div class="carte" style="display:grid;gap:8px"><b>Ton carnet est vide pour l'instant.</b><p style="color:var(--encre-2)">Ouvre un texte de l'oral d'anglais, un grand thème ou un sujet type BEPC et touche les mots que tu ne connais pas. Tu peux commencer par les deux phrases ci-dessus.</p>
        <button type="button" class="bouton second" id="vers-textes">Ouvrir les textes d'anglais</button></div>`}
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("matieres"));
    vue.querySelectorAll("[data-filtre]").forEach(b => b.addEventListener("click", () => { filtreCarnet.l = b.dataset.filtre; afficherCarnet(); }));
    vue.querySelectorAll("[data-suppr]").forEach(b => b.addEventListener("click", () => {
      const [l, m] = b.dataset.suppr.split(":"); etat.carnet = tous.filter(x => !(x.l === l && x.m === decodeURIComponent(m))); sauver(); afficherCarnet();
    }));
    const q = vue.querySelector("#quiz-carnet"); if (q) q.addEventListener("click", () => quizCarnet(liste.length >= 3 ? liste : tous));
    const t = vue.querySelector("#vers-textes"); if (t) t.addEventListener("click", () => { ongletChapitre["en-oral-bepc"] = "exos"; aller("chapitre", "en-oral-bepc"); });
    brancherEcoute();
  }
  // Petit quiz : d'abord les mots les moins sus
  function quizCarnet(mots) {
    const choisis = melanger(mots.slice()).sort((a, b) => a.ok - b.ok).slice(0, 10);
    let i = 0, bonnes = 0;
    const pioche = (l, sauf, sens) => {
      const autres = (etat.carnet || []).filter(x => x.l === l && x.m !== sauf.m).map(x => sens ? sensCourt(x.s) : x.m);
      const dico = Object.entries(DICO[l]).filter(([m, s]) => !s.startsWith("✗") && !m.includes(" ") && m !== sauf.m).map(([m, s]) => sens ? sensCourt(s) : m);
      const bonne = sens ? sensCourt(sauf.s) : sauf.m, res = [];
      for (const c of melanger(autres).concat(melanger(dico))) { if (res.length === 3) break; if (c !== bonne && !res.includes(c)) res.push(c); }
      return res;
    };
    const question = () => {
      const x = choisis[i], envers = i % 2 === 1, bonne = envers ? x.m : sensCourt(x.s);
      const choix = melanger([bonne, ...pioche(x.l, x, !envers)]);
      vue.innerHTML = `<section class="ecran">
        <div class="exo-haut"><button type="button" class="quitter" id="quitter" aria-label="Quitter">✕</button>
          <div class="progress"><i style="width:${i / choisis.length * 100}%"></i></div><span class="exo-titre">${i + 1}/${choisis.length}</span></div>
        <span class="exo-titre">Mon carnet de mots · ${NOM_LANGUE[x.l]}</span>
        <div class="question">${envers ? `<p>Comment dit-on en ${NOM_LANGUE[x.l].toLowerCase()} :</p><p class="mot-quiz">« ${sensCourt(x.s)} »</p>`
          : `<p>Que veut dire ce mot ?</p><div class="bulle-ligne"><p class="mot-quiz" lang="${x.l}">${x.m}</p>${btnEcoute(x.m, VOIX_LANGUE[x.l], "Écouter", true)}</div>`}</div>
        <div class="choix">${choix.map(c => `<button type="button" data-rep="${encodeURIComponent(c)}"${envers ? ` lang="${x.l}"` : ""}>${c}</button>`).join("")}</div>
        <p class="message" id="message" aria-live="polite"></p>
        <button type="button" class="bouton cache" id="suite">${i + 1 < choisis.length ? "Question suivante" : "Voir mon score"}</button>
      </section>`;
      brancherEcoute();
      if (!envers && voixOk && etat.reglages && etat.reglages.sons !== false) { const bt = vue.querySelector("[data-parle]"); if (bt) setTimeout(() => parler(x.m, VOIX_LANGUE[x.l], bt), 250); }
      vue.querySelector("#quitter").addEventListener("click", () => aller("carnet"));
      vue.querySelectorAll("[data-rep]").forEach(b => b.addEventListener("click", () => {
        if (vue.querySelector(".choix").dataset.fait) return; vue.querySelector(".choix").dataset.fait = "1";
        const juste = decodeURIComponent(b.dataset.rep) === bonne;
        vue.querySelectorAll("[data-rep]").forEach(y => { if (decodeURIComponent(y.dataset.rep) === bonne) y.classList.add("juste"); else if (y === b) y.classList.add("faux"); });
        x.ok = juste ? (x.ok || 0) + 1 : 0; if (juste) bonnes++; sauver();
        juste ? sonJuste() : sonFaux();
        vue.querySelector("#message").innerHTML = (juste ? `<b style="color:var(--vert)">${parmi(ENCOURAGE)}</b> ` : `<b style="color:var(--rouge)">Pas tout à fait.</b> `) + `<span lang="${x.l}"><b>${x.m}</b></span> = ${x.s}`;
        vue.querySelector("#suite").classList.remove("cache"); vue.querySelector("#suite").focus();
      }));
      vue.querySelector("#suite").addEventListener("click", () => { i++; i < choisis.length ? question() : fin(); });
    };
    const fin = () => {
      const gain = bonnes * 2; etat.xp += gain; sauver();
      const parfait = bonnes === choisis.length;
      vue.innerHTML = `<section class="ecran fin"><div class="carte" style="display:grid;gap:10px;text-align:center;justify-items:center">
        ${anneau(Math.round(bonnes / choisis.length * 100), "var(--vert)", 96)}
        <h2>${parfait ? "Sans faute !" : bonnes >= choisis.length / 2 ? "Bien joué !" : "Continue, ça rentre !"}</h2>
        <p>${bonnes}/${choisis.length} bonnes réponses · +${gain} points</p>
        <p style="color:var(--encre-2)">Un mot est « su » quand tu le trouves deux fois de suite. Les mots ratés reviendront en premier au prochain quiz.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button type="button" class="bouton" id="encore">Refaire un quiz</button><button type="button" class="bouton second" id="vers-carnet">Mon carnet</button></div></div></section>`;
      if (parfait) { sonReussite(); confettis(90); }
      vue.querySelector("#encore").addEventListener("click", () => quizCarnet(mots));
      vue.querySelector("#vers-carnet").addEventListener("click", () => aller("carnet"));
    };
    document.querySelector(".nav").classList.add("cache");
    question();
  }
