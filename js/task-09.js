function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  buttonChangeColor: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
  body: document.querySelector("body"),
}

const handleColorButton = () => {
  const color = getRandomHexColor();
  console.log(color);
  refs.spanColor.textContent = color;
  refs.body.style.backgroundColor = color;
}

refs.buttonChangeColor.addEventListener("click", handleColorButton);