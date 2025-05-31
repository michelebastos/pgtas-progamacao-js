const lista = [];

function listarApenasNumInteiros(lista) {
  const numerosInteiros = lista.filter((item) => Number.isInteger(item));
  console.log(`Lista apenas com números inteiros = ${numerosInteiros}`);
}

listarApenasNumInteiros([
  "ana",
  1,
  "luiz",
  3,
  "Jonas",
  75,
  6.8,
  4,
  2,
  2,
  "casa",
]);
listarApenasNumInteiros([1, "dois", 3, "quatro", 5, "seis"]);
