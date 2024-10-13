export class quizQuestion{
    private _id: string;
    private _question: string;
    private _choices: string[];
    private _correctAnswer: number;
    private _imageUrl: string;
    private _answerCnt: number;
    private _correctCnt: number;
    private _isCorrect: boolean = false;
    private _description: string;
    private _isAnswer: boolean = false;

    constructor(quiz: any){
        this._id = quiz._id;
        this._question = quiz.question;
        this._choices = quiz.choices;
        this._correctAnswer = quiz.correctAnswer;
        this._imageUrl = quiz.imageUrl;
        this._answerCnt = quiz.answerCnt;
        this._correctCnt = quiz.correctCnt;
        this._description = quiz.description;
    }

    get id(){
        return this._id;
    }

    get choices(){
        return this._choices;
    }

    get question(){
        return this._question;
    }

    get correctAnswer(){
        return this._correctAnswer;
    }

    get answerCnt(){
        return this._answerCnt;
    }

    get isCorrect(){
        return this._isCorrect;
    }

    get discription(){
        return this._description;
    }

    get isAnswer(){
        return this._isAnswer;
    }

    set isCorrect(isCorrect: boolean){
        this._isCorrect = isCorrect;
    }

    set isAnswer(isAnswer: boolean){
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