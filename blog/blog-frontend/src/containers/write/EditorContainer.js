import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/write/Editor';

import { change_field, initialize } from '../../modules/write';

// title 값과 body 값을 리덕스 스토어에서 불러와 Editor에 전달해 줌

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(change_field(payload)),
    [dispatch],
  );
  // 언마운트될 때 초기화, 사용자가  페이지 이동할대 초기화 하기 위해
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
