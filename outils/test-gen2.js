const fs=require("fs");
const src=fs.readFileSync("bepc-exercices.js","utf8")+fs.readFileSync("bepc-maths2.js","utf8").replace(/const niv4[\s\S]*$/,"");
const G=new Function("N",src+";return {TR,CN,AI,VE,EI,CO,DR,ST,SY,AF,PY,lireNombre,egal};")(()=>0);
let err={},tot=0;const note=(k,m)=>{(err[k]=err[k]||[]).length<3&&err[k].push(m)};
for(const [gn,g] of Object.entries(G))if(typeof g==="object")for(const [n,f] of Object.entries(g)){const k=gn+"."+n;
 for(let i=0;i<3000;i++){tot++;let q;try{q=f()}catch(e){note(k,"crash "+e.message);continue}
  const t=JSON.stringify(q);if(/NaN|undefined|Infinity|null/.test(t))note(k,"NaN: "+t.slice(0,250));
  if(!q.comp||!q.enonce||!q.explication)note(k,"champ manquant");
  if(q.type==="qcm"){if(!q.choix.includes(q.reponse))note(k,"bonne absente");if(new Set(q.choix).size!==q.choix.length)note(k,"doublon "+q.choix.join(" | "))}
  else if(q.type==="nombre"){if(typeof q.reponse!=="number"||!isFinite(q.reponse))note(k,"rep")}
  else if(q.type==="deux"){if(q.reponse.length!==2)note(k,"deux")}
  else if(q.type==="coeffs"){if(q.reponse.length!==q.modele.length-1)note(k,"coeffs")}
  else note(k,"type "+q.type);
  // la réponse doit pouvoir se taper : décimal ≤ 3 chiffres ou fraction
  const rs=[].concat(q.reponse).filter(x=>typeof x==="number");
  for(const r of rs){const ok=Number.isInteger(Math.round(r*1000*1e6)/1e6)||q.affiche&&/\//.test(q.affiche);if(!ok)note(k,"réponse non saisissable "+r+" "+q.affiche)}
 }}
console.log("questions",tot);console.log(Object.keys(err).length?JSON.stringify(err,null,1):"AUCUNE ERREUR");
