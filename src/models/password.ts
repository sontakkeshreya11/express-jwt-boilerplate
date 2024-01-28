import { Optional } from 'sequelize';
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { PasswordInterface } from '../types/model/interfaces';

type PasswordInputInterface = Optional<PasswordInterface, 'id'>;

@Table({ tableName: 'passwords' })
class Password extends Model<PasswordInterface, PasswordInputInterface> {
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
  hash!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  salt!: string;
}
export default Password;
