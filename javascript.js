/*Question 1 */

var I_valeursNumeriques = 20;
var I_valeursMin = -10;
var I_valeursMax = 40;

var monTableau = [];

for(let i = 0; i < I_valeursNumeriques ;i++){

    let valeurAleatoire = Math.floor(Math.random() * (I_valeursMax - I_valeursMin + 1)) + I_valeursMin;

    monTableau.push(valeurAleatoire);
}

console.log("Tableau généré : ", monTableau);

/* Question 2 */
const zoneAffichage = document.getElementById('affichage-valeur');
zoneAffichage.textContent = monTableau.join(", ");

/* Question 3 */

// Création de la pause 
const delai = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function animerAffichage() {
    for (let i = 0; i < monTableau.length; i++) {
        // remplacer le contenue acutel par la nouvelle valeur
        zoneAffichage.textContent = monTableau[i];
        
        // Attendre 2 secondes
        await delai(2000);
    }
    
    // Affichage de fin
    zoneAffichage.textContent = "Fin de l'affichage";
}

animerAffichage();