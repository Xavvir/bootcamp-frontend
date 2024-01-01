const precoEtanol = 3.59
const precoGasolina = 5.59
var tipoCombustivel = "gasolina"
const kmPorLitros = 15
var distanciaKm = 100

const litrosConsumidos = distanciaKm / kmPorLitros

if (tipoCombustivel === "etanol") {
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(valorGasto.toFixed(2))

} else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2))

}

