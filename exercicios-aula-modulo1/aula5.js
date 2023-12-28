/*Calcular desconto em uma compra
1 = desconto de 10% pagamento via débito
2 = desconto de 15% pagamento via pix ou dinheiro
3 = pagamento parcelado até 2x sem acréscimo
4 = Pagamento com acréscimo de 10%, parrcelado acima de 2x
*/

const precoEtiqueta = 100;

function aplicarDesconto(valor,desconto) {
  /*Aplicar % de desconto*/
  return precoEtiqueta - (precoEtiqueta * (desconto/100));
}
function parcelar2X() {
  /*Pagamento sem acréscimo*/
  return precoEtiqueta;
}
function parcelarAcima2X() {
  /*Pagamento com 10% de acréscimo*/
  return precoEtiqueta * 1.1;
}

var formaDePagamento = 1;

if (formaDePagamento === 1) {
  console.log(
    "Parabéns, você ganhou 10% de desconto e pagará",
    aplicarDesconto(precoEtiqueta,10),
    "reais"
  );
} else if (formaDePagamento === 2) {
  console.log(
    "Parabéns, você ganhou 15% de desconto e pagará",
    aplicarDesconto(precoEtiqueta,15),
    "reais"
  );
} else if (formaDePagamento === 3) {
  console.log("Valor total", parcelar2X(), "reais");
} else if (formaDePagamento === 4) {
  console.log("Valor total", parcelarAcima2X().toFixed(2), "reais");
}
