import { Express } from 'express'
import * as cors from "cors";

export default (app: Express): void => {
  app.use(cors())
}