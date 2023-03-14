import React, { Component } from "react";
function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;
      
    return <div className="contenerBut">
                    <button onClick={() => { onSelectFilter(filters[0]) }}>all</button>
                    <button onClick={() => { onSelectFilter(filters[1]) }}>websites</button>
                    <button onClick={() => { onSelectFilter(filters[2]) }}>flayers</button>
                    <button onClick={() => { onSelectFilter(filters[3]) }} >business Cards</button>
             </div>;
}

export default Toolbar;

