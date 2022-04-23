const decrBtnRef = document.querySelector('button[data-action="decrement"]');
const incrBtnRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.getElementById('value');

let counterValue = 0;

decrBtnRef.addEventListener('click', minusOne);
incrBtnRef.addEventListener('click', plusOne);

function minusOne() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function plusOne() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
