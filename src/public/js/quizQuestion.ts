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
    private _userName: string;
    private _title: string;
    private _selectedAnswer: number = 0;

    constructor(quiz: any){
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

    get correctCnt(){
        return this._correctCnt;
    }

    get isCorrect(){
        return this._isCorrect;
    }

    get description(){
        return this._description;
    }

    get isAnswer(){
        return this._isAnswer;
    }

    get userName(){
        return this._userName;
    }

    get title(){
        return this._title;
    }

    get selectedAnswer(){
        return this._selectedAnswer;
    }

    set isCorrect(isCorrect: boolean){
        this._isCorrect = isCorrect;
    }

    set isAnswer(isAnswer: boolean){
        this._isAnswer = isAnswer;
    }

    set selectedAnswer(selectedAnswer: number){
        this._selectedAnswer = selectedAnswer
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