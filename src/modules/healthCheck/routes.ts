import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import { healthCheck } from "./healthCheckController";

export default (router: Router): Router => {
  router.get("/", Controller(healthCheck));

  return router;
};
