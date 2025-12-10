import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  phone: { type: String, required: true, match: /^[0-9]{10}$/ },
  email: { type: String, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  message: { type: String, required: true, minlength: 10 }
}, { timestamps: true });

const FormModel = mongoose.model("users", formSchema);

export default FormModel;
