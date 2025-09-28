import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  @Post()
  create() {}

  @Patch(':id')
  update() {}

  @Delete(':id')
  delete() {}

  @Get()
  getAllBlog() {}

  @Get(':id')
  getById() {}

  @Post(':id/comments')
  createComment() {}

  @Get(':id/comments')
  getAllComments() {}
}
