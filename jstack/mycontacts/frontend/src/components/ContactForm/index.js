import React, { useState } from 'react'
import { Form, ButtonContainer } from './styles'
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import PropTypes from 'prop-types'


function ContactForm({btnLabel}) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [category,setCategory] = useState('');
  const [errors,setErrors] = useState([]);

  function handleNameChange(event){
    setName(event.target.value);

    if(!event.target.value){
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório.'},
      ])
    }else{
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handlePhoneChange(event){
    setPhone(event.target.value);

    if(!event.target.value){
      setErrors((prevState) => [
        ...prevState,
        { field: 'phone', message: 'Phone é obrigatório.'},
      ])
    }else{
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'phone',
      ));
    }
  }

  console.log(errors);

  function handleSubmit(event){
    event.preventDefault();

    console.log({name,email,phone,category});
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder='Nome'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone} //vai ser not null
          onChange={handlePhoneChange}
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
        <Button type='submit'>
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
