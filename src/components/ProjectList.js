import React, { Component } from "react";

function ProjectList(props) {
    const {category} = props;

    return <div className="contenerImage">
              {category.map(o => 
                <img key={o.key} src={o.img}/>
                
                )}
              
          </div>;
} 
export default ProjectList;