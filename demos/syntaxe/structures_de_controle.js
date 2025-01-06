for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} est pair`);
    } else {
        console.log(`${i} est impair`);
    }
}

let texte = "lorem ipsum";
console.log(texte.substring(3, 8));

if (isNaN("bonjour")) {
    console.log("bonjour n'est pas un nombre");
}

console.log(10/0);
console.log(typeof(Infinity));
console.log(typeof(NaN));

let ageAsStr = "32";
let age = parseInt(ageAsStr);
console.log(age +1);
