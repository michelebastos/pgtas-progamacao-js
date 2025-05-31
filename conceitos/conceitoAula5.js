/*
--decremento -1
++incremento +1
? termario 
*/

let peso = 3;
peso++;

console.log("Peso: ", peso);

let idade = 37;
idade--;
console.log("Idade:", idade);

// ternario
// <condicao> ? <acao verdadeiro> : <falso>

const porte =
  peso <= 5
    ? "Cachorro tem porte pequeno"
    : peso >= 10
      ? "Cachorro tem porte médio"
      : "Cachorro tem porte grande";
console.log(porte);
