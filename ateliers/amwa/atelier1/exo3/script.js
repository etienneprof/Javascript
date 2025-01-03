let content = ["France", "Japon", "Togo", "Suède", "Brésil"];

content.forEach(country => {
    let tr_elem = document.createElement("tr");
    let td_elem = document.createElement("td");
    td_elem.innerText = country;

    tr_elem.appendChild(td_elem);
    container.appendChild(tr_elem);
});