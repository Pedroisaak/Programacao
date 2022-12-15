import { UserModel } from "../../../modules/users/model/User";
import Seeder from "./seeder";

import { faker } from '@faker-js/faker'

const SEED_NUMBER = 100;
const data = Array.from({ length: SEED_NUMBER }, () => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}));

class UsersSeeder extends Seeder {
  async shouldRun() {
    return UserModel.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return UserModel.create(data);
  }
}

export default UsersSeeder;
