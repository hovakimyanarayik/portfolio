import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return ( 
        <NavBarWrapper>
            <StyledLink to='/'>Greeting</StyledLink>
            <StyledLink to='/about'>About</StyledLink>
        </NavBarWrapper> 
    );
}

const NavBarWrapper = styled.nav`
    padding: 1rem;
    border: 1px solid var(--colors-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: var(--shadow);
    background-color: var(--colors-bg);

`
const StyledLink = styled(NavLink)`
    color: var(--colors-text);
    text-decoration: none;
    text-shadow: var(--shadow);
    &:hover {
        text-decoration: underline;
    }
`
 
export default NavBar;