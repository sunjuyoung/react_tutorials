import React,{useCallback} from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';


//map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 주어야한다

const TodoList = ({todos,onRemove,onToggle})=>{



    return (
        <div className="TodoList">
            {todos.map(todos => (
                <TodoListItem todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>

    );
}

export default React.memo(TodoList);