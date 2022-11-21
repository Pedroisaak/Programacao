import MongoDBRepository from "../../../sharred/adapters/mongodb-repository-adapter";
import { ContactUsModel } from "../model/ContactUs";

export class ContactUsRepository {
  private repository: any;

  constructor() {
    this.repository = new MongoDBRepository(ContactUsModel);
  }

  async list(data = {}): Promise<any> {
    return this.repository.find()
  }

  async create(data: any): Promise<any> {
    return this.repository.insertOne(data);
  }

  async show(id: string): Promise<any> {
    return this.repository.findById(id);
  }

  async update(id: string, data: any): Promise<any> {
    return this.repository.findOneAndUpdate(id, data);
  }

  async delete(id: string): Promise<any> {
    return this.repository.findOneAndDelete({ _id: id });
  }
}
