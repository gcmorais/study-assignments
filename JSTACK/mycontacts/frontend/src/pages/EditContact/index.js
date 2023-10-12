import React, { useEffect, useRef, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import { useParams, useHistory } from 'react-router-dom';
import ContactServices from '../../services/ContactServices';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

function EditContact() {
  const [isLoading, setIsLoading ] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    async function loadContact(){
      try{

        const contact = await ContactServices.getContactById(id);
        contactFormRef.current.setFieldsValues(contact);

        setIsLoading(false);
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

  function handleSubmit(){

  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar Mateus Silva"/>
      <ContactForm
        ref={contactFormRef}
        btnLabel='Salvar alterações'
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default EditContact
