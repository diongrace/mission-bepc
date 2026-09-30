import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html');
const c=async s=>{await p.waitForSelector(s);await p.$eval(s,e=>e.click())};
await c('[data-mat="francais"]'); await c('.liste [data-chap="fr-argu-atelier"]'); await p.waitForSelector('[data-guide]');
console.log('guides listés :', (await p.$$('[data-guide]')).length, '· exercices :', (await p.$$('[data-niv]')).length);
for(const g of ['reseaux','ecole']){
  await c(`[data-guide="${g}"]`); await p.waitForSelector('.az'); let n=0;
  while(await p.$('[data-az-suivant]:not(.cache)')){ await c('[data-az-suivant]'); n++; if(n>12) break; }
  const vis=await p.$$eval('.az-etape',l=>l.filter(e=>!e.classList.contains('cache')).length);
  console.log(g,': étapes affichées',vis,'· segments annotés',(await p.$$('.copie .seg')).length,'· connecteurs',(await p.$$('.copie .connecteur')).length);
  await c('#couleurs'); console.log('  couleurs masquées :', await p.$eval('#copie',e=>e.classList.contains('sans-couleurs')));
  if(g==='reseaux'){ await c('#couleurs'); await p.screenshot({path:dir+'guide-argu.png',fullPage:true}); }
  await c('#retour'); await p.waitForSelector('[data-guide]');
}
await c('[data-onglet="exos"]');
await c('#nav-matieres'); await c('[data-mat="francais"]'); await c('.liste [data-chap="fr-resume-atelier"]'); await c('[data-atelier="forets"]'); await p.waitForSelector('.az');
await c('[data-az-tout]'); console.log('résumé A→Z : étapes', await p.$$eval('.az-etape',l=>l.filter(e=>!e.classList.contains('cache')).length), '· final :', await p.$eval('.az .modele',e=>e.textContent.slice(-12)));
await p.screenshot({path:dir+'guide-resume.png',fullPage:true});
await c('#nav-sujets'); await c('[data-sujet="fr-redaction"]'); await p.waitForSelector('.lien-actu'); await c('.lien-actu'); await p.waitForSelector('.az'); console.log('lien depuis le sujet :', await p.$eval('.ecran > p',e=>e.textContent));
console.log('largeur', await p.evaluate(()=>document.documentElement.scrollWidth),'erreurs',errs);
await nav.close();
