import MongoDBRepository from "../../../sharred/adapters/mongodb-repository-adapter";
import { UserModel } from "../model/User";

export class UsersRepository {
  private repository: any;

  constructor() {
    this.repository = new MongoDBRepository(UserModel);
  }

  async list(data = {}): Promise<any> {
    return this.repository.find()
  }

  async create(data: any): Promise<any> {
    return this.repository.insertOne(data);
  }

  async findByEmail(email: string): Promise<any> {
    return this.repository.findOne({ email });
  }

  async show(id: string): Promise<any> {
    return this.repository.findById(id);
  }

  async update(id: string, data: any): Promise<any> {
    return this.repository.findOneAndUpdate(id, data)
  }

  async delete(id: string): Promise<any> {
    return this.repository.findOneAndDelete({ _id: id });
  }
}
