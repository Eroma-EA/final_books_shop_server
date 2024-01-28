import {
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: "users" })
export class UserModel extends Model {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        field:"id"
    })
    id?: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false, field:"email" })
    email!: string;

    @Column({ type: DataType.STRING, allowNull: false, field:"password" })
    password!: string;

    @Column({ type: DataType.BOOLEAN, defaultValue: false, field:"banned" })
    banned?: boolean;

    @Column({ type: DataType.STRING, allowNull: true, field:"banReason" })
    banReason?: string;

    // @BelongsToMany(() => Role, () => UserRoles)
    // roles: Role[];
    //
    // @HasMany(() => Post)
    // posts: Post[];
}