import React ,{useState,useMemo} from 'react';

const getAverage = number =>{
    console.log('평균값 계산');
    if(number.length === 0) return 0;
    
    const sum = number.reduce((a,b)=>a+b);
    return sum / number.length;
};




const Average_useMemo = () => {

    const [list,setList] = useState([]);
    const [number,setNumber] = useState('');


    const onChange= e =>{
        setNumber(e.target.value);
    }

    const onInsert = e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    //숫자를 등록할때 뿐만아니라 인풋내용이 수정될때도 getAverage함수가 호출된다
    //이렇게 렌더링될떄마다 계산하는것은 낭비이다
    //useMemo Hook , 렌더링과정에서 특정 값이 바뀌었을때만 연산을 실행하고,
    //원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식
    const avg = useMemo(()=> getAverage(list),[list]);  //list배열의 내용이 바뀔때만 함수가 호출됩니다.
    

    return (
        <div>
            <input value={number} onChange={onChange}></input>
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

export default Average_useMemo;

