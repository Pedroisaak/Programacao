require("dotenv").config();
import * as express from 'express';
import { bootstrapApp } from "./sharred/bootstrap";

const app = express();

bootstrapApp(app);

export default app;
