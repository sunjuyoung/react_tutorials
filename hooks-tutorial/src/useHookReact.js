import React ,{useState} from 'react';
import ReactDOM from 'react-dom';



const UseHookReact = ()=>{

    const [value,setValue] = useState('');

    const onChange = (e)=>{
        setValue(e.target.value);
    }

    return (
        <div>
            <h1>Use Hooks</h1>
            <br></br>
            <h2>{value}</h2>
            <input placeholder='whats your name' onChange={onChange}></input>
        </div>

    );
}

export default UseHookReact;