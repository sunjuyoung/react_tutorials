import React ,{useState}from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';


const App = ()=> {

  const [visible, setVisible] = useState('');



  return (

    <div>

      {visible ? <Average /> : null}
      <hr></hr>
      <button onClick={()=>setVisible(!visible)}>{visible ? '보이기' : '숨기기'}</button>
    </div>





  );
}

export default App;
