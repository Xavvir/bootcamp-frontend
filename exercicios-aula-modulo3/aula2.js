class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularImc();

    if (imc < 18.5) {
      return "Você está abaixo do peso";
    } else if (imc >= 18.5 && imc <= 25) {
      return "Você está com peso normal";
    } else if (imc > 25 && imc <= 30) {
      return "Você está acima do peso";
    } else if (imc > 30 && imc <= 40) {
      return "Você está obeso";
    } else {
      return "Você está com obesidade grave";
    }
  }
}

var jose = new Pessoa("José", 93, 1.73);
console.log(jose.classificarImc());
