import puppeteer from 'puppeteer-core';
const dir = 'C:/Users/LENOVO/AppData/Local/Temp/claude/C--Users-LENOVO/4006b4b6-8be9-42a0-a785-44aaa1f39fd0/scratchpad/';
const nav = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const p = await nav.newPage(); await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
await p.goto('file:///' + dir + 'mission-bepc-test.html');
const c = async s => { await p.waitForSelector(s); await p.$eval(s, e => e.click()); };

// 1. Exemple corrigé pas à pas dans un chapitre de maths
await c('[data-mat="maths"]'); await c('[data-chap="thales"]'); await p.waitForSelector('.exemple');
let n = 0; while (await p.$('#etape-suivante:not(.cache)')) { await c('#etape-suivante'); n++; if (n > 10) break; }
console.log('exemple Thalès : étapes révélées', n, '· piège visible', await p.$eval('.exemple .piege', e => !e.classList.contains('cache')));
await p.screenshot({ path: dir + 'detail-exemple.png', fullPage: true });

// 2. Indice + correction détaillée (réponse fausse) en maths
await c('[data-niv="decouverte"]'); await p.waitForSelector('#btn-indice');
await c('#btn-indice'); console.log('indice maths :', (await p.$eval('#indice', e => e.textContent)).slice(0, 90));
if (await p.$('[data-choix]')) await c('[data-choix]:not(.cache)'); else { const k = (await p.$$('.case')).length; for (let i = 0; i < k; i++) { await c('[data-touche="9"]'); await c('[data-touche="9"]'); await c('[data-touche="→"]'); } }
await c('#verifier'); await p.waitForSelector('#retour-exo > div');
console.log('sections de correction :', await p.$$eval('.retour-exo .sec > span', l => l.map(x => x.textContent).join(' | ')));
await p.screenshot({ path: dir + 'detail-correction.png', fullPage: true });

// 3. Indice 50/50 et rappel de cours en SVT
await c('#quitter'); await c('#nav-matieres'); await c('[data-mat="svt"]'); await c('[data-chap="svt-transfusion"]'); await c('[data-niv="decouverte"]');
await c('#btn-indice');
console.log('choix visibles après indice :', await p.$$eval('[data-choix]', l => l.filter(b => !b.classList.contains('cache')).length), '/', (await p.$$('[data-choix]')).length);
await c('[data-choix]:not(.cache)'); await c('#verifier'); await p.waitForSelector('#retour-exo > div');
console.log('rappel SVT :', (await p.$$eval('.retour-exo .sec', l => l.map(x => x.textContent).find(t => t.startsWith('Rappel')) || '(réponse juste : détails repliés)')).slice(0, 110));

// 4. Sujet type BEPC : corrigé + auto-évaluation + note
await c('#quitter'); await c('#nav-matieres'); await c('[data-mat="sujets"]'); await p.waitForSelector('[data-sujet]');
console.log('sujets listés :', (await p.$$('[data-sujet]')).length);
await c('[data-sujet="maths-a"]'); await p.waitForSelector('[data-voir]');
await p.type('textarea[data-brouillon]', 'a) Faux car 5 ≠ 7');
const nq = (await p.$$('[data-voir]')).length;
for (let i = 0; i < nq; i++) { await c(`[data-voir="${i}"]`); await c(`[data-eval="${i}|${i % 3 === 0 ? 0.5 : 1}"]`); }
await c('#enregistrer-note'); console.log('note :', await p.$eval('#note-sujet', e => e.textContent), '·', await p.$eval('#note-info', e => e.textContent));
await p.screenshot({ path: dir + 'detail-sujet.png', fullPage: true });
// brouillon conservé
await c('#retour'); await c('[data-sujet="maths-a"]'); console.log('brouillon conservé :', await p.$eval('textarea[data-brouillon]', t => t.value));
// sujet de français (document long)
await c('#retour'); await c('[data-sujet="fr-resume"]'); await p.waitForSelector('.document'); await c('[data-voir="1"]');
await p.screenshot({ path: dir + 'detail-resume.png', fullPage: true });
// lien depuis la page d'une matière
await c('#nav-matieres'); await c('[data-mat="pc"]'); console.log('lien sujet dans PC :', (await p.$$('.ecran [data-sujet]')).length);
console.log('largeur', await p.evaluate(() => document.documentElement.scrollWidth), 'erreurs', errs);
await nav.close();
