import React, { useEffect } from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types';
import xCircleIcon from '../../../assets/images/x-circle.svg'
import checkCircleIcon from '../../../assets/images/check-circle.svg'

function ToastMessage({ message, onRemove}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemove(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemove])

  function handleRemoveToast(){
    onRemove(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role='button'
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt='danger-icon' />}
      {message.type === 'success' && <img src={checkCircleIcon} alt='success-icon' />}
      <strong>{message.text}</strong>
    </Container>
  )
}

export default ToastMessage

ToastMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    id: PropTypes.number.isRequired,
    duration: PropTypes.number,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
