import { Model } from "mongoose";
import { PortfolioModel } from "../model/Portifolio"

export class PortfolioRepository {
  private repository: Model<any>;

  constructor(repository: Model<any>) {
    this.repository = repository;
  }

  async createPortfolio(): Promise<void> {}
  async updatePortfolio(): Promise<void> {}
  async deletePortfolio(): Promise<void> {}
}
