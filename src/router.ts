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
import { sendEmailService } from "./sharred/services/email"

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

  app.post('/api/v1/import', upload.single('imagem'), (req, res) => {
    const file = req.file;
    console.log('uploaded');
    res.json(file);
  });

  app.post('/api/v1/email', (req, res) => {
    const body = req.body
    sendEmailService(body)
    res.json(body)
  });

  listRoutes(router, '/api')
};
