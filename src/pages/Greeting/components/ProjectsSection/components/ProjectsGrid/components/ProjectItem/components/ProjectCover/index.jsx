import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Title: ProjectTitle } = Typography

const ProjectCover = ({ title }) => {
    return ( 
        <StyledProjectCover className='work-cover'>
            <ProjectTitle style={{color: 'white'}}>{title}</ProjectTitle>
        </StyledProjectCover>
     );
}

const StyledProjectCover = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, .7);
    transition: .6s;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default ProjectCover;