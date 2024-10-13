import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "./quizModel.js";

dotenv.config();
mongoose.connect(process.env.MONGO_QUESTIONS_URL as string)
    .then(() => {
        console.log('MongoDB connected successfully');
        console.log(process.env.MONGO_QUESTIONS_URL);
    })
    .catch(() => {
        console.error('MongoDB connection error');
    });

const newQuestion = new Quiz({
    question: "TypeScriptはどのような言語ですか？",
    choices: ["動的型付け", "静的型付け", "どちらでもない"],
    correctAnswer: 1,
    imageUrl: "https://example.com/image.png",
    answerCnt: 3,
    correctCnt: 1,
});

newQuestion.save()
    .then(() => {
        console.log('Question saved!');
        mongoose.disconnect();
    })
    .catch((err: any) => console.error('Error', err))

