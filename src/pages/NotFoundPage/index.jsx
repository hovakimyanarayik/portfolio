import styled from "styled-components";

const NotFoundPage = () => {
    return ( 
        <NotFoundPageWrapper>
            <h1>Oops... Page not found.</h1>
        </NotFoundPageWrapper>
     );
}
 
const NotFoundPageWrapper = styled.div`
    height: 80vh;
    padding: 5rem;

    & > h1 {
        font-size: var(--fs-lg);
    }
`

export default NotFoundPage;