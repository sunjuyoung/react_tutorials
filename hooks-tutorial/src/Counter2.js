import React, {useReducer} from 'react';
//useReducer 는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 
//업데이트 해주고 싶을 때 사용하는 HOOK입니다
//현재상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
//리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야합니다.

function reducer(state,action){
    //action.type에 따른 다른 작업 수행
    switch(action.type){
        case 'INCREMENT': return {value : state.value +1};
        case 'DECREMENT' : return {value : state.value -1};
        default : //아무것도 해당되지 않을때 기존 상태 반환

        return state;
    }
}

const Counter = ()=>{
    //상태의 기본값을 넣어줍니다, 현재 0을 넣어줌
    const [state,dispatch] = useReducer(reducer ,{value :0});



return(

    <div>
        <p>
            현재 카운터 값은 <b>{state.value}</b>입니다.
        </p>

    <button onClick={()=> dispatch({type :'INCREMENT'})}>+1</button>
    <button onClick={()=> dispatch({type:'DECREMENT'})}>-1</button>
    </div>
);


}

export default Counter;


