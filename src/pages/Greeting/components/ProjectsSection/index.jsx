import React from 'react';
import { useSelector } from 'react-redux';
import ProjectsGrid from '../../../../components/ProjectsGrid'



const ProjectsSection = () => {
    const {projects} = useSelector(store => store.projects)
    return (
        <>
            <ProjectsGrid data={projects} />
        </>
    );
}

export default ProjectsSection;