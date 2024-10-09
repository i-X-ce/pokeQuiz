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
    correctAnswer: Number,
    imageUrl: String,
    correctRate: Number
});

const Quiz = mongoose.model('Quiz', quizSchema);

app.use(express.json());

app.get('/quizzes', async (req, res) => {
    const quizzes = await Quiz.find();
    res.json(quizzes);
});

app.post('/quizzes', async(req, res) => {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.json(newQuiz);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
