import React ,{useState}from 'react';

const EventPractice4 =()=>{

    const [username ,setUsername] = useState('');
    const [message , setMessage] = useState('');
    const [color , setColor] = useState('black');
    const onChangeUsername = (e)=> setUsername(e.target.value);
    const onChangeMessage = (e)=> setMessage(e.target.value);
    const onClick =()=>{
        alert(username + ':'+ message);
        setUsername('');
        setMessage('');

    };
    const onKeyPress =(e)=>{
        if(e.key == 'Enter'){
            onClick();
        }
    };


    return (
        <div>
            <h1>이벤트 연습 함수형 컴포넌트</h1>
            
    <h1 style={{color}}>{username}</h1>
    <h1>{message}</h1>
    <hr></hr>
    <h3>이름</h3>
    <input
        type="text"
        name="username"
        placeholder="사용자"
        value={username}
        onChange={onChangeUsername}
        onKeyPress ={onKeyPress}
    >
    </input>
        <h3>내용</h3>
    <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
    >
    </input>
    <button onClick={onClick}>확인</button>
    <hr></hr>
    <button onClick={()=>setColor('red')}>빨간맛</button>
        </div>

    );

}
export default EventPractice4;