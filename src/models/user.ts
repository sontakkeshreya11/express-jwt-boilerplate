import { Optional } from 'sequelize';
import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { UserInterface } from '../types/model/interfaces';

type UserCreateOptions = Optional<UserInterface, 'id'>;

@Table({ tableName: 'users' })
class User extends Model<UserInterface, UserCreateOptions> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  password_id!: string;
}
export default User;
