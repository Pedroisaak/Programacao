// @ts-ignore
import { TestmonialsModel } from "../../../modules/testmonials/model/Testmonials";
import Seeder from "./seeder";

import { faker } from '@faker-js/faker'

const SEED_NUMBER = 100;
const data = Array.from({ length: SEED_NUMBER }, () => ({
  name: faker.name.fullName(),
  description: faker.commerce.productDescription(),
  asset: faker.lorem.word()
}));

class TestmonialSeeder extends Seeder {
  async shouldRun() {
    return TestmonialsModel.countDocuments()
      .exec()
      .then((count: any) => count === 0);
  }

  async run() {
    return TestmonialsModel.create(data);
  }
}

export default TestmonialSeeder;
