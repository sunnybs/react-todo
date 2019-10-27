import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import TaskSelect from './components/tasks-select';
import SummaryTasks from './components/summary-tasks';

import "./app.css";

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
                <AppHeader addedClass = "col-7"/>
                <SummaryTasks addedClass ="col-5" todoTasksCount = {3} doneTasksCount ={1}/>
            </div>
            <div className="row">
                <SearchPanel addedClass = "col-7"/>
                <TaskSelect addedClass = "col-5"/>
            </div>
            <TodoList todoData = {todoData}/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));