export class quizManager {
    constructor(quiestions) {
        this.currentQuestinIndex = 0;
        this.score = 0;
        this.questions = quiestions;
    }
    getQuestions() {
        return this.questions;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestinIndex];
    }
    checkAnswer(chiceIndex) {
        const currentQuestion = this.questions[this.currentQuestinIndex];
        const correct = currentQuestion.correctAnswer === chiceIndex;
        if (correct) {
            this.score++;
            currentQuestion.isCorrect = true;
        }
        // this.currentQuestinIndex++;
        return correct;
    }
    isQuizOver() {
        return this.currentQuestinIndex >= this.questions.length;
    }
    getScore() {
        return this.score;
    }
    stepQuestion() {
        this.currentQuestinIndex++;
    }
}
