import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import TaskSelect from '../tasks-select';
import SummaryTasks from '../summary-tasks';

import "./app.css"

const App = () => {
    const todoData = [
        {
            id: 0,
            label : 'test',
            important : false
        },
        {
            id: 1,
            label : 'test1',
            important : true
        },
        {
            id: 2,
            label : 'test2',
            important : false
        },
    ];

    return (
        <div className="app container">
            <div className="row"> 
                <AppHeader addedClass = "col"/>
                <SummaryTasks addedClass ="col" todoTasksCount = {3} doneTasksCount ={1}/>
            </div>
            <div className="row">
                <SearchPanel addedClass = "col"/>
                <TaskSelect addedClass = "col"/>
            </div>
            <TodoList todoData = {todoData}/>
        </div>
    );
}

export default App;