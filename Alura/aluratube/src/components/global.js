import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    scrollbar-width: auto;
    scrollbar-color: grey;
  }
  *::-webkit-scrollbar {
    width: 7px;
    height: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.backgroundLevel3};
    border-radius: 10px;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: sans-serif;
    overflow-x: hidden;
    
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    
  }
  body {
    display: flex;
    flex: 1;
    background-color: ${({theme}) => theme.backgroundBase};
    color: ${({theme}) => theme.textColorBase};
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;