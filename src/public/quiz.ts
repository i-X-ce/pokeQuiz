// import { QuizManager } from "./QuizManager.js";
// import { QuizQuestion } from "./QuizQuestion.js";
// // import { quizQuestions } from "./QuizQuestion.js";

import { quizManager } from "./quizManager.js";
import { quizQuestion } from "./quizQuestion.js";


// // const quiz = new Quiz(quizQuestions);
// let quiz: QuizManager;
let qm: quizManager;

function gid(id: string) {
    return document.getElementById(id);
}

async function getQuizzes() {
    let quizList: quizQuestion[] = [];
    
    try {
        const response = await fetch('/api/quizGetAll'); // Fetch data from the server

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // Check for HTTP errors
        }

        const jsonQuizzes = await response.json(); // Convert response to JSON

        jsonQuizzes.forEach((temp: quizQuestion) => {
            const addQ = new quizQuestion(temp); // Create a new quizQuestion instance
            quizList.push(addQ); // Add it to the quizList
        });

        qm = new quizManager(quizList); // Assuming quizManager takes the quizList
    } catch (error) {
        console.error("Error adding question:", error); // Log the error
    }
}

function renderQuestion() {
    const question = qm.getCurrentQuestion();
    gid("question-text")!.textContent = question.getQuestion();

    const choicesContainer = gid("choices-container")!;
    choicesContainer.innerHTML = "";
    question.getChoices().forEach((choice: string | null, index: number) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            qm.checkAnswer(index);
            if (qm.isQuizOver()) {
                showFinalScore();
            } else {
                renderQuestion();
            }
        });
        choicesContainer.appendChild(button);
    });
}

function showFinalScore(){
    document.getElementById("quiz-container")!.innerHTML = `SCORE: ${qm.getScore()}`;
}

// async function fetchQuizzes() {
//     const response = await fetch('http://127.0.0.1:5501/quizzes');
//     const quizzes = await response.json();
//     return quizzes;
// }

async function initializeApp() {
    await getQuizzes();
    renderQuestion();
}
// // renderQuestion();
window.addEventListener('DOMContentLoaded', initializeApp);
// // window.addEventListener('DOMContentLoaded', displayQuizzes);

