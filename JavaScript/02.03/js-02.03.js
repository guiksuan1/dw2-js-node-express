//Objetos literais possuem atributos e metodos
//objeto literal não deriva de classes

const pessoa = {};
document.write(typeof pessoa);

const carro = {
    marca: ' Chevrolet', //atributo
    modelo: 'Astra', //atributo
    ano: 2007, //atributo
    ligar: function() { //método
        return 'O carro está ligado.';
    },
    acelerar: function() { //método
        return 'O carro está acelerando.';
    },
    frear: function() { //método
        return 'O carro está freando.';
    },
}

//exibindo as propriedades do objeto carro
document.write(`<h2>Marca: ${carro.marca}.</h2>`);
document.write(`<h2>Modelo: ${carro.modelo}.</h2>`);
document.write(`<h2>Ano: ${carro.ano}.</h2>`);
document.write(`<h2>${carro.ligar()}.</h2>`);
document.write(`<h2>${carro.acelerar()}.</h2>`);
