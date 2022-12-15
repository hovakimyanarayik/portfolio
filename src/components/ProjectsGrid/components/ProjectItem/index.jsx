import React from 'react';
import styled from 'styled-components';
import ProjectCover from './components/ProjectCover';
import useElementOnScreen from '../../../../hooks/useElementOnScreen'



const ProjectItem = ({index, name, thumbnail, srcCodeUrl, demoUrl}) => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0
    })

    function openDemo() {
        window.open(demoUrl, '_blank')
    }

    function getClass(isOnScreen, index) {
        return isOnScreen ? `animate__animated animate__${index % 2 ? 'fadeInRight' : 'fadeInLeft'}` : ''
    }
    return (    
        <StyledProjectCard 
            ref={ref}
            className={getClass(isOnScreen, index)}
            url={thumbnail}
            onClick={openDemo}
        >
            <ProjectCover name={name} srcCodeUrl={srcCodeUrl} />
        </StyledProjectCard>
     );
}



const StyledProjectCard = styled.div`
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    box-shadow: var(--shadow);
    &:hover {
        .project-cover {
            opacity: 1;
            cursor: pointer;
        }
    }


`
 
export default ProjectItem;