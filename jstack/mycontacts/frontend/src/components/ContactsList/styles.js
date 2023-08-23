import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 32px;

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 24px;
    color: #222;
  }

  a{
    color: ${({theme}) => theme.colors.primary.main};
    font-weight: bold;
    padding: 8px 16px;
    background: none;
    text-decoration: none;
    border: 2px solid ${({theme}) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all .2s ease-in;

    &:hover{
      background: ${({theme}) => theme.colors.primary.main};
      color: #fff;
    }
  }
`

export const ListContainer = styled.div`
  margin-top: 24px;


  header{
    margin-bottom: 8px;
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${ ({theme}) => theme.colors.primary.main};
      }
    }
  }


`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info{
    color: #bcbcbc;
    font-size: 14px;
    display: flex;
    flex-flow: column;

    & + p{
      margin-top: 10px;
    }

    .title{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;

      strong{
        font-size: 16px;
        color: #222;
        font-weight: bold;
      }

      small{
        color: ${({theme}) => theme.colors.primary.main};
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        background: ${({theme}) => theme.colors.primary.lighter};
        border-radius: 4px;
        padding: 4px;
      }
    }
  }
  .actions{
    display: flex;
    align-items: center;

    button{
      border: none;
      background: transparent;
      margin-left: 8px;
    }
  }
`;
