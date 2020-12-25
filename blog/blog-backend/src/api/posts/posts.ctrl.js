import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Types;

// 악성스크립트 방지위해 특정 태그들만 허용
const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http'],
};

// {
//   "title" : "제목",
//   "body" : "내용",
//   "tags" : ["태그1", "태그2"]
// }

// html 없애고 내용이 길면 200자로 제한
const removeHtmlAndShorten = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    // mongoDB에서 조회한 데이터의 i 값을 문자열과 비교 할때는 반드시 toSTring
    ctx.status = 403;
    return;
  }
  return next();
};

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findById(id);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
  return next();
};

export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), //require가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
  });

  // 검증 하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body: sanitizeHtml(body, sanitizeOption),
    tags,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET  http://localhost:4000/api/posts?username=velopert
// GET  http://localhost:4000/api/posts?tag=태그

export const list = async (ctx) => {
  // query는 문자 열이기 때문에 숫자로 변환해 주어야 한다.
  // 값이 주어지지 않았다면 1을 기본으로 설정
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };
  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 }) // 역순으로 정렬해서 보여줌
      .limit(10) // 한번에 보이는 숫자 제한
      .skip((page - 1) * 10) // page 지정 (ex) posts?page=2)
      .lean() // json형태로 조회
      .exec(); // exec를 붙여줘야 쿼리 실행
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts.map((post) => ({
      ...post,
      body: removeHtmlAndShorten(post.body),
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = (ctx) => {
  ctx.body = ctx.state.post;
  // const { id } = ctx.params;
  // try {
  //   const post = await Post.findById(id).exec();
  //   if (!post) {
  //     ctx.status = 404;
  //     return;
  //   }
  //   ctx.body = post;
  // } catch (e) {
  //   ctx.throw(500, e);
  // }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // 성공했지만 응답할 데이터는 없음
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async (ctx) => {
  const { id } = ctx.params;
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  // 검증 실패 시
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    //  ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const nextData = { ...ctx.request.body }; // 객체를 복사하고
  // body 값이 주어졌으면 HTML 필터링
  if (nextData.body) {
    nextData.body = sanitizeHtml(nextData, sanitizeOption);
  }
  try {
    const post = await Post.findByIdAndUpdate(id, nextData, {
      new: true, // 이 값을 설정하면 업데이트 된 데이터를 반환
      // false 업데이트되기 전의 데이터를 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// let postId = 1; // id의 초깃값입니다.

// // posts 배열 초기 데이터
// const posts = [
//   {
//     id: 1,
//     title: '제목',
//     body: '내용',
//   },
// ];

// /* 포스트 작성
// POST /api/posts
// { title, body }
// */
// export const write = ctx => {
//   // REST API의 request body는 ctx.request.body에서 조회할 수 있습니다.
//   const { title, body } = ctx.request.body;
//   postId += 1; // 기존 postId 값에 1을 더합니다.
//   const post = { id: postId, title, body };
//   posts.push(post);
//   ctx.body = post;
// };

// /* 포스트 목록 조회
// GET /api/posts
// */
// export const list = ctx => {
//   ctx.body = posts;
// };

// /* 특정 포스트 조회
// GET /api/posts/:id
// */
// export const read = ctx => {
//   const { id } = ctx.params;
//   // 주어진 id 값으로 포스트를 찾습니다.
//   // 파라미터로 받아 온 값은 문자열 형식이니 파라미터를 숫자로 변환하거나,
//   // 비교할 p.id 값을 문자열로 변경해야 합니다.
//   const post = posts.find(p => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환합니다.
//   if (!post) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   ctx.body = post;
// };

// /* 특정 포스트 제거
// DELETE /api/posts/:id
// */
// export const remove = ctx => {
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex(p => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환합니다.
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // index번째 아이템을 제거합니다.
//   posts.splice(index, 1);
//   ctx.status = 204; // No Content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// { title, body }
// */
// export const replace = ctx => {
//   // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex(p => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환합니다.
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 전체 객체를 덮어씌웁니다.
//   // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.
//   posts[index] = {
//     id,
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };

// /* 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
// */
// export const update = ctx => {
//   // PATCH 메서드는 주어진 필드만 교체합니다.
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex(p => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환합니다.
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 기존 값에 정보를 덮어씌웁니다.
//   posts[index] = {
//     ...posts[index],
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };
