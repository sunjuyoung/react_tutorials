import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
//import MyComponent from './MyComponentClass';
//import MyComponent from './MyComponent';
import Counter from './Counter1';
import Say from './Say';
import EventPractice from './EventPractice'
import EventPractice1 from './Eventpractice1'
import EventPractice2 from './EventPractice2'
import EventPractice3 from './EventPractice3'
import EventPractice4 from './EventPractice4'
import ValidationSample from './validationSample';
import ValidationSample2 from './validationSample2';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import IterationSample2 from './IterationSample2';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary'


function getRandomColor(){
  return '#'+ Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component {
  state = {
    color : '#000000'
  }
  handleClick = ()=>{
    this.setState({color:getRandomColor()});
  }

 render(){
  return(
    //<MyComponent name="react" /> 

   // <MyComponent />


   //태그 사이의 내용을 보여주는 children
    //<MyComponent name="react" favoriteNumber={2}>리액트</MyComponent>

//    <Counter></Counter>
   //<Say></Say>
    //<EventPractice4 />
    //<ValidationSample />
    //<ScrollBox />
   // <div>
    //    <ScrollBox ref={(ref)=>this.scrollBox = ref} />
    //    <button
     //     onClick={()=> this.scrollBox.scrollToBottom()}
      //  >
       //   맨 밑으로</button>
    //</div>
    <div>
      <button onClick={this.handleClick}>랜덤색상</button>
      <ErrorBoundary>
      <LifeCycleSample color={this.state.color} />
      </ErrorBoundary>
    </div>
    
  ) ;




  /*   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  /*   <Fragment>
      {name == '리액트' ? (<h1>hi</h1>):(<h1>no</h1>)}
        <h1>{name}</h1>
      <h1>작동</h1>
    </Fragment> */

  /*  <div>
     {name || "값이 undefined입니다"}   //or 연산자를 사용하여 undefined일때 사용할값을 지정할 수 있다

   </div> */


  /*   <div>
      <h1>리액트</h1>
      <h1>작동</h1>

    </div> */

}
}
export default App;
