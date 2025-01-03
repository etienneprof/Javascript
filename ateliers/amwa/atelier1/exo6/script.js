const speed = 8;

let x_position = character.offsetLeft;
let y_position = character.offsetTop;

window.addEventListener("keydown", move);

function move(event) {
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
}