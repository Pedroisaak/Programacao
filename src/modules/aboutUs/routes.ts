import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import { createAboutUs, deleteAboutUs, listAboutUs, showAboutUs, updateAboutUs } from "./aboutUsController";

export default (router: Router): Router => {

  router.get("/v1/about-us", Controller(listAboutUs));
  router.post("/v1/about-us", Controller(createAboutUs));
  router.get("/v1/about-us/:id", Controller(showAboutUs));
  router.put("/v1/about-us/:id", Controller(updateAboutUs));
  router.delete("/v1/about-us/:id", Controller(deleteAboutUs));

  return router
};
