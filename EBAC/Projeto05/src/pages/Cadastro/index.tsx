import React from "react";
import BarraLateral from "../../containers/Header";
import Formulario from "../../containers/Formulario";

function Cadastro() {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
    </>
  );
}

export default Cadastro;
