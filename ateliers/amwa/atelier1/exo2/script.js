let minX = troll.offsetWidth / 2;
let maxX = window.innerWidth - minX;
let minY = troll.offsetHeight / 2;
let maxY = window.innerHeight - minY;

troll.addEventListener("mouseenter", moveTroll);

function moveTroll() {
    troll.style.top = Math.random() * (maxY - minY) + minY + "px";
    troll.style.left = `${Math.random() * (maxX - minX) + minX}px`;
}