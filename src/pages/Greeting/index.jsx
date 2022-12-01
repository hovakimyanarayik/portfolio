import React from 'react';
import styled from 'styled-components';
import GreetingText from './components/GreetingText';
import GreetingHeader from './components/GreetingHeader';
import ProjectsSection from './components/ProjectsSection';

const Greeting = () => {
    return ( 
        <InfoContainer>
            <GreetingHeader />
            <GreetingText />
            <ProjectsSection />
        </InfoContainer>
     );
}

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
`

 
export default Greeting;