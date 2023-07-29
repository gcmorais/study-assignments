const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guimail@gmail.com',
    phone: '40028922',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactRepository();
