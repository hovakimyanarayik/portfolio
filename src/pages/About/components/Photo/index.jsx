import React from 'react';
import styled from 'styled-components';
import useElementOnScreen from '../../../../hooks/useElementOnScreen';


const Photo = () => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0
    })
    return ( 
        <CustomImage 
            ref={ref}
            className={`animate__animated animate__${isOnScreen ? 'fadeInRight' : 'fadeOutRight'}`}
            src='https://avatars.githubusercontent.com/u/114814962?v=4' 
            alt='my-photo'
        />
    );
}


const CustomImage = styled.img`
    grid-row: 2/ 3;
    grid-column: 2 / 3;
    width: 80%;
    border-radius: var(--radius);
    box-shadow: var(--shadow);

    @media (max-width: 650px) {
        grid-column: 1 / 2;
        justify-self: center;
    }
`;
 
export default Photo;