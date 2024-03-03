import {
    BelongsTo,
    Column,
    DataType, ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import {UserModel} from "./user.model";
import { PostModel } from "./post.model";
import { IProduct } from "../intefaces/IProduct";

interface ProductCreationAttrs {
    title: string;
    content: string;
    image?:string;
    postId: number;
    userId: number;
}

@Table({ tableName: "products" })
export class ProductModel extends Model<IProduct, ProductCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        field:"id"
    })
    id?: number;

    @Column({ type: DataType.STRING, allowNull: false, field:"title" })
    title!: string;

    @Column({ type: DataType.STRING, allowNull: false, field:"content" })
    content!: string;

    @Column({ type: DataType.STRING, allowNull: false, field:"image" })
    image?: string;


    @ForeignKey(() => PostModel)
    @Column({ type: DataType.INTEGER })
    postId!: number;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    userId!: number;

    @BelongsTo(() => PostModel)
    post!: string;

    @BelongsTo(() => UserModel)
    author!: string;

}