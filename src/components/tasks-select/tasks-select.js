import React from 'react';
import "./tasks-select";

const TaskSelect = ({addedClass}) => {

    const types = ["All", "Active", "Done"];
    const elements = types.map((type, index) => {
        return (
            <button type="button" class="btn btn-light">{type}</button>
        )
    });

    const className = addedClass + " container tasks-select";
    return (
        <div className={className}>
            {elements}
        </div>    
    );
}

export default TaskSelect;