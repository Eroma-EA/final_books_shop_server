import {BelongsTo, Column, DataType, ForeignKey} from "sequelize-typescript";
import {UserModel} from "../models/user.model";

export interface IPost{
    id?: number;
    title: string;
    content: string;
    image: string;
    userId: number;
}