import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
} from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../../components/Loader";
import sad from '../../assets/images/sad.svg';
import ContactServices from "../../services/ContactServices";
import Button from '../../components/Button';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
  const loadContacts= useCallback(async () => {
     try{
      setIsLoading(true);

      const contactList = await ContactServices.listContacts(orderBy);

      setHasError(false);
      setContacts(contactList);

    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy(){
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }
  function handleSearch(event){
    setSearch(event.target.value);
  }
  function handleTryAgain(){
    loadContacts();
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
      <Header hasError={hasError}>
        {!hasError && (
          <h1>
            {filteredSearch.length}
            {filteredSearch.length === 1 ? " contato" : " contatos"}
          </h1>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />

          <div className="details">
            <span>Ocorreu um erro ao obter os seus contatos!</span>

            <Button
              type="button"
              onClick={handleTryAgain}
            >
              Tente novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
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
        </>
      )}
    </Container>
  );
}

export default Home;
