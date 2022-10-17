import { Router } from "express";
import { notImplemented } from "../../sharred/helpers/http-helper";

export default (router: Router): void => {
  router.post("/login", (request, response) => {
    return response.send(notImplemented());
  });
};
