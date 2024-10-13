import { gid } from "./common.js";

gid('question-submit-form')?.addEventListener('submit', () => {
    const question = (gid('question') as HTMLInputElement).value;
    const choices1 = (gid('choices1') as HTMLInputElement).value;
    const choices2 = (gid('choices2') as HTMLInputElement).value;
    const description = (gid('description') as HTMLInputElement).value;
    const userName = "ア▶イス";

    const newQuestion = ({
        question: question,
        choices: [choices1, choices2],
        correctAnswer: 0,
        answerCnt: 0,
        correctCnt: 0,
        description: description,
        userName: userName
    });
    fetch('api/quizAdd', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',  // 必要なヘッダー
        },
        body: JSON.stringify(newQuestion)
    });
});