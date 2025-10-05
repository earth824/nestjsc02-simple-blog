import { SetMetadata } from '@nestjs/common';
import { ROLE_KEY } from 'src/common/constants/decorator-key';
import { Role } from 'src/common/types/role.type';

export const Roles = (...roles: Role[]) => SetMetadata(ROLE_KEY, roles);
