import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogPost } from './entities/blog-post.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('posts')
  async getAllPosts(): Promise<BlogPost[]> {
    return this.blogService.findAll();
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: number): Promise<BlogPost> {
    return this.blogService.getPostById(id);
  }
}
