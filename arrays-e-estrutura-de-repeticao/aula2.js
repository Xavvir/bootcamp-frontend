const numeros = [7, 12, 33, 14, 155, 26, 47, 78, 39, 210]

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero, "é par")
    }

}