// =========================
// Função ANÔNIMA (sem nome) atribuída a uma constante
// =========================

// Aqui, em vez de dar um nome para a função, guardamos ela dentro de uma constante chamada "soma"
const soma = function (n1, n2) {
  // Essa função recebe dois parâmetros (n1 e n2) e retorna a soma deles
  return n1 + n2; // Retorna o resultado da soma
};

// Chamamos a função "soma" passando os valores 8 e 7
// O resultado retornado é mostrado no documento usando template literals
document.write(`<h2>O resultado da soma é: ${soma(8, 7)}.</h2>`);

// typeof é um operador que retorna o tipo de dado de uma variável ou valor
const tipo = typeof (soma); // Aqui ele vai retornar "function", pois "soma" é uma função

// Mostra o tipo da variável "soma" na tela
document.write(`${tipo}`);


// =========================
// FUNÇÃO ARROW (função de seta)
// Uma forma mais curta de escrever funções
// =========================

// Arrow function que recebe um parâmetro e retorna o dobro dele
const dobro = (n) => {
  // "n" é o parâmetro recebido
  return n * 2; // Multiplica por 2 e retorna
};
document.write(`<h2>O dobro é: ${dobro(900)}.</h2>`);

// Obs: Se a função tiver apenas UM parâmetro e UMA única instrução de retorno,
// podemos escrever de forma ainda mais curta:
// const dobro = n => n * 2;


// =========================
// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
// =========================

// Aqui usamos uma arrow function que recebe 3 parâmetros:
// num1 → primeiro número
// operador → sinal da operação (+, -, *, /)
// num2 → segundo número
const calc = (num1, operador, num2) => {
    // eval interpreta a string como código JavaScript
    return eval(`${num1} ${operador} ${num2}`);
};
document.write(`<h2>O resultado da operação é: ${calc(2000, '+', 7)}.</h2>`);


// =========================
// ARROW FUNCTION COM MAIS DE UM PARÂMETRO E SEM RETORNO
// =========================

// Função que executa uma operação e já mostra o resultado na tela
const calculadora = (num1, operador, num2) => {
    // Aqui executamos a operação
    const resultado = eval(`${num1} ${operador} ${num2}`);
    // E já mostramos o valor calculado no document.write
    document.write(`<h2>O resultado da operação é ${resultado}.</h2>`);
};

// Chamando a função calculadora
calculadora(1000, '*', 7);


// =========================
// IIFE - Immediately Invoked Function Expression
// Função definida e executada imediatamente
// =========================

const IIFE = (function(){
    // Essa função é criada e executada no mesmo momento em que é lida
    document.write("<h2>Essa função foi executada imediatamente!</h2>");
})();

// IIFE COM PARÂMETROS
const loaduser = (function(user){
    document.write(`<h2>Carregando as informações do usuário: <stronG>${user} </h2>`);
})("Guilherme Kauan Santana Bitencourt"); // Passamos os valores "João" e 30 para a função