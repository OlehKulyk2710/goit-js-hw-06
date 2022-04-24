const inputRef = document.getElementById('validation-input');
const defaultInputLength = Number(inputRef.dataset.length);

let currentInputLength = 0;
inputRef.addEventListener('input', onInput);
inputRef.addEventListener('blur', onBlur);

function onInput(event) {
  currentInputLength = event.currentTarget.value.length;
}

function onBlur(event) {
  inputRef.classList.add('invalid');
  if (currentInputLength === defaultInputLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
}
