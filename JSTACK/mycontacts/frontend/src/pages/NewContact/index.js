import React from 'react'
import PageHeader from '../../components/PageHeader'

import ContactForm from '../../components/ContactForm'

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm btnLabel='Cadastrar'/>
    </>
  )
}

export default NewContact
