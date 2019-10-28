import React from 'react';
import TodoListItem from '../todo-list-item';
import "./todo-list.css";

const TodoList = ({todoData}) => {
    const elements = todoData.map((item) => {
        return (
            <li key={item.id}>
                <TodoListItem {...item}/>
            </li>
        );
    });

    return <ul className="list-group todo-list">
        { elements }
    </ul>;
}

export default TodoList;