import React from 'react';
import { Anchor, Divider } from 'antd';
import styled from 'styled-components';
const { Link } = Anchor;


const Anchors = () => {
    return ( 
            <AnchorsWrapper 
                targetOffset={100}
            >
                <Link href='#title' title="Title" />
                <CustomDivider />
                <Link href='#works' title="Works" />
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
 
export default Anchors;