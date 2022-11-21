import { Anchor, Divider } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const {Link} = Anchor

const NavBar = () => {
    return ( 
        <AnchorsWrapper>
            <Link>
                <NavLink to='/'>Work</NavLink>
            </Link>
            <CustomDivider />
            <Link>
                <NavLink to='/about'>About</NavLink>
            </Link>
            
        </AnchorsWrapper>
     );
}

const CustomDivider = styled(Divider)`
    margin: 0;
`

const AnchorsWrapper = styled(Anchor)`
    width: 100px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid lightgray;
`
 
export default NavBar;