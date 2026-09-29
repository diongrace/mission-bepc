const fs=require("fs");
const src=fs.readFileSync("bepc-exercices.js","utf8");
const {B,L,T,R,lireNombre,egal}=new Function(src+";return {B,L,T,R,lireNombre,egal};")();
let erreurs={},total=0;
const note=(k,m)=>{(erreurs[k]=erreurs[k]||[]).length<3&&erreurs[k].push(m)};
for(const [gn,g] of Object.entries({B,L,T,R}))for(const [n,f] of Object.entries(g)){
 const k=gn+"."+n;
 for(let i=0;i<2000;i++){total++;let q;try{q=f()}catch(e){note(k,"crash "+e.message);continue}
  const txt=JSON.stringify(q);
  if(/NaN|undefined|Infinity|null/.test(txt))note(k,"NaN/undef: "+txt.slice(0,300));
  if(!q.comp||!q.enonce||!q.explication)note(k,"champ manquant");
  if(q.type==="qcm"){if(!q.choix.includes(q.reponse))note(k,"bonne réponse absente");if(new Set(q.choix).size!==q.choix.length)note(k,"doublon choix "+q.choix);if(q.choix.length<2)note(k,"peu de choix")}
  else if(q.type==="nombre"){if(typeof q.reponse!=="number")note(k,"reponse non num")}
  else if(q.type==="deux"){if(!Array.isArray(q.reponse)||q.reponse.length!==2)note(k,"deux mal formé")}
  else if(q.type==="coeffs"){if(!Array.isArray(q.reponse)||q.reponse.length!==q.modele.length-1)note(k,"coeffs "+q.reponse+" / "+q.modele.length)}
  else note(k,"type inconnu "+q.type);
  // affichage réponse doit être relisible si nombre
  if(q.type==="nombre"&&q.affiche&&/^[−\-]?\d+([,.]\d+)?$/.test(q.affiche)&&!egal(lireNombre(q.affiche),q.reponse))note(k,"affiche≠reponse "+q.affiche+" "+q.reponse);
 }}
console.log("questions:",total);console.log(Object.keys(erreurs).length?erreurs:"AUCUNE ERREUR");
console.log(["7/2","−3","2,5","-4"].map(lireNombre));
