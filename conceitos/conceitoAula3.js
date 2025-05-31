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
const turma = "02";

console.log("Aula 03 da turma " + turma + " no sabado");

console.log(`Aula 03 da turma ${turma} no sabado`);

// função quantos caracteres tem uma determinada string
console.log(turma.length);

// Função split para separa uma string
const nomesAlunos = "Juliana, Andre, Noah";
const nomesAlunosSplit = nomesAlunos.split(", "); // separa a string pelo que eu defini
console.log(nomesAlunosSplit);
// outro exemplo
const cep = "13-069-433";
const cepSplit = cep.split("-");
console.log(cepSplit);

//Função Lowercase - todas strings para minusculo
//Função Upcase - todas strings para maisculas
console.log(nomesAlunos.toLowerCase());
console.log(nomesAlunos.toUpperCase());

// Função Includes -  varre a  string que retorna boleano
console.log(nomesAlunos.includes("Noah"));
console.log(nomesAlunos.includes("Maria"));

//Função ReplaceAll, função que modifica uma coisa por outra dentro de uma string
console.log(nomesAlunos.replaceAll("a", "i"));

//  função que serve para tirar espaços desnecessário do inicio e fim da string
const teste = "      inteiro  cadeia de caracteres..     ";
console.log(teste.trim());

//.slice() - recorte de uma string
let dataDes = "05 de Abril";
console.log(dataDes.slice(6, 11));

// .substring() - recorte de string
let nomeCompleto = "Michele Silva";
console.log(nomeCompleto.substring(0, 7));
