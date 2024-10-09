var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Quiz } from "./Quiz.js";
import { QuizQuestion } from "./QuizQuestion.js";
// import { quizQuestions } from "./QuizQuestion.js";
// const quiz = new Quiz(quizQuestions);
let quiz;
function gid(id) {
    return document.getElementById(id);
}
function getQuizzes() {
    return __awaiter(this, void 0, void 0, function* () {
        let quizList = [];
        const jsonQuizzes = yield fetchQuizzes();
        {
            jsonQuizzes.forEach((temp) => {
                const addQ = new QuizQuestion(temp);
                quizList.push(addQ);
            });
        }
        quiz = new Quiz(quizList);
    });
}
function renderQuestion() {
    const question = quiz.getCurrentQuestion();
    gid("question-text").textContent = question.getQuestion();
    const choicesContainer = gid("choices-container");
    choicesContainer.innerHTML = "";
    question.getChoices().forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            quiz.checkAnswer(index);
            if (quiz.isQuizOver()) {
                showFinalScore();
            }
            else {
                renderQuestion();
            }
        });
        choicesContainer.appendChild(button);
    });
}
function showFinalScore() {
    document.getElementById("quiz-container").innerHTML = `SCORE: ${quiz.getScore()}`;
}
function fetchQuizzes() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://127.0.0.1:5501/quizzes');
        const quizzes = yield response.json();
        return quizzes;
    });
}
function initializeApp() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getQuizzes();
        renderQuestion();
    });
}
// renderQuestion();
window.addEventListener('DOMContentLoaded', initializeApp);
// window.addEventListener('DOMContentLoaded', displayQuizzes);
