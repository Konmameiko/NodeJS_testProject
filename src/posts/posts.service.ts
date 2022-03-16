import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    index() {
        return [
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
        ]
    }

    create() {
        return '创建成功'   
    }

    findPost(req) {
        return {
            id: `${req.params.id}`,
            content: 'hello world',
            time: '2022-03-16',
        }
    }
}
