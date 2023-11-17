/* eslint-disable no-param-reassign */
const form = document.querySelector('#formData');
const phone = document.getElementById('phone');

const data = [];

const phoneMask = (item) => {
  item = item.replace(/\D/g, '');
  item = item.replace(/^(\d{2})(\d)/g, '($1) $2');
  item = item.replace(/(\d)(\d{4})$/, '$1-$2');
  phone.value = item;
};

phone.addEventListener('keypress', (e) => phoneMask(e.target.value));
phone.addEventListener('change', (e) => phoneMask(e.target.value));

function rowAdd() {
  const inputName = document.getElementById('name');
  const inputPhone = document.getElementById('phone');

  data.push({ name: inputName.value, phone: inputPhone.value });

  let row = '<tr>';
  row += `<td>${inputName.value}</td>`;
  row += `<td>${inputPhone.value}</td>`;
  row += '</tr>';

  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML += row;

  inputName.value = '';
  inputPhone.value = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  rowAdd();
});
