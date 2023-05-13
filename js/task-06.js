const valueInput = document.getElementById("validation-input");
const valueLenght = valueInput.dataset.length;

valueInput.addEventListener("blur", (event) => {
    if (event.target.value.length === Number.parseInt(valueLenght)) {
        valueInput.classList.add("valid");
        valueInput.classList.remove("invalid");
    } else {
        valueInput.classList.add("invalid");
        valueInput.classList.remove("valid");
    }
});