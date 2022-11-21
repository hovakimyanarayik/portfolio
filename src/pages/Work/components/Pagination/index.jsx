import React from 'react';
import { Pagination } from 'antd';
import { useSearchParams } from 'react-router-dom';


const WorksPagination = ({currentPage, total, onChange, pageSize}) => {
    return ( 
        <Pagination
            showSizeChanger
            pageSizeOptions={[4, 6, 8]}
            pageSize={pageSize}
            current={currentPage} 
            total={total} 
            onChange={onChange} 
        />
     );
}
 
export default WorksPagination;