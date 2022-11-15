import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  createPortfolio,
  deletePortfolio,
  listPortfolio,
  showPortfolio,
  updatePortfolio,
} from "./controller/portfolioController";
import {
  createPortfolioSchema,
  updatePortfolioSchema,
  showPortfolioSchema,
  deletePortfolioSchema,
} from "./validators";

export default (router: Router): Router => {
  router.get("/v1/portfolio", Controller(listPortfolio));
  router.post("/v1/portfolio", Controller(createPortfolio, createPortfolioSchema));
  router.get("/v1/portfolio/:id", Controller(showPortfolio, showPortfolioSchema));
  router.put("/v1/portfolio/:id", Controller(updatePortfolio, updatePortfolioSchema));
  router.delete(
    "/v1/portfolio/:id",
    Controller(deletePortfolio, deletePortfolioSchema)
  );

  return router;
};