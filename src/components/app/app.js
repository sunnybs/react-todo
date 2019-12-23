import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import TaskSelect from '../tasks-select';
import SummaryTasks from '../summary-tasks';
import "./app.css"
import NewTaskInput from '../new-task-input';
import { throwStatement } from '../../../node_modules/@babel/types';

export default class App extends Component {
    todoData = [
        {
            id: 0,
            label : 'Make coffee',
            currentState: {
                done: false,
                important: false
            }
        },
        {
            id: 1,
            label : 'Drink coffee',
            currentState: {
                done: false,
                important: false
            }
        },
        {
            id: 2,
            label : 'Sleep',
            currentState: {
                done: false,
                important: false
            }
        },
    ];

    state = {
        currentData: this.todoData
    }

    addData = (insertElement) => {
        this.setState((state) => {
            const currentId = Math.max(state.currentData.map(task => task.id)) + 1
            console.log(currentId)
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
        var currentTask =  this.todoData.find(task => task.id === id)
        currentTask.currentState.important = !currentTask.currentState.important
        this.changeData(currentTask)
    }

    toggleDone = (id) => {
        var currentTask =  this.todoData.find(task => task.id === id)
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

    render(){
        return (
            <div className="app container">
                <div className="row"> 
                    <AppHeader addedClass = "col"/>
                    <SummaryTasks addedClass ="col" todoTasksCount = {this.getUndoneTasksCount()} doneTasksCount ={this.getDoneTasksCount()}/>
                </div>
                <div className="row">
                    <SearchPanel addedClass = "col"/>
                    <TaskSelect addedClass = "col"/>
                </div>
                <TodoList todoData = {this.state.currentData} onDeleted = {this.deleteData} onToggleDone={this.toggleDone} onToggleImportant={this.toggleImportant}/>
                <NewTaskInput onCreated={this.addData}/>
            </div>
        );
    }
}
