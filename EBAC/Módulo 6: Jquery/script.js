/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

const data = [];

$(document).ready(() => {
  $('form').on('submit', (event) => {
    event.preventDefault();
    const taskNewValue = $('#taskValue').val();
    const row = $(`<li>${taskNewValue.toLowerCase()}</li>`);

    for (i = 0; i < data.length; i++) {
      if (taskNewValue === data[i].task) {
        alert('Tarefa já cadastrada.');
        return;
      }
    }

    data.push({ task: taskNewValue });

    $(`
      <span>
        <img src="./assets/check.png" alt="check" class="check"/>
      </span>
    `).appendTo(row);

    row.appendTo('ul');

    $('ul').on('click', 'li', function () {
      $(this).addClass('active');

      for (i = 0; i < data.length; i++) {
        if (taskNewValue === data[i].task) {
          data.splice(i);
        }
      }
    });
  });
});
