import React from 'react';
import { Router } from 'react-router-dom'
import Home from './Home';
import About from './About';

const App=()=> {
  return (
    <div>
       <Router path="/" component={Home} />
    </div>
  );
}

export default App;
