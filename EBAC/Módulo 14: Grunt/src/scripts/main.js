document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form-sorteador').addEventListener('submit', (e) => {
    e.preventDefault();
    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo);

    let numeroAleatorio = Math.random() * numeroMaximo;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);

    document.getElementById('resultado-valor').innerText = numeroAleatorio;
    document.querySelector('.resultado').style.display = 'block';
  });
});
