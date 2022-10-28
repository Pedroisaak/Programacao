import { Express, Router } from "express";

import authRoutes from "./modules/auth/routes";
import aboutUsRoutes from "./modules/aboutUs/routes";
import { listRoutes } from "./sharred/output/list-routes";

export default (app: Express) => {
  const router = Router();
  
  app.use('/api',[
    authRoutes(router),
    aboutUsRoutes(router)
  ]);

  listRoutes(router, '/api')
};
