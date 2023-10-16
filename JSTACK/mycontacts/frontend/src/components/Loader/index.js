import React from 'react';
import {Overlay} from './styles';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Spinner  from '../Spinner';
import ReactPortal from '../ReactPortal';

function Loader({isLoading}) {
  if(!isLoading){
    return null;
  }

  let container = document.getElementById('loader-root');

  if(!container){
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');
    document.body.appendChild(container);
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={90}/>
      </Overlay>
    </ReactPortal>
  );
}

export default Loader

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
