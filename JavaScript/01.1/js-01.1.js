//TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
// function showMessage() {
//     document.write("Olá, Mundo!<br>");
// }

// VARIÁVEIS PODER SER DECLARADAS DE 3 FORMAS:
// VAR, LET e CONST
// VAR: No geral evite seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando não for necessário reatribuir o valor da variável.

// var nome = "Diego"
// var nome = "Maria"
// let cidade = "Registro"
// let cidade = "Pariquera-Açu" // Não pode
// let endereco
// endereco = "Rua Tal..."
// const idade // Não pode
// const idade = 18
// idade = 20 // Não pode

//TIPOS DE FUNÇÕES

// FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função!<h2>";
function showMessage() {
  document.write(message);
}
//invocando a função
showMessage();

// FUNÇÃO COM PARÂMETROS
const name = "Guilherme";
function showMessageWithName(name) {
  document.write(
    `<h2>Olá! ${name}, Bem-vindo! Essa é sua primeira função!</h2>`
    // template literals são delimitados por crase (`) e permitem interpolação de variáveis
    
  );
}

//invocando a função
showMessageWithName(name);
// showMessageWithName("Ana");