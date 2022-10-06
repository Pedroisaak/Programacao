import { Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser";
import { listUsersController } from "../modules/accounts/useCases/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  response.json({ msg: "This is CORS-enabled for all origins!" });
  return listUsersController.handle(request, response);
});

export { usersRoutes };
