export class quizQuestion {
    constructor(quiz) {
        this._isCorrect = false;
        this._isAnswer = false;
        this._selectedAnswer = 0;
        this._id = quiz._id;
        this._question = quiz.question;
        this._choices = quiz.choices;
        this._correctAnswer = quiz.correctAnswer;
        this._imageUrl = quiz.imageUrl;
        this._answerCnt = quiz.answerCnt;
        this._correctCnt = quiz.correctCnt;
        this._description = quiz.description;
        this._userName = quiz.userName;
        this._title = quiz.title;
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
    get correctCnt() {
        return this._correctCnt;
    }
    get isCorrect() {
        return this._isCorrect;
    }
    get description() {
        return this._description;
    }
    get isAnswer() {
        return this._isAnswer;
    }
    get userName() {
        return this._userName;
    }
    get title() {
        return this._title;
    }
    get selectedAnswer() {
        return this._selectedAnswer;
    }
    set isCorrect(isCorrect) {
        this._isCorrect = isCorrect;
    }
    set isAnswer(isAnswer) {
        this._isAnswer = isAnswer;
    }
    set selectedAnswer(selectedAnswer) {
        this._selectedAnswer = selectedAnswer;
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
