import React from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types';
import xCircleIcon from '../../../assets/images/x-circle.svg'
import checkCircleIcon from '../../../assets/images/check-circle.svg'

function ToastMessage({text, type}) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt='danger-icon' />}
      {type === 'success' && <img src={checkCircleIcon} alt='success-icon' />}
      <strong>{text}</strong>
    </Container>
  )
}

export default ToastMessage

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
