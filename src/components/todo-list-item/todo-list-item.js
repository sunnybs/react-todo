import React, { Component } from 'react';
import "./todo-list-item.css";

export default class TodoListItem extends Component {
    state = this.props.currentState

    toggleImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    toggleDone = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    changeState = (changeStateCallback) => {
        changeStateCallback();
        const currentTask = {
            id: this.props.id,
            label: this.props.label,
            currentState: this.state
        }

        this.props.onChanged(currentTask)
    }

    render() {
        const { label, id, onDeleted } = this.props
        const { important, done } = this.state

        let classes = "list-group-item todo-list-item mb-2"
        if (important)
            classes += " important"
        if (done)
            classes += " done"

        return (
        <div className={classes}>
            <div className="row">
                <div className="col-9 mt-auto" onClick={() => {this.changeState(this.toggleDone)}}>
                    <h5>{label}</h5>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-light" onClick={() => {this.changeState(this.toggleImportant)}}><i className="fas fa-exclamation"></i></button>
                    <button type="button" className="btn btn-light" onClick={() => {onDeleted(id)}}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>)
    }
}