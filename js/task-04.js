let counterValue = 0;

const value = document.querySelector('#value');
const btnInc = document.querySelector('[data-action="increment"]');
const btnDec = document.querySelector('[data-action="decrement"]');

const incAction = () => { value.textContent = ++counterValue };
const decAction = () => { value.textContent = --counterValue };

btnInc.addEventListener('click', incAction);
btnDec.addEventListener('click', decAction);

