var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hasshedPassword = yield bcrypt.hash(req.body.password, 10);
    req.body.password = hasshedPassword;
    const newUser = new User(req.body);
    console.log(hasshedPassword);
    try {
        const saveUser = yield newUser.save();
        res.status(201).json(saveUser);
    }
    catch (error) {
        if (error.code === 11000) {
            console.error('このIDは使用できません。');
            res.status(500).json({ message: 'Error adding id' });
        }
        else {
            res.status(500).json({ message: 'Error adding user' });
        }
    }
});
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const user = yield User.findOne({ id });
    try {
        const isMatch = yield bcrypt.compare(req.body.password, user === null || user === void 0 ? void 0 : user.password);
        if (isMatch) {
            console.log('Successful login');
        }
        else {
            console.log('Login Failure');
        }
        res.status(201).json({ isMatch: isMatch });
    }
    catch (error) {
        console.log('Wrong ID or password');
        res.status(500).json({ message: 'ログインエラー' });
    }
});
