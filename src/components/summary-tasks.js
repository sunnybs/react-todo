import React from 'react';
import "./summary-tasks.css"

const SummaryTasks = ({todoTasksCount, doneTasksCount, addedClass}) => {
    var className =  addedClass + " summary-tasks";
    return(
    <span className={className}>
        {todoTasksCount} more to do. {doneTasksCount} done!
    </span>
    ) 
}

export default SummaryTasks;