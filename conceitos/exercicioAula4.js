/*

*/

let peso = 4,
  estoqueRacao = 15000,
  nomeDog = "";

function calculoConsumoRacao(nomeDog, peso, estoqueRacao) {
  QtdeRecomendadaRacao = peso * 30;
  EstoqueDuracao = Math.floor(estoqueRacao / QtdeRecomendadaRacao);

  console.log(`Nome do cachorro: ${nomeDog} `);
  console.log(`Peso: ${peso} kilos`);
  console.log(
    `Quantidade recomendada de ração diaria ${QtdeRecomendadaRacao} gramas`,
  );
  console.log(`Estoque vai durar para ${EstoqueDuracao} dias"`);
  console.log(`----------------------------------------`);
}

calculoConsumoRacao("Ada", 1, 2000);
calculoConsumoRacao("Luck", 4, 1500);
