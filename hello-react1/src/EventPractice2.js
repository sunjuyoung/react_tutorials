import React , {Component} from 'react';


class EventPractice2 extends Component {

    state = {
        message : ''
    }
    handleChange = (e)=>{
        this.setState({
            message : e.target.value
        });
    }

    handleClick = (e)=>{
        alert(this.state.message);
        this.setState({
            message:''
        });
        
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


export default EventPractice2;