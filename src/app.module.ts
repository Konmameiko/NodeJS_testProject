import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 引入数据库的及配置文件
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

// 根模块
@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
