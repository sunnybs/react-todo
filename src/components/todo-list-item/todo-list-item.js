import React, { Component } from 'react';
import "./todo-list-item.css";

export default class TodoListItem extends Component {

    render() {
        const { label, id, currentState, onDeleted, onToggleDone, onToggleImportant } = this.props
        const { important, done } = currentState

        let classes = "list-group-item todo-list-item mb-2"
        if (important)
            classes += " important"
        if (done)
            classes += " done"

        return (
        <div className={classes}>
            <div className="row">
                <div className="col-9 mt-auto" onClick={() => {onToggleDone(id)}}>
                    <h5>{label}</h5>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-light" onClick={() => {onToggleImportant(id)}}><i className="fas fa-exclamation"></i></button>
                    <button type="button" className="btn btn-light" onClick={() => {onDeleted(id)}}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>)
    }
}