import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160'
// }
const NewsList = ({ category }) => {
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0535ad9d7107451db75d8dba29ce4579`,
        );
    }, [category]);

    // useEffect(() => {
    //     // async 사용하는 함수 따로 선언
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             // query 값이 all 이면 공백
    //             const response = await axios.get(
    //                 `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0535ad9d7107451db75d8dba29ce4579`,
    //             );
    //             console.log(response)
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // }, [category]); // 여기에 카테고리 넣어줘야함

    // 대기중일때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }
    // article 값이 설정되지 않았을 때
    // if (!articles) {
    //     return null;
    // }
    if (!response) {
        return null;
    }

    // error 발생 했을 때
    if (error) {
        return <NewsListBlock>에러 발생</NewsListBlock>
    }
    // articles 값이 유효 할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;