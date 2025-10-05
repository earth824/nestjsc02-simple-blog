import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { Blog } from 'generated/prisma';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { BlogsService } from 'src/blogs/blogs.service';
import { CreateBlogDto } from 'src/blogs/dtos/create-blog.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/role.decorator';
import { CurrentUserDto } from 'src/common/dtos/current-user.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post()
  create(
    @Body() createBlogDto: CreateBlogDto,
    @CurrentUser() user: CurrentUserDto
  ): Promise<Blog> {
    return this.blogsService.create(createBlogDto, user.id);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Patch(':id')
  update() {}

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Delete(':id')
  delete() {}

  @Public()
  @Get()
  getAllBlog() {}

  @Public()
  @Get(':id')
  getById() {}

  @Post(':id/comments')
  createComment() {}

  @Public()
  @Get(':id/comments')
  getAllComments() {}
}
