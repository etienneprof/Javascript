setTimeout(() => {
    let nouvel_element = document.createElement("p");
    nouvel_element.innerText = "<b>Salut tout le monde</b>";

    document.body.appendChild(nouvel_element);

    let salutations_elem = document.getElementById("salutations");

    let prenom = prompt("Salut ! Comment tu t'appelles ?");

    salutations_elem.innerHTML = `Salut ! C'est ${prenom}.`;

    alert("Fin du chargement");
    if (confirm("Avez-vous terminé ?")) {
        alert("Yay c'est fini !");
    } else {
        alert("Tant pis pour toi, mon programme ne prévoit pas d'autre scénario");
    }
}, 5000);



