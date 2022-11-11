import MongoDBRepository from "../../../sharred/adapters/mongodb-repository-adapter";
import { AboutUsModel } from "../model/AboutUs";

export class AboutUsRepository {
  private repository: any;

  constructor() {
    this.repository = new MongoDBRepository(AboutUsModel);
  }

  async list(data = {}): Promise<any> {
    return this.repository.find()
  }

  async create(data): Promise<any> {
    return this.repository.insertOne(data);
  }

  async show(id): Promise<any> {
    return this.repository.findById(id);
  }

  async update(id, data): Promise<any> {
    return this.repository.findOneAndUpdate(id, data);
  }

  async delete(id): Promise<any> {
    return this.repository.findOneAndDelete({ _id: id });
  }
}
