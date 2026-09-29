import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html'); await new Promise(r=>setTimeout(r,600));
await p.click('[data-mat="actu"]'); await p.waitForSelector('[data-theme]');
console.log('thèmes:', (await p.$$('[data-theme]')).length);
await p.screenshot({path:dir+'actu-liste.png',fullPage:true});
await p.click('[data-theme="sport"]'); await p.waitForSelector('#quiz');
await p.$$eval('details.bloc',d=>d.forEach(x=>x.open=true));
console.log('boutons écoute:', (await p.$$('[data-parle]')).length);
const w=await p.evaluate(()=>document.documentElement.scrollWidth); console.log('largeur',w);
await p.screenshot({path:dir+'actu-theme.png',fullPage:true});
if((await p.$$('[data-parle]')).length) await p.click('[data-parle]');
await p.click('#quiz');
// Répondre juste : lire la bonne réponse via l'explication après un premier essai est impossible ; on choisit le 1er choix
for(let i=0;i<6;i++){ await p.waitForSelector('[data-choix]'); await p.click('[data-choix]'); await p.click('#verifier'); await p.waitForSelector('#retour-exo > div'); await p.click('#verifier'); }
await p.waitForSelector('.fin'); console.log('quiz:',await p.$eval('.score',e=>e.textContent), await p.$eval('.fin h2',e=>e.textContent));
await p.click('#retour-fin'); await p.waitForSelector('#quiz'); console.log('retour thème OK:', await p.$eval('#quiz',e=>e.textContent));
await p.click('#nav-accueil'); await p.click('#mission');
for(let i=0;i<10;i++){ await p.waitForSelector('#verifier'); const qcm=await p.$('[data-choix]'); if(qcm) await p.click('[data-choix]'); else { const n=(await p.$$('.case')).length; for(let j=0;j<n;j++){await p.click('[data-touche="2"]');await p.click('[data-touche="→"]');} } await p.click('#verifier'); await p.click('#verifier'); }
await p.waitForSelector('.fin'); console.log('mission OK');
const st=JSON.parse(await p.evaluate(()=>localStorage.getItem('mission-bepc:v1'))); console.log('compétences:',Object.keys(st.comp).join(', '));
console.log('erreurs',errs); await nav.close();
