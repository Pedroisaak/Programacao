import { Router } from "express";
import { authToken } from "../middlewares/auth";
import { createUserController } from "../modules/accounts/useCases/createUser";
import { listUsersController } from "../modules/accounts/useCases/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", authToken, (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

export { usersRoutes };
