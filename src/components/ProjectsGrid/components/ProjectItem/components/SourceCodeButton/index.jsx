import styled from "styled-components";
import { BsCodeSlash } from 'react-icons/bs'

const SourceCodeButton = ({url}) => {
    return ( 
        <StyledSourceCoudeButton
            onClick={(e) => {
                e.stopPropagation()
                window.open(url, '_blank')
            }}
        > 
            <BsCodeSlash size={20} /> 
            Source Code
        </StyledSourceCoudeButton>
     );
}

const StyledSourceCoudeButton = styled.p`
    font-size: var(--fs-sm);
    color: white;
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        text-decoration: underline;
    }
`
 
export default SourceCodeButton;