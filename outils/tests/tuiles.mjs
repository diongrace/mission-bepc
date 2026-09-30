import puppeteer from 'puppeteer-core';
const dir='C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
for (const [w,z] of [[360,1],[360,1.25],[412,1.12]]) {
  const p=await nav.newPage(); await p.setViewport({width:w,height:800,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  await p.goto('file:///'+dir+'mission-bepc-test.html');
  await p.evaluate(z=>{localStorage.setItem('mission-bepc:v1',JSON.stringify({reglages:{taille:z===1?'normal':z===1.25?'tresgrand':'grand'}}))},z); await p.reload(); await new Promise(r=>setTimeout(r,400));
  const deb=await p.$$eval('.grille-mat .mat',l=>l.filter(t=>[...t.children].some(c=>c.scrollWidth>t.clientWidth+1||c.getBoundingClientRect().right>t.getBoundingClientRect().right+1)).map(t=>t.querySelector('b').textContent));
  console.log(`largeur ${w}px, texte x${z} : tuiles qui débordent =`, deb.length?deb.join(', '):'aucune');
  if(w===360&&z===1){ await p.$eval('.grille-mat',e=>e.scrollIntoView()); await p.screenshot({path:dir+'tuiles.png'}); }
  await p.close();
}
await nav.close();
