import mongoose, { Collection } from "mongoose";

export const MongoHelper = {
  client: null,
  uri: null,
  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await mongoose.createConnection(uri, {}).asPromise();
  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
  },

  getConnectionState() {
    return mongoose.STATES[mongoose.connection.readyState]
  },

  async getCollection(name: string): Promise<Collection> {
    if (this.getConnectionState() !== 'connected') await this.connect(this.uri);
    return this.client.collection(name);
  },

  mapper: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection;
    return { id: _id, ...collectionWithoutId };
  },
};
