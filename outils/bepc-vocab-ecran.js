  // ---------- Vocabulaire par thème · 5 mots du jour (répétition espacée) ----------
  const COUL_VOCAB = "#2F8A5B";
  const ICONE_VOCAB = ic('<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/><path d="M7 11h5M7 15h3"/>');
  const ATTENTES = [0, 1, 2, 4, 8, 16];           // jours avant de revoir un mot, selon sa « boîte »
  const plusJours = k => { const d = new Date(); d.setDate(d.getDate() + k); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const cleMot = (l, m) => l + ":" + m;
  const etatMot = (l, m) => (etat.vocab || {})[cleMot(l, m)];
  const suMot = (l, m) => { const e = etatMot(l, m); return !!e && e.b >= 3; };
  const tousMots = l => VOCAB[l].flatMap(t => t.mots.map(([m, f]) => ({ l, m, f, t: t.id })));
  const sansArticle = m => m.replace(/^(el|la|los|las|to) /i, "");
  // Les mots du vocabulaire rejoignent le dictionnaire « toucher un mot »
  ["en", "es"].forEach(l => VOCAB[l].forEach(t => t.mots.forEach(([m, f]) => { const k = sansArticle(m).toLowerCase(); if (!DICO[l][k]) DICO[l][k] = f; })));

  function motsDuJour(l, n = 5) {
    const auj = aujourdhui(), vus = etat.vocab || {};
    const dus = tousMots(l).filter(x => vus[cleMot(l, x.m)] && vus[cleMot(l, x.m)].n <= auj).sort((a, b) => vus[cleMot(l, a.m)].b - vus[cleMot(l, b.m)].b);
    const neufs = tousMots(l).filter(x => !vus[cleMot(l, x.m)]);
    return dus.slice(0, n).concat(neufs.slice(0, Math.max(0, n - Math.min(n, dus.length))));
  }
  const vocabFaitAujourdhui = l => (etat.vocabJour || {})[l] === aujourdhui();
  const langueVocab = { l: "en" };

  function afficherVocab(p) {
    const [lp, theme] = String(p || "").split(":");
    if (lp === "en" || lp === "es") langueVocab.l = lp;
    const l = langueVocab.l;
    if (theme) return afficherThemeVocab(l, theme);
    const tous = tousMots(l), sus = tous.filter(x => suMot(l, x.m)).length, fait = vocabFaitAujourdhui(l), jour = motsDuJour(l);
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Mes matières</button>
      ${bandeau(COUL_VOCAB, ICONE_VOCAB, "Vocabulaire du BEPC", `${sus} mot${sus > 1 ? "s" : ""} sus sur ${tous.length} · ${l === "en" ? "anglais" : "espagnol"}`, Math.round(sus / tous.length * 100))}
      <div class="onglets" role="tablist" style="--c:${COUL_VOCAB}">${[["en", "Anglais"], ["es", "Espagnol"]].map(([k, n]) => `<button type="button" role="tab" data-langue-vocab="${k}" aria-selected="${k === l}">${n}</button>`).join("")}</div>
      <div class="carte jour-vocab${fait ? " fait" : ""}">
        <span class="etiquette">${fait ? "Mots du jour · fait ✓" : "Mots du jour"}</span>
        <b>${fait ? "Bravo, c'est fait pour aujourd'hui !" : `${jour.length} mots, 3 minutes`}</b>
        <p>${fait ? "Reviens demain : les mots reviennent juste avant que tu les oublies." : jour.some(x => etatMot(l, x.m)) ? "Des mots à revoir, et des mots nouveaux pour avancer." : "Tu découvres tes premiers mots. Écoute-les bien."}</p>
        ${jour.length ? `<div class="apercu-jour">${jour.map(x => `<span lang="${l}">${x.m}</span>`).join("")}</div>` : ""}
        <button type="button" class="bouton" id="lancer-jour">${fait ? "Réviser encore 5 mots" : "Commencer"}</button>
      </div>
      <p style="color:var(--encre-2);font-size:14px">Un mot bien trouvé revient dans 1, puis 2, 4, 8 et 16 jours. Un mot raté revient demain. D'abord tu le reconnais, ensuite tu dois l'écrire.</p>
      <span class="etiquette">Les thèmes</span>
      <div class="grille-themes-vocab">${VOCAB[l].map(t => { const n = t.mots.filter(([m]) => suMot(l, m)).length, pct = Math.round(n / t.mots.length * 100);
        return `<button type="button" class="theme-vocab" data-theme-vocab="${t.id}"><span class="tv-emoji" aria-hidden="true">${t.lettre}</span><span class="tv-txt"><b>${t.titre}</b><small>${n}/${t.mots.length} sus</small><span class="mini"><i style="width:${Math.max(pct, 2)}%;background:${COUL_VOCAB}"></i></span></span></button>`; }).join("")}</div>
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("matieres"));
    vue.querySelectorAll("[data-langue-vocab]").forEach(b => b.addEventListener("click", () => afficherVocab(b.dataset.langueVocab)));
    vue.querySelectorAll("[data-theme-vocab]").forEach(b => b.addEventListener("click", () => afficherThemeVocab(l, b.dataset.themeVocab)));
    vue.querySelector("#lancer-jour").addEventListener("click", () => sessionVocab(l, jour.length ? jour : melanger(tousMots(l)).slice(0, 5), "jour"));
  }

  function afficherThemeVocab(l, id) {
    const t = VOCAB[l].find(x => x.id === id); if (!t) return afficherVocab(l);
    const etatTxt = m => { const e = etatMot(l, m); return !e ? '<span class="pastille">nouveau</span>' : e.b >= 3 ? '<span class="pastille vert">su ✓</span>' : '<span class="pastille bleu">en cours</span>'; };
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Vocabulaire</button>
      ${bandeau(COUL_VOCAB, `<span style="font-size:26px">${t.lettre}</span>`, t.titre, `${t.mots.filter(([m]) => suMot(l, m)).length}/${t.mots.length} mots sus`, Math.round(t.mots.filter(([m]) => suMot(l, m)).length / t.mots.length * 100))}
      <button type="button" class="bouton" id="reviser-theme">Réviser ce thème (10 mots)</button>
      <div class="liste-carnet">${t.mots.map(([m, f]) => `<div class="mot-carnet"><div class="mc-mot"><b lang="${l}">${m}</b></div><div class="mc-sens">${f}</div><div class="mc-actions">${etatTxt(m)}${btnEcoute(m, l === "es" ? "es-ES" : "en-GB", "Écouter", true)}</div></div>`).join("")}</div>
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => afficherVocab(l));
    vue.querySelector("#reviser-theme").addEventListener("click", () => {
      const vus = etat.vocab || {}, liste = t.mots.map(([m, f]) => ({ l, m, f, t: id })).sort((a, b) => ((vus[cleMot(l, a.m)] || { b: -1 }).b - (vus[cleMot(l, b.m)] || { b: -1 }).b) || Math.random() - 0.5);
      sessionVocab(l, liste.slice(0, 10), "theme:" + id);
    });
    brancherEcoute();
  }

  // ---------- La séance ----------
  function sessionVocab(l, mots, origine) {
    const voixL = l === "es" ? "es-ES" : "en-GB";
    const etapes = [];
    mots.forEach(x => { const e = etatMot(l, x.m); if (!e) etapes.push({ x, type: "carte" }); });
    melanger(mots.slice()).forEach(x => { const e = etatMot(l, x.m); etapes.push({ x, type: e && e.b >= 2 ? "ecrire" : "qcm" }); });
    let i = 0, bonnes = 0, questions = etapes.filter(e => e.type !== "carte").length;
    const norme = t => t.toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/, "");
    const sansAcc = t => t.normalize("NFD").replace(/[̀-ͯ]/g, "");
    const noter = (x, juste) => {
      etat.vocab = etat.vocab || {};
      const k = cleMot(l, x.m), e = etat.vocab[k] || { b: 0 };
      e.b = juste ? Math.min(5, e.b + 1) : 1; e.n = plusJours(juste ? ATTENTES[e.b] : 1);
      etat.vocab[k] = e; sauver();
    };
    const haut = () => `<div class="exo-haut"><button type="button" class="quitter" id="quitter" aria-label="Quitter">✕</button>
      <div class="progress"><i style="width:${i / etapes.length * 100}%"></i></div><span class="exo-titre">${i + 1}/${etapes.length}</span></div>
      <span class="exo-titre">Vocabulaire · ${l === "en" ? "Anglais" : "Espagnol"}${origine === "jour" ? " · mots du jour" : ""}</span>`;
    const brancherHaut = () => vue.querySelector("#quitter").addEventListener("click", () => aller("vocab", l));
    const etape = () => {
      if (i >= etapes.length) return fin();
      const { x, type } = etapes[i];
      if (type === "carte") {
        vue.innerHTML = `<section class="ecran">${haut()}
          <div class="carte carte-mot"><span class="etiquette">Nouveau mot</span><div class="bulle-ligne"><b class="mot-quiz" lang="${l}">${x.m}</b>${btnEcoute(x.m, voixL, "Écouter", true)}</div>
          <p class="carte-mot-sens">${x.f}</p><small>Répète-le deux fois à voix haute, puis continue.</small></div>
          <button type="button" class="bouton" id="suite">Je l'ai retenu ›</button></section>`;
        brancherHaut(); brancherEcoute();
        const bt = vue.querySelector("[data-parle]"); if (bt && voixOk) setTimeout(() => parler(x.m, voixL, bt), 250);
        vue.querySelector("#suite").addEventListener("click", () => { i++; etape(); });
        return;
      }
      if (type === "qcm") {
        const t = VOCAB[l].find(y => y.id === x.t), autres = melanger(t.mots.filter(([m]) => m !== x.m)).slice(0, 3).map(([, f]) => f), choix = melanger([x.f, ...autres]);
        vue.innerHTML = `<section class="ecran">${haut()}
          <div class="question"><p>Que veut dire ce mot ?</p><div class="bulle-ligne"><p class="mot-quiz" lang="${l}">${x.m}</p>${btnEcoute(x.m, voixL, "Écouter", true)}</div></div>
          <div class="choix">${choix.map(c => `<button type="button" data-rep="${encodeURIComponent(c)}">${c}</button>`).join("")}</div>
          <p class="message" id="message" aria-live="polite"></p><button type="button" class="bouton cache" id="suite">Continuer</button></section>`;
        brancherHaut(); brancherEcoute();
        vue.querySelectorAll("[data-rep]").forEach(b => b.addEventListener("click", () => {
          if (vue.querySelector(".choix").dataset.fait) return; vue.querySelector(".choix").dataset.fait = "1";
          const juste = decodeURIComponent(b.dataset.rep) === x.f;
          vue.querySelectorAll("[data-rep]").forEach(y => { if (decodeURIComponent(y.dataset.rep) === x.f) y.classList.add("juste"); else if (y === b) y.classList.add("faux"); });
          resultat(x, juste, "");
        }));
      } else {
        vue.innerHTML = `<section class="ecran">${haut()}
          <div class="question"><p>Écris en ${l === "en" ? "anglais" : "espagnol"}${l === "es" && /^(el|la|los|las) /.test(x.m) ? " (avec l'article el, la, los ou las)" : ""} :</p><p class="mot-quiz">« ${x.f} »</p></div>
          <input id="ecrit-rep" class="ecrit-rep" type="text" lang="${l}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="Ta réponse" placeholder="Écris le mot ici">
          ${l === "es" ? `<div class="accents" role="group" aria-label="Lettres espagnoles">${["á", "é", "í", "ó", "ú", "ñ"].map(a => `<button type="button" data-accent="${a}">${a}</button>`).join("")}</div>` : ""}
          <p class="message" id="message" aria-live="polite"></p>
          <button type="button" class="bouton" id="verifier-mot">Vérifier</button><button type="button" class="bouton cache" id="suite">Continuer</button></section>`;
        brancherHaut();
        const champ = vue.querySelector("#ecrit-rep");
        vue.querySelectorAll("[data-accent]").forEach(b => b.addEventListener("click", () => { const a = champ.selectionStart ?? champ.value.length; champ.value = champ.value.slice(0, a) + b.dataset.accent + champ.value.slice(a); champ.focus(); champ.setSelectionRange(a + 1, a + 1); }));
        const verifier = () => {
          const s = champ.value.trim(); if (!s) { vue.querySelector("#message").textContent = "Écris le mot avant de vérifier."; return; }
          if (champ.readOnly) return; champ.readOnly = true;
          const attendu = norme(x.m), tape = norme(s);
          let juste = tape === attendu || (l === "en" && sansArticle(tape) === sansArticle(attendu)), note = "";
          if (!juste && sansAcc(tape) === sansAcc(attendu)) note = "Presque : attention à l'accent !";
          else if (!juste && l === "es" && sansArticle(tape) === sansArticle(attendu)) note = "Presque : n'oublie pas l'article.";
          vue.querySelector("#verifier-mot").classList.add("cache");
          resultat(x, juste, note);
        };
        vue.querySelector("#verifier-mot").addEventListener("click", verifier);
        champ.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); champ.readOnly ? vue.querySelector("#suite").click() : verifier(); } });
        if (window.matchMedia("(hover:hover)").matches) champ.focus();
      }
    };
    const resultat = (x, juste, note) => {
      if (juste) bonnes++; noter(x, juste); juste ? sonJuste() : sonFaux();
      const m = vue.querySelector("#message");
      m.innerHTML = (juste ? `<b style="color:var(--vert)">${parmi(ENCOURAGE)}</b> ` : `<b style="color:var(--rouge)">${note || "Pas tout à fait."}</b> `) + `<span lang="${l}"><b>${x.m}</b></span> = ${x.f}` +
        (juste ? ` <small style="color:var(--encre-2)">· tu le reverras dans ${ATTENTES[etatMot(l, x.m).b]} jour${ATTENTES[etatMot(l, x.m).b] > 1 ? "s" : ""}</small>` : ` <small style="color:var(--encre-2)">· il reviendra demain</small>`);
      const s = vue.querySelector("#suite"); s.classList.remove("cache"); s.focus();
      s.addEventListener("click", () => { i++; etape(); });
    };
    const fin = () => {
      const gain = bonnes * 2, j = aujourdhui(); etat.xp += gain;
      if (etat.dernierJour !== j) { etat.serie = etat.dernierJour === hier() ? etat.serie + 1 : 1; etat.dernierJour = j; }
      if (origine === "jour") etat.vocabJour = Object.assign({}, etat.vocabJour, { [l]: j });
      sauver();
      const parfait = bonnes === questions;
      vue.innerHTML = `<section class="ecran fin"><div class="carte" style="display:grid;gap:10px;text-align:center;justify-items:center">
        ${anneau(Math.round(bonnes / Math.max(1, questions) * 100), "var(--vert)", 96)}
        <h2>${parfait ? "Sans faute !" : bonnes >= questions / 2 ? "Bien joué !" : "Continue, ça rentre !"}</h2>
        <p>${bonnes}/${questions} bonnes réponses · +${gain} points${origine === "jour" ? " · mots du jour faits ✓" : ""}</p>
        <p style="color:var(--encre-2)">${tousMots(l).filter(x => suMot(l, x.m)).length} mots sus sur ${tousMots(l).length} en ${l === "en" ? "anglais" : "espagnol"}.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button type="button" class="bouton" id="vers-vocab">Retour au vocabulaire</button></div></div></section>`;
      if (parfait) { sonReussite(); confettis(90); }
      vue.querySelector("#vers-vocab").addEventListener("click", () => aller("vocab", l));
    };
    document.querySelector(".nav").classList.add("cache");
    etape();
  }
