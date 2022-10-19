import mongoose from "mongoose";

const AboutUsShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const AboutUsModel = mongoose.model("AboutUs", AboutUsShema);
export { AboutUsModel };