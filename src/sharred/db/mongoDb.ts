import mongoose, { Collection, Connection, Schema } from "mongoose";
import logger from "../services/logger";

const DEFAULT_MONGO_URL = process.env.MONGO_URL || "";

export const MongoHelper = {
  client: null,
  uri: null,

  async connect(uri = DEFAULT_MONGO_URL): Promise<void> {
    try {
      await mongoose.connect(uri, {});
      logger.info('MongoDB connected')
    } catch (error) {
      console.log(error)
    }
  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
  },

  getConnectionState() {
    return mongoose.STATES[mongoose.connection.readyState];
  },

  mapper: (collection: any): any => {
    const { _doc: { _id, __v, ...collectionWithoutId } } = collection;
    return { id: _id, ...collectionWithoutId };
  },
};
