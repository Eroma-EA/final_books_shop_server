import {Request, Response} from "express";
import {UserService} from "../services/user.service";

 class UserController {
     private userService;

    constructor() {
        this.userService = new UserService();
    }
    async getAll( _: Request, res: Response) {
        try{
            const users= await this.userService.getAll();
            return res.json(users);
        }catch (e){
            throw e ;
        }
    }

    async getOne( ) {
        return 'This action returns user #';
    }


    post(user: any) {
        return 'Saving user...';
    }

    put() {
        return 'Updating a user...';
    }

    remove() {
        return 'Removing user...';
    }
}

export default UserController;