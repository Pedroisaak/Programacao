import { Express } from "express";
import fileUpload from 'express-fileupload';

export default (app: Express): void => {
  app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './tmp/',
    // debug: true,
  }));
};