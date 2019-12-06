import React,{useState,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {

  const [category,setCategory] = useState('all');
  const onSelect = useCallback(c=>setCategory(c),[]);

  return (
    <div className="App">
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category}/>
    </div>
  );
}

export default App;
