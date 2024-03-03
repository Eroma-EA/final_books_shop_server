import { Router } from "express";
import ProductController from "../controllers/product.controller";
const productRouter = Router();

productRouter.post("/", new ProductController().create);
productRouter.get("/", new ProductController().getAll);
productRouter.get("/:id", new ProductController().getOne);
productRouter.delete("/:id", new ProductController().remove);
productRouter.put("/:id", new ProductController().update);

export default productRouter;
