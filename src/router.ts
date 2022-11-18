import { Express, Router } from "express";

import userRoutes from "./modules/users/routes";
import authRoutes from "./modules/auth/routes";
import aboutUsRoutes from "./modules/aboutUs/routes";
import missionRoutes from "./modules/mission/routes"
import portfolioRoutes from "./modules/portfolio/routes"
import testmonialsRoutes from "./modules/testmonials/routes"
import contactUsRoutes from "./modules/contactUs/routes"
import { listRoutes } from "./sharred/output/list-routes";

import { upload } from "./sharred/services/uploader";


export default (app: Express) => {
  const router = Router();

  app.use('/api', [
    authRoutes(router),
    userRoutes(router),
    aboutUsRoutes(router),
    missionRoutes(router),
    portfolioRoutes(router),
    testmonialsRoutes(router),
    contactUsRoutes(router)
  ]);

  app.post('/api/v1/import', upload.single('teste'), (req, res) => {
    const file = req.file;
    console.log('uploaded');
    res.json(file);
  });

  listRoutes(router, '/api')
};
