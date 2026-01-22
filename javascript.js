/* Question 1 */
const valeursNumeriques = [];

// definir les variables
const nbElements = 20;
const min = -10;
const max = 40;

//Création d'une boucle qui va répeter 20 fois
for (let i = 0; i < nbElements; i++) {

    // Génère un nombre entier aléatoire compris entre -10 et 40
    const valeurAleatoire = Math.floor(Math.random() * (max - min + 1)) + min;

    //Ajout du nombre à la fin du tableau
    valeursNumeriques.push(valeurAleatoire);
}

// Affiche le tableau final
console.log("Tableau généré :", valeursNumeriques);

/* Question 3 */
