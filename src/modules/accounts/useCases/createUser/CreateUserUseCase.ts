import { IUsersRepository } from "../../repositories/IUsersRepository";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Irequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ name, email, password }: Irequest): void {
    const userAlreadyExists = this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User already exist");
    }

    this.usersRepository.create({ name, email, password });
  }
}

export { CreateUserUseCase };
