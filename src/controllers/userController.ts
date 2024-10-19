import { Request, Response } from "express";
import User from "../models/userModel.js"
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
    const hasshedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hasshedPassword;
    const newUser = new User(req.body);
    
    try {
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error: any) {
        if (error.code === 11000){
            console.error('このIDは既に使用されています。');
            res.status(500).json({ message: 'Error adding id'});
        }else{
            res.status(500).json({ message: 'Error adding user'});
        }
    }
}

export const login = async (req: Request, res: Response) => {
    const id = req.body.id;
    const user = await User.findOne({ id });

    try {
        const isMatch = await bcrypt.compare(req.body.password, user?.password as string);
        if (isMatch) {
            console.log('Successful login');
        } else {
            console.log('Login Failure');
        }
        res.status(201).json({isMatch: isMatch});
    } catch (error) {
        console.log('Wrong ID or password');
        res.status(500).json({ message: 'ログインエラー' });
    }
}