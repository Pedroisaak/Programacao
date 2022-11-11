import { Model } from "mongoose";
import { MongoHelper } from "../db/mongoDb";
export default class MongoDBRepository {
  constructor(private readonly model: Model<any>) {
    this.model = model;
  }

  // FIND
  async find(query) {
    return (await this.model.find(query).exec()).map(MongoHelper.mapper);
  }

  async findOne(query) {
    try {
      const document = await this.model.findOne(query).exec();
      return MongoHelper.mapper(document);
    } catch (error) {
      return null;
    }
  }

  async findById(query) {
    try {
      return MongoHelper.mapper(await this.model.findById(query).exec());
    } catch (error) {
      return null;
    }
  }

  // INSERT
  async insertOne(data) {
    return this.model.create(data);
  }

  async insertMany(data) {
    return this.model.insertMany(data);
  }

  // UPDATE
  async findAndModify(id, data) {
    return this.model.findByIdAndUpdate(id, data);
  }

  async findOneAndReplace(query, data) {
    return this.model.findOneAndReplace(query, data);
  }

  async findOneAndUpdate(query, data) {
    return MongoHelper.mapper(
      await this.model.findOneAndUpdate(query, data).exec()
    );
  }

  // DELETE
  async deleteOne(query) {
    return this.model.deleteOne(query);
  }

  async deleteMany(query) {
    return this.model.deleteMany(query);
  }

  async findOneAndDelete(query) {
    return this.model.findOneAndDelete(query).exec();
  }
}
