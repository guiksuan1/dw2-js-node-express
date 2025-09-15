// 1. Exibir data e hora atuais no formato completo
const dataAtual = new Date();
document.write("<h2>Data e Hora Atuais:</h2>");
document.write(dataAtual + "<br><br>");

// 2. Exibir o valor da compra formatado como moeda americana (USD)
const compraInternacional = 500.75;
const valorUSD = compraInternacional.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});
document.write("<h2>Compra Internacional:</h2>");
document.write(`Valor em Dólar: ${valorUSD}<br><br>`);

// 3. Fazer a conversão para moeda brasileira (BRL)
const cotacaoDolar = 5.25; // Cotação fictícia
const valorBRL = (compraInternacional * cotacaoDolar).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
document.write("<h2>Conversão para Real:</h2>");
document.write(`Valor em Real: ${valorBRL}<br><br>`);

// 4. Calcular e exibir a data de entrega
const dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataAtual.getDate() + 12);
const dia = String(dataEntrega.getDate()).padStart(2, '0');
const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0');
const ano = dataEntrega.getFullYear();
document.write("<h2>Data de Entrega:</h2>");
document.write(`Previsão de entrega: ${dia}/${mes}/${ano}<br><br>`);