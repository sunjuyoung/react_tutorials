import React,{Component} from 'react';

class EventPractice extends Component {

    state ={
        message :''
    }

    render(){
        

        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보시오"
                    value={this.state.message}
                    onChange={
                        (e)=>{
                            console.log(e);
                            console.log(e.target);
                            console.log(e.target.value);
                            this.setState({message:e.target.value})
                        }
                    }
                >
                </input>
                <button onClick={()=>{
                    alert(this.state.message);
                }}>
                    확인</button>
            </div>

        );
    }

}

export default EventPractice;