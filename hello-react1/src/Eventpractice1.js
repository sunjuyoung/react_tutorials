import React,{Component} from 'react';

class EventPractice1 extends Component{

    state = {
        message : ''
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    //임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로
    //가리키기 위해서는 메서드를 this와 바인딩하는 작업이 필요합니다
    //만약 바인딩하지 않는 경우라면 this가 undefined를 가리키게됩니다
    handleChange(e){
        this.setState({
            message : e.target.value
        });
    }
    handleClick(e){
        alert(this.state.message);
        this.setState({message:''});
    }

    render(){
        return(
            <div>
                <input type="text"
                    name="message"
                    placeholder="입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}>
                </input>

                
                <button onClick={this.handleClick}>
                  입력  확인
                </button>
            </div>

        );
    }
}

export default EventPractice1;