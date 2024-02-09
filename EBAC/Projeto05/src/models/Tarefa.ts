import * as enums from "../utils/enums/tarefa";

class Tarefa {
  nome: string;
  email: string;
  descricao: string;
  id: number;

  constructor(nome: string, email: string, descricao: string, id: number) {
    this.nome = nome;
    this.descricao = descricao;
    this.id = id;
    this.email = email;
  }
}

export default Tarefa;
