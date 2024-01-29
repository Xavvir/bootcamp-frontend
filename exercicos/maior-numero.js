const { gets, print } = require("./funcoes-auxiliares");

const numeros = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < numeros; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if (maiorNumeroPar === 0) {
      maiorNumeroPar = numero;
    } else if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === 0) {
      menorNumeroImpar = numero;
    } else if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

console.log("Maior número par: ", maiorNumeroPar);
console.log("Menor número impar: ", menorNumeroImpar);
