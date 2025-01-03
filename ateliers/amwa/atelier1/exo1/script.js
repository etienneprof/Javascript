number1.addEventListener("input", updateResult);
number2.addEventListener("input", updateResult);

// version en controlant les champs individuellement
/*
function updateResult() {
    if (number1.value.length === 0
        || number2.value.length === 0) {
        result.innerHTML = 0;
    }
    else {
        result.innerHTML =
            parseInt(number1.value)
            + parseInt(number2.value);
    }
}
    */

// version en controlant le resultat final
function updateResult() {
    let sum = parseInt(number1.value) + parseInt(number2.value);
    if (isNaN(sum)) {
        result.innerHTML = 0;
    }
    else {
        result.innerHTML = sum;
    }
}