import mongoose from "mongoose";

const TestmonialsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  asset: { type: String, require: true}
});

const TestmonialsModel = mongoose.model("Testmonials", TestmonialsSchema);
export { TestmonialsModel };