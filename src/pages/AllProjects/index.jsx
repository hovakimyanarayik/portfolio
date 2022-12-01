import React from 'react';
import mockData from '../../mock/MOCK_DATA.json'
import ProjectsGrid from '../Greeting/components/ProjectsSection/components/ProjectsGrid';

const AllProjects = () => {
    return ( 
        <ProjectsGrid data={mockData}  />
     );
}
 
export default AllProjects;