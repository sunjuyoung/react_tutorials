import React , {Component} from 'react';
import PropTypes from 'prop-types';


class EventPractice3 extends Component {

    static propTypes = {
        color : PropTypes.string
    }

    state = {
        message : '',
        username : ''
        
    }
    izone = {
        color : ''
    }
    handleChange = (e)=>{
        this.setState({
            //message : e.target.value
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e)=>{
        if(this.state.message === ''){
            alert("입력하세욧@!");
        }else{

        
        alert(this.state.message);
        this.setState({
            message:''
        });
    }
}

    handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
  
    
    render(){
        

        return(
            <div>
                <h1 >{this.state.message}</h1>
                <h1>{this.state.username}</h1>
            <input type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                    >
            </input>

            <input type="text"
                name="message"
                placeholder="입력하세요"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress = {this.handleKeyPress}
                >
                
            </input>

            
            <button onClick={this.handleClick}>
              입력  확인
            </button>

            <button onClick={()=>this.setState.color('red')}>
              빨간맛  
            </button>
            <button>
                노랑
            </button>
            <button>
                블루
            </button>
        </div>


        );
    }

}


export default EventPractice3;