import { gid, gcl } from "./common.js";
import { quizManager } from "./quizManager.js";
import { quizQuestion } from "./quizQuestion.js";

let qm: quizManager;
let styleSheet = document.styleSheets[0];
toggleVisibility("end-appear", false);

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
    toggleVisibility('choice-appear', false);

    gid("title")!.innerText = question.title;
    gid("question-user")!.innerText = question.userName;
    gid("question-percentage")!.innerText = (100 * question.correctCnt / question.answerCnt).toFixed(1) + "%";
    gid("question-score")!.innerText = qm.getScore().toFixed(0);
    const choicesContainer = gid("choices-container")!;
    choicesContainer.innerHTML = "";
    const collors = ["red", "green", "blue", "yellow"];
    question.choices.forEach((choice: string | null, index: number) => {
        const button = document.createElement("div");
        button.textContent = choice;
        button.classList.add(`choice-${collors[index % collors.length]}`, "choice");
        button.addEventListener("click", () => {
            if (qm.getCurrentQuestion().isAnswer) return;
            const currentQuestion = qm.getCurrentQuestion();
            currentQuestion.isAnswer = true;
            const iscorrect = qm.checkAnswer(index);
            toggleVisibility('choice-appear', true);
            gid('description')!.innerText = currentQuestion.description;
            gid('iscorrect')!.className = iscorrect ? "corrected" : "incorrected";
            gid("question-score")!.innerText = qm.getScore().toFixed(0);
            gid("answer")!.innerHTML = `答えは「${currentQuestion.choices[currentQuestion.correctAnswer]}」!`;
        });
        choicesContainer.appendChild(button);
    });
}

function showFinalScore(){
    toggleVisibility("end-disappears", false);
    toggleVisibility("end-appear", true);
    gid("title")!.innerText = "結果発表";
    gid("score")!.innerHTML = `${qm.getScore()}/${qm.getQuestions().length}`;
    let tempDt = $('#past-questions-container').find('dt').first().clone();
    let tempDd = $('#past-questions-container').find('dd').first().clone();
    $('#past-questions-container').find('dt').remove();
    $('#past-questions-container').find('dd').remove();

    qm.getQuestions().forEach((question, index) => { 
        const addCorrect: number = question.isCorrect ? 1 : 0; // 正答数のアップデート
        fetch('/api/quizUpdateCnt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // 必要なヘッダー
            },
            body: JSON.stringify({ 
                id: question.id,
                addCorrect: addCorrect
            })
        });

        // 解いた問題を下に表示させる
        let pastDt = tempDt.clone();
        let pastDD = tempDd.clone();
        pastDt.find('.past-question-number').text(index + 1);
        if (question.isCorrect) pastDt.find('.icon-x').remove();
        else pastDt.find('.icon-o').remove();
        pastDt.find('.past-question-title').text(question.title);
        pastDt.find('.past-question-title').text()
        pastDD.find('.past-your-answer').text(question.choices[question.selectedAnswer]);
        pastDD.find('.past-correct-answer').text(question.choices[question.correctAnswer]);
        pastDD.find('.past-answer-description').text(question.description);
        $('#past-questions-container').append(pastDt);
        $('#past-questions-container').append(pastDD);
    });

    let script = document.createElement('script');
    script.src = "./js/according.js"; script.type = "text/javascript";
    document.head.appendChild(script);
}

function toggleVisibility(className: string, toggle: boolean){
    if (toggle) $(`.${className}`).fadeIn(250);
    else $(`.${className}`).fadeOut(0);
}

async function initializeApp() {
    await getQuizzes();
    renderQuestion();
}

gid('next')!.addEventListener('click', _ => { 
    if (!qm.getCurrentQuestion().isAnswer) return;
    qm.stepQuestion();
    if (qm.isQuizOver()) {
        showFinalScore();
    } else {
        renderQuestion();
    }
});

window.addEventListener('DOMContentLoaded', initializeApp);
