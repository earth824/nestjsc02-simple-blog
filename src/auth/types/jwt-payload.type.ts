import { Role } from 'src/common/types/role.type';

export type AccessJwtPayload = {
  sub: string;
  email: string;
  role: Role;
};
