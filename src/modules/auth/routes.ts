import { Router } from "express";
import { notImplemented } from "../../sharred/helpers/http-helper";

export default (router: Router): Router => {
  router.post("/v1/login", (request, response) => {
    return response.send(notImplemented());
  });

  return router
};
