
import {AuthModel} from "../models/auth.model";
import {IAuth} from "../intefaces/IAuth";

export class AuthService{
    async login(user:IAuth){
        try {
            const foundUser:IAuth = await AuthModel.findOne({ email: user.email, password: user.password });
            return foundUser
        } catch (error) {
            throw error;
        }

    }
    async registration(user:IAuth){
        try {
          const  newUser:IAuth =  await AuthModel.create({ email: user.email, password: user.password });
          return newUser
        } catch (error) {
            throw error;
        }
    }
}