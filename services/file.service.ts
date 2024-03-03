import {PostModel} from "../models/post.model";
import fs from "fs-extra";
export class FileService {

    async saveFile(file: any): Promise<string> {
        const newName = `${Date.now()}_${file.name}`;
        console.log(file);
        
        await file.mv( `public/posts/${newName}`);
        const post = await PostModel.findOne({where: {image: newName}});
        if (post) {
            post.image = newName;
            await post.save();
        }
        return newName;
    }

    // async removeFile(file: string): Promise<void> {
    //     if (file) {
    //         await PostModel.update({image: ""}, {where: {image: file}});
    //         await fs.unlink(`public/uploads/${file}`);
    //     }
    // }


}



