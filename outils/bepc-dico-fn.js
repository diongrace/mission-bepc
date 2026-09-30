  // Recherche d'un mot : forme exacte, puis formes dérivées (-s, -ed, -ing…)
  const lireDico = brut => { const d = {}; brut.split("\n").forEach(l => { const i = l.indexOf("="); if (i > 0) d[l.slice(0, i).trim()] = l.slice(i + 1).trim(); }); return d; };
  const DICO = { en: lireDico(DICO_EN_BRUT), es: lireDico(DICO_ES_BRUT) };
  const PRONOMS_EN = { "i'm": "i am", "you're": "you are", "he's": "he is", "she's": "she is", "we're": "we are", "they're": "they are", "i've": "i have", "we've": "we have", "they've": "they have", "i'll": "i will", "you'll": "you will", "we'll": "we will", "i'd": "i would", "let's": "let us" };
  function chercherMot(mot, langue) {
    const d = DICO[langue]; if (!d) return null;
    let m = mot.toLowerCase().replace(/[’‘]/g, "'").replace(/^[^a-záéíóúñüç']+|[^a-záéíóúñüç']+$/g, "");
    if (!m) return null;
    const res = (base, sens, note) => ({ mot: m, base, sens, note: note || "" });
    if (d[m]) return res(m, d[m]);
    if (langue !== "en") return null;
    if (PRONOMS_EN[m]) return res(m, PRONOMS_EN[m].split(" ").map(x => d[x] ? d[x].split(/[;,(]/)[0].trim() : x).join(" "), "forme contractée de « " + PRONOMS_EN[m] + " »");
    if (/'s$/.test(m)) { const b = m.slice(0, -2); if (d[b]) return res(b, d[b], "'s = de (possession) ou « is »"); }
    if (/n't$/.test(m)) { const b = m.slice(0, -3); if (d[b]) return res(b, "ne… pas + " + d[b], "n't = not (négation)"); }
    const essais = [];
    if (/ies$/.test(m)) essais.push([m.slice(0, -3) + "y", "pluriel ou 3e personne (-ies)"]);
    if (/es$/.test(m)) essais.push([m.slice(0, -2), "pluriel ou 3e personne (-es)"]);
    if (/s$/.test(m)) essais.push([m.slice(0, -1), "pluriel ou 3e personne (-s)"]);
    if (/ied$/.test(m)) essais.push([m.slice(0, -3) + "y", "passé (-ed)"]);
    if (/ed$/.test(m)) essais.push([m.slice(0, -2), "passé (-ed)"], [m.slice(0, -1), "passé (-ed)"], [m.slice(0, -3), "passé (-ed)"]);
    if (/ing$/.test(m)) essais.push([m.slice(0, -3), "forme en -ing (en train de)"], [m.slice(0, -3) + "e", "forme en -ing (en train de)"], [m.slice(0, -4), "forme en -ing (en train de)"]);
    if (/ly$/.test(m)) essais.push([m.slice(0, -2), "adverbe (-ly = -ment)"], [m.slice(0, -3) + "y", "adverbe (-ly = -ment)"]);
    if (/er$/.test(m)) essais.push([m.slice(0, -2), "comparatif (-er = plus)"], [m.slice(0, -1), "comparatif (-er = plus)"], [m.slice(0, -3), "comparatif (-er = plus)"]);
    if (/est$/.test(m)) essais.push([m.slice(0, -3), "superlatif (-est = le plus)"], [m.slice(0, -2), "superlatif (-est = le plus)"], [m.slice(0, -4), "superlatif (-est = le plus)"]);
    for (const [b, note] of essais) if (b.length > 1 && d[b] && !d[b].startsWith("✗")) return res(b, d[b], note);
    return null;
  }
