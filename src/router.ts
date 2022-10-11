import { Express, Router } from "express";

import authRoutes from "./modules/auth/routes";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  router.use("/", authRoutes);
};
