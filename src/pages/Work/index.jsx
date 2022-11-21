import React from 'react';
import { Image, Typography } from 'antd';
import styled from 'styled-components';
import WorksSection from './components/WorksSection';

const { Paragraph } = Typography

const Work = () => {
    return ( 
        <InfoContainer>
            <CustomImage 
                id='title'
                preview={false}
                src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-outline-marker-style-hi-there-194142459.jpg"  
            />
            <CustomParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero modi quasi distinctio expedita temporibus nostrum! Nobis minus fuga eum?
            </CustomParagraph>
            <WorksSection />
        </InfoContainer>
     );
}

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
`

const CustomImage = styled(Image)`
    border-radius: 20px;
    overflow: hidden;
`

const CustomParagraph = styled(Paragraph)`
    max-width: 400px;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 100px 0;
`
 
export default Work;