const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', onChangeTextSize);

function onChangeTextSize(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
