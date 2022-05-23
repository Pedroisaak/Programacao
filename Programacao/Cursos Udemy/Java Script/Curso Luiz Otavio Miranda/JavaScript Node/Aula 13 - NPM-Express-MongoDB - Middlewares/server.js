/*              MIDLEWARES

O Express é uma estrutura web de roteamento e middlewares que tem uma funcionalidade mínima por si só: Um aplicativo do
Express é essencialmente uma série de chamadas de funções de middleware.
Funções de Middleware são funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res), e 
a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é comumente 
denotada por uma variável chamada next. */

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

