/// <reference types="cypress" />

describe("Testes para a home", () => {
  it("Deve adicionar contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.get("input:nth-child(1)").type("Guilherme Morais");
    cy.get("input:nth-child(2)").type("guilherme@gmail.com");
    cy.get("input:nth-child(3)").type("35912345678");
    cy.get(".adicionar").click();
  });

  it("Deve editar contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.contains("Editar").click().last();
    cy.get("input:nth-child(1)").type(
      "{selectAll}{del}Guilherme Claro de Morais"
    );
    cy.get("input:nth-child(2)").type(
      "{selectAll}{del}guilhermemorais@gmail.com"
    );
    cy.get(".alterar").click();
  });

  it("Deve deletar contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.contains("Deletar").click().last();
  });
});
