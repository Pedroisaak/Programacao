import { Express } from "express";
import * as express from 'express';

export default (app: Express): void => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
