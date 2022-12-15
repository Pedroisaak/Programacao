import mongoose from "mongoose";

const TestmonialsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  asset: { type: String, require: true }
},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const TestmonialsModel = mongoose.model("Testmonials", TestmonialsSchema);
export { TestmonialsModel };