import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { BcryptService } from 'src/auth/services/bcrypt.service';
import { JwtService } from 'src/auth/services/jwt.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly bcryptService: BcryptService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto): Promise<void> {
    // hash password
    registerDto.password = await this.bcryptService.hash(registerDto.password);
    // create user
    await this.usersService.create(registerDto);
  }

  async login(loginDto: LoginDto): Promise<string> {
    // find user by email and check if user exist
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new BadRequestException('invalid email or password');
    }
    // if exist then verify password
    const isMatch = await this.bcryptService.compare(
      loginDto.password,
      user.password
    );
    if (!isMatch) {
      throw new BadRequestException('invalid email or password');
    }
    // if password correct then generate access token and return it
    const token = await this.jwtService.signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role
    });

    return token;
  }
}
