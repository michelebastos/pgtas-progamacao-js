/*
Percorre a lista e para quando acabar


ListaAlunos
    Maria
    Jose
    Ana

para cada (item da) listaAlunos
    // dar uma nota aleatoria

*/

const listaAlunosNotas = [
  {
    nome: "Bruna",
    nota: 7,
  },
  {
    nome: "Paty",
    nota: 5,
  },
  {
    nome: "Noah",
    nota: 9,
  },
  {
    nome: "Fabio",
    nota: 10,
  },
];

listaAlunosNotas.forEach((aluno) => {
  console.log(`O aluno ${aluno.nome}, recebeu a nota: ${aluno.nota}`);
});
