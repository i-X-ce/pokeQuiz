import { quizQuestion } from "./quizQuestion.js";

export class quizManager {
    private currentQuestinIndex: number = 0;
    private score: number = 0;
    private questions: quizQuestion[];

    constructor(quiestions: quizQuestion[]){
        this.questions = quiestions;
    }

    getQuestions(): quizQuestion[] {
        return this.questions;
    }

    getCurrentQuestion(): quizQuestion {
        return this.questions[this.currentQuestinIndex];
    }

    checkAnswer(choiceIndex: number): boolean {
        const currentQuestion = this.questions[this.currentQuestinIndex];
        currentQuestion.selectedAnswer = choiceIndex;
        const correct = currentQuestion.correctAnswer === choiceIndex;
        if (correct){
            this.score++;
            currentQuestion.isCorrect = true;
        }
        // this.currentQuestinIndex++;
        return correct;
    }

    isQuizOver(): boolean {
        return this.currentQuestinIndex >= this.questions.length;
    }

    getScore(): number {
        return this.score;
    }

    stepQuestion() {
        this.currentQuestinIndex++;
    }
}