import { Model } from "mongoose";
import {AboutUsModel} from "../model/AboutUs"

export class AboutUsRepository {
  private repository: Model<any>;

  constructor(repository: Model<any>) {
    this.repository = repository;
  }

  async createAbouUs(): Promise<void> {}
  async updateAbouUs(): Promise<void> {}
  async deleteAboutUs(): Promise<void> {}
}
