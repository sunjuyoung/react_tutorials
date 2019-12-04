import React from 'react';
import styles from './CSSModule.module.css';

//css module 클래스이름을 두 개 이상 적용할 떄
const CSSModule =()=>{
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}> 
            안녕하세요 저는 <span className="something">CSS Module</span>
           
           

        </div>

        

    );
}

export default CSSModule;