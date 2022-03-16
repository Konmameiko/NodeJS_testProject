import { Controller, Get, Post, Request} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService) {}

    @Get()  
    index(){    // 获取帖子
        return this.postsService.index();
    }

    @Post()
    create(){   // 创建帖子
        return this.postsService.create();
    }

    @Get(':id')
    findPost(@Request() req){     // 根据动态ID返回数据
        return this.postsService.findPost(req);
    }
}
