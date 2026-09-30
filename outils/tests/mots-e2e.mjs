import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html');
const c=async s=>{await p.waitForSelector(s);await p.$eval(s,e=>e.click())};
await c('[data-mat="svt"]'); await c('.liste [data-chap="svt-digestion"]'); await p.waitForSelector('.mots');
console.log('mots affichés (SVT digestion) :', await p.$$eval('.mot dt',l=>l.map(x=>x.textContent).join(', ')));
await p.screenshot({path:dir+'mots.png'});
// questions de définitions dans Découverte
await c('[data-onglet="exos"]'); await c('[data-niv="decouverte"]'); let defs=0;
while(!(await p.$('.fin'))){ await p.waitForSelector('#verifier'); const e=await p.$eval('.question',x=>x.textContent); if(/définition|Que signifie/.test(e)) defs++; await c('[data-choix]'); await c('#verifier'); await p.waitForSelector('#retour-exo > div'); await c('#verifier'); }
console.log('questions de définition vues sur 5 :', defs);
// recherche d'un mot
await c('#nav-chercher'); await p.type('#recherche','enzyme'); await new Promise(r=>setTimeout(r,200));
console.log('recherche « enzyme » :', await p.$$eval('#resultats .theme-carte b',l=>l.slice(0,3).map(x=>x.textContent).join(' | ')));
await c('#resultats [data-res="0"]'); await p.waitForSelector('.mots'); console.log('ouvre le cours :', await p.$eval('[data-onglet="cours"]',b=>b.getAttribute('aria-selected')));
console.log('largeur', await p.evaluate(()=>document.documentElement.scrollWidth),'erreurs',errs);
await nav.close();
