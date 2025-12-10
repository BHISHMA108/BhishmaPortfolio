import express from 'express';
import formRoutes from './routes/formRoute.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// Allow all origins (or restrict to your frontend URL)
app.use(cors());
app.use(express.json());

app.use('/api', formRoutes);

// DB connection
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log("DB Error:", err));

// ✅ Render requires this
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔱💗 Server running on port ${PORT} 💗🔱`);
});

export default app;
