import React, { useEffect, useState, useCallback } from 'react'
import { Container } from './styles'
import ToastMessage from '../ToastMessage'

function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event){
      const { type, text, duration } = event.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    };

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    }
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter(
      (message) => message.id !== id,
    ));
  }, []);

  return (
    <Container>
      {messages.map((item) => (
        <ToastMessage
          key={item.id}
          message={item}
          onRemove={handleRemoveMessage}
        />
      ))}
    </Container>
  )
}

export default ToastContainer
