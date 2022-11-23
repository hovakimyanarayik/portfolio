import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {add} from '../../../../features/names/namesSlice'


const WorkItem = ({id, name, sourceCode, demoUrl, thumbnail}) => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return ( 
        <div onClick={() => {
            dispatch(add(name))
        }}>
            <h1>{count}</h1>
            <p>{id}</p>
            <p>{name}</p>
            <a href={sourceCode}>SourceCode</a>
            <a href={demoUrl}>DemoUrl</a>
            <img src={thumbnail} alt="" />
        </div>
     );
}
 
export default WorkItem;