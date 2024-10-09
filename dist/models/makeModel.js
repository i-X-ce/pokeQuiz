const { Schema } = require('mongoose');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_QUESTIONS_URL);

const quizSchema = new Schema({
    question: String,
    choices: [String],
    correctAnswer: Number,
    imageUrl: String,
    answerCnt: Number,
    correctCnt: Number
});

const Question = mongoose.model('Question', quizSchema);

const newQuestion = new Question({
    question: "TypeScriptはどのような言語ですか？",
    choices: ["動的型付け", "静的型付け", "どちらでもない"],
    correctAnswer: 1,
    imageUrl: "https://example.com/image.png",
    answerCnt: 3,
    correctCnt: 1,
});

newQuestion.save()
    .then(() => console.log('Question saved!'))
    .catch(() => console.error('Error', err))