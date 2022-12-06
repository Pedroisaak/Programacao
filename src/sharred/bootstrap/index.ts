import { Express } from "express";

import setupRoutes from "../../router";
import setupDatabases from "./databases";
import setupMiddlewares from "./middlewares";
import setupBodyParser from "./body-parser";
import setupFileupload from "./express-fileupload";
import setupIp from "./list-ip";

export const bootstrapApp = (app: Express): void => {
  setupIp();
  setupFileupload(app);
  setupBodyParser(app);
  setupDatabases();
  setupMiddlewares(app);
  setupRoutes(app);
};
