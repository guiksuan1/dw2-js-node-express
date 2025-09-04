// Classes no javaScript

// criando uma classe

// nomes de classes devem iniciar com a primieira letra maiuscula
class carro {
  // o constructor é um metodo especial para criar e inicializar um objeto criado a partir de uma classe
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // metodos
  buzinar() {
    return "Bip Bop";
  }
}

// Criando instancias (objetos) derivadas da classes carro
const carroPopular = new carro("Ford", "Mustang", 2023);
document.write(
    `Meu carro é um ${carroPopular.marca} ${carroPopular.modelo} do ano ${carroPopular.ano}. Ele faz ${carroPopular.buzinar()}<br>`
);

// criando outra instancia

const carroLuxo = new carro();
document.write(
    carroLuxo.marca = "BMW", // alterando o valor da propriedade marca
    carroLuxo.modelo = "X6", // alterando o valor da propriedade modelo
    carroLuxo.ano = 2024, // alterando o valor da propriedade ano
    `<br>Meu carro de luxo é um ${carroLuxo.marca} ${carroLuxo.modelo} do ano ${carroLuxo.ano}. Ele faz ${carroLuxo.buzinar()}<br>`
);