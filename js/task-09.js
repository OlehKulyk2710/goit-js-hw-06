function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const colorNameRef = document.querySelector('.color');

buttonRef.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  const generatedColor = getRandomHexColor();
  bodyRef.style.backgroundColor = generatedColor;
  colorNameRef.textContent = generatedColor;
}
