let prenoms = ["Abdel", "Mickael", "Nadege", "Clara"];
prenoms.push("Valentin");

prenoms[2] = "Clément";

console.log(prenoms);
prenoms[9] = "Nadège";

console.log(prenoms);

// Syntaxe du forEach en JavaScript
prenoms.forEach(current => {
    console.log(current);
});

for (let prenom of prenoms) {
    console.log(prenom);
}

