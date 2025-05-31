let texto = "";
let quant = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0,
};

function contarNumeroDeVogais(texto) {
  for (const vogais of texto.toLowerCase()) {
    if (
      vogais === "a" ||
      vogais === "e" ||
      vogais === "i" ||
      vogais === "o" ||
      vogais === "u"
    ) {
      quant[vogais]++;
    }
  }
  const totalVogais = quant.a + quant.e + quant.i + quant.o + quant.u;
  console.log(`O texto: ${texto}, tem ${totalVogais} vogais`);
}
contarNumeroDeVogais("Michele Cardoso Bastos");
contarNumeroDeVogais("Samuel Lucas");
