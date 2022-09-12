const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const todos = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

app.post('/users', (request, response) => {
  // Complete aqui
  const {name, username} = request.headers
  users.push ({
    id: uuidv4(), //usamos o uuid v4 para gerar um id aleatório para o usuário
    name,
    username,
    todos: [],
});
  console.log(users)

  return response.status(201).json('Usuário cadastrado com sucesso').send()
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui

});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const {title, deadline} = request.body

  const {username} = request;

  const TodoCreation = {
    id: 'uuid', // precisa ser um uuid
    title: 'Nome da tarefa',
    done: false, 
    deadline: '2021-02-27T00:00:00.000Z', 
    created_at: '2021-02-22T00:00:00.000Z'
  }

  username.todos.push(TodoCreation);
  return response.status(201).send();
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;