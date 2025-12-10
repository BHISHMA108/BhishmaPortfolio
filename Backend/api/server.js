import express from 'express';
import formRoutes from '../routes/formRoute.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// Allow all origins on serverless (or specify your domain)
app.use(cors());
app.use(express.json());

app.use('/api', formRoutes);

// DB connection
const MONGO_URI = process.env.MONGO_URI;

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log("DB Error:", err));
}

// ❌ DO NOT USE app.listen()
// ❌ Serverless functions can't listen on a port

export default app;
