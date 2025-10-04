import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { BcryptService } from 'src/auth/services/bcrypt.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly bcryptService: BcryptService,
    private readonly usersService: UsersService
  ) {}

  async register(registerDto: RegisterDto): Promise<void> {
    // hash password
    registerDto.password = await this.bcryptService.hash(registerDto.password);
    // create user
    await this.usersService.create(registerDto);
  }
}
