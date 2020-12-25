import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

// tags 값을 props로 받아와서 태그 목록을 렌더링

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.gray[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;