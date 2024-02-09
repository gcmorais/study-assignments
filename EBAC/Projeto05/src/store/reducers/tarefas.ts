import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from "../../utils/enums/tarefa";

type TarefasState = {
  itens: Tarefa[];
};

const initialState: TarefasState = {
  itens: [],
};

const tarefasSlice = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, "id">>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      );

      if (tarefaJaExiste) {
        alert("Já existe um contato com este nome");
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1];

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1,
        };
        state.itens.push(tarefaNova);
      }
    },
  },
});

export const { remover, editar, cadastrar } =
  tarefasSlice.actions;
export default tarefasSlice.reducer;
