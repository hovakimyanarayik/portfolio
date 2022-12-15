import { MailOutlined } from "@ant-design/icons";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons/lib/icons";
import styled from "styled-components";
import { VerticalDivider } from "../../../VerticalDivider";
import ThemeToggler from "./components/ThemeToggler";

const LayoutLeftSide = () => {

    return ( 
        <LeftSideWrapper>
            <ThemeToggler />
            <VerticalDivider />
            <MailOutlined onClick={() => {
                window.location.href = 'mailto:arayik.hovakimyan.contact@gmail.com'
            }} style={{fontSize: '25px'}} />
            <LinkedinFilled onClick={() => {
                window.open('https://www.linkedin.com/in/arayik-hovakimyan-4a75a3257/', '_blank')
            }} style={{fontSize: '25px'}} />
            <GithubFilled onClick={() => {
                window.open('https://github.com/hovakimyanarayik', '_blank')
            }} style={{fontSize: '25px'}} />
            <p onClick={() => {
                window.open('https://www.cakeresume.com/aro-hovakimyan', '_blank')
            }}>CV</p>
        </LeftSideWrapper>
     );
}


const LeftSideWrapper = styled.div`
    position: fixed;
    left: 1vw;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 1000;

    & > p {
        font-weight: var(--fw-bold);
        cursor: pointer;
    }

    @media (max-width: 650px) {
        align-items: flex-start;
        padding-left: 10px;
    }
`
 
export default LayoutLeftSide;