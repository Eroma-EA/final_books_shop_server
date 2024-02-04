import {PostModel} from "../models/post.model";
import {IPost} from "../intefaces/IPost";


export class PostService{
    async getAll() {
        try{
            const posts:IPost[] =await PostModel.findAll()
            return posts
        }catch (e){
            throw e
        }
    }

    async getOne() {
        return "This action returns user #";
    }

    async post(post:IPost) {
        const newPost:IPost=await PostModel.create({
            title: post.title,
            content: post.content,
            userId: post.userId,
            image:post.image
        })
        return newPost;
    }

    put() {
        return "Updating a user...";
    }

    remove() {
        return "Removing user...";
    }
}