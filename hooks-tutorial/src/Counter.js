import React, {useState} from 'react';

const Counter = ()=>{
    //상태의 기본값을 넣어줍니다, 현재 0을 넣어줌
    const [value,setValue] = useState(0);



return(

    <div>
        <p>
            현재 카운터 값은 <b>{value}</b>입니다.
        </p>

    <button onClick={()=> setValue(value+1)}>+1</button>
    <button onClick={()=> setValue(value-1)}>-1</button>
    </div>
);


}

export default Counter;


