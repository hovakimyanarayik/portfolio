import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';


const GreetingHeader = () => {
    return ( 
        <CustomImage 
            id='title'
            className='animate__animated animate__fadeIn'
            width='100%'
            preview={false}
            src="https://thumbs.dreamstime.com/b/hi-there-inscription-handwritten-lettering-illustration-black-vector-text-speech-bubble-simple-outline-marker-style-hi-there-194142459.jpg"  
        />
     );
}

const CustomImage = styled(Image)`
    border-radius: 20px;
    overflow: hidden;
`
 
export default GreetingHeader;