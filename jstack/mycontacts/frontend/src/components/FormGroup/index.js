import React from 'react'
import { Container } from './styles'

import PropTypes from 'prop-types'

function FormGroup({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default FormGroup

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

