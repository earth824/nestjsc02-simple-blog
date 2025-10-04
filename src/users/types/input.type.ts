import { Role } from 'src/common/types/role.type';

export type UserCreateInput = {
  email: string;
  password: string;
  role?: Role;
};
