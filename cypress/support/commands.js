import "cypress-xpath";
import locBEE from "./locatorsBEE";

Cypress.Commands.add("realizandoLogin", () => {
  cy.get("#auth-login > :nth-child(2) > .form-control").type(
    "mylena.alves@szsolucoes.com.br"
  );
  cy.get(":nth-child(3) > .form-control").type("123123");
  cy.get(".mr-1.w-50").click();
});

//==============================================================

Cypress.Commands.add("ClickAlert", (locator, message) => {
  cy.get(locator).click();
  cy.on("window:alert", (msg) => {
    expect(msg).to.be.equal(message);
  });
});

//==================================================================


Cypress.Commands.add("AcessaContas", () => {
  cy.get('[data-test="menu-settings"]').click();
  cy.get('[href="/contas"]').click();
});

Cypress.Commands.add("DespesaPaga", () => {
  cy.get('[data-test="menu-movimentacao"]').click();
  cy.get('[data-test="tipo-despesa"]').click();
  cy.get('[data-test="descricao"]').type("Teste");
  cy.get('[data-test="valor"]').type("123");
  cy.get('[data-test="envolvido"]').type("Fulano");
  cy.get('[data-test="status"]').click();
  cy.get(".btn-primary").click();
});

Cypress.Commands.add("ResetaConta", () => {
  cy.get('[data-test="menu-settings"]').click();
  cy.get('[href="/reset"]').click();
  cy.get(".toast-message").should("contain", "Dados resetados com sucesso!");
});

// ============= COMANDOS DO BEESTOCK =================//

Cypress.Commands.add("CadEmpresa", () => {
  cy.get(".tab-pane.active") // Encontra a div com a classe 'tab-pane active'
    .within(() => {
      // Preenche cada campo de entrada
      cy.get(locBEE.CAD_EMPRESA.CODE_EMPRESA).type("CY1234");
      cy.get(locBEE.CAD_EMPRESA.RAZAO_SOCIAL).type("Empresa Automatizada");
      cy.get(locBEE.CAD_EMPRESA.NOME_EMPRESA).type("Empresa Automatizada");
      cy.get(locBEE.CAD_EMPRESA.CNPJ).type("64086176000190");
      cy.get(locBEE.CAD_EMPRESA.INSCRI_ESTAD).type(
        "Inscrição Estadual Exemplo"
      );
      cy.get(locBEE.CAD_EMPRESA.CEP).type("123");
      cy.get(locBEE.CAD_EMPRESA.RUA_ENDERECO).type("Rua Teste");
      cy.get(locBEE.CAD_EMPRESA.NUM_ENDERECO).type("12341234");
      cy.get(locBEE.CAD_EMPRESA.COMPLEMENTO).type("Complemento Exemplo");
      cy.get(locBEE.CAD_EMPRESA.BAIRRO).type("Bairro Teste");
      cy.get(locBEE.CAD_EMPRESA.CIDADE).type("Cidade Teste");
      cy.get(locBEE.CAD_EMPRESA.ESTADO).type("Estado Teste");
      cy.get(locBEE.CAD_EMPRESA.PAIS).type("País Exemplo");
      cy.get(locBEE.CAD_EMPRESA.EMAIL).type("email@automatizado.com");
      cy.get(locBEE.CAD_EMPRESA.PHONE).type("47400289222");
      cy.get(locBEE.CAD_EMPRESA.OBS).type("Observação Exemplo");

      cy.xpath(locBEE.CAD_EMPRESA.ABA_PARAMETROS).click();
      cy.xpath(locBEE.CAD_EMPRESA.FRACIONADO_SIM).click();
      cy.xpath(locBEE.CAD_EMPRESA.FRACIONADO_NAO).click();

      cy.xpath(locBEE.CAD_EMPRESA.ABA_SEGURANCA).click();
      cy.xpath(locBEE.CAD_EMPRESA.VAL_SENHA).type("0");
      cy.xpath(locBEE.CAD_EMPRESA.BTN_CAD_EMPRESA).click();
    });
});

Cypress.Commands.add("CadFilial", () => {
  cy.get(".tab-pane.active").within(() => {
    cy.get(locBEE.CAD_FILIAL.CODE_FILIAL).type("AUTO1234");
    cy.get(locBEE.CAD_FILIAL.NOME_FILIAL).type("Filial Automatizada");
    cy.get(locBEE.CAD_FILIAL.SELECT_EMPRESA).click().type("{enter}"); // Exemplo para o campo Empresa
    cy.get(locBEE.CAD_FILIAL.CNPJ).type("12345678901234");
    cy.get(locBEE.CAD_FILIAL.INSCRI_ESTAD).type("255025");
    cy.get(locBEE.CAD_FILIAL.CEP).type("1234");
    cy.get(locBEE.CAD_FILIAL.RUA_ENDERECO).type("Rua teste");
    cy.get(locBEE.CAD_FILIAL.NUM_ENDERECO).type("123");
    cy.get(locBEE.CAD_FILIAL.COMPLEMENTO).type("Complemento");
    cy.get(locBEE.CAD_FILIAL.BAIRRO).type("Bairro Teste");
    cy.get(locBEE.CAD_FILIAL.CIDADE).type("Cidade Teste");
    cy.get(locBEE.CAD_FILIAL.ESTADO).type("Estado Teste");
    cy.get(locBEE.CAD_FILIAL.PAIS).type("País Teste");
    cy.get(locBEE.CAD_FILIAL.EMAIL).type("automatizado@email.com");
    cy.get(locBEE.CAD_FILIAL.PHONE).type("47400289222");
    cy.get(locBEE.CAD_FILIAL.OBS).type("Observações adicionais");
  });
  cy.get(locBEE.CAD_FILIAL.ABA_GERAIS).click();
  cy.get(locBEE.CAD_FILIAL.ABA_RECEBIMENTO).click();
  cy.get(locBEE.CAD_FILIAL.ABA_SEPARACAO).click();
  cy.get(locBEE.CAD_FILIAL.CHECK_CORTE_CABO).check({ force: true });
  cy.get(locBEE.CAD_FILIAL.ABA_DEPOSITOS).click();
  cy.get(':nth-child(1) > .col-md-5 > .css-2b097c-container > .css-5duvv3-control > .css-1hwfws3').click().type('rec {enter}')
});
