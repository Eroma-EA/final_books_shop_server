import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

class ProductController{
    private productService;
    constructor(){
        this.productService = new ProductService();
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
    }
    async create(req:Request, res:Response) {
        
    }
    async getAll(req:Request, res:Response) {
        
    }

    async getOne(req:Request, res:Response) {
        
    }
    async update(req:Request, res:Response) {
        
    }
    async remove(req:Request, res:Response) {
        
    }
}

export default ProductController;