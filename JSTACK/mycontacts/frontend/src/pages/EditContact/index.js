import React, { useEffect, useRef, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import { useParams, useHistory } from 'react-router-dom';
import ContactServices from '../../services/ContactServices';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

function EditContact() {
  const [isLoading, setIsLoading ] = useState(true);
  const [headerName, setHeaderName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    async function loadContact(){
      try{

        const contact = await ContactServices.getContactById(id);
        contactFormRef.current.setFieldsValues(contact);

        setIsLoading(false);
        setHeaderName(contact.name);
      }catch{
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, history])

  async function handleSubmit(formData){
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const contactData = await ContactServices.updateContact(id, contact);

      setHeaderName(contactData.name);
      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000,
      });
    }catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato.',
      });
    }
  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${headerName}`}/>
      <ContactForm
        ref={contactFormRef}
        btnLabel='Salvar alterações'
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default EditContact
