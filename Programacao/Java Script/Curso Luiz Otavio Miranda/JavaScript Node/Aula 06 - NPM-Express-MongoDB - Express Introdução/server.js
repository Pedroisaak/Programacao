/*
                                          O que é o Express?
O Express.js é um Framework rápido e um dos mais utilizados em conjunto com o Node.js, facilitando no desenvolvimento 
de aplicações back-end e até, em conjunto com sistemas de templates, aplicações full-stack.

Escrito em JavaScript, o Express.js é utilizado por diversas empresas ao redor do mundo, dentre elas a Fox Sports, 
PayPal, IBM, Uber, entre outras.

Muito popular tanto em grandes empresas quanto na comunidade, o Express facilita a criação de aplicações utilizando 
o Node em conjunto com o JavaScript, tornando este ecossistema ainda mais poderoso.

*/

const express = require('express');
const app = express();


//         Criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
