//Usa variaveis de ambiente para armazenar senhas e não ficar exposto no código fonte
require('dotenv').config();

//Cria uma constante que inicia a biblioteca do express
const express = require('express');
const app = express();
//instancia o mongoose, que trata os dados no banco de dados
const mongoose = require('mongoose');
//conecta com o banco de dados do mongoose e como volta uma promise, usamos o them para emitir um sinal, ou seja, apenas quando a conexão com o banco de dados for estabelicida o app será iniciado
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));
//instancia o express session, o qual é uma biblioteca que salva logins do usuário caso seja feito no mesmo navegador, tipo como no facebook
const session = require('express-session');
//salva as session no banco de dados, o app buscara os cookies no mongo e caso tiver retornara para o usuário
const MongoStore = require('connect-mongo');
//instancia o flash menssages que são mensagens 'auto-destrutiveis' que são mostradas para o usuario, e assim que ele iteragir com elas desaparecerá
const flash = require('connect-flash');
//estabelice o caminho das rotas do aplicativo
const routes = require('./routes');
//instancia o path, que é uma biblioteca do express para trabalhar com caminhos dos arquivos no computador
const path = require('path');
//instancia o helmet, que é uma camada de segurança simples mas eficaz para a nossa aplicação
const helmet = require('helmet');
//instancia o csrf que é outra camada de proteção que cria uma chave única para cada envio de formulário, assim evitando que outros sites enviem formulários desautorizados para a minha aplicação
const csrf = require('csurf');
//instancia os middlewares e local deles, middlewares são pequenas funções que podemos executar ou não a cada requesição do usuário no app
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

//inicia o helmet no app
app.use(helmet());

//necessário para podermos enviar formulários no app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//indica o local dos arquivos estáticos(públicos), arquivos estáticos são aqueles que não precisam de processamento, tais como imagem, css, logos etc.
app.use(express.static(path.resolve(__dirname, 'public')));

//indica as opções da session express
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
//inicia o session express com as configurações acima
app.use(sessionOptions);
//inicia o flash menssages no app
app.use(flash());
//Indica o caminho dos views, views é a pasta onde estará tudo o que o usuário verá no app
app.set('views', path.resolve(__dirname, 'src', 'views'));
//Indica qual engine iremos usar para renderizar as páginas
app.set('view engine', 'ejs');
//Inicia os csrf
app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
//Inicia as rotas do express
app.use(routes);

//inicia o app na porta 3000 e só irá inicia caso o banco emita o sinal 'pronto'
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
