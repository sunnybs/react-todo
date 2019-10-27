import React from 'react';
import "./search-panel.css";

const SearchPanel = ({addedClass}) => {
    const className = "search-panel " + addedClass;
    return (
        <input placeholder="search" className={className}/>
    );
}

export default SearchPanel;