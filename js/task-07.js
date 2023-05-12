const fontInputRange = document.getElementById('font-size-control');
const textSizeSpan = document.getElementById('text');

fontInputRange.addEventListener('input', (event) => {
    textSizeSpan.style.fontSize = `${event.target.value}px`;
});