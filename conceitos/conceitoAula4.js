/* OPERADORES NUMERICOS
> maior que
>= maior ou igual que
< menor que 
<= menor igual que
== igual
!= diferença
=== igualdade de valores e tipo
*/

console.log(4 > 5);
console.log(10 >= 12);
console.log(1 < 3);
console.log(1 == 1);
console.log(2 != 3);
console.log(1 === "1");
console.log(true === "1");
console.log(1 === 1);

/* OPERADORES BOLEANOS
&& - E/END
|| - OU /OR
! - nÃO - inverte o valor
*/

const nomeDog = "Pipoca";
const nomeValido = nomeDog.split(" ").length === 1;
const nomeDezCaracteres = nomeDog.length <= 10;
console.log("Operadores boleanos");
console.log(true && true);

console.log("Nome só até 10 caracteres?", nomeValido && nomeDezCaracteres);

const pessoa = {
  mulher: false,
  peso: 80,
};

console.log(pessoa.mulher || pessoa.peso <= 80);

console.log(pessoa.mulher || pessoa.peso > 80);

console.log(!pessoa.mulher);

/* OPERADORES ARITMETICOS
+ - ADIÇÃO
- SUBTRAÇÃO
* MULTIPLICAÇÃO
/ DIVISÃO 
% RESTO DA DIVISÃO
** EXPONENCIAL
*/

console.log(1 + 1); //2
console.log(10 - 7); //3
console.log(2 * 2); //4
console.log(3 ** 2); //9
console.log(10 / 2); //5
console.log(10 % 3); //1
console.log(10 % 2); //1

const div = 0;

if (div == 0) {
  console.log("Numero par");
} else {
  console.log("Numero par");
}

// Parse de parte inteira - em uma divisão só pega a parte inteira]
console.log(11 / 2);
console.log(parseInt(11 / 2));
console.log(parseFloat(11 / 2));

//arrendondamento de valores
console.log(Math.floor(5.4)); //arrendonda pra baixo
console.log(Math.round(5.6)); //arrendonda pra cima
