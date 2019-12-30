import React, { Component } from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {
    state = {
        enteredText: ""
    }

    onTextEntered = (event) => {
        this.setState({
            enteredText: event.target.value
        })

        this.props.onTextEntered(event.target.value)
    }

    render() {
        const { enteredText } = this.state;
        const { addedClass } = this.props;
        const className = "search-panel " + addedClass;
        
        return (
            <input placeholder="search" className={className} value={enteredText} onChange={this.onTextEntered} />
        );
    }
}