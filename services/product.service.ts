import {ProductModel} from "../models/product.model";
import { IProduct } from "../intefaces/IProduct";
import { FileService } from "./file.service";


export class ProductService {
    async getAll() {
        try{
            const products:IProduct[] =await ProductModel.findAll()
            return products
        }catch (e){
            throw e
        }
    }

    async getOne(id: number) {
        try{
            const product:IProduct|null = await ProductModel.findByPk(id)
            return product
        }catch (e){
            throw new Error("product not found")
        }
    }


    async product(productData:IProduct, picture?: any) {
        const image = picture ? await new FileService().saveFile(picture) : "";

        const newproduct = await ProductModel.create({
            ...productData,
            image,
        });

        return newproduct;
    }


    put() {
        return "Updating a user...";
    }

    remove() {
        return "Removing user...";
    }
}