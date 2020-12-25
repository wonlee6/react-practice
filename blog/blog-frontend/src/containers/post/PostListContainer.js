import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/post/PostList';
import { listPosts } from '../../modules/posts';
import { withRouter } from 'react-router-dom';

const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['post/LIST_POSTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);
  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user} // 현재 로그인 중인 사용자의 정보를 지니고 있는 user 객체로 설정
    />
  );
};

export default withRouter(PostListContainer);
