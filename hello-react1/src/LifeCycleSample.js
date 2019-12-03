import React , {Component} from 'react';

class LifeCycleSample extends Component {


    state ={
        number :0,
        color : null
    }

    myRef = null; // ref설정

    constructor(props){
        super(props);
        console.log('constructor');
    }

    //16.3v이후 사용가능
    //props로 받아 온 값을 state에 동기화시키는 용도로 사용 컴포넌트가 마운트될 떄와 업데이트될 떄 호출
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){  //조건에 따라 
            return { color : nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    //props또는 state를 변경했을떄 리렌더링을 시작할지 여부를 지정하는 메서드 
    //true false 값을 반환해야합니다  기본값은 true값을 반환합니다
    //false값을 반화나한다면 업데이트 과정은 여기서 중지됩니다.
    //이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고
    //새로 설정될 props또는 state는 nextProps와 nextState로 접근할 수 있습니다.

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick =()=>{
        this.setState({number : this.state.number +1});
    }


    //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    //반환값은 componentDidUpdate에서 세번째 파라미터인 snapshot값으로 전달받을수있다
    //주로 업데이트 직전의 값을 참고할 일이 있을때 활용 (스크롤바 위치 유지)
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    //리렌더링을 완료후 실행 ,업데이트가 끝난 직후이므로 DOM관련 처리를 해도 무방합니다
    //prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할수 있습니다.
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상', snapshot);
        }
    }

    render(){
        console.log('render');
        const style ={
            color : this.props.color
        };

        return(
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=>(this.myRef=ref)}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>

            </div>

        );

    }



}

export default LifeCycleSample;