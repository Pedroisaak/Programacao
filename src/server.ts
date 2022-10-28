require("dotenv").config();
import express from "express";

import setupRoutes from "./router";
import setupDatabases from "./sharred/db";
import setupMiddlewares from "./sharred/middlewares";

const app = express();

setupDatabases()
setupMiddlewares(app);
setupRoutes(app)

export default app


