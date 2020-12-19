import React from 'react';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

const NewsPage = ({ match }) => {
    // 카테고리가 선택되지 않으면 기본 all로 사용
    const category = match.params.category || 'all';
    return (
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    );
};

export default NewsPage;