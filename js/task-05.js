const inputNameRef = document.getElementById('name-input');
const outputNameRef = document.getElementById('name-output');

const defaultName = outputNameRef.textContent;

inputNameRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputNameRef.textContent = event.currentTarget.value;
  if (!outputNameRef.textContent) {
    outputNameRef.textContent = defaultName;
  }
}
