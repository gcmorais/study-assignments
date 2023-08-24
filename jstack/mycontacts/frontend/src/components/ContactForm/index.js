import React from 'react'
import { Form, ButtonContainer } from './styles'
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import PropTypes from 'prop-types'


function ContactForm({btnLabel}) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder='Nome'/>
      </FormGroup>

      <FormGroup>
        <Input placeholder='Email'/>
      </FormGroup>

      <FormGroup>
        <Input placeholder='Telefone'/>
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
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
