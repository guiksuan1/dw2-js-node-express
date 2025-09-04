// Manipulação de datas

document.write("<h3>Manipulação de datas:</h3>");
// Criar uma instância da classe Date() do JavaScript
const dataAtual = new Date();
document.write(dataAtual);

// Obter o dia, mês e ano
// pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<br>Dia: ${dia}`);
// pegando o mês atual
const mês = dataAtual.getMonth() + 1; // Os meses são indexados a partir de 0
document.write(`<br>Mês: ${mês}`);
// pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<br>Ano: ${ano}`);
// pegando o dia da semana atual
const diaSemana = dataAtual.getDay(); // 0 (Domingo) a 6 (Sábado)
document.write(`<br>Dia da Semana: ${diaSemana}`);
// pegando a hora atual
const hora = dataAtual.getHours();
document.write(`<br>Hora: ${hora}`);

// Adicionando Dias, Meses e Anos à data atual
document.write("<h3>Adicionando Dias, Meses e Anos à data atual:</h3>");
// Adicionando 4 anos à data atual
dataAtual.setFullYear(ano + 4);z
document.write(`<br>Data com 4 anos adicionados: ${dataAtual.getFullYear()}`);
// Adicionando 3 meses à data atual
dataAtual.setMonth(mês + 3);
document.write(`<br>Data com 3 meses adicionados: ${dataAtual.getMonth() + 1}`);
// Adicionando 10 dias à data atual
dataAtual.setDate(dia + 10);
document.write(`<br>Data com 10 dias adicionados: ${dataAtual.getDate()}`);

// Formatação de Valores Monetários
document.write("<h3>Formatação de Valores Monetários:</h3>");
const valor = 1234.56;
// Formatar para Real Brasileiro (pt-BR)
const valorFormatadoBRL = valor.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' });
document.write(`<br>Valor em Real Brasileiro: ${valorFormatadoBRL}`);
// Formatar para Dólar Americano (en-US)
const valorFormatadoUSD = valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
document.write(`<br>Valor em Dólar Americano: ${valorFormatadoUSD}`);

// Formatação de strings
document.write("<h3>Formatação de Strings:</h3>");
const nome = "Guilherme Kauan";

// Alterar para maiúsculas - toUpperCase()
document.write(`<br>Nome em Maiúsculas: ${nome.toUpperCase()}`);
// Alterar para maiúsculas - toUpperCase()
document.write(`<br>Nome em minúsculas: ${nome.toLowerCase()}`);