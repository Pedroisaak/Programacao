// @ts-ignore
import { PortfolioModel } from "../../../modules/portfolio/model/Portfolio";
import Seeder from "./seeder";

import { faker } from '@faker-js/faker'

const SEED_NUMBER = 100;
const data = Array.from({ length: SEED_NUMBER }, () => ({
  title: faker.name.jobTitle(),
  asset: faker.lorem.words(),
  url: faker.internet.url()
}));

class PortfolioSeeder extends Seeder {
  async shouldRun() {
    return PortfolioModel.countDocuments()
      .exec()
      .then((count: any) => count === 0);
  }

  async run() {
    return PortfolioModel.create(data);
  }
}

export default PortfolioSeeder;
