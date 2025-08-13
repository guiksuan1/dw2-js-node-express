// TIPOS DE FUNÇÕES

// VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS: VAR, LET e CONST
// VAR: No geral, evite seu uso, pois pode gerar problemas de escopo.
// LET: Use quando precisar mudar (reatribuir) o valor da variável depois.
// CONST: Use quando o valor não vai mudar durante o programa.

// Exemplos (comentados para não atrapalhar o código abaixo):
// var nome = "Diego"
// var nome = "Maria" // Com var é possível redeclarar, mas não é seguro.
// let cidade = "Registro"
// let cidade = "Pariquera-Açu" // ❌ Não pode redeclarar com let.
// let endereco
// endereco = "Rua Tal..." // ✅ Pode criar sem valor e atribuir depois.
// const idade // ❌ Const precisa ter valor inicial.
// const idade = 18
// idade = 20 // ❌ Não pode alterar valor de uma const.


// =========================
// FUNÇÃO SIMPLES
// =========================

// Criamos uma constante com uma mensagem HTML
const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função!<h2>";

// Criamos uma função chamada showMessage (sem parâmetros)
function showMessage() {
  // Essa função escreve a mensagem na tela do navegador
  document.write(message);
}

// Chamamos (invocamos) a função para ela ser executada
showMessage();


// =========================
// FUNÇÃO COM PARÂMETROS
// =========================

// Criamos uma constante com um nome
const name = "Guilherme";

// Criamos uma função que recebe um parâmetro chamado "name"
function showMessageWithName(name) {
  // Usamos template literals (crase `) para inserir o valor da variável
  // dentro da string usando ${ }
  document.write(
    `<h2>Olá! ${name}, Bem-vindo! Essa é sua primeira função!</h2>`
  );
}

// Chamamos a função passando a variável name como argumento
showMessageWithName(name);

// Também poderíamos chamar assim:
// showMessageWithName("Ana");


// =========================
// FUNÇÃO COM MAIS DE UM PARÂMETRO
// =========================

// Criamos duas constantes com números
const n1 = 10;
const n2 = 20;

// Criamos uma função que recebe dois números e faz multiplicação
function mult(n1, n2) {
  let result = n1 * n2; // Multiplica n1 por n2
  document.write(`<h2>O resultado da multiplicação é: ${result}</h2>`);
}

// Chamamos a função passando as constantes n1 e n2
mult(n1, n2);


// =========================
// FUNÇÃO COM RETORNO
// =========================

// Criamos duas constantes
const num1 = 1000;
const num2 = 5;

// Criamos uma função que recebe dois números e retorna a divisão deles
function div(num1, num2) {
  return num1 / num2; // Retorna o resultado
}

// Chamamos a função e já colocamos o valor retornado dentro do document.write
document.write(
  `<h2>O resultado da divisão é: ${div(num1, num2)}</h2>`
);


// =========================
// FUNÇÃO COM DIFERENTES RETORNOS
// =========================

const number = 4;

function parImpar(number) {
  // Verifica se o número é par ou ímpar e retorna a mensagem correspondente
  if (number % 2 === 0) {
    return "par!";
  } else {
    return "ímpar!";
  }
}
document.write(
  `<h2>O número ${number} é ${parImpar(number)}</h2>`
);