import React ,{useState} from 'react';

const Say = () =>{
    const [message , setMessage] = useState('');//message , setMesage 이름은 자유롭게 지정할 수 있다.
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    //useState 한 컴포넌트에서 여러번 사용해도 상관없습니다.
    const [color, setColor] = useState('black');


    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
             <h1 style={{color}}>{message}</h1>
    
        <button onClick={()=> setColor('yellow')}>노랑</button>
        <button onClick={()=>{
            setColor('blue')
        }}>파랑</button>
        <button onClick={()=>setColor('red')}>빨간맛</button>
        </div>


    );
};

export default Say;