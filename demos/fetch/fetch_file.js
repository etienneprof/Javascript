fetch("data.json")
    .then(response => response.json())
    .then(json => afficherTableau(json));

function afficherTableau(json) {
    let ul_elem = document.createElement("ul");
    document.body.appendChild(ul_elem);

    json.forEach(heros => {
        let li_elem = document.createElement("li");
        li_elem.textContent = heros.name;
        ul_elem.appendChild(li_elem);
    })
}