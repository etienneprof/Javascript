colorbutton.addEventListener("click", color);

function color() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    colorzone.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorvalue.innerText = `rgb(${r}, ${g}, ${b})`;
}