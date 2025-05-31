//Aula 2 - tipos de console

console.log("Aula inicial JS");

console.error("Falha");

console.warn("Atenção");

console.table([
  {
    nome: "Michele",
    turma: "02",
    disciplina: "JavaScript",
  },
  {
    nome: "Ale",
    turma: "03",
    disciplina: "JavaScript",
  },
]);

// variarel com informações que nunca mudam
//deve atribuir valor n criação da constante
const identidade = "123456";

// variarel com informações que podem mudar
let idade = "20";

console.log(identidade, idade);

var dogs = ["Thor", "Luck"];
console.log("Dogs:", dogs);
