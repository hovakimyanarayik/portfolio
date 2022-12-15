import React, { useEffect } from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import Connect from './components/Connect';
import Introducion from './components/Introducion';
import Photo from './components/Photo';
import Skills from './components/Skills';

const About = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
          document.title = 'About'
    }, [])

    return ( 
        <PageWrapper>
            <Introducion />
            <Photo />
            <AboutMe />
            <Skills />
            <Connect />
        </PageWrapper>
    );
}


const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    margin-top: 50px;
    gap: 2rem;
    padding: 1rem;

    @media (max-width: 650px) {
        justify-content: center;
        grid-template-columns: 1fr;
    }
`
 
export default About;