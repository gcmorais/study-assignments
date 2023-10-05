/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contacts = await ContactRepository.findById(id);

    if (!contacts) {
      return response.status(404).json({ error: 'object not found' });
    }

    response.json(contacts);
  }

  async store(request, response) {
    const {
      name,
      email,
      phone,
      category_id,
    } = request.body;

    const contactExists = await ContactRepository.findByEmail(email);

    if (!name) {
      return response.status(400).json({ error: 'name is required!' });
    }

    if (!phone) {
      return response.status(400).json({ error: 'phone is required!' });
    }

    if (contactExists) {
      return response.status(400).json({ error: 'email already exists' });
    }

    const contacts = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.status(201).json(contacts);
  }

  async update(request, response) {
    const { id } = request.params;

    const {
      name,
      email,
      phone,
      category_id,
    } = request.body;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'contact not exists' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required!' });
    }

    if (!email) {
      return response.status(400).json({ error: 'email is required!' });
    }

    if (!phone) {
      return response.status(400).json({ error: 'phone is required!' });
    }

    const contactExistsByEmail = await ContactRepository.findByEmail(email);

    if (contactExistsByEmail && contactExistsByEmail.id !== id) {
      return response.status(400).json({ error: 'email already exists' });
    }

    const contacts = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contacts);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactRepository.delete(id);
    response.status(200).json({ sucess: 'contact deleted' });
  }
}

module.exports = new ContactController();
