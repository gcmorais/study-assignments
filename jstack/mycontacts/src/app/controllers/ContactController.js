const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    const contacts = ContactRepository.findAll();
    response.json(contacts);
  }

  show() {

  }

  store() {

  }

  upgrade() {

  }

  delete() {

  }
}

module.exports = new ContactController();
