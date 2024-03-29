import styled from "styled-components";

export const Container = styled.div `
  & + & {
    margin-top: 16px;
  }

  small{
    color: ${({theme}) => theme.colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }

  .form-item{
    position: relative;
    display: flex;
    align-items: center;

    .loader{
      position: absolute;
      right: 16px;
    }
  }
`;
