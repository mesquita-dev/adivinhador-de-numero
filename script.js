var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou o número secreto!";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML = "O número é maior do que o digitado";
  } else if (numeroSecreto < chute) {
    elementoResultado.innerHTML = "O número é menor do que o digitado";
  }
}