import mongoose from "mongoose";

const ContactUsShema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },

});

const ContactUsModel = mongoose.model("ContactUs", ContactUsShema);
export { ContactUsModel };