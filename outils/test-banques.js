const fs=require("fs");
const src=["bepc-exercices.js","bepc-maths2.js","bepc-sciences.js","bepc-hg-edhc.js","bepc-langues.js","bepc-oral-data.js","bepc-arts-eps.js"].map(f=>fs.readFileSync(f,"utf8")).join("\n");
const G=new Function("N","btnEcoute",src+";return {MAT_SVT,MAT_PC,MAT_HG,MAT_EDHC,MAT_FR,MAT_EN,MAT_ES,MAT_ARTS,MAT_EPS,PCG,genDictees,comparerDictee,CHAP_MATHS2};")((...a)=>({id:a[0],n:a[2],seuil:a[3],gens:a[4]}),()=>"<button>");
let pb=0,nq=0,nc=0;const dire=m=>{pb++;console.log(m)};
for(const k of Object.keys(G).filter(k=>k.startsWith("MAT_"))){const M=G[k];const ids=new Set();
 for(const c of M.chapitres){nc++;if(ids.has(c.id))dire("id double "+c.id);ids.add(c.id);
  if(!c.cours||c.cours.length<80)dire(c.id+" cours court");
  const items=(c.qs||[]).concat(c.ecoute||[]);
  if(!c.special&&items.length<8)dire(c.id+" seulement "+items.length+" questions");
  const enonces=new Set();
  for(const it of items){nq++;
   if(it.length<4)dire(c.id+" item court: "+it[0]);
   const choix=it.slice(1,-1);if(new Set(choix).size!==choix.length)dire(c.id+" doublon choix: "+it[0]);
   if(enonces.has(it[0]))dire(c.id+" question en double: "+it[0]);enonces.add(it[0]);
   if(/\$\{/.test(it.join("")))dire(c.id+" gabarit non évalué");}
  if(/\$\{/.test(c.cours))dire(c.id+" cours: gabarit non évalué");}}
for(const [n,g] of Object.entries(G.PCG))for(let i=0;i<500;i++){const q=g();if(/NaN|undefined/.test(JSON.stringify(q))||!isFinite(q.reponse))dire("PCG."+n+" "+JSON.stringify(q).slice(0,120))}
// dictées
for(const g of G.genDictees){const q=g();const r=G.comparerDictee(q.reponse,q.reponse);if(r.erreurs)dire("dictée identique ≠ 0 : "+q.reponse);
 const r2=G.comparerDictee(q.reponse,q.reponse.replace(/s /,"  ").replace(/\.$/,""));}
const t=G.comparerDictee("Les mangues que nous avons cueillies ce matin sont déjà mûres.","les mangues que nous avons cueillis ce matin sont deja mûres");
console.log("exemple dictée:",t.erreurs,"fautes →",t.rendu);
console.log(nc,"chapitres,",nq,"questions de banque,",pb,"problème(s)");
