let foreground_elem = document.getElementById("foreground");
let run_elem = document.getElementById("run");
let result_elem = document.getElementById("result");

run_elem.addEventListener("click", run);

function run() {
    run_elem.removeEventListener("click", run);
    loadData(updateProgress);
}

function updateProgress(progress) {
    foreground_elem.style.width = `${progress}%`;

    if (progress === 100) {
        run_elem.addEventListener("click", run);
        result_elem.textContent = "Chargement terminé !";
    }
}

function loadData(callback) {
    let cpt = 0;

    let idInterval = setInterval(() => {
        cpt++;
        console.log("chargement des données");
        callback(cpt);

        if (cpt === 100) {
            clearInterval(idInterval);
        }
    }, 50);
}