export class QuizQuestion {
    constructor(quiz) {
        this.question = quiz.question;
        this.choices = quiz.choices;
        this.correctAnswer = quiz.correctAnswer;
        this.imageUrl = quiz.imageUrl;
        this.answerCnt = quiz.answerCnt;
        this.correctCnt = quiz.correctCnt;
    }
    getChoices() {
        return this.choices;
    }
    getQuestion() {
        return this.question;
    }
    getCorrectAnswer() {
        return this.correctAnswer;
    }
}
// export const quizQuestions: QuizQuestion[] = [
//     {
//         question: "リザードンの姿をした終端を示すバグポケモンといえば？",
//         chices: ["アネデパミ", "けつばん", "ア", "アオ"],
//         correctAnswer: 0,
//     },
//     {
//         question: "けつばんの図鑑番号は何番？",
//         chices: ["152", "100", "99", "255"],
//         correctAnswer: 0,
//     },
//     {
//         question: "リザードンの姿をした終端を示すバグポケモンといえば？",
//         chices: ["アネデパミ", "けつばん", "ア", "アオ"],
//         correctAnswer: 0,
//     },
//     {
//         question: "けつばんの図鑑番号は何番？",
//         chices: ["152", "100", "99", "255"],
//         correctAnswer: 0,
//     },
//     {
//         question: "リザードンの姿をした終端を示すバグポケモンといえば？",
//         chices: ["アネデパミ", "けつばん", "ア", "アオ"],
//         correctAnswer: 0,
//     },
//     {
//         question: "けつばんの図鑑番号は何番？",
//         chices: ["152", "100", "99", "255"],
//         correctAnswer: 0,
//     },
//     {
//         question: "リザードンの姿をした終端を示すバグポケモンといえば？",
//         chices: ["アネデパミ", "けつばん", "ア", "アオ"],
//         correctAnswer: 0,
//     },
//     {
//         question: "けつばんの図鑑番号は何番？",
//         chices: ["152", "100", "99", "255"],
//         correctAnswer: 0,
//     },
// ]
