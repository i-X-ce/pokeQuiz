export class quizQuestion {
    constructor(quiz) {
        this._isCorrect = false;
        this._isAnswer = false;
        this._id = quiz._id;
        this._question = quiz.question;
        this._choices = quiz.choices;
        this._correctAnswer = quiz.correctAnswer;
        this._imageUrl = quiz.imageUrl;
        this._answerCnt = quiz.answerCnt;
        this._correctCnt = quiz.correctCnt;
        this._description = quiz.description;
    }
    get id() {
        return this._id;
    }
    get choices() {
        return this._choices;
    }
    get question() {
        return this._question;
    }
    get correctAnswer() {
        return this._correctAnswer;
    }
    get answerCnt() {
        return this._answerCnt;
    }
    get isCorrect() {
        return this._isCorrect;
    }
    get discription() {
        return this._description;
    }
    get isAnswer() {
        return this._isAnswer;
    }
    set isCorrect(isCorrect) {
        this._isCorrect = isCorrect;
    }
    set isAnswer(isAnswer) {
        this._isAnswer = isAnswer;
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
