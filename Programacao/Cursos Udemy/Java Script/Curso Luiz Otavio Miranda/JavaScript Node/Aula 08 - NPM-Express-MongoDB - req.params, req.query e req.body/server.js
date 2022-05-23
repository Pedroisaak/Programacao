/* REQ.PARAM => é um parametro esperado para um requisação de url, como por exemplo um usuário tentando entrar 
no sistema http://site/ , criamos os parametros usuario e senha

app.get("/site/:usuario/:senha", (req, res)=>{
  res.send(req.params);

se entramos /site/pedro/123 ou indicamos em um formulario os dois, os parametros serão preenchido

--------------------------------

REQ.QUERY => um objeto de solicitação preenchido por strings de consulta de solicitação localizadas em uma URL. 
Essas strings de consulta estão no formato de valor-chave. Eles começam após o ponto de interrogação em qualquer URL. 
E se houver mais de um, eles são separados com o e comercial . Veja exemplo abaixo.

https://educative.io/user?name=Theodore&isAuthor=true

A partir do código acima, as strings de consulta são namee isAuthor. Quando essa solicitação é feita, o req.queryobjeto
é preenchido com as strings de consulta.

req.query = {name: "Theodore", isAuthor: true}

--------------------------------

REQ.BODY => Um objeto contendo parâmetros de texto do corpo da solicitação analisada, com o padrão {}.
Por padrão, o corpo da solicitação pode ser codificado por URL ou encadeado como JSON. O suporte para outros formatos,
como XML serializado, é possível usando a configuração de middleware .

})*/

const express = require("express");
const app = express();

//Para tratar o POST, devemos colocar o código abaixo, pois senão, o formulário retorna como 'undefined'
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  // /profiles/3
  // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
  //
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
