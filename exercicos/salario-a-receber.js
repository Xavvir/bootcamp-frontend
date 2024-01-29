const { gets, print } = require("./funcoes-auxiliares");

const salarioBruto = gets();
let beneficios = gets();

function porcentagem(valor, percentual) {
    return valor * (percentual / 100)
}

function pegarAliquota(salario) {
    if (salario > 0 && salario <= 1100) {
        return 5
    } else if (salario > 1100.01 && salario <= 2500) {
        return 10
    } else {
        return 15
    }
}

let aliquotaComImposto = pegarAliquota(salarioBruto)
let salarioImposto = salarioBruto - (porcentagem(salarioBruto, aliquotaComImposto))
let valorAPagar = salarioImposto + beneficios

print(valorAPagar)


