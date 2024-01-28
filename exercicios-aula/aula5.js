/*Calcular desconto em uma compra*/

const precoEtiqueta = 100;

let debito = precoEtiqueta * 0.9; /*Pagamento no debito, desconto de 10%*/
let dinheiroOuPix = precoEtiqueta * 0.85; /*Pagamento no dinheiro ou pix, desconto de 15%*/
let parcelado2X = precoEtiqueta; /*Pagamento em 2x*/
let acima2x = precoEtiqueta * 1.1; /*Pagamento parcelado acima de 2x, contém 10% de acréscimo*/

formaDePagamento = parcelado2X

if (formaDePagamento === debito) {
    console.log("Parabéns, você ganhou 10% de desconto e pagará", debito, "reais")
} else if (formaDePagamento === dinheiroOuPix) {
    console.log("Parabéns, você ganhou 15% de desconto e pagará", dinheiroOuPix, "reais")
} else if (formaDePagamento === parcelado2X) {
    console.log("Valor total", parcelado2X, "reais")
} else if (formaDePagamento === acima2x) {
    console.log("Valor total", acima2x.toFixed(2), "reais")
};