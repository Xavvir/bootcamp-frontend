const { gets, print } = require("./funcoes-auxiliares");

const calcularMedia = gets();

if (calcularMedia < 5) {
  print("Você foi reprovado.");
} else if ((calcularMedia >= 5) & (calcularMedia < 7)) {
  print("Você está de recuperação.");
} else {
  print("Você está aprovado.");
}
