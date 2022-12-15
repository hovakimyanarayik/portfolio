import React from 'react';
import { useSelector } from 'react-redux';
import ProjectsGrid from '../../../../components/ProjectsGrid'
import mockData from '../../../../mock/MOCK_DATA.json'
import AllProjectsButton from './components/AllProjectsButton';


const ProjectsSection = () => {
    const {projects} = useSelector(store => store.projects)
    return (
        <>
            <ProjectsGrid data={projects} />
        </>
    );
}

export default ProjectsSection;