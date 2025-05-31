let nome;
let idade = "11 anos";
let peso = "2 kg";
const raca = "yorkshire";
const adotado = true;

console.log("Nome: ", nome.toUpperCase());

racaTratada = raca.slice(0, 1).toUpperCase() + raca.slice(1, 10).toLowerCase();
console.log("Raça: ", racaTratada.trim());

const pesoTratado = peso.replaceAll("kg", "Kilos");
console.log("Peso: " + pesoTratado);
