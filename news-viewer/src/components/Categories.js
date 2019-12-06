import React from 'react';
import styled from 'styled-components';

const categories = [

    {
        name : 'all',
        text : '전체보기'
    },
    {
        name : 'business',
        text : '비즈니스'
    },
    {
        name : 'entertainment',
        text : '엔터테이먼트'
    },
    {
        name : 'science',
        text : '과학'
    },
    {
        name : 'sports',
        text : '스포츠'
    },


]

const categoriesBlock = styled.div`
        display:flex;
        padding : 1rem;
        width : 769px;
        margin : 0 auto;
        @media screen and (max-width: 769px){
            width:100%;
            overflow-x : auto;
        }
`;

const sun = styled.div` cursor:pointer;`;

const Categories =({category,onSelect})=>{

    return(
        <categoriesBlock>
            {categories.map(c=>(
                <sun active={true}>
               <a  onClick={()=>onSelect(c.name)}> {c.text}</a>
               </sun>
            ))}
        </categoriesBlock>

    );
}


export default Categories;