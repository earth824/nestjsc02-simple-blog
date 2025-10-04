import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, BlogsModule, CommentsModule, DatabaseModule, UsersModule]
})
export class AppModule {}
