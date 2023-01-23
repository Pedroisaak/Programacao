import mongoose from "mongoose";
import { encryptPassword } from "../service/userService";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  is_Admin: { type: Boolean, default: false }

},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
UserSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await encryptPassword(this.password);
    return next();
  } catch (err: any) {
    return next(err);
  }
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self: any = this
  try {
    if (self._update.password) {
      const hashed = await encryptPassword(self._update.password)
      self._update.password = hashed
    }
    next()
  } catch (err: any) {
    return next(err)
  }
})


const UserModel = mongoose.model("User", UserSchema);
export { UserModel };