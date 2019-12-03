import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames';

const TodoListItem = ({todos,onRemove,onToggle})=>{

    const {id,text,checked} = todos;


    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>

        </div>

    );
}
// 이 컴포넌트는 todos,onRemove,onToggle 바뀌지 않으면 리렌더링하지 않는다 
export default React.memo(TodoListItem);