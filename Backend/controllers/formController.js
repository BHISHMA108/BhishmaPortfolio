import FormModel from "../models/formModel.js";

export default async function formController(req, res) {
  const { name, phone, email, message } = req.body;

  // Validation
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    return res.status(400).json({ error: "Phone number must be 10 digits" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email" });
  }

  if (message.length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters" });
  }

  if (typeof name !== "string" || name.length < 2 || name.length > 50) {
    return res.status(400).json({ error: "Name must be 2–50 characters long" });
  }

  try {
    const newForm = await FormModel.create({ name, phone, email, message });
    console.log("Form Submitted Successfully:", newForm);

    return res.status(200).json({
      message: "Form Submitted Successfully",
      payload: newForm
    });
  } catch (err) {
    console.error("Error saving form:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
