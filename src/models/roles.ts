import { Optional } from 'sequelize';
import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { Role } from '../constants/role';
import { Capabilibities } from '../constants/capabilities';

interface RoleInterface {
  id: string;
  role: Role;
  capabilities: Capabilibities[];
}

type RoleCreateOptions = Optional<RoleInterface, 'id'>;

@Table({ tableName: 'roles' })
class Roles extends Model<RoleInterface, RoleCreateOptions> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.ENUM(...Object.values(Role)),
    allowNull: false,
  })
  role!: Role;

  @Column({
    type: DataType.ARRAY(DataType.ENUM(...Object.values(Capabilibities))),
    allowNull: false,
  })
  capabilities!: Capabilibities[];
}

export default Roles;
