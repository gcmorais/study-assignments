import { Container, Header, ListContainer, Card } from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';



export default function ContactsList()
{
  return (
    <Container>
      <Header>
        <h1>3 contatos</h1>
        <a href="">Novo contato</a>
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
              <a href=''><img src={edit} alt='edit' /></a>
              <button type='button'><img src={trash} alt='trash' /></button>
          </div>
        </Card>
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
              <a href=''><img src={edit} alt='edit' /></a>
              <button type='button'><img src={trash} alt='trash' /></button>
          </div>
        </Card>
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
              <a href=''><img src={edit} alt='edit' /></a>
              <button type='button'><img src={trash} alt='trash' /></button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
