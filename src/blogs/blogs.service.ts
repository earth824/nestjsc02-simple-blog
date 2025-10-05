import { Injectable } from '@nestjs/common';
import { Blog } from 'generated/prisma';
import { CreateBlogDto } from 'src/blogs/dtos/create-blog.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBlogDto: CreateBlogDto, userId: string): Promise<Blog> {
    const { tags, ...data } = createBlogDto;
    return this.prisma.blog.create({
      data: {
        ...data,
        userId,
        tags: {
          createMany: { data: tags?.map((tag) => ({ name: tag })) ?? [] }
        }
      },
      include: { tags: true }
    });
  }
}
