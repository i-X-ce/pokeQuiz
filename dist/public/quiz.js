// import { QuizManager } from "./QuizManager.js";
// import { QuizQuestion } from "./QuizQuestion.js";
// // import { quizQuestions } from "./QuizQuestion.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { quizManager } from "./quizManager.js";
import { quizQuestion } from "./quizQuestion.js";
// // const quiz = new Quiz(quizQuestions);
// let quiz: QuizManager;
let qm;
function gid(id) {
    return document.getElementById(id);
}
function getQuizzes() {
    return __awaiter(this, void 0, void 0, function* () {
        let quizList = [];
        try {
            const response = yield fetch('/api/quizGetAll'); // Fetch data from the server
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`); // Check for HTTP errors
            }
            const jsonQuizzes = yield response.json(); // Convert response to JSON
            jsonQuizzes.forEach((temp) => {
                const addQ = new quizQuestion(temp); // Create a new quizQuestion instance
                quizList.push(addQ); // Add it to the quizList
            });
            qm = new quizManager(quizList); // Assuming quizManager takes the quizList
        }
        catch (error) {
            console.error("Error adding question:", error); // Log the error
        }
    });
}
function renderQuestion() {
    const question = qm.getCurrentQuestion();
    gid("question-text").textContent = question.getQuestion();
    const choicesContainer = gid("choices-container");
    choicesContainer.innerHTML = "";
    question.getChoices().forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            qm.checkAnswer(index);
            if (qm.isQuizOver()) {
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
    document.getElementById("quiz-container").innerHTML = `SCORE: ${qm.getScore()}`;
}
// async function fetchQuizzes() {
//     const response = await fetch('http://127.0.0.1:5501/quizzes');
//     const quizzes = await response.json();
//     return quizzes;
// }
function initializeApp() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getQuizzes();
        renderQuestion();
    });
}
// // renderQuestion();
window.addEventListener('DOMContentLoaded', initializeApp);
// // window.addEventListener('DOMContentLoaded', displayQuizzes);
