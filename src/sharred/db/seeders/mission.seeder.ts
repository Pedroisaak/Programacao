// @ts-ignore
import { MissionModel } from "../../../modules/mission/model/Mission";
import Seeder from "./seeder";

import { faker } from '@faker-js/faker'

const SEED_NUMBER = 100;
const data = Array.from({ length: SEED_NUMBER }, () => ({
  title: faker.name.jobTitle(),
  description: faker.commerce.productDescription(),
  asset: faker.lorem.words()
}));


class MissionSeeder extends Seeder {
  async shouldRun() {
    return MissionModel.countDocuments()
      .exec()
      .then((count: any) => count === 0);
  }

  async run() {
    return MissionModel.create(data);
  }
}

export default MissionSeeder;
