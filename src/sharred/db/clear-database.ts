require("dotenv").config();
import logger from "../services/logger";
import { MongoHelper } from "./mongoDb";

const ENV = process.env.NODE_ENV || "development";
const clearDatabase = async () => {
  if (!["development", "test", "dev"].includes(ENV)) {
    logger.error("You can only clear the database in test mode");
    process.exit(0);
  }

  await MongoHelper.connect();
  try {
    await MongoHelper.dropDatabase();
  } catch (error) {
    logger.error(error);
  }

  await MongoHelper.disconnect();
};

clearDatabase()
  .then(() => {
    logger.info("-".repeat(50));
    logger.info("Clear database finished!");

    process.exit(0);
  })
  .catch((error) => {
    logger.error(error);
  });
