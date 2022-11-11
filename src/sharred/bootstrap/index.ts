import { Express } from "express";

import setupRoutes from "../../router";
import setupDatabases from "./databases";
import setupMiddlewares from "./middlewares";
import setupBodyParser from "./body-parser";

export const bootstrapApp = (app: Express): void => {
  setupBodyParser(app);
  setupDatabases();
  setupMiddlewares(app);
  setupRoutes(app);
};
