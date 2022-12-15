// @ts-ignore
import { AboutUsModel } from "../../../modules/aboutUs/model/AboutUs";
import Seeder from "./seeder";

import { faker } from '@faker-js/faker'

const SEED_NUMBER = 100;
const data = Array.from({ length: SEED_NUMBER }, () => ({
  title: faker.name.jobTitle(),
  description: faker.commerce.productDescription()
}));

class AboutUsSeeder extends Seeder {
  async shouldRun() {
    return AboutUsModel.countDocuments()
      .exec()
      .then((count: any) => count === 0);
  }

  async run() {
    return AboutUsModel.create(data);
  }
}

export default AboutUsSeeder;
