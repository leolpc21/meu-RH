import { elemento } from "./elementos";

class Ponto {
  login(login, senha) {
    cy.get(elemento.inputLogin).type(login);
    cy.get(elemento.inputSenha).type(senha);
    cy.intercept(
      "GET",
      "https://corpore-app.arcoeducacao.com.br/FrameHTML/rm/api/rest/timesheet/balanceSummary/**"
    ).as("carregarTela");
    cy.contains(elemento.buttonEntrar)
      .click()
      .wait("@carregarTela", { timeout: 30000 });
  }

  menuEspelhoPonto() {
    cy.get(elemento.containerMenu).contains(elemento.menuPonto).click();
    cy.intercept(
      "GET",
      "https://corpore-app.arcoeducacao.com.br/FrameHTML/rm/api/rest/timesheet/clockings/**"
    ).as("carregarPeriodo");
    cy.contains(elemento.subMenuEspelhoPonto)
      .click()
      .wait("@carregarPeriodo", { timeout: 30000 });
  }

  editarBatidaData(data) {
    cy.contains(elemento.tabelaData, data)
      .find("td")
      .last()
      .find("span")
      .click();
    cy.contains(elemento.buttonEditarBatidas, "Editar batidas").click();
  }

  adicionarBatidas(hora1, hora2, hora3, hora4, just1, just2, just3, just4) {
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Entrada 1")
      .find(elemento.inputHoras)
      .type(hora1);
    cy.contains(elemento.painelBatidas, "Entrada 1")
      .find(elemento.inputJustificativa)
      .type(just1);
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Saída 1")
      .find(elemento.inputHoras)
      .type(hora2);
    cy.contains(elemento.painelBatidas, "Saída 1")
      .find(elemento.inputJustificativa)
      .type(just2);
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Entrada 2")
      .find(elemento.inputHoras)
      .type(hora3);
    cy.contains(elemento.painelBatidas, "Entrada 2")
      .find(elemento.inputJustificativa)
      .type(just3);
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Saída 2")
      .find(elemento.inputHoras)
      .type(hora4);
    cy.contains(elemento.painelBatidas, "Saída 2")
      .find(elemento.inputJustificativa)
      .type(just4);
  }

  botaoSalvar() {
    cy.intercept(
      "POST",
      "https://corpore-app.arcoeducacao.com.br/FrameHTML/rm/api/rest/timesheet/clockings/**"
    ).as("enviarHorarios");
    cy.contains(elemento.buttonSalvar)
      .click()
      .wait("@enviarHorarios")
      .wait("@carregarPeriodo");
  }
}

export default new Ponto();
