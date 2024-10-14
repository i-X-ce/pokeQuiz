var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { gid } from "./common.js";
import { quizManager } from "./quizManager.js";
import { quizQuestion } from "./quizQuestion.js";
let qm;
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
    gid("question-text").textContent = question.question;
    gid("description").textContent = "";
    const choicesContainer = gid("choices-container");
    choicesContainer.innerHTML = "";
    const collors = ["red", "green", "blue", "yellow"];
    question.choices.forEach((choice, index) => {
        const button = document.createElement("div");
        button.textContent = choice;
        button.classList.add(`bc-${collors[index % collors.length]}`, "choice");
        button.addEventListener("click", () => {
            if (qm.getCurrentQuestion().isAnswer)
                return;
            qm.getCurrentQuestion().isAnswer = true;
            qm.checkAnswer(index);
            gid('description').innerText = qm.getCurrentQuestion().discription;
        });
        choicesContainer.appendChild(button);
    });
}
function showFinalScore() {
    gid("result-container").style.display = "flex";
    gid("score").innerHTML = `SCORE: ${qm.getScore()}`;
    gid("quiz-container").style.display = "none";
    qm.getQuestions().forEach(question => {
        const addCorrect = question.isCorrect ? 1 : 0;
        fetch('/api/quizUpdateCnt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // 必要なヘッダー
            },
            body: JSON.stringify({
                id: question.id,
                addCorrect: addCorrect
            })
        });
    });
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
gid('next').addEventListener('click', _ => {
    qm.stepQuestion();
    if (qm.isQuizOver()) {
        showFinalScore();
    }
    else {
        renderQuestion();
    }
});
// // renderQuestion();
window.addEventListener('DOMContentLoaded', initializeApp);
// // window.addEventListener('DOMContentLoaded', displayQuizzes);
