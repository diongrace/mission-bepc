import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:1,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html'); await new Promise(r=>setTimeout(r,500));
const clic=async s=>{await p.waitForSelector(s);await p.$eval(s,e=>e.click())};
async function repondre(juste){
  const t=await p.$('#texte-rep');
  if(t){const phrase=await p.$eval('[data-parle]',b=>decodeURIComponent(b.dataset.parle)).catch(()=>"x");await p.type('#texte-rep',juste?phrase:"une phrase fausse");}
  else if(await p.$('[data-choix]')) await clic('[data-choix]');
  else{const n=(await p.$$('.case')).length;for(let j=0;j<n;j++){await clic('[data-touche="3"]');await clic('[data-touche="→"]');}}
  await clic('#verifier'); await p.waitForSelector('#retour-exo > div'); await clic('#verifier');
}
const mats=await p.$$eval('[data-mat]',l=>l.map(b=>b.dataset.mat));
let nchap=0,largeurMax=0;
for(const m of mats){ if(m==='actu'||m==='sujets')continue;
  await clic('#nav-accueil'); await clic(`[data-mat="${m}"]`); await p.waitForSelector('.liste [data-chap]');
  const chaps=await p.$$eval('.liste [data-chap]',l=>l.map(b=>b.dataset.chap));
  for(const c of chaps){ nchap++;
    await clic('#nav-matieres'); await clic(`[data-mat="${m}"]`); await clic(`[data-chap="${c}"]`);
    largeurMax=Math.max(largeurMax,await p.evaluate(()=>document.documentElement.scrollWidth));
    await clic('[data-niv]');
    while(!(await p.$('.fin'))){ await p.waitForSelector('#verifier'); await repondre(c==='fr-dictee'); largeurMax=Math.max(largeurMax,await p.evaluate(()=>document.documentElement.scrollWidth)); }
    await p.waitForSelector('.fin'); const sc=await p.$eval('.score',e=>e.textContent);
    if(c==='fr-dictee') console.log('dictée juste →',sc);
    await clic('#retour-fin'); await p.waitForSelector('[data-niv]');
  }
  console.log(m.padEnd(10),chaps.length,'chapitres OK');
}
// écran des matières, progrès, mission
await clic('#nav-matieres'); await p.screenshot({path:dir+'tout-matieres.png',fullPage:true});
await clic('#nav-accueil'); await p.screenshot({path:dir+'tout-accueil.png',fullPage:true});
await clic('#mission'); while(!(await p.$('.fin'))){await p.waitForSelector('#verifier');await repondre(false);} await p.waitForSelector('.fin'); console.log('mission OK');
await clic('#retour-fin'); await clic('#nav-progres'); await p.screenshot({path:dir+'tout-progres.png',fullPage:true});
await clic('#nav-matieres'); await clic('[data-mat="svt"]'); await p.screenshot({path:dir+'tout-svt.png',fullPage:true});
console.log('chapitres testés',nchap,'largeur max',largeurMax,'erreurs',errs);
await nav.close();
