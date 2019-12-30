import React, { Component } from 'react';
import "./tasks-select";

export default class TaskSelect extends Component{
    state = {
        highlightedType: ""
    }

    setHighlightType = (typeName) => {
        this.setState({
            highlightedType: typeName
        });
    }

    types = [
        {
            name: "All",
            showOnlyActive: false,
            showOnlyDone: false
        },
        {
            name: "Active",
            showOnlyActive: true,
            showOnlyDone: false
        },
        {
            name: "Done",
            showOnlyActive: false,
            showOnlyDone: true
        }
    ];

    render(){
        const { addedClass, onSelected } = this.props;
        const { highlightedType } = this.state;

        const elements = this.types.map((type) => {
            let classes = "btn btn-light"
            if (highlightedType === type.name)
                classes += " border border-info" 

            return (
                <button type="button" key={type.name} className={classes} onClick={() => {
                    this.setHighlightType(type.name);
                    onSelected(type.showOnlyActive, type.showOnlyDone);
                }}>{type.name}</button>
            )
        });
    
        const className = addedClass + " container tasks-select";
        return (
            <div className={className}>
                {elements}
            </div>
        );
    }
}