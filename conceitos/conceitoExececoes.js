/*

tentar {
    acao 
    } pegar (erro/exececao retornado)
*/

// lancar = throw

try {
  console.log(`Teste`);
  throw new TypeError();
} catch (exececao) {
  console.log(exececao);
}

try {
  console.log(`Teste`);
  throw new Error();
} catch (exececao) {
  console.log(exececao);
} finally {
  console.log(`SEMPRE SEREI EXECUTADO`);
}

try {
  console.log(`Teste`);
  //throw new SyntaxError()
} catch (exececao) {
  console.log(exececao);
} finally {
  console.log(`SEMPRE SEREI EXECUTADO`);
}
