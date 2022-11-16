import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  asset: { type: String, required: true },
  url: { type: String, require: true}
});

const PortfolioModel = mongoose.model("Portfolio", PortfolioSchema);
export { PortfolioModel };