import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  createAboutUs,
  deleteAboutUs,
  listAboutUs,
  showAboutUs,
  updateAboutUs,
} from "./controller/aboutUsController";
import {
  createAboutUsSchema,
  updateAboutUsSchema,
  showAboutUsSchema,
  deleteAboutUsSchema,
} from "./validators";

export default (router: Router): Router => {
  router.get("/v1/about-us", Controller(listAboutUs));
  router.post("/v1/about-us", Controller(createAboutUs, createAboutUsSchema));
  router.get("/v1/about-us/:id", Controller(showAboutUs, showAboutUsSchema));
  router.put("/v1/about-us/:id", Controller(updateAboutUs, updateAboutUsSchema));
  router.delete(
    "/v1/about-us/:id",
    Controller(deleteAboutUs, deleteAboutUsSchema)
  );

  return router;
};
