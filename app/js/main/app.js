import { NegociacaoController } from "../controllers/negociacaoController.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";

const formulario = document.querySelector('.form');
const controller = new NegociacaoController();
const listaNegociacoes = new ListaNegociacoes();

const filtro = document.getElementById('inputFiltroOperacoes');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  controller.criarNegociacao();
  controller.limpaCampos();
})

filtro.onkeyup = (event) => {
  listaNegociacoes.filtraNegociacao();
}
