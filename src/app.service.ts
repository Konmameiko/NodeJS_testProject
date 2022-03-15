import { Injectable } from '@nestjs/common';

// 服务
@Injectable()
export class AppService {
  getHello(): object {
    return {'text':'hi,boy.What a fucking day.'};
  }

  sayHi(): string{
    return 'hello!';
  }

  chackUser(query):string{
    return query.query.id + ' ' + query.query.name;
  }
}
