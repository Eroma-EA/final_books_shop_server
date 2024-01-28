import {Request, Response} from "express";
import {UserService} from "../services/user.service";
import {IUser} from "../intefaces/IUser";

 class UserController {
     private userService:UserService;

    constructor() {
        this.userService = new UserService();
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.post = this.post.bind(this);
    }
    async getAll( _: Request, res: Response) {
        try{
            const users= await this.userService.getAll();
            res.json(users);
        }catch (e){
            throw e ;
        }
    }

    async getOne( ) {
        return 'This action returns user #';
    }


    async post(req: Request,res: Response) {
        try{
            // const users= await this.userService.post(req.body);
            res.json(req.body);
        }catch (e){
            throw e ;
        }
    }

    put() {
        return 'Updating a user...';
    }

    remove() {
        return 'Removing user...';
    }
}

export default UserController;