import React from 'react';
import styled from 'styled-components';
import SourceCodeButton from '../SourceCodeButton';


const ProjectCover = ({ name, srcCodeUrl }) => {
    return ( 
        <StyledProjectCover className='project-cover'>
            <SourceCodeButton url={srcCodeUrl} />
            <StyledTitle >{name}</StyledTitle>
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
    flex-direction: column;
    justify-content: center;
    position: relative;
`

const StyledTitle = styled.p`
    font-size: var(--fs-lg);
    font-weight: var(--fw-light);
    color: white;
    text-align: center;
`


export default ProjectCover;