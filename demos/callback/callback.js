
console.log("Début du traitement.");
traitementLong(() => console.log("Salut à tous !"));
console.log("Fin du traitement.");

function traitementLong(callback) {
    console.log("Début du traitement très long...");
    
    setTimeout(() => {
        console.log("Fin du traitement très long...");
        callback();
    }, 5000);
    console.log("?");
}

// callback car traitement long
setTimeout(() => {
    console.log("pouet");
}, timeout);

// ressemble au callback, mais pas associé à du traitement asynchrone
Array.sort((a, b) => a - b);