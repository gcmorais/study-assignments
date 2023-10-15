import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import PropTypes from 'prop-types';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import CategoryServices from '../../services/CategoryServices';

const ContactForm = forwardRef(({btnLabel, onSubmit}, ref) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [categoryId,setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && phone && errors.length === 0);

  useImperativeHandle(ref, () => {
    return {
      setFieldsValues: (contact) => {
        setName(contact.name ?? '');
        setEmail(contact.email ?? '');
        setPhone(formatPhone(contact.phone ?? ''));
        setCategoryId(contact.category_id ?? '');
      }
    }
  }, []);

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

  async function handleSubmit(event){
    event.preventDefault();

    setIsSubmiting(true);

    await onSubmit({
      name,email,phone,categoryId
    });

    setIsSubmiting(false);
    setName('');
    setEmail('');
    setPhone('');
    setCategoryId('');
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')} >
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome *'
          value={name}
          onChange={handleNameChange}
          disabled={isSubmiting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type='email'
          error={getErrorMessageByFieldName('email')}
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmiting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          error={getErrorMessageByFieldName('phone')}
          placeholder='Telefone *'
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          disabled={isSubmiting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || !!hasError || isSubmiting}
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
        <Button
          type='submit'
          disabled={!isFormValid}
          isLoading={isSubmiting}
        >
          {btnLabel}
        </Button>
      </ButtonContainer>

    </Form>
  )
})

ContactForm.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
