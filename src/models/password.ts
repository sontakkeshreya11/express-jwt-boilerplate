import { Optional } from 'sequelize';
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

interface PasswordInterface {
  id: string;
  hash: string;
  salt: number;
}

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
    type: DataType.INTEGER,
    allowNull: false,
  })
  salt!: number;
}
export default Password;
