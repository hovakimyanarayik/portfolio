import styled from "styled-components";
import { VerticalDivider } from "../../../VerticalDivider";
import NavBar from "./components/NavBar";

const LayoutRightSide = () => {
    return ( 
        <RightSideWrapper>
            <NavBar />
            <VerticalDivider />
        </RightSideWrapper>
     );
}

const RightSideWrapper = styled.div`
    position: fixed;
    right: 1vw;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 1000;

    @media (max-width: 650px) {
        align-items: flex-end;
        padding-right: 10px;
    }
`
 
export default LayoutRightSide;