import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const p=await nav.newPage(); await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>m.type()==='error'&&errs.push(m.text()));
await p.goto('file:///'+dir+'mission-bepc-test.html');
const c=async s=>{await p.waitForSelector(s);await p.$eval(s,e=>e.click())};
await c('[data-raccourci="animations"]'); await p.waitForSelector('[data-a]'); const ids=await p.$$eval('[data-a]',l=>l.map(b=>b.dataset.a));
console.log('animations :',ids.length);
let largeur=0;
for(const id of ids){
  await c('#nav-accueil'); await c('[data-raccourci="animations"]'); await c(`[data-a="${id}"]`); await p.waitForSelector('.anim-legende .etiquette');
  const n=(await p.$$('.anim-points button')).length;
  for(let k=1;k<n;k++){ await c('[data-suiv]'); }
  for(const r of await p.$$('.anim input[type=range]')) { await r.evaluate(i=>{i.value=i.min;i.dispatchEvent(new Event('input'))}); await r.evaluate(i=>{i.value=i.max;i.dispatchEvent(new Event('input'))}); }
  const svgs=await p.$$eval('.anim svg',l=>l.map(s=>s.innerHTML.length));
  largeur=Math.max(largeur,await p.evaluate(()=>document.documentElement.scrollWidth));
  if(['a-circulation','a-transfusion'].includes(id)) await p.screenshot({path:dir+'anim-'+id+'.png',fullPage:true});
  console.log(id.padEnd(16),n,'étapes · svg',svgs.join('/'), /NaN|undefined/.test(await p.$eval('.anim',a=>a.innerHTML))?'⚠ NaN':'');
}
// dans une leçon : onglet Cours
await c('#nav-matieres'); await c('[data-mat="pc"]'); await c('.liste [data-chap="pc-lentilles"]'); await c('[data-onglet="cours"]');
console.log('animation dans le cours PC :', await p.$$eval('.panneau[data-panneau="cours"] .anim',l=>l.length));
// Lecture (sans voix : avance au minuteur)
await c('[data-lire]'); await new Promise(r=>setTimeout(r,5600)); console.log('lecture auto → ', await p.$eval('.anim-legende .etiquette',e=>e.textContent));
await c('#nav-accueil');
console.log('largeur',largeur,'erreurs',errs);
await nav.close();
