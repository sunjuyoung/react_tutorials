import React ,{useState,useMemo,useCallback,useRef} from 'react';

const getAverage = number =>{
    console.log('평균값 계산');
    if(number.length === 0) return 0;
    
    const sum = number.reduce((a,b)=>a+b);
    return sum / number.length;
};




const Average_useCallback = () => {

    const [list,setList] = useState([]);
    const [number,setNumber] = useState('');
    const inputRef = useRef(null);


    //onChange onInsert 컴포넌트가 리덴더링될 때마다 새로 생성됩니다.
    //렌더링이 자주 발생하거나 렌더링해야 할 컴포터넌의 개수가 많아지면 이부분을 최적화해 주는 것이 좋습니다.


    const onChange = useCallback(e =>{
        setNumber(e.target.value);
    },[]); //비어있는 배열일 경우 컴포넌트가 처음 렌더링될 때만 함수 생성


    
    const onInsert = useCallback(e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputRef.current.focus();
    },[number,list]); //number 혹은 list 가 바뀌었을때만 함수 생성
    //함수내부에서 상태값에 의존해야 할때 그값을 반드시 포함시켜야한다
    //onChange와 달리 onInsert는 number와list조회 한다

    //숫자를 등록할때 뿐만아니라 인풋내용이 수정될때도 getAverage함수가 호출된다
    //이렇게 렌더링될떄마다 계산하는것은 낭비이다
    //useMemo Hook , 렌더링과정에서 특정 값이 바뀌었을때만 연산을 실행하고,
    //원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식
    const avg = useMemo(()=> getAverage(list),[list]);  //list배열의 내용이 바뀔때만 함수가 호출됩니다.
    

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputRef}></input>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
    ))}
            </ul>
            <div>
                <b>평균값 : {avg}</b> 
            </div>


        </div>
    );
};

export default Average_useCallback;

