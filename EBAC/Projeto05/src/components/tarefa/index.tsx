import { remover, editar } from "../../store/reducers/tarefas";
import { Botao, BotaoSalvar } from "../../styles";
import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import TarefaClass from "../../models/Tarefa";
import * as enums from "../../utils/enums/tarefa";

type Props = TarefaClass;

const Tarefa = ({
  nome: nomeOriginal,
  email: emailOriginal,
  descricao: descricaoOriginal,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal);
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal);
    }
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal);
    }
  }, [descricaoOriginal, emailOriginal, nomeOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        {estaEditando && <em>Editando: </em>}
        <S.Titulo
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </label>

      <label htmlFor={email}>
        <p>Email:&nbsp;</p>
        <S.Descricao
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </label>

      <label htmlFor={descricao}>
        <p>Telefone:&nbsp;</p>
        <S.Descricao
          disabled={!estaEditando}
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />
      </label>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    nome,
                    id,
                    email,
                  })
                );
                setEstaEditando(false);
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Tarefa;
