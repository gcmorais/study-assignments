import React from 'react'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import BotaoAdicionar from '../../components/BotaoAdicionar'

function Home() {
  return (
    <>
      <BarraLateral />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
