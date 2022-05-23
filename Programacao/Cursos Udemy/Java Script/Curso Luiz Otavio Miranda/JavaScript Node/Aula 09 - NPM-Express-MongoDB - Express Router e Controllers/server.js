/* 
Aqui iremos dividir as nossas requisições para o controller, ele será responsável por lidar com as requisições do
usuário. Ele gerencia as ações realizadas, fala qual Model e qual View utilizar para que a ação seja completada

Fazemos isto por que fica mais facil de lidar com as rotas caso a aplicacções tenha muitas páginas, é mais por questão 
de organização, este é um passo para trabalhar com o modelo MVC 

Model-view-controller (MVC) é um padrão de arquitetura de software que divide a aplicação em três camadas: 
Model, View e Controller.
*/

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

