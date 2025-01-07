let random_joke_button = document.getElementById("random_joke_button");
let categories_element = document.getElementById("categories");
let joke_element = document.getElementById("joke");
let joke_holder_element = document.getElementById("joke_holder");

loadCategories();

random_joke_button.addEventListener("click", crackRandomJoke);

function loadCategories() {
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(result => result.json())
        .then(displayCategories);
}

function displayCategories(categories) {
    categories.forEach(category => {
        let button_element = document.createElement("button");
        button_element.textContent = category;

        button_element.addEventListener("click", () => crackJoke(category));
        categories_element.appendChild(button_element);
    });
}

function crackRandomJoke() {
    joke_holder_element.style.animationName = "popout";
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(result => result.json())
        .then(displayJoke);
}

function crackJoke(category) {
    joke_holder_element.style.animationName = "popout";
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(result => result.json())
        .then(displayJoke);
}

function displayJoke(joke) {
    joke_holder_element.style.animationName = "popin";
    joke_element.textContent = joke.value;
}