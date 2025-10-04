import {
  IsAlphanumeric,
  IsEmail,
  IsIn,
  IsOptional,
  MinLength
} from 'class-validator';
import { ROLE, ROLE_VALUES } from 'src/common/constants/role.constant';
import { type Role } from 'src/common/types/role.type';

export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  @IsAlphanumeric()
  password: string;

  @IsOptional()
  @IsIn(ROLE_VALUES)
  role?: Role = ROLE.USER;
}
