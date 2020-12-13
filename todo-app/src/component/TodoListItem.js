import React from 'react';
import './TodoListItem.css';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => { // props 로 통째로 전달해야 최적화 할 때 편리
    const { id, text, checked } = todo;

    return (

        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div >
    );
};

export default TodoListItem;