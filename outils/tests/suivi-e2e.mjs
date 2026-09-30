import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html');
const c=async s=>{await p.waitForSelector(s);await p.$eval(s,e=>e.click())};
// un peu de progression : une mission
await c('#mission'); while(!(await p.$('.fin'))){await p.waitForSelector('#verifier'); if(await p.$('[data-choix]')) await c('[data-choix]'); else {const n=(await p.$$('.case')).length; for(let i=0;i<n;i++){await c('[data-touche="2"]');await c('[data-touche="→"]');}} await c('#verifier'); await p.waitForSelector('#retour-exo > div'); await c('#verifier');}
await c('#retour-fin'); await c('#nav-progres'); await c('#vers-suivi'); await p.waitForSelector('#bilan');
const bilan=await p.$eval('#bilan',t=>t.value); console.log(bilan.split('\n').slice(0,6).join('\n'));
console.log('lien WhatsApp :', await p.$eval('a.lien-bouton',a=>a.href.slice(0,40)));
const code=await p.$eval('#code',t=>t.value); const xp=await p.evaluate(()=>JSON.parse(localStorage.getItem('mission-bepc:v1')).xp);
console.log('code :', code.slice(0,20)+'…', code.length,'caractères · xp', xp);
await p.screenshot({path:dir+'suivi.png',fullPage:true});
// effacer puis restaurer
await p.evaluate(()=>localStorage.clear()); await p.reload(); await c('#nav-progres'); await c('#vers-suivi');
await p.type('#restaurer','n importe quoi'); await c('#btn-restaurer'); console.log('code faux →', await p.$eval('#msg-restaurer',e=>e.textContent));
await p.$eval('#restaurer',t=>t.value=''); await p.type('#restaurer',code); await c('#btn-restaurer'); await c('#btn-restaurer');
console.log('restauration →', await p.$eval('#msg-restaurer',e=>e.textContent));
await c('#nav-accueil'); console.log('points à l\'accueil :', await p.$eval('.hero-niveau small',e=>e.textContent));
console.log('largeur', await p.evaluate(()=>document.documentElement.scrollWidth),'erreurs',errs);
await nav.close();
