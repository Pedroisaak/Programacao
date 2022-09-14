const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');
const { json } = require('express');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function getTodoId(id, user) {
  const getID = user.todos.find((findID) => findID.id === id)
  return getID
}

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers
  const user = users.find((user) => user.username === username)

  if (!user) {
    return response.status(400).json({ error: "Usuário não existe " })
  }

  request.user = user;

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.headers
  const user = users.find((user) => user.username === username)
  if (user) {
    return response.status(400).json({ error: "Usuário já existe" })
  }
  users.push({
    id: uuidv4(), 
    name,
    username,
    todos: [],
  });

  return response.status(201).json(users).send()

});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos)

});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body

  const { user } = request;

  const TodoCreation = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
    created_at: new Date().toLocaleDateString('pt-BR', { timeZone: 'UTC' })
  }

  user.todos.push(TodoCreation);
  return response.status(201).json(user.todos).send();
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { id } = request.params;
  const { user } = request

  if (!getTodoId(id, user)) {
    response.status(400).json('Tarefa não encontrada').send()
  }

  getTodoId(id, user).title = title
  getTodoId(id, user).deadline = deadline
  response.status(201).json(getTodoId(id, user))
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { user } = request

  if (!getTodoId(id, user)) {
    response.status(400).json('Tarefa não encontrada').send()
  }

  getTodoId(id, user).done = true

  response.status(201).json(getTodoId(id, user)).send()

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { user } = request

  let index = user.todos.indexOf(getTodoId(id, user)) //provavel que tenha uma maneira mais eficiente

  if (!getTodoId(id, user)) {
    return response.status(400).json('Tarefa não encontrada').send()
  }

  user.todos.splice(index, 1)

  return response.status(201).json(getTodoId(id, user)).send()
});

module.exports = app;