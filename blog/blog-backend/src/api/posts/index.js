import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();


// const postsCtrl = require('./posts.ctrl');

// const printInfo = ctx => {
//     ctx.body = {
//         method: ctx.method,
//         path: ctx.path,
//         params: ctx.params
//     };
// };

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read); // ObjectId 검증이 필요한 부분에 미들웨어 추가
posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// posts.put('/:id', postsCtrl.replace);
posts.patch('/:id',  postsCtrl.checkObjectId, postsCtrl.update);

export default posts;
