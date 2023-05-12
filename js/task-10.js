function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  divNumbers: document.querySelector("input"),
  divBoxes: document.getElementById("boxes"),
};

const removeBoxes = () => {
  while (refs.divBoxes.firstChild) {
    refs.divBoxes.removeChild(refs.divBoxes.firstChild);
  };
};

const createBoxes = (amount) => {
  if (refs.divBoxes.firstChild) {
    removeBoxes();
  };
  for (let index = 1; index <= amount; index++) {
    const color = getRandomHexColor();
    const div = `<div style = "background:${color};width:${20 + 10 * index}px;height:${20+10*index}px;" ></div>`
    refs.divBoxes.insertAdjacentHTML("beforeend", div);
  };
};
 

const createButtonHandler = () => {
  createBoxes(refs.divNumbers.value);
};


const removeButtonHandler = () => {
  removeBoxes();
};

refs.create.addEventListener("click", createButtonHandler);
refs.destroy.addEventListener("click", removeButtonHandler);

