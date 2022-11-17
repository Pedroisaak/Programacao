import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  createUser,
  deleteUser,
  listUser,
  showUser,
  updateUser,
} from "./controller/userController";
import {
  createUserSchema,
  updateUserSchema,
  showUserSchema,
  deleteUserSchema,
} from "./validators";

export default (router: Router): Router => {
  router.get("/v1/user", Controller(listUser));
  router.post("/v1/user", Controller(createUser, createUserSchema));
  router.get("/v1/user/:id", Controller(showUser, showUserSchema));
  router.put("/v1/user/:id", Controller(updateUser, updateUserSchema));
  router.delete(
    "/v1/user/:id",
    Controller(deleteUser, deleteUserSchema)
  );

  return router;
};
