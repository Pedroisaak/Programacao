import { MongoHelper } from "./mongoDb"
import logger from '../helpers/logger'

export default async function setupDatabases() {
    const mongoUrl = process.env.MONGO_URL || ''

    await MongoHelper.connect(mongoUrl)
        .then(() => logger.info('MongoDB connected'))
        .catch(console.error)

}