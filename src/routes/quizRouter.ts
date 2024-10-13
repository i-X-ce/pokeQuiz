import express from "express";
import { addQuiz, getAllQuestions, updateCnt } from "../controllers/quizController.js";
import { createUser, login } from "../controllers/userController.js";

const router = express.Router();

router.get('/quizGetAll', getAllQuestions);
router.post('/quizAdd', addQuiz);
router.post('/quizUpdateCnt', updateCnt)
router.post('/createUser', createUser);
router.post('/login', login);

export default router;