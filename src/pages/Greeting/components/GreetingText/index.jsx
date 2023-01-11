import React from 'react';
import styled from 'styled-components';
import useElementOnScreen from '../../../../hooks/useElementOnScreen';


const GreetingText = () => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0.3
    })
    return ( 
        <div
            ref={ref} 
        >
            <CustomParagraph 
                className={isOnScreen ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutRight'}
            >
                I'm Arayik Hovakimyan, a Front-End Developer based in Yerevan.
                <br />
                Now I am exploring Back-End programming languages and tools like NodeJS, ExpressJS etc.
                I will become a Full-Stack Developer in the near future.
                <br />
                I describe myself as a passionate developer who loves coding, open source, and the web platform.
                <br />
                Aside from my job, I like to create and contribute to open source projects. 
                That helps me to learn a ton of new stuff, grow as a developer and support other open source projects.
            </CustomParagraph>
        </div>
     );
}

const CustomParagraph = styled.p`
    max-width: 550px;
    text-align: center;
    font-size: var(--fs-lg);
    font-weight: var(--fw-normal);
    letter-spacing: 0.5px;
    margin: 100px 0;
    color: var(--colors-text);
    text-shadow: var(--shadow);
`
 
export default GreetingText;