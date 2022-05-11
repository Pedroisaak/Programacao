/* Com o Express, é possível entregar os arquivos estáticos de forma separada no sistema. E isso é importante porque você 
consegue dizer para o servidor, exatamente quais arquivos não precisam de um processamento, mas sim que ele só seja 
entregue para uso.
Dessa forma o servidor vai entender que aquele arquivo, não requer nenhum tipo de lógica ou processamento para ser 
entregue, ele simplesmente é mostrado na tela para o usuário.
Os arquivos estáticos podem ser fotos, arquivos, folhas de estilo css, arquivos javascript, arquivos somente com 
HTML e entre outros. */

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

//setamos aqui o caminho para a pasta public, que será para arquivos estáticos, como css, imagens etc..
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

