import React from 'react';
import './style.css';

function Input({texto, change, value}) {
  return (
    <input
      className='inputStyle'
      type="number"
      placeholder={texto}
      onChange={change}
      value={value}
    />
  )
}

export default Input