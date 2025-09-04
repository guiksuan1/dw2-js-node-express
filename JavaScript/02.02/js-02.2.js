// Métodos de manupulação de vetores

let frutas = ['Banana', 'Maçã', 'Laranja'];
document.write(`<h1>Frutas: ${frutas}.</h1>`);

document.write(`<h3>Quantidade de frutas: ${frutas.length}.</h3>`);
frutas.push('Uva'); // Adiciona 'Uva' ao final do array

document.write(`<h3>Quantidade de frutas: ${frutas.length}.</h3>`);
frutas.pop(); // Remove o último item do array

document.write(`<h3>Quantidade de frutas: ${frutas.length}.</h3>`);
frutas.unshift('Morango'); // Adiciona 'Morango' no início do array

document.write(`<h3>Quantidade de frutas: ${frutas.length}.</h3>`);
frutas.shift(); // Remove o primeiro item do array

document.write(`<h3>Quantidade de frutas: ${frutas.length}.</h3>`);
document.write(`<h3>Frutas: ${frutas}.</h3>`);
frutas.sort(); // Ordena o array em ordem alfabética

document.write(`<h3>Frutas ordenadas: ${frutas}.</h3>`);
let posicao = frutas.indexOf('Maçã'); // Encontra a posição de 'Maçã'

document.write(`<h3>Posição da Maçã: ${posicao}.</h3>`);
let novaLista = frutas.slice(0, 2); // Cria um novo array com os dois primeiros itens

document.write(`<h3>Nova lista (slice): ${novaLista}.</h3>`);
let listaString = frutas.join(' - '); // Converte o array em string, separando por ' - '

document.write(`<h3>Lista como string: ${listaString}.</h3>`);