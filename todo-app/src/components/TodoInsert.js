import React,{useState,useCallback,useRef} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert})=>{

    const [value,setValue] = useState('');

    const onChange = useCallback((e)=>{
        setValue(e.target.value);

    },[]);
    
    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue('');
       
        //submit이벤트는 브라우저에서 새로고침 발생
        //이를 방지하기위해 밑에 함수 호출
        e.preventDefault();
       

    },[onInsert,value]);

    return (
        //onSubit함수가 호출되면 props로 받아온 onInsert 함수에 현재 value 값을 파라미터로 넣어 호출
        //현재 vlaue값을 초기화
        <form className = "TodoInsert" onSubmit={onSubmit}>
            <input value={value}  onChange={onChange} placeholder="할 일을 입력하세요"  />
            <button type="submit">
                <MdAdd />
            </button>

        </form>

    );
}

export default TodoInsert;