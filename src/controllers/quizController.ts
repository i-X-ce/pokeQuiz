import { Request, Response } from "express";
import Quiz from "../models/quizModel.js";

export const getAllQuestions = async (req: Request, res: Response) => {
    try {
        const questions = await Quiz.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching questions' });
    }
};

export const addQuiz = async (req: Request, res: Response) => {
    const newQuestion = new Quiz(req.body);
    try {
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (erorr) {
        res.status(500).json({ message: 'Error adding question' });
    }
};

// 回答数と正答数をアップデートする
export const updateCnt = async (req: Request, res: Response) => {
    try {
        const updateQuestion = await Quiz.findByIdAndUpdate(
            req.body.id,
            { $inc: { answerCnt: 1, correctCnt: req.body.addCorrect }},
            { new: true }
        );
        console.log('Update quiz:', updateQuestion);
    } catch (error) {
        console.error('Error incrementing quiz cnt:', error);
    }
};