import { QuizQuestion } from "./QuizQuestion.js";

export class Quiz {
    private currentQuestinIndex: number = 0;
    private score: number = 0;
    private questions: QuizQuestion[];

    constructor(quiestions: QuizQuestion[]){
        this.questions = quiestions;
    }

    getCurrentQuestion(): QuizQuestion {
        return this.questions[this.currentQuestinIndex];
    }

    checkAnswer(chiceIndex: number): boolean {
        const correct = this.questions[this.currentQuestinIndex].getCorrectAnswer() === chiceIndex;
        if (correct) this.score++;
        this.currentQuestinIndex++;
        return correct;
    }

    isQuizOver(): boolean {
        return this.currentQuestinIndex >= this.questions.length;
    }

    getScore(): number {
        return this.score;
    }
}