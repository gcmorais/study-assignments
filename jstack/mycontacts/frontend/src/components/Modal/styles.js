import { styled } from "styled-components";

export const Overlay = styled.div`
  background: rgba(0,0,0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);

  h1{
    font-size: 22px;
    color: ${({ theme, danger }) => (
      danger ? theme.colors.danger.main : theme.colors.gray[900]
    )};
  }
  p{
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 32px;
  gap: 8px;

  .cancel-button{
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.gray[200]};
  }
`;
