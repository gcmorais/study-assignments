import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
} from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log("erro", error);
      });

    console.log(contacts);
  }, [orderBy]);

  function handleToggleOrderBy(){
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome...." />
      </InputSearchContainer>
      <Header>
        <h1>
          {contacts.length}
          {contacts.length === 1 ? " contato" : " contatos"}
        </h1>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
      </ListHeader>

      {contacts.map((item) => (
          <Card key={item.id}>
            <div className="info">
              <div className="title">
                <strong>{item.name}</strong>
                {item.category_name && (
                  <small>{item.category_name}</small>
                )}
              </div>
              <span>{item.email}</span>
              <span>{item.phone}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${item.id}`}>
                <img src={edit} alt="edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="trash" />
              </button>
            </div>
          </Card>
        ))}
    </Container>
  );
}

export default Home;
