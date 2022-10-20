import { Model } from "mongoose";
import { MissionModel } from "../model/Mission"

export class MissionRepository {
  private repository: Model<any>;

  constructor(repository: Model<any>) {
    this.repository = repository;
  }

  async createMission(): Promise<void> {}
  async updateMission(): Promise<void> {}
  async deleteMission(): Promise<void> {}
}
