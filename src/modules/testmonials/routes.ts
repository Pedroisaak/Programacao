import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  createTestmonials,
  deleteTestmonials,
  listTestmonials,
  showTestmonials,
  updateTestmonials,
} from "./controller/testmonialsController";
import {
  createTestmonialsSchema,
  updateTestmonialsSchema,
  showTestmonialsSchema,
  deleteTestmonialsSchema,
} from "./validators";

export default (router: Router): Router => {
  router.get("/v1/testmonials", Controller(listTestmonials));
  router.post("/v1/testmonials", Controller(createTestmonials, createTestmonialsSchema));
  router.get("/v1/testmonials/:id", Controller(showTestmonials, showTestmonialsSchema));
  router.put("/v1/testmonials/:id", Controller(updateTestmonials, updateTestmonialsSchema));
  router.delete(
    "/v1/testmonials/:id",
    Controller(deleteTestmonials, deleteTestmonialsSchema)
  );

  return router;
};