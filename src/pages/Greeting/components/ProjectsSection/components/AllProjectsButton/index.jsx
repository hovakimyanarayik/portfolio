import { Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


const AllProjectsButton = () => {
    return ( 
        <div>
            <Link to='allProjects'>
                <Typography.Title level={3}>See All</Typography.Title>
            </Link>
        </div>
     );
}
 
export default AllProjectsButton;