import React, {useState , useEffect} from 'react';

const Info =()=>{

    const [name,setName] = useState('');
    const [nickname, setNickname] = useState('');

    //useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다
    //클래스형 컴포넌트 componentDidMount와 ComponentDidUpdate를 합친 형태
/*     useEffect(()=>{
        console.log('렌더링이 완료되었습니다.');
        console.log({name,nickname});
    }); */
   
   
    //마운트될때만 실행하고 싶을때
/*     useEffect(()=>{
        console.log('마운트될 때만 실행됩니다');
        console.log({name,nickname});
    },[]); */

    //특정 값이 업데이트될때만 실행 (ComponentDidUpdate)
    /* useEffect(()=>{
        console.log(name);

    },[name==='도']); */

    useEffect(()=>{

        console.log('effect');
        console.log(name);
        return()=>{
            console.log('cleanup');
            console.log(name);
        };
    });


    const onChange = (e)=>{
        setName(e.target.value);
    }

    const onChangeNickname =(e)=>{
        setNickname(e.target.value);
    }


    return (

        <div>
            <h1>{name}</h1>
            <h2>{nickname}</h2>
            <input type="text" onChange={onChange}></input>
            <input value={nickname} onChange={onChangeNickname}></input>
        </div>
    );


}
export default Info;