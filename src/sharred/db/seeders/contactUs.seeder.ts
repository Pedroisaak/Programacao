// @ts-ignore
import { ContactUsModel } from "../../../modules/contactUs/model/ContactUs";
import Seeder from "./seeder";

import { faker } from '@faker-js/faker'

const SEED_NUMBER = 100;
const data = Array.from({ length: SEED_NUMBER }, () => ({
  name: faker.name.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  description: faker.commerce.productDescription()
}));

class ContactUsSeeder extends Seeder {
  async shouldRun() {
    return ContactUsModel.countDocuments()
      .exec()
      .then((count: any) => count === 0);
  }

  async run() {
    return ContactUsModel.create(data);
  }
}

export default ContactUsSeeder;
