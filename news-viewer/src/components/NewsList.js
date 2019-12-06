import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`

    box-sizing : border-box;
    padding-bottom : 3rem;
    width : 789px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 769px){
        width : 769px;
        padding-left: 1rem;
        padding-right:1rem;
    }
`;



const NewsList = ({category})=>{
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect (()=>{
        //async 를 사용하는 함수 따로 선언
        const fetchData = async ()=>{
            setLoading(true);

            const query = category == 'all' ? '' : `&category=${category}`;
            try{
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b255408ea1914b14b3164fc60115ac82`
                  );
                  setArticles(response.data.articles);
            }catch (e){
                console.log(e);
            }

            //요청이 끝나면 false
            setLoading(false);
        }
        fetchData();
    },[]);

    //대기 중일 때
    if(loading){
        return <NewsListBlock>대기중 ...</NewsListBlock>
    }
    //아직 ariticle 값이 설정되지 않았을때
    if(!articles){
        return null;
    }

    //article 값이 유효할때
    return(
        <NewsListBlock>
            {articles.map(article=>(
                <NewsItem key={article.url} article={article} />
            ))}
            
        </NewsListBlock>

    );
}

export default NewsList;