import React from "react";
import BarraLateral from "../../containers/BarraLateral";
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
