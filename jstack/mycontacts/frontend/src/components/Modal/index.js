import React from 'react'
import { Overlay, Container,Footer } from './styles'
import Button from '../Button'
import PropTypes from 'prop-types'

function Modal({danger}) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className='cancel-button'>Cancelar</button>
          <Button type="button" danger={danger} >Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}

export default Modal

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
