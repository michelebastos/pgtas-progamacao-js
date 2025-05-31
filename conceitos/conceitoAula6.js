/**Funções
 * 
 * Funcões tradicionais
 function saudacao(nome) {
 return `Olá, ${nome}!`;
}
console.log(saudacao("Julio"))
 
 * Funçoes de flecha
const saudacao= (nome) =>{
return `Olá, ${nome}!`;
}
console.log(saudacao("Julio"))
 */

const saudacao = (nome) => {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Julio"));

//funcao nomeada com parametro sem retorno
function exibirNomeDog(nome) {
  console.log(nome);
}

// funcao nomeada sem valor  default
function exibirPorte(porte = "ND") {
  console.log(porte);
}

//funcao nomeada com parametro e com retorno
function NomeDogFormatado(nome) {
  return console.log(nome.toUpperCase());
}

exibirNomeDog("Mel");
NomeDogFormatado("Mel");
exibirPorte();

function listarNomesDogs() {
  const names = ["Pituca", "Marea", "Anderson"];
  return names;
}

console.log(listarNomesDogs());
//chamando as funções e passando os parametros

/*********************************************************************/
/*Funcões flecha*/
