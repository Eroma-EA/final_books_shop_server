// this shim is required
import { createExpressServer } from 'routing-controllers';
import {UserController} from "../controllers/user.controller";
import * as dotenv from "dotenv";
dotenv.config();


const port=process.env.PORT
const localhost="127.0.0.1"

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    routePrefix:"/api",
    controllers: [UserController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000, ()=>{
    console.log(`⚡️[server]: Server is running at http://${localhost}:${port}`);
});