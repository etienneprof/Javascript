let title_elem = document.getElementById("title");
let content_elem = document.getElementById("content");
let color_elem = document.getElementById("color");
let submit_button = document.getElementById("submit");
let container_elem = document.getElementById("container");

submit_button.addEventListener("click", addNote);

function addNote(event) {
    event.preventDefault();

    let note_elem = document.createElement("div");
    let note_title_elem = document.createElement("h2");
    let note_content_elem = document.createElement("p");
    let note_close_elem = document.createElement("p");

    note_elem.style.backgroundColor = color_elem.value;
    note_elem.classList.add("note");
    note_title_elem.textContent = title_elem.value;
    note_content_elem.textContent = content_elem.value;
    note_close_elem.innerHTML = "&#10005;";
    note_close_elem.classList.add("close");

    note_close_elem.addEventListener("click", deleteNote);
    /*
    note_close_elem.addEventListener("click", () => {
        container_elem.removeChild(note_elem);
        note_elem.remove();
    });
    */

    note_elem.appendChild(note_title_elem);
    note_elem.appendChild(note_content_elem);
    note_elem.appendChild(note_close_elem);
    container_elem.appendChild(note_elem);
}

function deleteNote(event) {
    if (confirm("Etes-vous sur de vouloir supprimer la note ?")) {
        container_elem.removeChild(event.target.parentElement);
        // event.target.parentElement.remove();
    }
    
}
