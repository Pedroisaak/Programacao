import mongoose from "mongoose";

const AboutUsShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const AboutUsModel = mongoose.model("AboutUs", AboutUsShema);
export { AboutUsModel };