/// <reference types="cypress" />

import ponto from "../../support/Ponto";

describe("Lançar horário de ponto no Meu RH", function () {
  const user = {
    login: "",
    senha: "",
  };

  const datas = [
    {
      data: "09/08",
      hora1: "07:30",
      hora2: "12:30",
      hora3: "13:30",
      hora4: "16:30",
      just1: "Entrada",
      just2: "Saída Almoço",
      just3: "Entrada Almoço",
      just4: "Saída",
    },
    {
      data: "10/08",
      hora1: "07:00",
      hora2: "12:00",
      hora3: "13:00",
      hora4: "16:00",
      just1: "Entrada",
      just2: "Saída Almoço",
      just3: "Entrada Almoço",
      just4: "Saída",
    },
  ];

  beforeEach(function () {
    cy.visit("/");
    ponto.login(user.login, user.senha);
    ponto.menuEspelhoPonto();
  });

  datas.forEach(function (dat) {
    it("Lançar ponto data " + dat.data, () => {
      ponto.editarBatidaData(dat.data);
      ponto.adicionarBatidas(
        dat.hora1,
        dat.hora2,
        dat.hora3,
        dat.hora4,
        dat.just1,
        dat.just2,
        dat.just3,
        dat.just4
      );
      ponto.botaoSalvar();
    });
  });
});
