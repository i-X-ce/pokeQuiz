export class quizManager {
    constructor(quiestions) {
        this.currentQuestinIndex = 0;
        this.score = 0;
        this.questions = quiestions;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestinIndex];
    }
    checkAnswer(chiceIndex) {
        const correct = this.questions[this.currentQuestinIndex].getCorrectAnswer() === chiceIndex;
        if (correct)
            this.score++;
        this.currentQuestinIndex++;
        return correct;
    }
    isQuizOver() {
        return this.currentQuestinIndex >= this.questions.length;
    }
    getScore() {
        return this.score;
    }
}
