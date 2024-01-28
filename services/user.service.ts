import {IUser} from "../intefaces/IUser";
import {UserModel} from "../models/user.model";

export class UserService {
  async getAll() {
   try{
     const users:IUser[]=await UserModel.findAll()
     return users
   }catch (e){
     throw e
   }
  }

  async getOne() {
    return "This action returns user #";
  }

  async post(user:IUser) {
    const newUser:IUser=await UserModel.create({email:user.email, password:user.password})
    return newUser;
  }

  put() {
    return "Updating a user...";
  }

  remove() {
    return "Removing user...";
  }
}
