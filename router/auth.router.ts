import {Router} from "express";
import {AuthController} from "../controllers/auth.controller";

const authRouter= Router();


authRouter.get("/login", new AuthController().login );
authRouter.post("/registration", new AuthController().registration );


export default authRouter;