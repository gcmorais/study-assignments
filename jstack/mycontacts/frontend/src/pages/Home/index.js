import React from 'react'
import { Container, Header, ListContainer, Card,InputSearchContainer } from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Modal from '../../components/Modal'
import Loader from '../../components/Loader';



function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome...."/>
      </InputSearchContainer>
      <Header>
        <h1>3 contatos</h1>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt='arrow' />
          </button>
        </header>
        <Card>
          <div className='info'>
            <div className='title'>
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>
              <span>mateus@devacademy.com.br</span>
              <span>(41) 4002-8922</span>
          </div>
          <div className='actions'>
              <Link to="/edit/2"><img src={edit} alt='edit' /></Link>
              <button type='button'><img src={trash} alt='trash' /></button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )
}

export default Home
