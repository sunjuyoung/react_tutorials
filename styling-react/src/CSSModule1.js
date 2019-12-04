import React from 'react';
import styles from './CSSModule1.module.css'
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);


const CSSModule1 =()=>{
    return(
        <div className={cn('wrapper')}>
            <h1>안녕하세요 <span className="something"> CSSModule </span>연습입니다</h1>

        </div>

    );
}


export default CSSModule1;