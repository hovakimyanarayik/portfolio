import styled from "styled-components";
import Footer from "./components/Footer";
import LayoutLeftSide from "./components/LayoutLeftSide";
import LayoutRightSide from "./components/LayoutRightSide";


const Layout = ({ children }) => {
    return ( 
        <LayoutWrapper>
            <LayoutLeftSide />
            {children}
            <LayoutRightSide />
            <Footer />
        </LayoutWrapper>
     );
}

const LayoutWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export default Layout;