import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import Pagination from '../../components/post/Pagination';
import { withRouter } from 'react-router-dom';

const PaginationContainer = ({ location, match }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['post/LIST_POSTS'],
  }));

  // 포스트 데이터가 없거나 로딩 중이라면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  const { username } = match.params;

  // page가 없으면 기본값 1
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
