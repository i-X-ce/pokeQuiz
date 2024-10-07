export class Quiz {
    constructor(quiestions) {
        this.currentQuestinIndex = 0;
        this.score = 0;
        this.questions = quiestions;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestinIndex];
    }
    checkAnswer(chiceIndex) {
        const correct = this.questions[this.currentQuestinIndex].correctAnswer === chiceIndex;
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
