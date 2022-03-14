import { Controller, Get, Query, Request } from '@nestjs/common';
import { AppService } from './app.service';

// 控制器
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  sayHi(): string {
    return this.appService.sayHi();
  }

  //get使用query注释器获取值
  @Get('chack')
  chackUser(@Query() query): string {
    return this.appService.chackUser(query);
  }

  //get使用request注释器获取值
  @Get('chack1')
  chackUser1(@Request() req): string {
    return this.appService.chackUser(req);
  }

  //模糊匹配  当没有前面的符合时  执行此路由
  @Get('a*a')
  chackUser3(): string {
    return '这里的模糊匹配';
  }


  //动态匹配  当没有前面的符合时  执行此路由
  @Get(':id')
  chackUser2(): string {
    return '1234';
  }
}
