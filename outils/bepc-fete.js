  // ---------- Félicitations : sons, confettis, grands moments ----------
  let ctxAudio = null;
  const sonsActifs = () => !etat.reglages || etat.reglages.sons !== false;
  function jouerNotes(notes, type = "sine", duree = 0.14, volume = 0.18) {
    if (!sonsActifs()) return;
    try {
      ctxAudio = ctxAudio || new (window.AudioContext || window.webkitAudioContext)();
      if (ctxAudio.state === "suspended") ctxAudio.resume();
      const t0 = ctxAudio.currentTime + 0.02;
      notes.forEach((f, k) => {
        const o = ctxAudio.createOscillator(), g = ctxAudio.createGain();
        o.type = type; o.frequency.value = f; o.connect(g); g.connect(ctxAudio.destination);
        const t = t0 + k * duree * 0.85;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(volume, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + duree * 1.8);
        o.start(t); o.stop(t + duree * 2);
      });
    } catch (e) {}
  }
  const sonJuste = () => jouerNotes([784, 1047], "sine", 0.1, 0.12);
  const sonFaux = () => jouerNotes([330, 262], "triangle", 0.12, 0.08);
  const sonReussite = () => jouerNotes([523, 659, 784, 1047], "triangle", 0.13, 0.16);
  const sonGrand = () => jouerNotes([523, 659, 784, 1047, 784, 1047, 1319], "triangle", 0.12, 0.18);
  const mouvementReduit = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function confettis(nombre = 90) {
    if (mouvementReduit()) return;
    const c = document.createElement("canvas"); c.className = "confettis"; document.body.appendChild(c);
    const dpr = Math.min(2, window.devicePixelRatio || 1), W = innerWidth, H = innerHeight;
    c.width = W * dpr; c.height = H * dpr; const g = c.getContext("2d"); g.scale(dpr, dpr);
    const couleurs = ["#E0701F", "#1A8F5F", "#2B63B8", "#F7C331", "#CF3F35", "#7A4FB5"];
    const parts = Array.from({ length: nombre }, () => ({ x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35, vx: (Math.random() - 0.5) * 9, vy: -Math.random() * 11 - 4,
      r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - 0.5) * 0.3, c: couleurs[Math.floor(Math.random() * couleurs.length)] }));
    const debut = performance.now();
    const tic = t => {
      const age = t - debut; g.clearRect(0, 0, W, H);
      parts.forEach(p => { p.vy += 0.28; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va;
        g.save(); g.translate(p.x, p.y); g.rotate(p.a); g.globalAlpha = Math.max(0, 1 - age / 2600); g.fillStyle = p.c; g.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); g.restore(); });
      if (age < 2600) requestAnimationFrame(tic); else c.remove();
    };
    requestAnimationFrame(tic);
  }
  // Grand moment : carte au centre de l'écran
  function grandeFete({ titre, texte, couleur = "#E0701F", lettre = "★", badges = [] }) {
    const f = document.createElement("div"); f.className = "grande-fete"; f.setAttribute("role", "dialog"); f.setAttribute("aria-modal", "true"); f.setAttribute("aria-label", titre);
    f.innerHTML = `<div class="fete-carte" style="--c:${couleur}"><div class="medaille-fete">${lettre}</div><h2>${titre}</h2><p>${texte}</p>
      ${badges.length ? `<div class="fete-badges">${badges.map(b => `<span><b>${b.lettre}</b>${b.nom}</span>`).join("")}</div>` : ""}
      <button type="button" class="bouton">Continuer</button></div>`;
    document.body.appendChild(f);
    const fermer = () => { f.classList.add("sortie"); setTimeout(() => f.remove(), 250); };
    f.querySelector("button").addEventListener("click", fermer); f.addEventListener("click", e => { if (e.target === f) fermer(); });
    setTimeout(() => f.querySelector("button").focus(), 50);
    sonGrand(); confettis(140);
  }
  const ENCOURAGE = ["Bravo !", "Excellent !", "Juste !", "Parfait !", "Tu gères !", "Super !", "Très bien !"];
  function salutTitre() {
    const hh = new Date().getHours();
    return (hh < 12 ? "Bonjour" : hh < 18 ? "Bon après-midi" : "Bonsoir") + ", " + PRENOM + " !";
  }
  function salutation() {
    const s = serieActuelle(), deja = etat.dernierJour === aujourdhui();
    if (!etat.sessions) return "Prêt pour ta première mission ?";
    if (deja) return s >= 2 ? `Série de ${s} jours : bravo, tu es régulier !` : "Bien travaillé aujourd'hui !";
    if (s >= 1) return `Ta série est de ${s} jour${s > 1 ? "s" : ""} : fais une mission pour la garder.`;
    return "Une petite mission pour bien commencer ?";
  }
