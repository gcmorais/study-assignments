import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContainer, Titulo, Campo, BotaoSalvar } from "../../styles";
import { Form, Opcoes, Opcao } from "./styles";
import * as enums from "../../utils/enums/tarefa";
import { cadastrar } from "../../store/reducers/tarefas";

function Formulario() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL);

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      cadastrar({
        nome,
        email,
        descricao,
      })
    );
    navigate("/");
  };

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          pattern=".+@.+.com"
        />

        <label>
          <p>Máscara do input: 00 0000-0000</p>
          <Campo
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            type="tel"
            pattern="[0-9]{2} [0-9]{4}-[0-9]{4}"
            placeholder="00 0000-0000"
            required
          />
        </label>

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
}

export default Formulario;
