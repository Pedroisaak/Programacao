import { Express } from "express";

import setupRoutes from "../../router";
import setupDatabases from "./databases";
import setupMiddlewares from "./middlewares";
import setupBodyParser from "./body-parser";
import setupFileupload from "./express-fileupload";

export const bootstrapApp = (app: Express): void => {
  setupFileupload(app);
  setupBodyParser(app);
  setupDatabases();
  setupMiddlewares(app);
  setupRoutes(app);
};
