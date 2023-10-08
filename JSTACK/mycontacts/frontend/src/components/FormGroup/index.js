import React from 'react'
import { Container } from './styles'

import PropTypes from 'prop-types'

function FormGroup({children, error, isLoading}) {
  return (
    <Container>
      <div className='form-item'>
        {children}

        {isLoading && (
          <div className='loader' />
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  )
}

export default FormGroup

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
