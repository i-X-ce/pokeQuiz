import { gid } from "./common.js";
import { quizManager } from "./quizManager.js";
import { quizQuestion } from "./quizQuestion.js";

let qm: quizManager;

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
    gid("question-text")!.textContent = question.question;
    gid("description")!.textContent = "";

    const choicesContainer = gid("choices-container")!;
    choicesContainer.innerHTML = "";
    question.choices.forEach((choice: string | null, index: number) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            if (qm.getCurrentQuestion().isAnswer) return;
            qm.getCurrentQuestion().isAnswer = true;
            qm.checkAnswer(index);
            gid('description')!.innerText = qm.getCurrentQuestion().discription;
                
        });
        choicesContainer.appendChild(button);
    });
}

function showFinalScore(){
    document.getElementById("quiz-container")!.innerHTML = `SCORE: ${qm.getScore()}`;
    qm.getQuestions().forEach(question => { // 正答数のアップデート
        const addCorrect: number = question.isCorrect ? 1 : 0;
        fetch('/api/quizUpdateCnt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // 必要なヘッダー
            },
            body: JSON.stringify({ 
                id: question.id,
                addCorrect: addCorrect
            })
        })
    });
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

gid('next')!.addEventListener('click', _ => { 
    qm.stepQuestion();
    if (qm.isQuizOver()) {
        showFinalScore();
    } else {
        renderQuestion();
    }
});

// // renderQuestion();
window.addEventListener('DOMContentLoaded', initializeApp);
// // window.addEventListener('DOMContentLoaded', displayQuizzes);

