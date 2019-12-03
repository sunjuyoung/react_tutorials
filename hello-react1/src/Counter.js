import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){ //Constructor 메서드 선언하지 않고도 초기화 가능하다
        super(props);
        //state의 초깃값 설정하기
        //Component의 state는 객체 형식이어야 한다
        this.state ={
            number:0,
            fixedNumber :0
        };
    }

    render(){
        const {number,fixedNumber} = this.state; //state를 조회할때는 this.state로 조회

        return(
            <div>
                <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={()=>{
                    this.setState({number:number+1});
                }}
                >
                    버튼loool,
                    </button>
            </div>


        );
    }

}

export default Counter;