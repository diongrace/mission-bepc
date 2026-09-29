  // ---------- Oral d'anglais : écrans ----------
  const micro = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>`;
  const enregistrementOk = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  let enreg = null;
  function arreterEnregistrement() { if (enreg) { try { enreg.rec.state !== "inactive" && enreg.rec.stop(); } catch (e) {} enreg.flux.getTracks().forEach(t => t.stop()); clearInterval(enreg.minuteur); enreg = null; } }
  const blocEnregistreur = (id, consigne) => `<div class="carte enreg" data-enreg="${id}" style="display:grid;gap:8px">
      <span class="etiquette">${consigne}</span>
      ${enregistrementOk ? `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button type="button" class="bouton" data-rec style="display:inline-flex;align-items:center;gap:8px;padding:10px 14px;font-size:16px">${micro}<span>M'enregistrer</span></button><span class="duree" style="font-weight:800;color:var(--encre-2);font-variant-numeric:tabular-nums"></span></div>
      <audio controls class="cache" style="width:100%"></audio><p class="message" style="text-align:left"></p>`
      : `<p style="color:var(--encre-2);font-size:14px">L'enregistrement n'est pas disponible dans ce navigateur. Entraîne-toi à voix haute, ou devant quelqu'un de la famille.</p>`}</div>`;
  function brancherEnregistreurs() {
    vue.querySelectorAll("[data-enreg]").forEach(bloc => {
      const b = bloc.querySelector("[data-rec]"); if (!b) return;
      const audio = bloc.querySelector("audio"), duree = bloc.querySelector(".duree"), msg = bloc.querySelector(".message");
      b.addEventListener("click", async () => {
        if (enreg && enreg.bloc === bloc) { enreg.rec.stop(); return; }
        arreterEnregistrement();
        try {
          const flux = await navigator.mediaDevices.getUserMedia({ audio: true });
          const rec = new MediaRecorder(flux), morceaux = [], debut = Date.now();
          rec.ondataavailable = e => morceaux.push(e.data);
          rec.onstop = () => {
            audio.src = URL.createObjectURL(new Blob(morceaux, { type: rec.mimeType || "audio/webm" }));
            audio.classList.remove("cache"); b.lastChild.textContent = "Recommencer"; b.classList.remove("vert");
            msg.textContent = ""; msg.style.color = "var(--vert)"; msg.textContent = "Réécoute-toi, puis compare avec le modèle.";
            flux.getTracks().forEach(t => t.stop()); if (enreg) clearInterval(enreg.minuteur); enreg = null;
          };
          rec.start();
          enreg = { rec, flux, bloc, minuteur: setInterval(() => { const s = Math.round((Date.now() - debut) / 1000); duree.textContent = Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }, 250) };
          b.lastChild.textContent = "Arrêter"; b.classList.add("vert"); audio.classList.add("cache"); msg.textContent = "";
        } catch (e) {
          msg.style.color = "var(--rouge)";
          msg.textContent = "Le micro n'est pas accessible ici. Autorise le micro, ou utilise l'application installée sur le téléphone.";
        }
      });
    });
  }
  function marquerOral(type, id, xp) {
    etat.oral = etat.oral || {};
    const cle = type + ":" + id;
    if (!etat.oral[cle]) { etat.oral[cle] = aujourdhui(); etat.xp += xp; sauver(); return true; }
    return false;
  }
  const faitOral = (type, id) => !!(etat.oral && etat.oral[type + ":" + id]);
  function blocOral() {
    return `<span class="etiquette">1 · Décrire une image</span>
      <div class="vignettes">${IMAGES.map(im => `<button type="button" class="vignette" data-oral="image:${im.id}">${im.svg}<span><b lang="en">${im.titre}</b>${faitOral("image", im.id) ? ' <span class="pastille vert">✓</span>' : ""}</span></button>`).join("")}</div>
      <span class="etiquette">2 · Lire et comprendre un texte</span>
      <div class="liste">${TEXTES.map((t, i) => `<button type="button" class="chap" data-oral="texte:${t.id}"><span class="num">${faitOral("texte", t.id) ? "✓" : i + 1}</span><span class="txt"><b lang="en">${t.titre}</b><small>Écoute, lis, réponds, puis dis ce que tu as compris</small></span></button>`).join("")}</div>
      <span class="etiquette">3 · La conversation avec le jury</span>
      <button type="button" class="chap" data-oral="conversation"><span class="num">?</span><span class="txt"><b>Les questions fréquentes du jury</b><small>${CONVERSATION.length} questions avec réponses modèles à écouter</small></span></button>
      <span class="etiquette">4 · Quiz</span>`;
  }
  function brancherBlocOral() { vue.querySelectorAll("[data-oral]").forEach(b => b.addEventListener("click", () => aller("oral", b.dataset.oral))); }

  function afficherOral(param) {
    arreterEnregistrement();
    const [type, id] = param.split(":");
    const retour = `<button type="button" class="retour" id="retour">‹ Oral d'anglais</button>`;
    if (type === "image") {
      const i = IMAGES.findIndex(x => x.id === id), im = IMAGES[i], suiv = IMAGES[(i + 1) % IMAGES.length];
      vue.innerHTML = `<section class="ecran">${retour}
        <h2 lang="en">${im.titre}</h2><p style="color:var(--encre-2);font-weight:700;margin-top:-8px">${im.fr} · décris cette image en anglais</p>
        ${im.svg}
        <div class="carte" style="display:grid;gap:8px"><span class="etiquette">Étape 1 · Observe</span>
          <p>Regarde l'image une minute. Qui ? Quoi ? Où ? Que font les personnes ?</p>
          <button type="button" class="bouton second" id="chrono">Lancer 1 minute de préparation</button></div>
        <details class="bloc"><summary>Étape 2 · Les mots utiles</summary><div class="corps"><table class="vocab">${im.vocab.map(([e, f]) => `<tr><td lang="en">${e}</td><td style="color:var(--encre)">${f}</td><td>${btnEcoute(e, "en-GB", "Écouter " + e, true)}</td></tr>`).join("")}</table>
          <p style="font-size:14px;color:var(--encre-2)">Pour situer : <span lang="en"><b>in the middle, on the left, on the right, in the foreground, in the background, at the top, at the bottom</b></span>.</p></div></details>
        ${blocEnregistreur("image-" + im.id, "Étape 3 · Décris l'image à voix haute (1 à 2 minutes)")}
        <details class="bloc" id="modele"><summary>Étape 4 · La description modèle</summary><div class="corps">
          <div>${btnEcoute(im.modele, "en-GB", "Écouter le modèle")}</div><div class="modele" lang="en">${im.modele}</div>
          <p style="font-size:14px;color:var(--encre-2)">As-tu dit ce que montre l'image, les positions, les actions en <b>-ing</b> et ton avis ? Refais ta description en ajoutant ce qui manquait.</p></div></details>
        <button type="button" class="bouton" id="suivant">Image suivante : <span lang="en">${suiv.titre}</span></button>
      </section>`;
      vue.querySelector("#suivant").addEventListener("click", () => aller("oral", "image:" + suiv.id));
      vue.querySelector("#modele").addEventListener("toggle", e => { if (e.target.open) marquerOral("image", im.id, 5); });
      const chrono = vue.querySelector("#chrono"); let t = null;
      chrono.addEventListener("click", () => {
        if (t) { clearInterval(t); t = null; chrono.textContent = "Lancer 1 minute de préparation"; return; }
        let r = 60; chrono.textContent = "1:00 — touche pour arrêter";
        t = setInterval(() => { r--; chrono.textContent = r > 0 ? `0:${String(r).padStart(2, "0")} — touche pour arrêter` : "C'est à toi : décris l'image !"; if (r <= 0) { clearInterval(t); t = null; } }, 1000);
      });
    } else if (type === "texte") {
      const i = TEXTES.findIndex(x => x.id === id), tx = TEXTES[i], suiv = TEXTES[(i + 1) % TEXTES.length];
      vue.innerHTML = `<section class="ecran">${retour}
        <h2 lang="en">${tx.titre}</h2>
        <div class="carte" style="display:grid;gap:10px"><span class="etiquette">Étape 1 · Écoute et lis</span>
          <div style="display:flex;gap:8px;flex-wrap:wrap">${btnEcoute(tx.texte, "en-GB", "Écouter le texte")}${btnEcoute(tx.texte, "en-GB", "Lentement", false, 0.65)}</div>
          <div class="modele" lang="en" style="font-size:16.5px">${tx.texte}</div></div>
        ${blocEnregistreur("lecture-" + tx.id, "Étape 2 · Lis le texte à voix haute et réécoute-toi")}
        <span class="etiquette">Étape 3 · Les questions du jury</span>
        <div class="liste" id="questions">${tx.questions.map((q, k) => `<div class="carte" style="display:grid;gap:8px" data-q="${k}"><b lang="en">${q[0]}</b>
          <div class="choix">${melanger(q.slice(1, -1)).map(c => `<button type="button" lang="en" data-rep="${encodeURIComponent(c)}">${c}</button>`).join("")}</div><p class="expl cache" style="font-size:14px"></p></div>`).join("")}</div>
        <details class="bloc" id="modele"><summary>Étape 4 · Dis ce que tu as compris</summary><div class="corps">
          <p>Résume le texte avec tes mots en commençant par <b lang="en">« This text is about… »</b>, puis écoute le modèle.</p>
          ${blocEnregistreur("resume-" + tx.id, "Ton résumé oral")}
          <div>${btnEcoute(tx.resume, "en-GB", "Écouter le modèle")}</div><div class="modele" lang="en">${tx.resume}</div></div></details>
        <details class="bloc"><summary>Les mots du texte</summary><div class="corps"><table class="vocab">${tx.vocab.map(([e, f]) => `<tr><td lang="en">${e}</td><td style="color:var(--encre)">${f}</td><td>${btnEcoute(e, "en-GB", "Écouter " + e, true)}</td></tr>`).join("")}</table></div></details>
        <button type="button" class="bouton" id="suivant">Texte suivant : <span lang="en">${suiv.titre}</span></button>
      </section>`;
      let bonnes = 0, repondues = 0;
      vue.querySelectorAll("[data-q]").forEach(bloc => {
        const q = tx.questions[+bloc.dataset.q];
        bloc.querySelectorAll("[data-rep]").forEach(b => b.addEventListener("click", () => {
          if (bloc.dataset.fait) return; bloc.dataset.fait = "1"; repondues++;
          const choix = decodeURIComponent(b.dataset.rep), juste = choix === q[1]; if (juste) bonnes++;
          bloc.querySelectorAll("[data-rep]").forEach(x => { const c = decodeURIComponent(x.dataset.rep); if (c === q[1]) x.classList.add("juste"); else if (x === b) x.classList.add("faux"); });
          const e = bloc.querySelector(".expl"); e.innerHTML = (juste ? "<b style='color:var(--vert)'>Juste !</b> " : "<b style='color:var(--rouge)'>Non.</b> ") + q[q.length - 1]; e.classList.remove("cache");
          const st = etat.comp["m-en-oral-bepc"] || { ok: 0, total: 0 }; st.total++; if (juste) st.ok++; etat.comp["m-en-oral-bepc"] = st; etat.bonnes += juste ? 1 : 0; sauver();
          if (repondues === tx.questions.length) {
            const nouveau = bonnes === tx.questions.length && marquerOral("texte", tx.id, 15);
            const fin = document.createElement("div"); fin.className = "badge-nouveau"; fin.style.textAlign = "center";
            fin.textContent = `${bonnes}/${tx.questions.length} bonnes réponses${nouveau ? " · +15 points" : ""}. Maintenant, dis ce que tu as compris (étape 4).`;
            vue.querySelector("#questions").after(fin);
          }
        }));
      });
      vue.querySelector("#suivant").addEventListener("click", () => aller("oral", "texte:" + suiv.id));
    } else {
      vue.innerHTML = `<section class="ecran">${retour}
        <h2>La conversation avec le jury</h2>
        <p style="color:var(--encre-2)">Écoute la question, réponds à voix haute (enregistre-toi), puis ouvre la réponse modèle. <b>Adapte-la avec tes vraies informations</b> : ton âge, ta ville, ta famille, ton métier de rêve.</p>
        <div class="liste">${CONVERSATION.map(([qu, rep], k) => `<div class="carte" style="display:grid;gap:10px">
          <div style="display:flex;gap:10px;align-items:center"><b lang="en" style="flex:1;font-size:17px">${qu}</b>${btnEcoute(qu, "en-GB", "Écouter la question", true)}</div>
          ${blocEnregistreur("conv-" + k, "Ta réponse")}
          <details class="bloc"><summary>Réponse modèle</summary><div class="corps"><div>${btnEcoute(rep, "en-GB", "Écouter")}</div><div class="modele" lang="en">${rep}</div></div></details></div>`).join("")}</div>
      </section>`;
      marquerOral("conversation", "vue", 5);
    }
    vue.querySelector("#retour").addEventListener("click", () => aller("chapitre", "en-oral-bepc"));
    brancherEcoute(); brancherEnregistreurs();
  }
