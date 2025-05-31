let porte, nome, peso;

function porteAutomatico(nome, peso) {
  if (peso <= 10) {
    console.log(`Nome do cachorro: ${nome}`);
    console.log(`Peso do cachorro: ${peso} kg`);
    console.log(`Porte: pequeno`);
  } else {
    console.log(`Nome do cachorro: ${nome}`);
    console.log(`Peso do cachorro: ${peso} kg`);
    console.log(`Porte: médio`);
  }
}

porteAutomatico("Luck", "4");
