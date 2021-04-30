import styled from 'styled-components'



export const FancyCardBody = styled.div`
    width: 100%;
    min-height: 100vh;

    /* Centers the container in the middle of the screen */
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    background-color: rgb(220, 220, 220);
`;

export const FancyCardContainer = styled.div`
    perspective: 40px;

`;
export const FancyCardInner = styled.div`
    width: 20em;
    height: 18em;
    background-color: white;

`;
