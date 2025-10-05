import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { CurrentUserDto } from 'src/common/dtos/current-user.dto';

export const CurrentUser = createParamDecorator(
  (_: unknown, context: ExecutionContext): Partial<CurrentUserDto> => {
    const request = context.switchToHttp().getRequest<Request>();
    return {
      id: request.user?.id,
      email: request.user?.email,
      role: request.user?.role
    };
  }
);
