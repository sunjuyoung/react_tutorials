import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Home1 from './Home1';
import About from './About';
import {Route ,Link} from 'react-router-dom';
import Profile from './Profile';
import Profile1 from './Profile1';
import Profiles from './Profiles';
import Maintest from './Maintest';

//Link 컴포넌트를 사용하면 페이지를 새로 불러오지 않고 애플리케이션 유지한상태에서
//HTML5 History API를 사용하여 페이지의 주소만 변경해준다
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
        <li>
          <Link to="/profile1/0">sun 프로필</Link>
        </li>
        <li>
          <Link to="/Profiles"> 프로필</Link>
        </li>
        <li>
          <Link to ="/home">home1</Link>
        </li>

        <li>
          <Link to="/main/test" >main</Link>

        </li>

      </ul>
        <hr></hr>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/profile1/:num" component={Profile1} />
      <Route path="/Profiles" component={Profiles} />
      <Route path="/home" component={Home1} />
      <Route path="/main/:obj" component={Maintest} />
    </div>
  );
}

export default App;
