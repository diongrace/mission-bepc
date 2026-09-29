import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html'); await new Promise(r=>setTimeout(r,800));
await p.screenshot({path:dir+'bepc-accueil.png',fullPage:true});
const w=await p.evaluate(()=>document.documentElement.scrollWidth); console.log('largeur',w);
// réponse juste automatique : on lit la question depuis le code via une astuce : on répond au hasard puis on lit la bonne réponse
async function repondre(){
  const qcm=await p.$('[data-choix]');
  if(qcm){ await p.click('[data-choix]'); }
  else { const n=(await p.$$('.case')).length; for(let i=0;i<n;i++){ await p.click('[data-touche="1"]'); await p.click('[data-touche="→"]'); } }
  await p.click('#verifier'); await p.waitForSelector('.retour-exo');
}
// Parcours : chapitre bases, test de départ
await p.click('[data-mat="maths"]'); await p.click('[data-chap="thales"]'); await p.click('[data-niv="decouverte"]');
await p.waitForSelector('.question'); await p.screenshot({path:dir+'bepc-question.png'});
for(let i=0;i<5;i++){ await repondre(); if(i===0) await p.screenshot({path:dir+'bepc-correction.png',fullPage:true}); await p.click('#verifier'); }
await p.waitForSelector('.fin'); console.log('fin:',await p.$eval('.score',e=>e.textContent));
await p.click('#retour-fin'); 
// mission du jour
await p.click('#nav-accueil'); await p.click('#mission');
for(let i=0;i<10;i++){ await p.waitForSelector('#verifier'); await repondre(); await p.click('#verifier'); }
await p.waitForSelector('.fin'); console.log('mission:',await p.$eval('.score',e=>e.textContent));
await p.click('#retour-fin'); await p.click('#nav-progres'); await p.screenshot({path:dir+'bepc-progres.png',fullPage:true});
const st=await p.evaluate(()=>localStorage.getItem('mission-bepc:v1')); console.log(st.slice(0,300));
console.log('erreurs',errs); await nav.close();
