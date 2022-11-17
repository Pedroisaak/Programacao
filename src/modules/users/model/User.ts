import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  created_at: { type: Date },
  is_Admin: { type: Boolean }
});

UserShema.pre('save', function (next) {
  const now = new Date();
  this.is_Admin = false
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

const UserModel = mongoose.model("User", UserShema);
export { UserModel };