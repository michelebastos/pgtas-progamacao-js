// const brinquedos = [
//     'Corda',
//     'Bola',
//     'Osso',
//     'Sino'
// ]

const brinquedos = "";
function EntregadorDeBrinquedos(brinquedos) {
  brinquedos.forEach((brinquedo) => {
    console.log(`Entregando o brinquedo - ${brinquedo}`);
  });

  console.log(`Todos os brinquedos foram entregues`);
  console.log(`-------------------------------------------`);
}

EntregadorDeBrinquedos(["Sino", "Osso", "Corda", "Sino"]);

EntregadorDeBrinquedos(["Roda", "Buzina"]);
