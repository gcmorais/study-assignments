/* eslint-disable no-undef */
$(document).ready(() => {
  $('form').on('submit', (event) => {
    event.preventDefault();
    const taskNewValue = $('#taskValue').val();
    const row = $(`<li>${taskNewValue}</li>`);
    $(`
      <span>
        <img src="./assets/check.png" alt="check" class="check"/>
      </span>
    `).appendTo(row);

    $(row).appendTo('ul');

    const list = document.querySelector('.list').querySelectorAll('ul li');
    list.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.add('active');
      });
    });
  });
});
