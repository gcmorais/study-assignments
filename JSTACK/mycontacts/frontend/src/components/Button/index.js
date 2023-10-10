import React from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

function Button({children, isLoading, type, disabled}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={16}/>}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
  type: 'button',
  disabled: false,
};
