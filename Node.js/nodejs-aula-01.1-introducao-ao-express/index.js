// Importando o Expresse (framework web)
const express = require("express");
// Importando o CORS (middleware para habilitar CORS)
const app = express();

// Configurando o ejs como template engine
app.set("view engine", "ejs");
app.set("views", "./views"); // Pasta onde estão os arquivos ejs

// Criando a primeira rota do site (ROTA PRINCINPAL)
// Definindo a rota raiz "/"
// REQ -> Requisição (pedido do cliente)
// RES -> Resposta (resposta do servidor)

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>"); // Enviando uma resposta simples
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.send("<h1>Página de Produto!</h1>"); // Enviando uma resposta simples
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  res.send("<h1>Página de Clientes!</h1>"); // Enviando uma resposta simples
});


// Iniciando o Servidor HTTP
// Definindo a porta do servidor
const port = 8080; // Porta padrão para servidores web
// Iniciando o servidor na porta definida
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor ${error}`);
  } else {
    console.log(`Servidor rodando em: http://localhost:${port}`);
  }
});
