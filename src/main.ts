import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import {NestExpressApplication} from '@nestjs/platform-express'
// 入口文件
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // app.useStaticAssets(join(__dirname, '..', 'public'));   // 静态目录
    app.useStaticAssets(join(__dirname, '..', 'public'), {       // 配置虚拟目录
        prefix: '/public/',
    });
    app.setBaseViewsDir(join(__dirname, '..', 'views'));    // 模板目录
    app.setViewEngine('hbs');      // 使用模板引擎来呈现 HTML 输出
    await app.listen(5000);
}
bootstrap();
