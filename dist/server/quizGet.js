var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import { quizSchema } from "../models/quizModel.js";
import express from "express";
const router = express.Router();
const Question = mongoose.model('Question', quizSchema);
router.get('/quizGetAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield Question.find({});
        return res.send(questions);
    }
    catch (_a) {
        console.error("Error fetching questions");
    }
}));
export default router;
