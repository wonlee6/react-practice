import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';


const TodoList = () => {
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;