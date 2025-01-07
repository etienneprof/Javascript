let direction = {"x": 1, "y": 0};
let position = {
    "x" : window.innerWidth / 2,
    "y" : window.innerHeight / 2
}
let speed = 3.0;

let head = document.querySelector("div");


window.addEventListener("keydown", changeDirection);

setInterval(() => {
    let movement = {"x" : direction.x * speed, "y" : direction.y * speed};
    if (position.x + movement.x > (head.offsetWidth / 2) && position.x + movement.x < (window.innerWidth - (head.offsetWidth / 2))) {
        position.x += movement.x;
    }
    if (position.y + movement.y > (head.offsetHeight / 2) && position.y + movement.y < (window.innerHeight - (head.offsetHeight / 2))) {
        position.y += movement.y;
    }
    updatePosition();
}, 10);


function updatePosition() {
    head.style.left = position.x + "px";
    head.style.top = position.y + "px";
}

function changeDirection(event) {
    switch(event.key) {
        case "z" :
            direction = {"x" : 0, "y" : -1};
            break;
        case "q":
            direction = {"x" : -1, "y" : 0};
            break;
        case "s":
            direction = {"x" : 0, "y" : 1};
            break;
        case "d":
            direction = {"x" : 1, "y" : 0};
            break;
    }
}