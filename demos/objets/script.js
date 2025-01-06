
let etudiant1 = {"nom" : "Redouane", "prenom" : "Abdel", "notes" : [12, 14, 19]};
let etudiant2 = {"nom" : "Mugniery", "prenom" : "Jean", "notes" : [18, 6, 16]};

let etudiants = [
    {"nom" : "Redouane", "prenom" : "Abdel", "notes" : [12, 14, 19], "adresse" : {
        "numero" : 6,
        "voie" : "Rue des Acacias",
        "ville" : "Paris",
        "codepostal" : 75000,
        "vraieadresse" : false
    }},
    etudiant2
]

etudiant2.notes = 16; // attention : altère le type de "notes"
console.log(etudiant1.nom);

console.log(etudiant2);

console.log(etudiants);
console.log(etudiants[0].adresse.ville);

console.clear();
console.log(etudiants);

etudiants = etudiants.sort((a, b) => {
    return a.nom.localeCompare(b.nom);
});
console.log(etudiants);

