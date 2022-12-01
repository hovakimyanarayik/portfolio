import React from 'react';
import { usePagination } from '../../../../hooks/usePagination';
import mockData from '../../../../mock/MOCK_DATA.json'
import AllProjectsButton from './components/AllProjectsButton';
import Pagination from './components/Pagination';
import ProjectsGrid from './components/ProjectsGrid';


const ProjectsSection = () => {
    // const {currentPage, pageSize, onPageChange, chunkedData} = usePagination(mockData)
    return (
        <>
            <ProjectsGrid data={mockData.slice(0, 6)} />
            <AllProjectsButton />
            {/* <Pagination 
                total={mockData.length} 
                currentPage={currentPage} 
                onChange={onPageChange}
                pageSize={pageSize}
            /> */}
        </>
    );
}

export default ProjectsSection;