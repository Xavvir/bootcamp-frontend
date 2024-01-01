/*Calculo de imc*/
const altura = 1.73;
const peso = 98;

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Você está abaixo do peso, imc de", imc.toFixed(2))
} else if (imc >= 18.5 && imc <= 25) {
    console.log("Você está com peso normal, imc de", imc.toFixed(2))
} else if (imc > 25 && imc <= 30) {
    console.log("Você está acima do peso, imc de", imc.toFixed(2))
} else if (imc > 30 && imc <= 40) {
    console.log("Você está obeso, imc de", imc.toFixed(2))
} else {
    console.log("Você está com obesidade grave, imc de", imc.toFixed(2))
}