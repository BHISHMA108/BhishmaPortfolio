import express from  'express';
import formRoutes from './routes/formRoute.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // frontend origin
  methods: ['GET','POST'],
}));
app.use(express.json());

app.use('/api',formRoutes);


const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ The Database Portfolio_Users connected successfully"))
  .catch((err) => console.log("❌ Error in DB connection", err));

app.listen(PORT, ()=>{
    console.log(`🔱💗 The server is running on the port ${PORT}💗🔱`);
})