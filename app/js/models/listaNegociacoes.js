export class ListaNegociacoes {
  #listaNegociacoes = []

  adicionaNegociacao(negociacao) {
    this.#listaNegociacoes.push(negociacao);
  }

  get getNegociacoes() { 
    return [].concat(this.#listaNegociacoes);
  }

  filtraNegociacao = () => { 
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputFiltroOperacoes");
    filter = input.value;
    table = document.getElementById("tabelaOperacoes");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
}