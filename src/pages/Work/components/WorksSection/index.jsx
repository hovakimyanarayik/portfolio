import React from 'react';
import { usePagination } from '../../../../hooks/usePagination';
import mockData from '../../../../mock/MOCK_DATA.json'
import WorksGrid from '../WorksGrid';
import Pagination from '../Pagination';
import NamesList from '../../../../features/names/Names';


const WorksSection = () => {
    const {currentPage, pageSize, onPageChange, chunkedData} = usePagination(mockData)
    return (
        <>
            <NamesList />
            <WorksGrid data={chunkedData} />
            <Pagination 
                total={mockData.length} 
                currentPage={currentPage} 
                onChange={onPageChange}
                pageSize={pageSize}
            />
        </>
    );
}

export default WorksSection;