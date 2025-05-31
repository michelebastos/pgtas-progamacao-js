/* Validador de idade do dog para adoção
 */

let idadeDog = 1,
  peso = "2";
const nomeDog = "Top";

const resultadoIdade = idadeDog >= 2 ? "apto" : "inapto";

const porteDog =
  peso <= 5 ? "porte pequeno" : peso >= 6 ? "porte médio" : "porte grande";

const apto = resultadoIdade == "apto" || porteDog == "porte pequeno";

console.log("Cachorro", nomeDog, "Idade:", idadeDog, "anos,", "Apto =", apto);
