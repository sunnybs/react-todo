import React from 'react';
import "./app-header.css";

const AppHeader = ({addedClass}) => {
    const className = addedClass + " app-header";
    return (
        <h1 className={className}>Todo List</h1>
    );
}

export default AppHeader;