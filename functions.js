let buttonCalcular = document.querySelector("#btnC") // botão "Calcular" como variavel


buttonCalcular.onclick = function principal(){
    let nomeVariavel = document.querySelector("#nomeVar").value
    let listaDados = document.querySelector("#textoDados").value.split(" ") // valores das variaveis tranformados em lista
    let listaQnt = []
    let verifica_1 // recebe o valor dos radios 1
    let verifica_2 // recebe o valor dos radios 2

    // verifica qual radio da variavel 1 foi selecionado
    var radios_1 = document.getElementsByName("tipoVariavel");
    for (var i = 0; i < radios_1.length; i++) {
        if (radios_1[i].checked) {
            verifica_1 = radios_1[i].value
        }
    }

    // verifica qual radio da variavel 2 foi selecionado
    var radios_2 = document.getElementsByName("tipoVariavel2");
    for (var i = 0; i < radios_2.length; i++) {
        if (radios_2[i].checked) {
            verifica_2 = radios_2[i].value
        }
    }

    //conta os elementos iguais no vetor e exclui os repetidos
    for (var i = 0; i < listaDados.length; i++){
        listaQnt[i] = 1
        for (var j = i + 1; j < listaDados.length; j++){
            if (listaDados[i] == listaDados[j]){
                listaQnt[i] = listaQnt[i] + 1
                listaDados.splice(j, 1)
                listaQnt.splice(j, 1)
            }
        }
    }

    console.log(verifica_1, " ", verifica_2)
    console.log(listaDados)
    console.log(listaQnt)

         function criarTabela(conteudo) {
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody=document.createElement("tbody");
  var thd=function(i){return (i==0)?"th":"td";};
  for (var i=0;i<conteudo.length;i++) {
    var tr = document.createElement("tr");
    for(var o=0;o<conteudo[i].length;o++){
      var t = document.createElement(thd(i));
      var texto=document.createTextNode(conteudo[i][o]);
      t.appendChild(texto);
      tr.appendChild(t);
    }
    (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;

}}
