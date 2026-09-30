  // ---------- Atelier résumé guidé ----------
  function blocResume() {
    return `<span class="etiquette">Atelier guidé : résume un vrai texte</span>
      <div class="liste">${TEXTES_RESUME.map((t, i) => `<button type="button" class="chap" data-atelier="${t.id}" style="--c:#B8452B"><span class="num">${etat.ateliers && etat.ateliers[t.id] ? "✓" : i + 1}</span><span class="txt"><b>${t.titre}</b><small>${compterMots(t.texte.join(" "))} mots · lire, repérer les idées, rédiger avec le compteur</small></span></button>`).join("")}</div>
      <span class="etiquette">Quiz sur les règles du résumé</span>`;
  }
  function brancherBlocResume() { vue.querySelectorAll("[data-atelier]").forEach(b => b.addEventListener("click", () => aller("atelier", b.dataset.atelier))); }
  const motsNormalises = t => String(t).toLowerCase().replace(/[’']/g, " ").replace(/[^a-zà-ÿ0-9\s-]/g, " ").split(/\s+/).filter(Boolean);
  function afficherAtelier(id) {
    const tx = TEXTES_RESUME.find(x => x.id === id), plein = tx.texte.join(" "), n = compterMots(plein), cible = Math.round(n / 4), bas = Math.round(cible * 0.9), haut = Math.round(cible * 1.1);
    const brouillon = (etat.brouillons || {})["atelier|" + id] || "";
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Le résumé guidé</button>
      <h2>Résumé : ${tx.titre}</h2>
      <div class="carte" style="display:grid;gap:10px"><span class="etiquette">Étape 1 · Lis le texte</span>
        <div>${btnEcoute(plein, "fr-FR", "Écouter le texte")}</div>
        <div class="texte-a-resumer">${tx.texte.map((p, k) => `<p><span class="num-para">${k + 1}</span>${p}</p>`).join("")}</div>
        <div class="objectif">Ce texte compte <b>${n} mots</b>. Au quart : <b>${cible} mots</b>, donc entre <b>${bas}</b> et <b>${haut} mots</b> avec la marge de 10 %.</div></div>
      <div class="carte" style="display:grid;gap:10px"><span class="etiquette">Étape 2 · Repère les idées essentielles</span>
        <p style="font-size:14px;color:var(--encre-2)">Coche les idées à garder dans le résumé, puis vérifie.</p>
        <div class="idees-liste">${tx.idees.map((d, k) => `<label class="idee"><input type="checkbox" data-idee="${k}"><span>${d[0]}</span><em class="cache"></em></label>`).join("")}</div>
        <button type="button" class="bouton second" id="verifier-idees">Vérifier mes choix</button><p class="message" id="msg-idees" style="text-align:left"></p></div>
      <div class="carte" style="display:grid;gap:10px"><span class="etiquette">Étape 3 · Rédige ton résumé</span>
        <textarea class="texte-rep" id="resume" rows="7" placeholder="Écris ton résumé ici, avec tes propres mots…">${brouillon.replace(/</g, "&lt;")}</textarea>
        <div class="compteur" id="compteur"></div>
        <ul class="controles-resume" id="controles"></ul>
        <button type="button" class="bouton" id="verifier-resume">J'ai terminé : vérifier mon résumé</button><div id="bilan-resume"></div></div>
      <details class="bloc" id="modele"><summary>Étape 4 · Compare avec le résumé modèle</summary><div class="corps">
        <div class="modele">${tx.modele} <b>(${compterMots(tx.modele)} mots)</b></div>
        <p style="font-size:14px;color:var(--encre-2)">Vérifie : as-tu gardé toutes les idées cochées, dans le même ordre ? As-tu reformulé ? Es-tu dans la bonne longueur ?</p></div></details>
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("chapitre", "fr-resume-atelier"));
    brancherEcoute();
    vue.querySelector("#verifier-idees").addEventListener("click", () => {
      let bonnes = 0;
      vue.querySelectorAll("[data-idee]").forEach(c => { const d = tx.idees[+c.dataset.idee], juste = !!c.checked === !!d[1], em = c.parentElement.querySelector("em");
        c.parentElement.classList.toggle("juste", juste); c.parentElement.classList.toggle("faux", !juste); if (juste) bonnes++;
        em.textContent = d[1] ? (c.checked ? "Essentielle ✓" : "Essentielle : il fallait la garder") : (c.checked ? "À enlever : " + (d[2] || "détail") : "Bien enlevée ✓"); em.classList.remove("cache"); });
      const msg = vue.querySelector("#msg-idees"); msg.style.color = bonnes === tx.idees.length ? "var(--vert)" : "var(--orange)";
      msg.textContent = bonnes === tx.idees.length ? "Parfait : tu as trouvé toutes les idées essentielles. Rédige maintenant ton résumé !" : `${bonnes}/${tx.idees.length} bons choix. Regarde les explications, puis passe à la rédaction.`;
      if (bonnes === tx.idees.length) { sonReussite(); confettis(50); }
    });
    const zone = vue.querySelector("#resume"), compteur = vue.querySelector("#compteur"), ctl = vue.querySelector("#controles");
    const nGrammes = (() => { const m = motsNormalises(plein), s = new Set(); for (let k = 0; k + 6 <= m.length; k++) s.add(m.slice(k, k + 6).join(" ")); return s; })();
    const maj = () => {
      const t = zone.value, c = compterMots(t);
      etat.brouillons = etat.brouillons || {}; etat.brouillons["atelier|" + id] = t.slice(0, 3000); sauver();
      const etatL = c === 0 ? "" : c < bas ? "court" : c > haut ? "long" : "ok";
      compteur.className = "compteur " + etatL;
      compteur.innerHTML = `<b>${c} mot${c > 1 ? "s" : ""}</b> · objectif ${bas} à ${haut}` + (etatL === "court" ? ` · il manque au moins ${bas - c} mot${bas - c > 1 ? "s" : ""}` : etatL === "long" ? ` · ${c - haut} mot${c - haut > 1 ? "s" : ""} en trop` : etatL === "ok" ? " · bonne longueur ✓" : "");
      const m = motsNormalises(t), copies = []; for (let k = 0; k + 6 <= m.length; k++) { const g = m.slice(k, k + 6).join(" "); if (nGrammes.has(g)) { copies.push(g); k += 5; } }
      const interdits = [/l'auteur|l’auteur/i, /ce texte|le texte/i, /à mon avis|je pense que/i].filter(r => r.test(t));
      const items = [];
      if (c && copies.length) items.push(`<li class="alerte">Recopié du texte : « ${copies[0]}… ». Reformule avec tes mots.</li>`);
      if (interdits.length) items.push(`<li class="alerte">Évite « l'auteur », « le texte » et ton avis : parle comme l'auteur.</li>`);
      if (c && !copies.length && !interdits.length) items.push(`<li class="bien">Pas de phrase recopiée, pas de formule interdite ✓</li>`);
      ctl.innerHTML = items.join("");
      return { c, etatL, copies, interdits };
    };
    zone.addEventListener("input", maj); maj();
    vue.querySelector("#verifier-resume").addEventListener("click", () => {
      const r = maj(), box = vue.querySelector("#bilan-resume");
      if (!r.c) { box.innerHTML = `<p class="message">Écris d'abord ton résumé.</p>`; return; }
      const pb = [];
      if (r.etatL === "court") pb.push(`il est trop court (${r.c} mots, minimum ${bas})`);
      if (r.etatL === "long") pb.push(`il est trop long (${r.c} mots, maximum ${haut})`);
      if (r.copies.length) pb.push("des phrases sont recopiées du texte");
      if (r.interdits.length) pb.push("il contient « l'auteur », « le texte » ou ton avis");
      if (pb.length) { sonFaux(); box.innerHTML = `<div class="retour-exo mal"><h3>Presque !</h3><p>À corriger : ${pb.join(" ; ")}.</p></div>`; return; }
      const nouveau = !(etat.ateliers || {})[id];
      if (nouveau) { etat.ateliers = Object.assign({}, etat.ateliers, { [id]: aujourdhui() }); etat.xp += 20; sauver(); }
      box.innerHTML = `<div class="retour-exo bien"><h3>Bravo, ${PRENOM} !</h3><p>Ton résumé fait ${r.c} mots, sans copie ni formule interdite${nouveau ? " : <b>+20 points</b>" : ""}. Ouvre l'étape 4 et vérifie que tu as gardé toutes les idées, dans l'ordre.</p></div>`;
      sonReussite(); confettis(90); vue.querySelector("#modele").open = true;
    });
  }
