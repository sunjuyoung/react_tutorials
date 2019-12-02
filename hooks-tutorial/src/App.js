import React ,{useState} from 'react';
import Counter from './Counter';
import Info from './Info';
import Average_useMemo from './Average_useMemo';
import Average_useCallback from './Average_useCallback';


const App = ()=> {

  const [visible, setVisible] = useState('');



  return (

    <div>

      {visible ? <Average_useCallback /> : null}
      <hr></hr>
      <button onClick={()=>setVisible(!visible)}>{visible ? '보이기' : '숨기기'}</button>
    </div>





  );
}

export default App;
