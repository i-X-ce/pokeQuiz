import { Quiz } from "./Quiz.js";
import { quizQuestions } from "./QuizQuestion.js";
const quiz = new Quiz(quizQuestions);
function gid(id) {
    return document.getElementById(id);
}
function renderQuestion() {
    const question = quiz.getCurrentQuestion();
    gid("question-text").textContent = question.question;
    const choicesContainer = gid("choices-container");
    choicesContainer.innerHTML = "";
    question.chices.forEach((choice, index) => {
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
renderQuestion();
