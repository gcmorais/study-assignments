import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px 1;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100vh;

  ul {
    width: 40%;
    min-width: 400px;
  }
`;

export const Campo = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  background-color: #fff;
  color: #666666;
  border-color: #666666;
  margin-bottom: 20px;
`;

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`;

export default EstiloGlobal;
