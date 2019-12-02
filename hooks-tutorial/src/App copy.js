import React ,{useState,useEffect} from 'react';
import Counter from './Counter';
import Info from './Info';
import Average_useMemo from './Average_useMemo';
import Average_useCallback from './Average_useCallback';
import UseHookReact from './useHookReact';
import Axios from 'axios';
import ReactDOM from 'react-dom';


function useFetch(url){
  const [playload,setPlayload] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');

  const callUrl = async()=>{

    try{
      
      const {data} = await Axios.get(url);
      throw Error();
      setPlayload(data);
    }catch{

      setError("bye");
    }finally{
      setLoading(false);

    }
    
  };

  useEffect(()=>{
    callUrl();
  },[]);

  return {playload , loading,error};
}

const App = ()=> {

  const [visible, setVisible] = useState('');
  const {playload,loading,error}= useFetch("www.naver.com");



  return (

    <div>

      {visible ? <UseHookReact /> : null}
      <hr></hr>
      <button onClick={()=>setVisible(!visible)}>{visible ? '보이기' : '숨기기'}</button>

      <br></br>
      {loading && <span>loading </span>}
      {!loading && error &&<span>{error}</span>}
    </div>





  );
}

export default App;
