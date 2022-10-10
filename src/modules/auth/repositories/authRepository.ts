import { User } from "../model/Auth";

class AuthRepository {
  private users: any; //Iria criar o DTO do repositório, mas não existe tal tarefa

  private constructor() {
    this.users = [];
  }
  create({ email, password }: any): void {
    const user = new User();

    Object.assign(user, {
      email,
      password,
      created_at: new Date(),
    });

    this.users.push(user);
  }
}
export { AuthRepository };
