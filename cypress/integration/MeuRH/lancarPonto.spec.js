/// <reference types="cypress" />

import ponto from "../../support/Ponto";

describe("Lançar horário de ponto no Meu RH", function () {
  const datas = [
    {
      data: "10/08",
      horaEntrada1: "07:00",
      horaSaida1: "12:00",
      horaEntrada2: "13:00",
      horaSaida2: "16:30",
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

  datas.forEach(function (dat) {
    it("Lançar ponto referente a data " + dat.data, () => {
      ponto.editarBatidaData(dat.data);
      ponto.adicionarBatidas(
        dat.horaEntrada1,
        dat.horaSaida1,
        dat.horaEntrada2,
        dat.horaSaida2,
        dat.justifEntrada1,
        dat.justifSaida1,
        dat.justifEntrada2,
        dat.justifSaida2
      );
      ponto.botaoSalvar();
    });
  });
});
