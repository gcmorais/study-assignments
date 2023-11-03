$(document).ready(() => {
  $('#telefone').mask('(00) 00000-0000');

  $('form').on('submit', (e) => {
    e.preventDefault();
    alert('Sucesso!! Formulário enviado!');
  });
});
