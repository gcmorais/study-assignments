const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
const form = document.getElementById('formData');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const invalidMessage = document.getElementById('invalidForm');
  const validMessage = document.getElementById('validForm');

  if (valorA.value < valorB.value) {
    invalidMessage.style.display = 'none';
    validMessage.style.display = 'block';
  } else if (valorA.value >= valorB.value) {
    validMessage.style.display = 'none';
    invalidMessage.style.display = 'block';
  }
});
