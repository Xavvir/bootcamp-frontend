/* Calcular média de notas*/

const nota1 = 5;
const nota2 = 5;
const nota3 = 11;
const media = (nota1 + nota2 + nota3) / 3;

console.log("Média =", media.toFixed(2))

if (media < 5) {
    console.log("Você foi reprovado")
} else if (media >= 5 && media <= 7) {
    console.log("Você está de recuperação")
} else {
    console.log("Você foi aprovado!")
};

