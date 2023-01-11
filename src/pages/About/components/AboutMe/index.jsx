import styled from "styled-components";
import useElementOnScreen from "../../../../hooks/useElementOnScreen";
import { FaSpaceShuttle } from 'react-icons/fa'

const about = [
    'Experienced  Front-End Developer based in Yerevan, Armenia.',
    'Continues to be actively educated.',
    'Bachelor degree as Engineer in National Polytechnical Univercity of Armenia.',
    'Fluent with English and Russian.',
    'Team gamer.',
    'In Love with Programming.'
]


const AboutMe = () => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0.3
    })
    return ( 
        <AboutMeWrapper ref={ref}>
            <ul className={isOnScreen ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutRight'}>
                {about.map((txt, idx) => <li key={idx}> <FaSpaceShuttle /> {txt}</li>)}
            </ul>
        </AboutMeWrapper>
     );
}

const AboutMeWrapper = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    display: flex;
    justify-content: flex-end;

    & > ul {
        max-width: 400px;
        font-size: var(--fs-md);
        text-shadow: var(--shadow);
        list-style: none;
        
        li {
            margin-top: 1rem;
        }
    }

    @media (max-width: 650px) {
        & > ul {
            max-width: none;
        }
    }
`

// const AboutList =styled.ul`
//     max-width: 400px;
//     font-size: var(--fs-md);
//     text-shadow: var(--shadow);
//     list-style: none;
// `


export default AboutMe;