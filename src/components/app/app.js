import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import TaskSelect from '../tasks-select';
import SummaryTasks from '../summary-tasks';
import "./app.css"
import NewTaskInput from '../new-task-input';

export default class App extends Component {
    todoData = [
        {
            id: 0,
            label: 'Make coffee',
            currentState: {
                done: false,
                important: false
            }
        },
        {
            id: 1,
            label: 'Drink coffee',
            currentState: {
                done: false,
                important: false
            }
        },
        {
            id: 2,
            label: 'Sleep',
            currentState: {
                done: false,
                important: false
            }
        },
    ];

    state = {
        currentData: this.todoData,
        searchRequest: "",
        showOnlyActive: false,
        showOnlyDone: false
    }

    addData = (insertElement) => {
        this.setState((state) => {
            const ids = state.currentData.map(task => task.id);
            const currentId = ids.length !== 0 ? 
                Math.max.apply(null, state.currentData.map(task => task.id)) + 1 : 0
            insertElement.id = currentId
            const updatedState = [...state.currentData, insertElement]
            return {
                currentData: updatedState
            }
        })
    }

    deleteData = (id) => {
        this.setState((state) => {
            const updatedState = state.currentData.filter(task => task.id !== id)
            return {
                currentData: updatedState
            }
        })
    }

    toggleImportant = (id) => {
        var currentTask = this.state.currentData.find(task => task.id === id)
        currentTask.currentState.important = !currentTask.currentState.important
        this.changeData(currentTask)
    }

    toggleDone = (id) => {
        var currentTask = this.state.currentData.find(task => task.id === id)
        currentTask.currentState.done = !currentTask.currentState.done
        this.changeData(currentTask)
    }

    changeData = (changedTask) => {
        this.setState((state) => {
            let leftElements = []
            let rightElements = []
            state.currentData.forEach(element => {
                if (element.id < changedTask.id)
                    leftElements.push(element)
                if (element.id > changedTask.id)
                    rightElements.push(element)
            });

            const updatedState = [...leftElements, changedTask, ...rightElements]

            return {
                currentData: updatedState
            }
        })
    }

    getDoneTasksCount = () => {
        return this.state.currentData.filter(item => item.currentState.done).length
    }

    getUndoneTasksCount = () => {
        return this.state.currentData.filter(item => !item.currentState.done).length
    }

    setTasksSelectType = (showOnlyActive, showOnlyDone) => {
        this.setState({
            showOnlyActive: showOnlyActive,
            showOnlyDone: showOnlyDone
        });
    }

    setTasksSearchRequest = (searchRequest) => {
        this.setState({
            searchRequest: searchRequest
        });
    }

    render() {
        const { searchRequest, showOnlyActive, showOnlyDone, currentData } = this.state;
        let dataToRender = currentData.filter(task => task.label.toLowerCase().includes(searchRequest.toLowerCase()));
        if (showOnlyActive)
            dataToRender = dataToRender.filter(task => !task.currentState.done)

        if (showOnlyDone)
            dataToRender = dataToRender.filter(task => task.currentState.done)

        return (
            <div className="app container">
                <div className="row">
                    <AppHeader addedClass="col" />
                    <SummaryTasks addedClass="col" todoTasksCount={this.getUndoneTasksCount()} doneTasksCount={this.getDoneTasksCount()} />
                </div>
                <div className="row">
                    <SearchPanel addedClass="col" onTextEntered={this.setTasksSearchRequest}/>
                    <TaskSelect addedClass="col" onSelected={this.setTasksSelectType}/>
                </div>
                <TodoList todoData={dataToRender} onDeleted={this.deleteData} onToggleDone={this.toggleDone} onToggleImportant={this.toggleImportant} />
                <NewTaskInput onCreated={this.addData} />
            </div>
        );
    }
}
