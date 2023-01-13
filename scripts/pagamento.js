function navbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function pagamento() {
  var numCartao = document.getElementById("num-cartao").value;
  var nomeCartao = document.getElementById("nome-cartao").value;
  var valCartao = document.getElementById("val-cartao").value;
  var cvvCartao = document.getElementById("cvv-cartao").value;
  if (numCartao != "" && nomeCartao != "" && valCartao != "" && cvvCartao != "") {
    alert("Pagamento efetuado com sucesso!")
  }
}