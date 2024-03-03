import {Router} from "express";
import userRouter from "./user.router";
import postRouter from "./post.router";
import authRouter from "./auth.router";
import commentRouter from "./comment.router";
import productRouter from "./product.router";

const router=Router()

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/auth", authRouter);
router.use("/comments", commentRouter);
router.use("/products", productRouter);

export default router