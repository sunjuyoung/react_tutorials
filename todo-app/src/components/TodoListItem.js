import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames';

const TodoListItem = ({todos})=>{

    const {text,checked} = todos;


    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>

        </div>

    );
}

export default TodoListItem;