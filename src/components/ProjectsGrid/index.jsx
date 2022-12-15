import React from 'react';
import styled from 'styled-components';
import ProjectItem from './components/ProjectItem';


const ProjectsGrid = ({data}) => {
    return ( 
        <Grid data={data}>
            {data.map((item, idx) => (
                <ProjectItem key={item.id} index={idx}  {...item} />
            ))}
        </Grid>
     );
}

const Grid = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 35vh;
    
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`
 
export default ProjectsGrid;