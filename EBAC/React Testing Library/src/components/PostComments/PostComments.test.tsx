import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar: Ir na feira aos domingos", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-tarefa"), {
      target: {
        value: "Ir na feira aos domingos",
      },
    });
    fireEvent.click(screen.getByTestId("btn-cadastrar"));
    expect(screen.getByText("Ir na feira aos domingos")).toBeInTheDocument();
  });
  it("Deve adicionar: Estudar módulo de Testes na EBAC", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-tarefa"), {
      target: {
        value: "Estudar módulo de Testes na EBAC",
      },
    });
    fireEvent.click(screen.getByTestId("btn-cadastrar"));
    expect(
      screen.getByText("Estudar módulo de Testes na EBAC")
    ).toBeInTheDocument();
  });
});
