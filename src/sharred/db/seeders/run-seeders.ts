require("dotenv").config();
import logger from "../../services/logger";
import { MongoHelper } from "../mongoDb";
import AboutUsSeeder from "./aboutUs.seeder";
import ContactUsSeeder from "./contactUs.seeder";
import MissionSeeder from "./mission.seeder";
import PortfolioSeeder from "./portfolio.seeder";
import TestmonialSeeder from "./testmonial.seeder";
import UsersSeeder from "./users.seeder.seeder";


const seeders = [
  AboutUsSeeder,
  ContactUsSeeder,
  MissionSeeder,
  PortfolioSeeder,
  TestmonialSeeder,
  UsersSeeder

];

const rundSeeders = async () => {
  try {
    await MongoHelper.connect();

    for await (const seeder of seeders) {
      const seederInstance = new seeder();
      logger.info('-'.repeat(50));
      logger.info(`Start Running seeder ${seeder.name}`);
      const shouldRun = await seederInstance.shouldRun();
      if (shouldRun) {
        await seederInstance.run();
      } else {
        logger.warn(`${seeder.name} has data, skipping`);
      }
      logger.info(`Finish Running seeder ${seeder.name}`);
    }
    await MongoHelper.disconnect();
  } catch (error) {
    logger.error(error);
  }
};

rundSeeders()
  .then(() => {
    logger.info('-'.repeat(50));
    logger.info("Seeders finished!");
    process.exit(0);
  })
  .catch((error) => {
    logger.error(error);
  });
