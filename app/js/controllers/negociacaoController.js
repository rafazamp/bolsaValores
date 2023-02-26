import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
  #campoData;
  #campoQuantidade;
  #campoValor;
  #listaNegociacoes = new ListaNegociacoes();
  #atualizaView = new NegociacoesView();

  constructor() {
    this.#campoData = document.getElementById('dataNegociacao');
    this.#campoQuantidade = document.getElementById('quantidadeAcoesVendidas');
    this.#campoValor = document.getElementById('valorNegociacao');
  }

  criarNegociacao() {
    let data = new Date(this.#campoData.value  + "T00:00:00-03:00").toLocaleDateString();
    let quantidade = this.#campoQuantidade.value;
    let valor = this.#campoValor.value;

    let negociacao = new Negociacao(data, quantidade, valor);
    console.log(negociacao);

    this.#listaNegociacoes.adicionaNegociacao(negociacao);
    console.log(this.#listaNegociacoes.getNegociacoes);

    this.#atualizaView.atualizaTabela(data, quantidade, valor);
  }

  limpaCampos() {
    this.#campoData.value = "";
    this.#campoQuantidade.value = ""
    this.#campoValor.value = "";
  }
}