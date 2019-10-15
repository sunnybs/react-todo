import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

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
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todoData = {todoData}/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));