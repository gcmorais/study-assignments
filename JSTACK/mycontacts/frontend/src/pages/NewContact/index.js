import React from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactServices from '../../services/ContactServices';
import toast from '../../utils/toast';

function NewContact() {
  async function handleSubmit(formData){
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactServices.createContact(contact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    }catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato.',
      });
    }
  }
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        btnLabel='Cadastrar'
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default NewContact
