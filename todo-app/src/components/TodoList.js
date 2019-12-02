import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';


//map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 주어야한다

const TodoList = ({todos})=>{
    return (
        <div className="TodoList">
            {todos.map(todos => (
                <TodoListItem todos={todos} key={todos.id} />
            ))}
        </div>

    );
}

export default TodoList;