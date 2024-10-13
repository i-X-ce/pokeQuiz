import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import quizRouter from './routes/quizRouter.js'
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

mongoose.connect(process.env.MONGO_QUESTIONS_URL as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("MongoDB connection error:", err));

app.use(express.json());

app.use('/api', quizRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`);
});