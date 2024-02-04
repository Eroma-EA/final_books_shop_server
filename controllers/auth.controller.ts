import {Request, Response} from "express";
import {AuthService} from "../services/auth.service";
import {getErrorMessage} from "../utils/get.error";
export class AuthController{
    private authService
    constructor() {
        this.authService=new AuthService()
        this.login = this.login.bind(this);
        this.registration = this.registration.bind(this);
    }

    async login(req:Request, res:Response){
        try {
            const foundUser = await this.authService.login(req.body);
            res.status(200).send(foundUser);
        } catch (error) {
            return res.status(500).send(getErrorMessage(error));
        }
    }
    async registration(req:Request, res:Response){
        try {
            await this.authService.registration(req.body);
            res.status(200).send('Inserted successfully');
        } catch (error) {
            return res.status(500).send(getErrorMessage(error));
        }
    }

}