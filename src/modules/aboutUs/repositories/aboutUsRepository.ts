import MongoDBRepository from "../../../sharred/adapters/mongodb-repository-adapter";

export class AboutUsRepository {
  private repository: any;

  constructor(repository: any) {
    this.repository = new MongoDBRepository('aboutUs');
  }

  async list(data): Promise<any> {
    return this.repository.find(data)
  }

  async create(data): Promise<any> {
    return this.repository.insertOne(data)
  }
  
  async show(id): Promise<any> {
    return this.repository.findOne({ _id: id })
  }
  
  async update(id, data): Promise<any> {
    return this.repository.findOneAndUpdate(id, data)
  }
  
  async delete(id): Promise<any> {
    return this.repository.findOneAndDelete({ _id: id })
  }
}
