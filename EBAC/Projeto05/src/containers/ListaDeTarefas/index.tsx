import Tarefa from "../../components/tarefa";
import * as S from "../../styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { Prioridade, Status } from "../../utils/enums/tarefa";

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraTarefas = () => {
    let tarefasFiltradas = itens;

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      );
      return tarefasFiltradas;
    } else {
      return itens;
    }
  };
  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = "";
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : "";

    if (criterio === "todas") {
      mensagem = `${quantidade} contato(s) registrado(s)`;
    } else {
      mensagem = `
        ${quantidade} tarefa(s) encontrada(s) como:
        ${`${criterio} = ${valor}`}
        ${complementacao}
      `;
    }

    return mensagem;
  };
  const tarefas = filtraTarefas();
  const mensagem = exibeResultadoFiltragem(tarefas.length);

  return (
    <S.MainContainer>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        {tarefas.map((item) => (
          <li key={item.nome}>
            <Tarefa
              id={item.id}
              email={item.email}
              descricao={item.descricao}
              nome={item.nome}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  );
};

export default ListaDeTarefas;
