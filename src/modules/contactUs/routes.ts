import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  createContactUs,
  deleteContactUs,
  listContactUs,
  showContactUs,
  updateContactUs,
} from "./controller/contactUsController";
import {
  createContactUsSchema,
  updateContactUsSchema,
  showContactUsSchema,
  deleteContactUsSchema,
} from "./validators";

export default (router: Router): Router => {
  router.get("/v1/contact-us", Controller(listContactUs));
  router.post("/v1/contact-us", Controller(createContactUs, createContactUsSchema));
  router.get("/v1/contact-us/:id", Controller(showContactUs, showContactUsSchema));
  router.put("/v1/contact-us/:id", Controller(updateContactUs, updateContactUsSchema));
  router.delete(
    "/v1/contact-us/:id",
    Controller(deleteContactUs, deleteContactUsSchema)
  );

  return router;
};
