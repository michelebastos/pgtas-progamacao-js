/*
para , faça 
contador;condicao; manipulacao do contador(incremento/decremento)
qtdeDePetiscos; qtdeDePetiscos <= qtdeCalculada; qtdeDePetiscos +++
*/
const qtdeCalculada = 3;
const gatos = ["Tob", "Branquinha", "Bigode"];

for (
  let qtdeDePetiscos = 1;
  qtdeDePetiscos <= qtdeCalculada;
  qtdeDePetiscos++
) {
  console.log(`Dando o petisco de nº ${qtdeDePetiscos}`);

  for (let indice = 0; indice < gatos.length; indice++) {
    console.log(`Petisco para ${gatos[indice]}`);
  }
  console.log(`....................................................`);
}
