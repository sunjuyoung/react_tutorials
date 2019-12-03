import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = props=>{
    const {name,children,favoriteNumber} = props;

return (


<div>
    안녕하세요  제 이름은 {name}입니다 <br />
    children 값은 {children} 입니다. <br /> 
    제가 좋아하는 숫자는 {favoriteNumber}입니다.
</div>


);
};

MyComponent.defaultProps = {
    name : ' 기본 이름'
};

//name값은 무조건 String형태로 전달해야 된다
//출력은 된다? console창에 오류는 뜸
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;