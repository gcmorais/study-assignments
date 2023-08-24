import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

function EditContact() {
  return (
    <>
      <PageHeader title="Editar Mateus Silva"/>
      <ContactForm btnLabel='Salvar alterações'/>
    </>
  )
}

export default EditContact
