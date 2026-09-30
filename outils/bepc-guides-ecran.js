
  // ---------- Corrigés de A à Z ----------
  const echapRe = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const RE_CONNECT = new RegExp("(^|[\\s«(])(" + CONNECTEURS.map(echapRe).join("|") + ")(?=[\\s,:])", "g");
  const annoter = segs => `<p class="para-annote">${segs.map(([r, t]) => `<span class="seg" style="--r:${ROLES[r][1]}"><sup>${ROLES[r][0]}</sup>${t.replace(RE_CONNECT, '$1<b class="connecteur">$2</b>')}</span>`).join(" ")}</p>`;
  const etapesAZ = liste => `<div class="az">${liste.map(([lettre, titre, html], k) => `<div class="az-etape${k ? " cache" : ""}" data-az="${k}"><div class="az-tete"><span class="az-lettre">${lettre}</span><b>${titre}</b></div><div class="az-corps">${html}</div></div>`).join("")}
    <div class="boutons-ligne"><button type="button" class="bouton" data-az-suivant>Étape suivante ›</button><button type="button" class="bouton second" data-az-tout>Tout afficher</button></div></div>`;
  function brancherAZ(racine) {
    const etapes = [...racine.querySelectorAll(".az-etape")], suiv = racine.querySelector("[data-az-suivant]"), tout = racine.querySelector("[data-az-tout]");
    let i = 0; const fin = () => { suiv.classList.add("cache"); tout.classList.add("cache"); };
    suiv.addEventListener("click", () => { i++; if (etapes[i]) { etapes[i].classList.remove("cache"); etapes[i].scrollIntoView({ block: "start", behavior: "smooth" }); } if (i >= etapes.length - 1) fin(); });
    tout.addEventListener("click", () => { etapes.forEach(e => e.classList.remove("cache")); fin(); });
  }
  function guideResumeHTML(id) {
    const tx = TEXTES_RESUME.find(x => x.id === id), g = GUIDES_RESUME[id], n = compterMots(tx.texte.join(" ")), cible = Math.round(n / 4);
    const total = g.paras.reduce((s, p) => s + compterMots(p[3]), 0);
    return etapesAZ([
      ["A", "Lire et comprendre", `<p>Lis le texte <b>deux fois</b>, puis réponds à trois questions :</p><ul><li><b>Le thème</b> (de quoi on parle) : ${g.theme}.</li><li><b>La thèse</b> (ce que pense l'auteur) : ${g.these}</li><li><b>Qui parle ?</b> ${g.enonciation}</li></ul>`],
      ["B", "Découper le texte en idées", `<p>Chaque paragraphe contient <b>une idée essentielle</b>. Tout le reste (exemples, détails, répétitions) s'enlève.</p><div class="decoupe">${g.paras.map((p, k) => `<div class="decoupe-para"><div class="decoupe-tete"><span class="num-para">${k + 1}</span><b>${p[0]}</b></div><p class="garder"><span>À garder</span>${p[1]}</p><p class="enlever"><span>À enlever</span><s>${p[2]}</s></p></div>`).join("")}</div>`],
      ["C", "Reformuler chaque idée avec tes mots", `<p>On dit la même chose, <b>plus court</b> et <b>sans recopier</b>.</p>${g.paras.map((p, k) => `<div class="reformule"><span class="num-para">${k + 1}</span><span><span class="avant">${p[1]}</span><span class="apres">→ ${p[3]} <small>(${compterMots(p[3])} mots)</small></span></span></div>`).join("")}`],
      ["D", "Relier les idées", `<p>On enchaîne les phrases avec des <b>connecteurs</b> pour garder la logique du texte : ${g.connecteurs}.</p>`],
      ["E", "Compter les mots", `<p>Le texte compte <b>${n} mots</b> : le résumé doit en faire environ <b>${cible}</b> (entre ${Math.round(cible * 0.9)} et ${Math.round(cible * 1.1)}).</p><p>Nos phrases : ${g.paras.map(p => compterMots(p[3])).join(" + ")} = <b>${total} mots</b> ✓. Rappel : « l'obésité » = 2 mots ; un mot avec trait d'union (« Valorisons-le ») = 1 mot.</p>`],
      ["F", "Le résumé final, puis la relecture", `<div class="modele">${g.paras.map(p => p[3]).join(" ")} <b>(${total} mots)</b></div><ul><li>Toutes les idées sont là, <b>dans l'ordre</b> du texte.</li><li>Aucune phrase recopiée, pas de « l'auteur dit ».</li><li>Le nombre de mots est <b>indiqué à la fin</b>.</li><li>Orthographe et accords relus.</li></ul>`]
    ]);
  }
  function blocArgu() {
    return `<span class="etiquette">Corrigés complets de A à Z</span>
      <div class="liste">${GUIDES_ARGU.map(g => `<button type="button" class="chap" data-guide="${g.id}" style="--c:#B8452B"><span class="num" style="font-size:13px">A→Z</span><span class="txt"><b>${g.titre}</b><small>De l'analyse du sujet à la copie finale, annotée en couleurs</small></span></button>`).join("")}</div>
      <span class="etiquette">Exercices</span>`;
  }
  function brancherBlocArgu() { vue.querySelectorAll("[data-guide]").forEach(b => b.addEventListener("click", () => aller("guide", b.dataset.guide))); }
  function afficherGuide(id) {
    const g = GUIDES_ARGU.find(x => x.id === id), intro = g.texte[0], dev = g.texte.slice(1, -1), conclu = g.texte[g.texte.length - 1];
    const toutTexte = g.texte.map(p => p.map(s => s[1]).join(" ")).join(" ");
    const legende = `<div class="legende-roles">${["arg", "expl", "ex", "trans"].map(r => `<span style="--r:${ROLES[r][1]}">${ROLES[r][0]}</span>`).join("")}<span class="leg-co"><b class="connecteur">connecteur</b></span></div>`;
    vue.innerHTML = `<section class="ecran"><button type="button" class="retour" id="retour">‹ Le texte argumentatif</button>
      <h2>Corrigé de A à Z</h2>
      <p style="color:var(--encre-2);font-weight:700">${g.titre}</p>
      <div class="document"><span class="etiquette">Le sujet</span><p><b>${g.sujet}</b></p></div>
      ${etapesAZ([
        ["A", "Analyser le sujet", `<ul>${g.analyse.map(x => `<li>${x}</li>`).join("")}</ul>`],
        ["B", "Chercher des idées au brouillon", `<div class="colonnes-idees">${g.idees.map(([t, l]) => `<div><b>${t}</b><ul>${l.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("")}</div><p style="font-size:14px;color:var(--encre-2)">Au brouillon, écris vite, sans faire de phrases. Tu choisiras ensuite les meilleures idées.</p>`],
        ["C", "Faire le plan", `<ol class="plan">${g.plan.map(x => `<li>${x}</li>`).join("")}</ol>`],
        ["D", "Rédiger l'introduction", `${annoter(intro)}<p style="font-size:14px;color:var(--encre-2)">Une introduction complète : on <b>amène</b> le sujet, on le <b>rappelle</b>, on pose la <b>question</b>, on <b>annonce</b> le plan.</p>`],
        ["E", "Rédiger le développement", `${legende}${dev.map(annoter).join("")}<p style="font-size:14px;color:var(--encre-2)">Chaque paragraphe = <b>argument</b> + <b>explication</b> + <b>exemple</b>, introduit par un connecteur. Les transitions relient les parties.</p>`],
        ["F", "Conclure", `${annoter(conclu)}<p style="font-size:14px;color:var(--encre-2)">La conclusion fait le <b>bilan</b>, donne ta <b>position</b>, puis <b>ouvre</b> sur une question plus large.</p>`],
        ["G", "Se relire", `<ul>${g.relecture.map(x => `<li>${x}</li>`).join("")}</ul>`],
        ["✓", "La copie complète", `<div class="boutons-ligne">${btnEcoute(toutTexte, "fr-FR", "Écouter la copie")}<button type="button" class="bouton second" id="couleurs">Masquer les couleurs</button></div><div class="copie" id="copie">${g.texte.map(annoter).join("")}</div>`]
      ])}
    </section>`;
    vue.querySelector("#retour").addEventListener("click", () => aller("chapitre", "fr-argu-atelier"));
    brancherAZ(vue); brancherEcoute();
    const bc = vue.querySelector("#couleurs"); bc.addEventListener("click", () => { const c = vue.querySelector("#copie"); c.classList.toggle("sans-couleurs"); bc.textContent = c.classList.contains("sans-couleurs") ? "Afficher les couleurs" : "Masquer les couleurs"; });
  }
