// définition d'une constante
const URL_GOOGLE = "https://www.google.com";

// Déclaration de variable locale
let phrase = "Salut tout le monde, bonne année à tous !";

// Déclaration de variable globale (dangereux)
var pasbien = "Ceci est une variable mal déclarée.";

// Appel de la fonction toto
toto();

// Définition de la fonction toto
function toto() {
    let phrase = "test";
    console.log(phrase);
}

// Définition de la variable somme qui contient une fonction
const somme = (param1, param2) => {
    return param1 + param2;
}

// Affichage en javascript
console.log(phrase);

// Appel et affichage de la fonction somme
console.log(somme(1, 2));

// Exemples de bizarreries avec JS
// Possibilité d'altérer le type des variables.
let age = 32; // number
age = "32"; // string
console.log(age);
age = age + 1;
console.log(age);

// Changement de typage dynamique pour correspondre aux opérations disponibles
console.log("10" + 1 - 1);






