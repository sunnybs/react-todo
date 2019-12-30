import React, { Component } from 'react'

export default class NewTaskInput extends Component {
    state = {
        enteredText: ""
    }

    onTextEntered = (event) => {
        this.setState({
            enteredText: event.target.value
        })
    }

    createElement = () => {
        var newTask = {
            label: this.state.enteredText,
            currentState: {
                done: false,
                important: false
            }
        }

        this.setState({
            enteredText: ""
        })

        this.props.onCreated(newTask)
    }

    render() {
        return (
            <div className="input-group mt-3">
                <input type="text" className="form-control" value={this.state.enteredText} onChange={this.onTextEntered} placeholder="Enter new task" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.createElement}>Create!</button>
                </div>
            </div>
        );
    }
}