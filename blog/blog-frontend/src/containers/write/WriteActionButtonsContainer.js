import React, { useEffect } from 'react';
import WriteActionButton from '../../components/write/WriteActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

// 포스트 등록을 누르면 현재 리덕스 스토어 안에 들어 있는 값을 사용하여 새 포스트 작성

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goback();
  };

  // 성공 , 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`); // 해당 경로로 이동
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
