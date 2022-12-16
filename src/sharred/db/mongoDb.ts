import mongoose from "mongoose";
import logger from "../services/logger";

const DEFAULT_MONGO_URL = process.env.MONGO_URL || "";

export const MongoHelper = {
  client: null as any,
  uri: null as any,

  async connect(uri = DEFAULT_MONGO_URL): Promise<void> {
    try {
      await mongoose.connect(uri, {});
      logger.info("MongoDB connected");
    } catch (error) {
      console.log(error);
    }
  },

  async disconnect(): Promise<void> {
    mongoose.connection.close(false, () => {
      logger.info("MongoDb connection closed.");
    });
    this.client = null;
  },

  async clearDatabase(): Promise<void> {
    const collections = mongoose.connection.collections;
    console.log('here', mongoose.connection)
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
      logger.info(`Collection ${collection.collectionName} cleared`);
    }
  },

  async dropDatabase(): Promise<void> {
    await mongoose.connection.dropDatabase();
    logger.info("Database dropped");
  },

  getConnectionState() {
    return mongoose.STATES[mongoose.connection.readyState];
  },

  mapper: (collection: any): any => {
    const {
      _doc: { _id, __v, ...collectionWithoutId },
    } = collection;
    return { id: _id, ...collectionWithoutId };
  },
};
