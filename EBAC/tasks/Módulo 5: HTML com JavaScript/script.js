const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');

function handleSubmit() {
  if (valorA.value < valorB.value) {
    alert('Formulário Válido');
  } else if (valorA.value >= valorB.value) {
    alert('Formulário Inválido');
  }
}
