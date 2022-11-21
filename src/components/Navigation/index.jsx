import React from 'react';
import styled from 'styled-components';
import Anchors from '../Anchor';
import NavBar from '../Navbar';


const Navigation = () => {
    return ( 
        <NavigationWrapper>
            <Anchors />
            <NavBar />
        </NavigationWrapper>
     );
}


const NavigationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 100px;
`
 
export default Navigation;