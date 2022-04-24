function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amount = 0;

const inputRef = document.querySelector('input[type="number"]');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const divBoxesRef = document.getElementById('boxes');

inputRef.addEventListener('input', onGetAmount);
btnCreateRef.addEventListener('click', onCreateMarkup);
btnDestroyRef.addEventListener('click', destroyBoxes);

function onGetAmount(event) {
  amount = event.currentTarget.value;
}

function onCreateMarkup() {
  divBoxesRef.append(...createBoxes(amount));
}

function createBoxes(amount) {
  const defaultFontSize = 30;
  const markupArr = [];
  for (let i = 0; i < amount; i += 1) {
    let newEl = document.createElement('div');
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = `${defaultFontSize + i * 10}px`;
    newEl.style.height = `${defaultFontSize + i * 10}px`;
    markupArr.push(newEl);
  }
  return markupArr;
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  amount = 0;
  inputRef.value = '';
}
