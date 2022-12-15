import React from 'react';
import styled from 'styled-components';
import useElementOnScreen from '../../../../hooks/useElementOnScreen';

const Introducion = () => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0.4
    })
    return ( 
        <IntrodusionWrapper ref={ref} >
            <p 
                className={`animate__animated animate__${isOnScreen ? 'fadeInLeft' : 'fadeOutLeft'}`}
            >
                Hello, it's Arayik here
            </p>
        </IntrodusionWrapper>
     );
}

const IntrodusionWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    justify-content: flex-end;

    & > p {
        max-width: 200px;
        font-size: var(--fs-xlg);
        font-weight: var(--fw-bold);
        line-height: 100px;
    }

    @media (max-width: 650px) {
        justify-content: center;
        & > p {
            line-height: 80px;
        }
    }

`
 
export default Introducion;