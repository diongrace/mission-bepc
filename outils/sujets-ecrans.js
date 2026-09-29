  // ---------- Exemple corrigé pas à pas (dans chaque chapitre) ----------
  function blocExemple(ex) {
    if (!ex) return "";
    return `<div class="carte exemple" style="display:grid;gap:10px"><span class="etiquette" style="color:var(--vert)">Exemple corrigé pas à pas</span>
      <div class="ex-enonce">${ex.enonce}</div>
      <p style="color:var(--encre-2);font-size:14px">Essaie d'abord seul sur ton cahier, puis découvre la correction étape par étape.</p>
      <ol class="etapes">${ex.etapes.map(e => `<li class="cache">${e}</li>`).join("")}</ol>
      <div class="piege cache"><b>Piège à éviter</b>${ex.piege}</div>
      <button type="button" class="bouton second" id="etape-suivante">Voir l'étape 1</button></div>`;
  }
  function brancherExemple() {
    const b = vue.querySelector("#etape-suivante"); if (!b) return;
    const etapes = [...vue.querySelectorAll(".etapes li")], piege = vue.querySelector(".exemple .piege");
    let i = 0;
    b.addEventListener("click", () => {
      if (i < etapes.length) { etapes[i].classList.remove("cache"); i++; }
      if (i === etapes.length) { piege.classList.remove("cache"); b.classList.add("cache"); }
      else b.textContent = `Voir l'étape ${i + 1}`;
    });
  }

  // ---------- Sujets type BEPC ----------
  const noteSujet = id => (etat.sujets && etat.sujets[id]) || null;
  const sujetsFaits = () => SUJETS.filter(s => noteSujet(s.id)).length;
  function afficherSujets() {
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Mes matières</button>
      <h2>Sujets type BEPC</h2>
      <p style="color:var(--encre-2)">De vrais sujets d'entraînement, à faire <b>sur ta feuille</b> comme le jour de l'examen, puis à corriger toi-même avec le corrigé détaillé et le barème. Ta note sur 20 est enregistrée.</p>
      <div class="liste">${SUJETS.map(s => { const m = matiereDe(s.matiere), n = noteSujet(s.id);
        return `<button type="button" class="theme-carte" data-sujet="${s.id}"><span class="icone" style="background:${m.couleur}">${m.icone}</span>
          <span class="txt"><b>${s.titre}</b><small>Durée ${s.duree} · ${s.questions.length} questions</small></span>
          ${n ? `<span class="pastille${n.meilleure >= 10 ? " vert" : ""}">${String(n.meilleure).replace(".", ",")}/20</span>` : ""}</button>`; }).join("")}</div>
      <div class="carte"><span class="etiquette">Méthode</span><p style="margin-top:6px">1) Lance le chrono et fais le sujet sans regarder le corrigé. 2) Pour chaque question, ouvre le corrigé et compare honnêtement. 3) Donne-toi les points : juste, à moitié ou faux. 4) Refais plus tard les questions ratées.</p></div>
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("matieres"));
    vue.querySelectorAll("[data-sujet]").forEach(b => b.addEventListener("click", () => aller("sujet", b.dataset.sujet)));
  }
  let chronoSujet = null;
  function afficherSujet(id) {
    const s = SUJETS.find(x => x.id === id);
    etat.brouillons = etat.brouillons || {};
    const evals = (etat.evals = etat.evals || {})[id] = (etat.evals[id] || {});
    const total = s.questions.reduce((t, q) => t + q.points, 0);
    const fmt = x => String(Math.round(x * 100) / 100).replace(".", ",");
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Sujets type BEPC</button>
      <h2>${s.titre}</h2>
      <div class="carte" style="display:grid;gap:8px"><span class="etiquette">Consignes · durée ${s.duree}</span><p>${s.consignes}</p>
        <button type="button" class="bouton second" id="chrono-sujet">Démarrer le chrono</button></div>
      ${s.document || ""}
      ${s.questions.map((q, i) => `<div class="carte question-sujet" data-i="${i}" style="display:grid;gap:10px">
        <div style="display:flex;gap:8px;align-items:baseline;justify-content:space-between"><b style="font-family:var(--titre);font-size:17px">${q.num}</b><span class="pastille">${fmt(q.points)} pt${q.points > 1 ? "s" : ""}</span></div>
        <div>${q.enonce}</div>
        <textarea class="texte-rep" rows="3" data-brouillon="${id}|${i}" placeholder="Ta réponse ou tes calculs (facultatif, tu peux aussi écrire sur ta feuille)">${(etat.brouillons[id + "|" + i] || "").replace(/</g, "&lt;")}</textarea>
        <button type="button" class="bouton second" data-voir="${i}">Voir le corrigé détaillé</button>
        <div class="corrige cache"><span class="etiquette" style="color:var(--vert)">Corrigé</span><div style="margin-top:6px;line-height:1.6">${q.corrige}</div>
          <p style="font-weight:800;margin:10px 0 6px">Combien de points mérites-tu ?</p>
          <div class="auto-eval" role="group">${[[1, "Juste"], [0.5, "À moitié"], [0, "Faux"]].map(([v, l]) => `<button type="button" data-eval="${i}|${v}" aria-pressed="${evals[i] === v}">${l} · ${fmt(q.points * v)}</button>`).join("")}</div></div>
      </div>`).join("")}
      <div class="carte" style="display:grid;gap:8px;text-align:center"><span class="etiquette">Ta note</span>
        <div class="score" id="note-sujet" style="font-family:var(--titre);font-size:44px">–</div>
        <p id="note-info" style="color:var(--encre-2);font-size:14px"></p>
        <button type="button" class="bouton vert" id="enregistrer-note">Enregistrer ma note</button></div>
    </section>`;
    const majNote = () => {
      const faits = Object.keys(evals).length, note = s.questions.reduce((t, q, i) => t + (evals[i] != null ? q.points * evals[i] : 0), 0) * 20 / total;
      vue.querySelector("#note-sujet").textContent = faits ? fmt(Math.round(note * 4) / 4) + " / 20" : "–";
      vue.querySelector("#note-info").textContent = faits < s.questions.length ? `${faits}/${s.questions.length} questions corrigées` : (note >= 16 ? "Excellent travail !" : note >= 10 ? "C'est la moyenne : continue, tu peux faire mieux." : "Revois les fiches des questions ratées, puis refais le sujet dans quelques jours.");
      return { faits, note: Math.round(note * 4) / 4 };
    };
    majNote();
    vue.querySelectorAll("[data-brouillon]").forEach(t => t.addEventListener("input", () => { etat.brouillons[t.dataset.brouillon] = t.value.slice(0, 4000); sauver(); }));
    vue.querySelectorAll("[data-voir]").forEach(b => b.addEventListener("click", () => { b.nextElementSibling.classList.remove("cache"); b.classList.add("cache"); }));
    vue.querySelectorAll("[data-eval]").forEach(b => b.addEventListener("click", () => {
      const [i, v] = b.dataset.eval.split("|"); evals[+i] = +v; sauver();
      b.parentElement.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false")); majNote();
    }));
    vue.querySelector("#enregistrer-note").addEventListener("click", () => {
      const { faits, note } = majNote(), info = vue.querySelector("#note-info");
      if (faits < s.questions.length) { info.textContent = "Corrige d'abord toutes les questions (juste, à moitié ou faux)."; info.style.color = "var(--rouge)"; return; }
      etat.sujets = etat.sujets || {};
      const avant = etat.sujets[id] ? etat.sujets[id].meilleure : null;
      const gain = avant == null ? Math.round(note * 5) : Math.max(0, Math.round((note - avant) * 5));
      etat.sujets[id] = { meilleure: Math.max(note, avant || 0), derniere: note, date: aujourdhui() };
      etat.xp += gain;
      const j = aujourdhui(); if (etat.dernierJour !== j) { etat.serie = etat.dernierJour === hier() ? etat.serie + 1 : 1; etat.dernierJour = j; }
      const nouveaux = verifierBadges(); sauver();
      info.style.color = "var(--vert)";
      info.textContent = `Note enregistrée : ${fmt(note)}/20${gain ? ` · +${gain} points` : ""}${nouveaux.length ? " · Badge : " + nouveaux.map(x => x.nom).join(", ") : ""}.`;
    });
    const chrono = vue.querySelector("#chrono-sujet");
    chrono.addEventListener("click", () => {
      if (chronoSujet) { clearInterval(chronoSujet); chronoSujet = null; chrono.textContent = "Démarrer le chrono"; return; }
      const debut = Date.now();
      const tic = () => { const m = Math.floor((Date.now() - debut) / 60000); chrono.textContent = `Chrono : ${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")} min — touche pour arrêter`; };
      tic(); chronoSujet = setInterval(tic, 15000);
    });
    vue.querySelector("#retour").addEventListener("click", () => aller("sujets"));
  }
