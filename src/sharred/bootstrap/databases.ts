import { MongoHelper } from "../db/mongoDb"
import logger from '../services/logger'

export default async function setupDatabases() {
    await MongoHelper.connect()
}