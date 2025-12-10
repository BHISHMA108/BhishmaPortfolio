import express from "express";
import formController from "../controllers/formController.js";

const router = express.Router();

router.post("/form", formController);

export default router;
