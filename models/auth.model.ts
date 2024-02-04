import {
    BelongsTo,
    Column,
    DataType, ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import {UserModel} from "./user.model";
import {IAuth} from "../intefaces/IAuth";

interface AuthCreationAttrs {
    email:string,
    password:string
}

@Table({ tableName: "auth" })
export class AuthModel extends Model<IAuth, AuthCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        field:"id"
    })
    id?: number;

    @Column({ type: DataType.STRING, allowNull: false, field:"email" })
    email!: string;

    @Column({ type: DataType.STRING, allowNull: false, field:"password" })
    password!: string;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    userId!: number;

    @BelongsTo(() => UserModel)
    author!: string;
}