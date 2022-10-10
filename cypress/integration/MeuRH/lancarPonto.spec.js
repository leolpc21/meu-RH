/// <reference types="cypress" />

import ponto from "../../support/Ponto";

describe("Lançar horário de ponto no Meu RH", function () {
  const datas = [
    {
      data: "10/10",
    },
  ];

  const hrjus = [
    {
      horaEntrada1: "07:00",
      horaSaida1: "12:15",
      horaEntrada2: "13:15",
      horaSaida2: "17:15",
      justifEntrada1: "Entrada",
      justifSaida1: "Saída Almoço",
      justifEntrada2: "Entrada Almoço",
      justifSaida2: "Saída",
    },
  ];

  beforeEach(function () {
    cy.visit("/");
    ponto.login(Cypress.env("login"), Cypress.env("senha"));
    ponto.menuEspelhoPonto();
  });

  datas.forEach(function (data) {
    hrjus.forEach(function (hrjus) {
      it("Lançar ponto referente a data " + data.data, () => {
        ponto.editarBatidaData(data.data);
        ponto.adicionarBatidas(
          hrjus.horaEntrada1,
          hrjus.horaSaida1,
          hrjus.horaEntrada2,
          hrjus.horaSaida2,
          hrjus.justifEntrada1,
          hrjus.justifSaida1,
          hrjus.justifEntrada2,
          hrjus.justifSaida2
        );
        ponto.botaoSalvar();
      });
    });
  });
});
