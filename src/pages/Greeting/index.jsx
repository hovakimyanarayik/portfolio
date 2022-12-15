import React from 'react';
import styled from 'styled-components';
import GreetingText from './components/GreetingText';
import GreetingHeader from './components/GreetingHeader';
import ProjectsSection from './components/ProjectsSection';
import { useEffect } from 'react';

const Greeting = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }, [])

    return ( 
        <PageWrapper>
            <GreetingHeader />
            <GreetingText />
            <ProjectsSection />
        </PageWrapper>
     );
}

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
`

 
export default Greeting;