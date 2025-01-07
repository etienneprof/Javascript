let direction = {"x": 1, "y": 0};
let position = {
    "x" : window.innerWidth / 2,
    "y" : window.innerHeight / 2
}
let speed = 21;
let snake_size = 4;

let snake = [];
let position_history = [];
let apple_pos;
let apple_active = false;

let apple_elem = document.querySelector("span");

updateSize();

window.addEventListener("keydown", changeDirection);

setInterval(() => {
    let movement = {"x" : direction.x * speed, "y" : direction.y * speed};
    position.x += movement.x;
    position.y += movement.y;
    if (position.x < 0) {
        position.x = window.innerWidth - snake[0].offsetWidth;
    }

    if (position.x > (window.innerWidth - snake[0].offsetWidth)) {
        position.x = 0;
    }

    if (position.y < 0) {
        position.y = window.innerHeight - snake[0].offsetHeight;
    }

    if (position.y > (window.innerHeight - snake[0].offsetHeight)) {
        position.y = 0;
    }
    updatePosition();
    checkCollisionWithApple();
    checkCollisionWithTail();
}, 1000/15);

setTimeout(spawnApple, Math.random() * 1000 * 5);

function updatePosition() {
    position_history.push({"x" : position.x, "y" : position.y});
    for (let i = 0; i < snake_size; i++) {
        if (position_history.length > i) {
            snake[i].style.left = position_history[position_history.length - i - 1].x + "px";
            snake[i].style.top = position_history[position_history.length - i - 1].y + "px";
        }
    }

    while (position_history.length > snake_size) position_history.shift();
}

function updateSize() {
    while (snake.length < snake_size) {
        let div_elem = document.createElement("div");
        snake.push(div_elem);
        document.body.appendChild(div_elem);
    }
}

function spawnApple() {
    apple_pos = {
        "x" : Math.random() * (window.innerWidth - 20),
        "y" : Math.random() * (window.innerHeight - 20)
    }
    apple_elem.style.visibility = "visible";
    apple_elem.style.left = apple_pos.x + "px";
    apple_elem.style.top = apple_pos.y + "px";
    apple_active = true;
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

function checkCollisionWithApple() {
    if (apple_active && checkCollision(snake[0], apple_elem)) {
        apple_active = false;
        snake_size++;
        updateSize();
        apple_elem.style.visibility = "hidden";
        setTimeout(spawnApple, Math.random() * 1000 * 3);
        if (snake.length % 5 == 0) {
            speed++;
        }
    }
}

function checkCollisionWithTail() {
    for (let i = 2; i < snake_size; i++) {
        if (checkCollision(snake[0], snake[i])) {
            gameOver();
        }
    }
}

function checkCollision(elem1, elem2) {
    let pos1 = {
        "x" : parseFloat(elem1.style.left, 10),
        "y" : parseFloat(elem1.style.top, 10)
    };

    let pos2 = {
        "x" : parseFloat(elem2.style.left, 10),
        "y" : parseFloat(elem2.style.top, 10)
    };

    let bounds_elem1 = [
        {"x" : pos1.x, "y" : pos1.y},
        {"x" : pos1.x + elem1.offsetWidth, "y" : pos1.y},
        {"x" : pos1.x + elem1.offsetWidth, "y" : pos1.y + elem1.offsetHeight},
        {"x" : pos1.x, "y" : pos1.y + elem1.offsetHeight}
    ]
    
    let bounds_elem2 = [
        {"x" : pos2.x, "y" : pos2.y},
        {"x" : pos2.x + elem2.offsetWidth, "y" : pos2.y + elem2.offsetHeight}
    ]

    let collision = false;
    for (let point of bounds_elem1) {
        collision |= pointInBound(point, bounds_elem2);
    }
    return collision;
}

function pointInBound(pos, bound) {
    return pos.x >= bound[0].x && pos.x <= bound[1].x && pos.y >= bound[0].y && pos.y <= bound[1].y;
}

function gameOver() {
    alert(`T'es MORT ! Mais tu peux être fier(e) de toi, tu avais ${snake_size} points !`);
    location.reload();
}