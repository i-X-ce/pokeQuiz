// import { QuizManager } from "./QuizManager.js";
// import { QuizQuestion } from "./QuizQuestion.js";
// // import { quizQuestions } from "./QuizQuestion.js";


// // const quiz = new Quiz(quizQuestions);
// let quiz: QuizManager;

// function gid(id: string) {
//     return document.getElementById(id);
// }

// async function getQuizzes() {
//     let quizList: QuizQuestion[] = [];
//     const jsonQuizzes = await fetchQuizzes();
//     {
//         jsonQuizzes.forEach((temp: QuizQuestion) => {
//             const addQ = new QuizQuestion(temp);
//             quizList.push(addQ);
//         });
//     }
//     quiz = new QuizManager(quizList);
// }

// function renderQuestion() {
//     const question = quiz.getCurrentQuestion();
//     gid("question-text")!.textContent = question.getQuestion();

//     const choicesContainer = gid("choices-container")!;
//     choicesContainer.innerHTML = "";
//     question.getChoices().forEach((choice: string | null, index: number) => {
//         const button = document.createElement("button");
//         button.textContent = choice;
//         button.addEventListener("click", () => {
//             quiz.checkAnswer(index);
//             if (quiz.isQuizOver()) {
//                 showFinalScore();
//             } else {
//                 renderQuestion();
//             }
//         });
//         choicesContainer.appendChild(button);
//     });
// }

// function showFinalScore(){
//     document.getElementById("quiz-container")!.innerHTML = `SCORE: ${quiz.getScore()}`;
// }

// async function fetchQuizzes() {
//     const response = await fetch('http://127.0.0.1:5501/quizzes');
//     const quizzes = await response.json();
//     return quizzes;
// }

// async function initializeApp() {
//     await getQuizzes();
//     renderQuestion();
// }
// // renderQuestion();
// window.addEventListener('DOMContentLoaded', initializeApp);
// // window.addEventListener('DOMContentLoaded', displayQuizzes);

