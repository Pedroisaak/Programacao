require("dotenv").config();
// @ts-ignore
import express from 'express';
import { bootstrapApp } from "./sharred/bootstrap";

const app = express();

bootstrapApp(app);

export default app;
