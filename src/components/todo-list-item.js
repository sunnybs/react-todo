import React from 'react';
import "./todo-list-item.css";

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black'
    }
    return (<div style={style} className="list-group-item todo-list-item">
        <div className="row">
            <div className="col-9">
                {label}
            </div>
            <div className="col-3">
                <button type="button" class="btn btn-light"><i class="fas fa-exclamation"></i></button>
                <button type="button" class="btn btn-light"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        
        
    </div>)
}

export default TodoListItem;