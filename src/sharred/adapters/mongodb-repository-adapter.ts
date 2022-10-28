import { MongoHelper } from "../db/mongoDb";

export default class MongoDBRepository {
  private readonly collection: any;

  constructor(private readonly collectionName: string) {
    this.collection = new Promise((resolve) =>
      resolve(MongoHelper.getCollection(this.collectionName))
    );
  }

  // FIND
  async find(query) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    const data = collection.find(query);
    return MongoHelper.mapper(data)
  }

  async findOne(query) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    const data = collection.findOne(query);
    return MongoHelper.mapper(data)
  }

  // INSERT
  async insertOne(data) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.insertOne(data)
  }

  async insertMany(data) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.insertMany(data)
  }


  // UPDATE
  async findAndModify(query) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.findAndModify(query);
  }

  async findOneAndReplace(query, data) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.findOneAndReplace(query, data);
  }

  async findOneAndUpdate(query, data) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.findOneAndUpdate(query, data);
  }

  // DELETE
  async deleteOne(query) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.deleteOne(query);
  }

  async deleteMany(query) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.deleteMany(query);
  }

  async findOneAndDelete(query) {
    const collection = await MongoHelper.getCollection(this.collectionName)
    return collection.findOneAndDelete(query);
  }
}
