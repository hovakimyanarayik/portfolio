import React from 'react';
import styled from 'styled-components';


const GreetingHeader = () => {
    return ( 
        <StyledHeader className='animate__animated animate__slideInDown'>
            <StyledHeaderContent>Welcome</StyledHeaderContent>
        </StyledHeader>
     );
}

const StyledHeader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledHeaderContent = styled.h1`
    font-size: var(--fs-xlg);
    text-shadow: var(--shadow);
`

 
export default GreetingHeader;