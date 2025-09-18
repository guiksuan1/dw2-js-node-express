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

// Configurando o ejs como template engine
app.set("view engine", "ejs");
app.set("views", "./views"); // Pasta onde estão os arquivos ejs
// Configurando a pasta public como estatica (css, js, imagens)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index"); // Enviando uma resposta simples
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  //const produtos = ["Computador"--, "Mouse", "Teclado", "Monitor"];
  //enviando a variavel produtos para a pagina produtos.ejs
  //arrays de objetos com os produtos
  const produtos = [
    { nome: "Computador", preco: 2500 },
    { nome: "Celular", preco: 5000 },
    { nome: "Tablet", preco: 1500 },
    { nome: "Notebook", preco: 2000 },
  ];
  //enviando a variavel produtos para a pagina produtos.ejs
  res.render("produtos",{
  produtos: produtos
  });
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Arthur", idade: 18 },
    { nome: "Endrew", idade: 18 }, 
    { nome: "Isaac", idade: 18 },
    { nome: "Guilherme", idade: 18 }];
  res.render("clientes", {
    clientes: clientes
  }); 
});

// ROTA DE PERFIS
app.get("/perfil", (req, res) => {
  //criando a variavel que sera enviada para a pagina perfil.ejs
  const user = "Guilherme Bitencourt";
  //enviando a variavel user para a pagina perfil.ejs
  res.render("perfil",{
    user: user
  });
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
