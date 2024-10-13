import mongoose from "mongoose";
import { quizSchema } from "../models/quizModel.js";
import express from "express";

const router = express.Router();
const Question = mongoose.model('Question', quizSchema);

router.get('/quizGetAll', async (req: any, res: any) => {
    try {
        const questions = await Question.find({});
        return res.send(questions);
    } catch{
        console.error("Error fetching questions");
    }
});

export default router;
