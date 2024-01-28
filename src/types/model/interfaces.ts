import { Capabilibities } from '../../constants/capabilities';
import { Role } from '../../constants/role';

export interface UserInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password_id: string;
}

export interface RoleInterface {
  id?: string;
  role: Role;
  capabilities: Capabilibities[];
}

export interface PasswordInterface {
  id?: string;
  hash: string;
  salt: string;
}
