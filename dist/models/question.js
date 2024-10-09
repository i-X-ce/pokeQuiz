import { Schema } from "mongoose";
export const quizSchema = new Schema({
    question: String,
    choices: [String],
    correctAnswer: Number,
    imageUrl: String,
    answerCnt: Number,
    correctCnt: Number
});
