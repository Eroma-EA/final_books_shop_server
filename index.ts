import express from "express"
import * as dotenv from "dotenv";
import database from "./config/database";
import router from "./router";
dotenv.config();


const port=process.env.PORT
const app = express()

app.use(express.json())
app.use("/api", router)


database.connectToDatabase()
    .then(() => {
        console.log("Database connection successfully.");
        app.listen(port, () => {
            console.log(`[server]:🧙🏻‍♂️ Server is running at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to the database:", err);
        process.exit(1);
    });