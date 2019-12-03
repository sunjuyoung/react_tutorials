import React ,{useState,useRef,useCallback}from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


//임의 데이터 2000
function createBulkTodos(){
  const array = [];
  for(let i =1; i<2000; i++){
    array.push({
      id:i,
      text: `할 일 ${i}`,
      checked : false
    });
  }
  return array;
}



const App = ()=>{
                                      //함수가 아닌 파라미터로 넘겨주면 처음렌더링 될 때만 함수가 실행된다
  const [todos, setTodos] = useState(createBulkTodos);

//고유값으로 사용될 id
//ref를 사용하여 변수 담기
const nextId = useRef(1);

//추가
const onInsert = useCallback(
  text =>{
    const todo = {
      id : nextId.current,
      text,
      checked : false,
    };
    setTodos(todos=>todos.concat(todo));
    nextId.current += 1;
  },
  [],

);

//삭제
const onRemove = useCallback(e=>{

  setTodos(todos=>todos.filter(todo=> todo.id !== e));
  
},[]);


//수정
const onToggle = useCallback(id=>{
  //map함수는 배열을 전체적으로 새로운 형태로 변환하여 새로운 배열을 생성
  setTodos(todos=>todos.map(todo=>todo.id === id ? {...todo, checked : !todo.checked } : todo,))

},[]);

  return <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>


}

export default App;
