let nbCaracteresOld = 0;

// Etape 1
let p_elem = document.querySelector("p");
let saisie_elem = document.getElementById("saisie");
let conteneur = document.getElementById("conteneur");
let template = document.querySelector("template");

/*
 * Objectif bonus : etre capable de détecter l'inactivité de l'utilisateur
 * Si l'utilisateur est inactif pendant 3s, alors on coupe l'intervale.
 */ 

let idinterval = setInterval(() => {
    let copie = document.importNode(template.content, true);
    copie.querySelector("td").innerHTML = saisie_elem.value;
    conteneur.appendChild(copie);

    let nbCaracteresNew = saisie_elem.value.length;
    let nbCaracteresEcrits = nbCaracteresNew - nbCaracteresOld;
    let nbCaracteresParMinute = nbCaracteresEcrits * 6;
    if (nbCaracteresEcrits === 0) {
        p_elem.innerText = "";
    } else {
        p_elem.innerText = `Vous écrivez ${nbCaracteresParMinute} caractères par minute !`;
    }

    nbCaracteresOld = nbCaracteresNew;
}, 1000);


saisie_elem.addEventListener("input", couperSauvegarde);

let idtimeout = 0;
function couperSauvegarde() {
    if (idtimeout !== 0) {
        clearTimeout(idtimeout);
    }

    idtimeout = setTimeout(() => {
        clearInterval(idinterval);
    }, 3000);
}