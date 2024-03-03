import { Router } from "express";
import CommentController from "../controllers/comment.controller";
const commentRouter = Router();
commentRouter.post("/", new CommentController().create);
commentRouter.get("/:id", new CommentController().getAll);
commentRouter.delete("/:id/:commentId", new CommentController().remove);
export default commentRouter;
