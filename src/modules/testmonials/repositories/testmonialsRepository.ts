import { Model } from "mongoose";
import { TestmonialsModel } from "../model/Testmonials"

export class TestmonialsRepository {
  private repository: Model<any>;

  constructor(repository: Model<any>) {
    this.repository = repository;
  }

  async createTestmonials(): Promise<void> {}
  async updateTestmonials(): Promise<void> {}
  async deleteTestmonials(): Promise<void> {}
}
