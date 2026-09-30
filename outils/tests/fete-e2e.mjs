import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html');
const c=async s=>{await p.waitForSelector(s);await p.$eval(s,e=>e.click())};
console.log('salutation :', await p.$eval('.salut',e=>e.textContent));
// Réussir le test de maîtrise d'un chapitre de banque en trichant (on lit la bonne réponse via l'indice 50/50 puis la correction) : on répond juste en cliquant la réponse marquée juste après un premier essai impossible -> on utilise l'état interne : bonne réponse = celle qui reste juste après vérification. Plus simple : chapitre EPS (8 questions), on joue jusqu'à obtenir le niveau.
async function jouer(chap, niv){ await c('#nav-matieres'); await c(`[data-mat="${chap.split('-')[0]==='eps'?'eps':'francais'}"]`); await c(`.liste [data-chap="${chap}"]`); await c('[data-onglet="exos"]'); await c(niv==="maitrise" ? "#rapide" : `[data-niv="${niv}"]`);
  let bonnes=0; while(!(await p.$('.fin'))){ await p.waitForSelector('#verifier');
    // on essaie chaque choix mentalement : on clique l'indice pour réduire à 2, puis on choisit au hasard
    await c('[data-choix]:not(.cache)'); await c('#verifier'); await p.waitForSelector('#retour-exo > div'); if(await p.$('.retour-exo.bien')) bonnes++; await c('#verifier'); }
  return bonnes; }
let essais=0, fete=null;
while(essais<25 && !fete){ essais++; await jouer('eps-sante','maitrise'); await new Promise(r=>setTimeout(r,500)); fete=await p.$('.grande-fete'); if(!fete){ await c('#retour-fin'); } }
console.log('grande fête après', essais, 'essai(s) :', fete ? await p.$eval('.fete-carte h2',e=>e.textContent) : 'non');
if(fete){ await p.screenshot({path:dir+'fete.png'}); await c('.grande-fete .bouton'); await new Promise(r=>setTimeout(r,400)); console.log('fête fermée :', !(await p.$('.grande-fete'))); }
// Atelier résumé
await c('#nav-matieres'); await c('[data-mat="francais"]'); await c('.liste [data-chap="fr-resume-atelier"]'); await c('[data-onglet="exos"]'); await c('[data-atelier="sport"]');
await p.waitForSelector('#resume'); console.log('objectif :', await p.$eval('.objectif',e=>e.textContent.replace(/\s+/g,' ').trim()));
for(const k of [0,1,3,4,6,7]) await c(`[data-idee="${k}"]`); await c('#verifier-idees'); console.log('idées :', await p.$eval('#msg-idees',e=>e.textContent));
await p.type('#resume','On considère souvent l\'éducation physique comme une matière secondaire. Selon l\'auteur,');
console.log('contrôles (copie) :', await p.$$eval('#controles li',l=>l.map(x=>x.textContent.slice(0,60))));
await p.$eval('#resume',t=>{t.value='';t.dispatchEvent(new Event('input'))});
await p.type('#resume','Jugé secondaire, le sport scolaire est pourtant essentiel. Il préserve la santé et combat l\'obésité. Il améliore aussi l\'attention et la mémoire. De plus, il forge le respect des règles, la solidarité et l\'effort. Même sans grands moyens, on peut le pratiquer. Valorisons-le donc : il garantit la réussite.');
console.log('compteur :', await p.$eval('#compteur',e=>e.textContent)); await c('#verifier-resume'); console.log('vérification :', await p.$eval('#bilan-resume',e=>e.textContent.slice(0,90)));
await p.screenshot({path:dir+'atelier.png',fullPage:true});
// sujet article : compteur de mots
await c('#nav-sujets'); await c('[data-sujet="fr-article"]'); await p.type('textarea[data-brouillon]','Samedi, les élèves ont nettoyé l\'école.'); console.log('mots sujet :', await p.$eval('.mots-sujet',e=>e.textContent));
console.log('largeur', await p.evaluate(()=>document.documentElement.scrollWidth),'erreurs',errs);
await nav.close();
