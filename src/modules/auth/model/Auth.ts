import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", AuthSchema);

export { LoginModel };
