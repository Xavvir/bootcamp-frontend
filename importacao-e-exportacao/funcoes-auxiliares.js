const entradas = [150, 50, 10, 98, 23, 105, 50, 10, 98, 23, 105, 50, 10, 98, 23, 10, 500];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print };

