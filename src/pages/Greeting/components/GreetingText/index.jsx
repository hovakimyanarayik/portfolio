import Paragraph from 'antd/es/typography/Paragraph';
import React from 'react';
import styled from 'styled-components';
import useElementOnScreen from '../../../../hooks/useElementOnScreen';


const GreetingText = () => {
    const [ref, isOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:0.5
    })

    return ( 
        <CustomParagraph 
            ref={ref} 
            className={isOnScreen ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutRight'}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero modi quasi distinctio expedita temporibus nostrum! Nobis minus fuga eum?
        </CustomParagraph>
     );
}

const CustomParagraph = styled(Paragraph)`
    max-width: 400px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 100px 0;
`
 
export default GreetingText;