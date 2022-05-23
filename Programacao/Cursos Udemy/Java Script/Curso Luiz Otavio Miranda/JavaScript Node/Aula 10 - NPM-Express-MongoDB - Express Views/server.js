/* 
Aqui iremos colocar os views, que é nada mais que as telas que o usuário itera, ao invez de criar vários htmls, iremos
usar uma engine que ira renderizar cada tela para o usuário

A camada View (visão) é responsável pela interação com o usuário. Nesta camada são apresentados os dados ao usuário.
Os dados podem ser entregues em vários formatos, dependendo do que for preciso, como páginas HTML, arquivos XML, 
documentos, vídeos, fotos, músicas etc.

*/

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

//setamos o caminho dos views, podemos usar o caminho absoluto utilizando o 'path' ou caminho relativo
app.set('views', './src/views');
/* app.set('views', path.resolve(__dirname, 'src', 'views')); */

//Aqui setamos o engine que vai renderizar as paginas, neste caso o ejs que se aproxima do html, porém, com algumas funções a mais
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

