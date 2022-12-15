import styled from "styled-components";

const Footer = () => {
    return ( 
        <StyledFooter>
            Arayik Hovakimyan
        </StyledFooter>
     );
}

const StyledFooter = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
 
export default Footer;