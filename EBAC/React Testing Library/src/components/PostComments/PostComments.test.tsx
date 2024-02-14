import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar 2 tarefas", () => {
    const { debug } = render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-tarefa"), {
      target: {
        value: "Ir na feira aos domingos",
      },
    });
    fireEvent.click(screen.getByTestId("btn-cadastrar"));

    fireEvent.change(screen.getByTestId("campo-tarefa"), {
      target: {
        value: "Estudar módulo de Testes na EBAC",
      },
    });
    fireEvent.click(screen.getByTestId("btn-cadastrar"));

    debug();

    expect(screen.getAllByTestId("list-comment")).toHaveLength(2);
  });
});
