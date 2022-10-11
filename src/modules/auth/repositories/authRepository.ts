import { Model } from "mongoose";

export class UsersRepository {
  private repository: Model<any>;

  constructor(repository: Model<any>) {
    this.repository = repository;
  }

  findById(): any {}
  findByEmail(): any {}
  resetPassword(): any {}
}
