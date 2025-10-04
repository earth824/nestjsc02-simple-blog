import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { PrismaService } from 'src/database/prisma.service';
import { UserCreateInput } from 'src/users/types/input.type';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserCreateInput): Promise<void> {
    try {
      await this.prisma.user.create({ data });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('this email address is already registered');
      }
      throw error;
    }
  }
}
