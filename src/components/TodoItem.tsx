import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div style={{ padding: '10px', margin: '0 0 1px 0', border: '1px solid red' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => console.log('he)')} />
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem;