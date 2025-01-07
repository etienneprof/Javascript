let popup = document.querySelector(".more");
let container = document.querySelector(".container");
let template = document.querySelector("template");

popup.addEventListener("click", hideDetails);

fetch("https://api.punkapi.com/v2/beers/")
    .then(resp => resp.json())
    .then(content => {
        content.forEach(beer => {
            let copy = document.importNode(template.content, true);

            let copy_div = copy.querySelector(".card");
            let copy_img = copy.querySelector("img");
            let copy_h2 = copy.querySelector(".title>h2");
            let copy_abv = copy.querySelector(".abv");
            let copy_ps = copy.querySelectorAll(".content>p");

            copy_img.src = beer.image_url;
            copy_h2.innerText = beer.name;
            copy_abv.innerText = `(${beer.abv}%)`;
            copy_ps[0].innerText = beer.tagline;
            copy_ps[1].innerText = "First brewed: " + beer.first_brewed;
            copy_ps[2].innerText = beer.description;


            copy_div.addEventListener("click", () => showDetails(beer));

            container.appendChild(copy);
        });
    });

function showDetails(beer) {
    popup.style.transform = "translateY(0%)";
    popup.innerHTML = "";
    
    for ([key, value] of Object.entries(beer)) {
        popup.innerHTML += `${key}: ${value}<br>`;
    }
}

function hideDetails() {
    popup.style.transform = "translateY(100%)";
}