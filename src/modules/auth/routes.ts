import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import { login, logout, forgotPassword } from "./authController";

export default (router: Router): Router => {

  router.post("/v1/login", Controller(login));
  router.post("/v1/logout", Controller(logout));
  router.post("/v1/forgotPassword", Controller(forgotPassword));

  return router
};
