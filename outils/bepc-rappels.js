  // =========================================================
  // Indices et pièges pour les compétences de maths (et calculs de PC)
  // indice : la méthode sans donner la réponse ; piege : l'erreur fréquente
  // =========================================================
  const AIDE_COMP = {
    "b-fractions": { indice: "Pour additionner ou soustraire, mets d'abord les fractions au même dénominateur. Pour multiplier, multiplie les numérateurs entre eux et les dénominateurs entre eux. Pour diviser, multiplie par l'inverse.", piege: "On n'additionne jamais les dénominateurs : 1/2 + 1/3 ≠ 2/5. Et pense à simplifier le résultat." },
    "b-relatifs": { indice: "Règle des signes : deux signes identiques donnent +, deux signes contraires donnent −. Soustraire un nombre, c'est ajouter son opposé.", piege: "(−3)² = 9 mais −3² = −9 : le carré ne porte sur le signe que s'il y a des parenthèses." },
    "b-priorites": { indice: "Ordre : 1) parenthèses, 2) puissances, 3) multiplications et divisions (de gauche à droite), 4) additions et soustractions.", piege: "2 + 3 × 4 = 14, pas 20 : la multiplication passe avant l'addition." },
    "b-equation": { indice: "Isole x : fais passer les nombres de l'autre côté (en changeant d'opération), puis divise par le coefficient de x.", piege: "Quand un terme change de membre, il change de signe. Et vérifie ta solution en la remplaçant dans l'équation." },
    "b-developper": { indice: "Distributivité : k(a + b) = ka + kb, et (a + b)(c + d) = ac + ad + bc + bd. Chaque terme de la 1re parenthèse multiplie chaque terme de la 2e.", piege: "Attention aux signes : −2(x − 3) = −2x + 6." },
    "b-puissances": { indice: "10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ ; 10ⁿ ÷ 10ᵐ = 10ⁿ⁻ᵐ ; 10⁻ⁿ = 1/10ⁿ. En écriture scientifique, le nombre devant est entre 1 et 10.", piege: "10³ × 10² = 10⁵ (on additionne les exposants), pas 10⁶." },
    "l-puissances": { indice: "aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐˣⁿ ; a⁻ⁿ = 1/aⁿ ; a⁰ = 1.", piege: "On n'additionne les exposants que si la base est la même : 2³ × 3² ne se simplifie pas ainsi." },
    "l-valeur": { indice: "Remplace x par sa valeur entre parenthèses, puis calcule en respectant les priorités.", piege: "Si x = −2, alors x² = (−2)² = 4 et −x² = −4." },
    "l-developper": { indice: "Utilise les identités remarquables : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².", piege: "(a + b)² ≠ a² + b² : n'oublie pas le double produit 2ab." },
    "l-factoriser": { indice: "Cherche d'abord un facteur commun. Sinon, reconnais une identité remarquable : a² − b² = (a − b)(a + b), a² + 2ab + b² = (a + b)².", piege: "Vérifie toujours en redéveloppant ta factorisation : tu dois retrouver l'expression de départ." },
    "l-produitnul": { indice: "Un produit est nul si l'un des facteurs est nul : écris « A = 0 ou B = 0 » et résous chaque petite équation. Pour x² = a (a > 0), il y a deux solutions : √a et −√a.", piege: "Ne divise jamais les deux membres par une expression qui contient x : tu perdrais une solution." },
    "l-fraction": { indice: "Une fraction rationnelle existe si son dénominateur n'est pas nul : résous « dénominateur = 0 » et exclus ces valeurs.", piege: "On cherche où le DÉNOMINATEUR s'annule, pas le numérateur." },
    "t-longueur": { indice: "Configuration de Thalès : écris AM/AB = AN/AC = MN/BC, garde les deux quotients qui contiennent une seule inconnue, puis fais un produit en croix.", piege: "Les longueurs doivent partir du même sommet A : AM avec AB (petit / grand), jamais AM avec MB." },
    "t-reconnaitre": { indice: "Repère le sommet commun, les deux points sur les côtés et les deux droites parallèles. Les quotients égaux sont « petit côté / grand côté ».", piege: "Il faut des droites parallèles pour appliquer Thalès." },
    "t-reciproque": { indice: "Calcule séparément AM/AB et AN/AC. S'ils sont égaux (et les points dans le même ordre), alors (MN) // (BC).", piege: "Pour démontrer que des droites NE sont PAS parallèles, il suffit que les deux quotients soient différents." },
    "r-definition": { indice: "√a est le nombre positif dont le carré vaut a. √(a²) = |a|, la valeur absolue de a (toujours positive).", piege: "√(−5)² = 5, pas −5. Une racine carrée n'est jamais négative." },
    "r-simplifier": { indice: "Décompose le nombre sous le radical en produit d'un carré parfait (4, 9, 16, 25, 36, 49…) et d'un autre nombre : √(k² × m) = k√m.", piege: "Cherche le PLUS GRAND carré parfait : √72 = √(36 × 2) = 6√2 (et non 2√18)." },
    "r-operations": { indice: "√a × √b = √(ab) ; on ne peut additionner que des racines identiques : 3√2 + 5√2 = 8√2. Simplifie d'abord chaque racine.", piege: "√(a + b) ≠ √a + √b : √(9 + 16) = 5, alors que √9 + √16 = 7." },
    "r-radical": { indice: "Multiplie le numérateur et le dénominateur par la racine (a/√b) ou par l'expression conjuguée (a + √b → a − √b), puis utilise (a + √b)(a − √b) = a² − b.", piege: "Multiplie bien le numérateur ET le dénominateur par la même chose." },
    "tr-pythagore": { indice: "Repère l'hypoténuse (en face de l'angle droit, le plus grand côté). Hypoténuse² = somme des carrés des deux autres côtés.", piege: "Pour un côté de l'angle droit, on SOUSTRAIT : AC² = BC² − AB²." },
    "tr-reciproque": { indice: "Calcule le carré du plus grand côté, puis la somme des carrés des deux autres. Compare.", piege: "Si les résultats sont différents, conclus « n'est pas rectangle » (c'est la conséquence de la propriété de Pythagore)." },
    "tr-trigo": { indice: "SOH CAH TOA : Sinus = Opposé/Hypoténuse ; Cosinus = Adjacent/Hypoténuse ; Tangente = Opposé/Adjacent. Aussi : cos²x + sin²x = 1.", piege: "Le côté « adjacent » et le côté « opposé » dépendent de l'angle choisi. Repère-les à partir de CET angle." },
    "cn-intervalles": { indice: "Crochet tourné vers le nombre = nombre compris (≤) ; crochet tourné vers l'extérieur = nombre exclu (<). Avec ∞, le crochet est toujours ouvert. Dessine une droite graduée.", piege: "∩ = dans les DEUX intervalles ; ∪ = dans l'un OU l'autre." },
    "cn-comparer": { indice: "Pour comparer deux nombres positifs avec des racines, compare leurs carrés : (a√b)² = a² × b.", piege: "Ce n'est vrai que pour des nombres POSITIFS." },
    "cn-encadrer": { indice: "Additionne les encadrements membre à membre. Pour une différence, encadre d'abord l'opposé (l'ordre s'inverse). Pour √n, trouve les carrés parfaits qui l'entourent.", piege: "Pour a − b, on ne soustrait pas les bornes dans le même ordre : borne basse = bas(a) − haut(b)." },
    "ai-angles": { indice: "Angle inscrit = moitié de l'angle au centre qui intercepte le même arc. Deux angles inscrits sur le même arc sont égaux. Diamètre → angle droit.", piege: "Vérifie que les deux angles interceptent bien le MÊME arc." },
    "ve-vecteurs": { indice: "Chasles : AB⃗ + BC⃗ = AC⃗ (la lettre du milieu disparaît). AB⃗ − AC⃗ = CB⃗. k·AB⃗ a pour longueur |k| × AB.", piege: "BA⃗ = −AB⃗ : l'ordre des lettres compte." },
    "ei-equations": { indice: "Regroupe les x dans un membre et les nombres dans l'autre, puis divise par le coefficient de x. Pour un produit nul, chaque facteur peut être nul.", piege: "Vérifie en remplaçant x par ta solution dans l'équation de départ." },
    "ei-inequations": { indice: "Résous comme une équation. Si tu multiplies ou divises par un nombre NÉGATIF, change le sens de l'inégalité. Écris la solution sous forme d'intervalle.", piege: "−3x > 6 donne x < −2 (le sens change !)." },
    "co-coordonnees": { indice: "AB⃗ (x_B − x_A ; y_B − y_A). Milieu : moyenne des coordonnées. Distance : AB = √[(x_B − x_A)² + (y_B − y_A)²].", piege: "C'est toujours « arrivée − départ » : B − A pour AB⃗." },
    "dr-droites": { indice: "Coefficient directeur a = (y_B − y_A)/(x_B − x_A). Puis b avec un point : y_A = a·x_A + b.", piege: "Garde le même ordre en haut et en bas (B − A et B − A)." },
    "st-stats": { indice: "Moyenne = Σ(valeur × effectif) ÷ effectif total. Médiane : range les valeurs et prends celle du milieu. Angle = effectif/total × 360°.", piege: "Pour la moyenne, divise par l'EFFECTIF TOTAL, pas par le nombre de valeurs différentes." },
    "sy-systemes": { indice: "Substitution : isole une inconnue dans une équation et remplace-la dans l'autre. Combinaison : multiplie les équations pour éliminer une inconnue en les soustrayant.", piege: "Vérifie ta solution dans les DEUX équations." },
    "af-affines": { indice: "f(x) = ax + b. Image : remplace x. Antécédent : résous ax + b = valeur. a = (f(x₂) − f(x₁))/(x₂ − x₁), puis b = f(x₁) − a·x₁.", piege: "a > 0 : croissante ; a < 0 : décroissante. Ne confonds pas image et antécédent." },
    "py-volumes": { indice: "V = (aire de la base × hauteur) ÷ 3 pour une pyramide ou un cône. Réduction de coefficient k : volumes × k³.", piege: "N'oublie pas de diviser par 3 ! Et pour le cône, l'aire de la base est π r²." },
    "pc-calcul": { indice: "Écris d'abord la formule littérale, remplace par les valeurs avec leurs unités, calcule, puis donne l'unité du résultat. Formules : P = m·g ; W = F·L ; P = W/t ; Ec = ½mv² ; Ep = mgh ; P = UI ; E = P·t ; U = RI.", piege: "Vérifie les unités : masse en kg, distance en m, temps en s (ou en h pour les kWh), distance focale en m pour la vergence." }
  };

  // Choisit, dans la fiche de cours, le paragraphe le plus proche d'une question (rappel de cours pour la correction)
  const MOTS_VIDES = new Set("les des une dans pour avec sont est que qui par sur aux ces son ses leur plus pas the and are this that elle ils nous vous tout toute tous quel quelle quand comme donc mais car était être avoir fait faire".split(" "));
  const motsCles = t => new Set(String(t).replace(/<[^>]+>/g, " ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z0-9]+/).filter(m => m.length > 3 && !MOTS_VIDES.has(m)));
  function blocsCours(cours) {
    const blocs = []; const re = /<div class="regle"><b>([\s\S]*?)<\/b>([\s\S]*?)<\/div>/g; let m;
    while ((m = re.exec(cours))) blocs.push({ titre: m[1], texte: m[2], mots: motsCles(m[1] + " " + m[2]) });
    return blocs;
  }
  function meilleurRappel(blocs, item) {
    const mots = motsCles(item.join(" "));
    let best = null, score = 0;
    for (const b of blocs) { let s = 0; for (const m of mots) if (b.mots.has(m)) s++; if (s > score) { score = s; best = b; } }
    return best || blocs[0] || null;
  }
