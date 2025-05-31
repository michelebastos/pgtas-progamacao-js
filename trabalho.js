/* 
  geradorDeTagsDeIdentificacao
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
 */

import { DADOS } from "./trabalhoDados.js";

function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idadeDogAdocao, porteDogAdocao) {
  const avaliacaoIdadeDog = idadeDogAdocao == 1 ? "liberado" : "não liberado";

  const avaliacaoPorte =
    porteDogAdocao == "P"
      ? "porte pequeno"
      : porteDogAdocao == "M"
        ? "porte medio"
        : "porte grande";

  const apto =
    avaliacaoIdadeDog == "liberado" && avaliacaoPorte == "porte medio";
  return apto;
}

function calcularConsumoDeRacao(nomeDoDog, idadeDoDog, pesoDoDog) {
  let qtdeRecomendadaDeRacao = pesoDoDog * 30 * 10;
  return qtdeRecomendadaDeRacao;
}

function decidirTipoDeAtividadePorPorte(porteDogParaAtividade) {
  if (porteDogParaAtividade == "pequeno") {
    return "brincar dentro de casa";
  } else {
    return "passear na rua";
  }
}

async function buscarDadoAsync() {
  return DADOS;
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};
