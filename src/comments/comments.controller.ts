import { Controller, Delete, Patch } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  @Patch(':id')
  update() {}

  @Delete(':id')
  delete() {}
}
