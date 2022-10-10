import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", AuthSchema);

class Login {
  constructor() {}

  async login() {}

  async register() {}

  async userExists() {}

  validatedUser() {}
}

export { Login };
