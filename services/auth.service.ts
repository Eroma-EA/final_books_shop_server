import {IAuth} from "../intefaces/IAuth";
import {UserService} from "./user.service";
import {IUser} from "../intefaces/IUser";
import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
require('dotenv').config();

export class AuthService{
    async login(user:IAuth){
        try {
            const getUser :IUser | null = await new UserService().getOne(user);
            if (!getUser) {
                throw new Error('Name of user is not correct');
            }
            
            const isMatch = bcrypt.compareSync(user.password, getUser.password);
            if (!isMatch) {
                throw new Error('Password is not correct');
            }

            const token = jwt.sign({ sub: getUser.id }, `${process.env.JWT_ACCESS_SECRET}`, {
                expiresIn: '1h'
            });

            return { user: getUser, token };

        } catch (error) {
            throw error;
        }
    }

    async registration(user:IUser){
        try {
            user.password = await bcrypt.hash(user.password, 10);
            const newUser:IUser = await new UserService().post(user);

            const token = jwt.sign({ sub: newUser.id }, `${process.env.JWT_ACCESS_SECRET}`, { expiresIn: '1h' });

            return {
                user: {
                    ...newUser,
                    password: undefined
                },
                token
            };

        } catch (error) {
            throw error;
        }
    }

}