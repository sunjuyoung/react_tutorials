import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponentClass extends Component{
    
    //클래스 내부에 지정 하는 방법
    static defaultProps = {

    };
    static propTypes = {

    };


    render(){
        const {name,favoriteNumber,children} = this.props; //비구조화 할당
        return(

            <div>
                안녕하세요  제 이름은 {name}입니다 <br />
                 children 값은 {children} 입니다. <br /> 
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );


    }
}

MyComponentClass.defaultProps = {
    name : "기본 이름"
}
MyComponentClass.propTypes = {
    name : PropTypes.string,
    favoriteNumber :PropTypes.number.isRequired
};

export default MyComponentClass;

