const fs = require("fs");
const files = ["bepc-exercices.js", "bepc-maths2.js", "bepc-sciences.js", "bepc-hg-edhc.js", "bepc-langues.js", "bepc-oral-data.js", "bepc-arts-eps.js", "bepc-rappels.js", "bepc-exemples.js", "bepc-sujets.js"];
const src = files.map(f => fs.readFileSync(f, "utf8")).join("\n");
const G = new Function("N", "btnEcoute", src + ";return {MAT_SVT,MAT_PC,MAT_HG,MAT_EDHC,MAT_FR,MAT_EN,MAT_ES,MAT_ARTS,MAT_EPS,CHAP_MATHS2,EXEMPLES,SUJETS,AIDE_COMP,blocsCours,meilleurRappel,TR,CN,AI,VE,EI,CO,DR,ST,SY,AF,PY,B,L,T,R,PCG};")(() => ({}), () => "");
let pb = 0; const dire = m => { pb++; console.log("✗", m); };
const ids = ["bases", "litteral", "thales", "racines", ...G.CHAP_MATHS2.map(c => c.id)];
for (const k of Object.keys(G).filter(k => k.startsWith("MAT_"))) for (const c of G[k].chapitres) ids.push(c.id);
for (const id of ids) { const e = G.EXEMPLES[id]; if (!e) dire("pas d'exemple : " + id); else if (!e.etapes.length || !e.piege) dire("exemple incomplet : " + id); }
for (const id of Object.keys(G.EXEMPLES)) if (!ids.includes(id)) dire("exemple orphelin : " + id);
for (const s of G.SUJETS) { const t = s.questions.reduce((a, q) => a + q.points, 0); if (Math.abs(t - 20) > 1e-9) dire(s.id + " total " + t); for (const q of s.questions) if (!q.corrige || q.corrige.length < 40) dire(s.id + " corrigé court " + q.num); }
const comps = new Set(); for (const g of ["TR", "CN", "AI", "VE", "EI", "CO", "DR", "ST", "SY", "AF", "PY", "B", "L", "T", "R", "PCG"]) for (const f of Object.values(G[g])) for (let i = 0; i < 30; i++) comps.add(f().comp);
for (const c of comps) if (!G.AIDE_COMP[c]) dire("pas d'aide pour la compétence " + c);
let sansRappel = 0, n = 0;
for (const k of Object.keys(G).filter(k => k.startsWith("MAT_"))) for (const c of G[k].chapitres) { const b = G.blocsCours(c.cours); if (!b.length) dire("fiche sans paragraphe : " + c.id); for (const it of (c.qs || [])) { n++; if (!G.meilleurRappel(b, it)) sansRappel++; } }
const res = G.SUJETS.find(s => s.id === "fr-resume"); const modele = res.questions[1].corrige.match(/« ([\s\S]*?) »<\/span>/)[1];
const texte = res.document.replace(/<[^>]+>/g, " "); const mots = t => t.replace(/[.,;:!?«»]/g, " ").replace(/[’']/g, "' ").split(/\s+/).filter(Boolean).length;
console.log("texte :", mots(texte), "mots → quart ≈", Math.round(mots(texte) / 4), "| résumé modèle :", mots(modele), "mots");
// exemple de rappel choisi
const ch = G.MAT_SVT.chapitres[3]; console.log("exemple de rappel →", ch.qs[0][0], "⇒", G.meilleurRappel(G.blocsCours(ch.cours), ch.qs[0]).titre);
console.log(ids.length, "chapitres,", Object.keys(G.EXEMPLES).length, "exemples,", G.SUJETS.length, "sujets,", comps.size, "compétences de maths,", n, "questions (" + sansRappel + " sans rappel) →", pb, "problème(s)");
