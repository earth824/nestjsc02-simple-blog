import { IsEmail, IsIn, IsUUID } from 'class-validator';
import { ROLE_VALUES } from 'src/common/constants/role.constant';
import { type Role } from 'src/common/types/role.type';

export class CurrentUserDto {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsIn(ROLE_VALUES)
  role: Role;
}
