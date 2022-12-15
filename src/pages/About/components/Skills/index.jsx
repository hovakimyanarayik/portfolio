import styled from "styled-components";
import useElementOnScreen from "../../../../hooks/useElementOnScreen";
import skillsList from "./skillsList";



const Skills = () => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0
    })
    return ( 
        <SkillsWrapper 
            className={isOnScreen ? 'animate__animated animate__fadeInRight' : ''}
        >
            <h1 ref={ref} >Proffesional Skills</h1>
            <ul>
                {skillsList.map(skill => (
                    <li key={skill.title}>{skill.icon} {skill.title}</li>
                ))}
            </ul>
        </SkillsWrapper>
     );
}

const SkillsWrapper = styled.div`
    grid-row: 4 / 5;
    grid-column: 2 / 3;

    & > h1 {
        font-size: var(--fs-lg);
    }

    & > ul > li {
        list-style: none;
        font-size: var(--fs-md);
        margin-top: .4rem;
    }

    @media (max-width: 650px) {
        grid-column: 1 / 2;
        justify-self: center;
    }
`
 
export default Skills;