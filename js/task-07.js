const fontInputRange = document.getElementById('font-size-control');
const textSizeSpan = document.getElementById('text');

textSizeSpan.style.fontSize = `${fontInputRange.value}px`

fontInputRange.addEventListener('input', (event) => {
    textSizeSpan.style.fontSize = `${event.target.value}px`;
});