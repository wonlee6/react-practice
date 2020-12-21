require('dotenv').config();
// next 함수는 Promise 반환
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
//import createFakeData from './createFakeData';

//비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const {PORT, MONGO_URL} = process.env;

mongoose
.connect(MONGO_URL, {useNewUrlParser: true, useFindAndModify: false})
.then(() => {
    console.log('connected to MongoDB');
   // createFakeData();
})
.catch(e => {
    console.log(e)
})

//const api = require('./api');
const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); // api 라우터 적용

app.use(bodyParser());
app.use(jwtMiddleware);

// 라우터 설정
// router.get('/', ctx => {
//     ctx.body = '홈';
// })

// router.get('/about/:name?', ctx => {
//     const {name} = ctx.params;
//     // name의 존재 유무에 따라 다른 결과 출력
//     ctx.body = name ? `${name}의 소개` : '소개';
// })

// router.get('/posts', ctx => {
//     const {id} = ctx.query;
//     ctx.body = id ? `포스트 #${id}` : '포스트아이디가 없다';
// })

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   if(ctx.query.authorized !== '1') {
//       ctx.status = 401;
//       return;
//   }
//   await next();
//   console.log('end')
// });

// app.use((ctx, next) => {
//     console.log(2);
//     next();
// })

// app.use(ctx => {
//     ctx.body = 'hello world';
// });
const port = PORT || 4000;
app.listen(port, () => {
  console.log('listening to port %d', port);
});
