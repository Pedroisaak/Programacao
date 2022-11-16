import { Express, Router } from "express";

import authRoutes from "./modules/auth/routes";
import aboutUsRoutes from "./modules/aboutUs/routes";
import missionRoutes from "./modules/mission/routes"
import portfolioRoutes from "./modules/portfolio/routes"
import testmonialsRoutes from "./modules/testmonials/routes"
import { listRoutes } from "./sharred/output/list-routes";

export default (app: Express) => {
  const router = Router();

  app.use('/api', [
    authRoutes(router),
    aboutUsRoutes(router),
    missionRoutes(router),
    portfolioRoutes(router),
    testmonialsRoutes(router)
  ]);

  listRoutes(router, '/api')
};
