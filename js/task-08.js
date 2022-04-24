const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert('Все поля должны быть заполнены!!!');
  } else {
    const formData = { email, password };
    console.log(formData);
  }

  formRef.reset();
}
