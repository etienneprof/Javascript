
/*
 * Evenement standard de clic sur un bouton
 */ 
document
    .getElementById("clickmebutton")
    .addEventListener("click", afficherMessage);

function afficherMessage() {
    alert("Coucou !!!");
}


/*
 * Evenement d'écoute des touches du clavier sur la page
 */
window.addEventListener("keydown", deplacerPersonnage);

function deplacerPersonnage(event) {
    switch(event.keyCode) {
        case 37 :
            console.log("Je vais vers la gauche !");
            break;
        case 38 :
            console.log("Je vais vers le haut !");
            break;
        case 39 :
            console.log("Je vais vers la droite !");
            break;
        case 40 :
            console.log("Je vais vers le bas !");
            break;
        default :
            console.log("Déplacement invalide !");
            break;
    }
}

/*
 * Ecoute d'un evenement d'input
 */
/*
let saisie_elem = document.getElementById("saisie");
let recopie_elem = document.getElementById("recopie");

saisie_elem.addEventListener("input", actualiserRecopie);

function actualiserRecopie() {
    recopie_elem.innerHTML = saisie_elem.value;
}
*/

saisie.addEventListener("input", actualiserRecopie);

function actualiserRecopie() {
    recopie.innerHTML = saisie.value;
}

/*
 * Ajout et retrait d'une classe sur un élément
 */
choixcouleur.addEventListener("input", changerCouleur);

function changerCouleur() {
    document.body.className = "";
    document.body.classList.add(choixcouleur.value);
}
