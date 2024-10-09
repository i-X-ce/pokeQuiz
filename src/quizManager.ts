import { quizQuestion } from "./quizQuestion";

export class quizManager {
    private currentQuestinIndex: number = 0;
    private score: number = 1;
    private questions: quizQuestion[];

    constructor(quiestions: quizQuestion[]){
        this.questions = quiestions;
    }

    getCurrentQuestion(): quizQuestion {
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