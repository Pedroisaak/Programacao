import { Express, Router } from "express";

import healthCheck from "./modules/healthCheck/routes";
import userRoutes from "./modules/users/routes";
import authRoutes from "./modules/auth/routes";
import aboutUsRoutes from "./modules/aboutUs/routes";
import missionRoutes from "./modules/mission/routes";
import portfolioRoutes from "./modules/portfolio/routes";
import testmonialsRoutes from "./modules/testmonials/routes";
import contactUsRoutes from "./modules/contactUs/routes";
import { listRoutes } from "./sharred/output/list-routes";

import { upload } from "./sharred/services/uploader";
import { sendEmailService } from "./sharred/services/email";
import { Controller } from "./sharred/adapters/express-route-controller-adapter";
import { ok } from "./sharred/services/http-helper";

export default (app: Express) => {
  const router = Router();

  app.use("/", [healthCheck(router)]);

  app.use("/api", [
    authRoutes(router),
    userRoutes(router),
    aboutUsRoutes(router),
    missionRoutes(router),
    portfolioRoutes(router),
    testmonialsRoutes(router),
    contactUsRoutes(router),
  ]);

  router.post(
    "/api/v1/import",
    Controller((data) => ok({ data: data.body }))
  ); // test upload

  router.post(
    "/api/v1/email",
    Controller(({ body }: any) => {
      sendEmailService(body, 'welcome');
      return ok(body);
    })
  ); // test email

  listRoutes(router, "/api");
};
