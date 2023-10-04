import React, { useEffect, useMemo, useState } from "react";
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
import delay from "../../utils/delay";
import ContactServices from "../../services/ContactServices";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredSearch = useMemo(() => contacts.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase())
  )), [contacts, search]);

  //Como trabalhar com métodos SÍNCRONOS dentro do useEffect:

  // useEffect(() => {
  //   fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
  //     .then(async (response) => {
  //       setIsLoading(true);

  //       await delay(500);

  //       const json = await response.json();
  //       setContacts(json);
  //     })
  //     .catch((error) => {
  //       console.log("erro", error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     })

  // }, [orderBy]);

  //Como trabalhar com métodos ASSÍNCRONOS dentro do useEffect ( SEM camada de abstração ):

  // useEffect(() => {
  //   async function loadContacts(){
  //     try{
  //       setIsLoading(true);

  //       const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);

  //       await delay(500);

  //       const json = await response.json();

  //       setContacts(json);

  //     } catch(error){
  //       console.log("error", error)
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   loadContacts();
  // }, [orderBy]);

  //Como trabalhar com métodos ASSÍNCRONOS dentro do useEffect ( COM camada de abstração * src > services > ContactServices.js  ):

  useEffect(() => {
    async function loadContacts(){
      try{
        setIsLoading(true);

        const contactList = await ContactServices.listContacts(orderBy);

        setContacts(contactList);

      } catch(error){
        console.log("error", error)
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy(){
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }
  function handleSearch(event){
    setSearch(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome...."
          value={search}
          onChange={handleSearch}
        />
      </InputSearchContainer>
      <Header >
        <h1>
          {filteredSearch.length}
          {filteredSearch.length === 1 ? " contato" : " contatos"}
        </h1>
        <Link to="/new">Novo contato</Link>
      </Header>

     {filteredSearch.length > 0 && (
       <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </ListHeader>
      )}

      {filteredSearch.map((item) => (
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
