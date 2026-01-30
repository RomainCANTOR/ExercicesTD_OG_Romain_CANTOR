

var I_valeursNumeriques = 20;
var I_valeursMin = -10;
var I_valeursMax = 40;

var monTableau = [];

for(let i = 0; i < I_valeursNumeriques ;i++){

    let valeurAleatoire = Math.floor(Math.random() * (I_valeursMax - I_valeursMin + 1)) + I_valeursMin;

    monTableau.push(valeurAleatoire);
}

console.log("Tableau généré : ", monTableau);


const zoneAffichage = document.getElementById('affichage-valeur');
zoneAffichage.textContent = monTableau.join(", ");


async function animerAffichage() {
    for (let i = 0; i < monTableau.length; i++) {
        let valeur = monTableau[i];
        
        zoneAffichage.textContent = valeur + "°C";
        
        zoneAffichage.className = ""; 

        
        if (valeur <= 0) {  
            zoneAffichage.classList.add("froid");
            zoneAffichage.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        } 
        else if (valeur > 0 && valeur <= 20) {
            zoneAffichage.classList.add("bon");
        } 
        else if (valeur > 20 && valeur <= 30) {
            zoneAffichage.classList.add("chaud");
        } 
        else if (valeur > 30) {
            zoneAffichage.classList.add("alerte");
            zoneAffichage.textContent =  "Caliente ! Vamos a la playa,ho hoho hoho !!";
            const messageAlerte = document.createElement("p");
            messageAlerte.setAttribute("role", "alert");
            messageAlerte.textContent = "Attention : Température critique !";
            zoneAlerte.appendChild(messageAlerte);
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

animerAffichage();