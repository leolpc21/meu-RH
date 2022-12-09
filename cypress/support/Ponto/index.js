import { elemento } from "./elementos";

class Ponto {
  wait() {
    cy.intercept(
      "POST",
      "https://corpore-app.arcoeducacao.com.br/FrameHTML/rm/api/rest/auth/login"
    ).as("login");
    cy.intercept(
      "GET",
      "https://corpore-app.arcoeducacao.com.br/FrameHTML/rm/api/rest/timesheet/clockings/**"
    ).as("carregarPeriodo");
    cy.intercept(
      "POST",
      "https://corpore-app.arcoeducacao.com.br/FrameHTML/rm/api/rest/timesheet/clockings/**"
    ).as("enviarHorarios");
  }

  login(login, senha) {
    cy.get(elemento.inputLogin).type(login, { log: false });
    cy.get(elemento.inputSenha).type(senha, { log: false });
    cy.contains(elemento.buttonEntrar).click().esperar("login", 200);
  }

  menuEspelhoPonto() {
    cy.get(elemento.containerMenu).contains(elemento.menuPonto).click();
    cy.contains(elemento.subMenuEspelhoPonto)
      .click()
      .esperar("carregarPeriodo", 200);
  }

  editarBatidaData(data) {
    cy.contains(elemento.tabelaData, data)
      .find("td")
      .last()
      .find("span")
      .click();
    cy.contains(elemento.buttonEditarBatidas, "Editar batidas").click();
  }

  adicionarBatidas(
    horaEntrada1,
    horaSaida1,
    horaEntrada2,
    horaSaida2,
    justifEntrada1,
    justifSaida1,
    justifEntrada2,
    justifSaida2
  ) {
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Entrada 1")
      .find(elemento.inputHoras)
      .type(horaEntrada1);
    cy.contains(elemento.painelBatidas, "Entrada 1")
      .find(elemento.inputJustificativa)
      .type(justifEntrada1);
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Saída 1")
      .find(elemento.inputHoras)
      .type(horaSaida1);
    cy.contains(elemento.painelBatidas, "Saída 1")
      .find(elemento.inputJustificativa)
      .type(justifSaida1);
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Entrada 2")
      .find(elemento.inputHoras)
      .type(horaEntrada2);
    cy.contains(elemento.painelBatidas, "Entrada 2")
      .find(elemento.inputJustificativa)
      .type(justifEntrada2);
    cy.contains(elemento.buttonAdicionarOutrasBatidas).click();
    cy.contains(elemento.painelBatidas, "Saída 2")
      .find(elemento.inputHoras)
      .type(horaSaida2);
    cy.contains(elemento.painelBatidas, "Saída 2")
      .find(elemento.inputJustificativa)
      .type(justifSaida2);
  }

  botaoSalvar() {
    cy.contains(elemento.buttonSalvar)
      .click()
      .esperar("enviarHorarios", 200)
      .esperar("carregarPeriodo", 200);
  }
}

export default new Ponto();
