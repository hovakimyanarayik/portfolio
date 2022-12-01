import React from 'react';
import useElementOnScreen from '../../../../../../../../hooks/useElementOnScreen';
import styled from 'styled-components';
import ProjectCover from './components/ProjectCover';



const ProjectItem = ({id, name}) => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0
    })

    function getClass(isOnScreen, id) {
        return isOnScreen ? `animate__animated animate__${id % 2 ? 'fadeInLeft' : 'fadeInRight'}` : ''
    }

    return ( 
        <StyledWorkCard 
            ref={ref}
            className={getClass(isOnScreen, id)}
        >
            <ProjectCover title={name} />
        </StyledWorkCard>
     );
}



const StyledWorkCard = styled.div`
    background-image: url(https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/cover/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg);
    background-position: center;
    background-size: cover;
    &:hover .work-cover {
        opacity: 1;
        cursor: pointer;
    }
`
 
export default ProjectItem;