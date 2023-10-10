import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color .2s ease-in;
  appearance: none;

  &:focus{
    border-color: ${({theme}) => theme.colors.primary.main};
  }

  &[disabled]{
    background-color: ${({theme}) => theme.colors.gray[100]};
    border-color: ${({theme}) => theme.colors.gray[100]};
    opacity: 1;
  }
`
