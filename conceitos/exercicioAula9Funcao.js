import { DOGS, CATS } from "./exercicioAula9Dados.js";

function entregarPetisco(pets) {
  pets.forEach((nomePet) => {
    console.log(`Entregando pestisco para ${nomePet}`);
  });
}

entregarPetisco(DOGS);
entregarPetisco(CATS);

export { entregarPetisco };
