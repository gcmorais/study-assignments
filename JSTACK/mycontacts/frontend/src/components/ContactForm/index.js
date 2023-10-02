import React, { useState } from 'react'
import { Form, ButtonContainer } from './styles'
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import PropTypes from 'prop-types'
import isEmailValid from '../../utils/isEmailValid'
import useErrors from '../../hooks/useErrors'
import formatPhone from '../../utils/formatPhone'

function ContactForm({btnLabel}) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [category,setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && phone && errors.length === 0);

  function handleNameChange(event){
    setName(event.target.value);

    if(!event.target.value){
      setError({ field: 'name', message: 'Nome é obrigatório.'});
    }else{
      removeError('name');
    }
  }

  function handleEmailChange(event){
    setEmail(event.target.value);

    if(event.target.value && !isEmailValid(event.target.value)){
      setError({ field: 'email', message: 'Email inválido.'});
    }else{
      removeError('email');
    }
  }

  function handlePhoneChange(event){
    setPhone(formatPhone(event.target.value));

    if(!event.target.value){
      setError({ field: 'phone', message: 'Phone é obrigatório.'});
    }else{
      removeError('phone');
    }
  }

  function handleSubmit(event){
    event.preventDefault();

    console.log({name,email,phone,category});
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')} >
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome *'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type='email'
          error={getErrorMessageByFieldName('email')}
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          error={getErrorMessageByFieldName('phone')}
          placeholder='Telefone *'
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="Discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type='submit' disabled={!isFormValid}>
          {btnLabel}
        </Button>
      </ButtonContainer>

    </Form>
  )
}

export default ContactForm

ContactForm.propTypes = {
  btnLabel: PropTypes.string.isRequired,
};
