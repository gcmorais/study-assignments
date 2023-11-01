/* eslint-disable no-undef */

$(document).ready(() => {
  $('#containerImg').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: 'Por favor, insira um nome',
      email: 'Por favor, insira um email válido',
      telefone: 'Por favor, insira um telefone',
      cpf: 'Por favor, insira um cpf',
      endereco: 'Por favor, insira um endereço',
      cep: 'Por favor, insira um cep',
    },
    submitHandler(form) {
      alert('Formulário enviado com sucesso!');
      $('#nome').val('');
      $('#email').val('');
      $('#telefone').val('');
      $('#cpf').val('');
      $('#endereco').val('');
      $('#cep').val('');
    },
    invalidHandler(event, validate) {
      const wrongFields = validate.numberOfInvalids();
      if (wrongFields) {
        alert(`Existem ${wrongFields} campos incorretos, não foi possível enviar o formulário.`);
      }
    },
  });
});
