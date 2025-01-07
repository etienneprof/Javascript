let operation = sum;
let association = {
    "+" : sum,
    "-" : diff,
    "*" : mul,
    "/" : div
};

// Je vais chercher les balises dont mon algo a besoin
let saisie1_elem = document.getElementById("saisie1");
let saisie2_elem = document.getElementById("saisie2");
let resultat_elem = document.getElementById("resultat");
let operateur = document.getElementById("operateur");

// Définir ce qui se passe lorsque j'interagis avec les zones de saisie
saisie1_elem.addEventListener("input", calculerResultat);
saisie2_elem.addEventListener("input", calculerResultat);
operateur.addEventListener("change", changerOperation);

calculerResultat();

// Définir ce que fait calculerSomme
// Qu'est-ce qui se passe quand la valeur des inputs change
function calculerResultat() {
    let nombre1 = saisie1_elem.valueAsNumber;
    let nombre2 = saisie2_elem.valueAsNumber;

    if (isNaN(nombre1)) {
        nombre1 = 0;
    }

    if (isNaN(nombre2)) {
        nombre2 = 0;
    }

    let resultat = operation(nombre1, nombre2);
    resultat_elem.innerText = resultat;
}

function changerOperation() {
    operation = association[operateur.value];
    calculerResultat();
}

function sum(nb1, nb2) {
    return nb1 + nb2;
}

function diff(nb1, nb2) {
    return nb1 - nb2;
}

function mul(nb1, nb2) {
    return nb1 * nb2;
}

function div(nb1, nb2) {
    return nb1 / nb2;
}