### Padroes de datas, horas e justificativas

Datas no formato "DD/MM" entre aspas duplas no campo 'data:' dentro da const datas.

Horas no formato "HH:MM" entre aspas duplas nos campos relacionados as horas dentro da const datas.

Justificativas entre aspas duplas nos campos relacionados as justificativas dentro da const datas.

data: vai ser a data do ponto
horaEntrada1: será a hora da entrada 1
horaSaida1: será a hora da saida 1
horaEntrada2: será a hora da entrada 2
horaSaida2: será a hora da saida 2
justifEntrada1: será a justificativa da entrada 1
justifSaida1: será a justificativa da saida 1
justifEntrada2: será a justificativa da entrada 2
justifSaida2: será a justificativa da saida 2

Ex:
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

A const fica localizada na pasta Integration > MeuRH no arquivo lancarPonto.spec.js

### Para lançar apenas 1 dia

Dentro da const deverá conter apenas a data de lançamento dentro de uma chave.

Ex:
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
}
];

### Para lançar 2 dias ou mais

Dentro da const deverá conter as datas de lançamento, cada uma dentro de uma chave separado, contendo uma virgula após o fechamento da chave.

Ex:
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
{
data: "11/08",
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

### Quantidade de horas lançadas

Será possível lançar caso possua as 4 horas e 4 justificativas preenchidas, ou seja, caso tente lançar apenas 2 horas e 2 justificativas ou 6 horas e 6 justificativas não funcionará.
Não poderá ter lançamento de horas no ponto.

### Local onde deverá inserir os dados de login e senha

Para que seja feita o login na plataforma, os dados deverão ser inseridos no arquivo cypress.env.json, nos respectivos campos: login, senha e deverá salvar o arquivo.

### Atalho para executar o lançamento

Para rodar no modo headless, executar o seguinte comando no terminal: npm run cy:run
Para rodar em modo de interface gráfica, executar o seguinte comando no terminal: npx cypress open. Se for o primeiro acesso, ele irá instalar o cypress e abrir uma janela, após abertura da janela do cypress clicar em lancarPonto.spec.js
