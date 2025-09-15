function operacaoMatematica(num1, operador, num2) {
    // Realiza a operação matemática usando eval
    const resultado = eval(`${num1} ${operador} ${num2}`);
document.write(`<h2>O resultado da operação ${num1} ${operador} ${num2} é ${resultado}.</h2>`);
}
// Chamando a função calculadora
operacaoMatematica(10, '*', 10);