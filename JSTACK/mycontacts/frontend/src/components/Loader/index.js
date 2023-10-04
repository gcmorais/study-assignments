import React from 'react'
import {Overlay} from './styles'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function Loader({isLoading}) {
  if(!isLoading){
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <div className='loader' />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

export default Loader

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
