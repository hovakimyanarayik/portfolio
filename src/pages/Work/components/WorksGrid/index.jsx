import React from 'react';
import styled from 'styled-components';
import WorkItem from '../WorkItem';


const WorksGrid = ({data}) => {
    return ( 
        <Grid id='works' data={data}>
            {data.map(item => (
                <WorkItem key={item.id} {...item} />
            ))}
        </Grid>
     );
}

const Grid = styled.div`
    width: 100%;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    gap: 10px;
`
 
export default WorksGrid;