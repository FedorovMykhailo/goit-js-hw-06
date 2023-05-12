const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');

inputValue.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        outputValue.textContent = event.target.value;
    } else {
        outputValue.textContent = 'Anonymous';
    }
});

