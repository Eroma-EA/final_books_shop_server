import { Sequelize } from "sequelize-typescript";
import { sequelizeConfig, dialect } from "./config";
import {UserModel} from "../models/user.model";

class Database {
    public sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize({
            database: sequelizeConfig.database,
            username: sequelizeConfig.username,
            password: sequelizeConfig.password,
            host: sequelizeConfig.options.host,
            dialect: dialect,
            pool: {
                max: sequelizeConfig.options.pool.max,
                min: sequelizeConfig.options.pool.min,
                acquire: sequelizeConfig.options.pool.acquire,
                idle: sequelizeConfig.options.pool.idle,
            },
            models: [UserModel],
        });
    }

    public async connectToDatabase(): Promise<void> {
        try {
            await this.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        } catch (err) {
            console.error("Unable to connect to the Database:", err);
        }
    }
}



export default new Database();