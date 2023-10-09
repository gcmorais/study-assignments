import React, { useEffect, useState } from 'react'
import { Form, ButtonContainer } from './styles'
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import PropTypes from 'prop-types'
import isEmailValid from '../../utils/isEmailValid'
import useErrors from '../../hooks/useErrors'
import formatPhone from '../../utils/formatPhone'
import CategoryServices from '../../services/CategoryServices'

function ContactForm({btnLabel, onSubmit}) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [categoryId,setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && phone && errors.length === 0);


  useEffect(() => {
    async function loadCategories(){
      try{
        setIsLoadingCategories(true);

        const categoriesList = await CategoryServices.listCategories();

        setCategories(categoriesList);
      } catch {
        setHasError(true);
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

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
    onSubmit({
      name,email,phone,categoryId
    });
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

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || !!hasError}
        >
          <option value="">Escolher Categoria</option>

          {categories.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}

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
  onSubmit: PropTypes.func.isRequired,
};
