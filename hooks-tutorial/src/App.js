import React ,{useState}from 'react';
import Counter from './Counter';
import Info from './Info';


const App = ()=> {
  const [visible, setVisible] = useState('');
  return (
    <div>
<button onClick={()=>setVisible(!visible)}>{visible ? '숨기긱':'보이기'}</button>
<hr></hr>
        {visible &&<Info />}
    </div>
  );
}

export default App;
