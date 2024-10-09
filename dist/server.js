"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/quizdb', {
    useNewUrlParse: true,
    useUnifiedTopoplogy: true
});
const quizSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    correctAnswerIndex: Number,
    imageUrl: String,
    correctRate: Number
});
const Quiz = mongoose.model('Quiz', quizSchema);
app.use(express.json());
app.get('/quizzes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quizzes = yield Quiz.find();
    res.json(quizzes);
}));
app.post('/quizzes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newQuiz = new Quiz(req.body);
    yield newQuiz.save();
    res.json(newQuiz);
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
