import { Model } from "mongoose";

export class UsersRepository {
  private repository: Model<any>;

  constructor(repository: Model<any>) {
    this.repository = repository;
  }

  create(): any {}
  update(): any {}
}
