var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Quiz from "../models/quizModel.js";
export const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield Quiz.find();
        res.json(questions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching questions' });
    }
});
export const addQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newQuestion = new Quiz(req.body);
    try {
        const savedQuestion = yield newQuestion.save();
        res.status(201).json(savedQuestion);
    }
    catch (erorr) {
        res.status(500).json({ message: 'Error adding question' });
    }
});
