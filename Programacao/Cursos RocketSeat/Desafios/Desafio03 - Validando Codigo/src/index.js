const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

function getRepositoryIndex(id) {
  const findRepository = repositories.find(repoID => repoID.id === id)
  let repositoryIndex = repositories.indexOf(findRepository);
  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repositório não encontrado" });
  }
  return repositoryIndex
}

function checksExistsRepository(request, response, next) {
  const { id } = request.params

  const repository = repositories.find((repository) => repository.id === id)
  if (!repository) {
    return response.status(404).json({ error: "Repositório não existe" })
  }
  return next()
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };
  repositories.push(repository)
  return response.status(201).json(repository);
});

app.put("/repositories/:id", checksExistsRepository, (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body

  const repositoryUpdate = {
    title: title,
    url: url,
    techs: techs
  }

  const repository = { ...repositories[getRepositoryIndex(id)], ...repositoryUpdate };
  repositories[getRepositoryIndex(id)] = repository;

  return response.json(repositories);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  repositories.splice(getRepositoryIndex(id), 1);
  response.status(201).json("Repositorio deletado com sucesso!")
});

app.post("/repositories/:id/like", checksExistsRepository, (request, response) => {
  const { id } = request.params;

  const likes = ++repositories[getRepositoryIndex(id)].likes;
  return response.json(likes);
});

module.exports = app;
