import React ,{useState} from 'react';
//배열 데이터 표시 추가 삭제

const IterationSample2 =()=>{


    //useState사용하여 상태를 설정
    //데이터 배열, 텍스트를 입력할 수 있는 input의 상태
    //데이터 배열에서 새로운 항목을 추가할 때 사용할 고유id를 위한상태
    const [names,setNames] = useState([
        {id:1,text:'눈사람'},
        {id:2,text:'얼음'},
        {id:3,text:'눈'},
        {id:4,text:'바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = (e)=>{
        setInputText(e.target.value);

    };

    //push함수는 기존 배열 자체를 변경
    //concat은 새로운 배열을 만들어 준다
    //리액트에서 상태를 업데이트할때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야합니다(불변성유지)
    //
    const onClick = ()=>{
       const nextNames =  names.concat({id:nextId,text:inputText});
        setNextId(nextId +1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = (id)=>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);

    };

    const namesList = names.map(name => <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>{name.text}</li>);
        return (

            <>
            <input value={inputText}  onChange={onChange}>
            
            </input>
            <button onClick={onClick}>추가</button>
            <button>삭제</button>

            <ul>{namesList}</ul>
            </>
        );
    

};

export default IterationSample2;