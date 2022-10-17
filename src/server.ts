require("dotenv").config();
import express from "express";

import setupRoutes from "./router";
import setupMiddlewares from "./sharred/middlewares";

const app = express();

setupMiddlewares(app);
setupRoutes(app)
export default app


