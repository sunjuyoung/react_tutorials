import React ,{Component} from 'react';

class Counter1 extends Component{

    state = {
        number :0,
        fixedNumber :1
    };

    render(){
        const {number,fixedNumber} = this.state;

        return(
            <div>
                <h1>변하는 숫자 : {number}</h1>
                <h2>자기 자신 더하기 숫자 : {fixedNumber}</h2>
                <hr>
                </hr>
                <button onClick={()=>{
                    //두 번 사용하는 것임에도 불구하고 버튼을 클릭했을시 1씩 더해집니다
                    //아래버튼과 같이 객체 대신 함수를 인자로 넣어 준다.
                    this.setState({number:number+1});
                    //this.setState({number:number+1});

                    
                    this.setState(prevState => ({
                        number : prevState.number + 1
                    }
                    ),()=>console.log("hi")); //끝난 후 특정 작업 실행
                    
                }}>

                    버튼1
                </button>
                <button onClick={()=>{
                    this.setState({fixedNumber : fixedNumber+1});
                    //prevState 기존상태 , props현재 지니고있는 props(생략가능)
                    this.setState((prevState,prop)=>{
                        console.log(prop);
                        console.log(prevState);
                        return{
                            fixedNumber : prevState.fixedNumber +1
                        }
                    });
                }}>
                    버튼2
                </button>
            </div>


        );
    }


}

export default Counter1;