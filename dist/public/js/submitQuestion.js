var _a;
import { gid } from "./common.js";
(_a = gid('question-submit-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', () => {
    const question = gid('question').value;
    const choices1 = gid('choices1').value;
    const choices2 = gid('choices2').value;
    const description = gid('description').value;
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
        headers: {
            'Content-Type': 'application/json', // 必要なヘッダー
        },
        body: JSON.stringify(newQuestion)
    });
});
