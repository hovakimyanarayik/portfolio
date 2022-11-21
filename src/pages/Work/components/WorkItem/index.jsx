import React from 'react';


const WorkItem = ({id, name, sourceCode, demoUrl, thumbnail}) => {
    return ( 
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <a href={sourceCode}>SourceCode</a>
            <a href={demoUrl}>DemoUrl</a>
            <img src={thumbnail} alt="" />
        </div>
     );
}
 
export default WorkItem;