import { PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from 'src/blogs/dtos/create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
