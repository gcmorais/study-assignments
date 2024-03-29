import React from "react";
import BarraLateral from "../../containers/Header";
import ListaDeTarefas from "../../containers/ListaDeTarefas";
import BotaoAdicionar from "../../components/BotaoAdicionar";

function Home() {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  );
}

export default Home;
