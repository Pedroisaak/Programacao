const express = require('express');
const cors = require('cors');

const { v4: uuidv4, validate } = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers

  const user = users.find((user) => user.username === username)
  if (!user) {
    return response.status(404).json("Usuário não existe")
  }
  request.user = user;
  return next()
}

function checksCreateTodosUserAvailability(request, response, next) {
  const { user } = request

  const todoCount = user.todos.length
  if (user.todos.length >= 10 && user.pro === false) {
    console.log(todoCount)
    return response.status(403).json({ error: 'Seu plano é gratis e só permite 10 todos criado' })
  }
  response.status(200).json(user.todos)
  next();
}

function checksTodoExists(request, response, next) {
  const { id } = request.params
  const { user } = request

  const checkIdTodo = user.todos.find(idTodo => idTodo.id === id)
  const checkUuid = validate(id)

  if (!checkIdTodo) {
    return response.status(400).json({ error: 'todo não encontrado' })
  }
  if (!checkUuid) {
    return response.status(400).json({ error: 'Não corresponde a uma id válida' })
  }
  response.status(200).send()

  request.todo = checkIdTodo
  next()
}

function findUserById(request, response, next) {
  const { id } = request.params

  const findUser = users.find((userId) => userId.id === id)
  if (!findUser) {
    return response.status(400).json('Usuário não cadastrado')
  }
  request.user = findUser
  next()
}

app.post('/users', (request, response) => {
  const { name, username } = request.headers;

  const usernameAlreadyExists = users.some((user) => user.username === username);
  if (usernameAlreadyExists) {
    return response.status(400).json({ error: 'Usuário já existe' });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    pro: false,
    todos: []
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get('/users/:id', findUserById, (request, response) => {
  const { user } = request;

  return response.json(user);
});

app.patch('/users/:id/pro', findUserById, (request, response) => {
  const { user } = request;

  if (user.pro) {
    return response.status(400).json({ error: 'Plano pro já esta ativado.' });
  }

  user.pro = true;

  return response.json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, checksCreateTodosUserAvailability, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  const newTodo = {
    id: uuidv4(),
    title,
    deadline: new Date(deadline),
    done: false,
    created_at: new Date()
  };

  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});

app.put('/todos/:id', checksExistsUserAccount, checksTodoExists, (request, response) => {
  const { title, deadline } = request.body;
  const { todo } = request;

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.status(201).json(todo);
});


app.patch('/todos/:id/done', checksTodoExists, (request, response) => {
  const { todo } = request;

  todo.done = true;

  return response.json(todo);
});

app.delete('/todos/:id', checksExistsUserAccount, checksTodoExists, (request, response) => {
  const { user, todo } = request;

  const todoIndex = user.todos.indexOf(todo);

  if (todoIndex === -1) {
    return response.status(404).json({ error: 'Todo not found' });
  }

  user.todos.splice(todoIndex, 1);

  return response.status(204).send();
});

module.exports = {
  app,
  users,
  checksExistsUserAccount,
  checksCreateTodosUserAvailability,
  checksTodoExists,
  findUserById
};