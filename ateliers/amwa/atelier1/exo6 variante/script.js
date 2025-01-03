const speed = 8;

let x_position = character.offsetLeft;
let y_position = character.offsetTop;

let x_deplacement = 0;
let y_deplacement = 0;

window.addEventListener("keydown", onkeydown);
window.addEventListener("keyup", onkeyup);

setInterval(() => {
    character.style.left = `${x_position}px`;
    character.style.top = `${y_position}px`; 
}, 1000/60);


function onkeydown(event) {
    console.log(`Clic sur la touche ${event.key}`);
    switch(event.keyCode) {
        case 37 :
            x_deplacement = -speed;
            break;
        case 38 :
            y_deplacement = -speed;
            break;
        case 39 :
            x_deplacement = speed;
            break;
        case 40 :
            y_deplacement = speed;
            break;
        default :
            console.log("Déplacement invalide !");
            break;
    }
    x_position += x_deplacement;
    y_position += y_deplacement;
}

function onkeyup(event) {
    console.log(`Relachement de la touche ${event.key}`);
    switch(event.keyCode) {
        case 37 :
            x_deplacement = 0;
            break;
        case 38 :
            y_deplacement = 0;
            break;
        case 39 :
            x_deplacement = 0;
            break;
        case 40 :
            y_deplacement = 0;
            break;
        default :
            console.log("Déplacement invalide !");
            break;
    }
}











/*
    switch(event.keyCode) {
        case 37 :
            x_position-=speed;
            break;
        case 38 :
            y_position-=speed;
            break;
        case 39 :
            x_position+=speed;
            break;
        case 40 :
            y_position+=speed;
            break;
        default :
            console.log("Déplacement invalide !");
            break;
    }
    character.style.left = `${x_position}px`;
    character.style.top = `${y_position}px`;
    */