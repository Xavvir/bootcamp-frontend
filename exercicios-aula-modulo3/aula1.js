class Carro {
  marca;
  cor;
  consumoMedioPorKm;

  constructor(marca, cor, consumoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.consumoMedioPorKm = consumoMedioPorKm;
  }

  calcularGastoDeViagem(kmPercorrido, precoCombustivel) {
    return kmPercorrido * this.consumoMedioPorKm * precoCombustivel;
  }
}

const onix = new Carro("Chevrolet", "Preto", 1 / 12);
const titan = new Carro ("Honda","Vermelha", 1/40 )

console.log(titan);
console.log(titan.calcularGastoDeViagem (100,5));
