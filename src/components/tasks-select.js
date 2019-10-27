import React from 'react';
import "./tasks-select";

const TaskSelect = ({addedClass}) => {

    const types = ["All", "Active", "Done"];
    const elements = types.map((type, index) => {
        var id = "selected-tasks" + index;
        return (
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id={id} name="selected-tasks" className="custom-control-input"/>
                <label className="custom-control-label" for={id}>{type}</label>
            </div>
        )
    });

    const className = addedClass + " tasks-select";
    return (
        <div className={className}>
            {elements}
        </div>    
    );
}

export default TaskSelect;