export class NegociacoesView {
  atualizaTabela(data, quantidade, valor) {
    
    let minhaTabela = document.getElementById('tabelaOperacoes').getElementsByTagName('tbody')[0];
    let linha = minhaTabela.insertRow();

    let celula01 = linha.insertCell(0);
    let celula02= linha.insertCell(1);
    let celula03 = linha.insertCell(2);

    celula01.innerText = data;
    celula02.innerText = quantidade;
    celula03.innerText = valor;

    /*
    var myTbody = document.querySelector("#tabelaOperacoes>tbody");
    var newRow = myTbody.insertRow();
    newRow.insertCell().append(data, quantidade, valor);
    */
  }
}