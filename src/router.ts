import { Express, Router } from "express";

import authRoutes from "./modules/auth/routes";
import aboutUsRoutes from "./modules/aboutUs/routes";
import missionRoutes from "./modules/mission/routes"
import { listRoutes } from "./sharred/output/list-routes";

export default (app: Express) => {
  const router = Router();

  app.use('/api', [
    authRoutes(router),
    aboutUsRoutes(router),
    missionRoutes(router)
  ]);

  listRoutes(router, '/api')
};
